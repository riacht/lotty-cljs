goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___21516 = arguments.length;
var i__5898__auto___21517 = (0);
while(true){
if((i__5898__auto___21517 < len__5897__auto___21516)){
args__5903__auto__.push((arguments[i__5898__auto___21517]));

var G__21518 = (i__5898__auto___21517 + (1));
i__5898__auto___21517 = G__21518;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21177){
var G__21178 = cljs.core.first(seq21177);
var seq21177__$1 = cljs.core.next(seq21177);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21178,seq21177__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21185 = cljs.core.seq(sources);
var chunk__21186 = null;
var count__21187 = (0);
var i__21188 = (0);
while(true){
if((i__21188 < count__21187)){
var map__21193 = chunk__21186.cljs$core$IIndexed$_nth$arity$2(null,i__21188);
var map__21193__$1 = cljs.core.__destructure_map(map__21193);
var src = map__21193__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21193__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21194){var e_21519 = e21194;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21519);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21519.message))));
}

var G__21520 = seq__21185;
var G__21521 = chunk__21186;
var G__21522 = count__21187;
var G__21523 = (i__21188 + (1));
seq__21185 = G__21520;
chunk__21186 = G__21521;
count__21187 = G__21522;
i__21188 = G__21523;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21185);
if(temp__5823__auto__){
var seq__21185__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21185__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21185__$1);
var G__21524 = cljs.core.chunk_rest(seq__21185__$1);
var G__21525 = c__5694__auto__;
var G__21526 = cljs.core.count(c__5694__auto__);
var G__21527 = (0);
seq__21185 = G__21524;
chunk__21186 = G__21525;
count__21187 = G__21526;
i__21188 = G__21527;
continue;
} else {
var map__21198 = cljs.core.first(seq__21185__$1);
var map__21198__$1 = cljs.core.__destructure_map(map__21198);
var src = map__21198__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21199){var e_21528 = e21199;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21528);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21528.message))));
}

var G__21529 = cljs.core.next(seq__21185__$1);
var G__21530 = null;
var G__21531 = (0);
var G__21532 = (0);
seq__21185 = G__21529;
chunk__21186 = G__21530;
count__21187 = G__21531;
i__21188 = G__21532;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21204 = cljs.core.seq(js_requires);
var chunk__21205 = null;
var count__21206 = (0);
var i__21207 = (0);
while(true){
if((i__21207 < count__21206)){
var js_ns = chunk__21205.cljs$core$IIndexed$_nth$arity$2(null,i__21207);
var require_str_21533 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21533);


var G__21534 = seq__21204;
var G__21535 = chunk__21205;
var G__21536 = count__21206;
var G__21537 = (i__21207 + (1));
seq__21204 = G__21534;
chunk__21205 = G__21535;
count__21206 = G__21536;
i__21207 = G__21537;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21204);
if(temp__5823__auto__){
var seq__21204__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21204__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21204__$1);
var G__21538 = cljs.core.chunk_rest(seq__21204__$1);
var G__21539 = c__5694__auto__;
var G__21540 = cljs.core.count(c__5694__auto__);
var G__21541 = (0);
seq__21204 = G__21538;
chunk__21205 = G__21539;
count__21206 = G__21540;
i__21207 = G__21541;
continue;
} else {
var js_ns = cljs.core.first(seq__21204__$1);
var require_str_21542 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21542);


