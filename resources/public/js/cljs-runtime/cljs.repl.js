goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20553){
var map__20554 = p__20553;
var map__20554__$1 = cljs.core.__destructure_map(map__20554);
var m = map__20554__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20554__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20554__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5162__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20555_20645 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20556_20646 = null;
var count__20557_20647 = (0);
var i__20558_20648 = (0);
while(true){
if((i__20558_20648 < count__20557_20647)){
var f_20649 = chunk__20556_20646.cljs$core$IIndexed$_nth$arity$2(null,i__20558_20648);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20649], 0));


var G__20650 = seq__20555_20645;
var G__20651 = chunk__20556_20646;
var G__20652 = count__20557_20647;
var G__20653 = (i__20558_20648 + (1));
seq__20555_20645 = G__20650;
chunk__20556_20646 = G__20651;
count__20557_20647 = G__20652;
i__20558_20648 = G__20653;
continue;
} else {
var temp__5823__auto___20654 = cljs.core.seq(seq__20555_20645);
if(temp__5823__auto___20654){
var seq__20555_20655__$1 = temp__5823__auto___20654;
if(cljs.core.chunked_seq_QMARK_(seq__20555_20655__$1)){
var c__5694__auto___20656 = cljs.core.chunk_first(seq__20555_20655__$1);
var G__20657 = cljs.core.chunk_rest(seq__20555_20655__$1);
var G__20658 = c__5694__auto___20656;
var G__20659 = cljs.core.count(c__5694__auto___20656);
var G__20660 = (0);
seq__20555_20645 = G__20657;
chunk__20556_20646 = G__20658;
count__20557_20647 = G__20659;
i__20558_20648 = G__20660;
continue;
} else {
var f_20661 = cljs.core.first(seq__20555_20655__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20661], 0));


var G__20662 = cljs.core.next(seq__20555_20655__$1);
var G__20663 = null;
var G__20664 = (0);
var G__20665 = (0);
seq__20555_20645 = G__20662;
chunk__20556_20646 = G__20663;
count__20557_20647 = G__20664;
i__20558_20648 = G__20665;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20666 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5162__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20666], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20666)))?cljs.core.second(arglists_20666):arglists_20666)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20559_20667 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20560_20668 = null;
var count__20561_20669 = (0);
var i__20562_20670 = (0);
while(true){
if((i__20562_20670 < count__20561_20669)){
var vec__20571_20671 = chunk__20560_20668.cljs$core$IIndexed$_nth$arity$2(null,i__20562_20670);
var name_20672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20571_20671,(0),null);
var map__20574_20673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20571_20671,(1),null);
var map__20574_20674__$1 = cljs.core.__destructure_map(map__20574_20673);
var doc_20675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20574_20674__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20574_20674__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20672], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20676], 0));

if(cljs.core.truth_(doc_20675)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20675], 0));
} else {
}


var G__20677 = seq__20559_20667;
var G__20678 = chunk__20560_20668;
var G__20679 = count__20561_20669;
var G__20680 = (i__20562_20670 + (1));
seq__20559_20667 = G__20677;
chunk__20560_20668 = G__20678;
count__20561_20669 = G__20679;
i__20562_20670 = G__20680;
continue;
} else {
var temp__5823__auto___20681 = cljs.core.seq(seq__20559_20667);
if(temp__5823__auto___20681){
var seq__20559_20682__$1 = temp__5823__auto___20681;
if(cljs.core.chunked_seq_QMARK_(seq__20559_20682__$1)){
var c__5694__auto___20683 = cljs.core.chunk_first(seq__20559_20682__$1);
var G__20684 = cljs.core.chunk_rest(seq__20559_20682__$1);
var G__20685 = c__5694__auto___20683;
var G__20686 = cljs.core.count(c__5694__auto___20683);
var G__20687 = (0);
seq__20559_20667 = G__20684;
chunk__20560_20668 = G__20685;
count__20561_20669 = G__20686;
i__20562_20670 = G__20687;
continue;
} else {
var vec__20575_20688 = cljs.core.first(seq__20559_20682__$1);
var name_20689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20575_20688,(0),null);
var map__20578_20690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20575_20688,(1),null);
var map__20578_20691__$1 = cljs.core.__destructure_map(map__20578_20690);
var doc_20692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20578_20691__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20578_20691__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20689], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20693], 0));

if(cljs.core.truth_(doc_20692)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20692], 0));
} else {
}


var G__20694 = cljs.core.next(seq__20559_20682__$1);
var G__20695 = null;
var G__20696 = (0);
var G__20697 = (0);
seq__20559_20667 = G__20694;
chunk__20560_20668 = G__20695;
count__20561_20669 = G__20696;
i__20562_20670 = G__20697;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20579 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20580 = null;
var count__20581 = (0);
var i__20582 = (0);
while(true){
if((i__20582 < count__20581)){
var role = chunk__20580.cljs$core$IIndexed$_nth$arity$2(null,i__20582);
var temp__5823__auto___20698__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___20698__$1)){
var spec_20699 = temp__5823__auto___20698__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_20699)], 0));
} else {
}


var G__20700 = seq__20579;
var G__20701 = chunk__20580;
var G__20702 = count__20581;
var G__20703 = (i__20582 + (1));
seq__20579 = G__20700;
chunk__20580 = G__20701;
count__20581 = G__20702;
i__20582 = G__20703;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__20579);
if(temp__5823__auto____$1){
var seq__20579__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20579__$1)){
var c__5694__auto__ = cljs.core.chunk_first(seq__20579__$1);
var G__20704 = cljs.core.chunk_rest(seq__20579__$1);
var G__20705 = c__5694__auto__;
var G__20706 = cljs.core.count(c__5694__auto__);
var G__20707 = (0);
seq__20579 = G__20704;
chunk__20580 = G__20705;
count__20581 = G__20706;
i__20582 = G__20707;
continue;
} else {
var role = cljs.core.first(seq__20579__$1);
var temp__5823__auto___20708__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___20708__$2)){
var spec_20709 = temp__5823__auto___20708__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_20709)], 0));
} else {
}


