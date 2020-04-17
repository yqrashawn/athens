goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52853 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52854 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52854);

try{try{var seq__52855 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52856 = null;
var count__52857 = (0);
var i__52858 = (0);
while(true){
if((i__52858 < count__52857)){
var vec__52865 = chunk__52856.cljs$core$IIndexed$_nth$arity$2(null,i__52858);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52865,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52865,(1),null);
var temp__5733__auto___52913 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52913)){
var effect_fn_52914 = temp__5733__auto___52913;
(effect_fn_52914.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52914.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52914.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52915 = seq__52855;
var G__52916 = chunk__52856;
var G__52917 = count__52857;
var G__52918 = (i__52858 + (1));
seq__52855 = G__52915;
chunk__52856 = G__52916;
count__52857 = G__52917;
i__52858 = G__52918;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52855);
if(temp__5735__auto__){
var seq__52855__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52855__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52855__$1);
var G__52919 = cljs.core.chunk_rest(seq__52855__$1);
var G__52920 = c__4609__auto__;
var G__52921 = cljs.core.count(c__4609__auto__);
var G__52922 = (0);
seq__52855 = G__52919;
chunk__52856 = G__52920;
count__52857 = G__52921;
i__52858 = G__52922;
continue;
} else {
var vec__52868 = cljs.core.first(seq__52855__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52868,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52868,(1),null);
var temp__5733__auto___52927 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52927)){
var effect_fn_52928 = temp__5733__auto___52927;
(effect_fn_52928.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52928.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52928.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52929 = cljs.core.next(seq__52855__$1);
var G__52930 = null;
var G__52931 = (0);
var G__52932 = (0);
seq__52855 = G__52929;
chunk__52856 = G__52930;
count__52857 = G__52931;
i__52858 = G__52932;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52586__auto___52933 = re_frame.interop.now();
var duration__52587__auto___52934 = (end__52586__auto___52933 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52587__auto___52934,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52586__auto___52933);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52853);
}} else {
var seq__52871 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52872 = null;
var count__52873 = (0);
var i__52874 = (0);
while(true){
if((i__52874 < count__52873)){
var vec__52881 = chunk__52872.cljs$core$IIndexed$_nth$arity$2(null,i__52874);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52881,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52881,(1),null);
var temp__5733__auto___52941 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52941)){
var effect_fn_52942 = temp__5733__auto___52941;
(effect_fn_52942.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52942.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52942.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52943 = seq__52871;
var G__52944 = chunk__52872;
var G__52945 = count__52873;
var G__52946 = (i__52874 + (1));
seq__52871 = G__52943;
chunk__52872 = G__52944;
count__52873 = G__52945;
i__52874 = G__52946;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52871);
if(temp__5735__auto__){
var seq__52871__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52871__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52871__$1);
var G__52947 = cljs.core.chunk_rest(seq__52871__$1);
var G__52948 = c__4609__auto__;
var G__52949 = cljs.core.count(c__4609__auto__);
var G__52950 = (0);
seq__52871 = G__52947;
chunk__52872 = G__52948;
count__52873 = G__52949;
i__52874 = G__52950;
continue;
} else {
var vec__52884 = cljs.core.first(seq__52871__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52884,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52884,(1),null);
var temp__5733__auto___52955 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52955)){
var effect_fn_52956 = temp__5733__auto___52955;
(effect_fn_52956.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52956.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52956.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52957 = cljs.core.next(seq__52871__$1);
var G__52958 = null;
var G__52959 = (0);
var G__52960 = (0);
seq__52871 = G__52957;
chunk__52872 = G__52958;
count__52873 = G__52959;
i__52874 = G__52960;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52888 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52889 = null;
var count__52890 = (0);
var i__52891 = (0);
while(true){
if((i__52891 < count__52890)){
var map__52896 = chunk__52889.cljs$core$IIndexed$_nth$arity$2(null,i__52891);
var map__52896__$1 = (((((!((map__52896 == null))))?(((((map__52896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52896):map__52896);
var effect = map__52896__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52896__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52896__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52888,chunk__52889,count__52890,i__52891,map__52896,map__52896__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52888,chunk__52889,count__52890,i__52891,map__52896,map__52896__$1,effect,ms,dispatch))
,ms);
}


var G__52969 = seq__52888;
var G__52970 = chunk__52889;
var G__52971 = count__52890;
var G__52972 = (i__52891 + (1));
seq__52888 = G__52969;
chunk__52889 = G__52970;
count__52890 = G__52971;
i__52891 = G__52972;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52888);
if(temp__5735__auto__){
var seq__52888__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52888__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52888__$1);
var G__52973 = cljs.core.chunk_rest(seq__52888__$1);
var G__52974 = c__4609__auto__;
var G__52975 = cljs.core.count(c__4609__auto__);
var G__52976 = (0);
seq__52888 = G__52973;
chunk__52889 = G__52974;
count__52890 = G__52975;
i__52891 = G__52976;
continue;
} else {
var map__52898 = cljs.core.first(seq__52888__$1);
var map__52898__$1 = (((((!((map__52898 == null))))?(((((map__52898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52898):map__52898);
var effect = map__52898__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52898__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52898__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52888,chunk__52889,count__52890,i__52891,map__52898,map__52898__$1,effect,ms,dispatch,seq__52888__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52888,chunk__52889,count__52890,i__52891,map__52898,map__52898__$1,effect,ms,dispatch,seq__52888__$1,temp__5735__auto__))
,ms);
}


var G__52977 = cljs.core.next(seq__52888__$1);
var G__52978 = null;
var G__52979 = (0);
var G__52980 = (0);
seq__52888 = G__52977;
chunk__52889 = G__52978;
count__52890 = G__52979;
i__52891 = G__52980;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52901 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52902 = null;
var count__52903 = (0);
var i__52904 = (0);
while(true){
if((i__52904 < count__52903)){
var event = chunk__52902.cljs$core$IIndexed$_nth$arity$2(null,i__52904);
re_frame.router.dispatch(event);


var G__52982 = seq__52901;
var G__52983 = chunk__52902;
var G__52984 = count__52903;
var G__52985 = (i__52904 + (1));
seq__52901 = G__52982;
chunk__52902 = G__52983;
count__52903 = G__52984;
i__52904 = G__52985;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52901);
if(temp__5735__auto__){
var seq__52901__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52901__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52901__$1);
var G__52986 = cljs.core.chunk_rest(seq__52901__$1);
var G__52987 = c__4609__auto__;
var G__52988 = cljs.core.count(c__4609__auto__);
var G__52989 = (0);
seq__52901 = G__52986;
chunk__52902 = G__52987;
count__52903 = G__52988;
i__52904 = G__52989;
continue;
} else {
var event = cljs.core.first(seq__52901__$1);
re_frame.router.dispatch(event);


var G__52990 = cljs.core.next(seq__52901__$1);
var G__52991 = null;
var G__52992 = (0);
var G__52993 = (0);
seq__52901 = G__52990;
chunk__52902 = G__52991;
count__52903 = G__52992;
i__52904 = G__52993;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52908 = cljs.core.seq(value);
var chunk__52909 = null;
var count__52910 = (0);
var i__52911 = (0);
while(true){
if((i__52911 < count__52910)){
var event = chunk__52909.cljs$core$IIndexed$_nth$arity$2(null,i__52911);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__53007 = seq__52908;
var G__53008 = chunk__52909;
var G__53009 = count__52910;
var G__53010 = (i__52911 + (1));
seq__52908 = G__53007;
chunk__52909 = G__53008;
count__52910 = G__53009;
i__52911 = G__53010;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52908);
if(temp__5735__auto__){
var seq__52908__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52908__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52908__$1);
var G__53011 = cljs.core.chunk_rest(seq__52908__$1);
var G__53012 = c__4609__auto__;
var G__53013 = cljs.core.count(c__4609__auto__);
var G__53014 = (0);
seq__52908 = G__53011;
chunk__52909 = G__53012;
count__52910 = G__53013;
i__52911 = G__53014;
continue;
} else {
var event = cljs.core.first(seq__52908__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__53015 = cljs.core.next(seq__52908__$1);
var G__53016 = null;
var G__53017 = (0);
var G__53018 = (0);
seq__52908 = G__53015;
chunk__52909 = G__53016;
count__52910 = G__53017;
i__52911 = G__53018;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
