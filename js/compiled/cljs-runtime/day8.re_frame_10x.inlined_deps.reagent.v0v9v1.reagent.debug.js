goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug');
goog.require('cljs.core');
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__43390__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__43390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43392__i = 0, G__43392__a = new Array(arguments.length -  0);
while (G__43392__i < G__43392__a.length) {G__43392__a[G__43392__i] = arguments[G__43392__i + 0]; ++G__43392__i;}
  args = new cljs.core.IndexedSeq(G__43392__a,0,null);
} 
return G__43390__delegate.call(this,args);};
G__43390.cljs$lang$maxFixedArity = 0;
G__43390.cljs$lang$applyTo = (function (arglist__43393){
var args = cljs.core.seq(arglist__43393);
return G__43390__delegate(args);
});
G__43390.cljs$core$IFn$_invoke$arity$variadic = G__43390__delegate;
return G__43390;
})()
);

(o.error = (function() { 
var G__43395__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__43395 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43396__i = 0, G__43396__a = new Array(arguments.length -  0);
while (G__43396__i < G__43396__a.length) {G__43396__a[G__43396__i] = arguments[G__43396__i + 0]; ++G__43396__i;}
  args = new cljs.core.IndexedSeq(G__43396__a,0,null);
} 
return G__43395__delegate.call(this,args);};
G__43395.cljs$lang$maxFixedArity = 0;
G__43395.cljs$lang$applyTo = (function (arglist__43397){
var args = cljs.core.seq(arglist__43397);
return G__43395__delegate(args);
});
G__43395.cljs$core$IFn$_invoke$arity$variadic = G__43395__delegate;
return G__43395;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.tracking = true);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug.js.map
