goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__57640 = coll;
var G__57641 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57640,G__57641) : shadow.dom.lazy_native_coll_seq.call(null,G__57640,G__57641));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__57672 = arguments.length;
switch (G__57672) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__57684 = arguments.length;
switch (G__57684) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__57692 = arguments.length;
switch (G__57692) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__57697 = arguments.length;
switch (G__57697) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__57715 = arguments.length;
switch (G__57715) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__57718 = document;
var G__57719 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57718,G__57719);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__57721 = shadow.dom.dom_node(parent);
var G__57722 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57721,G__57722);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__57726 = shadow.dom.dom_node(el);
var G__57727 = cls;
return goog.dom.classlist.add(G__57726,G__57727);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__57730 = shadow.dom.dom_node(el);
var G__57731 = cls;
return goog.dom.classlist.remove(G__57730,G__57731);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57734 = arguments.length;
switch (G__57734) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__57736 = shadow.dom.dom_node(el);
var G__57737 = cls;
return goog.dom.classlist.toggle(G__57736,G__57737);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e57738){if((e57738 instanceof Object)){
var e = e57738;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57738;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__57746 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57747 = null;
var count__57748 = (0);
var i__57749 = (0);
while(true){
if((i__57749 < count__57748)){
var el = chunk__57747.cljs$core$IIndexed$_nth$arity$2(null,i__57749);
var handler_58350__$1 = ((function (seq__57746,chunk__57747,count__57748,i__57749,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57746,chunk__57747,count__57748,i__57749,el))
;
var G__57760_58351 = el;
var G__57761_58352 = cljs.core.name(ev);
var G__57762_58353 = handler_58350__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57760_58351,G__57761_58352,G__57762_58353) : shadow.dom.dom_listen.call(null,G__57760_58351,G__57761_58352,G__57762_58353));


var G__58354 = seq__57746;
var G__58355 = chunk__57747;
var G__58356 = count__57748;
var G__58357 = (i__57749 + (1));
seq__57746 = G__58354;
chunk__57747 = G__58355;
count__57748 = G__58356;
i__57749 = G__58357;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57746);
if(temp__5735__auto__){
var seq__57746__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57746__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57746__$1);
var G__58358 = cljs.core.chunk_rest(seq__57746__$1);
var G__58359 = c__4609__auto__;
var G__58360 = cljs.core.count(c__4609__auto__);
var G__58361 = (0);
seq__57746 = G__58358;
chunk__57747 = G__58359;
count__57748 = G__58360;
i__57749 = G__58361;
continue;
} else {
var el = cljs.core.first(seq__57746__$1);
var handler_58362__$1 = ((function (seq__57746,chunk__57747,count__57748,i__57749,el,seq__57746__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57746,chunk__57747,count__57748,i__57749,el,seq__57746__$1,temp__5735__auto__))
;
var G__57763_58364 = el;
var G__57764_58365 = cljs.core.name(ev);
var G__57765_58366 = handler_58362__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57763_58364,G__57764_58365,G__57765_58366) : shadow.dom.dom_listen.call(null,G__57763_58364,G__57764_58365,G__57765_58366));


var G__58367 = cljs.core.next(seq__57746__$1);
var G__58368 = null;
var G__58369 = (0);
var G__58370 = (0);
seq__57746 = G__58367;
chunk__57747 = G__58368;
count__57748 = G__58369;
i__57749 = G__58370;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__57770 = arguments.length;
switch (G__57770) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__57771 = shadow.dom.dom_node(el);
var G__57772 = cljs.core.name(ev);
var G__57773 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57771,G__57772,G__57773) : shadow.dom.dom_listen.call(null,G__57771,G__57772,G__57773));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__57774 = shadow.dom.dom_node(el);
var G__57775 = cljs.core.name(ev);
var G__57776 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__57774,G__57775,G__57776) : shadow.dom.dom_listen_remove.call(null,G__57774,G__57775,G__57776));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__57777 = cljs.core.seq(events);
var chunk__57778 = null;
var count__57779 = (0);
var i__57780 = (0);
while(true){
if((i__57780 < count__57779)){
var vec__57787 = chunk__57778.cljs$core$IIndexed$_nth$arity$2(null,i__57780);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57787,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57787,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58380 = seq__57777;
var G__58381 = chunk__57778;
var G__58382 = count__57779;
var G__58383 = (i__57780 + (1));
seq__57777 = G__58380;
chunk__57778 = G__58381;
count__57779 = G__58382;
i__57780 = G__58383;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57777);
if(temp__5735__auto__){
var seq__57777__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57777__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57777__$1);
var G__58388 = cljs.core.chunk_rest(seq__57777__$1);
var G__58389 = c__4609__auto__;
var G__58390 = cljs.core.count(c__4609__auto__);
var G__58391 = (0);
seq__57777 = G__58388;
chunk__57778 = G__58389;
count__57779 = G__58390;
i__57780 = G__58391;
continue;
} else {
var vec__57790 = cljs.core.first(seq__57777__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57790,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58394 = cljs.core.next(seq__57777__$1);
var G__58395 = null;
var G__58396 = (0);
var G__58397 = (0);
seq__57777 = G__58394;
chunk__57778 = G__58395;
count__57779 = G__58396;
i__57780 = G__58397;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__57793 = cljs.core.seq(styles);
var chunk__57794 = null;
var count__57795 = (0);
var i__57796 = (0);
while(true){
if((i__57796 < count__57795)){
var vec__57812 = chunk__57794.cljs$core$IIndexed$_nth$arity$2(null,i__57796);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57812,(1),null);
var G__57815_58400 = dom;
var G__57816_58401 = cljs.core.name(k);
var G__57817_58402 = (((v == null))?"":v);
goog.style.setStyle(G__57815_58400,G__57816_58401,G__57817_58402);


var G__58404 = seq__57793;
var G__58405 = chunk__57794;
var G__58406 = count__57795;
var G__58407 = (i__57796 + (1));
seq__57793 = G__58404;
chunk__57794 = G__58405;
count__57795 = G__58406;
i__57796 = G__58407;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57793);
if(temp__5735__auto__){
var seq__57793__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57793__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57793__$1);
var G__58409 = cljs.core.chunk_rest(seq__57793__$1);
var G__58410 = c__4609__auto__;
var G__58411 = cljs.core.count(c__4609__auto__);
var G__58412 = (0);
seq__57793 = G__58409;
chunk__57794 = G__58410;
count__57795 = G__58411;
i__57796 = G__58412;
continue;
} else {
var vec__57829 = cljs.core.first(seq__57793__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57829,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57829,(1),null);
var G__57832_58413 = dom;
var G__57833_58414 = cljs.core.name(k);
var G__57834_58415 = (((v == null))?"":v);
goog.style.setStyle(G__57832_58413,G__57833_58414,G__57834_58415);


var G__58417 = cljs.core.next(seq__57793__$1);
var G__58418 = null;
var G__58419 = (0);
var G__58420 = (0);
seq__57793 = G__58417;
chunk__57794 = G__58418;
count__57795 = G__58419;
i__57796 = G__58420;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__57836_58421 = key;
var G__57836_58422__$1 = (((G__57836_58421 instanceof cljs.core.Keyword))?G__57836_58421.fqn:null);
switch (G__57836_58422__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_58428 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_58428,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_58428,"aria-");
}
})())){
el.setAttribute(ks_58428,value);
} else {
(el[ks_58428] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__57846 = shadow.dom.dom_node(el);
var G__57847 = cls;
return goog.dom.classlist.contains(G__57846,G__57847);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57850){
var map__57851 = p__57850;
var map__57851__$1 = (((((!((map__57851 == null))))?(((((map__57851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57851):map__57851);
var props = map__57851__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57851__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57855 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57855,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57855,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57855,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__57859 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__57859,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__57859;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__57863 = arguments.length;
switch (G__57863) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__57873){
var vec__57875 = p__57873;
var seq__57876 = cljs.core.seq(vec__57875);
var first__57877 = cljs.core.first(seq__57876);
var seq__57876__$1 = cljs.core.next(seq__57876);
var nn = first__57877;
var first__57877__$1 = cljs.core.first(seq__57876__$1);
var seq__57876__$2 = cljs.core.next(seq__57876__$1);
var np = first__57877__$1;
var nc = seq__57876__$2;
var node = vec__57875;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57879 = nn;
var G__57880 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57879,G__57880) : create_fn.call(null,G__57879,G__57880));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__57881 = nn;
var G__57882 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__57881,G__57882) : create_fn.call(null,G__57881,G__57882));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__57883 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57883,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57883,(1),null);
var seq__57886_58456 = cljs.core.seq(node_children);
var chunk__57887_58457 = null;
var count__57888_58458 = (0);
var i__57889_58459 = (0);
while(true){
if((i__57889_58459 < count__57888_58458)){
var child_struct_58460 = chunk__57887_58457.cljs$core$IIndexed$_nth$arity$2(null,i__57889_58459);
var children_58461 = shadow.dom.dom_node(child_struct_58460);
if(cljs.core.seq_QMARK_(children_58461)){
var seq__57921_58465 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58461));
var chunk__57923_58466 = null;
var count__57924_58467 = (0);
var i__57925_58468 = (0);
while(true){
if((i__57925_58468 < count__57924_58467)){
var child_58469 = chunk__57923_58466.cljs$core$IIndexed$_nth$arity$2(null,i__57925_58468);
if(cljs.core.truth_(child_58469)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58469);


var G__58470 = seq__57921_58465;
var G__58471 = chunk__57923_58466;
var G__58472 = count__57924_58467;
var G__58473 = (i__57925_58468 + (1));
seq__57921_58465 = G__58470;
chunk__57923_58466 = G__58471;
count__57924_58467 = G__58472;
i__57925_58468 = G__58473;
continue;
} else {
var G__58474 = seq__57921_58465;
var G__58475 = chunk__57923_58466;
var G__58476 = count__57924_58467;
var G__58477 = (i__57925_58468 + (1));
seq__57921_58465 = G__58474;
chunk__57923_58466 = G__58475;
count__57924_58467 = G__58476;
i__57925_58468 = G__58477;
continue;
}
} else {
var temp__5735__auto___58478 = cljs.core.seq(seq__57921_58465);
if(temp__5735__auto___58478){
var seq__57921_58479__$1 = temp__5735__auto___58478;
if(cljs.core.chunked_seq_QMARK_(seq__57921_58479__$1)){
var c__4609__auto___58480 = cljs.core.chunk_first(seq__57921_58479__$1);
var G__58482 = cljs.core.chunk_rest(seq__57921_58479__$1);
var G__58483 = c__4609__auto___58480;
var G__58484 = cljs.core.count(c__4609__auto___58480);
var G__58485 = (0);
seq__57921_58465 = G__58482;
chunk__57923_58466 = G__58483;
count__57924_58467 = G__58484;
i__57925_58468 = G__58485;
continue;
} else {
var child_58486 = cljs.core.first(seq__57921_58479__$1);
if(cljs.core.truth_(child_58486)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58486);


var G__58487 = cljs.core.next(seq__57921_58479__$1);
var G__58488 = null;
var G__58489 = (0);
var G__58490 = (0);
seq__57921_58465 = G__58487;
chunk__57923_58466 = G__58488;
count__57924_58467 = G__58489;
i__57925_58468 = G__58490;
continue;
} else {
var G__58494 = cljs.core.next(seq__57921_58479__$1);
var G__58495 = null;
var G__58496 = (0);
var G__58497 = (0);
seq__57921_58465 = G__58494;
chunk__57923_58466 = G__58495;
count__57924_58467 = G__58496;
i__57925_58468 = G__58497;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58461);
}


var G__58498 = seq__57886_58456;
var G__58499 = chunk__57887_58457;
var G__58500 = count__57888_58458;
var G__58501 = (i__57889_58459 + (1));
seq__57886_58456 = G__58498;
chunk__57887_58457 = G__58499;
count__57888_58458 = G__58500;
i__57889_58459 = G__58501;
continue;
} else {
var temp__5735__auto___58502 = cljs.core.seq(seq__57886_58456);
if(temp__5735__auto___58502){
var seq__57886_58503__$1 = temp__5735__auto___58502;
if(cljs.core.chunked_seq_QMARK_(seq__57886_58503__$1)){
var c__4609__auto___58504 = cljs.core.chunk_first(seq__57886_58503__$1);
var G__58505 = cljs.core.chunk_rest(seq__57886_58503__$1);
var G__58506 = c__4609__auto___58504;
var G__58507 = cljs.core.count(c__4609__auto___58504);
var G__58508 = (0);
seq__57886_58456 = G__58505;
chunk__57887_58457 = G__58506;
count__57888_58458 = G__58507;
i__57889_58459 = G__58508;
continue;
} else {
var child_struct_58510 = cljs.core.first(seq__57886_58503__$1);
var children_58511 = shadow.dom.dom_node(child_struct_58510);
if(cljs.core.seq_QMARK_(children_58511)){
var seq__57936_58512 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58511));
var chunk__57938_58513 = null;
var count__57939_58514 = (0);
var i__57940_58515 = (0);
while(true){
if((i__57940_58515 < count__57939_58514)){
var child_58516 = chunk__57938_58513.cljs$core$IIndexed$_nth$arity$2(null,i__57940_58515);
if(cljs.core.truth_(child_58516)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58516);


var G__58517 = seq__57936_58512;
var G__58518 = chunk__57938_58513;
var G__58519 = count__57939_58514;
var G__58520 = (i__57940_58515 + (1));
seq__57936_58512 = G__58517;
chunk__57938_58513 = G__58518;
count__57939_58514 = G__58519;
i__57940_58515 = G__58520;
continue;
} else {
var G__58521 = seq__57936_58512;
var G__58522 = chunk__57938_58513;
var G__58523 = count__57939_58514;
var G__58524 = (i__57940_58515 + (1));
seq__57936_58512 = G__58521;
chunk__57938_58513 = G__58522;
count__57939_58514 = G__58523;
i__57940_58515 = G__58524;
continue;
}
} else {
var temp__5735__auto___58525__$1 = cljs.core.seq(seq__57936_58512);
if(temp__5735__auto___58525__$1){
var seq__57936_58526__$1 = temp__5735__auto___58525__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57936_58526__$1)){
var c__4609__auto___58527 = cljs.core.chunk_first(seq__57936_58526__$1);
var G__58528 = cljs.core.chunk_rest(seq__57936_58526__$1);
var G__58529 = c__4609__auto___58527;
var G__58530 = cljs.core.count(c__4609__auto___58527);
var G__58531 = (0);
seq__57936_58512 = G__58528;
chunk__57938_58513 = G__58529;
count__57939_58514 = G__58530;
i__57940_58515 = G__58531;
continue;
} else {
var child_58535 = cljs.core.first(seq__57936_58526__$1);
if(cljs.core.truth_(child_58535)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58535);


var G__58536 = cljs.core.next(seq__57936_58526__$1);
var G__58537 = null;
var G__58538 = (0);
var G__58539 = (0);
seq__57936_58512 = G__58536;
chunk__57938_58513 = G__58537;
count__57939_58514 = G__58538;
i__57940_58515 = G__58539;
continue;
} else {
var G__58540 = cljs.core.next(seq__57936_58526__$1);
var G__58541 = null;
var G__58542 = (0);
var G__58543 = (0);
seq__57936_58512 = G__58540;
chunk__57938_58513 = G__58541;
count__57939_58514 = G__58542;
i__57940_58515 = G__58543;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58511);
}


var G__58544 = cljs.core.next(seq__57886_58503__$1);
var G__58545 = null;
var G__58546 = (0);
var G__58547 = (0);
seq__57886_58456 = G__58544;
chunk__57887_58457 = G__58545;
count__57888_58458 = G__58546;
i__57889_58459 = G__58547;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__57958 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__57958);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__57962 = cljs.core.seq(node);
var chunk__57963 = null;
var count__57964 = (0);
var i__57965 = (0);
while(true){
if((i__57965 < count__57964)){
var n = chunk__57963.cljs$core$IIndexed$_nth$arity$2(null,i__57965);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58548 = seq__57962;
var G__58549 = chunk__57963;
var G__58550 = count__57964;
var G__58551 = (i__57965 + (1));
seq__57962 = G__58548;
chunk__57963 = G__58549;
count__57964 = G__58550;
i__57965 = G__58551;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57962);
if(temp__5735__auto__){
var seq__57962__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57962__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57962__$1);
var G__58553 = cljs.core.chunk_rest(seq__57962__$1);
var G__58554 = c__4609__auto__;
var G__58555 = cljs.core.count(c__4609__auto__);
var G__58556 = (0);
seq__57962 = G__58553;
chunk__57963 = G__58554;
count__57964 = G__58555;
i__57965 = G__58556;
continue;
} else {
var n = cljs.core.first(seq__57962__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58558 = cljs.core.next(seq__57962__$1);
var G__58559 = null;
var G__58560 = (0);
var G__58561 = (0);
seq__57962 = G__58558;
chunk__57963 = G__58559;
count__57964 = G__58560;
i__57965 = G__58561;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__57968 = shadow.dom.dom_node(new$);
var G__57969 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__57968,G__57969);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__57972 = arguments.length;
switch (G__57972) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__57976 = arguments.length;
switch (G__57976) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__57989 = arguments.length;
switch (G__57989) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58585 = arguments.length;
var i__4790__auto___58586 = (0);
while(true){
if((i__4790__auto___58586 < len__4789__auto___58585)){
args__4795__auto__.push((arguments[i__4790__auto___58586]));

var G__58587 = (i__4790__auto___58586 + (1));
i__4790__auto___58586 = G__58587;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__57996_58592 = cljs.core.seq(nodes);
var chunk__57997_58593 = null;
var count__57998_58594 = (0);
var i__57999_58595 = (0);
while(true){
if((i__57999_58595 < count__57998_58594)){
var node_58596 = chunk__57997_58593.cljs$core$IIndexed$_nth$arity$2(null,i__57999_58595);
fragment.appendChild(shadow.dom._to_dom(node_58596));


var G__58598 = seq__57996_58592;
var G__58599 = chunk__57997_58593;
var G__58600 = count__57998_58594;
var G__58601 = (i__57999_58595 + (1));
seq__57996_58592 = G__58598;
chunk__57997_58593 = G__58599;
count__57998_58594 = G__58600;
i__57999_58595 = G__58601;
continue;
} else {
var temp__5735__auto___58602 = cljs.core.seq(seq__57996_58592);
if(temp__5735__auto___58602){
var seq__57996_58603__$1 = temp__5735__auto___58602;
if(cljs.core.chunked_seq_QMARK_(seq__57996_58603__$1)){
var c__4609__auto___58604 = cljs.core.chunk_first(seq__57996_58603__$1);
var G__58605 = cljs.core.chunk_rest(seq__57996_58603__$1);
var G__58606 = c__4609__auto___58604;
var G__58607 = cljs.core.count(c__4609__auto___58604);
var G__58608 = (0);
seq__57996_58592 = G__58605;
chunk__57997_58593 = G__58606;
count__57998_58594 = G__58607;
i__57999_58595 = G__58608;
continue;
} else {
var node_58612 = cljs.core.first(seq__57996_58603__$1);
fragment.appendChild(shadow.dom._to_dom(node_58612));


var G__58613 = cljs.core.next(seq__57996_58603__$1);
var G__58614 = null;
var G__58615 = (0);
var G__58616 = (0);
seq__57996_58592 = G__58613;
chunk__57997_58593 = G__58614;
count__57998_58594 = G__58615;
i__57999_58595 = G__58616;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq57995){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57995));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58000_58621 = cljs.core.seq(scripts);
var chunk__58001_58622 = null;
var count__58002_58623 = (0);
var i__58003_58624 = (0);
while(true){
if((i__58003_58624 < count__58002_58623)){
var vec__58012_58625 = chunk__58001_58622.cljs$core$IIndexed$_nth$arity$2(null,i__58003_58624);
var script_tag_58626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58012_58625,(0),null);
var script_body_58627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58012_58625,(1),null);
eval(script_body_58627);


var G__58628 = seq__58000_58621;
var G__58629 = chunk__58001_58622;
var G__58630 = count__58002_58623;
var G__58631 = (i__58003_58624 + (1));
seq__58000_58621 = G__58628;
chunk__58001_58622 = G__58629;
count__58002_58623 = G__58630;
i__58003_58624 = G__58631;
continue;
} else {
var temp__5735__auto___58632 = cljs.core.seq(seq__58000_58621);
if(temp__5735__auto___58632){
var seq__58000_58633__$1 = temp__5735__auto___58632;
if(cljs.core.chunked_seq_QMARK_(seq__58000_58633__$1)){
var c__4609__auto___58634 = cljs.core.chunk_first(seq__58000_58633__$1);
var G__58635 = cljs.core.chunk_rest(seq__58000_58633__$1);
var G__58636 = c__4609__auto___58634;
var G__58637 = cljs.core.count(c__4609__auto___58634);
var G__58638 = (0);
seq__58000_58621 = G__58635;
chunk__58001_58622 = G__58636;
count__58002_58623 = G__58637;
i__58003_58624 = G__58638;
continue;
} else {
var vec__58017_58654 = cljs.core.first(seq__58000_58633__$1);
var script_tag_58655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58017_58654,(0),null);
var script_body_58656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58017_58654,(1),null);
eval(script_body_58656);


var G__58658 = cljs.core.next(seq__58000_58633__$1);
var G__58659 = null;
var G__58660 = (0);
var G__58661 = (0);
seq__58000_58621 = G__58658;
chunk__58001_58622 = G__58659;
count__58002_58623 = G__58660;
i__58003_58624 = G__58661;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58023){
var vec__58024 = p__58023;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58024,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58024,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__58031 = shadow.dom.dom_node(el);
var G__58032 = cls;
return goog.dom.getAncestorByClass(G__58031,G__58032);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58035 = arguments.length;
switch (G__58035) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__58038 = shadow.dom.dom_node(el);
var G__58039 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__58038,G__58039);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__58040 = shadow.dom.dom_node(el);
var G__58041 = cljs.core.name(tag);
var G__58042 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__58040,G__58041,G__58042);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__58044 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__58044);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__58048 = shadow.dom.dom_node(dom);
var G__58049 = value;
return goog.dom.forms.setValue(G__58048,G__58049);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__58057 = cljs.core.seq(style_keys);
var chunk__58058 = null;
var count__58059 = (0);
var i__58060 = (0);
while(true){
if((i__58060 < count__58059)){
var it = chunk__58058.cljs$core$IIndexed$_nth$arity$2(null,i__58060);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58669 = seq__58057;
var G__58670 = chunk__58058;
var G__58671 = count__58059;
var G__58672 = (i__58060 + (1));
seq__58057 = G__58669;
chunk__58058 = G__58670;
count__58059 = G__58671;
i__58060 = G__58672;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58057);
if(temp__5735__auto__){
var seq__58057__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58057__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58057__$1);
var G__58674 = cljs.core.chunk_rest(seq__58057__$1);
var G__58675 = c__4609__auto__;
var G__58676 = cljs.core.count(c__4609__auto__);
var G__58677 = (0);
seq__58057 = G__58674;
chunk__58058 = G__58675;
count__58059 = G__58676;
i__58060 = G__58677;
continue;
} else {
var it = cljs.core.first(seq__58057__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58678 = cljs.core.next(seq__58057__$1);
var G__58679 = null;
var G__58680 = (0);
var G__58681 = (0);
seq__58057 = G__58678;
chunk__58058 = G__58679;
count__58059 = G__58680;
i__58060 = G__58681;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58070,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58076 = k58070;
var G__58076__$1 = (((G__58076 instanceof cljs.core.Keyword))?G__58076.fqn:null);
switch (G__58076__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58070,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58080){
var vec__58081 = p__58080;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58081,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58081,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58069){
var self__ = this;
var G__58069__$1 = this;
return (new cljs.core.RecordIter((0),G__58069__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__58094 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58094(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58071,other58072){
var self__ = this;
var this58071__$1 = this;
return (((!((other58072 == null)))) && ((this58071__$1.constructor === other58072.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58071__$1.x,other58072.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58071__$1.y,other58072.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58071__$1.__extmap,other58072.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58069){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58101 = cljs.core.keyword_identical_QMARK_;
var expr__58102 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58105 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__58106 = expr__58102;
return (pred__58101.cljs$core$IFn$_invoke$arity$2 ? pred__58101.cljs$core$IFn$_invoke$arity$2(G__58105,G__58106) : pred__58101.call(null,G__58105,G__58106));
})())){
return (new shadow.dom.Coordinate(G__58069,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58107 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__58108 = expr__58102;
return (pred__58101.cljs$core$IFn$_invoke$arity$2 ? pred__58101.cljs$core$IFn$_invoke$arity$2(G__58107,G__58108) : pred__58101.call(null,G__58107,G__58108));
})())){
return (new shadow.dom.Coordinate(self__.x,G__58069,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58069),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58069){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58069,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58074){
var extmap__4478__auto__ = (function (){var G__58112 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58074,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58074)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58112);
} else {
return G__58112;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58074),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58074),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__58113 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__58113);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__58114 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__58114);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__58115 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__58115);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58117,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58124 = k58117;
var G__58124__$1 = (((G__58124 instanceof cljs.core.Keyword))?G__58124.fqn:null);
switch (G__58124__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58117,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58127){
var vec__58128 = p__58127;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58128,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58128,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58116){
var self__ = this;
var G__58116__$1 = this;
return (new cljs.core.RecordIter((0),G__58116__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__58132 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58132(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58118,other58119){
var self__ = this;
var this58118__$1 = this;
return (((!((other58119 == null)))) && ((this58118__$1.constructor === other58119.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58118__$1.w,other58119.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58118__$1.h,other58119.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58118__$1.__extmap,other58119.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58116){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58133 = cljs.core.keyword_identical_QMARK_;
var expr__58134 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58136 = new cljs.core.Keyword(null,"w","w",354169001);
var G__58137 = expr__58134;
return (pred__58133.cljs$core$IFn$_invoke$arity$2 ? pred__58133.cljs$core$IFn$_invoke$arity$2(G__58136,G__58137) : pred__58133.call(null,G__58136,G__58137));
})())){
return (new shadow.dom.Size(G__58116,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58139 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__58140 = expr__58134;
return (pred__58133.cljs$core$IFn$_invoke$arity$2 ? pred__58133.cljs$core$IFn$_invoke$arity$2(G__58139,G__58140) : pred__58133.call(null,G__58139,G__58140));
})())){
return (new shadow.dom.Size(self__.w,G__58116,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58116),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58116){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58116,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58120){
var extmap__4478__auto__ = (function (){var G__58151 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58120,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58120)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58151);
} else {
return G__58151;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58120),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58120),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__58155 = shadow.dom.dom_node(el);
return goog.style.getSize(G__58155);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__58765 = (i + (1));
var G__58766 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__58765;
ret = G__58766;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58173){
var vec__58174 = p__58173;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58174,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58174,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58182 = arguments.length;
switch (G__58182) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58192_58784 = new_node;
var G__58193_58785 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__58192_58784,G__58193_58785);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58196_58786 = new_node;
var G__58197_58787 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__58196_58786,G__58197_58787);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__58792 = ps;
var G__58793 = (i + (1));
el__$1 = G__58792;
i = G__58793;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__58203 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__58203);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__58206 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__58206);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__58207 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__58207);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58208 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58208,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58208,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58208,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58211_58800 = cljs.core.seq(props);
var chunk__58212_58801 = null;
var count__58213_58802 = (0);
var i__58214_58803 = (0);
while(true){
if((i__58214_58803 < count__58213_58802)){
var vec__58221_58808 = chunk__58212_58801.cljs$core$IIndexed$_nth$arity$2(null,i__58214_58803);
var k_58809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58221_58808,(0),null);
var v_58810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58221_58808,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_58809);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58809),v_58810);


var G__58814 = seq__58211_58800;
var G__58815 = chunk__58212_58801;
var G__58816 = count__58213_58802;
var G__58817 = (i__58214_58803 + (1));
seq__58211_58800 = G__58814;
chunk__58212_58801 = G__58815;
count__58213_58802 = G__58816;
i__58214_58803 = G__58817;
continue;
} else {
var temp__5735__auto___58818 = cljs.core.seq(seq__58211_58800);
if(temp__5735__auto___58818){
var seq__58211_58819__$1 = temp__5735__auto___58818;
if(cljs.core.chunked_seq_QMARK_(seq__58211_58819__$1)){
var c__4609__auto___58820 = cljs.core.chunk_first(seq__58211_58819__$1);
var G__58824 = cljs.core.chunk_rest(seq__58211_58819__$1);
var G__58825 = c__4609__auto___58820;
var G__58826 = cljs.core.count(c__4609__auto___58820);
var G__58827 = (0);
seq__58211_58800 = G__58824;
chunk__58212_58801 = G__58825;
count__58213_58802 = G__58826;
i__58214_58803 = G__58827;
continue;
} else {
var vec__58225_58828 = cljs.core.first(seq__58211_58819__$1);
var k_58829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58225_58828,(0),null);
var v_58830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58225_58828,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_58829);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_58829),v_58830);


