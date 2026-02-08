<template>
  <div class="spring-aop-view">
    <v-container fluid class="pa-4">
      <!-- 标题区域 - 小红书风格 -->
      <v-card class="mb-4 title-card" elevation="0">
        <v-card-text class="text-center pa-6">
          <div class="text-h4 font-weight-bold mb-2">
            🌟 Spring AOP 完全指南
          </div>
          <div class="text-subtitle-1 text-medium-emphasis">
            面向切面编程，让你的代码更优雅！✨
          </div>
        </v-card-text>
      </v-card>

      <v-row>
        <!-- 左侧：核心概念卡片 -->
        <v-col cols="12" md="4">
          <!-- 什么是 AOP -->
          <v-card class="mb-4 concept-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">💡 什么是 AOP？</span>
            </v-card-title>
            <v-card-text>
              <p class="text-body-1 mb-3">
                <strong>AOP = 面向切面编程</strong>，是 OOP 的完美补充！
              </p>
              <v-alert type="info" density="compact" class="mb-3">
                <strong>简单理解：</strong>把横切逻辑（日志、事务、权限）从业务代码中抽离出来，统一管理 🎯
              </v-alert>
              <div class="example-box">
                <div class="text-subtitle-2 mb-2">❌ 没有 AOP 时：</div>
                <pre class="code-snippet">每个方法都要写日志
每个方法都要写事务
代码重复，维护困难 😫</pre>
              </div>
              <div class="example-box mt-3">
                <div class="text-subtitle-2 mb-2">✅ 有了 AOP 后：</div>
                <pre class="code-snippet">一个切面搞定所有
代码简洁，专注业务 🎉</pre>
              </div>
            </v-card-text>
          </v-card>

          <!-- 核心术语 -->
          <v-card class="mb-4 concept-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">📚 核心术语</span>
            </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-target</v-icon>
                  </template>
                  <v-list-item-title><strong>JoinPoint（连接点）</strong></v-list-item-title>
                  <v-list-item-subtitle>哪个方法可以被增强</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-scissors-cutting</v-icon>
                  </template>
                  <v-list-item-title><strong>PointCut（切入点）</strong></v-list-item-title>
                  <v-list-item-subtitle>匹配哪些方法需要织入</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-lightbulb-on</v-icon>
                  </template>
                  <v-list-item-title><strong>Advice（通知）</strong></v-list-item-title>
                  <v-list-item-subtitle>做什么增强（before/after/around）</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-package-variant</v-icon>
                  </template>
                  <v-list-item-title><strong>Aspect（切面）</strong></v-list-item-title>
                  <v-list-item-subtitle>切点定义 + 通知逻辑</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>

          <!-- 常见场景 -->
          <v-card class="mb-4 concept-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">🎯 典型应用场景</span>
            </v-card-title>
            <v-card-text>
              <v-chip-group>
                <v-chip color="primary" variant="tonal">📝 日志记录</v-chip>
                <v-chip color="success" variant="tonal">🔒 权限校验</v-chip>
                <v-chip color="warning" variant="tonal">💼 事务管理</v-chip>
                <v-chip color="info" variant="tonal">📊 性能监控</v-chip>
                <v-chip color="purple" variant="tonal">🚦 限流控制</v-chip>
                <v-chip color="orange" variant="tonal">⚠️ 异常处理</v-chip>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 右侧：动画演示和详细说明 -->
        <v-col cols="12" md="8">
          <!-- 工作原理动画 -->
          <v-card class="mb-4" elevation="2">
            <v-card-title class="d-flex align-center justify-space-between">
              <div class="d-flex align-center">
                <v-icon color="primary" class="mr-2">mdi-animation-play</v-icon>
                <span>🎬 AOP 工作原理</span>
              </div>
              <v-btn
                color="primary"
                size="small"
                prepend-icon="mdi-play"
                @click="playAnimation"
                :disabled="isAnimating"
              >
                播放动画
              </v-btn>
            </v-card-title>
            <v-card-text>
              <div class="animation-container" ref="animationContainer">
                <div class="flow-diagram">
                  <!-- 业务代码 -->
                  <div
                    class="flow-step"
                    :class="{ 'active': currentStep >= 1 }"
                    style="left: 50px; top: 50px;"
                  >
                    <div class="step-icon">📝</div>
                    <div class="step-label">业务代码</div>
                    <div class="step-detail">UserService.save()</div>
                  </div>

                  <!-- 箭头 -->
                  <div
                    class="flow-arrow"
                    :class="{ 'active': currentStep >= 2 }"
                    style="left: 200px; top: 100px;"
                  >
                    →
                  </div>

                  <!-- AOP 代理 -->
                  <div
                    class="flow-step proxy-step"
                    :class="{ 'active': currentStep >= 2 }"
                    style="left: 300px; top: 50px;"
                  >
                    <div class="step-icon">🛡️</div>
                    <div class="step-label">AOP 代理</div>
                    <div class="step-detail">拦截方法调用</div>
                  </div>

                  <!-- 箭头 -->
                  <div
                    class="flow-arrow"
                    :class="{ 'active': currentStep >= 3 }"
                    style="left: 500px; top: 100px;"
                  >
                    →
                  </div>

                  <!-- 切面增强 -->
                  <div
                    class="flow-step aspect-step"
                    :class="{ 'active': currentStep >= 3 }"
                    style="left: 600px; top: 50px;"
                  >
                    <div class="step-icon">✨</div>
                    <div class="step-label">切面增强</div>
                    <div class="step-detail">Before → Around → After</div>
                  </div>

                  <!-- 执行结果 -->
                  <div
                    class="flow-step result-step"
                    :class="{ 'active': currentStep >= 4 }"
                    style="left: 350px; top: 200px;"
                  >
                    <div class="step-icon">✅</div>
                    <div class="step-label">执行完成</div>
                    <div class="step-detail">日志已记录<br/>事务已提交</div>
                  </div>
                </div>
              </div>
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
                <v-tab value="aspect">切面定义</v-tab>
                <v-tab value="usage">使用方式</v-tab>
                <v-tab value="proxy">代理机制</v-tab>
              </v-tabs>
              <v-window v-model="codeTab" class="mt-4">
                <v-window-item value="aspect">
                  <pre class="code-block"><code>@Aspect
