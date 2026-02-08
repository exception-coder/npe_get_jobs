<template>
  <div class="spring-bean-creation-view">
    <v-container fluid>
      <v-row>
        <!-- 左侧：知识点讲解 -->
        <v-col cols="12" md="4">
          <v-card class="mb-4" elevation="2">
            <v-card-title class="d-flex align-center">
              <v-icon color="primary" class="mr-2">mdi-book-open-variant</v-icon>
              <span>Bean 创建方式</span>
            </v-card-title>
            <v-card-text>
              <v-tabs v-model="activeTab" color="primary">
                <v-tab value="component">@Component</v-tab>
                <v-tab value="bean">@Bean</v-tab>
                <v-tab value="factory">FactoryBean</v-tab>
                <v-tab value="dynamic">动态创建</v-tab>
              </v-tabs>
              
              <v-window v-model="activeTab" class="mt-4">
                <!-- @Component 方式 -->
                <v-window-item value="component">
                  <div class="knowledge-content">
                    <h3 class="text-h6 mb-3">@Component 系列</h3>
                    <p class="text-body-2 mb-2">
                      <strong>最常用的创建方式</strong>，通过组件扫描自动发现并注册 Bean。
                    </p>
                    <v-list density="compact">
                      <v-list-item>
                        <template #prepend>
                          <v-icon size="small" color="success">mdi-check-circle</v-icon>
                        </template>
                        <v-list-item-title>@Component - 通用组件</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <template #prepend>
                          <v-icon size="small" color="success">mdi-check-circle</v-icon>
                        </template>
                        <v-list-item-title>@Service - 业务层</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <template #prepend>
                          <v-icon size="small" color="success">mdi-check-circle</v-icon>
                        </template>
                        <v-list-item-title>@Repository - 数据访问层</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <template #prepend>
                          <v-icon size="small" color="success">mdi-check-circle</v-icon>
                        </template>
                        <v-list-item-title>@Controller - MVC 控制器</v-list-item-title>
                      </v-list-item>
                    </v-list>
                    <v-alert type="info" density="compact" class="mt-3">
                      <strong>原理：</strong>ClassPathBeanDefinitionScanner 扫描指定包路径，发现注解后生成 BeanDefinition
                    </v-alert>
                  </div>
                </v-window-item>

                <!-- @Bean 方式 -->
                <v-window-item value="bean">
                  <div class="knowledge-content">
                    <h3 class="text-h6 mb-3">@Bean + @Configuration</h3>
                    <p class="text-body-2 mb-2">
                      <strong>手动装配方式</strong>，适合第三方类集成和 Starter 自动配置。
                    </p>
                    <v-alert type="success" density="compact" class="mb-3">
                      <strong>适用场景：</strong>
                      <ul class="mt-2">
                        <li>手动装配第三方类</li>
                        <li>Starter 自动配置</li>
                        <li>多实现下的显式 Bean 创建</li>
                        <li>需要精确控制创建细节</li>
                      </ul>
                    </v-alert>
                    <v-alert type="info" density="compact">
                      <strong>本质：</strong>方法返回值被注册为 BeanDefinition
                    </v-alert>
                  </div>
                </v-window-item>

                <!-- FactoryBean -->
                <v-window-item value="factory">
                  <div class="knowledge-content">
                    <h3 class="text-h6 mb-3">FactoryBean</h3>
                    <p class="text-body-2 mb-2">
                      <strong>特殊的 Bean</strong>，用于创建复杂对象（如代理对象、远程服务）。
                    </p>
                    <v-list density="compact">
                      <v-list-item>
                        <v-list-item-title><strong>核心特点：</strong></v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>getBean() 返回 getObject() 的产物，而非 FactoryBean 本身</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>获取 FactoryBean 本身：使用 &beanName</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>常用于框架集成（如 Dubbo 的 ReferenceBean）</v-list-item-title>
                      </v-list-item>
                    </v-list>
                    <v-alert type="warning" density="compact" class="mt-3">
                      <strong>区别：</strong>BeanFactory 是容器，FactoryBean 是 Bean 创建策略
                    </v-alert>
                  </div>
                </v-window-item>

                <!-- 动态创建 -->
                <v-window-item value="dynamic">
                  <div class="knowledge-content">
                    <h3 class="text-h6 mb-3">动态 Bean 创建</h3>
                    <p class="text-body-2 mb-2">
                      <strong>根据运行时配置</strong>决定是否创建、创建多少或创建什么类型的 Bean。
                    </p>
                    <v-list density="compact">
                      <v-list-item>
                        <v-list-item-title><strong>@Conditional</strong> - 条件化注册</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title><strong>@ConfigurationProperties</strong> - 配置驱动</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title><strong>BeanDefinitionRegistryPostProcessor</strong> - 编程式注册</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title><strong>@Profile</strong> - 环境级分组</v-list-item-title>
                      </v-list-item>
                    </v-list>
                    <v-alert type="info" density="compact" class="mt-3">
                      <strong>适用场景：</strong>多数据源、插件化架构、租户隔离、功能灰度
                    </v-alert>
                  </div>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>

          <!-- 关键点总结 -->
          <v-card elevation="2">
            <v-card-title>
              <v-icon color="primary" class="mr-2">mdi-lightbulb-on</v-icon>
              <span>关键点</span>
            </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item v-for="(point, idx) in keyPoints" :key="idx">
                  <template #prepend>
                    <v-icon size="small" color="primary">mdi-circle-small</v-icon>
                  </template>
                  <v-list-item-title class="text-body-2">{{ point }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 右侧：动画演示区域 -->
        <v-col cols="12" md="8">
          <v-card elevation="2" class="animation-container">
            <v-card-title class="d-flex align-center justify-space-between">
              <div class="d-flex align-center">
                <v-icon color="primary" class="mr-2">mdi-animation-play</v-icon>
                <span>动画演示</span>
              </div>
              <div>
                <v-btn
                  color="primary"
                  size="small"
                  prepend-icon="mdi-play"
                  @click="playAnimation"
                  :disabled="isAnimating"
                  class="mr-2"
                >
                  播放动画
                </v-btn>
                <v-btn
                  color="secondary"
                  size="small"
                  prepend-icon="mdi-restore"
                  @click="resetAnimation"
                >
                  重置
                </v-btn>
              </div>
            </v-card-title>
            <v-card-text>
              <!-- 动画画布 -->
              <div class="animation-canvas" ref="animationCanvas">
                <!-- Bean 创建流程图 -->
                <svg :width="canvasWidth" :height="canvasHeight" class="flow-svg">
                  <!-- 背景网格 -->
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e0e0" stroke-width="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  <!-- 步骤节点 -->
                  <g v-for="(step, idx) in animationSteps" :key="step.id">
                    <!-- 节点 -->
                    <g
                      :class="['step-node', { 'active': step.active, 'completed': step.completed }]"
                      :style="{ 
                        transform: `translate(${step.x}px, ${step.y}px)`,
                        opacity: step.visible ? 1 : 0,
                        transition: 'all 0.5s ease'
                      }"
                    >
                      <!-- 节点背景 -->
                      <rect
                        :width="step.width"
                        :height="step.height"
                        :rx="8"
                        :fill="step.completed ? '#4caf50' : step.active ? '#2196f3' : '#f5f5f5'"
                        :stroke="step.active ? '#1976d2' : '#bdbdbd'"
                        stroke-width="2"
                        class="node-rect"
                      />
                      <!-- 节点图标 -->
                      <text
                        :x="step.width / 2"
                        :y="step.height / 2 - 10"
                        text-anchor="middle"
                        font-size="24"
                        :fill="step.completed || step.active ? 'white' : '#666'"
                      >
                        {{ step.icon }}
                      </text>
                      <!-- 节点标签 -->
                      <text
                        :x="step.width / 2"
                        :y="step.height / 2 + 15"
                        text-anchor="middle"
                        font-size="12"
                        font-weight="bold"
                        :fill="step.completed || step.active ? 'white' : '#666'"
                      >
                        {{ step.label }}
                      </text>
                    </g>

                    <!-- 连接线 -->
                    <line
                      v-if="idx > 0 && animationSteps[idx - 1].visible"
                      :x1="animationSteps[idx - 1].x + animationSteps[idx - 1].width / 2"
                      :y1="animationSteps[idx - 1].y + animationSteps[idx - 1].height / 2"
                      :x2="step.x + step.width / 2"
                      :y2="step.y + step.height / 2"
                      :stroke="step.completed || step.active ? '#4caf50' : '#bdbdbd'"
                      :stroke-width="step.completed || step.active ? 3 : 1"
                      :stroke-dasharray="step.completed || step.active ? '0' : '5,5'"
                      marker-end="url(#arrowhead)"
                      class="connection-line"
                      :style="{ 
                        opacity: step.visible ? 1 : 0,
                        transition: 'all 0.5s ease'
                      }"
                    />
                  </g>

                  <!-- 箭头标记 -->
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="10"
                      refX="9"
                      refY="3"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3, 0 6" fill="#4caf50" />
                    </marker>
                  </defs>
                </svg>

                <!-- 代码示例区域 -->
                <div
                  v-if="currentStep"
                  class="code-example-card"
                  :style="{
                    opacity: currentStep.visible ? 1 : 0,
                    transition: 'opacity 0.5s ease'
                  }"
                >
                  <v-card elevation="4">
                    <v-card-title class="text-subtitle-2">
                      {{ currentStep.label }} - 代码示例
                    </v-card-title>
                    <v-card-text>
                      <pre class="code-block"><code>{{ currentStep.code }}</code></pre>
                    </v-card-text>
                  </v-card>
                </div>
              </div>
            </v-card-text>
          </v-card>

          <!-- 详细说明 -->
          <v-card class="mt-4" elevation="2">
            <v-card-title>
              <v-icon color="primary" class="mr-2">mdi-information</v-icon>
              <span>详细说明</span>
            </v-card-title>
            <v-card-text>
              <v-expansion-panels v-model="expandedPanels" multiple>
                <v-expansion-panel
                  v-for="(detail, idx) in detailedExplanations"
                  :key="idx"
                  :title="detail.title"
                >
                  <v-expansion-panel-text>
                    <div v-html="detail.content"></div>
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// 响应式数据
const activeTab = ref('component');
const isAnimating = ref(false);
const animationCanvas = ref<HTMLElement | null>(null);
const canvasWidth = ref(800);
const canvasHeight = ref(600);
const expandedPanels = ref<number[]>([]);

