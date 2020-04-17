goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__47937 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47938 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47938);

try{try{var seq__47939 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47940 = null;
var count__47941 = (0);
var i__47942 = (0);
while(true){
if((i__47942 < count__47941)){
var vec__47949 = chunk__47940.cljs$core$IIndexed$_nth$arity$2(null,i__47942);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47949,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47949,(1),null);
var temp__5733__auto___48000 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48000)){
var effect_fn_48001 = temp__5733__auto___48000;
(effect_fn_48001.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48001.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48001.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48002 = seq__47939;
var G__48003 = chunk__47940;
var G__48004 = count__47941;
var G__48005 = (i__47942 + (1));
seq__47939 = G__48002;
chunk__47940 = G__48003;
count__47941 = G__48004;
i__47942 = G__48005;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47939);
if(temp__5735__auto__){
var seq__47939__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47939__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47939__$1);
var G__48008 = cljs.core.chunk_rest(seq__47939__$1);
var G__48009 = c__4609__auto__;
var G__48010 = cljs.core.count(c__4609__auto__);
var G__48011 = (0);
seq__47939 = G__48008;
chunk__47940 = G__48009;
count__47941 = G__48010;
i__47942 = G__48011;
continue;
} else {
var vec__47952 = cljs.core.first(seq__47939__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47952,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47952,(1),null);
var temp__5733__auto___48012 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48012)){
var effect_fn_48013 = temp__5733__auto___48012;
(effect_fn_48013.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48013.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48013.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48014 = cljs.core.next(seq__47939__$1);
var G__48015 = null;
var G__48016 = (0);
var G__48017 = (0);
seq__47939 = G__48014;
chunk__47940 = G__48015;
count__47941 = G__48016;
i__47942 = G__48017;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__47670__auto___48018 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__47671__auto___48019 = (end__47670__auto___48018 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47671__auto___48019,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__47670__auto___48018);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47937);
}} else {
var seq__47955 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47956 = null;
var count__47957 = (0);
var i__47958 = (0);
while(true){
if((i__47958 < count__47957)){
var vec__47965 = chunk__47956.cljs$core$IIndexed$_nth$arity$2(null,i__47958);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47965,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47965,(1),null);
var temp__5733__auto___48023 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48023)){
var effect_fn_48025 = temp__5733__auto___48023;
(effect_fn_48025.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48025.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48025.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48026 = seq__47955;
var G__48027 = chunk__47956;
var G__48028 = count__47957;
var G__48029 = (i__47958 + (1));
seq__47955 = G__48026;
chunk__47956 = G__48027;
count__47957 = G__48028;
i__47958 = G__48029;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47955);
if(temp__5735__auto__){
var seq__47955__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47955__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47955__$1);
var G__48030 = cljs.core.chunk_rest(seq__47955__$1);
var G__48031 = c__4609__auto__;
var G__48032 = cljs.core.count(c__4609__auto__);
var G__48033 = (0);
seq__47955 = G__48030;
chunk__47956 = G__48031;
count__47957 = G__48032;
i__47958 = G__48033;
continue;
} else {
var vec__47968 = cljs.core.first(seq__47955__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47968,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47968,(1),null);
var temp__5733__auto___48035 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48035)){
var effect_fn_48036 = temp__5733__auto___48035;
(effect_fn_48036.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48036.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48036.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48037 = cljs.core.next(seq__47955__$1);
var G__48038 = null;
var G__48039 = (0);
var G__48040 = (0);
seq__47955 = G__48037;
chunk__47956 = G__48038;
count__47957 = G__48039;
i__47958 = G__48040;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47971 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47972 = null;
var count__47973 = (0);
var i__47974 = (0);
while(true){
if((i__47974 < count__47973)){
var map__47979 = chunk__47972.cljs$core$IIndexed$_nth$arity$2(null,i__47974);
var map__47979__$1 = (((((!((map__47979 == null))))?(((((map__47979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47979):map__47979);
var effect = map__47979__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47979__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47979__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47971,chunk__47972,count__47973,i__47974,map__47979,map__47979__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47971,chunk__47972,count__47973,i__47974,map__47979,map__47979__$1,effect,ms,dispatch))
,ms);
}


var G__48043 = seq__47971;
var G__48044 = chunk__47972;
var G__48045 = count__47973;
var G__48046 = (i__47974 + (1));
seq__47971 = G__48043;
chunk__47972 = G__48044;
count__47973 = G__48045;
i__47974 = G__48046;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47971);
if(temp__5735__auto__){
var seq__47971__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47971__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47971__$1);
var G__48047 = cljs.core.chunk_rest(seq__47971__$1);
var G__48048 = c__4609__auto__;
var G__48049 = cljs.core.count(c__4609__auto__);
var G__48050 = (0);
seq__47971 = G__48047;
chunk__47972 = G__48048;
count__47973 = G__48049;
i__47974 = G__48050;
continue;
} else {
var map__47984 = cljs.core.first(seq__47971__$1);
var map__47984__$1 = (((((!((map__47984 == null))))?(((((map__47984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47984):map__47984);
var effect = map__47984__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47984__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__47971,chunk__47972,count__47973,i__47974,map__47984,map__47984__$1,effect,ms,dispatch,seq__47971__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__47971,chunk__47972,count__47973,i__47974,map__47984,map__47984__$1,effect,ms,dispatch,seq__47971__$1,temp__5735__auto__))
,ms);
}


var G__48052 = cljs.core.next(seq__47971__$1);
var G__48053 = null;
var G__48054 = (0);
var G__48055 = (0);
seq__47971 = G__48052;
chunk__47972 = G__48053;
count__47973 = G__48054;
i__47974 = G__48055;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__47988 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47989 = null;
var count__47990 = (0);
var i__47991 = (0);
while(true){
if((i__47991 < count__47990)){
var event = chunk__47989.cljs$core$IIndexed$_nth$arity$2(null,i__47991);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__48056 = seq__47988;
var G__48057 = chunk__47989;
var G__48058 = count__47990;
var G__48059 = (i__47991 + (1));
seq__47988 = G__48056;
chunk__47989 = G__48057;
count__47990 = G__48058;
i__47991 = G__48059;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47988);
if(temp__5735__auto__){
var seq__47988__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47988__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47988__$1);
var G__48060 = cljs.core.chunk_rest(seq__47988__$1);
var G__48061 = c__4609__auto__;
var G__48062 = cljs.core.count(c__4609__auto__);
var G__48063 = (0);
seq__47988 = G__48060;
chunk__47989 = G__48061;
count__47990 = G__48062;
i__47991 = G__48063;
continue;
} else {
var event = cljs.core.first(seq__47988__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__48064 = cljs.core.next(seq__47988__$1);
var G__48065 = null;
var G__48066 = (0);
var G__48067 = (0);
seq__47988 = G__48064;
chunk__47989 = G__48065;
count__47990 = G__48066;
i__47991 = G__48067;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__47996 = cljs.core.seq(value);
var chunk__47997 = null;
var count__47998 = (0);
var i__47999 = (0);
while(true){
if((i__47999 < count__47998)){
var event = chunk__47997.cljs$core$IIndexed$_nth$arity$2(null,i__47999);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__48068 = seq__47996;
var G__48069 = chunk__47997;
var G__48070 = count__47998;
var G__48071 = (i__47999 + (1));
seq__47996 = G__48068;
chunk__47997 = G__48069;
count__47998 = G__48070;
i__47999 = G__48071;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47996);
if(temp__5735__auto__){
var seq__47996__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47996__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47996__$1);
var G__48072 = cljs.core.chunk_rest(seq__47996__$1);
var G__48073 = c__4609__auto__;
var G__48074 = cljs.core.count(c__4609__auto__);
var G__48075 = (0);
seq__47996 = G__48072;
chunk__47997 = G__48073;
count__47998 = G__48074;
i__47999 = G__48075;
continue;
} else {
var event = cljs.core.first(seq__47996__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__48077 = cljs.core.next(seq__47996__$1);
var G__48078 = null;
var G__48079 = (0);
var G__48080 = (0);
seq__47996 = G__48077;
chunk__47997 = G__48078;
count__47998 = G__48079;
i__47999 = G__48080;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
