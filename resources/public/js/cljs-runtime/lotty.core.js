goog.provide('lotty.core');
if((typeof lotty !== 'undefined') && (typeof lotty.core !== 'undefined') && (typeof lotty.core.root !== 'undefined')){
} else {
lotty.core.root = reagent.dom.client.create_root(document.getElementById("app"));
}
lotty.core.init = (function lotty$core$init(){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(lotty.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lotty.ui.app], null));
});

//# sourceMappingURL=lotty.core.js.map
