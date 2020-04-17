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
var G__65367 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65367) : stop_at_QMARK_.call(null,G__65367));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__65368 = stop_at_QMARK_;
var G__65369 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__65368,G__65369) : posh.lib.q_analyze.take_until.call(null,G__65368,G__65369));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.empty_QMARK_(ls);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var G__65372 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__65372) : rest_at_QMARK_.call(null,G__65372));
}
})())){
return ls;
} else {
var G__66205 = rest_at_QMARK_;
var G__66206 = cljs.core.rest(ls);
rest_at_QMARK_ = G__66205;
ls = G__66206;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__65373 = split_at_QMARK_;
var G__65374 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__65373,G__65374) : posh.lib.q_analyze.split_list_at.call(null,G__65373,G__65374));
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
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__65381 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65381) : posh.lib.q_analyze.get_all_vars.call(null,G__65381));
})(),(function (){var G__65382 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65382) : posh.lib.q_analyze.get_all_vars.call(null,G__65382));
})());
} else {
if(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__65383 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65383) : posh.lib.q_analyze.get_all_vars.call(null,G__65383));
})(),cljs.core.first(query));
} else {
var G__65384 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__65384) : posh.lib.q_analyze.get_all_vars.call(null,G__65384));

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
var G__65404 = cljs.core.rest(eav);
var G__65405 = (n - (1));
var G__65406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__65407 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__65404,G__65405,G__65406,G__65407) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__65404,G__65405,G__65406,G__65407));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__65408 = cljs.core.rest(eav);
var G__65409 = (n - (1));
var G__65410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__65411 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__65408,G__65409,G__65410,G__65411) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__65408,G__65409,G__65410,G__65411));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__65420 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__65420) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__65420));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__65421 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__65421) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__65421));
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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__65432 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65432) : posh.lib.q_analyze.get_eavs.call(null,G__65432));
})(),(function (){var G__65436 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65436) : posh.lib.q_analyze.get_eavs.call(null,G__65436));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__65437 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65437) : posh.lib.q_analyze.get_eavs.call(null,G__65437));
})(),(function (){var G__65438 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65438) : posh.lib.q_analyze.get_eavs.call(null,G__65438));
})());
}
} else {
if(posh.lib.q_analyze.eav_QMARK_(item)){
return cljs.core.cons(item,(function (){var G__65439 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65439) : posh.lib.q_analyze.get_eavs.call(null,G__65439));
})());
} else {
if(((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item))))){
var ocr_65449 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if(((cljs.core.vector_QMARK_(ocr_65449)) && ((cljs.core.count(ocr_65449) === 2)))){
try{var ocr_65449_0__65462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65449,(0));
if(((cljs.core.vector_QMARK_(ocr_65449_0__65462)) && ((cljs.core.count(ocr_65449_0__65462) === 5)))){
try{var ocr_65449_0__65462_0__65464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65449_0__65462,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65449_0__65462_0__65464,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65449_0__65462,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65449_0__65462,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65449_0__65462,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65449,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__65481 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65481) : posh.lib.q_analyze.get_eavs.call(null,G__65481));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e65475){if((e65475 instanceof Error)){
var e__64144__auto__ = e65475;
if((e__64144__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto__;
}
} else {
throw e65475;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65473){if((e65473 instanceof Error)){
var e__64144__auto__ = e65473;
if((e__64144__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto__;
}
} else {
throw e65473;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65471){if((e65471 instanceof Error)){
var e__64144__auto__ = e65471;
if((e__64144__auto__ === cljs.core.match.backtrack)){
var G__65472 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65472) : posh.lib.q_analyze.get_eavs.call(null,G__65472));
} else {
throw e__64144__auto__;
}
} else {
throw e65471;

}
}} else {
var G__65482 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__65482) : posh.lib.q_analyze.get_eavs.call(null,G__65482));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__65483){
var vec__65484 = p__65483;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65484,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65484,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65487_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__65487_SHARP_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__65487_SHARP_);
} else {
return p1__65487_SHARP_;
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
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__65489 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65489) : posh.lib.q_analyze.count_qvars.call(null,G__65489));
})(),(function (){var G__65490 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65490) : posh.lib.q_analyze.count_qvars.call(null,G__65490));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__65495 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__65495) : posh.lib.q_analyze.count_qvars.call(null,G__65495));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4582__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__65496(s__65497){
return (new cljs.core.LazySeq(null,(function (){
var s__65497__$1 = s__65497;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65497__$1);
if(temp__5735__auto__){
var s__65497__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65497__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65497__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65499 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65498 = (0);
while(true){
if((i__65498 < size__4581__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65498);
cljs.core.chunk_append(b__65499,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__66260 = (i__65498 + (1));
i__65498 = G__66260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65499),posh$lib$q_analyze$fill_qvar_set_$_iter__65496(cljs.core.chunk_rest(s__65497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65499),null);
}
} else {
var r = cljs.core.first(s__65497__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__65496(cljs.core.rest(s__65497__$2)));
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
return cljs.core.cons((function (){var G__65500 = cljs.core.first(seq1);
var G__65501 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__65500,G__65501) : f.call(null,G__65500,G__65501));
})(),(function (){var G__65502 = f;
var G__65503 = cljs.core.rest(seq1);
var G__65504 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__65502,G__65503,G__65504) : posh.lib.q_analyze.seq_merge_with.call(null,G__65502,G__65503,G__65504));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__65507){
var vec__65508 = p__65507;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65508,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65508,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65508,(2),null);
var eav = vec__65508;
var vec__65511 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65511,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65511,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65511,(2),null);
var iter__4582__auto__ = (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65514(s__65515){
return (new cljs.core.LazySeq(null,(function (){
var s__65515__$1 = s__65515;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65515__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var ee = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__65515__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65514_$_iter__65516(s__65517){
return (new cljs.core.LazySeq(null,((function (s__65515__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav){
return (function (){
var s__65517__$1 = s__65517;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__65517__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var aa = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__65517__$1,s__65515__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__65514_$_iter__65516_$_iter__65518(s__65519){
return (new cljs.core.LazySeq(null,((function (s__65517__$1,s__65515__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav){
return (function (){
var s__65519__$1 = s__65519;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__65519__$1);
if(temp__5735__auto____$2){
var s__65519__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__65519__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__65519__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__65521 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__65520 = (0);
while(true){
if((i__65520 < size__4581__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__65520);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65520,s__65519__$1,s__65517__$1,s__65515__$1,vv,c__4580__auto__,size__4581__auto__,b__65521,s__65519__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav){
return (function (p1__65505_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__65505_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__65520,s__65519__$1,s__65517__$1,s__65515__$1,vv,c__4580__auto__,size__4581__auto__,b__65521,s__65519__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65520,s__65519__$1,s__65517__$1,s__65515__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__65521,s__65519__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav){
return (function (p__65523){
var vec__65524 = p__65523;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65524,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65524,(1),null);
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
});})(i__65520,s__65519__$1,s__65517__$1,s__65515__$1,wildcard_count,vv,c__4580__auto__,size__4581__auto__,b__65521,s__65519__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__65520,s__65519__$1,s__65517__$1,s__65515__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__65521,s__65519__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav){
return (function (p1__65506_SHARP_){
if(cljs.core.truth_(p1__65506_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__65520,s__65519__$1,s__65517__$1,s__65515__$1,wildcard_count,exposed_qvars,vv,c__4580__auto__,size__4581__auto__,b__65521,s__65519__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append(b__65521,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__66271 = (i__65520 + (1));
i__65520 = G__66271;
continue;
} else {
var G__66272 = (i__65520 + (1));
i__65520 = G__66272;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65521),posh$lib$q_analyze$pattern_from_eav__old_$_iter__65514_$_iter__65516_$_iter__65518(cljs.core.chunk_rest(s__65519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65521),null);
}
} else {
var vv = cljs.core.first(s__65519__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65519__$1,s__65517__$1,s__65515__$1,vv,s__65519__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav){
return (function (p1__65505_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__65505_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__65519__$1,s__65517__$1,s__65515__$1,vv,s__65519__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65519__$1,s__65517__$1,s__65515__$1,wildcard_count,vv,s__65519__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav){
return (function (p__65530){
var vec__65531 = p__65530;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65531,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65531,(1),null);
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
});})(s__65519__$1,s__65517__$1,s__65515__$1,wildcard_count,vv,s__65519__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__65519__$1,s__65517__$1,s__65515__$1,wildcard_count,exposed_qvars,vv,s__65519__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav){
return (function (p1__65506_SHARP_){
if(cljs.core.truth_(p1__65506_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__65519__$1,s__65517__$1,s__65515__$1,wildcard_count,exposed_qvars,vv,s__65519__$2,temp__5735__auto____$2,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__65514_$_iter__65516_$_iter__65518(cljs.core.rest(s__65519__$2)));
} else {
var G__66273 = cljs.core.rest(s__65519__$2);
s__65519__$1 = G__66273;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__65517__$1,s__65515__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav))
,null,null));
});})(s__65517__$1,s__65515__$1,aa,xs__6292__auto____$1,temp__5735__auto____$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__65514_$_iter__65516(cljs.core.rest(s__65517__$1)));
} else {
var G__66274 = cljs.core.rest(s__65517__$1);
s__65517__$1 = G__66274;
continue;
}
} else {
return null;
}
break;
}
});})(s__65515__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav))
,null,null));
});})(s__65515__$1,ee,xs__6292__auto__,temp__5735__auto__,vec__65511,qe,qa,qv,vec__65508,e,a,v,eav))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__65514(cljs.core.rest(s__65515__$1)));
} else {
var G__66279 = cljs.core.rest(s__65515__$1);
s__65515__$1 = G__66279;
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
var ocr_65541 = cljs.core.vec(eav);
var ocr_65542 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_65541)) && ((cljs.core.count(ocr_65541) === 3)))){
try{var ocr_65541_0__65570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_0__65570,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65541_1__65571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_1__65571,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65541_2__65572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_2__65572,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65780){if((e65780 instanceof Error)){
var e__64144__auto__ = e65780;
if((e__64144__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65542)) && ((cljs.core.count(ocr_65542) === 3)))){
try{var ocr_65542_2__65577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65577 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65782){if((e65782 instanceof Error)){
var e__64144__auto____$1 = e65782;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65577 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65783){if((e65783 instanceof Error)){
var e__64144__auto____$2 = e65783;
if((e__64144__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$2;
}
} else {
throw e65783;

}
}} else {
throw e__64144__auto____$1;
}
} else {
throw e65782;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65781){if((e65781 instanceof Error)){
var e__64144__auto____$1 = e65781;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$1;
}
} else {
throw e65781;

}
}} else {
throw e__64144__auto__;
}
} else {
throw e65780;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65763){if((e65763 instanceof Error)){
var e__64144__auto__ = e65763;
if((e__64144__auto__ === cljs.core.match.backtrack)){
try{var ocr_65541_2__65572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_2__65572,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_65542)) && ((cljs.core.count(ocr_65542) === 3)))){
try{var ocr_65542_1__65579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65579 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65767){if((e65767 instanceof Error)){
var e__64144__auto____$1 = e65767;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65542_1__65579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65579 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65768){if((e65768 instanceof Error)){
var e__64144__auto____$2 = e65768;
if((e__64144__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$2;
}
} else {
throw e65768;

}
}} else {
throw e__64144__auto____$1;
}
} else {
throw e65767;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65765){if((e65765 instanceof Error)){
var e__64144__auto____$1 = e65765;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$1;
}
} else {
throw e65765;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65764){if((e65764 instanceof Error)){
var e__64144__auto____$1 = e65764;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$1;
}
} else {
throw e65764;

}
}} else {
throw e__64144__auto__;
}
} else {
throw e65763;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65611){if((e65611 instanceof Error)){
var e__64144__auto__ = e65611;
if((e__64144__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65542)) && ((cljs.core.count(ocr_65542) === 3)))){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === false)){
try{var ocr_65541_1__65571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_1__65571,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65541_2__65572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_2__65572,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65756){if((e65756 instanceof Error)){
var e__64144__auto____$1 = e65756;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$1;
}
} else {
throw e65756;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65755){if((e65755 instanceof Error)){
var e__64144__auto____$1 = e65755;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$1;
}
} else {
throw e65755;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65622){if((e65622 instanceof Error)){
var e__64144__auto____$1 = e65622;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === true)){
try{var ocr_65541_2__65572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_2__65572,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65541_1__65571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_1__65571,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65748){if((e65748 instanceof Error)){
var e__64144__auto____$2 = e65748;
if((e__64144__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65753){if((e65753 instanceof Error)){
var e__64144__auto____$3 = e65753;
if((e__64144__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65754){if((e65754 instanceof Error)){
var e__64144__auto____$4 = e65754;
if((e__64144__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$4;
}
} else {
throw e65754;

}
}} else {
throw e__64144__auto____$3;
}
} else {
throw e65753;

}
}} else {
throw e__64144__auto____$2;
}
} else {
throw e65748;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65747){if((e65747 instanceof Error)){
var e__64144__auto____$2 = e65747;
if((e__64144__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$2;
}
} else {
throw e65747;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65623){if((e65623 instanceof Error)){
var e__64144__auto____$2 = e65623;
if((e__64144__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === false)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === true)){
try{var ocr_65541_2__65572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_2__65572,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65740){if((e65740 instanceof Error)){
var e__64144__auto____$3 = e65740;
if((e__64144__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$3;
}
} else {
throw e65740;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65737){if((e65737 instanceof Error)){
var e__64144__auto____$3 = e65737;
if((e__64144__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === false)){
try{var ocr_65541_2__65572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_2__65572,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65739){if((e65739 instanceof Error)){
var e__64144__auto____$4 = e65739;
if((e__64144__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$4;
}
} else {
throw e65739;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65738){if((e65738 instanceof Error)){
var e__64144__auto____$4 = e65738;
if((e__64144__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$4;
}
} else {
throw e65738;

}
}} else {
throw e__64144__auto____$3;
}
} else {
throw e65737;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65624){if((e65624 instanceof Error)){
var e__64144__auto____$3 = e65624;
if((e__64144__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65586 === true)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === true)){
try{var ocr_65541_1__65571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_1__65571,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65730){if((e65730 instanceof Error)){
var e__64144__auto____$4 = e65730;
if((e__64144__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$4;
}
} else {
throw e65730;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65729){if((e65729 instanceof Error)){
var e__64144__auto____$4 = e65729;
if((e__64144__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$4;
}
} else {
throw e65729;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65625){if((e65625 instanceof Error)){
var e__64144__auto____$4 = e65625;
if((e__64144__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65586 === false)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === true)){
try{var ocr_65541_1__65571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_1__65571,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65728){if((e65728 instanceof Error)){
var e__64144__auto____$5 = e65728;
if((e__64144__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$5;
}
} else {
throw e65728;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65727){if((e65727 instanceof Error)){
var e__64144__auto____$5 = e65727;
if((e__64144__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$5;
}
} else {
throw e65727;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65626){if((e65626 instanceof Error)){
var e__64144__auto____$5 = e65626;
if((e__64144__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65586 === true)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === false)){
try{var ocr_65541_1__65571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_1__65571,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65723){if((e65723 instanceof Error)){
var e__64144__auto____$6 = e65723;
if((e__64144__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$6;
}
} else {
throw e65723;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65722){if((e65722 instanceof Error)){
var e__64144__auto____$6 = e65722;
if((e__64144__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$6;
}
} else {
throw e65722;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65627){if((e65627 instanceof Error)){
var e__64144__auto____$6 = e65627;
if((e__64144__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65586 === false)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === false)){
try{var ocr_65541_1__65571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_1__65571,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65713){if((e65713 instanceof Error)){
var e__64144__auto____$7 = e65713;
if((e__64144__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$7;
}
} else {
throw e65713;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65712){if((e65712 instanceof Error)){
var e__64144__auto____$7 = e65712;
if((e__64144__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$7;
}
} else {
throw e65712;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65628){if((e65628 instanceof Error)){
var e__64144__auto____$7 = e65628;
if((e__64144__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65586 === true)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === true)){
try{var ocr_65541_0__65570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_0__65570,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65710){if((e65710 instanceof Error)){
var e__64144__auto____$8 = e65710;
if((e__64144__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$8;
}
} else {
throw e65710;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65706){if((e65706 instanceof Error)){
var e__64144__auto____$8 = e65706;
if((e__64144__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$8;
}
} else {
throw e65706;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65630){if((e65630 instanceof Error)){
var e__64144__auto____$8 = e65630;
if((e__64144__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65586 === false)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === true)){
try{var ocr_65541_0__65570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_0__65570,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65702){if((e65702 instanceof Error)){
var e__64144__auto____$9 = e65702;
if((e__64144__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$9;
}
} else {
throw e65702;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65701){if((e65701 instanceof Error)){
var e__64144__auto____$9 = e65701;
if((e__64144__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$9;
}
} else {
throw e65701;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65640){if((e65640 instanceof Error)){
var e__64144__auto____$9 = e65640;
if((e__64144__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65586 === true)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === false)){
try{var ocr_65541_0__65570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_0__65570,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65693){if((e65693 instanceof Error)){
var e__64144__auto____$10 = e65693;
if((e__64144__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$10;
}
} else {
throw e65693;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65692){if((e65692 instanceof Error)){
var e__64144__auto____$10 = e65692;
if((e__64144__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$10;
}
} else {
throw e65692;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65641){if((e65641 instanceof Error)){
var e__64144__auto____$10 = e65641;
if((e__64144__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65586 === false)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === false)){
try{var ocr_65541_0__65570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65541_0__65570,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65691){if((e65691 instanceof Error)){
var e__64144__auto____$11 = e65691;
if((e__64144__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$11;
}
} else {
throw e65691;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65690){if((e65690 instanceof Error)){
var e__64144__auto____$11 = e65690;
if((e__64144__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$11;
}
} else {
throw e65690;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65642){if((e65642 instanceof Error)){
var e__64144__auto____$11 = e65642;
if((e__64144__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65586 === true)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === true)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65685){if((e65685 instanceof Error)){
var e__64144__auto____$12 = e65685;
if((e__64144__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$12;
}
} else {
throw e65685;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65674){if((e65674 instanceof Error)){
var e__64144__auto____$12 = e65674;
if((e__64144__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === false)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65684){if((e65684 instanceof Error)){
var e__64144__auto____$13 = e65684;
if((e__64144__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$13;
}
} else {
throw e65684;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65675){if((e65675 instanceof Error)){
var e__64144__auto____$13 = e65675;
if((e__64144__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === true)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65677){if((e65677 instanceof Error)){
var e__64144__auto____$14 = e65677;
if((e__64144__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$14;
}
} else {
throw e65677;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65676){if((e65676 instanceof Error)){
var e__64144__auto____$14 = e65676;
if((e__64144__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$14;
}
} else {
throw e65676;

}
}} else {
throw e__64144__auto____$13;
}
} else {
throw e65675;

}
}} else {
throw e__64144__auto____$12;
}
} else {
throw e65674;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65643){if((e65643 instanceof Error)){
var e__64144__auto____$12 = e65643;
if((e__64144__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65586 === false)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === true)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65667){if((e65667 instanceof Error)){
var e__64144__auto____$13 = e65667;
if((e__64144__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$13;
}
} else {
throw e65667;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65666){if((e65666 instanceof Error)){
var e__64144__auto____$13 = e65666;
if((e__64144__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$13;
}
} else {
throw e65666;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65644){if((e65644 instanceof Error)){
var e__64144__auto____$13 = e65644;
if((e__64144__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65586 === true)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === false)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65661){if((e65661 instanceof Error)){
var e__64144__auto____$14 = e65661;
if((e__64144__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$14;
}
} else {
throw e65661;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65660){if((e65660 instanceof Error)){
var e__64144__auto____$14 = e65660;
if((e__64144__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$14;
}
} else {
throw e65660;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65645){if((e65645 instanceof Error)){
var e__64144__auto____$14 = e65645;
if((e__64144__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_65542_2__65586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(2));
if((ocr_65542_2__65586 === false)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === true)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65655){if((e65655 instanceof Error)){
var e__64144__auto____$15 = e65655;
if((e__64144__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$15;
}
} else {
throw e65655;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65651){if((e65651 instanceof Error)){
var e__64144__auto____$15 = e65651;
if((e__64144__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_65542_0__65584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(0));
if((ocr_65542_0__65584 === false)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65653){if((e65653 instanceof Error)){
var e__64144__auto____$16 = e65653;
if((e__64144__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_65542_1__65585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65542,(1));
if((ocr_65542_1__65585 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65541,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65654){if((e65654 instanceof Error)){
var e__64144__auto____$17 = e65654;
if((e__64144__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$17;
}
} else {
throw e65654;

}
}} else {
throw e__64144__auto____$16;
}
} else {
throw e65653;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65652){if((e65652 instanceof Error)){
var e__64144__auto____$16 = e65652;
if((e__64144__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$16;
}
} else {
throw e65652;

}
}} else {
throw e__64144__auto____$15;
}
} else {
throw e65651;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65646){if((e65646 instanceof Error)){
var e__64144__auto____$15 = e65646;
if((e__64144__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$15;
}
} else {
throw e65646;

}
}} else {
throw e__64144__auto____$14;
}
} else {
throw e65645;

}
}} else {
throw e__64144__auto____$13;
}
} else {
throw e65644;

}
}} else {
throw e__64144__auto____$12;
}
} else {
throw e65643;

}
}} else {
throw e__64144__auto____$11;
}
} else {
throw e65642;

}
}} else {
throw e__64144__auto____$10;
}
} else {
throw e65641;

}
}} else {
throw e__64144__auto____$9;
}
} else {
throw e65640;

}
}} else {
throw e__64144__auto____$8;
}
} else {
throw e65630;

}
}} else {
throw e__64144__auto____$7;
}
} else {
throw e65628;

}
}} else {
throw e__64144__auto____$6;
}
} else {
throw e65627;

}
}} else {
throw e__64144__auto____$5;
}
} else {
throw e65626;

}
}} else {
throw e__64144__auto____$4;
}
} else {
throw e65625;

}
}} else {
throw e__64144__auto____$3;
}
} else {
throw e65624;

}
}} else {
throw e__64144__auto____$2;
}
} else {
throw e65623;

}
}} else {
throw e__64144__auto____$1;
}
} else {
throw e65622;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65621){if((e65621 instanceof Error)){
var e__64144__auto____$1 = e65621;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$1;
}
} else {
throw e65621;

}
}} else {
throw e__64144__auto__;
}
} else {
throw e65611;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65609){if((e65609 instanceof Error)){
var e__64144__auto__ = e65609;
if((e__64144__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__64144__auto__;
}
} else {
throw e65609;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_65784 = cljs.core.vec(eav);
var ocr_65785 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_(ocr_65784)) && ((cljs.core.count(ocr_65784) === 3)))){
try{var ocr_65784_0__65814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_0__65814,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65784_1__65815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_1__65815,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65784_2__65816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_2__65816,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e65996){if((e65996 instanceof Error)){
var e__64144__auto__ = e65996;
if((e__64144__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65785)) && ((cljs.core.count(ocr_65785) === 3)))){
try{var ocr_65785_2__65822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(2));
if((ocr_65785_2__65822 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65998){if((e65998 instanceof Error)){
var e__64144__auto____$1 = e65998;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65785_2__65822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(2));
if((ocr_65785_2__65822 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65999){if((e65999 instanceof Error)){
var e__64144__auto____$2 = e65999;
if((e__64144__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$2;
}
} else {
throw e65999;

}
}} else {
throw e__64144__auto____$1;
}
} else {
throw e65998;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65997){if((e65997 instanceof Error)){
var e__64144__auto____$1 = e65997;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$1;
}
} else {
throw e65997;

}
}} else {
throw e__64144__auto__;
}
} else {
throw e65996;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65981){if((e65981 instanceof Error)){
var e__64144__auto__ = e65981;
if((e__64144__auto__ === cljs.core.match.backtrack)){
try{var ocr_65784_2__65816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_2__65816,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_(ocr_65785)) && ((cljs.core.count(ocr_65785) === 3)))){
try{var ocr_65785_1__65825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65825 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65994){if((e65994 instanceof Error)){
var e__64144__auto____$1 = e65994;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65785_1__65825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65825 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65995){if((e65995 instanceof Error)){
var e__64144__auto____$2 = e65995;
if((e__64144__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$2;
}
} else {
throw e65995;

}
}} else {
throw e__64144__auto____$1;
}
} else {
throw e65994;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65993){if((e65993 instanceof Error)){
var e__64144__auto____$1 = e65993;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$1;
}
} else {
throw e65993;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65982){if((e65982 instanceof Error)){
var e__64144__auto____$1 = e65982;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$1;
}
} else {
throw e65982;

}
}} else {
throw e__64144__auto__;
}
} else {
throw e65981;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65892){if((e65892 instanceof Error)){
var e__64144__auto__ = e65892;
if((e__64144__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(ocr_65785)) && ((cljs.core.count(ocr_65785) === 3)))){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === false)){
try{var ocr_65784_1__65815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_1__65815,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65784_2__65816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_2__65816,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65979){if((e65979 instanceof Error)){
var e__64144__auto____$1 = e65979;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$1;
}
} else {
throw e65979;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65978){if((e65978 instanceof Error)){
var e__64144__auto____$1 = e65978;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$1;
}
} else {
throw e65978;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65894){if((e65894 instanceof Error)){
var e__64144__auto____$1 = e65894;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === true)){
try{var ocr_65784_2__65816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_2__65816,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_65784_1__65815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_1__65815,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65973){if((e65973 instanceof Error)){
var e__64144__auto____$2 = e65973;
if((e__64144__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65785_1__65828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65828 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65974){if((e65974 instanceof Error)){
var e__64144__auto____$3 = e65974;
if((e__64144__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65785_1__65828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65828 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65975){if((e65975 instanceof Error)){
var e__64144__auto____$4 = e65975;
if((e__64144__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$4;
}
} else {
throw e65975;

}
}} else {
throw e__64144__auto____$3;
}
} else {
throw e65974;

}
}} else {
throw e__64144__auto____$2;
}
} else {
throw e65973;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65972){if((e65972 instanceof Error)){
var e__64144__auto____$2 = e65972;
if((e__64144__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$2;
}
} else {
throw e65972;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65897){if((e65897 instanceof Error)){
var e__64144__auto____$2 = e65897;
if((e__64144__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === false)){
try{var ocr_65785_1__65828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65828 === true)){
try{var ocr_65784_2__65816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_2__65816,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65970){if((e65970 instanceof Error)){
var e__64144__auto____$3 = e65970;
if((e__64144__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$3;
}
} else {
throw e65970;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65969){if((e65969 instanceof Error)){
var e__64144__auto____$3 = e65969;
if((e__64144__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$3;
}
} else {
throw e65969;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65898){if((e65898 instanceof Error)){
var e__64144__auto____$3 = e65898;
if((e__64144__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_65785_2__65829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(2));
if((ocr_65785_2__65829 === true)){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === true)){
try{var ocr_65784_1__65815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_1__65815,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65968){if((e65968 instanceof Error)){
var e__64144__auto____$4 = e65968;
if((e__64144__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$4;
}
} else {
throw e65968;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65967){if((e65967 instanceof Error)){
var e__64144__auto____$4 = e65967;
if((e__64144__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$4;
}
} else {
throw e65967;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65899){if((e65899 instanceof Error)){
var e__64144__auto____$4 = e65899;
if((e__64144__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_65785_2__65829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(2));
if((ocr_65785_2__65829 === false)){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === true)){
try{var ocr_65784_1__65815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_1__65815,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65966){if((e65966 instanceof Error)){
var e__64144__auto____$5 = e65966;
if((e__64144__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$5;
}
} else {
throw e65966;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65965){if((e65965 instanceof Error)){
var e__64144__auto____$5 = e65965;
if((e__64144__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$5;
}
} else {
throw e65965;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65900){if((e65900 instanceof Error)){
var e__64144__auto____$5 = e65900;
if((e__64144__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_65785_2__65829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(2));
if((ocr_65785_2__65829 === true)){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === false)){
try{var ocr_65784_1__65815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_1__65815,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65964){if((e65964 instanceof Error)){
var e__64144__auto____$6 = e65964;
if((e__64144__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$6;
}
} else {
throw e65964;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65959){if((e65959 instanceof Error)){
var e__64144__auto____$6 = e65959;
if((e__64144__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65785_1__65828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65828 === true)){
try{var ocr_65784_0__65814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_0__65814,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65961){if((e65961 instanceof Error)){
var e__64144__auto____$7 = e65961;
if((e__64144__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$7;
}
} else {
throw e65961;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65960){if((e65960 instanceof Error)){
var e__64144__auto____$7 = e65960;
if((e__64144__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$7;
}
} else {
throw e65960;

}
}} else {
throw e__64144__auto____$6;
}
} else {
throw e65959;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65901){if((e65901 instanceof Error)){
var e__64144__auto____$6 = e65901;
if((e__64144__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_65785_2__65829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(2));
if((ocr_65785_2__65829 === false)){
try{var ocr_65785_1__65828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65828 === true)){
try{var ocr_65784_0__65814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_0__65814,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65958){if((e65958 instanceof Error)){
var e__64144__auto____$7 = e65958;
if((e__64144__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$7;
}
} else {
throw e65958;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65957){if((e65957 instanceof Error)){
var e__64144__auto____$7 = e65957;
if((e__64144__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$7;
}
} else {
throw e65957;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65902){if((e65902 instanceof Error)){
var e__64144__auto____$7 = e65902;
if((e__64144__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_65785_2__65829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(2));
if((ocr_65785_2__65829 === true)){
try{var ocr_65785_1__65828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65828 === false)){
try{var ocr_65784_0__65814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_65784_0__65814,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65956){if((e65956 instanceof Error)){
var e__64144__auto____$8 = e65956;
if((e__64144__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$8;
}
} else {
throw e65956;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65929){if((e65929 instanceof Error)){
var e__64144__auto____$8 = e65929;
if((e__64144__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65785_1__65828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65828 === true)){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65944){if((e65944 instanceof Error)){
var e__64144__auto____$9 = e65944;
if((e__64144__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65946){if((e65946 instanceof Error)){
var e__64144__auto____$10 = e65946;
if((e__64144__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$10;
}
} else {
throw e65946;

}
}} else {
throw e__64144__auto____$9;
}
} else {
throw e65944;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65930){if((e65930 instanceof Error)){
var e__64144__auto____$9 = e65930;
if((e__64144__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65785_1__65828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65828 === false)){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65932){if((e65932 instanceof Error)){
var e__64144__auto____$10 = e65932;
if((e__64144__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$10;
}
} else {
throw e65932;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65931){if((e65931 instanceof Error)){
var e__64144__auto____$10 = e65931;
if((e__64144__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$10;
}
} else {
throw e65931;

}
}} else {
throw e__64144__auto____$9;
}
} else {
throw e65930;

}
}} else {
throw e__64144__auto____$8;
}
} else {
throw e65929;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65904){if((e65904 instanceof Error)){
var e__64144__auto____$8 = e65904;
if((e__64144__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_65785_2__65829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(2));
if((ocr_65785_2__65829 === false)){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === true)){
try{var ocr_65785_1__65828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65828 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65928){if((e65928 instanceof Error)){
var e__64144__auto____$9 = e65928;
if((e__64144__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$9;
}
} else {
throw e65928;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65927){if((e65927 instanceof Error)){
var e__64144__auto____$9 = e65927;
if((e__64144__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$9;
}
} else {
throw e65927;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65905){if((e65905 instanceof Error)){
var e__64144__auto____$9 = e65905;
if((e__64144__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_65785_2__65829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(2));
if((ocr_65785_2__65829 === true)){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === false)){
try{var ocr_65785_1__65828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65828 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65926){if((e65926 instanceof Error)){
var e__64144__auto____$10 = e65926;
if((e__64144__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$10;
}
} else {
throw e65926;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65925){if((e65925 instanceof Error)){
var e__64144__auto____$10 = e65925;
if((e__64144__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$10;
}
} else {
throw e65925;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65906){if((e65906 instanceof Error)){
var e__64144__auto____$10 = e65906;
if((e__64144__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_65785_2__65829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(2));
if((ocr_65785_2__65829 === false)){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === true)){
try{var ocr_65785_1__65828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65828 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65918){if((e65918 instanceof Error)){
var e__64144__auto____$11 = e65918;
if((e__64144__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$11;
}
} else {
throw e65918;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65915){if((e65915 instanceof Error)){
var e__64144__auto____$11 = e65915;
if((e__64144__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_65785_0__65827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(0));
if((ocr_65785_0__65827 === false)){
try{var ocr_65785_1__65828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65785,(1));
if((ocr_65785_1__65828 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_65784,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e65917){if((e65917 instanceof Error)){
var e__64144__auto____$12 = e65917;
if((e__64144__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$12;
}
} else {
throw e65917;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65916){if((e65916 instanceof Error)){
var e__64144__auto____$12 = e65916;
if((e__64144__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$12;
}
} else {
throw e65916;

}
}} else {
throw e__64144__auto____$11;
}
} else {
throw e65915;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65907){if((e65907 instanceof Error)){
var e__64144__auto____$11 = e65907;
if((e__64144__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$11;
}
} else {
throw e65907;

}
}} else {
throw e__64144__auto____$10;
}
} else {
throw e65906;

}
}} else {
throw e__64144__auto____$9;
}
} else {
throw e65905;

}
}} else {
throw e__64144__auto____$8;
}
} else {
throw e65904;

}
}} else {
throw e__64144__auto____$7;
}
} else {
throw e65902;

}
}} else {
throw e__64144__auto____$6;
}
} else {
throw e65901;

}
}} else {
throw e__64144__auto____$5;
}
} else {
throw e65900;

}
}} else {
throw e__64144__auto____$4;
}
} else {
throw e65899;

}
}} else {
throw e__64144__auto____$3;
}
} else {
throw e65898;

}
}} else {
throw e__64144__auto____$2;
}
} else {
throw e65897;

}
}} else {
throw e__64144__auto____$1;
}
} else {
throw e65894;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65893){if((e65893 instanceof Error)){
var e__64144__auto____$1 = e65893;
if((e__64144__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__64144__auto____$1;
}
} else {
throw e65893;

}
}} else {
throw e__64144__auto__;
}
} else {
throw e65892;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e65891){if((e65891 instanceof Error)){
var e__64144__auto__ = e65891;
if((e__64144__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__64144__auto__;
}
} else {
throw e65891;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66010){
var vec__66011 = p__66010;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66011,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66011,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__66008_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__66008_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66015){
var vec__66016 = p__66015;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66016,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66016,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__66014_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__66014_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__66025 = cljs.core.rest(ins);
var G__66026 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__66025,G__66026) : posh.lib.q_analyze.just_qvars.call(null,G__66025,G__66026));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(q_fn,ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if((!(cljs.core.empty_QMARK_(varmap)))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(q_fn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66027_SHARP_){
return cljs.core.zipmap(qvars,p1__66027_SHARP_);
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
var vec__66033 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66033,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66033,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66033,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66033,(3),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v)) && (posh.lib.pull_analyze.ref_QMARK_(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a)))))){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__66427 = var$;
var G__66428 = dbvarmap;
var G__66429 = cljs.core.rest(dbeavs);
var$ = G__66427;
dbvarmap = G__66428;
dbeavs = G__66429;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__66037 = cljs.core.rest(vars);
var G__66038 = dbvarmap;
var G__66039 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__66037,G__66038,G__66039) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__66037,G__66038,G__66039));
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
var G__66435 = (n + (1));
var G__66436 = cljs.core.rest(xs__$1);
n = G__66435;
xs__$1 = G__66436;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66044_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__66044_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__66044_SHARP_) : type.call(null,p1__66044_SHARP_));
} else {
return p1__66044_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__66047 = cljs.core.rest(ins);
var G__66048 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__66047,G__66048) : posh.lib.q_analyze.make_dbarg_map.call(null,G__66047,G__66048));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66049){
var vec__66051 = p__66049;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66051,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66051,(1),null);
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
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__66065_SHARP_,p2__66064_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__66064_SHARP_)){
return p1__66065_SHARP_;
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
var pred__66076 = cljs.core._EQ_;
var expr__66077 = cljs.core.first(posh.lib.q_analyze.indexes_of(var_name,clause));
if(cljs.core.truth_((pred__66076.cljs$core$IFn$_invoke$arity$2 ? pred__66076.cljs$core$IFn$_invoke$arity$2((1),expr__66077) : pred__66076.call(null,(1),expr__66077)))){
return true;
} else {
if(cljs.core.truth_((pred__66076.cljs$core$IFn$_invoke$arity$2 ? pred__66076.cljs$core$IFn$_invoke$arity$2((3),expr__66077) : pred__66076.call(null,(3),expr__66077)))){
if(posh.lib.q_analyze.schema_ref_QMARK_(schema,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clause,(2)))){
return true;
} else {
if(cljs.core.seq(remaining)){
var G__66438 = cljs.core.first(remaining);
var G__66439 = cljs.core.rest(remaining);
clause = G__66438;
remaining = G__66439;
continue;
} else {
return false;
}
}
} else {
if(cljs.core.seq(remaining)){
var G__66440 = cljs.core.first(remaining);
var G__66441 = cljs.core.rest(remaining);
clause = G__66440;
remaining = G__66441;
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
return cljs.core.set((function (){var iter__4582__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__66080(s__66081){
return (new cljs.core.LazySeq(null,(function (){
var s__66081__$1 = s__66081;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66081__$1);
if(temp__5735__auto__){
var s__66081__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66081__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__66081__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__66083 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__66082 = (0);
while(true){
if((i__66082 < size__4581__auto__)){
var var_value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__66082);
cljs.core.chunk_append(b__66083,((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value));

var G__66442 = (i__66082 + (1));
i__66082 = G__66442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66083),posh$lib$q_analyze$resolve_any_idents_$_iter__66080(cljs.core.chunk_rest(s__66081__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66083),null);
}
} else {
var var_value = cljs.core.first(s__66081__$2);
return cljs.core.cons(((posh.lib.q_analyze.lookup_ref_QMARK_(schema,where,var_name,var_value))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,var_value) : entid_fn.call(null,db,var_value)):var_value),posh$lib$q_analyze$resolve_any_idents_$_iter__66080(cljs.core.rest(s__66081__$2)));
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
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66114){
var vec__66115 = p__66114;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66115,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66115,(1),null);
var or__4185__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return arg;
}
}),cljs.core.zipmap(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66122){
var vec__66123 = p__66122;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66123,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66128){
var vec__66129 = p__66128;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66129,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66129,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
}),datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66132){
var vec__66133 = p__66132;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66133,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66133,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
}),datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),(function (){var G__66137 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null);
var G__66138 = cljs.core.vec(r);
var fexpr__66136 = new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg);
return (fexpr__66136.cljs$core$IFn$_invoke$arity$2 ? fexpr__66136.cljs$core$IFn$_invoke$arity$2(G__66137,G__66138) : fexpr__66136.call(null,G__66137,G__66138));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66172){
var vec__66173 = p__66172;
var seq__66174 = cljs.core.seq(vec__66173);
var first__66175 = cljs.core.first(seq__66174);
var seq__66174__$1 = cljs.core.next(seq__66174);
var db = first__66175;
var eav = seq__66174__$1;
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
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66176){
var vec__66177 = p__66176;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66177,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66177,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
}),qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk((function (p1__66112_SHARP_){
if(((posh.lib.q_analyze.qvar_QMARK_(p1__66112_SHARP_)) && (cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__66112_SHARP_) : linked_qvars.call(null,p1__66112_SHARP_)))))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__66112_SHARP_;
}
}),eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk((function (p1__66113_SHARP_){
if(posh.lib.q_analyze.qvar_QMARK_(p1__66113_SHARP_)){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__66113_SHARP_;
}
}),eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});

//# sourceMappingURL=posh.lib.q_analyze.js.map
