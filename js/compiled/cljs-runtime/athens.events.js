goog.provide('athens.events');
goog.require('cljs.core');
goog.require('athens.db');
goog.require('datascript.core');
goog.require('re_frame.core');
goog.require('re_posh.core');
goog.require('day8.re_frame.tracing');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('day8.re_frame.async_flow_fx');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null));

var opts__46799__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = athens.db.rfdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","rfdb","db/rfdb",-1730642210,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46800__auto__;
}catch (e47696){var e = e47696;
throw e;
}}):(function (_,___$1){
return athens.db.rfdb;
})));
var G__47708_47865 = new cljs.core.Keyword(null,"http","http",382524695);
var G__47709_47866 = (function (p__47715){
var map__47721 = p__47715;
var map__47721__$1 = (((((!((map__47721 == null))))?(((((map__47721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47721):map__47721);
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47721__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47721__$1,new cljs.core.Keyword(null,"method","method",55703592));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47721__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47721__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47721__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["loading ",url], 0));

var c__41735__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41736__auto__ = (function (){var switch__41712__auto__ = (function (state_47804){
var state_val_47805 = (state_47804[(1)]);
if((state_val_47805 === (7))){
var inst_47770 = (state_47804[(7)]);
var inst_47770__$1 = (state_47804[(2)]);
var inst_47772 = (inst_47770__$1 == null);
var inst_47773 = cljs.core.not(inst_47772);
var state_47804__$1 = (function (){var statearr_47806 = state_47804;
(statearr_47806[(7)] = inst_47770__$1);

return statearr_47806;
})();
if(inst_47773){
var statearr_47807_47867 = state_47804__$1;
(statearr_47807_47867[(1)] = (8));

} else {
var statearr_47808_47868 = state_47804__$1;
(statearr_47808_47868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (1))){
var state_47804__$1 = state_47804;
var G__47809_47869 = method;
var G__47809_47870__$1 = (((G__47809_47869 instanceof cljs.core.Keyword))?G__47809_47869.fqn:null);
switch (G__47809_47870__$1) {
case "post":
var statearr_47810_47872 = state_47804__$1;
(statearr_47810_47872[(1)] = (3));


break;
case "get":
var statearr_47811_47873 = state_47804__$1;
(statearr_47811_47873[(1)] = (4));


break;
case "put":
var statearr_47812_47874 = state_47804__$1;
(statearr_47812_47874[(1)] = (5));


break;
case "delete":
var statearr_47813_47875 = state_47804__$1;
(statearr_47813_47875[(1)] = (6));


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47809_47870__$1)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (4))){
var state_47804__$1 = state_47804;
var statearr_47814_47876 = state_47804__$1;
(statearr_47814_47876[(2)] = cljs_http.client.get);

(statearr_47814_47876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (15))){
var inst_47770 = (state_47804[(7)]);
var state_47804__$1 = state_47804;
var statearr_47815_47877 = state_47804__$1;
(statearr_47815_47877[(2)] = inst_47770);

(statearr_47815_47877[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (13))){
var inst_47783 = (state_47804[(2)]);
var state_47804__$1 = state_47804;
var statearr_47816_47878 = state_47804__$1;
(statearr_47816_47878[(2)] = inst_47783);

(statearr_47816_47878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (6))){
var state_47804__$1 = state_47804;
var statearr_47817_47879 = state_47804__$1;
(statearr_47817_47879[(2)] = cljs_http.client.delete$);

(statearr_47817_47879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (17))){
var inst_47793 = (state_47804[(8)]);
var inst_47796 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,inst_47793);
var inst_47797 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_47796) : re_frame.core.dispatch.call(null,inst_47796));
var state_47804__$1 = state_47804;
var statearr_47818_47880 = state_47804__$1;
(statearr_47818_47880[(2)] = inst_47797);

(statearr_47818_47880[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (3))){
var state_47804__$1 = state_47804;
var statearr_47819_47881 = state_47804__$1;
(statearr_47819_47881[(2)] = cljs_http.client.post);

(statearr_47819_47881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (12))){
var state_47804__$1 = state_47804;
var statearr_47820_47882 = state_47804__$1;
(statearr_47820_47882[(2)] = false);

(statearr_47820_47882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (2))){
var inst_47767 = (state_47804[(2)]);
var inst_47768 = (inst_47767.cljs$core$IFn$_invoke$arity$2 ? inst_47767.cljs$core$IFn$_invoke$arity$2(url,opts) : inst_47767.call(null,url,opts));
var state_47804__$1 = state_47804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47804__$1,(7),inst_47768);
} else {
if((state_val_47805 === (19))){
var inst_47802 = (state_47804[(2)]);
var state_47804__$1 = state_47804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47804__$1,inst_47802);
} else {
if((state_val_47805 === (11))){
var state_47804__$1 = state_47804;
var statearr_47821_47883 = state_47804__$1;
(statearr_47821_47883[(2)] = true);

(statearr_47821_47883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (9))){
var state_47804__$1 = state_47804;
var statearr_47822_47884 = state_47804__$1;
(statearr_47822_47884[(2)] = false);

(statearr_47822_47884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (5))){
var state_47804__$1 = state_47804;
var statearr_47823_47885 = state_47804__$1;
(statearr_47823_47885[(2)] = cljs_http.client.put);

(statearr_47823_47885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (14))){
var inst_47770 = (state_47804[(7)]);
var inst_47788 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_47770);
var state_47804__$1 = state_47804;
var statearr_47824_47886 = state_47804__$1;
(statearr_47824_47886[(2)] = inst_47788);

(statearr_47824_47886[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (16))){
var inst_47791 = (state_47804[(9)]);
var inst_47770 = (state_47804[(7)]);
var inst_47791__$1 = (state_47804[(2)]);
var inst_47792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47791__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var inst_47793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47791__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var inst_47794 = console.log("Result",inst_47770);
var state_47804__$1 = (function (){var statearr_47825 = state_47804;
(statearr_47825[(9)] = inst_47791__$1);

(statearr_47825[(10)] = inst_47794);

(statearr_47825[(8)] = inst_47793);

return statearr_47825;
})();
if(cljs.core.truth_(inst_47792)){
var statearr_47826_47887 = state_47804__$1;
(statearr_47826_47887[(1)] = (17));

} else {
var statearr_47827_47888 = state_47804__$1;
(statearr_47827_47888[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (10))){
var inst_47786 = (state_47804[(2)]);
var state_47804__$1 = state_47804;
if(cljs.core.truth_(inst_47786)){
var statearr_47828_47889 = state_47804__$1;
(statearr_47828_47889[(1)] = (14));

} else {
var statearr_47829_47890 = state_47804__$1;
(statearr_47829_47890[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (18))){
var inst_47791 = (state_47804[(9)]);
var inst_47799 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,inst_47791);
var inst_47800 = (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(inst_47799) : re_frame.core.dispatch.call(null,inst_47799));
var state_47804__$1 = state_47804;
var statearr_47830_47891 = state_47804__$1;
(statearr_47830_47891[(2)] = inst_47800);

(statearr_47830_47891[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47805 === (8))){
var inst_47770 = (state_47804[(7)]);
var inst_47775 = inst_47770.cljs$lang$protocol_mask$partition0$;
var inst_47776 = (inst_47775 & (64));
var inst_47777 = inst_47770.cljs$core$ISeq$;
var inst_47778 = (cljs.core.PROTOCOL_SENTINEL === inst_47777);
var inst_47779 = ((inst_47776) || (inst_47778));
var state_47804__$1 = state_47804;
if(cljs.core.truth_(inst_47779)){
var statearr_47831_47892 = state_47804__$1;
(statearr_47831_47892[(1)] = (11));

} else {
var statearr_47832_47893 = state_47804__$1;
(statearr_47832_47893[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var athens$events$state_machine__41713__auto__ = null;
var athens$events$state_machine__41713__auto____0 = (function (){
var statearr_47833 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47833[(0)] = athens$events$state_machine__41713__auto__);

(statearr_47833[(1)] = (1));

return statearr_47833;
});
var athens$events$state_machine__41713__auto____1 = (function (state_47804){
while(true){
var ret_value__41714__auto__ = (function (){try{while(true){
var result__41715__auto__ = switch__41712__auto__(state_47804);
if(cljs.core.keyword_identical_QMARK_(result__41715__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41715__auto__;
}
break;
}
}catch (e47834){if((e47834 instanceof Object)){
var ex__41716__auto__ = e47834;
var statearr_47835_47894 = state_47804;
(statearr_47835_47894[(5)] = ex__41716__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47834;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47895 = state_47804;
state_47804 = G__47895;
continue;
} else {
return ret_value__41714__auto__;
}
break;
}
});
athens$events$state_machine__41713__auto__ = function(state_47804){
switch(arguments.length){
case 0:
return athens$events$state_machine__41713__auto____0.call(this);
case 1:
return athens$events$state_machine__41713__auto____1.call(this,state_47804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
athens$events$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$0 = athens$events$state_machine__41713__auto____0;
athens$events$state_machine__41713__auto__.cljs$core$IFn$_invoke$arity$1 = athens$events$state_machine__41713__auto____1;
return athens$events$state_machine__41713__auto__;
})()
})();
var state__41737__auto__ = (function (){var statearr_47836 = (f__41736__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41736__auto__.cljs$core$IFn$_invoke$arity$0() : f__41736__auto__.call(null));
(statearr_47836[(6)] = c__41735__auto__);

return statearr_47836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41737__auto__);
}));

return c__41735__auto__;
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__47708_47865,G__47709_47866) : re_frame.core.reg_fx.call(null,G__47708_47865,G__47709_47866));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),athens.db.athens_url,new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945)], null)], null)], null);
}));
var G__47837_47896 = new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577);
var G__47838_47897 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__47839){
var vec__47840 = p__47839;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840,(1),null);
var _PLUS_debux_dbg_opts_PLUS__47898 = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))));

