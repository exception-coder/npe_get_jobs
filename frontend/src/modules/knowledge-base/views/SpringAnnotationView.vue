<template>
  <div class="spring-annotation-view">
    <v-container fluid class="pa-4">
      <!-- 标题区域 -->
      <v-card class="mb-4 title-card" elevation="0">
        <v-card-text class="text-center pa-6">
          <div class="text-h4 font-weight-bold mb-2">
            🏷️ Spring 注解完全指南
          </div>
          <div class="text-subtitle-1 text-medium-emphasis">
            掌握这些注解，Spring 开发事半功倍！🚀
          </div>
        </v-card-text>
      </v-card>

      <v-row>
        <!-- 左侧：注解分类 -->
        <v-col cols="12" md="4">
          <!-- Bean 注册注解 -->
          <v-card class="mb-4 annotation-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">📦 Bean 注册注解</span>
            </v-card-title>
            <v-card-text>
              <v-tabs v-model="beanTab" color="primary" direction="vertical">
                <v-tab value="component">@Component</v-tab>
                <v-tab value="service">@Service</v-tab>
                <v-tab value="repository">@Repository</v-tab>
                <v-tab value="controller">@Controller</v-tab>
              </v-tabs>
              <v-window v-model="beanTab" class="mt-4">
                <v-window-item value="component">
                  <div class="annotation-detail">
                    <v-chip color="primary" size="small" class="mb-2">通用组件</v-chip>
                    <p class="text-body-2">最基础的 Bean 注册注解</p>
                    <v-alert type="info" density="compact" class="mt-2">
                      其他注解都是它的特化版本
                    </v-alert>
                  </div>
                </v-window-item>
                <v-window-item value="service">
                  <div class="annotation-detail">
                    <v-chip color="success" size="small" class="mb-2">业务层</v-chip>
                    <p class="text-body-2">标识服务层组件</p>
                    <v-alert type="success" density="compact" class="mt-2">
                      语义清晰，推荐用于 Service 层
                    </v-alert>
                  </div>
                </v-window-item>
                <v-window-item value="repository">
                  <div class="annotation-detail">
                    <v-chip color="warning" size="small" class="mb-2">数据访问层</v-chip>
                    <p class="text-body-2">标识 DAO 层组件</p>
                    <v-alert type="warning" density="compact" class="mt-2">
                      <strong>特殊功能：</strong>自动转换数据访问异常
                    </v-alert>
                  </div>
                </v-window-item>
                <v-window-item value="controller">
                  <div class="annotation-detail">
                    <v-chip color="info" size="small" class="mb-2">Web 控制器</v-chip>
                    <p class="text-body-2">处理 HTTP 请求</p>
                    <v-alert type="info" density="compact" class="mt-2">
                      @RestController = @Controller + @ResponseBody
                    </v-alert>
                  </div>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>

          <!-- 依赖注入注解 -->
          <v-card class="mb-4 annotation-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">💉 依赖注入注解</span>
            </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-autorenew</v-icon>
                  </template>
                  <v-list-item-title><strong>@Autowired</strong></v-list-item-title>
                  <v-list-item-subtitle>Spring 官方，按类型优先</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success">mdi-package-variant</v-icon>
                  </template>
                  <v-list-item-title><strong>@Resource</strong></v-list-item-title>
                  <v-list-item-subtitle>JSR-250 标准，按名称优先</v-list-item-subtitle>
                </v-list-item>
              </v-list>
              <v-alert type="warning" density="compact" class="mt-3">
                <strong>⚠️ 字段注入不推荐！</strong><br/>
                推荐使用构造器注入，更安全、更易测试
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 右侧：详细对比和示例 -->
        <v-col cols="12" md="8">
          <!-- Autowired vs Resource -->
          <v-card class="mb-4" elevation="2">
            <v-card-title>
              <v-icon color="primary" class="mr-2">mdi-compare</v-icon>
              <span>🔍 @Autowired vs @Resource</span>
            </v-card-title>
            <v-card-text>
              <v-table>
                <thead>
                  <tr>
                    <th>对比项</th>
                    <th>@Autowired</th>
                    <th>@Resource</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>来源</strong></td>
                    <td>Spring 框架</td>
                    <td>JSR-250 标准</td>
                  </tr>
                  <tr>
                    <td><strong>匹配顺序</strong></td>
                    <td>ByType → ByName</td>
                    <td>ByName → ByType</td>
                  </tr>
                  <tr>
                    <td><strong>构造器注入</strong></td>
                    <td>✅ 支持</td>
                    <td>❌ 不支持</td>
                  </tr>
                  <tr>
                    <td><strong>可选依赖</strong></td>
                    <td>✅ required=false</td>
                    <td>❌ 必须存在</td>
                  </tr>
                  <tr>
                    <td><strong>容器迁移</strong></td>
                    <td>❌ 仅限 Spring</td>
                    <td>✅ 跨容器兼容</td>
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
              <v-tabs v-model="exampleTab" color="primary">
                <v-tab value="bad">❌ 不推荐</v-tab>
                <v-tab value="good">✅ 推荐</v-tab>
                <v-tab value="comparison">对比说明</v-tab>
              </v-tabs>
              <v-window v-model="exampleTab" class="mt-4">
                <v-window-item value="bad">
                  <pre class="code-block"><code>// ❌ 字段注入 - 不推荐
