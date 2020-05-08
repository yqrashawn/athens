goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__53009 = arguments.length;
switch (G__53009) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__53014 = cljs.core.seq(Object.keys(localStorage));
var chunk__53015 = null;
var count__53016 = (0);
var i__53017 = (0);
while(true){
if((i__53017 < count__53016)){
var k = chunk__53015.cljs$core$IIndexed$_nth$arity$2(null,i__53017);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53085 = seq__53014;
var G__53086 = chunk__53015;
var G__53087 = count__53016;
var G__53088 = (i__53017 + (1));
seq__53014 = G__53085;
chunk__53015 = G__53086;
count__53016 = G__53087;
i__53017 = G__53088;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53014);
if(temp__5735__auto__){
var seq__53014__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53014__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53014__$1);
var G__53089 = cljs.core.chunk_rest(seq__53014__$1);
var G__53090 = c__4609__auto__;
var G__53091 = cljs.core.count(c__4609__auto__);
var G__53092 = (0);
seq__53014 = G__53089;
chunk__53015 = G__53090;
count__53016 = G__53091;
i__53017 = G__53092;
continue;
} else {
var k = cljs.core.first(seq__53014__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53093 = cljs.core.next(seq__53014__$1);
var G__53094 = null;
var G__53095 = (0);
var G__53096 = (0);
seq__53014 = G__53093;
chunk__53015 = G__53094;
count__53016 = G__53095;
i__53017 = G__53096;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
