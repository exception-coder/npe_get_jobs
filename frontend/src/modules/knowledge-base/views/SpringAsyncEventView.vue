<template>
  <div class="spring-async-event-view">
    <v-container fluid class="pa-4">
      <!-- 标题区域 -->
      <v-card class="mb-4 title-card" elevation="0">
        <v-card-text class="text-center pa-6">
          <div class="text-h4 font-weight-bold mb-2">
            ⚡ Spring 异步与事件驱动
          </div>
          <div class="text-subtitle-1 text-medium-emphasis">
            让应用更高效，代码更解耦！🎯
          </div>
        </v-card-text>
      </v-card>

      <v-row>
        <!-- 左侧：核心概念 -->
        <v-col cols="12" md="4">
          <!-- @Async 异步 -->
          <v-card class="mb-4 concept-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">🚀 @Async 异步执行</span>
            </v-card-title>
            <v-card-text>
              <p class="text-body-2 mb-3">
                让方法在<strong>独立线程</strong>中执行，不阻塞主线程！
              </p>
              <v-alert type="warning" density="compact" class="mb-3">
                <strong>⚠️ 重要提醒：</strong><br/>
                默认使用 SimpleAsyncTaskExecutor<br/>
                每次调用都创建新线程，生产环境需自定义线程池！
              </v-alert>
              <div class="use-case-box">
                <div class="text-subtitle-2 mb-2">💡 适用场景：</div>
                <v-chip-group>
                  <v-chip size="small" color="primary">发送邮件</v-chip>
                  <v-chip size="small" color="success">消息推送</v-chip>
                  <v-chip size="small" color="warning">日志记录</v-chip>
                  <v-chip size="small" color="info">数据统计</v-chip>
                </v-chip-group>
              </div>
            </v-card-text>
          </v-card>

          <!-- Spring Event -->
          <v-card class="mb-4 concept-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">📢 Spring Event 事件驱动</span>
            </v-card-title>
            <v-card-text>
              <p class="text-body-2 mb-3">
                发布-订阅模式，实现<strong>业务解耦</strong>！
              </p>
              <v-list density="compact">
                <v-list-item>
                  <template #prepend>
                    <v-icon color="primary">mdi-bullhorn</v-icon>
                  </template>
                  <v-list-item-title><strong>发布者</strong></v-list-item-title>
                  <v-list-item-subtitle>发布事件，不关心谁监听</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <template #prepend>
                    <v-icon color="success">mdi-ear-hearing</v-icon>
                  </template>
                  <v-list-item-title><strong>监听者</strong></v-list-item-title>
                  <v-list-item-subtitle>订阅事件，自动响应</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>

          <!-- 对比 -->
          <v-card class="mb-4 concept-card" elevation="2">
            <v-card-title class="d-flex align-center">
              <span class="text-h6">🔄 异步 vs 事件</span>
            </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item>
                  <v-list-item-title><strong>@Async</strong></v-list-item-title>
                  <v-list-item-subtitle>异步执行，提升性能</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title><strong>Event</strong></v-list-item-title>
                  <v-list-item-subtitle>事件驱动，解耦业务</v-list-item-subtitle>
                </v-list-item>
              </v-list>
              <v-alert type="info" density="compact" class="mt-3">
                两者可以结合使用：异步事件监听器
              </v-alert>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- 右侧：详细说明和示例 -->
        <v-col cols="12" md="8">
          <!-- @Async 详解 -->
          <v-card class="mb-4" elevation="2">
            <v-card-title>
              <v-icon color="primary" class="mr-2">mdi-code-tags</v-icon>
              <span>💻 @Async 使用示例</span>
            </v-card-title>
            <v-card-text>
              <v-tabs v-model="asyncTab" color="primary">
                <v-tab value="wrong">❌ 错误用法</v-tab>
                <v-tab value="right">✅ 正确用法</v-tab>
                <v-tab value="config">线程池配置</v-tab>
              </v-tabs>
              <v-window v-model="asyncTab" class="mt-4">
                <v-window-item value="wrong">
                  <pre class="code-block"><code>// ❌ 错误：使用默认 SimpleAsyncTaskExecutor
@Async
public void sendEmail() {
    // 每次调用都创建新线程
    // 高并发下会线程爆炸！
}

// 问题：
// 1. 无线程复用
// 2. 无最大线程数限制
// 3. 高并发下 OOM 风险</code></pre>
                </v-window-item>
                <v-window-item value="right">
                  <pre class="code-block"><code>// ✅ 正确：显式指定线程池
@Async("emailExecutor")
public void sendEmail() {
    // 使用自定义线程池
    // 可控、可监控
}

// 配置线程池
@Configuration
@EnableAsync
public class AsyncConfig {
    @Bean("emailExecutor")
    public Executor emailExecutor() {
        return new ThreadPoolExecutor(
            5, 10, 60L, TimeUnit.SECONDS,
            new LinkedBlockingQueue&lt;&gt;(100),
            new ThreadFactoryBuilder()
                .setNameFormat("email-%d")
                .build()
        );
    }
}</code></pre>
                </v-window-item>
                <v-window-item value="config">
                  <pre class="code-block"><code>// 推荐配置
