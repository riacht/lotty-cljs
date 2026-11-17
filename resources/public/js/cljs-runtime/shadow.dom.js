goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12667 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12667(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12668 = (function (this$){
var x__5519__auto__ = (((this$ == null))?null:this$);
var m__5520__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5519__auto__)]);
if((!((m__5520__auto__ == null)))){
return (m__5520__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5520__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5520__auto__.call(null,this$));
} else {
var m__5518__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5518__auto__ == null)))){
return (m__5518__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5518__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5518__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12668(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__12124 = coll;
var G__12128 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__12124,G__12128) : shadow.dom.lazy_native_coll_seq.call(null,G__12124,G__12128));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5162__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5455__auto__,writer__5456__auto__,opt__5457__auto__){
return cljs.core._write(writer__5456__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__12140 = arguments.length;
switch (G__12140) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__12149 = arguments.length;
switch (G__12149) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__12162 = arguments.length;
switch (G__12162) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__12165 = arguments.length;
switch (G__12165) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__12167 = arguments.length;
switch (G__12167) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__12169 = arguments.length;
switch (G__12169) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e12170){if((e12170 instanceof Object)){
var e = e12170;
return console.log("didnt support attachEvent",el,e);
} else {
throw e12170;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5162__auto__ = (!((typeof document !== 'undefined')));
if(or__5162__auto__){
return or__5162__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__12171 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__12172 = null;
var count__12173 = (0);
var i__12174 = (0);
while(true){
if((i__12174 < count__12173)){
var el = chunk__12172.cljs$core$IIndexed$_nth$arity$2(null,i__12174);
var handler_12681__$1 = ((function (seq__12171,chunk__12172,count__12173,i__12174,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__12171,chunk__12172,count__12173,i__12174,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12681__$1);


var G__12682 = seq__12171;
var G__12683 = chunk__12172;
var G__12684 = count__12173;
var G__12685 = (i__12174 + (1));
seq__12171 = G__12682;
chunk__12172 = G__12683;
count__12173 = G__12684;
i__12174 = G__12685;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12171);
if(temp__5823__auto__){
var seq__12171__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12171__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12171__$1);
var G__12686 = cljs.core.chunk_rest(seq__12171__$1);
var G__12687 = c__5694__auto__;
var G__12688 = cljs.core.count(c__5694__auto__);
var G__12689 = (0);
seq__12171 = G__12686;
chunk__12172 = G__12687;
count__12173 = G__12688;
i__12174 = G__12689;
continue;
} else {
var el = cljs.core.first(seq__12171__$1);
var handler_12690__$1 = ((function (seq__12171,chunk__12172,count__12173,i__12174,el,seq__12171__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__12171,chunk__12172,count__12173,i__12174,el,seq__12171__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12690__$1);


var G__12691 = cljs.core.next(seq__12171__$1);
var G__12692 = null;
var G__12693 = (0);
var G__12694 = (0);
seq__12171 = G__12691;
chunk__12172 = G__12692;
count__12173 = G__12693;
i__12174 = G__12694;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__12176 = arguments.length;
switch (G__12176) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__12177 = cljs.core.seq(events);
var chunk__12178 = null;
var count__12179 = (0);
var i__12180 = (0);
while(true){
if((i__12180 < count__12179)){
var vec__12187 = chunk__12178.cljs$core$IIndexed$_nth$arity$2(null,i__12180);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12187,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12187,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12696 = seq__12177;
var G__12697 = chunk__12178;
var G__12698 = count__12179;
var G__12700 = (i__12180 + (1));
seq__12177 = G__12696;
chunk__12178 = G__12697;
count__12179 = G__12698;
i__12180 = G__12700;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12177);
if(temp__5823__auto__){
var seq__12177__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12177__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12177__$1);
var G__12701 = cljs.core.chunk_rest(seq__12177__$1);
var G__12702 = c__5694__auto__;
var G__12703 = cljs.core.count(c__5694__auto__);
var G__12704 = (0);
seq__12177 = G__12701;
chunk__12178 = G__12702;
count__12179 = G__12703;
i__12180 = G__12704;
continue;
} else {
var vec__12190 = cljs.core.first(seq__12177__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12190,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12190,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12705 = cljs.core.next(seq__12177__$1);
var G__12706 = null;
var G__12707 = (0);
var G__12708 = (0);
seq__12177 = G__12705;
chunk__12178 = G__12706;
count__12179 = G__12707;
i__12180 = G__12708;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__12194 = cljs.core.seq(styles);
var chunk__12195 = null;
var count__12196 = (0);
var i__12197 = (0);
while(true){
if((i__12197 < count__12196)){
var vec__12210 = chunk__12195.cljs$core$IIndexed$_nth$arity$2(null,i__12197);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12210,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12709 = seq__12194;
var G__12710 = chunk__12195;
var G__12711 = count__12196;
var G__12712 = (i__12197 + (1));
seq__12194 = G__12709;
chunk__12195 = G__12710;
count__12196 = G__12711;
i__12197 = G__12712;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12194);
if(temp__5823__auto__){
var seq__12194__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12194__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12194__$1);
var G__12716 = cljs.core.chunk_rest(seq__12194__$1);
var G__12717 = c__5694__auto__;
var G__12718 = cljs.core.count(c__5694__auto__);
var G__12719 = (0);
seq__12194 = G__12716;
chunk__12195 = G__12717;
count__12196 = G__12718;
i__12197 = G__12719;
continue;
} else {
var vec__12213 = cljs.core.first(seq__12194__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12213,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12720 = cljs.core.next(seq__12194__$1);
var G__12721 = null;
var G__12722 = (0);
var G__12723 = (0);
seq__12194 = G__12720;
chunk__12195 = G__12721;
count__12196 = G__12722;
i__12197 = G__12723;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__12216_12724 = key;
var G__12216_12725__$1 = (((G__12216_12724 instanceof cljs.core.Keyword))?G__12216_12724.fqn:null);
switch (G__12216_12725__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12731 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5162__auto__ = goog.string.startsWith(ks_12731,"data-");
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return goog.string.startsWith(ks_12731,"aria-");
}
})())){
el.setAttribute(ks_12731,value);
} else {
(el[ks_12731] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12227){
var map__12228 = p__12227;
var map__12228__$1 = cljs.core.__destructure_map(map__12228);
var props = map__12228__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12228__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12229 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12229,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12229,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12229,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12232 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12232,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12232;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12234 = arguments.length;
switch (G__12234) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12241){
var vec__12242 = p__12241;
var seq__12243 = cljs.core.seq(vec__12242);
var first__12244 = cljs.core.first(seq__12243);
var seq__12243__$1 = cljs.core.next(seq__12243);
var nn = first__12244;
var first__12244__$1 = cljs.core.first(seq__12243__$1);
var seq__12243__$2 = cljs.core.next(seq__12243__$1);
var np = first__12244__$1;
var nc = seq__12243__$2;
var node = vec__12242;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12246 = nn;
var G__12247 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12246,G__12247) : create_fn.call(null,G__12246,G__12247));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12248 = nn;
var G__12249 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12248,G__12249) : create_fn.call(null,G__12248,G__12249));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12250 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12250,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12250,(1),null);
var seq__12253_12734 = cljs.core.seq(node_children);
var chunk__12254_12735 = null;
var count__12255_12736 = (0);
var i__12256_12737 = (0);
while(true){
if((i__12256_12737 < count__12255_12736)){
var child_struct_12738 = chunk__12254_12735.cljs$core$IIndexed$_nth$arity$2(null,i__12256_12737);
var children_12740 = shadow.dom.dom_node(child_struct_12738);
if(cljs.core.seq_QMARK_(children_12740)){
var seq__12282_12742 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12740));
var chunk__12284_12743 = null;
var count__12285_12744 = (0);
var i__12286_12745 = (0);
while(true){
if((i__12286_12745 < count__12285_12744)){
var child_12747 = chunk__12284_12743.cljs$core$IIndexed$_nth$arity$2(null,i__12286_12745);
if(cljs.core.truth_(child_12747)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12747);


var G__12748 = seq__12282_12742;
var G__12749 = chunk__12284_12743;
var G__12750 = count__12285_12744;
var G__12751 = (i__12286_12745 + (1));
seq__12282_12742 = G__12748;
chunk__12284_12743 = G__12749;
count__12285_12744 = G__12750;
i__12286_12745 = G__12751;
continue;
} else {
var G__12752 = seq__12282_12742;
var G__12753 = chunk__12284_12743;
var G__12754 = count__12285_12744;
var G__12755 = (i__12286_12745 + (1));
seq__12282_12742 = G__12752;
chunk__12284_12743 = G__12753;
count__12285_12744 = G__12754;
i__12286_12745 = G__12755;
continue;
}
} else {
var temp__5823__auto___12756 = cljs.core.seq(seq__12282_12742);
if(temp__5823__auto___12756){
var seq__12282_12757__$1 = temp__5823__auto___12756;
if(cljs.core.chunked_seq_QMARK_(seq__12282_12757__$1)){
var c__5694__auto___12758 = cljs.core.chunk_first(seq__12282_12757__$1);
var G__12760 = cljs.core.chunk_rest(seq__12282_12757__$1);
var G__12761 = c__5694__auto___12758;
var G__12762 = cljs.core.count(c__5694__auto___12758);
var G__12763 = (0);
seq__12282_12742 = G__12760;
chunk__12284_12743 = G__12761;
count__12285_12744 = G__12762;
i__12286_12745 = G__12763;
continue;
} else {
var child_12764 = cljs.core.first(seq__12282_12757__$1);
if(cljs.core.truth_(child_12764)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12764);


var G__12765 = cljs.core.next(seq__12282_12757__$1);
var G__12766 = null;
var G__12767 = (0);
var G__12768 = (0);
seq__12282_12742 = G__12765;
chunk__12284_12743 = G__12766;
count__12285_12744 = G__12767;
i__12286_12745 = G__12768;
continue;
} else {
var G__12769 = cljs.core.next(seq__12282_12757__$1);
var G__12770 = null;
var G__12771 = (0);
var G__12772 = (0);
seq__12282_12742 = G__12769;
chunk__12284_12743 = G__12770;
count__12285_12744 = G__12771;
i__12286_12745 = G__12772;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12740);
}


var G__12773 = seq__12253_12734;
var G__12774 = chunk__12254_12735;
var G__12775 = count__12255_12736;
var G__12776 = (i__12256_12737 + (1));
seq__12253_12734 = G__12773;
chunk__12254_12735 = G__12774;
count__12255_12736 = G__12775;
i__12256_12737 = G__12776;
continue;
} else {
var temp__5823__auto___12777 = cljs.core.seq(seq__12253_12734);
if(temp__5823__auto___12777){
var seq__12253_12778__$1 = temp__5823__auto___12777;
if(cljs.core.chunked_seq_QMARK_(seq__12253_12778__$1)){
var c__5694__auto___12779 = cljs.core.chunk_first(seq__12253_12778__$1);
var G__12780 = cljs.core.chunk_rest(seq__12253_12778__$1);
var G__12781 = c__5694__auto___12779;
var G__12782 = cljs.core.count(c__5694__auto___12779);
var G__12783 = (0);
seq__12253_12734 = G__12780;
chunk__12254_12735 = G__12781;
count__12255_12736 = G__12782;
i__12256_12737 = G__12783;
continue;
} else {
var child_struct_12784 = cljs.core.first(seq__12253_12778__$1);
var children_12785 = shadow.dom.dom_node(child_struct_12784);
if(cljs.core.seq_QMARK_(children_12785)){
var seq__12298_12786 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12785));
var chunk__12300_12787 = null;
var count__12301_12788 = (0);
var i__12302_12789 = (0);
while(true){
if((i__12302_12789 < count__12301_12788)){
var child_12790 = chunk__12300_12787.cljs$core$IIndexed$_nth$arity$2(null,i__12302_12789);
if(cljs.core.truth_(child_12790)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12790);


var G__12791 = seq__12298_12786;
var G__12792 = chunk__12300_12787;
var G__12793 = count__12301_12788;
var G__12794 = (i__12302_12789 + (1));
seq__12298_12786 = G__12791;
chunk__12300_12787 = G__12792;
count__12301_12788 = G__12793;
i__12302_12789 = G__12794;
continue;
} else {
var G__12795 = seq__12298_12786;
var G__12796 = chunk__12300_12787;
var G__12797 = count__12301_12788;
var G__12799 = (i__12302_12789 + (1));
seq__12298_12786 = G__12795;
chunk__12300_12787 = G__12796;
count__12301_12788 = G__12797;
i__12302_12789 = G__12799;
continue;
}
} else {
var temp__5823__auto___12801__$1 = cljs.core.seq(seq__12298_12786);
if(temp__5823__auto___12801__$1){
var seq__12298_12802__$1 = temp__5823__auto___12801__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12298_12802__$1)){
var c__5694__auto___12803 = cljs.core.chunk_first(seq__12298_12802__$1);
var G__12806 = cljs.core.chunk_rest(seq__12298_12802__$1);
var G__12807 = c__5694__auto___12803;
var G__12808 = cljs.core.count(c__5694__auto___12803);
var G__12809 = (0);
seq__12298_12786 = G__12806;
chunk__12300_12787 = G__12807;
count__12301_12788 = G__12808;
i__12302_12789 = G__12809;
continue;
} else {
var child_12810 = cljs.core.first(seq__12298_12802__$1);
if(cljs.core.truth_(child_12810)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12810);


var G__12812 = cljs.core.next(seq__12298_12802__$1);
var G__12813 = null;
var G__12814 = (0);
var G__12815 = (0);
seq__12298_12786 = G__12812;
chunk__12300_12787 = G__12813;
count__12301_12788 = G__12814;
i__12302_12789 = G__12815;
continue;
} else {
var G__12816 = cljs.core.next(seq__12298_12802__$1);
var G__12817 = null;
var G__12818 = (0);
var G__12819 = (0);
seq__12298_12786 = G__12816;
chunk__12300_12787 = G__12817;
count__12301_12788 = G__12818;
i__12302_12789 = G__12819;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12785);
}


var G__12820 = cljs.core.next(seq__12253_12778__$1);
var G__12821 = null;
var G__12822 = (0);
var G__12823 = (0);
seq__12253_12734 = G__12820;
chunk__12254_12735 = G__12821;
count__12255_12736 = G__12822;
i__12256_12737 = G__12823;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12321 = cljs.core.seq(node);
var chunk__12322 = null;
var count__12323 = (0);
var i__12324 = (0);
while(true){
if((i__12324 < count__12323)){
var n = chunk__12322.cljs$core$IIndexed$_nth$arity$2(null,i__12324);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12828 = seq__12321;
var G__12830 = chunk__12322;
var G__12831 = count__12323;
var G__12832 = (i__12324 + (1));
seq__12321 = G__12828;
chunk__12322 = G__12830;
count__12323 = G__12831;
i__12324 = G__12832;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12321);
if(temp__5823__auto__){
var seq__12321__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12321__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12321__$1);
var G__12833 = cljs.core.chunk_rest(seq__12321__$1);
var G__12834 = c__5694__auto__;
var G__12835 = cljs.core.count(c__5694__auto__);
var G__12836 = (0);
seq__12321 = G__12833;
chunk__12322 = G__12834;
count__12323 = G__12835;
i__12324 = G__12836;
continue;
} else {
var n = cljs.core.first(seq__12321__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12839 = cljs.core.next(seq__12321__$1);
var G__12840 = null;
var G__12841 = (0);
var G__12842 = (0);
seq__12321 = G__12839;
chunk__12322 = G__12840;
count__12323 = G__12841;
i__12324 = G__12842;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12337 = arguments.length;
switch (G__12337) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12345 = arguments.length;
switch (G__12345) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12359 = arguments.length;
switch (G__12359) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5162__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5903__auto__ = [];
var len__5897__auto___12877 = arguments.length;
var i__5898__auto___12878 = (0);
while(true){
if((i__5898__auto___12878 < len__5897__auto___12877)){
args__5903__auto__.push((arguments[i__5898__auto___12878]));

var G__12879 = (i__5898__auto___12878 + (1));
i__5898__auto___12878 = G__12879;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((0) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5904__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12372_12881 = cljs.core.seq(nodes);
var chunk__12373_12882 = null;
var count__12374_12883 = (0);
var i__12375_12884 = (0);
while(true){
if((i__12375_12884 < count__12374_12883)){
var node_12885 = chunk__12373_12882.cljs$core$IIndexed$_nth$arity$2(null,i__12375_12884);
fragment.appendChild(shadow.dom._to_dom(node_12885));


var G__12886 = seq__12372_12881;
var G__12887 = chunk__12373_12882;
var G__12888 = count__12374_12883;
var G__12889 = (i__12375_12884 + (1));
seq__12372_12881 = G__12886;
chunk__12373_12882 = G__12887;
count__12374_12883 = G__12888;
i__12375_12884 = G__12889;
continue;
} else {
var temp__5823__auto___12890 = cljs.core.seq(seq__12372_12881);
if(temp__5823__auto___12890){
var seq__12372_12891__$1 = temp__5823__auto___12890;
if(cljs.core.chunked_seq_QMARK_(seq__12372_12891__$1)){
var c__5694__auto___12893 = cljs.core.chunk_first(seq__12372_12891__$1);
var G__12894 = cljs.core.chunk_rest(seq__12372_12891__$1);
var G__12895 = c__5694__auto___12893;
var G__12896 = cljs.core.count(c__5694__auto___12893);
var G__12897 = (0);
seq__12372_12881 = G__12894;
chunk__12373_12882 = G__12895;
count__12374_12883 = G__12896;
i__12375_12884 = G__12897;
continue;
} else {
var node_12898 = cljs.core.first(seq__12372_12891__$1);
fragment.appendChild(shadow.dom._to_dom(node_12898));


var G__12909 = cljs.core.next(seq__12372_12891__$1);
var G__12910 = null;
var G__12911 = (0);
var G__12912 = (0);
seq__12372_12881 = G__12909;
chunk__12373_12882 = G__12910;
count__12374_12883 = G__12911;
i__12375_12884 = G__12912;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12368){
var self__5883__auto__ = this;
return self__5883__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12368));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12385_12914 = cljs.core.seq(scripts);
var chunk__12386_12915 = null;
var count__12387_12916 = (0);
var i__12388_12917 = (0);
while(true){
if((i__12388_12917 < count__12387_12916)){
var vec__12399_12919 = chunk__12386_12915.cljs$core$IIndexed$_nth$arity$2(null,i__12388_12917);
var script_tag_12920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12399_12919,(0),null);
var script_body_12921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12399_12919,(1),null);
eval(script_body_12921);


var G__12924 = seq__12385_12914;
var G__12925 = chunk__12386_12915;
var G__12926 = count__12387_12916;
var G__12927 = (i__12388_12917 + (1));
seq__12385_12914 = G__12924;
chunk__12386_12915 = G__12925;
count__12387_12916 = G__12926;
i__12388_12917 = G__12927;
continue;
} else {
var temp__5823__auto___12928 = cljs.core.seq(seq__12385_12914);
if(temp__5823__auto___12928){
var seq__12385_12929__$1 = temp__5823__auto___12928;
if(cljs.core.chunked_seq_QMARK_(seq__12385_12929__$1)){
var c__5694__auto___12932 = cljs.core.chunk_first(seq__12385_12929__$1);
var G__12933 = cljs.core.chunk_rest(seq__12385_12929__$1);
var G__12934 = c__5694__auto___12932;
var G__12935 = cljs.core.count(c__5694__auto___12932);
var G__12936 = (0);
seq__12385_12914 = G__12933;
chunk__12386_12915 = G__12934;
count__12387_12916 = G__12935;
i__12388_12917 = G__12936;
continue;
} else {
var vec__12405_12937 = cljs.core.first(seq__12385_12929__$1);
var script_tag_12938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12405_12937,(0),null);
var script_body_12939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12405_12937,(1),null);
eval(script_body_12939);


var G__12944 = cljs.core.next(seq__12385_12929__$1);
var G__12945 = null;
var G__12946 = (0);
var G__12947 = (0);
seq__12385_12914 = G__12944;
chunk__12386_12915 = G__12945;
count__12387_12916 = G__12946;
i__12388_12917 = G__12947;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12409){
var vec__12410 = p__12409;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12410,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12410,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12414 = arguments.length;
switch (G__12414) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12426 = cljs.core.seq(style_keys);
var chunk__12427 = null;
var count__12428 = (0);
var i__12429 = (0);
while(true){
if((i__12429 < count__12428)){
var it = chunk__12427.cljs$core$IIndexed$_nth$arity$2(null,i__12429);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12962 = seq__12426;
var G__12963 = chunk__12427;
var G__12964 = count__12428;
var G__12965 = (i__12429 + (1));
seq__12426 = G__12962;
chunk__12427 = G__12963;
count__12428 = G__12964;
i__12429 = G__12965;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12426);
if(temp__5823__auto__){
var seq__12426__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12426__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__12426__$1);
var G__12966 = cljs.core.chunk_rest(seq__12426__$1);
var G__12967 = c__5694__auto__;
var G__12968 = cljs.core.count(c__5694__auto__);
var G__12969 = (0);
seq__12426 = G__12966;
chunk__12427 = G__12967;
count__12428 = G__12968;
i__12429 = G__12969;
continue;
} else {
var it = cljs.core.first(seq__12426__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12970 = cljs.core.next(seq__12426__$1);
var G__12971 = null;
var G__12972 = (0);
var G__12973 = (0);
seq__12426 = G__12970;
chunk__12427 = G__12971;
count__12428 = G__12972;
i__12429 = G__12973;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k12436,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__12447 = k12436;
var G__12447__$1 = (((G__12447 instanceof cljs.core.Keyword))?G__12447.fqn:null);
switch (G__12447__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12436,else__5472__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__12450){
var vec__12451 = p__12450;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12435){
var self__ = this;
var G__12435__$1 = this;
return (new cljs.core.RecordIter((0),G__12435__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12437,other12438){
var self__ = this;
var this12437__$1 = this;
return (((!((other12438 == null)))) && ((((this12437__$1.constructor === other12438.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12437__$1.x,other12438.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12437__$1.y,other12438.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12437__$1.__extmap,other12438.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k12436){
var self__ = this;
var this__5476__auto____$1 = this;
var G__12482 = k12436;
var G__12482__$1 = (((G__12482 instanceof cljs.core.Keyword))?G__12482.fqn:null);
switch (G__12482__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12436);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12435){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12490 = cljs.core.keyword_identical_QMARK_;
var expr__12491 = k__5478__auto__;
if(cljs.core.truth_((pred__12490.cljs$core$IFn$_invoke$arity$2 ? pred__12490.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12491) : pred__12490.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12491)))){
return (new shadow.dom.Coordinate(G__12435,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12490.cljs$core$IFn$_invoke$arity$2 ? pred__12490.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12491) : pred__12490.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12491)))){
return (new shadow.dom.Coordinate(self__.x,G__12435,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__12435),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__12435){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12435,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12443){
var extmap__5511__auto__ = (function (){var G__12503 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12443,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12443)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12503);
} else {
return G__12503;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12443),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12443),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k12507,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__12511 = k12507;
var G__12511__$1 = (((G__12511 instanceof cljs.core.Keyword))?G__12511.fqn:null);
switch (G__12511__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12507,else__5472__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__12512){
var vec__12513 = p__12512;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12513,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12513,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#shadow.dom.Size{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12506){
var self__ = this;
var G__12506__$1 = this;
return (new cljs.core.RecordIter((0),G__12506__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (coll__5466__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
})(this__5465__auto____$1);
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12508,other12509){
var self__ = this;
var this12508__$1 = this;
return (((!((other12509 == null)))) && ((((this12508__$1.constructor === other12509.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12508__$1.w,other12509.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12508__$1.h,other12509.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12508__$1.__extmap,other12509.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k12507){
var self__ = this;
var this__5476__auto____$1 = this;
var G__12524 = k12507;
var G__12524__$1 = (((G__12524 instanceof cljs.core.Keyword))?G__12524.fqn:null);
switch (G__12524__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12507);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__12506){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__12525 = cljs.core.keyword_identical_QMARK_;
var expr__12526 = k__5478__auto__;
if(cljs.core.truth_((pred__12525.cljs$core$IFn$_invoke$arity$2 ? pred__12525.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12526) : pred__12525.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12526)))){
return (new shadow.dom.Size(G__12506,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12525.cljs$core$IFn$_invoke$arity$2 ? pred__12525.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12526) : pred__12525.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12526)))){
return (new shadow.dom.Size(self__.w,G__12506,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__12506),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__12506){
var self__ = this;
var this__5468__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12506,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5475__auto__,(0)),cljs.core._nth(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12510){
var extmap__5511__auto__ = (function (){var G__12529 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12510,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12510)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12529);
} else {
return G__12529;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12510),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12510),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5759__auto__ = opts;
var l__5760__auto__ = a__5759__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5760__auto__)){
var G__13018 = (i + (1));
var G__13019 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13018;
ret = G__13019;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12531){
var vec__12532 = p__12531;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12532,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12532,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12536 = arguments.length;
switch (G__12536) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13021 = ps;
var G__13022 = (i + (1));
el__$1 = G__13021;
i = G__13022;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12540 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12540,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12540,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12540,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12544_13029 = cljs.core.seq(props);
var chunk__12545_13030 = null;
var count__12546_13031 = (0);
var i__12547_13032 = (0);
while(true){
if((i__12547_13032 < count__12546_13031)){
var vec__12556_13033 = chunk__12545_13030.cljs$core$IIndexed$_nth$arity$2(null,i__12547_13032);
var k_13034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556_13033,(0),null);
var v_13035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12556_13033,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_13034);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13034),v_13035);


var G__13037 = seq__12544_13029;
var G__13038 = chunk__12545_13030;
var G__13039 = count__12546_13031;
var G__13040 = (i__12547_13032 + (1));
seq__12544_13029 = G__13037;
chunk__12545_13030 = G__13038;
count__12546_13031 = G__13039;
i__12547_13032 = G__13040;
continue;
} else {
var temp__5823__auto___13041 = cljs.core.seq(seq__12544_13029);
if(temp__5823__auto___13041){
var seq__12544_13044__$1 = temp__5823__auto___13041;
if(cljs.core.chunked_seq_QMARK_(seq__12544_13044__$1)){
var c__5694__auto___13045 = cljs.core.chunk_first(seq__12544_13044__$1);
var G__13047 = cljs.core.chunk_rest(seq__12544_13044__$1);
var G__13048 = c__5694__auto___13045;
var G__13049 = cljs.core.count(c__5694__auto___13045);
var G__13050 = (0);
seq__12544_13029 = G__13047;
chunk__12545_13030 = G__13048;
count__12546_13031 = G__13049;
i__12547_13032 = G__13050;
continue;
} else {
var vec__12559_13051 = cljs.core.first(seq__12544_13044__$1);
var k_13052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12559_13051,(0),null);
var v_13053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12559_13051,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_13052);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13052),v_13053);


var G__13054 = cljs.core.next(seq__12544_13044__$1);
var G__13055 = null;
var G__13056 = (0);
var G__13057 = (0);
seq__12544_13029 = G__13054;
chunk__12545_13030 = G__13055;
count__12546_13031 = G__13056;
i__12547_13032 = G__13057;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12574 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12574,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12574,(1),null);
var seq__12577_13061 = cljs.core.seq(node_children);
var chunk__12579_13062 = null;
var count__12580_13063 = (0);
var i__12581_13064 = (0);
while(true){
if((i__12581_13064 < count__12580_13063)){
var child_struct_13067 = chunk__12579_13062.cljs$core$IIndexed$_nth$arity$2(null,i__12581_13064);
if((!((child_struct_13067 == null)))){
if(typeof child_struct_13067 === 'string'){
var text_13068 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13068)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13067)));
} else {
var children_13069 = shadow.dom.svg_node(child_struct_13067);
if(cljs.core.seq_QMARK_(children_13069)){
var seq__12627_13070 = cljs.core.seq(children_13069);
var chunk__12629_13071 = null;
var count__12630_13072 = (0);
var i__12631_13073 = (0);
while(true){
if((i__12631_13073 < count__12630_13072)){
var child_13074 = chunk__12629_13071.cljs$core$IIndexed$_nth$arity$2(null,i__12631_13073);
if(cljs.core.truth_(child_13074)){
node.appendChild(child_13074);


var G__13075 = seq__12627_13070;
var G__13076 = chunk__12629_13071;
var G__13077 = count__12630_13072;
var G__13078 = (i__12631_13073 + (1));
seq__12627_13070 = G__13075;
chunk__12629_13071 = G__13076;
count__12630_13072 = G__13077;
i__12631_13073 = G__13078;
continue;
} else {
var G__13079 = seq__12627_13070;
var G__13080 = chunk__12629_13071;
var G__13081 = count__12630_13072;
var G__13082 = (i__12631_13073 + (1));
seq__12627_13070 = G__13079;
chunk__12629_13071 = G__13080;
count__12630_13072 = G__13081;
i__12631_13073 = G__13082;
continue;
}
} else {
var temp__5823__auto___13083 = cljs.core.seq(seq__12627_13070);
if(temp__5823__auto___13083){
var seq__12627_13089__$1 = temp__5823__auto___13083;
if(cljs.core.chunked_seq_QMARK_(seq__12627_13089__$1)){
var c__5694__auto___13090 = cljs.core.chunk_first(seq__12627_13089__$1);
var G__13091 = cljs.core.chunk_rest(seq__12627_13089__$1);
var G__13092 = c__5694__auto___13090;
var G__13093 = cljs.core.count(c__5694__auto___13090);
var G__13094 = (0);
seq__12627_13070 = G__13091;
chunk__12629_13071 = G__13092;
count__12630_13072 = G__13093;
i__12631_13073 = G__13094;
continue;
} else {
var child_13095 = cljs.core.first(seq__12627_13089__$1);
if(cljs.core.truth_(child_13095)){
node.appendChild(child_13095);


var G__13096 = cljs.core.next(seq__12627_13089__$1);
var G__13097 = null;
var G__13098 = (0);
var G__13099 = (0);
seq__12627_13070 = G__13096;
chunk__12629_13071 = G__13097;
count__12630_13072 = G__13098;
i__12631_13073 = G__13099;
continue;
} else {
var G__13100 = cljs.core.next(seq__12627_13089__$1);
var G__13101 = null;
var G__13102 = (0);
var G__13103 = (0);
seq__12627_13070 = G__13100;
chunk__12629_13071 = G__13101;
count__12630_13072 = G__13102;
i__12631_13073 = G__13103;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13069);
}
}


var G__13104 = seq__12577_13061;
var G__13105 = chunk__12579_13062;
var G__13106 = count__12580_13063;
var G__13107 = (i__12581_13064 + (1));
seq__12577_13061 = G__13104;
chunk__12579_13062 = G__13105;
count__12580_13063 = G__13106;
i__12581_13064 = G__13107;
continue;
} else {
var G__13108 = seq__12577_13061;
var G__13109 = chunk__12579_13062;
var G__13110 = count__12580_13063;
var G__13111 = (i__12581_13064 + (1));
seq__12577_13061 = G__13108;
chunk__12579_13062 = G__13109;
count__12580_13063 = G__13110;
i__12581_13064 = G__13111;
continue;
}
} else {
var temp__5823__auto___13112 = cljs.core.seq(seq__12577_13061);
if(temp__5823__auto___13112){
var seq__12577_13113__$1 = temp__5823__auto___13112;
if(cljs.core.chunked_seq_QMARK_(seq__12577_13113__$1)){
var c__5694__auto___13114 = cljs.core.chunk_first(seq__12577_13113__$1);
var G__13115 = cljs.core.chunk_rest(seq__12577_13113__$1);
var G__13116 = c__5694__auto___13114;
var G__13117 = cljs.core.count(c__5694__auto___13114);
var G__13118 = (0);
seq__12577_13061 = G__13115;
chunk__12579_13062 = G__13116;
count__12580_13063 = G__13117;
i__12581_13064 = G__13118;
continue;
} else {
var child_struct_13119 = cljs.core.first(seq__12577_13113__$1);
if((!((child_struct_13119 == null)))){
if(typeof child_struct_13119 === 'string'){
var text_13120 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13120)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13119)));
} else {
var children_13121 = shadow.dom.svg_node(child_struct_13119);
if(cljs.core.seq_QMARK_(children_13121)){
var seq__12647_13122 = cljs.core.seq(children_13121);
var chunk__12649_13123 = null;
var count__12650_13124 = (0);
var i__12651_13125 = (0);
while(true){
if((i__12651_13125 < count__12650_13124)){
var child_13126 = chunk__12649_13123.cljs$core$IIndexed$_nth$arity$2(null,i__12651_13125);
if(cljs.core.truth_(child_13126)){
node.appendChild(child_13126);


var G__13127 = seq__12647_13122;
var G__13128 = chunk__12649_13123;
var G__13129 = count__12650_13124;
var G__13130 = (i__12651_13125 + (1));
seq__12647_13122 = G__13127;
chunk__12649_13123 = G__13128;
count__12650_13124 = G__13129;
i__12651_13125 = G__13130;
continue;
} else {
var G__13131 = seq__12647_13122;
var G__13132 = chunk__12649_13123;
var G__13133 = count__12650_13124;
var G__13134 = (i__12651_13125 + (1));
seq__12647_13122 = G__13131;
chunk__12649_13123 = G__13132;
count__12650_13124 = G__13133;
i__12651_13125 = G__13134;
continue;
}
} else {
var temp__5823__auto___13135__$1 = cljs.core.seq(seq__12647_13122);
if(temp__5823__auto___13135__$1){
var seq__12647_13141__$1 = temp__5823__auto___13135__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12647_13141__$1)){
var c__5694__auto___13142 = cljs.core.chunk_first(seq__12647_13141__$1);
var G__13143 = cljs.core.chunk_rest(seq__12647_13141__$1);
var G__13144 = c__5694__auto___13142;
var G__13145 = cljs.core.count(c__5694__auto___13142);
var G__13146 = (0);
seq__12647_13122 = G__13143;
chunk__12649_13123 = G__13144;
count__12650_13124 = G__13145;
i__12651_13125 = G__13146;
continue;
} else {
var child_13147 = cljs.core.first(seq__12647_13141__$1);
if(cljs.core.truth_(child_13147)){
node.appendChild(child_13147);


var G__13148 = cljs.core.next(seq__12647_13141__$1);
var G__13149 = null;
var G__13150 = (0);
var G__13151 = (0);
seq__12647_13122 = G__13148;
chunk__12649_13123 = G__13149;
count__12650_13124 = G__13150;
i__12651_13125 = G__13151;
continue;
} else {
var G__13152 = cljs.core.next(seq__12647_13141__$1);
var G__13153 = null;
var G__13154 = (0);
var G__13155 = (0);
seq__12647_13122 = G__13152;
chunk__12649_13123 = G__13153;
count__12650_13124 = G__13154;
i__12651_13125 = G__13155;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13121);
}
}


var G__13157 = cljs.core.next(seq__12577_13113__$1);
var G__13158 = null;
var G__13159 = (0);
var G__13160 = (0);
seq__12577_13061 = G__13157;
chunk__12579_13062 = G__13158;
count__12580_13063 = G__13159;
i__12581_13064 = G__13160;
continue;
} else {
var G__13161 = cljs.core.next(seq__12577_13113__$1);
var G__13162 = null;
var G__13163 = (0);
var G__13164 = (0);
seq__12577_13061 = G__13161;
chunk__12579_13062 = G__13162;
count__12580_13063 = G__13163;
i__12581_13064 = G__13164;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5903__auto__ = [];
var len__5897__auto___13169 = arguments.length;
var i__5898__auto___13171 = (0);
while(true){
if((i__5898__auto___13171 < len__5897__auto___13169)){
args__5903__auto__.push((arguments[i__5898__auto___13171]));

var G__13175 = (i__5898__auto___13171 + (1));
i__5898__auto___13171 = G__13175;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((1) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5904__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12664){
var G__12665 = cljs.core.first(seq12664);
var seq12664__$1 = cljs.core.next(seq12664);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12665,seq12664__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
