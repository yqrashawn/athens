goog.provide('athens.core');
goog.require('cljs.core');
goog.require('athens.events');
goog.require('athens.subs');
goog.require('athens.views');
goog.require('athens.config');
goog.require('athens.db');
goog.require('athens.router');
goog.require('athens.parser');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_posh.core');
athens.core.dev_setup = (function athens$core$dev_setup(){
if(athens.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
athens.core.mount_root = (function athens$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

athens.router.init_routes_BANG_();

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.main_panel], null),document.getElementById("app"));
});
athens.core.init = (function athens$core$init(){
var G__49803_49805 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-rfdb","init-rfdb",-460710127)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__49803_49805) : re_frame.core.dispatch_sync.call(null,G__49803_49805));

if(athens.config.debug_QMARK_){
var G__49804_49806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boot","boot",2007860585)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49804_49806) : re_frame.core.dispatch.call(null,G__49804_49806));
} else {
}

athens.core.dev_setup();

return athens.core.mount_root();
});

//# sourceMappingURL=athens.core.js.map
