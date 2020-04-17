goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__56159 = arguments.length;
switch (G__56159) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56160 = (function (f,blockable,meta56161){
this.f = f;
this.blockable = blockable;
this.meta56161 = meta56161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56162,meta56161__$1){
var self__ = this;
var _56162__$1 = this;
return (new cljs.core.async.t_cljs$core$async56160(self__.f,self__.blockable,meta56161__$1));
}));

(cljs.core.async.t_cljs$core$async56160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56162){
var self__ = this;
var _56162__$1 = this;
return self__.meta56161;
}));

(cljs.core.async.t_cljs$core$async56160.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56160.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56160.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async56160.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async56160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56161","meta56161",1777744481,null)], null);
}));

(cljs.core.async.t_cljs$core$async56160.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56160");

(cljs.core.async.t_cljs$core$async56160.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56160");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56160.
 */
cljs.core.async.__GT_t_cljs$core$async56160 = (function cljs$core$async$__GT_t_cljs$core$async56160(f__$1,blockable__$1,meta56161){
return (new cljs.core.async.t_cljs$core$async56160(f__$1,blockable__$1,meta56161));
});

}

return (new cljs.core.async.t_cljs$core$async56160(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__56166 = arguments.length;
switch (G__56166) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__56169 = arguments.length;
switch (G__56169) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__56171 = arguments.length;
switch (G__56171) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_57620 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57620) : fn1.call(null,val_57620));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_57620) : fn1.call(null,val_57620));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__56173 = arguments.length;
switch (G__56173) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___57629 = n;
var x_57630 = (0);
while(true){
if((x_57630 < n__4666__auto___57629)){
(a[x_57630] = x_57630);

var G__57639 = (x_57630 + (1));
x_57630 = G__57639;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56174 = (function (flag,meta56175){
this.flag = flag;
this.meta56175 = meta56175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56176,meta56175__$1){
var self__ = this;
var _56176__$1 = this;
return (new cljs.core.async.t_cljs$core$async56174(self__.flag,meta56175__$1));
}));

(cljs.core.async.t_cljs$core$async56174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56176){
var self__ = this;
var _56176__$1 = this;
return self__.meta56175;
}));

(cljs.core.async.t_cljs$core$async56174.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56174.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async56174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56175","meta56175",-706698182,null)], null);
}));

(cljs.core.async.t_cljs$core$async56174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56174");

(cljs.core.async.t_cljs$core$async56174.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56174.
 */
cljs.core.async.__GT_t_cljs$core$async56174 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56174(flag__$1,meta56175){
return (new cljs.core.async.t_cljs$core$async56174(flag__$1,meta56175));
});

}

return (new cljs.core.async.t_cljs$core$async56174(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56177 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56177 = (function (flag,cb,meta56178){
this.flag = flag;
this.cb = cb;
this.meta56178 = meta56178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56179,meta56178__$1){
var self__ = this;
var _56179__$1 = this;
return (new cljs.core.async.t_cljs$core$async56177(self__.flag,self__.cb,meta56178__$1));
}));

(cljs.core.async.t_cljs$core$async56177.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56179){
var self__ = this;
var _56179__$1 = this;
return self__.meta56178;
}));

(cljs.core.async.t_cljs$core$async56177.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56177.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56177.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56177.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async56177.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56178","meta56178",156021298,null)], null);
}));

(cljs.core.async.t_cljs$core$async56177.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56177");

(cljs.core.async.t_cljs$core$async56177.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56177");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56177.
 */
cljs.core.async.__GT_t_cljs$core$async56177 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56177(flag__$1,cb__$1,meta56178){
return (new cljs.core.async.t_cljs$core$async56177(flag__$1,cb__$1,meta56178));
});

}