@Component
public class LogAspect {
    
    // 定义切入点：所有 Service 的方法
    @Pointcut("execution(* com.example.service.*.*(..))")
    public void servicePointcut() {}
    
    // 前置通知：方法执行前
    @Before("servicePointcut()")
    public void before(JoinPoint joinPoint) {
        System.out.println("方法执行前：" + 
            joinPoint.getSignature().getName());
    }
    
    // 环绕通知：最灵活
    @Around("servicePointcut()")
    public Object around(ProceedingJoinPoint pjp) 
            throws Throwable {
        long start = System.currentTimeMillis();
        Object result = pjp.proceed(); // 执行原方法
        long time = System.currentTimeMillis() - start;
        System.out.println("耗时：" + time + "ms");
        return result;
    }
}</code></pre>
                </v-window-item>
                <v-window-item value="usage">
                  <pre class="code-block"><code>// 业务代码：完全不需要关心日志
@Service
public class UserService {
    
    public void saveUser(User user) {
        // 业务逻辑
        userDao.save(user);
    }
}

// AOP 自动增强：
// ✅ 自动记录日志
// ✅ 自动开启事务
// ✅ 自动性能监控
// 业务代码保持简洁！</code></pre>
                </v-window-item>
                <v-window-item value="proxy">
                  <pre class="code-block"><code>// Spring AOP 基于动态代理
// 1. JDK 动态代理（有接口）
UserService proxy = (UserService) 
    Proxy.newProxyInstance(
        classLoader,
        new Class[]{UserService.class},
        new InvocationHandler() {
            @Override
            public Object invoke(...) {
                // 执行切面逻辑
                // 调用原方法
            }
        }
    );

