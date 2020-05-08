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
var G__68852 = (line + (1));
var G__68853 = (1);
var G__68854 = (counter + (1));
line = G__68852;
col = G__68853;
counter = G__68854;
continue;
} else {
var G__68855 = line;
var G__68856 = (col + (1));
var G__68857 = (counter + (1));
line = G__68855;
col = G__68856;
counter = G__68857;
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
var G__68858 = cljs.core.next(chars);
var G__68859 = (n__$1 - (1));
chars = G__68858;
n__$1 = G__68859;
continue;
} else {
var G__68860 = cljs.core.next(chars);
var G__68861 = n__$1;
chars = G__68860;
n__$1 = G__68861;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__68823){
var map__68824 = p__68823;
var map__68824__$1 = (((((!((map__68824 == null))))?(((((map__68824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68824):map__68824);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68824__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68824__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68824__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68824__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__68829_68866 = cljs.core.seq(full_reasons);
var chunk__68830_68867 = null;
var count__68831_68868 = (0);
var i__68832_68869 = (0);
while(true){
if((i__68832_68869 < count__68831_68868)){
var r_68870 = chunk__68830_68867.cljs$core$IIndexed$_nth$arity$2(null,i__68832_68869);
instaparse.failure.print_reason(r_68870);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__68875 = seq__68829_68866;
var G__68876 = chunk__68830_68867;
var G__68877 = count__68831_68868;
var G__68878 = (i__68832_68869 + (1));
seq__68829_68866 = G__68875;
chunk__68830_68867 = G__68876;
count__68831_68868 = G__68877;
i__68832_68869 = G__68878;
continue;
} else {
var temp__5735__auto___68879 = cljs.core.seq(seq__68829_68866);
if(temp__5735__auto___68879){
var seq__68829_68880__$1 = temp__5735__auto___68879;
if(cljs.core.chunked_seq_QMARK_(seq__68829_68880__$1)){
var c__4609__auto___68881 = cljs.core.chunk_first(seq__68829_68880__$1);
var G__68882 = cljs.core.chunk_rest(seq__68829_68880__$1);
var G__68883 = c__4609__auto___68881;
var G__68884 = cljs.core.count(c__4609__auto___68881);
var G__68885 = (0);
seq__68829_68866 = G__68882;
chunk__68830_68867 = G__68883;
count__68831_68868 = G__68884;
i__68832_68869 = G__68885;
continue;
} else {
var r_68886 = cljs.core.first(seq__68829_68880__$1);
instaparse.failure.print_reason(r_68886);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__68887 = cljs.core.next(seq__68829_68880__$1);
var G__68888 = null;
var G__68889 = (0);
var G__68890 = (0);
seq__68829_68866 = G__68887;
chunk__68830_68867 = G__68888;
count__68831_68868 = G__68889;
i__68832_68869 = G__68890;
continue;
}
} else {
}
}
break;
}

var seq__68841 = cljs.core.seq(partial_reasons);
var chunk__68842 = null;
var count__68843 = (0);
var i__68844 = (0);
while(true){
if((i__68844 < count__68843)){
var r = chunk__68842.cljs$core$IIndexed$_nth$arity$2(null,i__68844);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__68891 = seq__68841;
var G__68892 = chunk__68842;
var G__68893 = count__68843;
var G__68894 = (i__68844 + (1));
seq__68841 = G__68891;
chunk__68842 = G__68892;
count__68843 = G__68893;
i__68844 = G__68894;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__68841);
if(temp__5735__auto__){
var seq__68841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__68841__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__68841__$1);
var G__68895 = cljs.core.chunk_rest(seq__68841__$1);
var G__68896 = c__4609__auto__;
var G__68897 = cljs.core.count(c__4609__auto__);
var G__68898 = (0);
seq__68841 = G__68895;
chunk__68842 = G__68896;
count__68843 = G__68897;
i__68844 = G__68898;
continue;
} else {
var r = cljs.core.first(seq__68841__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__68899 = cljs.core.next(seq__68841__$1);
var G__68900 = null;
var G__68901 = (0);
var G__68902 = (0);
seq__68841 = G__68899;
chunk__68842 = G__68900;
count__68843 = G__68901;
i__68844 = G__68902;
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
