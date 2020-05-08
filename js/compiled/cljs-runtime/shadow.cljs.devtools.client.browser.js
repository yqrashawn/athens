goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___61064 = arguments.length;
var i__4790__auto___61065 = (0);
while(true){
if((i__4790__auto___61065 < len__4789__auto___61064)){
args__4795__auto__.push((arguments[i__4790__auto___61065]));

var G__61066 = (i__4790__auto___61065 + (1));
i__4790__auto___61065 = G__61066;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq60809){
var G__60810 = cljs.core.first(seq60809);
var seq60809__$1 = cljs.core.next(seq60809);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60810,seq60809__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__60819){
var map__60820 = p__60819;
var map__60820__$1 = (((((!((map__60820 == null))))?(((((map__60820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60820):map__60820);
var src = map__60820__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60820__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60820__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__60822 = cljs.core.seq(sources);
var chunk__60823 = null;
var count__60824 = (0);
var i__60825 = (0);
while(true){
if((i__60825 < count__60824)){
var map__60834 = chunk__60823.cljs$core$IIndexed$_nth$arity$2(null,i__60825);
var map__60834__$1 = (((((!((map__60834 == null))))?(((((map__60834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60834):map__60834);
var src = map__60834__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60834__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60834__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60834__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60834__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e60837){var e_61070 = e60837;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61070);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61070.message)].join('')));
}

var G__61071 = seq__60822;
var G__61072 = chunk__60823;
var G__61073 = count__60824;
var G__61074 = (i__60825 + (1));
seq__60822 = G__61071;
chunk__60823 = G__61072;
count__60824 = G__61073;
i__60825 = G__61074;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60822);
if(temp__5735__auto__){
var seq__60822__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60822__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60822__$1);
var G__61075 = cljs.core.chunk_rest(seq__60822__$1);
var G__61076 = c__4609__auto__;
var G__61077 = cljs.core.count(c__4609__auto__);
var G__61078 = (0);
seq__60822 = G__61075;
chunk__60823 = G__61076;
count__60824 = G__61077;
i__60825 = G__61078;
continue;
} else {
var map__60838 = cljs.core.first(seq__60822__$1);
var map__60838__$1 = (((((!((map__60838 == null))))?(((((map__60838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60838):map__60838);
var src = map__60838__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60838__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60838__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60838__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60838__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e60846){var e_61079 = e60846;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_61079);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61079.message)].join('')));
}

var G__61080 = cljs.core.next(seq__60822__$1);
var G__61081 = null;
var G__61082 = (0);
var G__61083 = (0);
seq__60822 = G__61080;
chunk__60823 = G__61081;
count__60824 = G__61082;
i__60825 = G__61083;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__60853 = cljs.core.seq(js_requires);
var chunk__60854 = null;
var count__60855 = (0);
var i__60856 = (0);
while(true){
if((i__60856 < count__60855)){
var js_ns = chunk__60854.cljs$core$IIndexed$_nth$arity$2(null,i__60856);
var require_str_61084 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61084);


var G__61085 = seq__60853;
var G__61086 = chunk__60854;
var G__61087 = count__60855;
var G__61088 = (i__60856 + (1));
seq__60853 = G__61085;
chunk__60854 = G__61086;
count__60855 = G__61087;
i__60856 = G__61088;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60853);
if(temp__5735__auto__){
var seq__60853__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60853__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60853__$1);
var G__61089 = cljs.core.chunk_rest(seq__60853__$1);
var G__61090 = c__4609__auto__;
var G__61091 = cljs.core.count(c__4609__auto__);
var G__61092 = (0);
seq__60853 = G__61089;
chunk__60854 = G__61090;
count__60855 = G__61091;
i__60856 = G__61092;
continue;
} else {
var js_ns = cljs.core.first(seq__60853__$1);
var require_str_61093 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_61093);


var G__61094 = cljs.core.next(seq__60853__$1);
var G__61095 = null;
var G__61096 = (0);
var G__61097 = (0);
seq__60853 = G__61094;
chunk__60854 = G__61095;
count__60855 = G__61096;
i__60856 = G__61097;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__60858 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__60858) : callback.call(null,G__60858));
} else {
var G__60859 = shadow.cljs.devtools.client.env.files_url();
var G__60860 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__60861 = "POST";
var G__60862 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__60863 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__60859,G__60860,G__60861,G__60862,G__60863);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__60878){
var map__60879 = p__60878;
var map__60879__$1 = (((((!((map__60879 == null))))?(((((map__60879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60879):map__60879);
var msg = map__60879__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60879__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60879__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__60887 = info;
var map__60887__$1 = (((((!((map__60887 == null))))?(((((map__60887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60887):map__60887);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60887__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60887__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60889(s__60890){
return (new cljs.core.LazySeq(null,(function (){
var s__60890__$1 = s__60890;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60890__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__60895 = cljs.core.first(xs__6292__auto__);
var map__60895__$1 = (((((!((map__60895 == null))))?(((((map__60895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60895):map__60895);
var src = map__60895__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__60890__$1,map__60895,map__60895__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60887,map__60887__$1,sources,compiled,map__60879,map__60879__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60889_$_iter__60891(s__60892){
return (new cljs.core.LazySeq(null,((function (s__60890__$1,map__60895,map__60895__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60887,map__60887__$1,sources,compiled,map__60879,map__60879__$1,msg,info,reload_info){
return (function (){
var s__60892__$1 = s__60892;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60892__$1);
if(temp__5735__auto____$1){
var s__60892__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60892__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__60892__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__60894 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__60893 = (0);
while(true){
if((i__60893 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__60893);
cljs.core.chunk_append(b__60894,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__61101 = (i__60893 + (1));
i__60893 = G__61101;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60894),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60889_$_iter__60891(cljs.core.chunk_rest(s__60892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60894),null);
}
} else {
var warning = cljs.core.first(s__60892__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60889_$_iter__60891(cljs.core.rest(s__60892__$2)));
}
} else {
return null;
}
break;
}
});})(s__60890__$1,map__60895,map__60895__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60887,map__60887__$1,sources,compiled,map__60879,map__60879__$1,msg,info,reload_info))
,null,null));
});})(s__60890__$1,map__60895,map__60895__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60887,map__60887__$1,sources,compiled,map__60879,map__60879__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60889(cljs.core.rest(s__60890__$1)));
} else {
var G__61106 = cljs.core.rest(s__60890__$1);
s__60890__$1 = G__61106;
continue;
}
} else {
var G__61107 = cljs.core.rest(s__60890__$1);
s__60890__$1 = G__61107;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__60897_61108 = cljs.core.seq(warnings);
var chunk__60898_61109 = null;
var count__60899_61110 = (0);
var i__60900_61111 = (0);
while(true){
if((i__60900_61111 < count__60899_61110)){
var map__60908_61112 = chunk__60898_61109.cljs$core$IIndexed$_nth$arity$2(null,i__60900_61111);
var map__60908_61113__$1 = (((((!((map__60908_61112 == null))))?(((((map__60908_61112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60908_61112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60908_61112):map__60908_61112);
var w_61114 = map__60908_61113__$1;
var msg_61115__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60908_61113__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60908_61113__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60908_61113__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60908_61113__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61118)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61116),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61117),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61115__$1)].join(''));


var G__61121 = seq__60897_61108;
var G__61122 = chunk__60898_61109;
var G__61123 = count__60899_61110;
var G__61124 = (i__60900_61111 + (1));
seq__60897_61108 = G__61121;
chunk__60898_61109 = G__61122;
count__60899_61110 = G__61123;
i__60900_61111 = G__61124;
continue;
} else {
var temp__5735__auto___61125 = cljs.core.seq(seq__60897_61108);
if(temp__5735__auto___61125){
var seq__60897_61126__$1 = temp__5735__auto___61125;
if(cljs.core.chunked_seq_QMARK_(seq__60897_61126__$1)){
var c__4609__auto___61127 = cljs.core.chunk_first(seq__60897_61126__$1);
var G__61128 = cljs.core.chunk_rest(seq__60897_61126__$1);
var G__61129 = c__4609__auto___61127;
var G__61130 = cljs.core.count(c__4609__auto___61127);
var G__61131 = (0);
seq__60897_61108 = G__61128;
chunk__60898_61109 = G__61129;
count__60899_61110 = G__61130;
i__60900_61111 = G__61131;
continue;
} else {
var map__60910_61132 = cljs.core.first(seq__60897_61126__$1);
var map__60910_61133__$1 = (((((!((map__60910_61132 == null))))?(((((map__60910_61132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60910_61132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60910_61132):map__60910_61132);
var w_61134 = map__60910_61133__$1;
var msg_61135__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60910_61133__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_61136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60910_61133__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_61137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60910_61133__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_61138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60910_61133__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_61138)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_61136),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_61137),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_61135__$1)].join(''));


var G__61139 = cljs.core.next(seq__60897_61126__$1);
var G__61140 = null;
var G__61141 = (0);
var G__61142 = (0);
seq__60897_61108 = G__61139;
chunk__60898_61109 = G__61140;
count__60899_61110 = G__61141;
i__60900_61111 = G__61142;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__60913){
var map__60914 = p__60913;
var map__60914__$1 = (((((!((map__60914 == null))))?(((((map__60914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60914):map__60914);
var src = map__60914__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60914__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60914__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__60916){
var map__60917 = p__60916;
var map__60917__$1 = (((((!((map__60917 == null))))?(((((map__60917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60917):map__60917);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60917__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__60919){
var map__60920 = p__60919;
var map__60920__$1 = (((((!((map__60920 == null))))?(((((map__60920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60920):map__60920);
var rc = map__60920__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60920__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__60873_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__60873_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__60928){
var map__60929 = p__60928;
var map__60929__$1 = (((((!((map__60929 == null))))?(((((map__60929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60929):map__60929);
var msg = map__60929__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60929__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__60931 = cljs.core.seq(updates);
var chunk__60933 = null;
var count__60934 = (0);
var i__60935 = (0);
while(true){
if((i__60935 < count__60934)){
var path = chunk__60933.cljs$core$IIndexed$_nth$arity$2(null,i__60935);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60975_61158 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60978_61159 = null;
var count__60979_61160 = (0);
var i__60980_61161 = (0);
while(true){
if((i__60980_61161 < count__60979_61160)){
var node_61162 = chunk__60978_61159.cljs$core$IIndexed$_nth$arity$2(null,i__60980_61161);
var path_match_61163 = shadow.cljs.devtools.client.browser.match_paths(node_61162.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61163)){
var new_link_61164 = (function (){var G__60987 = node_61162.cloneNode(true);
G__60987.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61163),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60987;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61163], 0));

goog.dom.insertSiblingAfter(new_link_61164,node_61162);

goog.dom.removeNode(node_61162);


var G__61165 = seq__60975_61158;
var G__61166 = chunk__60978_61159;
var G__61167 = count__60979_61160;
var G__61168 = (i__60980_61161 + (1));
seq__60975_61158 = G__61165;
chunk__60978_61159 = G__61166;
count__60979_61160 = G__61167;
i__60980_61161 = G__61168;
continue;
} else {
var G__61169 = seq__60975_61158;
var G__61170 = chunk__60978_61159;
var G__61171 = count__60979_61160;
var G__61172 = (i__60980_61161 + (1));
seq__60975_61158 = G__61169;
chunk__60978_61159 = G__61170;
count__60979_61160 = G__61171;
i__60980_61161 = G__61172;
continue;
}
} else {
var temp__5735__auto___61173 = cljs.core.seq(seq__60975_61158);
if(temp__5735__auto___61173){
var seq__60975_61174__$1 = temp__5735__auto___61173;
if(cljs.core.chunked_seq_QMARK_(seq__60975_61174__$1)){
var c__4609__auto___61175 = cljs.core.chunk_first(seq__60975_61174__$1);
var G__61176 = cljs.core.chunk_rest(seq__60975_61174__$1);
var G__61177 = c__4609__auto___61175;
var G__61178 = cljs.core.count(c__4609__auto___61175);
var G__61179 = (0);
seq__60975_61158 = G__61176;
chunk__60978_61159 = G__61177;
count__60979_61160 = G__61178;
i__60980_61161 = G__61179;
continue;
} else {
var node_61180 = cljs.core.first(seq__60975_61174__$1);
var path_match_61181 = shadow.cljs.devtools.client.browser.match_paths(node_61180.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61181)){
var new_link_61182 = (function (){var G__60992 = node_61180.cloneNode(true);
G__60992.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61181),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60992;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61181], 0));

goog.dom.insertSiblingAfter(new_link_61182,node_61180);

goog.dom.removeNode(node_61180);


var G__61183 = cljs.core.next(seq__60975_61174__$1);
var G__61184 = null;
var G__61185 = (0);
var G__61186 = (0);
seq__60975_61158 = G__61183;
chunk__60978_61159 = G__61184;
count__60979_61160 = G__61185;
i__60980_61161 = G__61186;
continue;
} else {
var G__61187 = cljs.core.next(seq__60975_61174__$1);
var G__61188 = null;
var G__61189 = (0);
var G__61190 = (0);
seq__60975_61158 = G__61187;
chunk__60978_61159 = G__61188;
count__60979_61160 = G__61189;
i__60980_61161 = G__61190;
continue;
}
}
} else {
}
}
break;
}


var G__61191 = seq__60931;
var G__61192 = chunk__60933;
var G__61193 = count__60934;
var G__61194 = (i__60935 + (1));
seq__60931 = G__61191;
chunk__60933 = G__61192;
count__60934 = G__61193;
i__60935 = G__61194;
continue;
} else {
var G__61195 = seq__60931;
var G__61196 = chunk__60933;
var G__61197 = count__60934;
var G__61198 = (i__60935 + (1));
seq__60931 = G__61195;
chunk__60933 = G__61196;
count__60934 = G__61197;
i__60935 = G__61198;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60931);
if(temp__5735__auto__){
var seq__60931__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60931__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__60931__$1);
var G__61199 = cljs.core.chunk_rest(seq__60931__$1);
var G__61200 = c__4609__auto__;
var G__61201 = cljs.core.count(c__4609__auto__);
var G__61202 = (0);
seq__60931 = G__61199;
chunk__60933 = G__61200;
count__60934 = G__61201;
i__60935 = G__61202;
continue;
} else {
var path = cljs.core.first(seq__60931__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60993_61204 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60996_61205 = null;
var count__60997_61206 = (0);
var i__60998_61207 = (0);
while(true){
if((i__60998_61207 < count__60997_61206)){
var node_61208 = chunk__60996_61205.cljs$core$IIndexed$_nth$arity$2(null,i__60998_61207);
var path_match_61209 = shadow.cljs.devtools.client.browser.match_paths(node_61208.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61209)){
var new_link_61210 = (function (){var G__61004 = node_61208.cloneNode(true);
G__61004.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61209),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61004;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61209], 0));

goog.dom.insertSiblingAfter(new_link_61210,node_61208);

goog.dom.removeNode(node_61208);


var G__61211 = seq__60993_61204;
var G__61212 = chunk__60996_61205;
var G__61213 = count__60997_61206;
var G__61214 = (i__60998_61207 + (1));
seq__60993_61204 = G__61211;
chunk__60996_61205 = G__61212;
count__60997_61206 = G__61213;
i__60998_61207 = G__61214;
continue;
} else {
var G__61215 = seq__60993_61204;
var G__61216 = chunk__60996_61205;
var G__61217 = count__60997_61206;
var G__61218 = (i__60998_61207 + (1));
seq__60993_61204 = G__61215;
chunk__60996_61205 = G__61216;
count__60997_61206 = G__61217;
i__60998_61207 = G__61218;
continue;
}
} else {
var temp__5735__auto___61219__$1 = cljs.core.seq(seq__60993_61204);
if(temp__5735__auto___61219__$1){
var seq__60993_61220__$1 = temp__5735__auto___61219__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60993_61220__$1)){
var c__4609__auto___61221 = cljs.core.chunk_first(seq__60993_61220__$1);
var G__61222 = cljs.core.chunk_rest(seq__60993_61220__$1);
var G__61223 = c__4609__auto___61221;
var G__61224 = cljs.core.count(c__4609__auto___61221);
var G__61225 = (0);
seq__60993_61204 = G__61222;
chunk__60996_61205 = G__61223;
count__60997_61206 = G__61224;
i__60998_61207 = G__61225;
continue;
} else {
var node_61226 = cljs.core.first(seq__60993_61220__$1);
var path_match_61227 = shadow.cljs.devtools.client.browser.match_paths(node_61226.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61227)){
var new_link_61228 = (function (){var G__61010 = node_61226.cloneNode(true);
G__61010.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61227),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__61010;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61227], 0));

goog.dom.insertSiblingAfter(new_link_61228,node_61226);

goog.dom.removeNode(node_61226);


var G__61229 = cljs.core.next(seq__60993_61220__$1);
var G__61230 = null;
var G__61231 = (0);
var G__61232 = (0);
seq__60993_61204 = G__61229;
chunk__60996_61205 = G__61230;
count__60997_61206 = G__61231;
i__60998_61207 = G__61232;
continue;
} else {
var G__61233 = cljs.core.next(seq__60993_61220__$1);
var G__61234 = null;
var G__61235 = (0);
var G__61236 = (0);
seq__60993_61204 = G__61233;
chunk__60996_61205 = G__61234;
count__60997_61206 = G__61235;
i__60998_61207 = G__61236;
continue;
}
}
} else {
}
}
break;
}


var G__61237 = cljs.core.next(seq__60931__$1);
var G__61238 = null;
var G__61239 = (0);
var G__61240 = (0);
seq__60931 = G__61237;
chunk__60933 = G__61238;
count__60934 = G__61239;
i__60935 = G__61240;
continue;
} else {
var G__61241 = cljs.core.next(seq__60931__$1);
var G__61242 = null;
var G__61243 = (0);
var G__61244 = (0);
seq__60931 = G__61241;
chunk__60933 = G__61242;
count__60934 = G__61243;
i__60935 = G__61244;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__61016){
var map__61017 = p__61016;
var map__61017__$1 = (((((!((map__61017 == null))))?(((((map__61017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61017):map__61017);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61017__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61017__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__61019,done){
var map__61020 = p__61019;
var map__61020__$1 = (((((!((map__61020 == null))))?(((((map__61020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61020):map__61020);
var msg = map__61020__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61020__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61020__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61020__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61020__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__61022){
var map__61023 = p__61022;
var map__61023__$1 = (((((!((map__61023 == null))))?(((((map__61023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61023):map__61023);
var src = map__61023__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61023__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e61025){var e = e61025;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__61026,done){
var map__61027 = p__61026;
var map__61027__$1 = (((((!((map__61027 == null))))?(((((map__61027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61027):map__61027);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61027__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61027__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__61029){
var map__61030 = p__61029;
var map__61030__$1 = (((((!((map__61030 == null))))?(((((map__61030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61030):map__61030);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61030__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61030__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__61032,done){
var map__61033 = p__61032;
var map__61033__$1 = (((((!((map__61033 == null))))?(((((map__61033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61033):map__61033);
var msg = map__61033__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61033__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__61036_61259 = type;
var G__61036_61260__$1 = (((G__61036_61259 instanceof cljs.core.Keyword))?G__61036_61259.fqn:null);
switch (G__61036_61260__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__61038 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__61039 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__61040 = "POST";
var G__61041 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__61042 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__61038,G__61039,G__61040,G__61041,G__61042);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__61044 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__61043 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__61043.cljs$core$IFn$_invoke$arity$1 ? fexpr__61043.cljs$core$IFn$_invoke$arity$1(G__61044) : fexpr__61043.call(null,G__61044));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e61052){var e = e61052;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___61265 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___61265)){
var s_61266 = temp__5735__auto___61265;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_61266.onclose = (function (e){
return null;
}));

s_61266.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
