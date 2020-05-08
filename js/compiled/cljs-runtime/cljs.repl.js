goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__57927){
var map__57928 = p__57927;
var map__57928__$1 = (((((!((map__57928 == null))))?(((((map__57928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57928):map__57928);
var m = map__57928__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57928__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57928__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__57942_58158 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57943_58159 = null;
var count__57944_58160 = (0);
var i__57945_58161 = (0);
while(true){
if((i__57945_58161 < count__57944_58160)){
var f_58163 = chunk__57943_58159.cljs$core$IIndexed$_nth$arity$2(null,i__57945_58161);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_58163], 0));


var G__58165 = seq__57942_58158;
var G__58166 = chunk__57943_58159;
var G__58167 = count__57944_58160;
var G__58168 = (i__57945_58161 + (1));
seq__57942_58158 = G__58165;
chunk__57943_58159 = G__58166;
count__57944_58160 = G__58167;
i__57945_58161 = G__58168;
continue;
} else {
var temp__5735__auto___58171 = cljs.core.seq(seq__57942_58158);
if(temp__5735__auto___58171){
var seq__57942_58172__$1 = temp__5735__auto___58171;
if(cljs.core.chunked_seq_QMARK_(seq__57942_58172__$1)){
var c__4609__auto___58173 = cljs.core.chunk_first(seq__57942_58172__$1);
var G__58174 = cljs.core.chunk_rest(seq__57942_58172__$1);
var G__58175 = c__4609__auto___58173;
var G__58176 = cljs.core.count(c__4609__auto___58173);
var G__58177 = (0);
seq__57942_58158 = G__58174;
chunk__57943_58159 = G__58175;
count__57944_58160 = G__58176;
i__57945_58161 = G__58177;
continue;
} else {
var f_58180 = cljs.core.first(seq__57942_58172__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_58180], 0));


var G__58181 = cljs.core.next(seq__57942_58172__$1);
var G__58182 = null;
var G__58183 = (0);
var G__58184 = (0);
seq__57942_58158 = G__58181;
chunk__57943_58159 = G__58182;
count__57944_58160 = G__58183;
i__57945_58161 = G__58184;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_58187 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_58187], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_58187)))?cljs.core.second(arglists_58187):arglists_58187)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
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
var seq__57955_58195 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57956_58196 = null;
var count__57957_58197 = (0);
var i__57958_58198 = (0);
while(true){
if((i__57958_58198 < count__57957_58197)){
var vec__57979_58199 = chunk__57956_58196.cljs$core$IIndexed$_nth$arity$2(null,i__57958_58198);
var name_58200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57979_58199,(0),null);
var map__57982_58201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57979_58199,(1),null);
var map__57982_58202__$1 = (((((!((map__57982_58201 == null))))?(((((map__57982_58201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57982_58201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57982_58201):map__57982_58201);
var doc_58203 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57982_58202__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57982_58202__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_58200], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_58204], 0));

if(cljs.core.truth_(doc_58203)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_58203], 0));
} else {
}


var G__58212 = seq__57955_58195;
var G__58213 = chunk__57956_58196;
var G__58214 = count__57957_58197;
var G__58215 = (i__57958_58198 + (1));
seq__57955_58195 = G__58212;
chunk__57956_58196 = G__58213;
count__57957_58197 = G__58214;
i__57958_58198 = G__58215;
continue;
} else {
var temp__5735__auto___58217 = cljs.core.seq(seq__57955_58195);
if(temp__5735__auto___58217){
var seq__57955_58219__$1 = temp__5735__auto___58217;
if(cljs.core.chunked_seq_QMARK_(seq__57955_58219__$1)){
var c__4609__auto___58220 = cljs.core.chunk_first(seq__57955_58219__$1);
var G__58221 = cljs.core.chunk_rest(seq__57955_58219__$1);
var G__58222 = c__4609__auto___58220;
var G__58223 = cljs.core.count(c__4609__auto___58220);
var G__58224 = (0);
seq__57955_58195 = G__58221;
chunk__57956_58196 = G__58222;
count__57957_58197 = G__58223;
i__57958_58198 = G__58224;
continue;
} else {
var vec__57988_58227 = cljs.core.first(seq__57955_58219__$1);
var name_58228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57988_58227,(0),null);
var map__57991_58229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57988_58227,(1),null);
var map__57991_58230__$1 = (((((!((map__57991_58229 == null))))?(((((map__57991_58229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57991_58229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57991_58229):map__57991_58229);
var doc_58231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57991_58230__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57991_58230__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_58228], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_58232], 0));

if(cljs.core.truth_(doc_58231)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_58231], 0));
} else {
}


