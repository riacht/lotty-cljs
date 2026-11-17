goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18107){
var map__18108 = p__18107;
var map__18108__$1 = cljs.core.__destructure_map(map__18108);
var runtime = map__18108__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5162__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18271 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18271)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__18109 = runtime;
var G__18110 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18271);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__18109,G__18110) : shadow.remote.runtime.shared.process.call(null,G__18109,G__18110));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18111,res){
var map__18112 = p__18111;
var map__18112__$1 = cljs.core.__destructure_map(map__18112);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18112__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18112__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18113 = res;
var G__18113__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18113,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18113);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18113__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18113__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18115 = arguments.length;
switch (G__18115) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18117,msg,handlers,timeout_after_ms){
var map__18118 = p__18117;
var map__18118__$1 = cljs.core.__destructure_map(map__18118);
var runtime = map__18118__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18118__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___18273 = arguments.length;
var i__5898__auto___18274 = (0);
while(true){
if((i__5898__auto___18274 < len__5897__auto___18273)){
args__5903__auto__.push((arguments[i__5898__auto___18274]));

var G__18275 = (i__5898__auto___18274 + (1));
i__5898__auto___18274 = G__18275;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((2) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5904__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18148,ev,args){
var map__18149 = p__18148;
var map__18149__$1 = cljs.core.__destructure_map(map__18149);
var runtime = map__18149__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18149__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18150 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18153 = null;
var count__18154 = (0);
var i__18155 = (0);
while(true){
if((i__18155 < count__18154)){
var ext = chunk__18153.cljs$core$IIndexed$_nth$arity$2(null,i__18155);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18276 = seq__18150;
var G__18277 = chunk__18153;
var G__18278 = count__18154;
var G__18279 = (i__18155 + (1));
seq__18150 = G__18276;
chunk__18153 = G__18277;
count__18154 = G__18278;
i__18155 = G__18279;
continue;
} else {
var G__18280 = seq__18150;
var G__18281 = chunk__18153;
var G__18282 = count__18154;
var G__18283 = (i__18155 + (1));
seq__18150 = G__18280;
chunk__18153 = G__18281;
count__18154 = G__18282;
i__18155 = G__18283;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18150);
if(temp__5823__auto__){
var seq__18150__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18150__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__18150__$1);
var G__18284 = cljs.core.chunk_rest(seq__18150__$1);
var G__18285 = c__5694__auto__;
var G__18286 = cljs.core.count(c__5694__auto__);
var G__18287 = (0);
seq__18150 = G__18284;
chunk__18153 = G__18285;
count__18154 = G__18286;
i__18155 = G__18287;
continue;
} else {
var ext = cljs.core.first(seq__18150__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18288 = cljs.core.next(seq__18150__$1);
var G__18289 = null;
var G__18290 = (0);
var G__18291 = (0);
seq__18150 = G__18288;
chunk__18153 = G__18289;
count__18154 = G__18290;
i__18155 = G__18291;
continue;
} else {
var G__18292 = cljs.core.next(seq__18150__$1);
var G__18293 = null;
var G__18294 = (0);
var G__18295 = (0);
seq__18150 = G__18292;
chunk__18153 = G__18293;
count__18154 = G__18294;
i__18155 = G__18295;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18119){
var G__18120 = cljs.core.first(seq18119);
var seq18119__$1 = cljs.core.next(seq18119);
var G__18121 = cljs.core.first(seq18119__$1);
var seq18119__$2 = cljs.core.next(seq18119__$1);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18120,G__18121,seq18119__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18234,p__18235){
var map__18236 = p__18234;
var map__18236__$1 = cljs.core.__destructure_map(map__18236);
var runtime = map__18236__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18236__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18237 = p__18235;
var map__18237__$1 = cljs.core.__destructure_map(map__18237);
var msg = map__18237__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18237__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18238 = cljs.core.deref(state_ref);
var map__18238__$1 = cljs.core.__destructure_map(map__18238);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18238__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18238__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18239,msg){
var map__18240 = p__18239;
var map__18240__$1 = cljs.core.__destructure_map(map__18240);
var runtime = map__18240__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18240__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18242,key,p__18243){
var map__18244 = p__18242;
var map__18244__$1 = cljs.core.__destructure_map(map__18244);
var state = map__18244__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18244__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18245 = p__18243;
var map__18245__$1 = cljs.core.__destructure_map(map__18245);
var spec = map__18245__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18245__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18245__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18246,key,spec){
var map__18247 = p__18246;
var map__18247__$1 = cljs.core.__destructure_map(map__18247);
var runtime = map__18247__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18247__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___18298 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___18298 == null)){
} else {
var on_welcome_18299 = temp__5827__auto___18298;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18299.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18299.cljs$core$IFn$_invoke$arity$0() : on_welcome_18299.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18248_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18248_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18249_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18249_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18250_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18250_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18251_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18251_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18252_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18252_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18253,key){
var map__18254 = p__18253;
var map__18254__$1 = cljs.core.__destructure_map(map__18254);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18254__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18255,msg){
var map__18256 = p__18255;
var map__18256__$1 = cljs.core.__destructure_map(map__18256);
var runtime = map__18256__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18256__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18257,p__18258){
var map__18259 = p__18257;
var map__18259__$1 = cljs.core.__destructure_map(map__18259);
var runtime = map__18259__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18259__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18260 = p__18258;
var map__18260__$1 = cljs.core.__destructure_map(map__18260);
var msg = map__18260__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18260__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18260__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18261 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18263 = null;
var count__18264 = (0);
var i__18265 = (0);
while(true){
if((i__18265 < count__18264)){
var map__18269 = chunk__18263.cljs$core$IIndexed$_nth$arity$2(null,i__18265);
var map__18269__$1 = cljs.core.__destructure_map(map__18269);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18269__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18301 = seq__18261;
var G__18302 = chunk__18263;
var G__18303 = count__18264;
var G__18304 = (i__18265 + (1));
seq__18261 = G__18301;
chunk__18263 = G__18302;
count__18264 = G__18303;
i__18265 = G__18304;
continue;
} else {
var G__18305 = seq__18261;
var G__18306 = chunk__18263;
var G__18307 = count__18264;
var G__18308 = (i__18265 + (1));
seq__18261 = G__18305;
chunk__18263 = G__18306;
count__18264 = G__18307;
i__18265 = G__18308;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18261);
if(temp__5823__auto__){
var seq__18261__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18261__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__18261__$1);
var G__18309 = cljs.core.chunk_rest(seq__18261__$1);
var G__18310 = c__5694__auto__;
var G__18311 = cljs.core.count(c__5694__auto__);
var G__18312 = (0);
seq__18261 = G__18309;
chunk__18263 = G__18310;
count__18264 = G__18311;
i__18265 = G__18312;
continue;
} else {
var map__18270 = cljs.core.first(seq__18261__$1);
var map__18270__$1 = cljs.core.__destructure_map(map__18270);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18270__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18313 = cljs.core.next(seq__18261__$1);
var G__18314 = null;
var G__18315 = (0);
var G__18316 = (0);
seq__18261 = G__18313;
chunk__18263 = G__18314;
count__18264 = G__18315;
i__18265 = G__18316;
continue;
} else {
var G__18317 = cljs.core.next(seq__18261__$1);
var G__18318 = null;
var G__18319 = (0);
var G__18320 = (0);
seq__18261 = G__18317;
chunk__18263 = G__18318;
count__18264 = G__18319;
i__18265 = G__18320;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
