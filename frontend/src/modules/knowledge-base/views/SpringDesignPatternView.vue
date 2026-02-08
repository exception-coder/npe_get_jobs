<template>
  <div class="spring-design-pattern-view">
    <v-container fluid class="pa-4">
      <!-- 标题区域 -->
      <v-card class="mb-4 title-card" elevation="0">
        <v-card-text class="text-center pa-6">
          <div class="text-h4 font-weight-bold mb-2">
            🎨 Spring 设计模式大揭秘
          </div>
          <div class="text-subtitle-1 text-medium-emphasis">
            看 Spring 如何优雅地运用设计模式！✨
          </div>
        </v-card-text>
      </v-card>

      <v-row>
        <!-- 左侧：模式列表 -->
        <v-col cols="12" md="4">
          <!-- 模式选择 -->
          <v-card class="mb-4 pattern-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">📋 设计模式列表</span>
            </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item
                  v-for="(pattern, idx) in designPatterns"
                  :key="idx"
                  :active="selectedPattern === pattern.id"
                  @click="selectedPattern = pattern.id"
                  class="pattern-item"
                >
                  <template #prepend>
                    <v-icon :color="pattern.color">{{ pattern.icon }}</v-icon>
                  </template>
                  <v-list-item-title>{{ pattern.name }}</v-list-item-title>
                  <template #append>
                    <v-chip size="small" :color="pattern.color" variant="tonal">
                      {{ pattern.level }}
                    </v-chip>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>

          <!-- 模式统计 -->
          <v-card class="mb-4 pattern-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">📊 模式统计</span>
            </v-card-title>
            <v-card-text>
              <div class="stat-item">
                <div class="stat-label">核心模式</div>
                <div class="stat-value">8 种</div>
              </div>
              <div class="stat-item">
                <div class="stat-label">应用场景</div>
                <div class="stat-value">框架各处</div>
              </div>
              <v-alert type="info" density="compact" class="mt-3">
                这些模式组合使用，构建了 Spring 的高度解耦与可扩展性
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 右侧：详细说明 -->
        <v-col cols="12" md="8">
          <!-- 当前选中模式的详细说明 -->
          <v-card class="mb-4" elevation="2" v-if="currentPattern">
            <v-card-title class="d-flex align-center">
              <v-icon :color="currentPattern.color" class="mr-2">{{ currentPattern.icon }}</v-icon>
              <span>{{ currentPattern.name }}</span>
            </v-card-title>
            <v-card-text>
              <v-alert
                :type="getAlertType(currentPattern.color)"
                density="compact"
                class="mb-4"
              >
                <strong>{{ currentPattern.description }}</strong>
              </v-alert>

              <div class="pattern-detail">
                <div class="detail-section">
                  <div class="section-title">📍 在 Spring 中的应用</div>
                  <div class="section-content">
                    <v-list density="compact">
                      <v-list-item
                        v-for="(app, idx) in currentPattern.applications"
                        :key="idx"
                      >
                        <template #prepend>
                          <v-icon size="small" color="primary">mdi-check-circle</v-icon>
                        </template>
                        <v-list-item-title>{{ app }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </div>
                </div>

                <div class="detail-section">
                  <div class="section-title">💡 核心原理</div>
                  <div class="section-content">
                    <p class="text-body-2">{{ currentPattern.principle }}</p>
                  </div>
                </div>

                <div class="detail-section" v-if="currentPattern.codeExample">
                  <div class="section-title">💻 代码示例</div>
                  <div class="section-content">
                    <pre class="code-block"><code>{{ currentPattern.codeExample }}</code></pre>
                  </div>
                </div>
              </div>
            </v-card-text>
          </v-card>

          <!-- 模式关系图 -->
          <v-card class="mb-4" elevation="2">
            <v-card-title>
              <v-icon color="primary" class="mr-2">mdi-sitemap</v-icon>
              <span>🔗 模式关系图</span>
            </v-card-title>
            <v-card-text>
              <div class="pattern-relationship">
                <div class="relationship-item">
                  <div class="relationship-node factory">工厂模式</div>
                  <div class="relationship-arrow">→</div>
                  <div class="relationship-node ioc">IOC 容器</div>
                </div>
                <div class="relationship-item">
                  <div class="relationship-node proxy">代理模式</div>
                  <div class="relationship-arrow">→</div>
                  <div class="relationship-node aop">AOP 增强</div>
                </div>
                <div class="relationship-item">
                  <div class="relationship-node observer">观察者模式</div>
                  <div class="relationship-arrow">→</div>
                  <div class="relationship-node event">事件机制</div>
                </div>
                <div class="relationship-item">
                  <div class="relationship-node template">模板方法</div>
                  <div class="relationship-arrow">→</div>
                  <div class="relationship-node tx">事务模板</div>
                </div>
              </div>
            </v-card-text>
          </v-card>

          <!-- 最佳实践 -->
          <v-card elevation="2">
            <v-card-title>
              <v-icon color="success" class="mr-2">mdi-star</v-icon>
              <span>⭐ 设计模式的价值</span>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item
                  v-for="(value, idx) in patternValues"
                  :key="idx"
                  :prepend-icon="value.icon"
                >
                  <v-list-item-title>{{ value.text }}</v-list-item-title>
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

const selectedPattern = ref('factory');

const designPatterns = ref([
  {
    id: 'factory',
    name: '工厂模式',
    icon: 'mdi-factory',
    color: 'primary',
    level: '核心',
    description: 'IOC 容器统一管理 Bean 的创建，彻底屏蔽对象创建细节',
    principle: '通过 BeanFactory/ApplicationContext 统一创建和管理对象，取代 new 操作，实现对象生命周期的集中管理。',
    applications: [
      'BeanFactory - Bean 创建工厂',
      'ApplicationContext - 增强版工厂',
      'BeanDefinition - Bean 定义',
      '自动装配机制',
    ],
    codeExample: `// Spring IOC = 工厂模式的极致应用
ApplicationContext context = 
    new AnnotationConfigApplicationContext(AppConfig.class);

// 从工厂获取 Bean，而不是 new
UserService userService = 
    context.getBean(UserService.class);

// 工厂负责：
// 1. 创建对象
// 2. 依赖注入
// 3. 生命周期管理`,
  },
  {
    id: 'proxy',
    name: '代理模式',
    icon: 'mdi-shield-account',
    color: 'success',
    level: '核心',
    description: 'AOP 基于动态代理增强方法，实现横切逻辑',
    principle: '通过 JDK 动态代理或 CGLIB 生成代理对象，在方法调用前后织入增强逻辑（事务、日志、安全等）。',
    applications: [
      'AOP 代理创建',
      '事务管理',
      '日志记录',
      '性能监控',
    ],
    codeExample: `// AOP 代理模式
@Aspect
@Component
public class LogAspect {
    @Around("execution(* com.example.service.*.*(..))")
    public Object around(ProceedingJoinPoint pjp) {
        // 代理增强逻辑
        System.out.println("方法执行前");
        Object result = pjp.proceed();
        System.out.println("方法执行后");
        return result;
    }
}`,
  },
  {
    id: 'singleton',
    name: '单例模式',
    icon: 'mdi-cube-outline',
    color: 'warning',
    level: '重要',
    description: 'Spring Bean 默认单例，减少对象创建成本',
    principle: '容器中通过一级/二级/三级缓存保证单例 Bean 的唯一性，提升性能并便于缓存与复用。',
    applications: [
      'Bean 默认作用域',
      '单例池管理',
      '缓存机制',
    ],
    codeExample: `// Spring 单例模式
@Service  // 默认单例
public class UserService {
    // 整个应用只有一个实例
}

// 可通过 @Scope 改变
@Scope("prototype")  // 多例
public class TaskService {
    // 每次获取都是新实例
}`,
  },
  {
    id: 'observer',
    name: '观察者模式',
    icon: 'mdi-bullhorn',
    color: 'info',
    level: '重要',
    description: 'Spring Event 实现发布-订阅机制，解耦业务',
    principle: 'ApplicationEventPublisher 发布事件，ApplicationListener 监听事件，实现发布者与监听者的解耦。',
    applications: [
      'Spring Event 机制',
      '事件驱动架构',
      '业务解耦',
    ],
    codeExample: `// 观察者模式
// 1. 发布事件
@Service
public class UserService {
    @Autowired
    private ApplicationEventPublisher publisher;
    
    public void register(User user) {
        // 业务逻辑
        publisher.publishEvent(
            new UserRegisteredEvent(this, user)
        );
    }
}

// 2. 监听事件
@Component
public class EmailListener {
    @EventListener
    public void handle(UserRegisteredEvent event) {
        // 自动响应
    }
}`,
  },
  {
    id: 'template',
    name: '模板方法模式',
    icon: 'mdi-file-document-outline',
    color: 'purple',
    level: '重要',
    description: 'TransactionTemplate 固定事务流程，业务关注回调',
    principle: '父类定义固定步骤（开启-执行-提交/回滚），子类或回调提供差异化业务逻辑，避免重复代码。',
    applications: [
      'TransactionTemplate',
      'JdbcTemplate',
      'RestTemplate',
    ],
    codeExample: `// 模板方法模式
TransactionTemplate template = new TransactionTemplate(transactionManager);

template.execute(status -> {
    // 固定流程：已开启事务
    // 业务逻辑
    userDao.save(user);
    orderDao.save(order);
    // 固定流程：自动提交/回滚
    return null;
});`,
  },
  {
    id: 'adapter',
    name: '适配器模式',
    icon: 'mdi-puzzle',
    color: 'orange',
    level: '重要',
    description: 'HandlerAdapter 统一不同 Handler 的调用接口',
    principle: '将不同类型的 Handler（注解控制器、函数式控制器等）适配为统一的 handle() 调用，使 DispatcherServlet 无需关心具体实现。',
    applications: [
      'HandlerAdapter',
      '参数解析器',
      '返回值处理器',
    ],
    codeExample: `// 适配器模式
public interface HandlerAdapter {
    boolean supports(Object handler);
    ModelAndView handle(HttpServletRequest request, 
                       HttpServletResponse response, 
                       Object handler);
}

// 不同适配器处理不同类型的 Handler
// RequestMappingHandlerAdapter - 注解控制器
// SimpleControllerHandlerAdapter - 传统控制器`,
  },
  {
    id: 'composite',
    name: '组合模式',
    icon: 'mdi-view-dashboard',
    color: 'teal',
    level: '重要',
    description: 'ResolverComposite 聚合多个 Resolver，统一管理',
    principle: '通过集合聚合多个 Resolver，根据 supportsParameter() 选择合适实现，保证扩展性和灵活性。',
    applications: [
      '参数解析器链',
      '返回值处理器链',
      'HandlerInterceptor 链',
    ],
    codeExample: `// 组合模式
public class ResolverComposite {
    private List<HandlerMethodArgumentResolver> resolvers;
    
    public Object resolveArgument(...) {
        for (Resolver resolver : resolvers) {
            if (resolver.supportsParameter(parameter)) {
                return resolver.resolveArgument(...);
            }
        }
    }
}`,
  },
  {
    id: 'chain',
    name: '责任链模式',
    icon: 'mdi-link-variant',
    color: 'red',
    level: '重要',
    description: 'HandlerInterceptor 链式处理请求',
    principle: '多个拦截器按顺序链式执行，每个拦截器决定是否继续请求处理，形成灵活的可扩展调用链。',
    applications: [
      'HandlerInterceptor 链',
      'Filter 链',
      'AOP 拦截器链',
    ],
    codeExample: `// 责任链模式
public class HandlerExecutionChain {
    private List<HandlerInterceptor> interceptors;
    
    boolean applyPreHandle(...) {
        for (Interceptor interceptor : interceptors) {
            if (!interceptor.preHandle(...)) {
                return false;  // 中断链
            }
        }
        return true;
    }
}`,
  },
]);

const currentPattern = computed(() => {
  return designPatterns.value.find(p => p.id === selectedPattern.value);
});

const getAlertType = (color: string) => {
  const colorMap: Record<string, string> = {
    primary: 'info',
    success: 'success',
    warning: 'warning',
    info: 'info',
    purple: 'info',
    orange: 'warning',
    teal: 'info',
    red: 'error',
  };
  return colorMap[color] || 'info';
};

const patternValues = ref([
  {
    icon: 'mdi-puzzle',
    text: '🧩 高度解耦：模式组合使用，降低模块间耦合',
  },
  {
    icon: 'mdi-expand-all',
    text: '🔧 可扩展性：通过扩展点轻松添加新功能',
  },
  {
    icon: 'mdi-code-braces',
    text: '📝 代码复用：模板方法等模式减少重复代码',
  },
  {
    icon: 'mdi-shield-check',
    text: '🛡️ 稳定性：经过验证的设计模式，保证框架稳定',
  },
]);
</script>

<style scoped lang="scss">
.spring-design-pattern-view {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px 0;
}

.title-card {
  background: rgba(255, 255, 255, 0.95) !important;
  border-radius: 20px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1) !important;
}

