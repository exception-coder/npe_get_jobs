// @univerjs/thread-comment-ui/locale/ru-RU
(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverThreadCommentUiRuRU=t())})(this,(function(){"use strict";return{threadCommentUI:{panel:{title:"Управление комментариями",empty:"Комментариев пока нет",filterEmpty:"Нет совпадений",reset:"Сбросить фильтр",addComment:"Добавить комментарий",solved:"Решено"},editor:{placeholder:"Отметьте пользователей через @",reply:"Добавить комментарий",cancel:"Отмена",save:"Сохранить"},item:{edit:"Редактировать",delete:"Удалить"},filter:{sheet:{all:"Все листы",current:"Текущий лист"},status:{all:"Все комментарии",resolved:"Решено",unsolved:"Не решено",concernMe:"Относящиеся ко мне"}}}}}));


// @univerjs/sheets-thread-comment-ui/locale/ru-RU
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n():typeof define=="function"&&define.amd?define(n):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverSheetsThreadCommentUiRuRU=n())})(this,(function(){"use strict";return{sheetThreadComment:{menu:{addComment:"Добавить комментарий",commentManagement:"Управление комментариями"}}}}));


// locale/ru-RU
(function(e,r){typeof exports=="object"&&typeof module<"u"?module.exports=r(require("@univerjs/core"),require("@univerjs/sheets-thread-comment-ui/locale/ru-RU"),require("@univerjs/thread-comment-ui/locale/ru-RU")):typeof define=="function"&&define.amd?define(["@univerjs/core","@univerjs/sheets-thread-comment-ui/locale/ru-RU","@univerjs/thread-comment-ui/locale/ru-RU"],r):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverPresetSheetsThreadCommentRuRU=r(e.UniverCore,e.UniverSheetsThreadCommentUiRuRU,e.UniverThreadCommentUiRuRU))})(this,(function(e,r,n){"use strict";return e.mergeLocales(r,n)}));
