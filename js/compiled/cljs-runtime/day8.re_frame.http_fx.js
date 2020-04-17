goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__70311){
var vec__70312 = p__70311;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70312,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70312,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__70319 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__70319);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__70322){
var map__70323 = p__70322;
var map__70323__$1 = (((((!((map__70323 == null))))?(((((map__70323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70323):map__70323);
var request = map__70323__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70323__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70323__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__70320_SHARP_){
var G__70330 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__70320_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__70330) : re_frame.core.dispatch.call(null,G__70330));
}),(function (p1__70321_SHARP_){
var G__70331 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__70321_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__70331) : re_frame.core.dispatch.call(null,G__70331));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__70332 = cljs.core.seq(seq_request_maps);
var chunk__70333 = null;
var count__70334 = (0);
var i__70335 = (0);
while(true){
if((i__70335 < count__70334)){
var request__$1 = chunk__70333.cljs$core$IIndexed$_nth$arity$2(null,i__70335);
var G__70341_70357 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__70341_70357) : ajax.core.ajax_request.call(null,G__70341_70357));


var G__70358 = seq__70332;
var G__70359 = chunk__70333;
var G__70360 = count__70334;
var G__70361 = (i__70335 + (1));
seq__70332 = G__70358;
chunk__70333 = G__70359;
count__70334 = G__70360;
i__70335 = G__70361;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__70332);
if(temp__5735__auto__){
var seq__70332__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70332__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__70332__$1);
var G__70362 = cljs.core.chunk_rest(seq__70332__$1);
var G__70363 = c__4609__auto__;
var G__70364 = cljs.core.count(c__4609__auto__);
var G__70365 = (0);
seq__70332 = G__70362;
chunk__70333 = G__70363;
count__70334 = G__70364;
i__70335 = G__70365;
continue;
} else {
var request__$1 = cljs.core.first(seq__70332__$1);
var G__70345_70366 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__70345_70366) : ajax.core.ajax_request.call(null,G__70345_70366));


var G__70367 = cljs.core.next(seq__70332__$1);
var G__70368 = null;
var G__70369 = (0);
var G__70370 = (0);
seq__70332 = G__70367;
chunk__70333 = G__70368;
count__70334 = G__70369;
i__70335 = G__70370;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__70346_70373 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__70347_70374 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__70346_70373,G__70347_70374) : re_frame.core.reg_fx.call(null,G__70346_70373,G__70347_70374));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
