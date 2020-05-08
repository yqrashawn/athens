goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__65257 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65257) : stop_at_QMARK_.call(null,G__65257));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__65258 = stop_at_QMARK_;
var G__65259 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__65258,G__65259) : posh.lib.q_analyze.take_until.call(null,G__65258,G__65259));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__65262 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65262) : rest_at_QMARK_.call(null,G__65262));
}
})())){
return ls;
} else {
var G__66113 = rest_at_QMARK_;
var G__66114 = cljs.core.rest(ls);
rest_at_QMARK_ = G__66113;
ls = G__66114;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__65265 = split_at_QMARK_;
var G__65266 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__65265,G__65266) : posh.lib.q_analyze.split_list_at.call(null,G__65265,G__65266));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if((!(cljs.core.map_QMARK_(query)))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__65271 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65271) : posh.lib.q_analyze.get_all_vars.call(null,G__65271));
})(),(function (){var G__65272 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65272) : posh.lib.q_analyze.get_all_vars.call(null,G__65272));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__65273 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65273) : posh.lib.q_analyze.get_all_vars.call(null,G__65273));
})(),cljs.core.first(query));
} else {
var G__65276 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65276) : posh.lib.q_analyze.get_all_vars.call(null,G__65276));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832));
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_(v)) && ((!(((cljs.core.coll_QMARK_(cljs.core.first(v))) || (cljs.core.coll_QMARK_(cljs.core.second(v))))))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__4174__auto__)){
return (!(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav))));
} else {
return and__4174__auto__;
}
})())){
var G__65299 = cljs.core.rest(eav);
var G__65300 = (n - (1));
var G__65301 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__65302 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__65299,G__65300,G__65301,G__65302) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__65299,G__65300,G__65301,G__65302));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__65303 = cljs.core.rest(eav);
var G__65304 = (n - (1));
var G__65305 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__65306 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__65303,G__65304,G__65305,G__65306) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__65303,G__65304,G__65305,G__65306));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = ((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__65311 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__65311) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__65311));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__65312 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__65312) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__65312));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(where)){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if(((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where))))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__65320 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65320) : posh.lib.q_analyze.get_eavs.call(null,G__65320));
})(),(function (){var G__65321 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65321) : posh.lib.q_analyze.get_eavs.call(null,G__65321));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__65322 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65322) : posh.lib.q_analyze.get_eavs.call(null,G__65322));
})(),(function (){var G__65324 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65324) : posh.lib.q_analyze.get_eavs.call(null,G__65324));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__65326 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65326) : posh.lib.q_analyze.get_eavs.call(null,G__65326));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_65346 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_65346)) && ((cljs.core.count(ocr_65346) === 2)))){
try{var ocr_65346_0__65367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65346,(0));
if(((cljs.core.vector_QMARK_(ocr_65346_0__65367)) && ((cljs.core.count(ocr_65346_0__65367) === 5)))){
try{var ocr_65346_0__65367_0__65369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65346_0__65367,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65346_0__65367_0__65369,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65346_0__65367,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65346_0__65367,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65346_0__65367,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65346,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__65392 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65392) : posh.lib.q_analyze.get_eavs.call(null,G__65392));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e65391){if((e65391 instanceof Error)){
var e__63937__auto__ = e65391;
if((e__63937__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto__;
}
} else {
throw e65391;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65390){if((e65390 instanceof Error)){
var e__63937__auto__ = e65390;
if((e__63937__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto__;
}
} else {
throw e65390;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65385){if((e65385 instanceof Error)){
var e__63937__auto__ = e65385;
if((e__63937__auto__ === cljs.core.match.backtrack)){
var G__65389 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65389) : posh.lib.q_analyze.get_eavs.call(null,G__65389));
} else {
throw e__63937__auto__;
}
} else {
throw e65385;

}
}} else {
var G__65393 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65393) : posh.lib.q_analyze.get_eavs.call(null,G__65393));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__65395){
var vec__65396 = p__65395;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65396,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65396,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65399_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__65399_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__65399_SHARP_);
} else {
return p1__65399_SHARP_;
}
}),eav));
}),eavs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__65403 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65403) : posh.lib.q_analyze.count_qvars.call(null,G__65403));
})(),(function (){var G__65406 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65406) : posh.lib.q_analyze.count_qvars.call(null,G__65406));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__65409 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65409) : posh.lib.q_analyze.count_qvars.call(null,G__65409));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__65413(s__65414){
return (new cljs.core.LazySeq(null,(function (){
var s__65414__$1 = s__65414;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65414__$1);
if(temp__5735__auto__){
var s__65414__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65414__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65414__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65416 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65415 = (0);
while(true){
if((i__65415 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65415);
cljs.core.chunk_append(b__65416,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__66162 = (i__65415 + (1));
i__65415 = G__66162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65416),posh$lib$q_analyze$fill_qvar_set_$_iter__65413(cljs.core.chunk_rest(s__65414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65416),null);
}
} else {
var r = cljs.core.first(s__65414__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__65413(cljs.core.rest(s__65414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__65418 = cljs.core.first(seq1);
var G__65419 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__65418,G__65419) : f.call(null,G__65418,G__65419));
})(),(function (){var G__65420 = f;
var G__65421 = cljs.core.rest(seq1);
var G__65422 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__65420,G__65421,G__65422) : posh.lib.q_analyze.seq_merge_with.call(null,G__65420,G__65421,G__65422));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__65431){
var vec__65432 = p__65431;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65432,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65432,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65432,(2),null);
var eav = vec__65432;
var vec__65435 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65435,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65435,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65435,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65441(s__65442){
return (new cljs.core.LazySeq(null,(function (){
var s__65442__$1 = s__65442;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65442__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__65442__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65441_$_iter__65443(s__65444){
return (new cljs.core.LazySeq(null,((function (s__65442__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav){
return (function (){
var s__65444__$1 = s__65444;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65444__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__65444__$1,s__65442__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65441_$_iter__65443_$_iter__65445(s__65446){
return (new cljs.core.LazySeq(null,((function (s__65444__$1,s__65442__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav){
return (function (){
var s__65446__$1 = s__65446;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65446__$1);
if(temp__5735__auto____$2){
var s__65446__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65446__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65446__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65448 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65447 = (0);
while(true){
if((i__65447 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65447);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65447,s__65446__$1,s__65444__$1,s__65442__$1,vv,c__4580__auto__,size__4581__auto__,b__65448,s__65446__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav){
return (function (p1__65428_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__65428_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__65447,s__65446__$1,s__65444__$1,s__65442__$1,vv,c__4580__auto__,size__4581__auto__,b__65448,s__65446__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65447,s__65446__$1,s__65444__$1,s__65442__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__65448,s__65446__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav){
return (function (p__65463){
var vec__65464 = p__65463;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65464,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65464,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__65447,s__65446__$1,s__65444__$1,s__65442__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__65448,s__65446__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65447,s__65446__$1,s__65444__$1,s__65442__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__65448,s__65446__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav){
return (function (p1__65429_SHARP_){
if(cljs.core.truth_(p1__65429_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__65447,s__65446__$1,s__65444__$1,s__65442__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__65448,s__65446__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__65448,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__66181 = (i__65447 + (1));
i__65447 = G__66181;
continue;
} else {
var G__66182 = (i__65447 + (1));
i__65447 = G__66182;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65448),posh$lib$q_analyze$pattern_from_eav__old_$_iter__65441_$_iter__65443_$_iter__65445(cljs.core.chunk_rest(s__65446__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65448),null);
}
} else {
var vv = cljs.core.first(s__65446__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65446__$1,s__65444__$1,s__65442__$1,vv,s__65446__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav){
return (function (p1__65428_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__65428_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__65446__$1,s__65444__$1,s__65442__$1,vv,s__65446__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65446__$1,s__65444__$1,s__65442__$1,wildcard_count,vv,s__65446__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav){
return (function (p__65468){
var vec__65470 = p__65468;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65470,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65470,(1),null);
if(cljs.core.truth_((function (){var and__4174__auto__ = var_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__4174__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__65446__$1,s__65444__$1,s__65442__$1,wildcard_count,vv,s__65446__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65446__$1,s__65444__$1,s__65442__$1,wildcard_count,exposed_qvars,vv,s__65446__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav){
return (function (p1__65429_SHARP_){
if(cljs.core.truth_(p1__65429_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__65446__$1,s__65444__$1,s__65442__$1,wildcard_count,exposed_qvars,vv,s__65446__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__65441_$_iter__65443_$_iter__65445(cljs.core.rest(s__65446__$2)));
} else {
var G__66192 = cljs.core.rest(s__65446__$2);
s__65446__$1 = G__66192;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__65444__$1,s__65442__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav))
,null,null));
});})(s__65444__$1,s__65442__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__65441_$_iter__65443(cljs.core.rest(s__65444__$1)));
} else {
var G__66199 = cljs.core.rest(s__65444__$1);
s__65444__$1 = G__66199;
continue;
}
} else {
return null;
}
break;
}
});})(s__65442__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav))
,null,null));
});})(s__65442__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65435,qe,qa,qv,vec__65432,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__65441(cljs.core.rest(s__65442__$1)));
} else {
var G__66201 = cljs.core.rest(s__65442__$1);
s__65442__$1 = G__66201;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_65482 = cljs.core.vec(eav);
var ocr_65483 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_65482)) && ((cljs.core.count(ocr_65482) === 3)))){
try{var ocr_65482_0__65516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_0__65516,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65482_1__65517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_1__65517,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65482_2__65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_2__65518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65673){if((e65673 instanceof Error)){
var e__63937__auto__ = e65673;
if((e__63937__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65483)) && ((cljs.core.count(ocr_65483) === 3)))){
try{var ocr_65483_2__65527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65527 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65679){if((e65679 instanceof Error)){
var e__63937__auto____$1 = e65679;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65527 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65680){if((e65680 instanceof Error)){
var e__63937__auto____$2 = e65680;
if((e__63937__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$2;
}
} else {
throw e65680;

}
}} else {
throw e__63937__auto____$1;
}
} else {
throw e65679;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65674){if((e65674 instanceof Error)){
var e__63937__auto____$1 = e65674;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$1;
}
} else {
throw e65674;

}
}} else {
throw e__63937__auto__;
}
} else {
throw e65673;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65664){if((e65664 instanceof Error)){
var e__63937__auto__ = e65664;
if((e__63937__auto__ === cljs.core.match.backtrack)){
try{var ocr_65482_2__65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_2__65518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_65483)) && ((cljs.core.count(ocr_65483) === 3)))){
try{var ocr_65483_1__65538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65538 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65671){if((e65671 instanceof Error)){
var e__63937__auto____$1 = e65671;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65483_1__65538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65538 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65672){if((e65672 instanceof Error)){
var e__63937__auto____$2 = e65672;
if((e__63937__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$2;
}
} else {
throw e65672;

}
}} else {
throw e__63937__auto____$1;
}
} else {
throw e65671;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65667){if((e65667 instanceof Error)){
var e__63937__auto____$1 = e65667;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$1;
}
} else {
throw e65667;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65665){if((e65665 instanceof Error)){
var e__63937__auto____$1 = e65665;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$1;
}
} else {
throw e65665;

}
}} else {
throw e__63937__auto__;
}
} else {
throw e65664;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65586){if((e65586 instanceof Error)){
var e__63937__auto__ = e65586;
if((e__63937__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65483)) && ((cljs.core.count(ocr_65483) === 3)))){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === false)){
try{var ocr_65482_1__65517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_1__65517,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65482_2__65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_2__65518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65663){if((e65663 instanceof Error)){
var e__63937__auto____$1 = e65663;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$1;
}
} else {
throw e65663;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65662){if((e65662 instanceof Error)){
var e__63937__auto____$1 = e65662;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$1;
}
} else {
throw e65662;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65588){if((e65588 instanceof Error)){
var e__63937__auto____$1 = e65588;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === true)){
try{var ocr_65482_2__65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_2__65518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65482_1__65517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_1__65517,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65659){if((e65659 instanceof Error)){
var e__63937__auto____$2 = e65659;
if((e__63937__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65660){if((e65660 instanceof Error)){
var e__63937__auto____$3 = e65660;
if((e__63937__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65661){if((e65661 instanceof Error)){
var e__63937__auto____$4 = e65661;
if((e__63937__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$4;
}
} else {
throw e65661;

}
}} else {
throw e__63937__auto____$3;
}
} else {
throw e65660;

}
}} else {
throw e__63937__auto____$2;
}
} else {
throw e65659;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65655){if((e65655 instanceof Error)){
var e__63937__auto____$2 = e65655;
if((e__63937__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$2;
}
} else {
throw e65655;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65589){if((e65589 instanceof Error)){
var e__63937__auto____$2 = e65589;
if((e__63937__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === false)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === true)){
try{var ocr_65482_2__65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_2__65518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65653){if((e65653 instanceof Error)){
var e__63937__auto____$3 = e65653;
if((e__63937__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$3;
}
} else {
throw e65653;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65650){if((e65650 instanceof Error)){
var e__63937__auto____$3 = e65650;
if((e__63937__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === false)){
try{var ocr_65482_2__65518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_2__65518,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65652){if((e65652 instanceof Error)){
var e__63937__auto____$4 = e65652;
if((e__63937__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$4;
}
} else {
throw e65652;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65651){if((e65651 instanceof Error)){
var e__63937__auto____$4 = e65651;
if((e__63937__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$4;
}
} else {
throw e65651;

}
}} else {
throw e__63937__auto____$3;
}
} else {
throw e65650;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65590){if((e65590 instanceof Error)){
var e__63937__auto____$3 = e65590;
if((e__63937__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65546 === true)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === true)){
try{var ocr_65482_1__65517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_1__65517,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65649){if((e65649 instanceof Error)){
var e__63937__auto____$4 = e65649;
if((e__63937__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$4;
}
} else {
throw e65649;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65648){if((e65648 instanceof Error)){
var e__63937__auto____$4 = e65648;
if((e__63937__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$4;
}
} else {
throw e65648;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65591){if((e65591 instanceof Error)){
var e__63937__auto____$4 = e65591;
if((e__63937__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65546 === false)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === true)){
try{var ocr_65482_1__65517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_1__65517,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65647){if((e65647 instanceof Error)){
var e__63937__auto____$5 = e65647;
if((e__63937__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$5;
}
} else {
throw e65647;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65646){if((e65646 instanceof Error)){
var e__63937__auto____$5 = e65646;
if((e__63937__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$5;
}
} else {
throw e65646;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65592){if((e65592 instanceof Error)){
var e__63937__auto____$5 = e65592;
if((e__63937__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65546 === true)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === false)){
try{var ocr_65482_1__65517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_1__65517,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65645){if((e65645 instanceof Error)){
var e__63937__auto____$6 = e65645;
if((e__63937__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$6;
}
} else {
throw e65645;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65644){if((e65644 instanceof Error)){
var e__63937__auto____$6 = e65644;
if((e__63937__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$6;
}
} else {
throw e65644;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65593){if((e65593 instanceof Error)){
var e__63937__auto____$6 = e65593;
if((e__63937__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65546 === false)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === false)){
try{var ocr_65482_1__65517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_1__65517,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65643){if((e65643 instanceof Error)){
var e__63937__auto____$7 = e65643;
if((e__63937__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$7;
}
} else {
throw e65643;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65642){if((e65642 instanceof Error)){
var e__63937__auto____$7 = e65642;
if((e__63937__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$7;
}
} else {
throw e65642;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65594){if((e65594 instanceof Error)){
var e__63937__auto____$7 = e65594;
if((e__63937__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65546 === true)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === true)){
try{var ocr_65482_0__65516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_0__65516,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65641){if((e65641 instanceof Error)){
var e__63937__auto____$8 = e65641;
if((e__63937__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$8;
}
} else {
throw e65641;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65636){if((e65636 instanceof Error)){
var e__63937__auto____$8 = e65636;
if((e__63937__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$8;
}
} else {
throw e65636;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65595){if((e65595 instanceof Error)){
var e__63937__auto____$8 = e65595;
if((e__63937__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65546 === false)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === true)){
try{var ocr_65482_0__65516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_0__65516,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65634){if((e65634 instanceof Error)){
var e__63937__auto____$9 = e65634;
if((e__63937__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$9;
}
} else {
throw e65634;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65633){if((e65633 instanceof Error)){
var e__63937__auto____$9 = e65633;
if((e__63937__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$9;
}
} else {
throw e65633;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65596){if((e65596 instanceof Error)){
var e__63937__auto____$9 = e65596;
if((e__63937__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65546 === true)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === false)){
try{var ocr_65482_0__65516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_0__65516,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65632){if((e65632 instanceof Error)){
var e__63937__auto____$10 = e65632;
if((e__63937__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$10;
}
} else {
throw e65632;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65631){if((e65631 instanceof Error)){
var e__63937__auto____$10 = e65631;
if((e__63937__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$10;
}
} else {
throw e65631;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65600){if((e65600 instanceof Error)){
var e__63937__auto____$10 = e65600;
if((e__63937__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65546 === false)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === false)){
try{var ocr_65482_0__65516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65482_0__65516,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65626){if((e65626 instanceof Error)){
var e__63937__auto____$11 = e65626;
if((e__63937__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$11;
}
} else {
throw e65626;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65625){if((e65625 instanceof Error)){
var e__63937__auto____$11 = e65625;
if((e__63937__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$11;
}
} else {
throw e65625;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65601){if((e65601 instanceof Error)){
var e__63937__auto____$11 = e65601;
if((e__63937__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65546 === true)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === true)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65623){if((e65623 instanceof Error)){
var e__63937__auto____$12 = e65623;
if((e__63937__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$12;
}
} else {
throw e65623;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65618){if((e65618 instanceof Error)){
var e__63937__auto____$12 = e65618;
if((e__63937__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === false)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65622){if((e65622 instanceof Error)){
var e__63937__auto____$13 = e65622;
if((e__63937__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$13;
}
} else {
throw e65622;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65619){if((e65619 instanceof Error)){
var e__63937__auto____$13 = e65619;
if((e__63937__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === true)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65621){if((e65621 instanceof Error)){
var e__63937__auto____$14 = e65621;
if((e__63937__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$14;
}
} else {
throw e65621;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65620){if((e65620 instanceof Error)){
var e__63937__auto____$14 = e65620;
if((e__63937__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$14;
}
} else {
throw e65620;

}
}} else {
throw e__63937__auto____$13;
}
} else {
throw e65619;

}
}} else {
throw e__63937__auto____$12;
}
} else {
throw e65618;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65602){if((e65602 instanceof Error)){
var e__63937__auto____$12 = e65602;
if((e__63937__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65546 === false)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === true)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65616){if((e65616 instanceof Error)){
var e__63937__auto____$13 = e65616;
if((e__63937__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$13;
}
} else {
throw e65616;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65614){if((e65614 instanceof Error)){
var e__63937__auto____$13 = e65614;
if((e__63937__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$13;
}
} else {
throw e65614;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65603){if((e65603 instanceof Error)){
var e__63937__auto____$13 = e65603;
if((e__63937__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65546 === true)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === false)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65613){if((e65613 instanceof Error)){
var e__63937__auto____$14 = e65613;
if((e__63937__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$14;
}
} else {
throw e65613;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65612){if((e65612 instanceof Error)){
var e__63937__auto____$14 = e65612;
if((e__63937__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$14;
}
} else {
throw e65612;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65604){if((e65604 instanceof Error)){
var e__63937__auto____$14 = e65604;
if((e__63937__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_65483_2__65546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(2));
if((ocr_65483_2__65546 === false)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === true)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65610){if((e65610 instanceof Error)){
var e__63937__auto____$15 = e65610;
if((e__63937__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$15;
}
} else {
throw e65610;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65606){if((e65606 instanceof Error)){
var e__63937__auto____$15 = e65606;
if((e__63937__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_65483_0__65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(0));
if((ocr_65483_0__65544 === false)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65608){if((e65608 instanceof Error)){
var e__63937__auto____$16 = e65608;
if((e__63937__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_65483_1__65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65483,(1));
if((ocr_65483_1__65545 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65482,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65609){if((e65609 instanceof Error)){
var e__63937__auto____$17 = e65609;
if((e__63937__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$17;
}
} else {
throw e65609;

}
}} else {
throw e__63937__auto____$16;
}
} else {
throw e65608;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65607){if((e65607 instanceof Error)){
var e__63937__auto____$16 = e65607;
if((e__63937__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$16;
}
} else {
throw e65607;

}
}} else {
throw e__63937__auto____$15;
}
} else {
throw e65606;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65605){if((e65605 instanceof Error)){
var e__63937__auto____$15 = e65605;
if((e__63937__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$15;
}
} else {
throw e65605;

}
}} else {
throw e__63937__auto____$14;
}
} else {
throw e65604;

}
}} else {
throw e__63937__auto____$13;
}
} else {
throw e65603;

}
}} else {
throw e__63937__auto____$12;
}
} else {
throw e65602;

}
}} else {
throw e__63937__auto____$11;
}
} else {
throw e65601;

}
}} else {
throw e__63937__auto____$10;
}
} else {
throw e65600;

}
}} else {
throw e__63937__auto____$9;
}
} else {
throw e65596;

}
}} else {
throw e__63937__auto____$8;
}
} else {
throw e65595;

}
}} else {
throw e__63937__auto____$7;
}
} else {
throw e65594;

}
}} else {
throw e__63937__auto____$6;
}
} else {
throw e65593;

}
}} else {
throw e__63937__auto____$5;
}
} else {
throw e65592;

}
}} else {
throw e__63937__auto____$4;
}
} else {
throw e65591;

}
}} else {
throw e__63937__auto____$3;
}
} else {
throw e65590;

}
}} else {
throw e__63937__auto____$2;
}
} else {
throw e65589;

}
}} else {
throw e__63937__auto____$1;
}
} else {
throw e65588;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65587){if((e65587 instanceof Error)){
var e__63937__auto____$1 = e65587;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$1;
}
} else {
throw e65587;

}
}} else {
throw e__63937__auto__;
}
} else {
throw e65586;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65585){if((e65585 instanceof Error)){
var e__63937__auto__ = e65585;
if((e__63937__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__63937__auto__;
}
} else {
throw e65585;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_65702 = cljs.core.vec(eav);
var ocr_65703 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_65702)) && ((cljs.core.count(ocr_65702) === 3)))){
try{var ocr_65702_0__65728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_0__65728,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65702_1__65729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_1__65729,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65702_2__65730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_2__65730,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e65896){if((e65896 instanceof Error)){
var e__63937__auto__ = e65896;
if((e__63937__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65703)) && ((cljs.core.count(ocr_65703) === 3)))){
try{var ocr_65703_2__65736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(2));
if((ocr_65703_2__65736 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65898){if((e65898 instanceof Error)){
var e__63937__auto____$1 = e65898;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65703_2__65736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(2));
if((ocr_65703_2__65736 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65899){if((e65899 instanceof Error)){
var e__63937__auto____$2 = e65899;
if((e__63937__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$2;
}
} else {
throw e65899;

}
}} else {
throw e__63937__auto____$1;
}
} else {
throw e65898;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65897){if((e65897 instanceof Error)){
var e__63937__auto____$1 = e65897;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$1;
}
} else {
throw e65897;

}
}} else {
throw e__63937__auto__;
}
} else {
throw e65896;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65886){if((e65886 instanceof Error)){
var e__63937__auto__ = e65886;
if((e__63937__auto__ === cljs.core.match.backtrack)){
try{var ocr_65702_2__65730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_2__65730,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_65703)) && ((cljs.core.count(ocr_65703) === 3)))){
try{var ocr_65703_1__65742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65742 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65893){if((e65893 instanceof Error)){
var e__63937__auto____$1 = e65893;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65703_1__65742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65742 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65894){if((e65894 instanceof Error)){
var e__63937__auto____$2 = e65894;
if((e__63937__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$2;
}
} else {
throw e65894;

}
}} else {
throw e__63937__auto____$1;
}
} else {
throw e65893;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65891){if((e65891 instanceof Error)){
var e__63937__auto____$1 = e65891;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$1;
}
} else {
throw e65891;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65890){if((e65890 instanceof Error)){
var e__63937__auto____$1 = e65890;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$1;
}
} else {
throw e65890;

}
}} else {
throw e__63937__auto__;
}
} else {
throw e65886;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65762){if((e65762 instanceof Error)){
var e__63937__auto__ = e65762;
if((e__63937__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65703)) && ((cljs.core.count(ocr_65703) === 3)))){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === false)){
try{var ocr_65702_1__65729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_1__65729,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65702_2__65730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_2__65730,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65882){if((e65882 instanceof Error)){
var e__63937__auto____$1 = e65882;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$1;
}
} else {
throw e65882;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65877){if((e65877 instanceof Error)){
var e__63937__auto____$1 = e65877;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$1;
}
} else {
throw e65877;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65764){if((e65764 instanceof Error)){
var e__63937__auto____$1 = e65764;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === true)){
try{var ocr_65702_2__65730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_2__65730,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65702_1__65729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_1__65729,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65861){if((e65861 instanceof Error)){
var e__63937__auto____$2 = e65861;
if((e__63937__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65703_1__65746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65746 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65868){if((e65868 instanceof Error)){
var e__63937__auto____$3 = e65868;
if((e__63937__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65703_1__65746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65746 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65869){if((e65869 instanceof Error)){
var e__63937__auto____$4 = e65869;
if((e__63937__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$4;
}
} else {
throw e65869;

}
}} else {
throw e__63937__auto____$3;
}
} else {
throw e65868;

}
}} else {
throw e__63937__auto____$2;
}
} else {
throw e65861;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65859){if((e65859 instanceof Error)){
var e__63937__auto____$2 = e65859;
if((e__63937__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$2;
}
} else {
throw e65859;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65765){if((e65765 instanceof Error)){
var e__63937__auto____$2 = e65765;
if((e__63937__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === false)){
try{var ocr_65703_1__65746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65746 === true)){
try{var ocr_65702_2__65730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_2__65730,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65858){if((e65858 instanceof Error)){
var e__63937__auto____$3 = e65858;
if((e__63937__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$3;
}
} else {
throw e65858;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65851){if((e65851 instanceof Error)){
var e__63937__auto____$3 = e65851;
if((e__63937__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$3;
}
} else {
throw e65851;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65766){if((e65766 instanceof Error)){
var e__63937__auto____$3 = e65766;
if((e__63937__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65703_2__65747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(2));
if((ocr_65703_2__65747 === true)){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === true)){
try{var ocr_65702_1__65729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_1__65729,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65849){if((e65849 instanceof Error)){
var e__63937__auto____$4 = e65849;
if((e__63937__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$4;
}
} else {
throw e65849;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65844){if((e65844 instanceof Error)){
var e__63937__auto____$4 = e65844;
if((e__63937__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$4;
}
} else {
throw e65844;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65767){if((e65767 instanceof Error)){
var e__63937__auto____$4 = e65767;
if((e__63937__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_65703_2__65747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(2));
if((ocr_65703_2__65747 === false)){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === true)){
try{var ocr_65702_1__65729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_1__65729,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65840){if((e65840 instanceof Error)){
var e__63937__auto____$5 = e65840;
if((e__63937__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$5;
}
} else {
throw e65840;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65838){if((e65838 instanceof Error)){
var e__63937__auto____$5 = e65838;
if((e__63937__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$5;
}
} else {
throw e65838;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65768){if((e65768 instanceof Error)){
var e__63937__auto____$5 = e65768;
if((e__63937__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_65703_2__65747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(2));
if((ocr_65703_2__65747 === true)){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === false)){
try{var ocr_65702_1__65729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_1__65729,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65833){if((e65833 instanceof Error)){
var e__63937__auto____$6 = e65833;
if((e__63937__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$6;
}
} else {
throw e65833;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65820){if((e65820 instanceof Error)){
var e__63937__auto____$6 = e65820;
if((e__63937__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65703_1__65746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65746 === true)){
try{var ocr_65702_0__65728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_0__65728,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65823){if((e65823 instanceof Error)){
var e__63937__auto____$7 = e65823;
if((e__63937__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$7;
}
} else {
throw e65823;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65822){if((e65822 instanceof Error)){
var e__63937__auto____$7 = e65822;
if((e__63937__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$7;
}
} else {
throw e65822;

}
}} else {
throw e__63937__auto____$6;
}
} else {
throw e65820;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65771){if((e65771 instanceof Error)){
var e__63937__auto____$6 = e65771;
if((e__63937__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65703_2__65747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(2));
if((ocr_65703_2__65747 === false)){
try{var ocr_65703_1__65746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65746 === true)){
try{var ocr_65702_0__65728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_0__65728,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65819){if((e65819 instanceof Error)){
var e__63937__auto____$7 = e65819;
if((e__63937__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$7;
}
} else {
throw e65819;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65818){if((e65818 instanceof Error)){
var e__63937__auto____$7 = e65818;
if((e__63937__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$7;
}
} else {
throw e65818;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65772){if((e65772 instanceof Error)){
var e__63937__auto____$7 = e65772;
if((e__63937__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_65703_2__65747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(2));
if((ocr_65703_2__65747 === true)){
try{var ocr_65703_1__65746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65746 === false)){
try{var ocr_65702_0__65728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65702_0__65728,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65813){if((e65813 instanceof Error)){
var e__63937__auto____$8 = e65813;
if((e__63937__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$8;
}
} else {
throw e65813;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65789){if((e65789 instanceof Error)){
var e__63937__auto____$8 = e65789;
if((e__63937__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65703_1__65746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65746 === true)){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65802){if((e65802 instanceof Error)){
var e__63937__auto____$9 = e65802;
if((e__63937__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65803){if((e65803 instanceof Error)){
var e__63937__auto____$10 = e65803;
if((e__63937__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$10;
}
} else {
throw e65803;

}
}} else {
throw e__63937__auto____$9;
}
} else {
throw e65802;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65790){if((e65790 instanceof Error)){
var e__63937__auto____$9 = e65790;
if((e__63937__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65703_1__65746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65746 === false)){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65801){if((e65801 instanceof Error)){
var e__63937__auto____$10 = e65801;
if((e__63937__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$10;
}
} else {
throw e65801;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65791){if((e65791 instanceof Error)){
var e__63937__auto____$10 = e65791;
if((e__63937__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$10;
}
} else {
throw e65791;

}
}} else {
throw e__63937__auto____$9;
}
} else {
throw e65790;

}
}} else {
throw e__63937__auto____$8;
}
} else {
throw e65789;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65774){if((e65774 instanceof Error)){
var e__63937__auto____$8 = e65774;
if((e__63937__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65703_2__65747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(2));
if((ocr_65703_2__65747 === false)){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === true)){
try{var ocr_65703_1__65746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65746 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65787){if((e65787 instanceof Error)){
var e__63937__auto____$9 = e65787;
if((e__63937__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$9;
}
} else {
throw e65787;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65786){if((e65786 instanceof Error)){
var e__63937__auto____$9 = e65786;
if((e__63937__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$9;
}
} else {
throw e65786;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65775){if((e65775 instanceof Error)){
var e__63937__auto____$9 = e65775;
if((e__63937__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65703_2__65747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(2));
if((ocr_65703_2__65747 === true)){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === false)){
try{var ocr_65703_1__65746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65746 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65785){if((e65785 instanceof Error)){
var e__63937__auto____$10 = e65785;
if((e__63937__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$10;
}
} else {
throw e65785;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65784){if((e65784 instanceof Error)){
var e__63937__auto____$10 = e65784;
if((e__63937__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$10;
}
} else {
throw e65784;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65776){if((e65776 instanceof Error)){
var e__63937__auto____$10 = e65776;
if((e__63937__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_65703_2__65747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(2));
if((ocr_65703_2__65747 === false)){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === true)){
try{var ocr_65703_1__65746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65746 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65783){if((e65783 instanceof Error)){
var e__63937__auto____$11 = e65783;
if((e__63937__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$11;
}
} else {
throw e65783;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65780){if((e65780 instanceof Error)){
var e__63937__auto____$11 = e65780;
if((e__63937__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_65703_0__65745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(0));
if((ocr_65703_0__65745 === false)){
try{var ocr_65703_1__65746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65703,(1));
if((ocr_65703_1__65746 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65702,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65782){if((e65782 instanceof Error)){
var e__63937__auto____$12 = e65782;
if((e__63937__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$12;
}
} else {
throw e65782;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65781){if((e65781 instanceof Error)){
var e__63937__auto____$12 = e65781;
if((e__63937__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$12;
}
} else {
throw e65781;

}
}} else {
throw e__63937__auto____$11;
}
} else {
throw e65780;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65779){if((e65779 instanceof Error)){
var e__63937__auto____$11 = e65779;
if((e__63937__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$11;
}
} else {
throw e65779;

}
}} else {
throw e__63937__auto____$10;
}
} else {
throw e65776;

}
}} else {
throw e__63937__auto____$9;
}
} else {
throw e65775;

}
}} else {
throw e__63937__auto____$8;
}
} else {
throw e65774;

}
}} else {
throw e__63937__auto____$7;
}
} else {
throw e65772;

}
}} else {
throw e__63937__auto____$6;
}
} else {
throw e65771;

}
}} else {
throw e__63937__auto____$5;
}
} else {
throw e65768;

}
}} else {
throw e__63937__auto____$4;
}
} else {
throw e65767;

}
}} else {
throw e__63937__auto____$3;
}
} else {
throw e65766;

}
}} else {
throw e__63937__auto____$2;
}
} else {
throw e65765;

}
}} else {
throw e__63937__auto____$1;
}
} else {
throw e65764;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65763){if((e65763 instanceof Error)){
var e__63937__auto____$1 = e65763;
if((e__63937__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__63937__auto____$1;
}
} else {
throw e65763;

}
}} else {
throw e__63937__auto__;
}
} else {
throw e65762;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65760){if((e65760 instanceof Error)){
var e__63937__auto__ = e65760;
if((e__63937__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__63937__auto__;
}
} else {
throw e65760;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65910){
var vec__65911 = p__65910;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65911,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65911,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__65907_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__65907_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65915){
var vec__65916 = p__65915;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65916,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65916,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__65914_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__65914_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__65943 = cljs.core.rest(ins);
var G__65944 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__65943,G__65944) : posh.lib.q_analyze.just_qvars.call(null,G__65943,G__65944));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65945_SHARP_){
return cljs.core.zipmap(qvars,p1__65945_SHARP_);
}),varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(posh.lib.q_analyze.pull_pattern_QMARK_(x)){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(posh.lib.q_analyze.pull_pattern_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__65969 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65969,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65969,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65969,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65969,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__66488 = var$;
var G__66489 = dbvarmap;
var G__66490 = cljs.core.rest(dbeavs);
var$ = G__66488;
dbvarmap = G__66489;
dbeavs = G__66490;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__65976 = cljs.core.rest(vars);
var G__65977 = dbvarmap;
var G__65978 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__65976,G__65977,G__65978) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__65976,G__65977,G__65978));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__66498 = (n + (1));
var G__66499 = cljs.core.rest(xs__$1);
n = G__66498;
xs__$1 = G__66499;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
if(cljs.core.map_QMARK_(arg)){
var and__4174__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__4174__auto__;
}
} else {
return false;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65983_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__65983_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__65983_SHARP_) : type.call(null,p1__65983_SHARP_));
} else {
return p1__65983_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__65984 = cljs.core.rest(ins);
var G__65985 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__65984,G__65985) : posh.lib.q_analyze.make_dbarg_map.call(null,G__65984,G__65985));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__65990){
var vec__65991 = p__65990;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65991,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65991,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
/**
 * Returns whether attribute identified by k is of :db/valueType :db.type/ref
 */
posh.lib.q_analyze.schema_ref_QMARK_ = (function posh$lib$q_analyze$schema_ref_QMARK_(schema,k){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,k)));
});
posh.lib.q_analyze.indexes_of = (function posh$lib$q_analyze$indexes_of(e,coll){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__65996_SHARP_,p2__65995_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__65995_SHARP_)){
return p1__65996_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * Returns whether var-name is used as lookup-ref inside of query's :where clauses.
 *   var-name - the symbolic variable name
 *   where - coll of where clauses
 *   schema - map of schemas with attribute names as keys
 *   Returns boolean true or false
 */
posh.lib.q_analyze.lookup_ref_QMARK_ = (function posh$lib$q_analyze$lookup_ref_QMARK_(schema,where,var_name,var_value){
if((!(cljs.core.coll_QMARK_(var_value)))){
return false;
} else {
var clause = cljs.core.first(where);
var remaining = cljs.core.rest(where);
while(true){
var pred__66007 = cljs.core._EQ_;
var expr__66008 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__66007.cljs$core$IFn$_invoke$arity$2 ? pred__66007.cljs$core$IFn$_invoke$arity$2((1),expr__66008) : pred__66007.call(null,(1),expr__66008)))){
return true;
} else {
if(cljs.core.truth_((pred__66007.cljs$core$IFn$_invoke$arity$2 ? pred__66007.cljs$core$IFn$_invoke$arity$2((3),expr__66008) : pred__66007.call(null,(3),expr__66008)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__66507 = cljs.core.first(remaining);
var G__66508 = cljs.core.rest(remaining);
clause = G__66507;
remaining = G__66508;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__66509 = cljs.core.first(remaining);
var G__66510 = cljs.core.rest(remaining);
clause = G__66509;
remaining = G__66510;
continue;
} else {
return false;
}
}
}
break;
}
}
});
/**
 * Given input-set from query, resolves any lookup-refs
 *   Inputs:
 *   entid-fn - Datomic/DS function to take lookup-ref & returns entid
 *   db - value of DB
 *   schemas - map with keys matching known schema attributes
 *   where - where clauses of query
 *   input-set - value from query :in
 */
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,schema,where,var_name,input_set){
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__66014(s__66015){
return (new cljs.core.LazySeq(null,(function (){
var s__66015__$1 = s__66015;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66015__$1);
if(temp__5735__auto__){
var s__66015__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66015__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__66015__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__66017 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__66016 = (0);
while(true){
if((i__66016 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__66016);
cljs.core.chunk_append(b__66017,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__66517 = (i__66016 + (1));
i__66016 = G__66517;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66017),posh$lib$q_analyze$resolve_any_idents_$_iter__66014(cljs.core.chunk_rest(s__66015__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66017),null);
}
} else {
var var_value = cljs.core.first(s__66015__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__66014(cljs.core.rest(s__66015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66061){
var vec__66062 = p__66061;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66062,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66062,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66070){
var vec__66071 = p__66070;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66071,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66071,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66079){
var vec__66080 = p__66079;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66080,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66080,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66083){
var vec__66084 = p__66083;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66084,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66084,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__66088 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__66090 = cljs.core.vec(r);
var fexpr__66087 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66087.cljs$core$IFn$_invoke$arity$2 ? fexpr__66087.cljs$core$IFn$_invoke$arity$2(G__66088,G__66090) : fexpr__66087.call(null,G__66088,G__66090));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66094){
var vec__66095 = p__66094;
var seq__66096 = cljs.core.seq(vec__66095);
var first__66097 = cljs.core.first(seq__66096);
var seq__66096__$1 = cljs.core.next(seq__66096);
var db = first__66097;
var eav = seq__66096__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (var_name){
var temp__5733__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(var_name) : in_vars.call(null,var_name));
if(cljs.core.truth_(temp__5733__auto__)){
var var_value = temp__5733__auto__;
return posh.lib.q_analyze.resolve_any_idents(new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),where,var_name,var_value);
} else {
return var_name;
}
}),eav)));
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66101){
var vec__66102 = p__66101;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66102,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66102,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__66049_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__66049_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__66049_SHARP_) : linked_qvars.call(null,p1__66049_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__66049_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__66050_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__66050_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__66050_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
