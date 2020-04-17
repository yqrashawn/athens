goog.provide('athens.events');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('re_frame.core');
goog.require('re_posh.core');
goog.require('day8.re_frame.tracing');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('day8.re_frame.async_flow_fx');
var G__56050_56081 = new cljs.core.Keyword(null,"upload-dsdb","upload-dsdb",1060143529);
var G__56051_56082 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__56052){
var vec__56053 = p__56052;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56053,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56053,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)));

var opts__51296__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = athens.db.str_to_db_tx((function (){var opts__51296__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = json_str;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__51297__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__51297__auto__;
}catch (e56056){var e = e56056;
throw e;
}}):(function (_,p__56057){
var vec__56058 = p__56057;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56058,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56058,(1),null);
return athens.db.str_to_db_tx(json_str);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__56050_56081,G__56051_56082) : re_posh.core.reg_event_ds.call(null,G__56050_56081,G__56051_56082));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),(function (_,___$1){
return athens.db.init_rfdb;
}));
var G__56061_56083 = new cljs.core.Keyword(null,"get-dsdb-success","get-dsdb-success",899376758);
var G__56062_56084 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__56063){
var vec__56064 = p__56063;
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56064,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56064,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"response","response",572107335,null)));

var opts__51296__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = athens.db.str_to_db_tx((function (){var opts__51296__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = response;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__51297__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"response","response",572107335,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__51297__auto__;
}catch (e56067){var e = e56067;
throw e;
}}):(function (_,p__56068){
var vec__56069 = p__56068;
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56069,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56069,(1),null);
return athens.db.str_to_db_tx(response);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__56061_56083,G__56062_56084) : re_posh.core.reg_event_ds.call(null,G__56061_56083,G__56062_56084));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__56072){
var vec__56073 = p__56072;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56073,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56073,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56073,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Symbol(null,"request-type","request-type",2044193671,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"errors","errors",-908790718)], null))),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Symbol(null,"request-type","request-type",2044193671,null)], null),false)));

return debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(cljs.core.assoc_in(debux.common.util.spy_first(db,new cljs.core.Symbol(null,"db","db",-1661185010,null),(2)),(function (){var opts__51296__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),(function (){var opts__51296__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = request_type;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"request-type","request-type",2044193671,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__51297__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Symbol(null,"request-type","request-type",2044193671,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__51297__auto__;
})(),(function (){var opts__51296__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var opts__51296__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = response;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__51297__auto__;
})(),(function (){var opts__51296__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__51297__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"errors","errors",-908790718)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__51297__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Symbol(null,"request-type","request-type",2044193671,null)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"response","response",572107335,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"errors","errors",-908790718)], null))),(1)),(function (){var opts__51296__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),(function (){var opts__51296__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = request_type;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"request-type","request-type",2044193671,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__51297__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Symbol(null,"request-type","request-type",2044193671,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__51297__auto__;
})(),false),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Symbol(null,"request-type","request-type",2044193671,null)], null),false),(0));
}catch (e56076){var e = e56076;
throw e;
}}):(function (db,p__56077){
var vec__56078 = p__56077;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56078,(0),null);
var request_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56078,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56078,(2),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),request_type], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"errors","errors",-908790718)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),request_type], null),false);
})));

//# sourceMappingURL=athens.events.js.map