@Bean("taskExecutor")
public Executor taskExecutor() {
    ThreadPoolTaskExecutor executor = 
        new ThreadPoolTaskExecutor();
    executor.setCorePoolSize(5);
    executor.setMaxPoolSize(10);
    executor.setQueueCapacity(100);
    executor.setThreadNamePrefix("async-");
    executor.setRejectedExecutionHandler(
        new ThreadPoolExecutor.CallerRunsPolicy()
    );
    executor.initialize();
    return executor;
}

// 使用
@Async("taskExecutor")
public CompletableFuture&lt;String&gt; asyncMethod() {
    // 异步逻辑
    return CompletableFuture.completedFuture("done");
}</code></pre>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>

          <!-- Spring Event 详解 -->
          <v-card class="mb-4" elevation="2">
            <v-card-title>
              <v-icon color="primary" class="mr-2">mdi-bullhorn</v-icon>
              <span>📢 Spring Event 完整示例</span>
            </v-card-title>
            <v-card-text>
              <v-tabs v-model="eventTab" color="primary">
                <v-tab value="event">事件定义</v-tab>
                <v-tab value="publish">发布事件</v-tab>
                <v-tab value="listen">监听事件</v-tab>
              </v-tabs>
              <v-window v-model="eventTab" class="mt-4">
                <v-window-item value="event">
                  <pre class="code-block"><code>// 1. 定义事件
public class UserRegisteredEvent 
        extends ApplicationEvent {
    private final User user;
    
    public UserRegisteredEvent(Object source, User user) {
        super(source);
        this.user = user;
    }
    
    public User getUser() {
        return user;
    }
}</code></pre>
                </v-window-item>
                <v-window-item value="publish">
                  <pre class="code-block"><code>// 2. 发布事件
@Service
public class UserService {
    @Autowired
    private ApplicationEventPublisher publisher;
    
    public void registerUser(User user) {
        // 业务逻辑
        userDao.save(user);
        
        // 发布事件（解耦）
        publisher.publishEvent(
            new UserRegisteredEvent(this, user)
        );
    }
}</code></pre>
                </v-window-item>
                <v-window-item value="listen">
                  <pre class="code-block"><code>// 3. 监听事件
@Component
public class EmailListener {
    
    @EventListener
    @Async  // 异步监听
    public void handleUserRegistered(
            UserRegisteredEvent event) {
        User user = event.getUser();
        // 发送欢迎邮件
        emailService.sendWelcomeEmail(user);
    }
}

// 多个监听器自动执行
@Component
public class SmsListener {
    @EventListener
    public void handleUserRegistered(
            UserRegisteredEvent event) {
        // 发送短信
    }
}</code></pre>
                </v-window-item>
              </v-window>
            </v-card-text>
          </v-card>

          <!-- 注意事项 -->
          <v-card class="mb-4" elevation="2">
            <v-card-title>
              <v-icon color="warning" class="mr-2">mdi-alert</v-icon>
              <span>⚠️ 注意事项</span>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item
                  v-for="(note, idx) in importantNotes"
                  :key="idx"
                  :prepend-icon="note.icon"
                >
                  <v-list-item-title>{{ note.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
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

const asyncTab = ref('wrong');
const eventTab = ref('event');

const importantNotes = ref([
  {
    icon: 'mdi-alert-circle',
    text: '🚨 @Async 默认不是线程池，生产环境必须自定义线程池',
  },
  {
    icon: 'mdi-alert-circle',
    text: '⚠️ 异步方法的事务不会继承，需要单独处理',
  },
  {
    icon: 'mdi-alert-circle',
    text: '📢 事件监听器默认同步执行，需要异步时加 @Async',
  },
  {
    icon: 'mdi-alert-circle',
    text: '🔄 事件监听器异常不会影响发布者，需要自行处理',
  },
]);

const bestPractices = ref([
  {
    icon: 'mdi-check-circle',
    text: '🎯 @Async 必须显式指定线程池名称，避免使用默认执行器',
  },
  {
    icon: 'mdi-check-circle',
    text: '📊 监控线程池指标（活跃线程、队列长度等）',
  },
  {
    icon: 'mdi-check-circle',
    text: '✅ 事件监听器使用 @Async 实现异步处理',
  },
  {
    icon: 'mdi-check-circle',
    text: '🔒 事件监听器要做好异常处理，避免影响其他监听器',
  },
  {
    icon: 'mdi-check-circle',
    text: '⚡ 合理使用事件驱动，避免过度解耦导致难以追踪',
  },
]);
</script>

<style scoped lang="scss">
.spring-async-event-view {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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

.use-case-box {
  background: #f5f5f5;
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid #4facfe;
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