// 关键点
const keyPoints = ref([
  '所有创建方式最终都向 BeanDefinitionRegistry 汇聚',
  '@Component 基于扫描，@Bean/@Import 基于显式声明',
  '@Import 扩展能力最强，是自动配置的底层核心',
  '第三方框架通过 BeanFactoryPostProcessor 批量注册 Bean',
  'Bean 创建方式多样，但生命周期统一由 IoC 管理',
]);

// 动画步骤
const animationSteps = ref([
  {
    id: 'scan',
    label: '组件扫描',
    icon: '🔍',
    x: 50,
    y: 100,
    width: 120,
    height: 80,
    active: false,
    completed: false,
    visible: true,
    code: `@Component
public class UserService {
    // 自动扫描并注册为 Bean
}`,
  },
  {
    id: 'definition',
    label: '生成 BeanDefinition',
    icon: '📋',
    x: 220,
    y: 100,
    width: 140,
    height: 80,
    active: false,
    completed: false,
    visible: false,
    code: `BeanDefinition {
    beanClassName: "UserService"
    scope: "singleton"
    // ... 其他元数据
}`,
  },
  {
    id: 'register',
    label: '注册到容器',
    icon: '📦',
    x: 410,
    y: 100,
    width: 120,
    height: 80,
    active: false,
    completed: false,
    visible: false,
    code: `BeanDefinitionRegistry
    .registerBeanDefinition(
        "userService",
        beanDefinition
    )`,
  },
  {
    id: 'instantiate',
    label: '实例化 Bean',
    icon: '🏗️',
    x: 580,
    y: 100,
    width: 120,
    height: 80,
    active: false,
    completed: false,
    visible: false,
    code: `// 通过反射创建实例
Object bean = 
    Class.forName(className)
        .newInstance();`,
  },
  {
    id: 'inject',
    label: '依赖注入',
    icon: '💉',
    x: 220,
    y: 250,
    width: 120,
    height: 80,
    active: false,
    completed: false,
    visible: false,
    code: `// 注入依赖
@Autowired
private UserDao userDao;`,
  },
  {
    id: 'init',
    label: '初始化',
    icon: '✨',
    x: 410,
    y: 250,
    width: 120,
    height: 80,
    active: false,
    completed: false,
    visible: false,
    code: `@PostConstruct
public void init() {
    // 初始化逻辑
}`,
  },
  {
    id: 'ready',
    label: 'Bean 就绪',
    icon: '✅',
    x: 580,
    y: 250,
    width: 120,
    height: 80,
    active: false,
    completed: false,
    visible: false,
    code: `// Bean 已可用
ApplicationContext
    .getBean("userService")`,
  },
]);