var G__58834 = cljs.core.next(seq__58211_58819__$1);
var G__58835 = null;
var G__58836 = (0);
var G__58837 = (0);
seq__58211_58800 = G__58834;
chunk__58212_58801 = G__58835;
count__58213_58802 = G__58836;
i__58214_58803 = G__58837;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__58230 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58230,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58230,(1),null);
var seq__58233_58841 = cljs.core.seq(node_children);
var chunk__58235_58842 = null;
var count__58236_58843 = (0);
var i__58237_58844 = (0);
while(true){
if((i__58237_58844 < count__58236_58843)){
var child_struct_58845 = chunk__58235_58842.cljs$core$IIndexed$_nth$arity$2(null,i__58237_58844);
if((!((child_struct_58845 == null)))){
if(typeof child_struct_58845 === 'string'){
var text_58846 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58846),child_struct_58845].join(''));
} else {
var children_58847 = shadow.dom.svg_node(child_struct_58845);
if(cljs.core.seq_QMARK_(children_58847)){
var seq__58256_58849 = cljs.core.seq(children_58847);
var chunk__58260_58850 = null;
var count__58261_58851 = (0);
var i__58262_58852 = (0);
while(true){
if((i__58262_58852 < count__58261_58851)){
var child_58853 = chunk__58260_58850.cljs$core$IIndexed$_nth$arity$2(null,i__58262_58852);
if(cljs.core.truth_(child_58853)){
node.appendChild(child_58853);


var G__58855 = seq__58256_58849;
var G__58856 = chunk__58260_58850;
var G__58857 = count__58261_58851;
var G__58858 = (i__58262_58852 + (1));
seq__58256_58849 = G__58855;
chunk__58260_58850 = G__58856;
count__58261_58851 = G__58857;
i__58262_58852 = G__58858;
continue;
} else {
var G__58859 = seq__58256_58849;
var G__58860 = chunk__58260_58850;
var G__58861 = count__58261_58851;
var G__58862 = (i__58262_58852 + (1));
seq__58256_58849 = G__58859;
chunk__58260_58850 = G__58860;
count__58261_58851 = G__58861;
i__58262_58852 = G__58862;
continue;
}
} else {
var temp__5735__auto___58863 = cljs.core.seq(seq__58256_58849);
if(temp__5735__auto___58863){
var seq__58256_58864__$1 = temp__5735__auto___58863;
if(cljs.core.chunked_seq_QMARK_(seq__58256_58864__$1)){
var c__4609__auto___58865 = cljs.core.chunk_first(seq__58256_58864__$1);
var G__58866 = cljs.core.chunk_rest(seq__58256_58864__$1);
var G__58867 = c__4609__auto___58865;
var G__58868 = cljs.core.count(c__4609__auto___58865);
var G__58869 = (0);
seq__58256_58849 = G__58866;
chunk__58260_58850 = G__58867;
count__58261_58851 = G__58868;
i__58262_58852 = G__58869;
continue;
} else {
var child_58870 = cljs.core.first(seq__58256_58864__$1);
if(cljs.core.truth_(child_58870)){
node.appendChild(child_58870);


var G__58871 = cljs.core.next(seq__58256_58864__$1);
var G__58872 = null;
var G__58873 = (0);
var G__58874 = (0);
seq__58256_58849 = G__58871;
chunk__58260_58850 = G__58872;
count__58261_58851 = G__58873;
i__58262_58852 = G__58874;
continue;
} else {
var G__58875 = cljs.core.next(seq__58256_58864__$1);
var G__58876 = null;
var G__58877 = (0);
var G__58878 = (0);
seq__58256_58849 = G__58875;
chunk__58260_58850 = G__58876;
count__58261_58851 = G__58877;
i__58262_58852 = G__58878;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58847);
}
}


var G__58879 = seq__58233_58841;
var G__58880 = chunk__58235_58842;
var G__58881 = count__58236_58843;
var G__58882 = (i__58237_58844 + (1));
seq__58233_58841 = G__58879;
chunk__58235_58842 = G__58880;
count__58236_58843 = G__58881;
i__58237_58844 = G__58882;
continue;
} else {
var G__58883 = seq__58233_58841;
var G__58884 = chunk__58235_58842;
var G__58885 = count__58236_58843;
var G__58886 = (i__58237_58844 + (1));
seq__58233_58841 = G__58883;
chunk__58235_58842 = G__58884;
count__58236_58843 = G__58885;
i__58237_58844 = G__58886;
continue;
}
} else {
var temp__5735__auto___58887 = cljs.core.seq(seq__58233_58841);
if(temp__5735__auto___58887){
var seq__58233_58888__$1 = temp__5735__auto___58887;
if(cljs.core.chunked_seq_QMARK_(seq__58233_58888__$1)){
var c__4609__auto___58889 = cljs.core.chunk_first(seq__58233_58888__$1);
var G__58890 = cljs.core.chunk_rest(seq__58233_58888__$1);
var G__58891 = c__4609__auto___58889;
var G__58892 = cljs.core.count(c__4609__auto___58889);
var G__58893 = (0);
seq__58233_58841 = G__58890;
chunk__58235_58842 = G__58891;
count__58236_58843 = G__58892;
i__58237_58844 = G__58893;
continue;
} else {
var child_struct_58894 = cljs.core.first(seq__58233_58888__$1);
if((!((child_struct_58894 == null)))){
if(typeof child_struct_58894 === 'string'){
var text_58895 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_58895),child_struct_58894].join(''));
} else {
var children_58896 = shadow.dom.svg_node(child_struct_58894);
if(cljs.core.seq_QMARK_(children_58896)){
var seq__58275_58897 = cljs.core.seq(children_58896);
var chunk__58277_58898 = null;
var count__58278_58899 = (0);
var i__58279_58900 = (0);
while(true){
if((i__58279_58900 < count__58278_58899)){
var child_58901 = chunk__58277_58898.cljs$core$IIndexed$_nth$arity$2(null,i__58279_58900);
if(cljs.core.truth_(child_58901)){
node.appendChild(child_58901);


var G__58902 = seq__58275_58897;
var G__58903 = chunk__58277_58898;
var G__58904 = count__58278_58899;
var G__58905 = (i__58279_58900 + (1));
seq__58275_58897 = G__58902;
chunk__58277_58898 = G__58903;
count__58278_58899 = G__58904;
i__58279_58900 = G__58905;
continue;
} else {
var G__58929 = seq__58275_58897;
var G__58930 = chunk__58277_58898;
var G__58931 = count__58278_58899;
var G__58932 = (i__58279_58900 + (1));
seq__58275_58897 = G__58929;
chunk__58277_58898 = G__58930;
count__58278_58899 = G__58931;
i__58279_58900 = G__58932;
continue;
}
} else {
var temp__5735__auto___58933__$1 = cljs.core.seq(seq__58275_58897);
if(temp__5735__auto___58933__$1){
var seq__58275_58934__$1 = temp__5735__auto___58933__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58275_58934__$1)){
var c__4609__auto___58935 = cljs.core.chunk_first(seq__58275_58934__$1);
var G__58936 = cljs.core.chunk_rest(seq__58275_58934__$1);
var G__58937 = c__4609__auto___58935;
var G__58938 = cljs.core.count(c__4609__auto___58935);
var G__58939 = (0);
seq__58275_58897 = G__58936;
chunk__58277_58898 = G__58937;
count__58278_58899 = G__58938;
i__58279_58900 = G__58939;
continue;
} else {
var child_58947 = cljs.core.first(seq__58275_58934__$1);
if(cljs.core.truth_(child_58947)){
node.appendChild(child_58947);


var G__58995 = cljs.core.next(seq__58275_58934__$1);
var G__58996 = null;
var G__58997 = (0);
var G__58998 = (0);
seq__58275_58897 = G__58995;
chunk__58277_58898 = G__58996;
count__58278_58899 = G__58997;
i__58279_58900 = G__58998;
continue;
} else {
var G__58999 = cljs.core.next(seq__58275_58934__$1);
var G__59000 = null;
var G__59001 = (0);
var G__59002 = (0);
seq__58275_58897 = G__58999;
chunk__58277_58898 = G__59000;
count__58278_58899 = G__59001;
i__58279_58900 = G__59002;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_58896);
}
}


var G__59003 = cljs.core.next(seq__58233_58888__$1);
var G__59004 = null;
var G__59005 = (0);
var G__59006 = (0);
seq__58233_58841 = G__59003;
chunk__58235_58842 = G__59004;
count__58236_58843 = G__59005;
i__58237_58844 = G__59006;
continue;
} else {
var G__59010 = cljs.core.next(seq__58233_58888__$1);
var G__59011 = null;
var G__59012 = (0);
var G__59013 = (0);
seq__58233_58841 = G__59010;
chunk__58235_58842 = G__59011;
count__58236_58843 = G__59012;
i__58237_58844 = G__59013;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__58287_59014 = shadow.dom._to_svg;
var G__58288_59015 = "string";
var G__58289_59016 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__58287_59014,G__58288_59015,G__58289_59016);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__58291_59025 = shadow.dom._to_svg;
var G__58292_59026 = "null";
var G__58293_59027 = (function (_){
return null;
});
goog.object.set(G__58291_59025,G__58292_59026,G__58293_59027);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59028 = arguments.length;
var i__4790__auto___59029 = (0);
while(true){
if((i__4790__auto___59029 < len__4789__auto___59028)){
args__4795__auto__.push((arguments[i__4790__auto___59029]));

var G__59030 = (i__4790__auto___59029 + (1));
i__4790__auto___59029 = G__59030;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58296){
var G__58297 = cljs.core.first(seq58296);
var seq58296__$1 = cljs.core.next(seq58296);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58297,seq58296__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__58304 = arguments.length;
switch (G__58304) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__58306_59035 = shadow.dom.dom_node(el);
var G__58307_59036 = cljs.core.name(event);
var G__58308_59037 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58306_59035,G__58307_59036,G__58308_59037) : shadow.dom.dom_listen.call(null,G__58306_59035,G__58307_59036,G__58308_59037));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__56101__auto___59039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_58314){
var state_val_58315 = (state_58314[(1)]);
if((state_val_58315 === (1))){
var state_58314__$1 = state_58314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58314__$1,(2),once_or_cleanup);
} else {
if((state_val_58315 === (2))){
var inst_58311 = (state_58314[(2)]);
var inst_58312 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58314__$1 = (function (){var statearr_58316 = state_58314;
(statearr_58316[(7)] = inst_58311);

return statearr_58316;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58314__$1,inst_58312);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__56001__auto__ = null;
var shadow$dom$state_machine__56001__auto____0 = (function (){
var statearr_58317 = [null,null,null,null,null,null,null,null];
(statearr_58317[(0)] = shadow$dom$state_machine__56001__auto__);

(statearr_58317[(1)] = (1));

return statearr_58317;
});
var shadow$dom$state_machine__56001__auto____1 = (function (state_58314){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_58314);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e58319){if((e58319 instanceof Object)){
var ex__56004__auto__ = e58319;
var statearr_58320_59043 = state_58314;
(statearr_58320_59043[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58319;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59044 = state_58314;
state_58314 = G__59044;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
shadow$dom$state_machine__56001__auto__ = function(state_58314){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__56001__auto____0.call(this);
case 1:
return shadow$dom$state_machine__56001__auto____1.call(this,state_58314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__56001__auto____0;
shadow$dom$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__56001__auto____1;
return shadow$dom$state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_58323 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_58323[(6)] = c__56101__auto___59039);

return statearr_58323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
