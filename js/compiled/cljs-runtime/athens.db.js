goog.provide('athens.db');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('clojure.edn');
goog.require('re_posh.core');
goog.require('re_frame.core');
athens.db.str_to_db_tx = (function athens$db$str_to_db_tx(json_str){
debugger;


var x = json_str;
var x__$1 = JSON.parse(json_str);
var x__$2 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(x__$1);
var x__$3 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),x__$2);
var x__$4 = cljs.core.rest(x__$3);
var x__$5 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56006_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.edn.read_string,p1__56006_SHARP_);
}),x__$4);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56007_SHARP_){
return cljs.core.cons(new cljs.core.Keyword("db","add","db/add",235286841),p1__56007_SHARP_);
}),x__$5);
});
athens.db.schema = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("node","title","node/title",628940777),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)], null),new cljs.core.Keyword("attrs","lookup","attrs/lookup",849089348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null),new cljs.core.Keyword("block","children","block/children",-1040716209),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null);
athens.db.init_rfdb = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("user","name","user/name",1848814598),"Jeff",new cljs.core.Keyword("user","email","user/email",1419686391),"tangj12@gmail.com",new cljs.core.Keyword(null,"current-route","current-route",2067529448),null,new cljs.core.Keyword(null,"loading","loading",-737050189),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentArrayMap.EMPTY], null);
athens.db.init_dsdb = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(315),new cljs.core.Keyword("node","title","node/title",628940777),"NUT"], null)], null);
athens.db.dsdb = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(athens.db.schema);
(re_posh.core.connect_BANG_.cljs$core$IFn$_invoke$arity$1 ? re_posh.core.connect_BANG_.cljs$core$IFn$_invoke$arity$1(athens.db.dsdb) : re_posh.core.connect_BANG_.call(null,athens.db.dsdb));

//# sourceMappingURL=athens.db.js.map