// 当前步骤
const currentStep = computed(() => {
  return animationSteps.value.find(step => step.active) || animationSteps.value[0];
});

// 详细说明
const detailedExplanations = ref([
  {
    title: '@Component 系列 - 组件扫描机制',
    content: `
      <p><strong>工作原理：</strong></p>
      <ul>
        <li>Spring 通过 ClassPathBeanDefinitionScanner 扫描指定包路径</li>
        <li>发现带有 @Component、@Service、@Repository、@Controller 等注解的类</li>
        <li>为每个类生成 BeanDefinition 并注册到容器</li>
        <li>容器启动时实例化这些 Bean</li>
      </ul>
      <p><strong>优点：</strong>自动发现，无需手动配置</p>
      <p><strong>缺点：</strong>只能对本类实例化，无法精确控制创建细节</p>
    `,
  },
  {
    title: '@Bean + @Configuration - 手动装配',
    content: `
      <p><strong>工作原理：</strong></p>
      <ul>
        <li>在 @Configuration 类中定义 @Bean 方法</li>
        <li>方法返回值被注册为 BeanDefinition</li>
        <li>支持条件化创建（@Conditional）</li>
        <li>可以指定构造参数、初始化方法等</li>
      </ul>
      <p><strong>适用场景：</strong></p>
      <ul>
        <li>第三方类集成（如 RedisTemplate、RestTemplate）</li>
        <li>SpringBoot Starter 自动配置</li>
        <li>多实现下的显式 Bean 创建</li>
      </ul>
    `,
  },
  {
    title: 'FactoryBean - 工厂 Bean',
    content: `
      <p><strong>工作原理：</strong></p>
      <ul>
        <li>FactoryBean 本身是一个 Bean</li>
        <li>当调用 getBean() 时，返回的是 getObject() 的产物</li>
        <li>要获取 FactoryBean 本身，使用 &beanName</li>
      </ul>
      <p><strong>典型应用：</strong></p>
      <ul>
        <li>Dubbo 的 ReferenceBean - 创建远程服务代理</li>
        <li>MyBatis 的 SqlSessionFactoryBean - 创建 SqlSessionFactory</li>
        <li>复杂对象的创建逻辑封装</li>
      </ul>
    `,
  },
  {
    title: '动态 Bean 创建 - 条件化注册',
    content: `
      <p><strong>实现方式：</strong></p>
      <ul>
        <li><strong>@Conditional：</strong>实现 Condition 接口，自定义条件判断</li>
        <li><strong>@ConditionalOnProperty：</strong>基于配置项控制是否创建</li>
        <li><strong>@ConfigurationProperties：</strong>配置绑定，根据配置生成 Bean</li>
        <li><strong>BeanDefinitionRegistryPostProcessor：</strong>编程式注册，最灵活</li>
        <li><strong>@Profile：</strong>按环境分组，不同环境加载不同 Bean</li>
      </ul>
      <p><strong>应用场景：</strong>多数据源、插件化架构、租户隔离、功能灰度</p>
    `,
  },
]);

