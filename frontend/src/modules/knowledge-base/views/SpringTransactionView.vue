<template>
  <div class="spring-transaction-view">
    <v-container fluid class="pa-4">
      <!-- 标题区域 -->
      <v-card class="mb-4 title-card" elevation="0">
        <v-card-text class="text-center pa-6">
          <div class="text-h4 font-weight-bold mb-2">
            💼 Spring 事务完全指南
          </div>
          <div class="text-subtitle-1 text-medium-emphasis">
            掌握事务，数据一致性不再担心！🛡️
          </div>
        </v-card-text>
      </v-card>

      <v-row>
        <!-- 左侧：核心概念 -->
        <v-col cols="12" md="4">
          <!-- 事务传播机制 -->
          <v-card class="mb-4 concept-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">🔄 事务传播机制</span>
            </v-card-title>
            <v-card-text>
              <v-select
                v-model="selectedPropagation"
                :items="propagationTypes"
                label="选择传播类型"
                density="compact"
                class="mb-3"
              ></v-select>
              <v-alert
                :type="getPropagationAlertType(selectedPropagation)"
                density="compact"
              >
                <div class="text-subtitle-2 mb-1">
                  {{ getPropagationDescription(selectedPropagation).title }}
                </div>
                <div class="text-body-2">
                  {{ getPropagationDescription(selectedPropagation).desc }}
                </div>
              </v-alert>
            </v-card-text>
          </v-card>

          <!-- 事务失效场景 -->
          <v-card class="mb-4 concept-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">❌ 常见失效场景</span>
            </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item>
                  <template #prepend>
                    <v-icon color="error">mdi-close-circle</v-icon>
                  </template>
                  <v-list-item-title>同类内部调用</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="error">mdi-close-circle</v-icon>
                  </template>
                  <v-list-item-title>private/final/static 方法</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="error">mdi-close-circle</v-icon>
                  </template>
                  <v-list-item-title>异常被捕获未抛出</v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="error">mdi-close-circle</v-icon>
                  </template>
                  <v-list-item-title>多线程环境</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>

          <!-- 快速检查清单 -->
          <v-card class="mb-4 concept-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">✅ 事务检查清单</span>
            </v-card-title>
            <v-card-text>
              <v-checkbox
                v-for="(check, idx) in checkList"
                :key="idx"
                :label="check"
                density="compact"
                hide-details
                class="mb-1"
              ></v-checkbox>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 右侧：详细说明 -->
        <v-col cols="12" md="8">
          <!-- 传播机制详解 -->
          <v-card class="mb-4" elevation="2">
            <v-card-title>
              <v-icon color="primary" class="mr-2">mdi-information</v-icon>
              <span>📚 七种传播机制详解</span>
            </v-card-title>
            <v-card-text>
              <v-table>
                <thead>
                  <tr>
                    <th>传播类型</th>
                    <th>有事务时</th>
                    <th>无事务时</th>
                    <th>适用场景</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>REQUIRED</strong>（默认）</td>
                    <td>加入现有事务</td>
                    <td>创建新事务</td>
                    <td>常规业务，最常用</td>
                  </tr>
                  <tr>
                    <td><strong>REQUIRES_NEW</strong></td>
                    <td>挂起，创建新事务</td>
                    <td>创建新事务</td>
                    <td>日志落库、补偿逻辑</td>
                  </tr>
                  <tr>
                    <td><strong>SUPPORTS</strong></td>
                    <td>加入现有事务</td>
                    <td>非事务执行</td>
                    <td>可选的查询操作</td>
                  </tr>
                  <tr>
                    <td><strong>NOT_SUPPORTED</strong></td>
                    <td>挂起事务</td>
                    <td>非事务执行</td>
                    <td>读写分离末尾读</td>
                  </tr>
                  <tr>
                    <td><strong>MANDATORY</strong></td>
                    <td>加入现有事务</td>
                    <td>抛异常</td>
                    <td>必须在事务中</td>
                  </tr>
                  <tr>
                    <td><strong>NEVER</strong></td>
                    <td>抛异常</td>
                    <td>非事务执行</td>
                    <td>禁止事务</td>
                  </tr>
                  <tr>
                    <td><strong>NESTED</strong></td>
                    <td>创建子事务（savepoint）</td>
                    <td>创建新事务</td>
                    <td>部分回滚场景</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>

          <!-- 代码示例 -->
          <v-card class="mb-4" elevation="2">
            <v-card-title>
              <v-icon color="primary" class="mr-2">mdi-code-tags</v-icon>
              <span>💻 代码示例</span>
            </v-card-title>
            <v-card-text>
              <v-tabs v-model="codeTab" color="primary">
                <v-tab value="basic">基础用法</v-tab>
                <v-tab value="propagation">传播机制</v-tab>
                <v-tab value="rollback">回滚策略</v-tab>
                <v-tab value="invalid">失效案例</v-tab>
              </v-tabs>
              <v-window v-model="codeTab" class="mt-4">
                <v-window-item value="basic">
                  <pre class="code-block"><code>// 基础用法
@Service
public class UserService {
    
    @Transactional
    public void transferMoney(Long fromId, Long toId, BigDecimal amount) {
        // 开启事务
        accountDao.deduct(fromId, amount);
        accountDao.add(toId, amount);
        // 提交事务（无异常时）
    }
    
    // 只读事务（优化）
    @Transactional(readOnly = true)
    public User getUser(Long id) {
        return userDao.findById(id);
    }
}</code></pre>
                </v-window-item>
                <v-window-item value="propagation">
                  <pre class="code-block"><code>// 传播机制示例
@Service
public class OrderService {
    
