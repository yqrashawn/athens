goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5735__auto__ = (function (){var fexpr__68162 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__68162.cljs$core$IFn$_invoke$arity$1 ? fexpr__68162.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__68162.call(null,channel));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var req = temp__5735__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68164){
var vec__68165 = p__68164;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68165,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68165,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__68171 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__68171)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__68171)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__68171)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__68171)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__68171)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68171)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68171)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__68172){
var map__68173 = p__68172;
var map__68173__$1 = (((((!((map__68173 == null))))?(((((map__68173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68173):map__68173);
var request = map__68173__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68173__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68173__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68173__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__68175 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__68175,default_headers);

cljs_http.core.apply_response_type_BANG_(G__68175,response_type);

G__68175.setTimeoutInterval(timeout);

G__68175.setWithCredentials(send_credentials);

return G__68175;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__68194){
var map__68195 = p__68194;
var map__68195__$1 = (((((!((map__68195 == null))))?(((((map__68195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68195):map__68195);
var request = map__68195__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68195__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68195__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68195__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68195__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68195__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68195__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4185__auto__ = request_method;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__68199 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__68199) : cljs_http.core.error_kw.call(null,G__68199));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_68262 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__68202_68266 = xhr;
G__68202_68266.setProgressEventsEnabled(true);

G__68202_68266.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_68262,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__68202_68266.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_68262,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__56096__auto___68267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_68213){
var state_val_68214 = (state_68213[(1)]);
if((state_val_68214 === (1))){
var state_68213__$1 = state_68213;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68213__$1,(2),cancel);
} else {
if((state_val_68214 === (2))){
var inst_68204 = (state_68213[(2)]);
var inst_68205 = xhr.isComplete();
var inst_68206 = cljs.core.not(inst_68205);
var state_68213__$1 = (function (){var statearr_68215 = state_68213;
(statearr_68215[(7)] = inst_68204);

return statearr_68215;
})();
if(inst_68206){
var statearr_68216_68274 = state_68213__$1;
(statearr_68216_68274[(1)] = (3));

} else {
var statearr_68217_68275 = state_68213__$1;
(statearr_68217_68275[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68214 === (3))){
var inst_68208 = xhr.abort();
var state_68213__$1 = state_68213;
var statearr_68218_68277 = state_68213__$1;
(statearr_68218_68277[(2)] = inst_68208);

(statearr_68218_68277[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68214 === (4))){
var state_68213__$1 = state_68213;
var statearr_68219_68278 = state_68213__$1;
(statearr_68219_68278[(2)] = null);

(statearr_68219_68278[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68214 === (5))){
var inst_68211 = (state_68213[(2)]);
var state_68213__$1 = state_68213;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68213__$1,inst_68211);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__55996__auto__ = null;
var cljs_http$core$xhr_$_state_machine__55996__auto____0 = (function (){
var statearr_68220 = [null,null,null,null,null,null,null,null];
(statearr_68220[(0)] = cljs_http$core$xhr_$_state_machine__55996__auto__);

(statearr_68220[(1)] = (1));

return statearr_68220;
});
var cljs_http$core$xhr_$_state_machine__55996__auto____1 = (function (state_68213){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_68213);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e68221){if((e68221 instanceof Object)){
var ex__55999__auto__ = e68221;
var statearr_68222_68288 = state_68213;
(statearr_68222_68288[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68221;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68290 = state_68213;
state_68213 = G__68290;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__55996__auto__ = function(state_68213){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__55996__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__55996__auto____1.call(this,state_68213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__55996__auto____0;
cljs_http$core$xhr_$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__55996__auto____1;
return cljs_http$core$xhr_$_state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_68223 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_68223[(6)] = c__56096__auto___68267);

return statearr_68223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__68224){
var map__68225 = p__68224;
var map__68225__$1 = (((((!((map__68225 == null))))?(((((map__68225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68225):map__68225);
var request = map__68225__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68225__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68225__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68225__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68225__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_68301 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_68301], null));

if(cljs.core.truth_(cancel)){
var c__56096__auto___68308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_68233){
var state_val_68234 = (state_68233[(1)]);
if((state_val_68234 === (1))){
var state_68233__$1 = state_68233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68233__$1,(2),cancel);
} else {
if((state_val_68234 === (2))){
var inst_68230 = (state_68233[(2)]);
var inst_68231 = jsonp.cancel(req_68301);
var state_68233__$1 = (function (){var statearr_68237 = state_68233;
(statearr_68237[(7)] = inst_68230);

return statearr_68237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_68233__$1,inst_68231);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__55996__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__55996__auto____0 = (function (){
var statearr_68238 = [null,null,null,null,null,null,null,null];
(statearr_68238[(0)] = cljs_http$core$jsonp_$_state_machine__55996__auto__);

(statearr_68238[(1)] = (1));

return statearr_68238;
});
var cljs_http$core$jsonp_$_state_machine__55996__auto____1 = (function (state_68233){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_68233);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e68239){if((e68239 instanceof Object)){
var ex__55999__auto__ = e68239;
var statearr_68240_68311 = state_68233;
(statearr_68240_68311[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68312 = state_68233;
state_68233 = G__68312;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__55996__auto__ = function(state_68233){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__55996__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__55996__auto____1.call(this,state_68233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__55996__auto____0;
cljs_http$core$jsonp_$_state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__55996__auto____1;
return cljs_http$core$jsonp_$_state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_68241 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_68241[(6)] = c__56096__auto___68308);

return statearr_68241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__68242){
var map__68243 = p__68242;
var map__68243__$1 = (((((!((map__68243 == null))))?(((((map__68243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68243):map__68243);
var request = map__68243__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68243__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
