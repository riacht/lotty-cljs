goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15503 = (function (f,blockable,meta15504){
this.f = f;
this.blockable = blockable;
this.meta15504 = meta15504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15505,meta15504__$1){
var self__ = this;
var _15505__$1 = this;
return (new cljs.core.async.t_cljs$core$async15503(self__.f,self__.blockable,meta15504__$1));
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15505){
var self__ = this;
var _15505__$1 = this;
return self__.meta15504;
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15504","meta15504",-1029264029,null)], null);
}));

(cljs.core.async.t_cljs$core$async15503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15503");

(cljs.core.async.t_cljs$core$async15503.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15503.
 */
cljs.core.async.__GT_t_cljs$core$async15503 = (function cljs$core$async$__GT_t_cljs$core$async15503(f,blockable,meta15504){
return (new cljs.core.async.t_cljs$core$async15503(f,blockable,meta15504));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15502 = arguments.length;
switch (G__15502) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15503(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15508 = arguments.length;
switch (G__15508) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15510 = arguments.length;
switch (G__15510) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15512 = arguments.length;
switch (G__15512) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16927 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16927) : fn1.call(null,val_16927));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16927) : fn1.call(null,val_16927));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15514 = arguments.length;
switch (G__15514) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5762__auto___16929 = n;
var x_16930 = (0);
while(true){
if((x_16930 < n__5762__auto___16929)){
(a[x_16930] = x_16930);

var G__16931 = (x_16930 + (1));
x_16930 = G__16931;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15515 = (function (flag,meta15516){
this.flag = flag;
this.meta15516 = meta15516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15517,meta15516__$1){
var self__ = this;
var _15517__$1 = this;
return (new cljs.core.async.t_cljs$core$async15515(self__.flag,meta15516__$1));
}));

(cljs.core.async.t_cljs$core$async15515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15517){
var self__ = this;
var _15517__$1 = this;
return self__.meta15516;
}));

(cljs.core.async.t_cljs$core$async15515.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15516","meta15516",-1054390676,null)], null);
}));

(cljs.core.async.t_cljs$core$async15515.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15515");

(cljs.core.async.t_cljs$core$async15515.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15515");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15515.
 */
cljs.core.async.__GT_t_cljs$core$async15515 = (function cljs$core$async$__GT_t_cljs$core$async15515(flag,meta15516){
return (new cljs.core.async.t_cljs$core$async15515(flag,meta15516));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15515(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15518 = (function (flag,cb,meta15519){
this.flag = flag;
this.cb = cb;
this.meta15519 = meta15519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15520,meta15519__$1){
var self__ = this;
var _15520__$1 = this;
return (new cljs.core.async.t_cljs$core$async15518(self__.flag,self__.cb,meta15519__$1));
}));

(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15520){
var self__ = this;
var _15520__$1 = this;
return self__.meta15519;
}));

(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15519","meta15519",-1013782379,null)], null);
}));

