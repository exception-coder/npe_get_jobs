// @univerjs/thread-comment-ui/locale/en-US
(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverThreadCommentUiEnUS=t())})(this,(function(){"use strict";return{threadCommentUI:{panel:{title:"Comment Management",empty:"No comments yet",filterEmpty:"No match result",reset:"Reset Filter",addComment:"Add Comment",solved:"Solved"},editor:{placeholder:"Reply or add others with @",reply:"Comment",cancel:"Cancel",save:"Save"},item:{edit:"Edit",delete:"Delete This Comment"},filter:{sheet:{all:"All sheet",current:"Current sheet"},status:{all:"All comments",resolved:"Resolved",unsolved:"Not resolved",concernMe:"Concern me"}}}}}));


// @univerjs/sheets-thread-comment-ui/locale/en-US
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n():typeof define=="function"&&define.amd?define(n):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverSheetsThreadCommentUiEnUS=n())})(this,(function(){"use strict";return{sheetThreadComment:{menu:{addComment:"Add Comment",commentManagement:"Comment Management"}}}}));


// locale/en-US
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("@univerjs/core"),require("@univerjs/sheets-thread-comment-ui/locale/en-US"),require("@univerjs/thread-comment-ui/locale/en-US")):typeof define=="function"&&define.amd?define(["@univerjs/core","@univerjs/sheets-thread-comment-ui/locale/en-US","@univerjs/thread-comment-ui/locale/en-US"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverPresetSheetsThreadCommentEnUS=n(e.UniverCore,e.UniverSheetsThreadCommentUiEnUS,e.UniverThreadCommentUiEnUS))})(this,(function(e,n,i){"use strict";return e.mergeLocales(n,i)}));
