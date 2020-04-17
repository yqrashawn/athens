goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__70641 = (line + (1));
var G__70642 = (1);
var G__70643 = (counter + (1));
line = G__70641;
col = G__70642;
counter = G__70643;
continue;
} else {
var G__70644 = line;
var G__70645 = (col + (1));
var G__70646 = (counter + (1));
line = G__70644;
col = G__70645;
counter = G__70646;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__70647 = cljs.core.next(chars);
var G__70648 = (n__$1 - (1));
chars = G__70647;
n__$1 = G__70648;
continue;
} else {
var G__70649 = cljs.core.next(chars);
var G__70650 = n__$1;
chars = G__70649;
n__$1 = G__70650;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__70622){
var map__70623 = p__70622;
var map__70623__$1 = (((((!((map__70623 == null))))?(((((map__70623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__70623):map__70623);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70623__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70623__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70623__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70623__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__70625_70655 = cljs.core.seq(full_reasons);
var chunk__70626_70656 = null;
var count__70627_70657 = (0);
var i__70628_70658 = (0);
while(true){
if((i__70628_70658 < count__70627_70657)){
var r_70659 = chunk__70626_70656.cljs$core$IIndexed$_nth$arity$2(null,i__70628_70658);
instaparse.failure.print_reason(r_70659);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__70660 = seq__70625_70655;
var G__70661 = chunk__70626_70656;
var G__70662 = count__70627_70657;
var G__70663 = (i__70628_70658 + (1));
seq__70625_70655 = G__70660;
chunk__70626_70656 = G__70661;
count__70627_70657 = G__70662;
i__70628_70658 = G__70663;
continue;
} else {
var temp__5735__auto___70664 = cljs.core.seq(seq__70625_70655);
if(temp__5735__auto___70664){
var seq__70625_70665__$1 = temp__5735__auto___70664;
if(cljs.core.chunked_seq_QMARK_(seq__70625_70665__$1)){
var c__4609__auto___70666 = cljs.core.chunk_first(seq__70625_70665__$1);
var G__70667 = cljs.core.chunk_rest(seq__70625_70665__$1);
var G__70668 = c__4609__auto___70666;
var G__70669 = cljs.core.count(c__4609__auto___70666);
var G__70670 = (0);
seq__70625_70655 = G__70667;
chunk__70626_70656 = G__70668;
count__70627_70657 = G__70669;
i__70628_70658 = G__70670;
continue;
} else {
var r_70671 = cljs.core.first(seq__70625_70665__$1);
instaparse.failure.print_reason(r_70671);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__70672 = cljs.core.next(seq__70625_70665__$1);
var G__70673 = null;
var G__70674 = (0);
var G__70675 = (0);
seq__70625_70655 = G__70672;
chunk__70626_70656 = G__70673;
count__70627_70657 = G__70674;
i__70628_70658 = G__70675;
continue;
}
} else {
}
}
break;
}

var seq__70633 = cljs.core.seq(partial_reasons);
var chunk__70634 = null;
var count__70635 = (0);
var i__70636 = (0);
while(true){
if((i__70636 < count__70635)){
var r = chunk__70634.cljs$core$IIndexed$_nth$arity$2(null,i__70636);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__70676 = seq__70633;
var G__70677 = chunk__70634;
var G__70678 = count__70635;
var G__70679 = (i__70636 + (1));
seq__70633 = G__70676;
chunk__70634 = G__70677;
count__70635 = G__70678;
i__70636 = G__70679;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__70633);
if(temp__5735__auto__){
var seq__70633__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70633__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__70633__$1);
var G__70680 = cljs.core.chunk_rest(seq__70633__$1);
var G__70681 = c__4609__auto__;
var G__70682 = cljs.core.count(c__4609__auto__);
var G__70683 = (0);
seq__70633 = G__70680;
chunk__70634 = G__70681;
count__70635 = G__70682;
i__70636 = G__70683;
continue;
} else {
var r = cljs.core.first(seq__70633__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__70684 = cljs.core.next(seq__70633__$1);
var G__70685 = null;
var G__70686 = (0);
var G__70687 = (0);
seq__70633 = G__70684;
chunk__70634 = G__70685;
count__70635 = G__70686;
i__70636 = G__70687;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