.pattern-card {
  border-radius: 16px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
}

.pattern-item {
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 4px;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
}

.stat-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e0e0e0;
  
  .stat-label {
    color: #666;
  }
  
  .stat-value {
    font-weight: bold;
    color: #667eea;
  }
}

.pattern-detail {
  .detail-section {
    margin-bottom: 24px;
    
    .section-title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 12px;
      color: #667eea;
      border-left: 4px solid #667eea;
      padding-left: 12px;
    }
    
    .section-content {
      padding-left: 16px;
    }
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

.pattern-relationship {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  .relationship-item {
    display: flex;
    align-items: center;
    gap: 12px;
    
    .relationship-node {
      flex: 1;
      padding: 12px;
      border-radius: 8px;
      text-align: center;
      font-weight: bold;
      color: white;
      
      &.factory {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
      
      &.ioc {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      }
      
      &.proxy {
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      }
      
      &.aop {
        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      }
      
      &.observer {
        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
      }
      
      &.event {
        background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);
      }
      
      &.template {
        background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
      }
      
      &.tx {
        background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
      }
    }
    
    .relationship-arrow {
      font-size: 24px;
      color: #667eea;
      font-weight: bold;
    }
  }
}

@media (max-width: 960px) {
  .pattern-relationship {
    grid-template-columns: 1fr;
  }
}
</style>

