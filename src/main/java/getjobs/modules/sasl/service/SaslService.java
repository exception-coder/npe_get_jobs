package getjobs.modules.sasl.service;

import getjobs.common.infrastructure.auth.AuthContext;
import getjobs.common.infrastructure.repository.common.*;
import getjobs.common.infrastructure.repository.service.RepositoryServiceHelper;
import getjobs.common.infrastructure.queue.service.QueueTaskService;
import getjobs.common.infrastructure.queue.contract.QueueTask;
import getjobs.common.infrastructure.queue.domain.QueueTaskConfig;
import getjobs.modules.auth.domain.User;
import getjobs.modules.sasl.domain.LeadRecord;
import getjobs.modules.sasl.domain.PlanRow;
import getjobs.modules.sasl.domain.PlanSection;
import getjobs.modules.sasl.domain.SaslImportRecord;
import getjobs.modules.sasl.domain.SaslRecord;
import getjobs.modules.sasl.domain.SaslRecordUpdateLog;
import getjobs.modules.sasl.domain.UserDocumentTitle;
import getjobs.modules.sasl.dto.DepartmentUserResponse;
import getjobs.modules.sasl.dto.DocumentTitleItem;
import getjobs.modules.sasl.dto.PlanRowRequest;
import getjobs.modules.sasl.dto.PlanSectionRequest;
import getjobs.modules.sasl.dto.PlanSectionResponse;
import getjobs.modules.sasl.dto.SaslImportRecordGroupResponse;
import getjobs.modules.sasl.dto.SaslImportRecordResponse;
import getjobs.modules.sasl.dto.SaslImportRequest;
import getjobs.modules.sasl.dto.SaslRecordResponse;
import getjobs.modules.sasl.dto.SaslUpdateResponse;
import getjobs.modules.sasl.dto.UserDocumentTitleRequest;
import getjobs.modules.sasl.dto.UserDocumentTitleResponse;
import getjobs.modules.sasl.dto.UserDocumentTitleBindingResponse;
import getjobs.modules.sasl.enums.CallStatus;
import jakarta.annotation.PostConstruct;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.transaction.support.TransactionTemplate;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * SASL 业务服务。
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class SaslService {

    private static final String MODULE_NAME = "sasl";
    private static final String AUTH_MODULE_NAME = "auth";

    private final RepositoryServiceHelper repositoryHelper;
    private final QueueTaskService queueTaskService;
    private final SaslRecordQueueTaskFactory queueTaskFactory;
    private final SaslRecordBatchService batchService;
    private final SaslRecordExcelParserService excelParserService;

    private ISaslRecordRepository<SaslRecord> recordRepository;
    private ISaslImportRecordRepository<SaslImportRecord> importRecordRepository;
    private IUserRepository<User> userRepository;
    private IUserDocumentTitleRepository<UserDocumentTitle> userDocumentTitleRepository;
    private IPlanSectionRepository<PlanSection> planSectionRepository;
    private IPlanRowRepository<PlanRow, PlanSection> planRowRepository;
    @SuppressWarnings("unused") // 保留以备将来查询 LeadRecord 使用
    private ILeadRecordRepository<LeadRecord> leadRecordRepository;
    private ISaslRecordUpdateLogRepository<getjobs.modules.sasl.domain.SaslRecordUpdateLog> updateLogRepository;

    private static final ObjectMapper objectMapper = new ObjectMapper();

    @PersistenceContext
    private EntityManager entityManager;

    /**
     * MySQL 数据源的 EntityManager，用于批量插入 LeadRecord
     */
    @PersistenceContext(unitName = "mysql")
    private EntityManager mysqlEntityManager;

    /**
     * MySQL 数据源的事务管理器，用于编程式事务管理
     */
    @Autowired
    @Qualifier("mysqlTransactionManager")
    private PlatformTransactionManager mysqlTransactionManager;

    /**
     * 初始化Repository实例
     * <p>
     * 根据配置自动选择SQLite或MySQL的Repository实现。
     * Service层使用统一接口类型，不依赖具体的数据库实现。
     * </p>
     */
    @PostConstruct
    @SuppressWarnings("unchecked")
    public void initRepositories() {
        this.recordRepository = repositoryHelper.getRepository(ISaslRecordRepository.class, MODULE_NAME);
        this.importRecordRepository = repositoryHelper.getRepository(ISaslImportRecordRepository.class, MODULE_NAME);
        this.userRepository = repositoryHelper.getRepository(IUserRepository.class, AUTH_MODULE_NAME);
        this.userDocumentTitleRepository = repositoryHelper.getRepository(IUserDocumentTitleRepository.class,
                MODULE_NAME);
        this.planSectionRepository = repositoryHelper.getRepository(IPlanSectionRepository.class, MODULE_NAME);
        this.planRowRepository = repositoryHelper.getRepository(IPlanRowRepository.class, MODULE_NAME);
        this.leadRecordRepository = repositoryHelper.getRepository(ILeadRecordRepository.class, MODULE_NAME);
        // 通过 repositoryHelper 获取 updateLogRepository，支持自动切换 SQLite/MySQL
        this.updateLogRepository = repositoryHelper.getRepository(ISaslRecordUpdateLogRepository.class, MODULE_NAME);

        if (repositoryHelper.isMySQL(MODULE_NAME)) {
            log.info("SaslService 使用 MySQL 数据源");
        } else {
            log.info("SaslService 使用 SQLite 数据源");
        }
    }

    /**
     * 从 Excel 文件导入 SASL 记录。
     *
     * @param request 导入请求（包含文档标题、描述、备注）
     * @param file    Excel 文件
     * @return 导入的记录列表
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public List<SaslRecordResponse> importFromExcel(SaslImportRequest request, MultipartFile file) {
        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("上传文件不能为空");
        }

        // 验证文档标题
        if (!StringUtils.hasText(request.documentTitle())) {
            throw new IllegalArgumentException("文档标题不能为空");
        }

        String documentTitle = request.documentTitle().trim();

        // 验证文档标题格式（只允许数字、字母、中文字符）
        if (!documentTitle.matches("^[a-zA-Z0-9\\u4e00-\\u9fa5]+$")) {
            throw new IllegalArgumentException("文档标题只能包含数字、字母和中文字符");
        }

        // 验证文档标题长度
        if (documentTitle.length() > 80) {
            throw new IllegalArgumentException("文档标题长度不能超过80个字符");
        }

        // 删除所有对应文档标题的记录（重新登记）
        recordRepository.deleteByDocumentTitle(documentTitle);

        // 使用 Excel 解析服务解析文件
        SaslRecordExcelParserService.ParseResult parseResult;
        try {
            parseResult = excelParserService.parseExcel(file, documentTitle, request);
        } catch (IOException e) {
            throw new IllegalArgumentException("解析 Excel 文件失败，请确认格式正确", e);
        }

        List<SaslRecord> records = parseResult.getRecords();

        // 在过滤前，将 records 转换为 LeadRecord 并异步批量保存到线索数据表
        submitBatchSaveLeadRecordsTask(records);

        // 过滤掉已存在的记录（基于 mrt 和 documentTitle 组合唯一索引）
        List<SaslRecord> newRecords = filterExistingRecords(records, documentTitle);

        if (newRecords.isEmpty()) {
            throw new IllegalArgumentException("所有记录已存在于数据库中，无需导入");
        }

        // 使用批量插入优化保存新记录
        List<SaslRecord> savedRecords = batchService.batchSaveToMysql(newRecords);

        // 保存导入记录
        SaslImportRecord importRecord = new SaslImportRecord();
        importRecord.setExcelFileName(file.getOriginalFilename());
        importRecord.setDocumentTitle(documentTitle);
        importRecord.setDocumentDescription(request.documentDescription());
        importRecord.setDocumentRemark(request.remark());
        importRecordRepository.save(importRecord);

        return savedRecords.stream()
                .map(SaslRecordResponse::from)
                .toList();
    }

    /**
     * 查询所有记录。
     */
    public List<SaslRecordResponse> listRecords() {
        return recordRepository.findAll()
                .stream()
                .map(SaslRecordResponse::from)
                .toList();
    }

    /**
     * 根据条件查询记录。
     *
     * @param mrt           MRT（移动电话号码），可为空
     * @param callStatus    致电状态，可为空
     * @param documentTitle 文档标题，可为空
     * @return 符合条件的记录列表（最多10条，按ID从小到大排序）
     */
    public List<SaslRecordResponse> searchRecords(String mrt, CallStatus callStatus, String documentTitle) {
        // 如果 mrt 和 callStatus 都为空，则优先查询 callStatus 为 null 的记录，如果没有再查询非 REGISTERED 状态的记录
        if (!StringUtils.hasText(mrt) && callStatus == null) {
            // 如果指定了文档标题，则优先查询该文档标题下 callStatus 为 null 的记录（按 id 排序）
            if (StringUtils.hasText(documentTitle)) {
                // 先查询 callStatus 为 null 的记录
                List<SaslRecord> records = recordRepository.findByDocumentTitleAndCallStatusIsNullOrderByIdAsc(
                        documentTitle, PageRequest.of(0, 1));
                // 如果找到了 callStatus 为 null 的记录，直接返回
                if (!records.isEmpty()) {
                    return records.stream()
                            .map(SaslRecordResponse::from)
                            .toList();
                }
                // 如果没有 callStatus 为 null 的记录，则查询非 REGISTERED 状态的记录
                records = recordRepository.findByDocumentTitleAndCallStatusIsNotRegisteredOrderByIdAsc(
                        documentTitle, CallStatus.REGISTERED, PageRequest.of(0, 1));
                return records.stream()
                        .map(SaslRecordResponse::from)
                        .toList();
            } else {
                // 如果未指定文档标题，则优先查询 callStatus 为 null 的记录
                List<SaslRecord> records = recordRepository.findFirstByCallStatusIsNullOrderByIdAsc(
                        PageRequest.of(0, 1));
                // 如果找到了 callStatus 为 null 的记录，直接返回
                if (!records.isEmpty()) {
                    return records.stream()
                            .map(SaslRecordResponse::from)
                            .toList();
                }
                // 如果没有 callStatus 为 null 的记录，则查询非 REGISTERED 状态的记录
                records = recordRepository.findFirstByCallStatusIsNotRegisteredOrderByIdAsc(
                        CallStatus.REGISTERED, PageRequest.of(0, 1));
                return records.stream()
                        .map(SaslRecordResponse::from)
                        .toList();
            }
        }

        // 如果指定了文档标题，callStatus 为空，且该文档的所有记录都有 callStatus 值（没有 null 的记录）
        // 则从第一条 callStatus 非登记状态的数据查起
        if (StringUtils.hasText(documentTitle) && callStatus == null) {
            // 检查该文档是否存在 callStatus 为 null 的记录
            boolean hasNullCallStatus = recordRepository.existsByDocumentTitleAndCallStatusIsNull(documentTitle);
            // 如果所有记录都有 callStatus 值（没有 null 的记录），则查询第一条非 REGISTERED 状态的记录
            if (!hasNullCallStatus) {
                List<SaslRecord> records = recordRepository.findByDocumentTitleAndCallStatusIsNotRegisteredOrderByIdAsc(
                        documentTitle, CallStatus.REGISTERED, PageRequest.of(0, 10));
                return records.stream()
                        .map(SaslRecordResponse::from)
                        .toList();
            }
        }

        List<SaslRecord> records = recordRepository.findByConditions(mrt, callStatus, documentTitle,
                PageRequest.of(0, 10));
        return records.stream()
                .map(SaslRecordResponse::from)
                .toList();
    }

    /**
     * 根据文档标题查询致电状态为空的前10条记录，按ID从小到大排序。
     *
     * @param documentTitle 文档标题（必填）
     * @return 符合条件的记录列表（最多10条）
     */
    public List<SaslRecordResponse> findPendingRecordsByDocumentTitle(String documentTitle) {
        Pageable pageable = PageRequest.of(0, 10);
        List<SaslRecord> records = recordRepository.findByDocumentTitleAndCallStatusIsNullOrderByIdAsc(
                documentTitle, pageable);
        return records.stream()
                .map(SaslRecordResponse::from)
                .toList();
    }

    /**
     * 获取当前用户绑定的文档标题列表。
     *
     * @return 当前用户绑定的文档标题列表
     * @throws IllegalArgumentException 如果当前用户未认证或用户不存在
     */
    public List<String> getAllDocumentTitles() {
        // 获取当前用户名
        String username = AuthContext.getUsername();
        if (!StringUtils.hasText(username)) {
            throw new IllegalArgumentException("当前用户未认证");
        }

        // 如果用户名是 admin，直接查询所有文档标题（去重）
        if ("admin".equals(username)) {
            return recordRepository.findAllDistinctDocumentTitles();
        }

        // 根据用户名查询用户ID
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new IllegalArgumentException("用户不存在，用户名: " + username));

        // 根据用户ID查询文档标题列表
        return userDocumentTitleRepository.findDocumentTitlesByUserId(user.getId());
    }

    /**
     * 根据文档标题查询所有记录。
     *
     * @param documentTitle 文档标题（必填）
     * @return 符合条件的记录列表，按ID从小到大排序
     * @throws IllegalArgumentException 如果文档标题为空
     */
    public List<SaslRecordResponse> getRecordsByDocumentTitle(String documentTitle) {
        if (!StringUtils.hasText(documentTitle)) {
            throw new IllegalArgumentException("文档标题不能为空");
        }

        List<SaslRecord> records = recordRepository.findByDocumentTitleOrderByIdAsc(documentTitle.trim());
        return records.stream()
                .map(SaslRecordResponse::from)
                .toList();
    }

    /**
     * 对 MRT 进行数据脱敏，保留前1位和后2位。
     *
     * @param mrt 原始 MRT 值
     * @return 脱敏后的 MRT 值
     */
    private String maskMrt(String mrt) {
        if (mrt == null || mrt.isEmpty()) {
            return mrt;
        }

        int length = mrt.length();
        // 如果长度小于等于3，不进行脱敏，直接返回
        if (length <= 3) {
            return mrt;
        }

        // 保留前1位和后2位，中间用 * 代替
        String firstChar = mrt.substring(0, 1);
        String lastTwoChars = mrt.substring(length - 2);
        int maskLength = length - 3; // 需要脱敏的中间部分长度
        String mask = "*".repeat(maskLength);

        return firstChar + mask + lastTwoChars;
    }

    /**
     * 根据文档标题查询所有记录（用于配置接口，mrt 字段已脱敏）。
     * 返回的记录中 mrt 字段已进行数据脱敏（保留前1位和后2位）。
     *
     * @param documentTitle 文档标题（必填）
     * @return 符合条件的记录列表，按ID从小到大排序，mrt 字段已脱敏
     * @throws IllegalArgumentException 如果文档标题为空
     */
    public List<SaslRecordResponse> getRecordsByDocumentTitleWithMaskedMrt(String documentTitle) {
        if (!StringUtils.hasText(documentTitle)) {
            throw new IllegalArgumentException("文档标题不能为空");
        }

        List<SaslRecordResponse> records = getRecordsByDocumentTitle(documentTitle.trim());

        // 对每条记录的 mrt 字段进行脱敏处理
        return records.stream()
                .map(record -> new SaslRecordResponse(
                        record.id(),
                        maskMrt(record.mrt()),
                        record.oldContract(),
                        record.sales(),
                        record.category(),
                        record.lastTurnNetworkMonth(),
                        record.documentTitle(),
                        record.documentDescription(),
                        record.excelFileName(),
                        record.callStatus(),
                        record.remark(),
                        record.lastCallTime(),
                        record.nextCallTime(),
                        record.createdAt(),
                        record.updatedAt()))
                .toList();
    }

    /**
     * 根据文档标题导出记录到 Excel 文件。
     *
     * @param documentTitle 文档标题（必填）
     * @return Excel 文件的字节数组
     * @throws IllegalArgumentException 如果文档标题为空或没有找到记录
     */
    public byte[] exportRecordsByDocumentTitle(String documentTitle) {
        if (!StringUtils.hasText(documentTitle)) {
            throw new IllegalArgumentException("文档标题不能为空");
        }

        String trimmedTitle = documentTitle.trim();

        // 查询所有记录（不脱敏，导出完整数据）
        List<SaslRecord> records = recordRepository.findByDocumentTitleOrderByIdAsc(trimmedTitle);

        if (records.isEmpty()) {
            throw new IllegalArgumentException("文档标题 \"" + trimmedTitle + "\" 不存在或没有对应的记录");
        }

        // 创建 Excel 工作簿
        try (Workbook workbook = new XSSFWorkbook()) {
            Sheet sheet = workbook.createSheet("SASL Records");

            // 创建表头样式
            CellStyle headerStyle = workbook.createCellStyle();
            Font headerFont = workbook.createFont();
            headerFont.setBold(true);
            headerStyle.setFont(headerFont);

            // 创建表头行
            Row headerRow = sheet.createRow(0);
            String[] headers = { "ID", "MRT", "Old Contract", "Sales", "Category", "Last Turn Network Month",
                    "Document Title", "Document Description", "Excel File Name", "Call Status", "Remark",
                    "Last Call Time", "Next Call Time", "Created At", "Updated At" };

            for (int i = 0; i < headers.length; i++) {
                Cell cell = headerRow.createCell(i);
                cell.setCellValue(headers[i]);
                cell.setCellStyle(headerStyle);
            }

            // 日期时间格式化器
            DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

            // 填充数据行
            int rowNum = 1;
            for (SaslRecord record : records) {
                Row row = sheet.createRow(rowNum++);
                int cellNum = 0;

                // ID
                Cell idCell = row.createCell(cellNum++);
                if (record.getId() != null) {
                    idCell.setCellValue(record.getId());
                } else {
                    idCell.setCellValue("");
                }

                // MRT
                row.createCell(cellNum++).setCellValue(record.getMrt() != null ? record.getMrt() : "");

                // Old Contract
                row.createCell(cellNum++).setCellValue(record.getOldContract() != null ? record.getOldContract() : "");

                // Sales
                row.createCell(cellNum++).setCellValue(record.getSales() != null ? record.getSales() : "");

                // Category
                row.createCell(cellNum++).setCellValue(record.getCategory() != null ? record.getCategory() : "");

                // Last Turn Network Month
                row.createCell(cellNum++).setCellValue(
                        record.getLastTurnNetworkMonth() != null ? record.getLastTurnNetworkMonth() : "");

                // Document Title
                row.createCell(cellNum++)
                        .setCellValue(record.getDocumentTitle() != null ? record.getDocumentTitle() : "");

                // Document Description
                row.createCell(cellNum++).setCellValue(
                        record.getDocumentDescription() != null ? record.getDocumentDescription() : "");

                // Excel File Name
                row.createCell(cellNum++)
                        .setCellValue(record.getExcelFileName() != null ? record.getExcelFileName() : "");

                // Call Status
                row.createCell(cellNum++)
                        .setCellValue(record.getCallStatus() != null ? record.getCallStatus().name() : "");

                // Remark
                row.createCell(cellNum++).setCellValue(record.getRemark() != null ? record.getRemark() : "");

                // Last Call Time
                row.createCell(cellNum++).setCellValue(
                        record.getLastCallTime() != null ? record.getLastCallTime().format(dateTimeFormatter) : "");

                // Next Call Time
                row.createCell(cellNum++).setCellValue(
                        record.getNextCallTime() != null ? record.getNextCallTime().format(dateTimeFormatter) : "");

                // Created At
                row.createCell(cellNum++).setCellValue(
                        record.getCreatedAt() != null ? record.getCreatedAt().format(dateTimeFormatter) : "");

                // Updated At
                row.createCell(cellNum++).setCellValue(
                        record.getUpdatedAt() != null ? record.getUpdatedAt().format(dateTimeFormatter) : "");
            }

            // 自动调整列宽
            for (int i = 0; i < headers.length; i++) {
                sheet.autoSizeColumn(i);
                // 设置最大列宽，避免过宽
                int columnWidth = sheet.getColumnWidth(i);
                if (columnWidth > 15000) {
                    sheet.setColumnWidth(i, 15000);
                } else {
                    // 添加一些额外宽度以便更好地显示
                    sheet.setColumnWidth(i, columnWidth + 1000);
                }
            }

            // 写入到字节数组
            try (ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {
                workbook.write(outputStream);
                return outputStream.toByteArray();
            }
        } catch (IOException e) {
            log.error("导出 Excel 文件失败，文档标题: {}", trimmedTitle, e);
            throw new RuntimeException("导出 Excel 文件失败", e);
        }
    }

    /**
     * 根据文档标题删除所有记录。
     * 包括删除该文档标题对应的 SASL 记录和导入记录（上传记录）。
     *
     * @param documentTitle 文档标题（必填）
     * @throws IllegalArgumentException 如果文档标题为空或不存在该文档标题的记录
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public void deleteRecordsByDocumentTitle(String documentTitle) {
        if (!StringUtils.hasText(documentTitle)) {
            throw new IllegalArgumentException("文档标题不能为空");
        }

        String trimmedTitle = documentTitle.trim();

        // 检查是否存在该文档标题的记录
        if (!recordRepository.existsByDocumentTitle(trimmedTitle)) {
            throw new IllegalArgumentException("文档标题 \"" + trimmedTitle + "\" 不存在或没有对应的记录");
        }

        // 删除所有对应文档标题的 SASL 记录
        recordRepository.deleteByDocumentTitle(trimmedTitle);

        // 删除所有对应文档标题的导入记录（上传记录）
        importRecordRepository.deleteByDocumentTitle(trimmedTitle);
    }

    /**
     * 按文档标题分组查询导入记录。
     * 返回同一个文档标题对应的多个上传记录，文档标题可以重复。
     *
     * @return 按文档标题分组的导入记录列表
     */
    public List<SaslImportRecordGroupResponse> getImportRecordsGroupedByDocumentTitle() {
        // 查询所有导入记录
        List<SaslImportRecord> allRecords = importRecordRepository.findAll();

        // 按文档标题分组
        Map<String, List<SaslImportRecord>> recordsByDocumentTitle = allRecords.stream()
                .filter(record -> record.getDocumentTitle() != null)
                .collect(Collectors.groupingBy(
                        SaslImportRecord::getDocumentTitle,
                        Collectors.toList()));

        // 转换为响应 DTO，并按创建时间降序排序每条导入记录
        return recordsByDocumentTitle.entrySet().stream()
                .map(entry -> {
                    List<SaslImportRecordResponse> importRecords = entry.getValue().stream()
                            .map(SaslImportRecordResponse::from)
                            .sorted(Comparator.comparing(SaslImportRecordResponse::createdAt).reversed())
                            .collect(Collectors.toList());

                    return new SaslImportRecordGroupResponse(entry.getKey(), importRecords);
                })
                .sorted(Comparator.comparing(SaslImportRecordGroupResponse::documentTitle))
                .collect(Collectors.toList());
    }

    /**
     * 获取所有部门包含 sasl 的用户，按部门分组。
     *
     * @return 按部门分组的用户列表
     */
    public List<DepartmentUserResponse> getUsersByDepartmentWithSasl() {
        // 查询所有部门编码中包含 "sasl" 的用户
        List<User> users = userRepository.findByDeptCodesContaining("sasl");

        // 按部门分组：对于每个用户，找出其所有包含 "sasl" 的部门编码，并按部门分组
        Map<String, List<User>> usersByDept = users.stream()
                .filter(user -> user.getDeptCodes() != null && !user.getDeptCodes().isEmpty())
                .flatMap(user -> user.getDeptCodes().stream()
                        .filter(deptCode -> deptCode != null && deptCode.contains("sasl"))
                        .distinct() // 避免同一用户在同一部门重复
                        .map(deptCode -> Map.entry(deptCode, user)))
                .collect(Collectors.groupingBy(
                        Map.Entry::getKey,
                        Collectors.mapping(Map.Entry::getValue, Collectors.toList())));

        // 转换为响应 DTO，并去重用户（同一用户可能在多个部门中）
        return usersByDept.entrySet().stream()
                .map(entry -> {
                    // 按用户名去重，避免同一用户在同一部门重复出现
                    List<DepartmentUserResponse.UserInfo> userInfos = entry.getValue().stream()
                            .collect(Collectors.toMap(
                                    User::getUsername,
                                    user -> new DepartmentUserResponse.UserInfo(
                                            user.getId(),
                                            user.getUsername(),
                                            user.getDisplayName(),
                                            user.getEmail(),
                                            user.getMobile()),
                                    (existing, replacement) -> existing)) // 如果重复，保留第一个
                            .values()
                            .stream()
                            .sorted(Comparator.comparing(DepartmentUserResponse.UserInfo::username))
                            .collect(Collectors.toList());

                    return new DepartmentUserResponse(entry.getKey(), userInfos);
                })
                .sorted(Comparator.comparing(DepartmentUserResponse::deptCode))
                .collect(Collectors.toList());
    }

    /**
     * 删除指定用户的 sasl 部门编码。
     * 从用户的部门编码列表中移除所有包含 "sasl" 的部门编码。
     *
     * @param userId 用户ID
     * @throws IllegalArgumentException 如果用户不存在或用户没有包含 "sasl" 的部门编码
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public void deleteDepartmentUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("用户不存在，ID: " + userId));

        if (user.getDeptCodes() == null || user.getDeptCodes().isEmpty()) {
            throw new IllegalArgumentException("用户没有部门编码，ID: " + userId);
        }

        // 移除所有包含 "sasl" 的部门编码
        List<String> updatedDeptCodes = user.getDeptCodes().stream()
                .filter(deptCode -> deptCode == null || !deptCode.contains("sasl"))
                .collect(Collectors.toList());

        // 检查是否有包含 "sasl" 的部门编码被移除
        if (updatedDeptCodes.size() == user.getDeptCodes().size()) {
            throw new IllegalArgumentException("用户没有包含 \"sasl\" 的部门编码，ID: " + userId);
        }

        // 更新用户的部门编码列表
        user.setDeptCodes(updatedDeptCodes.isEmpty() ? null : updatedDeptCodes);
        userRepository.save(user);
    }

    /**
     * 提交批量保存 LeadRecord 的异步任务到队列。
     *
     * @param records SaslRecord 列表
     */
    private void submitBatchSaveLeadRecordsTask(List<SaslRecord> records) {
        if (records == null || records.isEmpty()) {
            return;
        }

        // 创建队列任务
        QueueTask task = createBatchSaveLeadRecordsTask(records);

        // 提交到队列异步执行
        getjobs.common.infrastructure.queue.domain.QueueTask queueTask = queueTaskService.submit(task);
        log.info("已提交批量保存线索记录任务到队列: {} [{}] (记录数: {})",
                queueTask.getConfig().getTaskName(), queueTask.getTaskId(), records.size());
    }

    /**
     * 创建批量保存 LeadRecord 的队列任务。
     *
     * @param records SaslRecord 列表
     * @return 队列任务实例
     */
    private QueueTask createBatchSaveLeadRecordsTask(List<SaslRecord> records) {
        // 创建 LeadRecord 列表的副本，避免在异步执行时数据被修改
        List<LeadRecord> leadRecords = records.stream()
                .map(this::convertToLeadRecord)
                .collect(Collectors.toList());

        return new QueueTask() {
            @Override
            public QueueTaskConfig getConfig() {
                return QueueTaskConfig.builder()
                        .taskName("批量保存线索记录")
                        .taskType("BATCH_SAVE_LEAD_RECORDS")
                        .maxRetries(3) // 最多重试3次
                        .retryDelayMs(500L) // 重试延迟500毫秒
                        .useExponentialBackoff(true) // 使用指数退避
                        .description("批量保存线索记录到 lead_record 表，记录数: " + leadRecords.size())
                        .build();
            }

            @Override
            public Object execute() throws Exception {
                // 使用 TransactionTemplate 进行编程式事务管理
                // 因为 QueueTaskExecutor 在独立线程中执行，无法使用 @Transactional 注解
                // TransactionTemplate 会在回调中自动开启事务，成功时提交，异常时回滚
                TransactionTemplate transactionTemplate = new TransactionTemplate(mysqlTransactionManager);

                return transactionTemplate.execute(status -> {
                    // 使用 EntityManager 批量插入，每批处理 500 条记录
                    for (int i = 0; i < leadRecords.size(); i++) {
                        LeadRecord leadRecord = leadRecords.get(i);
                        mysqlEntityManager.persist(leadRecord);

                        // 每处理 500 条记录或到达最后一条记录时，执行 flush 和 clear
                        // 这样可以批量提交到数据库，减少数据库交互次数
                        if ((i + 1) % 500 == 0 || i == leadRecords.size() - 1) {
                            mysqlEntityManager.flush();
                            mysqlEntityManager.clear();
                        }
                    }

                    log.info("队列任务执行成功：批量保存 {} 条线索记录到 lead_record 表", leadRecords.size());
                    return "成功保存 " + leadRecords.size() + " 条线索记录";
                });
            }

            @Override
            public boolean shouldRetry(Throwable exception) {
                // 对于数据库连接错误、锁定错误等可重试异常，允许重试
                String message = exception.getMessage();
                if (message != null) {
                    String lowerMessage = message.toLowerCase();
                    return lowerMessage.contains("connection") ||
                            lowerMessage.contains("timeout") ||
                            lowerMessage.contains("lock") ||
                            lowerMessage.contains("deadlock") ||
                            lowerMessage.contains("could not execute");
                }
                // 其他异常不重试
                return false;
            }
        };
    }

    /**
     * 将 SaslRecord 转换为 LeadRecord。
     *
     * @param record SaslRecord 实例
     * @return LeadRecord 实例
     */
    private LeadRecord convertToLeadRecord(SaslRecord record) {
        LeadRecord leadRecord = new LeadRecord();
        leadRecord.setMrt(record.getMrt());
        leadRecord.setOldContract(record.getOldContract());
        leadRecord.setSales(record.getSales());
        leadRecord.setCategory(record.getCategory());
        leadRecord.setLastTurnNetworkMonth(record.getLastTurnNetworkMonth());
        return leadRecord;
    }

    /**
     * 过滤掉已存在的记录（基于 mrt 和 documentTitle 组合唯一索引）。
     *
     * @param records       待保存的记录列表
     * @param documentTitle 文档标题
     * @return 过滤后的新记录列表
     */
    private List<SaslRecord> filterExistingRecords(List<SaslRecord> records, String documentTitle) {
        // 收集所有非空的 mrt 值
        List<String> mrts = records.stream()
                .map(SaslRecord::getMrt)
                .filter(StringUtils::hasText)
                .distinct()
                .collect(Collectors.toList());

        if (mrts.isEmpty()) {
            // 如果没有有效的 mrt，返回所有记录（让数据库约束处理）
            return records;
        }

        // 批量查询已存在的记录
        List<SaslRecord> existingRecords = recordRepository.findByDocumentTitleAndMrtIn(documentTitle, mrts);

        // 创建已存在记录的 mrt 集合（用于快速查找）
        Set<String> existingMrts = existingRecords.stream()
                .map(SaslRecord::getMrt)
                .filter(StringUtils::hasText)
                .collect(Collectors.toSet());

        // 过滤掉已存在的记录
        return records.stream()
                .filter(record -> {
                    String mrt = record.getMrt();
                    // 如果 mrt 为空或已存在，则过滤掉
                    return StringUtils.hasText(mrt) && !existingMrts.contains(mrt);
                })
                .collect(Collectors.toList());
    }

    /**
     * 记录用户ID和文档标题集合的关系。
     *
     * @param request 用户文档标题关系请求
     * @return 保存后的关系响应
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public UserDocumentTitleResponse saveUserDocumentTitles(UserDocumentTitleRequest request) {
        // 验证用户是否存在
        if (!userRepository.existsById(request.userId())) {
            throw new IllegalArgumentException("用户不存在，ID: " + request.userId());
        }

        // 验证文档标题是否为空
        if (request.documentTitles() == null || request.documentTitles().isEmpty()) {
            throw new IllegalArgumentException("文档标题集合不能为空");
        }

        // 删除该用户的所有现有关系
        userDocumentTitleRepository.deleteByUserId(request.userId());

        // 保存新的关系
        List<UserDocumentTitle> relations = request.documentTitles().stream()
                .filter(StringUtils::hasText)
                .distinct()
                .map(documentTitle -> {
                    UserDocumentTitle relation = new UserDocumentTitle();
                    relation.setUserId(request.userId());
                    relation.setDocumentTitle(documentTitle.trim());
                    return relation;
                })
                .collect(Collectors.toList());

        if (relations.isEmpty()) {
            throw new IllegalArgumentException("文档标题集合中至少需要一个有效的文档标题");
        }

        // 批量保存
        userDocumentTitleRepository.saveAll(relations);

        // 获取所有文档标题
        List<String> allDocumentTitles = recordRepository.findAllDistinctDocumentTitles();

        // 获取用户绑定的文档标题集合（使用保存的文档标题）
        Set<String> userDocumentTitles = relations.stream()
                .map(UserDocumentTitle::getDocumentTitle)
                .collect(Collectors.toSet());

        // 构建文档标题对象列表，标记用户绑定的为true
        List<DocumentTitleItem> documentTitleItems = allDocumentTitles.stream()
                .map(title -> new DocumentTitleItem(
                        title,
                        userDocumentTitles.contains(title)))
                .collect(Collectors.toList());

        return new UserDocumentTitleResponse(request.userId(), documentTitleItems);
    }

    /**
     * 根据用户ID查询所有文档标题对象，包含标题名和是否绑定标识。
     *
     * @param userId 用户ID
     * @return 用户文档标题关系响应，包含所有文档标题对象（已绑定的标记为true）
     */
    public UserDocumentTitleResponse getUserDocumentTitles(Long userId) {
        // 验证用户是否存在
        if (!userRepository.existsById(userId)) {
            throw new IllegalArgumentException("用户不存在，ID: " + userId);
        }

        // 获取所有文档标题
        List<String> allDocumentTitles = recordRepository.findAllDistinctDocumentTitles();

        // 获取用户绑定的文档标题集合
        Set<String> userDocumentTitles = userDocumentTitleRepository.findDocumentTitlesByUserId(userId)
                .stream()
                .collect(Collectors.toSet());

        // 构建文档标题对象列表，标记用户绑定的为true
        List<DocumentTitleItem> documentTitleItems = allDocumentTitles.stream()
                .map(title -> new DocumentTitleItem(
                        title,
                        userDocumentTitles.contains(title)))
                .collect(Collectors.toList());

        return new UserDocumentTitleResponse(userId, documentTitleItems);
    }

    /**
     * 获取所有文档标题对象，用户绑定的文档标题对象选中属性标记为true。
     *
     * @param userId 用户ID
     * @return 所有文档标题对象列表，包含选中状态
     */
    public List<DocumentTitleItem> getAllDocumentTitlesWithSelection(Long userId) {
        // 验证用户是否存在
        if (!userRepository.existsById(userId)) {
            throw new IllegalArgumentException("用户不存在，ID: " + userId);
        }

        // 获取所有文档标题
        List<String> allDocumentTitles = recordRepository.findAllDistinctDocumentTitles();

        // 获取用户绑定的文档标题集合
        Set<String> userDocumentTitles = userDocumentTitleRepository.findDocumentTitlesByUserId(userId)
                .stream()
                .collect(Collectors.toSet());

        // 构建文档标题对象列表，标记用户绑定的为选中状态
        return allDocumentTitles.stream()
                .map(title -> new DocumentTitleItem(
                        title,
                        userDocumentTitles.contains(title)))
                .collect(Collectors.toList());
    }

    /**
     * 查询所有用户文档标题绑定关系。
     * 直接通过 UserDocumentTitle 查询所有绑定关系，包含用户信息。
     *
     * @return 所有绑定关系列表，包含关系ID、文档标题、用户ID、用户账号/显示名、绑定时间
     */
    public List<UserDocumentTitleBindingResponse> getAllUserDocumentTitleBindings() {
        // 查询所有绑定关系
        List<UserDocumentTitle> bindings = userDocumentTitleRepository.findAll();

        // 获取所有用户ID
        Set<Long> userIds = bindings.stream()
                .map(UserDocumentTitle::getUserId)
                .collect(Collectors.toSet());

        // 批量查询用户信息
        Map<Long, User> userMap = userRepository.findAllById(userIds).stream()
                .collect(Collectors.toMap(User::getId, user -> user));

        // 构建响应列表
        return bindings.stream()
                .map(binding -> {
                    User user = userMap.get(binding.getUserId());
                    String userName = user != null
                            ? (StringUtils.hasText(user.getDisplayName()) ? user.getDisplayName() : user.getUsername())
                            : "未知用户";
                    return new UserDocumentTitleBindingResponse(
                            binding.getId(),
                            binding.getDocumentTitle(),
                            binding.getUserId(),
                            userName,
                            binding.getCreatedAt());
                })
                .collect(Collectors.toList());
    }

    /**
     * 根据绑定ID删除用户文档标题绑定关系。
     *
     * @param bindingId 绑定关系ID
     * @throws IllegalArgumentException 如果绑定关系不存在
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public void deleteUserDocumentTitleBinding(Long bindingId) {
        if (!userDocumentTitleRepository.existsById(bindingId)) {
            throw new IllegalArgumentException("绑定关系不存在，ID: " + bindingId);
        }
        userDocumentTitleRepository.deleteById(bindingId);
    }

    /**
     * 根据记录ID更新致电状态和备注，自动更新最近致电时间为当前时间。
     * 返回更新后的记录和下一条记录（ID 比当前记录大，文档标题相同，最小的 ID）。
     *
     * @param id              记录ID
     * @param callStatus      致电状态
     * @param remark          备注
     * @param nextCallTime    下次致电时间
     * @param documentTitle   文档标题（查询参数，用于查询下一条记录，如果为null则使用当前记录的文档标题）
     * @param queryCallStatus 查询致电状态（查询参数，用于过滤下一条记录，如果为null则不过滤）
     * @return 更新响应，包含更新后的记录和下一条记录
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public SaslUpdateResponse updateRecord(Long id, CallStatus callStatus, String remark, LocalDateTime nextCallTime,
            String documentTitle, CallStatus queryCallStatus) {
        Optional<SaslRecord> recordOpt = recordRepository.findById(id);
        if (recordOpt.isEmpty()) {
            throw new IllegalArgumentException("记录不存在，ID: " + id);
        }

        SaslRecord record = recordOpt.get();

        // 验证：如果原有记录的下次致电时间有值，且新的致电状态为NA或考虑，则必须更新下次预约时间
        if (record.getNextCallTime() != null
                && (callStatus == CallStatus.NA || callStatus == CallStatus.CONSIDERING)
                && nextCallTime == null) {
            throw new IllegalArgumentException(
                    String.format("致电状态为%s时，必须更新下次预约时间。当前记录ID: %d",
                            callStatus.getText(), id));
        }

        // 验证：如果设置了下次致电时间，必须大于当前时间5分钟以上
        if (nextCallTime != null) {
            LocalDateTime now = LocalDateTime.now();
            LocalDateTime minNextCallTime = now.plusMinutes(5);
            if (nextCallTime.isBefore(minNextCallTime) || nextCallTime.isEqual(minNextCallTime)) {
                throw new IllegalArgumentException(
                        String.format("下次致电时间必须大于当前时间至少5分钟。当前时间: %s, 设置的时间: %s, 最小允许时间: %s",
                                now, nextCallTime, minNextCallTime));
            }
        }

        record.setCallStatus(callStatus);
        record.setRemark(StringUtils.hasText(remark) ? remark.trim() : null);
        // 自动更新最近致电时间为当前时间
        record.setLastCallTime(LocalDateTime.now());
        // 设置下次致电时间
        record.setNextCallTime(nextCallTime);

        try {
            SaslRecord savedRecord = recordRepository.save(record);

            // 记录更新流水
            saveUpdateLog(savedRecord, callStatus, remark, nextCallTime);

            SaslRecordResponse updatedRecordResponse = SaslRecordResponse.from(savedRecord);

            // 确定用于查询的文档标题（如果提供了查询参数则使用，否则使用当前记录的文档标题）
            String queryDocumentTitle = StringUtils.hasText(documentTitle) ? documentTitle
                    : savedRecord.getDocumentTitle();

            // 查询下一条记录
            SaslRecordResponse nextRecordResponse = findNextRecord(
                    savedRecord.getId(),
                    queryDocumentTitle,
                    queryCallStatus);

            return new SaslUpdateResponse(updatedRecordResponse, nextRecordResponse);
        } catch (Exception e) {
            // 检查是否是 SQLite 并发锁定错误
            if (batchService.isSqliteLockError(e)) {
                log.warn("检测到 SQLite 并发锁定错误，将更新操作提交到队列执行: ID={}", id, e);

                // 创建队列任务并提交到队列（串行执行，避免并发冲突）
                // 获取当前操作用户名，传递给队列任务
                String operator = AuthContext.getUsername();
                getjobs.common.infrastructure.queue.contract.QueueTask queueTask = queueTaskFactory.createUpdateTask(id,
                        callStatus, remark, nextCallTime, operator);
                getjobs.common.infrastructure.queue.domain.QueueTask submittedTask = queueTaskService.submit(queueTask);

                log.info("更新操作已提交到队列，将异步执行: ID={}, 任务ID={}", id, submittedTask.getTaskId());

                // 直接返回当前已设置好值的记录（最终一致性：队列任务会在后台异步更新）
                // record 对象已经在前面设置了值（702-707行），可以直接使用
                SaslRecordResponse updatedRecordResponse = SaslRecordResponse.from(record);

                // 确定用于查询的文档标题（如果提供了查询参数则使用，否则使用当前记录的文档标题）
                String queryDocumentTitle = StringUtils.hasText(documentTitle) ? documentTitle
                        : record.getDocumentTitle();

                // 查询下一条记录
                SaslRecordResponse nextRecordResponse = findNextRecord(
                        record.getId(),
                        queryDocumentTitle,
                        queryCallStatus);

                return new SaslUpdateResponse(updatedRecordResponse, nextRecordResponse);
            } else {
                // 其他异常直接抛出
                throw e;
            }
        }
    }

    /**
     * 查询下一条记录（统一维护的查询方法）。
     * 查询逻辑：
     * 1. 如果传递的id参数为当前文档最大id数据则id设置为0代表从符合条件的首条查起
     * 2. 查询NEXT数据需要过滤callStatus为已登记（REGISTERED）的数据
     * 3. 只查询 nextCallTime 比当前时间早30分钟以上的数据
     *
     * @param id              当前记录ID
     * @param documentTitle   文档标题
     * @param queryCallStatus 查询致电状态（可选，用于过滤下一条记录，如果为null则不过滤）
     * @return 下一条记录响应，如果不存在返回 null
     */
    private SaslRecordResponse findNextRecord(Long id, String documentTitle, CallStatus queryCallStatus) {
        // 查询当前文档的最大ID
        Long maxId = recordRepository.findMaxIdByDocumentTitle(documentTitle);

        // 如果传递的id参数为当前文档最大id数据则id设置为0代表从符合条件的首条查起
        Long queryId = (maxId != null && maxId.equals(id)) ? 0L : id;

        // 计算最小下次致电时间（当前时间减去30分钟），用于过滤数据
        LocalDateTime minNextCallTime = LocalDateTime.now().minusMinutes(30);

        // 查询下一条记录（排除REGISTERED状态）
        List<SaslRecord> nextRecords;
        if (queryCallStatus != null) {
            nextRecords = recordRepository.findNextRecordByIdAndDocumentTitleAndCallStatus(
                    queryId,
                    documentTitle,
                    queryCallStatus,
                    minNextCallTime,
                    CallStatus.REGISTERED,
                    PageRequest.of(0, 1));
        } else {
            nextRecords = recordRepository.findNextRecordByIdAndDocumentTitle(
                    queryId,
                    documentTitle,
                    minNextCallTime,
                    CallStatus.REGISTERED,
                    PageRequest.of(0, 1));
        }

        // 对比测试：调用不使用分页的版本进行对比
        try {
            SaslRecordResponse withoutPagingResult = findNextRecordWithoutPaging(id, documentTitle, queryCallStatus);
            if (withoutPagingResult != null) {
                log.info("【对比测试】findNextRecordWithoutPaging 返回记录ID: {}", withoutPagingResult.id());
            } else {
                log.info("【对比测试】findNextRecordWithoutPaging 返回 null");
            }
            if (!nextRecords.isEmpty()) {
                log.info("【对比测试】findNextRecord (分页版本) 返回记录ID: {}", nextRecords.get(0).getId());
            } else {
                log.info("【对比测试】findNextRecord (分页版本) 返回空列表");
            }
        } catch (Exception e) {
            log.warn("【对比测试】调用 findNextRecordWithoutPaging 时发生异常: {}", e.getMessage(), e);
        }

        // 如果查询结果为空，打印完整的SQL和参数用于调试
        if (nextRecords.isEmpty()) {
            String sql;
            String params;
            if (queryCallStatus != null) {
                sql = "SELECT s FROM SaslRecord s " +
                        "WHERE s.id > :id AND s.documentTitle = :documentTitle " +
                        "AND (s.callStatus IS NULL OR s.callStatus != :registeredStatus) " +
                        "AND (:callStatus IS NULL OR s.callStatus = :callStatus) " +
                        "AND (s.nextCallTime IS NULL OR s.nextCallTime < :minNextCallTime) " +
                        "ORDER BY s.id ASC";
                params = String.format(
                        "id=%d, documentTitle='%s', callStatus=%s, minNextCallTime=%s, registeredStatus=%s",
                        queryId, documentTitle, queryCallStatus, minNextCallTime, CallStatus.REGISTERED);
            } else {
                sql = "SELECT s FROM SaslRecord s " +
                        "WHERE s.id > :id AND s.documentTitle = :documentTitle " +
                        "AND (s.callStatus IS NULL OR s.callStatus != :registeredStatus) " +
                        "AND (s.nextCallTime IS NULL OR s.nextCallTime < :minNextCallTime) " +
                        "ORDER BY s.id ASC";
                params = String.format(
                        "id=%d, documentTitle='%s', minNextCallTime=%s, registeredStatus=%s",
                        queryId, documentTitle, minNextCallTime, CallStatus.REGISTERED);
            }
            log.warn("findNextRecord 查询结果为空，未找到下一条记录。SQL: {}, 参数: {}", sql, params);
            return null;
        }

        return SaslRecordResponse.from(nextRecords.get(0));
    }

    /**
     * 查询下一条记录（不使用分页版本，用于对比测试）。
     * 此方法用于对比是否分页导致了问题，没有取到 order by id 的最近一条。
     * 
     * 逻辑说明：
     * 1. 如果传递的id参数为当前文档最大id数据则id设置为0代表从符合条件的首条查起
     * 2. 查询NEXT数据需要过滤callStatus为已登记（REGISTERED）的数据
     * 3. 只查询 nextCallTime 比当前时间早30分钟以上的数据
     *
     * @param id              当前记录ID
     * @param documentTitle   文档标题
     * @param queryCallStatus 查询致电状态（可选，用于过滤下一条记录，如果为null则不过滤）
     * @return 下一条记录响应，如果不存在返回 null
     */
    private SaslRecordResponse findNextRecordWithoutPaging(Long id, String documentTitle, CallStatus queryCallStatus) {
        // 查询当前文档的最大ID
        Long maxId = recordRepository.findMaxIdByDocumentTitle(documentTitle);

        // 如果传递的id参数为当前文档最大id数据则id设置为0代表从符合条件的首条查起
        Long queryId = (maxId != null && maxId.equals(id)) ? 0L : id;

        // 计算最小下次致电时间（当前时间减去30分钟），用于过滤数据
        LocalDateTime minNextCallTime = LocalDateTime.now().minusMinutes(30);

        // 查询下一条记录（排除REGISTERED状态），不使用分页
        List<SaslRecord> nextRecords;
        if (queryCallStatus != null) {
            nextRecords = recordRepository.findNextRecordByIdAndDocumentTitleAndCallStatusWithoutPaging(
                    queryId,
                    documentTitle,
                    queryCallStatus,
                    minNextCallTime,
                    CallStatus.REGISTERED);
        } else {
            nextRecords = recordRepository.findNextRecordByIdAndDocumentTitleWithoutPaging(
                    queryId,
                    documentTitle,
                    minNextCallTime,
                    CallStatus.REGISTERED);
        }

        // 如果查询结果为空，打印完整的SQL和参数用于调试
        if (nextRecords.isEmpty()) {
            String sql;
            String params;
            if (queryCallStatus != null) {
                sql = "SELECT s FROM SaslRecord s " +
                        "WHERE s.id > :id AND s.documentTitle = :documentTitle " +
                        "AND (s.callStatus IS NULL OR s.callStatus != :registeredStatus) " +
                        "AND (:callStatus IS NULL OR s.callStatus = :callStatus) " +
                        "AND (s.nextCallTime IS NULL OR s.nextCallTime < :minNextCallTime) " +
                        "ORDER BY s.id ASC";
                params = String.format(
                        "id=%d, documentTitle='%s', callStatus=%s, minNextCallTime=%s, registeredStatus=%s",
                        queryId, documentTitle, queryCallStatus, minNextCallTime, CallStatus.REGISTERED);
            } else {
                sql = "SELECT s FROM SaslRecord s " +
                        "WHERE s.id > :id AND s.documentTitle = :documentTitle " +
                        "AND (s.callStatus IS NULL OR s.callStatus != :registeredStatus) " +
                        "AND (s.nextCallTime IS NULL OR s.nextCallTime < :minNextCallTime) " +
                        "ORDER BY s.id ASC";
                params = String.format(
                        "id=%d, documentTitle='%s', minNextCallTime=%s, registeredStatus=%s",
                        queryId, documentTitle, minNextCallTime, CallStatus.REGISTERED);
            }
            log.warn("findNextRecordWithoutPaging 查询结果为空，未找到下一条记录。SQL: {}, 参数: {}", sql, params);
            log.info("findNextRecordWithoutPaging 查询结果总数: 0");
            return null;
        }

        // 记录查询结果总数用于对比
        log.info("findNextRecordWithoutPaging 查询结果总数: {}, 第一条记录ID: {}",
                nextRecords.size(), nextRecords.get(0).getId());

        // 返回第一条记录（按ID升序排序后的第一条）
        return SaslRecordResponse.from(nextRecords.get(0));
    }

    // ==================== 套餐方案相关方法 ====================

    /**
     * 查询所有套餐方案。
     *
     * @return 套餐方案列表
     */
    public List<PlanSectionResponse> listPlanSections() {
        return planSectionRepository.findAllActiveOrderByIdAsc().stream()
                .map(PlanSectionResponse::from)
                .toList();
    }

    /**
     * 根据ID查询套餐方案。
     *
     * @param id 套餐方案ID
     * @return 套餐方案响应
     */
    public PlanSectionResponse getPlanSectionById(Long id) {
        PlanSection planSection = planSectionRepository.findByIdWithRows(id)
                .orElseThrow(() -> new IllegalArgumentException("套餐方案不存在，ID: " + id));
        return PlanSectionResponse.from(planSection);
    }

    /**
     * 根据套餐ID查询套餐方案。
     *
     * @param planId 套餐ID
     * @return 套餐方案响应
     */
    public PlanSectionResponse getPlanSectionByPlanId(String planId) {
        PlanSection planSection = planSectionRepository.findByPlanIdWithRows(planId)
                .orElseThrow(() -> new IllegalArgumentException("套餐方案不存在，PlanID: " + planId));
        return PlanSectionResponse.from(planSection);
    }

    /**
     * 创建套餐方案。
     *
     * @param request 套餐方案请求
     * @return 创建的套餐方案响应
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public PlanSectionResponse createPlanSection(PlanSectionRequest request) {
        // 检查套餐ID是否已存在
        if (planSectionRepository.existsByPlanId(request.planId())) {
            throw new IllegalArgumentException("套餐ID已存在: " + request.planId());
        }

        PlanSection planSection = new PlanSection();
        planSection.setPlanId(request.planId());
        planSection.setTitle(request.title());
        planSection.setSubtitle(request.subtitle());
        planSection.setFootnote(request.footnote());

        // 将 columns 列表转换为 JSON 字符串
        if (request.columns() != null && !request.columns().isEmpty()) {
            try {
                planSection.setColumns(objectMapper.writeValueAsString(request.columns()));
            } catch (Exception e) {
                throw new IllegalArgumentException("转换 columns 为 JSON 失败", e);
            }
        }

        // 保存套餐方案
        planSection = planSectionRepository.save(planSection);

        // 保存行数据
        if (request.rows() != null && !request.rows().isEmpty()) {
            List<PlanRow> rows = new ArrayList<>();
            for (int i = 0; i < request.rows().size(); i++) {
                PlanRowRequest rowRequest = request.rows().get(i);
                PlanRow row = new PlanRow();
                row.setPlanSection(planSection);
                row.setLabel(rowRequest.label());
                row.setSortOrder(rowRequest.sortOrder() != null ? rowRequest.sortOrder() : i);

                // 将 values 列表转换为 JSON 字符串
                if (rowRequest.values() != null && !rowRequest.values().isEmpty()) {
                    try {
                        row.setValues(objectMapper.writeValueAsString(rowRequest.values()));
                    } catch (Exception e) {
                        throw new IllegalArgumentException("转换 values 为 JSON 失败", e);
                    }
                } else {
                    row.setValues("[]");
                }

                rows.add(row);
            }
            planRowRepository.saveAll(rows);
            planSection.setRows(rows);
        }

        return PlanSectionResponse.from(planSection);
    }

    /**
     * 更新套餐方案。
     *
     * @param id      套餐方案ID
     * @param request 套餐方案请求
     * @return 更新后的套餐方案响应
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public PlanSectionResponse updatePlanSection(Long id, PlanSectionRequest request) {
        PlanSection planSection = planSectionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("套餐方案不存在，ID: " + id));

        // 如果修改了 planId，检查新 planId 是否已存在
        if (!planSection.getPlanId().equals(request.planId())
                && planSectionRepository.existsByPlanId(request.planId())) {
            throw new IllegalArgumentException("套餐ID已存在: " + request.planId());
        }

        planSection.setPlanId(request.planId());
        planSection.setTitle(request.title());
        planSection.setSubtitle(request.subtitle());
        planSection.setFootnote(request.footnote());

        // 更新 columns
        if (request.columns() != null && !request.columns().isEmpty()) {
            try {
                planSection.setColumns(objectMapper.writeValueAsString(request.columns()));
            } catch (Exception e) {
                throw new IllegalArgumentException("转换 columns 为 JSON 失败", e);
            }
        } else {
            planSection.setColumns(null);
        }

        // 更新行数据：清空现有集合并添加新元素
        // 注意：不要替换集合引用（setRows），而是修改现有集合的内容
        // 这样 Hibernate 的 orphanRemoval 机制才能正确工作
        planSection.getRows().clear();

        // 创建并添加新的行数据
        if (request.rows() != null && !request.rows().isEmpty()) {
            for (int i = 0; i < request.rows().size(); i++) {
                PlanRowRequest rowRequest = request.rows().get(i);
                PlanRow row = new PlanRow();
                row.setPlanSection(planSection);
                row.setLabel(rowRequest.label());
                row.setSortOrder(rowRequest.sortOrder() != null ? rowRequest.sortOrder() : i);

                // 将 values 列表转换为 JSON 字符串
                if (rowRequest.values() != null && !rowRequest.values().isEmpty()) {
                    try {
                        row.setValues(objectMapper.writeValueAsString(rowRequest.values()));
                    } catch (Exception e) {
                        throw new IllegalArgumentException("转换 values 为 JSON 失败", e);
                    }
                } else {
                    row.setValues("[]");
                }

                // 直接添加到现有集合中，而不是创建新集合
                planSection.getRows().add(row);
            }
        }

        planSection = planSectionRepository.save(planSection);
        return PlanSectionResponse.from(planSection);
    }

    /**
     * 删除套餐方案（逻辑删除）。
     *
     * @param id 套餐方案ID
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public void deletePlanSection(Long id) {
        PlanSection planSection = planSectionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("套餐方案不存在，ID: " + id));
        planSection.setIsDeleted(true);
        planSectionRepository.save(planSection);
    }

    /**
     * 同步前端套餐数据到数据库。
     * 如果套餐已存在则更新，不存在则创建。
     */
    @Transactional(transactionManager = "mysqlTransactionManager")
    public void syncPlanSectionsFromFrontend() {
        // 定义前端的 5 个套餐数据
        List<PlanSectionRequest> planSections = createDefaultPlanSections();

        for (PlanSectionRequest request : planSections) {
            Optional<PlanSection> existingOpt = planSectionRepository.findByPlanId(request.planId());
            if (existingOpt.isPresent()) {
                // 更新已存在的套餐
                PlanSection existing = existingOpt.get();
                updatePlanSection(existing.getId(), request);
                log.info("已更新套餐: {}", request.planId());
            } else {
                // 创建新套餐
                createPlanSection(request);
                log.info("已创建套餐: {}", request.planId());
            }
        }
    }

    /**
     * 创建默认的 5 个套餐数据。
     *
     * @return 套餐请求列表
     */
    private List<PlanSectionRequest> createDefaultPlanSections() {
        List<PlanSectionRequest> plans = new ArrayList<>();

        // 套餐1: csl. 4.5G 主力資費
        plans.add(new PlanSectionRequest(
                "csl45g",
                "csl. 4.5G 主力資費",
                "24/36 個月合約 — 最新銷售表",
                List.of("$98 計劃", "$118 計劃", "$298 計劃"),
                List.of(
                        new PlanRowRequest("合約期", List.of("24/36M", "24/36M", "24/36M"), 0),
                        new PlanRowRequest("服務計劃月費", List.of("$98", "$118", "$298"), 1),
                        new PlanRowRequest("隨選月費", List.of("$18", "$18", "$18"), 2),
                        new PlanRowRequest("回贈金額", List.of("$20", "$20", "$140"), 3),
                        new PlanRowRequest("需交隨道費", List.of("$18", "$18", "$18"), 4),
                        new PlanRowRequest("實交月費", List.of("$78", "$98", "$158"), 5),
                        new PlanRowRequest("24M 合約一次性回贈 (2025.12.31 前生效)", List.of("100", "100", "300"), 6),
                        new PlanRowRequest("36M 合約限時優惠 A (2025.12.31 前生效)",
                                List.of("$1000 手機/配件電子禮券 或 $2988 inno3C WD25 飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 飲水機"),
                                7),
                        new PlanRowRequest("36M 合約限時優惠 B (兩個月內生效)", List.of("200", "200", "500"), 8),
                        new PlanRowRequest("36M 合約限時優惠 C (六個月內生效)", List.of("100", "100", "350"), 9),
                        new PlanRowRequest("本地流動數據 (全速)", List.of("20GB (42MB)", "16GB (42MB)", "40GB (全速)"), 10),
                        new PlanRowRequest("本地流動數據 (其後)", List.of("其後 1MB 無限", "其後 1MB 無限", "其後優先次序分配"), 11),
                        new PlanRowRequest("中 + 澳漫游數據", List.of("N", "3GB", "2GB"), 12),
                        new PlanRowRequest("傾 King App", List.of("N", "N", "N"), 13),
                        new PlanRowRequest("基本語音分鐘", List.of("無限", "無限", "無限"), 14),
                        new PlanRowRequest("網內短訊", List.of("無限", "無限", "無限"), 15),
                        new PlanRowRequest("網內彩訊", List.of("500", "500", "500"), 16),
                        new PlanRowRequest("國際短訊", List.of("20", "20", "20"), 17),
                        new PlanRowRequest("國際彩訊", List.of("10", "10", "10"), 18),
                        new PlanRowRequest("Wi-Fi 熱點數據用量", List.of("無限", "無限", "無限"), 19)),
                "附送留音信箱、來電等候、通信保留、會議通話、來電顯示、來電轉示、來電待接等增值服務，資訊來源：最新內部銷售試算表。"));

        // 套餐2: csl. 5G 主力資費
        plans.add(new PlanSectionRequest(
                "csl5g-core",
                "csl. 5G 主力資費",
                "24/36 個月合約 — 主流 5G 組合",
                List.of("$128 / 20GB", "$128 / 40GB", "$158 / 100GB"),
                List.of(
                        new PlanRowRequest("網絡速度", List.of("5G", "5G", "5G"), 0),
                        new PlanRowRequest("合約期", List.of("24/36M", "24/36M", "24/36M"), 1),
                        new PlanRowRequest("服務計劃月費", List.of("$128", "$128", "$158"), 2),
                        new PlanRowRequest("隨選月費", List.of("$18", "$18", "$18"), 3),
                        new PlanRowRequest("回贈金額", List.of("$10", "$0", "$0"), 4),
                        new PlanRowRequest("需交隨道費", List.of("$18", "$18", "$18"), 5),
                        new PlanRowRequest("實交月費", List.of("$118", "$128", "$158"), 6),
                        new PlanRowRequest("24M 合約一次性回贈 (2025.12.31 前生效)", List.of("100", "100", "300"), 7),
                        new PlanRowRequest("36M 合約限時優惠 A (2025.12.31 前生效)",
                                List.of("$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機"),
                                8),
                        new PlanRowRequest("36M 合約限時優惠 B (兩個月內生效)", List.of("200", "200", "300"), 9),
                        new PlanRowRequest("36M 合約限時優惠 C (六個月內生效)", List.of("100", "100", "350"), 10),
                        new PlanRowRequest("本地流動數據 (全速)", List.of("20GB (全速)", "40GB (全速)", "100GB (全速)"), 11),
                        new PlanRowRequest("本地流動數據 (其後)", List.of("其後 1MB 無限", "其後 1MB 無限", "其後 1MB 無限"), 12),
                        new PlanRowRequest("中 + 澳漫游數據", List.of("3GB", "N", "N"), 13),
                        new PlanRowRequest("傾 King App", List.of("N", "N", "Y"), 14),
                        new PlanRowRequest("基本語音分鐘", List.of("無限", "無限", "無限"), 15),
                        new PlanRowRequest("網內短訊", List.of("無限", "無限", "無限"), 16),
                        new PlanRowRequest("網內彩訊", List.of("500", "500", "500"), 17),
                        new PlanRowRequest("國際短訊", List.of("20", "20", "20"), 18),
                        new PlanRowRequest("國際彩訊", List.of("10", "10", "10"), 19),
                        new PlanRowRequest("Wi-Fi 熱點數據用量", List.of("無限", "無限", "無限"), 20)),
                "含 5G 無限通話組合，可直接引用銷售資料表中的三個主流資費。"));

        // 套餐3: csl. 5G 30 歲以下青年
        plans.add(new PlanSectionRequest(
                "csl5g-youth",
                "csl. 5G 30 歲以下青年",
                "24/36 個月 — 青年專屬數據疊加",
                List.of("$238 / 30GB", "$298 / 60GB", "$348 / 100GB"),
                List.of(
                        new PlanRowRequest("網絡速度", List.of("5G", "5G", "5G"), 0),
                        new PlanRowRequest("合約期", List.of("24/36M", "24/36M", "24/36M"), 1),
                        new PlanRowRequest("服務計劃月費", List.of("$238", "$298", "$348"), 2),
                        new PlanRowRequest("隨選月費", List.of("$18", "$18", "$18"), 3),
                        new PlanRowRequest("回贈金額", List.of("$148", "$178", "$198"), 4),
                        new PlanRowRequest("需交隨道費", List.of("$0", "$0", "$0"), 5),
                        new PlanRowRequest("實交月費", List.of("$108", "$138", "$168"), 6),
                        new PlanRowRequest("24M 合約一次性回贈 (2025.12.31 前生效)", List.of("100", "300", "300"), 7),
                        new PlanRowRequest("36M 合約限時優惠 A (2025.12.31 前生效)",
                                List.of("$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機"),
                                8),
                        new PlanRowRequest("36M 合約限時優惠 B (兩個月內生效)", List.of("200", "500", "500"), 9),
                        new PlanRowRequest("36M 合約限時優惠 C (六個月內生效)", List.of("100", "350", "350"), 10),
                        new PlanRowRequest("本地流動數據 (全速)", List.of("30GB (全速)", "60GB (全速)", "100GB (全速)"), 11),
                        new PlanRowRequest("本地流動數據 (其後)", List.of("其後 1MB 無限", "其後 1MB 無限", "其後 2MB 無限"), 12),
                        new PlanRowRequest("中 + 澳漫游數據", List.of("2GB", "4GB", "4GB"), 13),
                        new PlanRowRequest("傾 King App", List.of("N", "Y", "Y"), 14),
                        new PlanRowRequest("基本語音分鐘", List.of("無限", "無限", "無限"), 15),
                        new PlanRowRequest("網內短訊", List.of("無限", "無限", "無限"), 16),
                        new PlanRowRequest("網內彩訊", List.of("500", "500", "500"), 17),
                        new PlanRowRequest("國際短訊", List.of("20", "20", "20"), 18),
                        new PlanRowRequest("國際彩訊", List.of("10", "10", "10"), 19),
                        new PlanRowRequest("Wi-Fi 熱點數據用量", List.of("無限", "無限", "無限"), 20)),
                "申請者須出示年齡證明，適用 30 歲或以下客戶。"));

        // 套餐4: csl. 中港澳數據組合
        plans.add(new PlanSectionRequest(
                "csl5g-gba",
                "csl. 中港澳數據組合",
                "24/36 個月 — 中港澳共享數據",
                List.of("$298 / 60GB+30GB GBA", "$398 / 110GB+60GB GBA", "$598 / 180GB+90GB GBA"),
                List.of(
                        new PlanRowRequest("網絡速度", List.of("5G", "5G", "5G"), 0),
                        new PlanRowRequest("合約期", List.of("24/36M", "24/36M", "24/36M"), 1),
                        new PlanRowRequest("服務計劃月費", List.of("$298", "$398", "$598"), 2),
                        new PlanRowRequest("隨選月費", List.of("$18", "$18", "$18"), 3),
                        new PlanRowRequest("回贈金額", List.of("$18", "$18", "$18"), 4),
                        new PlanRowRequest("需交隨道費", List.of("$0", "$0", "$0"), 5),
                        new PlanRowRequest("實交月費", List.of("$298", "$398", "$598"), 6),
                        new PlanRowRequest("24M 合約一次性回贈 (2025.12.31 前生效)", List.of("500", "500", "500"), 7),
                        new PlanRowRequest("36M 合約限時優惠 A (2025.12.31 前生效)",
                                List.of("$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機"),
                                8),
                        new PlanRowRequest("36M 合約限時優惠 B (兩個月內生效)", List.of("800", "800", "800"), 9),
                        new PlanRowRequest("36M 合約限時優惠 C (六個月內生效)", List.of("600", "600", "600"), 10),
                        new PlanRowRequest("本地流動數據 (全速)", List.of("60GB (全速)", "110GB (全速)", "180GB (全速)"), 11),
                        new PlanRowRequest("本地流動數據 (其後)", List.of("N", "N", "N"), 12),
                        new PlanRowRequest("中 + 澳 + 港三地數據 (其後 512KB 無限)", List.of("30GB", "60GB", "90GB"), 13),
                        new PlanRowRequest("傾 King App", List.of("Y", "Y", "Y"), 14),
                        new PlanRowRequest("基本語音分鐘", List.of("無限", "無限", "無限"), 15),
                        new PlanRowRequest("網內短訊", List.of("無限", "無限", "無限"), 16),
                        new PlanRowRequest("網內彩訊", List.of("500", "500", "500"), 17),
                        new PlanRowRequest("國際短訊", List.of("20", "20", "20"), 18),
                        new PlanRowRequest("國際彩訊", List.of("10", "10", "10"), 19),
                        new PlanRowRequest("Wi-Fi 熱點數據用量", List.of("無限", "無限", "無限"), 20)),
                "專為跨境客戶設計，香港/中國/澳門漫遊同時啟動並含 King App。"));

        // 套餐5: csl. 5G 尊賞數據獎賞
        plans.add(new PlanSectionRequest(
                "csl5g-premium",
                "csl. 5G 尊賞數據獎賞",
                "36 個月尊享 — 兩組數據容量",
                List.of("30GB 標準獎賞", "60GB 標準獎賞", "100GB 標準獎賞", "60GB 升級獎賞", "120GB 升級獎賞", "200GB 升級獎賞"),
                List.of(
                        new PlanRowRequest("網絡速度", List.of("5G", "5G", "5G", "5G", "5G", "5G"), 0),
                        new PlanRowRequest("合約期", List.of("36M", "36M", "36M", "36M", "36M", "36M"), 1),
                        new PlanRowRequest("服務計劃月費", List.of("$238", "$298", "$338", "$238", "$298", "$338"), 2),
                        new PlanRowRequest("隨選月費", List.of("$18", "$18", "$18", "$18", "$18", "$18"), 3),
                        new PlanRowRequest("回贈金額", List.of("$118", "$148", "$178", "$118", "$148", "$178"), 4),
                        new PlanRowRequest("需交隨道費", List.of("$0", "$0", "$0", "$0", "$0", "$0"), 5),
                        new PlanRowRequest("實交月費", List.of("$138", "$168", "$198", "$138", "$168", "$198"), 6),
                        new PlanRowRequest("24M 合約一次性回贈 (2025.12.31 前生效)", List.of("—", "—", "—", "—", "—", "—"), 7),
                        new PlanRowRequest("36M 合約限時優惠 A (2025.12.31 前生效)",
                                List.of("$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機",
                                        "$1000 手機/配件電子禮券 或 $2988 inno3C WD25 即熱UV-C 超濾飲水機"),
                                8),
                        new PlanRowRequest("36M 合約限時優惠 B (兩個月內生效)", List.of("500", "500", "500", "500", "500", "500"),
                                9),
                        new PlanRowRequest("36M 合約限時優惠 C (六個月內生效)", List.of("350", "350", "350", "350", "350", "350"),
                                10),
                        new PlanRowRequest("本地流動數據 (全速)",
                                List.of("30GB (全速)", "60GB (全速)", "100GB (全速)", "60GB (全速)", "120GB (全速)",
                                        "200GB (全速)"),
                                11),
                        new PlanRowRequest("本地流動數據 (其後)",
                                List.of("其後 1MB 無限", "其後 1MB 無限", "其後 2MB 無限", "其後 1MB 無限", "其後 1MB 無限", "其後 2MB 無限"),
                                12),
                        new PlanRowRequest("中 + 澳漫游數據", List.of("4GB", "6GB", "6GB", "1GB", "3GB", "3GB"), 13),
                        new PlanRowRequest("傾 King App", List.of("N", "N", "N", "Y", "Y", "Y"), 14),
                        new PlanRowRequest("基本語音分鐘", List.of("無限", "無限", "無限", "無限", "無限", "無限"), 15),
                        new PlanRowRequest("網內短訊", List.of("無限", "無限", "無限", "無限", "無限", "無限"), 16),
                        new PlanRowRequest("網內彩訊", List.of("500", "500", "500", "500", "500", "500"), 17),
                        new PlanRowRequest("國際短訊", List.of("20", "20", "20", "20", "20", "20"), 18),
                        new PlanRowRequest("國際彩訊", List.of("10", "10", "10", "10", "10", "10"), 19),
                        new PlanRowRequest("Wi-Fi 熱點數據用量", List.of("無限", "無限", "無限", "無限", "無限", "無限"), 20)),
                "尊賞方案分標準/升級兩組，升級檔含 King App 並大幅加碼中港澳數據。"));

        return plans;
    }

    /**
     * 列映射信息。
     */
    /**
     * 保存更新流水记录
     *
     * @param record       更新后的记录
     * @param callStatus   致电状态
     * @param remark       备注
     * @param nextCallTime 下次致电时间
     */
    private void saveUpdateLog(SaslRecord record, CallStatus callStatus, String remark, LocalDateTime nextCallTime) {
        try {
            SaslRecordUpdateLog updateLog = new SaslRecordUpdateLog();
            updateLog.setMrt(record.getMrt());
            updateLog.setCallStatus(callStatus);
            updateLog.setRemark(StringUtils.hasText(remark) ? remark.trim() : null);
            updateLog.setNextCallTime(nextCallTime);
            // 获取当前操作用户名
            String operator = AuthContext.getUsername();
            updateLog.setOperator(operator != null ? operator : "SYSTEM");

            updateLogRepository.save(updateLog);
            log.debug("已记录SASL记录更新流水: mrt={}, operator={}", record.getMrt(), operator);
        } catch (Exception e) {
            // 记录流水失败不应该影响主流程，只记录警告日志
            log.warn("记录SASL记录更新流水失败: mrt={}", record.getMrt(), e);
        }
    }

}
