// @univerjs/thread-comment-ui/locale/ko-KR
(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverThreadCommentUiKoKR=t())})(this,(function(){"use strict";return{threadCommentUI:{panel:{title:"댓글 관리",empty:"아직 댓글이 없습니다",filterEmpty:"일치하는 결과가 없습니다",reset:"필터 초기화",addComment:"댓글 추가",solved:"해결됨"},editor:{placeholder:"답변 또는 @로 다른 사람 추가",reply:"댓글",cancel:"취소",save:"저장"},item:{edit:"편집",delete:"댓글 삭제"},filter:{sheet:{all:"모든 시트",current:"현재 시트"},status:{all:"모든 댓글",resolved:"해결됨",unsolved:"해결되지 않음",concernMe:"나에게 관련됨"}}}}}));


// @univerjs/sheets-thread-comment-ui/locale/ko-KR
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n():typeof define=="function"&&define.amd?define(n):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverSheetsThreadCommentUiKoKR=n())})(this,(function(){"use strict";return{sheetThreadComment:{menu:{addComment:"댓글 추가",commentManagement:"댓글 관리"}}}}));


// locale/ko-KR
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("@univerjs/core"),require("@univerjs/sheets-thread-comment-ui/locale/ko-KR"),require("@univerjs/thread-comment-ui/locale/ko-KR")):typeof define=="function"&&define.amd?define(["@univerjs/core","@univerjs/sheets-thread-comment-ui/locale/ko-KR","@univerjs/thread-comment-ui/locale/ko-KR"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverPresetSheetsThreadCommentKoKR=n(e.UniverCore,e.UniverSheetsThreadCommentUiKoKR,e.UniverThreadCommentUiKoKR))})(this,(function(e,n,o){"use strict";return e.mergeLocales(n,o)}));
