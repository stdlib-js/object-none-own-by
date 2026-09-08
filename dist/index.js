"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var a=s(function(w,i){
var o=require('@stdlib/assert-has-own-property/dist'),f=require('@stdlib/assert-is-function/dist'),m=require('@stdlib/assert-is-object/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function v(e,r,t){var n;if(!m(e))throw new TypeError(u('2aX3L',e));if(!f(r))throw new TypeError(u('2aX2H',r));for(n in e)if(o(e,n)&&r.call(t,e[n],n,e))return!1;return!0}i.exports=v
});var c=a();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
