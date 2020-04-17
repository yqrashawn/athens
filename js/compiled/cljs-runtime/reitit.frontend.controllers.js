goog.provide('reitit.frontend.controllers');
goog.require('cljs.core');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__74135,match){
var map__74136 = p__74135;
var map__74136__$1 = (((((!((map__74136 == null))))?(((((map__74136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__74136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74136):map__74136);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74136__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74136__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74136__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4174__auto__ = identity;
if(cljs.core.truth_(and__4174__auto__)){
return parameters;
} else {
return and__4174__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__74138(s__74139){
return (new cljs.core.LazySeq(null,(function (){
var s__74139__$1 = s__74139;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__74139__$1);
if(temp__5735__auto__){
var s__74139__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74139__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__74139__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__74141 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__74140 = (0);
while(true){
if((i__74140 < size__4581__auto__)){
var vec__74143 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__74140);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74143,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74143,(1),null);
cljs.core.chunk_append(b__74141,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__74158 = (i__74140 + (1));
i__74140 = G__74158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74141),reitit$frontend$controllers$get_identity_$_iter__74138(cljs.core.chunk_rest(s__74139__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74141),null);
}
} else {
var vec__74146 = cljs.core.first(s__74139__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74146,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74146,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__74138(cljs.core.rest(s__74139__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__74149 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__74149) : f.call(null,G__74149));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__74150_74159 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__74151_74160 = null;
var count__74152_74161 = (0);
var i__74153_74162 = (0);
while(true){
if((i__74153_74162 < count__74152_74161)){
var controller_74163 = chunk__74151_74160.cljs$core$IIndexed$_nth$arity$2(null,i__74153_74162);
reitit.frontend.controllers.apply_controller(controller_74163,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__74164 = seq__74150_74159;
var G__74165 = chunk__74151_74160;
var G__74166 = count__74152_74161;
var G__74167 = (i__74153_74162 + (1));
seq__74150_74159 = G__74164;
chunk__74151_74160 = G__74165;
count__74152_74161 = G__74166;
i__74153_74162 = G__74167;
continue;
} else {
var temp__5735__auto___74168 = cljs.core.seq(seq__74150_74159);
if(temp__5735__auto___74168){
var seq__74150_74169__$1 = temp__5735__auto___74168;
if(cljs.core.chunked_seq_QMARK_(seq__74150_74169__$1)){
var c__4609__auto___74170 = cljs.core.chunk_first(seq__74150_74169__$1);
var G__74171 = cljs.core.chunk_rest(seq__74150_74169__$1);
var G__74172 = c__4609__auto___74170;
var G__74173 = cljs.core.count(c__4609__auto___74170);
var G__74174 = (0);
seq__74150_74159 = G__74171;
chunk__74151_74160 = G__74172;
count__74152_74161 = G__74173;
i__74153_74162 = G__74174;
continue;
} else {
var controller_74175 = cljs.core.first(seq__74150_74169__$1);
reitit.frontend.controllers.apply_controller(controller_74175,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__74176 = cljs.core.next(seq__74150_74169__$1);
var G__74177 = null;
var G__74178 = (0);
var G__74179 = (0);
seq__74150_74159 = G__74176;
chunk__74151_74160 = G__74177;
count__74152_74161 = G__74178;
i__74153_74162 = G__74179;
continue;
}
} else {
}
}
break;
}

var seq__74154_74180 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__74155_74181 = null;
var count__74156_74182 = (0);
var i__74157_74183 = (0);
while(true){
if((i__74157_74183 < count__74156_74182)){
var controller_74184 = chunk__74155_74181.cljs$core$IIndexed$_nth$arity$2(null,i__74157_74183);
reitit.frontend.controllers.apply_controller(controller_74184,new cljs.core.Keyword(null,"start","start",-355208981));


var G__74185 = seq__74154_74180;
var G__74186 = chunk__74155_74181;
var G__74187 = count__74156_74182;
var G__74188 = (i__74157_74183 + (1));
seq__74154_74180 = G__74185;
chunk__74155_74181 = G__74186;
count__74156_74182 = G__74187;
i__74157_74183 = G__74188;
continue;
} else {
var temp__5735__auto___74189 = cljs.core.seq(seq__74154_74180);
if(temp__5735__auto___74189){
var seq__74154_74190__$1 = temp__5735__auto___74189;
if(cljs.core.chunked_seq_QMARK_(seq__74154_74190__$1)){
var c__4609__auto___74191 = cljs.core.chunk_first(seq__74154_74190__$1);
var G__74192 = cljs.core.chunk_rest(seq__74154_74190__$1);
var G__74193 = c__4609__auto___74191;
var G__74194 = cljs.core.count(c__4609__auto___74191);
var G__74195 = (0);
seq__74154_74180 = G__74192;
chunk__74155_74181 = G__74193;
count__74156_74182 = G__74194;
i__74157_74183 = G__74195;
continue;
} else {
var controller_74196 = cljs.core.first(seq__74154_74190__$1);
reitit.frontend.controllers.apply_controller(controller_74196,new cljs.core.Keyword(null,"start","start",-355208981));


var G__74197 = cljs.core.next(seq__74154_74190__$1);
var G__74198 = null;
var G__74199 = (0);
var G__74200 = (0);
seq__74154_74180 = G__74197;
chunk__74155_74181 = G__74198;
count__74156_74182 = G__74199;
i__74157_74183 = G__74200;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