var G__21543 = cljs.core.next(seq__21204__$1);
var G__21544 = null;
var G__21545 = (0);
var G__21546 = (0);
seq__21204 = G__21543;
chunk__21205 = G__21544;
count__21206 = G__21545;
i__21207 = G__21546;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21210){
var map__21211 = p__21210;
var map__21211__$1 = cljs.core.__destructure_map(map__21211);
var msg = map__21211__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21211__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21211__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5649__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21212(s__21213){
return (new cljs.core.LazySeq(null,(function (){
var s__21213__$1 = s__21213;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21213__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__21219 = cljs.core.first(xs__6383__auto__);
var map__21219__$1 = cljs.core.__destructure_map(map__21219);
var src = map__21219__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21219__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21219__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5645__auto__ = ((function (s__21213__$1,map__21219,map__21219__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21211,map__21211__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21212_$_iter__21214(s__21215){
return (new cljs.core.LazySeq(null,((function (s__21213__$1,map__21219,map__21219__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21211,map__21211__$1,msg,info,reload_info){
return (function (){
var s__21215__$1 = s__21215;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__21215__$1);
if(temp__5823__auto____$1){
var s__21215__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21215__$2)){
var c__5647__auto__ = cljs.core.chunk_first(s__21215__$2);
var size__5648__auto__ = cljs.core.count(c__5647__auto__);
var b__21217 = cljs.core.chunk_buffer(size__5648__auto__);
if((function (){var i__21216 = (0);
while(true){
if((i__21216 < size__5648__auto__)){
var warning = cljs.core._nth(c__5647__auto__,i__21216);
cljs.core.chunk_append(b__21217,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21547 = (i__21216 + (1));
i__21216 = G__21547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21217),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21212_$_iter__21214(cljs.core.chunk_rest(s__21215__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21217),null);
}
} else {
var warning = cljs.core.first(s__21215__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21212_$_iter__21214(cljs.core.rest(s__21215__$2)));
}
} else {
return null;
}
break;
}
});})(s__21213__$1,map__21219,map__21219__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21211,map__21211__$1,msg,info,reload_info))
,null,null));
});})(s__21213__$1,map__21219,map__21219__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21211,map__21211__$1,msg,info,reload_info))
;
var fs__5646__auto__ = cljs.core.seq(iterys__5645__auto__(warnings));
if(fs__5646__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5646__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21212(cljs.core.rest(s__21213__$1)));
} else {
var G__21548 = cljs.core.rest(s__21213__$1);
s__21213__$1 = G__21548;
continue;
}
} else {
var G__21549 = cljs.core.rest(s__21213__$1);
s__21213__$1 = G__21549;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5649__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21220_21550 = cljs.core.seq(warnings);
var chunk__21221_21551 = null;
var count__21222_21552 = (0);
var i__21223_21553 = (0);
while(true){
if((i__21223_21553 < count__21222_21552)){
var map__21226_21554 = chunk__21221_21551.cljs$core$IIndexed$_nth$arity$2(null,i__21223_21553);
var map__21226_21555__$1 = cljs.core.__destructure_map(map__21226_21554);
var w_21556 = map__21226_21555__$1;
var msg_21557__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21226_21555__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21226_21555__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21226_21555__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21226_21555__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21560)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21558)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21559)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21557__$1)));


var G__21561 = seq__21220_21550;
var G__21562 = chunk__21221_21551;
var G__21563 = count__21222_21552;
var G__21564 = (i__21223_21553 + (1));
seq__21220_21550 = G__21561;
chunk__21221_21551 = G__21562;
count__21222_21552 = G__21563;
i__21223_21553 = G__21564;
continue;
} else {
var temp__5823__auto___21565 = cljs.core.seq(seq__21220_21550);
if(temp__5823__auto___21565){
var seq__21220_21566__$1 = temp__5823__auto___21565;
if(cljs.core.chunked_seq_QMARK_(seq__21220_21566__$1)){
var c__5694__auto___21567 = cljs.core.chunk_first(seq__21220_21566__$1);
var G__21568 = cljs.core.chunk_rest(seq__21220_21566__$1);
var G__21569 = c__5694__auto___21567;
var G__21570 = cljs.core.count(c__5694__auto___21567);
var G__21571 = (0);
seq__21220_21550 = G__21568;
chunk__21221_21551 = G__21569;
count__21222_21552 = G__21570;
i__21223_21553 = G__21571;
continue;
} else {
var map__21227_21572 = cljs.core.first(seq__21220_21566__$1);
var map__21227_21573__$1 = cljs.core.__destructure_map(map__21227_21572);
var w_21574 = map__21227_21573__$1;
var msg_21575__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21227_21573__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21227_21573__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21227_21573__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21227_21573__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21578)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21576)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21577)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21575__$1)));