var G__58236 = cljs.core.next(seq__57955_58219__$1);
var G__58237 = null;
var G__58238 = (0);
var G__58239 = (0);
seq__57955_58195 = G__58236;
chunk__57956_58196 = G__58237;
count__57957_58197 = G__58238;
i__57958_58198 = G__58239;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__58002 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__58003 = null;
var count__58004 = (0);
var i__58005 = (0);
while(true){
if((i__58005 < count__58004)){
var role = chunk__58003.cljs$core$IIndexed$_nth$arity$2(null,i__58005);
var temp__5735__auto___58244__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___58244__$1)){
var spec_58246 = temp__5735__auto___58244__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_58246)], 0));
} else {
}


var G__58247 = seq__58002;
var G__58248 = chunk__58003;
var G__58249 = count__58004;
var G__58250 = (i__58005 + (1));
seq__58002 = G__58247;
chunk__58003 = G__58248;
count__58004 = G__58249;
i__58005 = G__58250;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__58002);
if(temp__5735__auto____$1){
var seq__58002__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__58002__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58002__$1);
var G__58253 = cljs.core.chunk_rest(seq__58002__$1);
var G__58254 = c__4609__auto__;
var G__58255 = cljs.core.count(c__4609__auto__);
var G__58256 = (0);
seq__58002 = G__58253;
chunk__58003 = G__58254;
count__58004 = G__58255;
i__58005 = G__58256;
continue;
} else {
var role = cljs.core.first(seq__58002__$1);
var temp__5735__auto___58258__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___58258__$2)){
var spec_58260 = temp__5735__auto___58258__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_58260)], 0));
} else {
}


