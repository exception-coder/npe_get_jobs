// @univerjs/thread-comment-ui/locale/es-ES
(function(e,o){typeof exports=="object"&&typeof module<"u"?module.exports=o():typeof define=="function"&&define.amd?define(o):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverThreadCommentUiEsES=o())})(this,(function(){"use strict";return{threadCommentUI:{panel:{title:"Gestión de comentarios",empty:"Aún no hay comentarios",filterEmpty:"Sin resultados coincidentes",reset:"Restablecer filtro",addComment:"Añadir comentario",solved:"Resuelto"},editor:{placeholder:"Responde o añade a otros con @",reply:"Comentar",cancel:"Cancelar",save:"Guardar"},item:{edit:"Editar",delete:"Eliminar este comentario"},filter:{sheet:{all:"Todas las hojas",current:"Hoja actual"},status:{all:"Todos los comentarios",resolved:"Resueltos",unsolved:"No resueltos",concernMe:"Me concierne"}}}}}));


// @univerjs/sheets-thread-comment-ui/locale/es-ES
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n():typeof define=="function"&&define.amd?define(n):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverSheetsThreadCommentUiEsES=n())})(this,(function(){"use strict";return{sheetThreadComment:{menu:{addComment:"Añadir comentario",commentManagement:"Gestión de comentarios"}}}}));


// locale/es-ES
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n(require("@univerjs/core"),require("@univerjs/sheets-thread-comment-ui/locale/es-ES"),require("@univerjs/thread-comment-ui/locale/es-ES")):typeof define=="function"&&define.amd?define(["@univerjs/core","@univerjs/sheets-thread-comment-ui/locale/es-ES","@univerjs/thread-comment-ui/locale/es-ES"],n):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverPresetSheetsThreadCommentEsES=n(e.UniverCore,e.UniverSheetsThreadCommentUiEsES,e.UniverThreadCommentUiEsES))})(this,(function(e,n,s){"use strict";return e.mergeLocales(n,s)}));
