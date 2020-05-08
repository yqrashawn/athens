goog.provide('posh.lib.update');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.db');
posh.lib.update.update_pull = (function posh$lib$update$update_pull(p__66115,storage_key){
var map__66116 = p__66115;
var map__66116__$1 = (((((!((map__66116 == null))))?(((((map__66116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66116):map__66116);
var posh_tree = map__66116__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66116__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66116__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var vec__66118 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66118,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66118,(1),null);
var pull_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66118,(2),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66118,(3),null);
var analysis = posh.lib.pull_analyze.pull_analyze(dcfg,cljs.core.cons(new cljs.core.Keyword(null,"patterns","patterns",1164082024),retrieve),posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb),pull_pattern,eid);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_pull], null)], 0)),new cljs.core.Keyword(null,"patterns","patterns",1164082024));
});
posh.lib.update.update_filter_pull = (function posh$lib$update$update_filter_pull(p__66121,storage_key){
var map__66122 = p__66121;
var map__66122__$1 = (((((!((map__66122 == null))))?(((((map__66122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66122):map__66122);
var posh_tree = map__66122__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66122__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66122__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var vec__66126 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66126,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66126,(1),null);
var pull_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66126,(2),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66126,(3),null);
var analysis = posh.lib.pull_analyze.pull_analyze(dcfg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294)], null),retrieve),posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb),pull_pattern,eid);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),cljs.core.first(cljs.core.vals(new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis))),new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_filter_pull], null)], 0)),new cljs.core.Keyword(null,"patterns","patterns",1164082024),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-patterns","ref-patterns",77228294)], 0));
});
posh.lib.update.update_pull_many = (function posh$lib$update$update_pull_many(p__66129,storage_key){
var map__66132 = p__66129;
var map__66132__$1 = (((((!((map__66132 == null))))?(((((map__66132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66132):map__66132);
var posh_tree = map__66132__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66132__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66132__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var vec__66134 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66134,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66134,(1),null);
var pull_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66134,(2),null);
var eids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66134,(3),null);
var analysis = posh.lib.pull_analyze.pull_many_analyze(dcfg,cljs.core.cons(new cljs.core.Keyword(null,"patterns","patterns",1164082024),retrieve),posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb),pull_pattern,eids);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_pull_many], null)], 0)),new cljs.core.Keyword(null,"patterns","patterns",1164082024));
});
posh.lib.update.update_q_with_dbvarmap = (function posh$lib$update$update_q_with_dbvarmap(p__66142,storage_key){
var map__66143 = p__66142;
var map__66143__$1 = (((((!((map__66143 == null))))?(((((map__66143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66143):map__66143);
var posh_tree = map__66143__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66143__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66143__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));

var vec__66148 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66148,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66148,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66148,(2),null);
var retrieve__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve));
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var poshdbmap = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66154){
var vec__66155 = p__66154;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66155,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66155,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb)]);
}),dbvarmap));
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66158){
var vec__66159 = p__66158;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66159,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66159,(1),null);
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(poshdbmap,sym);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var analysis = posh.lib.q_analyze.q_analyze(dcfg,retrieve__$1,query,fixed_args);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137),dbvarmap,new cljs.core.Keyword(null,"analysis","analysis",-1362593389),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_q], null)], 0)),new cljs.core.Keyword(null,"patterns","patterns",1164082024))], null);
});
posh.lib.update.update_q = (function posh$lib$update$update_q(posh_tree,storage_key){
return new cljs.core.Keyword(null,"analysis","analysis",-1362593389).cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key));
});
posh.lib.update.reduce_entities = (function posh$lib$update$reduce_entities(r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$1,x);
}),acc,xs);
}),cljs.core.PersistentHashSet.EMPTY,r);
});
posh.lib.update.filter_q_transform_analysis = (function posh$lib$update$filter_q_transform_analysis(analysis){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([analysis,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.update.reduce_entities(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(analysis))], null)], null),new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666),new cljs.core.Keyword(null,"patterns","patterns",1164082024).cljs$core$IFn$_invoke$arity$1(analysis),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),posh.lib.update.update_filter_q], null)], 0)),new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"patterns","patterns",1164082024)], 0));
});
posh.lib.update.update_filter_q = (function posh$lib$update$update_filter_q(posh_tree,storage_key){
return posh.lib.update.filter_q_transform_analysis(new cljs.core.Keyword(null,"analysis","analysis",-1362593389).cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key)));
});
posh.lib.update.update_posh_item = (function posh$lib$update$update_posh_item(posh_tree,storage_key){
var G__66167 = cljs.core.first(storage_key);
var G__66167__$1 = (((G__66167 instanceof cljs.core.Keyword))?G__66167.fqn:null);
switch (G__66167__$1) {
case "pull":
return posh.lib.update.update_pull(posh_tree,storage_key);

break;
case "q":
return new cljs.core.Keyword(null,"analysis","analysis",-1362593389).cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q(posh_tree,storage_key));

break;
case "filter-pull":
return posh.lib.update.update_filter_pull(posh_tree,storage_key);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66167__$1)].join('')));

}
});

//# sourceMappingURL=posh.lib.update.js.map