var G__58262 = cljs.core.next(seq__58002__$1);
var G__58263 = null;
var G__58264 = (0);
var G__58265 = (0);
seq__58002 = G__58262;
chunk__58003 = G__58263;
count__58004 = G__58264;
i__58005 = G__58265;
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
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__58271 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__58272 = cljs.core.ex_cause(t);
via = G__58271;
t = G__58272;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
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
var map__58052 = datafied_throwable;
var map__58052__$1 = (((((!((map__58052 == null))))?(((((map__58052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58052):map__58052);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58052__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58052__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__58052__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__58053 = cljs.core.last(via);
var map__58053__$1 = (((((!((map__58053 == null))))?(((((map__58053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58053):map__58053);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58053__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58053__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58053__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__58054 = data;
var map__58054__$1 = (((((!((map__58054 == null))))?(((((map__58054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58054):map__58054);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58054__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58054__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58054__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__58055 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__58055__$1 = (((((!((map__58055 == null))))?(((((map__58055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58055):map__58055);
var top_data = map__58055__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58055__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__58067 = phase;
var G__58067__$1 = (((G__58067 instanceof cljs.core.Keyword))?G__58067.fqn:null);
switch (G__58067__$1) {
case "read-source":
var map__58068 = data;
var map__58068__$1 = (((((!((map__58068 == null))))?(((((map__58068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58068):map__58068);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58068__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58068__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__58070 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__58070__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58070,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__58070);
var G__58070__$2 = (cljs.core.truth_((function (){var fexpr__58071 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__58071.cljs$core$IFn$_invoke$arity$1 ? fexpr__58071.cljs$core$IFn$_invoke$arity$1(source) : fexpr__58071.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__58070__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__58070__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58070__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__58070__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__58072 = top_data;
var G__58072__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58072,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__58072);
var G__58072__$2 = (cljs.core.truth_((function (){var fexpr__58073 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__58073.cljs$core$IFn$_invoke$arity$1 ? fexpr__58073.cljs$core$IFn$_invoke$arity$1(source) : fexpr__58073.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__58072__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__58072__$1);
var G__58072__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58072__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__58072__$2);
var G__58072__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58072__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__58072__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58072__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__58072__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__58074 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58074,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58074,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58074,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58074,(3),null);
var G__58083 = top_data;
var G__58083__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58083,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__58083);
var G__58083__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58083__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__58083__$1);
var G__58083__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58083__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__58083__$2);
var G__58083__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58083__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__58083__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58083__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__58083__$4;
}

break;
case "execution":
var vec__58084 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58084,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58084,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58084,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58084,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__58049_SHARP_){
var or__4185__auto__ = (p1__58049_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__58091 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__58091.cljs$core$IFn$_invoke$arity$1 ? fexpr__58091.cljs$core$IFn$_invoke$arity$1(p1__58049_SHARP_) : fexpr__58091.call(null,p1__58049_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__58092 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__58092__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58092,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__58092);
var G__58092__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58092__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__58092__$1);
var G__58092__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58092__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__58092__$2);
var G__58092__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58092__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__58092__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__58092__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__58092__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58067__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__58104){
var map__58105 = p__58104;
var map__58105__$1 = (((((!((map__58105 == null))))?(((((map__58105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58105):map__58105);
var triage_data = map__58105__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58105__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__58107 = phase;
var G__58107__$1 = (((G__58107 instanceof cljs.core.Keyword))?G__58107.fqn:null);
switch (G__58107__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__58108 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__58109 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58110 = loc;
var G__58111 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58112_58326 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58113_58327 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58114_58328 = true;
var _STAR_print_fn_STAR__temp_val__58115_58329 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58114_58328);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58115_58329);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58102_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__58102_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58113_58327);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58112_58326);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__58108,G__58109,G__58110,G__58111) : format.call(null,G__58108,G__58109,G__58110,G__58111));

break;
case "macroexpansion":
var G__58116 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__58117 = cause_type;
var G__58118 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58119 = loc;
var G__58120 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58116,G__58117,G__58118,G__58119,G__58120) : format.call(null,G__58116,G__58117,G__58118,G__58119,G__58120));

break;
case "compile-syntax-check":
var G__58122 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__58123 = cause_type;
var G__58124 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58125 = loc;
var G__58126 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58122,G__58123,G__58124,G__58125,G__58126) : format.call(null,G__58122,G__58123,G__58124,G__58125,G__58126));

break;
case "compilation":
var G__58127 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__58128 = cause_type;
var G__58129 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58130 = loc;
var G__58131 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58127,G__58128,G__58129,G__58130,G__58131) : format.call(null,G__58127,G__58128,G__58129,G__58130,G__58131));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__58132 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__58133 = symbol;
var G__58134 = loc;
var G__58135 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__58137_58343 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__58138_58344 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__58139_58345 = true;
var _STAR_print_fn_STAR__temp_val__58140_58346 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__58139_58345);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__58140_58346);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58103_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__58103_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__58138_58344);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__58137_58343);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__58132,G__58133,G__58134,G__58135) : format.call(null,G__58132,G__58133,G__58134,G__58135));
} else {
var G__58145 = "Execution error%s at %s(%s).\n%s\n";
var G__58146 = cause_type;
var G__58147 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__58148 = loc;
var G__58149 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__58145,G__58146,G__58147,G__58148,G__58149) : format.call(null,G__58145,G__58146,G__58147,G__58148,G__58149));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58107__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