// 2. CGLIB 代理（无接口）
// 通过继承生成子类，覆盖方法</code></pre>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>

          <!-- 常见问题 -->
          <v-card class="mb-4" elevation="2">
            <v-card-title>
              <v-icon color="warning" class="mr-2">mdi-alert-circle</v-icon>
              <span>⚠️ AOP 失效场景</span>
            </v-card-title>
            <v-card-text>
              <v-expansion-panels>
                <v-expansion-panel
                  v-for="(issue, idx) in commonIssues"
                  :key="idx"
                  :title="issue.title"
                >
                  <v-expansion-panel-text>
                    <div class="text-body-2 mb-2">
                      <strong>原因：</strong>{{ issue.reason }}
                    </div>
                    <div class="text-body-2">
                      <strong>解决方案：</strong>{{ issue.solution }}
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

const isAnimating = ref(false);
const currentStep = ref(0);
const codeTab = ref('aspect');
const animationContainer = ref<HTMLElement | null>(null);

const commonIssues = ref([
  {
    title: '❌ 同类内部调用失效',
    reason: 'this.method() 调用不走代理对象，AOP 无法拦截',
    solution: '使用 AopContext.currentProxy() 或拆分到其他 Bean',
  },
  {
    title: '❌ private 方法无法代理',
    reason: 'private 方法无法被继承或实现，代理机制无法覆盖',
    solution: '改为 public 或 protected，或使用 AspectJ 编译期织入',
  },
  {
    title: '❌ final/static 方法失效',
    reason: 'final 无法覆写，static 属于类不属于实例',
    solution: '避免在需要 AOP 的方法上使用 final/static',
  },
]);

const bestPractices = ref([
  {
    icon: 'mdi-check-circle',
    text: '🎯 使用 @Around 时记得调用 proceed()，否则原方法不会执行',
  },
  {
    icon: 'mdi-check-circle',
    text: '📝 切点表达式要精确，避免误拦截其他方法',
  },
  {
    icon: 'mdi-check-circle',
    text: '⚡ 性能敏感场景注意切面逻辑的执行时间',
  },
  {
    icon: 'mdi-check-circle',
    text: '🔍 使用 @Order 控制多个切面的执行顺序',
  },
  {
    icon: 'mdi-check-circle',
    text: '✅ 优先使用 JDK 动态代理（有接口时），性能更好',
  },
]);

const playAnimation = async () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  currentStep.value = 0;

  for (let i = 1; i <= 4; i++) {
    await new Promise(resolve => setTimeout(resolve, 800));
    currentStep.value = i;
  }

  await new Promise(resolve => setTimeout(resolve, 1000));
  isAnimating.value = false;
};
</script>

<style scoped lang="scss">
.spring-aop-view {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15) !important;
  }
}

.example-box {
  background: #f5f5f5;
  border-left: 4px solid #667eea;
  padding: 12px;
  border-radius: 8px;
  
  .code-snippet {
    margin: 0;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: #333;
  }
}

.animation-container {
  position: relative;
  height: 400px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 12px;
  overflow: hidden;
  
  .flow-diagram {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .flow-step {
    position: absolute;
    width: 150px;
    padding: 16px;
    background: white;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    opacity: 0.5;
    transform: scale(0.9);
    transition: all 0.5s ease;
    
    &.active {
      opacity: 1;
      transform: scale(1);
      box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
    }
    
    .step-icon {
      font-size: 32px;
      margin-bottom: 8px;
    }
    
    .step-label {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 4px;
    }
    
    .step-detail {
      font-size: 12px;
      color: #666;
    }
    
    &.proxy-step.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      
      .step-detail {
        color: rgba(255, 255, 255, 0.9);
      }
    }
    
    &.aspect-step.active {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      
      .step-detail {
        color: rgba(255, 255, 255, 0.9);
      }
    }
    
    &.result-step.active {
      background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
      color: white;
      
      .step-detail {
        color: rgba(255, 255, 255, 0.9);
      }
    }
  }
  
  .flow-arrow {
    position: absolute;
    font-size: 32px;
    color: #999;
    opacity: 0.3;
    transition: all 0.5s ease;
    
    &.active {
      opacity: 1;
      color: #667eea;
      animation: arrowPulse 1s ease-in-out infinite;
    }
  }
}

@keyframes arrowPulse {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
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

// 响应式设计
@media (max-width: 960px) {
  .animation-container {
    height: 300px;
  }
  
  .flow-step {
    width: 120px !important;
    padding: 12px !important;
  }
}
</style>

