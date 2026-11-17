goog.provide('lotty.storage');
lotty.storage.storage_key = "lottery-picker-v4-tickets";
lotty.storage.load_tickets = (function lotty$storage$load_tickets(){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse((function (){var or__5162__auto__ = localStorage.getItem(lotty.storage.storage_key);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "[]";
}
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
lotty.storage.save_tickets_BANG_ = (function lotty$storage$save_tickets_BANG_(tickets){
return localStorage.setItem(lotty.storage.storage_key,JSON.stringify(cljs.core.clj__GT_js(tickets)));
});

//# sourceMappingURL=lotty.storage.js.map