var G__21579 = cljs.core.next(seq__21220_21566__$1);
var G__21580 = null;
var G__21581 = (0);
var G__21582 = (0);
seq__21220_21550 = G__21579;
chunk__21221_21551 = G__21580;
count__21222_21552 = G__21581;
i__21223_21553 = G__21582;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21209_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21209_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5160__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5160__auto__){
var and__5160__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5160__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21228 = node_uri;
G__21228.setQuery(null);

G__21228.setPath(new$);

return G__21228;
})()));
} else {
return and__5160__auto____$1;
}
} else {
return and__5160__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21229){
var map__21230 = p__21229;
var map__21230__$1 = cljs.core.__destructure_map(map__21230);
var msg = map__21230__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21230__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21230__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21231 = cljs.core.seq(updates);
var chunk__21233 = null;
var count__21234 = (0);
var i__21235 = (0);
while(true){
if((i__21235 < count__21234)){
var path = chunk__21233.cljs$core$IIndexed$_nth$arity$2(null,i__21235);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21365_21583 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21369_21584 = null;
var count__21370_21585 = (0);
var i__21371_21586 = (0);
while(true){
if((i__21371_21586 < count__21370_21585)){
var node_21587 = chunk__21369_21584.cljs$core$IIndexed$_nth$arity$2(null,i__21371_21586);
if(cljs.core.not(node_21587.shadow$old)){
var path_match_21588 = shadow.cljs.devtools.client.browser.match_paths(node_21587.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21588)){
var new_link_21589 = (function (){var G__21398 = node_21587.cloneNode(true);
G__21398.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21588)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21398;
})();
(node_21587.shadow$old = true);

(new_link_21589.onload = ((function (seq__21365_21583,chunk__21369_21584,count__21370_21585,i__21371_21586,seq__21231,chunk__21233,count__21234,i__21235,new_link_21589,path_match_21588,node_21587,path,map__21230,map__21230__$1,msg,updates,reload_info){
return (function (e){
var seq__21399_21590 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21401_21591 = null;
var count__21402_21592 = (0);
var i__21403_21593 = (0);
while(true){
if((i__21403_21593 < count__21402_21592)){
var map__21407_21594 = chunk__21401_21591.cljs$core$IIndexed$_nth$arity$2(null,i__21403_21593);
var map__21407_21595__$1 = cljs.core.__destructure_map(map__21407_21594);
var task_21596 = map__21407_21595__$1;
var fn_str_21597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21407_21595__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21407_21595__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21599 = goog.getObjectByName(fn_str_21597,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21598)));

(fn_obj_21599.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21599.cljs$core$IFn$_invoke$arity$2(path,new_link_21589) : fn_obj_21599.call(null,path,new_link_21589));


var G__21601 = seq__21399_21590;
var G__21602 = chunk__21401_21591;
var G__21603 = count__21402_21592;
var G__21604 = (i__21403_21593 + (1));
seq__21399_21590 = G__21601;
chunk__21401_21591 = G__21602;
count__21402_21592 = G__21603;
i__21403_21593 = G__21604;
continue;
} else {
var temp__5823__auto___21605 = cljs.core.seq(seq__21399_21590);
if(temp__5823__auto___21605){
var seq__21399_21606__$1 = temp__5823__auto___21605;
if(cljs.core.chunked_seq_QMARK_(seq__21399_21606__$1)){
var c__5694__auto___21607 = cljs.core.chunk_first(seq__21399_21606__$1);
var G__21608 = cljs.core.chunk_rest(seq__21399_21606__$1);
var G__21609 = c__5694__auto___21607;
var G__21610 = cljs.core.count(c__5694__auto___21607);
var G__21611 = (0);
seq__21399_21590 = G__21608;
chunk__21401_21591 = G__21609;
count__21402_21592 = G__21610;
i__21403_21593 = G__21611;
continue;
} else {
var map__21408_21612 = cljs.core.first(seq__21399_21606__$1);
var map__21408_21613__$1 = cljs.core.__destructure_map(map__21408_21612);
var task_21614 = map__21408_21613__$1;
var fn_str_21615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408_21613__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21408_21613__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21617 = goog.getObjectByName(fn_str_21615,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21616)));

(fn_obj_21617.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21617.cljs$core$IFn$_invoke$arity$2(path,new_link_21589) : fn_obj_21617.call(null,path,new_link_21589));


var G__21618 = cljs.core.next(seq__21399_21606__$1);
var G__21619 = null;
var G__21620 = (0);
var G__21621 = (0);
seq__21399_21590 = G__21618;
chunk__21401_21591 = G__21619;
count__21402_21592 = G__21620;
i__21403_21593 = G__21621;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21587);
});})(seq__21365_21583,chunk__21369_21584,count__21370_21585,i__21371_21586,seq__21231,chunk__21233,count__21234,i__21235,new_link_21589,path_match_21588,node_21587,path,map__21230,map__21230__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21588], 0));

goog.dom.insertSiblingAfter(new_link_21589,node_21587);


var G__21622 = seq__21365_21583;
var G__21623 = chunk__21369_21584;
var G__21624 = count__21370_21585;
var G__21625 = (i__21371_21586 + (1));
seq__21365_21583 = G__21622;
chunk__21369_21584 = G__21623;
count__21370_21585 = G__21624;
i__21371_21586 = G__21625;
continue;
} else {
var G__21626 = seq__21365_21583;
var G__21627 = chunk__21369_21584;
var G__21628 = count__21370_21585;
var G__21629 = (i__21371_21586 + (1));
seq__21365_21583 = G__21626;
chunk__21369_21584 = G__21627;
count__21370_21585 = G__21628;
i__21371_21586 = G__21629;
continue;
}
} else {
var G__21630 = seq__21365_21583;
var G__21631 = chunk__21369_21584;
var G__21632 = count__21370_21585;
var G__21633 = (i__21371_21586 + (1));
seq__21365_21583 = G__21630;
chunk__21369_21584 = G__21631;
count__21370_21585 = G__21632;
i__21371_21586 = G__21633;
continue;
}
} else {
var temp__5823__auto___21634 = cljs.core.seq(seq__21365_21583);
if(temp__5823__auto___21634){
var seq__21365_21635__$1 = temp__5823__auto___21634;
if(cljs.core.chunked_seq_QMARK_(seq__21365_21635__$1)){
var c__5694__auto___21636 = cljs.core.chunk_first(seq__21365_21635__$1);
var G__21637 = cljs.core.chunk_rest(seq__21365_21635__$1);
var G__21638 = c__5694__auto___21636;
var G__21639 = cljs.core.count(c__5694__auto___21636);
var G__21640 = (0);
seq__21365_21583 = G__21637;
chunk__21369_21584 = G__21638;
count__21370_21585 = G__21639;
i__21371_21586 = G__21640;
continue;
} else {
var node_21641 = cljs.core.first(seq__21365_21635__$1);
if(cljs.core.not(node_21641.shadow$old)){
var path_match_21642 = shadow.cljs.devtools.client.browser.match_paths(node_21641.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21642)){
var new_link_21643 = (function (){var G__21409 = node_21641.cloneNode(true);
G__21409.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21642)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21409;
})();
(node_21641.shadow$old = true);

(new_link_21643.onload = ((function (seq__21365_21583,chunk__21369_21584,count__21370_21585,i__21371_21586,seq__21231,chunk__21233,count__21234,i__21235,new_link_21643,path_match_21642,node_21641,seq__21365_21635__$1,temp__5823__auto___21634,path,map__21230,map__21230__$1,msg,updates,reload_info){
return (function (e){
var seq__21410_21645 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21412_21646 = null;
var count__21413_21647 = (0);
var i__21414_21648 = (0);
while(true){
if((i__21414_21648 < count__21413_21647)){
var map__21418_21649 = chunk__21412_21646.cljs$core$IIndexed$_nth$arity$2(null,i__21414_21648);
var map__21418_21650__$1 = cljs.core.__destructure_map(map__21418_21649);
var task_21651 = map__21418_21650__$1;
var fn_str_21652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21418_21650__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21418_21650__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21654 = goog.getObjectByName(fn_str_21652,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21653)));

(fn_obj_21654.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21654.cljs$core$IFn$_invoke$arity$2(path,new_link_21643) : fn_obj_21654.call(null,path,new_link_21643));


var G__21656 = seq__21410_21645;
var G__21657 = chunk__21412_21646;
var G__21658 = count__21413_21647;
var G__21659 = (i__21414_21648 + (1));
seq__21410_21645 = G__21656;
chunk__21412_21646 = G__21657;
count__21413_21647 = G__21658;
i__21414_21648 = G__21659;
continue;
} else {
var temp__5823__auto___21660__$1 = cljs.core.seq(seq__21410_21645);
if(temp__5823__auto___21660__$1){
var seq__21410_21661__$1 = temp__5823__auto___21660__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21410_21661__$1)){
var c__5694__auto___21662 = cljs.core.chunk_first(seq__21410_21661__$1);
var G__21663 = cljs.core.chunk_rest(seq__21410_21661__$1);
var G__21664 = c__5694__auto___21662;
var G__21665 = cljs.core.count(c__5694__auto___21662);
var G__21666 = (0);
seq__21410_21645 = G__21663;
chunk__21412_21646 = G__21664;
count__21413_21647 = G__21665;
i__21414_21648 = G__21666;
continue;
} else {
var map__21419_21667 = cljs.core.first(seq__21410_21661__$1);
var map__21419_21668__$1 = cljs.core.__destructure_map(map__21419_21667);
var task_21669 = map__21419_21668__$1;
var fn_str_21670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21419_21668__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21671 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21419_21668__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21672 = goog.getObjectByName(fn_str_21670,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21671)));

(fn_obj_21672.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21672.cljs$core$IFn$_invoke$arity$2(path,new_link_21643) : fn_obj_21672.call(null,path,new_link_21643));


var G__21673 = cljs.core.next(seq__21410_21661__$1);
var G__21674 = null;
var G__21675 = (0);
var G__21676 = (0);
seq__21410_21645 = G__21673;
chunk__21412_21646 = G__21674;
count__21413_21647 = G__21675;
i__21414_21648 = G__21676;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21641);
});})(seq__21365_21583,chunk__21369_21584,count__21370_21585,i__21371_21586,seq__21231,chunk__21233,count__21234,i__21235,new_link_21643,path_match_21642,node_21641,seq__21365_21635__$1,temp__5823__auto___21634,path,map__21230,map__21230__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21642], 0));

goog.dom.insertSiblingAfter(new_link_21643,node_21641);


var G__21677 = cljs.core.next(seq__21365_21635__$1);
var G__21678 = null;
var G__21679 = (0);
var G__21680 = (0);
seq__21365_21583 = G__21677;
chunk__21369_21584 = G__21678;
count__21370_21585 = G__21679;
i__21371_21586 = G__21680;
continue;
} else {
var G__21681 = cljs.core.next(seq__21365_21635__$1);
var G__21682 = null;
var G__21683 = (0);
var G__21684 = (0);
seq__21365_21583 = G__21681;
chunk__21369_21584 = G__21682;
count__21370_21585 = G__21683;
i__21371_21586 = G__21684;
continue;
}
} else {
var G__21685 = cljs.core.next(seq__21365_21635__$1);
var G__21686 = null;
var G__21687 = (0);
var G__21688 = (0);
seq__21365_21583 = G__21685;
chunk__21369_21584 = G__21686;
count__21370_21585 = G__21687;
i__21371_21586 = G__21688;
continue;
}
}
} else {
}
}
break;
}


