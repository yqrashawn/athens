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
var G__53277 = arguments.length;
switch (G__53277) {
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
var seq__53310 = cljs.core.seq(Object.keys(localStorage));
var chunk__53311 = null;
var count__53312 = (0);
var i__53313 = (0);
while(true){
if((i__53313 < count__53312)){
var k = chunk__53311.cljs$core$IIndexed$_nth$arity$2(null,i__53313);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53348 = seq__53310;
var G__53349 = chunk__53311;
var G__53350 = count__53312;
var G__53351 = (i__53313 + (1));
seq__53310 = G__53348;
chunk__53311 = G__53349;
count__53312 = G__53350;
i__53313 = G__53351;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53310);
if(temp__5735__auto__){
var seq__53310__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53310__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53310__$1);
var G__53356 = cljs.core.chunk_rest(seq__53310__$1);
var G__53357 = c__4609__auto__;
var G__53358 = cljs.core.count(c__4609__auto__);
var G__53359 = (0);
seq__53310 = G__53356;
chunk__53311 = G__53357;
count__53312 = G__53358;
i__53313 = G__53359;
continue;
} else {
var k = cljs.core.first(seq__53310__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__53361 = cljs.core.next(seq__53310__$1);
var G__53362 = null;
var G__53363 = (0);
var G__53364 = (0);
seq__53310 = G__53361;
chunk__53311 = G__53362;
count__53312 = G__53363;
i__53313 = G__53364;
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