(cljs.core.async.t_cljs$core$async15518.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15518");

(cljs.core.async.t_cljs$core$async15518.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15518");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15518.
 */
cljs.core.async.__GT_t_cljs$core$async15518 = (function cljs$core$async$__GT_t_cljs$core$async15518(flag,cb,meta15519){
return (new cljs.core.async.t_cljs$core$async15518(flag,cb,meta15519));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15518(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_16932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_16932)){
if((!(((port_16932.cljs$core$IFn$_invoke$arity$1 ? port_16932.cljs$core$IFn$_invoke$arity$1((1)) : port_16932.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__16933 = (i + (1));
i = G__16933;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15521_SHARP_){
var G__15523 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15521_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15523) : fret.call(null,G__15523));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15522_SHARP_){
var G__15524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15522_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15524) : fret.call(null,G__15524));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5162__auto__ = wport;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16934 = (i + (1));
i = G__16934;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5162__auto__ = ret;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5160__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5160__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5160__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___16935 = arguments.length;
var i__5898__auto___16936 = (0);
while(true){
if((i__5898__auto___16936 < len__5897__auto___16935)){
args__5903__auto__.push((arguments[i__5898__auto___16936]));

var G__16937 = (i__5898__auto___16936 + (1));
i__5898__auto___16936 = G__16937;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15527){
var map__15528 = p__15527;
var map__15528__$1 = cljs.core.__destructure_map(map__15528);
var opts = map__15528__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15525){
var G__15526 = cljs.core.first(seq15525);
var seq15525__$1 = cljs.core.next(seq15525);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15526,seq15525__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15530 = arguments.length;
switch (G__15530) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15444__auto___16939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_15554){
var state_val_15555 = (state_15554[(1)]);
if((state_val_15555 === (7))){
var inst_15550 = (state_15554[(2)]);
var state_15554__$1 = state_15554;
var statearr_15556_16940 = state_15554__$1;
(statearr_15556_16940[(2)] = inst_15550);

(statearr_15556_16940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15555 === (1))){
var state_15554__$1 = state_15554;
var statearr_15557_16941 = state_15554__$1;
(statearr_15557_16941[(2)] = null);

(statearr_15557_16941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15555 === (4))){
var inst_15533 = (state_15554[(7)]);
var inst_15533__$1 = (state_15554[(2)]);
var inst_15534 = (inst_15533__$1 == null);
var state_15554__$1 = (function (){var statearr_15558 = state_15554;
(statearr_15558[(7)] = inst_15533__$1);

return statearr_15558;
})();
if(cljs.core.truth_(inst_15534)){
var statearr_15559_16942 = state_15554__$1;
(statearr_15559_16942[(1)] = (5));

} else {
var statearr_15560_16943 = state_15554__$1;
(statearr_15560_16943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15555 === (13))){
var state_15554__$1 = state_15554;
var statearr_15561_16944 = state_15554__$1;
(statearr_15561_16944[(2)] = null);

(statearr_15561_16944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15555 === (6))){
var inst_15533 = (state_15554[(7)]);
var state_15554__$1 = state_15554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15554__$1,(11),to,inst_15533);
} else {
if((state_val_15555 === (3))){
var inst_15552 = (state_15554[(2)]);
var state_15554__$1 = state_15554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15554__$1,inst_15552);
} else {
if((state_val_15555 === (12))){
var state_15554__$1 = state_15554;
var statearr_15562_16945 = state_15554__$1;
(statearr_15562_16945[(2)] = null);

(statearr_15562_16945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15555 === (2))){
var state_15554__$1 = state_15554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15554__$1,(4),from);
} else {
if((state_val_15555 === (11))){
var inst_15543 = (state_15554[(2)]);
var state_15554__$1 = state_15554;
if(cljs.core.truth_(inst_15543)){
var statearr_15563_16946 = state_15554__$1;
(statearr_15563_16946[(1)] = (12));

} else {
var statearr_15564_16947 = state_15554__$1;
(statearr_15564_16947[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15555 === (9))){
var state_15554__$1 = state_15554;
var statearr_15565_16948 = state_15554__$1;
(statearr_15565_16948[(2)] = null);

(statearr_15565_16948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15555 === (5))){
var state_15554__$1 = state_15554;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15566_16949 = state_15554__$1;
(statearr_15566_16949[(1)] = (8));

} else {
var statearr_15567_16950 = state_15554__$1;
(statearr_15567_16950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15555 === (14))){
var inst_15548 = (state_15554[(2)]);
var state_15554__$1 = state_15554;
var statearr_15568_16951 = state_15554__$1;
(statearr_15568_16951[(2)] = inst_15548);

(statearr_15568_16951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15555 === (10))){
var inst_15540 = (state_15554[(2)]);
var state_15554__$1 = state_15554;
var statearr_15569_16952 = state_15554__$1;
(statearr_15569_16952[(2)] = inst_15540);

(statearr_15569_16952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15555 === (8))){
var inst_15537 = cljs.core.async.close_BANG_(to);
var state_15554__$1 = state_15554;
var statearr_15570_16953 = state_15554__$1;
(statearr_15570_16953[(2)] = inst_15537);

(statearr_15570_16953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15409__auto__ = null;
var cljs$core$async$state_machine__15409__auto____0 = (function (){
var statearr_15571 = [null,null,null,null,null,null,null,null];
(statearr_15571[(0)] = cljs$core$async$state_machine__15409__auto__);

(statearr_15571[(1)] = (1));

return statearr_15571;
});
var cljs$core$async$state_machine__15409__auto____1 = (function (state_15554){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_15554);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e15572){var ex__15412__auto__ = e15572;
var statearr_15573_16954 = state_15554;
(statearr_15573_16954[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_15554[(4)]))){
var statearr_15574_16955 = state_15554;
(statearr_15574_16955[(1)] = cljs.core.first((state_15554[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16956 = state_15554;
state_15554 = G__16956;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$state_machine__15409__auto__ = function(state_15554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15409__auto____1.call(this,state_15554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15409__auto____0;
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15409__auto____1;
return cljs$core$async$state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_15575 = f__15445__auto__();
(statearr_15575[(6)] = c__15444__auto___16939);

return statearr_15575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15576){
var vec__15577 = p__15576;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15577,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15577,(1),null);
var job = vec__15577;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15444__auto___16957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_15584){
var state_val_15585 = (state_15584[(1)]);
if((state_val_15585 === (1))){
var state_15584__$1 = state_15584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15584__$1,(2),res,v);
} else {
if((state_val_15585 === (2))){
var inst_15581 = (state_15584[(2)]);
var inst_15582 = cljs.core.async.close_BANG_(res);
var state_15584__$1 = (function (){var statearr_15586 = state_15584;
(statearr_15586[(7)] = inst_15581);

return statearr_15586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15584__$1,inst_15582);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0 = (function (){
var statearr_15587 = [null,null,null,null,null,null,null,null];
(statearr_15587[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__);

(statearr_15587[(1)] = (1));

return statearr_15587;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1 = (function (state_15584){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_15584);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e15588){var ex__15412__auto__ = e15588;
var statearr_15589_16958 = state_15584;
(statearr_15589_16958[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_15584[(4)]))){
var statearr_15590_16959 = state_15584;
(statearr_15590_16959[(1)] = cljs.core.first((state_15584[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16960 = state_15584;
state_15584 = G__16960;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__ = function(state_15584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1.call(this,state_15584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_15591 = f__15445__auto__();
(statearr_15591[(6)] = c__15444__auto___16957);

return statearr_15591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15592){
var vec__15593 = p__15592;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15593,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15593,(1),null);
var job = vec__15593;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5762__auto___16961 = n;
var __16962 = (0);
while(true){
if((__16962 < n__5762__auto___16961)){
var G__15596_16963 = type;
var G__15596_16964__$1 = (((G__15596_16963 instanceof cljs.core.Keyword))?G__15596_16963.fqn:null);
switch (G__15596_16964__$1) {
case "compute":
var c__15444__auto___16966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16962,c__15444__auto___16966,G__15596_16963,G__15596_16964__$1,n__5762__auto___16961,jobs,results,process__$1,async){
return (function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = ((function (__16962,c__15444__auto___16966,G__15596_16963,G__15596_16964__$1,n__5762__auto___16961,jobs,results,process__$1,async){
return (function (state_15609){
var state_val_15610 = (state_15609[(1)]);
if((state_val_15610 === (1))){
var state_15609__$1 = state_15609;
var statearr_15611_16967 = state_15609__$1;
(statearr_15611_16967[(2)] = null);

(statearr_15611_16967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (2))){
var state_15609__$1 = state_15609;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15609__$1,(4),jobs);
} else {
if((state_val_15610 === (3))){
var inst_15607 = (state_15609[(2)]);
var state_15609__$1 = state_15609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15609__$1,inst_15607);
} else {
if((state_val_15610 === (4))){
var inst_15599 = (state_15609[(2)]);
var inst_15600 = process__$1(inst_15599);
var state_15609__$1 = state_15609;
if(cljs.core.truth_(inst_15600)){
var statearr_15612_16968 = state_15609__$1;
(statearr_15612_16968[(1)] = (5));

} else {
var statearr_15613_16969 = state_15609__$1;
(statearr_15613_16969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (5))){
var state_15609__$1 = state_15609;
var statearr_15614_16970 = state_15609__$1;
(statearr_15614_16970[(2)] = null);

(statearr_15614_16970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (6))){
var state_15609__$1 = state_15609;
var statearr_15615_16971 = state_15609__$1;
(statearr_15615_16971[(2)] = null);

(statearr_15615_16971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15610 === (7))){
var inst_15605 = (state_15609[(2)]);
var state_15609__$1 = state_15609;
var statearr_15616_16972 = state_15609__$1;
(statearr_15616_16972[(2)] = inst_15605);

(statearr_15616_16972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16962,c__15444__auto___16966,G__15596_16963,G__15596_16964__$1,n__5762__auto___16961,jobs,results,process__$1,async))
;
return ((function (__16962,switch__15408__auto__,c__15444__auto___16966,G__15596_16963,G__15596_16964__$1,n__5762__auto___16961,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0 = (function (){
var statearr_15617 = [null,null,null,null,null,null,null];
(statearr_15617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__);

(statearr_15617[(1)] = (1));

return statearr_15617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1 = (function (state_15609){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_15609);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e15618){var ex__15412__auto__ = e15618;
var statearr_15619_16973 = state_15609;
(statearr_15619_16973[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_15609[(4)]))){
var statearr_15620_16974 = state_15609;
(statearr_15620_16974[(1)] = cljs.core.first((state_15609[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16975 = state_15609;
state_15609 = G__16975;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__ = function(state_15609){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1.call(this,state_15609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__;
})()
;})(__16962,switch__15408__auto__,c__15444__auto___16966,G__15596_16963,G__15596_16964__$1,n__5762__auto___16961,jobs,results,process__$1,async))
})();
var state__15446__auto__ = (function (){var statearr_15621 = f__15445__auto__();
(statearr_15621[(6)] = c__15444__auto___16966);

return statearr_15621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
});})(__16962,c__15444__auto___16966,G__15596_16963,G__15596_16964__$1,n__5762__auto___16961,jobs,results,process__$1,async))
);


break;
case "async":
var c__15444__auto___16976 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16962,c__15444__auto___16976,G__15596_16963,G__15596_16964__$1,n__5762__auto___16961,jobs,results,process__$1,async){
return (function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = ((function (__16962,c__15444__auto___16976,G__15596_16963,G__15596_16964__$1,n__5762__auto___16961,jobs,results,process__$1,async){
return (function (state_15634){
var state_val_15635 = (state_15634[(1)]);
if((state_val_15635 === (1))){
var state_15634__$1 = state_15634;
var statearr_15636_16977 = state_15634__$1;
(statearr_15636_16977[(2)] = null);

(statearr_15636_16977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (2))){
var state_15634__$1 = state_15634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15634__$1,(4),jobs);
} else {
if((state_val_15635 === (3))){
var inst_15632 = (state_15634[(2)]);
var state_15634__$1 = state_15634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15634__$1,inst_15632);
} else {
if((state_val_15635 === (4))){
var inst_15624 = (state_15634[(2)]);
var inst_15625 = async(inst_15624);
var state_15634__$1 = state_15634;
if(cljs.core.truth_(inst_15625)){
var statearr_15637_16978 = state_15634__$1;
(statearr_15637_16978[(1)] = (5));

} else {
var statearr_15638_16979 = state_15634__$1;
(statearr_15638_16979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (5))){
var state_15634__$1 = state_15634;
var statearr_15639_16980 = state_15634__$1;
(statearr_15639_16980[(2)] = null);

(statearr_15639_16980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (6))){
var state_15634__$1 = state_15634;
var statearr_15640_16981 = state_15634__$1;
(statearr_15640_16981[(2)] = null);

(statearr_15640_16981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15635 === (7))){
var inst_15630 = (state_15634[(2)]);
var state_15634__$1 = state_15634;
var statearr_15641_16982 = state_15634__$1;
(statearr_15641_16982[(2)] = inst_15630);

(statearr_15641_16982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16962,c__15444__auto___16976,G__15596_16963,G__15596_16964__$1,n__5762__auto___16961,jobs,results,process__$1,async))
;
return ((function (__16962,switch__15408__auto__,c__15444__auto___16976,G__15596_16963,G__15596_16964__$1,n__5762__auto___16961,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0 = (function (){
var statearr_15642 = [null,null,null,null,null,null,null];
(statearr_15642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__);

(statearr_15642[(1)] = (1));

return statearr_15642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1 = (function (state_15634){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_15634);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e15643){var ex__15412__auto__ = e15643;
var statearr_15644_16983 = state_15634;
(statearr_15644_16983[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_15634[(4)]))){
var statearr_15645_16984 = state_15634;
(statearr_15645_16984[(1)] = cljs.core.first((state_15634[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16985 = state_15634;
state_15634 = G__16985;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__ = function(state_15634){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1.call(this,state_15634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__;
})()
;})(__16962,switch__15408__auto__,c__15444__auto___16976,G__15596_16963,G__15596_16964__$1,n__5762__auto___16961,jobs,results,process__$1,async))
})();
var state__15446__auto__ = (function (){var statearr_15646 = f__15445__auto__();
(statearr_15646[(6)] = c__15444__auto___16976);

return statearr_15646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
});})(__16962,c__15444__auto___16976,G__15596_16963,G__15596_16964__$1,n__5762__auto___16961,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15596_16964__$1))));

}

var G__16986 = (__16962 + (1));
__16962 = G__16986;
continue;
} else {
}
break;
}

var c__15444__auto___16987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_15668){
var state_val_15669 = (state_15668[(1)]);
if((state_val_15669 === (7))){
var inst_15664 = (state_15668[(2)]);
var state_15668__$1 = state_15668;
var statearr_15670_16988 = state_15668__$1;
(statearr_15670_16988[(2)] = inst_15664);

(statearr_15670_16988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15669 === (1))){
var state_15668__$1 = state_15668;
var statearr_15671_16989 = state_15668__$1;
(statearr_15671_16989[(2)] = null);

(statearr_15671_16989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15669 === (4))){
var inst_15649 = (state_15668[(7)]);
var inst_15649__$1 = (state_15668[(2)]);
var inst_15650 = (inst_15649__$1 == null);
var state_15668__$1 = (function (){var statearr_15672 = state_15668;
(statearr_15672[(7)] = inst_15649__$1);

return statearr_15672;
})();
if(cljs.core.truth_(inst_15650)){
var statearr_15673_16990 = state_15668__$1;
(statearr_15673_16990[(1)] = (5));

} else {
var statearr_15674_16991 = state_15668__$1;
(statearr_15674_16991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15669 === (6))){
var inst_15649 = (state_15668[(7)]);
var inst_15654 = (state_15668[(8)]);
var inst_15654__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15655 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15656 = [inst_15649,inst_15654__$1];
var inst_15657 = (new cljs.core.PersistentVector(null,2,(5),inst_15655,inst_15656,null));
var state_15668__$1 = (function (){var statearr_15675 = state_15668;
(statearr_15675[(8)] = inst_15654__$1);

return statearr_15675;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15668__$1,(8),jobs,inst_15657);
} else {
if((state_val_15669 === (3))){
var inst_15666 = (state_15668[(2)]);
var state_15668__$1 = state_15668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15668__$1,inst_15666);
} else {
if((state_val_15669 === (2))){
var state_15668__$1 = state_15668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15668__$1,(4),from);
} else {
if((state_val_15669 === (9))){
var inst_15661 = (state_15668[(2)]);
var state_15668__$1 = (function (){var statearr_15676 = state_15668;
(statearr_15676[(9)] = inst_15661);

return statearr_15676;
})();
var statearr_15677_16992 = state_15668__$1;
(statearr_15677_16992[(2)] = null);

(statearr_15677_16992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15669 === (5))){
var inst_15652 = cljs.core.async.close_BANG_(jobs);
var state_15668__$1 = state_15668;
var statearr_15678_16993 = state_15668__$1;
(statearr_15678_16993[(2)] = inst_15652);

(statearr_15678_16993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15669 === (8))){
var inst_15654 = (state_15668[(8)]);
var inst_15659 = (state_15668[(2)]);
var state_15668__$1 = (function (){var statearr_15679 = state_15668;
(statearr_15679[(10)] = inst_15659);

return statearr_15679;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15668__$1,(9),results,inst_15654);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0 = (function (){
var statearr_15680 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15680[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__);

(statearr_15680[(1)] = (1));

return statearr_15680;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1 = (function (state_15668){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_15668);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e15681){var ex__15412__auto__ = e15681;
var statearr_15682_16994 = state_15668;
(statearr_15682_16994[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_15668[(4)]))){
var statearr_15683_16995 = state_15668;
(statearr_15683_16995[(1)] = cljs.core.first((state_15668[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16996 = state_15668;
state_15668 = G__16996;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__ = function(state_15668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1.call(this,state_15668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_15684 = f__15445__auto__();
(statearr_15684[(6)] = c__15444__auto___16987);

return statearr_15684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


var c__15444__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_15722){
var state_val_15723 = (state_15722[(1)]);
if((state_val_15723 === (7))){
var inst_15718 = (state_15722[(2)]);
var state_15722__$1 = state_15722;
var statearr_15724_16997 = state_15722__$1;
(statearr_15724_16997[(2)] = inst_15718);

(statearr_15724_16997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (20))){
var state_15722__$1 = state_15722;
var statearr_15725_16998 = state_15722__$1;
(statearr_15725_16998[(2)] = null);

(statearr_15725_16998[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (1))){
var state_15722__$1 = state_15722;
var statearr_15726_16999 = state_15722__$1;
(statearr_15726_16999[(2)] = null);

(statearr_15726_16999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (4))){
var inst_15687 = (state_15722[(7)]);
var inst_15687__$1 = (state_15722[(2)]);
var inst_15688 = (inst_15687__$1 == null);
var state_15722__$1 = (function (){var statearr_15727 = state_15722;
(statearr_15727[(7)] = inst_15687__$1);

return statearr_15727;
})();
if(cljs.core.truth_(inst_15688)){
var statearr_15728_17000 = state_15722__$1;
(statearr_15728_17000[(1)] = (5));

} else {
var statearr_15729_17001 = state_15722__$1;
(statearr_15729_17001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (15))){
var inst_15700 = (state_15722[(8)]);
var state_15722__$1 = state_15722;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15722__$1,(18),to,inst_15700);
} else {
if((state_val_15723 === (21))){
var inst_15713 = (state_15722[(2)]);
var state_15722__$1 = state_15722;
var statearr_15730_17002 = state_15722__$1;
(statearr_15730_17002[(2)] = inst_15713);

(statearr_15730_17002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (13))){
var inst_15715 = (state_15722[(2)]);
var state_15722__$1 = (function (){var statearr_15731 = state_15722;
(statearr_15731[(9)] = inst_15715);

return statearr_15731;
})();
var statearr_15732_17003 = state_15722__$1;
(statearr_15732_17003[(2)] = null);

(statearr_15732_17003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (6))){
var inst_15687 = (state_15722[(7)]);
var state_15722__$1 = state_15722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15722__$1,(11),inst_15687);
} else {
if((state_val_15723 === (17))){
var inst_15708 = (state_15722[(2)]);
var state_15722__$1 = state_15722;
if(cljs.core.truth_(inst_15708)){
var statearr_15733_17004 = state_15722__$1;
(statearr_15733_17004[(1)] = (19));

} else {
var statearr_15734_17005 = state_15722__$1;
(statearr_15734_17005[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (3))){
var inst_15720 = (state_15722[(2)]);
var state_15722__$1 = state_15722;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15722__$1,inst_15720);
} else {
if((state_val_15723 === (12))){
var inst_15697 = (state_15722[(10)]);
var state_15722__$1 = state_15722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15722__$1,(14),inst_15697);
} else {
if((state_val_15723 === (2))){
var state_15722__$1 = state_15722;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15722__$1,(4),results);
} else {
if((state_val_15723 === (19))){
var state_15722__$1 = state_15722;
var statearr_15735_17006 = state_15722__$1;
(statearr_15735_17006[(2)] = null);

(statearr_15735_17006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (11))){
var inst_15697 = (state_15722[(2)]);
var state_15722__$1 = (function (){var statearr_15736 = state_15722;
(statearr_15736[(10)] = inst_15697);

return statearr_15736;
})();
var statearr_15737_17011 = state_15722__$1;
(statearr_15737_17011[(2)] = null);

(statearr_15737_17011[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (9))){
var state_15722__$1 = state_15722;
var statearr_15738_17012 = state_15722__$1;
(statearr_15738_17012[(2)] = null);

(statearr_15738_17012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (5))){
var state_15722__$1 = state_15722;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15739_17013 = state_15722__$1;
(statearr_15739_17013[(1)] = (8));

} else {
var statearr_15740_17014 = state_15722__$1;
(statearr_15740_17014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (14))){
var inst_15700 = (state_15722[(8)]);
var inst_15702 = (state_15722[(11)]);
var inst_15700__$1 = (state_15722[(2)]);
var inst_15701 = (inst_15700__$1 == null);
var inst_15702__$1 = cljs.core.not(inst_15701);
var state_15722__$1 = (function (){var statearr_15741 = state_15722;
(statearr_15741[(8)] = inst_15700__$1);

(statearr_15741[(11)] = inst_15702__$1);

return statearr_15741;
})();
if(inst_15702__$1){
var statearr_15742_17015 = state_15722__$1;
(statearr_15742_17015[(1)] = (15));

} else {
var statearr_15743_17019 = state_15722__$1;
(statearr_15743_17019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (16))){
var inst_15702 = (state_15722[(11)]);
var state_15722__$1 = state_15722;
var statearr_15744_17020 = state_15722__$1;
(statearr_15744_17020[(2)] = inst_15702);

(statearr_15744_17020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (10))){
var inst_15694 = (state_15722[(2)]);
var state_15722__$1 = state_15722;
var statearr_15745_17021 = state_15722__$1;
(statearr_15745_17021[(2)] = inst_15694);

(statearr_15745_17021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (18))){
var inst_15705 = (state_15722[(2)]);
var state_15722__$1 = state_15722;
var statearr_15746_17022 = state_15722__$1;
(statearr_15746_17022[(2)] = inst_15705);

(statearr_15746_17022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15723 === (8))){
var inst_15691 = cljs.core.async.close_BANG_(to);
var state_15722__$1 = state_15722;
var statearr_15747_17023 = state_15722__$1;
(statearr_15747_17023[(2)] = inst_15691);

(statearr_15747_17023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0 = (function (){
var statearr_15748 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__);

(statearr_15748[(1)] = (1));

return statearr_15748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1 = (function (state_15722){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_15722);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e15749){var ex__15412__auto__ = e15749;
var statearr_15750_17024 = state_15722;
(statearr_15750_17024[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_15722[(4)]))){
var statearr_15751_17025 = state_15722;
(statearr_15751_17025[(1)] = cljs.core.first((state_15722[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17026 = state_15722;
state_15722 = G__17026;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__ = function(state_15722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1.call(this,state_15722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15409__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_15752 = f__15445__auto__();
(statearr_15752[(6)] = c__15444__auto__);

return statearr_15752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));

return c__15444__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15754 = arguments.length;
switch (G__15754) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15756 = arguments.length;
switch (G__15756) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15758 = arguments.length;
switch (G__15758) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15444__auto___17032 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_15784){
var state_val_15785 = (state_15784[(1)]);
if((state_val_15785 === (7))){
var inst_15780 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
var statearr_15786_17033 = state_15784__$1;
(statearr_15786_17033[(2)] = inst_15780);

(statearr_15786_17033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (1))){
var state_15784__$1 = state_15784;
var statearr_15787_17034 = state_15784__$1;
(statearr_15787_17034[(2)] = null);

(statearr_15787_17034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (4))){
var inst_15761 = (state_15784[(7)]);
var inst_15761__$1 = (state_15784[(2)]);
var inst_15762 = (inst_15761__$1 == null);
var state_15784__$1 = (function (){var statearr_15788 = state_15784;
(statearr_15788[(7)] = inst_15761__$1);

return statearr_15788;
})();
if(cljs.core.truth_(inst_15762)){
var statearr_15789_17035 = state_15784__$1;
(statearr_15789_17035[(1)] = (5));

} else {
var statearr_15790_17036 = state_15784__$1;
(statearr_15790_17036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (13))){
var state_15784__$1 = state_15784;
var statearr_15791_17037 = state_15784__$1;
(statearr_15791_17037[(2)] = null);

(statearr_15791_17037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (6))){
var inst_15761 = (state_15784[(7)]);
var inst_15767 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15761) : p.call(null,inst_15761));
var state_15784__$1 = state_15784;
if(cljs.core.truth_(inst_15767)){
var statearr_15792_17038 = state_15784__$1;
(statearr_15792_17038[(1)] = (9));

} else {
var statearr_15793_17039 = state_15784__$1;
(statearr_15793_17039[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (3))){
var inst_15782 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15784__$1,inst_15782);
} else {
if((state_val_15785 === (12))){
var state_15784__$1 = state_15784;
var statearr_15794_17040 = state_15784__$1;
(statearr_15794_17040[(2)] = null);

(statearr_15794_17040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (2))){
var state_15784__$1 = state_15784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15784__$1,(4),ch);
} else {
if((state_val_15785 === (11))){
var inst_15761 = (state_15784[(7)]);
var inst_15771 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15784__$1,(8),inst_15771,inst_15761);
} else {
if((state_val_15785 === (9))){
var state_15784__$1 = state_15784;
var statearr_15795_17041 = state_15784__$1;
(statearr_15795_17041[(2)] = tc);

(statearr_15795_17041[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (5))){
var inst_15764 = cljs.core.async.close_BANG_(tc);
var inst_15765 = cljs.core.async.close_BANG_(fc);
var state_15784__$1 = (function (){var statearr_15796 = state_15784;
(statearr_15796[(8)] = inst_15764);

return statearr_15796;
})();
var statearr_15797_17042 = state_15784__$1;
(statearr_15797_17042[(2)] = inst_15765);

(statearr_15797_17042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (14))){
var inst_15778 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
var statearr_15798_17043 = state_15784__$1;
(statearr_15798_17043[(2)] = inst_15778);

(statearr_15798_17043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (10))){
var state_15784__$1 = state_15784;
var statearr_15799_17044 = state_15784__$1;
(statearr_15799_17044[(2)] = fc);

(statearr_15799_17044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15785 === (8))){
var inst_15773 = (state_15784[(2)]);
var state_15784__$1 = state_15784;
if(cljs.core.truth_(inst_15773)){
var statearr_15800_17045 = state_15784__$1;
(statearr_15800_17045[(1)] = (12));

} else {
var statearr_15801_17046 = state_15784__$1;
(statearr_15801_17046[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15409__auto__ = null;
var cljs$core$async$state_machine__15409__auto____0 = (function (){
var statearr_15802 = [null,null,null,null,null,null,null,null,null];
(statearr_15802[(0)] = cljs$core$async$state_machine__15409__auto__);

(statearr_15802[(1)] = (1));

return statearr_15802;
});
var cljs$core$async$state_machine__15409__auto____1 = (function (state_15784){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_15784);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e15803){var ex__15412__auto__ = e15803;
var statearr_15804_17047 = state_15784;
(statearr_15804_17047[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_15784[(4)]))){
var statearr_15805_17048 = state_15784;
(statearr_15805_17048[(1)] = cljs.core.first((state_15784[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17049 = state_15784;
state_15784 = G__17049;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$state_machine__15409__auto__ = function(state_15784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15409__auto____1.call(this,state_15784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15409__auto____0;
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15409__auto____1;
return cljs$core$async$state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_15806 = f__15445__auto__();
(statearr_15806[(6)] = c__15444__auto___17032);

return statearr_15806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15444__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_15828){
var state_val_15829 = (state_15828[(1)]);
if((state_val_15829 === (7))){
var inst_15824 = (state_15828[(2)]);
var state_15828__$1 = state_15828;
var statearr_15830_17050 = state_15828__$1;
(statearr_15830_17050[(2)] = inst_15824);

(statearr_15830_17050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15829 === (1))){
var inst_15807 = init;
var inst_15808 = inst_15807;
var state_15828__$1 = (function (){var statearr_15831 = state_15828;
(statearr_15831[(7)] = inst_15808);

return statearr_15831;
})();
var statearr_15832_17051 = state_15828__$1;
(statearr_15832_17051[(2)] = null);

(statearr_15832_17051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15829 === (4))){
var inst_15811 = (state_15828[(8)]);
var inst_15811__$1 = (state_15828[(2)]);
var inst_15812 = (inst_15811__$1 == null);
var state_15828__$1 = (function (){var statearr_15833 = state_15828;
(statearr_15833[(8)] = inst_15811__$1);

return statearr_15833;
})();
if(cljs.core.truth_(inst_15812)){
var statearr_15834_17052 = state_15828__$1;
(statearr_15834_17052[(1)] = (5));

} else {
var statearr_15835_17053 = state_15828__$1;
(statearr_15835_17053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15829 === (6))){
var inst_15808 = (state_15828[(7)]);
var inst_15811 = (state_15828[(8)]);
var inst_15815 = (state_15828[(9)]);
var inst_15815__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15808,inst_15811) : f.call(null,inst_15808,inst_15811));
var inst_15816 = cljs.core.reduced_QMARK_(inst_15815__$1);
var state_15828__$1 = (function (){var statearr_15836 = state_15828;
(statearr_15836[(9)] = inst_15815__$1);

return statearr_15836;
})();
if(inst_15816){
var statearr_15837_17054 = state_15828__$1;
(statearr_15837_17054[(1)] = (8));

} else {
var statearr_15838_17055 = state_15828__$1;
(statearr_15838_17055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15829 === (3))){
var inst_15826 = (state_15828[(2)]);
var state_15828__$1 = state_15828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15828__$1,inst_15826);
} else {
if((state_val_15829 === (2))){
var state_15828__$1 = state_15828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15828__$1,(4),ch);
} else {
if((state_val_15829 === (9))){
var inst_15815 = (state_15828[(9)]);
var inst_15808 = inst_15815;
var state_15828__$1 = (function (){var statearr_15839 = state_15828;
(statearr_15839[(7)] = inst_15808);

return statearr_15839;
})();
var statearr_15840_17056 = state_15828__$1;
(statearr_15840_17056[(2)] = null);

(statearr_15840_17056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15829 === (5))){
var inst_15808 = (state_15828[(7)]);
var state_15828__$1 = state_15828;
var statearr_15841_17057 = state_15828__$1;
(statearr_15841_17057[(2)] = inst_15808);

(statearr_15841_17057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15829 === (10))){
var inst_15822 = (state_15828[(2)]);
var state_15828__$1 = state_15828;
var statearr_15842_17058 = state_15828__$1;
(statearr_15842_17058[(2)] = inst_15822);

(statearr_15842_17058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15829 === (8))){
var inst_15815 = (state_15828[(9)]);
var inst_15818 = cljs.core.deref(inst_15815);
var state_15828__$1 = state_15828;
var statearr_15843_17059 = state_15828__$1;
(statearr_15843_17059[(2)] = inst_15818);

(statearr_15843_17059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__15409__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15409__auto____0 = (function (){
var statearr_15844 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15844[(0)] = cljs$core$async$reduce_$_state_machine__15409__auto__);

(statearr_15844[(1)] = (1));

return statearr_15844;
});
var cljs$core$async$reduce_$_state_machine__15409__auto____1 = (function (state_15828){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_15828);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e15845){var ex__15412__auto__ = e15845;
var statearr_15846_17060 = state_15828;
(statearr_15846_17060[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_15828[(4)]))){
var statearr_15847_17061 = state_15828;
(statearr_15847_17061[(1)] = cljs.core.first((state_15828[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17062 = state_15828;
state_15828 = G__17062;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15409__auto__ = function(state_15828){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15409__auto____1.call(this,state_15828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15409__auto____0;
cljs$core$async$reduce_$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15409__auto____1;
return cljs$core$async$reduce_$_state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_15848 = f__15445__auto__();
(statearr_15848[(6)] = c__15444__auto__);

return statearr_15848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));

return c__15444__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15444__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_15854){
var state_val_15855 = (state_15854[(1)]);
if((state_val_15855 === (1))){
var inst_15849 = cljs.core.async.reduce(f__$1,init,ch);
var state_15854__$1 = state_15854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15854__$1,(2),inst_15849);
} else {
if((state_val_15855 === (2))){
var inst_15851 = (state_15854[(2)]);
var inst_15852 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15851) : f__$1.call(null,inst_15851));
var state_15854__$1 = state_15854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15854__$1,inst_15852);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__15409__auto__ = null;
var cljs$core$async$transduce_$_state_machine__15409__auto____0 = (function (){
var statearr_15856 = [null,null,null,null,null,null,null];
(statearr_15856[(0)] = cljs$core$async$transduce_$_state_machine__15409__auto__);

(statearr_15856[(1)] = (1));

return statearr_15856;
});
var cljs$core$async$transduce_$_state_machine__15409__auto____1 = (function (state_15854){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_15854);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e15857){var ex__15412__auto__ = e15857;
var statearr_15858_17063 = state_15854;
(statearr_15858_17063[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_15854[(4)]))){
var statearr_15859_17064 = state_15854;
(statearr_15859_17064[(1)] = cljs.core.first((state_15854[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17065 = state_15854;
state_15854 = G__17065;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__15409__auto__ = function(state_15854){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__15409__auto____1.call(this,state_15854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__15409__auto____0;
cljs$core$async$transduce_$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__15409__auto____1;
return cljs$core$async$transduce_$_state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_15860 = f__15445__auto__();
(statearr_15860[(6)] = c__15444__auto__);

return statearr_15860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));

return c__15444__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15862 = arguments.length;
switch (G__15862) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15444__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_15887){
var state_val_15888 = (state_15887[(1)]);
if((state_val_15888 === (7))){
var inst_15869 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
var statearr_15889_17067 = state_15887__$1;
(statearr_15889_17067[(2)] = inst_15869);

(statearr_15889_17067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (1))){
var inst_15863 = cljs.core.seq(coll);
var inst_15864 = inst_15863;
var state_15887__$1 = (function (){var statearr_15890 = state_15887;
(statearr_15890[(7)] = inst_15864);

return statearr_15890;
})();
var statearr_15891_17068 = state_15887__$1;
(statearr_15891_17068[(2)] = null);

(statearr_15891_17068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (4))){
var inst_15864 = (state_15887[(7)]);
var inst_15867 = cljs.core.first(inst_15864);
var state_15887__$1 = state_15887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15887__$1,(7),ch,inst_15867);
} else {
if((state_val_15888 === (13))){
var inst_15881 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
var statearr_15892_17069 = state_15887__$1;
(statearr_15892_17069[(2)] = inst_15881);

(statearr_15892_17069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (6))){
var inst_15872 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
if(cljs.core.truth_(inst_15872)){
var statearr_15893_17070 = state_15887__$1;
(statearr_15893_17070[(1)] = (8));

} else {
var statearr_15894_17071 = state_15887__$1;
(statearr_15894_17071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (3))){
var inst_15885 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15887__$1,inst_15885);
} else {
if((state_val_15888 === (12))){
var state_15887__$1 = state_15887;
var statearr_15895_17072 = state_15887__$1;
(statearr_15895_17072[(2)] = null);

(statearr_15895_17072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (2))){
var inst_15864 = (state_15887[(7)]);
var state_15887__$1 = state_15887;
if(cljs.core.truth_(inst_15864)){
var statearr_15896_17073 = state_15887__$1;
(statearr_15896_17073[(1)] = (4));

} else {
var statearr_15897_17074 = state_15887__$1;
(statearr_15897_17074[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (11))){
var inst_15878 = cljs.core.async.close_BANG_(ch);
var state_15887__$1 = state_15887;
var statearr_15898_17075 = state_15887__$1;
(statearr_15898_17075[(2)] = inst_15878);

(statearr_15898_17075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (9))){
var state_15887__$1 = state_15887;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15899_17076 = state_15887__$1;
(statearr_15899_17076[(1)] = (11));

} else {
var statearr_15900_17077 = state_15887__$1;
(statearr_15900_17077[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (5))){
var inst_15864 = (state_15887[(7)]);
var state_15887__$1 = state_15887;
var statearr_15901_17078 = state_15887__$1;
(statearr_15901_17078[(2)] = inst_15864);

(statearr_15901_17078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (10))){
var inst_15883 = (state_15887[(2)]);
var state_15887__$1 = state_15887;
var statearr_15902_17079 = state_15887__$1;
(statearr_15902_17079[(2)] = inst_15883);

(statearr_15902_17079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15888 === (8))){
var inst_15864 = (state_15887[(7)]);
var inst_15874 = cljs.core.next(inst_15864);
var inst_15864__$1 = inst_15874;
var state_15887__$1 = (function (){var statearr_15903 = state_15887;
(statearr_15903[(7)] = inst_15864__$1);

return statearr_15903;
})();
var statearr_15904_17080 = state_15887__$1;
(statearr_15904_17080[(2)] = null);

(statearr_15904_17080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15409__auto__ = null;
var cljs$core$async$state_machine__15409__auto____0 = (function (){
var statearr_15905 = [null,null,null,null,null,null,null,null];
(statearr_15905[(0)] = cljs$core$async$state_machine__15409__auto__);

(statearr_15905[(1)] = (1));

return statearr_15905;
});
var cljs$core$async$state_machine__15409__auto____1 = (function (state_15887){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_15887);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e15906){var ex__15412__auto__ = e15906;
var statearr_15907_17081 = state_15887;
(statearr_15907_17081[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_15887[(4)]))){
var statearr_15908_17082 = state_15887;
(statearr_15908_17082[(1)] = cljs.core.first((state_15887[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17083 = state_15887;
state_15887 = G__17083;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$state_machine__15409__auto__ = function(state_15887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15409__auto____1.call(this,state_15887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15409__auto____0;
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15409__auto____1;
return cljs$core$async$state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_15909 = f__15445__auto__();
(statearr_15909[(6)] = c__15444__auto__);

return statearr_15909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));

return c__15444__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15911 = arguments.length;
switch (G__15911) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17088 = (function (_){
var x__5519__auto__ = (((_ == null))?null:_);
var m__5520__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5520__auto__.call(null,_));
} else {
var m__5518__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5518__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17088(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17089 = (function (m,ch,close_QMARK_){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5520__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5518__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17089(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17090 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17090(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17091 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17091(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15912 = (function (ch,cs,meta15913){
this.ch = ch;
this.cs = cs;
this.meta15913 = meta15913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15914,meta15913__$1){
var self__ = this;
var _15914__$1 = this;
return (new cljs.core.async.t_cljs$core$async15912(self__.ch,self__.cs,meta15913__$1));
}));

(cljs.core.async.t_cljs$core$async15912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15914){
var self__ = this;
var _15914__$1 = this;
return self__.meta15913;
}));

(cljs.core.async.t_cljs$core$async15912.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15912.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15912.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15912.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15912.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15912.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15913","meta15913",-649418553,null)], null);
}));

(cljs.core.async.t_cljs$core$async15912.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15912");

(cljs.core.async.t_cljs$core$async15912.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async15912");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15912.
 */
cljs.core.async.__GT_t_cljs$core$async15912 = (function cljs$core$async$__GT_t_cljs$core$async15912(ch,cs,meta15913){
return (new cljs.core.async.t_cljs$core$async15912(ch,cs,meta15913));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15912(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15444__auto___17092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_16047){
var state_val_16048 = (state_16047[(1)]);
if((state_val_16048 === (7))){
var inst_16043 = (state_16047[(2)]);
var state_16047__$1 = state_16047;
var statearr_16049_17093 = state_16047__$1;
(statearr_16049_17093[(2)] = inst_16043);

(statearr_16049_17093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (20))){
var inst_15948 = (state_16047[(7)]);
var inst_15960 = cljs.core.first(inst_15948);
var inst_15961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15960,(0),null);
var inst_15962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15960,(1),null);
var state_16047__$1 = (function (){var statearr_16050 = state_16047;
(statearr_16050[(8)] = inst_15961);

return statearr_16050;
})();
if(cljs.core.truth_(inst_15962)){
var statearr_16051_17094 = state_16047__$1;
(statearr_16051_17094[(1)] = (22));

} else {
var statearr_16052_17095 = state_16047__$1;
(statearr_16052_17095[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (27))){
var inst_15990 = (state_16047[(9)]);
var inst_15992 = (state_16047[(10)]);
var inst_15997 = (state_16047[(11)]);
var inst_15917 = (state_16047[(12)]);
var inst_15997__$1 = cljs.core._nth(inst_15990,inst_15992);
var inst_15998 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15997__$1,inst_15917,done);
var state_16047__$1 = (function (){var statearr_16053 = state_16047;
(statearr_16053[(11)] = inst_15997__$1);

return statearr_16053;
})();
if(cljs.core.truth_(inst_15998)){
var statearr_16054_17096 = state_16047__$1;
(statearr_16054_17096[(1)] = (30));

} else {
var statearr_16055_17097 = state_16047__$1;
(statearr_16055_17097[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (1))){
var state_16047__$1 = state_16047;
var statearr_16056_17098 = state_16047__$1;
(statearr_16056_17098[(2)] = null);

(statearr_16056_17098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (24))){
var inst_15948 = (state_16047[(7)]);
var inst_15967 = (state_16047[(2)]);
var inst_15968 = cljs.core.next(inst_15948);
var inst_15926 = inst_15968;
var inst_15927 = null;
var inst_15928 = (0);
var inst_15929 = (0);
var state_16047__$1 = (function (){var statearr_16057 = state_16047;
(statearr_16057[(13)] = inst_15967);

(statearr_16057[(14)] = inst_15926);

(statearr_16057[(15)] = inst_15927);

(statearr_16057[(16)] = inst_15928);

(statearr_16057[(17)] = inst_15929);

return statearr_16057;
})();
var statearr_16058_17099 = state_16047__$1;
(statearr_16058_17099[(2)] = null);

(statearr_16058_17099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (39))){
var state_16047__$1 = state_16047;
var statearr_16062_17101 = state_16047__$1;
(statearr_16062_17101[(2)] = null);

(statearr_16062_17101[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (4))){
var inst_15917 = (state_16047[(12)]);
var inst_15917__$1 = (state_16047[(2)]);
var inst_15918 = (inst_15917__$1 == null);
var state_16047__$1 = (function (){var statearr_16063 = state_16047;
(statearr_16063[(12)] = inst_15917__$1);

return statearr_16063;
})();
if(cljs.core.truth_(inst_15918)){
var statearr_16064_17102 = state_16047__$1;
(statearr_16064_17102[(1)] = (5));

} else {
var statearr_16065_17103 = state_16047__$1;
(statearr_16065_17103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (15))){
var inst_15929 = (state_16047[(17)]);
var inst_15926 = (state_16047[(14)]);
var inst_15927 = (state_16047[(15)]);
var inst_15928 = (state_16047[(16)]);
var inst_15944 = (state_16047[(2)]);
var inst_15945 = (inst_15929 + (1));
var tmp16059 = inst_15928;
var tmp16060 = inst_15927;
var tmp16061 = inst_15926;
var inst_15926__$1 = tmp16061;
var inst_15927__$1 = tmp16060;
var inst_15928__$1 = tmp16059;
var inst_15929__$1 = inst_15945;
var state_16047__$1 = (function (){var statearr_16066 = state_16047;
(statearr_16066[(18)] = inst_15944);

(statearr_16066[(14)] = inst_15926__$1);

(statearr_16066[(15)] = inst_15927__$1);

(statearr_16066[(16)] = inst_15928__$1);

(statearr_16066[(17)] = inst_15929__$1);

return statearr_16066;
})();
var statearr_16067_17106 = state_16047__$1;
(statearr_16067_17106[(2)] = null);

(statearr_16067_17106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (21))){
var inst_15971 = (state_16047[(2)]);
var state_16047__$1 = state_16047;
var statearr_16071_17107 = state_16047__$1;
(statearr_16071_17107[(2)] = inst_15971);

(statearr_16071_17107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (31))){
var inst_15997 = (state_16047[(11)]);
var inst_16001 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15997);
var state_16047__$1 = state_16047;
var statearr_16072_17108 = state_16047__$1;
(statearr_16072_17108[(2)] = inst_16001);

(statearr_16072_17108[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (32))){
var inst_15992 = (state_16047[(10)]);
var inst_15989 = (state_16047[(19)]);
var inst_15990 = (state_16047[(9)]);
var inst_15991 = (state_16047[(20)]);
var inst_16003 = (state_16047[(2)]);
var inst_16004 = (inst_15992 + (1));
var tmp16068 = inst_15991;
var tmp16069 = inst_15989;
var tmp16070 = inst_15990;
var inst_15989__$1 = tmp16069;
var inst_15990__$1 = tmp16070;
var inst_15991__$1 = tmp16068;
var inst_15992__$1 = inst_16004;
var state_16047__$1 = (function (){var statearr_16073 = state_16047;
(statearr_16073[(21)] = inst_16003);

(statearr_16073[(19)] = inst_15989__$1);

(statearr_16073[(9)] = inst_15990__$1);

(statearr_16073[(20)] = inst_15991__$1);

(statearr_16073[(10)] = inst_15992__$1);

return statearr_16073;
})();
var statearr_16074_17109 = state_16047__$1;
(statearr_16074_17109[(2)] = null);

(statearr_16074_17109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (40))){
var inst_16016 = (state_16047[(22)]);
var inst_16020 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16016);
var state_16047__$1 = state_16047;
var statearr_16075_17110 = state_16047__$1;
(statearr_16075_17110[(2)] = inst_16020);

(statearr_16075_17110[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (33))){
var inst_16007 = (state_16047[(23)]);
var inst_16009 = cljs.core.chunked_seq_QMARK_(inst_16007);
var state_16047__$1 = state_16047;
if(inst_16009){
var statearr_16076_17111 = state_16047__$1;
(statearr_16076_17111[(1)] = (36));

} else {
var statearr_16077_17112 = state_16047__$1;
(statearr_16077_17112[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (13))){
var inst_15938 = (state_16047[(24)]);
var inst_15941 = cljs.core.async.close_BANG_(inst_15938);
var state_16047__$1 = state_16047;
var statearr_16078_17113 = state_16047__$1;
(statearr_16078_17113[(2)] = inst_15941);

(statearr_16078_17113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (22))){
var inst_15961 = (state_16047[(8)]);
var inst_15964 = cljs.core.async.close_BANG_(inst_15961);
var state_16047__$1 = state_16047;
var statearr_16079_17114 = state_16047__$1;
(statearr_16079_17114[(2)] = inst_15964);

(statearr_16079_17114[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (36))){
var inst_16007 = (state_16047[(23)]);
var inst_16011 = cljs.core.chunk_first(inst_16007);
var inst_16012 = cljs.core.chunk_rest(inst_16007);
var inst_16013 = cljs.core.count(inst_16011);
var inst_15989 = inst_16012;
var inst_15990 = inst_16011;
var inst_15991 = inst_16013;
var inst_15992 = (0);
var state_16047__$1 = (function (){var statearr_16080 = state_16047;
(statearr_16080[(19)] = inst_15989);

(statearr_16080[(9)] = inst_15990);

(statearr_16080[(20)] = inst_15991);

(statearr_16080[(10)] = inst_15992);

return statearr_16080;
})();
var statearr_16081_17115 = state_16047__$1;
(statearr_16081_17115[(2)] = null);

(statearr_16081_17115[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (41))){
var inst_16007 = (state_16047[(23)]);
var inst_16022 = (state_16047[(2)]);
var inst_16023 = cljs.core.next(inst_16007);
var inst_15989 = inst_16023;
var inst_15990 = null;
var inst_15991 = (0);
var inst_15992 = (0);
var state_16047__$1 = (function (){var statearr_16082 = state_16047;
(statearr_16082[(25)] = inst_16022);

(statearr_16082[(19)] = inst_15989);

(statearr_16082[(9)] = inst_15990);

(statearr_16082[(20)] = inst_15991);

(statearr_16082[(10)] = inst_15992);

return statearr_16082;
})();
var statearr_16083_17116 = state_16047__$1;
(statearr_16083_17116[(2)] = null);

(statearr_16083_17116[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (43))){
var state_16047__$1 = state_16047;
var statearr_16084_17117 = state_16047__$1;
(statearr_16084_17117[(2)] = null);

(statearr_16084_17117[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (29))){
var inst_16031 = (state_16047[(2)]);
var state_16047__$1 = state_16047;
var statearr_16085_17118 = state_16047__$1;
(statearr_16085_17118[(2)] = inst_16031);

(statearr_16085_17118[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (44))){
var inst_16040 = (state_16047[(2)]);
var state_16047__$1 = (function (){var statearr_16086 = state_16047;
(statearr_16086[(26)] = inst_16040);

return statearr_16086;
})();
var statearr_16087_17119 = state_16047__$1;
(statearr_16087_17119[(2)] = null);

(statearr_16087_17119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (6))){
var inst_15981 = (state_16047[(27)]);
var inst_15980 = cljs.core.deref(cs);
var inst_15981__$1 = cljs.core.keys(inst_15980);
var inst_15982 = cljs.core.count(inst_15981__$1);
var inst_15983 = cljs.core.reset_BANG_(dctr,inst_15982);
var inst_15988 = cljs.core.seq(inst_15981__$1);
var inst_15989 = inst_15988;
var inst_15990 = null;
var inst_15991 = (0);
var inst_15992 = (0);
var state_16047__$1 = (function (){var statearr_16088 = state_16047;
(statearr_16088[(27)] = inst_15981__$1);

(statearr_16088[(28)] = inst_15983);

(statearr_16088[(19)] = inst_15989);

(statearr_16088[(9)] = inst_15990);

(statearr_16088[(20)] = inst_15991);

(statearr_16088[(10)] = inst_15992);

return statearr_16088;
})();
var statearr_16089_17121 = state_16047__$1;
(statearr_16089_17121[(2)] = null);

(statearr_16089_17121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (28))){
var inst_15989 = (state_16047[(19)]);
var inst_16007 = (state_16047[(23)]);
var inst_16007__$1 = cljs.core.seq(inst_15989);
var state_16047__$1 = (function (){var statearr_16090 = state_16047;
(statearr_16090[(23)] = inst_16007__$1);

return statearr_16090;
})();
if(inst_16007__$1){
var statearr_16091_17122 = state_16047__$1;
(statearr_16091_17122[(1)] = (33));

} else {
var statearr_16092_17123 = state_16047__$1;
(statearr_16092_17123[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (25))){
var inst_15992 = (state_16047[(10)]);
var inst_15991 = (state_16047[(20)]);
var inst_15994 = (inst_15992 < inst_15991);
var inst_15995 = inst_15994;
var state_16047__$1 = state_16047;
if(cljs.core.truth_(inst_15995)){
var statearr_16093_17124 = state_16047__$1;
(statearr_16093_17124[(1)] = (27));

} else {
var statearr_16094_17125 = state_16047__$1;
(statearr_16094_17125[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (34))){
var state_16047__$1 = state_16047;
var statearr_16095_17126 = state_16047__$1;
(statearr_16095_17126[(2)] = null);

(statearr_16095_17126[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (17))){
var state_16047__$1 = state_16047;
var statearr_16096_17127 = state_16047__$1;
(statearr_16096_17127[(2)] = null);

(statearr_16096_17127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (3))){
var inst_16045 = (state_16047[(2)]);
var state_16047__$1 = state_16047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16047__$1,inst_16045);
} else {
if((state_val_16048 === (12))){
var inst_15976 = (state_16047[(2)]);
var state_16047__$1 = state_16047;
var statearr_16097_17128 = state_16047__$1;
(statearr_16097_17128[(2)] = inst_15976);

(statearr_16097_17128[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (2))){
var state_16047__$1 = state_16047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16047__$1,(4),ch);
} else {
if((state_val_16048 === (23))){
var state_16047__$1 = state_16047;
var statearr_16098_17131 = state_16047__$1;
(statearr_16098_17131[(2)] = null);

(statearr_16098_17131[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (35))){
var inst_16029 = (state_16047[(2)]);
var state_16047__$1 = state_16047;
var statearr_16099_17132 = state_16047__$1;
(statearr_16099_17132[(2)] = inst_16029);

(statearr_16099_17132[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (19))){
var inst_15948 = (state_16047[(7)]);
var inst_15952 = cljs.core.chunk_first(inst_15948);
var inst_15953 = cljs.core.chunk_rest(inst_15948);
var inst_15954 = cljs.core.count(inst_15952);
var inst_15926 = inst_15953;
var inst_15927 = inst_15952;
var inst_15928 = inst_15954;
var inst_15929 = (0);
var state_16047__$1 = (function (){var statearr_16100 = state_16047;
(statearr_16100[(14)] = inst_15926);

(statearr_16100[(15)] = inst_15927);

(statearr_16100[(16)] = inst_15928);

(statearr_16100[(17)] = inst_15929);

return statearr_16100;
})();
var statearr_16101_17133 = state_16047__$1;
(statearr_16101_17133[(2)] = null);

(statearr_16101_17133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (11))){
var inst_15926 = (state_16047[(14)]);
var inst_15948 = (state_16047[(7)]);
var inst_15948__$1 = cljs.core.seq(inst_15926);
var state_16047__$1 = (function (){var statearr_16102 = state_16047;
(statearr_16102[(7)] = inst_15948__$1);

return statearr_16102;
})();
if(inst_15948__$1){
var statearr_16103_17134 = state_16047__$1;
(statearr_16103_17134[(1)] = (16));

} else {
var statearr_16104_17135 = state_16047__$1;
(statearr_16104_17135[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (9))){
var inst_15978 = (state_16047[(2)]);
var state_16047__$1 = state_16047;
var statearr_16105_17136 = state_16047__$1;
(statearr_16105_17136[(2)] = inst_15978);

(statearr_16105_17136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (5))){
var inst_15924 = cljs.core.deref(cs);
var inst_15925 = cljs.core.seq(inst_15924);
var inst_15926 = inst_15925;
var inst_15927 = null;
var inst_15928 = (0);
var inst_15929 = (0);
var state_16047__$1 = (function (){var statearr_16106 = state_16047;
(statearr_16106[(14)] = inst_15926);

(statearr_16106[(15)] = inst_15927);

(statearr_16106[(16)] = inst_15928);

(statearr_16106[(17)] = inst_15929);

return statearr_16106;
})();
var statearr_16107_17137 = state_16047__$1;
(statearr_16107_17137[(2)] = null);

(statearr_16107_17137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (14))){
var state_16047__$1 = state_16047;
var statearr_16108_17138 = state_16047__$1;
(statearr_16108_17138[(2)] = null);

(statearr_16108_17138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (45))){
var inst_16037 = (state_16047[(2)]);
var state_16047__$1 = state_16047;
var statearr_16109_17139 = state_16047__$1;
(statearr_16109_17139[(2)] = inst_16037);

(statearr_16109_17139[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (26))){
var inst_15981 = (state_16047[(27)]);
var inst_16033 = (state_16047[(2)]);
var inst_16034 = cljs.core.seq(inst_15981);
var state_16047__$1 = (function (){var statearr_16110 = state_16047;
(statearr_16110[(29)] = inst_16033);

return statearr_16110;
})();
if(inst_16034){
var statearr_16111_17140 = state_16047__$1;
(statearr_16111_17140[(1)] = (42));

} else {
var statearr_16112_17141 = state_16047__$1;
(statearr_16112_17141[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (16))){
var inst_15948 = (state_16047[(7)]);
var inst_15950 = cljs.core.chunked_seq_QMARK_(inst_15948);
var state_16047__$1 = state_16047;
if(inst_15950){
var statearr_16113_17142 = state_16047__$1;
(statearr_16113_17142[(1)] = (19));

} else {
var statearr_16114_17143 = state_16047__$1;
(statearr_16114_17143[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (38))){
var inst_16026 = (state_16047[(2)]);
var state_16047__$1 = state_16047;
var statearr_16115_17144 = state_16047__$1;
(statearr_16115_17144[(2)] = inst_16026);

(statearr_16115_17144[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (30))){
var state_16047__$1 = state_16047;
var statearr_16116_17145 = state_16047__$1;
(statearr_16116_17145[(2)] = null);

(statearr_16116_17145[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (10))){
var inst_15927 = (state_16047[(15)]);
var inst_15929 = (state_16047[(17)]);
var inst_15937 = cljs.core._nth(inst_15927,inst_15929);
var inst_15938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15937,(0),null);
var inst_15939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15937,(1),null);
var state_16047__$1 = (function (){var statearr_16117 = state_16047;
(statearr_16117[(24)] = inst_15938);

return statearr_16117;
})();
if(cljs.core.truth_(inst_15939)){
var statearr_16118_17146 = state_16047__$1;
(statearr_16118_17146[(1)] = (13));

} else {
var statearr_16119_17147 = state_16047__$1;
(statearr_16119_17147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (18))){
var inst_15974 = (state_16047[(2)]);
var state_16047__$1 = state_16047;
var statearr_16120_17148 = state_16047__$1;
(statearr_16120_17148[(2)] = inst_15974);

(statearr_16120_17148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (42))){
var state_16047__$1 = state_16047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16047__$1,(45),dchan);
} else {
if((state_val_16048 === (37))){
var inst_16007 = (state_16047[(23)]);
var inst_16016 = (state_16047[(22)]);
var inst_15917 = (state_16047[(12)]);
var inst_16016__$1 = cljs.core.first(inst_16007);
var inst_16017 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16016__$1,inst_15917,done);
var state_16047__$1 = (function (){var statearr_16121 = state_16047;
(statearr_16121[(22)] = inst_16016__$1);

return statearr_16121;
})();
if(cljs.core.truth_(inst_16017)){
var statearr_16122_17150 = state_16047__$1;
(statearr_16122_17150[(1)] = (39));

} else {
var statearr_16123_17151 = state_16047__$1;
(statearr_16123_17151[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16048 === (8))){
var inst_15929 = (state_16047[(17)]);
var inst_15928 = (state_16047[(16)]);
var inst_15931 = (inst_15929 < inst_15928);
var inst_15932 = inst_15931;
var state_16047__$1 = state_16047;
if(cljs.core.truth_(inst_15932)){
var statearr_16124_17152 = state_16047__$1;
(statearr_16124_17152[(1)] = (10));

} else {
var statearr_16125_17153 = state_16047__$1;
(statearr_16125_17153[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__15409__auto__ = null;
var cljs$core$async$mult_$_state_machine__15409__auto____0 = (function (){
var statearr_16126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16126[(0)] = cljs$core$async$mult_$_state_machine__15409__auto__);

(statearr_16126[(1)] = (1));

return statearr_16126;
});
var cljs$core$async$mult_$_state_machine__15409__auto____1 = (function (state_16047){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_16047);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e16127){var ex__15412__auto__ = e16127;
var statearr_16128_17154 = state_16047;
(statearr_16128_17154[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_16047[(4)]))){
var statearr_16129_17155 = state_16047;
(statearr_16129_17155[(1)] = cljs.core.first((state_16047[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17156 = state_16047;
state_16047 = G__17156;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15409__auto__ = function(state_16047){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15409__auto____1.call(this,state_16047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15409__auto____0;
cljs$core$async$mult_$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15409__auto____1;
return cljs$core$async$mult_$_state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_16130 = f__15445__auto__();
(statearr_16130[(6)] = c__15444__auto___17092);

return statearr_16130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16132 = arguments.length;
switch (G__16132) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17158 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17158(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17159 = (function (m,ch){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5520__auto__.call(null,m,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5518__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17159(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17160 = (function (m){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5520__auto__.call(null,m));
} else {
var m__5518__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5518__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17160(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17161 = (function (m,state_map){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5520__auto__.call(null,m,state_map));
} else {
var m__5518__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5518__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17161(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17162 = (function (m,mode){
var x__5519__auto__ = (((m == null))?null:m);
var m__5520__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5520__auto__.call(null,m,mode));
} else {
var m__5518__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5518__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17162(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5903__auto__ = [];
var len__5897__auto___17163 = arguments.length;
var i__5898__auto___17164 = (0);
while(true){
if((i__5898__auto___17164 < len__5897__auto___17163)){
args__5903__auto__.push((arguments[i__5898__auto___17164]));

var G__17165 = (i__5898__auto___17164 + (1));
i__5898__auto___17164 = G__17165;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16137){
var map__16138 = p__16137;
var map__16138__$1 = cljs.core.__destructure_map(map__16138);
var opts = map__16138__$1;
var statearr_16139_17166 = state;
(statearr_16139_17166[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16140_17167 = state;
(statearr_16140_17167[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_16141_17168 = state;
(statearr_16141_17168[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16133){
var G__16134 = cljs.core.first(seq16133);
var seq16133__$1 = cljs.core.next(seq16133);
var G__16135 = cljs.core.first(seq16133__$1);
var seq16133__$2 = cljs.core.next(seq16133__$1);
var G__16136 = cljs.core.first(seq16133__$2);
var seq16133__$3 = cljs.core.next(seq16133__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16134,G__16135,G__16136,seq16133__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16142 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16143){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16143 = meta16143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16144,meta16143__$1){
var self__ = this;
var _16144__$1 = this;
return (new cljs.core.async.t_cljs$core$async16142(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16143__$1));
}));

(cljs.core.async.t_cljs$core$async16142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16144){
var self__ = this;
var _16144__$1 = this;
return self__.meta16143;
}));

(cljs.core.async.t_cljs$core$async16142.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16142.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16142.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16142.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16142.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16142.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16142.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16142.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16142.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16143","meta16143",1994565059,null)], null);
}));

(cljs.core.async.t_cljs$core$async16142.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16142");

(cljs.core.async.t_cljs$core$async16142.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16142");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16142.
 */
cljs.core.async.__GT_t_cljs$core$async16142 = (function cljs$core$async$__GT_t_cljs$core$async16142(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16143){
return (new cljs.core.async.t_cljs$core$async16142(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16143));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16142(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15444__auto___17169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_16212){
var state_val_16213 = (state_16212[(1)]);
if((state_val_16213 === (7))){
var inst_16172 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
if(cljs.core.truth_(inst_16172)){
var statearr_16214_17170 = state_16212__$1;
(statearr_16214_17170[(1)] = (8));

} else {
var statearr_16215_17171 = state_16212__$1;
(statearr_16215_17171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (20))){
var inst_16165 = (state_16212[(7)]);
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16212__$1,(23),out,inst_16165);
} else {
if((state_val_16213 === (1))){
var inst_16148 = calc_state();
var inst_16149 = cljs.core.__destructure_map(inst_16148);
var inst_16150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16149,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16149,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16149,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16153 = inst_16148;
var state_16212__$1 = (function (){var statearr_16216 = state_16212;
(statearr_16216[(8)] = inst_16150);

(statearr_16216[(9)] = inst_16151);

(statearr_16216[(10)] = inst_16152);

(statearr_16216[(11)] = inst_16153);

return statearr_16216;
})();
var statearr_16217_17172 = state_16212__$1;
(statearr_16217_17172[(2)] = null);

(statearr_16217_17172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (24))){
var inst_16156 = (state_16212[(12)]);
var inst_16153 = inst_16156;
var state_16212__$1 = (function (){var statearr_16218 = state_16212;
(statearr_16218[(11)] = inst_16153);

return statearr_16218;
})();
var statearr_16219_17173 = state_16212__$1;
(statearr_16219_17173[(2)] = null);

(statearr_16219_17173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (4))){
var inst_16165 = (state_16212[(7)]);
var inst_16167 = (state_16212[(13)]);
var inst_16164 = (state_16212[(2)]);
var inst_16165__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16164,(0),null);
var inst_16166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16164,(1),null);
var inst_16167__$1 = (inst_16165__$1 == null);
var state_16212__$1 = (function (){var statearr_16220 = state_16212;
(statearr_16220[(7)] = inst_16165__$1);

(statearr_16220[(14)] = inst_16166);

(statearr_16220[(13)] = inst_16167__$1);

return statearr_16220;
})();
if(cljs.core.truth_(inst_16167__$1)){
var statearr_16221_17174 = state_16212__$1;
(statearr_16221_17174[(1)] = (5));

} else {
var statearr_16222_17175 = state_16212__$1;
(statearr_16222_17175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (15))){
var inst_16157 = (state_16212[(15)]);
var inst_16186 = (state_16212[(16)]);
var inst_16186__$1 = cljs.core.empty_QMARK_(inst_16157);
var state_16212__$1 = (function (){var statearr_16223 = state_16212;
(statearr_16223[(16)] = inst_16186__$1);

return statearr_16223;
})();
if(inst_16186__$1){
var statearr_16224_17176 = state_16212__$1;
(statearr_16224_17176[(1)] = (17));

} else {
var statearr_16225_17177 = state_16212__$1;
(statearr_16225_17177[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (21))){
var inst_16156 = (state_16212[(12)]);
var inst_16153 = inst_16156;
var state_16212__$1 = (function (){var statearr_16226 = state_16212;
(statearr_16226[(11)] = inst_16153);

return statearr_16226;
})();
var statearr_16227_17178 = state_16212__$1;
(statearr_16227_17178[(2)] = null);

(statearr_16227_17178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (13))){
var inst_16179 = (state_16212[(2)]);
var inst_16180 = calc_state();
var inst_16153 = inst_16180;
var state_16212__$1 = (function (){var statearr_16228 = state_16212;
(statearr_16228[(17)] = inst_16179);

(statearr_16228[(11)] = inst_16153);

return statearr_16228;
})();
var statearr_16229_17179 = state_16212__$1;
(statearr_16229_17179[(2)] = null);

(statearr_16229_17179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (22))){
var inst_16206 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16230_17180 = state_16212__$1;
(statearr_16230_17180[(2)] = inst_16206);

(statearr_16230_17180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (6))){
var inst_16166 = (state_16212[(14)]);
var inst_16170 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16166,change);
var state_16212__$1 = state_16212;
var statearr_16231_17181 = state_16212__$1;
(statearr_16231_17181[(2)] = inst_16170);

(statearr_16231_17181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (25))){
var state_16212__$1 = state_16212;
var statearr_16232_17182 = state_16212__$1;
(statearr_16232_17182[(2)] = null);

(statearr_16232_17182[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (17))){
var inst_16158 = (state_16212[(18)]);
var inst_16166 = (state_16212[(14)]);
var inst_16188 = (inst_16158.cljs$core$IFn$_invoke$arity$1 ? inst_16158.cljs$core$IFn$_invoke$arity$1(inst_16166) : inst_16158.call(null,inst_16166));
var inst_16189 = cljs.core.not(inst_16188);
var state_16212__$1 = state_16212;
var statearr_16233_17183 = state_16212__$1;
(statearr_16233_17183[(2)] = inst_16189);

(statearr_16233_17183[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (3))){
var inst_16210 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16212__$1,inst_16210);
} else {
if((state_val_16213 === (12))){
var state_16212__$1 = state_16212;
var statearr_16234_17185 = state_16212__$1;
(statearr_16234_17185[(2)] = null);

(statearr_16234_17185[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (2))){
var inst_16153 = (state_16212[(11)]);
var inst_16156 = (state_16212[(12)]);
var inst_16156__$1 = cljs.core.__destructure_map(inst_16153);
var inst_16157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16156__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16156__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16156__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16212__$1 = (function (){var statearr_16235 = state_16212;
(statearr_16235[(12)] = inst_16156__$1);

(statearr_16235[(15)] = inst_16157);

(statearr_16235[(18)] = inst_16158);

return statearr_16235;
})();
return cljs.core.async.ioc_alts_BANG_(state_16212__$1,(4),inst_16159);
} else {
if((state_val_16213 === (23))){
var inst_16197 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
if(cljs.core.truth_(inst_16197)){
var statearr_16236_17187 = state_16212__$1;
(statearr_16236_17187[(1)] = (24));

} else {
var statearr_16237_17188 = state_16212__$1;
(statearr_16237_17188[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (19))){
var inst_16192 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16238_17189 = state_16212__$1;
(statearr_16238_17189[(2)] = inst_16192);

(statearr_16238_17189[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (11))){
var inst_16166 = (state_16212[(14)]);
var inst_16176 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16166);
var state_16212__$1 = state_16212;
var statearr_16239_17190 = state_16212__$1;
(statearr_16239_17190[(2)] = inst_16176);

(statearr_16239_17190[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (9))){
var inst_16157 = (state_16212[(15)]);
var inst_16166 = (state_16212[(14)]);
var inst_16183 = (state_16212[(19)]);
var inst_16183__$1 = (inst_16157.cljs$core$IFn$_invoke$arity$1 ? inst_16157.cljs$core$IFn$_invoke$arity$1(inst_16166) : inst_16157.call(null,inst_16166));
var state_16212__$1 = (function (){var statearr_16240 = state_16212;
(statearr_16240[(19)] = inst_16183__$1);

return statearr_16240;
})();
if(cljs.core.truth_(inst_16183__$1)){
var statearr_16241_17191 = state_16212__$1;
(statearr_16241_17191[(1)] = (14));

} else {
var statearr_16242_17192 = state_16212__$1;
(statearr_16242_17192[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (5))){
var inst_16167 = (state_16212[(13)]);
var state_16212__$1 = state_16212;
var statearr_16243_17193 = state_16212__$1;
(statearr_16243_17193[(2)] = inst_16167);

(statearr_16243_17193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (14))){
var inst_16183 = (state_16212[(19)]);
var state_16212__$1 = state_16212;
var statearr_16244_17194 = state_16212__$1;
(statearr_16244_17194[(2)] = inst_16183);

(statearr_16244_17194[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (26))){
var inst_16202 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16245_17195 = state_16212__$1;
(statearr_16245_17195[(2)] = inst_16202);

(statearr_16245_17195[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (16))){
var inst_16194 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
if(cljs.core.truth_(inst_16194)){
var statearr_16246_17200 = state_16212__$1;
(statearr_16246_17200[(1)] = (20));

} else {
var statearr_16247_17201 = state_16212__$1;
(statearr_16247_17201[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (10))){
var inst_16208 = (state_16212[(2)]);
var state_16212__$1 = state_16212;
var statearr_16248_17202 = state_16212__$1;
(statearr_16248_17202[(2)] = inst_16208);

(statearr_16248_17202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (18))){
var inst_16186 = (state_16212[(16)]);
var state_16212__$1 = state_16212;
var statearr_16249_17203 = state_16212__$1;
(statearr_16249_17203[(2)] = inst_16186);

(statearr_16249_17203[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16213 === (8))){
var inst_16165 = (state_16212[(7)]);
var inst_16174 = (inst_16165 == null);
var state_16212__$1 = state_16212;
if(cljs.core.truth_(inst_16174)){
var statearr_16250_17204 = state_16212__$1;
(statearr_16250_17204[(1)] = (11));

} else {
var statearr_16251_17205 = state_16212__$1;
(statearr_16251_17205[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__15409__auto__ = null;
var cljs$core$async$mix_$_state_machine__15409__auto____0 = (function (){
var statearr_16252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16252[(0)] = cljs$core$async$mix_$_state_machine__15409__auto__);

(statearr_16252[(1)] = (1));

return statearr_16252;
});
var cljs$core$async$mix_$_state_machine__15409__auto____1 = (function (state_16212){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_16212);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e16253){var ex__15412__auto__ = e16253;
var statearr_16254_17210 = state_16212;
(statearr_16254_17210[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_16212[(4)]))){
var statearr_16255_17212 = state_16212;
(statearr_16255_17212[(1)] = cljs.core.first((state_16212[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17213 = state_16212;
state_16212 = G__17213;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15409__auto__ = function(state_16212){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15409__auto____1.call(this,state_16212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15409__auto____0;
cljs$core$async$mix_$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15409__auto____1;
return cljs$core$async$mix_$_state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_16256 = f__15445__auto__();
(statearr_16256[(6)] = c__15444__auto___17169);

return statearr_16256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17218 = (function (p,v,ch,close_QMARK_){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5520__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5518__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5518__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17218(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17222 = (function (p,v,ch){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5520__auto__.call(null,p,v,ch));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5518__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17222(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17223 = (function() {
var G__17224 = null;
var G__17224__1 = (function (p){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5520__auto__.call(null,p));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5518__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17224__2 = (function (p,v){
var x__5519__auto__ = (((p == null))?null:p);
var m__5520__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5520__auto__.call(null,p,v));
} else {
var m__5518__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5518__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17224 = function(p,v){
switch(arguments.length){
case 1:
return G__17224__1.call(this,p);
case 2:
return G__17224__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17224.cljs$core$IFn$_invoke$arity$1 = G__17224__1;
G__17224.cljs$core$IFn$_invoke$arity$2 = G__17224__2;
return G__17224;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16258 = arguments.length;
switch (G__16258) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17223(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17223(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16262 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16263){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16263 = meta16263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16264,meta16263__$1){
var self__ = this;
var _16264__$1 = this;
return (new cljs.core.async.t_cljs$core$async16262(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16263__$1));
}));

(cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16264){
var self__ = this;
var _16264__$1 = this;
return self__.meta16263;
}));

(cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16263","meta16263",-903947025,null)], null);
}));

(cljs.core.async.t_cljs$core$async16262.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16262");

(cljs.core.async.t_cljs$core$async16262.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16262");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16262.
 */
cljs.core.async.__GT_t_cljs$core$async16262 = (function cljs$core$async$__GT_t_cljs$core$async16262(ch,topic_fn,buf_fn,mults,ensure_mult,meta16263){
return (new cljs.core.async.t_cljs$core$async16262(ch,topic_fn,buf_fn,mults,ensure_mult,meta16263));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16261 = arguments.length;
switch (G__16261) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5162__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16259_SHARP_){
if(cljs.core.truth_((p1__16259_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16259_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16259_SHARP_.call(null,topic)))){
return p1__16259_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16259_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16262(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15444__auto___17247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_16336){
var state_val_16337 = (state_16336[(1)]);
if((state_val_16337 === (7))){
var inst_16332 = (state_16336[(2)]);
var state_16336__$1 = state_16336;
var statearr_16338_17248 = state_16336__$1;
(statearr_16338_17248[(2)] = inst_16332);

(statearr_16338_17248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (20))){
var state_16336__$1 = state_16336;
var statearr_16339_17249 = state_16336__$1;
(statearr_16339_17249[(2)] = null);

(statearr_16339_17249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (1))){
var state_16336__$1 = state_16336;
var statearr_16340_17251 = state_16336__$1;
(statearr_16340_17251[(2)] = null);

(statearr_16340_17251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (24))){
var inst_16315 = (state_16336[(7)]);
var inst_16324 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16315);
var state_16336__$1 = state_16336;
var statearr_16341_17255 = state_16336__$1;
(statearr_16341_17255[(2)] = inst_16324);

(statearr_16341_17255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (4))){
var inst_16267 = (state_16336[(8)]);
var inst_16267__$1 = (state_16336[(2)]);
var inst_16268 = (inst_16267__$1 == null);
var state_16336__$1 = (function (){var statearr_16342 = state_16336;
(statearr_16342[(8)] = inst_16267__$1);

return statearr_16342;
})();
if(cljs.core.truth_(inst_16268)){
var statearr_16343_17257 = state_16336__$1;
(statearr_16343_17257[(1)] = (5));

} else {
var statearr_16344_17258 = state_16336__$1;
(statearr_16344_17258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (15))){
var inst_16309 = (state_16336[(2)]);
var state_16336__$1 = state_16336;
var statearr_16345_17259 = state_16336__$1;
(statearr_16345_17259[(2)] = inst_16309);

(statearr_16345_17259[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (21))){
var inst_16329 = (state_16336[(2)]);
var state_16336__$1 = (function (){var statearr_16346 = state_16336;
(statearr_16346[(9)] = inst_16329);

return statearr_16346;
})();
var statearr_16347_17260 = state_16336__$1;
(statearr_16347_17260[(2)] = null);

(statearr_16347_17260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (13))){
var inst_16291 = (state_16336[(10)]);
var inst_16293 = cljs.core.chunked_seq_QMARK_(inst_16291);
var state_16336__$1 = state_16336;
if(inst_16293){
var statearr_16348_17261 = state_16336__$1;
(statearr_16348_17261[(1)] = (16));

} else {
var statearr_16349_17262 = state_16336__$1;
(statearr_16349_17262[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (22))){
var inst_16321 = (state_16336[(2)]);
var state_16336__$1 = state_16336;
if(cljs.core.truth_(inst_16321)){
var statearr_16350_17263 = state_16336__$1;
(statearr_16350_17263[(1)] = (23));

} else {
var statearr_16351_17264 = state_16336__$1;
(statearr_16351_17264[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (6))){
var inst_16267 = (state_16336[(8)]);
var inst_16315 = (state_16336[(7)]);
var inst_16317 = (state_16336[(11)]);
var inst_16315__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16267) : topic_fn.call(null,inst_16267));
var inst_16316 = cljs.core.deref(mults);
var inst_16317__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16316,inst_16315__$1);
var state_16336__$1 = (function (){var statearr_16352 = state_16336;
(statearr_16352[(7)] = inst_16315__$1);

(statearr_16352[(11)] = inst_16317__$1);

return statearr_16352;
})();
if(cljs.core.truth_(inst_16317__$1)){
var statearr_16353_17269 = state_16336__$1;
(statearr_16353_17269[(1)] = (19));

} else {
var statearr_16354_17270 = state_16336__$1;
(statearr_16354_17270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (25))){
var inst_16326 = (state_16336[(2)]);
var state_16336__$1 = state_16336;
var statearr_16355_17271 = state_16336__$1;
(statearr_16355_17271[(2)] = inst_16326);

(statearr_16355_17271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (17))){
var inst_16291 = (state_16336[(10)]);
var inst_16300 = cljs.core.first(inst_16291);
var inst_16301 = cljs.core.async.muxch_STAR_(inst_16300);
var inst_16302 = cljs.core.async.close_BANG_(inst_16301);
var inst_16303 = cljs.core.next(inst_16291);
var inst_16277 = inst_16303;
var inst_16278 = null;
var inst_16279 = (0);
var inst_16280 = (0);
var state_16336__$1 = (function (){var statearr_16356 = state_16336;
(statearr_16356[(12)] = inst_16302);

(statearr_16356[(13)] = inst_16277);

(statearr_16356[(14)] = inst_16278);

(statearr_16356[(15)] = inst_16279);

(statearr_16356[(16)] = inst_16280);

return statearr_16356;
})();
var statearr_16357_17272 = state_16336__$1;
(statearr_16357_17272[(2)] = null);

(statearr_16357_17272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (3))){
var inst_16334 = (state_16336[(2)]);
var state_16336__$1 = state_16336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16336__$1,inst_16334);
} else {
if((state_val_16337 === (12))){
var inst_16311 = (state_16336[(2)]);
var state_16336__$1 = state_16336;
var statearr_16358_17273 = state_16336__$1;
(statearr_16358_17273[(2)] = inst_16311);

(statearr_16358_17273[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (2))){
var state_16336__$1 = state_16336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16336__$1,(4),ch);
} else {
if((state_val_16337 === (23))){
var state_16336__$1 = state_16336;
var statearr_16359_17275 = state_16336__$1;
(statearr_16359_17275[(2)] = null);

(statearr_16359_17275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (19))){
var inst_16317 = (state_16336[(11)]);
var inst_16267 = (state_16336[(8)]);
var inst_16319 = cljs.core.async.muxch_STAR_(inst_16317);
var state_16336__$1 = state_16336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16336__$1,(22),inst_16319,inst_16267);
} else {
if((state_val_16337 === (11))){
var inst_16277 = (state_16336[(13)]);
var inst_16291 = (state_16336[(10)]);
var inst_16291__$1 = cljs.core.seq(inst_16277);
var state_16336__$1 = (function (){var statearr_16360 = state_16336;
(statearr_16360[(10)] = inst_16291__$1);

return statearr_16360;
})();
if(inst_16291__$1){
var statearr_16361_17276 = state_16336__$1;
(statearr_16361_17276[(1)] = (13));

} else {
var statearr_16362_17277 = state_16336__$1;
(statearr_16362_17277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (9))){
var inst_16313 = (state_16336[(2)]);
var state_16336__$1 = state_16336;
var statearr_16363_17278 = state_16336__$1;
(statearr_16363_17278[(2)] = inst_16313);

(statearr_16363_17278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (5))){
var inst_16274 = cljs.core.deref(mults);
var inst_16275 = cljs.core.vals(inst_16274);
var inst_16276 = cljs.core.seq(inst_16275);
var inst_16277 = inst_16276;
var inst_16278 = null;
var inst_16279 = (0);
var inst_16280 = (0);
var state_16336__$1 = (function (){var statearr_16364 = state_16336;
(statearr_16364[(13)] = inst_16277);

(statearr_16364[(14)] = inst_16278);

(statearr_16364[(15)] = inst_16279);

(statearr_16364[(16)] = inst_16280);

return statearr_16364;
})();
var statearr_16365_17279 = state_16336__$1;
(statearr_16365_17279[(2)] = null);

(statearr_16365_17279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (14))){
var state_16336__$1 = state_16336;
var statearr_16369_17280 = state_16336__$1;
(statearr_16369_17280[(2)] = null);

(statearr_16369_17280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (16))){
var inst_16291 = (state_16336[(10)]);
var inst_16295 = cljs.core.chunk_first(inst_16291);
var inst_16296 = cljs.core.chunk_rest(inst_16291);
var inst_16297 = cljs.core.count(inst_16295);
var inst_16277 = inst_16296;
var inst_16278 = inst_16295;
var inst_16279 = inst_16297;
var inst_16280 = (0);
var state_16336__$1 = (function (){var statearr_16370 = state_16336;
(statearr_16370[(13)] = inst_16277);

(statearr_16370[(14)] = inst_16278);

(statearr_16370[(15)] = inst_16279);

(statearr_16370[(16)] = inst_16280);

return statearr_16370;
})();
var statearr_16371_17281 = state_16336__$1;
(statearr_16371_17281[(2)] = null);

(statearr_16371_17281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (10))){
var inst_16278 = (state_16336[(14)]);
var inst_16280 = (state_16336[(16)]);
var inst_16277 = (state_16336[(13)]);
var inst_16279 = (state_16336[(15)]);
var inst_16285 = cljs.core._nth(inst_16278,inst_16280);
var inst_16286 = cljs.core.async.muxch_STAR_(inst_16285);
var inst_16287 = cljs.core.async.close_BANG_(inst_16286);
var inst_16288 = (inst_16280 + (1));
var tmp16366 = inst_16279;
var tmp16367 = inst_16278;
var tmp16368 = inst_16277;
var inst_16277__$1 = tmp16368;
var inst_16278__$1 = tmp16367;
var inst_16279__$1 = tmp16366;
var inst_16280__$1 = inst_16288;
var state_16336__$1 = (function (){var statearr_16372 = state_16336;
(statearr_16372[(17)] = inst_16287);

(statearr_16372[(13)] = inst_16277__$1);

(statearr_16372[(14)] = inst_16278__$1);

(statearr_16372[(15)] = inst_16279__$1);

(statearr_16372[(16)] = inst_16280__$1);

return statearr_16372;
})();
var statearr_16373_17282 = state_16336__$1;
(statearr_16373_17282[(2)] = null);

(statearr_16373_17282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (18))){
var inst_16306 = (state_16336[(2)]);
var state_16336__$1 = state_16336;
var statearr_16374_17283 = state_16336__$1;
(statearr_16374_17283[(2)] = inst_16306);

(statearr_16374_17283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16337 === (8))){
var inst_16280 = (state_16336[(16)]);
var inst_16279 = (state_16336[(15)]);
var inst_16282 = (inst_16280 < inst_16279);
var inst_16283 = inst_16282;
var state_16336__$1 = state_16336;
if(cljs.core.truth_(inst_16283)){
var statearr_16375_17284 = state_16336__$1;
(statearr_16375_17284[(1)] = (10));

} else {
var statearr_16376_17285 = state_16336__$1;
(statearr_16376_17285[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15409__auto__ = null;
var cljs$core$async$state_machine__15409__auto____0 = (function (){
var statearr_16377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16377[(0)] = cljs$core$async$state_machine__15409__auto__);

(statearr_16377[(1)] = (1));

return statearr_16377;
});
var cljs$core$async$state_machine__15409__auto____1 = (function (state_16336){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_16336);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e16378){var ex__15412__auto__ = e16378;
var statearr_16379_17294 = state_16336;
(statearr_16379_17294[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_16336[(4)]))){
var statearr_16380_17295 = state_16336;
(statearr_16380_17295[(1)] = cljs.core.first((state_16336[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17297 = state_16336;
state_16336 = G__17297;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$state_machine__15409__auto__ = function(state_16336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15409__auto____1.call(this,state_16336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15409__auto____0;
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15409__auto____1;
return cljs$core$async$state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_16381 = f__15445__auto__();
(statearr_16381[(6)] = c__15444__auto___17247);

return statearr_16381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16383 = arguments.length;
switch (G__16383) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16385 = arguments.length;
switch (G__16385) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16387 = arguments.length;
switch (G__16387) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15444__auto___17301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_16430){
var state_val_16431 = (state_16430[(1)]);
if((state_val_16431 === (7))){
var state_16430__$1 = state_16430;
var statearr_16432_17302 = state_16430__$1;
(statearr_16432_17302[(2)] = null);

(statearr_16432_17302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (1))){
var state_16430__$1 = state_16430;
var statearr_16433_17303 = state_16430__$1;
(statearr_16433_17303[(2)] = null);

(statearr_16433_17303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (4))){
var inst_16391 = (state_16430[(7)]);
var inst_16390 = (state_16430[(8)]);
var inst_16393 = (inst_16391 < inst_16390);
var state_16430__$1 = state_16430;
if(cljs.core.truth_(inst_16393)){
var statearr_16434_17304 = state_16430__$1;
(statearr_16434_17304[(1)] = (6));

} else {
var statearr_16435_17305 = state_16430__$1;
(statearr_16435_17305[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (15))){
var inst_16416 = (state_16430[(9)]);
var inst_16421 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16416);
var state_16430__$1 = state_16430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16430__$1,(17),out,inst_16421);
} else {
if((state_val_16431 === (13))){
var inst_16416 = (state_16430[(9)]);
var inst_16416__$1 = (state_16430[(2)]);
var inst_16417 = cljs.core.some(cljs.core.nil_QMARK_,inst_16416__$1);
var state_16430__$1 = (function (){var statearr_16436 = state_16430;
(statearr_16436[(9)] = inst_16416__$1);

return statearr_16436;
})();
if(cljs.core.truth_(inst_16417)){
var statearr_16437_17306 = state_16430__$1;
(statearr_16437_17306[(1)] = (14));

} else {
var statearr_16438_17307 = state_16430__$1;
(statearr_16438_17307[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (6))){
var state_16430__$1 = state_16430;
var statearr_16439_17308 = state_16430__$1;
(statearr_16439_17308[(2)] = null);

(statearr_16439_17308[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (17))){
var inst_16423 = (state_16430[(2)]);
var state_16430__$1 = (function (){var statearr_16441 = state_16430;
(statearr_16441[(10)] = inst_16423);

return statearr_16441;
})();
var statearr_16442_17309 = state_16430__$1;
(statearr_16442_17309[(2)] = null);

(statearr_16442_17309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (3))){
var inst_16428 = (state_16430[(2)]);
var state_16430__$1 = state_16430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16430__$1,inst_16428);
} else {
if((state_val_16431 === (12))){
var _ = (function (){var statearr_16443 = state_16430;
(statearr_16443[(4)] = cljs.core.rest((state_16430[(4)])));

return statearr_16443;
})();
var state_16430__$1 = state_16430;
var ex16440 = (state_16430__$1[(2)]);
var statearr_16444_17310 = state_16430__$1;
(statearr_16444_17310[(5)] = ex16440);


if((ex16440 instanceof Object)){
var statearr_16445_17311 = state_16430__$1;
(statearr_16445_17311[(1)] = (11));

(statearr_16445_17311[(5)] = null);

} else {
throw ex16440;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (2))){
var inst_16389 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16390 = cnt;
var inst_16391 = (0);
var state_16430__$1 = (function (){var statearr_16446 = state_16430;
(statearr_16446[(11)] = inst_16389);

(statearr_16446[(8)] = inst_16390);

(statearr_16446[(7)] = inst_16391);

return statearr_16446;
})();
var statearr_16447_17312 = state_16430__$1;
(statearr_16447_17312[(2)] = null);

(statearr_16447_17312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (11))){
var inst_16395 = (state_16430[(2)]);
var inst_16396 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16430__$1 = (function (){var statearr_16448 = state_16430;
(statearr_16448[(12)] = inst_16395);

return statearr_16448;
})();
var statearr_16449_17313 = state_16430__$1;
(statearr_16449_17313[(2)] = inst_16396);

(statearr_16449_17313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (9))){
var inst_16391 = (state_16430[(7)]);
var _ = (function (){var statearr_16450 = state_16430;
(statearr_16450[(4)] = cljs.core.cons((12),(state_16430[(4)])));

return statearr_16450;
})();
var inst_16402 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16391) : chs__$1.call(null,inst_16391));
var inst_16403 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16391) : done.call(null,inst_16391));
var inst_16404 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16402,inst_16403);
var ___$1 = (function (){var statearr_16451 = state_16430;
(statearr_16451[(4)] = cljs.core.rest((state_16430[(4)])));

return statearr_16451;
})();
var state_16430__$1 = state_16430;
var statearr_16452_17314 = state_16430__$1;
(statearr_16452_17314[(2)] = inst_16404);

(statearr_16452_17314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (5))){
var inst_16414 = (state_16430[(2)]);
var state_16430__$1 = (function (){var statearr_16453 = state_16430;
(statearr_16453[(13)] = inst_16414);

return statearr_16453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16430__$1,(13),dchan);
} else {
if((state_val_16431 === (14))){
var inst_16419 = cljs.core.async.close_BANG_(out);
var state_16430__$1 = state_16430;
var statearr_16454_17315 = state_16430__$1;
(statearr_16454_17315[(2)] = inst_16419);

(statearr_16454_17315[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (16))){
var inst_16426 = (state_16430[(2)]);
var state_16430__$1 = state_16430;
var statearr_16455_17316 = state_16430__$1;
(statearr_16455_17316[(2)] = inst_16426);

(statearr_16455_17316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (10))){
var inst_16391 = (state_16430[(7)]);
var inst_16407 = (state_16430[(2)]);
var inst_16408 = (inst_16391 + (1));
var inst_16391__$1 = inst_16408;
var state_16430__$1 = (function (){var statearr_16456 = state_16430;
(statearr_16456[(14)] = inst_16407);

(statearr_16456[(7)] = inst_16391__$1);

return statearr_16456;
})();
var statearr_16457_17317 = state_16430__$1;
(statearr_16457_17317[(2)] = null);

(statearr_16457_17317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16431 === (8))){
var inst_16412 = (state_16430[(2)]);
var state_16430__$1 = state_16430;
var statearr_16458_17318 = state_16430__$1;
(statearr_16458_17318[(2)] = inst_16412);

(statearr_16458_17318[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15409__auto__ = null;
var cljs$core$async$state_machine__15409__auto____0 = (function (){
var statearr_16459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16459[(0)] = cljs$core$async$state_machine__15409__auto__);

(statearr_16459[(1)] = (1));

return statearr_16459;
});
var cljs$core$async$state_machine__15409__auto____1 = (function (state_16430){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_16430);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e16460){var ex__15412__auto__ = e16460;
var statearr_16461_17319 = state_16430;
(statearr_16461_17319[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_16430[(4)]))){
var statearr_16462_17320 = state_16430;
(statearr_16462_17320[(1)] = cljs.core.first((state_16430[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17321 = state_16430;
state_16430 = G__17321;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$state_machine__15409__auto__ = function(state_16430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15409__auto____1.call(this,state_16430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15409__auto____0;
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15409__auto____1;
return cljs$core$async$state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_16463 = f__15445__auto__();
(statearr_16463[(6)] = c__15444__auto___17301);

return statearr_16463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16466 = arguments.length;
switch (G__16466) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15444__auto___17323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_16498){
var state_val_16499 = (state_16498[(1)]);
if((state_val_16499 === (7))){
var inst_16477 = (state_16498[(7)]);
var inst_16478 = (state_16498[(8)]);
var inst_16477__$1 = (state_16498[(2)]);
var inst_16478__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16477__$1,(0),null);
var inst_16479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16477__$1,(1),null);
var inst_16480 = (inst_16478__$1 == null);
var state_16498__$1 = (function (){var statearr_16500 = state_16498;
(statearr_16500[(7)] = inst_16477__$1);

(statearr_16500[(8)] = inst_16478__$1);

(statearr_16500[(9)] = inst_16479);

return statearr_16500;
})();
if(cljs.core.truth_(inst_16480)){
var statearr_16501_17324 = state_16498__$1;
(statearr_16501_17324[(1)] = (8));

} else {
var statearr_16502_17325 = state_16498__$1;
(statearr_16502_17325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (1))){
var inst_16467 = cljs.core.vec(chs);
var inst_16468 = inst_16467;
var state_16498__$1 = (function (){var statearr_16503 = state_16498;
(statearr_16503[(10)] = inst_16468);

return statearr_16503;
})();
var statearr_16504_17326 = state_16498__$1;
(statearr_16504_17326[(2)] = null);

(statearr_16504_17326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (4))){
var inst_16468 = (state_16498[(10)]);
var state_16498__$1 = state_16498;
return cljs.core.async.ioc_alts_BANG_(state_16498__$1,(7),inst_16468);
} else {
if((state_val_16499 === (6))){
var inst_16494 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16505_17327 = state_16498__$1;
(statearr_16505_17327[(2)] = inst_16494);

(statearr_16505_17327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (3))){
var inst_16496 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16498__$1,inst_16496);
} else {
if((state_val_16499 === (2))){
var inst_16468 = (state_16498[(10)]);
var inst_16470 = cljs.core.count(inst_16468);
var inst_16471 = (inst_16470 > (0));
var state_16498__$1 = state_16498;
if(cljs.core.truth_(inst_16471)){
var statearr_16507_17328 = state_16498__$1;
(statearr_16507_17328[(1)] = (4));

} else {
var statearr_16508_17329 = state_16498__$1;
(statearr_16508_17329[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (11))){
var inst_16468 = (state_16498[(10)]);
var inst_16487 = (state_16498[(2)]);
var tmp16506 = inst_16468;
var inst_16468__$1 = tmp16506;
var state_16498__$1 = (function (){var statearr_16509 = state_16498;
(statearr_16509[(11)] = inst_16487);

(statearr_16509[(10)] = inst_16468__$1);

return statearr_16509;
})();
var statearr_16510_17330 = state_16498__$1;
(statearr_16510_17330[(2)] = null);

(statearr_16510_17330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (9))){
var inst_16478 = (state_16498[(8)]);
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16498__$1,(11),out,inst_16478);
} else {
if((state_val_16499 === (5))){
var inst_16492 = cljs.core.async.close_BANG_(out);
var state_16498__$1 = state_16498;
var statearr_16511_17331 = state_16498__$1;
(statearr_16511_17331[(2)] = inst_16492);

(statearr_16511_17331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (10))){
var inst_16490 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16512_17332 = state_16498__$1;
(statearr_16512_17332[(2)] = inst_16490);

(statearr_16512_17332[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (8))){
var inst_16468 = (state_16498[(10)]);
var inst_16477 = (state_16498[(7)]);
var inst_16478 = (state_16498[(8)]);
var inst_16479 = (state_16498[(9)]);
var inst_16482 = (function (){var cs = inst_16468;
var vec__16473 = inst_16477;
var v = inst_16478;
var c = inst_16479;
return (function (p1__16464_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16464_SHARP_);
});
})();
var inst_16483 = cljs.core.filterv(inst_16482,inst_16468);
var inst_16468__$1 = inst_16483;
var state_16498__$1 = (function (){var statearr_16513 = state_16498;
(statearr_16513[(10)] = inst_16468__$1);

return statearr_16513;
})();
var statearr_16514_17333 = state_16498__$1;
(statearr_16514_17333[(2)] = null);

(statearr_16514_17333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15409__auto__ = null;
var cljs$core$async$state_machine__15409__auto____0 = (function (){
var statearr_16515 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16515[(0)] = cljs$core$async$state_machine__15409__auto__);

(statearr_16515[(1)] = (1));

return statearr_16515;
});
var cljs$core$async$state_machine__15409__auto____1 = (function (state_16498){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_16498);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e16516){var ex__15412__auto__ = e16516;
var statearr_16517_17334 = state_16498;
(statearr_16517_17334[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_16498[(4)]))){
var statearr_16518_17335 = state_16498;
(statearr_16518_17335[(1)] = cljs.core.first((state_16498[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17336 = state_16498;
state_16498 = G__17336;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$state_machine__15409__auto__ = function(state_16498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15409__auto____1.call(this,state_16498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15409__auto____0;
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15409__auto____1;
return cljs$core$async$state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_16519 = f__15445__auto__();
(statearr_16519[(6)] = c__15444__auto___17323);

return statearr_16519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16521 = arguments.length;
switch (G__16521) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15444__auto___17339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_16545){
var state_val_16546 = (state_16545[(1)]);
if((state_val_16546 === (7))){
var inst_16527 = (state_16545[(7)]);
var inst_16527__$1 = (state_16545[(2)]);
var inst_16528 = (inst_16527__$1 == null);
var inst_16529 = cljs.core.not(inst_16528);
var state_16545__$1 = (function (){var statearr_16547 = state_16545;
(statearr_16547[(7)] = inst_16527__$1);

return statearr_16547;
})();
if(inst_16529){
var statearr_16548_17340 = state_16545__$1;
(statearr_16548_17340[(1)] = (8));

} else {
var statearr_16549_17341 = state_16545__$1;
(statearr_16549_17341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (1))){
var inst_16522 = (0);
var state_16545__$1 = (function (){var statearr_16550 = state_16545;
(statearr_16550[(8)] = inst_16522);

return statearr_16550;
})();
var statearr_16551_17342 = state_16545__$1;
(statearr_16551_17342[(2)] = null);

(statearr_16551_17342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (4))){
var state_16545__$1 = state_16545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16545__$1,(7),ch);
} else {
if((state_val_16546 === (6))){
var inst_16540 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
var statearr_16552_17343 = state_16545__$1;
(statearr_16552_17343[(2)] = inst_16540);

(statearr_16552_17343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (3))){
var inst_16542 = (state_16545[(2)]);
var inst_16543 = cljs.core.async.close_BANG_(out);
var state_16545__$1 = (function (){var statearr_16553 = state_16545;
(statearr_16553[(9)] = inst_16542);

return statearr_16553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16545__$1,inst_16543);
} else {
if((state_val_16546 === (2))){
var inst_16522 = (state_16545[(8)]);
var inst_16524 = (inst_16522 < n);
var state_16545__$1 = state_16545;
if(cljs.core.truth_(inst_16524)){
var statearr_16554_17347 = state_16545__$1;
(statearr_16554_17347[(1)] = (4));

} else {
var statearr_16555_17348 = state_16545__$1;
(statearr_16555_17348[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (11))){
var inst_16522 = (state_16545[(8)]);
var inst_16532 = (state_16545[(2)]);
var inst_16533 = (inst_16522 + (1));
var inst_16522__$1 = inst_16533;
var state_16545__$1 = (function (){var statearr_16556 = state_16545;
(statearr_16556[(10)] = inst_16532);

(statearr_16556[(8)] = inst_16522__$1);

return statearr_16556;
})();
var statearr_16557_17349 = state_16545__$1;
(statearr_16557_17349[(2)] = null);

(statearr_16557_17349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (9))){
var state_16545__$1 = state_16545;
var statearr_16558_17350 = state_16545__$1;
(statearr_16558_17350[(2)] = null);

(statearr_16558_17350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (5))){
var state_16545__$1 = state_16545;
var statearr_16559_17351 = state_16545__$1;
(statearr_16559_17351[(2)] = null);

(statearr_16559_17351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (10))){
var inst_16537 = (state_16545[(2)]);
var state_16545__$1 = state_16545;
var statearr_16560_17353 = state_16545__$1;
(statearr_16560_17353[(2)] = inst_16537);

(statearr_16560_17353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16546 === (8))){
var inst_16527 = (state_16545[(7)]);
var state_16545__$1 = state_16545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16545__$1,(11),out,inst_16527);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15409__auto__ = null;
var cljs$core$async$state_machine__15409__auto____0 = (function (){
var statearr_16561 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16561[(0)] = cljs$core$async$state_machine__15409__auto__);

(statearr_16561[(1)] = (1));

return statearr_16561;
});
var cljs$core$async$state_machine__15409__auto____1 = (function (state_16545){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_16545);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e16562){var ex__15412__auto__ = e16562;
var statearr_16563_17354 = state_16545;
(statearr_16563_17354[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_16545[(4)]))){
var statearr_16564_17355 = state_16545;
(statearr_16564_17355[(1)] = cljs.core.first((state_16545[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17356 = state_16545;
state_16545 = G__17356;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$state_machine__15409__auto__ = function(state_16545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15409__auto____1.call(this,state_16545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15409__auto____0;
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15409__auto____1;
return cljs$core$async$state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_16565 = f__15445__auto__();
(statearr_16565[(6)] = c__15444__auto___17339);

return statearr_16565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16570 = (function (f,ch,meta16568,_,fn1,meta16571){
this.f = f;
this.ch = ch;
this.meta16568 = meta16568;
this._ = _;
this.fn1 = fn1;
this.meta16571 = meta16571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16572,meta16571__$1){
var self__ = this;
var _16572__$1 = this;
return (new cljs.core.async.t_cljs$core$async16570(self__.f,self__.ch,self__.meta16568,self__._,self__.fn1,meta16571__$1));
}));

(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16572){
var self__ = this;
var _16572__$1 = this;
return self__.meta16571;
}));

(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16570.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16566_SHARP_){
var G__16573 = (((p1__16566_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16566_SHARP_) : self__.f.call(null,p1__16566_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16573) : f1.call(null,G__16573));
});
}));

(cljs.core.async.t_cljs$core$async16570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16568","meta16568",662523978,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16567","cljs.core.async/t_cljs$core$async16567",798960286,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16571","meta16571",473838896,null)], null);
}));

(cljs.core.async.t_cljs$core$async16570.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16570");

(cljs.core.async.t_cljs$core$async16570.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16570");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16570.
 */
cljs.core.async.__GT_t_cljs$core$async16570 = (function cljs$core$async$__GT_t_cljs$core$async16570(f,ch,meta16568,_,fn1,meta16571){
return (new cljs.core.async.t_cljs$core$async16570(f,ch,meta16568,_,fn1,meta16571));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16567 = (function (f,ch,meta16568){
this.f = f;
this.ch = ch;
this.meta16568 = meta16568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16569,meta16568__$1){
var self__ = this;
var _16569__$1 = this;
return (new cljs.core.async.t_cljs$core$async16567(self__.f,self__.ch,meta16568__$1));
}));

(cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16569){
var self__ = this;
var _16569__$1 = this;
return self__.meta16568;
}));

(cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16570(self__.f,self__.ch,self__.meta16568,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5160__auto__ = ret;
if(cljs.core.truth_(and__5160__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5160__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16574 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16574) : self__.f.call(null,G__16574));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16567.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16568","meta16568",662523978,null)], null);
}));

(cljs.core.async.t_cljs$core$async16567.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16567");

(cljs.core.async.t_cljs$core$async16567.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16567");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16567.
 */
cljs.core.async.__GT_t_cljs$core$async16567 = (function cljs$core$async$__GT_t_cljs$core$async16567(f,ch,meta16568){
return (new cljs.core.async.t_cljs$core$async16567(f,ch,meta16568));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16567(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16575 = (function (f,ch,meta16576){
this.f = f;
this.ch = ch;
this.meta16576 = meta16576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16577,meta16576__$1){
var self__ = this;
var _16577__$1 = this;
return (new cljs.core.async.t_cljs$core$async16575(self__.f,self__.ch,meta16576__$1));
}));

(cljs.core.async.t_cljs$core$async16575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16577){
var self__ = this;
var _16577__$1 = this;
return self__.meta16576;
}));

(cljs.core.async.t_cljs$core$async16575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16576","meta16576",1932078423,null)], null);
}));

(cljs.core.async.t_cljs$core$async16575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16575");

(cljs.core.async.t_cljs$core$async16575.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16575.
 */
cljs.core.async.__GT_t_cljs$core$async16575 = (function cljs$core$async$__GT_t_cljs$core$async16575(f,ch,meta16576){
return (new cljs.core.async.t_cljs$core$async16575(f,ch,meta16576));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16575(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16578 = (function (p,ch,meta16579){
this.p = p;
this.ch = ch;
this.meta16579 = meta16579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16580,meta16579__$1){
var self__ = this;
var _16580__$1 = this;
return (new cljs.core.async.t_cljs$core$async16578(self__.p,self__.ch,meta16579__$1));
}));

(cljs.core.async.t_cljs$core$async16578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16580){
var self__ = this;
var _16580__$1 = this;
return self__.meta16579;
}));

(cljs.core.async.t_cljs$core$async16578.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16578.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16578.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16578.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16579","meta16579",-1626450908,null)], null);
}));

(cljs.core.async.t_cljs$core$async16578.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16578");

(cljs.core.async.t_cljs$core$async16578.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"cljs.core.async/t_cljs$core$async16578");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16578.
 */
cljs.core.async.__GT_t_cljs$core$async16578 = (function cljs$core$async$__GT_t_cljs$core$async16578(p,ch,meta16579){
return (new cljs.core.async.t_cljs$core$async16578(p,ch,meta16579));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16578(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16582 = arguments.length;
switch (G__16582) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15444__auto___17361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_16603){
var state_val_16604 = (state_16603[(1)]);
if((state_val_16604 === (7))){
var inst_16599 = (state_16603[(2)]);
var state_16603__$1 = state_16603;
var statearr_16605_17362 = state_16603__$1;
(statearr_16605_17362[(2)] = inst_16599);

(statearr_16605_17362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (1))){
var state_16603__$1 = state_16603;
var statearr_16606_17363 = state_16603__$1;
(statearr_16606_17363[(2)] = null);

(statearr_16606_17363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (4))){
var inst_16585 = (state_16603[(7)]);
var inst_16585__$1 = (state_16603[(2)]);
var inst_16586 = (inst_16585__$1 == null);
var state_16603__$1 = (function (){var statearr_16607 = state_16603;
(statearr_16607[(7)] = inst_16585__$1);

return statearr_16607;
})();
if(cljs.core.truth_(inst_16586)){
var statearr_16608_17364 = state_16603__$1;
(statearr_16608_17364[(1)] = (5));

} else {
var statearr_16609_17365 = state_16603__$1;
(statearr_16609_17365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (6))){
var inst_16585 = (state_16603[(7)]);
var inst_16590 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16585) : p.call(null,inst_16585));
var state_16603__$1 = state_16603;
if(cljs.core.truth_(inst_16590)){
var statearr_16610_17366 = state_16603__$1;
(statearr_16610_17366[(1)] = (8));

} else {
var statearr_16611_17367 = state_16603__$1;
(statearr_16611_17367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (3))){
var inst_16601 = (state_16603[(2)]);
var state_16603__$1 = state_16603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16603__$1,inst_16601);
} else {
if((state_val_16604 === (2))){
var state_16603__$1 = state_16603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16603__$1,(4),ch);
} else {
if((state_val_16604 === (11))){
var inst_16593 = (state_16603[(2)]);
var state_16603__$1 = state_16603;
var statearr_16612_17371 = state_16603__$1;
(statearr_16612_17371[(2)] = inst_16593);

(statearr_16612_17371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (9))){
var state_16603__$1 = state_16603;
var statearr_16613_17372 = state_16603__$1;
(statearr_16613_17372[(2)] = null);

(statearr_16613_17372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (5))){
var inst_16588 = cljs.core.async.close_BANG_(out);
var state_16603__$1 = state_16603;
var statearr_16614_17373 = state_16603__$1;
(statearr_16614_17373[(2)] = inst_16588);

(statearr_16614_17373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (10))){
var inst_16596 = (state_16603[(2)]);
var state_16603__$1 = (function (){var statearr_16615 = state_16603;
(statearr_16615[(8)] = inst_16596);

return statearr_16615;
})();
var statearr_16616_17374 = state_16603__$1;
(statearr_16616_17374[(2)] = null);

(statearr_16616_17374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16604 === (8))){
var inst_16585 = (state_16603[(7)]);
var state_16603__$1 = state_16603;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16603__$1,(11),out,inst_16585);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15409__auto__ = null;
var cljs$core$async$state_machine__15409__auto____0 = (function (){
var statearr_16617 = [null,null,null,null,null,null,null,null,null];
(statearr_16617[(0)] = cljs$core$async$state_machine__15409__auto__);

(statearr_16617[(1)] = (1));

return statearr_16617;
});
var cljs$core$async$state_machine__15409__auto____1 = (function (state_16603){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_16603);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e16618){var ex__15412__auto__ = e16618;
var statearr_16619_17375 = state_16603;
(statearr_16619_17375[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_16603[(4)]))){
var statearr_16620_17376 = state_16603;
(statearr_16620_17376[(1)] = cljs.core.first((state_16603[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17377 = state_16603;
state_16603 = G__17377;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$state_machine__15409__auto__ = function(state_16603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15409__auto____1.call(this,state_16603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15409__auto____0;
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15409__auto____1;
return cljs$core$async$state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_16621 = f__15445__auto__();
(statearr_16621[(6)] = c__15444__auto___17361);

return statearr_16621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16623 = arguments.length;
switch (G__16623) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15444__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_16685){
var state_val_16686 = (state_16685[(1)]);
if((state_val_16686 === (7))){
var inst_16681 = (state_16685[(2)]);
var state_16685__$1 = state_16685;
var statearr_16687_17379 = state_16685__$1;
(statearr_16687_17379[(2)] = inst_16681);

(statearr_16687_17379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (20))){
var inst_16651 = (state_16685[(7)]);
var inst_16662 = (state_16685[(2)]);
var inst_16663 = cljs.core.next(inst_16651);
var inst_16637 = inst_16663;
var inst_16638 = null;
var inst_16639 = (0);
var inst_16640 = (0);
var state_16685__$1 = (function (){var statearr_16688 = state_16685;
(statearr_16688[(8)] = inst_16662);

(statearr_16688[(9)] = inst_16637);

(statearr_16688[(10)] = inst_16638);

(statearr_16688[(11)] = inst_16639);

(statearr_16688[(12)] = inst_16640);

return statearr_16688;
})();
var statearr_16689_17380 = state_16685__$1;
(statearr_16689_17380[(2)] = null);

(statearr_16689_17380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (1))){
var state_16685__$1 = state_16685;
var statearr_16690_17381 = state_16685__$1;
(statearr_16690_17381[(2)] = null);

(statearr_16690_17381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (4))){
var inst_16626 = (state_16685[(13)]);
var inst_16626__$1 = (state_16685[(2)]);
var inst_16627 = (inst_16626__$1 == null);
var state_16685__$1 = (function (){var statearr_16691 = state_16685;
(statearr_16691[(13)] = inst_16626__$1);

return statearr_16691;
})();
if(cljs.core.truth_(inst_16627)){
var statearr_16692_17382 = state_16685__$1;
(statearr_16692_17382[(1)] = (5));

} else {
var statearr_16693_17383 = state_16685__$1;
(statearr_16693_17383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (15))){
var state_16685__$1 = state_16685;
var statearr_16697_17384 = state_16685__$1;
(statearr_16697_17384[(2)] = null);

(statearr_16697_17384[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (21))){
var state_16685__$1 = state_16685;
var statearr_16698_17385 = state_16685__$1;
(statearr_16698_17385[(2)] = null);

(statearr_16698_17385[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (13))){
var inst_16640 = (state_16685[(12)]);
var inst_16637 = (state_16685[(9)]);
var inst_16638 = (state_16685[(10)]);
var inst_16639 = (state_16685[(11)]);
var inst_16647 = (state_16685[(2)]);
var inst_16648 = (inst_16640 + (1));
var tmp16694 = inst_16637;
var tmp16695 = inst_16638;
var tmp16696 = inst_16639;
var inst_16637__$1 = tmp16694;
var inst_16638__$1 = tmp16695;
var inst_16639__$1 = tmp16696;
var inst_16640__$1 = inst_16648;
var state_16685__$1 = (function (){var statearr_16699 = state_16685;
(statearr_16699[(14)] = inst_16647);

(statearr_16699[(9)] = inst_16637__$1);

(statearr_16699[(10)] = inst_16638__$1);

(statearr_16699[(11)] = inst_16639__$1);

(statearr_16699[(12)] = inst_16640__$1);

return statearr_16699;
})();
var statearr_16700_17386 = state_16685__$1;
(statearr_16700_17386[(2)] = null);

(statearr_16700_17386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (22))){
var state_16685__$1 = state_16685;
var statearr_16701_17387 = state_16685__$1;
(statearr_16701_17387[(2)] = null);

(statearr_16701_17387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (6))){
var inst_16626 = (state_16685[(13)]);
var inst_16635 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16626) : f.call(null,inst_16626));
var inst_16636 = cljs.core.seq(inst_16635);
var inst_16637 = inst_16636;
var inst_16638 = null;
var inst_16639 = (0);
var inst_16640 = (0);
var state_16685__$1 = (function (){var statearr_16702 = state_16685;
(statearr_16702[(9)] = inst_16637);

(statearr_16702[(10)] = inst_16638);

(statearr_16702[(11)] = inst_16639);

(statearr_16702[(12)] = inst_16640);

return statearr_16702;
})();
var statearr_16703_17388 = state_16685__$1;
(statearr_16703_17388[(2)] = null);

(statearr_16703_17388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (17))){
var inst_16651 = (state_16685[(7)]);
var inst_16655 = cljs.core.chunk_first(inst_16651);
var inst_16656 = cljs.core.chunk_rest(inst_16651);
var inst_16657 = cljs.core.count(inst_16655);
var inst_16637 = inst_16656;
var inst_16638 = inst_16655;
var inst_16639 = inst_16657;
var inst_16640 = (0);
var state_16685__$1 = (function (){var statearr_16704 = state_16685;
(statearr_16704[(9)] = inst_16637);

(statearr_16704[(10)] = inst_16638);

(statearr_16704[(11)] = inst_16639);

(statearr_16704[(12)] = inst_16640);

return statearr_16704;
})();
var statearr_16705_17389 = state_16685__$1;
(statearr_16705_17389[(2)] = null);

(statearr_16705_17389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (3))){
var inst_16683 = (state_16685[(2)]);
var state_16685__$1 = state_16685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16685__$1,inst_16683);
} else {
if((state_val_16686 === (12))){
var inst_16671 = (state_16685[(2)]);
var state_16685__$1 = state_16685;
var statearr_16706_17390 = state_16685__$1;
(statearr_16706_17390[(2)] = inst_16671);

(statearr_16706_17390[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (2))){
var state_16685__$1 = state_16685;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16685__$1,(4),in$);
} else {
if((state_val_16686 === (23))){
var inst_16679 = (state_16685[(2)]);
var state_16685__$1 = state_16685;
var statearr_16707_17391 = state_16685__$1;
(statearr_16707_17391[(2)] = inst_16679);

(statearr_16707_17391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (19))){
var inst_16666 = (state_16685[(2)]);
var state_16685__$1 = state_16685;
var statearr_16708_17392 = state_16685__$1;
(statearr_16708_17392[(2)] = inst_16666);

(statearr_16708_17392[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (11))){
var inst_16637 = (state_16685[(9)]);
var inst_16651 = (state_16685[(7)]);
var inst_16651__$1 = cljs.core.seq(inst_16637);
var state_16685__$1 = (function (){var statearr_16709 = state_16685;
(statearr_16709[(7)] = inst_16651__$1);

return statearr_16709;
})();
if(inst_16651__$1){
var statearr_16710_17393 = state_16685__$1;
(statearr_16710_17393[(1)] = (14));

} else {
var statearr_16711_17394 = state_16685__$1;
(statearr_16711_17394[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (9))){
var inst_16673 = (state_16685[(2)]);
var inst_16674 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16685__$1 = (function (){var statearr_16712 = state_16685;
(statearr_16712[(15)] = inst_16673);

return statearr_16712;
})();
if(cljs.core.truth_(inst_16674)){
var statearr_16713_17395 = state_16685__$1;
(statearr_16713_17395[(1)] = (21));

} else {
var statearr_16714_17396 = state_16685__$1;
(statearr_16714_17396[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (5))){
var inst_16629 = cljs.core.async.close_BANG_(out);
var state_16685__$1 = state_16685;
var statearr_16715_17397 = state_16685__$1;
(statearr_16715_17397[(2)] = inst_16629);

(statearr_16715_17397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (14))){
var inst_16651 = (state_16685[(7)]);
var inst_16653 = cljs.core.chunked_seq_QMARK_(inst_16651);
var state_16685__$1 = state_16685;
if(inst_16653){
var statearr_16716_17398 = state_16685__$1;
(statearr_16716_17398[(1)] = (17));

} else {
var statearr_16717_17399 = state_16685__$1;
(statearr_16717_17399[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (16))){
var inst_16669 = (state_16685[(2)]);
var state_16685__$1 = state_16685;
var statearr_16718_17400 = state_16685__$1;
(statearr_16718_17400[(2)] = inst_16669);

(statearr_16718_17400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16686 === (10))){
var inst_16638 = (state_16685[(10)]);
var inst_16640 = (state_16685[(12)]);
var inst_16645 = cljs.core._nth(inst_16638,inst_16640);
var state_16685__$1 = state_16685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16685__$1,(13),out,inst_16645);
} else {
if((state_val_16686 === (18))){
var inst_16651 = (state_16685[(7)]);
var inst_16660 = cljs.core.first(inst_16651);
var state_16685__$1 = state_16685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16685__$1,(20),out,inst_16660);
} else {
if((state_val_16686 === (8))){
var inst_16640 = (state_16685[(12)]);
var inst_16639 = (state_16685[(11)]);
var inst_16642 = (inst_16640 < inst_16639);
var inst_16643 = inst_16642;
var state_16685__$1 = state_16685;
if(cljs.core.truth_(inst_16643)){
var statearr_16719_17401 = state_16685__$1;
(statearr_16719_17401[(1)] = (10));

} else {
var statearr_16720_17402 = state_16685__$1;
(statearr_16720_17402[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15409__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15409__auto____0 = (function (){
var statearr_16721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16721[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15409__auto__);

(statearr_16721[(1)] = (1));

return statearr_16721;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15409__auto____1 = (function (state_16685){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_16685);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e16722){var ex__15412__auto__ = e16722;
var statearr_16723_17403 = state_16685;
(statearr_16723_17403[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_16685[(4)]))){
var statearr_16724_17404 = state_16685;
(statearr_16724_17404[(1)] = cljs.core.first((state_16685[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17405 = state_16685;
state_16685 = G__17405;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15409__auto__ = function(state_16685){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15409__auto____1.call(this,state_16685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15409__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15409__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_16725 = f__15445__auto__();
(statearr_16725[(6)] = c__15444__auto__);

return statearr_16725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));

return c__15444__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16727 = arguments.length;
switch (G__16727) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16729 = arguments.length;
switch (G__16729) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16731 = arguments.length;
switch (G__16731) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15444__auto___17409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_16755){
var state_val_16756 = (state_16755[(1)]);
if((state_val_16756 === (7))){
var inst_16750 = (state_16755[(2)]);
var state_16755__$1 = state_16755;
var statearr_16757_17410 = state_16755__$1;
(statearr_16757_17410[(2)] = inst_16750);

(statearr_16757_17410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16756 === (1))){
var inst_16732 = null;
var state_16755__$1 = (function (){var statearr_16758 = state_16755;
(statearr_16758[(7)] = inst_16732);

return statearr_16758;
})();
var statearr_16759_17411 = state_16755__$1;
(statearr_16759_17411[(2)] = null);

(statearr_16759_17411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16756 === (4))){
var inst_16735 = (state_16755[(8)]);
var inst_16735__$1 = (state_16755[(2)]);
var inst_16736 = (inst_16735__$1 == null);
var inst_16737 = cljs.core.not(inst_16736);
var state_16755__$1 = (function (){var statearr_16760 = state_16755;
(statearr_16760[(8)] = inst_16735__$1);

return statearr_16760;
})();
if(inst_16737){
var statearr_16761_17412 = state_16755__$1;
(statearr_16761_17412[(1)] = (5));

} else {
var statearr_16762_17413 = state_16755__$1;
(statearr_16762_17413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16756 === (6))){
var state_16755__$1 = state_16755;
var statearr_16763_17414 = state_16755__$1;
(statearr_16763_17414[(2)] = null);

(statearr_16763_17414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16756 === (3))){
var inst_16752 = (state_16755[(2)]);
var inst_16753 = cljs.core.async.close_BANG_(out);
var state_16755__$1 = (function (){var statearr_16764 = state_16755;
(statearr_16764[(9)] = inst_16752);

return statearr_16764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16755__$1,inst_16753);
} else {
if((state_val_16756 === (2))){
var state_16755__$1 = state_16755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16755__$1,(4),ch);
} else {
if((state_val_16756 === (11))){
var inst_16735 = (state_16755[(8)]);
var inst_16744 = (state_16755[(2)]);
var inst_16732 = inst_16735;
var state_16755__$1 = (function (){var statearr_16765 = state_16755;
(statearr_16765[(10)] = inst_16744);

(statearr_16765[(7)] = inst_16732);

return statearr_16765;
})();
var statearr_16766_17415 = state_16755__$1;
(statearr_16766_17415[(2)] = null);

(statearr_16766_17415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16756 === (9))){
var inst_16735 = (state_16755[(8)]);
var state_16755__$1 = state_16755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16755__$1,(11),out,inst_16735);
} else {
if((state_val_16756 === (5))){
var inst_16735 = (state_16755[(8)]);
var inst_16732 = (state_16755[(7)]);
var inst_16739 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16735,inst_16732);
var state_16755__$1 = state_16755;
if(inst_16739){
var statearr_16768_17416 = state_16755__$1;
(statearr_16768_17416[(1)] = (8));

} else {
var statearr_16769_17417 = state_16755__$1;
(statearr_16769_17417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16756 === (10))){
var inst_16747 = (state_16755[(2)]);
var state_16755__$1 = state_16755;
var statearr_16770_17418 = state_16755__$1;
(statearr_16770_17418[(2)] = inst_16747);

(statearr_16770_17418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16756 === (8))){
var inst_16732 = (state_16755[(7)]);
var tmp16767 = inst_16732;
var inst_16732__$1 = tmp16767;
var state_16755__$1 = (function (){var statearr_16771 = state_16755;
(statearr_16771[(7)] = inst_16732__$1);

return statearr_16771;
})();
var statearr_16772_17419 = state_16755__$1;
(statearr_16772_17419[(2)] = null);

(statearr_16772_17419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15409__auto__ = null;
var cljs$core$async$state_machine__15409__auto____0 = (function (){
var statearr_16773 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16773[(0)] = cljs$core$async$state_machine__15409__auto__);

(statearr_16773[(1)] = (1));

return statearr_16773;
});
var cljs$core$async$state_machine__15409__auto____1 = (function (state_16755){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_16755);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e16774){var ex__15412__auto__ = e16774;
var statearr_16775_17420 = state_16755;
(statearr_16775_17420[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_16755[(4)]))){
var statearr_16776_17421 = state_16755;
(statearr_16776_17421[(1)] = cljs.core.first((state_16755[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17422 = state_16755;
state_16755 = G__17422;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$state_machine__15409__auto__ = function(state_16755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15409__auto____1.call(this,state_16755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15409__auto____0;
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15409__auto____1;
return cljs$core$async$state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_16777 = f__15445__auto__();
(statearr_16777[(6)] = c__15444__auto___17409);

return statearr_16777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16779 = arguments.length;
switch (G__16779) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15444__auto___17424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_16817){
var state_val_16818 = (state_16817[(1)]);
if((state_val_16818 === (7))){
var inst_16813 = (state_16817[(2)]);
var state_16817__$1 = state_16817;
var statearr_16819_17425 = state_16817__$1;
(statearr_16819_17425[(2)] = inst_16813);

(statearr_16819_17425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (1))){
var inst_16780 = (new Array(n));
var inst_16781 = inst_16780;
var inst_16782 = (0);
var state_16817__$1 = (function (){var statearr_16820 = state_16817;
(statearr_16820[(7)] = inst_16781);

(statearr_16820[(8)] = inst_16782);

return statearr_16820;
})();
var statearr_16821_17426 = state_16817__$1;
(statearr_16821_17426[(2)] = null);

(statearr_16821_17426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (4))){
var inst_16785 = (state_16817[(9)]);
var inst_16785__$1 = (state_16817[(2)]);
var inst_16786 = (inst_16785__$1 == null);
var inst_16787 = cljs.core.not(inst_16786);
var state_16817__$1 = (function (){var statearr_16822 = state_16817;
(statearr_16822[(9)] = inst_16785__$1);

return statearr_16822;
})();
if(inst_16787){
var statearr_16823_17427 = state_16817__$1;
(statearr_16823_17427[(1)] = (5));

} else {
var statearr_16824_17428 = state_16817__$1;
(statearr_16824_17428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (15))){
var inst_16807 = (state_16817[(2)]);
var state_16817__$1 = state_16817;
var statearr_16825_17429 = state_16817__$1;
(statearr_16825_17429[(2)] = inst_16807);

(statearr_16825_17429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (13))){
var state_16817__$1 = state_16817;
var statearr_16826_17430 = state_16817__$1;
(statearr_16826_17430[(2)] = null);

(statearr_16826_17430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (6))){
var inst_16782 = (state_16817[(8)]);
var inst_16803 = (inst_16782 > (0));
var state_16817__$1 = state_16817;
if(cljs.core.truth_(inst_16803)){
var statearr_16827_17431 = state_16817__$1;
(statearr_16827_17431[(1)] = (12));

} else {
var statearr_16828_17432 = state_16817__$1;
(statearr_16828_17432[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (3))){
var inst_16815 = (state_16817[(2)]);
var state_16817__$1 = state_16817;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16817__$1,inst_16815);
} else {
if((state_val_16818 === (12))){
var inst_16781 = (state_16817[(7)]);
var inst_16805 = cljs.core.vec(inst_16781);
var state_16817__$1 = state_16817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16817__$1,(15),out,inst_16805);
} else {
if((state_val_16818 === (2))){
var state_16817__$1 = state_16817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16817__$1,(4),ch);
} else {
if((state_val_16818 === (11))){
var inst_16797 = (state_16817[(2)]);
var inst_16798 = (new Array(n));
var inst_16781 = inst_16798;
var inst_16782 = (0);
var state_16817__$1 = (function (){var statearr_16829 = state_16817;
(statearr_16829[(10)] = inst_16797);

(statearr_16829[(7)] = inst_16781);

(statearr_16829[(8)] = inst_16782);

return statearr_16829;
})();
var statearr_16830_17433 = state_16817__$1;
(statearr_16830_17433[(2)] = null);

(statearr_16830_17433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (9))){
var inst_16781 = (state_16817[(7)]);
var inst_16795 = cljs.core.vec(inst_16781);
var state_16817__$1 = state_16817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16817__$1,(11),out,inst_16795);
} else {
if((state_val_16818 === (5))){
var inst_16781 = (state_16817[(7)]);
var inst_16782 = (state_16817[(8)]);
var inst_16785 = (state_16817[(9)]);
var inst_16790 = (state_16817[(11)]);
var inst_16789 = (inst_16781[inst_16782] = inst_16785);
var inst_16790__$1 = (inst_16782 + (1));
var inst_16791 = (inst_16790__$1 < n);
var state_16817__$1 = (function (){var statearr_16831 = state_16817;
(statearr_16831[(12)] = inst_16789);

(statearr_16831[(11)] = inst_16790__$1);

return statearr_16831;
})();
if(cljs.core.truth_(inst_16791)){
var statearr_16832_17434 = state_16817__$1;
(statearr_16832_17434[(1)] = (8));

} else {
var statearr_16833_17435 = state_16817__$1;
(statearr_16833_17435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (14))){
var inst_16810 = (state_16817[(2)]);
var inst_16811 = cljs.core.async.close_BANG_(out);
var state_16817__$1 = (function (){var statearr_16835 = state_16817;
(statearr_16835[(13)] = inst_16810);

return statearr_16835;
})();
var statearr_16836_17436 = state_16817__$1;
(statearr_16836_17436[(2)] = inst_16811);

(statearr_16836_17436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (10))){
var inst_16801 = (state_16817[(2)]);
var state_16817__$1 = state_16817;
var statearr_16837_17437 = state_16817__$1;
(statearr_16837_17437[(2)] = inst_16801);

(statearr_16837_17437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16818 === (8))){
var inst_16781 = (state_16817[(7)]);
var inst_16790 = (state_16817[(11)]);
var tmp16834 = inst_16781;
var inst_16781__$1 = tmp16834;
var inst_16782 = inst_16790;
var state_16817__$1 = (function (){var statearr_16838 = state_16817;
(statearr_16838[(7)] = inst_16781__$1);

(statearr_16838[(8)] = inst_16782);

return statearr_16838;
})();
var statearr_16839_17438 = state_16817__$1;
(statearr_16839_17438[(2)] = null);

(statearr_16839_17438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15409__auto__ = null;
var cljs$core$async$state_machine__15409__auto____0 = (function (){
var statearr_16840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16840[(0)] = cljs$core$async$state_machine__15409__auto__);

(statearr_16840[(1)] = (1));

return statearr_16840;
});
var cljs$core$async$state_machine__15409__auto____1 = (function (state_16817){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_16817);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e16841){var ex__15412__auto__ = e16841;
var statearr_16842_17439 = state_16817;
(statearr_16842_17439[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_16817[(4)]))){
var statearr_16843_17440 = state_16817;
(statearr_16843_17440[(1)] = cljs.core.first((state_16817[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17441 = state_16817;
state_16817 = G__17441;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$state_machine__15409__auto__ = function(state_16817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15409__auto____1.call(this,state_16817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15409__auto____0;
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15409__auto____1;
return cljs$core$async$state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_16844 = f__15445__auto__();
(statearr_16844[(6)] = c__15444__auto___17424);

return statearr_16844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16846 = arguments.length;
switch (G__16846) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15444__auto___17443 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15445__auto__ = (function (){var switch__15408__auto__ = (function (state_16891){
var state_val_16892 = (state_16891[(1)]);
if((state_val_16892 === (7))){
var inst_16887 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
var statearr_16893_17444 = state_16891__$1;
(statearr_16893_17444[(2)] = inst_16887);

(statearr_16893_17444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (1))){
var inst_16847 = [];
var inst_16848 = inst_16847;
var inst_16849 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16891__$1 = (function (){var statearr_16894 = state_16891;
(statearr_16894[(7)] = inst_16848);

(statearr_16894[(8)] = inst_16849);

return statearr_16894;
})();
var statearr_16895_17445 = state_16891__$1;
(statearr_16895_17445[(2)] = null);

(statearr_16895_17445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (4))){
var inst_16852 = (state_16891[(9)]);
var inst_16852__$1 = (state_16891[(2)]);
var inst_16853 = (inst_16852__$1 == null);
var inst_16854 = cljs.core.not(inst_16853);
var state_16891__$1 = (function (){var statearr_16896 = state_16891;
(statearr_16896[(9)] = inst_16852__$1);

return statearr_16896;
})();
if(inst_16854){
var statearr_16897_17446 = state_16891__$1;
(statearr_16897_17446[(1)] = (5));

} else {
var statearr_16898_17447 = state_16891__$1;
(statearr_16898_17447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (15))){
var inst_16848 = (state_16891[(7)]);
var inst_16879 = cljs.core.vec(inst_16848);
var state_16891__$1 = state_16891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16891__$1,(18),out,inst_16879);
} else {
if((state_val_16892 === (13))){
var inst_16874 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
var statearr_16899_17448 = state_16891__$1;
(statearr_16899_17448[(2)] = inst_16874);

(statearr_16899_17448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (6))){
var inst_16848 = (state_16891[(7)]);
var inst_16876 = inst_16848.length;
var inst_16877 = (inst_16876 > (0));
var state_16891__$1 = state_16891;
if(cljs.core.truth_(inst_16877)){
var statearr_16900_17449 = state_16891__$1;
(statearr_16900_17449[(1)] = (15));

} else {
var statearr_16901_17450 = state_16891__$1;
(statearr_16901_17450[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (17))){
var inst_16884 = (state_16891[(2)]);
var inst_16885 = cljs.core.async.close_BANG_(out);
var state_16891__$1 = (function (){var statearr_16902 = state_16891;
(statearr_16902[(10)] = inst_16884);

return statearr_16902;
})();
var statearr_16903_17451 = state_16891__$1;
(statearr_16903_17451[(2)] = inst_16885);

(statearr_16903_17451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (3))){
var inst_16889 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16891__$1,inst_16889);
} else {
if((state_val_16892 === (12))){
var inst_16848 = (state_16891[(7)]);
var inst_16867 = cljs.core.vec(inst_16848);
var state_16891__$1 = state_16891;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16891__$1,(14),out,inst_16867);
} else {
if((state_val_16892 === (2))){
var state_16891__$1 = state_16891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16891__$1,(4),ch);
} else {
if((state_val_16892 === (11))){
var inst_16848 = (state_16891[(7)]);
var inst_16852 = (state_16891[(9)]);
var inst_16856 = (state_16891[(11)]);
var inst_16864 = inst_16848.push(inst_16852);
var tmp16904 = inst_16848;
var inst_16848__$1 = tmp16904;
var inst_16849 = inst_16856;
var state_16891__$1 = (function (){var statearr_16905 = state_16891;
(statearr_16905[(12)] = inst_16864);

(statearr_16905[(7)] = inst_16848__$1);

(statearr_16905[(8)] = inst_16849);

return statearr_16905;
})();
var statearr_16906_17452 = state_16891__$1;
(statearr_16906_17452[(2)] = null);

(statearr_16906_17452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (9))){
var inst_16849 = (state_16891[(8)]);
var inst_16860 = cljs.core.keyword_identical_QMARK_(inst_16849,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16891__$1 = state_16891;
var statearr_16907_17453 = state_16891__$1;
(statearr_16907_17453[(2)] = inst_16860);

(statearr_16907_17453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (5))){
var inst_16852 = (state_16891[(9)]);
var inst_16856 = (state_16891[(11)]);
var inst_16849 = (state_16891[(8)]);
var inst_16857 = (state_16891[(13)]);
var inst_16856__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16852) : f.call(null,inst_16852));
var inst_16857__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16856__$1,inst_16849);
var state_16891__$1 = (function (){var statearr_16908 = state_16891;
(statearr_16908[(11)] = inst_16856__$1);

(statearr_16908[(13)] = inst_16857__$1);

return statearr_16908;
})();
if(inst_16857__$1){
var statearr_16909_17454 = state_16891__$1;
(statearr_16909_17454[(1)] = (8));

} else {
var statearr_16910_17455 = state_16891__$1;
(statearr_16910_17455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (14))){
var inst_16852 = (state_16891[(9)]);
var inst_16856 = (state_16891[(11)]);
var inst_16869 = (state_16891[(2)]);
var inst_16870 = [];
var inst_16871 = inst_16870.push(inst_16852);
var inst_16848 = inst_16870;
var inst_16849 = inst_16856;
var state_16891__$1 = (function (){var statearr_16911 = state_16891;
(statearr_16911[(14)] = inst_16869);

(statearr_16911[(15)] = inst_16871);

(statearr_16911[(7)] = inst_16848);

(statearr_16911[(8)] = inst_16849);

return statearr_16911;
})();
var statearr_16912_17456 = state_16891__$1;
(statearr_16912_17456[(2)] = null);

(statearr_16912_17456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (16))){
var state_16891__$1 = state_16891;
var statearr_16913_17457 = state_16891__$1;
(statearr_16913_17457[(2)] = null);

(statearr_16913_17457[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (10))){
var inst_16862 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
if(cljs.core.truth_(inst_16862)){
var statearr_16914_17458 = state_16891__$1;
(statearr_16914_17458[(1)] = (11));

} else {
var statearr_16915_17459 = state_16891__$1;
(statearr_16915_17459[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (18))){
var inst_16881 = (state_16891[(2)]);
var state_16891__$1 = state_16891;
var statearr_16916_17460 = state_16891__$1;
(statearr_16916_17460[(2)] = inst_16881);

(statearr_16916_17460[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16892 === (8))){
var inst_16857 = (state_16891[(13)]);
var state_16891__$1 = state_16891;
var statearr_16917_17461 = state_16891__$1;
(statearr_16917_17461[(2)] = inst_16857);

(statearr_16917_17461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__15409__auto__ = null;
var cljs$core$async$state_machine__15409__auto____0 = (function (){
var statearr_16918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16918[(0)] = cljs$core$async$state_machine__15409__auto__);

(statearr_16918[(1)] = (1));

return statearr_16918;
});
var cljs$core$async$state_machine__15409__auto____1 = (function (state_16891){
while(true){
var ret_value__15410__auto__ = (function (){try{while(true){
var result__15411__auto__ = switch__15408__auto__(state_16891);
if(cljs.core.keyword_identical_QMARK_(result__15411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15411__auto__;
}
break;
}
}catch (e16919){var ex__15412__auto__ = e16919;
var statearr_16920_17462 = state_16891;
(statearr_16920_17462[(2)] = ex__15412__auto__);


if(cljs.core.seq((state_16891[(4)]))){
var statearr_16921_17463 = state_16891;
(statearr_16921_17463[(1)] = cljs.core.first((state_16891[(4)])));

} else {
throw ex__15412__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15410__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17464 = state_16891;
state_16891 = G__17464;
continue;
} else {
return ret_value__15410__auto__;
}
break;
}
});
cljs$core$async$state_machine__15409__auto__ = function(state_16891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15409__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15409__auto____1.call(this,state_16891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15409__auto____0;
cljs$core$async$state_machine__15409__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15409__auto____1;
return cljs$core$async$state_machine__15409__auto__;
})()
})();
var state__15446__auto__ = (function (){var statearr_16922 = f__15445__auto__();
(statearr_16922[(6)] = c__15444__auto___17443);

return statearr_16922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15446__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
