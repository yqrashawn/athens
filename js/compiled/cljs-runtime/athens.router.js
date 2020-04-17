goog.provide('athens.router');
goog.require('cljs.core');
goog.require('athens.views');
goog.require('re_frame.core');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
goog.require('reitit.frontend.controllers');
goog.require('reitit.coercion.spec');
goog.require('day8.re_frame.tracing');
var G__56900_56921 = new cljs.core.Keyword(null,"current-route","current-route",2067529448);
var G__56901_56922 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Symbol(null,"db","db",-1661185010,null)));

var opts__51296__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1((function (){var opts__51296__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__51297__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__51297__auto__;
}catch (e56902){var e = e56902;
throw e;
}}):(function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
}));
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__56900_56921,G__56901_56922) : re_frame.core.reg_sub.call(null,G__56900_56921,G__56901_56922));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (_,p__56903){
var vec__56904 = p__56903;
var seq__56905 = cljs.core.seq(vec__56904);
var first__56906 = cljs.core.first(seq__56905);
var seq__56905__$1 = cljs.core.next(seq__56905);
var ___$1 = first__56906;
var route = seq__56905__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate!","navigate!",79998348),route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigated","navigated",540897836),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,p__56908){
var vec__56909 = p__56908;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56909,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56909,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-match","old-match",707907207,null),cljs.core.list(new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"controllers","controllers",520120903,null),cljs.core.list(new cljs.core.Symbol("rfc","apply-controllers","rfc/apply-controllers",-842196151,null),cljs.core.list(new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"old-match","old-match",707907207,null)),new cljs.core.Symbol(null,"new-match","new-match",29574199,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"new-match","new-match",29574199,null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"controllers","controllers",520120903,null)))));

var opts__51296__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = (function (){var old_match = (function (){var opts__51296__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1((function (){var opts__51296__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__51297__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__51297__auto__;
})();
var controllers = (function (){var opts__51296__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = reitit.frontend.controllers.apply_controllers((function (){var opts__51296__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1((function (){var opts__51296__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = old_match;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"old-match","old-match",707907207,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__51297__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"old-match","old-match",707907207,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__51297__auto__;
})(),(function (){var opts__51296__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = new_match;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-match","new-match",29574199,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__51297__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("rfc","apply-controllers","rfc/apply-controllers",-842196151,null),cljs.core.list(new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"old-match","old-match",707907207,null)),new cljs.core.Symbol(null,"new-match","new-match",29574199,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__51297__auto__;
})();
var opts__51296__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__51296__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__51297__auto__;
})(),new cljs.core.Keyword(null,"current-route","current-route",2067529448),(function (){var opts__51296__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var opts__51296__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = new_match;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-match","new-match",29574199,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__51297__auto__;
})(),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),(function (){var opts__51296__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__51297__auto__ = controllers;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"controllers","controllers",520120903,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__51297__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"new-match","new-match",29574199,null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"controllers","controllers",520120903,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__51297__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"new-match","new-match",29574199,null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"controllers","controllers",520120903,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__51297__auto__;
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__51297__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"old-match","old-match",707907207,null),cljs.core.list(new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"controllers","controllers",520120903,null),cljs.core.list(new cljs.core.Symbol("rfc","apply-controllers","rfc/apply-controllers",-842196151,null),cljs.core.list(new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"old-match","old-match",707907207,null)),new cljs.core.Symbol(null,"new-match","new-match",29574199,null))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"new-match","new-match",29574199,null),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.Symbol(null,"controllers","controllers",520120903,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__51297__auto__;
}catch (e56913){var e = e56913;
throw e;
}}):(function (db,p__56914){
var vec__56915 = p__56914;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56915,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56915,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
})));
var G__56918_56925 = new cljs.core.Keyword(null,"navigate!","navigate!",79998348);
var G__56919_56926 = (function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__56918_56925,G__56919_56926) : re_frame.core.reg_fx.call(null,G__56918_56925,G__56919_56926));
athens.router.routes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"about","about",1423892543)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pages",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pages","pages",-285406513)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page/:id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"page","page",849072397)], null)], null)], null);
athens.router.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(athens.router.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
athens.router.on_navigate = (function athens$router$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
var G__56920 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigated","navigated",540897836),new_match], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56920) : re_frame.core.dispatch.call(null,G__56920));
} else {
return null;
}
});
athens.router.init_routes_BANG_ = (function athens$router$init_routes_BANG_(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing routes"], 0));

return reitit.frontend.easy.start_BANG_(athens.router.router,athens.router.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});

//# sourceMappingURL=athens.router.js.map
