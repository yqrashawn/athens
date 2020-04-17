goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__70242 = e.target.readyState;
var fexpr__70241 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__70241.cljs$core$IFn$_invoke$arity$1 ? fexpr__70241.cljs$core$IFn$_invoke$arity$1(G__70242) : fexpr__70241.call(null,G__70242));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__70244,handler){
var map__70245 = p__70244;
var map__70245__$1 = (((((!((map__70245 == null))))?(((((map__70245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70245):map__70245);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70245__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70245__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70245__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70245__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70245__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70245__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70245__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__70243_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__70243_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___70263 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___70263)){
var response_type_70264 = temp__5735__auto___70263;
(this$__$1.responseType = cljs.core.name(response_type_70264));
} else {
}

var seq__70247_70265 = cljs.core.seq(headers);
var chunk__70248_70266 = null;
var count__70249_70267 = (0);
var i__70250_70268 = (0);
while(true){
if((i__70250_70268 < count__70249_70267)){
var vec__70257_70269 = chunk__70248_70266.cljs$core$IIndexed$_nth$arity$2(null,i__70250_70268);
var k_70270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70257_70269,(0),null);
var v_70271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70257_70269,(1),null);
this$__$1.setRequestHeader(k_70270,v_70271);


var G__70272 = seq__70247_70265;
var G__70273 = chunk__70248_70266;
var G__70274 = count__70249_70267;
var G__70275 = (i__70250_70268 + (1));
seq__70247_70265 = G__70272;
chunk__70248_70266 = G__70273;
count__70249_70267 = G__70274;
i__70250_70268 = G__70275;
continue;
} else {
var temp__5735__auto___70276 = cljs.core.seq(seq__70247_70265);
if(temp__5735__auto___70276){
var seq__70247_70277__$1 = temp__5735__auto___70276;
if(cljs.core.chunked_seq_QMARK_(seq__70247_70277__$1)){
var c__4609__auto___70278 = cljs.core.chunk_first(seq__70247_70277__$1);
var G__70279 = cljs.core.chunk_rest(seq__70247_70277__$1);
var G__70280 = c__4609__auto___70278;
var G__70281 = cljs.core.count(c__4609__auto___70278);
var G__70282 = (0);
seq__70247_70265 = G__70279;
chunk__70248_70266 = G__70280;
count__70249_70267 = G__70281;
i__70250_70268 = G__70282;
continue;
} else {
var vec__70260_70289 = cljs.core.first(seq__70247_70277__$1);
var k_70290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70260_70289,(0),null);
var v_70291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70260_70289,(1),null);
this$__$1.setRequestHeader(k_70290,v_70291);


var G__70292 = cljs.core.next(seq__70247_70277__$1);
var G__70293 = null;
var G__70294 = (0);
var G__70295 = (0);
seq__70247_70265 = G__70292;
chunk__70248_70266 = G__70293;
count__70249_70267 = G__70294;
i__70250_70268 = G__70295;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
