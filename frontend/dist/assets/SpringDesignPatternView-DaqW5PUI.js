import{V as c,b as p,a as u}from"./VCard-DFIDGoOa.js";import{V as k,a as V}from"./VRow-C6N6h8s9.js";import{d as B,k as g,m as T,p as v,o,e as l,b as t,Q as e,n as _,F as y,q as A,g as n,c as b,a0 as w,V as m,x as r,a$ as I,t as S,v as C,y as O}from"./index-mJOBftNs.js";import{V as E}from"./VAlert-CfJUBCCM.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";const L={class:"spring-design-pattern-view"},D={class:"pattern-detail"},j={class:"detail-section"},U={class:"section-content"},z={class:"detail-section"},M={class:"section-content"},F={class:"text-body-2"},q={key:0,class:"detail-section"},N={class:"section-content"},J={class:"code-block"},$=B({__name:"SpringDesignPatternView",setup(G){const x=g("factory"),h=g([{id:"factory",name:"工厂模式",icon:"mdi-factory",color:"primary",level:"核心",description:"IOC 容器统一管理 Bean 的创建，彻底屏蔽对象创建细节",principle:"通过 BeanFactory/ApplicationContext 统一创建和管理对象，取代 new 操作，实现对象生命周期的集中管理。",applications:["BeanFactory - Bean 创建工厂","ApplicationContext - 增强版工厂","BeanDefinition - Bean 定义","自动装配机制"],codeExample:`// Spring IOC = 工厂模式的极致应用
ApplicationContext context = 
    new AnnotationConfigApplicationContext(AppConfig.class);

// 从工厂获取 Bean，而不是 new
UserService userService = 
    context.getBean(UserService.class);

// 工厂负责：
// 1. 创建对象
// 2. 依赖注入
// 3. 生命周期管理`},{id:"proxy",name:"代理模式",icon:"mdi-shield-account",color:"success",level:"核心",description:"AOP 基于动态代理增强方法，实现横切逻辑",principle:"通过 JDK 动态代理或 CGLIB 生成代理对象，在方法调用前后织入增强逻辑（事务、日志、安全等）。",applications:["AOP 代理创建","事务管理","日志记录","性能监控"],codeExample:`// AOP 代理模式
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
}`},{id:"singleton",name:"单例模式",icon:"mdi-cube-outline",color:"warning",level:"重要",description:"Spring Bean 默认单例，减少对象创建成本",principle:"容器中通过一级/二级/三级缓存保证单例 Bean 的唯一性，提升性能并便于缓存与复用。",applications:["Bean 默认作用域","单例池管理","缓存机制"],codeExample:`// Spring 单例模式
@Service  // 默认单例
public class UserService {
    // 整个应用只有一个实例
}

// 可通过 @Scope 改变
@Scope("prototype")  // 多例
public class TaskService {
    // 每次获取都是新实例
}`},{id:"observer",name:"观察者模式",icon:"mdi-bullhorn",color:"info",level:"重要",description:"Spring Event 实现发布-订阅机制，解耦业务",principle:"ApplicationEventPublisher 发布事件，ApplicationListener 监听事件，实现发布者与监听者的解耦。",applications:["Spring Event 机制","事件驱动架构","业务解耦"],codeExample:`// 观察者模式
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
}`},{id:"template",name:"模板方法模式",icon:"mdi-file-document-outline",color:"purple",level:"重要",description:"TransactionTemplate 固定事务流程，业务关注回调",principle:"父类定义固定步骤（开启-执行-提交/回滚），子类或回调提供差异化业务逻辑，避免重复代码。",applications:["TransactionTemplate","JdbcTemplate","RestTemplate"],codeExample:`// 模板方法模式
TransactionTemplate template = new TransactionTemplate(transactionManager);

template.execute(status -> {
    // 固定流程：已开启事务
    // 业务逻辑
    userDao.save(user);
    orderDao.save(order);
    // 固定流程：自动提交/回滚
    return null;
});`},{id:"adapter",name:"适配器模式",icon:"mdi-puzzle",color:"orange",level:"重要",description:"HandlerAdapter 统一不同 Handler 的调用接口",principle:"将不同类型的 Handler（注解控制器、函数式控制器等）适配为统一的 handle() 调用，使 DispatcherServlet 无需关心具体实现。",applications:["HandlerAdapter","参数解析器","返回值处理器"],codeExample:`// 适配器模式
public interface HandlerAdapter {
    boolean supports(Object handler);
    ModelAndView handle(HttpServletRequest request, 
                       HttpServletResponse response, 
                       Object handler);
}

// 不同适配器处理不同类型的 Handler
// RequestMappingHandlerAdapter - 注解控制器
// SimpleControllerHandlerAdapter - 传统控制器`},{id:"composite",name:"组合模式",icon:"mdi-view-dashboard",color:"teal",level:"重要",description:"ResolverComposite 聚合多个 Resolver，统一管理",principle:"通过集合聚合多个 Resolver，根据 supportsParameter() 选择合适实现，保证扩展性和灵活性。",applications:["参数解析器链","返回值处理器链","HandlerInterceptor 链"],codeExample:`// 组合模式
public class ResolverComposite {
    private List<HandlerMethodArgumentResolver> resolvers;
    
    public Object resolveArgument(...) {
        for (Resolver resolver : resolvers) {
            if (resolver.supportsParameter(parameter)) {
                return resolver.resolveArgument(...);
            }
        }
    }
}`},{id:"chain",name:"责任链模式",icon:"mdi-link-variant",color:"red",level:"重要",description:"HandlerInterceptor 链式处理请求",principle:"多个拦截器按顺序链式执行，每个拦截器决定是否继续请求处理，形成灵活的可扩展调用链。",applications:["HandlerInterceptor 链","Filter 链","AOP 拦截器链"],codeExample:`// 责任链模式
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
}`}]),s=T(()=>h.value.find(f=>f.id===x.value)),H=f=>({primary:"info",success:"success",warning:"warning",info:"info",purple:"info",orange:"warning",teal:"info",red:"error"})[f]||"info",P=g([{icon:"mdi-puzzle",text:"🧩 高度解耦：模式组合使用，降低模块间耦合"},{icon:"mdi-expand-all",text:"🔧 可扩展性：通过扩展点轻松添加新功能"},{icon:"mdi-code-braces",text:"📝 代码复用：模板方法等模式减少重复代码"},{icon:"mdi-shield-check",text:"🛡️ 稳定性：经过验证的设计模式，保证框架稳定"}]);return(f,i)=>(o(),v("div",L,[l(I,{fluid:"",class:"pa-4"},{default:t(()=>[l(c,{class:"mb-4 title-card",elevation:"0"},{default:t(()=>[l(p,{class:"text-center pa-6"},{default:t(()=>[...i[0]||(i[0]=[e("div",{class:"text-h4 font-weight-bold mb-2"}," 🎨 Spring 设计模式大揭秘 ",-1),e("div",{class:"text-subtitle-1 text-medium-emphasis"}," 看 Spring 如何优雅地运用设计模式！✨ ",-1)])]),_:1})]),_:1}),l(k,null,{default:t(()=>[l(V,{cols:"12",md:"4"},{default:t(()=>[l(c,{class:"mb-4 pattern-card",elevation:"2"},{default:t(()=>[l(u,{class:"d-flex align-center"},{default:t(()=>[...i[1]||(i[1]=[e("span",{class:"text-h6"},"📋 设计模式列表",-1)])]),_:1}),l(p,null,{default:t(()=>[l(_,{density:"compact"},{default:t(()=>[(o(!0),v(y,null,A(h.value,(a,d)=>(o(),b(S,{key:d,active:x.value===a.id,onClick:K=>x.value=a.id,class:"pattern-item"},{prepend:t(()=>[l(m,{color:a.color},{default:t(()=>[n(r(a.icon),1)]),_:2},1032,["color"])]),append:t(()=>[l(O,{size:"small",color:a.color,variant:"tonal"},{default:t(()=>[n(r(a.level),1)]),_:2},1032,["color"])]),default:t(()=>[l(C,null,{default:t(()=>[n(r(a.name),1)]),_:2},1024)]),_:2},1032,["active","onClick"]))),128))]),_:1})]),_:1})]),_:1}),l(c,{class:"mb-4 pattern-card",elevation:"2"},{default:t(()=>[l(u,{class:"d-flex align-center"},{default:t(()=>[...i[2]||(i[2]=[e("span",{class:"text-h6"},"📊 模式统计",-1)])]),_:1}),l(p,null,{default:t(()=>[i[4]||(i[4]=e("div",{class:"stat-item"},[e("div",{class:"stat-label"},"核心模式"),e("div",{class:"stat-value"},"8 种")],-1)),i[5]||(i[5]=e("div",{class:"stat-item"},[e("div",{class:"stat-label"},"应用场景"),e("div",{class:"stat-value"},"框架各处")],-1)),l(E,{type:"info",density:"compact",class:"mt-3"},{default:t(()=>[...i[3]||(i[3]=[n(" 这些模式组合使用，构建了 Spring 的高度解耦与可扩展性 ",-1)])]),_:1})]),_:1})]),_:1})]),_:1}),l(V,{cols:"12",md:"8"},{default:t(()=>[s.value?(o(),b(c,{key:0,class:"mb-4",elevation:"2"},{default:t(()=>[l(u,{class:"d-flex align-center"},{default:t(()=>[l(m,{color:s.value.color,class:"mr-2"},{default:t(()=>[n(r(s.value.icon),1)]),_:1},8,["color"]),e("span",null,r(s.value.name),1)]),_:1}),l(p,null,{default:t(()=>[l(E,{type:H(s.value.color),density:"compact",class:"mb-4"},{default:t(()=>[e("strong",null,r(s.value.description),1)]),_:1},8,["type"]),e("div",D,[e("div",j,[i[7]||(i[7]=e("div",{class:"section-title"},"📍 在 Spring 中的应用",-1)),e("div",U,[l(_,{density:"compact"},{default:t(()=>[(o(!0),v(y,null,A(s.value.applications,(a,d)=>(o(),b(S,{key:d},{prepend:t(()=>[l(m,{size:"small",color:"primary"},{default:t(()=>[...i[6]||(i[6]=[n("mdi-check-circle",-1)])]),_:1})]),default:t(()=>[l(C,null,{default:t(()=>[n(r(a),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),e("div",z,[i[8]||(i[8]=e("div",{class:"section-title"},"💡 核心原理",-1)),e("div",M,[e("p",F,r(s.value.principle),1)])]),s.value.codeExample?(o(),v("div",q,[i[9]||(i[9]=e("div",{class:"section-title"},"💻 代码示例",-1)),e("div",N,[e("pre",J,[e("code",null,r(s.value.codeExample),1)])])])):w("",!0)])]),_:1})]),_:1})):w("",!0),l(c,{class:"mb-4",elevation:"2"},{default:t(()=>[l(u,null,{default:t(()=>[l(m,{color:"primary",class:"mr-2"},{default:t(()=>[...i[10]||(i[10]=[n("mdi-sitemap",-1)])]),_:1}),i[11]||(i[11]=e("span",null,"🔗 模式关系图",-1))]),_:1}),l(p,null,{default:t(()=>[...i[12]||(i[12]=[e("div",{class:"pattern-relationship"},[e("div",{class:"relationship-item"},[e("div",{class:"relationship-node factory"},"工厂模式"),e("div",{class:"relationship-arrow"},"→"),e("div",{class:"relationship-node ioc"},"IOC 容器")]),e("div",{class:"relationship-item"},[e("div",{class:"relationship-node proxy"},"代理模式"),e("div",{class:"relationship-arrow"},"→"),e("div",{class:"relationship-node aop"},"AOP 增强")]),e("div",{class:"relationship-item"},[e("div",{class:"relationship-node observer"},"观察者模式"),e("div",{class:"relationship-arrow"},"→"),e("div",{class:"relationship-node event"},"事件机制")]),e("div",{class:"relationship-item"},[e("div",{class:"relationship-node template"},"模板方法"),e("div",{class:"relationship-arrow"},"→"),e("div",{class:"relationship-node tx"},"事务模板")])],-1)])]),_:1})]),_:1}),l(c,{elevation:"2"},{default:t(()=>[l(u,null,{default:t(()=>[l(m,{color:"success",class:"mr-2"},{default:t(()=>[...i[13]||(i[13]=[n("mdi-star",-1)])]),_:1}),i[14]||(i[14]=e("span",null,"⭐ 设计模式的价值",-1))]),_:1}),l(p,null,{default:t(()=>[l(_,null,{default:t(()=>[(o(!0),v(y,null,A(P.value,(a,d)=>(o(),b(S,{key:d,"prepend-icon":a.icon},{default:t(()=>[l(C,null,{default:t(()=>[n(r(a.text),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}}),ee=R($,[["__scopeId","data-v-e782e1c6"]]);export{ee as default};
