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
var _STAR_current_trace_STAR__orig_val__47998 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__47999 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__47999);

try{try{var seq__48004 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48005 = null;
var count__48006 = (0);
var i__48007 = (0);
while(true){
if((i__48007 < count__48006)){
var vec__48018 = chunk__48005.cljs$core$IIndexed$_nth$arity$2(null,i__48007);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48018,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48018,(1),null);
var temp__5733__auto___48080 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48080)){
var effect_fn_48081 = temp__5733__auto___48080;
(effect_fn_48081.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48081.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48081.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48082 = seq__48004;
var G__48083 = chunk__48005;
var G__48084 = count__48006;
var G__48085 = (i__48007 + (1));
seq__48004 = G__48082;
chunk__48005 = G__48083;
count__48006 = G__48084;
i__48007 = G__48085;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48004);
if(temp__5735__auto__){
var seq__48004__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48004__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48004__$1);
var G__48086 = cljs.core.chunk_rest(seq__48004__$1);
var G__48087 = c__4609__auto__;
var G__48088 = cljs.core.count(c__4609__auto__);
var G__48089 = (0);
seq__48004 = G__48086;
chunk__48005 = G__48087;
count__48006 = G__48088;
i__48007 = G__48089;
continue;
} else {
var vec__48023 = cljs.core.first(seq__48004__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48023,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48023,(1),null);
var temp__5733__auto___48090 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48090)){
var effect_fn_48091 = temp__5733__auto___48090;
(effect_fn_48091.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48091.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48091.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48092 = cljs.core.next(seq__48004__$1);
var G__48093 = null;
var G__48094 = (0);
var G__48095 = (0);
seq__48004 = G__48092;
chunk__48005 = G__48093;
count__48006 = G__48094;
i__48007 = G__48095;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__47659__auto___48096 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__47660__auto___48097 = (end__47659__auto___48096 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47660__auto___48097,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__47659__auto___48096);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__47998);
}} else {
var seq__48027 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48028 = null;
var count__48029 = (0);
var i__48030 = (0);
while(true){
if((i__48030 < count__48029)){
var vec__48038 = chunk__48028.cljs$core$IIndexed$_nth$arity$2(null,i__48030);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48038,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48038,(1),null);
var temp__5733__auto___48098 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48098)){
var effect_fn_48099 = temp__5733__auto___48098;
(effect_fn_48099.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48099.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48099.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48100 = seq__48027;
var G__48101 = chunk__48028;
var G__48102 = count__48029;
var G__48103 = (i__48030 + (1));
seq__48027 = G__48100;
chunk__48028 = G__48101;
count__48029 = G__48102;
i__48030 = G__48103;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48027);
if(temp__5735__auto__){
var seq__48027__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48027__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48027__$1);
var G__48104 = cljs.core.chunk_rest(seq__48027__$1);
var G__48105 = c__4609__auto__;
var G__48106 = cljs.core.count(c__4609__auto__);
var G__48107 = (0);
seq__48027 = G__48104;
chunk__48028 = G__48105;
count__48029 = G__48106;
i__48030 = G__48107;
continue;
} else {
var vec__48041 = cljs.core.first(seq__48027__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48041,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48041,(1),null);
var temp__5733__auto___48108 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___48108)){
var effect_fn_48109 = temp__5733__auto___48108;
(effect_fn_48109.cljs$core$IFn$_invoke$arity$1 ? effect_fn_48109.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_48109.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__48110 = cljs.core.next(seq__48027__$1);
var G__48111 = null;
var G__48112 = (0);
var G__48113 = (0);
seq__48027 = G__48110;
chunk__48028 = G__48111;
count__48029 = G__48112;
i__48030 = G__48113;
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
var seq__48047 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48048 = null;
var count__48049 = (0);
var i__48050 = (0);
while(true){
if((i__48050 < count__48049)){
var map__48055 = chunk__48048.cljs$core$IIndexed$_nth$arity$2(null,i__48050);
var map__48055__$1 = (((((!((map__48055 == null))))?(((((map__48055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48055):map__48055);
var effect = map__48055__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48055__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48055__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__48047,chunk__48048,count__48049,i__48050,map__48055,map__48055__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__48047,chunk__48048,count__48049,i__48050,map__48055,map__48055__$1,effect,ms,dispatch))
,ms);
}


var G__48114 = seq__48047;
var G__48115 = chunk__48048;
var G__48116 = count__48049;
var G__48117 = (i__48050 + (1));
seq__48047 = G__48114;
chunk__48048 = G__48115;
count__48049 = G__48116;
i__48050 = G__48117;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48047);
if(temp__5735__auto__){
var seq__48047__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48047__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48047__$1);
var G__48118 = cljs.core.chunk_rest(seq__48047__$1);
var G__48119 = c__4609__auto__;
var G__48120 = cljs.core.count(c__4609__auto__);
var G__48121 = (0);
seq__48047 = G__48118;
chunk__48048 = G__48119;
count__48049 = G__48120;
i__48050 = G__48121;
continue;
} else {
var map__48058 = cljs.core.first(seq__48047__$1);
var map__48058__$1 = (((((!((map__48058 == null))))?(((((map__48058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48058):map__48058);
var effect = map__48058__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48058__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48058__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__48047,chunk__48048,count__48049,i__48050,map__48058,map__48058__$1,effect,ms,dispatch,seq__48047__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__48047,chunk__48048,count__48049,i__48050,map__48058,map__48058__$1,effect,ms,dispatch,seq__48047__$1,temp__5735__auto__))
,ms);
}


var G__48124 = cljs.core.next(seq__48047__$1);
var G__48125 = null;
var G__48126 = (0);
var G__48127 = (0);
seq__48047 = G__48124;
chunk__48048 = G__48125;
count__48049 = G__48126;
i__48050 = G__48127;
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
var seq__48068 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__48069 = null;
var count__48070 = (0);
var i__48071 = (0);
while(true){
if((i__48071 < count__48070)){
var event = chunk__48069.cljs$core$IIndexed$_nth$arity$2(null,i__48071);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__48130 = seq__48068;
var G__48131 = chunk__48069;
var G__48132 = count__48070;
var G__48133 = (i__48071 + (1));
seq__48068 = G__48130;
chunk__48069 = G__48131;
count__48070 = G__48132;
i__48071 = G__48133;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48068);
if(temp__5735__auto__){
var seq__48068__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48068__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48068__$1);
var G__48134 = cljs.core.chunk_rest(seq__48068__$1);
var G__48135 = c__4609__auto__;
var G__48136 = cljs.core.count(c__4609__auto__);
var G__48137 = (0);
seq__48068 = G__48134;
chunk__48069 = G__48135;
count__48070 = G__48136;
i__48071 = G__48137;
continue;
} else {
var event = cljs.core.first(seq__48068__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__48138 = cljs.core.next(seq__48068__$1);
var G__48139 = null;
var G__48140 = (0);
var G__48141 = (0);
seq__48068 = G__48138;
chunk__48069 = G__48139;
count__48070 = G__48140;
i__48071 = G__48141;
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
var seq__48076 = cljs.core.seq(value);
var chunk__48077 = null;
var count__48078 = (0);
var i__48079 = (0);
while(true){
if((i__48079 < count__48078)){
var event = chunk__48077.cljs$core$IIndexed$_nth$arity$2(null,i__48079);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__48143 = seq__48076;
var G__48144 = chunk__48077;
var G__48145 = count__48078;
var G__48146 = (i__48079 + (1));
seq__48076 = G__48143;
chunk__48077 = G__48144;
count__48078 = G__48145;
i__48079 = G__48146;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48076);
if(temp__5735__auto__){
var seq__48076__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48076__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48076__$1);
var G__48148 = cljs.core.chunk_rest(seq__48076__$1);
var G__48149 = c__4609__auto__;
var G__48150 = cljs.core.count(c__4609__auto__);
var G__48151 = (0);
seq__48076 = G__48148;
chunk__48077 = G__48149;
count__48078 = G__48150;
i__48079 = G__48151;
continue;
} else {
var event = cljs.core.first(seq__48076__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__48152 = cljs.core.next(seq__48076__$1);
var G__48153 = null;
var G__48154 = (0);
var G__48155 = (0);
seq__48076 = G__48152;
chunk__48077 = G__48153;
count__48078 = G__48154;
i__48079 = G__48155;
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