var opts__46799__auto___47899 = _PLUS_debux_dbg_opts_PLUS__47898;
var result__46800__auto___47900 = datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((function (){var opts__46799__auto____$1 = _PLUS_debux_dbg_opts_PLUS__47898;
var result__46800__auto___47900 = athens.db.dsdb;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto___47900,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46800__auto___47900;
})(),(function (){var opts__46799__auto____$1 = _PLUS_debux_dbg_opts_PLUS__47898;
var result__46800__auto___47900 = (function (){var G__47844 = (function (){var opts__46799__auto____$2 = _PLUS_debux_dbg_opts_PLUS__47898;
var result__46800__auto___47900 = athens.db.schema;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto___47900,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","schema","db/schema",58525766,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46800__auto___47900;
})();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__47844) : datascript.core.empty_db.call(null,G__47844));
})();
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto___47900,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46800__auto___47900;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto___47900,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("d","reset-conn!","d/reset-conn!",1315177168,null),new cljs.core.Symbol("db","dsdb","db/dsdb",-512073290,null),cljs.core.list(new cljs.core.Symbol("d","empty-db","d/empty-db",1486862032,null),new cljs.core.Symbol("db","schema","db/schema",58525766,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

}catch (e47843){var e_47901 = e47843;
throw e_47901;
}
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)));

