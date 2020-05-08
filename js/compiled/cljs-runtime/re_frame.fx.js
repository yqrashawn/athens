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
var _STAR_current_trace_STAR__orig_val__52549 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52550 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52550);

try{try{var seq__52552 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52553 = null;
var count__52554 = (0);
var i__52555 = (0);
while(true){
if((i__52555 < count__52554)){
var vec__52568 = chunk__52553.cljs$core$IIndexed$_nth$arity$2(null,i__52555);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52568,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52568,(1),null);
var temp__5733__auto___52655 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52655)){
var effect_fn_52656 = temp__5733__auto___52655;
(effect_fn_52656.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52656.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52656.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52658 = seq__52552;
var G__52659 = chunk__52553;
var G__52660 = count__52554;
var G__52661 = (i__52555 + (1));
seq__52552 = G__52658;
chunk__52553 = G__52659;
count__52554 = G__52660;
i__52555 = G__52661;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52552);
if(temp__5735__auto__){
var seq__52552__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52552__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52552__$1);
var G__52665 = cljs.core.chunk_rest(seq__52552__$1);
var G__52666 = c__4609__auto__;
var G__52667 = cljs.core.count(c__4609__auto__);
var G__52668 = (0);
seq__52552 = G__52665;
chunk__52553 = G__52666;
count__52554 = G__52667;
i__52555 = G__52668;
continue;
} else {
var vec__52573 = cljs.core.first(seq__52552__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52573,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52573,(1),null);
var temp__5733__auto___52669 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52669)){
var effect_fn_52670 = temp__5733__auto___52669;
(effect_fn_52670.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52670.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52670.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52678 = cljs.core.next(seq__52552__$1);
var G__52679 = null;
var G__52680 = (0);
var G__52681 = (0);
seq__52552 = G__52678;
chunk__52553 = G__52679;
count__52554 = G__52680;
i__52555 = G__52681;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52166__auto___52682 = re_frame.interop.now();
var duration__52167__auto___52683 = (end__52166__auto___52682 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52167__auto___52683,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52166__auto___52682);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52549);
}} else {
var seq__52577 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52578 = null;
var count__52579 = (0);
var i__52580 = (0);
while(true){
if((i__52580 < count__52579)){
var vec__52592 = chunk__52578.cljs$core$IIndexed$_nth$arity$2(null,i__52580);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52592,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52592,(1),null);
var temp__5733__auto___52697 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52697)){
var effect_fn_52699 = temp__5733__auto___52697;
(effect_fn_52699.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52699.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52699.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52703 = seq__52577;
var G__52704 = chunk__52578;
var G__52705 = count__52579;
var G__52706 = (i__52580 + (1));
seq__52577 = G__52703;
chunk__52578 = G__52704;
count__52579 = G__52705;
i__52580 = G__52706;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52577);
if(temp__5735__auto__){
var seq__52577__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52577__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52577__$1);
var G__52707 = cljs.core.chunk_rest(seq__52577__$1);
var G__52708 = c__4609__auto__;
var G__52709 = cljs.core.count(c__4609__auto__);
var G__52710 = (0);
seq__52577 = G__52707;
chunk__52578 = G__52708;
count__52579 = G__52709;
i__52580 = G__52710;
continue;
} else {
var vec__52596 = cljs.core.first(seq__52577__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52596,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52596,(1),null);
var temp__5733__auto___52715 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52715)){
var effect_fn_52716 = temp__5733__auto___52715;
(effect_fn_52716.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52716.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52716.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52717 = cljs.core.next(seq__52577__$1);
var G__52718 = null;
var G__52719 = (0);
var G__52720 = (0);
seq__52577 = G__52717;
chunk__52578 = G__52718;
count__52579 = G__52719;
i__52580 = G__52720;
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
var seq__52599 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52600 = null;
var count__52601 = (0);
var i__52602 = (0);
while(true){
if((i__52602 < count__52601)){
var map__52613 = chunk__52600.cljs$core$IIndexed$_nth$arity$2(null,i__52602);
var map__52613__$1 = (((((!((map__52613 == null))))?(((((map__52613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52613):map__52613);
var effect = map__52613__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52613__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52613__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52599,chunk__52600,count__52601,i__52602,map__52613,map__52613__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52599,chunk__52600,count__52601,i__52602,map__52613,map__52613__$1,effect,ms,dispatch))
,ms);
}


var G__52729 = seq__52599;
var G__52730 = chunk__52600;
var G__52731 = count__52601;
var G__52732 = (i__52602 + (1));
seq__52599 = G__52729;
chunk__52600 = G__52730;
count__52601 = G__52731;
i__52602 = G__52732;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52599);
if(temp__5735__auto__){
var seq__52599__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52599__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52599__$1);
var G__52733 = cljs.core.chunk_rest(seq__52599__$1);
var G__52734 = c__4609__auto__;
var G__52735 = cljs.core.count(c__4609__auto__);
var G__52736 = (0);
seq__52599 = G__52733;
chunk__52600 = G__52734;
count__52601 = G__52735;
i__52602 = G__52736;
continue;
} else {
var map__52615 = cljs.core.first(seq__52599__$1);
var map__52615__$1 = (((((!((map__52615 == null))))?(((((map__52615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52615):map__52615);
var effect = map__52615__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52615__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52615__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52599,chunk__52600,count__52601,i__52602,map__52615,map__52615__$1,effect,ms,dispatch,seq__52599__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52599,chunk__52600,count__52601,i__52602,map__52615,map__52615__$1,effect,ms,dispatch,seq__52599__$1,temp__5735__auto__))
,ms);
}


var G__52739 = cljs.core.next(seq__52599__$1);
var G__52740 = null;
var G__52741 = (0);
var G__52742 = (0);
seq__52599 = G__52739;
chunk__52600 = G__52740;
count__52601 = G__52741;
i__52602 = G__52742;
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
var seq__52625 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52626 = null;
var count__52627 = (0);
var i__52628 = (0);
while(true){
if((i__52628 < count__52627)){
var event = chunk__52626.cljs$core$IIndexed$_nth$arity$2(null,i__52628);
re_frame.router.dispatch(event);


var G__52746 = seq__52625;
var G__52747 = chunk__52626;
var G__52748 = count__52627;
var G__52749 = (i__52628 + (1));
seq__52625 = G__52746;
chunk__52626 = G__52747;
count__52627 = G__52748;
i__52628 = G__52749;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52625);
if(temp__5735__auto__){
var seq__52625__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52625__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52625__$1);
var G__52750 = cljs.core.chunk_rest(seq__52625__$1);
var G__52751 = c__4609__auto__;
var G__52752 = cljs.core.count(c__4609__auto__);
var G__52753 = (0);
seq__52625 = G__52750;
chunk__52626 = G__52751;
count__52627 = G__52752;
i__52628 = G__52753;
continue;
} else {
var event = cljs.core.first(seq__52625__$1);
re_frame.router.dispatch(event);


var G__52754 = cljs.core.next(seq__52625__$1);
var G__52755 = null;
var G__52756 = (0);
var G__52757 = (0);
seq__52625 = G__52754;
chunk__52626 = G__52755;
count__52627 = G__52756;
i__52628 = G__52757;
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
var seq__52632 = cljs.core.seq(value);
var chunk__52633 = null;
var count__52634 = (0);
var i__52635 = (0);
while(true){
if((i__52635 < count__52634)){
var event = chunk__52633.cljs$core$IIndexed$_nth$arity$2(null,i__52635);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52758 = seq__52632;
var G__52759 = chunk__52633;
var G__52760 = count__52634;
var G__52761 = (i__52635 + (1));
seq__52632 = G__52758;
chunk__52633 = G__52759;
count__52634 = G__52760;
i__52635 = G__52761;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52632);
if(temp__5735__auto__){
var seq__52632__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52632__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52632__$1);
var G__52768 = cljs.core.chunk_rest(seq__52632__$1);
var G__52769 = c__4609__auto__;
var G__52770 = cljs.core.count(c__4609__auto__);
var G__52771 = (0);
seq__52632 = G__52768;
chunk__52633 = G__52769;
count__52634 = G__52770;
i__52635 = G__52771;
continue;
} else {
var event = cljs.core.first(seq__52632__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52773 = cljs.core.next(seq__52632__$1);
var G__52774 = null;
var G__52775 = (0);
var G__52776 = (0);
seq__52632 = G__52773;
chunk__52633 = G__52774;
count__52634 = G__52775;
i__52635 = G__52776;
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
