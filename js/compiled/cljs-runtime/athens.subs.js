goog.provide('athens.subs');
goog.require('cljs.core');
goog.require('athens.blocks');
goog.require('re_frame.core');
goog.require('re_posh.core');
goog.require('day8.re_frame.tracing');
var G__46932_47140 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__46933_47143 = (function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__46932_47140,G__46933_47143) : re_frame.core.reg_sub.call(null,G__46932_47140,G__46933_47143));
var G__46936_47145 = new cljs.core.Keyword(null,"errors","errors",-908790718);
var G__46937_47146 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__46936_47145,G__46937_47146) : re_frame.core.reg_sub.call(null,G__46936_47145,G__46937_47146));
var G__46941_47147 = new cljs.core.Keyword(null,"loading","loading",-737050189);
var G__46942_47148 = (function (db,_){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__46941_47147,G__46942_47148) : re_frame.core.reg_sub.call(null,G__46941_47147,G__46942_47148));
var G__46952_47149 = new cljs.core.Keyword(null,"nodes","nodes",-2099585805);
var G__46953_47150 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?t","?t",1786819229,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__46952_47149,G__46953_47150) : re_posh.core.reg_query_sub.call(null,G__46952_47149,G__46953_47150));
var G__46956_47156 = new cljs.core.Keyword("node","refs","node/refs",-1563406590);
var G__46957_47157 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Symbol(null,"?s","?s",456183954,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"re-find","re-find",1143444147,null),new cljs.core.Symbol(null,"?regex","?regex",-961621761,null),new cljs.core.Symbol(null,"?s","?s",456183954,null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?id","?id",928433279,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__46956_47156,G__46957_47157) : re_posh.core.reg_query_sub.call(null,G__46956_47156,G__46957_47157));
var G__46963_47163 = new cljs.core.Keyword("page","sidebar","page/sidebar",32416927);
var G__46964_47164 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?order","?order",2076500391,null),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("page","sidebar","page/sidebar",32416927),new cljs.core.Symbol(null,"?order","?order",2076500391,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Symbol(null,"?bid","?bid",-205769208,null)], null)], null);
(re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_query_sub.cljs$core$IFn$_invoke$arity$2(G__46963_47163,G__46964_47164) : re_posh.core.reg_query_sub.call(null,G__46963_47163,G__46964_47164));
var G__46967_47165 = new cljs.core.Keyword(null,"node","node",581201198);
var G__46968_47166 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__46967_47165,G__46968_47166) : re_posh.core.reg_pull_sub.call(null,G__46967_47165,G__46968_47166));
var G__46969_47167 = new cljs.core.Keyword("block","uid","block/uid",-1623585167);
var G__46970_47168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__46969_47167,G__46970_47168) : re_posh.core.reg_pull_sub.call(null,G__46969_47167,G__46970_47168));
var G__46971_47171 = new cljs.core.Keyword("block","string","block/string",-2066596447);
var G__46972_47172 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__46971_47171,G__46972_47172) : re_posh.core.reg_pull_sub.call(null,G__46971_47171,G__46972_47172));
var G__46973_47173 = new cljs.core.Keyword(null,"blocks","blocks",-610462153);
var G__46974_47174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__46973_47173,G__46974_47174) : re_posh.core.reg_pull_sub.call(null,G__46973_47173,G__46974_47174));
var G__46975_47175 = new cljs.core.Keyword("block","children","block/children",-1040716209);
var G__46976_47176 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("block","order","block/order",-1429282437),new cljs.core.Keyword("block","open","block/open",-1875254829),new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__46975_47175,G__46976_47176) : re_posh.core.reg_pull_sub.call(null,G__46975_47175,G__46976_47176));
var G__46977_47178 = new cljs.core.Keyword("block","children-sorted","block/children-sorted",106153544);
var G__46978_47179 = (function (p__46980,_){
var vec__46981 = p__46980;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46981,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46981,(1),null);
var G__46984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","children","block/children",-1040716209),id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__46984) : re_posh.core.subscribe.call(null,G__46984));
});
var G__46979_47180 = (function (block,_){
return athens.blocks.sort_block(block);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__46977_47178,G__46978_47179,G__46979_47180) : re_frame.core.reg_sub.call(null,G__46977_47178,G__46978_47179,G__46979_47180));
var G__46988_47183 = new cljs.core.Keyword("block","_children","block/_children",1128070632);
var G__46989_47184 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword("block","string","block/string",-2066596447),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("block","_children","block/_children",1128070632),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null);
(re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2 ? re_posh.core.reg_pull_sub.cljs$core$IFn$_invoke$arity$2(G__46988_47183,G__46989_47184) : re_posh.core.reg_pull_sub.call(null,G__46988_47183,G__46989_47184));
var G__46990_47185 = new cljs.core.Keyword("block","_children2","block/_children2",-1277243604);
var G__46991_47186 = (function (p__46993,_){
var vec__46994 = p__46993;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46994,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46994,(1),null);
var G__46997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","_children","block/_children",1128070632),id], null);
return (re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__46997) : re_posh.core.subscribe.call(null,G__46997));
});
var G__46992_47187 = (function (block,_){
return cljs.core.reverse(cljs.core.rest((function (){var b = block;
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(b))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,b);
} else {
var G__47188 = cljs.core.first(new cljs.core.Keyword("block","_children","block/_children",1128070632).cljs$core$IFn$_invoke$arity$1(b));
var G__47189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword("block","_children","block/_children",1128070632)));
b = G__47188;
res = G__47189;
continue;
}
break;
}
})()));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$3(G__46990_47185,G__46991_47186,G__46992_47187) : re_frame.core.reg_sub.call(null,G__46990_47185,G__46991_47186,G__46992_47187));
var G__47017_47190 = new cljs.core.Keyword(null,"pull-nodes","pull-nodes",61183062);
var G__47018_47191 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__47019_47192 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null);
var G__47020_47193 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (nodes,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null)], null));

