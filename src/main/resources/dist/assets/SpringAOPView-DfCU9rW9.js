import{V as i,b as r,a as d}from"./VCard-DCwbe1IU.js";import{V as D,a as k}from"./VRow-DbGGlnzc.js";import{V as E}from"./VAlert-CLGF8dKv.js";import{d as N,k as f,p as w,o as x,e,b as t,Q as s,g as n,n as C,t as b,v as c,aP as V,V as u,aQ as z,y as m,j as F,X as v,F as T,q as I,a_ as G,c as j,x as A}from"./index-Vd_uTSKn.js";import{V as K,b as O,d as M,e as S}from"./VTabs-UvxaoF2Q.js";import{V as Q,a as W,c as q}from"./VExpansionPanels-D6KQBJ_V.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";const R={class:"spring-aop-view"},X={class:"d-flex align-center"},Y={class:"flow-diagram"},Z={class:"text-body-2 mb-2"},$={class:"text-body-2"},_=N({__name:"SpringAOPView",setup(h){const y=f(!1),o=f(0),g=f("aspect"),B=f(null),U=f([{title:"❌ 同类内部调用失效",reason:"this.method() 调用不走代理对象，AOP 无法拦截",solution:"使用 AopContext.currentProxy() 或拆分到其他 Bean"},{title:"❌ private 方法无法代理",reason:"private 方法无法被继承或实现，代理机制无法覆盖",solution:"改为 public 或 protected，或使用 AspectJ 编译期织入"},{title:"❌ final/static 方法失效",reason:"final 无法覆写，static 属于类不属于实例",solution:"避免在需要 AOP 的方法上使用 final/static"}]),L=f([{icon:"mdi-check-circle",text:"🎯 使用 @Around 时记得调用 proceed()，否则原方法不会执行"},{icon:"mdi-check-circle",text:"📝 切点表达式要精确，避免误拦截其他方法"},{icon:"mdi-check-circle",text:"⚡ 性能敏感场景注意切面逻辑的执行时间"},{icon:"mdi-check-circle",text:"🔍 使用 @Order 控制多个切面的执行顺序"},{icon:"mdi-check-circle",text:"✅ 优先使用 JDK 动态代理（有接口时），性能更好"}]),J=async()=>{if(!y.value){y.value=!0,o.value=0;for(let p=1;p<=4;p++)await new Promise(l=>setTimeout(l,800)),o.value=p;await new Promise(p=>setTimeout(p,1e3)),y.value=!1}};return(p,l)=>(x(),w("div",R,[e(G,{fluid:"",class:"pa-4"},{default:t(()=>[e(i,{class:"mb-4 title-card",elevation:"0"},{default:t(()=>[e(r,{class:"text-center pa-6"},{default:t(()=>[...l[2]||(l[2]=[s("div",{class:"text-h4 font-weight-bold mb-2"}," 🌟 Spring AOP 完全指南 ",-1),s("div",{class:"text-subtitle-1 text-medium-emphasis"}," 面向切面编程，让你的代码更优雅！✨ ",-1)])]),_:1})]),_:1}),e(D,null,{default:t(()=>[e(k,{cols:"12",md:"4"},{default:t(()=>[e(i,{class:"mb-4 concept-card",elevation:"2"},{default:t(()=>[e(d,{class:"d-flex align-center"},{default:t(()=>[...l[3]||(l[3]=[s("span",{class:"text-h6"},"💡 什么是 AOP？",-1)])]),_:1}),e(r,null,{default:t(()=>[l[5]||(l[5]=s("p",{class:"text-body-1 mb-3"},[s("strong",null,"AOP = 面向切面编程"),n("，是 OOP 的完美补充！ ")],-1)),e(E,{type:"info",density:"compact",class:"mb-3"},{default:t(()=>[...l[4]||(l[4]=[s("strong",null,"简单理解：",-1),n("把横切逻辑（日志、事务、权限）从业务代码中抽离出来，统一管理 🎯 ",-1)])]),_:1}),l[6]||(l[6]=s("div",{class:"example-box"},[s("div",{class:"text-subtitle-2 mb-2"},"❌ 没有 AOP 时："),s("pre",{class:"code-snippet"},`每个方法都要写日志
每个方法都要写事务
代码重复，维护困难 😫`)],-1)),l[7]||(l[7]=s("div",{class:"example-box mt-3"},[s("div",{class:"text-subtitle-2 mb-2"},"✅ 有了 AOP 后："),s("pre",{class:"code-snippet"},`一个切面搞定所有
代码简洁，专注业务 🎉`)],-1))]),_:1})]),_:1}),e(i,{class:"mb-4 concept-card",elevation:"2"},{default:t(()=>[e(d,{class:"d-flex align-center"},{default:t(()=>[...l[8]||(l[8]=[s("span",{class:"text-h6"},"📚 核心术语",-1)])]),_:1}),e(r,null,{default:t(()=>[e(C,{density:"compact"},{default:t(()=>[e(b,null,{prepend:t(()=>[e(u,{color:"primary"},{default:t(()=>[...l[9]||(l[9]=[n("mdi-target",-1)])]),_:1})]),default:t(()=>[e(c,null,{default:t(()=>[...l[10]||(l[10]=[s("strong",null,"JoinPoint（连接点）",-1)])]),_:1}),e(V,null,{default:t(()=>[...l[11]||(l[11]=[n("哪个方法可以被增强",-1)])]),_:1})]),_:1}),e(b,null,{prepend:t(()=>[e(u,{color:"primary"},{default:t(()=>[...l[12]||(l[12]=[n("mdi-scissors-cutting",-1)])]),_:1})]),default:t(()=>[e(c,null,{default:t(()=>[...l[13]||(l[13]=[s("strong",null,"PointCut（切入点）",-1)])]),_:1}),e(V,null,{default:t(()=>[...l[14]||(l[14]=[n("匹配哪些方法需要织入",-1)])]),_:1})]),_:1}),e(b,null,{prepend:t(()=>[e(u,{color:"primary"},{default:t(()=>[...l[15]||(l[15]=[n("mdi-lightbulb-on",-1)])]),_:1})]),default:t(()=>[e(c,null,{default:t(()=>[...l[16]||(l[16]=[s("strong",null,"Advice（通知）",-1)])]),_:1}),e(V,null,{default:t(()=>[...l[17]||(l[17]=[n("做什么增强（before/after/around）",-1)])]),_:1})]),_:1}),e(b,null,{prepend:t(()=>[e(u,{color:"primary"},{default:t(()=>[...l[18]||(l[18]=[n("mdi-package-variant",-1)])]),_:1})]),default:t(()=>[e(c,null,{default:t(()=>[...l[19]||(l[19]=[s("strong",null,"Aspect（切面）",-1)])]),_:1}),e(V,null,{default:t(()=>[...l[20]||(l[20]=[n("切点定义 + 通知逻辑",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(i,{class:"mb-4 concept-card",elevation:"2"},{default:t(()=>[e(d,{class:"d-flex align-center"},{default:t(()=>[...l[21]||(l[21]=[s("span",{class:"text-h6"},"🎯 典型应用场景",-1)])]),_:1}),e(r,null,{default:t(()=>[e(z,null,{default:t(()=>[e(m,{color:"primary",variant:"tonal"},{default:t(()=>[...l[22]||(l[22]=[n("📝 日志记录",-1)])]),_:1}),e(m,{color:"success",variant:"tonal"},{default:t(()=>[...l[23]||(l[23]=[n("🔒 权限校验",-1)])]),_:1}),e(m,{color:"warning",variant:"tonal"},{default:t(()=>[...l[24]||(l[24]=[n("💼 事务管理",-1)])]),_:1}),e(m,{color:"info",variant:"tonal"},{default:t(()=>[...l[25]||(l[25]=[n("📊 性能监控",-1)])]),_:1}),e(m,{color:"purple",variant:"tonal"},{default:t(()=>[...l[26]||(l[26]=[n("🚦 限流控制",-1)])]),_:1}),e(m,{color:"orange",variant:"tonal"},{default:t(()=>[...l[27]||(l[27]=[n("⚠️ 异常处理",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(k,{cols:"12",md:"8"},{default:t(()=>[e(i,{class:"mb-4",elevation:"2"},{default:t(()=>[e(d,{class:"d-flex align-center justify-space-between"},{default:t(()=>[s("div",X,[e(u,{color:"primary",class:"mr-2"},{default:t(()=>[...l[28]||(l[28]=[n("mdi-animation-play",-1)])]),_:1}),l[29]||(l[29]=s("span",null,"🎬 AOP 工作原理",-1))]),e(F,{color:"primary",size:"small","prepend-icon":"mdi-play",onClick:J,disabled:y.value},{default:t(()=>[...l[30]||(l[30]=[n(" 播放动画 ",-1)])]),_:1},8,["disabled"])]),_:1}),e(r,null,{default:t(()=>[s("div",{class:"animation-container",ref_key:"animationContainer",ref:B},[s("div",Y,[s("div",{class:v(["flow-step",{active:o.value>=1}]),style:{left:"50px",top:"50px"}},[...l[31]||(l[31]=[s("div",{class:"step-icon"},"📝",-1),s("div",{class:"step-label"},"业务代码",-1),s("div",{class:"step-detail"},"UserService.save()",-1)])],2),s("div",{class:v(["flow-arrow",{active:o.value>=2}]),style:{left:"200px",top:"100px"}}," → ",2),s("div",{class:v(["flow-step proxy-step",{active:o.value>=2}]),style:{left:"300px",top:"50px"}},[...l[32]||(l[32]=[s("div",{class:"step-icon"},"🛡️",-1),s("div",{class:"step-label"},"AOP 代理",-1),s("div",{class:"step-detail"},"拦截方法调用",-1)])],2),s("div",{class:v(["flow-arrow",{active:o.value>=3}]),style:{left:"500px",top:"100px"}}," → ",2),s("div",{class:v(["flow-step aspect-step",{active:o.value>=3}]),style:{left:"600px",top:"50px"}},[...l[33]||(l[33]=[s("div",{class:"step-icon"},"✨",-1),s("div",{class:"step-label"},"切面增强",-1),s("div",{class:"step-detail"},"Before → Around → After",-1)])],2),s("div",{class:v(["flow-step result-step",{active:o.value>=4}]),style:{left:"350px",top:"200px"}},[...l[34]||(l[34]=[s("div",{class:"step-icon"},"✅",-1),s("div",{class:"step-label"},"执行完成",-1),s("div",{class:"step-detail"},[n("日志已记录"),s("br"),n("事务已提交")],-1)])],2)])],512)]),_:1})]),_:1}),e(i,{class:"mb-4",elevation:"2"},{default:t(()=>[e(d,null,{default:t(()=>[e(u,{color:"primary",class:"mr-2"},{default:t(()=>[...l[35]||(l[35]=[n("mdi-code-tags",-1)])]),_:1}),l[36]||(l[36]=s("span",null,"💻 代码示例",-1))]),_:1}),e(r,null,{default:t(()=>[e(K,{modelValue:g.value,"onUpdate:modelValue":l[0]||(l[0]=a=>g.value=a),color:"primary"},{default:t(()=>[e(O,{value:"aspect"},{default:t(()=>[...l[37]||(l[37]=[n("切面定义",-1)])]),_:1}),e(O,{value:"usage"},{default:t(()=>[...l[38]||(l[38]=[n("使用方式",-1)])]),_:1}),e(O,{value:"proxy"},{default:t(()=>[...l[39]||(l[39]=[n("代理机制",-1)])]),_:1})]),_:1},8,["modelValue"]),e(M,{modelValue:g.value,"onUpdate:modelValue":l[1]||(l[1]=a=>g.value=a),class:"mt-4"},{default:t(()=>[e(S,{value:"aspect"},{default:t(()=>[...l[40]||(l[40]=[s("pre",{class:"code-block"},[s("code",null,`@Aspect
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
}`)],-1)])]),_:1}),e(S,{value:"usage"},{default:t(()=>[...l[41]||(l[41]=[s("pre",{class:"code-block"},[s("code",null,`// 业务代码：完全不需要关心日志
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
// 业务代码保持简洁！`)],-1)])]),_:1}),e(S,{value:"proxy"},{default:t(()=>[...l[42]||(l[42]=[s("pre",{class:"code-block"},[s("code",null,`// Spring AOP 基于动态代理
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
// 通过继承生成子类，覆盖方法`)],-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,{class:"mb-4",elevation:"2"},{default:t(()=>[e(d,null,{default:t(()=>[e(u,{color:"warning",class:"mr-2"},{default:t(()=>[...l[43]||(l[43]=[n("mdi-alert-circle",-1)])]),_:1}),l[44]||(l[44]=s("span",null,"⚠️ AOP 失效场景",-1))]),_:1}),e(r,null,{default:t(()=>[e(Q,null,{default:t(()=>[(x(!0),w(T,null,I(U.value,(a,P)=>(x(),j(W,{key:P,title:a.title},{default:t(()=>[e(q,null,{default:t(()=>[s("div",Z,[l[45]||(l[45]=s("strong",null,"原因：",-1)),n(A(a.reason),1)]),s("div",$,[l[46]||(l[46]=s("strong",null,"解决方案：",-1)),n(A(a.solution),1)])]),_:2},1024)]),_:2},1032,["title"]))),128))]),_:1})]),_:1})]),_:1}),e(i,{elevation:"2"},{default:t(()=>[e(d,null,{default:t(()=>[e(u,{color:"success",class:"mr-2"},{default:t(()=>[...l[47]||(l[47]=[n("mdi-star",-1)])]),_:1}),l[48]||(l[48]=s("span",null,"⭐ 最佳实践",-1))]),_:1}),e(r,null,{default:t(()=>[e(C,null,{default:t(()=>[(x(!0),w(T,null,I(L.value,(a,P)=>(x(),j(b,{key:P,"prepend-icon":a.icon},{default:t(()=>[e(c,null,{default:t(()=>[n(A(a.text),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}}),il=H(_,[["__scopeId","data-v-01578b49"]]);export{il as default};