return (new cljs.core.async.t_cljs$core$async56177(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56180_SHARP_){
var G__56182 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56180_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56182) : fret.call(null,G__56182));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56181_SHARP_){
var G__56183 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56181_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56183) : fret.call(null,G__56183));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__57673 = (i + (1));
i = G__57673;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___57682 = arguments.length;
var i__4790__auto___57683 = (0);
while(true){
if((i__4790__auto___57683 < len__4789__auto___57682)){
args__4795__auto__.push((arguments[i__4790__auto___57683]));

var G__57686 = (i__4790__auto___57683 + (1));
i__4790__auto___57683 = G__57686;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56186){
var map__56187 = p__56186;
var map__56187__$1 = (((((!((map__56187 == null))))?(((((map__56187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56187):map__56187);
var opts = map__56187__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56184){
var G__56185 = cljs.core.first(seq56184);
var seq56184__$1 = cljs.core.next(seq56184);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56185,seq56184__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__56190 = arguments.length;
switch (G__56190) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__56101__auto___57698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_56214){
var state_val_56215 = (state_56214[(1)]);
if((state_val_56215 === (7))){
var inst_56210 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
var statearr_56216_57699 = state_56214__$1;
(statearr_56216_57699[(2)] = inst_56210);

(statearr_56216_57699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (1))){
var state_56214__$1 = state_56214;
var statearr_56217_57700 = state_56214__$1;
(statearr_56217_57700[(2)] = null);

(statearr_56217_57700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (4))){
var inst_56193 = (state_56214[(7)]);
var inst_56193__$1 = (state_56214[(2)]);
var inst_56194 = (inst_56193__$1 == null);
var state_56214__$1 = (function (){var statearr_56218 = state_56214;
(statearr_56218[(7)] = inst_56193__$1);

return statearr_56218;
})();
if(cljs.core.truth_(inst_56194)){
var statearr_56219_57701 = state_56214__$1;
(statearr_56219_57701[(1)] = (5));

} else {
var statearr_56220_57702 = state_56214__$1;
(statearr_56220_57702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (13))){
var state_56214__$1 = state_56214;
var statearr_56221_57703 = state_56214__$1;
(statearr_56221_57703[(2)] = null);

(statearr_56221_57703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (6))){
var inst_56193 = (state_56214[(7)]);
var state_56214__$1 = state_56214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56214__$1,(11),to,inst_56193);
} else {
if((state_val_56215 === (3))){
var inst_56212 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56214__$1,inst_56212);
} else {
if((state_val_56215 === (12))){
var state_56214__$1 = state_56214;
var statearr_56222_57713 = state_56214__$1;
(statearr_56222_57713[(2)] = null);

(statearr_56222_57713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (2))){
var state_56214__$1 = state_56214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56214__$1,(4),from);
} else {
if((state_val_56215 === (11))){
var inst_56203 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
if(cljs.core.truth_(inst_56203)){
var statearr_56223_57716 = state_56214__$1;
(statearr_56223_57716[(1)] = (12));

} else {
var statearr_56224_57717 = state_56214__$1;
(statearr_56224_57717[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (9))){
var state_56214__$1 = state_56214;
var statearr_56225_57720 = state_56214__$1;
(statearr_56225_57720[(2)] = null);

(statearr_56225_57720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (5))){
var state_56214__$1 = state_56214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56226_57723 = state_56214__$1;
(statearr_56226_57723[(1)] = (8));

} else {
var statearr_56227_57724 = state_56214__$1;
(statearr_56227_57724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (14))){
var inst_56208 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
var statearr_56228_57725 = state_56214__$1;
(statearr_56228_57725[(2)] = inst_56208);

(statearr_56228_57725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (10))){
var inst_56200 = (state_56214[(2)]);
var state_56214__$1 = state_56214;
var statearr_56229_57728 = state_56214__$1;
(statearr_56229_57728[(2)] = inst_56200);

(statearr_56229_57728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56215 === (8))){
var inst_56197 = cljs.core.async.close_BANG_(to);
var state_56214__$1 = state_56214;
var statearr_56230_57729 = state_56214__$1;
(statearr_56230_57729[(2)] = inst_56197);

(statearr_56230_57729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56001__auto__ = null;
var cljs$core$async$state_machine__56001__auto____0 = (function (){
var statearr_56231 = [null,null,null,null,null,null,null,null];
(statearr_56231[(0)] = cljs$core$async$state_machine__56001__auto__);

(statearr_56231[(1)] = (1));

return statearr_56231;
});
var cljs$core$async$state_machine__56001__auto____1 = (function (state_56214){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_56214);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e56232){if((e56232 instanceof Object)){
var ex__56004__auto__ = e56232;
var statearr_56233_57733 = state_56214;
(statearr_56233_57733[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56232;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57735 = state_56214;
state_56214 = G__57735;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$state_machine__56001__auto__ = function(state_56214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56001__auto____1.call(this,state_56214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56001__auto____0;
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56001__auto____1;
return cljs$core$async$state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_56234 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_56234[(6)] = c__56101__auto___57698);

return statearr_56234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__56235){
var vec__56236 = p__56235;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56236,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56236,(1),null);
var job = vec__56236;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__56101__auto___57800 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_56243){
var state_val_56244 = (state_56243[(1)]);
if((state_val_56244 === (1))){
var state_56243__$1 = state_56243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56243__$1,(2),res,v);
} else {
if((state_val_56244 === (2))){
var inst_56240 = (state_56243[(2)]);
var inst_56241 = cljs.core.async.close_BANG_(res);
var state_56243__$1 = (function (){var statearr_56245 = state_56243;
(statearr_56245[(7)] = inst_56240);

return statearr_56245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56243__$1,inst_56241);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0 = (function (){
var statearr_56246 = [null,null,null,null,null,null,null,null];
(statearr_56246[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__);

(statearr_56246[(1)] = (1));

return statearr_56246;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1 = (function (state_56243){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_56243);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e56247){if((e56247 instanceof Object)){
var ex__56004__auto__ = e56247;
var statearr_56248_57810 = state_56243;
(statearr_56248_57810[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57811 = state_56243;
state_56243 = G__57811;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__ = function(state_56243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1.call(this,state_56243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_56249 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_56249[(6)] = c__56101__auto___57800);

return statearr_56249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__56250){
var vec__56251 = p__56250;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56251,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56251,(1),null);
var job = vec__56251;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___57818 = n;
var __57819 = (0);
while(true){
if((__57819 < n__4666__auto___57818)){
var G__56254_57820 = type;
var G__56254_57821__$1 = (((G__56254_57820 instanceof cljs.core.Keyword))?G__56254_57820.fqn:null);
switch (G__56254_57821__$1) {
case "compute":
var c__56101__auto___57823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57819,c__56101__auto___57823,G__56254_57820,G__56254_57821__$1,n__4666__auto___57818,jobs,results,process,async){
return (function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = ((function (__57819,c__56101__auto___57823,G__56254_57820,G__56254_57821__$1,n__4666__auto___57818,jobs,results,process,async){
return (function (state_56267){
var state_val_56268 = (state_56267[(1)]);
if((state_val_56268 === (1))){
var state_56267__$1 = state_56267;
var statearr_56269_57824 = state_56267__$1;
(statearr_56269_57824[(2)] = null);

(statearr_56269_57824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56268 === (2))){
var state_56267__$1 = state_56267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56267__$1,(4),jobs);
} else {
if((state_val_56268 === (3))){
var inst_56265 = (state_56267[(2)]);
var state_56267__$1 = state_56267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56267__$1,inst_56265);
} else {
if((state_val_56268 === (4))){
var inst_56257 = (state_56267[(2)]);
var inst_56258 = process(inst_56257);
var state_56267__$1 = state_56267;
if(cljs.core.truth_(inst_56258)){
var statearr_56270_57825 = state_56267__$1;
(statearr_56270_57825[(1)] = (5));

} else {
var statearr_56271_57826 = state_56267__$1;
(statearr_56271_57826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56268 === (5))){
var state_56267__$1 = state_56267;
var statearr_56272_57827 = state_56267__$1;
(statearr_56272_57827[(2)] = null);

(statearr_56272_57827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56268 === (6))){
var state_56267__$1 = state_56267;
var statearr_56273_57828 = state_56267__$1;
(statearr_56273_57828[(2)] = null);

(statearr_56273_57828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56268 === (7))){
var inst_56263 = (state_56267[(2)]);
var state_56267__$1 = state_56267;
var statearr_56274_57835 = state_56267__$1;
(statearr_56274_57835[(2)] = inst_56263);

(statearr_56274_57835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57819,c__56101__auto___57823,G__56254_57820,G__56254_57821__$1,n__4666__auto___57818,jobs,results,process,async))
;
return ((function (__57819,switch__56000__auto__,c__56101__auto___57823,G__56254_57820,G__56254_57821__$1,n__4666__auto___57818,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0 = (function (){
var statearr_56275 = [null,null,null,null,null,null,null];
(statearr_56275[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__);

(statearr_56275[(1)] = (1));

return statearr_56275;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1 = (function (state_56267){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_56267);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e56276){if((e56276 instanceof Object)){
var ex__56004__auto__ = e56276;
var statearr_56277_57837 = state_56267;
(statearr_56277_57837[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56276;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57838 = state_56267;
state_56267 = G__57838;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__ = function(state_56267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1.call(this,state_56267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__;
})()
;})(__57819,switch__56000__auto__,c__56101__auto___57823,G__56254_57820,G__56254_57821__$1,n__4666__auto___57818,jobs,results,process,async))
})();
var state__56103__auto__ = (function (){var statearr_56278 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_56278[(6)] = c__56101__auto___57823);

return statearr_56278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
});})(__57819,c__56101__auto___57823,G__56254_57820,G__56254_57821__$1,n__4666__auto___57818,jobs,results,process,async))
);


break;
case "async":
var c__56101__auto___57839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__57819,c__56101__auto___57839,G__56254_57820,G__56254_57821__$1,n__4666__auto___57818,jobs,results,process,async){
return (function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = ((function (__57819,c__56101__auto___57839,G__56254_57820,G__56254_57821__$1,n__4666__auto___57818,jobs,results,process,async){
return (function (state_56291){
var state_val_56292 = (state_56291[(1)]);
if((state_val_56292 === (1))){
var state_56291__$1 = state_56291;
var statearr_56293_57840 = state_56291__$1;
(statearr_56293_57840[(2)] = null);

(statearr_56293_57840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56292 === (2))){
var state_56291__$1 = state_56291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56291__$1,(4),jobs);
} else {
if((state_val_56292 === (3))){
var inst_56289 = (state_56291[(2)]);
var state_56291__$1 = state_56291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56291__$1,inst_56289);
} else {
if((state_val_56292 === (4))){
var inst_56281 = (state_56291[(2)]);
var inst_56282 = async(inst_56281);
var state_56291__$1 = state_56291;
if(cljs.core.truth_(inst_56282)){
var statearr_56294_57841 = state_56291__$1;
(statearr_56294_57841[(1)] = (5));

} else {
var statearr_56295_57842 = state_56291__$1;
(statearr_56295_57842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56292 === (5))){
var state_56291__$1 = state_56291;
var statearr_56296_57843 = state_56291__$1;
(statearr_56296_57843[(2)] = null);

(statearr_56296_57843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56292 === (6))){
var state_56291__$1 = state_56291;
var statearr_56297_57844 = state_56291__$1;
(statearr_56297_57844[(2)] = null);

(statearr_56297_57844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56292 === (7))){
var inst_56287 = (state_56291[(2)]);
var state_56291__$1 = state_56291;
var statearr_56298_57845 = state_56291__$1;
(statearr_56298_57845[(2)] = inst_56287);

(statearr_56298_57845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__57819,c__56101__auto___57839,G__56254_57820,G__56254_57821__$1,n__4666__auto___57818,jobs,results,process,async))
;
return ((function (__57819,switch__56000__auto__,c__56101__auto___57839,G__56254_57820,G__56254_57821__$1,n__4666__auto___57818,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0 = (function (){
var statearr_56299 = [null,null,null,null,null,null,null];
(statearr_56299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__);

(statearr_56299[(1)] = (1));

return statearr_56299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1 = (function (state_56291){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_56291);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e56300){if((e56300 instanceof Object)){
var ex__56004__auto__ = e56300;
var statearr_56301_57848 = state_56291;
(statearr_56301_57848[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56300;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57849 = state_56291;
state_56291 = G__57849;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__ = function(state_56291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1.call(this,state_56291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__;
})()
;})(__57819,switch__56000__auto__,c__56101__auto___57839,G__56254_57820,G__56254_57821__$1,n__4666__auto___57818,jobs,results,process,async))
})();
var state__56103__auto__ = (function (){var statearr_56302 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_56302[(6)] = c__56101__auto___57839);

return statearr_56302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
});})(__57819,c__56101__auto___57839,G__56254_57820,G__56254_57821__$1,n__4666__auto___57818,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56254_57821__$1)].join('')));

}

var G__57853 = (__57819 + (1));
__57819 = G__57853;
continue;
} else {
}
break;
}

var c__56101__auto___57854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_56324){
var state_val_56325 = (state_56324[(1)]);
if((state_val_56325 === (7))){
var inst_56320 = (state_56324[(2)]);
var state_56324__$1 = state_56324;
var statearr_56326_57858 = state_56324__$1;
(statearr_56326_57858[(2)] = inst_56320);

(statearr_56326_57858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56325 === (1))){
var state_56324__$1 = state_56324;
var statearr_56327_57860 = state_56324__$1;
(statearr_56327_57860[(2)] = null);

(statearr_56327_57860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56325 === (4))){
var inst_56305 = (state_56324[(7)]);
var inst_56305__$1 = (state_56324[(2)]);
var inst_56306 = (inst_56305__$1 == null);
var state_56324__$1 = (function (){var statearr_56328 = state_56324;
(statearr_56328[(7)] = inst_56305__$1);

return statearr_56328;
})();
if(cljs.core.truth_(inst_56306)){
var statearr_56329_57862 = state_56324__$1;
(statearr_56329_57862[(1)] = (5));

} else {
var statearr_56330_57864 = state_56324__$1;
(statearr_56330_57864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56325 === (6))){
var inst_56305 = (state_56324[(7)]);
var inst_56310 = (state_56324[(8)]);
var inst_56310__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_56311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56312 = [inst_56305,inst_56310__$1];
var inst_56313 = (new cljs.core.PersistentVector(null,2,(5),inst_56311,inst_56312,null));
var state_56324__$1 = (function (){var statearr_56331 = state_56324;
(statearr_56331[(8)] = inst_56310__$1);

return statearr_56331;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56324__$1,(8),jobs,inst_56313);
} else {
if((state_val_56325 === (3))){
var inst_56322 = (state_56324[(2)]);
var state_56324__$1 = state_56324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56324__$1,inst_56322);
} else {
if((state_val_56325 === (2))){
var state_56324__$1 = state_56324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56324__$1,(4),from);
} else {
if((state_val_56325 === (9))){
var inst_56317 = (state_56324[(2)]);
var state_56324__$1 = (function (){var statearr_56332 = state_56324;
(statearr_56332[(9)] = inst_56317);

return statearr_56332;
})();
var statearr_56333_57865 = state_56324__$1;
(statearr_56333_57865[(2)] = null);

(statearr_56333_57865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56325 === (5))){
var inst_56308 = cljs.core.async.close_BANG_(jobs);
var state_56324__$1 = state_56324;
var statearr_56334_57866 = state_56324__$1;
(statearr_56334_57866[(2)] = inst_56308);

(statearr_56334_57866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56325 === (8))){
var inst_56310 = (state_56324[(8)]);
var inst_56315 = (state_56324[(2)]);
var state_56324__$1 = (function (){var statearr_56335 = state_56324;
(statearr_56335[(10)] = inst_56315);

return statearr_56335;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56324__$1,(9),results,inst_56310);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0 = (function (){
var statearr_56336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56336[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__);

(statearr_56336[(1)] = (1));

return statearr_56336;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1 = (function (state_56324){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_56324);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e56337){if((e56337 instanceof Object)){
var ex__56004__auto__ = e56337;
var statearr_56338_57867 = state_56324;
(statearr_56338_57867[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57868 = state_56324;
state_56324 = G__57868;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__ = function(state_56324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1.call(this,state_56324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_56339 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_56339[(6)] = c__56101__auto___57854);

return statearr_56339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


var c__56101__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_56377){
var state_val_56378 = (state_56377[(1)]);
if((state_val_56378 === (7))){
var inst_56373 = (state_56377[(2)]);
var state_56377__$1 = state_56377;
var statearr_56379_57869 = state_56377__$1;
(statearr_56379_57869[(2)] = inst_56373);

(statearr_56379_57869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (20))){
var state_56377__$1 = state_56377;
var statearr_56380_57870 = state_56377__$1;
(statearr_56380_57870[(2)] = null);

(statearr_56380_57870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (1))){
var state_56377__$1 = state_56377;
var statearr_56381_57871 = state_56377__$1;
(statearr_56381_57871[(2)] = null);

(statearr_56381_57871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (4))){
var inst_56342 = (state_56377[(7)]);
var inst_56342__$1 = (state_56377[(2)]);
var inst_56343 = (inst_56342__$1 == null);
var state_56377__$1 = (function (){var statearr_56382 = state_56377;
(statearr_56382[(7)] = inst_56342__$1);

return statearr_56382;
})();
if(cljs.core.truth_(inst_56343)){
var statearr_56383_57872 = state_56377__$1;
(statearr_56383_57872[(1)] = (5));

} else {
var statearr_56384_57874 = state_56377__$1;
(statearr_56384_57874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (15))){
var inst_56355 = (state_56377[(8)]);
var state_56377__$1 = state_56377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56377__$1,(18),to,inst_56355);
} else {
if((state_val_56378 === (21))){
var inst_56368 = (state_56377[(2)]);
var state_56377__$1 = state_56377;
var statearr_56385_57878 = state_56377__$1;
(statearr_56385_57878[(2)] = inst_56368);

(statearr_56385_57878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (13))){
var inst_56370 = (state_56377[(2)]);
var state_56377__$1 = (function (){var statearr_56386 = state_56377;
(statearr_56386[(9)] = inst_56370);

return statearr_56386;
})();
var statearr_56387_57890 = state_56377__$1;
(statearr_56387_57890[(2)] = null);

(statearr_56387_57890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (6))){
var inst_56342 = (state_56377[(7)]);
var state_56377__$1 = state_56377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56377__$1,(11),inst_56342);
} else {
if((state_val_56378 === (17))){
var inst_56363 = (state_56377[(2)]);
var state_56377__$1 = state_56377;
if(cljs.core.truth_(inst_56363)){
var statearr_56388_57891 = state_56377__$1;
(statearr_56388_57891[(1)] = (19));

} else {
var statearr_56389_57892 = state_56377__$1;
(statearr_56389_57892[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (3))){
var inst_56375 = (state_56377[(2)]);
var state_56377__$1 = state_56377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56377__$1,inst_56375);
} else {
if((state_val_56378 === (12))){
var inst_56352 = (state_56377[(10)]);
var state_56377__$1 = state_56377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56377__$1,(14),inst_56352);
} else {
if((state_val_56378 === (2))){
var state_56377__$1 = state_56377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56377__$1,(4),results);
} else {
if((state_val_56378 === (19))){
var state_56377__$1 = state_56377;
var statearr_56390_57893 = state_56377__$1;
(statearr_56390_57893[(2)] = null);

(statearr_56390_57893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (11))){
var inst_56352 = (state_56377[(2)]);
var state_56377__$1 = (function (){var statearr_56391 = state_56377;
(statearr_56391[(10)] = inst_56352);

return statearr_56391;
})();
var statearr_56392_57894 = state_56377__$1;
(statearr_56392_57894[(2)] = null);

(statearr_56392_57894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (9))){
var state_56377__$1 = state_56377;
var statearr_56393_57901 = state_56377__$1;
(statearr_56393_57901[(2)] = null);

(statearr_56393_57901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (5))){
var state_56377__$1 = state_56377;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56394_57902 = state_56377__$1;
(statearr_56394_57902[(1)] = (8));

} else {
var statearr_56395_57903 = state_56377__$1;
(statearr_56395_57903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (14))){
var inst_56355 = (state_56377[(8)]);
var inst_56355__$1 = (state_56377[(2)]);
var inst_56356 = (inst_56355__$1 == null);
var inst_56357 = cljs.core.not(inst_56356);
var state_56377__$1 = (function (){var statearr_56396 = state_56377;
(statearr_56396[(8)] = inst_56355__$1);

return statearr_56396;
})();
if(inst_56357){
var statearr_56397_57904 = state_56377__$1;
(statearr_56397_57904[(1)] = (15));

} else {
var statearr_56398_57905 = state_56377__$1;
(statearr_56398_57905[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (16))){
var state_56377__$1 = state_56377;
var statearr_56399_57906 = state_56377__$1;
(statearr_56399_57906[(2)] = false);

(statearr_56399_57906[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (10))){
var inst_56349 = (state_56377[(2)]);
var state_56377__$1 = state_56377;
var statearr_56400_57907 = state_56377__$1;
(statearr_56400_57907[(2)] = inst_56349);

(statearr_56400_57907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (18))){
var inst_56360 = (state_56377[(2)]);
var state_56377__$1 = state_56377;
var statearr_56401_57908 = state_56377__$1;
(statearr_56401_57908[(2)] = inst_56360);

(statearr_56401_57908[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56378 === (8))){
var inst_56346 = cljs.core.async.close_BANG_(to);
var state_56377__$1 = state_56377;
var statearr_56402_57909 = state_56377__$1;
(statearr_56402_57909[(2)] = inst_56346);

(statearr_56402_57909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0 = (function (){
var statearr_56403 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__);

(statearr_56403[(1)] = (1));

return statearr_56403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1 = (function (state_56377){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_56377);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e56404){if((e56404 instanceof Object)){
var ex__56004__auto__ = e56404;
var statearr_56405_57910 = state_56377;
(statearr_56405_57910[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56404;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57911 = state_56377;
state_56377 = G__57911;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__ = function(state_56377){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1.call(this,state_56377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56001__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_56406 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_56406[(6)] = c__56101__auto__);

return statearr_56406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));

return c__56101__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__56408 = arguments.length;
switch (G__56408) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__56410 = arguments.length;
switch (G__56410) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__56412 = arguments.length;
switch (G__56412) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__56101__auto___57927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_56438){
var state_val_56439 = (state_56438[(1)]);
if((state_val_56439 === (7))){
var inst_56434 = (state_56438[(2)]);
var state_56438__$1 = state_56438;
var statearr_56440_57928 = state_56438__$1;
(statearr_56440_57928[(2)] = inst_56434);

(statearr_56440_57928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56439 === (1))){
var state_56438__$1 = state_56438;
var statearr_56441_57929 = state_56438__$1;
(statearr_56441_57929[(2)] = null);

(statearr_56441_57929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56439 === (4))){
var inst_56415 = (state_56438[(7)]);
var inst_56415__$1 = (state_56438[(2)]);
var inst_56416 = (inst_56415__$1 == null);
var state_56438__$1 = (function (){var statearr_56442 = state_56438;
(statearr_56442[(7)] = inst_56415__$1);

return statearr_56442;
})();
if(cljs.core.truth_(inst_56416)){
var statearr_56443_57930 = state_56438__$1;
(statearr_56443_57930[(1)] = (5));

} else {
var statearr_56444_57931 = state_56438__$1;
(statearr_56444_57931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56439 === (13))){
var state_56438__$1 = state_56438;
var statearr_56445_57932 = state_56438__$1;
(statearr_56445_57932[(2)] = null);

(statearr_56445_57932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56439 === (6))){
var inst_56415 = (state_56438[(7)]);
var inst_56421 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56415) : p.call(null,inst_56415));
var state_56438__$1 = state_56438;
if(cljs.core.truth_(inst_56421)){
var statearr_56446_57933 = state_56438__$1;
(statearr_56446_57933[(1)] = (9));

} else {
var statearr_56447_57934 = state_56438__$1;
(statearr_56447_57934[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56439 === (3))){
var inst_56436 = (state_56438[(2)]);
var state_56438__$1 = state_56438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56438__$1,inst_56436);
} else {
if((state_val_56439 === (12))){
var state_56438__$1 = state_56438;
var statearr_56448_57935 = state_56438__$1;
(statearr_56448_57935[(2)] = null);

(statearr_56448_57935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56439 === (2))){
var state_56438__$1 = state_56438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56438__$1,(4),ch);
} else {
if((state_val_56439 === (11))){
var inst_56415 = (state_56438[(7)]);
var inst_56425 = (state_56438[(2)]);
var state_56438__$1 = state_56438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56438__$1,(8),inst_56425,inst_56415);
} else {
if((state_val_56439 === (9))){
var state_56438__$1 = state_56438;
var statearr_56449_57942 = state_56438__$1;
(statearr_56449_57942[(2)] = tc);

(statearr_56449_57942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56439 === (5))){
var inst_56418 = cljs.core.async.close_BANG_(tc);
var inst_56419 = cljs.core.async.close_BANG_(fc);
var state_56438__$1 = (function (){var statearr_56450 = state_56438;
(statearr_56450[(8)] = inst_56418);

return statearr_56450;
})();
var statearr_56451_57943 = state_56438__$1;
(statearr_56451_57943[(2)] = inst_56419);

(statearr_56451_57943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56439 === (14))){
var inst_56432 = (state_56438[(2)]);
var state_56438__$1 = state_56438;
var statearr_56452_57944 = state_56438__$1;
(statearr_56452_57944[(2)] = inst_56432);

(statearr_56452_57944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56439 === (10))){
var state_56438__$1 = state_56438;
var statearr_56453_57945 = state_56438__$1;
(statearr_56453_57945[(2)] = fc);

(statearr_56453_57945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56439 === (8))){
var inst_56427 = (state_56438[(2)]);
var state_56438__$1 = state_56438;
if(cljs.core.truth_(inst_56427)){
var statearr_56454_57946 = state_56438__$1;
(statearr_56454_57946[(1)] = (12));

} else {
var statearr_56455_57947 = state_56438__$1;
(statearr_56455_57947[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56001__auto__ = null;
var cljs$core$async$state_machine__56001__auto____0 = (function (){
var statearr_56456 = [null,null,null,null,null,null,null,null,null];
(statearr_56456[(0)] = cljs$core$async$state_machine__56001__auto__);

(statearr_56456[(1)] = (1));

return statearr_56456;
});
var cljs$core$async$state_machine__56001__auto____1 = (function (state_56438){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_56438);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e56457){if((e56457 instanceof Object)){
var ex__56004__auto__ = e56457;
var statearr_56458_57948 = state_56438;
(statearr_56458_57948[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57949 = state_56438;
state_56438 = G__57949;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$state_machine__56001__auto__ = function(state_56438){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56001__auto____1.call(this,state_56438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56001__auto____0;
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56001__auto____1;
return cljs$core$async$state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_56459 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_56459[(6)] = c__56101__auto___57927);

return statearr_56459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__56101__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_56480){
var state_val_56481 = (state_56480[(1)]);
if((state_val_56481 === (7))){
var inst_56476 = (state_56480[(2)]);
var state_56480__$1 = state_56480;
var statearr_56482_57950 = state_56480__$1;
(statearr_56482_57950[(2)] = inst_56476);

(statearr_56482_57950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (1))){
var inst_56460 = init;
var state_56480__$1 = (function (){var statearr_56483 = state_56480;
(statearr_56483[(7)] = inst_56460);

return statearr_56483;
})();
var statearr_56484_57951 = state_56480__$1;
(statearr_56484_57951[(2)] = null);

(statearr_56484_57951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (4))){
var inst_56463 = (state_56480[(8)]);
var inst_56463__$1 = (state_56480[(2)]);
var inst_56464 = (inst_56463__$1 == null);
var state_56480__$1 = (function (){var statearr_56485 = state_56480;
(statearr_56485[(8)] = inst_56463__$1);

return statearr_56485;
})();
if(cljs.core.truth_(inst_56464)){
var statearr_56486_57952 = state_56480__$1;
(statearr_56486_57952[(1)] = (5));

} else {
var statearr_56487_57953 = state_56480__$1;
(statearr_56487_57953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (6))){
var inst_56460 = (state_56480[(7)]);
var inst_56467 = (state_56480[(9)]);
var inst_56463 = (state_56480[(8)]);
var inst_56467__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_56460,inst_56463) : f.call(null,inst_56460,inst_56463));
var inst_56468 = cljs.core.reduced_QMARK_(inst_56467__$1);
var state_56480__$1 = (function (){var statearr_56488 = state_56480;
(statearr_56488[(9)] = inst_56467__$1);

return statearr_56488;
})();
if(inst_56468){
var statearr_56489_57954 = state_56480__$1;
(statearr_56489_57954[(1)] = (8));

} else {
var statearr_56490_57955 = state_56480__$1;
(statearr_56490_57955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (3))){
var inst_56478 = (state_56480[(2)]);
var state_56480__$1 = state_56480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56480__$1,inst_56478);
} else {
if((state_val_56481 === (2))){
var state_56480__$1 = state_56480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56480__$1,(4),ch);
} else {
if((state_val_56481 === (9))){
var inst_56467 = (state_56480[(9)]);
var inst_56460 = inst_56467;
var state_56480__$1 = (function (){var statearr_56491 = state_56480;
(statearr_56491[(7)] = inst_56460);

return statearr_56491;
})();
var statearr_56492_57956 = state_56480__$1;
(statearr_56492_57956[(2)] = null);

(statearr_56492_57956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (5))){
var inst_56460 = (state_56480[(7)]);
var state_56480__$1 = state_56480;
var statearr_56493_57957 = state_56480__$1;
(statearr_56493_57957[(2)] = inst_56460);

(statearr_56493_57957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (10))){
var inst_56474 = (state_56480[(2)]);
var state_56480__$1 = state_56480;
var statearr_56494_57959 = state_56480__$1;
(statearr_56494_57959[(2)] = inst_56474);

(statearr_56494_57959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56481 === (8))){
var inst_56467 = (state_56480[(9)]);
var inst_56470 = cljs.core.deref(inst_56467);
var state_56480__$1 = state_56480;
var statearr_56495_57961 = state_56480__$1;
(statearr_56495_57961[(2)] = inst_56470);

(statearr_56495_57961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__56001__auto__ = null;
var cljs$core$async$reduce_$_state_machine__56001__auto____0 = (function (){
var statearr_56496 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56496[(0)] = cljs$core$async$reduce_$_state_machine__56001__auto__);

(statearr_56496[(1)] = (1));

return statearr_56496;
});
var cljs$core$async$reduce_$_state_machine__56001__auto____1 = (function (state_56480){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_56480);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e56497){if((e56497 instanceof Object)){
var ex__56004__auto__ = e56497;
var statearr_56498_57966 = state_56480;
(statearr_56498_57966[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56497;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57967 = state_56480;
state_56480 = G__57967;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__56001__auto__ = function(state_56480){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__56001__auto____1.call(this,state_56480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__56001__auto____0;
cljs$core$async$reduce_$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__56001__auto____1;
return cljs$core$async$reduce_$_state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_56499 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_56499[(6)] = c__56101__auto__);

return statearr_56499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));

return c__56101__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__56101__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_56505){
var state_val_56506 = (state_56505[(1)]);
if((state_val_56506 === (1))){
var inst_56500 = cljs.core.async.reduce(f__$1,init,ch);
var state_56505__$1 = state_56505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56505__$1,(2),inst_56500);
} else {
if((state_val_56506 === (2))){
var inst_56502 = (state_56505[(2)]);
var inst_56503 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_56502) : f__$1.call(null,inst_56502));
var state_56505__$1 = state_56505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56505__$1,inst_56503);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__56001__auto__ = null;
var cljs$core$async$transduce_$_state_machine__56001__auto____0 = (function (){
var statearr_56507 = [null,null,null,null,null,null,null];
(statearr_56507[(0)] = cljs$core$async$transduce_$_state_machine__56001__auto__);

(statearr_56507[(1)] = (1));

return statearr_56507;
});
var cljs$core$async$transduce_$_state_machine__56001__auto____1 = (function (state_56505){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_56505);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e56508){if((e56508 instanceof Object)){
var ex__56004__auto__ = e56508;
var statearr_56509_57971 = state_56505;
(statearr_56509_57971[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57973 = state_56505;
state_56505 = G__57973;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__56001__auto__ = function(state_56505){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__56001__auto____1.call(this,state_56505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__56001__auto____0;
cljs$core$async$transduce_$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__56001__auto____1;
return cljs$core$async$transduce_$_state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_56510 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_56510[(6)] = c__56101__auto__);

return statearr_56510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));

return c__56101__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__56512 = arguments.length;
switch (G__56512) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__56101__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_56537){
var state_val_56538 = (state_56537[(1)]);
if((state_val_56538 === (7))){
var inst_56519 = (state_56537[(2)]);
var state_56537__$1 = state_56537;
var statearr_56539_57977 = state_56537__$1;
(statearr_56539_57977[(2)] = inst_56519);

(statearr_56539_57977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56538 === (1))){
var inst_56513 = cljs.core.seq(coll);
var inst_56514 = inst_56513;
var state_56537__$1 = (function (){var statearr_56540 = state_56537;
(statearr_56540[(7)] = inst_56514);

return statearr_56540;
})();
var statearr_56541_57978 = state_56537__$1;
(statearr_56541_57978[(2)] = null);

(statearr_56541_57978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56538 === (4))){
var inst_56514 = (state_56537[(7)]);
var inst_56517 = cljs.core.first(inst_56514);
var state_56537__$1 = state_56537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56537__$1,(7),ch,inst_56517);
} else {
if((state_val_56538 === (13))){
var inst_56531 = (state_56537[(2)]);
var state_56537__$1 = state_56537;
var statearr_56542_57979 = state_56537__$1;
(statearr_56542_57979[(2)] = inst_56531);

(statearr_56542_57979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56538 === (6))){
var inst_56522 = (state_56537[(2)]);
var state_56537__$1 = state_56537;
if(cljs.core.truth_(inst_56522)){
var statearr_56543_57980 = state_56537__$1;
(statearr_56543_57980[(1)] = (8));

} else {
var statearr_56544_57981 = state_56537__$1;
(statearr_56544_57981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56538 === (3))){
var inst_56535 = (state_56537[(2)]);
var state_56537__$1 = state_56537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56537__$1,inst_56535);
} else {
if((state_val_56538 === (12))){
var state_56537__$1 = state_56537;
var statearr_56545_57982 = state_56537__$1;
(statearr_56545_57982[(2)] = null);

(statearr_56545_57982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56538 === (2))){
var inst_56514 = (state_56537[(7)]);
var state_56537__$1 = state_56537;
if(cljs.core.truth_(inst_56514)){
var statearr_56546_57983 = state_56537__$1;
(statearr_56546_57983[(1)] = (4));

} else {
var statearr_56547_57984 = state_56537__$1;
(statearr_56547_57984[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56538 === (11))){
var inst_56528 = cljs.core.async.close_BANG_(ch);
var state_56537__$1 = state_56537;
var statearr_56548_57985 = state_56537__$1;
(statearr_56548_57985[(2)] = inst_56528);

(statearr_56548_57985[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56538 === (9))){
var state_56537__$1 = state_56537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56549_57987 = state_56537__$1;
(statearr_56549_57987[(1)] = (11));

} else {
var statearr_56550_57988 = state_56537__$1;
(statearr_56550_57988[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56538 === (5))){
var inst_56514 = (state_56537[(7)]);
var state_56537__$1 = state_56537;
var statearr_56551_57990 = state_56537__$1;
(statearr_56551_57990[(2)] = inst_56514);

(statearr_56551_57990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56538 === (10))){
var inst_56533 = (state_56537[(2)]);
var state_56537__$1 = state_56537;
var statearr_56552_57991 = state_56537__$1;
(statearr_56552_57991[(2)] = inst_56533);

(statearr_56552_57991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56538 === (8))){
var inst_56514 = (state_56537[(7)]);
var inst_56524 = cljs.core.next(inst_56514);
var inst_56514__$1 = inst_56524;
var state_56537__$1 = (function (){var statearr_56553 = state_56537;
(statearr_56553[(7)] = inst_56514__$1);

return statearr_56553;
})();
var statearr_56554_57992 = state_56537__$1;
(statearr_56554_57992[(2)] = null);

(statearr_56554_57992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56001__auto__ = null;
var cljs$core$async$state_machine__56001__auto____0 = (function (){
var statearr_56555 = [null,null,null,null,null,null,null,null];
(statearr_56555[(0)] = cljs$core$async$state_machine__56001__auto__);

(statearr_56555[(1)] = (1));

return statearr_56555;
});
var cljs$core$async$state_machine__56001__auto____1 = (function (state_56537){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_56537);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e56556){if((e56556 instanceof Object)){
var ex__56004__auto__ = e56556;
var statearr_56557_57993 = state_56537;
(statearr_56557_57993[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57994 = state_56537;
state_56537 = G__57994;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$state_machine__56001__auto__ = function(state_56537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56001__auto____1.call(this,state_56537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56001__auto____0;
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56001__auto____1;
return cljs$core$async$state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_56558 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_56558[(6)] = c__56101__auto__);

return statearr_56558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));

return c__56101__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56559 = (function (ch,cs,meta56560){
this.ch = ch;
this.cs = cs;
this.meta56560 = meta56560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56561,meta56560__$1){
var self__ = this;
var _56561__$1 = this;
return (new cljs.core.async.t_cljs$core$async56559(self__.ch,self__.cs,meta56560__$1));
}));

(cljs.core.async.t_cljs$core$async56559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56561){
var self__ = this;
var _56561__$1 = this;
return self__.meta56560;
}));

(cljs.core.async.t_cljs$core$async56559.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56559.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56559.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56559.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async56559.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async56559.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async56559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta56560","meta56560",-85932821,null)], null);
}));

(cljs.core.async.t_cljs$core$async56559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56559");

(cljs.core.async.t_cljs$core$async56559.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56559.
 */
cljs.core.async.__GT_t_cljs$core$async56559 = (function cljs$core$async$mult_$___GT_t_cljs$core$async56559(ch__$1,cs__$1,meta56560){
return (new cljs.core.async.t_cljs$core$async56559(ch__$1,cs__$1,meta56560));
});

}

return (new cljs.core.async.t_cljs$core$async56559(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__56101__auto___58007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_56696){
var state_val_56697 = (state_56696[(1)]);
if((state_val_56697 === (7))){
var inst_56692 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
var statearr_56698_58008 = state_56696__$1;
(statearr_56698_58008[(2)] = inst_56692);

(statearr_56698_58008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (20))){
var inst_56595 = (state_56696[(7)]);
var inst_56607 = cljs.core.first(inst_56595);
var inst_56608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56607,(0),null);
var inst_56609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56607,(1),null);
var state_56696__$1 = (function (){var statearr_56699 = state_56696;
(statearr_56699[(8)] = inst_56608);

return statearr_56699;
})();
if(cljs.core.truth_(inst_56609)){
var statearr_56700_58015 = state_56696__$1;
(statearr_56700_58015[(1)] = (22));

} else {
var statearr_56701_58016 = state_56696__$1;
(statearr_56701_58016[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (27))){
var inst_56564 = (state_56696[(9)]);
var inst_56639 = (state_56696[(10)]);
var inst_56644 = (state_56696[(11)]);
var inst_56637 = (state_56696[(12)]);
var inst_56644__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56637,inst_56639);
var inst_56645 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56644__$1,inst_56564,done);
var state_56696__$1 = (function (){var statearr_56702 = state_56696;
(statearr_56702[(11)] = inst_56644__$1);

return statearr_56702;
})();
if(cljs.core.truth_(inst_56645)){
var statearr_56703_58020 = state_56696__$1;
(statearr_56703_58020[(1)] = (30));

} else {
var statearr_56704_58021 = state_56696__$1;
(statearr_56704_58021[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (1))){
var state_56696__$1 = state_56696;
var statearr_56705_58022 = state_56696__$1;
(statearr_56705_58022[(2)] = null);

(statearr_56705_58022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (24))){
var inst_56595 = (state_56696[(7)]);
var inst_56614 = (state_56696[(2)]);
var inst_56615 = cljs.core.next(inst_56595);
var inst_56573 = inst_56615;
var inst_56574 = null;
var inst_56575 = (0);
var inst_56576 = (0);
var state_56696__$1 = (function (){var statearr_56706 = state_56696;
(statearr_56706[(13)] = inst_56573);

(statearr_56706[(14)] = inst_56614);

(statearr_56706[(15)] = inst_56574);

(statearr_56706[(16)] = inst_56575);

(statearr_56706[(17)] = inst_56576);

return statearr_56706;
})();
var statearr_56707_58027 = state_56696__$1;
(statearr_56707_58027[(2)] = null);

(statearr_56707_58027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (39))){
var state_56696__$1 = state_56696;
var statearr_56711_58028 = state_56696__$1;
(statearr_56711_58028[(2)] = null);

(statearr_56711_58028[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (4))){
var inst_56564 = (state_56696[(9)]);
var inst_56564__$1 = (state_56696[(2)]);
var inst_56565 = (inst_56564__$1 == null);
var state_56696__$1 = (function (){var statearr_56712 = state_56696;
(statearr_56712[(9)] = inst_56564__$1);

return statearr_56712;
})();
if(cljs.core.truth_(inst_56565)){
var statearr_56713_58029 = state_56696__$1;
(statearr_56713_58029[(1)] = (5));

} else {
var statearr_56714_58030 = state_56696__$1;
(statearr_56714_58030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (15))){
var inst_56573 = (state_56696[(13)]);
var inst_56574 = (state_56696[(15)]);
var inst_56575 = (state_56696[(16)]);
var inst_56576 = (state_56696[(17)]);
var inst_56591 = (state_56696[(2)]);
var inst_56592 = (inst_56576 + (1));
var tmp56708 = inst_56573;
var tmp56709 = inst_56574;
var tmp56710 = inst_56575;
var inst_56573__$1 = tmp56708;
var inst_56574__$1 = tmp56709;
var inst_56575__$1 = tmp56710;
var inst_56576__$1 = inst_56592;
var state_56696__$1 = (function (){var statearr_56715 = state_56696;
(statearr_56715[(13)] = inst_56573__$1);

(statearr_56715[(15)] = inst_56574__$1);

(statearr_56715[(18)] = inst_56591);

(statearr_56715[(16)] = inst_56575__$1);

(statearr_56715[(17)] = inst_56576__$1);

return statearr_56715;
})();
var statearr_56716_58033 = state_56696__$1;
(statearr_56716_58033[(2)] = null);

(statearr_56716_58033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (21))){
var inst_56618 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
var statearr_56720_58036 = state_56696__$1;
(statearr_56720_58036[(2)] = inst_56618);

(statearr_56720_58036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (31))){
var inst_56644 = (state_56696[(11)]);
var inst_56648 = done(null);
var inst_56649 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56644);
var state_56696__$1 = (function (){var statearr_56721 = state_56696;
(statearr_56721[(19)] = inst_56648);

return statearr_56721;
})();
var statearr_56722_58037 = state_56696__$1;
(statearr_56722_58037[(2)] = inst_56649);

(statearr_56722_58037[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (32))){
var inst_56638 = (state_56696[(20)]);
var inst_56639 = (state_56696[(10)]);
var inst_56637 = (state_56696[(12)]);
var inst_56636 = (state_56696[(21)]);
var inst_56651 = (state_56696[(2)]);
var inst_56652 = (inst_56639 + (1));
var tmp56717 = inst_56638;
var tmp56718 = inst_56637;
var tmp56719 = inst_56636;
var inst_56636__$1 = tmp56719;
var inst_56637__$1 = tmp56718;
var inst_56638__$1 = tmp56717;
var inst_56639__$1 = inst_56652;
var state_56696__$1 = (function (){var statearr_56723 = state_56696;
(statearr_56723[(22)] = inst_56651);

(statearr_56723[(20)] = inst_56638__$1);

(statearr_56723[(10)] = inst_56639__$1);

(statearr_56723[(12)] = inst_56637__$1);

(statearr_56723[(21)] = inst_56636__$1);

return statearr_56723;
})();
var statearr_56724_58043 = state_56696__$1;
(statearr_56724_58043[(2)] = null);

(statearr_56724_58043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (40))){
var inst_56664 = (state_56696[(23)]);
var inst_56668 = done(null);
var inst_56669 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_56664);
var state_56696__$1 = (function (){var statearr_56725 = state_56696;
(statearr_56725[(24)] = inst_56668);

return statearr_56725;
})();
var statearr_56726_58045 = state_56696__$1;
(statearr_56726_58045[(2)] = inst_56669);

(statearr_56726_58045[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (33))){
var inst_56655 = (state_56696[(25)]);
var inst_56657 = cljs.core.chunked_seq_QMARK_(inst_56655);
var state_56696__$1 = state_56696;
if(inst_56657){
var statearr_56727_58046 = state_56696__$1;
(statearr_56727_58046[(1)] = (36));

} else {
var statearr_56728_58047 = state_56696__$1;
(statearr_56728_58047[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (13))){
var inst_56585 = (state_56696[(26)]);
var inst_56588 = cljs.core.async.close_BANG_(inst_56585);
var state_56696__$1 = state_56696;
var statearr_56729_58050 = state_56696__$1;
(statearr_56729_58050[(2)] = inst_56588);

(statearr_56729_58050[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (22))){
var inst_56608 = (state_56696[(8)]);
var inst_56611 = cljs.core.async.close_BANG_(inst_56608);
var state_56696__$1 = state_56696;
var statearr_56730_58051 = state_56696__$1;
(statearr_56730_58051[(2)] = inst_56611);

(statearr_56730_58051[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (36))){
var inst_56655 = (state_56696[(25)]);
var inst_56659 = cljs.core.chunk_first(inst_56655);
var inst_56660 = cljs.core.chunk_rest(inst_56655);
var inst_56661 = cljs.core.count(inst_56659);
var inst_56636 = inst_56660;
var inst_56637 = inst_56659;
var inst_56638 = inst_56661;
var inst_56639 = (0);
var state_56696__$1 = (function (){var statearr_56731 = state_56696;
(statearr_56731[(20)] = inst_56638);

(statearr_56731[(10)] = inst_56639);

(statearr_56731[(12)] = inst_56637);

(statearr_56731[(21)] = inst_56636);

return statearr_56731;
})();
var statearr_56732_58052 = state_56696__$1;
(statearr_56732_58052[(2)] = null);

(statearr_56732_58052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (41))){
var inst_56655 = (state_56696[(25)]);
var inst_56671 = (state_56696[(2)]);
var inst_56672 = cljs.core.next(inst_56655);
var inst_56636 = inst_56672;
var inst_56637 = null;
var inst_56638 = (0);
var inst_56639 = (0);
var state_56696__$1 = (function (){var statearr_56733 = state_56696;
(statearr_56733[(20)] = inst_56638);

(statearr_56733[(10)] = inst_56639);

(statearr_56733[(12)] = inst_56637);

(statearr_56733[(27)] = inst_56671);

(statearr_56733[(21)] = inst_56636);

return statearr_56733;
})();
var statearr_56734_58053 = state_56696__$1;
(statearr_56734_58053[(2)] = null);

(statearr_56734_58053[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (43))){
var state_56696__$1 = state_56696;
var statearr_56735_58054 = state_56696__$1;
(statearr_56735_58054[(2)] = null);

(statearr_56735_58054[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (29))){
var inst_56680 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
var statearr_56736_58055 = state_56696__$1;
(statearr_56736_58055[(2)] = inst_56680);

(statearr_56736_58055[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (44))){
var inst_56689 = (state_56696[(2)]);
var state_56696__$1 = (function (){var statearr_56737 = state_56696;
(statearr_56737[(28)] = inst_56689);

return statearr_56737;
})();
var statearr_56738_58056 = state_56696__$1;
(statearr_56738_58056[(2)] = null);

(statearr_56738_58056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (6))){
var inst_56628 = (state_56696[(29)]);
var inst_56627 = cljs.core.deref(cs);
var inst_56628__$1 = cljs.core.keys(inst_56627);
var inst_56629 = cljs.core.count(inst_56628__$1);
var inst_56630 = cljs.core.reset_BANG_(dctr,inst_56629);
var inst_56635 = cljs.core.seq(inst_56628__$1);
var inst_56636 = inst_56635;
var inst_56637 = null;
var inst_56638 = (0);
var inst_56639 = (0);
var state_56696__$1 = (function (){var statearr_56739 = state_56696;
(statearr_56739[(30)] = inst_56630);

(statearr_56739[(20)] = inst_56638);

(statearr_56739[(29)] = inst_56628__$1);

(statearr_56739[(10)] = inst_56639);

(statearr_56739[(12)] = inst_56637);

(statearr_56739[(21)] = inst_56636);

return statearr_56739;
})();
var statearr_56740_58061 = state_56696__$1;
(statearr_56740_58061[(2)] = null);

(statearr_56740_58061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (28))){
var inst_56655 = (state_56696[(25)]);
var inst_56636 = (state_56696[(21)]);
var inst_56655__$1 = cljs.core.seq(inst_56636);
var state_56696__$1 = (function (){var statearr_56741 = state_56696;
(statearr_56741[(25)] = inst_56655__$1);

return statearr_56741;
})();
if(inst_56655__$1){
var statearr_56742_58062 = state_56696__$1;
(statearr_56742_58062[(1)] = (33));

} else {
var statearr_56743_58063 = state_56696__$1;
(statearr_56743_58063[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (25))){
var inst_56638 = (state_56696[(20)]);
var inst_56639 = (state_56696[(10)]);
var inst_56641 = (inst_56639 < inst_56638);
var inst_56642 = inst_56641;
var state_56696__$1 = state_56696;
if(cljs.core.truth_(inst_56642)){
var statearr_56744_58064 = state_56696__$1;
(statearr_56744_58064[(1)] = (27));

} else {
var statearr_56745_58065 = state_56696__$1;
(statearr_56745_58065[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (34))){
var state_56696__$1 = state_56696;
var statearr_56746_58066 = state_56696__$1;
(statearr_56746_58066[(2)] = null);

(statearr_56746_58066[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (17))){
var state_56696__$1 = state_56696;
var statearr_56747_58067 = state_56696__$1;
(statearr_56747_58067[(2)] = null);

(statearr_56747_58067[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (3))){
var inst_56694 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56696__$1,inst_56694);
} else {
if((state_val_56697 === (12))){
var inst_56623 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
var statearr_56748_58068 = state_56696__$1;
(statearr_56748_58068[(2)] = inst_56623);

(statearr_56748_58068[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (2))){
var state_56696__$1 = state_56696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56696__$1,(4),ch);
} else {
if((state_val_56697 === (23))){
var state_56696__$1 = state_56696;
var statearr_56749_58073 = state_56696__$1;
(statearr_56749_58073[(2)] = null);

(statearr_56749_58073[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (35))){
var inst_56678 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
var statearr_56750_58075 = state_56696__$1;
(statearr_56750_58075[(2)] = inst_56678);

(statearr_56750_58075[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (19))){
var inst_56595 = (state_56696[(7)]);
var inst_56599 = cljs.core.chunk_first(inst_56595);
var inst_56600 = cljs.core.chunk_rest(inst_56595);
var inst_56601 = cljs.core.count(inst_56599);
var inst_56573 = inst_56600;
var inst_56574 = inst_56599;
var inst_56575 = inst_56601;
var inst_56576 = (0);
var state_56696__$1 = (function (){var statearr_56751 = state_56696;
(statearr_56751[(13)] = inst_56573);

(statearr_56751[(15)] = inst_56574);

(statearr_56751[(16)] = inst_56575);

(statearr_56751[(17)] = inst_56576);

return statearr_56751;
})();
var statearr_56752_58077 = state_56696__$1;
(statearr_56752_58077[(2)] = null);

(statearr_56752_58077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (11))){
var inst_56573 = (state_56696[(13)]);
var inst_56595 = (state_56696[(7)]);
var inst_56595__$1 = cljs.core.seq(inst_56573);
var state_56696__$1 = (function (){var statearr_56753 = state_56696;
(statearr_56753[(7)] = inst_56595__$1);

return statearr_56753;
})();
if(inst_56595__$1){
var statearr_56754_58078 = state_56696__$1;
(statearr_56754_58078[(1)] = (16));

} else {
var statearr_56755_58079 = state_56696__$1;
(statearr_56755_58079[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (9))){
var inst_56625 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
var statearr_56756_58084 = state_56696__$1;
(statearr_56756_58084[(2)] = inst_56625);

(statearr_56756_58084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (5))){
var inst_56571 = cljs.core.deref(cs);
var inst_56572 = cljs.core.seq(inst_56571);
var inst_56573 = inst_56572;
var inst_56574 = null;
var inst_56575 = (0);
var inst_56576 = (0);
var state_56696__$1 = (function (){var statearr_56757 = state_56696;
(statearr_56757[(13)] = inst_56573);

(statearr_56757[(15)] = inst_56574);

(statearr_56757[(16)] = inst_56575);

(statearr_56757[(17)] = inst_56576);

return statearr_56757;
})();
var statearr_56758_58085 = state_56696__$1;
(statearr_56758_58085[(2)] = null);

(statearr_56758_58085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (14))){
var state_56696__$1 = state_56696;
var statearr_56759_58086 = state_56696__$1;
(statearr_56759_58086[(2)] = null);

(statearr_56759_58086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (45))){
var inst_56686 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
var statearr_56760_58087 = state_56696__$1;
(statearr_56760_58087[(2)] = inst_56686);

(statearr_56760_58087[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (26))){
var inst_56628 = (state_56696[(29)]);
var inst_56682 = (state_56696[(2)]);
var inst_56683 = cljs.core.seq(inst_56628);
var state_56696__$1 = (function (){var statearr_56761 = state_56696;
(statearr_56761[(31)] = inst_56682);

return statearr_56761;
})();
if(inst_56683){
var statearr_56762_58088 = state_56696__$1;
(statearr_56762_58088[(1)] = (42));

} else {
var statearr_56763_58089 = state_56696__$1;
(statearr_56763_58089[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (16))){
var inst_56595 = (state_56696[(7)]);
var inst_56597 = cljs.core.chunked_seq_QMARK_(inst_56595);
var state_56696__$1 = state_56696;
if(inst_56597){
var statearr_56764_58090 = state_56696__$1;
(statearr_56764_58090[(1)] = (19));

} else {
var statearr_56765_58091 = state_56696__$1;
(statearr_56765_58091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (38))){
var inst_56675 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
var statearr_56766_58092 = state_56696__$1;
(statearr_56766_58092[(2)] = inst_56675);

(statearr_56766_58092[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (30))){
var state_56696__$1 = state_56696;
var statearr_56767_58093 = state_56696__$1;
(statearr_56767_58093[(2)] = null);

(statearr_56767_58093[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (10))){
var inst_56574 = (state_56696[(15)]);
var inst_56576 = (state_56696[(17)]);
var inst_56584 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56574,inst_56576);
var inst_56585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56584,(0),null);
var inst_56586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56584,(1),null);
var state_56696__$1 = (function (){var statearr_56768 = state_56696;
(statearr_56768[(26)] = inst_56585);

return statearr_56768;
})();
if(cljs.core.truth_(inst_56586)){
var statearr_56769_58095 = state_56696__$1;
(statearr_56769_58095[(1)] = (13));

} else {
var statearr_56770_58096 = state_56696__$1;
(statearr_56770_58096[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (18))){
var inst_56621 = (state_56696[(2)]);
var state_56696__$1 = state_56696;
var statearr_56771_58097 = state_56696__$1;
(statearr_56771_58097[(2)] = inst_56621);

(statearr_56771_58097[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (42))){
var state_56696__$1 = state_56696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56696__$1,(45),dchan);
} else {
if((state_val_56697 === (37))){
var inst_56664 = (state_56696[(23)]);
var inst_56564 = (state_56696[(9)]);
var inst_56655 = (state_56696[(25)]);
var inst_56664__$1 = cljs.core.first(inst_56655);
var inst_56665 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_56664__$1,inst_56564,done);
var state_56696__$1 = (function (){var statearr_56772 = state_56696;
(statearr_56772[(23)] = inst_56664__$1);

return statearr_56772;
})();
if(cljs.core.truth_(inst_56665)){
var statearr_56773_58098 = state_56696__$1;
(statearr_56773_58098[(1)] = (39));

} else {
var statearr_56774_58099 = state_56696__$1;
(statearr_56774_58099[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56697 === (8))){
var inst_56575 = (state_56696[(16)]);
var inst_56576 = (state_56696[(17)]);
var inst_56578 = (inst_56576 < inst_56575);
var inst_56579 = inst_56578;
var state_56696__$1 = state_56696;
if(cljs.core.truth_(inst_56579)){
var statearr_56775_58100 = state_56696__$1;
(statearr_56775_58100[(1)] = (10));

} else {
var statearr_56776_58104 = state_56696__$1;
(statearr_56776_58104[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__56001__auto__ = null;
var cljs$core$async$mult_$_state_machine__56001__auto____0 = (function (){
var statearr_56777 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56777[(0)] = cljs$core$async$mult_$_state_machine__56001__auto__);

(statearr_56777[(1)] = (1));

return statearr_56777;
});
var cljs$core$async$mult_$_state_machine__56001__auto____1 = (function (state_56696){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_56696);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e56778){if((e56778 instanceof Object)){
var ex__56004__auto__ = e56778;
var statearr_56779_58109 = state_56696;
(statearr_56779_58109[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56778;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58110 = state_56696;
state_56696 = G__58110;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__56001__auto__ = function(state_56696){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__56001__auto____1.call(this,state_56696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__56001__auto____0;
cljs$core$async$mult_$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__56001__auto____1;
return cljs$core$async$mult_$_state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_56780 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_56780[(6)] = c__56101__auto___58007);

return statearr_56780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__56782 = arguments.length;
switch (G__56782) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___58121 = arguments.length;
var i__4790__auto___58122 = (0);
while(true){
if((i__4790__auto___58122 < len__4789__auto___58121)){
args__4795__auto__.push((arguments[i__4790__auto___58122]));

var G__58123 = (i__4790__auto___58122 + (1));
i__4790__auto___58122 = G__58123;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__56787){
var map__56788 = p__56787;
var map__56788__$1 = (((((!((map__56788 == null))))?(((((map__56788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56788):map__56788);
var opts = map__56788__$1;
var statearr_56790_58125 = state;
(statearr_56790_58125[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_56791_58126 = state;
(statearr_56791_58126[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_56792_58131 = state;
(statearr_56792_58131[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq56783){
var G__56784 = cljs.core.first(seq56783);
var seq56783__$1 = cljs.core.next(seq56783);
var G__56785 = cljs.core.first(seq56783__$1);
var seq56783__$2 = cljs.core.next(seq56783__$1);
var G__56786 = cljs.core.first(seq56783__$2);
var seq56783__$3 = cljs.core.next(seq56783__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56784,G__56785,G__56786,seq56783__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56793 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta56794){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta56794 = meta56794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56795,meta56794__$1){
var self__ = this;
var _56795__$1 = this;
return (new cljs.core.async.t_cljs$core$async56793(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta56794__$1));
}));

(cljs.core.async.t_cljs$core$async56793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56795){
var self__ = this;
var _56795__$1 = this;
return self__.meta56794;
}));

(cljs.core.async.t_cljs$core$async56793.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async56793.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56793.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56793.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56793.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56793.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56793.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async56793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta56794","meta56794",687842553,null)], null);
}));

(cljs.core.async.t_cljs$core$async56793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56793");

(cljs.core.async.t_cljs$core$async56793.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56793.
 */
cljs.core.async.__GT_t_cljs$core$async56793 = (function cljs$core$async$mix_$___GT_t_cljs$core$async56793(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56794){
return (new cljs.core.async.t_cljs$core$async56793(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta56794));
});

}

return (new cljs.core.async.t_cljs$core$async56793(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56101__auto___58138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_56897){
var state_val_56898 = (state_56897[(1)]);
if((state_val_56898 === (7))){
var inst_56812 = (state_56897[(2)]);
var state_56897__$1 = state_56897;
var statearr_56899_58141 = state_56897__$1;
(statearr_56899_58141[(2)] = inst_56812);

(statearr_56899_58141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (20))){
var inst_56824 = (state_56897[(7)]);
var state_56897__$1 = state_56897;
var statearr_56900_58142 = state_56897__$1;
(statearr_56900_58142[(2)] = inst_56824);

(statearr_56900_58142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (27))){
var state_56897__$1 = state_56897;
var statearr_56901_58143 = state_56897__$1;
(statearr_56901_58143[(2)] = null);

(statearr_56901_58143[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (1))){
var inst_56799 = (state_56897[(8)]);
var inst_56799__$1 = calc_state();
var inst_56801 = (inst_56799__$1 == null);
var inst_56802 = cljs.core.not(inst_56801);
var state_56897__$1 = (function (){var statearr_56902 = state_56897;
(statearr_56902[(8)] = inst_56799__$1);

return statearr_56902;
})();
if(inst_56802){
var statearr_56903_58144 = state_56897__$1;
(statearr_56903_58144[(1)] = (2));

} else {
var statearr_56904_58145 = state_56897__$1;
(statearr_56904_58145[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (24))){
var inst_56848 = (state_56897[(9)]);
var inst_56871 = (state_56897[(10)]);
var inst_56857 = (state_56897[(11)]);
var inst_56871__$1 = (inst_56848.cljs$core$IFn$_invoke$arity$1 ? inst_56848.cljs$core$IFn$_invoke$arity$1(inst_56857) : inst_56848.call(null,inst_56857));
var state_56897__$1 = (function (){var statearr_56905 = state_56897;
(statearr_56905[(10)] = inst_56871__$1);

return statearr_56905;
})();
if(cljs.core.truth_(inst_56871__$1)){
var statearr_56906_58146 = state_56897__$1;
(statearr_56906_58146[(1)] = (29));

} else {
var statearr_56907_58147 = state_56897__$1;
(statearr_56907_58147[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (4))){
var inst_56815 = (state_56897[(2)]);
var state_56897__$1 = state_56897;
if(cljs.core.truth_(inst_56815)){
var statearr_56908_58148 = state_56897__$1;
(statearr_56908_58148[(1)] = (8));

} else {
var statearr_56909_58149 = state_56897__$1;
(statearr_56909_58149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (15))){
var inst_56842 = (state_56897[(2)]);
var state_56897__$1 = state_56897;
if(cljs.core.truth_(inst_56842)){
var statearr_56910_58150 = state_56897__$1;
(statearr_56910_58150[(1)] = (19));

} else {
var statearr_56911_58152 = state_56897__$1;
(statearr_56911_58152[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (21))){
var inst_56847 = (state_56897[(12)]);
var inst_56847__$1 = (state_56897[(2)]);
var inst_56848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56847__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56847__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56847__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_56897__$1 = (function (){var statearr_56912 = state_56897;
(statearr_56912[(13)] = inst_56849);

(statearr_56912[(9)] = inst_56848);

(statearr_56912[(12)] = inst_56847__$1);

return statearr_56912;
})();
return cljs.core.async.ioc_alts_BANG_(state_56897__$1,(22),inst_56850);
} else {
if((state_val_56898 === (31))){
var inst_56879 = (state_56897[(2)]);
var state_56897__$1 = state_56897;
if(cljs.core.truth_(inst_56879)){
var statearr_56913_58153 = state_56897__$1;
(statearr_56913_58153[(1)] = (32));

} else {
var statearr_56914_58154 = state_56897__$1;
(statearr_56914_58154[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (32))){
var inst_56856 = (state_56897[(14)]);
var state_56897__$1 = state_56897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56897__$1,(35),out,inst_56856);
} else {
if((state_val_56898 === (33))){
var inst_56847 = (state_56897[(12)]);
var inst_56824 = inst_56847;
var state_56897__$1 = (function (){var statearr_56915 = state_56897;
(statearr_56915[(7)] = inst_56824);

return statearr_56915;
})();
var statearr_56916_58156 = state_56897__$1;
(statearr_56916_58156[(2)] = null);

(statearr_56916_58156[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (13))){
var inst_56824 = (state_56897[(7)]);
var inst_56831 = inst_56824.cljs$lang$protocol_mask$partition0$;
var inst_56832 = (inst_56831 & (64));
var inst_56833 = inst_56824.cljs$core$ISeq$;
var inst_56834 = (cljs.core.PROTOCOL_SENTINEL === inst_56833);
var inst_56835 = ((inst_56832) || (inst_56834));
var state_56897__$1 = state_56897;
if(cljs.core.truth_(inst_56835)){
var statearr_56917_58157 = state_56897__$1;
(statearr_56917_58157[(1)] = (16));

} else {
var statearr_56918_58158 = state_56897__$1;
(statearr_56918_58158[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (22))){
var inst_56856 = (state_56897[(14)]);
var inst_56857 = (state_56897[(11)]);
var inst_56855 = (state_56897[(2)]);
var inst_56856__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56855,(0),null);
var inst_56857__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_56855,(1),null);
var inst_56858 = (inst_56856__$1 == null);
var inst_56859 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_56857__$1,change);
var inst_56860 = ((inst_56858) || (inst_56859));
var state_56897__$1 = (function (){var statearr_56919 = state_56897;
(statearr_56919[(14)] = inst_56856__$1);

(statearr_56919[(11)] = inst_56857__$1);

return statearr_56919;
})();
if(cljs.core.truth_(inst_56860)){
var statearr_56920_58159 = state_56897__$1;
(statearr_56920_58159[(1)] = (23));

} else {
var statearr_56921_58160 = state_56897__$1;
(statearr_56921_58160[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (36))){
var inst_56847 = (state_56897[(12)]);
var inst_56824 = inst_56847;
var state_56897__$1 = (function (){var statearr_56922 = state_56897;
(statearr_56922[(7)] = inst_56824);

return statearr_56922;
})();
var statearr_56923_58161 = state_56897__$1;
(statearr_56923_58161[(2)] = null);

(statearr_56923_58161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (29))){
var inst_56871 = (state_56897[(10)]);
var state_56897__$1 = state_56897;
var statearr_56924_58162 = state_56897__$1;
(statearr_56924_58162[(2)] = inst_56871);

(statearr_56924_58162[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (6))){
var state_56897__$1 = state_56897;
var statearr_56925_58163 = state_56897__$1;
(statearr_56925_58163[(2)] = false);

(statearr_56925_58163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (28))){
var inst_56867 = (state_56897[(2)]);
var inst_56868 = calc_state();
var inst_56824 = inst_56868;
var state_56897__$1 = (function (){var statearr_56926 = state_56897;
(statearr_56926[(7)] = inst_56824);

(statearr_56926[(15)] = inst_56867);

return statearr_56926;
})();
var statearr_56927_58164 = state_56897__$1;
(statearr_56927_58164[(2)] = null);

(statearr_56927_58164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (25))){
var inst_56893 = (state_56897[(2)]);
var state_56897__$1 = state_56897;
var statearr_56928_58165 = state_56897__$1;
(statearr_56928_58165[(2)] = inst_56893);

(statearr_56928_58165[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (34))){
var inst_56891 = (state_56897[(2)]);
var state_56897__$1 = state_56897;
var statearr_56929_58166 = state_56897__$1;
(statearr_56929_58166[(2)] = inst_56891);

(statearr_56929_58166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (17))){
var state_56897__$1 = state_56897;
var statearr_56930_58171 = state_56897__$1;
(statearr_56930_58171[(2)] = false);

(statearr_56930_58171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (3))){
var state_56897__$1 = state_56897;
var statearr_56931_58172 = state_56897__$1;
(statearr_56931_58172[(2)] = false);

(statearr_56931_58172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (12))){
var inst_56895 = (state_56897[(2)]);
var state_56897__$1 = state_56897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56897__$1,inst_56895);
} else {
if((state_val_56898 === (2))){
var inst_56799 = (state_56897[(8)]);
var inst_56804 = inst_56799.cljs$lang$protocol_mask$partition0$;
var inst_56805 = (inst_56804 & (64));
var inst_56806 = inst_56799.cljs$core$ISeq$;
var inst_56807 = (cljs.core.PROTOCOL_SENTINEL === inst_56806);
var inst_56808 = ((inst_56805) || (inst_56807));
var state_56897__$1 = state_56897;
if(cljs.core.truth_(inst_56808)){
var statearr_56932_58177 = state_56897__$1;
(statearr_56932_58177[(1)] = (5));

} else {
var statearr_56933_58178 = state_56897__$1;
(statearr_56933_58178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (23))){
var inst_56856 = (state_56897[(14)]);
var inst_56862 = (inst_56856 == null);
var state_56897__$1 = state_56897;
if(cljs.core.truth_(inst_56862)){
var statearr_56934_58180 = state_56897__$1;
(statearr_56934_58180[(1)] = (26));

} else {
var statearr_56935_58181 = state_56897__$1;
(statearr_56935_58181[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (35))){
var inst_56882 = (state_56897[(2)]);
var state_56897__$1 = state_56897;
if(cljs.core.truth_(inst_56882)){
var statearr_56936_58183 = state_56897__$1;
(statearr_56936_58183[(1)] = (36));

} else {
var statearr_56937_58184 = state_56897__$1;
(statearr_56937_58184[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (19))){
var inst_56824 = (state_56897[(7)]);
var inst_56844 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56824);
var state_56897__$1 = state_56897;
var statearr_56938_58185 = state_56897__$1;
(statearr_56938_58185[(2)] = inst_56844);

(statearr_56938_58185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (11))){
var inst_56824 = (state_56897[(7)]);
var inst_56828 = (inst_56824 == null);
var inst_56829 = cljs.core.not(inst_56828);
var state_56897__$1 = state_56897;
if(inst_56829){
var statearr_56939_58186 = state_56897__$1;
(statearr_56939_58186[(1)] = (13));

} else {
var statearr_56940_58187 = state_56897__$1;
(statearr_56940_58187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (9))){
var inst_56799 = (state_56897[(8)]);
var state_56897__$1 = state_56897;
var statearr_56941_58188 = state_56897__$1;
(statearr_56941_58188[(2)] = inst_56799);

(statearr_56941_58188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (5))){
var state_56897__$1 = state_56897;
var statearr_56942_58189 = state_56897__$1;
(statearr_56942_58189[(2)] = true);

(statearr_56942_58189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (14))){
var state_56897__$1 = state_56897;
var statearr_56943_58190 = state_56897__$1;
(statearr_56943_58190[(2)] = false);

(statearr_56943_58190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (26))){
var inst_56857 = (state_56897[(11)]);
var inst_56864 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_56857);
var state_56897__$1 = state_56897;
var statearr_56944_58191 = state_56897__$1;
(statearr_56944_58191[(2)] = inst_56864);

(statearr_56944_58191[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (16))){
var state_56897__$1 = state_56897;
var statearr_56945_58194 = state_56897__$1;
(statearr_56945_58194[(2)] = true);

(statearr_56945_58194[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (38))){
var inst_56887 = (state_56897[(2)]);
var state_56897__$1 = state_56897;
var statearr_56946_58195 = state_56897__$1;
(statearr_56946_58195[(2)] = inst_56887);

(statearr_56946_58195[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (30))){
var inst_56849 = (state_56897[(13)]);
var inst_56848 = (state_56897[(9)]);
var inst_56857 = (state_56897[(11)]);
var inst_56874 = cljs.core.empty_QMARK_(inst_56848);
var inst_56875 = (inst_56849.cljs$core$IFn$_invoke$arity$1 ? inst_56849.cljs$core$IFn$_invoke$arity$1(inst_56857) : inst_56849.call(null,inst_56857));
var inst_56876 = cljs.core.not(inst_56875);
var inst_56877 = ((inst_56874) && (inst_56876));
var state_56897__$1 = state_56897;
var statearr_56947_58198 = state_56897__$1;
(statearr_56947_58198[(2)] = inst_56877);

(statearr_56947_58198[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (10))){
var inst_56799 = (state_56897[(8)]);
var inst_56820 = (state_56897[(2)]);
var inst_56821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56820,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_56822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56820,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_56823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_56820,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_56824 = inst_56799;
var state_56897__$1 = (function (){var statearr_56948 = state_56897;
(statearr_56948[(7)] = inst_56824);

(statearr_56948[(16)] = inst_56823);

(statearr_56948[(17)] = inst_56822);

(statearr_56948[(18)] = inst_56821);

return statearr_56948;
})();
var statearr_56949_58199 = state_56897__$1;
(statearr_56949_58199[(2)] = null);

(statearr_56949_58199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (18))){
var inst_56839 = (state_56897[(2)]);
var state_56897__$1 = state_56897;
var statearr_56950_58200 = state_56897__$1;
(statearr_56950_58200[(2)] = inst_56839);

(statearr_56950_58200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (37))){
var state_56897__$1 = state_56897;
var statearr_56951_58201 = state_56897__$1;
(statearr_56951_58201[(2)] = null);

(statearr_56951_58201[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56898 === (8))){
var inst_56799 = (state_56897[(8)]);
var inst_56817 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_56799);
var state_56897__$1 = state_56897;
var statearr_56952_58202 = state_56897__$1;
(statearr_56952_58202[(2)] = inst_56817);

(statearr_56952_58202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__56001__auto__ = null;
var cljs$core$async$mix_$_state_machine__56001__auto____0 = (function (){
var statearr_56953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56953[(0)] = cljs$core$async$mix_$_state_machine__56001__auto__);

(statearr_56953[(1)] = (1));

return statearr_56953;
});
var cljs$core$async$mix_$_state_machine__56001__auto____1 = (function (state_56897){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_56897);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e56954){if((e56954 instanceof Object)){
var ex__56004__auto__ = e56954;
var statearr_56955_58204 = state_56897;
(statearr_56955_58204[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58205 = state_56897;
state_56897 = G__58205;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__56001__auto__ = function(state_56897){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__56001__auto____1.call(this,state_56897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__56001__auto____0;
cljs$core$async$mix_$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__56001__auto____1;
return cljs$core$async$mix_$_state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_56956 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_56956[(6)] = c__56101__auto___58138);

return statearr_56956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__56958 = arguments.length;
switch (G__56958) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__56961 = arguments.length;
switch (G__56961) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__56959_SHARP_){
if(cljs.core.truth_((p1__56959_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__56959_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__56959_SHARP_.call(null,topic)))){
return p1__56959_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56959_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56962 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta56963){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta56963 = meta56963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56964,meta56963__$1){
var self__ = this;
var _56964__$1 = this;
return (new cljs.core.async.t_cljs$core$async56962(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta56963__$1));
}));

(cljs.core.async.t_cljs$core$async56962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56964){
var self__ = this;
var _56964__$1 = this;
return self__.meta56963;
}));

(cljs.core.async.t_cljs$core$async56962.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56962.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async56962.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56962.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async56962.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async56962.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async56962.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async56962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta56963","meta56963",-412641988,null)], null);
}));

(cljs.core.async.t_cljs$core$async56962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56962");

(cljs.core.async.t_cljs$core$async56962.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async56962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56962.
 */
cljs.core.async.__GT_t_cljs$core$async56962 = (function cljs$core$async$__GT_t_cljs$core$async56962(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56963){
return (new cljs.core.async.t_cljs$core$async56962(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta56963));
});

}

return (new cljs.core.async.t_cljs$core$async56962(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56101__auto___58251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_57036){
var state_val_57037 = (state_57036[(1)]);
if((state_val_57037 === (7))){
var inst_57032 = (state_57036[(2)]);
var state_57036__$1 = state_57036;
var statearr_57038_58252 = state_57036__$1;
(statearr_57038_58252[(2)] = inst_57032);

(statearr_57038_58252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (20))){
var state_57036__$1 = state_57036;
var statearr_57039_58253 = state_57036__$1;
(statearr_57039_58253[(2)] = null);

(statearr_57039_58253[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (1))){
var state_57036__$1 = state_57036;
var statearr_57040_58254 = state_57036__$1;
(statearr_57040_58254[(2)] = null);

(statearr_57040_58254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (24))){
var inst_57015 = (state_57036[(7)]);
var inst_57024 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_57015);
var state_57036__$1 = state_57036;
var statearr_57041_58255 = state_57036__$1;
(statearr_57041_58255[(2)] = inst_57024);

(statearr_57041_58255[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (4))){
var inst_56967 = (state_57036[(8)]);
var inst_56967__$1 = (state_57036[(2)]);
var inst_56968 = (inst_56967__$1 == null);
var state_57036__$1 = (function (){var statearr_57042 = state_57036;
(statearr_57042[(8)] = inst_56967__$1);

return statearr_57042;
})();
if(cljs.core.truth_(inst_56968)){
var statearr_57043_58258 = state_57036__$1;
(statearr_57043_58258[(1)] = (5));

} else {
var statearr_57044_58259 = state_57036__$1;
(statearr_57044_58259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (15))){
var inst_57009 = (state_57036[(2)]);
var state_57036__$1 = state_57036;
var statearr_57045_58264 = state_57036__$1;
(statearr_57045_58264[(2)] = inst_57009);

(statearr_57045_58264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (21))){
var inst_57029 = (state_57036[(2)]);
var state_57036__$1 = (function (){var statearr_57046 = state_57036;
(statearr_57046[(9)] = inst_57029);

return statearr_57046;
})();
var statearr_57047_58265 = state_57036__$1;
(statearr_57047_58265[(2)] = null);

(statearr_57047_58265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (13))){
var inst_56991 = (state_57036[(10)]);
var inst_56993 = cljs.core.chunked_seq_QMARK_(inst_56991);
var state_57036__$1 = state_57036;
if(inst_56993){
var statearr_57048_58266 = state_57036__$1;
(statearr_57048_58266[(1)] = (16));

} else {
var statearr_57049_58267 = state_57036__$1;
(statearr_57049_58267[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (22))){
var inst_57021 = (state_57036[(2)]);
var state_57036__$1 = state_57036;
if(cljs.core.truth_(inst_57021)){
var statearr_57050_58268 = state_57036__$1;
(statearr_57050_58268[(1)] = (23));

} else {
var statearr_57051_58269 = state_57036__$1;
(statearr_57051_58269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (6))){
var inst_57015 = (state_57036[(7)]);
var inst_57017 = (state_57036[(11)]);
var inst_56967 = (state_57036[(8)]);
var inst_57015__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_56967) : topic_fn.call(null,inst_56967));
var inst_57016 = cljs.core.deref(mults);
var inst_57017__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57016,inst_57015__$1);
var state_57036__$1 = (function (){var statearr_57052 = state_57036;
(statearr_57052[(7)] = inst_57015__$1);

(statearr_57052[(11)] = inst_57017__$1);

return statearr_57052;
})();
if(cljs.core.truth_(inst_57017__$1)){
var statearr_57053_58270 = state_57036__$1;
(statearr_57053_58270[(1)] = (19));

} else {
var statearr_57054_58271 = state_57036__$1;
(statearr_57054_58271[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (25))){
var inst_57026 = (state_57036[(2)]);
var state_57036__$1 = state_57036;
var statearr_57055_58272 = state_57036__$1;
(statearr_57055_58272[(2)] = inst_57026);

(statearr_57055_58272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (17))){
var inst_56991 = (state_57036[(10)]);
var inst_57000 = cljs.core.first(inst_56991);
var inst_57001 = cljs.core.async.muxch_STAR_(inst_57000);
var inst_57002 = cljs.core.async.close_BANG_(inst_57001);
var inst_57003 = cljs.core.next(inst_56991);
var inst_56977 = inst_57003;
var inst_56978 = null;
var inst_56979 = (0);
var inst_56980 = (0);
var state_57036__$1 = (function (){var statearr_57056 = state_57036;
(statearr_57056[(12)] = inst_56977);

(statearr_57056[(13)] = inst_56979);

(statearr_57056[(14)] = inst_57002);

(statearr_57056[(15)] = inst_56978);

(statearr_57056[(16)] = inst_56980);

return statearr_57056;
})();
var statearr_57057_58273 = state_57036__$1;
(statearr_57057_58273[(2)] = null);

(statearr_57057_58273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (3))){
var inst_57034 = (state_57036[(2)]);
var state_57036__$1 = state_57036;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57036__$1,inst_57034);
} else {
if((state_val_57037 === (12))){
var inst_57011 = (state_57036[(2)]);
var state_57036__$1 = state_57036;
var statearr_57058_58274 = state_57036__$1;
(statearr_57058_58274[(2)] = inst_57011);

(statearr_57058_58274[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (2))){
var state_57036__$1 = state_57036;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57036__$1,(4),ch);
} else {
if((state_val_57037 === (23))){
var state_57036__$1 = state_57036;
var statearr_57059_58281 = state_57036__$1;
(statearr_57059_58281[(2)] = null);

(statearr_57059_58281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (19))){
var inst_57017 = (state_57036[(11)]);
var inst_56967 = (state_57036[(8)]);
var inst_57019 = cljs.core.async.muxch_STAR_(inst_57017);
var state_57036__$1 = state_57036;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57036__$1,(22),inst_57019,inst_56967);
} else {
if((state_val_57037 === (11))){
var inst_56977 = (state_57036[(12)]);
var inst_56991 = (state_57036[(10)]);
var inst_56991__$1 = cljs.core.seq(inst_56977);
var state_57036__$1 = (function (){var statearr_57060 = state_57036;
(statearr_57060[(10)] = inst_56991__$1);

return statearr_57060;
})();
if(inst_56991__$1){
var statearr_57061_58282 = state_57036__$1;
(statearr_57061_58282[(1)] = (13));

} else {
var statearr_57062_58283 = state_57036__$1;
(statearr_57062_58283[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (9))){
var inst_57013 = (state_57036[(2)]);
var state_57036__$1 = state_57036;
var statearr_57063_58284 = state_57036__$1;
(statearr_57063_58284[(2)] = inst_57013);

(statearr_57063_58284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (5))){
var inst_56974 = cljs.core.deref(mults);
var inst_56975 = cljs.core.vals(inst_56974);
var inst_56976 = cljs.core.seq(inst_56975);
var inst_56977 = inst_56976;
var inst_56978 = null;
var inst_56979 = (0);
var inst_56980 = (0);
var state_57036__$1 = (function (){var statearr_57064 = state_57036;
(statearr_57064[(12)] = inst_56977);

(statearr_57064[(13)] = inst_56979);

(statearr_57064[(15)] = inst_56978);

(statearr_57064[(16)] = inst_56980);

return statearr_57064;
})();
var statearr_57065_58285 = state_57036__$1;
(statearr_57065_58285[(2)] = null);

(statearr_57065_58285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (14))){
var state_57036__$1 = state_57036;
var statearr_57069_58286 = state_57036__$1;
(statearr_57069_58286[(2)] = null);

(statearr_57069_58286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (16))){
var inst_56991 = (state_57036[(10)]);
var inst_56995 = cljs.core.chunk_first(inst_56991);
var inst_56996 = cljs.core.chunk_rest(inst_56991);
var inst_56997 = cljs.core.count(inst_56995);
var inst_56977 = inst_56996;
var inst_56978 = inst_56995;
var inst_56979 = inst_56997;
var inst_56980 = (0);
var state_57036__$1 = (function (){var statearr_57070 = state_57036;
(statearr_57070[(12)] = inst_56977);

(statearr_57070[(13)] = inst_56979);

(statearr_57070[(15)] = inst_56978);

(statearr_57070[(16)] = inst_56980);

return statearr_57070;
})();
var statearr_57071_58290 = state_57036__$1;
(statearr_57071_58290[(2)] = null);

(statearr_57071_58290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (10))){
var inst_56977 = (state_57036[(12)]);
var inst_56979 = (state_57036[(13)]);
var inst_56978 = (state_57036[(15)]);
var inst_56980 = (state_57036[(16)]);
var inst_56985 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_56978,inst_56980);
var inst_56986 = cljs.core.async.muxch_STAR_(inst_56985);
var inst_56987 = cljs.core.async.close_BANG_(inst_56986);
var inst_56988 = (inst_56980 + (1));
var tmp57066 = inst_56977;
var tmp57067 = inst_56979;
var tmp57068 = inst_56978;
var inst_56977__$1 = tmp57066;
var inst_56978__$1 = tmp57068;
var inst_56979__$1 = tmp57067;
var inst_56980__$1 = inst_56988;
var state_57036__$1 = (function (){var statearr_57072 = state_57036;
(statearr_57072[(12)] = inst_56977__$1);

(statearr_57072[(13)] = inst_56979__$1);

(statearr_57072[(17)] = inst_56987);

(statearr_57072[(15)] = inst_56978__$1);

(statearr_57072[(16)] = inst_56980__$1);

return statearr_57072;
})();
var statearr_57073_58294 = state_57036__$1;
(statearr_57073_58294[(2)] = null);

(statearr_57073_58294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (18))){
var inst_57006 = (state_57036[(2)]);
var state_57036__$1 = state_57036;
var statearr_57074_58295 = state_57036__$1;
(statearr_57074_58295[(2)] = inst_57006);

(statearr_57074_58295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57037 === (8))){
var inst_56979 = (state_57036[(13)]);
var inst_56980 = (state_57036[(16)]);
var inst_56982 = (inst_56980 < inst_56979);
var inst_56983 = inst_56982;
var state_57036__$1 = state_57036;
if(cljs.core.truth_(inst_56983)){
var statearr_57075_58298 = state_57036__$1;
(statearr_57075_58298[(1)] = (10));

} else {
var statearr_57076_58299 = state_57036__$1;
(statearr_57076_58299[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56001__auto__ = null;
var cljs$core$async$state_machine__56001__auto____0 = (function (){
var statearr_57077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57077[(0)] = cljs$core$async$state_machine__56001__auto__);

(statearr_57077[(1)] = (1));

return statearr_57077;
});
var cljs$core$async$state_machine__56001__auto____1 = (function (state_57036){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_57036);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e57078){if((e57078 instanceof Object)){
var ex__56004__auto__ = e57078;
var statearr_57079_58300 = state_57036;
(statearr_57079_58300[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58301 = state_57036;
state_57036 = G__58301;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$state_machine__56001__auto__ = function(state_57036){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56001__auto____1.call(this,state_57036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56001__auto____0;
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56001__auto____1;
return cljs$core$async$state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_57080 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_57080[(6)] = c__56101__auto___58251);

return statearr_57080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__57082 = arguments.length;
switch (G__57082) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__57084 = arguments.length;
switch (G__57084) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__57086 = arguments.length;
switch (G__57086) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__56101__auto___58318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_57125){
var state_val_57126 = (state_57125[(1)]);
if((state_val_57126 === (7))){
var state_57125__$1 = state_57125;
var statearr_57127_58321 = state_57125__$1;
(statearr_57127_58321[(2)] = null);

(statearr_57127_58321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57126 === (1))){
var state_57125__$1 = state_57125;
var statearr_57128_58322 = state_57125__$1;
(statearr_57128_58322[(2)] = null);

(statearr_57128_58322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57126 === (4))){
var inst_57089 = (state_57125[(7)]);
var inst_57091 = (inst_57089 < cnt);
var state_57125__$1 = state_57125;
if(cljs.core.truth_(inst_57091)){
var statearr_57129_58324 = state_57125__$1;
(statearr_57129_58324[(1)] = (6));

} else {
var statearr_57130_58325 = state_57125__$1;
(statearr_57130_58325[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57126 === (15))){
var inst_57121 = (state_57125[(2)]);
var state_57125__$1 = state_57125;
var statearr_57131_58326 = state_57125__$1;
(statearr_57131_58326[(2)] = inst_57121);

(statearr_57131_58326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57126 === (13))){
var inst_57114 = cljs.core.async.close_BANG_(out);
var state_57125__$1 = state_57125;
var statearr_57132_58327 = state_57125__$1;
(statearr_57132_58327[(2)] = inst_57114);

(statearr_57132_58327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57126 === (6))){
var state_57125__$1 = state_57125;
var statearr_57133_58328 = state_57125__$1;
(statearr_57133_58328[(2)] = null);

(statearr_57133_58328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57126 === (3))){
var inst_57123 = (state_57125[(2)]);
var state_57125__$1 = state_57125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57125__$1,inst_57123);
} else {
if((state_val_57126 === (12))){
var inst_57111 = (state_57125[(8)]);
var inst_57111__$1 = (state_57125[(2)]);
var inst_57112 = cljs.core.some(cljs.core.nil_QMARK_,inst_57111__$1);
var state_57125__$1 = (function (){var statearr_57134 = state_57125;
(statearr_57134[(8)] = inst_57111__$1);

return statearr_57134;
})();
if(cljs.core.truth_(inst_57112)){
var statearr_57135_58329 = state_57125__$1;
(statearr_57135_58329[(1)] = (13));

} else {
var statearr_57136_58330 = state_57125__$1;
(statearr_57136_58330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57126 === (2))){
var inst_57088 = cljs.core.reset_BANG_(dctr,cnt);
var inst_57089 = (0);
var state_57125__$1 = (function (){var statearr_57137 = state_57125;
(statearr_57137[(9)] = inst_57088);

(statearr_57137[(7)] = inst_57089);

return statearr_57137;
})();
var statearr_57138_58331 = state_57125__$1;
(statearr_57138_58331[(2)] = null);

(statearr_57138_58331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57126 === (11))){
var inst_57089 = (state_57125[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_57125,(10),Object,null,(9));
var inst_57098 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_57089) : chs__$1.call(null,inst_57089));
var inst_57099 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_57089) : done.call(null,inst_57089));
var inst_57100 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57098,inst_57099);
var state_57125__$1 = state_57125;
var statearr_57139_58332 = state_57125__$1;
(statearr_57139_58332[(2)] = inst_57100);


cljs.core.async.impl.ioc_helpers.process_exception(state_57125__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57126 === (9))){
var inst_57089 = (state_57125[(7)]);
var inst_57102 = (state_57125[(2)]);
var inst_57103 = (inst_57089 + (1));
var inst_57089__$1 = inst_57103;
var state_57125__$1 = (function (){var statearr_57140 = state_57125;
(statearr_57140[(7)] = inst_57089__$1);

(statearr_57140[(10)] = inst_57102);

return statearr_57140;
})();
var statearr_57141_58333 = state_57125__$1;
(statearr_57141_58333[(2)] = null);

(statearr_57141_58333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57126 === (5))){
var inst_57109 = (state_57125[(2)]);
var state_57125__$1 = (function (){var statearr_57142 = state_57125;
(statearr_57142[(11)] = inst_57109);

return statearr_57142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57125__$1,(12),dchan);
} else {
if((state_val_57126 === (14))){
var inst_57111 = (state_57125[(8)]);
var inst_57116 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_57111);
var state_57125__$1 = state_57125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57125__$1,(16),out,inst_57116);
} else {
if((state_val_57126 === (16))){
var inst_57118 = (state_57125[(2)]);
var state_57125__$1 = (function (){var statearr_57143 = state_57125;
(statearr_57143[(12)] = inst_57118);

return statearr_57143;
})();
var statearr_57144_58334 = state_57125__$1;
(statearr_57144_58334[(2)] = null);

(statearr_57144_58334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57126 === (10))){
var inst_57093 = (state_57125[(2)]);
var inst_57094 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_57125__$1 = (function (){var statearr_57145 = state_57125;
(statearr_57145[(13)] = inst_57093);

return statearr_57145;
})();
var statearr_57146_58336 = state_57125__$1;
(statearr_57146_58336[(2)] = inst_57094);


cljs.core.async.impl.ioc_helpers.process_exception(state_57125__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57126 === (8))){
var inst_57107 = (state_57125[(2)]);
var state_57125__$1 = state_57125;
var statearr_57147_58338 = state_57125__$1;
(statearr_57147_58338[(2)] = inst_57107);

(statearr_57147_58338[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56001__auto__ = null;
var cljs$core$async$state_machine__56001__auto____0 = (function (){
var statearr_57148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57148[(0)] = cljs$core$async$state_machine__56001__auto__);

(statearr_57148[(1)] = (1));

return statearr_57148;
});
var cljs$core$async$state_machine__56001__auto____1 = (function (state_57125){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_57125);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e57149){if((e57149 instanceof Object)){
var ex__56004__auto__ = e57149;
var statearr_57150_58341 = state_57125;
(statearr_57150_58341[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58342 = state_57125;
state_57125 = G__58342;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$state_machine__56001__auto__ = function(state_57125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56001__auto____1.call(this,state_57125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56001__auto____0;
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56001__auto____1;
return cljs$core$async$state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_57151 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_57151[(6)] = c__56101__auto___58318);

return statearr_57151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__57154 = arguments.length;
switch (G__57154) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56101__auto___58345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_57186){
var state_val_57187 = (state_57186[(1)]);
if((state_val_57187 === (7))){
var inst_57165 = (state_57186[(7)]);
var inst_57166 = (state_57186[(8)]);
var inst_57165__$1 = (state_57186[(2)]);
var inst_57166__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57165__$1,(0),null);
var inst_57167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57165__$1,(1),null);
var inst_57168 = (inst_57166__$1 == null);
var state_57186__$1 = (function (){var statearr_57188 = state_57186;
(statearr_57188[(7)] = inst_57165__$1);

(statearr_57188[(9)] = inst_57167);

(statearr_57188[(8)] = inst_57166__$1);

return statearr_57188;
})();
if(cljs.core.truth_(inst_57168)){
var statearr_57189_58347 = state_57186__$1;
(statearr_57189_58347[(1)] = (8));

} else {
var statearr_57190_58348 = state_57186__$1;
(statearr_57190_58348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (1))){
var inst_57155 = cljs.core.vec(chs);
var inst_57156 = inst_57155;
var state_57186__$1 = (function (){var statearr_57191 = state_57186;
(statearr_57191[(10)] = inst_57156);

return statearr_57191;
})();
var statearr_57192_58349 = state_57186__$1;
(statearr_57192_58349[(2)] = null);

(statearr_57192_58349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (4))){
var inst_57156 = (state_57186[(10)]);
var state_57186__$1 = state_57186;
return cljs.core.async.ioc_alts_BANG_(state_57186__$1,(7),inst_57156);
} else {
if((state_val_57187 === (6))){
var inst_57182 = (state_57186[(2)]);
var state_57186__$1 = state_57186;
var statearr_57193_58363 = state_57186__$1;
(statearr_57193_58363[(2)] = inst_57182);

(statearr_57193_58363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (3))){
var inst_57184 = (state_57186[(2)]);
var state_57186__$1 = state_57186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57186__$1,inst_57184);
} else {
if((state_val_57187 === (2))){
var inst_57156 = (state_57186[(10)]);
var inst_57158 = cljs.core.count(inst_57156);
var inst_57159 = (inst_57158 > (0));
var state_57186__$1 = state_57186;
if(cljs.core.truth_(inst_57159)){
var statearr_57195_58371 = state_57186__$1;
(statearr_57195_58371[(1)] = (4));

} else {
var statearr_57196_58373 = state_57186__$1;
(statearr_57196_58373[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (11))){
var inst_57156 = (state_57186[(10)]);
var inst_57175 = (state_57186[(2)]);
var tmp57194 = inst_57156;
var inst_57156__$1 = tmp57194;
var state_57186__$1 = (function (){var statearr_57197 = state_57186;
(statearr_57197[(11)] = inst_57175);

(statearr_57197[(10)] = inst_57156__$1);

return statearr_57197;
})();
var statearr_57198_58374 = state_57186__$1;
(statearr_57198_58374[(2)] = null);

(statearr_57198_58374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (9))){
var inst_57166 = (state_57186[(8)]);
var state_57186__$1 = state_57186;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57186__$1,(11),out,inst_57166);
} else {
if((state_val_57187 === (5))){
var inst_57180 = cljs.core.async.close_BANG_(out);
var state_57186__$1 = state_57186;
var statearr_57199_58377 = state_57186__$1;
(statearr_57199_58377[(2)] = inst_57180);

(statearr_57199_58377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (10))){
var inst_57178 = (state_57186[(2)]);
var state_57186__$1 = state_57186;
var statearr_57200_58378 = state_57186__$1;
(statearr_57200_58378[(2)] = inst_57178);

(statearr_57200_58378[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57187 === (8))){
var inst_57165 = (state_57186[(7)]);
var inst_57156 = (state_57186[(10)]);
var inst_57167 = (state_57186[(9)]);
var inst_57166 = (state_57186[(8)]);
var inst_57170 = (function (){var cs = inst_57156;
var vec__57161 = inst_57165;
var v = inst_57166;
var c = inst_57167;
return (function (p1__57152_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__57152_SHARP_);
});
})();
var inst_57171 = cljs.core.filterv(inst_57170,inst_57156);
var inst_57156__$1 = inst_57171;
var state_57186__$1 = (function (){var statearr_57201 = state_57186;
(statearr_57201[(10)] = inst_57156__$1);

return statearr_57201;
})();
var statearr_57202_58379 = state_57186__$1;
(statearr_57202_58379[(2)] = null);

(statearr_57202_58379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56001__auto__ = null;
var cljs$core$async$state_machine__56001__auto____0 = (function (){
var statearr_57203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57203[(0)] = cljs$core$async$state_machine__56001__auto__);

(statearr_57203[(1)] = (1));

return statearr_57203;
});
var cljs$core$async$state_machine__56001__auto____1 = (function (state_57186){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_57186);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e57204){if((e57204 instanceof Object)){
var ex__56004__auto__ = e57204;
var statearr_57205_58384 = state_57186;
(statearr_57205_58384[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58385 = state_57186;
state_57186 = G__58385;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$state_machine__56001__auto__ = function(state_57186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56001__auto____1.call(this,state_57186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56001__auto____0;
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56001__auto____1;
return cljs$core$async$state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_57206 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_57206[(6)] = c__56101__auto___58345);

return statearr_57206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__57208 = arguments.length;
switch (G__57208) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56101__auto___58393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_57232){
var state_val_57233 = (state_57232[(1)]);
if((state_val_57233 === (7))){
var inst_57214 = (state_57232[(7)]);
var inst_57214__$1 = (state_57232[(2)]);
var inst_57215 = (inst_57214__$1 == null);
var inst_57216 = cljs.core.not(inst_57215);
var state_57232__$1 = (function (){var statearr_57234 = state_57232;
(statearr_57234[(7)] = inst_57214__$1);

return statearr_57234;
})();
if(inst_57216){
var statearr_57235_58399 = state_57232__$1;
(statearr_57235_58399[(1)] = (8));

} else {
var statearr_57236_58403 = state_57232__$1;
(statearr_57236_58403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57233 === (1))){
var inst_57209 = (0);
var state_57232__$1 = (function (){var statearr_57237 = state_57232;
(statearr_57237[(8)] = inst_57209);

return statearr_57237;
})();
var statearr_57238_58416 = state_57232__$1;
(statearr_57238_58416[(2)] = null);

(statearr_57238_58416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57233 === (4))){
var state_57232__$1 = state_57232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57232__$1,(7),ch);
} else {
if((state_val_57233 === (6))){
var inst_57227 = (state_57232[(2)]);
var state_57232__$1 = state_57232;
var statearr_57239_58424 = state_57232__$1;
(statearr_57239_58424[(2)] = inst_57227);

(statearr_57239_58424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57233 === (3))){
var inst_57229 = (state_57232[(2)]);
var inst_57230 = cljs.core.async.close_BANG_(out);
var state_57232__$1 = (function (){var statearr_57240 = state_57232;
(statearr_57240[(9)] = inst_57229);

return statearr_57240;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57232__$1,inst_57230);
} else {
if((state_val_57233 === (2))){
var inst_57209 = (state_57232[(8)]);
var inst_57211 = (inst_57209 < n);
var state_57232__$1 = state_57232;
if(cljs.core.truth_(inst_57211)){
var statearr_57241_58425 = state_57232__$1;
(statearr_57241_58425[(1)] = (4));

} else {
var statearr_57242_58427 = state_57232__$1;
(statearr_57242_58427[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57233 === (11))){
var inst_57209 = (state_57232[(8)]);
var inst_57219 = (state_57232[(2)]);
var inst_57220 = (inst_57209 + (1));
var inst_57209__$1 = inst_57220;
var state_57232__$1 = (function (){var statearr_57243 = state_57232;
(statearr_57243[(8)] = inst_57209__$1);

(statearr_57243[(10)] = inst_57219);

return statearr_57243;
})();
var statearr_57244_58429 = state_57232__$1;
(statearr_57244_58429[(2)] = null);

(statearr_57244_58429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57233 === (9))){
var state_57232__$1 = state_57232;
var statearr_57245_58430 = state_57232__$1;
(statearr_57245_58430[(2)] = null);

(statearr_57245_58430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57233 === (5))){
var state_57232__$1 = state_57232;
var statearr_57246_58432 = state_57232__$1;
(statearr_57246_58432[(2)] = null);

(statearr_57246_58432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57233 === (10))){
var inst_57224 = (state_57232[(2)]);
var state_57232__$1 = state_57232;
var statearr_57247_58434 = state_57232__$1;
(statearr_57247_58434[(2)] = inst_57224);

(statearr_57247_58434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57233 === (8))){
var inst_57214 = (state_57232[(7)]);
var state_57232__$1 = state_57232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57232__$1,(11),out,inst_57214);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56001__auto__ = null;
var cljs$core$async$state_machine__56001__auto____0 = (function (){
var statearr_57248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57248[(0)] = cljs$core$async$state_machine__56001__auto__);

(statearr_57248[(1)] = (1));

return statearr_57248;
});
var cljs$core$async$state_machine__56001__auto____1 = (function (state_57232){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_57232);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e57249){if((e57249 instanceof Object)){
var ex__56004__auto__ = e57249;
var statearr_57250_58436 = state_57232;
(statearr_57250_58436[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57249;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58437 = state_57232;
state_57232 = G__58437;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$state_machine__56001__auto__ = function(state_57232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56001__auto____1.call(this,state_57232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56001__auto____0;
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56001__auto____1;
return cljs$core$async$state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_57251 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_57251[(6)] = c__56101__auto___58393);

return statearr_57251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57253 = (function (f,ch,meta57254){
this.f = f;
this.ch = ch;
this.meta57254 = meta57254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57255,meta57254__$1){
var self__ = this;
var _57255__$1 = this;
return (new cljs.core.async.t_cljs$core$async57253(self__.f,self__.ch,meta57254__$1));
}));

(cljs.core.async.t_cljs$core$async57253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57255){
var self__ = this;
var _57255__$1 = this;
return self__.meta57254;
}));

(cljs.core.async.t_cljs$core$async57253.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57253.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57253.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57253.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57253.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57256 = (function (f,ch,meta57254,_,fn1,meta57257){
this.f = f;
this.ch = ch;
this.meta57254 = meta57254;
this._ = _;
this.fn1 = fn1;
this.meta57257 = meta57257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57258,meta57257__$1){
var self__ = this;
var _57258__$1 = this;
return (new cljs.core.async.t_cljs$core$async57256(self__.f,self__.ch,self__.meta57254,self__._,self__.fn1,meta57257__$1));
}));

(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57258){
var self__ = this;
var _57258__$1 = this;
return self__.meta57257;
}));

(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__57252_SHARP_){
var G__57259 = (((p1__57252_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__57252_SHARP_) : self__.f.call(null,p1__57252_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__57259) : f1.call(null,G__57259));
});
}));

(cljs.core.async.t_cljs$core$async57256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57254","meta57254",-1905602268,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async57253","cljs.core.async/t_cljs$core$async57253",2139019272,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta57257","meta57257",114194212,null)], null);
}));

(cljs.core.async.t_cljs$core$async57256.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57256");

(cljs.core.async.t_cljs$core$async57256.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57256");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57256.
 */
cljs.core.async.__GT_t_cljs$core$async57256 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57256(f__$1,ch__$1,meta57254__$1,___$2,fn1__$1,meta57257){
return (new cljs.core.async.t_cljs$core$async57256(f__$1,ch__$1,meta57254__$1,___$2,fn1__$1,meta57257));
});

}

return (new cljs.core.async.t_cljs$core$async57256(self__.f,self__.ch,self__.meta57254,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__57260 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__57260) : self__.f.call(null,G__57260));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async57253.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57253.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async57253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57254","meta57254",-1905602268,null)], null);
}));

(cljs.core.async.t_cljs$core$async57253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57253");

(cljs.core.async.t_cljs$core$async57253.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57253.
 */
cljs.core.async.__GT_t_cljs$core$async57253 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57253(f__$1,ch__$1,meta57254){
return (new cljs.core.async.t_cljs$core$async57253(f__$1,ch__$1,meta57254));
});

}

return (new cljs.core.async.t_cljs$core$async57253(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57261 = (function (f,ch,meta57262){
this.f = f;
this.ch = ch;
this.meta57262 = meta57262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57263,meta57262__$1){
var self__ = this;
var _57263__$1 = this;
return (new cljs.core.async.t_cljs$core$async57261(self__.f,self__.ch,meta57262__$1));
}));

(cljs.core.async.t_cljs$core$async57261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57263){
var self__ = this;
var _57263__$1 = this;
return self__.meta57262;
}));

(cljs.core.async.t_cljs$core$async57261.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57261.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57261.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57261.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57261.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57261.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async57261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57262","meta57262",1792113712,null)], null);
}));

(cljs.core.async.t_cljs$core$async57261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57261");

(cljs.core.async.t_cljs$core$async57261.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57261.
 */
cljs.core.async.__GT_t_cljs$core$async57261 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async57261(f__$1,ch__$1,meta57262){
return (new cljs.core.async.t_cljs$core$async57261(f__$1,ch__$1,meta57262));
});

}

return (new cljs.core.async.t_cljs$core$async57261(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57264 = (function (p,ch,meta57265){
this.p = p;
this.ch = ch;
this.meta57265 = meta57265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57266,meta57265__$1){
var self__ = this;
var _57266__$1 = this;
return (new cljs.core.async.t_cljs$core$async57264(self__.p,self__.ch,meta57265__$1));
}));

(cljs.core.async.t_cljs$core$async57264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57266){
var self__ = this;
var _57266__$1 = this;
return self__.meta57265;
}));

(cljs.core.async.t_cljs$core$async57264.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57264.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57264.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57264.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async57264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57265","meta57265",-145871228,null)], null);
}));

(cljs.core.async.t_cljs$core$async57264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57264");

(cljs.core.async.t_cljs$core$async57264.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async57264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57264.
 */
cljs.core.async.__GT_t_cljs$core$async57264 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async57264(p__$1,ch__$1,meta57265){
return (new cljs.core.async.t_cljs$core$async57264(p__$1,ch__$1,meta57265));
});

}

return (new cljs.core.async.t_cljs$core$async57264(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__57268 = arguments.length;
switch (G__57268) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56101__auto___58509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_57289){
var state_val_57290 = (state_57289[(1)]);
if((state_val_57290 === (7))){
var inst_57285 = (state_57289[(2)]);
var state_57289__$1 = state_57289;
var statearr_57291_58552 = state_57289__$1;
(statearr_57291_58552[(2)] = inst_57285);

(statearr_57291_58552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57290 === (1))){
var state_57289__$1 = state_57289;
var statearr_57292_58557 = state_57289__$1;
(statearr_57292_58557[(2)] = null);

(statearr_57292_58557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57290 === (4))){
var inst_57271 = (state_57289[(7)]);
var inst_57271__$1 = (state_57289[(2)]);
var inst_57272 = (inst_57271__$1 == null);
var state_57289__$1 = (function (){var statearr_57293 = state_57289;
(statearr_57293[(7)] = inst_57271__$1);

return statearr_57293;
})();
if(cljs.core.truth_(inst_57272)){
var statearr_57294_58562 = state_57289__$1;
(statearr_57294_58562[(1)] = (5));

} else {
var statearr_57295_58563 = state_57289__$1;
(statearr_57295_58563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57290 === (6))){
var inst_57271 = (state_57289[(7)]);
var inst_57276 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57271) : p.call(null,inst_57271));
var state_57289__$1 = state_57289;
if(cljs.core.truth_(inst_57276)){
var statearr_57296_58567 = state_57289__$1;
(statearr_57296_58567[(1)] = (8));

} else {
var statearr_57297_58568 = state_57289__$1;
(statearr_57297_58568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57290 === (3))){
var inst_57287 = (state_57289[(2)]);
var state_57289__$1 = state_57289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57289__$1,inst_57287);
} else {
if((state_val_57290 === (2))){
var state_57289__$1 = state_57289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57289__$1,(4),ch);
} else {
if((state_val_57290 === (11))){
var inst_57279 = (state_57289[(2)]);
var state_57289__$1 = state_57289;
var statearr_57298_58572 = state_57289__$1;
(statearr_57298_58572[(2)] = inst_57279);

(statearr_57298_58572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57290 === (9))){
var state_57289__$1 = state_57289;
var statearr_57299_58573 = state_57289__$1;
(statearr_57299_58573[(2)] = null);

(statearr_57299_58573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57290 === (5))){
var inst_57274 = cljs.core.async.close_BANG_(out);
var state_57289__$1 = state_57289;
var statearr_57300_58574 = state_57289__$1;
(statearr_57300_58574[(2)] = inst_57274);

(statearr_57300_58574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57290 === (10))){
var inst_57282 = (state_57289[(2)]);
var state_57289__$1 = (function (){var statearr_57301 = state_57289;
(statearr_57301[(8)] = inst_57282);

return statearr_57301;
})();
var statearr_57302_58576 = state_57289__$1;
(statearr_57302_58576[(2)] = null);

(statearr_57302_58576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57290 === (8))){
var inst_57271 = (state_57289[(7)]);
var state_57289__$1 = state_57289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57289__$1,(11),out,inst_57271);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56001__auto__ = null;
var cljs$core$async$state_machine__56001__auto____0 = (function (){
var statearr_57303 = [null,null,null,null,null,null,null,null,null];
(statearr_57303[(0)] = cljs$core$async$state_machine__56001__auto__);

(statearr_57303[(1)] = (1));

return statearr_57303;
});
var cljs$core$async$state_machine__56001__auto____1 = (function (state_57289){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_57289);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e57304){if((e57304 instanceof Object)){
var ex__56004__auto__ = e57304;
var statearr_57305_58584 = state_57289;
(statearr_57305_58584[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58591 = state_57289;
state_57289 = G__58591;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$state_machine__56001__auto__ = function(state_57289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56001__auto____1.call(this,state_57289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56001__auto____0;
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56001__auto____1;
return cljs$core$async$state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_57306 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_57306[(6)] = c__56101__auto___58509);

return statearr_57306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57308 = arguments.length;
switch (G__57308) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__56101__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_57370){
var state_val_57371 = (state_57370[(1)]);
if((state_val_57371 === (7))){
var inst_57366 = (state_57370[(2)]);
var state_57370__$1 = state_57370;
var statearr_57372_58617 = state_57370__$1;
(statearr_57372_58617[(2)] = inst_57366);

(statearr_57372_58617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (20))){
var inst_57336 = (state_57370[(7)]);
var inst_57347 = (state_57370[(2)]);
var inst_57348 = cljs.core.next(inst_57336);
var inst_57322 = inst_57348;
var inst_57323 = null;
var inst_57324 = (0);
var inst_57325 = (0);
var state_57370__$1 = (function (){var statearr_57373 = state_57370;
(statearr_57373[(8)] = inst_57325);

(statearr_57373[(9)] = inst_57324);

(statearr_57373[(10)] = inst_57323);

(statearr_57373[(11)] = inst_57322);

(statearr_57373[(12)] = inst_57347);

return statearr_57373;
})();
var statearr_57374_58640 = state_57370__$1;
(statearr_57374_58640[(2)] = null);

(statearr_57374_58640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (1))){
var state_57370__$1 = state_57370;
var statearr_57375_58644 = state_57370__$1;
(statearr_57375_58644[(2)] = null);

(statearr_57375_58644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (4))){
var inst_57311 = (state_57370[(13)]);
var inst_57311__$1 = (state_57370[(2)]);
var inst_57312 = (inst_57311__$1 == null);
var state_57370__$1 = (function (){var statearr_57376 = state_57370;
(statearr_57376[(13)] = inst_57311__$1);

return statearr_57376;
})();
if(cljs.core.truth_(inst_57312)){
var statearr_57377_58645 = state_57370__$1;
(statearr_57377_58645[(1)] = (5));

} else {
var statearr_57378_58646 = state_57370__$1;
(statearr_57378_58646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (15))){
var state_57370__$1 = state_57370;
var statearr_57382_58647 = state_57370__$1;
(statearr_57382_58647[(2)] = null);

(statearr_57382_58647[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (21))){
var state_57370__$1 = state_57370;
var statearr_57383_58648 = state_57370__$1;
(statearr_57383_58648[(2)] = null);

(statearr_57383_58648[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (13))){
var inst_57325 = (state_57370[(8)]);
var inst_57324 = (state_57370[(9)]);
var inst_57323 = (state_57370[(10)]);
var inst_57322 = (state_57370[(11)]);
var inst_57332 = (state_57370[(2)]);
var inst_57333 = (inst_57325 + (1));
var tmp57379 = inst_57324;
var tmp57380 = inst_57323;
var tmp57381 = inst_57322;
var inst_57322__$1 = tmp57381;
var inst_57323__$1 = tmp57380;
var inst_57324__$1 = tmp57379;
var inst_57325__$1 = inst_57333;
var state_57370__$1 = (function (){var statearr_57384 = state_57370;
(statearr_57384[(8)] = inst_57325__$1);

(statearr_57384[(9)] = inst_57324__$1);

(statearr_57384[(10)] = inst_57323__$1);

(statearr_57384[(11)] = inst_57322__$1);

(statearr_57384[(14)] = inst_57332);

return statearr_57384;
})();
var statearr_57385_58649 = state_57370__$1;
(statearr_57385_58649[(2)] = null);

(statearr_57385_58649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (22))){
var state_57370__$1 = state_57370;
var statearr_57386_58651 = state_57370__$1;
(statearr_57386_58651[(2)] = null);

(statearr_57386_58651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (6))){
var inst_57311 = (state_57370[(13)]);
var inst_57320 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57311) : f.call(null,inst_57311));
var inst_57321 = cljs.core.seq(inst_57320);
var inst_57322 = inst_57321;
var inst_57323 = null;
var inst_57324 = (0);
var inst_57325 = (0);
var state_57370__$1 = (function (){var statearr_57387 = state_57370;
(statearr_57387[(8)] = inst_57325);

(statearr_57387[(9)] = inst_57324);

(statearr_57387[(10)] = inst_57323);

(statearr_57387[(11)] = inst_57322);

return statearr_57387;
})();
var statearr_57388_58657 = state_57370__$1;
(statearr_57388_58657[(2)] = null);

(statearr_57388_58657[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (17))){
var inst_57336 = (state_57370[(7)]);
var inst_57340 = cljs.core.chunk_first(inst_57336);
var inst_57341 = cljs.core.chunk_rest(inst_57336);
var inst_57342 = cljs.core.count(inst_57340);
var inst_57322 = inst_57341;
var inst_57323 = inst_57340;
var inst_57324 = inst_57342;
var inst_57325 = (0);
var state_57370__$1 = (function (){var statearr_57389 = state_57370;
(statearr_57389[(8)] = inst_57325);

(statearr_57389[(9)] = inst_57324);

(statearr_57389[(10)] = inst_57323);

(statearr_57389[(11)] = inst_57322);

return statearr_57389;
})();
var statearr_57390_58662 = state_57370__$1;
(statearr_57390_58662[(2)] = null);

(statearr_57390_58662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (3))){
var inst_57368 = (state_57370[(2)]);
var state_57370__$1 = state_57370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57370__$1,inst_57368);
} else {
if((state_val_57371 === (12))){
var inst_57356 = (state_57370[(2)]);
var state_57370__$1 = state_57370;
var statearr_57391_58663 = state_57370__$1;
(statearr_57391_58663[(2)] = inst_57356);

(statearr_57391_58663[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (2))){
var state_57370__$1 = state_57370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57370__$1,(4),in$);
} else {
if((state_val_57371 === (23))){
var inst_57364 = (state_57370[(2)]);
var state_57370__$1 = state_57370;
var statearr_57392_58665 = state_57370__$1;
(statearr_57392_58665[(2)] = inst_57364);

(statearr_57392_58665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (19))){
var inst_57351 = (state_57370[(2)]);
var state_57370__$1 = state_57370;
var statearr_57393_58666 = state_57370__$1;
(statearr_57393_58666[(2)] = inst_57351);

(statearr_57393_58666[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (11))){
var inst_57336 = (state_57370[(7)]);
var inst_57322 = (state_57370[(11)]);
var inst_57336__$1 = cljs.core.seq(inst_57322);
var state_57370__$1 = (function (){var statearr_57394 = state_57370;
(statearr_57394[(7)] = inst_57336__$1);

return statearr_57394;
})();
if(inst_57336__$1){
var statearr_57395_58682 = state_57370__$1;
(statearr_57395_58682[(1)] = (14));

} else {
var statearr_57396_58687 = state_57370__$1;
(statearr_57396_58687[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (9))){
var inst_57358 = (state_57370[(2)]);
var inst_57359 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_57370__$1 = (function (){var statearr_57397 = state_57370;
(statearr_57397[(15)] = inst_57358);

return statearr_57397;
})();
if(cljs.core.truth_(inst_57359)){
var statearr_57398_58689 = state_57370__$1;
(statearr_57398_58689[(1)] = (21));

} else {
var statearr_57399_58690 = state_57370__$1;
(statearr_57399_58690[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (5))){
var inst_57314 = cljs.core.async.close_BANG_(out);
var state_57370__$1 = state_57370;
var statearr_57400_58692 = state_57370__$1;
(statearr_57400_58692[(2)] = inst_57314);

(statearr_57400_58692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (14))){
var inst_57336 = (state_57370[(7)]);
var inst_57338 = cljs.core.chunked_seq_QMARK_(inst_57336);
var state_57370__$1 = state_57370;
if(inst_57338){
var statearr_57401_58693 = state_57370__$1;
(statearr_57401_58693[(1)] = (17));

} else {
var statearr_57402_58694 = state_57370__$1;
(statearr_57402_58694[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (16))){
var inst_57354 = (state_57370[(2)]);
var state_57370__$1 = state_57370;
var statearr_57403_58696 = state_57370__$1;
(statearr_57403_58696[(2)] = inst_57354);

(statearr_57403_58696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57371 === (10))){
var inst_57325 = (state_57370[(8)]);
var inst_57323 = (state_57370[(10)]);
var inst_57330 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_57323,inst_57325);
var state_57370__$1 = state_57370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57370__$1,(13),out,inst_57330);
} else {
if((state_val_57371 === (18))){
var inst_57336 = (state_57370[(7)]);
var inst_57345 = cljs.core.first(inst_57336);
var state_57370__$1 = state_57370;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57370__$1,(20),out,inst_57345);
} else {
if((state_val_57371 === (8))){
var inst_57325 = (state_57370[(8)]);
var inst_57324 = (state_57370[(9)]);
var inst_57327 = (inst_57325 < inst_57324);
var inst_57328 = inst_57327;
var state_57370__$1 = state_57370;
if(cljs.core.truth_(inst_57328)){
var statearr_57404_58701 = state_57370__$1;
(statearr_57404_58701[(1)] = (10));

} else {
var statearr_57405_58702 = state_57370__$1;
(statearr_57405_58702[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__56001__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__56001__auto____0 = (function (){
var statearr_57406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57406[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__56001__auto__);

(statearr_57406[(1)] = (1));

return statearr_57406;
});
var cljs$core$async$mapcat_STAR__$_state_machine__56001__auto____1 = (function (state_57370){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_57370);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e57407){if((e57407 instanceof Object)){
var ex__56004__auto__ = e57407;
var statearr_57408_58703 = state_57370;
(statearr_57408_58703[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58704 = state_57370;
state_57370 = G__58704;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__56001__auto__ = function(state_57370){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__56001__auto____1.call(this,state_57370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__56001__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__56001__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_57409 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_57409[(6)] = c__56101__auto__);

return statearr_57409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));

return c__56101__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__57411 = arguments.length;
switch (G__57411) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__57413 = arguments.length;
switch (G__57413) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__57415 = arguments.length;
switch (G__57415) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56101__auto___58716 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_57439){
var state_val_57440 = (state_57439[(1)]);
if((state_val_57440 === (7))){
var inst_57434 = (state_57439[(2)]);
var state_57439__$1 = state_57439;
var statearr_57441_58717 = state_57439__$1;
(statearr_57441_58717[(2)] = inst_57434);

(statearr_57441_58717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (1))){
var inst_57416 = null;
var state_57439__$1 = (function (){var statearr_57442 = state_57439;
(statearr_57442[(7)] = inst_57416);

return statearr_57442;
})();
var statearr_57443_58718 = state_57439__$1;
(statearr_57443_58718[(2)] = null);

(statearr_57443_58718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (4))){
var inst_57419 = (state_57439[(8)]);
var inst_57419__$1 = (state_57439[(2)]);
var inst_57420 = (inst_57419__$1 == null);
var inst_57421 = cljs.core.not(inst_57420);
var state_57439__$1 = (function (){var statearr_57444 = state_57439;
(statearr_57444[(8)] = inst_57419__$1);

return statearr_57444;
})();
if(inst_57421){
var statearr_57445_58719 = state_57439__$1;
(statearr_57445_58719[(1)] = (5));

} else {
var statearr_57446_58720 = state_57439__$1;
(statearr_57446_58720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (6))){
var state_57439__$1 = state_57439;
var statearr_57447_58721 = state_57439__$1;
(statearr_57447_58721[(2)] = null);

(statearr_57447_58721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (3))){
var inst_57436 = (state_57439[(2)]);
var inst_57437 = cljs.core.async.close_BANG_(out);
var state_57439__$1 = (function (){var statearr_57448 = state_57439;
(statearr_57448[(9)] = inst_57436);

return statearr_57448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57439__$1,inst_57437);
} else {
if((state_val_57440 === (2))){
var state_57439__$1 = state_57439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57439__$1,(4),ch);
} else {
if((state_val_57440 === (11))){
var inst_57419 = (state_57439[(8)]);
var inst_57428 = (state_57439[(2)]);
var inst_57416 = inst_57419;
var state_57439__$1 = (function (){var statearr_57449 = state_57439;
(statearr_57449[(7)] = inst_57416);

(statearr_57449[(10)] = inst_57428);

return statearr_57449;
})();
var statearr_57450_58724 = state_57439__$1;
(statearr_57450_58724[(2)] = null);

(statearr_57450_58724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (9))){
var inst_57419 = (state_57439[(8)]);
var state_57439__$1 = state_57439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57439__$1,(11),out,inst_57419);
} else {
if((state_val_57440 === (5))){
var inst_57416 = (state_57439[(7)]);
var inst_57419 = (state_57439[(8)]);
var inst_57423 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57419,inst_57416);
var state_57439__$1 = state_57439;
if(inst_57423){
var statearr_57452_58725 = state_57439__$1;
(statearr_57452_58725[(1)] = (8));

} else {
var statearr_57453_58726 = state_57439__$1;
(statearr_57453_58726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (10))){
var inst_57431 = (state_57439[(2)]);
var state_57439__$1 = state_57439;
var statearr_57454_58727 = state_57439__$1;
(statearr_57454_58727[(2)] = inst_57431);

(statearr_57454_58727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57440 === (8))){
var inst_57416 = (state_57439[(7)]);
var tmp57451 = inst_57416;
var inst_57416__$1 = tmp57451;
var state_57439__$1 = (function (){var statearr_57455 = state_57439;
(statearr_57455[(7)] = inst_57416__$1);

return statearr_57455;
})();
var statearr_57456_58728 = state_57439__$1;
(statearr_57456_58728[(2)] = null);

(statearr_57456_58728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56001__auto__ = null;
var cljs$core$async$state_machine__56001__auto____0 = (function (){
var statearr_57457 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57457[(0)] = cljs$core$async$state_machine__56001__auto__);

(statearr_57457[(1)] = (1));

return statearr_57457;
});
var cljs$core$async$state_machine__56001__auto____1 = (function (state_57439){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_57439);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e57458){if((e57458 instanceof Object)){
var ex__56004__auto__ = e57458;
var statearr_57459_58730 = state_57439;
(statearr_57459_58730[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57458;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58731 = state_57439;
state_57439 = G__58731;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$state_machine__56001__auto__ = function(state_57439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56001__auto____1.call(this,state_57439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56001__auto____0;
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56001__auto____1;
return cljs$core$async$state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_57460 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_57460[(6)] = c__56101__auto___58716);

return statearr_57460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__57462 = arguments.length;
switch (G__57462) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56101__auto___58733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_57500){
var state_val_57501 = (state_57500[(1)]);
if((state_val_57501 === (7))){
var inst_57496 = (state_57500[(2)]);
var state_57500__$1 = state_57500;
var statearr_57502_58734 = state_57500__$1;
(statearr_57502_58734[(2)] = inst_57496);

(statearr_57502_58734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57501 === (1))){
var inst_57463 = (new Array(n));
var inst_57464 = inst_57463;
var inst_57465 = (0);
var state_57500__$1 = (function (){var statearr_57503 = state_57500;
(statearr_57503[(7)] = inst_57464);

(statearr_57503[(8)] = inst_57465);

return statearr_57503;
})();
var statearr_57504_58735 = state_57500__$1;
(statearr_57504_58735[(2)] = null);

(statearr_57504_58735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57501 === (4))){
var inst_57468 = (state_57500[(9)]);
var inst_57468__$1 = (state_57500[(2)]);
var inst_57469 = (inst_57468__$1 == null);
var inst_57470 = cljs.core.not(inst_57469);
var state_57500__$1 = (function (){var statearr_57505 = state_57500;
(statearr_57505[(9)] = inst_57468__$1);

return statearr_57505;
})();
if(inst_57470){
var statearr_57506_58736 = state_57500__$1;
(statearr_57506_58736[(1)] = (5));

} else {
var statearr_57507_58737 = state_57500__$1;
(statearr_57507_58737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57501 === (15))){
var inst_57490 = (state_57500[(2)]);
var state_57500__$1 = state_57500;
var statearr_57508_58738 = state_57500__$1;
(statearr_57508_58738[(2)] = inst_57490);

(statearr_57508_58738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57501 === (13))){
var state_57500__$1 = state_57500;
var statearr_57509_58739 = state_57500__$1;
(statearr_57509_58739[(2)] = null);

(statearr_57509_58739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57501 === (6))){
var inst_57465 = (state_57500[(8)]);
var inst_57486 = (inst_57465 > (0));
var state_57500__$1 = state_57500;
if(cljs.core.truth_(inst_57486)){
var statearr_57510_58740 = state_57500__$1;
(statearr_57510_58740[(1)] = (12));

} else {
var statearr_57511_58741 = state_57500__$1;
(statearr_57511_58741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57501 === (3))){
var inst_57498 = (state_57500[(2)]);
var state_57500__$1 = state_57500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57500__$1,inst_57498);
} else {
if((state_val_57501 === (12))){
var inst_57464 = (state_57500[(7)]);
var inst_57488 = cljs.core.vec(inst_57464);
var state_57500__$1 = state_57500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57500__$1,(15),out,inst_57488);
} else {
if((state_val_57501 === (2))){
var state_57500__$1 = state_57500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57500__$1,(4),ch);
} else {
if((state_val_57501 === (11))){
var inst_57480 = (state_57500[(2)]);
var inst_57481 = (new Array(n));
var inst_57464 = inst_57481;
var inst_57465 = (0);
var state_57500__$1 = (function (){var statearr_57512 = state_57500;
(statearr_57512[(10)] = inst_57480);

(statearr_57512[(7)] = inst_57464);

(statearr_57512[(8)] = inst_57465);

return statearr_57512;
})();
var statearr_57513_58748 = state_57500__$1;
(statearr_57513_58748[(2)] = null);

(statearr_57513_58748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57501 === (9))){
var inst_57464 = (state_57500[(7)]);
var inst_57478 = cljs.core.vec(inst_57464);
var state_57500__$1 = state_57500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57500__$1,(11),out,inst_57478);
} else {
if((state_val_57501 === (5))){
var inst_57468 = (state_57500[(9)]);
var inst_57464 = (state_57500[(7)]);
var inst_57473 = (state_57500[(11)]);
var inst_57465 = (state_57500[(8)]);
var inst_57472 = (inst_57464[inst_57465] = inst_57468);
var inst_57473__$1 = (inst_57465 + (1));
var inst_57474 = (inst_57473__$1 < n);
var state_57500__$1 = (function (){var statearr_57514 = state_57500;
(statearr_57514[(11)] = inst_57473__$1);

(statearr_57514[(12)] = inst_57472);

return statearr_57514;
})();
if(cljs.core.truth_(inst_57474)){
var statearr_57515_58759 = state_57500__$1;
(statearr_57515_58759[(1)] = (8));

} else {
var statearr_57516_58760 = state_57500__$1;
(statearr_57516_58760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57501 === (14))){
var inst_57493 = (state_57500[(2)]);
var inst_57494 = cljs.core.async.close_BANG_(out);
var state_57500__$1 = (function (){var statearr_57518 = state_57500;
(statearr_57518[(13)] = inst_57493);

return statearr_57518;
})();
var statearr_57519_58761 = state_57500__$1;
(statearr_57519_58761[(2)] = inst_57494);

(statearr_57519_58761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57501 === (10))){
var inst_57484 = (state_57500[(2)]);
var state_57500__$1 = state_57500;
var statearr_57520_58762 = state_57500__$1;
(statearr_57520_58762[(2)] = inst_57484);

(statearr_57520_58762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57501 === (8))){
var inst_57464 = (state_57500[(7)]);
var inst_57473 = (state_57500[(11)]);
var tmp57517 = inst_57464;
var inst_57464__$1 = tmp57517;
var inst_57465 = inst_57473;
var state_57500__$1 = (function (){var statearr_57521 = state_57500;
(statearr_57521[(7)] = inst_57464__$1);

(statearr_57521[(8)] = inst_57465);

return statearr_57521;
})();
var statearr_57522_58763 = state_57500__$1;
(statearr_57522_58763[(2)] = null);

(statearr_57522_58763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56001__auto__ = null;
var cljs$core$async$state_machine__56001__auto____0 = (function (){
var statearr_57523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57523[(0)] = cljs$core$async$state_machine__56001__auto__);

(statearr_57523[(1)] = (1));

return statearr_57523;
});
var cljs$core$async$state_machine__56001__auto____1 = (function (state_57500){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_57500);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e57524){if((e57524 instanceof Object)){
var ex__56004__auto__ = e57524;
var statearr_57525_58764 = state_57500;
(statearr_57525_58764[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57524;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58767 = state_57500;
state_57500 = G__58767;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$state_machine__56001__auto__ = function(state_57500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56001__auto____1.call(this,state_57500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56001__auto____0;
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56001__auto____1;
return cljs$core$async$state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_57526 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_57526[(6)] = c__56101__auto___58733);

return statearr_57526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__57528 = arguments.length;
switch (G__57528) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__56101__auto___58772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56102__auto__ = (function (){var switch__56000__auto__ = (function (state_57570){
var state_val_57571 = (state_57570[(1)]);
if((state_val_57571 === (7))){
var inst_57566 = (state_57570[(2)]);
var state_57570__$1 = state_57570;
var statearr_57572_58773 = state_57570__$1;
(statearr_57572_58773[(2)] = inst_57566);

(statearr_57572_58773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57571 === (1))){
var inst_57529 = [];
var inst_57530 = inst_57529;
var inst_57531 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_57570__$1 = (function (){var statearr_57573 = state_57570;
(statearr_57573[(7)] = inst_57530);

(statearr_57573[(8)] = inst_57531);

return statearr_57573;
})();
var statearr_57574_58776 = state_57570__$1;
(statearr_57574_58776[(2)] = null);

(statearr_57574_58776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57571 === (4))){
var inst_57534 = (state_57570[(9)]);
var inst_57534__$1 = (state_57570[(2)]);
var inst_57535 = (inst_57534__$1 == null);
var inst_57536 = cljs.core.not(inst_57535);
var state_57570__$1 = (function (){var statearr_57575 = state_57570;
(statearr_57575[(9)] = inst_57534__$1);

return statearr_57575;
})();
if(inst_57536){
var statearr_57576_58778 = state_57570__$1;
(statearr_57576_58778[(1)] = (5));

} else {
var statearr_57577_58779 = state_57570__$1;
(statearr_57577_58779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57571 === (15))){
var inst_57560 = (state_57570[(2)]);
var state_57570__$1 = state_57570;
var statearr_57578_58780 = state_57570__$1;
(statearr_57578_58780[(2)] = inst_57560);

(statearr_57578_58780[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57571 === (13))){
var state_57570__$1 = state_57570;
var statearr_57579_58781 = state_57570__$1;
(statearr_57579_58781[(2)] = null);

(statearr_57579_58781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57571 === (6))){
var inst_57530 = (state_57570[(7)]);
var inst_57555 = inst_57530.length;
var inst_57556 = (inst_57555 > (0));
var state_57570__$1 = state_57570;
if(cljs.core.truth_(inst_57556)){
var statearr_57580_58782 = state_57570__$1;
(statearr_57580_58782[(1)] = (12));

} else {
var statearr_57581_58783 = state_57570__$1;
(statearr_57581_58783[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57571 === (3))){
var inst_57568 = (state_57570[(2)]);
var state_57570__$1 = state_57570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57570__$1,inst_57568);
} else {
if((state_val_57571 === (12))){
var inst_57530 = (state_57570[(7)]);
var inst_57558 = cljs.core.vec(inst_57530);
var state_57570__$1 = state_57570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57570__$1,(15),out,inst_57558);
} else {
if((state_val_57571 === (2))){
var state_57570__$1 = state_57570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57570__$1,(4),ch);
} else {
if((state_val_57571 === (11))){
var inst_57538 = (state_57570[(10)]);
var inst_57534 = (state_57570[(9)]);
var inst_57548 = (state_57570[(2)]);
var inst_57549 = [];
var inst_57550 = inst_57549.push(inst_57534);
var inst_57530 = inst_57549;
var inst_57531 = inst_57538;
var state_57570__$1 = (function (){var statearr_57582 = state_57570;
(statearr_57582[(11)] = inst_57548);

(statearr_57582[(7)] = inst_57530);

(statearr_57582[(8)] = inst_57531);

(statearr_57582[(12)] = inst_57550);

return statearr_57582;
})();
var statearr_57583_58791 = state_57570__$1;
(statearr_57583_58791[(2)] = null);

(statearr_57583_58791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57571 === (9))){
var inst_57530 = (state_57570[(7)]);
var inst_57546 = cljs.core.vec(inst_57530);
var state_57570__$1 = state_57570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57570__$1,(11),out,inst_57546);
} else {
if((state_val_57571 === (5))){
var inst_57538 = (state_57570[(10)]);
var inst_57534 = (state_57570[(9)]);
var inst_57531 = (state_57570[(8)]);
var inst_57538__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57534) : f.call(null,inst_57534));
var inst_57539 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57538__$1,inst_57531);
var inst_57540 = cljs.core.keyword_identical_QMARK_(inst_57531,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_57541 = ((inst_57539) || (inst_57540));
var state_57570__$1 = (function (){var statearr_57584 = state_57570;
(statearr_57584[(10)] = inst_57538__$1);

return statearr_57584;
})();
if(cljs.core.truth_(inst_57541)){
var statearr_57585_58794 = state_57570__$1;
(statearr_57585_58794[(1)] = (8));

} else {
var statearr_57586_58795 = state_57570__$1;
(statearr_57586_58795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57571 === (14))){
var inst_57563 = (state_57570[(2)]);
var inst_57564 = cljs.core.async.close_BANG_(out);
var state_57570__$1 = (function (){var statearr_57588 = state_57570;
(statearr_57588[(13)] = inst_57563);

return statearr_57588;
})();
var statearr_57589_58796 = state_57570__$1;
(statearr_57589_58796[(2)] = inst_57564);

(statearr_57589_58796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57571 === (10))){
var inst_57553 = (state_57570[(2)]);
var state_57570__$1 = state_57570;
var statearr_57590_58797 = state_57570__$1;
(statearr_57590_58797[(2)] = inst_57553);

(statearr_57590_58797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57571 === (8))){
var inst_57538 = (state_57570[(10)]);
var inst_57530 = (state_57570[(7)]);
var inst_57534 = (state_57570[(9)]);
var inst_57543 = inst_57530.push(inst_57534);
var tmp57587 = inst_57530;
var inst_57530__$1 = tmp57587;
var inst_57531 = inst_57538;
var state_57570__$1 = (function (){var statearr_57591 = state_57570;
(statearr_57591[(7)] = inst_57530__$1);

(statearr_57591[(14)] = inst_57543);

(statearr_57591[(8)] = inst_57531);

return statearr_57591;
})();
var statearr_57592_58799 = state_57570__$1;
(statearr_57592_58799[(2)] = null);

(statearr_57592_58799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__56001__auto__ = null;
var cljs$core$async$state_machine__56001__auto____0 = (function (){
var statearr_57593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57593[(0)] = cljs$core$async$state_machine__56001__auto__);

(statearr_57593[(1)] = (1));

return statearr_57593;
});
var cljs$core$async$state_machine__56001__auto____1 = (function (state_57570){
while(true){
var ret_value__56002__auto__ = (function (){try{while(true){
var result__56003__auto__ = switch__56000__auto__(state_57570);
if(cljs.core.keyword_identical_QMARK_(result__56003__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56003__auto__;
}
break;
}
}catch (e57594){if((e57594 instanceof Object)){
var ex__56004__auto__ = e57594;
var statearr_57595_58848 = state_57570;
(statearr_57595_58848[(5)] = ex__56004__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56002__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58854 = state_57570;
state_57570 = G__58854;
continue;
} else {
return ret_value__56002__auto__;
}
break;
}
});
cljs$core$async$state_machine__56001__auto__ = function(state_57570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56001__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56001__auto____1.call(this,state_57570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56001__auto____0;
cljs$core$async$state_machine__56001__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56001__auto____1;
return cljs$core$async$state_machine__56001__auto__;
})()
})();
var state__56103__auto__ = (function (){var statearr_57596 = (f__56102__auto__.cljs$core$IFn$_invoke$arity$0 ? f__56102__auto__.cljs$core$IFn$_invoke$arity$0() : f__56102__auto__.call(null));
(statearr_57596[(6)] = c__56101__auto___58772);

return statearr_57596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56103__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