@Service
public class UserService {
    @Autowired
    private UserDao userDao;  // 隐藏依赖
    
    @Autowired
    private OrderService orderService;
    
    // 问题：
    // 1. 依赖不显式，难以发现
    // 2. 无法保证不可变性
    // 3. 不利于单元测试
    // 4. 构造时可能 NPE
}</code></pre>
                </v-window-item>
                <v-window-item value="good">
                  <pre class="code-block"><code>// ✅ 构造器注入 - 推荐
@Service
public class UserService {
    private final UserDao userDao;
    private final OrderService orderService;
    
    // Spring 4.3+ 单构造器可省略 @Autowired
    public UserService(
            UserDao userDao,
            OrderService orderService) {
        this.userDao = userDao;
        this.orderService = orderService;
    }
    
    // 优点：
    // 1. 依赖显式声明
    // 2. final 字段，不可变
    // 3. 便于单元测试
    // 4. 构造时即完成注入
}</code></pre>
                </v-window-item>
                <v-window-item value="comparison">
                  <div class="comparison-box">
                    <div class="comparison-item bad">
                      <div class="comparison-title">❌ 字段注入</div>
                      <ul>
                        <li>隐藏依赖关系</li>
                        <li>无法保证不可变</li>
                        <li>必须依赖容器测试</li>
                        <li>构造时可能 NPE</li>
                      </ul>
                    </div>
                    <div class="comparison-item good">
                      <div class="comparison-title">✅ 构造器注入</div>
                      <ul>
                        <li>依赖显式声明</li>
                        <li>final 字段，不可变</li>
                        <li>可直接 Mock 测试</li>
                        <li>构造时即完成注入</li>
                      </ul>
                    </div>
                  </div>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>

          <!-- 注解区别详解 -->
          <v-card class="mb-4" elevation="2">
            <v-card-title>
              <v-icon color="primary" class="mr-2">mdi-help-circle</v-icon>
              <span>🤔 常见问题</span>
            </v-card-title>
            <v-card-text>
              <v-expansion-panels>
                <v-expansion-panel
                  v-for="(qa, idx) in commonQuestions"
                  :key="idx"
                  :title="qa.question"
                >
                  <v-expansion-panel-text>
                    <div class="text-body-2">
                      <strong>💡 答案：</strong>{{ qa.answer }}
                    </div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
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
import { ref } from 'vue';

const beanTab = ref('component');
const exampleTab = ref('bad');

const commonQuestions = ref([
  {
    question: '🤔 @Service 和 @Component 有什么区别？',
    answer: '本质上都是 @Component 的特化，@Service 只是语义标识，功能上几乎一致。但使用 @Service 能让代码分层更清晰，便于维护和理解。',
  },
  {
    question: '🤔 @Repository 有什么特殊功能？',
    answer: '@Repository 会自动转换数据访问异常，将底层异常（如 SQLException）转换为 Spring 的 DataAccessException，这是它与其他注解的唯一功能差异。',
  },
  {
    question: '🤔 为什么字段注入不推荐？',
    answer: '字段注入隐藏依赖、无法保证不可变性、不利于测试、构造时可能 NPE。构造器注入能显式声明依赖、支持 final 字段、便于 Mock 测试，是业界最佳实践。',
  },
  {
    question: '🤔 @Autowired 和 @Resource 选哪个？',
    answer: '推荐使用 @Autowired（或构造器注入，Spring 4.3+ 可省略注解）。@Resource 适合需要跨容器兼容的场景，但功能较弱，不支持构造器注入。',
  },
]);

const bestPractices = ref([
  {
    icon: 'mdi-check-circle',
    text: '🎯 优先使用构造器注入，避免字段注入',
  },
  {
    icon: 'mdi-check-circle',
    text: '📝 使用 @Service、@Repository 等语义注解，让代码更清晰',
  },
  {
    icon: 'mdi-check-circle',
    text: '✅ Spring 4.3+ 单构造器可省略 @Autowired',
  },
  {
    icon: 'mdi-check-circle',
    text: '🔒 使用 final 字段 + 构造器注入，保证不可变性',
  },
  {
    icon: 'mdi-check-circle',
    text: '⚡ 可选依赖使用 @Autowired(required=false) 或 setter 注入',
  },
]);
</script>

<style scoped lang="scss">
.spring-annotation-view {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  min-height: 100vh;
  padding: 20px 0;
}

.title-card {
  background: rgba(255, 255, 255, 0.95) !important;
  border-radius: 20px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
}

.annotation-card {
  border-radius: 16px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
}

.annotation-detail {
  min-height: 100px;
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

.comparison-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  .comparison-item {
    padding: 16px;
    border-radius: 12px;
    
    &.bad {
      background: #ffebee;
      border-left: 4px solid #f44336;
    }
    
    &.good {
      background: #e8f5e9;
      border-left: 4px solid #4caf50;
    }
    
    .comparison-title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 12px;
    }
    
    ul {
      margin: 0;
      padding-left: 20px;
      
      li {
        margin-bottom: 8px;
        font-size: 14px;
      }
    }
  }
}

@media (max-width: 960px) {
  .comparison-box {
    grid-template-columns: 1fr;
  }
}
</style>