var opts__46821__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46822__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),nodes], null);
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46822__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__46822__auto__;
}catch (e47063){var e = e47063;
throw e;
}}):(function (nodes,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull-many","pull-many",217148130),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Keyword(null,"ids","ids",-998535796),nodes], null);
}));
(re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_posh.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__47017_47190,G__47018_47191,G__47019_47192,G__47020_47193) : re_posh.core.reg_sub.call(null,G__47017_47190,G__47018_47191,G__47019_47192,G__47020_47193));
var G__47070_47194 = new cljs.core.Keyword(null,"favorites","favorites",1740773480);
var G__47071_47195 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__47072_47196 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","sidebar","page/sidebar",32416927)], null);
var G__47073_47197 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (nodes,_){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY),cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"first","first",996428481,null))));

return debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"sort-by","sort-by",1317932224,null),new cljs.core.Symbol(null,"first","first",996428481,null)),(0),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (){var opts__46821__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46822__auto__ = cljs.core.first;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46822__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__46822__auto__;
})(),debux.common.util.spy_last(cljs.core.list(new cljs.core.Symbol(null,"into","into",1489695498,null),cljs.core.PersistentVector.EMPTY),(1),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var opts__46821__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__46822__auto__ = cljs.core.PersistentVector.EMPTY;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__46822__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__46822__auto__;
})(),debux.common.util.spy_last(new cljs.core.Symbol(null,"nodes","nodes",-459054278,null),(2),nodes)))));
}catch (e47124){var e = e47124;
throw e;
}}):(function (nodes,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,nodes));
}));
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__47070_47194,G__47071_47195,G__47072_47196,G__47073_47197) : re_frame.core.reg_sub.call(null,G__47070_47194,G__47071_47195,G__47072_47196,G__47073_47197));

//# sourceMappingURL=athens.subs.js.map