// 播放动画
const playAnimation = async () => {
  if (isAnimating.value) return;
  
  isAnimating.value = true;
  
  // 重置所有步骤
  animationSteps.value.forEach(step => {
    step.active = false;
    step.completed = false;
    step.visible = false;
  });
  
  // 逐步显示和激活
  for (let i = 0; i < animationSteps.value.length; i++) {
    const step = animationSteps.value[i];
    
    // 显示当前步骤
    step.visible = true;
    step.active = true;
    
    // 等待动画完成
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 标记为完成
    step.completed = true;
    step.active = false;
    
    // 等待一下再继续
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  
  isAnimating.value = false;
};

// 重置动画
const resetAnimation = () => {
  isAnimating.value = false;
  animationSteps.value.forEach(step => {
    step.active = false;
    step.completed = false;
    step.visible = step.id === 'scan'; // 只显示第一步
  });
};

// 根据选中的标签页更新动画步骤
const updateAnimationForTab = () => {
  // 可以根据不同的标签页显示不同的动画流程
  // 这里简化处理，统一使用相同的流程
};

onMounted(() => {
  // 初始化：只显示第一步
  resetAnimation();
  
  // 监听标签页切换
  // updateAnimationForTab();
});
</script>

<style scoped lang="scss">
.spring-bean-creation-view {
  padding: 20px;
  background: #f5f5f5;
  min-height: calc(100vh - 64px);
}

.knowledge-content {
  min-height: 300px;
}

.animation-container {
  .animation-canvas {
    position: relative;
    width: 100%;
    height: 600px;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    
    .flow-svg {
      width: 100%;
      height: 100%;
    }
    
    .step-node {
      cursor: pointer;
      
      .node-rect {
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        transition: all 0.3s ease;
      }
      
      &.active .node-rect {
        filter: drop-shadow(0 4px 8px rgba(33, 150, 243, 0.4));
        animation: pulse 1s ease-in-out infinite;
      }
      
      &.completed .node-rect {
        filter: drop-shadow(0 4px 8px rgba(76, 175, 80, 0.4));
      }
      
      &:hover .node-rect {
        transform: scale(1.05);
      }
    }
    
    .connection-line {
      transition: all 0.5s ease;
    }
    
    .code-example-card {
      position: absolute;
      bottom: 20px;
      left: 20px;
      right: 20px;
      max-width: 500px;
      margin: 0 auto;
      
      .code-block {
        background: #263238;
        color: #aed581;
        padding: 16px;
        border-radius: 4px;
        overflow-x: auto;
        font-family: 'Courier New', monospace;
        font-size: 13px;
        line-height: 1.6;
        margin: 0;
      }
    }
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

// 响应式设计
@media (max-width: 960px) {
  .spring-bean-creation-view {
    .animation-canvas {
      height: 400px;
    }
  }
}
</style>