var G__21689 = seq__21231;
var G__21690 = chunk__21233;
var G__21691 = count__21234;
var G__21692 = (i__21235 + (1));
seq__21231 = G__21689;
chunk__21233 = G__21690;
count__21234 = G__21691;
i__21235 = G__21692;
continue;
} else {
var G__21693 = seq__21231;
var G__21694 = chunk__21233;
var G__21695 = count__21234;
var G__21696 = (i__21235 + (1));
seq__21231 = G__21693;
chunk__21233 = G__21694;
count__21234 = G__21695;
i__21235 = G__21696;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21231);
if(temp__5823__auto__){
var seq__21231__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21231__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__21231__$1);
var G__21697 = cljs.core.chunk_rest(seq__21231__$1);
var G__21698 = c__5694__auto__;
var G__21699 = cljs.core.count(c__5694__auto__);
var G__21700 = (0);
seq__21231 = G__21697;
chunk__21233 = G__21698;
count__21234 = G__21699;
i__21235 = G__21700;
continue;
} else {
var path = cljs.core.first(seq__21231__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21420_21701 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21424_21702 = null;
var count__21425_21703 = (0);
var i__21426_21704 = (0);
while(true){
if((i__21426_21704 < count__21425_21703)){
var node_21705 = chunk__21424_21702.cljs$core$IIndexed$_nth$arity$2(null,i__21426_21704);
if(cljs.core.not(node_21705.shadow$old)){
var path_match_21706 = shadow.cljs.devtools.client.browser.match_paths(node_21705.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21706)){
var new_link_21707 = (function (){var G__21462 = node_21705.cloneNode(true);
G__21462.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21706)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21462;
})();
(node_21705.shadow$old = true);

(new_link_21707.onload = ((function (seq__21420_21701,chunk__21424_21702,count__21425_21703,i__21426_21704,seq__21231,chunk__21233,count__21234,i__21235,new_link_21707,path_match_21706,node_21705,path,seq__21231__$1,temp__5823__auto__,map__21230,map__21230__$1,msg,updates,reload_info){
return (function (e){
var seq__21463_21708 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21465_21709 = null;
var count__21466_21710 = (0);
var i__21467_21711 = (0);
while(true){
if((i__21467_21711 < count__21466_21710)){
var map__21475_21712 = chunk__21465_21709.cljs$core$IIndexed$_nth$arity$2(null,i__21467_21711);
var map__21475_21713__$1 = cljs.core.__destructure_map(map__21475_21712);
var task_21714 = map__21475_21713__$1;
var fn_str_21715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21475_21713__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21475_21713__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21718 = goog.getObjectByName(fn_str_21715,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21716)));

(fn_obj_21718.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21718.cljs$core$IFn$_invoke$arity$2(path,new_link_21707) : fn_obj_21718.call(null,path,new_link_21707));


var G__21719 = seq__21463_21708;
var G__21720 = chunk__21465_21709;
var G__21721 = count__21466_21710;
var G__21722 = (i__21467_21711 + (1));
seq__21463_21708 = G__21719;
chunk__21465_21709 = G__21720;
count__21466_21710 = G__21721;
i__21467_21711 = G__21722;
continue;
} else {
var temp__5823__auto___21723__$1 = cljs.core.seq(seq__21463_21708);
if(temp__5823__auto___21723__$1){
var seq__21463_21724__$1 = temp__5823__auto___21723__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21463_21724__$1)){
var c__5694__auto___21725 = cljs.core.chunk_first(seq__21463_21724__$1);
var G__21726 = cljs.core.chunk_rest(seq__21463_21724__$1);
var G__21727 = c__5694__auto___21725;
var G__21728 = cljs.core.count(c__5694__auto___21725);
var G__21729 = (0);
seq__21463_21708 = G__21726;
chunk__21465_21709 = G__21727;
count__21466_21710 = G__21728;
i__21467_21711 = G__21729;
continue;
} else {
var map__21476_21730 = cljs.core.first(seq__21463_21724__$1);
var map__21476_21731__$1 = cljs.core.__destructure_map(map__21476_21730);
var task_21732 = map__21476_21731__$1;
var fn_str_21733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21476_21731__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21476_21731__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21735 = goog.getObjectByName(fn_str_21733,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21734)));

(fn_obj_21735.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21735.cljs$core$IFn$_invoke$arity$2(path,new_link_21707) : fn_obj_21735.call(null,path,new_link_21707));


var G__21736 = cljs.core.next(seq__21463_21724__$1);
var G__21737 = null;
var G__21738 = (0);
var G__21739 = (0);
seq__21463_21708 = G__21736;
chunk__21465_21709 = G__21737;
count__21466_21710 = G__21738;
i__21467_21711 = G__21739;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21705);
});})(seq__21420_21701,chunk__21424_21702,count__21425_21703,i__21426_21704,seq__21231,chunk__21233,count__21234,i__21235,new_link_21707,path_match_21706,node_21705,path,seq__21231__$1,temp__5823__auto__,map__21230,map__21230__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21706], 0));

goog.dom.insertSiblingAfter(new_link_21707,node_21705);


var G__21740 = seq__21420_21701;
var G__21741 = chunk__21424_21702;
var G__21742 = count__21425_21703;
var G__21743 = (i__21426_21704 + (1));
seq__21420_21701 = G__21740;
chunk__21424_21702 = G__21741;
count__21425_21703 = G__21742;
i__21426_21704 = G__21743;
continue;
} else {
var G__21744 = seq__21420_21701;
var G__21745 = chunk__21424_21702;
var G__21746 = count__21425_21703;
var G__21747 = (i__21426_21704 + (1));
seq__21420_21701 = G__21744;
chunk__21424_21702 = G__21745;
count__21425_21703 = G__21746;
i__21426_21704 = G__21747;
continue;
}
} else {
var G__21748 = seq__21420_21701;
var G__21749 = chunk__21424_21702;
var G__21750 = count__21425_21703;
var G__21751 = (i__21426_21704 + (1));
seq__21420_21701 = G__21748;
chunk__21424_21702 = G__21749;
count__21425_21703 = G__21750;
i__21426_21704 = G__21751;
continue;
}
} else {
var temp__5823__auto___21752__$1 = cljs.core.seq(seq__21420_21701);
if(temp__5823__auto___21752__$1){
var seq__21420_21753__$1 = temp__5823__auto___21752__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21420_21753__$1)){
var c__5694__auto___21754 = cljs.core.chunk_first(seq__21420_21753__$1);
var G__21755 = cljs.core.chunk_rest(seq__21420_21753__$1);
var G__21756 = c__5694__auto___21754;
var G__21757 = cljs.core.count(c__5694__auto___21754);
var G__21758 = (0);
seq__21420_21701 = G__21755;
chunk__21424_21702 = G__21756;
count__21425_21703 = G__21757;
i__21426_21704 = G__21758;
continue;
} else {
var node_21759 = cljs.core.first(seq__21420_21753__$1);
if(cljs.core.not(node_21759.shadow$old)){
var path_match_21760 = shadow.cljs.devtools.client.browser.match_paths(node_21759.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21760)){
var new_link_21761 = (function (){var G__21477 = node_21759.cloneNode(true);
G__21477.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21760)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21477;
})();
(node_21759.shadow$old = true);

(new_link_21761.onload = ((function (seq__21420_21701,chunk__21424_21702,count__21425_21703,i__21426_21704,seq__21231,chunk__21233,count__21234,i__21235,new_link_21761,path_match_21760,node_21759,seq__21420_21753__$1,temp__5823__auto___21752__$1,path,seq__21231__$1,temp__5823__auto__,map__21230,map__21230__$1,msg,updates,reload_info){
return (function (e){
var seq__21478_21762 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21480_21763 = null;
var count__21481_21764 = (0);
var i__21482_21765 = (0);
while(true){
if((i__21482_21765 < count__21481_21764)){
var map__21486_21766 = chunk__21480_21763.cljs$core$IIndexed$_nth$arity$2(null,i__21482_21765);
var map__21486_21767__$1 = cljs.core.__destructure_map(map__21486_21766);
var task_21768 = map__21486_21767__$1;
var fn_str_21769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21486_21767__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21486_21767__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21771 = goog.getObjectByName(fn_str_21769,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21770)));

(fn_obj_21771.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21771.cljs$core$IFn$_invoke$arity$2(path,new_link_21761) : fn_obj_21771.call(null,path,new_link_21761));


var G__21772 = seq__21478_21762;
var G__21773 = chunk__21480_21763;
var G__21774 = count__21481_21764;
var G__21775 = (i__21482_21765 + (1));
seq__21478_21762 = G__21772;
chunk__21480_21763 = G__21773;
count__21481_21764 = G__21774;
i__21482_21765 = G__21775;
continue;
} else {
var temp__5823__auto___21776__$2 = cljs.core.seq(seq__21478_21762);
if(temp__5823__auto___21776__$2){
var seq__21478_21777__$1 = temp__5823__auto___21776__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21478_21777__$1)){
var c__5694__auto___21778 = cljs.core.chunk_first(seq__21478_21777__$1);
var G__21779 = cljs.core.chunk_rest(seq__21478_21777__$1);
var G__21780 = c__5694__auto___21778;
var G__21781 = cljs.core.count(c__5694__auto___21778);
var G__21782 = (0);
seq__21478_21762 = G__21779;
chunk__21480_21763 = G__21780;
count__21481_21764 = G__21781;
i__21482_21765 = G__21782;
continue;
} else {
var map__21487_21783 = cljs.core.first(seq__21478_21777__$1);
var map__21487_21784__$1 = cljs.core.__destructure_map(map__21487_21783);
var task_21785 = map__21487_21784__$1;
var fn_str_21786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21487_21784__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21487_21784__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21788 = goog.getObjectByName(fn_str_21786,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21787)));

(fn_obj_21788.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21788.cljs$core$IFn$_invoke$arity$2(path,new_link_21761) : fn_obj_21788.call(null,path,new_link_21761));


var G__21789 = cljs.core.next(seq__21478_21777__$1);
var G__21790 = null;
var G__21791 = (0);
var G__21792 = (0);
seq__21478_21762 = G__21789;
chunk__21480_21763 = G__21790;
count__21481_21764 = G__21791;
i__21482_21765 = G__21792;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21759);
});})(seq__21420_21701,chunk__21424_21702,count__21425_21703,i__21426_21704,seq__21231,chunk__21233,count__21234,i__21235,new_link_21761,path_match_21760,node_21759,seq__21420_21753__$1,temp__5823__auto___21752__$1,path,seq__21231__$1,temp__5823__auto__,map__21230,map__21230__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21760], 0));

