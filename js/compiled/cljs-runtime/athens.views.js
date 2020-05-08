goog.provide('athens.views');
goog.require('cljs.core');
goog.require('athens.subs');
goog.require('athens.page');
goog.require('re_frame.core');
goog.require('reitit.frontend');
goog.require('reitit.frontend.easy');
athens.views.about_panel = (function athens$views$about_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About Panel"], null)], null);
});
athens.views.file_cb = (function athens$views$file_cb(e){
var fr = (new FileReader());
var file = e.target.files.item((0));
(fr.onload = (function (p1__49999_SHARP_){
var G__50000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-datoms","parse-datoms",-2086422577),p1__49999_SHARP_.target.result], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50000) : re_frame.core.dispatch.call(null,G__50000));
}));

return fr.readAsText(file);
});
athens.views.table = (function athens$views$table(nodes){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"60%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),"Page"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),"Last Edit"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left"], null)], null),"Created At"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4582__auto__ = (function athens$views$table_$_iter__50001(s__50002){
return (new cljs.core.LazySeq(null,(function (){
var s__50002__$1 = s__50002;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50002__$1);
if(temp__5735__auto__){
var s__50002__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50002__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50002__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50004 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50003 = (0);
while(true){
if((i__50003 < size__4581__auto__)){
var map__50005 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50003);
var map__50005__$1 = (((((!((map__50005 == null))))?(((((map__50005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50005):map__50005);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50005__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var bid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50005__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50005__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var c_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50005__$1,new cljs.core.Keyword("create","time","create/time",-1563077754));
var e_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50005__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
cljs.core.chunk_append(b__50004,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(24)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),bid], null))], null),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(new Date(c_time)).toLocaleString()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(new Date(e_time)).toLocaleString()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__50028 = (i__50003 + (1));
i__50003 = G__50028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50004),athens$views$table_$_iter__50001(cljs.core.chunk_rest(s__50002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50004),null);
}
} else {
var map__50008 = cljs.core.first(s__50002__$2);
var map__50008__$1 = (((((!((map__50008 == null))))?(((((map__50008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50008):map__50008);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50008__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var bid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50008__$1,new cljs.core.Keyword("block","uid","block/uid",-1623585167));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50008__$1,new cljs.core.Keyword("node","title","node/title",628940777));
var c_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50008__$1,new cljs.core.Keyword("create","time","create/time",-1563077754));
var e_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50008__$1,new cljs.core.Keyword("edit","time","edit/time",1384867476));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(24)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),bid], null))], null),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(new Date(c_time)).toLocaleString()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(new Date(e_time)).toLocaleString()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),athens$views$table_$_iter__50001(cljs.core.rest(s__50002__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(nodes);
})()], null)], null);
});
athens.views.pages_panel = (function athens$views$pages_panel(){
var nodes = (function (){var G__50010 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull-nodes","pull-nodes",61183062)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50010) : re_frame.core.subscribe.call(null,G__50010));
})();
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Upload your DB ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),""], null),"(tutorial)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"name","name",1843675177),"file-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return athens.views.file_cb(e);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.table,cljs.core.deref(nodes)], null)], null);
});
});
athens.views.home_panel = (function athens$views$home_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Home Panel"], null)], null);
});
});
athens.views.left_sidebar = (function athens$views$left_sidebar(){
return (function (){
var favorites = (function (){var G__50011 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"favorites","favorites",1740773480)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50011) : re_frame.core.subscribe.call(null,G__50011));
})();
var current_route = (function (){var G__50012 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50012) : re_frame.core.subscribe.call(null,G__50012));
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 10px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(250)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pages","pages",-285406513))], null),"All /pages"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentArrayMap.EMPTY], null),"Current Route: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_route))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"1px solid gray",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none"], null)], null),(function (){var iter__4582__auto__ = (function athens$views$left_sidebar_$_iter__50013(s__50014){
return (new cljs.core.LazySeq(null,(function (){
var s__50014__$1 = s__50014;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50014__$1);
if(temp__5735__auto__){
var s__50014__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50014__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__50014__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__50016 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__50015 = (0);
while(true){
if((i__50015 < size__4581__auto__)){
var vec__50017 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__50015);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50017,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50017,(1),null);
var bid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50017,(2),null);
cljs.core.chunk_append(b__50016,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),bid], null))], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),bid], null)));

var G__50031 = (i__50015 + (1));
i__50015 = G__50031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50016),athens$views$left_sidebar_$_iter__50013(cljs.core.chunk_rest(s__50014__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50016),null);
}
} else {
var vec__50020 = cljs.core.first(s__50014__$2);
var _order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50020,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50020,(1),null);
var bid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50020,(2),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),bid], null))], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),bid], null)),athens$views$left_sidebar_$_iter__50013(cljs.core.rest(s__50014__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(favorites));
})()], null)], null);
});
});
/**
 * When `:errors` subscription is updated, global alert will be called with its contents and then cleared.
 */
athens.views.alert = (function athens$views$alert(){
var errors = (function (){var G__50023 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50023) : re_frame.core.subscribe.call(null,G__50023));
})();
if((!(cljs.core.empty_QMARK_(cljs.core.deref(errors))))){
alert(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(errors)));

var G__50024 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-errors","clear-errors",-937972213)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__50024) : re_frame.core.dispatch.call(null,G__50024));
} else {
return null;
}
});
athens.views.match_panel = (function athens$views$match_panel(name){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50025 = name;
var G__50025__$1 = (((G__50025 instanceof cljs.core.Keyword))?G__50025.fqn:null);
switch (G__50025__$1) {
case "about":
return athens.views.about_panel;

break;
case "pages":
return athens.views.pages_panel;

break;
case "page":
return athens.page.main;

break;
default:
return athens.views.pages_panel;

}
})()], null);
});
athens.views.main_panel = (function athens$views$main_panel(){
var current_route = (function (){var G__50026 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50026) : re_frame.core.subscribe.call(null,G__50026));
})();
var loading = (function (){var G__50027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__50027) : re_frame.core.subscribe.call(null,G__50027));
})();
return (function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.alert], null);

if(cljs.core.truth_(cljs.core.deref(loading))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Loading... (at least it'll be faster than Roam)"], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.left_sidebar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [athens.views.match_panel,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(current_route)))], null)], null);
}
});
});

//# sourceMappingURL=athens.views.js.map
