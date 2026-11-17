goog.provide('lotty.ui');
if((typeof lotty !== 'undefined') && (typeof lotty.ui !== 'undefined') && (typeof lotty.ui.state !== 'undefined')){
} else {
lotty.ui.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"country-id","country-id",927351142),null,new cljs.core.Keyword(null,"game-id","game-id",385578016),null,new cljs.core.Keyword(null,"draw","draw",1358331674),null,new cljs.core.Keyword(null,"tickets","tickets",-2077135171),lotty.storage.load_tickets()], null));
}
lotty.ui.country = (function lotty$ui$country(){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11961_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11961_SHARP_),new cljs.core.Keyword(null,"country-id","country-id",927351142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lotty.ui.state)));
}),lotty.lotteries.countries));
});
lotty.ui.game = (function lotty$ui$game(){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11962_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11962_SHARP_),new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lotty.ui.state)));
}),new cljs.core.Keyword(null,"games","games",1927565374).cljs$core$IFn$_invoke$arity$1(lotty.ui.country())));
});
lotty.ui.start = (function lotty$ui$start(){
var g = lotty.ui.game();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lotty.ui.state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"draw","draw",1358331674),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"draw","draw",1358331674),lotty.draw.start_draw(g)], 0));
});
lotty.ui.save_ticket = (function lotty$ui$save_ticket(){
var g = lotty.ui.game();
var d = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lotty.ui.state));
var ticket = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),Date.now(),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date()).toISOString(),new cljs.core.Keyword(null,"mainNums","mainNums",-435063855),new cljs.core.Keyword(null,"main-nums","main-nums",1989289692).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"bonusNums","bonusNums",1369344467),new cljs.core.Keyword(null,"bonus-nums","bonus-nums",213768730).cljs$core$IFn$_invoke$arity$1(d)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lotty.ui.state,cljs.core.update,new cljs.core.Keyword(null,"tickets","tickets",-2077135171),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ticket], 0));

return lotty.storage.save_tickets_BANG_(new cljs.core.Keyword(null,"tickets","tickets",-2077135171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lotty.ui.state)));
});
lotty.ui.setup_view = (function lotty$ui$setup_view(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Lottery Number Picker"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"country-id","country-id",927351142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lotty.ui.state));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11963_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lotty.ui.state,cljs.core.assoc,new cljs.core.Keyword(null,"country-id","country-id",927351142),p1__11963_SHARP_.target.value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"game-id","game-id",385578016),null], 0));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Country\u2026"], null),(function (){var iter__5649__auto__ = (function lotty$ui$setup_view_$_iter__11965(s__11966){
return (new cljs.core.LazySeq(null,(function (){
var s__11966__$1 = s__11966;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__11966__$1);
if(temp__5823__auto__){
var s__11966__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11966__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__11966__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__11968 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__11967 = (0);
while(true){
if((i__11967 < size__5648__auto__)){
var c = cljs.core._nth(c__5647__auto__,i__11967);
cljs.core.chunk_append(b__11968,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c)], null));

var G__11978 = (i__11967 + (1));
i__11967 = G__11978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11968),lotty$ui$setup_view_$_iter__11965(cljs.core.chunk_rest(s__11966__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11968),null);
}
} else {
var c = cljs.core.first(s__11966__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c)], null),lotty$ui$setup_view_$_iter__11965(cljs.core.rest(s__11966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(lotty.lotteries.countries);
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"game-id","game-id",385578016).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lotty.ui.state));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11964_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lotty.ui.state,cljs.core.assoc,new cljs.core.Keyword(null,"game-id","game-id",385578016),p1__11964_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Lottery\u2026"], null),(function (){var iter__5649__auto__ = (function lotty$ui$setup_view_$_iter__11969(s__11970){
return (new cljs.core.LazySeq(null,(function (){
var s__11970__$1 = s__11970;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__11970__$1);
if(temp__5823__auto__){
var s__11970__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11970__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__11970__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__11972 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__11971 = (0);
while(true){
if((i__11971 < size__5648__auto__)){
var g = cljs.core._nth(c__5647__auto__,i__11971);
cljs.core.chunk_append(b__11972,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(g)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(g)], null));

var G__11979 = (i__11971 + (1));
i__11971 = G__11979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11972),lotty$ui$setup_view_$_iter__11969(cljs.core.chunk_rest(s__11970__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11972),null);
}
} else {
var g = cljs.core.first(s__11970__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(g)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(g)], null),lotty$ui$setup_view_$_iter__11969(cljs.core.rest(s__11970__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"games","games",1927565374).cljs$core$IFn$_invoke$arity$1(lotty.ui.country()));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(lotty.ui.game() == null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),lotty.ui.start], null),"Start"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lotty.ui.state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"history","history",-247395220));
})], null),"Tickets"], null)], null);
});
lotty.ui.draw_view = (function lotty$ui$draw_view(){
var d = new cljs.core.Keyword(null,"draw","draw",1358331674).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lotty.ui.state));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"main-nums","main-nums",1989289692).cljs$core$IFn$_invoke$arity$1(d)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bonus-nums","bonus-nums",213768730).cljs$core$IFn$_invoke$arity$1(d)], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(d)], 0))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done","done",-889844188),new cljs.core.Keyword(null,"phase","phase",575722892).cljs$core$IFn$_invoke$arity$1(d)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),lotty.ui.save_ticket], null),"Save"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lotty.ui.state,cljs.core.update,new cljs.core.Keyword(null,"draw","draw",1358331674),lotty.draw.draw_next);
})], null),"Next"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lotty.ui.state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"setup","setup",1987730512));
})], null),"Back"], null)], null);
});
lotty.ui.history_view = (function lotty$ui$history_view(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(lotty.ui.state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"setup","setup",1987730512));
})], null),"Back"], null),(function (){var iter__5649__auto__ = (function lotty$ui$history_view_$_iter__11973(s__11974){
return (new cljs.core.LazySeq(null,(function (){
var s__11974__$1 = s__11974;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__11974__$1);
if(temp__5823__auto__){
var s__11974__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11974__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__11974__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__11976 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__11975 = (0);
while(true){
if((i__11975 < size__5648__auto__)){
var t = cljs.core._nth(c__5647__auto__,i__11975);
cljs.core.chunk_append(b__11976,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(t)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mainNums","mainNums",-435063855).cljs$core$IFn$_invoke$arity$1(t)], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bonusNums","bonusNums",1369344467).cljs$core$IFn$_invoke$arity$1(t)], 0))], null));

var G__11980 = (i__11975 + (1));
i__11975 = G__11980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11976),lotty$ui$history_view_$_iter__11973(cljs.core.chunk_rest(s__11974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11976),null);
}
} else {
var t = cljs.core.first(s__11974__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(t)," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"mainNums","mainNums",-435063855).cljs$core$IFn$_invoke$arity$1(t)], 0))," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bonusNums","bonusNums",1369344467).cljs$core$IFn$_invoke$arity$1(t)], 0))], null),lotty$ui$history_view_$_iter__11973(cljs.core.rest(s__11974__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"tickets","tickets",-2077135171).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lotty.ui.state)));
})()], null);
});
lotty.ui.app = (function lotty$ui$app(){
var G__11977 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lotty.ui.state));
var G__11977__$1 = (((G__11977 instanceof cljs.core.Keyword))?G__11977.fqn:null);
switch (G__11977__$1) {
case "draw":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lotty.ui.draw_view], null);

break;
case "history":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lotty.ui.history_view], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lotty.ui.setup_view], null);

}
});

//# sourceMappingURL=lotty.ui.js.map
