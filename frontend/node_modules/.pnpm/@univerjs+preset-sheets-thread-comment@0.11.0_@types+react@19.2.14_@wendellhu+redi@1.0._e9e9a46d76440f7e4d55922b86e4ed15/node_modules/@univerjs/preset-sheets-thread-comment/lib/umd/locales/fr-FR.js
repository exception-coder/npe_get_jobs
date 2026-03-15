// @univerjs/thread-comment-ui/locale/fr-FR
(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t():typeof define=="function"&&define.amd?define(t):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverThreadCommentUiFrFR=t())})(this,(function(){"use strict";return{threadCommentUI:{panel:{title:"Gestion des commentaires",empty:"Pas encore de commentaires",filterEmpty:"Aucun résultat correspondant",reset:"Réinitialiser le filtre",addComment:"Ajouter un commentaire",solved:"Résolu"},editor:{placeholder:"Répondre ou ajouter d'autres avec @",reply:"Commenter",cancel:"Annuler",save:"Enregistrer"},item:{edit:"Modifier",delete:"Supprimer ce commentaire"},filter:{sheet:{all:"Toutes les feuilles",current:"Feuille actuelle"},status:{all:"Tous les commentaires",resolved:"Résolu",unsolved:"Non résolu",concernMe:"Me concerne"}}}}}));


// @univerjs/sheets-thread-comment-ui/locale/fr-FR
(function(e,n){typeof exports=="object"&&typeof module<"u"?module.exports=n():typeof define=="function"&&define.amd?define(n):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverSheetsThreadCommentUiFrFR=n())})(this,(function(){"use strict";return{sheetThreadComment:{menu:{addComment:"Ajouter un commentaire",commentManagement:"Gestion des commentaires"}}}}));


// locale/fr-FR
(function(e,r){typeof exports=="object"&&typeof module<"u"?module.exports=r(require("@univerjs/core"),require("@univerjs/sheets-thread-comment-ui/locale/fr-FR"),require("@univerjs/thread-comment-ui/locale/fr-FR")):typeof define=="function"&&define.amd?define(["@univerjs/core","@univerjs/sheets-thread-comment-ui/locale/fr-FR","@univerjs/thread-comment-ui/locale/fr-FR"],r):(e=typeof globalThis<"u"?globalThis:e||self,e.UniverPresetSheetsThreadCommentFrFR=r(e.UniverCore,e.UniverSheetsThreadCommentUiFrFR,e.UniverThreadCommentUiFrFR))})(this,(function(e,r,n){"use strict";return e.mergeLocales(r,n)}));
