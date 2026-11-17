goog.provide('lotty.draw');
lotty.draw.shuffle_v = (function lotty$draw$shuffle_v(v){
var a = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(v);
var i_11964 = (a.length - (1));
while(true){
if((i_11964 > (0))){
var j_11965 = cljs.core.rand_int((i_11964 + (1)));
var t_11966 = (a[i_11964]);
(a[i_11964] = (a[j_11965]));

(a[j_11965] = t_11966);

var G__11967 = (i_11964 - (1));
i_11964 = G__11967;
continue;
} else {
}
break;
}

return cljs.core.vec(a);
});
lotty.draw.start_draw = (function lotty$draw$start_draw(p__11961){
var map__11962 = p__11961;
var map__11962__$1 = cljs.core.__destructure_map(map__11962);
var main_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11962__$1,new cljs.core.Keyword(null,"main-count","main-count",938483757));
var main_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11962__$1,new cljs.core.Keyword(null,"main-max","main-max",1283117648));
var bonus_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11962__$1,new cljs.core.Keyword(null,"bonus-count","bonus-count",149645629));
var bonus_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11962__$1,new cljs.core.Keyword(null,"bonus-min","bonus-min",-1361782053));
var bonus_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11962__$1,new cljs.core.Keyword(null,"bonus-max","bonus-max",-1801476212));
var bonus_from_main_pool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11962__$1,new cljs.core.Keyword(null,"bonus-from-main-pool","bonus-from-main-pool",328300495));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"main-pool","main-pool",-2087883644),new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"bonus-max","bonus-max",-1801476212),new cljs.core.Keyword(null,"main-count","main-count",938483757),new cljs.core.Keyword(null,"bonus-from-main-pool","bonus-from-main-pool",328300495),new cljs.core.Keyword(null,"main-max","main-max",1283117648),new cljs.core.Keyword(null,"bonus-nums","bonus-nums",213768730),new cljs.core.Keyword(null,"bonus-min","bonus-min",-1361782053),new cljs.core.Keyword(null,"main-nums","main-nums",1989289692),new cljs.core.Keyword(null,"bonus-count","bonus-count",149645629)],[lotty.draw.shuffle_v(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,cljs.core.range.cljs$core$IFn$_invoke$arity$1(main_max))),(((main_count > (0)))?new cljs.core.Keyword(null,"main","main",-2117802661):new cljs.core.Keyword(null,"bonus","bonus",-1684391149)),(function (){var or__5162__auto__ = bonus_max;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (9);
}
})(),main_count,cljs.core.boolean$(bonus_from_main_pool),main_max,cljs.core.PersistentVector.EMPTY,(function (){var or__5162__auto__ = bonus_min;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})(),cljs.core.PersistentVector.EMPTY,(function (){var or__5162__auto__ = bonus_count;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (0);
}
})()]);
});
lotty.draw.draw_next = (function lotty$draw$draw_next(s){
var G__11963 = new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(s);
var G__11963__$1 = (((G__11963 instanceof cljs.core.Keyword))?G__11963.fqn:null);
switch (G__11963__$1) {
case "main":
var n = cljs.core.first(new cljs.core.Keyword(null,"main-pool","main-pool",-2087883644).cljs$core$IFn$_invoke$arity$1(s));
var nums = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-nums","main-nums",1989289692).cljs$core$IFn$_invoke$arity$1(s),n)));
var done_QMARK_ = (cljs.core.count(nums) >= new cljs.core.Keyword(null,"main-count","main-count",938483757).cljs$core$IFn$_invoke$arity$1(s));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"main-pool","main-pool",-2087883644),cljs.core.vec(cljs.core.rest(new cljs.core.Keyword(null,"main-pool","main-pool",-2087883644).cljs$core$IFn$_invoke$arity$1(s))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"main-nums","main-nums",1989289692),nums,new cljs.core.Keyword(null,"phase","phase",575722892),(((!(done_QMARK_)))?new cljs.core.Keyword(null,"main","main",-2117802661):(((new cljs.core.Keyword(null,"bonus-count","bonus-count",149645629).cljs$core$IFn$_invoke$arity$1(s) > (0)))?new cljs.core.Keyword(null,"bonus","bonus",-1684391149):new cljs.core.Keyword(null,"done","done",-889844188)
))], 0));

break;
case "bonus":
var n = (cljs.core.truth_(new cljs.core.Keyword(null,"bonus-from-main-pool","bonus-from-main-pool",328300495).cljs$core$IFn$_invoke$arity$1(s))?cljs.core.rand_nth(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-nums","main-nums",1989289692).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"bonus-nums","bonus-nums",213768730).cljs$core$IFn$_invoke$arity$1(s))),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(new cljs.core.Keyword(null,"main-max","main-max",1283117648).cljs$core$IFn$_invoke$arity$1(s) + (1))))):(new cljs.core.Keyword(null,"bonus-min","bonus-min",-1361782053).cljs$core$IFn$_invoke$arity$1(s) + cljs.core.rand_int(((new cljs.core.Keyword(null,"bonus-max","bonus-max",-1801476212).cljs$core$IFn$_invoke$arity$1(s) - new cljs.core.Keyword(null,"bonus-min","bonus-min",-1361782053).cljs$core$IFn$_invoke$arity$1(s)) + (1)))));
var nums = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bonus-nums","bonus-nums",213768730).cljs$core$IFn$_invoke$arity$1(s),n);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,new cljs.core.Keyword(null,"bonus-nums","bonus-nums",213768730),nums,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"phase","phase",575722892),(((cljs.core.count(nums) >= new cljs.core.Keyword(null,"bonus-count","bonus-count",149645629).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.Keyword(null,"done","done",-889844188):new cljs.core.Keyword(null,"bonus","bonus",-1684391149))], 0));

break;
default:
return s;

}
});

//# sourceMappingURL=lotty.draw.js.map