    @Transactional(propagation = Propagation.REQUIRED)
    public void createOrder(Order order) {
        orderDao.save(order);
        // 调用其他方法
        logService.log(order);  // REQUIRED：加入当前事务
    }
}

@Service
public class LogService {
    
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void log(Order order) {
        // 新事务，独立提交
        // 即使外层回滚，日志也会保存
        logDao.save(new Log(order));
    }
}</code></pre>
                </v-window-item>
                <v-window-item value="rollback">
                  <pre class="code-block"><code>// 回滚策略
@Service
public class PaymentService {
    
    // 默认：RuntimeException 和 Error 回滚
    @Transactional
    public void pay1() {
        // RuntimeException → 回滚
    }
    
    // 自定义：所有异常都回滚
    @Transactional(rollbackFor = Exception.class)
    public void pay2() throws Exception {
        // Exception → 回滚
    }
    
    // 指定异常不回滚
    @Transactional(noRollbackFor = BusinessException.class)
    public void pay3() {
        // BusinessException → 不回滚
    }
}</code></pre>
                </v-window-item>
                <v-window-item value="invalid">
                  <pre class="code-block"><code>// ❌ 失效案例 1：同类内部调用
@Service
public class UserService {
    
    public void methodA() {
        this.methodB();  // 不走代理，事务失效
    }
    
    @Transactional
    public void methodB() {
        // 事务不会生效
    }
}

// ✅ 解决方案：拆分到其他 Bean
@Service
public class UserService {
    @Autowired
    private UserHelper userHelper;
    
    public void methodA() {
        userHelper.methodB();  // 走代理，事务生效
    }
}

// ❌ 失效案例 2：异常被捕获
@Transactional
public void save() {
    try {
        userDao.save(user);
    } catch (Exception e) {
        // 异常被吃掉，事务不会回滚
        log.error("保存失败", e);
    }
}

// ✅ 解决方案：重新抛出异常
@Transactional
public void save() {
    try {
        userDao.save(user);
    } catch (Exception e) {
        log.error("保存失败", e);
        throw e;  // 重新抛出，触发回滚
    }
}</code></pre>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>

          <!-- 最佳实践 -->
          <v-card elevation="2">
            <v-card-title>
              <v-icon color="success" class="mr-2">mdi-star</v-icon>
              <span>⭐ 最佳实践</span>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item
                  v-for="(tip, idx) in bestPractices"
                  :key="idx"
                  :prepend-icon="tip.icon"
                >
                  <v-list-item-title>{{ tip.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const selectedPropagation = ref('REQUIRED');
const codeTab = ref('basic');

const propagationTypes = [
  'REQUIRED',
  'REQUIRES_NEW',
  'SUPPORTS',
  'NOT_SUPPORTED',
  'MANDATORY',
  'NEVER',
  'NESTED',
];

const checkList = ref([
  '方法必须是 public',
  '方法不能是 final/static',
  '异常要抛出，不能捕获',
  '必须通过代理对象调用',
  'rollbackFor 配置正确',
]);

const getPropagationDescription = (type: string) => {
  const descriptions: Record<string, { title: string; desc: string }> = {
    REQUIRED: {
      title: '🔄 默认传播机制',
      desc: '有事务就加入，没有就创建。始终保证在一个事务中，最常用！',
    },
    REQUIRES_NEW: {
      title: '🆕 强制新事务',
      desc: '挂起外层事务，创建独立新事务。适合日志、补偿等独立操作。',
    },
    SUPPORTS: {
      title: '🤝 支持事务',
      desc: '有事务就加入，没有就非事务执行。适合可选的查询操作。',
    },
    NOT_SUPPORTED: {
      title: '🚫 不支持事务',
      desc: '挂起现有事务，非事务执行。适合读写分离的末尾读操作。',
    },
    MANDATORY: {
      title: '⚠️ 强制要求事务',
      desc: '必须在事务中，否则抛异常。用于框架级约束。',
    },
    NEVER: {
      title: '❌ 禁止事务',
      desc: '不能在事务中，否则抛异常。用于禁止事务的场景。',
    },
    NESTED: {
      title: '🔗 嵌套事务',
      desc: '创建子事务（savepoint），可部分回滚。需要数据库支持。',
    },
  };
  return descriptions[type] || descriptions.REQUIRED;
};

const getPropagationAlertType = (type: string) => {
  if (type === 'REQUIRED') return 'success';
  if (type === 'REQUIRES_NEW') return 'info';
  if (type === 'NEVER' || type === 'MANDATORY') return 'warning';
  return 'info';
};

const bestPractices = ref([
  {
    icon: 'mdi-check-circle',
    text: '🎯 默认使用 REQUIRED，满足大部分场景',
  },
  {
    icon: 'mdi-check-circle',
    text: '📝 只读操作使用 readOnly=true，提升性能',
  },
  {
    icon: 'mdi-check-circle',
    text: '⚠️ 显式指定 rollbackFor=Exception.class，避免检查异常不回滚',
  },
  {
    icon: 'mdi-check-circle',
    text: '🔒 避免同类内部调用，拆分到其他 Bean',
  },
  {
    icon: 'mdi-check-circle',
    text: '✅ 异常要抛出，不要捕获后忽略',
  },
]);
</script>

<style scoped lang="scss">
.spring-transaction-view {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  min-height: 100vh;
  padding: 20px 0;
}

.title-card {
  background: rgba(255, 255, 255, 0.95) !important;
  border-radius: 20px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
}

.concept-card {
  border-radius: 16px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
}

.code-block {
  background: #263238;
  color: #aed581;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
}
</style>

