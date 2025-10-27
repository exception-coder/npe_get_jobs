package getjobs.service;

import getjobs.common.dto.ConfigDTO;
import getjobs.modules.boss.dto.JobDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;

/**
 * 薪资过滤服务
 * 负责处理所有与薪资相关的过滤逻辑
 * <p>
 * 支持的薪资格式：
 * - 200-250元/天（日薪）
 * - 15-45k·18薪（月薪带年终奖）
 * - 8-15k（月薪）
 * - 15-30K（月薪，大写K）
 */
@Slf4j
@Service
public class SalaryFilterService {

    /**
     * 检查薪资是否符合预期
     *
     * @param jobDTO 职位信息
     * @param config 配置信息
     * @return true表示符合预期，false表示不符合预期
     */
    public boolean isSalaryExpected(JobDTO jobDTO, ConfigDTO config) {
        String salary = jobDTO.getSalary();
        Integer minExpected = config.getMinSalary();
        Integer maxExpected = config.getMaxSalary();

        // 没有薪资信息或期望薪资时默认通过
        if (salary == null || salary.isEmpty() || minExpected == null) {
            return true;
        }

        try {
            Integer[] monthlySalaryRange = parseSalaryToMonthlyRange(salary);
            if (monthlySalaryRange == null) {
                return true; // 解析失败时默认通过
            }

            // 职位薪资上限低于期望最低薪资，不符合
            if (monthlySalaryRange[1] < minExpected) {
                return false;
            }
            // 职位薪资下限高于期望最高薪资，不符合
            if (maxExpected != null && monthlySalaryRange[0] > maxExpected) {
                return false;
            }

            return true;
        } catch (Exception e) {
            log.debug("薪资验证失败: {}", e.getMessage());
            return true; // 验证失败时默认通过
        }
    }

    /**
     * 解析薪资字符串并转换为月薪范围
     *
     * @param salary 薪资字符串，支持格式：
     *               - 200-250元/天
     *               - 15-45k·18薪
     *               - 8-15k
     *               - 15-30K
     * @return 月薪范围 [最低月薪, 最高月薪]（单位：K），解析失败返回null
     */
    private Integer[] parseSalaryToMonthlyRange(String salary) {
        try {
            // 移除年终奖信息（如·18薪）
            salary = salary.replaceAll("·\\d+薪", "");

            // 判断格式是否有效
            boolean isDailySalary = salary.contains("元/天");
            boolean isMonthlySalary = salary.toLowerCase().contains("k");
            if (!isDailySalary && !isMonthlySalary) {
                return null;
            }

            // 清理文本并提取数字范围
            String cleanSalary = salary
                    .replace("K", "")
                    .replace("k", "")
                    .replace("元/天", "")
                    .trim();

            // 去除可能存在的其他后缀（如·后面的内容）
            int dotIndex = cleanSalary.indexOf('·');
            if (dotIndex != -1) {
                cleanSalary = cleanSalary.substring(0, dotIndex);
            }

            // 解析薪资范围
            String[] parts = cleanSalary.split("-");
            if (parts.length != 2) {
                return null;
            }

            int minSalary = Integer.parseInt(parts[0].replaceAll("[^0-9]", ""));
            int maxSalary = Integer.parseInt(parts[1].replaceAll("[^0-9]", ""));

            // 日薪转月薪（假设每月工作21.75天）
            if (isDailySalary) {
                minSalary = BigDecimal.valueOf(minSalary)
                        .multiply(BigDecimal.valueOf(21.75))
                        .divide(BigDecimal.valueOf(1000), 0, RoundingMode.HALF_UP)
                        .intValue();
                maxSalary = BigDecimal.valueOf(maxSalary)
                        .multiply(BigDecimal.valueOf(21.75))
                        .divide(BigDecimal.valueOf(1000), 0, RoundingMode.HALF_UP)
                        .intValue();
            }

            return new Integer[] { minSalary, maxSalary };
        } catch (Exception e) {
            log.debug("薪资解析失败: salary={}, error={}", salary, e.getMessage());
            return null;
        }
    }
}
