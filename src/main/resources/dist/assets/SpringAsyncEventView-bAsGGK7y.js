import{V as r,b as a,a as o}from"./VCard-DCwbe1IU.js";import{V as z,a as w}from"./VRow-DbGGlnzc.js";import{V as A}from"./VAlert-CLGF8dKv.js";import{d as F,k as x,p as k,o as v,e as n,b as l,Q as t,g as s,aQ as N,y as g,n as y,t as i,v as d,aP as V,V as m,F as U,q as C,a_ as I,c as T,x as S}from"./index-Vd_uTSKn.js";import{V as L,b as p,d as P,e as f}from"./VTabs-UvxaoF2Q.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Q={class:"spring-async-event-view"},D={class:"use-case-box"},M=F({__name:"SpringAsyncEventView",setup(W){const b=x("wrong"),c=x("event"),R=x([{icon:"mdi-alert-circle",text:"🚨 @Async 默认不是线程池，生产环境必须自定义线程池"},{icon:"mdi-alert-circle",text:"⚠️ 异步方法的事务不会继承，需要单独处理"},{icon:"mdi-alert-circle",text:"📢 事件监听器默认同步执行，需要异步时加 @Async"},{icon:"mdi-alert-circle",text:"🔄 事件监听器异常不会影响发布者，需要自行处理"}]),B=x([{icon:"mdi-check-circle",text:"🎯 @Async 必须显式指定线程池名称，避免使用默认执行器"},{icon:"mdi-check-circle",text:"📊 监控线程池指标（活跃线程、队列长度等）"},{icon:"mdi-check-circle",text:"✅ 事件监听器使用 @Async 实现异步处理"},{icon:"mdi-check-circle",text:"🔒 事件监听器要做好异常处理，避免影响其他监听器"},{icon:"mdi-check-circle",text:"⚡ 合理使用事件驱动，避免过度解耦导致难以追踪"}]);return(j,e)=>(v(),k("div",Q,[n(I,{fluid:"",class:"pa-4"},{default:l(()=>[n(r,{class:"mb-4 title-card",elevation:"0"},{default:l(()=>[n(a,{class:"text-center pa-6"},{default:l(()=>[...e[4]||(e[4]=[t("div",{class:"text-h4 font-weight-bold mb-2"}," ⚡ Spring 异步与事件驱动 ",-1),t("div",{class:"text-subtitle-1 text-medium-emphasis"}," 让应用更高效，代码更解耦！🎯 ",-1)])]),_:1})]),_:1}),n(z,null,{default:l(()=>[n(w,{cols:"12",md:"4"},{default:l(()=>[n(r,{class:"mb-4 concept-card",elevation:"2"},{default:l(()=>[n(o,{class:"d-flex align-center"},{default:l(()=>[...e[5]||(e[5]=[t("span",{class:"text-h6"},"🚀 @Async 异步执行",-1)])]),_:1}),n(a,null,{default:l(()=>[e[12]||(e[12]=t("p",{class:"text-body-2 mb-3"},[s(" 让方法在"),t("strong",null,"独立线程"),s("中执行，不阻塞主线程！ ")],-1)),n(A,{type:"warning",density:"compact",class:"mb-3"},{default:l(()=>[...e[6]||(e[6]=[t("strong",null,"⚠️ 重要提醒：",-1),t("br",null,null,-1),s(" 默认使用 SimpleAsyncTaskExecutor",-1),t("br",null,null,-1),s(" 每次调用都创建新线程，生产环境需自定义线程池！ ",-1)])]),_:1}),t("div",D,[e[11]||(e[11]=t("div",{class:"text-subtitle-2 mb-2"},"💡 适用场景：",-1)),n(N,null,{default:l(()=>[n(g,{size:"small",color:"primary"},{default:l(()=>[...e[7]||(e[7]=[s("发送邮件",-1)])]),_:1}),n(g,{size:"small",color:"success"},{default:l(()=>[...e[8]||(e[8]=[s("消息推送",-1)])]),_:1}),n(g,{size:"small",color:"warning"},{default:l(()=>[...e[9]||(e[9]=[s("日志记录",-1)])]),_:1}),n(g,{size:"small",color:"info"},{default:l(()=>[...e[10]||(e[10]=[s("数据统计",-1)])]),_:1})]),_:1})])]),_:1})]),_:1}),n(r,{class:"mb-4 concept-card",elevation:"2"},{default:l(()=>[n(o,{class:"d-flex align-center"},{default:l(()=>[...e[13]||(e[13]=[t("span",{class:"text-h6"},"📢 Spring Event 事件驱动",-1)])]),_:1}),n(a,null,{default:l(()=>[e[20]||(e[20]=t("p",{class:"text-body-2 mb-3"},[s(" 发布-订阅模式，实现"),t("strong",null,"业务解耦"),s("！ ")],-1)),n(y,{density:"compact"},{default:l(()=>[n(i,null,{prepend:l(()=>[n(m,{color:"primary"},{default:l(()=>[...e[14]||(e[14]=[s("mdi-bullhorn",-1)])]),_:1})]),default:l(()=>[n(d,null,{default:l(()=>[...e[15]||(e[15]=[t("strong",null,"发布者",-1)])]),_:1}),n(V,null,{default:l(()=>[...e[16]||(e[16]=[s("发布事件，不关心谁监听",-1)])]),_:1})]),_:1}),n(i,null,{prepend:l(()=>[n(m,{color:"success"},{default:l(()=>[...e[17]||(e[17]=[s("mdi-ear-hearing",-1)])]),_:1})]),default:l(()=>[n(d,null,{default:l(()=>[...e[18]||(e[18]=[t("strong",null,"监听者",-1)])]),_:1}),n(V,null,{default:l(()=>[...e[19]||(e[19]=[s("订阅事件，自动响应",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n(r,{class:"mb-4 concept-card",elevation:"2"},{default:l(()=>[n(o,{class:"d-flex align-center"},{default:l(()=>[...e[21]||(e[21]=[t("span",{class:"text-h6"},"🔄 异步 vs 事件",-1)])]),_:1}),n(a,null,{default:l(()=>[n(y,{density:"compact"},{default:l(()=>[n(i,null,{default:l(()=>[n(d,null,{default:l(()=>[...e[22]||(e[22]=[t("strong",null,"@Async",-1)])]),_:1}),n(V,null,{default:l(()=>[...e[23]||(e[23]=[s("异步执行，提升性能",-1)])]),_:1})]),_:1}),n(i,null,{default:l(()=>[n(d,null,{default:l(()=>[...e[24]||(e[24]=[t("strong",null,"Event",-1)])]),_:1}),n(V,null,{default:l(()=>[...e[25]||(e[25]=[s("事件驱动，解耦业务",-1)])]),_:1})]),_:1})]),_:1}),n(A,{type:"info",density:"compact",class:"mt-3"},{default:l(()=>[...e[26]||(e[26]=[s(" 两者可以结合使用：异步事件监听器 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),n(w,{cols:"12",md:"8"},{default:l(()=>[n(r,{class:"mb-4",elevation:"2"},{default:l(()=>[n(o,null,{default:l(()=>[n(m,{color:"primary",class:"mr-2"},{default:l(()=>[...e[27]||(e[27]=[s("mdi-code-tags",-1)])]),_:1}),e[28]||(e[28]=t("span",null,"💻 @Async 使用示例",-1))]),_:1}),n(a,null,{default:l(()=>[n(L,{modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=u=>b.value=u),color:"primary"},{default:l(()=>[n(p,{value:"wrong"},{default:l(()=>[...e[29]||(e[29]=[s("❌ 错误用法",-1)])]),_:1}),n(p,{value:"right"},{default:l(()=>[...e[30]||(e[30]=[s("✅ 正确用法",-1)])]),_:1}),n(p,{value:"config"},{default:l(()=>[...e[31]||(e[31]=[s("线程池配置",-1)])]),_:1})]),_:1},8,["modelValue"]),n(P,{modelValue:b.value,"onUpdate:modelValue":e[1]||(e[1]=u=>b.value=u),class:"mt-4"},{default:l(()=>[n(f,{value:"wrong"},{default:l(()=>[...e[32]||(e[32]=[t("pre",{class:"code-block"},[t("code",null,`// ❌ 错误：使用默认 SimpleAsyncTaskExecutor
@Async
public void sendEmail() {
    // 每次调用都创建新线程
    // 高并发下会线程爆炸！
}

// 问题：
// 1. 无线程复用
// 2. 无最大线程数限制
// 3. 高并发下 OOM 风险`)],-1)])]),_:1}),n(f,{value:"right"},{default:l(()=>[...e[33]||(e[33]=[t("pre",{class:"code-block"},[t("code",null,`// ✅ 正确：显式指定线程池
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
            new LinkedBlockingQueue<>(100),
            new ThreadFactoryBuilder()
                .setNameFormat("email-%d")
                .build()
        );
    }
}`)],-1)])]),_:1}),n(f,{value:"config"},{default:l(()=>[...e[34]||(e[34]=[t("pre",{class:"code-block"},[t("code",null,`// 推荐配置
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
public CompletableFuture<String> asyncMethod() {
    // 异步逻辑
    return CompletableFuture.completedFuture("done");
}`)],-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),n(r,{class:"mb-4",elevation:"2"},{default:l(()=>[n(o,null,{default:l(()=>[n(m,{color:"primary",class:"mr-2"},{default:l(()=>[...e[35]||(e[35]=[s("mdi-bullhorn",-1)])]),_:1}),e[36]||(e[36]=t("span",null,"📢 Spring Event 完整示例",-1))]),_:1}),n(a,null,{default:l(()=>[n(L,{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=u=>c.value=u),color:"primary"},{default:l(()=>[n(p,{value:"event"},{default:l(()=>[...e[37]||(e[37]=[s("事件定义",-1)])]),_:1}),n(p,{value:"publish"},{default:l(()=>[...e[38]||(e[38]=[s("发布事件",-1)])]),_:1}),n(p,{value:"listen"},{default:l(()=>[...e[39]||(e[39]=[s("监听事件",-1)])]),_:1})]),_:1},8,["modelValue"]),n(P,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=u=>c.value=u),class:"mt-4"},{default:l(()=>[n(f,{value:"event"},{default:l(()=>[...e[40]||(e[40]=[t("pre",{class:"code-block"},[t("code",null,`// 1. 定义事件
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
}`)],-1)])]),_:1}),n(f,{value:"publish"},{default:l(()=>[...e[41]||(e[41]=[t("pre",{class:"code-block"},[t("code",null,`// 2. 发布事件
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
}`)],-1)])]),_:1}),n(f,{value:"listen"},{default:l(()=>[...e[42]||(e[42]=[t("pre",{class:"code-block"},[t("code",null,`// 3. 监听事件
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
}`)],-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),n(r,{class:"mb-4",elevation:"2"},{default:l(()=>[n(o,null,{default:l(()=>[n(m,{color:"warning",class:"mr-2"},{default:l(()=>[...e[43]||(e[43]=[s("mdi-alert",-1)])]),_:1}),e[44]||(e[44]=t("span",null,"⚠️ 注意事项",-1))]),_:1}),n(a,null,{default:l(()=>[n(y,null,{default:l(()=>[(v(!0),k(U,null,C(R.value,(u,E)=>(v(),T(i,{key:E,"prepend-icon":u.icon},{default:l(()=>[n(d,null,{default:l(()=>[s(S(u.text),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})]),_:1})]),_:1}),n(r,{elevation:"2"},{default:l(()=>[n(o,null,{default:l(()=>[n(m,{color:"success",class:"mr-2"},{default:l(()=>[...e[45]||(e[45]=[s("mdi-star",-1)])]),_:1}),e[46]||(e[46]=t("span",null,"⭐ 最佳实践",-1))]),_:1}),n(a,null,{default:l(()=>[n(y,null,{default:l(()=>[(v(!0),k(U,null,C(B.value,(u,E)=>(v(),T(i,{key:E,"prepend-icon":u.icon},{default:l(()=>[n(d,null,{default:l(()=>[s(S(u.text),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}}),Y=O(M,[["__scopeId","data-v-fbf5ea04"]]);export{Y as default};
