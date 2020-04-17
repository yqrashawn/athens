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
var len__4789__auto___60027 = arguments.length;
var i__4790__auto___60028 = (0);
while(true){
if((i__4790__auto___60028 < len__4789__auto___60027)){
args__4795__auto__.push((arguments[i__4790__auto___60028]));

var G__60029 = (i__4790__auto___60028 + (1));
i__4790__auto___60028 = G__60029;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq59678){
var G__59679 = cljs.core.first(seq59678);
var seq59678__$1 = cljs.core.next(seq59678);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59679,seq59678__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__59681){
var map__59682 = p__59681;
var map__59682__$1 = (((((!((map__59682 == null))))?(((((map__59682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59682):map__59682);
var src = map__59682__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59682__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59682__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__59687 = cljs.core.seq(sources);
var chunk__59688 = null;
var count__59689 = (0);
var i__59690 = (0);
while(true){
if((i__59690 < count__59689)){
var map__59713 = chunk__59688.cljs$core$IIndexed$_nth$arity$2(null,i__59690);
var map__59713__$1 = (((((!((map__59713 == null))))?(((((map__59713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59713):map__59713);
var src = map__59713__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59713__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59718){var e_60030 = e59718;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60030);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60030.message)].join('')));
}

var G__60031 = seq__59687;
var G__60032 = chunk__59688;
var G__60033 = count__59689;
var G__60034 = (i__59690 + (1));
seq__59687 = G__60031;
chunk__59688 = G__60032;
count__59689 = G__60033;
i__59690 = G__60034;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59687);
if(temp__5735__auto__){
var seq__59687__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59687__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59687__$1);
var G__60035 = cljs.core.chunk_rest(seq__59687__$1);
var G__60036 = c__4609__auto__;
var G__60037 = cljs.core.count(c__4609__auto__);
var G__60038 = (0);
seq__59687 = G__60035;
chunk__59688 = G__60036;
count__59689 = G__60037;
i__59690 = G__60038;
continue;
} else {
var map__59722 = cljs.core.first(seq__59687__$1);
var map__59722__$1 = (((((!((map__59722 == null))))?(((((map__59722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59722):map__59722);
var src = map__59722__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59722__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e59727){var e_60039 = e59727;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60039);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60039.message)].join('')));
}

var G__60040 = cljs.core.next(seq__59687__$1);
var G__60041 = null;
var G__60042 = (0);
var G__60043 = (0);
seq__59687 = G__60040;
chunk__59688 = G__60041;
count__59689 = G__60042;
i__59690 = G__60043;
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
var seq__59734 = cljs.core.seq(js_requires);
var chunk__59735 = null;
var count__59736 = (0);
var i__59737 = (0);
while(true){
if((i__59737 < count__59736)){
var js_ns = chunk__59735.cljs$core$IIndexed$_nth$arity$2(null,i__59737);
var require_str_60046 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60046);


var G__60047 = seq__59734;
var G__60048 = chunk__59735;
var G__60049 = count__59736;
var G__60050 = (i__59737 + (1));
seq__59734 = G__60047;
chunk__59735 = G__60048;
count__59736 = G__60049;
i__59737 = G__60050;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59734);
if(temp__5735__auto__){
var seq__59734__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59734__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59734__$1);
var G__60053 = cljs.core.chunk_rest(seq__59734__$1);
var G__60054 = c__4609__auto__;
var G__60055 = cljs.core.count(c__4609__auto__);
var G__60056 = (0);
seq__59734 = G__60053;
chunk__59735 = G__60054;
count__59736 = G__60055;
i__59737 = G__60056;
continue;
} else {
var js_ns = cljs.core.first(seq__59734__$1);
var require_str_60059 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60059);


var G__60061 = cljs.core.next(seq__59734__$1);
var G__60062 = null;
var G__60063 = (0);
var G__60064 = (0);
seq__59734 = G__60061;
chunk__59735 = G__60062;
count__59736 = G__60063;
i__59737 = G__60064;
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
var G__59749 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__59749) : callback.call(null,G__59749));
} else {
var G__59750 = shadow.cljs.devtools.client.env.files_url();
var G__59751 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__59752 = "POST";
var G__59753 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__59754 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__59750,G__59751,G__59752,G__59753,G__59754);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__59759){
var map__59760 = p__59759;
var map__59760__$1 = (((((!((map__59760 == null))))?(((((map__59760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59760):map__59760);
var msg = map__59760__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59760__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59760__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__59762 = info;
var map__59762__$1 = (((((!((map__59762 == null))))?(((((map__59762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59762):map__59762);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59762__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59762__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59764(s__59765){
return (new cljs.core.LazySeq(null,(function (){
var s__59765__$1 = s__59765;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__59765__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__59770 = cljs.core.first(xs__6292__auto__);
var map__59770__$1 = (((((!((map__59770 == null))))?(((((map__59770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59770):map__59770);
var src = map__59770__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59770__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__59765__$1,map__59770,map__59770__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59762,map__59762__$1,sources,compiled,map__59760,map__59760__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59764_$_iter__59766(s__59767){
return (new cljs.core.LazySeq(null,((function (s__59765__$1,map__59770,map__59770__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59762,map__59762__$1,sources,compiled,map__59760,map__59760__$1,msg,info,reload_info){
return (function (){
var s__59767__$1 = s__59767;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__59767__$1);
if(temp__5735__auto____$1){
var s__59767__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59767__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__59767__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__59769 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__59768 = (0);
while(true){
if((i__59768 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__59768);
cljs.core.chunk_append(b__59769,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__60073 = (i__59768 + (1));
i__59768 = G__60073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59769),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59764_$_iter__59766(cljs.core.chunk_rest(s__59767__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59769),null);
}
} else {
var warning = cljs.core.first(s__59767__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59764_$_iter__59766(cljs.core.rest(s__59767__$2)));
}
} else {
return null;
}
break;
}
});})(s__59765__$1,map__59770,map__59770__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59762,map__59762__$1,sources,compiled,map__59760,map__59760__$1,msg,info,reload_info))
,null,null));
});})(s__59765__$1,map__59770,map__59770__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__59762,map__59762__$1,sources,compiled,map__59760,map__59760__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__59764(cljs.core.rest(s__59765__$1)));
} else {
var G__60074 = cljs.core.rest(s__59765__$1);
s__59765__$1 = G__60074;
continue;
}
} else {
var G__60075 = cljs.core.rest(s__59765__$1);
s__59765__$1 = G__60075;
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
var seq__59777_60076 = cljs.core.seq(warnings);
var chunk__59778_60077 = null;
var count__59779_60078 = (0);
var i__59780_60079 = (0);
while(true){
if((i__59780_60079 < count__59779_60078)){
var map__59791_60080 = chunk__59778_60077.cljs$core$IIndexed$_nth$arity$2(null,i__59780_60079);
var map__59791_60081__$1 = (((((!((map__59791_60080 == null))))?(((((map__59791_60080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59791_60080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59791_60080):map__59791_60080);
var w_60082 = map__59791_60081__$1;
var msg_60083__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59791_60081__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59791_60081__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59791_60081__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59791_60081__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60086)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60084),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60085),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60083__$1)].join(''));


var G__60087 = seq__59777_60076;
var G__60088 = chunk__59778_60077;
var G__60089 = count__59779_60078;
var G__60090 = (i__59780_60079 + (1));
seq__59777_60076 = G__60087;
chunk__59778_60077 = G__60088;
count__59779_60078 = G__60089;
i__59780_60079 = G__60090;
continue;
} else {
var temp__5735__auto___60091 = cljs.core.seq(seq__59777_60076);
if(temp__5735__auto___60091){
var seq__59777_60092__$1 = temp__5735__auto___60091;
if(cljs.core.chunked_seq_QMARK_(seq__59777_60092__$1)){
var c__4609__auto___60093 = cljs.core.chunk_first(seq__59777_60092__$1);
var G__60094 = cljs.core.chunk_rest(seq__59777_60092__$1);
var G__60095 = c__4609__auto___60093;
var G__60096 = cljs.core.count(c__4609__auto___60093);
var G__60097 = (0);
seq__59777_60076 = G__60094;
chunk__59778_60077 = G__60095;
count__59779_60078 = G__60096;
i__59780_60079 = G__60097;
continue;
} else {
var map__59793_60098 = cljs.core.first(seq__59777_60092__$1);
var map__59793_60099__$1 = (((((!((map__59793_60098 == null))))?(((((map__59793_60098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59793_60098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59793_60098):map__59793_60098);
var w_60100 = map__59793_60099__$1;
var msg_60101__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793_60099__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793_60099__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793_60099__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59793_60099__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60104)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60102),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60103),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60101__$1)].join(''));


var G__60108 = cljs.core.next(seq__59777_60092__$1);
var G__60109 = null;
var G__60110 = (0);
var G__60111 = (0);
seq__59777_60076 = G__60108;
chunk__59778_60077 = G__60109;
count__59779_60078 = G__60110;
i__59780_60079 = G__60111;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59796){
var map__59797 = p__59796;
var map__59797__$1 = (((((!((map__59797 == null))))?(((((map__59797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59797):map__59797);
var src = map__59797__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59797__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59797__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59801){
var map__59802 = p__59801;
var map__59802__$1 = (((((!((map__59802 == null))))?(((((map__59802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59802):map__59802);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59802__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__59804){
var map__59805 = p__59804;
var map__59805__$1 = (((((!((map__59805 == null))))?(((((map__59805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59805):map__59805);
var rc = map__59805__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59805__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__59758_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__59758_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__59840){
var map__59841 = p__59840;
var map__59841__$1 = (((((!((map__59841 == null))))?(((((map__59841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59841):map__59841);
var msg = map__59841__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59841__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__59851 = cljs.core.seq(updates);
var chunk__59853 = null;
var count__59854 = (0);
var i__59855 = (0);
while(true){
if((i__59855 < count__59854)){
var path = chunk__59853.cljs$core$IIndexed$_nth$arity$2(null,i__59855);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59961_60136 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59964_60137 = null;
var count__59965_60138 = (0);
var i__59966_60139 = (0);
while(true){
if((i__59966_60139 < count__59965_60138)){
var node_60140 = chunk__59964_60137.cljs$core$IIndexed$_nth$arity$2(null,i__59966_60139);
var path_match_60141 = shadow.cljs.devtools.client.browser.match_paths(node_60140.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60141)){
var new_link_60142 = (function (){var G__59971 = node_60140.cloneNode(true);
G__59971.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60141),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59971;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60141], 0));

goog.dom.insertSiblingAfter(new_link_60142,node_60140);

goog.dom.removeNode(node_60140);


var G__60144 = seq__59961_60136;
var G__60145 = chunk__59964_60137;
var G__60146 = count__59965_60138;
var G__60147 = (i__59966_60139 + (1));
seq__59961_60136 = G__60144;
chunk__59964_60137 = G__60145;
count__59965_60138 = G__60146;
i__59966_60139 = G__60147;
continue;
} else {
var G__60148 = seq__59961_60136;
var G__60149 = chunk__59964_60137;
var G__60150 = count__59965_60138;
var G__60151 = (i__59966_60139 + (1));
seq__59961_60136 = G__60148;
chunk__59964_60137 = G__60149;
count__59965_60138 = G__60150;
i__59966_60139 = G__60151;
continue;
}
} else {
var temp__5735__auto___60152 = cljs.core.seq(seq__59961_60136);
if(temp__5735__auto___60152){
var seq__59961_60153__$1 = temp__5735__auto___60152;
if(cljs.core.chunked_seq_QMARK_(seq__59961_60153__$1)){
var c__4609__auto___60155 = cljs.core.chunk_first(seq__59961_60153__$1);
var G__60157 = cljs.core.chunk_rest(seq__59961_60153__$1);
var G__60158 = c__4609__auto___60155;
var G__60159 = cljs.core.count(c__4609__auto___60155);
var G__60160 = (0);
seq__59961_60136 = G__60157;
chunk__59964_60137 = G__60158;
count__59965_60138 = G__60159;
i__59966_60139 = G__60160;
continue;
} else {
var node_60161 = cljs.core.first(seq__59961_60153__$1);
var path_match_60164 = shadow.cljs.devtools.client.browser.match_paths(node_60161.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60164)){
var new_link_60165 = (function (){var G__59976 = node_60161.cloneNode(true);
G__59976.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60164),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59976;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60164], 0));

goog.dom.insertSiblingAfter(new_link_60165,node_60161);

goog.dom.removeNode(node_60161);


var G__60166 = cljs.core.next(seq__59961_60153__$1);
var G__60167 = null;
var G__60168 = (0);
var G__60169 = (0);
seq__59961_60136 = G__60166;
chunk__59964_60137 = G__60167;
count__59965_60138 = G__60168;
i__59966_60139 = G__60169;
continue;
} else {
var G__60170 = cljs.core.next(seq__59961_60153__$1);
var G__60171 = null;
var G__60172 = (0);
var G__60173 = (0);
seq__59961_60136 = G__60170;
chunk__59964_60137 = G__60171;
count__59965_60138 = G__60172;
i__59966_60139 = G__60173;
continue;
}
}
} else {
}
}
break;
}


var G__60175 = seq__59851;
var G__60176 = chunk__59853;
var G__60177 = count__59854;
var G__60178 = (i__59855 + (1));
seq__59851 = G__60175;
chunk__59853 = G__60176;
count__59854 = G__60177;
i__59855 = G__60178;
continue;
} else {
var G__60179 = seq__59851;
var G__60180 = chunk__59853;
var G__60181 = count__59854;
var G__60182 = (i__59855 + (1));
seq__59851 = G__60179;
chunk__59853 = G__60180;
count__59854 = G__60181;
i__59855 = G__60182;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59851);
if(temp__5735__auto__){
var seq__59851__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59851__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__59851__$1);
var G__60183 = cljs.core.chunk_rest(seq__59851__$1);
var G__60184 = c__4609__auto__;
var G__60185 = cljs.core.count(c__4609__auto__);
var G__60186 = (0);
seq__59851 = G__60183;
chunk__59853 = G__60184;
count__59854 = G__60185;
i__59855 = G__60186;
continue;
} else {
var path = cljs.core.first(seq__59851__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__59977_60188 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__59980_60189 = null;
var count__59981_60190 = (0);
var i__59982_60191 = (0);
while(true){
if((i__59982_60191 < count__59981_60190)){
var node_60192 = chunk__59980_60189.cljs$core$IIndexed$_nth$arity$2(null,i__59982_60191);
var path_match_60193 = shadow.cljs.devtools.client.browser.match_paths(node_60192.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60193)){
var new_link_60194 = (function (){var G__59988 = node_60192.cloneNode(true);
G__59988.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60193),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59988;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60193], 0));

goog.dom.insertSiblingAfter(new_link_60194,node_60192);

goog.dom.removeNode(node_60192);


var G__60195 = seq__59977_60188;
var G__60196 = chunk__59980_60189;
var G__60197 = count__59981_60190;
var G__60198 = (i__59982_60191 + (1));
seq__59977_60188 = G__60195;
chunk__59980_60189 = G__60196;
count__59981_60190 = G__60197;
i__59982_60191 = G__60198;
continue;
} else {
var G__60199 = seq__59977_60188;
var G__60200 = chunk__59980_60189;
var G__60201 = count__59981_60190;
var G__60202 = (i__59982_60191 + (1));
seq__59977_60188 = G__60199;
chunk__59980_60189 = G__60200;
count__59981_60190 = G__60201;
i__59982_60191 = G__60202;
continue;
}
} else {
var temp__5735__auto___60203__$1 = cljs.core.seq(seq__59977_60188);
if(temp__5735__auto___60203__$1){
var seq__59977_60204__$1 = temp__5735__auto___60203__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59977_60204__$1)){
var c__4609__auto___60205 = cljs.core.chunk_first(seq__59977_60204__$1);
var G__60206 = cljs.core.chunk_rest(seq__59977_60204__$1);
var G__60207 = c__4609__auto___60205;
var G__60208 = cljs.core.count(c__4609__auto___60205);
var G__60209 = (0);
seq__59977_60188 = G__60206;
chunk__59980_60189 = G__60207;
count__59981_60190 = G__60208;
i__59982_60191 = G__60209;
continue;
} else {
var node_60210 = cljs.core.first(seq__59977_60204__$1);
var path_match_60211 = shadow.cljs.devtools.client.browser.match_paths(node_60210.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60211)){
var new_link_60212 = (function (){var G__59989 = node_60210.cloneNode(true);
G__59989.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60211),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__59989;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60211], 0));

goog.dom.insertSiblingAfter(new_link_60212,node_60210);

goog.dom.removeNode(node_60210);


var G__60213 = cljs.core.next(seq__59977_60204__$1);
var G__60214 = null;
var G__60215 = (0);
var G__60216 = (0);
seq__59977_60188 = G__60213;
chunk__59980_60189 = G__60214;
count__59981_60190 = G__60215;
i__59982_60191 = G__60216;
continue;
} else {
var G__60217 = cljs.core.next(seq__59977_60204__$1);
var G__60218 = null;
var G__60219 = (0);
var G__60220 = (0);
seq__59977_60188 = G__60217;
chunk__59980_60189 = G__60218;
count__59981_60190 = G__60219;
i__59982_60191 = G__60220;
continue;
}
}
} else {
}
}
break;
}


var G__60221 = cljs.core.next(seq__59851__$1);
var G__60222 = null;
var G__60223 = (0);
var G__60224 = (0);
seq__59851 = G__60221;
chunk__59853 = G__60222;
count__59854 = G__60223;
i__59855 = G__60224;
continue;
} else {
var G__60225 = cljs.core.next(seq__59851__$1);
var G__60226 = null;
var G__60227 = (0);
var G__60228 = (0);
seq__59851 = G__60225;
chunk__59853 = G__60226;
count__59854 = G__60227;
i__59855 = G__60228;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__59991){
var map__59992 = p__59991;
var map__59992__$1 = (((((!((map__59992 == null))))?(((((map__59992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59992):map__59992);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59992__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59992__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__59994,done){
var map__59995 = p__59994;
var map__59995__$1 = (((((!((map__59995 == null))))?(((((map__59995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59995):map__59995);
var msg = map__59995__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59995__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59995__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59995__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59995__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__59997){
var map__59998 = p__59997;
var map__59998__$1 = (((((!((map__59998 == null))))?(((((map__59998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59998):map__59998);
var src = map__59998__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59998__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e60000){var e = e60000;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__60001,done){
var map__60002 = p__60001;
var map__60002__$1 = (((((!((map__60002 == null))))?(((((map__60002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60002):map__60002);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60002__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60002__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__60008){
var map__60009 = p__60008;
var map__60009__$1 = (((((!((map__60009 == null))))?(((((map__60009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60009):map__60009);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60009__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60009__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__60015,done){
var map__60016 = p__60015;
var map__60016__$1 = (((((!((map__60016 == null))))?(((((map__60016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60016):map__60016);
var msg = map__60016__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60016__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__60018_60252 = type;
var G__60018_60253__$1 = (((G__60018_60252 instanceof cljs.core.Keyword))?G__60018_60252.fqn:null);
switch (G__60018_60253__$1) {
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
var G__60019 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__60020 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__60021 = "POST";
var G__60022 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__60023 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__60019,G__60020,G__60021,G__60022,G__60023);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__60025 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__60024 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__60024.cljs$core$IFn$_invoke$arity$1 ? fexpr__60024.cljs$core$IFn$_invoke$arity$1(G__60025) : fexpr__60024.call(null,G__60025));
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
}catch (e60026){var e = e60026;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___60257 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___60257)){
var s_60258 = temp__5735__auto___60257;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_60258.onclose = (function (e){
return null;
}));

s_60258.close();

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