goog.dom.insertSiblingAfter(new_link_21761,node_21759);


var G__21793 = cljs.core.next(seq__21420_21753__$1);
var G__21794 = null;
var G__21795 = (0);
var G__21796 = (0);
seq__21420_21701 = G__21793;
chunk__21424_21702 = G__21794;
count__21425_21703 = G__21795;
i__21426_21704 = G__21796;
continue;
} else {
var G__21797 = cljs.core.next(seq__21420_21753__$1);
var G__21798 = null;
var G__21799 = (0);
var G__21800 = (0);
seq__21420_21701 = G__21797;
chunk__21424_21702 = G__21798;
count__21425_21703 = G__21799;
i__21426_21704 = G__21800;
continue;
}
} else {
var G__21801 = cljs.core.next(seq__21420_21753__$1);
var G__21802 = null;
var G__21803 = (0);
var G__21804 = (0);
seq__21420_21701 = G__21801;
chunk__21424_21702 = G__21802;
count__21425_21703 = G__21803;
i__21426_21704 = G__21804;
continue;
}
}
} else {
}
}
break;
}


var G__21805 = cljs.core.next(seq__21231__$1);
var G__21806 = null;
var G__21807 = (0);
var G__21808 = (0);
seq__21231 = G__21805;
chunk__21233 = G__21806;
count__21234 = G__21807;
i__21235 = G__21808;
continue;
} else {
var G__21809 = cljs.core.next(seq__21231__$1);
var G__21810 = null;
var G__21811 = (0);
var G__21812 = (0);
seq__21231 = G__21809;
chunk__21233 = G__21810;
count__21234 = G__21811;
i__21235 = G__21812;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),navigator.userAgent,new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21490 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21490) : success.call(null,G__21490));
}catch (e21489){var e = e21489;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21491,success,fail){
var map__21492 = p__21491;
var map__21492__$1 = cljs.core.__destructure_map(map__21492);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21492__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21494 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21494) : success.call(null,G__21494));
}catch (e21493){var e = e21493;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21495,done,error){
var map__21496 = p__21495;
var map__21496__$1 = cljs.core.__destructure_map(map__21496);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21496__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21498,done,error){
var map__21499 = p__21498;
var map__21499__$1 = cljs.core.__destructure_map(map__21499);
var msg = map__21499__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21499__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21500){
var map__21501 = p__21500;
var map__21501__$1 = cljs.core.__destructure_map(map__21501);
var src = map__21501__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21501__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5160__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5160__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5160__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21502 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21502) : done.call(null,G__21502));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21503){
var map__21504 = p__21503;
var map__21504__$1 = cljs.core.__destructure_map(map__21504);
var msg__$1 = map__21504__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21504__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21505){var ex = e21505;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21506){
var map__21507 = p__21506;
var map__21507__$1 = cljs.core.__destructure_map(map__21507);
var env = map__21507__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21507__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21512){
var map__21513 = p__21512;
var map__21513__$1 = cljs.core.__destructure_map(map__21513);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21513__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21513__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21514){
var map__21515 = p__21514;
var map__21515__$1 = cljs.core.__destructure_map(map__21515);
var svc = map__21515__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21515__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
