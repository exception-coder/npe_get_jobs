// @univerjs/thread-comment-ui/locale/zh-TW
(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverThreadCommentUiZhTW=t())})(this,(function(){"use strict";return{threadCommentUI:{panel:{title:"評論管理",empty:"暫無評論",filterEmpty:"沒有符合的結果",reset:"重置",addComment:"新增評論",solved:"已解決"},editor:{placeholder:"回覆",reply:"回覆",cancel:"取消",save:"儲存"},item:{edit:"編輯",delete:"刪除"},filter:{sheet:{all:"所有表格",current:"當前表格"},status:{all:"所有評論",resolved:"已解決",unsolved:"未解決",concernMe:"與我有關"}}}}}));


// @univerjs/sheets-thread-comment-ui/locale/zh-TW
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n():typeof define=="function"&&define.amd?define(n):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverSheetsThreadCommentUiZhTW=n())})(this,(function(){"use strict";return{sheetThreadComment:{menu:{addComment:"新增評論",commentManagement:"評論管理"}}}}));


// locale/zh-TW
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("@univerjs/core"),require("@univerjs/sheets-thread-comment-ui/locale/zh-TW"),require("@univerjs/thread-comment-ui/locale/zh-TW")):typeof define=="function"&&define.amd?define(["@univerjs/core","@univerjs/sheets-thread-comment-ui/locale/zh-TW","@univerjs/thread-comment-ui/locale/zh-TW"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverPresetSheetsThreadCommentZhTW=n(e.UniverCore,e.UniverSheetsThreadCommentUiZhTW,e.UniverThreadCommentUiZhTW))})(this,(function(e,n,i){"use strict";return e.mergeLocales(n,i)}));
