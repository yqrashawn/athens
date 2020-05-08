goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52198){
var map__52199 = p__52198;
var map__52199__$1 = (((((!((map__52199 == null))))?(((((map__52199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52199):map__52199);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52199__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52199__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52199__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52199__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__52207_52246 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__52208_52247 = null;
var count__52209_52248 = (0);
var i__52210_52249 = (0);
while(true){
if((i__52210_52249 < count__52209_52248)){
var vec__52221_52250 = chunk__52208_52247.cljs$core$IIndexed$_nth$arity$2(null,i__52210_52249);
var k_52251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52221_52250,(0),null);
var cb_52252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52221_52250,(1),null);
try{var G__52226_52253 = cljs.core.deref(re_frame.trace.traces);
(cb_52252.cljs$core$IFn$_invoke$arity$1 ? cb_52252.cljs$core$IFn$_invoke$arity$1(G__52226_52253) : cb_52252.call(null,G__52226_52253));
}catch (e52225){var e_52254 = e52225;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52251,"while storing",cljs.core.deref(re_frame.trace.traces),e_52254], 0));
}

var G__52256 = seq__52207_52246;
var G__52257 = chunk__52208_52247;
var G__52258 = count__52209_52248;
var G__52259 = (i__52210_52249 + (1));
seq__52207_52246 = G__52256;
chunk__52208_52247 = G__52257;
count__52209_52248 = G__52258;
i__52210_52249 = G__52259;
continue;
} else {
var temp__5735__auto___52262 = cljs.core.seq(seq__52207_52246);
if(temp__5735__auto___52262){
var seq__52207_52263__$1 = temp__5735__auto___52262;
if(cljs.core.chunked_seq_QMARK_(seq__52207_52263__$1)){
var c__4609__auto___52264 = cljs.core.chunk_first(seq__52207_52263__$1);
var G__52265 = cljs.core.chunk_rest(seq__52207_52263__$1);
var G__52266 = c__4609__auto___52264;
var G__52267 = cljs.core.count(c__4609__auto___52264);
var G__52268 = (0);
seq__52207_52246 = G__52265;
chunk__52208_52247 = G__52266;
count__52209_52248 = G__52267;
i__52210_52249 = G__52268;
continue;
} else {
var vec__52231_52269 = cljs.core.first(seq__52207_52263__$1);
var k_52270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52231_52269,(0),null);
var cb_52271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52231_52269,(1),null);
try{var G__52237_52277 = cljs.core.deref(re_frame.trace.traces);
(cb_52271.cljs$core$IFn$_invoke$arity$1 ? cb_52271.cljs$core$IFn$_invoke$arity$1(G__52237_52277) : cb_52271.call(null,G__52237_52277));
}catch (e52235){var e_52281 = e52235;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52270,"while storing",cljs.core.deref(re_frame.trace.traces),e_52281], 0));
}

var G__52282 = cljs.core.next(seq__52207_52263__$1);
var G__52283 = null;
var G__52284 = (0);
var G__52285 = (0);
seq__52207_52246 = G__52282;
chunk__52208_52247 = G__52283;
count__52209_52248 = G__52284;
i__52210_52249 = G__52285;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