var G__20710 = cljs.core.next(seq__20579__$1);
var G__20711 = null;
var G__20712 = (0);
var G__20713 = (0);
seq__20579 = G__20710;
chunk__20580 = G__20711;
count__20581 = G__20712;
i__20582 = G__20713;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20585 = datafied_throwable;
var map__20585__$1 = cljs.core.__destructure_map(map__20585);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20585__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20585__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20585__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20586 = cljs.core.last(via);
var map__20586__$1 = cljs.core.__destructure_map(map__20586);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20586__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20587 = data;
var map__20587__$1 = cljs.core.__destructure_map(map__20587);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20587__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20587__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20587__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20588 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20588__$1 = cljs.core.__destructure_map(map__20588);
var top_data = map__20588__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20588__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20589 = phase;
var G__20589__$1 = (((G__20589 instanceof cljs.core.Keyword))?G__20589.fqn:null);
switch (G__20589__$1) {
case "read-source":
var map__20590 = data;
var map__20590__$1 = cljs.core.__destructure_map(map__20590);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20590__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20590__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20591 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20591__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20591,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20591);
var G__20591__$2 = (cljs.core.truth_((function (){var fexpr__20592 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20592.cljs$core$IFn$_invoke$arity$1 ? fexpr__20592.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20592.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20591__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20591__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20591__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20591__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20593 = top_data;
var G__20593__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20593,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20593);
var G__20593__$2 = (cljs.core.truth_((function (){var fexpr__20594 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20594.cljs$core$IFn$_invoke$arity$1 ? fexpr__20594.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20594.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20593__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20593__$1);
var G__20593__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20593__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20593__$2);
var G__20593__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20593__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20593__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20593__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20593__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20595 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20595,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20595,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20595,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20595,(3),null);
var G__20598 = top_data;
var G__20598__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20598,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20598);
var G__20598__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20598__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20598__$1);
var G__20598__$3 = (cljs.core.truth_((function (){var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20598__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20598__$2);
var G__20598__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20598__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20598__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20598__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20598__$4;
}

break;
case "execution":
var vec__20599 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20599,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20599,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20599,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20599,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20584_SHARP_){
var or__5162__auto__ = (p1__20584_SHARP_ == null);
if(or__5162__auto__){
return or__5162__auto__;
} else {
var fexpr__20602 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20602.cljs$core$IFn$_invoke$arity$1 ? fexpr__20602.cljs$core$IFn$_invoke$arity$1(p1__20584_SHARP_) : fexpr__20602.call(null,p1__20584_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5162__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return line;
}
})();
var G__20603 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20603__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20603,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20603);
var G__20603__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20603__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20603__$1);
var G__20603__$3 = (cljs.core.truth_((function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
var and__5160__auto__ = source__$1;
if(cljs.core.truth_(and__5160__auto__)){
return method;
} else {
return and__5160__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20603__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5162__auto__ = fn;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20603__$2);
var G__20603__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20603__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20603__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20603__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20603__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20589__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20606){
var map__20607 = p__20606;
var map__20607__$1 = cljs.core.__destructure_map(map__20607);
var triage_data = map__20607__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20607__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = source;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5162__auto__ = line;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5162__auto__ = class$;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__20608 = phase;
var G__20608__$1 = (((G__20608 instanceof cljs.core.Keyword))?G__20608.fqn:null);
switch (G__20608__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20609 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20610 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20611 = loc;
var G__20612 = (cljs.core.truth_(spec)?(function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20613_20716 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20614_20717 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20615_20718 = true;
var _STAR_print_fn_STAR__temp_val__20616_20719 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20615_20718);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20616_20719);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20604_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20604_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20614_20717);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20613_20716);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20609,G__20610,G__20611,G__20612) : format.call(null,G__20609,G__20610,G__20611,G__20612));

break;
case "macroexpansion":
var G__20617 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20618 = cause_type;
var G__20619 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20620 = loc;
var G__20621 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20617,G__20618,G__20619,G__20620,G__20621) : format.call(null,G__20617,G__20618,G__20619,G__20620,G__20621));

break;
case "compile-syntax-check":
var G__20622 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20623 = cause_type;
var G__20624 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20625 = loc;
var G__20626 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20622,G__20623,G__20624,G__20625,G__20626) : format.call(null,G__20622,G__20623,G__20624,G__20625,G__20626));

break;
case "compilation":
var G__20627 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20628 = cause_type;
var G__20629 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20630 = loc;
var G__20631 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20627,G__20628,G__20629,G__20630,G__20631) : format.call(null,G__20627,G__20628,G__20629,G__20630,G__20631));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20632 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20633 = symbol;
var G__20634 = loc;
var G__20635 = (function (){var sb__5816__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20636_20720 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20637_20721 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20638_20722 = true;
var _STAR_print_fn_STAR__temp_val__20639_20723 = (function (x__5817__auto__){
return sb__5816__auto__.append(x__5817__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20638_20722);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20639_20723);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20605_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20605_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20637_20721);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20636_20720);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5816__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20632,G__20633,G__20634,G__20635) : format.call(null,G__20632,G__20633,G__20634,G__20635));
} else {
var G__20640 = "Execution error%s at %s(%s).\n%s\n";
var G__20641 = cause_type;
var G__20642 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__20643 = loc;
var G__20644 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20640,G__20641,G__20642,G__20643,G__20644) : format.call(null,G__20640,G__20641,G__20642,G__20643,G__20644));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20608__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
