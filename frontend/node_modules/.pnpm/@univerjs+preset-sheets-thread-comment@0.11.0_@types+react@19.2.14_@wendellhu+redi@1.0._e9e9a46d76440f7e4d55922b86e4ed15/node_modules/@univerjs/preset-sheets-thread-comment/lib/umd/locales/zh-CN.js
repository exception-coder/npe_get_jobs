// @univerjs/thread-comment-ui/locale/zh-CN
(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverThreadCommentUiZhCN=t())})(this,(function(){"use strict";return{threadCommentUI:{panel:{title:"评论管理",empty:"暂无评论",filterEmpty:"没有匹配的结果",reset:"重置",addComment:"添加评论",solved:"已解决"},editor:{placeholder:"回复",reply:"回复",cancel:"取消",save:"保存"},item:{edit:"编辑",delete:"删除"},filter:{sheet:{all:"所有表格",current:"当前表格"},status:{all:"所有评论",resolved:"已解决",unsolved:"未解决",concernMe:"与我有关"}}}}}));


// @univerjs/sheets-thread-comment-ui/locale/zh-CN
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n():typeof define=="function"&&define.amd?define(n):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverSheetsThreadCommentUiZhCN=n())})(this,(function(){"use strict";return{sheetThreadComment:{menu:{addComment:"添加评论",commentManagement:"评论管理"}}}}));


// locale/zh-CN
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("@univerjs/core"),require("@univerjs/sheets-thread-comment-ui/locale/zh-CN"),require("@univerjs/thread-comment-ui/locale/zh-CN")):typeof define=="function"&&define.amd?define(["@univerjs/core","@univerjs/sheets-thread-comment-ui/locale/zh-CN","@univerjs/thread-comment-ui/locale/zh-CN"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverPresetSheetsThreadCommentZhCN=n(e.UniverCore,e.UniverSheetsThreadCommentUiZhCN,e.UniverThreadCommentUiZhCN))})(this,(function(e,n,i){"use strict";return e.mergeLocales(n,i)}));
