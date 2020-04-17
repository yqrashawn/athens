goog.provide('re_posh.effects');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_posh.db');
goog.require('posh.reagent');
var G__67743_67747 = new cljs.core.Keyword(null,"transact","transact",-267998670);
var G__67744_67748 = (function (datoms){
var G__67745 = cljs.core.deref(re_posh.db.store);
var G__67746 = datoms;
return (posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? posh.reagent.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__67745,G__67746) : posh.reagent.transact_BANG_.call(null,G__67745,G__67746));
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__67743_67747,G__67744_67748) : re_frame.core.reg_fx.call(null,G__67743_67747,G__67744_67748));

//# sourceMappingURL=re_posh.effects.js.map
