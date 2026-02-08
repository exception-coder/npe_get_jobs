import{V as s,b as u,a as i}from"./VCard-DFIDGoOa.js";import{V as P,a as S}from"./VRow-C6N6h8s9.js";import{V as Q}from"./VSelect-CO5xudFf.js";import{V as w}from"./VAlert-CfJUBCCM.js";import{d as A,k as E,p as V,o as p,e as t,b as e,Q as l,x as T,n as D,t as m,v as f,g as a,V as d,F as U,q as I,a$ as B,c as k}from"./index-mJOBftNs.js";import{V as L}from"./VTable-BPBhndI2.js";import{V as C,b,d as W,e as R}from"./VTabs-BYSgCciz.js";import{V as F}from"./VCheckbox-cGVzKUF_.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VTextField-tFIcna6m.js";const Y={class:"spring-transaction-view"},H={class:"text-subtitle-2 mb-1"},q={class:"text-body-2"},$=A({__name:"SpringTransactionView",setup(j){const c=E("REQUIRED"),v=E("basic"),y=["REQUIRED","REQUIRES_NEW","SUPPORTS","NOT_SUPPORTED","MANDATORY","NEVER","NESTED"],N=E(["方法必须是 public","方法不能是 final/static","异常要抛出，不能捕获","必须通过代理对象调用","rollbackFor 配置正确"]),x=r=>{const n={REQUIRED:{title:"🔄 默认传播机制",desc:"有事务就加入，没有就创建。始终保证在一个事务中，最常用！"},REQUIRES_NEW:{title:"🆕 强制新事务",desc:"挂起外层事务，创建独立新事务。适合日志、补偿等独立操作。"},SUPPORTS:{title:"🤝 支持事务",desc:"有事务就加入，没有就非事务执行。适合可选的查询操作。"},NOT_SUPPORTED:{title:"🚫 不支持事务",desc:"挂起现有事务，非事务执行。适合读写分离的末尾读操作。"},MANDATORY:{title:"⚠️ 强制要求事务",desc:"必须在事务中，否则抛异常。用于框架级约束。"},NEVER:{title:"❌ 禁止事务",desc:"不能在事务中，否则抛异常。用于禁止事务的场景。"},NESTED:{title:"🔗 嵌套事务",desc:"创建子事务（savepoint），可部分回滚。需要数据库支持。"}};return n[r]||n.REQUIRED},_=r=>r==="REQUIRED"?"success":r==="REQUIRES_NEW"?"info":r==="NEVER"||r==="MANDATORY"?"warning":"info",O=E([{icon:"mdi-check-circle",text:"🎯 默认使用 REQUIRED，满足大部分场景"},{icon:"mdi-check-circle",text:"📝 只读操作使用 readOnly=true，提升性能"},{icon:"mdi-check-circle",text:"⚠️ 显式指定 rollbackFor=Exception.class，避免检查异常不回滚"},{icon:"mdi-check-circle",text:"🔒 避免同类内部调用，拆分到其他 Bean"},{icon:"mdi-check-circle",text:"✅ 异常要抛出，不要捕获后忽略"}]);return(r,n)=>(p(),V("div",Y,[t(B,{fluid:"",class:"pa-4"},{default:e(()=>[t(s,{class:"mb-4 title-card",elevation:"0"},{default:e(()=>[t(u,{class:"text-center pa-6"},{default:e(()=>[...n[3]||(n[3]=[l("div",{class:"text-h4 font-weight-bold mb-2"}," 💼 Spring 事务完全指南 ",-1),l("div",{class:"text-subtitle-1 text-medium-emphasis"}," 掌握事务，数据一致性不再担心！🛡️ ",-1)])]),_:1})]),_:1}),t(P,null,{default:e(()=>[t(S,{cols:"12",md:"4"},{default:e(()=>[t(s,{class:"mb-4 concept-card",elevation:"2"},{default:e(()=>[t(i,{class:"d-flex align-center"},{default:e(()=>[...n[4]||(n[4]=[l("span",{class:"text-h6"},"🔄 事务传播机制",-1)])]),_:1}),t(u,null,{default:e(()=>[t(Q,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=o=>c.value=o),items:y,label:"选择传播类型",density:"compact",class:"mb-3"},null,8,["modelValue"]),t(w,{type:_(c.value),density:"compact"},{default:e(()=>[l("div",H,T(x(c.value).title),1),l("div",q,T(x(c.value).desc),1)]),_:1},8,["type"])]),_:1})]),_:1}),t(s,{class:"mb-4 concept-card",elevation:"2"},{default:e(()=>[t(i,{class:"d-flex align-center"},{default:e(()=>[...n[5]||(n[5]=[l("span",{class:"text-h6"},"❌ 常见失效场景",-1)])]),_:1}),t(u,null,{default:e(()=>[t(D,{density:"compact"},{default:e(()=>[t(m,null,{prepend:e(()=>[t(d,{color:"error"},{default:e(()=>[...n[6]||(n[6]=[a("mdi-close-circle",-1)])]),_:1})]),default:e(()=>[t(f,null,{default:e(()=>[...n[7]||(n[7]=[a("同类内部调用",-1)])]),_:1})]),_:1}),t(m,null,{prepend:e(()=>[t(d,{color:"error"},{default:e(()=>[...n[8]||(n[8]=[a("mdi-close-circle",-1)])]),_:1})]),default:e(()=>[t(f,null,{default:e(()=>[...n[9]||(n[9]=[a("private/final/static 方法",-1)])]),_:1})]),_:1}),t(m,null,{prepend:e(()=>[t(d,{color:"error"},{default:e(()=>[...n[10]||(n[10]=[a("mdi-close-circle",-1)])]),_:1})]),default:e(()=>[t(f,null,{default:e(()=>[...n[11]||(n[11]=[a("异常被捕获未抛出",-1)])]),_:1})]),_:1}),t(m,null,{prepend:e(()=>[t(d,{color:"error"},{default:e(()=>[...n[12]||(n[12]=[a("mdi-close-circle",-1)])]),_:1})]),default:e(()=>[t(f,null,{default:e(()=>[...n[13]||(n[13]=[a("多线程环境",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t(s,{class:"mb-4 concept-card",elevation:"2"},{default:e(()=>[t(i,{class:"d-flex align-center"},{default:e(()=>[...n[14]||(n[14]=[l("span",{class:"text-h6"},"✅ 事务检查清单",-1)])]),_:1}),t(u,null,{default:e(()=>[(p(!0),V(U,null,I(N.value,(o,g)=>(p(),k(F,{key:g,label:o,density:"compact","hide-details":"",class:"mb-1"},null,8,["label"]))),128))]),_:1})]),_:1})]),_:1}),t(S,{cols:"12",md:"8"},{default:e(()=>[t(s,{class:"mb-4",elevation:"2"},{default:e(()=>[t(i,null,{default:e(()=>[t(d,{color:"primary",class:"mr-2"},{default:e(()=>[...n[15]||(n[15]=[a("mdi-information",-1)])]),_:1}),n[16]||(n[16]=l("span",null,"📚 七种传播机制详解",-1))]),_:1}),t(u,null,{default:e(()=>[t(L,null,{default:e(()=>[...n[17]||(n[17]=[l("thead",null,[l("tr",null,[l("th",null,"传播类型"),l("th",null,"有事务时"),l("th",null,"无事务时"),l("th",null,"适用场景")])],-1),l("tbody",null,[l("tr",null,[l("td",null,[l("strong",null,"REQUIRED"),a("（默认）")]),l("td",null,"加入现有事务"),l("td",null,"创建新事务"),l("td",null,"常规业务，最常用")]),l("tr",null,[l("td",null,[l("strong",null,"REQUIRES_NEW")]),l("td",null,"挂起，创建新事务"),l("td",null,"创建新事务"),l("td",null,"日志落库、补偿逻辑")]),l("tr",null,[l("td",null,[l("strong",null,"SUPPORTS")]),l("td",null,"加入现有事务"),l("td",null,"非事务执行"),l("td",null,"可选的查询操作")]),l("tr",null,[l("td",null,[l("strong",null,"NOT_SUPPORTED")]),l("td",null,"挂起事务"),l("td",null,"非事务执行"),l("td",null,"读写分离末尾读")]),l("tr",null,[l("td",null,[l("strong",null,"MANDATORY")]),l("td",null,"加入现有事务"),l("td",null,"抛异常"),l("td",null,"必须在事务中")]),l("tr",null,[l("td",null,[l("strong",null,"NEVER")]),l("td",null,"抛异常"),l("td",null,"非事务执行"),l("td",null,"禁止事务")]),l("tr",null,[l("td",null,[l("strong",null,"NESTED")]),l("td",null,"创建子事务（savepoint）"),l("td",null,"创建新事务"),l("td",null,"部分回滚场景")])],-1)])]),_:1})]),_:1})]),_:1}),t(s,{class:"mb-4",elevation:"2"},{default:e(()=>[t(i,null,{default:e(()=>[t(d,{color:"primary",class:"mr-2"},{default:e(()=>[...n[18]||(n[18]=[a("mdi-code-tags",-1)])]),_:1}),n[19]||(n[19]=l("span",null,"💻 代码示例",-1))]),_:1}),t(u,null,{default:e(()=>[t(C,{modelValue:v.value,"onUpdate:modelValue":n[1]||(n[1]=o=>v.value=o),color:"primary"},{default:e(()=>[t(b,{value:"basic"},{default:e(()=>[...n[20]||(n[20]=[a("基础用法",-1)])]),_:1}),t(b,{value:"propagation"},{default:e(()=>[...n[21]||(n[21]=[a("传播机制",-1)])]),_:1}),t(b,{value:"rollback"},{default:e(()=>[...n[22]||(n[22]=[a("回滚策略",-1)])]),_:1}),t(b,{value:"invalid"},{default:e(()=>[...n[23]||(n[23]=[a("失效案例",-1)])]),_:1})]),_:1},8,["modelValue"]),t(W,{modelValue:v.value,"onUpdate:modelValue":n[2]||(n[2]=o=>v.value=o),class:"mt-4"},{default:e(()=>[t(R,{value:"basic"},{default:e(()=>[...n[24]||(n[24]=[l("pre",{class:"code-block"},[l("code",null,`// 基础用法
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
}`)],-1)])]),_:1}),t(R,{value:"propagation"},{default:e(()=>[...n[25]||(n[25]=[l("pre",{class:"code-block"},[l("code",null,`// 传播机制示例
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
}`)],-1)])]),_:1}),t(R,{value:"rollback"},{default:e(()=>[...n[26]||(n[26]=[l("pre",{class:"code-block"},[l("code",null,`// 回滚策略
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
}`)],-1)])]),_:1}),t(R,{value:"invalid"},{default:e(()=>[...n[27]||(n[27]=[l("pre",{class:"code-block"},[l("code",null,`// ❌ 失效案例 1：同类内部调用
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
}`)],-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(s,{elevation:"2"},{default:e(()=>[t(i,null,{default:e(()=>[t(d,{color:"success",class:"mr-2"},{default:e(()=>[...n[28]||(n[28]=[a("mdi-star",-1)])]),_:1}),n[29]||(n[29]=l("span",null,"⭐ 最佳实践",-1))]),_:1}),t(u,null,{default:e(()=>[t(D,null,{default:e(()=>[(p(!0),V(U,null,I(O.value,(o,g)=>(p(),k(m,{key:g,"prepend-icon":o.icon},{default:e(()=>[t(f,null,{default:e(()=>[a(T(o.text),1)]),_:2},1024)]),_:2},1032,["prepend-icon"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]))}}),tl=M($,[["__scopeId","data-v-8603c9de"]]);export{tl as default};
