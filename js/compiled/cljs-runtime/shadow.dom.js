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
return cljs.core.cons((coll[idx]),(function (){var G__57778 = coll;
var G__57779 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__57778,G__57779) : shadow.dom.lazy_native_coll_seq.call(null,G__57778,G__57779));
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
var G__57804 = arguments.length;
switch (G__57804) {
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
var G__57808 = arguments.length;
switch (G__57808) {
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
var G__57813 = arguments.length;
switch (G__57813) {
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
var G__57819 = arguments.length;
switch (G__57819) {
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
var G__57824 = arguments.length;
switch (G__57824) {
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
var G__57826 = document;
var G__57827 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57826,G__57827);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__57829 = shadow.dom.dom_node(parent);
var G__57830 = shadow.dom.dom_node(el);
return goog.dom.contains(G__57829,G__57830);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__57832 = shadow.dom.dom_node(el);
var G__57833 = cls;
return goog.dom.classlist.add(G__57832,G__57833);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__57834 = shadow.dom.dom_node(el);
var G__57835 = cls;
return goog.dom.classlist.remove(G__57834,G__57835);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__57839 = arguments.length;
switch (G__57839) {
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
var G__57843 = shadow.dom.dom_node(el);
var G__57844 = cls;
return goog.dom.classlist.toggle(G__57843,G__57844);
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
}catch (e57851){if((e57851 instanceof Object)){
var e = e57851;
return console.log("didnt support attachEvent",el,e);
} else {
throw e57851;

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
var seq__57855 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__57856 = null;
var count__57857 = (0);
var i__57858 = (0);
while(true){
if((i__57858 < count__57857)){
var el = chunk__57856.cljs$core$IIndexed$_nth$arity$2(null,i__57858);
var handler_58721__$1 = ((function (seq__57855,chunk__57856,count__57857,i__57858,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57855,chunk__57856,count__57857,i__57858,el))
;
var G__57867_58722 = el;
var G__57868_58723 = cljs.core.name(ev);
var G__57869_58724 = handler_58721__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57867_58722,G__57868_58723,G__57869_58724) : shadow.dom.dom_listen.call(null,G__57867_58722,G__57868_58723,G__57869_58724));


var G__58725 = seq__57855;
var G__58726 = chunk__57856;
var G__58727 = count__57857;
var G__58728 = (i__57858 + (1));
seq__57855 = G__58725;
chunk__57856 = G__58726;
count__57857 = G__58727;
i__57858 = G__58728;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57855);
if(temp__5735__auto__){
var seq__57855__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57855__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57855__$1);
var G__58729 = cljs.core.chunk_rest(seq__57855__$1);
var G__58730 = c__4609__auto__;
var G__58731 = cljs.core.count(c__4609__auto__);
var G__58732 = (0);
seq__57855 = G__58729;
chunk__57856 = G__58730;
count__57857 = G__58731;
i__57858 = G__58732;
continue;
} else {
var el = cljs.core.first(seq__57855__$1);
var handler_58733__$1 = ((function (seq__57855,chunk__57856,count__57857,i__57858,el,seq__57855__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__57855,chunk__57856,count__57857,i__57858,el,seq__57855__$1,temp__5735__auto__))
;
var G__57870_58734 = el;
var G__57871_58735 = cljs.core.name(ev);
var G__57872_58736 = handler_58733__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57870_58734,G__57871_58735,G__57872_58736) : shadow.dom.dom_listen.call(null,G__57870_58734,G__57871_58735,G__57872_58736));


var G__58737 = cljs.core.next(seq__57855__$1);
var G__58738 = null;
var G__58739 = (0);
var G__58740 = (0);
seq__57855 = G__58737;
chunk__57856 = G__58738;
count__57857 = G__58739;
i__57858 = G__58740;
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
var G__57874 = arguments.length;
switch (G__57874) {
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
var G__57875 = shadow.dom.dom_node(el);
var G__57876 = cljs.core.name(ev);
var G__57877 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__57875,G__57876,G__57877) : shadow.dom.dom_listen.call(null,G__57875,G__57876,G__57877));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__57878 = shadow.dom.dom_node(el);
var G__57879 = cljs.core.name(ev);
var G__57880 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__57878,G__57879,G__57880) : shadow.dom.dom_listen_remove.call(null,G__57878,G__57879,G__57880));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__57881 = cljs.core.seq(events);
var chunk__57882 = null;
var count__57883 = (0);
var i__57884 = (0);
while(true){
if((i__57884 < count__57883)){
var vec__57893 = chunk__57882.cljs$core$IIndexed$_nth$arity$2(null,i__57884);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57893,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57893,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58744 = seq__57881;
var G__58745 = chunk__57882;
var G__58746 = count__57883;
var G__58747 = (i__57884 + (1));
seq__57881 = G__58744;
chunk__57882 = G__58745;
count__57883 = G__58746;
i__57884 = G__58747;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57881);
if(temp__5735__auto__){
var seq__57881__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57881__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57881__$1);
var G__58748 = cljs.core.chunk_rest(seq__57881__$1);
var G__58749 = c__4609__auto__;
var G__58750 = cljs.core.count(c__4609__auto__);
var G__58751 = (0);
seq__57881 = G__58748;
chunk__57882 = G__58749;
count__57883 = G__58750;
i__57884 = G__58751;
continue;
} else {
var vec__57898 = cljs.core.first(seq__57881__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57898,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__58753 = cljs.core.next(seq__57881__$1);
var G__58754 = null;
var G__58755 = (0);
var G__58756 = (0);
seq__57881 = G__58753;
chunk__57882 = G__58754;
count__57883 = G__58755;
i__57884 = G__58756;
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
var seq__57904 = cljs.core.seq(styles);
var chunk__57905 = null;
var count__57906 = (0);
var i__57907 = (0);
while(true){
if((i__57907 < count__57906)){
var vec__57924 = chunk__57905.cljs$core$IIndexed$_nth$arity$2(null,i__57907);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57924,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57924,(1),null);
var G__57929_58758 = dom;
var G__57930_58759 = cljs.core.name(k);
var G__57931_58760 = (((v == null))?"":v);
goog.style.setStyle(G__57929_58758,G__57930_58759,G__57931_58760);


var G__58761 = seq__57904;
var G__58762 = chunk__57905;
var G__58763 = count__57906;
var G__58764 = (i__57907 + (1));
seq__57904 = G__58761;
chunk__57905 = G__58762;
count__57906 = G__58763;
i__57907 = G__58764;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__57904);
if(temp__5735__auto__){
var seq__57904__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57904__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__57904__$1);
var G__58765 = cljs.core.chunk_rest(seq__57904__$1);
var G__58766 = c__4609__auto__;
var G__58767 = cljs.core.count(c__4609__auto__);
var G__58768 = (0);
seq__57904 = G__58765;
chunk__57905 = G__58766;
count__57906 = G__58767;
i__57907 = G__58768;
continue;
} else {
var vec__57935 = cljs.core.first(seq__57904__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57935,(1),null);
var G__57938_58769 = dom;
var G__57939_58770 = cljs.core.name(k);
var G__57940_58771 = (((v == null))?"":v);
goog.style.setStyle(G__57938_58769,G__57939_58770,G__57940_58771);


var G__58772 = cljs.core.next(seq__57904__$1);
var G__58773 = null;
var G__58774 = (0);
var G__58775 = (0);
seq__57904 = G__58772;
chunk__57905 = G__58773;
count__57906 = G__58774;
i__57907 = G__58775;
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
var G__57947_58776 = key;
var G__57947_58777__$1 = (((G__57947_58776 instanceof cljs.core.Keyword))?G__57947_58776.fqn:null);
switch (G__57947_58777__$1) {
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
var ks_58780 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_58780,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_58780,"aria-");
}
})())){
el.setAttribute(ks_58780,value);
} else {
(el[ks_58780] = value);
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
var G__57967 = shadow.dom.dom_node(el);
var G__57968 = cls;
return goog.dom.classlist.contains(G__57967,G__57968);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__57992){
var map__57995 = p__57992;
var map__57995__$1 = (((((!((map__57995 == null))))?(((((map__57995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57995):map__57995);
var props = map__57995__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57995__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__57997 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57997,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57997,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57997,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__58001 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__58001,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__58001;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__58010 = arguments.length;
switch (G__58010) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__58019){
var vec__58020 = p__58019;
var seq__58021 = cljs.core.seq(vec__58020);
var first__58022 = cljs.core.first(seq__58021);
var seq__58021__$1 = cljs.core.next(seq__58021);
var nn = first__58022;
var first__58022__$1 = cljs.core.first(seq__58021__$1);
var seq__58021__$2 = cljs.core.next(seq__58021__$1);
var np = first__58022__$1;
var nc = seq__58021__$2;
var node = vec__58020;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58024 = nn;
var G__58025 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58024,G__58025) : create_fn.call(null,G__58024,G__58025));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58028 = nn;
var G__58029 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58028,G__58029) : create_fn.call(null,G__58028,G__58029));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__58031 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58031,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58031,(1),null);
var seq__58036_58791 = cljs.core.seq(node_children);
var chunk__58037_58792 = null;
var count__58038_58793 = (0);
var i__58039_58794 = (0);
while(true){
if((i__58039_58794 < count__58038_58793)){
var child_struct_58795 = chunk__58037_58792.cljs$core$IIndexed$_nth$arity$2(null,i__58039_58794);
var children_58796 = shadow.dom.dom_node(child_struct_58795);
if(cljs.core.seq_QMARK_(children_58796)){
var seq__58077_58797 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58796));
var chunk__58079_58798 = null;
var count__58080_58799 = (0);
var i__58081_58800 = (0);
while(true){
if((i__58081_58800 < count__58080_58799)){
var child_58801 = chunk__58079_58798.cljs$core$IIndexed$_nth$arity$2(null,i__58081_58800);
if(cljs.core.truth_(child_58801)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58801);


var G__58802 = seq__58077_58797;
var G__58803 = chunk__58079_58798;
var G__58804 = count__58080_58799;
var G__58805 = (i__58081_58800 + (1));
seq__58077_58797 = G__58802;
chunk__58079_58798 = G__58803;
count__58080_58799 = G__58804;
i__58081_58800 = G__58805;
continue;
} else {
var G__58806 = seq__58077_58797;
var G__58807 = chunk__58079_58798;
var G__58808 = count__58080_58799;
var G__58809 = (i__58081_58800 + (1));
seq__58077_58797 = G__58806;
chunk__58079_58798 = G__58807;
count__58080_58799 = G__58808;
i__58081_58800 = G__58809;
continue;
}
} else {
var temp__5735__auto___58810 = cljs.core.seq(seq__58077_58797);
if(temp__5735__auto___58810){
var seq__58077_58811__$1 = temp__5735__auto___58810;
if(cljs.core.chunked_seq_QMARK_(seq__58077_58811__$1)){
var c__4609__auto___58812 = cljs.core.chunk_first(seq__58077_58811__$1);
var G__58813 = cljs.core.chunk_rest(seq__58077_58811__$1);
var G__58814 = c__4609__auto___58812;
var G__58815 = cljs.core.count(c__4609__auto___58812);
var G__58816 = (0);
seq__58077_58797 = G__58813;
chunk__58079_58798 = G__58814;
count__58080_58799 = G__58815;
i__58081_58800 = G__58816;
continue;
} else {
var child_58817 = cljs.core.first(seq__58077_58811__$1);
if(cljs.core.truth_(child_58817)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58817);


var G__58821 = cljs.core.next(seq__58077_58811__$1);
var G__58822 = null;
var G__58823 = (0);
var G__58824 = (0);
seq__58077_58797 = G__58821;
chunk__58079_58798 = G__58822;
count__58080_58799 = G__58823;
i__58081_58800 = G__58824;
continue;
} else {
var G__58825 = cljs.core.next(seq__58077_58811__$1);
var G__58826 = null;
var G__58827 = (0);
var G__58828 = (0);
seq__58077_58797 = G__58825;
chunk__58079_58798 = G__58826;
count__58080_58799 = G__58827;
i__58081_58800 = G__58828;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58796);
}


var G__58829 = seq__58036_58791;
var G__58830 = chunk__58037_58792;
var G__58831 = count__58038_58793;
var G__58832 = (i__58039_58794 + (1));
seq__58036_58791 = G__58829;
chunk__58037_58792 = G__58830;
count__58038_58793 = G__58831;
i__58039_58794 = G__58832;
continue;
} else {
var temp__5735__auto___58833 = cljs.core.seq(seq__58036_58791);
if(temp__5735__auto___58833){
var seq__58036_58835__$1 = temp__5735__auto___58833;
if(cljs.core.chunked_seq_QMARK_(seq__58036_58835__$1)){
var c__4609__auto___58836 = cljs.core.chunk_first(seq__58036_58835__$1);
var G__58837 = cljs.core.chunk_rest(seq__58036_58835__$1);
var G__58838 = c__4609__auto___58836;
var G__58839 = cljs.core.count(c__4609__auto___58836);
var G__58840 = (0);
seq__58036_58791 = G__58837;
chunk__58037_58792 = G__58838;
count__58038_58793 = G__58839;
i__58039_58794 = G__58840;
continue;
} else {
var child_struct_58845 = cljs.core.first(seq__58036_58835__$1);
var children_58846 = shadow.dom.dom_node(child_struct_58845);
if(cljs.core.seq_QMARK_(children_58846)){
var seq__58096_58847 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_58846));
var chunk__58098_58848 = null;
var count__58099_58849 = (0);
var i__58100_58850 = (0);
while(true){
if((i__58100_58850 < count__58099_58849)){
var child_58851 = chunk__58098_58848.cljs$core$IIndexed$_nth$arity$2(null,i__58100_58850);
if(cljs.core.truth_(child_58851)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58851);


var G__58852 = seq__58096_58847;
var G__58853 = chunk__58098_58848;
var G__58854 = count__58099_58849;
var G__58855 = (i__58100_58850 + (1));
seq__58096_58847 = G__58852;
chunk__58098_58848 = G__58853;
count__58099_58849 = G__58854;
i__58100_58850 = G__58855;
continue;
} else {
var G__58856 = seq__58096_58847;
var G__58857 = chunk__58098_58848;
var G__58858 = count__58099_58849;
var G__58859 = (i__58100_58850 + (1));
seq__58096_58847 = G__58856;
chunk__58098_58848 = G__58857;
count__58099_58849 = G__58858;
i__58100_58850 = G__58859;
continue;
}
} else {
var temp__5735__auto___58860__$1 = cljs.core.seq(seq__58096_58847);
if(temp__5735__auto___58860__$1){
var seq__58096_58861__$1 = temp__5735__auto___58860__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58096_58861__$1)){
var c__4609__auto___58862 = cljs.core.chunk_first(seq__58096_58861__$1);
var G__58863 = cljs.core.chunk_rest(seq__58096_58861__$1);
var G__58864 = c__4609__auto___58862;
var G__58865 = cljs.core.count(c__4609__auto___58862);
var G__58866 = (0);
seq__58096_58847 = G__58863;
chunk__58098_58848 = G__58864;
count__58099_58849 = G__58865;
i__58100_58850 = G__58866;
continue;
} else {
var child_58867 = cljs.core.first(seq__58096_58861__$1);
if(cljs.core.truth_(child_58867)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_58867);


var G__58868 = cljs.core.next(seq__58096_58861__$1);
var G__58869 = null;
var G__58870 = (0);
var G__58871 = (0);
seq__58096_58847 = G__58868;
chunk__58098_58848 = G__58869;
count__58099_58849 = G__58870;
i__58100_58850 = G__58871;
continue;
} else {
var G__58872 = cljs.core.next(seq__58096_58861__$1);
var G__58873 = null;
var G__58874 = (0);
var G__58875 = (0);
seq__58096_58847 = G__58872;
chunk__58098_58848 = G__58873;
count__58099_58849 = G__58874;
i__58100_58850 = G__58875;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_58846);
}


var G__58876 = cljs.core.next(seq__58036_58835__$1);
var G__58877 = null;
var G__58878 = (0);
var G__58879 = (0);
seq__58036_58791 = G__58876;
chunk__58037_58792 = G__58877;
count__58038_58793 = G__58878;
i__58039_58794 = G__58879;
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
var G__58121 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__58121);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58141 = cljs.core.seq(node);
var chunk__58142 = null;
var count__58143 = (0);
var i__58144 = (0);
while(true){
if((i__58144 < count__58143)){
var n = chunk__58142.cljs$core$IIndexed$_nth$arity$2(null,i__58144);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58884 = seq__58141;
var G__58885 = chunk__58142;
var G__58886 = count__58143;
var G__58887 = (i__58144 + (1));
seq__58141 = G__58884;
chunk__58142 = G__58885;
count__58143 = G__58886;
i__58144 = G__58887;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58141);
if(temp__5735__auto__){
var seq__58141__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58141__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58141__$1);
var G__58890 = cljs.core.chunk_rest(seq__58141__$1);
var G__58891 = c__4609__auto__;
var G__58892 = cljs.core.count(c__4609__auto__);
var G__58893 = (0);
seq__58141 = G__58890;
chunk__58142 = G__58891;
count__58143 = G__58892;
i__58144 = G__58893;
continue;
} else {
var n = cljs.core.first(seq__58141__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__58896 = cljs.core.next(seq__58141__$1);
var G__58897 = null;
var G__58898 = (0);
var G__58899 = (0);
seq__58141 = G__58896;
chunk__58142 = G__58897;
count__58143 = G__58898;
i__58144 = G__58899;
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
var G__58154 = shadow.dom.dom_node(new$);
var G__58155 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__58154,G__58155);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58164 = arguments.length;
switch (G__58164) {
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
var G__58189 = arguments.length;
switch (G__58189) {
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
var G__58211 = arguments.length;
switch (G__58211) {
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
var len__4789__auto___58909 = arguments.length;
var i__4790__auto___58910 = (0);
while(true){
if((i__4790__auto___58910 < len__4789__auto___58909)){
args__4795__auto__.push((arguments[i__4790__auto___58910]));

var G__58911 = (i__4790__auto___58910 + (1));
i__4790__auto___58910 = G__58911;
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
var seq__58276_58912 = cljs.core.seq(nodes);
var chunk__58277_58913 = null;
var count__58278_58914 = (0);
var i__58279_58915 = (0);
while(true){
if((i__58279_58915 < count__58278_58914)){
var node_58916 = chunk__58277_58913.cljs$core$IIndexed$_nth$arity$2(null,i__58279_58915);
fragment.appendChild(shadow.dom._to_dom(node_58916));


var G__58917 = seq__58276_58912;
var G__58918 = chunk__58277_58913;
var G__58919 = count__58278_58914;
var G__58920 = (i__58279_58915 + (1));
seq__58276_58912 = G__58917;
chunk__58277_58913 = G__58918;
count__58278_58914 = G__58919;
i__58279_58915 = G__58920;
continue;
} else {
var temp__5735__auto___58924 = cljs.core.seq(seq__58276_58912);
if(temp__5735__auto___58924){
var seq__58276_58925__$1 = temp__5735__auto___58924;
if(cljs.core.chunked_seq_QMARK_(seq__58276_58925__$1)){
var c__4609__auto___58926 = cljs.core.chunk_first(seq__58276_58925__$1);
var G__58927 = cljs.core.chunk_rest(seq__58276_58925__$1);
var G__58928 = c__4609__auto___58926;
var G__58929 = cljs.core.count(c__4609__auto___58926);
var G__58930 = (0);
seq__58276_58912 = G__58927;
chunk__58277_58913 = G__58928;
count__58278_58914 = G__58929;
i__58279_58915 = G__58930;
continue;
} else {
var node_58931 = cljs.core.first(seq__58276_58925__$1);
fragment.appendChild(shadow.dom._to_dom(node_58931));


var G__58932 = cljs.core.next(seq__58276_58925__$1);
var G__58933 = null;
var G__58934 = (0);
var G__58935 = (0);
seq__58276_58912 = G__58932;
chunk__58277_58913 = G__58933;
count__58278_58914 = G__58934;
i__58279_58915 = G__58935;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58270){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58270));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58284_58936 = cljs.core.seq(scripts);
var chunk__58285_58937 = null;
var count__58286_58938 = (0);
var i__58287_58939 = (0);
while(true){
if((i__58287_58939 < count__58286_58938)){
var vec__58295_58940 = chunk__58285_58937.cljs$core$IIndexed$_nth$arity$2(null,i__58287_58939);
var script_tag_58941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58295_58940,(0),null);
var script_body_58942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58295_58940,(1),null);
eval(script_body_58942);


var G__58943 = seq__58284_58936;
var G__58944 = chunk__58285_58937;
var G__58945 = count__58286_58938;
var G__58946 = (i__58287_58939 + (1));
seq__58284_58936 = G__58943;
chunk__58285_58937 = G__58944;
count__58286_58938 = G__58945;
i__58287_58939 = G__58946;
continue;
} else {
var temp__5735__auto___58947 = cljs.core.seq(seq__58284_58936);
if(temp__5735__auto___58947){
var seq__58284_58948__$1 = temp__5735__auto___58947;
if(cljs.core.chunked_seq_QMARK_(seq__58284_58948__$1)){
var c__4609__auto___58949 = cljs.core.chunk_first(seq__58284_58948__$1);
var G__58950 = cljs.core.chunk_rest(seq__58284_58948__$1);
var G__58951 = c__4609__auto___58949;
var G__58952 = cljs.core.count(c__4609__auto___58949);
var G__58953 = (0);
seq__58284_58936 = G__58950;
chunk__58285_58937 = G__58951;
count__58286_58938 = G__58952;
i__58287_58939 = G__58953;
continue;
} else {
var vec__58298_58954 = cljs.core.first(seq__58284_58948__$1);
var script_tag_58955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58298_58954,(0),null);
var script_body_58956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58298_58954,(1),null);
eval(script_body_58956);


var G__58957 = cljs.core.next(seq__58284_58948__$1);
var G__58958 = null;
var G__58959 = (0);
var G__58960 = (0);
seq__58284_58936 = G__58957;
chunk__58285_58937 = G__58958;
count__58286_58938 = G__58959;
i__58287_58939 = G__58960;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58302){
var vec__58303 = p__58302;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58303,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58303,(1),null);
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
var G__58306 = shadow.dom.dom_node(el);
var G__58307 = cls;
return goog.dom.getAncestorByClass(G__58306,G__58307);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58309 = arguments.length;
switch (G__58309) {
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
var G__58310 = shadow.dom.dom_node(el);
var G__58311 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__58310,G__58311);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__58312 = shadow.dom.dom_node(el);
var G__58313 = cljs.core.name(tag);
var G__58314 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__58312,G__58313,G__58314);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__58315 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__58315);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__58318 = shadow.dom.dom_node(dom);
var G__58319 = value;
return goog.dom.forms.setValue(G__58318,G__58319);
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
var seq__58336 = cljs.core.seq(style_keys);
var chunk__58337 = null;
var count__58338 = (0);
var i__58339 = (0);
while(true){
if((i__58339 < count__58338)){
var it = chunk__58337.cljs$core$IIndexed$_nth$arity$2(null,i__58339);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58970 = seq__58336;
var G__58971 = chunk__58337;
var G__58972 = count__58338;
var G__58973 = (i__58339 + (1));
seq__58336 = G__58970;
chunk__58337 = G__58971;
count__58338 = G__58972;
i__58339 = G__58973;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58336);
if(temp__5735__auto__){
var seq__58336__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58336__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__58336__$1);
var G__58974 = cljs.core.chunk_rest(seq__58336__$1);
var G__58975 = c__4609__auto__;
var G__58976 = cljs.core.count(c__4609__auto__);
var G__58977 = (0);
seq__58336 = G__58974;
chunk__58337 = G__58975;
count__58338 = G__58976;
i__58339 = G__58977;
continue;
} else {
var it = cljs.core.first(seq__58336__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__58978 = cljs.core.next(seq__58336__$1);
var G__58979 = null;
var G__58980 = (0);
var G__58981 = (0);
seq__58336 = G__58978;
chunk__58337 = G__58979;
count__58338 = G__58980;
i__58339 = G__58981;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58350,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58358 = k58350;
var G__58358__$1 = (((G__58358 instanceof cljs.core.Keyword))?G__58358.fqn:null);
switch (G__58358__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58350,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58361){
var vec__58362 = p__58361;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58362,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58362,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58349){
var self__ = this;
var G__58349__$1 = this;
return (new cljs.core.RecordIter((0),G__58349__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__58372 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58372(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58351,other58352){
var self__ = this;
var this58351__$1 = this;
return (((!((other58352 == null)))) && ((this58351__$1.constructor === other58352.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58351__$1.x,other58352.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58351__$1.y,other58352.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58351__$1.__extmap,other58352.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58349){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58375 = cljs.core.keyword_identical_QMARK_;
var expr__58376 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58378 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__58379 = expr__58376;
return (pred__58375.cljs$core$IFn$_invoke$arity$2 ? pred__58375.cljs$core$IFn$_invoke$arity$2(G__58378,G__58379) : pred__58375.call(null,G__58378,G__58379));
})())){
return (new shadow.dom.Coordinate(G__58349,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58381 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__58382 = expr__58376;
return (pred__58375.cljs$core$IFn$_invoke$arity$2 ? pred__58375.cljs$core$IFn$_invoke$arity$2(G__58381,G__58382) : pred__58375.call(null,G__58381,G__58382));
})())){
return (new shadow.dom.Coordinate(self__.x,G__58349,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58349),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58349){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58349,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58354){
var extmap__4478__auto__ = (function (){var G__58390 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58354,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58354)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58390);
} else {
return G__58390;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58354),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58354),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__58394 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__58394);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__58397 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__58397);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__58399 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__58399);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k58401,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__58409 = k58401;
var G__58409__$1 = (((G__58409 instanceof cljs.core.Keyword))?G__58409.fqn:null);
switch (G__58409__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58401,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__58412){
var vec__58413 = p__58412;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58413,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58413,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58400){
var self__ = this;
var G__58400__$1 = this;
return (new cljs.core.RecordIter((0),G__58400__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__58423 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__58423(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58403,other58404){
var self__ = this;
var this58403__$1 = this;
return (((!((other58404 == null)))) && ((this58403__$1.constructor === other58404.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58403__$1.w,other58404.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58403__$1.h,other58404.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58403__$1.__extmap,other58404.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__58400){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__58428 = cljs.core.keyword_identical_QMARK_;
var expr__58429 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__58431 = new cljs.core.Keyword(null,"w","w",354169001);
var G__58432 = expr__58429;
return (pred__58428.cljs$core$IFn$_invoke$arity$2 ? pred__58428.cljs$core$IFn$_invoke$arity$2(G__58431,G__58432) : pred__58428.call(null,G__58431,G__58432));
})())){
return (new shadow.dom.Size(G__58400,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__58434 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__58435 = expr__58429;
return (pred__58428.cljs$core$IFn$_invoke$arity$2 ? pred__58428.cljs$core$IFn$_invoke$arity$2(G__58434,G__58435) : pred__58428.call(null,G__58434,G__58435));
})())){
return (new shadow.dom.Size(self__.w,G__58400,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__58400),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__58400){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58400,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58405){
var extmap__4478__auto__ = (function (){var G__58443 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58405,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58405)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58443);
} else {
return G__58443;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58405),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58405),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__58449 = shadow.dom.dom_node(el);
return goog.style.getSize(G__58449);
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
var G__59016 = (i + (1));
var G__59017 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__59016;
ret = G__59017;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58457){
var vec__58458 = p__58457;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58458,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58458,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58462 = arguments.length;
switch (G__58462) {
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
var G__58463_59021 = new_node;
var G__58464_59022 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__58463_59021,G__58464_59022);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__58465_59023 = new_node;
var G__58466_59024 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__58465_59023,G__58466_59024);

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
var G__59030 = ps;
var G__59031 = (i + (1));
el__$1 = G__59030;
i = G__59031;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__58467 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__58467);
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
var G__58468 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__58468);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__58469 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__58469);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58470 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58470,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58474_59039 = cljs.core.seq(props);
var chunk__58475_59040 = null;
var count__58476_59041 = (0);
var i__58477_59042 = (0);
while(true){
if((i__58477_59042 < count__58476_59041)){
var vec__58495_59043 = chunk__58475_59040.cljs$core$IIndexed$_nth$arity$2(null,i__58477_59042);
var k_59044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58495_59043,(0),null);
var v_59045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58495_59043,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_59044);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59044),v_59045);


var G__59048 = seq__58474_59039;
var G__59049 = chunk__58475_59040;
var G__59050 = count__58476_59041;
var G__59051 = (i__58477_59042 + (1));
seq__58474_59039 = G__59048;
chunk__58475_59040 = G__59049;
count__58476_59041 = G__59050;
i__58477_59042 = G__59051;
continue;
} else {
var temp__5735__auto___59054 = cljs.core.seq(seq__58474_59039);
if(temp__5735__auto___59054){
var seq__58474_59055__$1 = temp__5735__auto___59054;
if(cljs.core.chunked_seq_QMARK_(seq__58474_59055__$1)){
var c__4609__auto___59056 = cljs.core.chunk_first(seq__58474_59055__$1);
var G__59057 = cljs.core.chunk_rest(seq__58474_59055__$1);
var G__59058 = c__4609__auto___59056;
var G__59059 = cljs.core.count(c__4609__auto___59056);
var G__59060 = (0);
seq__58474_59039 = G__59057;
chunk__58475_59040 = G__59058;
count__58476_59041 = G__59059;
i__58477_59042 = G__59060;
continue;
} else {
var vec__58504_59061 = cljs.core.first(seq__58474_59055__$1);
var k_59062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58504_59061,(0),null);
var v_59063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58504_59061,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_59062);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59062),v_59063);


var G__59064 = cljs.core.next(seq__58474_59055__$1);
var G__59065 = null;
var G__59066 = (0);
var G__59067 = (0);
seq__58474_59039 = G__59064;
chunk__58475_59040 = G__59065;
count__58476_59041 = G__59066;
i__58477_59042 = G__59067;
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
var vec__58514 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58514,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58514,(1),null);
var seq__58518_59069 = cljs.core.seq(node_children);
var chunk__58521_59070 = null;
var count__58522_59071 = (0);
var i__58523_59072 = (0);
while(true){
if((i__58523_59072 < count__58522_59071)){
var child_struct_59073 = chunk__58521_59070.cljs$core$IIndexed$_nth$arity$2(null,i__58523_59072);
if((!((child_struct_59073 == null)))){
if(typeof child_struct_59073 === 'string'){
var text_59075 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59075),child_struct_59073].join(''));
} else {
var children_59076 = shadow.dom.svg_node(child_struct_59073);
if(cljs.core.seq_QMARK_(children_59076)){
var seq__58582_59077 = cljs.core.seq(children_59076);
var chunk__58584_59078 = null;
var count__58585_59079 = (0);
var i__58586_59080 = (0);
while(true){
if((i__58586_59080 < count__58585_59079)){
var child_59081 = chunk__58584_59078.cljs$core$IIndexed$_nth$arity$2(null,i__58586_59080);
if(cljs.core.truth_(child_59081)){
node.appendChild(child_59081);


var G__59082 = seq__58582_59077;
var G__59083 = chunk__58584_59078;
var G__59084 = count__58585_59079;
var G__59085 = (i__58586_59080 + (1));
seq__58582_59077 = G__59082;
chunk__58584_59078 = G__59083;
count__58585_59079 = G__59084;
i__58586_59080 = G__59085;
continue;
} else {
var G__59086 = seq__58582_59077;
var G__59087 = chunk__58584_59078;
var G__59088 = count__58585_59079;
var G__59089 = (i__58586_59080 + (1));
seq__58582_59077 = G__59086;
chunk__58584_59078 = G__59087;
count__58585_59079 = G__59088;
i__58586_59080 = G__59089;
continue;
}
} else {
var temp__5735__auto___59090 = cljs.core.seq(seq__58582_59077);
if(temp__5735__auto___59090){
var seq__58582_59091__$1 = temp__5735__auto___59090;
if(cljs.core.chunked_seq_QMARK_(seq__58582_59091__$1)){
var c__4609__auto___59092 = cljs.core.chunk_first(seq__58582_59091__$1);
var G__59093 = cljs.core.chunk_rest(seq__58582_59091__$1);
var G__59094 = c__4609__auto___59092;
var G__59095 = cljs.core.count(c__4609__auto___59092);
var G__59096 = (0);
seq__58582_59077 = G__59093;
chunk__58584_59078 = G__59094;
count__58585_59079 = G__59095;
i__58586_59080 = G__59096;
continue;
} else {
var child_59097 = cljs.core.first(seq__58582_59091__$1);
if(cljs.core.truth_(child_59097)){
node.appendChild(child_59097);


var G__59098 = cljs.core.next(seq__58582_59091__$1);
var G__59099 = null;
var G__59100 = (0);
var G__59101 = (0);
seq__58582_59077 = G__59098;
chunk__58584_59078 = G__59099;
count__58585_59079 = G__59100;
i__58586_59080 = G__59101;
continue;
} else {
var G__59103 = cljs.core.next(seq__58582_59091__$1);
var G__59104 = null;
var G__59105 = (0);
var G__59106 = (0);
seq__58582_59077 = G__59103;
chunk__58584_59078 = G__59104;
count__58585_59079 = G__59105;
i__58586_59080 = G__59106;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59076);
}
}


var G__59107 = seq__58518_59069;
var G__59108 = chunk__58521_59070;
var G__59109 = count__58522_59071;
var G__59110 = (i__58523_59072 + (1));
seq__58518_59069 = G__59107;
chunk__58521_59070 = G__59108;
count__58522_59071 = G__59109;
i__58523_59072 = G__59110;
continue;
} else {
var G__59111 = seq__58518_59069;
var G__59112 = chunk__58521_59070;
var G__59113 = count__58522_59071;
var G__59114 = (i__58523_59072 + (1));
seq__58518_59069 = G__59111;
chunk__58521_59070 = G__59112;
count__58522_59071 = G__59113;
i__58523_59072 = G__59114;
continue;
}
} else {
var temp__5735__auto___59115 = cljs.core.seq(seq__58518_59069);
if(temp__5735__auto___59115){
var seq__58518_59116__$1 = temp__5735__auto___59115;
if(cljs.core.chunked_seq_QMARK_(seq__58518_59116__$1)){
var c__4609__auto___59117 = cljs.core.chunk_first(seq__58518_59116__$1);
var G__59118 = cljs.core.chunk_rest(seq__58518_59116__$1);
var G__59119 = c__4609__auto___59117;
var G__59120 = cljs.core.count(c__4609__auto___59117);
var G__59121 = (0);
seq__58518_59069 = G__59118;
chunk__58521_59070 = G__59119;
count__58522_59071 = G__59120;
i__58523_59072 = G__59121;
continue;
} else {
var child_struct_59122 = cljs.core.first(seq__58518_59116__$1);
if((!((child_struct_59122 == null)))){
if(typeof child_struct_59122 === 'string'){
var text_59123 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59123),child_struct_59122].join(''));
} else {
var children_59124 = shadow.dom.svg_node(child_struct_59122);
if(cljs.core.seq_QMARK_(children_59124)){
var seq__58603_59126 = cljs.core.seq(children_59124);
var chunk__58605_59127 = null;
var count__58606_59128 = (0);
var i__58607_59129 = (0);
while(true){
if((i__58607_59129 < count__58606_59128)){
var child_59130 = chunk__58605_59127.cljs$core$IIndexed$_nth$arity$2(null,i__58607_59129);
if(cljs.core.truth_(child_59130)){
node.appendChild(child_59130);


var G__59131 = seq__58603_59126;
var G__59132 = chunk__58605_59127;
var G__59133 = count__58606_59128;
var G__59134 = (i__58607_59129 + (1));
seq__58603_59126 = G__59131;
chunk__58605_59127 = G__59132;
count__58606_59128 = G__59133;
i__58607_59129 = G__59134;
continue;
} else {
var G__59135 = seq__58603_59126;
var G__59136 = chunk__58605_59127;
var G__59137 = count__58606_59128;
var G__59138 = (i__58607_59129 + (1));
seq__58603_59126 = G__59135;
chunk__58605_59127 = G__59136;
count__58606_59128 = G__59137;
i__58607_59129 = G__59138;
continue;
}
} else {
var temp__5735__auto___59139__$1 = cljs.core.seq(seq__58603_59126);
if(temp__5735__auto___59139__$1){
var seq__58603_59140__$1 = temp__5735__auto___59139__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58603_59140__$1)){
var c__4609__auto___59141 = cljs.core.chunk_first(seq__58603_59140__$1);
var G__59142 = cljs.core.chunk_rest(seq__58603_59140__$1);
var G__59143 = c__4609__auto___59141;
var G__59144 = cljs.core.count(c__4609__auto___59141);
var G__59145 = (0);
seq__58603_59126 = G__59142;
chunk__58605_59127 = G__59143;
count__58606_59128 = G__59144;
i__58607_59129 = G__59145;
continue;
} else {
var child_59146 = cljs.core.first(seq__58603_59140__$1);
if(cljs.core.truth_(child_59146)){
node.appendChild(child_59146);


var G__59147 = cljs.core.next(seq__58603_59140__$1);
var G__59148 = null;
var G__59149 = (0);
var G__59150 = (0);
seq__58603_59126 = G__59147;
chunk__58605_59127 = G__59148;
count__58606_59128 = G__59149;
i__58607_59129 = G__59150;
continue;
} else {
var G__59151 = cljs.core.next(seq__58603_59140__$1);
var G__59152 = null;
var G__59153 = (0);
var G__59154 = (0);
seq__58603_59126 = G__59151;
chunk__58605_59127 = G__59152;
count__58606_59128 = G__59153;
i__58607_59129 = G__59154;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59124);
}
}


var G__59155 = cljs.core.next(seq__58518_59116__$1);
var G__59156 = null;
var G__59157 = (0);
var G__59158 = (0);
seq__58518_59069 = G__59155;
chunk__58521_59070 = G__59156;
count__58522_59071 = G__59157;
i__58523_59072 = G__59158;
continue;
} else {
var G__59159 = cljs.core.next(seq__58518_59116__$1);
var G__59160 = null;
var G__59161 = (0);
var G__59162 = (0);
seq__58518_59069 = G__59159;
chunk__58521_59070 = G__59160;
count__58522_59071 = G__59161;
i__58523_59072 = G__59162;
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

var G__58624_59163 = shadow.dom._to_svg;
var G__58625_59164 = "string";
var G__58626_59165 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__58624_59163,G__58625_59164,G__58626_59165);

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

var G__58631_59166 = shadow.dom._to_svg;
var G__58632_59167 = "null";
var G__58633_59168 = (function (_){
return null;
});
goog.object.set(G__58631_59166,G__58632_59167,G__58633_59168);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___59173 = arguments.length;
var i__4790__auto___59174 = (0);
while(true){
if((i__4790__auto___59174 < len__4789__auto___59173)){
args__4795__auto__.push((arguments[i__4790__auto___59174]));

var G__59177 = (i__4790__auto___59174 + (1));
i__4790__auto___59174 = G__59177;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58636){
var G__58637 = cljs.core.first(seq58636);
var seq58636__$1 = cljs.core.next(seq58636);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58637,seq58636__$1);
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
var G__58648 = arguments.length;
switch (G__58648) {
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
var G__58655_59183 = shadow.dom.dom_node(el);
var G__58656_59184 = cljs.core.name(event);
var G__58657_59185 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__58655_59183,G__58656_59184,G__58657_59185) : shadow.dom.dom_listen.call(null,G__58655_59183,G__58656_59184,G__58657_59185));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__56096__auto___59187 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56097__auto__ = (function (){var switch__55995__auto__ = (function (state_58666){
var state_val_58667 = (state_58666[(1)]);
if((state_val_58667 === (1))){
var state_58666__$1 = state_58666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58666__$1,(2),once_or_cleanup);
} else {
if((state_val_58667 === (2))){
var inst_58662 = (state_58666[(2)]);
var inst_58663 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58666__$1 = (function (){var statearr_58674 = state_58666;
(statearr_58674[(7)] = inst_58662);

return statearr_58674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58666__$1,inst_58663);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55996__auto__ = null;
var shadow$dom$state_machine__55996__auto____0 = (function (){
var statearr_58676 = [null,null,null,null,null,null,null,null];
(statearr_58676[(0)] = shadow$dom$state_machine__55996__auto__);

(statearr_58676[(1)] = (1));

return statearr_58676;
});
var shadow$dom$state_machine__55996__auto____1 = (function (state_58666){
while(true){
var ret_value__55997__auto__ = (function (){try{while(true){
var result__55998__auto__ = switch__55995__auto__(state_58666);
if(cljs.core.keyword_identical_QMARK_(result__55998__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55998__auto__;
}
break;
}
}catch (e58678){if((e58678 instanceof Object)){
var ex__55999__auto__ = e58678;
var statearr_58680_59194 = state_58666;
(statearr_58680_59194[(5)] = ex__55999__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_58666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55997__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59195 = state_58666;
state_58666 = G__59195;
continue;
} else {
return ret_value__55997__auto__;
}
break;
}
});
shadow$dom$state_machine__55996__auto__ = function(state_58666){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55996__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55996__auto____1.call(this,state_58666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55996__auto____0;
shadow$dom$state_machine__55996__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55996__auto____1;
return shadow$dom$state_machine__55996__auto__;
})()
})();
var state__56098__auto__ = (function (){var statearr_58684 = (f__56097__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56097__auto__.cljs$core$IFn$_invoke$arity$0() : f__56097__auto__.call(null));
(statearr_58684[(6)] = c__56096__auto___59187);

return statearr_58684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56098__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