var opts__46799__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = athens.db.str_to_db_tx((function (){var opts__46799__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = json_str;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46800__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("db","str-to-db-tx","db/str-to-db-tx",1897806403,null),new cljs.core.Symbol(null,"json-str","json-str",-930948627,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46800__auto__;
}catch (e47845){var e = e47845;
throw e;
}}):(function (_,p__47846){
var vec__47847 = p__47846;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847,(0),null);
var json_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847,(1),null);
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(athens.db.dsdb,(datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(athens.db.schema) : datascript.core.empty_db.call(null,athens.db.schema)));

return athens.db.str_to_db_tx(json_str);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__47837_47896,G__47838_47897) : re_posh.core.reg_event_ds.call(null,G__47837_47896,G__47838_47897));
var G__47850_47902 = new cljs.core.Keyword("block","toggle-open","block/toggle-open",2080151710);
var G__47851_47903 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__47852){
var vec__47853 = p__47852;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47853,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47853,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47853,(2),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null));

var opts__46799__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__46799__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(function (){var opts__46799__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = eid;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46800__auto__;
})(),new cljs.core.Keyword("block","open","block/open",-1875254829),(function (){var opts__46799__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = cljs.core.not((function (){var opts__46799__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = open_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__46800__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46800__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46800__auto__;
})()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"open-state","open-state",-1014328707,null))], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46800__auto__;
}catch (e47856){var e = e47856;
throw e;
}}):(function (_,p__47857){
var vec__47858 = p__47857;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47858,(0),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47858,(1),null);
var open_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47858,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,new cljs.core.Keyword("block","open","block/open",-1875254829),cljs.core.not(open_state)], null)], null);
}));
(re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_event_ds.cljs$core$IFn$_invoke$arity$2(G__47850_47902,G__47851_47903) : re_posh.core.reg_event_ds.call(null,G__47850_47902,G__47851_47903));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db,error){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)));

var opts__46799__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = cljs.core.assoc_in((function (){var opts__46799__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46800__auto__;
})(),(function (){var opts__46799__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46800__auto__;
})(),(function (){var opts__46799__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = error;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46800__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Symbol(null,"error","error",661562495,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46800__auto__;
}catch (e47861){var e = e47861;
throw e;
}}):(function (db,error){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),error);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY));

var opts__46799__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = cljs.core.assoc_in((function (){var opts__46799__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46800__auto__;
})(),(function (){var opts__46799__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46800__auto__;
})(),(function (){var opts__46799__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46800__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46800__auto__;
}catch (e47862){var e = e47862;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),cljs.core.PersistentArrayMap.EMPTY);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (db){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false));

var opts__46799__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = cljs.core.assoc_in((function (){var opts__46799__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = db;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46800__auto__;
})(),(function (){var opts__46799__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46800__auto__;
})(),false);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46800__auto__;
}catch (e47863){var e = e47863;
throw e;
}}):(function (db){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),false);
})));
athens.events.boot_flow = (function athens$events$boot_flow(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-dispatch","first-dispatch",128561923),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datoms","get-datoms",1153619048)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-loading","clear-loading",-1208278228)], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"when","when",-576417306),new cljs.core.Keyword(null,"seen?","seen?",-1677689856),new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.Keyword(null,"api-request-error","api-request-error",-1111782181),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alert-failure","alert-failure",-331784945),"Boot Error"], null),new cljs.core.Keyword(null,"halt?","halt?",-1110658247),true], null)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boot","boot",2007860585),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null));

var opts__46799__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46800__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46800__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),cljs.core.list(new cljs.core.Symbol(null,"boot-flow","boot-flow",-1964200280,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46800__auto__;
}catch (e47864){var e = e47864;
throw e;
}}):(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-flow","async-flow",1464712702),athens.events.boot_flow()], null);
})));

//# sourceMappingURL=athens.events.js.map
