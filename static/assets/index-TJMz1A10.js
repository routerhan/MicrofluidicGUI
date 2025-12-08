(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();var uu={exports:{}},Ro={},fu={exports:{}},vt={};var zh;function V_(){if(zh)return vt;zh=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function y(N,W,Y){this.props=N,this.context=W,this.refs=E,this.updater=Y||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,W){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,W,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=y.prototype;function P(N,W,Y){this.props=N,this.context=W,this.refs=E,this.updater=Y||S}var A=P.prototype=new _;A.constructor=P,T(A,y.prototype),A.isPureReactComponent=!0;var D=Array.isArray,V=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function ue(N,W,Y){var ae,he={},we=null,Re=null;if(W!=null)for(ae in W.ref!==void 0&&(Re=W.ref),W.key!==void 0&&(we=""+W.key),W)V.call(W,ae)&&!U.hasOwnProperty(ae)&&(he[ae]=W[ae]);var De=arguments.length-2;if(De===1)he.children=Y;else if(1<De){for(var Ne=Array(De),ze=0;ze<De;ze++)Ne[ze]=arguments[ze+2];he.children=Ne}if(N&&N.defaultProps)for(ae in De=N.defaultProps,De)he[ae]===void 0&&(he[ae]=De[ae]);return{$$typeof:o,type:N,key:we,ref:Re,props:he,_owner:O.current}}function R(N,W){return{$$typeof:o,type:N.type,key:W,ref:N.ref,props:N.props,_owner:N._owner}}function L(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function te(N){var W={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Y){return W[Y]})}var ce=/\/+/g;function pe(N,W){return typeof N=="object"&&N!==null&&N.key!=null?te(""+N.key):W.toString(36)}function B(N,W,Y,ae,he){var we=typeof N;(we==="undefined"||we==="boolean")&&(N=null);var Re=!1;if(N===null)Re=!0;else switch(we){case"string":case"number":Re=!0;break;case"object":switch(N.$$typeof){case o:case e:Re=!0}}if(Re)return Re=N,he=he(Re),N=ae===""?"."+pe(Re,0):ae,D(he)?(Y="",N!=null&&(Y=N.replace(ce,"$&/")+"/"),B(he,W,Y,"",function(ze){return ze})):he!=null&&(L(he)&&(he=R(he,Y+(!he.key||Re&&Re.key===he.key?"":(""+he.key).replace(ce,"$&/")+"/")+N)),W.push(he)),1;if(Re=0,ae=ae===""?".":ae+":",D(N))for(var De=0;De<N.length;De++){we=N[De];var Ne=ae+pe(we,De);Re+=B(we,W,Y,Ne,he)}else if(Ne=x(N),typeof Ne=="function")for(N=Ne.call(N),De=0;!(we=N.next()).done;)we=we.value,Ne=ae+pe(we,De++),Re+=B(we,W,Y,Ne,he);else if(we==="object")throw W=String(N),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return Re}function Q(N,W,Y){if(N==null)return N;var ae=[],he=0;return B(N,ae,"","",function(we){return W.call(Y,we,he++)}),ae}function ee(N){if(N._status===-1){var W=N._result;W=W(),W.then(function(Y){(N._status===0||N._status===-1)&&(N._status=1,N._result=Y)},function(Y){(N._status===0||N._status===-1)&&(N._status=2,N._result=Y)}),N._status===-1&&(N._status=0,N._result=W)}if(N._status===1)return N._result.default;throw N._result}var oe={current:null},H={transition:null},$={ReactCurrentDispatcher:oe,ReactCurrentBatchConfig:H,ReactCurrentOwner:O};function X(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:Q,forEach:function(N,W,Y){Q(N,function(){W.apply(this,arguments)},Y)},count:function(N){var W=0;return Q(N,function(){W++}),W},toArray:function(N){return Q(N,function(W){return W})||[]},only:function(N){if(!L(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},vt.Component=y,vt.Fragment=n,vt.Profiler=a,vt.PureComponent=P,vt.StrictMode=r,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,vt.act=X,vt.cloneElement=function(N,W,Y){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var ae=T({},N.props),he=N.key,we=N.ref,Re=N._owner;if(W!=null){if(W.ref!==void 0&&(we=W.ref,Re=O.current),W.key!==void 0&&(he=""+W.key),N.type&&N.type.defaultProps)var De=N.type.defaultProps;for(Ne in W)V.call(W,Ne)&&!U.hasOwnProperty(Ne)&&(ae[Ne]=W[Ne]===void 0&&De!==void 0?De[Ne]:W[Ne])}var Ne=arguments.length-2;if(Ne===1)ae.children=Y;else if(1<Ne){De=Array(Ne);for(var ze=0;ze<Ne;ze++)De[ze]=arguments[ze+2];ae.children=De}return{$$typeof:o,type:N.type,key:he,ref:we,props:ae,_owner:Re}},vt.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:c,_context:N},N.Consumer=N},vt.createElement=ue,vt.createFactory=function(N){var W=ue.bind(null,N);return W.type=N,W},vt.createRef=function(){return{current:null}},vt.forwardRef=function(N){return{$$typeof:u,render:N}},vt.isValidElement=L,vt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:ee}},vt.memo=function(N,W){return{$$typeof:p,type:N,compare:W===void 0?null:W}},vt.startTransition=function(N){var W=H.transition;H.transition={};try{N()}finally{H.transition=W}},vt.unstable_act=X,vt.useCallback=function(N,W){return oe.current.useCallback(N,W)},vt.useContext=function(N){return oe.current.useContext(N)},vt.useDebugValue=function(){},vt.useDeferredValue=function(N){return oe.current.useDeferredValue(N)},vt.useEffect=function(N,W){return oe.current.useEffect(N,W)},vt.useId=function(){return oe.current.useId()},vt.useImperativeHandle=function(N,W,Y){return oe.current.useImperativeHandle(N,W,Y)},vt.useInsertionEffect=function(N,W){return oe.current.useInsertionEffect(N,W)},vt.useLayoutEffect=function(N,W){return oe.current.useLayoutEffect(N,W)},vt.useMemo=function(N,W){return oe.current.useMemo(N,W)},vt.useReducer=function(N,W,Y){return oe.current.useReducer(N,W,Y)},vt.useRef=function(N){return oe.current.useRef(N)},vt.useState=function(N){return oe.current.useState(N)},vt.useSyncExternalStore=function(N,W,Y){return oe.current.useSyncExternalStore(N,W,Y)},vt.useTransition=function(){return oe.current.useTransition()},vt.version="18.3.1",vt}var Bh;function of(){return Bh||(Bh=1,fu.exports=V_()),fu.exports}var Hh;function W_(){if(Hh)return Ro;Hh=1;var o=of(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(u,h,p){var m,v={},x=null,S=null;p!==void 0&&(x=""+p),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(m in h)r.call(h,m)&&!c.hasOwnProperty(m)&&(v[m]=h[m]);if(u&&u.defaultProps)for(m in h=u.defaultProps,h)v[m]===void 0&&(v[m]=h[m]);return{$$typeof:e,type:u,key:x,ref:S,props:v,_owner:a.current}}return Ro.Fragment=n,Ro.jsx=f,Ro.jsxs=f,Ro}var Gh;function X_(){return Gh||(Gh=1,uu.exports=W_()),uu.exports}var de=X_(),ot=of(),ja={},du={exports:{}},Dn={},hu={exports:{}},pu={};var Vh;function j_(){return Vh||(Vh=1,(function(o){function e(H,$){var X=H.length;H.push($);e:for(;0<X;){var N=X-1>>>1,W=H[N];if(0<a(W,$))H[N]=$,H[X]=W,X=N;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var $=H[0],X=H.pop();if(X!==$){H[0]=X;e:for(var N=0,W=H.length,Y=W>>>1;N<Y;){var ae=2*(N+1)-1,he=H[ae],we=ae+1,Re=H[we];if(0>a(he,X))we<W&&0>a(Re,he)?(H[N]=Re,H[we]=X,N=we):(H[N]=he,H[ae]=X,N=ae);else if(we<W&&0>a(Re,X))H[N]=Re,H[we]=X,N=we;else break e}}return $}function a(H,$){var X=H.sortIndex-$.sortIndex;return X!==0?X:H.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var f=Date,u=f.now();o.unstable_now=function(){return f.now()-u}}var h=[],p=[],m=1,v=null,x=3,S=!1,T=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(H){for(var $=n(p);$!==null;){if($.callback===null)r(p);else if($.startTime<=H)r(p),$.sortIndex=$.expirationTime,e(h,$);else break;$=n(p)}}function D(H){if(E=!1,A(H),!T)if(n(h)!==null)T=!0,ee(V);else{var $=n(p);$!==null&&oe(D,$.startTime-H)}}function V(H,$){T=!1,E&&(E=!1,_(ue),ue=-1),S=!0;var X=x;try{for(A($),v=n(h);v!==null&&(!(v.expirationTime>$)||H&&!te());){var N=v.callback;if(typeof N=="function"){v.callback=null,x=v.priorityLevel;var W=N(v.expirationTime<=$);$=o.unstable_now(),typeof W=="function"?v.callback=W:v===n(h)&&r(h),A($)}else r(h);v=n(h)}if(v!==null)var Y=!0;else{var ae=n(p);ae!==null&&oe(D,ae.startTime-$),Y=!1}return Y}finally{v=null,x=X,S=!1}}var O=!1,U=null,ue=-1,R=5,L=-1;function te(){return!(o.unstable_now()-L<R)}function ce(){if(U!==null){var H=o.unstable_now();L=H;var $=!0;try{$=U(!0,H)}finally{$?pe():(O=!1,U=null)}}else O=!1}var pe;if(typeof P=="function")pe=function(){P(ce)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,Q=B.port2;B.port1.onmessage=ce,pe=function(){Q.postMessage(null)}}else pe=function(){y(ce,0)};function ee(H){U=H,O||(O=!0,pe())}function oe(H,$){ue=y(function(){H(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_continueExecution=function(){T||S||(T=!0,ee(V))},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(h)},o.unstable_next=function(H){switch(x){case 1:case 2:case 3:var $=3;break;default:$=x}var X=x;x=$;try{return H()}finally{x=X}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(H,$){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var X=x;x=H;try{return $()}finally{x=X}},o.unstable_scheduleCallback=function(H,$,X){var N=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?N+X:N):X=N,H){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=X+W,H={id:m++,callback:$,priorityLevel:H,startTime:X,expirationTime:W,sortIndex:-1},X>N?(H.sortIndex=X,e(p,H),n(h)===null&&H===n(p)&&(E?(_(ue),ue=-1):E=!0,oe(D,X-N))):(H.sortIndex=W,e(h,H),T||S||(T=!0,ee(V))),H},o.unstable_shouldYield=te,o.unstable_wrapCallback=function(H){var $=x;return function(){var X=x;x=$;try{return H.apply(this,arguments)}finally{x=X}}}})(pu)),pu}var Wh;function Y_(){return Wh||(Wh=1,hu.exports=j_()),hu.exports}var Xh;function q_(){if(Xh)return Dn;Xh=1;var o=of(),e=Y_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function x(t){return h.call(v,t)?!0:h.call(m,t)?!1:p.test(t)?v[t]=!0:(m[t]=!0,!1)}function S(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,s,l){if(i===null||typeof i>"u"||S(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(t,i,s,l,d,g,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=g,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new E(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new E(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new E(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new E(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new E(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new E(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new E(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new E(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new E(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function P(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,P);y[i]=new E(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,P);y[i]=new E(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,P);y[i]=new E(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new E(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new E(t,1,!1,t.toLowerCase(),null,!0,!0)});function A(t,i,s,l){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,d,l)&&(s=null),l||d===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):d.mustUseProperty?t[d.propertyName]=s===null?d.type===3?!1:"":s:(i=d.attributeName,l=d.attributeNamespace,s===null?t.removeAttribute(i):(d=d.type,s=d===3||d===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var D=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),ue=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),te=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),oe=Symbol.for("react.offscreen"),H=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,N;function W(t){if(N===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var Y=!1;function ae(t,i){if(!t||Y)return"";Y=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ie){var l=ie}Reflect.construct(t,[],i)}else{try{i.call()}catch(ie){l=ie}t.call(i.prototype)}else{try{throw Error()}catch(ie){l=ie}t()}}catch(ie){if(ie&&l&&typeof ie.stack=="string"){for(var d=ie.stack.split(`
`),g=l.stack.split(`
`),M=d.length-1,I=g.length-1;1<=M&&0<=I&&d[M]!==g[I];)I--;for(;1<=M&&0<=I;M--,I--)if(d[M]!==g[I]){if(M!==1||I!==1)do if(M--,I--,0>I||d[M]!==g[I]){var z=`
`+d[M].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=M&&0<=I);break}}}finally{Y=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?W(t):""}function he(t){switch(t.tag){case 5:return W(t.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return t=ae(t.type,!1),t;case 11:return t=ae(t.type.render,!1),t;case 1:return t=ae(t.type,!0),t;default:return""}}function we(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case O:return"Portal";case R:return"Profiler";case ue:return"StrictMode";case pe:return"Suspense";case B:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case te:return(t.displayName||"Context")+".Consumer";case L:return(t._context.displayName||"Context")+".Provider";case ce:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return i=t.displayName||null,i!==null?i:we(t.type)||"Memo";case ee:i=t._payload,t=t._init;try{return we(t(i))}catch{}}return null}function Re(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===ue?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function De(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ze(t){var i=Ne(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var d=s.get,g=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){l=""+M,g.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ut(t){t._valueTracker||(t._valueTracker=ze(t))}function ne(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ne(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fe(t,i){var s=i.checked;return X({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function Ge(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=De(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ce(t,i){i=i.checked,i!=null&&A(t,"checked",i,!1)}function St(t,i){Ce(t,i);var s=De(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?b(t,i.type,s):i.hasOwnProperty("defaultValue")&&b(t,i.type,De(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function nt(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function b(t,i,s){(i!=="number"||Lt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var w=Array.isArray;function Z(t,i,s,l){if(t=t.options,i){i={};for(var d=0;d<s.length;d++)i["$"+s[d]]=!0;for(s=0;s<t.length;s++)d=i.hasOwnProperty("$"+t[s].value),t[s].selected!==d&&(t[s].selected=d),d&&l&&(t[s].defaultSelected=!0)}else{for(s=""+De(s),i=null,d=0;d<t.length;d++){if(t[d].value===s){t[d].selected=!0,l&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function xe(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return X({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ye(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(w(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:De(s)}}function Me(t,i){var s=De(i.value),l=De(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function Xe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Le(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ke(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Le(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $e,at=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,d){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,d)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for($e=$e||document.createElement("div"),$e.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$e.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ge(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Mt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ft=["Webkit","ms","Moz","O"];Object.keys(Mt).forEach(function(t){ft.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Mt[i]=Mt[t]})});function it(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Mt.hasOwnProperty(t)&&Mt[t]?(""+i).trim():i+"px"}function qe(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,d=it(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,d):t[s]=d}}var Ue=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function F(t,i){if(i){if(Ue[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Te(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var je=null;function Oe(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ve=null,k=null,Ee=null;function Pe(t){if(t=fo(t)){if(typeof ve!="function")throw Error(n(280));var i=t.stateNode;i&&(i=aa(i),ve(t.stateNode,t.type,i))}}function et(t){k?Ee?Ee.push(t):Ee=[t]:k=t}function Ze(){if(k){var t=k,i=Ee;if(Ee=k=null,Pe(t),i)for(t=0;t<i.length;t++)Pe(i[t])}}function mt(t,i){return t(i)}function gt(){}var Ct=!1;function It(t,i,s){if(Ct)return t(i,s);Ct=!0;try{return mt(t,i,s)}finally{Ct=!1,(k!==null||Ee!==null)&&(gt(),Ze())}}function _t(t,i){var s=t.stateNode;if(s===null)return null;var l=aa(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Ft=!1;if(u)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){Ft=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{Ft=!1}function Bo(t,i,s,l,d,g,M,I,z){var ie=Array.prototype.slice.call(arguments,3);try{i.apply(s,ie)}catch(_e){this.onError(_e)}}var Sr=!1,_i=null,Mr=!1,Bi=null,Ho={onError:function(t){Sr=!0,_i=t}};function Go(t,i,s,l,d,g,M,I,z){Sr=!1,_i=null,Bo.apply(Ho,arguments)}function Dl(t,i,s,l,d,g,M,I,z){if(Go.apply(this,arguments),Sr){if(Sr){var ie=_i;Sr=!1,_i=null}else throw Error(n(198));Mr||(Mr=!0,Bi=ie)}}function vi(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Vo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function C(t){if(vi(t)!==t)throw Error(n(188))}function K(t){var i=t.alternate;if(!i){if(i=vi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var d=s.return;if(d===null)break;var g=d.alternate;if(g===null){if(l=d.return,l!==null){s=l;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===s)return C(d),t;if(g===l)return C(d),i;g=g.sibling}throw Error(n(188))}if(s.return!==l.return)s=d,l=g;else{for(var M=!1,I=d.child;I;){if(I===s){M=!0,s=d,l=g;break}if(I===l){M=!0,l=d,s=g;break}I=I.sibling}if(!M){for(I=g.child;I;){if(I===s){M=!0,s=g,l=d;break}if(I===l){M=!0,l=g,s=d;break}I=I.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function se(t){return t=K(t),t!==null?le(t):null}function le(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=le(t);if(i!==null)return i;t=t.sibling}return null}var re=e.unstable_scheduleCallback,Ie=e.unstable_cancelCallback,Ke=e.unstable_shouldYield,tt=e.unstable_requestPaint,Be=e.unstable_now,dt=e.unstable_getCurrentPriorityLevel,st=e.unstable_ImmediatePriority,lt=e.unstable_UserBlockingPriority,bt=e.unstable_NormalPriority,_n=e.unstable_LowPriority,Xt=e.unstable_IdlePriority,wn=null,Et=null;function ht(t){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(wn,t,void 0,(t.current.flags&128)===128)}catch{}}var vn=Math.clz32?Math.clz32:Wo,Ot=Math.log,xi=Math.LN2;function Wo(t){return t>>>=0,t===0?32:31-(Ot(t)/xi|0)|0}var fi=64,Hi=4194304;function Vt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vn(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,d=t.suspendedLanes,g=t.pingedLanes,M=s&268435455;if(M!==0){var I=M&~d;I!==0?l=Vt(I):(g&=M,g!==0&&(l=Vt(g)))}else M=s&~d,M!==0?l=Vt(M):g!==0&&(l=Vt(g));if(l===0)return 0;if(i!==0&&i!==l&&(i&d)===0&&(d=l&-l,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-vn(i),d=1<<s,l|=t[s],i&=~d;return l}function Ys(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function An(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,d=t.expirationTimes,g=t.pendingLanes;0<g;){var M=31-vn(g),I=1<<M,z=d[M];z===-1?((I&s)===0||(I&l)!==0)&&(d[M]=Ys(I,i)):z<=i&&(t.expiredLanes|=I),g&=~I}}function Er(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xo(){var t=fi;return fi<<=1,(fi&4194240)===0&&(fi=64),t}function Kr(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function qs(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-vn(i),t[i]=s}function ug(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var d=31-vn(s),g=1<<d;i[d]=0,l[d]=-1,t[d]=-1,s&=~g}}function Nl(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-vn(s),d=1<<l;d&i|t[l]&i&&(t[l]|=i),s&=~d}}var At=0;function _f(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var vf,Ul,xf,yf,Sf,Il=!1,jo=[],Gi=null,Vi=null,Wi=null,Ks=new Map,$s=new Map,Xi=[],fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mf(t,i){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Ks.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(i.pointerId)}}function Zs(t,i,s,l,d,g){return t===null||t.nativeEvent!==g?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:g,targetContainers:[d]},i!==null&&(i=fo(i),i!==null&&Ul(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function dg(t,i,s,l,d){switch(i){case"focusin":return Gi=Zs(Gi,t,i,s,l,d),!0;case"dragenter":return Vi=Zs(Vi,t,i,s,l,d),!0;case"mouseover":return Wi=Zs(Wi,t,i,s,l,d),!0;case"pointerover":var g=d.pointerId;return Ks.set(g,Zs(Ks.get(g)||null,t,i,s,l,d)),!0;case"gotpointercapture":return g=d.pointerId,$s.set(g,Zs($s.get(g)||null,t,i,s,l,d)),!0}return!1}function Ef(t){var i=Tr(t.target);if(i!==null){var s=vi(i);if(s!==null){if(i=s.tag,i===13){if(i=Vo(s),i!==null){t.blockedOn=i,Sf(t.priority,function(){xf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ol(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);je=l,s.target.dispatchEvent(l),je=null}else return i=fo(s),i!==null&&Ul(i),t.blockedOn=s,!1;i.shift()}return!0}function Tf(t,i,s){Yo(t)&&s.delete(i)}function hg(){Il=!1,Gi!==null&&Yo(Gi)&&(Gi=null),Vi!==null&&Yo(Vi)&&(Vi=null),Wi!==null&&Yo(Wi)&&(Wi=null),Ks.forEach(Tf),$s.forEach(Tf)}function Qs(t,i){t.blockedOn===i&&(t.blockedOn=null,Il||(Il=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hg)))}function Js(t){function i(d){return Qs(d,t)}if(0<jo.length){Qs(jo[0],t);for(var s=1;s<jo.length;s++){var l=jo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Gi!==null&&Qs(Gi,t),Vi!==null&&Qs(Vi,t),Wi!==null&&Qs(Wi,t),Ks.forEach(i),$s.forEach(i),s=0;s<Xi.length;s++)l=Xi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Xi.length&&(s=Xi[0],s.blockedOn===null);)Ef(s),s.blockedOn===null&&Xi.shift()}var $r=D.ReactCurrentBatchConfig,qo=!0;function pg(t,i,s,l){var d=At,g=$r.transition;$r.transition=null;try{At=1,Fl(t,i,s,l)}finally{At=d,$r.transition=g}}function mg(t,i,s,l){var d=At,g=$r.transition;$r.transition=null;try{At=4,Fl(t,i,s,l)}finally{At=d,$r.transition=g}}function Fl(t,i,s,l){if(qo){var d=Ol(t,i,s,l);if(d===null)ec(t,i,l,Ko,s),Mf(t,l);else if(dg(d,t,i,s,l))l.stopPropagation();else if(Mf(t,l),i&4&&-1<fg.indexOf(t)){for(;d!==null;){var g=fo(d);if(g!==null&&vf(g),g=Ol(t,i,s,l),g===null&&ec(t,i,l,Ko,s),g===d)break;d=g}d!==null&&l.stopPropagation()}else ec(t,i,l,null,s)}}var Ko=null;function Ol(t,i,s,l){if(Ko=null,t=Oe(l),t=Tr(t),t!==null)if(i=vi(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Vo(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Ko=t,null}function wf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dt()){case st:return 1;case lt:return 4;case bt:case _n:return 16;case Xt:return 536870912;default:return 16}default:return 16}}var ji=null,kl=null,$o=null;function Af(){if($o)return $o;var t,i=kl,s=i.length,l,d="value"in ji?ji.value:ji.textContent,g=d.length;for(t=0;t<s&&i[t]===d[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===d[g-l];l++);return $o=d.slice(t,1<l?1-l:void 0)}function Zo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function Rf(){return!1}function Fn(t){function i(s,l,d,g,M){this._reactName=s,this._targetInst=d,this.type=l,this.nativeEvent=g,this.target=M,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(s=t[I],this[I]=s?s(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Qo:Rf,this.isPropagationStopped=Rf,this}return X(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),i}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=Fn(Zr),eo=X({},Zr,{view:0,detail:0}),gg=Fn(eo),Bl,Hl,to,Jo=X({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Bl=t.screenX-to.screenX,Hl=t.screenY-to.screenY):Hl=Bl=0,to=t),Bl)},movementY:function(t){return"movementY"in t?t.movementY:Hl}}),Cf=Fn(Jo),_g=X({},Jo,{dataTransfer:0}),vg=Fn(_g),xg=X({},eo,{relatedTarget:0}),Gl=Fn(xg),yg=X({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Sg=Fn(yg),Mg=X({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Eg=Fn(Mg),Tg=X({},Zr,{data:0}),bf=Fn(Tg),wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Rg[t])?!!i[t]:!1}function Vl(){return Cg}var bg=X({},eo,{key:function(t){if(t.key){var i=wg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ag[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vl,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pg=Fn(bg),Lg=X({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pf=Fn(Lg),Dg=X({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vl}),Ng=Fn(Dg),Ug=X({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=Fn(Ug),Fg=X({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Og=Fn(Fg),kg=[9,13,27,32],Wl=u&&"CompositionEvent"in window,no=null;u&&"documentMode"in document&&(no=document.documentMode);var zg=u&&"TextEvent"in window&&!no,Lf=u&&(!Wl||no&&8<no&&11>=no),Df=" ",Nf=!1;function Uf(t,i){switch(t){case"keyup":return kg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function Bg(t,i){switch(t){case"compositionend":return If(i);case"keypress":return i.which!==32?null:(Nf=!0,Df);case"textInput":return t=i.data,t===Df&&Nf?null:t;default:return null}}function Hg(t,i){if(Qr)return t==="compositionend"||!Wl&&Uf(t,i)?(t=Af(),$o=kl=ji=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Lf&&i.locale!=="ko"?null:i.data;default:return null}}var Gg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Gg[t.type]:i==="textarea"}function Of(t,i,s,l){et(l),i=ra(i,"onChange"),0<i.length&&(s=new zl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var io=null,ro=null;function Vg(t){td(t,0)}function ea(t){var i=is(t);if(ne(i))return t}function Wg(t,i){if(t==="change")return i}var kf=!1;if(u){var Xl;if(u){var jl="oninput"in document;if(!jl){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),jl=typeof zf.oninput=="function"}Xl=jl}else Xl=!1;kf=Xl&&(!document.documentMode||9<document.documentMode)}function Bf(){io&&(io.detachEvent("onpropertychange",Hf),ro=io=null)}function Hf(t){if(t.propertyName==="value"&&ea(ro)){var i=[];Of(i,ro,t,Oe(t)),It(Vg,i)}}function Xg(t,i,s){t==="focusin"?(Bf(),io=i,ro=s,io.attachEvent("onpropertychange",Hf)):t==="focusout"&&Bf()}function jg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ea(ro)}function Yg(t,i){if(t==="click")return ea(i)}function qg(t,i){if(t==="input"||t==="change")return ea(i)}function Kg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Jn=typeof Object.is=="function"?Object.is:Kg;function so(t,i){if(Jn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var d=s[l];if(!h.call(i,d)||!Jn(t[d],i[d]))return!1}return!0}function Gf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vf(t,i){var s=Gf(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Gf(s)}}function Wf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Wf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Xf(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Lt(t.document)}return i}function Yl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function $g(t){var i=Xf(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&Wf(s.ownerDocument.documentElement,s)){if(l!==null&&Yl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=s.textContent.length,g=Math.min(l.start,d);l=l.end===void 0?g:Math.min(l.end,d),!t.extend&&g>l&&(d=l,l=g,g=d),d=Vf(s,g);var M=Vf(s,l);d&&M&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),g>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Zg=u&&"documentMode"in document&&11>=document.documentMode,Jr=null,ql=null,oo=null,Kl=!1;function jf(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Kl||Jr==null||Jr!==Lt(l)||(l=Jr,"selectionStart"in l&&Yl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oo&&so(oo,l)||(oo=l,l=ra(ql,"onSelect"),0<l.length&&(i=new zl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Jr)))}function ta(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var es={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},$l={},Yf={};u&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function na(t){if($l[t])return $l[t];if(!es[t])return t;var i=es[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Yf)return $l[t]=i[s];return t}var qf=na("animationend"),Kf=na("animationiteration"),$f=na("animationstart"),Zf=na("transitionend"),Qf=new Map,Jf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,i){Qf.set(t,i),c(i,[t])}for(var Zl=0;Zl<Jf.length;Zl++){var Ql=Jf[Zl],Qg=Ql.toLowerCase(),Jg=Ql[0].toUpperCase()+Ql.slice(1);Yi(Qg,"on"+Jg)}Yi(qf,"onAnimationEnd"),Yi(Kf,"onAnimationIteration"),Yi($f,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(Zf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function ed(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Dl(l,i,void 0,t),t.currentTarget=null}function td(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],d=l.event;l=l.listeners;e:{var g=void 0;if(i)for(var M=l.length-1;0<=M;M--){var I=l[M],z=I.instance,ie=I.currentTarget;if(I=I.listener,z!==g&&d.isPropagationStopped())break e;ed(d,I,ie),g=z}else for(M=0;M<l.length;M++){if(I=l[M],z=I.instance,ie=I.currentTarget,I=I.listener,z!==g&&d.isPropagationStopped())break e;ed(d,I,ie),g=z}}}if(Mr)throw t=Bi,Mr=!1,Bi=null,t}function Dt(t,i){var s=i[oc];s===void 0&&(s=i[oc]=new Set);var l=t+"__bubble";s.has(l)||(nd(i,t,2,!1),s.add(l))}function Jl(t,i,s){var l=0;i&&(l|=4),nd(s,t,l,i)}var ia="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[ia]){t[ia]=!0,r.forEach(function(s){s!=="selectionchange"&&(e_.has(s)||Jl(s,!1,t),Jl(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ia]||(i[ia]=!0,Jl("selectionchange",!1,i))}}function nd(t,i,s,l){switch(wf(i)){case 1:var d=pg;break;case 4:d=mg;break;default:d=Fl}s=d.bind(null,i,s,t),d=void 0,!Ft||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),l?d!==void 0?t.addEventListener(i,s,{capture:!0,passive:d}):t.addEventListener(i,s,!0):d!==void 0?t.addEventListener(i,s,{passive:d}):t.addEventListener(i,s,!1)}function ec(t,i,s,l,d){var g=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var I=l.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(M===4)for(M=l.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;M=M.return}for(;I!==null;){if(M=Tr(I),M===null)return;if(z=M.tag,z===5||z===6){l=g=M;continue e}I=I.parentNode}}l=l.return}It(function(){var ie=g,_e=Oe(s),Se=[];e:{var me=Qf.get(t);if(me!==void 0){var Fe=zl,Ve=t;switch(t){case"keypress":if(Zo(s)===0)break e;case"keydown":case"keyup":Fe=Pg;break;case"focusin":Ve="focus",Fe=Gl;break;case"focusout":Ve="blur",Fe=Gl;break;case"beforeblur":case"afterblur":Fe=Gl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Ng;break;case qf:case Kf:case $f:Fe=Sg;break;case Zf:Fe=Ig;break;case"scroll":Fe=gg;break;case"wheel":Fe=Og;break;case"copy":case"cut":case"paste":Fe=Eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=Pf}var We=(i&4)!==0,jt=!We&&t==="scroll",q=We?me!==null?me+"Capture":null:me;We=[];for(var G=ie,J;G!==null;){J=G;var Ae=J.stateNode;if(J.tag===5&&Ae!==null&&(J=Ae,q!==null&&(Ae=_t(G,q),Ae!=null&&We.push(co(G,Ae,J)))),jt)break;G=G.return}0<We.length&&(me=new Fe(me,Ve,null,s,_e),Se.push({event:me,listeners:We}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Fe=t==="mouseout"||t==="pointerout",me&&s!==je&&(Ve=s.relatedTarget||s.fromElement)&&(Tr(Ve)||Ve[yi]))break e;if((Fe||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Fe?(Ve=s.relatedTarget||s.toElement,Fe=ie,Ve=Ve?Tr(Ve):null,Ve!==null&&(jt=vi(Ve),Ve!==jt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Fe=null,Ve=ie),Fe!==Ve)){if(We=Cf,Ae="onMouseLeave",q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(We=Pf,Ae="onPointerLeave",q="onPointerEnter",G="pointer"),jt=Fe==null?me:is(Fe),J=Ve==null?me:is(Ve),me=new We(Ae,G+"leave",Fe,s,_e),me.target=jt,me.relatedTarget=J,Ae=null,Tr(_e)===ie&&(We=new We(q,G+"enter",Ve,s,_e),We.target=J,We.relatedTarget=jt,Ae=We),jt=Ae,Fe&&Ve)t:{for(We=Fe,q=Ve,G=0,J=We;J;J=ts(J))G++;for(J=0,Ae=q;Ae;Ae=ts(Ae))J++;for(;0<G-J;)We=ts(We),G--;for(;0<J-G;)q=ts(q),J--;for(;G--;){if(We===q||q!==null&&We===q.alternate)break t;We=ts(We),q=ts(q)}We=null}else We=null;Fe!==null&&id(Se,me,Fe,We,!1),Ve!==null&&jt!==null&&id(Se,jt,Ve,We,!0)}}e:{if(me=ie?is(ie):window,Fe=me.nodeName&&me.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&me.type==="file")var Ye=Wg;else if(Ff(me))if(kf)Ye=qg;else{Ye=jg;var Qe=Xg}else(Fe=me.nodeName)&&Fe.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ye=Yg);if(Ye&&(Ye=Ye(t,ie))){Of(Se,Ye,s,_e);break e}Qe&&Qe(t,me,ie),t==="focusout"&&(Qe=me._wrapperState)&&Qe.controlled&&me.type==="number"&&b(me,"number",me.value)}switch(Qe=ie?is(ie):window,t){case"focusin":(Ff(Qe)||Qe.contentEditable==="true")&&(Jr=Qe,ql=ie,oo=null);break;case"focusout":oo=ql=Jr=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,jf(Se,s,_e);break;case"selectionchange":if(Zg)break;case"keydown":case"keyup":jf(Se,s,_e)}var Je;if(Wl)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Qr?Uf(t,s)&&(rt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(rt="onCompositionStart");rt&&(Lf&&s.locale!=="ko"&&(Qr||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Qr&&(Je=Af()):(ji=_e,kl="value"in ji?ji.value:ji.textContent,Qr=!0)),Qe=ra(ie,rt),0<Qe.length&&(rt=new bf(rt,t,null,s,_e),Se.push({event:rt,listeners:Qe}),Je?rt.data=Je:(Je=If(s),Je!==null&&(rt.data=Je)))),(Je=zg?Bg(t,s):Hg(t,s))&&(ie=ra(ie,"onBeforeInput"),0<ie.length&&(_e=new bf("onBeforeInput","beforeinput",null,s,_e),Se.push({event:_e,listeners:ie}),_e.data=Je))}td(Se,i)})}function co(t,i,s){return{instance:t,listener:i,currentTarget:s}}function ra(t,i){for(var s=i+"Capture",l=[];t!==null;){var d=t,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=_t(t,s),g!=null&&l.unshift(co(t,g,d)),g=_t(t,i),g!=null&&l.push(co(t,g,d))),t=t.return}return l}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function id(t,i,s,l,d){for(var g=i._reactName,M=[];s!==null&&s!==l;){var I=s,z=I.alternate,ie=I.stateNode;if(z!==null&&z===l)break;I.tag===5&&ie!==null&&(I=ie,d?(z=_t(s,g),z!=null&&M.unshift(co(s,z,I))):d||(z=_t(s,g),z!=null&&M.push(co(s,z,I)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var t_=/\r\n?/g,n_=/\u0000|\uFFFD/g;function rd(t){return(typeof t=="string"?t:""+t).replace(t_,`
`).replace(n_,"")}function sa(t,i,s){if(i=rd(i),rd(t)!==i&&s)throw Error(n(425))}function oa(){}var tc=null,nc=null;function ic(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var rc=typeof setTimeout=="function"?setTimeout:void 0,i_=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,r_=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(t){return sd.resolve(null).then(t).catch(s_)}:rc;function s_(t){setTimeout(function(){throw t})}function sc(t,i){var s=i,l=0;do{var d=s.nextSibling;if(t.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"){if(l===0){t.removeChild(d),Js(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=d}while(s);Js(i)}function qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function od(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),di="__reactFiber$"+ns,uo="__reactProps$"+ns,yi="__reactContainer$"+ns,oc="__reactEvents$"+ns,o_="__reactListeners$"+ns,a_="__reactHandles$"+ns;function Tr(t){var i=t[di];if(i)return i;for(var s=t.parentNode;s;){if(i=s[yi]||s[di]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=od(t);t!==null;){if(s=t[di])return s;t=od(t)}return i}t=s,s=t.parentNode}return null}function fo(t){return t=t[di]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function aa(t){return t[uo]||null}var ac=[],rs=-1;function Ki(t){return{current:t}}function Nt(t){0>rs||(t.current=ac[rs],ac[rs]=null,rs--)}function Pt(t,i){rs++,ac[rs]=t.current,t.current=i}var $i={},un=Ki($i),Rn=Ki(!1),wr=$i;function ss(t,i){var s=t.type.contextTypes;if(!s)return $i;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in s)d[g]=i[g];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Cn(t){return t=t.childContextTypes,t!=null}function la(){Nt(Rn),Nt(un)}function ad(t,i,s){if(un.current!==$i)throw Error(n(168));Pt(un,i),Pt(Rn,s)}function ld(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var d in l)if(!(d in i))throw Error(n(108,Re(t)||"Unknown",d));return X({},s,l)}function ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$i,wr=un.current,Pt(un,t),Pt(Rn,Rn.current),!0}function cd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=ld(t,i,wr),l.__reactInternalMemoizedMergedChildContext=t,Nt(Rn),Nt(un),Pt(un,t)):Nt(Rn),Pt(Rn,s)}var Si=null,ua=!1,lc=!1;function ud(t){Si===null?Si=[t]:Si.push(t)}function l_(t){ua=!0,ud(t)}function Zi(){if(!lc&&Si!==null){lc=!0;var t=0,i=At;try{var s=Si;for(At=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}Si=null,ua=!1}catch(d){throw Si!==null&&(Si=Si.slice(t+1)),re(st,Zi),d}finally{At=i,lc=!1}}return null}var os=[],as=0,fa=null,da=0,Wn=[],Xn=0,Ar=null,Mi=1,Ei="";function Rr(t,i){os[as++]=da,os[as++]=fa,fa=t,da=i}function fd(t,i,s){Wn[Xn++]=Mi,Wn[Xn++]=Ei,Wn[Xn++]=Ar,Ar=t;var l=Mi;t=Ei;var d=32-vn(l)-1;l&=~(1<<d),s+=1;var g=32-vn(i)+d;if(30<g){var M=d-d%5;g=(l&(1<<M)-1).toString(32),l>>=M,d-=M,Mi=1<<32-vn(i)+d|s<<d|l,Ei=g+t}else Mi=1<<g|s<<d|l,Ei=t}function cc(t){t.return!==null&&(Rr(t,1),fd(t,1,0))}function uc(t){for(;t===fa;)fa=os[--as],os[as]=null,da=os[--as],os[as]=null;for(;t===Ar;)Ar=Wn[--Xn],Wn[Xn]=null,Ei=Wn[--Xn],Wn[Xn]=null,Mi=Wn[--Xn],Wn[Xn]=null}var On=null,kn=null,kt=!1,ei=null;function dd(t,i){var s=Kn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function hd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,On=t,kn=qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,On=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Ar!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Kn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,On=t,kn=null,!0):!1;default:return!1}}function fc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dc(t){if(kt){var i=kn;if(i){var s=i;if(!hd(t,i)){if(fc(t))throw Error(n(418));i=qi(s.nextSibling);var l=On;i&&hd(t,i)?dd(l,s):(t.flags=t.flags&-4097|2,kt=!1,On=t)}}else{if(fc(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,On=t}}}function pd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function ha(t){if(t!==On)return!1;if(!kt)return pd(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!ic(t.type,t.memoizedProps)),i&&(i=kn)){if(fc(t))throw md(),Error(n(418));for(;i;)dd(t,i),i=qi(i.nextSibling)}if(pd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){kn=qi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=On?qi(t.stateNode.nextSibling):null;return!0}function md(){for(var t=kn;t;)t=qi(t.nextSibling)}function ls(){kn=On=null,kt=!1}function hc(t){ei===null?ei=[t]:ei.push(t)}var c_=D.ReactCurrentBatchConfig;function ho(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var d=l,g=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(M){var I=d.refs;M===null?delete I[g]:I[g]=M},i._stringRef=g,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function pa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function gd(t){var i=t._init;return i(t._payload)}function _d(t){function i(q,G){if(t){var J=q.deletions;J===null?(q.deletions=[G],q.flags|=16):J.push(G)}}function s(q,G){if(!t)return null;for(;G!==null;)i(q,G),G=G.sibling;return null}function l(q,G){for(q=new Map;G!==null;)G.key!==null?q.set(G.key,G):q.set(G.index,G),G=G.sibling;return q}function d(q,G){return q=sr(q,G),q.index=0,q.sibling=null,q}function g(q,G,J){return q.index=J,t?(J=q.alternate,J!==null?(J=J.index,J<G?(q.flags|=2,G):J):(q.flags|=2,G)):(q.flags|=1048576,G)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function I(q,G,J,Ae){return G===null||G.tag!==6?(G=ru(J,q.mode,Ae),G.return=q,G):(G=d(G,J),G.return=q,G)}function z(q,G,J,Ae){var Ye=J.type;return Ye===U?_e(q,G,J.props.children,Ae,J.key):G!==null&&(G.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ee&&gd(Ye)===G.type)?(Ae=d(G,J.props),Ae.ref=ho(q,G,J),Ae.return=q,Ae):(Ae=ka(J.type,J.key,J.props,null,q.mode,Ae),Ae.ref=ho(q,G,J),Ae.return=q,Ae)}function ie(q,G,J,Ae){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=su(J,q.mode,Ae),G.return=q,G):(G=d(G,J.children||[]),G.return=q,G)}function _e(q,G,J,Ae,Ye){return G===null||G.tag!==7?(G=Ir(J,q.mode,Ae,Ye),G.return=q,G):(G=d(G,J),G.return=q,G)}function Se(q,G,J){if(typeof G=="string"&&G!==""||typeof G=="number")return G=ru(""+G,q.mode,J),G.return=q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return J=ka(G.type,G.key,G.props,null,q.mode,J),J.ref=ho(q,null,G),J.return=q,J;case O:return G=su(G,q.mode,J),G.return=q,G;case ee:var Ae=G._init;return Se(q,Ae(G._payload),J)}if(w(G)||$(G))return G=Ir(G,q.mode,J,null),G.return=q,G;pa(q,G)}return null}function me(q,G,J,Ae){var Ye=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Ye!==null?null:I(q,G,""+J,Ae);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case V:return J.key===Ye?z(q,G,J,Ae):null;case O:return J.key===Ye?ie(q,G,J,Ae):null;case ee:return Ye=J._init,me(q,G,Ye(J._payload),Ae)}if(w(J)||$(J))return Ye!==null?null:_e(q,G,J,Ae,null);pa(q,J)}return null}function Fe(q,G,J,Ae,Ye){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return q=q.get(J)||null,I(G,q,""+Ae,Ye);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case V:return q=q.get(Ae.key===null?J:Ae.key)||null,z(G,q,Ae,Ye);case O:return q=q.get(Ae.key===null?J:Ae.key)||null,ie(G,q,Ae,Ye);case ee:var Qe=Ae._init;return Fe(q,G,J,Qe(Ae._payload),Ye)}if(w(Ae)||$(Ae))return q=q.get(J)||null,_e(G,q,Ae,Ye,null);pa(G,Ae)}return null}function Ve(q,G,J,Ae){for(var Ye=null,Qe=null,Je=G,rt=G=0,rn=null;Je!==null&&rt<J.length;rt++){Je.index>rt?(rn=Je,Je=null):rn=Je.sibling;var wt=me(q,Je,J[rt],Ae);if(wt===null){Je===null&&(Je=rn);break}t&&Je&&wt.alternate===null&&i(q,Je),G=g(wt,G,rt),Qe===null?Ye=wt:Qe.sibling=wt,Qe=wt,Je=rn}if(rt===J.length)return s(q,Je),kt&&Rr(q,rt),Ye;if(Je===null){for(;rt<J.length;rt++)Je=Se(q,J[rt],Ae),Je!==null&&(G=g(Je,G,rt),Qe===null?Ye=Je:Qe.sibling=Je,Qe=Je);return kt&&Rr(q,rt),Ye}for(Je=l(q,Je);rt<J.length;rt++)rn=Fe(Je,q,rt,J[rt],Ae),rn!==null&&(t&&rn.alternate!==null&&Je.delete(rn.key===null?rt:rn.key),G=g(rn,G,rt),Qe===null?Ye=rn:Qe.sibling=rn,Qe=rn);return t&&Je.forEach(function(or){return i(q,or)}),kt&&Rr(q,rt),Ye}function We(q,G,J,Ae){var Ye=$(J);if(typeof Ye!="function")throw Error(n(150));if(J=Ye.call(J),J==null)throw Error(n(151));for(var Qe=Ye=null,Je=G,rt=G=0,rn=null,wt=J.next();Je!==null&&!wt.done;rt++,wt=J.next()){Je.index>rt?(rn=Je,Je=null):rn=Je.sibling;var or=me(q,Je,wt.value,Ae);if(or===null){Je===null&&(Je=rn);break}t&&Je&&or.alternate===null&&i(q,Je),G=g(or,G,rt),Qe===null?Ye=or:Qe.sibling=or,Qe=or,Je=rn}if(wt.done)return s(q,Je),kt&&Rr(q,rt),Ye;if(Je===null){for(;!wt.done;rt++,wt=J.next())wt=Se(q,wt.value,Ae),wt!==null&&(G=g(wt,G,rt),Qe===null?Ye=wt:Qe.sibling=wt,Qe=wt);return kt&&Rr(q,rt),Ye}for(Je=l(q,Je);!wt.done;rt++,wt=J.next())wt=Fe(Je,q,rt,wt.value,Ae),wt!==null&&(t&&wt.alternate!==null&&Je.delete(wt.key===null?rt:wt.key),G=g(wt,G,rt),Qe===null?Ye=wt:Qe.sibling=wt,Qe=wt);return t&&Je.forEach(function(G_){return i(q,G_)}),kt&&Rr(q,rt),Ye}function jt(q,G,J,Ae){if(typeof J=="object"&&J!==null&&J.type===U&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case V:e:{for(var Ye=J.key,Qe=G;Qe!==null;){if(Qe.key===Ye){if(Ye=J.type,Ye===U){if(Qe.tag===7){s(q,Qe.sibling),G=d(Qe,J.props.children),G.return=q,q=G;break e}}else if(Qe.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ee&&gd(Ye)===Qe.type){s(q,Qe.sibling),G=d(Qe,J.props),G.ref=ho(q,Qe,J),G.return=q,q=G;break e}s(q,Qe);break}else i(q,Qe);Qe=Qe.sibling}J.type===U?(G=Ir(J.props.children,q.mode,Ae,J.key),G.return=q,q=G):(Ae=ka(J.type,J.key,J.props,null,q.mode,Ae),Ae.ref=ho(q,G,J),Ae.return=q,q=Ae)}return M(q);case O:e:{for(Qe=J.key;G!==null;){if(G.key===Qe)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){s(q,G.sibling),G=d(G,J.children||[]),G.return=q,q=G;break e}else{s(q,G);break}else i(q,G);G=G.sibling}G=su(J,q.mode,Ae),G.return=q,q=G}return M(q);case ee:return Qe=J._init,jt(q,G,Qe(J._payload),Ae)}if(w(J))return Ve(q,G,J,Ae);if($(J))return We(q,G,J,Ae);pa(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,G!==null&&G.tag===6?(s(q,G.sibling),G=d(G,J),G.return=q,q=G):(s(q,G),G=ru(J,q.mode,Ae),G.return=q,q=G),M(q)):s(q,G)}return jt}var cs=_d(!0),vd=_d(!1),ma=Ki(null),ga=null,us=null,pc=null;function mc(){pc=us=ga=null}function gc(t){var i=ma.current;Nt(ma),t._currentValue=i}function _c(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function fs(t,i){ga=t,pc=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(bn=!0),t.firstContext=null)}function jn(t){var i=t._currentValue;if(pc!==t)if(t={context:t,memoizedValue:i,next:null},us===null){if(ga===null)throw Error(n(308));us=t,ga.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return i}var Cr=null;function vc(t){Cr===null?Cr=[t]:Cr.push(t)}function xd(t,i,s,l){var d=i.interleaved;return d===null?(s.next=s,vc(i)):(s.next=d.next,d.next=s),i.interleaved=s,Ti(t,l)}function Ti(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Qi=!1;function xc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Tt&2)!==0){var d=l.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),l.pending=i,Ti(t,s)}return d=l.interleaved,d===null?(i.next=i,vc(l)):(i.next=d.next,d.next=i),l.interleaved=i,Ti(t,s)}function _a(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Nl(t,s)}}function Sd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var d=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};g===null?d=g=M:g=g.next=M,s=s.next}while(s!==null);g===null?d=g=i:g=g.next=i}else d=g=i;s={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function va(t,i,s,l){var d=t.updateQueue;Qi=!1;var g=d.firstBaseUpdate,M=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var z=I,ie=z.next;z.next=null,M===null?g=ie:M.next=ie,M=z;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==M&&(I===null?_e.firstBaseUpdate=ie:I.next=ie,_e.lastBaseUpdate=z))}if(g!==null){var Se=d.baseState;M=0,_e=ie=z=null,I=g;do{var me=I.lane,Fe=I.eventTime;if((l&me)===me){_e!==null&&(_e=_e.next={eventTime:Fe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ve=t,We=I;switch(me=i,Fe=s,We.tag){case 1:if(Ve=We.payload,typeof Ve=="function"){Se=Ve.call(Fe,Se,me);break e}Se=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=We.payload,me=typeof Ve=="function"?Ve.call(Fe,Se,me):Ve,me==null)break e;Se=X({},Se,me);break e;case 2:Qi=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,me=d.effects,me===null?d.effects=[I]:me.push(I))}else Fe={eventTime:Fe,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ie=_e=Fe,z=Se):_e=_e.next=Fe,M|=me;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;me=I,I=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(_e===null&&(z=Se),d.baseState=z,d.firstBaseUpdate=ie,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Lr|=M,t.lanes=M,t.memoizedState=Se}}function Md(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],d=l.callback;if(d!==null){if(l.callback=null,l=s,typeof d!="function")throw Error(n(191,d));d.call(l)}}}var po={},hi=Ki(po),mo=Ki(po),go=Ki(po);function br(t){if(t===po)throw Error(n(174));return t}function yc(t,i){switch(Pt(go,i),Pt(mo,t),Pt(hi,po),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ke(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ke(i,t)}Nt(hi),Pt(hi,i)}function ds(){Nt(hi),Nt(mo),Nt(go)}function Ed(t){br(go.current);var i=br(hi.current),s=ke(i,t.type);i!==s&&(Pt(mo,t),Pt(hi,s))}function Sc(t){mo.current===t&&(Nt(hi),Nt(mo))}var Bt=Ki(0);function xa(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Mc=[];function Ec(){for(var t=0;t<Mc.length;t++)Mc[t]._workInProgressVersionPrimary=null;Mc.length=0}var ya=D.ReactCurrentDispatcher,Tc=D.ReactCurrentBatchConfig,Pr=0,Ht=null,Zt=null,tn=null,Sa=!1,_o=!1,vo=0,u_=0;function fn(){throw Error(n(321))}function wc(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Jn(t[s],i[s]))return!1;return!0}function Ac(t,i,s,l,d,g){if(Pr=g,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ya.current=t===null||t.memoizedState===null?p_:m_,t=s(l,d),_o){g=0;do{if(_o=!1,vo=0,25<=g)throw Error(n(301));g+=1,tn=Zt=null,i.updateQueue=null,ya.current=g_,t=s(l,d)}while(_o)}if(ya.current=Ta,i=Zt!==null&&Zt.next!==null,Pr=0,tn=Zt=Ht=null,Sa=!1,i)throw Error(n(300));return t}function Rc(){var t=vo!==0;return vo=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?Ht.memoizedState=tn=t:tn=tn.next=t,tn}function Yn(){if(Zt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=tn===null?Ht.memoizedState:tn.next;if(i!==null)tn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},tn===null?Ht.memoizedState=tn=t:tn=tn.next=t}return tn}function xo(t,i){return typeof i=="function"?i(t):i}function Cc(t){var i=Yn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Zt,d=l.baseQueue,g=s.pending;if(g!==null){if(d!==null){var M=d.next;d.next=g.next,g.next=M}l.baseQueue=d=g,s.pending=null}if(d!==null){g=d.next,l=l.baseState;var I=M=null,z=null,ie=g;do{var _e=ie.lane;if((Pr&_e)===_e)z!==null&&(z=z.next={lane:0,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),l=ie.hasEagerState?ie.eagerState:t(l,ie.action);else{var Se={lane:_e,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null};z===null?(I=z=Se,M=l):z=z.next=Se,Ht.lanes|=_e,Lr|=_e}ie=ie.next}while(ie!==null&&ie!==g);z===null?M=l:z.next=I,Jn(l,i.memoizedState)||(bn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=z,s.lastRenderedState=l}if(t=s.interleaved,t!==null){d=t;do g=d.lane,Ht.lanes|=g,Lr|=g,d=d.next;while(d!==t)}else d===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function bc(t){var i=Yn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,d=s.pending,g=i.memoizedState;if(d!==null){s.pending=null;var M=d=d.next;do g=t(g,M.action),M=M.next;while(M!==d);Jn(g,i.memoizedState)||(bn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),s.lastRenderedState=g}return[g,l]}function Td(){}function wd(t,i){var s=Ht,l=Yn(),d=i(),g=!Jn(l.memoizedState,d);if(g&&(l.memoizedState=d,bn=!0),l=l.queue,Pc(Cd.bind(null,s,l,t),[t]),l.getSnapshot!==i||g||tn!==null&&tn.memoizedState.tag&1){if(s.flags|=2048,yo(9,Rd.bind(null,s,l,d,i),void 0,null),nn===null)throw Error(n(349));(Pr&30)!==0||Ad(s,i,d)}return d}function Ad(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Rd(t,i,s,l){i.value=s,i.getSnapshot=l,bd(i)&&Pd(t)}function Cd(t,i,s){return s(function(){bd(i)&&Pd(t)})}function bd(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Jn(t,s)}catch{return!0}}function Pd(t){var i=Ti(t,1);i!==null&&ri(i,t,1,-1)}function Ld(t){var i=pi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},i.queue=t,t=t.dispatch=h_.bind(null,Ht,t),[i.memoizedState,t]}function yo(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function Dd(){return Yn().memoizedState}function Ma(t,i,s,l){var d=pi();Ht.flags|=t,d.memoizedState=yo(1|i,s,void 0,l===void 0?null:l)}function Ea(t,i,s,l){var d=Yn();l=l===void 0?null:l;var g=void 0;if(Zt!==null){var M=Zt.memoizedState;if(g=M.destroy,l!==null&&wc(l,M.deps)){d.memoizedState=yo(i,s,g,l);return}}Ht.flags|=t,d.memoizedState=yo(1|i,s,g,l)}function Nd(t,i){return Ma(8390656,8,t,i)}function Pc(t,i){return Ea(2048,8,t,i)}function Ud(t,i){return Ea(4,2,t,i)}function Id(t,i){return Ea(4,4,t,i)}function Fd(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Od(t,i,s){return s=s!=null?s.concat([t]):null,Ea(4,4,Fd.bind(null,i,t),s)}function Lc(){}function kd(t,i){var s=Yn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&wc(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function zd(t,i){var s=Yn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&wc(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function Bd(t,i,s){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,bn=!0),t.memoizedState=s):(Jn(s,i)||(s=Xo(),Ht.lanes|=s,Lr|=s,t.baseState=!0),i)}function f_(t,i){var s=At;At=s!==0&&4>s?s:4,t(!0);var l=Tc.transition;Tc.transition={};try{t(!1),i()}finally{At=s,Tc.transition=l}}function Hd(){return Yn().memoizedState}function d_(t,i,s){var l=ir(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Gd(t))Vd(i,s);else if(s=xd(t,i,s,l),s!==null){var d=yn();ri(s,t,l,d),Wd(s,i,l)}}function h_(t,i,s){var l=ir(t),d={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Gd(t))Vd(i,d);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var M=i.lastRenderedState,I=g(M,s);if(d.hasEagerState=!0,d.eagerState=I,Jn(I,M)){var z=i.interleaved;z===null?(d.next=d,vc(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}s=xd(t,i,d,l),s!==null&&(d=yn(),ri(s,t,l,d),Wd(s,i,l))}}function Gd(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function Vd(t,i){_o=Sa=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Wd(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Nl(t,s)}}var Ta={readContext:jn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},p_={readContext:jn,useCallback:function(t,i){return pi().memoizedState=[t,i===void 0?null:i],t},useContext:jn,useEffect:Nd,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ma(4194308,4,Fd.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ma(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ma(4,2,t,i)},useMemo:function(t,i){var s=pi();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=pi();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=d_.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=pi();return t={current:t},i.memoizedState=t},useState:Ld,useDebugValue:Lc,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=Ld(!1),i=t[0];return t=f_.bind(null,t[1]),pi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ht,d=pi();if(kt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),nn===null)throw Error(n(349));(Pr&30)!==0||Ad(l,i,s)}d.memoizedState=s;var g={value:s,getSnapshot:i};return d.queue=g,Nd(Cd.bind(null,l,g,t),[t]),l.flags|=2048,yo(9,Rd.bind(null,l,g,s,i),void 0,null),s},useId:function(){var t=pi(),i=nn.identifierPrefix;if(kt){var s=Ei,l=Mi;s=(l&~(1<<32-vn(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=vo++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=u_++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},m_={readContext:jn,useCallback:kd,useContext:jn,useEffect:Pc,useImperativeHandle:Od,useInsertionEffect:Ud,useLayoutEffect:Id,useMemo:zd,useReducer:Cc,useRef:Dd,useState:function(){return Cc(xo)},useDebugValue:Lc,useDeferredValue:function(t){var i=Yn();return Bd(i,Zt.memoizedState,t)},useTransition:function(){var t=Cc(xo)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:Td,useSyncExternalStore:wd,useId:Hd,unstable_isNewReconciler:!1},g_={readContext:jn,useCallback:kd,useContext:jn,useEffect:Pc,useImperativeHandle:Od,useInsertionEffect:Ud,useLayoutEffect:Id,useMemo:zd,useReducer:bc,useRef:Dd,useState:function(){return bc(xo)},useDebugValue:Lc,useDeferredValue:function(t){var i=Yn();return Zt===null?i.memoizedState=t:Bd(i,Zt.memoizedState,t)},useTransition:function(){var t=bc(xo)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:Td,useSyncExternalStore:wd,useId:Hd,unstable_isNewReconciler:!1};function ti(t,i){if(t&&t.defaultProps){i=X({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Dc(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:X({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var wa={isMounted:function(t){return(t=t._reactInternals)?vi(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=yn(),d=ir(t),g=wi(l,d);g.payload=i,s!=null&&(g.callback=s),i=Ji(t,g,d),i!==null&&(ri(i,t,d,l),_a(i,t,d))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=yn(),d=ir(t),g=wi(l,d);g.tag=1,g.payload=i,s!=null&&(g.callback=s),i=Ji(t,g,d),i!==null&&(ri(i,t,d,l),_a(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=yn(),l=ir(t),d=wi(s,l);d.tag=2,i!=null&&(d.callback=i),i=Ji(t,d,l),i!==null&&(ri(i,t,l,s),_a(i,t,l))}};function Xd(t,i,s,l,d,g,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,g,M):i.prototype&&i.prototype.isPureReactComponent?!so(s,l)||!so(d,g):!0}function jd(t,i,s){var l=!1,d=$i,g=i.contextType;return typeof g=="object"&&g!==null?g=jn(g):(d=Cn(i)?wr:un.current,l=i.contextTypes,g=(l=l!=null)?ss(t,d):$i),i=new i(s,g),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=g),i}function Yd(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&wa.enqueueReplaceState(i,i.state,null)}function Nc(t,i,s,l){var d=t.stateNode;d.props=s,d.state=t.memoizedState,d.refs={},xc(t);var g=i.contextType;typeof g=="object"&&g!==null?d.context=jn(g):(g=Cn(i)?wr:un.current,d.context=ss(t,g)),d.state=t.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Dc(t,i,g,s),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&wa.enqueueReplaceState(d,d.state,null),va(t,s,d,l),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,i){try{var s="",l=i;do s+=he(l),l=l.return;while(l);var d=s}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:i,stack:d,digest:null}}function Uc(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Ic(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var __=typeof WeakMap=="function"?WeakMap:Map;function qd(t,i,s){s=wi(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Da||(Da=!0,$c=l),Ic(t,i)},s}function Kd(t,i,s){s=wi(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var d=i.value;s.payload=function(){return l(d)},s.callback=function(){Ic(t,i)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(s.callback=function(){Ic(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function $d(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new __;var d=new Set;l.set(i,d)}else d=l.get(i),d===void 0&&(d=new Set,l.set(i,d));d.has(s)||(d.add(s),t=L_.bind(null,t,i,s),i.then(t,t))}function Zd(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Qd(t,i,s,l,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=wi(-1,1),i.tag=2,Ji(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var v_=D.ReactCurrentOwner,bn=!1;function xn(t,i,s,l){i.child=t===null?vd(i,null,s,l):cs(i,t.child,s,l)}function Jd(t,i,s,l,d){s=s.render;var g=i.ref;return fs(i,d),l=Ac(t,i,s,l,g,d),s=Rc(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ai(t,i,d)):(kt&&s&&cc(i),i.flags|=1,xn(t,i,l,d),i.child)}function eh(t,i,s,l,d){if(t===null){var g=s.type;return typeof g=="function"&&!iu(g)&&g.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=g,th(t,i,g,l,d)):(t=ka(s.type,null,l,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(g=t.child,(t.lanes&d)===0){var M=g.memoizedProps;if(s=s.compare,s=s!==null?s:so,s(M,l)&&t.ref===i.ref)return Ai(t,i,d)}return i.flags|=1,t=sr(g,l),t.ref=i.ref,t.return=i,i.child=t}function th(t,i,s,l,d){if(t!==null){var g=t.memoizedProps;if(so(g,l)&&t.ref===i.ref)if(bn=!1,i.pendingProps=l=g,(t.lanes&d)!==0)(t.flags&131072)!==0&&(bn=!0);else return i.lanes=t.lanes,Ai(t,i,d)}return Fc(t,i,s,l,d)}function nh(t,i,s){var l=i.pendingProps,d=l.children,g=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(ms,zn),zn|=s;else{if((s&1073741824)===0)return t=g!==null?g.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Pt(ms,zn),zn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=g!==null?g.baseLanes:s,Pt(ms,zn),zn|=l}else g!==null?(l=g.baseLanes|s,i.memoizedState=null):l=s,Pt(ms,zn),zn|=l;return xn(t,i,d,s),i.child}function ih(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Fc(t,i,s,l,d){var g=Cn(s)?wr:un.current;return g=ss(i,g),fs(i,d),s=Ac(t,i,s,l,g,d),l=Rc(),t!==null&&!bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Ai(t,i,d)):(kt&&l&&cc(i),i.flags|=1,xn(t,i,s,d),i.child)}function rh(t,i,s,l,d){if(Cn(s)){var g=!0;ca(i)}else g=!1;if(fs(i,d),i.stateNode===null)Ra(t,i),jd(i,s,l),Nc(i,s,l,d),l=!0;else if(t===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var z=M.context,ie=s.contextType;typeof ie=="object"&&ie!==null?ie=jn(ie):(ie=Cn(s)?wr:un.current,ie=ss(i,ie));var _e=s.getDerivedStateFromProps,Se=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==l||z!==ie)&&Yd(i,M,l,ie),Qi=!1;var me=i.memoizedState;M.state=me,va(i,l,M,d),z=i.memoizedState,I!==l||me!==z||Rn.current||Qi?(typeof _e=="function"&&(Dc(i,s,_e,l),z=i.memoizedState),(I=Qi||Xd(i,s,I,l,me,z,ie))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),M.props=l,M.state=z,M.context=ie,l=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,yd(t,i),I=i.memoizedProps,ie=i.type===i.elementType?I:ti(i.type,I),M.props=ie,Se=i.pendingProps,me=M.context,z=s.contextType,typeof z=="object"&&z!==null?z=jn(z):(z=Cn(s)?wr:un.current,z=ss(i,z));var Fe=s.getDerivedStateFromProps;(_e=typeof Fe=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==Se||me!==z)&&Yd(i,M,l,z),Qi=!1,me=i.memoizedState,M.state=me,va(i,l,M,d);var Ve=i.memoizedState;I!==Se||me!==Ve||Rn.current||Qi?(typeof Fe=="function"&&(Dc(i,s,Fe,l),Ve=i.memoizedState),(ie=Qi||Xd(i,s,ie,l,me,Ve,z)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Ve,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Ve,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ve),M.props=l,M.state=Ve,M.context=z,l=ie):(typeof M.componentDidUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return Oc(t,i,s,l,g,d)}function Oc(t,i,s,l,d,g){ih(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return d&&cd(i,s,!1),Ai(t,i,g);l=i.stateNode,v_.current=i;var I=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=cs(i,t.child,null,g),i.child=cs(i,null,I,g)):xn(t,i,I,g),i.memoizedState=l.state,d&&cd(i,s,!0),i.child}function sh(t){var i=t.stateNode;i.pendingContext?ad(t,i.pendingContext,i.pendingContext!==i.context):i.context&&ad(t,i.context,!1),yc(t,i.containerInfo)}function oh(t,i,s,l,d){return ls(),hc(d),i.flags|=256,xn(t,i,s,l),i.child}var kc={dehydrated:null,treeContext:null,retryLane:0};function zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function ah(t,i,s){var l=i.pendingProps,d=Bt.current,g=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=t!==null&&t.memoizedState===null?!1:(d&2)!==0),I?(g=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Pt(Bt,d&1),t===null)return dc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,g?(l=i.mode,g=i.child,M={mode:"hidden",children:M},(l&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=M):g=za(M,l,0,null),t=Ir(t,l,s,null),g.return=i,t.return=i,g.sibling=t,i.child=g,i.child.memoizedState=zc(s),i.memoizedState=kc,t):Bc(i,M));if(d=t.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return x_(t,i,M,l,I,d,s);if(g){g=l.fallback,M=i.mode,d=t.child,I=d.sibling;var z={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==d?(l=i.child,l.childLanes=0,l.pendingProps=z,i.deletions=null):(l=sr(d,z),l.subtreeFlags=d.subtreeFlags&14680064),I!==null?g=sr(I,g):(g=Ir(g,M,s,null),g.flags|=2),g.return=i,l.return=i,l.sibling=g,i.child=l,l=g,g=i.child,M=t.child.memoizedState,M=M===null?zc(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},g.memoizedState=M,g.childLanes=t.childLanes&~s,i.memoizedState=kc,l}return g=t.child,t=g.sibling,l=sr(g,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Bc(t,i){return i=za({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Aa(t,i,s,l){return l!==null&&hc(l),cs(i,t.child,null,s),t=Bc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function x_(t,i,s,l,d,g,M){if(s)return i.flags&256?(i.flags&=-257,l=Uc(Error(n(422))),Aa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(g=l.fallback,d=i.mode,l=za({mode:"visible",children:l.children},d,0,null),g=Ir(g,d,M,null),g.flags|=2,l.return=i,g.return=i,l.sibling=g,i.child=l,(i.mode&1)!==0&&cs(i,t.child,null,M),i.child.memoizedState=zc(M),i.memoizedState=kc,g);if((i.mode&1)===0)return Aa(t,i,M,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var I=l.dgst;return l=I,g=Error(n(419)),l=Uc(g,l,void 0),Aa(t,i,M,l)}if(I=(M&t.childLanes)!==0,bn||I){if(l=nn,l!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|M))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Ti(t,d),ri(l,t,d,-1))}return nu(),l=Uc(Error(n(421))),Aa(t,i,M,l)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=D_.bind(null,t),d._reactRetry=i,null):(t=g.treeContext,kn=qi(d.nextSibling),On=i,kt=!0,ei=null,t!==null&&(Wn[Xn++]=Mi,Wn[Xn++]=Ei,Wn[Xn++]=Ar,Mi=t.id,Ei=t.overflow,Ar=i),i=Bc(i,l.children),i.flags|=4096,i)}function lh(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),_c(t.return,i,s)}function Hc(t,i,s,l,d){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=s,g.tailMode=d)}function ch(t,i,s){var l=i.pendingProps,d=l.revealOrder,g=l.tail;if(xn(t,i,l.children,s),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lh(t,s,i);else if(t.tag===19)lh(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Pt(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(s=i.child,d=null;s!==null;)t=s.alternate,t!==null&&xa(t)===null&&(d=s),s=s.sibling;s=d,s===null?(d=i.child,i.child=null):(d=s.sibling,s.sibling=null),Hc(i,!1,d,s,g);break;case"backwards":for(s=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&xa(t)===null){i.child=d;break}t=d.sibling,d.sibling=s,s=d,d=t}Hc(i,!0,s,null,g);break;case"together":Hc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ra(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ai(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Lr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=sr(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=sr(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function y_(t,i,s){switch(i.tag){case 3:sh(i),ls();break;case 5:Ed(i);break;case 1:Cn(i.type)&&ca(i);break;case 4:yc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,d=i.memoizedProps.value;Pt(ma,l._currentValue),l._currentValue=d;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Pt(Bt,Bt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?ah(t,i,s):(Pt(Bt,Bt.current&1),t=Ai(t,i,s),t!==null?t.sibling:null);Pt(Bt,Bt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return ch(t,i,s);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Pt(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,nh(t,i,s)}return Ai(t,i,s)}var uh,Gc,fh,dh;uh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Gc=function(){},fh=function(t,i,s,l){var d=t.memoizedProps;if(d!==l){t=i.stateNode,br(hi.current);var g=null;switch(s){case"input":d=fe(t,d),l=fe(t,l),g=[];break;case"select":d=X({},d,{value:void 0}),l=X({},l,{value:void 0}),g=[];break;case"textarea":d=xe(t,d),l=xe(t,l),g=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=oa)}F(s,l);var M;s=null;for(ie in d)if(!l.hasOwnProperty(ie)&&d.hasOwnProperty(ie)&&d[ie]!=null)if(ie==="style"){var I=d[ie];for(M in I)I.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else ie!=="dangerouslySetInnerHTML"&&ie!=="children"&&ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&ie!=="autoFocus"&&(a.hasOwnProperty(ie)?g||(g=[]):(g=g||[]).push(ie,null));for(ie in l){var z=l[ie];if(I=d?.[ie],l.hasOwnProperty(ie)&&z!==I&&(z!=null||I!=null))if(ie==="style")if(I){for(M in I)!I.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in z)z.hasOwnProperty(M)&&I[M]!==z[M]&&(s||(s={}),s[M]=z[M])}else s||(g||(g=[]),g.push(ie,s)),s=z;else ie==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(g=g||[]).push(ie,z)):ie==="children"?typeof z!="string"&&typeof z!="number"||(g=g||[]).push(ie,""+z):ie!=="suppressContentEditableWarning"&&ie!=="suppressHydrationWarning"&&(a.hasOwnProperty(ie)?(z!=null&&ie==="onScroll"&&Dt("scroll",t),g||I===z||(g=[])):(g=g||[]).push(ie,z))}s&&(g=g||[]).push("style",s);var ie=g;(i.updateQueue=ie)&&(i.flags|=4)}},dh=function(t,i,s,l){s!==l&&(i.flags|=4)};function So(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)s|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function S_(t,i,s){var l=i.pendingProps;switch(uc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return Cn(i.type)&&la(),dn(i),null;case 3:return l=i.stateNode,ds(),Nt(Rn),Nt(un),Ec(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ha(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ei!==null&&(Jc(ei),ei=null))),Gc(t,i),dn(i),null;case 5:Sc(i);var d=br(go.current);if(s=i.type,t!==null&&i.stateNode!=null)fh(t,i,s,l,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=br(hi.current),ha(i)){l=i.stateNode,s=i.type;var g=i.memoizedProps;switch(l[di]=i,l[uo]=g,t=(i.mode&1)!==0,s){case"dialog":Dt("cancel",l),Dt("close",l);break;case"iframe":case"object":case"embed":Dt("load",l);break;case"video":case"audio":for(d=0;d<ao.length;d++)Dt(ao[d],l);break;case"source":Dt("error",l);break;case"img":case"image":case"link":Dt("error",l),Dt("load",l);break;case"details":Dt("toggle",l);break;case"input":Ge(l,g),Dt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!g.multiple},Dt("invalid",l);break;case"textarea":ye(l,g),Dt("invalid",l)}F(s,g),d=null;for(var M in g)if(g.hasOwnProperty(M)){var I=g[M];M==="children"?typeof I=="string"?l.textContent!==I&&(g.suppressHydrationWarning!==!0&&sa(l.textContent,I,t),d=["children",I]):typeof I=="number"&&l.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&sa(l.textContent,I,t),d=["children",""+I]):a.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Dt("scroll",l)}switch(s){case"input":ut(l),nt(l,g,!0);break;case"textarea":ut(l),Xe(l);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(l.onclick=oa)}l=d,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Le(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[di]=i,t[uo]=l,uh(t,i,!1,!1),i.stateNode=t;e:{switch(M=Te(s,l),s){case"dialog":Dt("cancel",t),Dt("close",t),d=l;break;case"iframe":case"object":case"embed":Dt("load",t),d=l;break;case"video":case"audio":for(d=0;d<ao.length;d++)Dt(ao[d],t);d=l;break;case"source":Dt("error",t),d=l;break;case"img":case"image":case"link":Dt("error",t),Dt("load",t),d=l;break;case"details":Dt("toggle",t),d=l;break;case"input":Ge(t,l),d=fe(t,l),Dt("invalid",t);break;case"option":d=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},d=X({},l,{value:void 0}),Dt("invalid",t);break;case"textarea":ye(t,l),d=xe(t,l),Dt("invalid",t);break;default:d=l}F(s,d),I=d;for(g in I)if(I.hasOwnProperty(g)){var z=I[g];g==="style"?qe(t,z):g==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&at(t,z)):g==="children"?typeof z=="string"?(s!=="textarea"||z!=="")&&ge(t,z):typeof z=="number"&&ge(t,""+z):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?z!=null&&g==="onScroll"&&Dt("scroll",t):z!=null&&A(t,g,z,M))}switch(s){case"input":ut(t),nt(t,l,!1);break;case"textarea":ut(t),Xe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+De(l.value));break;case"select":t.multiple=!!l.multiple,g=l.value,g!=null?Z(t,!!l.multiple,g,!1):l.defaultValue!=null&&Z(t,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=oa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)dh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=br(go.current),br(hi.current),ha(i)){if(l=i.stateNode,s=i.memoizedProps,l[di]=i,(g=l.nodeValue!==s)&&(t=On,t!==null))switch(t.tag){case 3:sa(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(l.nodeValue,s,(t.mode&1)!==0)}g&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[di]=i,i.stateNode=l}return dn(i),null;case 13:if(Nt(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)md(),ls(),i.flags|=98560,g=!1;else if(g=ha(i),l!==null&&l.dehydrated!==null){if(t===null){if(!g)throw Error(n(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[di]=i}else ls(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),g=!1}else ei!==null&&(Jc(ei),ei=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Qt===0&&(Qt=3):nu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return ds(),Gc(t,i),t===null&&lo(i.stateNode.containerInfo),dn(i),null;case 10:return gc(i.type._context),dn(i),null;case 17:return Cn(i.type)&&la(),dn(i),null;case 19:if(Nt(Bt),g=i.memoizedState,g===null)return dn(i),null;if(l=(i.flags&128)!==0,M=g.rendering,M===null)if(l)So(g,!1);else{if(Qt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=xa(t),M!==null){for(i.flags|=128,So(g,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)g=s,t=l,g.flags&=14680066,M=g.alternate,M===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=M.childLanes,g.lanes=M.lanes,g.child=M.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=M.memoizedProps,g.memoizedState=M.memoizedState,g.updateQueue=M.updateQueue,g.type=M.type,t=M.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Pt(Bt,Bt.current&1|2),i.child}t=t.sibling}g.tail!==null&&Be()>gs&&(i.flags|=128,l=!0,So(g,!1),i.lanes=4194304)}else{if(!l)if(t=xa(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),So(g,!0),g.tail===null&&g.tailMode==="hidden"&&!M.alternate&&!kt)return dn(i),null}else 2*Be()-g.renderingStartTime>gs&&s!==1073741824&&(i.flags|=128,l=!0,So(g,!1),i.lanes=4194304);g.isBackwards?(M.sibling=i.child,i.child=M):(s=g.last,s!==null?s.sibling=M:i.child=M,g.last=M)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Be(),i.sibling=null,s=Bt.current,Pt(Bt,l?s&1|2:s&1),i):(dn(i),null);case 22:case 23:return tu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(zn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function M_(t,i){switch(uc(i),i.tag){case 1:return Cn(i.type)&&la(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ds(),Nt(Rn),Nt(un),Ec(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Sc(i),null;case 13:if(Nt(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ls()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Nt(Bt),null;case 4:return ds(),null;case 10:return gc(i.type._context),null;case 22:case 23:return tu(),null;case 24:return null;default:return null}}var Ca=!1,hn=!1,E_=typeof WeakSet=="function"?WeakSet:Set,He=null;function ps(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Wt(t,i,l)}else s.current=null}function Vc(t,i,s){try{s()}catch(l){Wt(t,i,l)}}var hh=!1;function T_(t,i){if(tc=qo,t=Xf(),Yl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var d=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break e}var M=0,I=-1,z=-1,ie=0,_e=0,Se=t,me=null;t:for(;;){for(var Fe;Se!==s||d!==0&&Se.nodeType!==3||(I=M+d),Se!==g||l!==0&&Se.nodeType!==3||(z=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(Fe=Se.firstChild)!==null;)me=Se,Se=Fe;for(;;){if(Se===t)break t;if(me===s&&++ie===d&&(I=M),me===g&&++_e===l&&(z=M),(Fe=Se.nextSibling)!==null)break;Se=me,me=Se.parentNode}Se=Fe}s=I===-1||z===-1?null:{start:I,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(nc={focusedElem:t,selectionRange:s},qo=!1,He=i;He!==null;)if(i=He,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,He=t;else for(;He!==null;){i=He;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var We=Ve.memoizedProps,jt=Ve.memoizedState,q=i.stateNode,G=q.getSnapshotBeforeUpdate(i.elementType===i.type?We:ti(i.type,We),jt);q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ae){Wt(i,i.return,Ae)}if(t=i.sibling,t!==null){t.return=i.return,He=t;break}He=i.return}return Ve=hh,hh=!1,Ve}function Mo(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&t)===t){var g=d.destroy;d.destroy=void 0,g!==void 0&&Vc(i,s,g)}d=d.next}while(d!==l)}}function ba(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Wc(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function ph(t){var i=t.alternate;i!==null&&(t.alternate=null,ph(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[di],delete i[uo],delete i[oc],delete i[o_],delete i[a_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mh(t){return t.tag===5||t.tag===3||t.tag===4}function gh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(t=t.child,t!==null))for(Xc(t,i,s),t=t.sibling;t!==null;)Xc(t,i,s),t=t.sibling}function jc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(jc(t,i,s),t=t.sibling;t!==null;)jc(t,i,s),t=t.sibling}var on=null,ni=!1;function er(t,i,s){for(s=s.child;s!==null;)_h(t,i,s),s=s.sibling}function _h(t,i,s){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(wn,s)}catch{}switch(s.tag){case 5:hn||ps(s,i);case 6:var l=on,d=ni;on=null,er(t,i,s),on=l,ni=d,on!==null&&(ni?(t=on,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):on.removeChild(s.stateNode));break;case 18:on!==null&&(ni?(t=on,s=s.stateNode,t.nodeType===8?sc(t.parentNode,s):t.nodeType===1&&sc(t,s),Js(t)):sc(on,s.stateNode));break;case 4:l=on,d=ni,on=s.stateNode.containerInfo,ni=!0,er(t,i,s),on=l,ni=d;break;case 0:case 11:case 14:case 15:if(!hn&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var g=d,M=g.destroy;g=g.tag,M!==void 0&&((g&2)!==0||(g&4)!==0)&&Vc(s,i,M),d=d.next}while(d!==l)}er(t,i,s);break;case 1:if(!hn&&(ps(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(I){Wt(s,i,I)}er(t,i,s);break;case 21:er(t,i,s);break;case 22:s.mode&1?(hn=(l=hn)||s.memoizedState!==null,er(t,i,s),hn=l):er(t,i,s);break;default:er(t,i,s)}}function vh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new E_),i.forEach(function(l){var d=N_.bind(null,t,l);s.has(l)||(s.add(l),l.then(d,d))})}}function ii(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var d=s[l];try{var g=t,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:on=I.stateNode,ni=!1;break e;case 3:on=I.stateNode.containerInfo,ni=!0;break e;case 4:on=I.stateNode.containerInfo,ni=!0;break e}I=I.return}if(on===null)throw Error(n(160));_h(g,M,d),on=null,ni=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ie){Wt(d,i,ie)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)xh(i,t),i=i.sibling}function xh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ii(i,t),mi(t),l&4){try{Mo(3,t,t.return),ba(3,t)}catch(We){Wt(t,t.return,We)}try{Mo(5,t,t.return)}catch(We){Wt(t,t.return,We)}}break;case 1:ii(i,t),mi(t),l&512&&s!==null&&ps(s,s.return);break;case 5:if(ii(i,t),mi(t),l&512&&s!==null&&ps(s,s.return),t.flags&32){var d=t.stateNode;try{ge(d,"")}catch(We){Wt(t,t.return,We)}}if(l&4&&(d=t.stateNode,d!=null)){var g=t.memoizedProps,M=s!==null?s.memoizedProps:g,I=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&Ce(d,g),Te(I,M);var ie=Te(I,g);for(M=0;M<z.length;M+=2){var _e=z[M],Se=z[M+1];_e==="style"?qe(d,Se):_e==="dangerouslySetInnerHTML"?at(d,Se):_e==="children"?ge(d,Se):A(d,_e,Se,ie)}switch(I){case"input":St(d,g);break;case"textarea":Me(d,g);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Fe=g.value;Fe!=null?Z(d,!!g.multiple,Fe,!1):me!==!!g.multiple&&(g.defaultValue!=null?Z(d,!!g.multiple,g.defaultValue,!0):Z(d,!!g.multiple,g.multiple?[]:"",!1))}d[uo]=g}catch(We){Wt(t,t.return,We)}}break;case 6:if(ii(i,t),mi(t),l&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,g=t.memoizedProps;try{d.nodeValue=g}catch(We){Wt(t,t.return,We)}}break;case 3:if(ii(i,t),mi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Js(i.containerInfo)}catch(We){Wt(t,t.return,We)}break;case 4:ii(i,t),mi(t);break;case 13:ii(i,t),mi(t),d=t.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Kc=Be())),l&4&&vh(t);break;case 22:if(_e=s!==null&&s.memoizedState!==null,t.mode&1?(hn=(ie=hn)||_e,ii(i,t),hn=ie):ii(i,t),mi(t),l&8192){if(ie=t.memoizedState!==null,(t.stateNode.isHidden=ie)&&!_e&&(t.mode&1)!==0)for(He=t,_e=t.child;_e!==null;){for(Se=He=_e;He!==null;){switch(me=He,Fe=me.child,me.tag){case 0:case 11:case 14:case 15:Mo(4,me,me.return);break;case 1:ps(me,me.return);var Ve=me.stateNode;if(typeof Ve.componentWillUnmount=="function"){l=me,s=me.return;try{i=l,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(We){Wt(l,s,We)}}break;case 5:ps(me,me.return);break;case 22:if(me.memoizedState!==null){Mh(Se);continue}}Fe!==null?(Fe.return=me,He=Fe):Mh(Se)}_e=_e.sibling}e:for(_e=null,Se=t;;){if(Se.tag===5){if(_e===null){_e=Se;try{d=Se.stateNode,ie?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=Se.stateNode,z=Se.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=it("display",M))}catch(We){Wt(t,t.return,We)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ie?"":Se.memoizedProps}catch(We){Wt(t,t.return,We)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ii(i,t),mi(t),l&4&&vh(t);break;case 21:break;default:ii(i,t),mi(t)}}function mi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(mh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(ge(d,""),l.flags&=-33);var g=gh(t);jc(t,g,d);break;case 3:case 4:var M=l.stateNode.containerInfo,I=gh(t);Xc(t,I,M);break;default:throw Error(n(161))}}catch(z){Wt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function w_(t,i,s){He=t,yh(t)}function yh(t,i,s){for(var l=(t.mode&1)!==0;He!==null;){var d=He,g=d.child;if(d.tag===22&&l){var M=d.memoizedState!==null||Ca;if(!M){var I=d.alternate,z=I!==null&&I.memoizedState!==null||hn;I=Ca;var ie=hn;if(Ca=M,(hn=z)&&!ie)for(He=d;He!==null;)M=He,z=M.child,M.tag===22&&M.memoizedState!==null?Eh(d):z!==null?(z.return=M,He=z):Eh(d);for(;g!==null;)He=g,yh(g),g=g.sibling;He=d,Ca=I,hn=ie}Sh(t)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,He=g):Sh(t)}}function Sh(t){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:hn||ba(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!hn)if(s===null)l.componentDidMount();else{var d=i.elementType===i.type?s.memoizedProps:ti(i.type,s.memoizedProps);l.componentDidUpdate(d,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Md(i,g,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Md(i,M,s)}break;case 5:var I=i.stateNode;if(s===null&&i.flags&4){s=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&s.focus();break;case"img":z.src&&(s.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ie=i.alternate;if(ie!==null){var _e=ie.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&Js(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}hn||i.flags&512&&Wc(i)}catch(me){Wt(i,i.return,me)}}if(i===t){He=null;break}if(s=i.sibling,s!==null){s.return=i.return,He=s;break}He=i.return}}function Mh(t){for(;He!==null;){var i=He;if(i===t){He=null;break}var s=i.sibling;if(s!==null){s.return=i.return,He=s;break}He=i.return}}function Eh(t){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{ba(4,i)}catch(z){Wt(i,s,z)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var d=i.return;try{l.componentDidMount()}catch(z){Wt(i,d,z)}}var g=i.return;try{Wc(i)}catch(z){Wt(i,g,z)}break;case 5:var M=i.return;try{Wc(i)}catch(z){Wt(i,M,z)}}}catch(z){Wt(i,i.return,z)}if(i===t){He=null;break}var I=i.sibling;if(I!==null){I.return=i.return,He=I;break}He=i.return}}var A_=Math.ceil,Pa=D.ReactCurrentDispatcher,Yc=D.ReactCurrentOwner,qn=D.ReactCurrentBatchConfig,Tt=0,nn=null,Yt=null,an=0,zn=0,ms=Ki(0),Qt=0,Eo=null,Lr=0,La=0,qc=0,To=null,Pn=null,Kc=0,gs=1/0,Ri=null,Da=!1,$c=null,tr=null,Na=!1,nr=null,Ua=0,wo=0,Zc=null,Ia=-1,Fa=0;function yn(){return(Tt&6)!==0?Be():Ia!==-1?Ia:Ia=Be()}function ir(t){return(t.mode&1)===0?1:(Tt&2)!==0&&an!==0?an&-an:c_.transition!==null?(Fa===0&&(Fa=Xo()),Fa):(t=At,t!==0||(t=window.event,t=t===void 0?16:wf(t.type)),t)}function ri(t,i,s,l){if(50<wo)throw wo=0,Zc=null,Error(n(185));qs(t,s,l),((Tt&2)===0||t!==nn)&&(t===nn&&((Tt&2)===0&&(La|=s),Qt===4&&rr(t,an)),Ln(t,l),s===1&&Tt===0&&(i.mode&1)===0&&(gs=Be()+500,ua&&Zi()))}function Ln(t,i){var s=t.callbackNode;An(t,i);var l=Vn(t,t===nn?an:0);if(l===0)s!==null&&Ie(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&Ie(s),i===1)t.tag===0?l_(wh.bind(null,t)):ud(wh.bind(null,t)),r_(function(){(Tt&6)===0&&Zi()}),s=null;else{switch(_f(l)){case 1:s=st;break;case 4:s=lt;break;case 16:s=bt;break;case 536870912:s=Xt;break;default:s=bt}s=Nh(s,Th.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function Th(t,i){if(Ia=-1,Fa=0,(Tt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(_s()&&t.callbackNode!==s)return null;var l=Vn(t,t===nn?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Oa(t,l);else{i=l;var d=Tt;Tt|=2;var g=Rh();(nn!==t||an!==i)&&(Ri=null,gs=Be()+500,Nr(t,i));do try{b_();break}catch(I){Ah(t,I)}while(!0);mc(),Pa.current=g,Tt=d,Yt!==null?i=0:(nn=null,an=0,i=Qt)}if(i!==0){if(i===2&&(d=Er(t),d!==0&&(l=d,i=Qc(t,d))),i===1)throw s=Eo,Nr(t,0),rr(t,l),Ln(t,Be()),s;if(i===6)rr(t,l);else{if(d=t.current.alternate,(l&30)===0&&!R_(d)&&(i=Oa(t,l),i===2&&(g=Er(t),g!==0&&(l=g,i=Qc(t,g))),i===1))throw s=Eo,Nr(t,0),rr(t,l),Ln(t,Be()),s;switch(t.finishedWork=d,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Ur(t,Pn,Ri);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=Kc+500-Be(),10<i)){if(Vn(t,0)!==0)break;if(d=t.suspendedLanes,(d&l)!==l){yn(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=rc(Ur.bind(null,t,Pn,Ri),i);break}Ur(t,Pn,Ri);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,d=-1;0<l;){var M=31-vn(l);g=1<<M,M=i[M],M>d&&(d=M),l&=~g}if(l=d,l=Be()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*A_(l/1960))-l,10<l){t.timeoutHandle=rc(Ur.bind(null,t,Pn,Ri),l);break}Ur(t,Pn,Ri);break;case 5:Ur(t,Pn,Ri);break;default:throw Error(n(329))}}}return Ln(t,Be()),t.callbackNode===s?Th.bind(null,t):null}function Qc(t,i){var s=To;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=Oa(t,i),t!==2&&(i=Pn,Pn=s,i!==null&&Jc(i)),t}function Jc(t){Pn===null?Pn=t:Pn.push.apply(Pn,t)}function R_(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var d=s[l],g=d.getSnapshot;d=d.value;try{if(!Jn(g(),d))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~qc,i&=~La,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-vn(i),l=1<<s;t[s]=-1,i&=~l}}function wh(t){if((Tt&6)!==0)throw Error(n(327));_s();var i=Vn(t,0);if((i&1)===0)return Ln(t,Be()),null;var s=Oa(t,i);if(t.tag!==0&&s===2){var l=Er(t);l!==0&&(i=l,s=Qc(t,l))}if(s===1)throw s=Eo,Nr(t,0),rr(t,i),Ln(t,Be()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Ur(t,Pn,Ri),Ln(t,Be()),null}function eu(t,i){var s=Tt;Tt|=1;try{return t(i)}finally{Tt=s,Tt===0&&(gs=Be()+500,ua&&Zi())}}function Dr(t){nr!==null&&nr.tag===0&&(Tt&6)===0&&_s();var i=Tt;Tt|=1;var s=qn.transition,l=At;try{if(qn.transition=null,At=1,t)return t()}finally{At=l,qn.transition=s,Tt=i,(Tt&6)===0&&Zi()}}function tu(){zn=ms.current,Nt(ms)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,i_(s)),Yt!==null)for(s=Yt.return;s!==null;){var l=s;switch(uc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&la();break;case 3:ds(),Nt(Rn),Nt(un),Ec();break;case 5:Sc(l);break;case 4:ds();break;case 13:Nt(Bt);break;case 19:Nt(Bt);break;case 10:gc(l.type._context);break;case 22:case 23:tu()}s=s.return}if(nn=t,Yt=t=sr(t.current,null),an=zn=i,Qt=0,Eo=null,qc=La=Lr=0,Pn=To=null,Cr!==null){for(i=0;i<Cr.length;i++)if(s=Cr[i],l=s.interleaved,l!==null){s.interleaved=null;var d=l.next,g=s.pending;if(g!==null){var M=g.next;g.next=d,l.next=M}s.pending=l}Cr=null}return t}function Ah(t,i){do{var s=Yt;try{if(mc(),ya.current=Ta,Sa){for(var l=Ht.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Sa=!1}if(Pr=0,tn=Zt=Ht=null,_o=!1,vo=0,Yc.current=null,s===null||s.return===null){Qt=1,Eo=i,Yt=null;break}e:{var g=t,M=s.return,I=s,z=i;if(i=an,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ie=z,_e=I,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Fe=Zd(M);if(Fe!==null){Fe.flags&=-257,Qd(Fe,M,I,g,i),Fe.mode&1&&$d(g,ie,i),i=Fe,z=ie;var Ve=i.updateQueue;if(Ve===null){var We=new Set;We.add(z),i.updateQueue=We}else Ve.add(z);break e}else{if((i&1)===0){$d(g,ie,i),nu();break e}z=Error(n(426))}}else if(kt&&I.mode&1){var jt=Zd(M);if(jt!==null){(jt.flags&65536)===0&&(jt.flags|=256),Qd(jt,M,I,g,i),hc(hs(z,I));break e}}g=z=hs(z,I),Qt!==4&&(Qt=2),To===null?To=[g]:To.push(g),g=M;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var q=qd(g,z,i);Sd(g,q);break e;case 1:I=z;var G=g.type,J=g.stateNode;if((g.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(tr===null||!tr.has(J)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ae=Kd(g,I,i);Sd(g,Ae);break e}}g=g.return}while(g!==null)}bh(s)}catch(Ye){i=Ye,Yt===s&&s!==null&&(Yt=s=s.return);continue}break}while(!0)}function Rh(){var t=Pa.current;return Pa.current=Ta,t===null?Ta:t}function nu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),nn===null||(Lr&268435455)===0&&(La&268435455)===0||rr(nn,an)}function Oa(t,i){var s=Tt;Tt|=2;var l=Rh();(nn!==t||an!==i)&&(Ri=null,Nr(t,i));do try{C_();break}catch(d){Ah(t,d)}while(!0);if(mc(),Tt=s,Pa.current=l,Yt!==null)throw Error(n(261));return nn=null,an=0,Qt}function C_(){for(;Yt!==null;)Ch(Yt)}function b_(){for(;Yt!==null&&!Ke();)Ch(Yt)}function Ch(t){var i=Dh(t.alternate,t,zn);t.memoizedProps=t.pendingProps,i===null?bh(t):Yt=i,Yc.current=null}function bh(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=S_(s,i,zn),s!==null){Yt=s;return}}else{if(s=M_(s,i),s!==null){s.flags&=32767,Yt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=t}while(i!==null);Qt===0&&(Qt=5)}function Ur(t,i,s){var l=At,d=qn.transition;try{qn.transition=null,At=1,P_(t,i,s,l)}finally{qn.transition=d,At=l}return null}function P_(t,i,s,l){do _s();while(nr!==null);if((Tt&6)!==0)throw Error(n(327));s=t.finishedWork;var d=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var g=s.lanes|s.childLanes;if(ug(t,g),t===nn&&(Yt=nn=null,an=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Na||(Na=!0,Nh(bt,function(){return _s(),null})),g=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||g){g=qn.transition,qn.transition=null;var M=At;At=1;var I=Tt;Tt|=4,Yc.current=null,T_(t,s),xh(s,t),$g(nc),qo=!!tc,nc=tc=null,t.current=s,w_(s),tt(),Tt=I,At=M,qn.transition=g}else t.current=s;if(Na&&(Na=!1,nr=t,Ua=d),g=t.pendingLanes,g===0&&(tr=null),ht(s.stateNode),Ln(t,Be()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)d=i[s],l(d.value,{componentStack:d.stack,digest:d.digest});if(Da)throw Da=!1,t=$c,$c=null,t;return(Ua&1)!==0&&t.tag!==0&&_s(),g=t.pendingLanes,(g&1)!==0?t===Zc?wo++:(wo=0,Zc=t):wo=0,Zi(),null}function _s(){if(nr!==null){var t=_f(Ua),i=qn.transition,s=At;try{if(qn.transition=null,At=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Ua=0,(Tt&6)!==0)throw Error(n(331));var d=Tt;for(Tt|=4,He=t.current;He!==null;){var g=He,M=g.child;if((He.flags&16)!==0){var I=g.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ie=I[z];for(He=ie;He!==null;){var _e=He;switch(_e.tag){case 0:case 11:case 15:Mo(8,_e,g)}var Se=_e.child;if(Se!==null)Se.return=_e,He=Se;else for(;He!==null;){_e=He;var me=_e.sibling,Fe=_e.return;if(ph(_e),_e===ie){He=null;break}if(me!==null){me.return=Fe,He=me;break}He=Fe}}}var Ve=g.alternate;if(Ve!==null){var We=Ve.child;if(We!==null){Ve.child=null;do{var jt=We.sibling;We.sibling=null,We=jt}while(We!==null)}}He=g}}if((g.subtreeFlags&2064)!==0&&M!==null)M.return=g,He=M;else e:for(;He!==null;){if(g=He,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Mo(9,g,g.return)}var q=g.sibling;if(q!==null){q.return=g.return,He=q;break e}He=g.return}}var G=t.current;for(He=G;He!==null;){M=He;var J=M.child;if((M.subtreeFlags&2064)!==0&&J!==null)J.return=M,He=J;else e:for(M=G;He!==null;){if(I=He,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:ba(9,I)}}catch(Ye){Wt(I,I.return,Ye)}if(I===M){He=null;break e}var Ae=I.sibling;if(Ae!==null){Ae.return=I.return,He=Ae;break e}He=I.return}}if(Tt=d,Zi(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(wn,t)}catch{}l=!0}return l}finally{At=s,qn.transition=i}}return!1}function Ph(t,i,s){i=hs(s,i),i=qd(t,i,1),t=Ji(t,i,1),i=yn(),t!==null&&(qs(t,1,i),Ln(t,i))}function Wt(t,i,s){if(t.tag===3)Ph(t,t,s);else for(;i!==null;){if(i.tag===3){Ph(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=hs(s,t),t=Kd(i,t,1),i=Ji(i,t,1),t=yn(),i!==null&&(qs(i,1,t),Ln(i,t));break}}i=i.return}}function L_(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=yn(),t.pingedLanes|=t.suspendedLanes&s,nn===t&&(an&s)===s&&(Qt===4||Qt===3&&(an&130023424)===an&&500>Be()-Kc?Nr(t,0):qc|=s),Ln(t,i)}function Lh(t,i){i===0&&((t.mode&1)===0?i=1:(i=Hi,Hi<<=1,(Hi&130023424)===0&&(Hi=4194304)));var s=yn();t=Ti(t,i),t!==null&&(qs(t,i,s),Ln(t,s))}function D_(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Lh(t,s)}function N_(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,d=t.memoizedState;d!==null&&(s=d.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Lh(t,s)}var Dh;Dh=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||Rn.current)bn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return bn=!1,y_(t,i,s);bn=(t.flags&131072)!==0}else bn=!1,kt&&(i.flags&1048576)!==0&&fd(i,da,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ra(t,i),t=i.pendingProps;var d=ss(i,un.current);fs(i,s),d=Ac(null,i,l,t,d,s);var g=Rc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Cn(l)?(g=!0,ca(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,xc(i),d.updater=wa,i.stateNode=d,d._reactInternals=i,Nc(i,l,t,s),i=Oc(null,i,l,!0,g,s)):(i.tag=0,kt&&g&&cc(i),xn(null,i,d,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ra(t,i),t=i.pendingProps,d=l._init,l=d(l._payload),i.type=l,d=i.tag=I_(l),t=ti(l,t),d){case 0:i=Fc(null,i,l,t,s);break e;case 1:i=rh(null,i,l,t,s);break e;case 11:i=Jd(null,i,l,t,s);break e;case 14:i=eh(null,i,l,ti(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ti(l,d),Fc(t,i,l,d,s);case 1:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ti(l,d),rh(t,i,l,d,s);case 3:e:{if(sh(i),t===null)throw Error(n(387));l=i.pendingProps,g=i.memoizedState,d=g.element,yd(t,i),va(i,l,null,s);var M=i.memoizedState;if(l=M.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=hs(Error(n(423)),i),i=oh(t,i,l,s,d);break e}else if(l!==d){d=hs(Error(n(424)),i),i=oh(t,i,l,s,d);break e}else for(kn=qi(i.stateNode.containerInfo.firstChild),On=i,kt=!0,ei=null,s=vd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(ls(),l===d){i=Ai(t,i,s);break e}xn(t,i,l,s)}i=i.child}return i;case 5:return Ed(i),t===null&&dc(i),l=i.type,d=i.pendingProps,g=t!==null?t.memoizedProps:null,M=d.children,ic(l,d)?M=null:g!==null&&ic(l,g)&&(i.flags|=32),ih(t,i),xn(t,i,M,s),i.child;case 6:return t===null&&dc(i),null;case 13:return ah(t,i,s);case 4:return yc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=cs(i,null,l,s):xn(t,i,l,s),i.child;case 11:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ti(l,d),Jd(t,i,l,d,s);case 7:return xn(t,i,i.pendingProps,s),i.child;case 8:return xn(t,i,i.pendingProps.children,s),i.child;case 12:return xn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,d=i.pendingProps,g=i.memoizedProps,M=d.value,Pt(ma,l._currentValue),l._currentValue=M,g!==null)if(Jn(g.value,M)){if(g.children===d.children&&!Rn.current){i=Ai(t,i,s);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var I=g.dependencies;if(I!==null){M=g.child;for(var z=I.firstContext;z!==null;){if(z.context===l){if(g.tag===1){z=wi(-1,s&-s),z.tag=2;var ie=g.updateQueue;if(ie!==null){ie=ie.shared;var _e=ie.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),ie.pending=z}}g.lanes|=s,z=g.alternate,z!==null&&(z.lanes|=s),_c(g.return,s,i),I.lanes|=s;break}z=z.next}}else if(g.tag===10)M=g.type===i.type?null:g.child;else if(g.tag===18){if(M=g.return,M===null)throw Error(n(341));M.lanes|=s,I=M.alternate,I!==null&&(I.lanes|=s),_c(M,s,i),M=g.sibling}else M=g.child;if(M!==null)M.return=g;else for(M=g;M!==null;){if(M===i){M=null;break}if(g=M.sibling,g!==null){g.return=M.return,M=g;break}M=M.return}g=M}xn(t,i,d.children,s),i=i.child}return i;case 9:return d=i.type,l=i.pendingProps.children,fs(i,s),d=jn(d),l=l(d),i.flags|=1,xn(t,i,l,s),i.child;case 14:return l=i.type,d=ti(l,i.pendingProps),d=ti(l.type,d),eh(t,i,l,d,s);case 15:return th(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,d=i.pendingProps,d=i.elementType===l?d:ti(l,d),Ra(t,i),i.tag=1,Cn(l)?(t=!0,ca(i)):t=!1,fs(i,s),jd(i,l,d),Nc(i,l,d,s),Oc(null,i,l,!0,t,s);case 19:return ch(t,i,s);case 22:return nh(t,i,s)}throw Error(n(156,i.tag))};function Nh(t,i){return re(t,i)}function U_(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,s,l){return new U_(t,i,s,l)}function iu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function I_(t){if(typeof t=="function")return iu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ce)return 11;if(t===Q)return 14}return 2}function sr(t,i){var s=t.alternate;return s===null?(s=Kn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function ka(t,i,s,l,d,g){var M=2;if(l=t,typeof t=="function")iu(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case U:return Ir(s.children,d,g,i);case ue:M=8,d|=8;break;case R:return t=Kn(12,s,i,d|2),t.elementType=R,t.lanes=g,t;case pe:return t=Kn(13,s,i,d),t.elementType=pe,t.lanes=g,t;case B:return t=Kn(19,s,i,d),t.elementType=B,t.lanes=g,t;case oe:return za(s,d,g,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:M=10;break e;case te:M=9;break e;case ce:M=11;break e;case Q:M=14;break e;case ee:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(M,s,i,d),i.elementType=t,i.type=l,i.lanes=g,i}function Ir(t,i,s,l){return t=Kn(7,t,l,i),t.lanes=s,t}function za(t,i,s,l){return t=Kn(22,t,l,i),t.elementType=oe,t.lanes=s,t.stateNode={isHidden:!1},t}function ru(t,i,s){return t=Kn(6,t,null,i),t.lanes=s,t}function su(t,i,s){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function F_(t,i,s,l,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kr(0),this.expirationTimes=Kr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ou(t,i,s,l,d,g,M,I,z){return t=new F_(t,i,s,I,z),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Kn(3,null,null,i),t.current=g,g.stateNode=t,g.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},xc(g),t}function O_(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function Uh(t){if(!t)return $i;t=t._reactInternals;e:{if(vi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Cn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(Cn(s))return ld(t,s,i)}return i}function Ih(t,i,s,l,d,g,M,I,z){return t=ou(s,l,!0,t,d,g,M,I,z),t.context=Uh(null),s=t.current,l=yn(),d=ir(s),g=wi(l,d),g.callback=i??null,Ji(s,g,d),t.current.lanes=d,qs(t,d,l),Ln(t,l),t}function Ba(t,i,s,l){var d=i.current,g=yn(),M=ir(d);return s=Uh(s),i.context===null?i.context=s:i.pendingContext=s,i=wi(g,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(d,i,M),t!==null&&(ri(t,d,M,g),_a(t,d,M)),M}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fh(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function au(t,i){Fh(t,i),(t=t.alternate)&&Fh(t,i)}function k_(){return null}var Oh=typeof reportError=="function"?reportError:function(t){console.error(t)};function lu(t){this._internalRoot=t}Ga.prototype.render=lu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ba(t,i,null,null)},Ga.prototype.unmount=lu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Dr(function(){Ba(null,t,null,null)}),i[yi]=null}};function Ga(t){this._internalRoot=t}Ga.prototype.unstable_scheduleHydration=function(t){if(t){var i=yf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Xi.length&&i!==0&&i<Xi[s].priority;s++);Xi.splice(s,0,t),s===0&&Ef(t)}};function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Va(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kh(){}function z_(t,i,s,l,d){if(d){if(typeof l=="function"){var g=l;l=function(){var ie=Ha(M);g.call(ie)}}var M=Ih(i,l,t,0,null,!1,!1,"",kh);return t._reactRootContainer=M,t[yi]=M.current,lo(t.nodeType===8?t.parentNode:t),Dr(),M}for(;d=t.lastChild;)t.removeChild(d);if(typeof l=="function"){var I=l;l=function(){var ie=Ha(z);I.call(ie)}}var z=ou(t,0,!1,null,null,!1,!1,"",kh);return t._reactRootContainer=z,t[yi]=z.current,lo(t.nodeType===8?t.parentNode:t),Dr(function(){Ba(i,z,s,l)}),z}function Wa(t,i,s,l,d){var g=s._reactRootContainer;if(g){var M=g;if(typeof d=="function"){var I=d;d=function(){var z=Ha(M);I.call(z)}}Ba(i,M,t,d)}else M=z_(s,i,t,d,l);return Ha(M)}vf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=Vt(i.pendingLanes);s!==0&&(Nl(i,s|1),Ln(i,Be()),(Tt&6)===0&&(gs=Be()+500,Zi()))}break;case 13:Dr(function(){var l=Ti(t,1);if(l!==null){var d=yn();ri(l,t,1,d)}}),au(t,1)}},Ul=function(t){if(t.tag===13){var i=Ti(t,134217728);if(i!==null){var s=yn();ri(i,t,134217728,s)}au(t,134217728)}},xf=function(t){if(t.tag===13){var i=ir(t),s=Ti(t,i);if(s!==null){var l=yn();ri(s,t,i,l)}au(t,i)}},yf=function(){return At},Sf=function(t,i){var s=At;try{return At=t,i()}finally{At=s}},ve=function(t,i,s){switch(i){case"input":if(St(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var d=aa(l);if(!d)throw Error(n(90));ne(l),St(l,d)}}}break;case"textarea":Me(t,s);break;case"select":i=s.value,i!=null&&Z(t,!!s.multiple,i,!1)}},mt=eu,gt=Dr;var B_={usingClientEntryPoint:!1,Events:[fo,is,aa,et,Ze,eu]},Ao={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},H_={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=se(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||k_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{wn=Xa.inject(H_),Et=Xa}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B_,Dn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(i))throw Error(n(200));return O_(t,i,null,s)},Dn.createRoot=function(t,i){if(!cu(t))throw Error(n(299));var s=!1,l="",d=Oh;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ou(t,1,!1,null,null,s,!1,l,d),t[yi]=i.current,lo(t.nodeType===8?t.parentNode:t),new lu(i)},Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=se(i),t=t===null?null:t.stateNode,t},Dn.flushSync=function(t){return Dr(t)},Dn.hydrate=function(t,i,s){if(!Va(i))throw Error(n(200));return Wa(null,t,i,!0,s)},Dn.hydrateRoot=function(t,i,s){if(!cu(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,d=!1,g="",M=Oh;if(s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(g=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=Ih(i,null,t,1,s??null,d,!1,g,M),t[yi]=i.current,lo(t),l)for(t=0;t<l.length;t++)s=l[t],d=s._getVersion,d=d(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,d]:i.mutableSourceEagerHydrationData.push(s,d);return new Ga(i)},Dn.render=function(t,i,s){if(!Va(i))throw Error(n(200));return Wa(null,t,i,!1,s)},Dn.unmountComponentAtNode=function(t){if(!Va(t))throw Error(n(40));return t._reactRootContainer?(Dr(function(){Wa(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1},Dn.unstable_batchedUpdates=eu,Dn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Va(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Wa(t,i,s,!1,l)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var jh;function K_(){if(jh)return du.exports;jh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),du.exports=q_(),du.exports}var Yh;function $_(){if(Yh)return ja;Yh=1;var o=K_();return ja.createRoot=o.createRoot,ja.hydrateRoot=o.hydrateRoot,ja}var Z_=$_();const af="160",dr={ROTATE:0,DOLLY:1,PAN:2},vs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Q_=0,qh=1,J_=2,Rm=1,Cm=2,Ui=3,yr=0,Tn=1,Ii=2,gr=0,ks=1,Kh=2,$h=3,Zh=4,ev=5,Hr=100,tv=101,nv=102,Qh=103,Jh=104,iv=200,rv=201,sv=202,ov=203,qu=204,Ku=205,av=206,lv=207,cv=208,uv=209,fv=210,dv=211,hv=212,pv=213,mv=214,gv=0,_v=1,vv=2,xl=3,xv=4,yv=5,Sv=6,Mv=7,bm=0,Ev=1,Tv=2,_r=0,wv=1,Av=2,Rv=3,Pm=4,Cv=5,bv=6,Lm=300,Bs=301,Hs=302,$u=303,Zu=304,Al=306,Qu=1e3,ci=1001,Ju=1002,Mn=1003,ep=1004,mu=1005,Zn=1006,Pv=1007,Fo=1008,vr=1009,Lv=1010,Dv=1011,lf=1012,Dm=1013,pr=1014,mr=1015,Oo=1016,Nm=1017,Um=1018,Vr=1020,Nv=1021,ui=1023,Uv=1024,Iv=1025,Wr=1026,Gs=1027,Fv=1028,Im=1029,Ov=1030,Fm=1031,Om=1033,gu=33776,_u=33777,vu=33778,xu=33779,tp=35840,np=35841,ip=35842,rp=35843,km=36196,sp=37492,op=37496,ap=37808,lp=37809,cp=37810,up=37811,fp=37812,dp=37813,hp=37814,pp=37815,mp=37816,gp=37817,_p=37818,vp=37819,xp=37820,yp=37821,yu=36492,Sp=36494,Mp=36495,kv=36283,Ep=36284,Tp=36285,wp=36286,zm=3e3,xr=3001,zv=3200,Bv=3201,Bm=0,Hv=1,Qn="",ln="srgb",ki="srgb-linear",cf="display-p3",Rl="display-p3-linear",yl="linear",Ut="srgb",Sl="rec709",Ml="p3",xs=7680,Ap=519,Gv=512,Vv=513,Wv=514,Hm=515,Xv=516,jv=517,Yv=518,qv=519,Rp=35044,Cp="300 es",ef=1035,Fi=2e3,El=2001;class qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,f=a.length;c<f;c++)a[c].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_l=Math.PI/180,Tl=180/Math.PI;function ko(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pn[o&255]+pn[o>>8&255]+pn[o>>16&255]+pn[o>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]).toLowerCase()}function gn(o,e,n){return Math.max(e,Math.min(n,o))}function Kv(o,e){return(o%e+e)%e}function Su(o,e,n){return(1-n)*o+n*e}function bp(o){return(o&o-1)===0&&o!==0}function tf(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Co(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Nn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const $v={DEG2RAD:_l};class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*a+e.x,this.y=c*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(e,n,r,a,c,f,u,h,p){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,f,u,h,p)}set(e,n,r,a,c,f,u,h,p){const m=this.elements;return m[0]=e,m[1]=a,m[2]=u,m[3]=n,m[4]=c,m[5]=h,m[6]=r,m[7]=f,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,f=r[0],u=r[3],h=r[6],p=r[1],m=r[4],v=r[7],x=r[2],S=r[5],T=r[8],E=a[0],y=a[3],_=a[6],P=a[1],A=a[4],D=a[7],V=a[2],O=a[5],U=a[8];return c[0]=f*E+u*P+h*V,c[3]=f*y+u*A+h*O,c[6]=f*_+u*D+h*U,c[1]=p*E+m*P+v*V,c[4]=p*y+m*A+v*O,c[7]=p*_+m*D+v*U,c[2]=x*E+S*P+T*V,c[5]=x*y+S*A+T*O,c[8]=x*_+S*D+T*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],u=e[5],h=e[6],p=e[7],m=e[8];return n*f*m-n*u*p-r*c*m+r*u*h+a*c*p-a*f*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],u=e[5],h=e[6],p=e[7],m=e[8],v=m*f-u*p,x=u*h-m*c,S=p*c-f*h,T=n*v+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(a*p-m*r)*E,e[2]=(u*r-a*f)*E,e[3]=x*E,e[4]=(m*n-a*h)*E,e[5]=(a*c-u*n)*E,e[6]=S*E,e[7]=(r*h-p*n)*E,e[8]=(f*n-r*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,f,u){const h=Math.cos(c),p=Math.sin(c);return this.set(r*h,r*p,-r*(h*f+p*u)+f+e,-a*p,a*h,-a*(-p*f+h*u)+u+n,0,0,1),this}scale(e,n){return this.premultiply(Mu.makeScale(e,n)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Mu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mu=new xt;function Gm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function wl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Zv(){const o=wl("canvas");return o.style.display="block",o}const Pp={};function Io(o){o in Pp||(Pp[o]=!0,console.warn(o))}const Lp=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dp=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ya={[ki]:{transfer:yl,primaries:Sl,toReference:o=>o,fromReference:o=>o},[ln]:{transfer:Ut,primaries:Sl,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Rl]:{transfer:yl,primaries:Ml,toReference:o=>o.applyMatrix3(Dp),fromReference:o=>o.applyMatrix3(Lp)},[cf]:{transfer:Ut,primaries:Ml,toReference:o=>o.convertSRGBToLinear().applyMatrix3(Dp),fromReference:o=>o.applyMatrix3(Lp).convertLinearToSRGB()}},Qv=new Set([ki,Rl]),Rt={enabled:!0,_workingColorSpace:ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Qv.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=Ya[e].toReference,a=Ya[n].fromReference;return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Ya[o].primaries},getTransfer:function(o){return o===Qn?yl:Ya[o].transfer}};function zs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Eu(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ys;class Vm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ys===void 0&&(ys=wl("canvas")),ys.width=e.width,ys.height=e.height;const r=ys.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ys}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let f=0;f<c.length;f++)c[f]=zs(c[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(zs(n[r]/255)*255):n[r]=zs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jv=0;class Wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=ko(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let f=0,u=a.length;f<u;f++)a[f].isDataTexture?c.push(Tu(a[f].image)):c.push(Tu(a[f]))}else c=Tu(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Tu(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Vm.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e0=0;class Gn extends qr{constructor(e=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,r=ci,a=ci,c=Zn,f=Fo,u=ui,h=vr,p=Gn.DEFAULT_ANISOTROPY,m=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=ko(),this.name="",this.source=new Wm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=u,this.internalFormat=null,this.type=h,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===xr?ln:Qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qu:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Ju:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qu:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Ju:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ln?xr:zm}set encoding(e){Io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===xr?ln:Qn}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Lm;Gn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,r=0,a=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const h=e.elements,p=h[0],m=h[4],v=h[8],x=h[1],S=h[5],T=h[9],E=h[2],y=h[6],_=h[10];if(Math.abs(m-x)<.01&&Math.abs(v-E)<.01&&Math.abs(T-y)<.01){if(Math.abs(m+x)<.1&&Math.abs(v+E)<.1&&Math.abs(T+y)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(p+1)/2,D=(S+1)/2,V=(_+1)/2,O=(m+x)/4,U=(v+E)/4,ue=(T+y)/4;return A>D&&A>V?A<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(A),a=O/r,c=U/r):D>V?D<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(D),r=O/a,c=ue/a):V<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(V),r=U/c,a=ue/c),this.set(r,a,c,n),this}let P=Math.sqrt((y-T)*(y-T)+(v-E)*(v-E)+(x-m)*(x-m));return Math.abs(P)<.001&&(P=1),this.x=(y-T)/P,this.y=(v-E)/P,this.z=(x-m)/P,this.w=Math.acos((p+S+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t0 extends qr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const a={width:e,height:n,depth:1};r.encoding!==void 0&&(Io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===xr?ln:Qn),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Gn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Wm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends t0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Xm extends Gn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class n0 extends Gn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jr{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,f,u){let h=r[a+0],p=r[a+1],m=r[a+2],v=r[a+3];const x=c[f+0],S=c[f+1],T=c[f+2],E=c[f+3];if(u===0){e[n+0]=h,e[n+1]=p,e[n+2]=m,e[n+3]=v;return}if(u===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=E;return}if(v!==E||h!==x||p!==S||m!==T){let y=1-u;const _=h*x+p*S+m*T+v*E,P=_>=0?1:-1,A=1-_*_;if(A>Number.EPSILON){const V=Math.sqrt(A),O=Math.atan2(V,_*P);y=Math.sin(y*O)/V,u=Math.sin(u*O)/V}const D=u*P;if(h=h*y+x*D,p=p*y+S*D,m=m*y+T*D,v=v*y+E*D,y===1-u){const V=1/Math.sqrt(h*h+p*p+m*m+v*v);h*=V,p*=V,m*=V,v*=V}}e[n]=h,e[n+1]=p,e[n+2]=m,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,c,f){const u=r[a],h=r[a+1],p=r[a+2],m=r[a+3],v=c[f],x=c[f+1],S=c[f+2],T=c[f+3];return e[n]=u*T+m*v+h*S-p*x,e[n+1]=h*T+m*x+p*v-u*S,e[n+2]=p*T+m*S+u*x-h*v,e[n+3]=m*T-u*v-h*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,f=e._order,u=Math.cos,h=Math.sin,p=u(r/2),m=u(a/2),v=u(c/2),x=h(r/2),S=h(a/2),T=h(c/2);switch(f){case"XYZ":this._x=x*m*v+p*S*T,this._y=p*S*v-x*m*T,this._z=p*m*T+x*S*v,this._w=p*m*v-x*S*T;break;case"YXZ":this._x=x*m*v+p*S*T,this._y=p*S*v-x*m*T,this._z=p*m*T-x*S*v,this._w=p*m*v+x*S*T;break;case"ZXY":this._x=x*m*v-p*S*T,this._y=p*S*v+x*m*T,this._z=p*m*T+x*S*v,this._w=p*m*v-x*S*T;break;case"ZYX":this._x=x*m*v-p*S*T,this._y=p*S*v+x*m*T,this._z=p*m*T-x*S*v,this._w=p*m*v+x*S*T;break;case"YZX":this._x=x*m*v+p*S*T,this._y=p*S*v+x*m*T,this._z=p*m*T-x*S*v,this._w=p*m*v-x*S*T;break;case"XZY":this._x=x*m*v-p*S*T,this._y=p*S*v-x*m*T,this._z=p*m*T+x*S*v,this._w=p*m*v+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],f=n[1],u=n[5],h=n[9],p=n[2],m=n[6],v=n[10],x=r+u+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(m-h)*S,this._y=(c-p)*S,this._z=(f-a)*S}else if(r>u&&r>v){const S=2*Math.sqrt(1+r-u-v);this._w=(m-h)/S,this._x=.25*S,this._y=(a+f)/S,this._z=(c+p)/S}else if(u>v){const S=2*Math.sqrt(1+u-r-v);this._w=(c-p)/S,this._x=(a+f)/S,this._y=.25*S,this._z=(h+m)/S}else{const S=2*Math.sqrt(1+v-r-u);this._w=(f-a)/S,this._x=(c+p)/S,this._y=(h+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,f=e._w,u=n._x,h=n._y,p=n._z,m=n._w;return this._x=r*m+f*u+a*p-c*h,this._y=a*m+f*h+c*u-r*p,this._z=c*m+f*p+r*h-a*u,this._w=f*m-r*u-a*h-c*p,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,f=this._w;let u=f*e._w+r*e._x+a*e._y+c*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=f,this._x=r,this._y=a,this._z=c,this;const h=1-u*u;if(h<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,u),v=Math.sin((1-n)*m)/p,x=Math.sin(n*m)/p;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),a=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(n*Math.cos(a),r*Math.sin(c),r*Math.cos(c),n*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Np.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,f=e.y,u=e.z,h=e.w,p=2*(f*a-u*r),m=2*(u*n-c*a),v=2*(c*r-f*n);return this.x=n+h*p+f*v-u*m,this.y=r+h*m+u*p-c*v,this.z=a+h*v+c*m-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,f=n.x,u=n.y,h=n.z;return this.x=a*h-c*u,this.y=c*f-r*h,this.z=r*u-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wu=new j,Np=new jr;class Ws{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,u=c.count;f<u;f++)e.isMesh===!0?e.getVertexPosition(f,si):si.fromBufferAttribute(c,f),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),qa.copy(r.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}const a=e.children;for(let c=0,f=a.length;c<f;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),Ka.subVectors(this.max,bo),Ss.subVectors(e.a,bo),Ms.subVectors(e.b,bo),Es.subVectors(e.c,bo),ar.subVectors(Ms,Ss),lr.subVectors(Es,Ms),Fr.subVectors(Ss,Es);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Fr.z,Fr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Fr.z,0,-Fr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Fr.y,Fr.x,0];return!Au(n,Ss,Ms,Es,Ka)||(n=[1,0,0,0,1,0,0,0,1],!Au(n,Ss,Ms,Es,Ka))?!1:($a.crossVectors(ar,lr),n=[$a.x,$a.y,$a.z],Au(n,Ss,Ms,Es,Ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ci=[new j,new j,new j,new j,new j,new j,new j,new j],si=new j,qa=new Ws,Ss=new j,Ms=new j,Es=new j,ar=new j,lr=new j,Fr=new j,bo=new j,Ka=new j,$a=new j,Or=new j;function Au(o,e,n,r,a){for(let c=0,f=o.length-3;c<=f;c+=3){Or.fromArray(o,c);const u=a.x*Math.abs(Or.x)+a.y*Math.abs(Or.y)+a.z*Math.abs(Or.z),h=e.dot(Or),p=n.dot(Or),m=r.dot(Or);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>u)return!1}return!0}const i0=new Ws,Po=new j,Ru=new j;class uf{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):i0.setFromPoints(e).getCenter(r);let a=0;for(let c=0,f=e.length;c<f;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Po,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Ru)),this.expandByPoint(Po.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new j,Cu=new j,Za=new j,cr=new j,bu=new j,Qa=new j,Pu=new j;class jm{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Cu.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Cu);const c=e.distanceTo(n)*.5,f=-this.direction.dot(Za),u=cr.dot(this.direction),h=-cr.dot(Za),p=cr.lengthSq(),m=Math.abs(1-f*f);let v,x,S,T;if(m>0)if(v=f*h-u,x=f*u-h,T=c*m,v>=0)if(x>=-T)if(x<=T){const E=1/m;v*=E,x*=E,S=v*(v+f*x+2*u)+x*(f*v+x+2*h)+p}else x=c,v=Math.max(0,-(f*x+u)),S=-v*v+x*(x+2*h)+p;else x=-c,v=Math.max(0,-(f*x+u)),S=-v*v+x*(x+2*h)+p;else x<=-T?(v=Math.max(0,-(-f*c+u)),x=v>0?-c:Math.min(Math.max(-c,-h),c),S=-v*v+x*(x+2*h)+p):x<=T?(v=0,x=Math.min(Math.max(-c,-h),c),S=x*(x+2*h)+p):(v=Math.max(0,-(f*c+u)),x=v>0?c:Math.min(Math.max(-c,-h),c),S=-v*v+x*(x+2*h)+p);else x=f>0?-c:c,v=Math.max(0,-(f*x+u)),S=-v*v+x*(x+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Cu).addScaledVector(Za,x),S}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const r=bi.dot(this.direction),a=bi.dot(bi)-r*r,c=e.radius*e.radius;if(a>c)return null;const f=Math.sqrt(c-a),u=r-f,h=r+f;return h<0?null:u<0?this.at(h,n):this.at(u,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,f,u,h;const p=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),m>=0?(c=(e.min.y-x.y)*m,f=(e.max.y-x.y)*m):(c=(e.max.y-x.y)*m,f=(e.min.y-x.y)*m),r>f||c>a||((c>r||isNaN(r))&&(r=c),(f<a||isNaN(a))&&(a=f),v>=0?(u=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(u=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||u>a)||((u>r||r!==r)&&(r=u),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,r,a,c){bu.subVectors(n,e),Qa.subVectors(r,e),Pu.crossVectors(bu,Qa);let f=this.direction.dot(Pu),u;if(f>0){if(a)return null;u=1}else if(f<0)u=-1,f=-f;else return null;cr.subVectors(this.origin,e);const h=u*this.direction.dot(Qa.crossVectors(cr,Qa));if(h<0)return null;const p=u*this.direction.dot(bu.cross(cr));if(p<0||h+p>f)return null;const m=-u*cr.dot(Pu);return m<0?null:this.at(m/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,n,r,a,c,f,u,h,p,m,v,x,S,T,E,y){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,f,u,h,p,m,v,x,S,T,E,y)}set(e,n,r,a,c,f,u,h,p,m,v,x,S,T,E,y){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=c,_[5]=f,_[9]=u,_[13]=h,_[2]=p,_[6]=m,_[10]=v,_[14]=x,_[3]=S,_[7]=T,_[11]=E,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Ts.setFromMatrixColumn(e,0).length(),c=1/Ts.setFromMatrixColumn(e,1).length(),f=1/Ts.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,f=Math.cos(r),u=Math.sin(r),h=Math.cos(a),p=Math.sin(a),m=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=f*m,S=f*v,T=u*m,E=u*v;n[0]=h*m,n[4]=-h*v,n[8]=p,n[1]=S+T*p,n[5]=x-E*p,n[9]=-u*h,n[2]=E-x*p,n[6]=T+S*p,n[10]=f*h}else if(e.order==="YXZ"){const x=h*m,S=h*v,T=p*m,E=p*v;n[0]=x+E*u,n[4]=T*u-S,n[8]=f*p,n[1]=f*v,n[5]=f*m,n[9]=-u,n[2]=S*u-T,n[6]=E+x*u,n[10]=f*h}else if(e.order==="ZXY"){const x=h*m,S=h*v,T=p*m,E=p*v;n[0]=x-E*u,n[4]=-f*v,n[8]=T+S*u,n[1]=S+T*u,n[5]=f*m,n[9]=E-x*u,n[2]=-f*p,n[6]=u,n[10]=f*h}else if(e.order==="ZYX"){const x=f*m,S=f*v,T=u*m,E=u*v;n[0]=h*m,n[4]=T*p-S,n[8]=x*p+E,n[1]=h*v,n[5]=E*p+x,n[9]=S*p-T,n[2]=-p,n[6]=u*h,n[10]=f*h}else if(e.order==="YZX"){const x=f*h,S=f*p,T=u*h,E=u*p;n[0]=h*m,n[4]=E-x*v,n[8]=T*v+S,n[1]=v,n[5]=f*m,n[9]=-u*m,n[2]=-p*m,n[6]=S*v+T,n[10]=x-E*v}else if(e.order==="XZY"){const x=f*h,S=f*p,T=u*h,E=u*p;n[0]=h*m,n[4]=-v,n[8]=p*m,n[1]=x*v+E,n[5]=f*m,n[9]=S*v-T,n[2]=T*v-S,n[6]=u*m,n[10]=E*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,s0)}lookAt(e,n,r){const a=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ur.crossVectors(r,Bn),ur.lengthSq()===0&&(Math.abs(r.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ur.crossVectors(r,Bn)),ur.normalize(),Ja.crossVectors(Bn,ur),a[0]=ur.x,a[4]=Ja.x,a[8]=Bn.x,a[1]=ur.y,a[5]=Ja.y,a[9]=Bn.y,a[2]=ur.z,a[6]=Ja.z,a[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,f=r[0],u=r[4],h=r[8],p=r[12],m=r[1],v=r[5],x=r[9],S=r[13],T=r[2],E=r[6],y=r[10],_=r[14],P=r[3],A=r[7],D=r[11],V=r[15],O=a[0],U=a[4],ue=a[8],R=a[12],L=a[1],te=a[5],ce=a[9],pe=a[13],B=a[2],Q=a[6],ee=a[10],oe=a[14],H=a[3],$=a[7],X=a[11],N=a[15];return c[0]=f*O+u*L+h*B+p*H,c[4]=f*U+u*te+h*Q+p*$,c[8]=f*ue+u*ce+h*ee+p*X,c[12]=f*R+u*pe+h*oe+p*N,c[1]=m*O+v*L+x*B+S*H,c[5]=m*U+v*te+x*Q+S*$,c[9]=m*ue+v*ce+x*ee+S*X,c[13]=m*R+v*pe+x*oe+S*N,c[2]=T*O+E*L+y*B+_*H,c[6]=T*U+E*te+y*Q+_*$,c[10]=T*ue+E*ce+y*ee+_*X,c[14]=T*R+E*pe+y*oe+_*N,c[3]=P*O+A*L+D*B+V*H,c[7]=P*U+A*te+D*Q+V*$,c[11]=P*ue+A*ce+D*ee+V*X,c[15]=P*R+A*pe+D*oe+V*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],f=e[1],u=e[5],h=e[9],p=e[13],m=e[2],v=e[6],x=e[10],S=e[14],T=e[3],E=e[7],y=e[11],_=e[15];return T*(+c*h*v-a*p*v-c*u*x+r*p*x+a*u*S-r*h*S)+E*(+n*h*S-n*p*x+c*f*x-a*f*S+a*p*m-c*h*m)+y*(+n*p*v-n*u*S-c*f*v+r*f*S+c*u*m-r*p*m)+_*(-a*u*m-n*h*v+n*u*x+a*f*v-r*f*x+r*h*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],f=e[4],u=e[5],h=e[6],p=e[7],m=e[8],v=e[9],x=e[10],S=e[11],T=e[12],E=e[13],y=e[14],_=e[15],P=v*y*p-E*x*p+E*h*S-u*y*S-v*h*_+u*x*_,A=T*x*p-m*y*p-T*h*S+f*y*S+m*h*_-f*x*_,D=m*E*p-T*v*p+T*u*S-f*E*S-m*u*_+f*v*_,V=T*v*h-m*E*h-T*u*x+f*E*x+m*u*y-f*v*y,O=n*P+r*A+a*D+c*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=P*U,e[1]=(E*x*c-v*y*c-E*a*S+r*y*S+v*a*_-r*x*_)*U,e[2]=(u*y*c-E*h*c+E*a*p-r*y*p-u*a*_+r*h*_)*U,e[3]=(v*h*c-u*x*c-v*a*p+r*x*p+u*a*S-r*h*S)*U,e[4]=A*U,e[5]=(m*y*c-T*x*c+T*a*S-n*y*S-m*a*_+n*x*_)*U,e[6]=(T*h*c-f*y*c-T*a*p+n*y*p+f*a*_-n*h*_)*U,e[7]=(f*x*c-m*h*c+m*a*p-n*x*p-f*a*S+n*h*S)*U,e[8]=D*U,e[9]=(T*v*c-m*E*c-T*r*S+n*E*S+m*r*_-n*v*_)*U,e[10]=(f*E*c-T*u*c+T*r*p-n*E*p-f*r*_+n*u*_)*U,e[11]=(m*u*c-f*v*c-m*r*p+n*v*p+f*r*S-n*u*S)*U,e[12]=V*U,e[13]=(m*E*a-T*v*a+T*r*x-n*E*x-m*r*y+n*v*y)*U,e[14]=(T*u*a-f*E*a-T*r*h+n*E*h+f*r*y-n*u*y)*U,e[15]=(f*v*a-m*u*a+m*r*h-n*v*h-f*r*x+n*u*x)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,f=e.x,u=e.y,h=e.z,p=c*f,m=c*u;return this.set(p*f+r,p*u-a*h,p*h+a*u,0,p*u+a*h,m*u+r,m*h-a*f,0,p*h-a*u,m*h+a*f,c*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,f){return this.set(1,r,c,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,f=n._y,u=n._z,h=n._w,p=c+c,m=f+f,v=u+u,x=c*p,S=c*m,T=c*v,E=f*m,y=f*v,_=u*v,P=h*p,A=h*m,D=h*v,V=r.x,O=r.y,U=r.z;return a[0]=(1-(E+_))*V,a[1]=(S+D)*V,a[2]=(T-A)*V,a[3]=0,a[4]=(S-D)*O,a[5]=(1-(x+_))*O,a[6]=(y+P)*O,a[7]=0,a[8]=(T+A)*U,a[9]=(y-P)*U,a[10]=(1-(x+E))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Ts.set(a[0],a[1],a[2]).length();const f=Ts.set(a[4],a[5],a[6]).length(),u=Ts.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],oi.copy(this);const p=1/c,m=1/f,v=1/u;return oi.elements[0]*=p,oi.elements[1]*=p,oi.elements[2]*=p,oi.elements[4]*=m,oi.elements[5]*=m,oi.elements[6]*=m,oi.elements[8]*=v,oi.elements[9]*=v,oi.elements[10]*=v,n.setFromRotationMatrix(oi),r.x=c,r.y=f,r.z=u,this}makePerspective(e,n,r,a,c,f,u=Fi){const h=this.elements,p=2*c/(n-e),m=2*c/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,T;if(u===Fi)S=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(u===El)S=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,c,f,u=Fi){const h=this.elements,p=1/(n-e),m=1/(r-a),v=1/(f-c),x=(n+e)*p,S=(r+a)*m;let T,E;if(u===Fi)T=(f+c)*v,E=-2*v;else if(u===El)T=c*v,E=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=E,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ts=new j,oi=new Kt,r0=new j(0,0,0),s0=new j(1,1,1),ur=new j,Ja=new j,Bn=new j,Up=new Kt,Ip=new jr;class Cl{constructor(e=0,n=0,r=0,a=Cl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],f=a[4],u=a[8],h=a[1],p=a[5],m=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(gn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-gn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(gn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(u,c)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Up,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ip.setFromEuler(this),this.setFromQuaternion(Ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cl.DEFAULT_ORDER="XYZ";class Ym{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o0=0;const Fp=new j,ws=new jr,Pi=new Kt,el=new j,Lo=new j,a0=new j,l0=new jr,Op=new j(1,0,0),kp=new j(0,1,0),zp=new j(0,0,1),c0={type:"added"},u0={type:"removed"};class $t extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new j,n=new Cl,r=new jr,a=new j(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new xt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ym,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,n){return ws.setFromAxisAngle(e,n),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(Op,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,n){return Fp.copy(e).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Op,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?el.copy(e):el.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Lo,el,this.up):Pi.lookAt(el,Lo,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),ws.setFromRotationMatrix(Pi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(c0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(u0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,f=a.length;c<f;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,a0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++){const c=n[r];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let c=0,f=a.length;c<f;c++){const u=a[c];u.matrixWorldAutoUpdate===!0&&u.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function c(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const v=h[p];c(e.shapes,v)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,p=this.material.length;h<p;h++)u.push(c(e.materials,this.material[h]));a.material=u}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];a.animations.push(c(e.animations,h))}}if(n){const u=f(e.geometries),h=f(e.materials),p=f(e.textures),m=f(e.images),v=f(e.shapes),x=f(e.skeletons),S=f(e.animations),T=f(e.nodes);u.length>0&&(r.geometries=u),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),m.length>0&&(r.images=m),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function f(u){const h=[];for(const p in u){const m=u[p];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}$t.DEFAULT_UP=new j(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new j,Li=new j,Lu=new j,Di=new j,As=new j,Rs=new j,Bp=new j,Du=new j,Nu=new j,Uu=new j;let tl=!1;class li{constructor(e=new j,n=new j,r=new j){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ai.subVectors(e,n),a.cross(ai);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ai.subVectors(a,n),Li.subVectors(r,n),Lu.subVectors(e,n);const f=ai.dot(ai),u=ai.dot(Li),h=ai.dot(Lu),p=Li.dot(Li),m=Li.dot(Lu),v=f*p-u*u;if(v===0)return c.set(0,0,0),null;const x=1/v,S=(p*h-u*m)*x,T=(f*m-u*h)*x;return c.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getUV(e,n,r,a,c,f,u,h){return tl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tl=!0),this.getInterpolation(e,n,r,a,c,f,u,h)}static getInterpolation(e,n,r,a,c,f,u,h){return this.getBarycoord(e,n,r,a,Di)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Di.x),h.addScaledVector(f,Di.y),h.addScaledVector(u,Di.z),h)}static isFrontFacing(e,n,r,a){return ai.subVectors(r,n),Li.subVectors(e,n),ai.cross(Li).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ai.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return li.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,a,c){return tl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tl=!0),li.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}getInterpolation(e,n,r,a,c){return li.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let f,u;As.subVectors(a,r),Rs.subVectors(c,r),Du.subVectors(e,r);const h=As.dot(Du),p=Rs.dot(Du);if(h<=0&&p<=0)return n.copy(r);Nu.subVectors(e,a);const m=As.dot(Nu),v=Rs.dot(Nu);if(m>=0&&v<=m)return n.copy(a);const x=h*v-m*p;if(x<=0&&h>=0&&m<=0)return f=h/(h-m),n.copy(r).addScaledVector(As,f);Uu.subVectors(e,c);const S=As.dot(Uu),T=Rs.dot(Uu);if(T>=0&&S<=T)return n.copy(c);const E=S*p-h*T;if(E<=0&&p>=0&&T<=0)return u=p/(p-T),n.copy(r).addScaledVector(Rs,u);const y=m*T-S*v;if(y<=0&&v-m>=0&&S-T>=0)return Bp.subVectors(c,a),u=(v-m)/(v-m+(S-T)),n.copy(a).addScaledVector(Bp,u);const _=1/(y+E+x);return f=E*_,u=x*_,n.copy(r).addScaledVector(As,f).addScaledVector(Rs,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},nl={h:0,s:0,l:0};function Iu(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class yt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Rt.workingColorSpace){if(e=Kv(e,1),n=gn(n,0,1),r=gn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Iu(f,c,e+1/3),this.g=Iu(f,c,e),this.b=Iu(f,c,e-1/3)}return Rt.toWorkingColorSpace(this,a),this}setStyle(e,n=ln){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=a[1],u=a[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ln){const r=qm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=Eu(e.r),this.g=Eu(e.g),this.b=Eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Rt.fromWorkingColorSpace(mn.copy(this),e),Math.round(gn(mn.r*255,0,255))*65536+Math.round(gn(mn.g*255,0,255))*256+Math.round(gn(mn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.fromWorkingColorSpace(mn.copy(this),n);const r=mn.r,a=mn.g,c=mn.b,f=Math.max(r,a,c),u=Math.min(r,a,c);let h,p;const m=(u+f)/2;if(u===f)h=0,p=0;else{const v=f-u;switch(p=m<=.5?v/(f+u):v/(2-f-u),f){case r:h=(a-c)/v+(a<c?6:0);break;case a:h=(c-r)/v+2;break;case c:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=m,e}getRGB(e,n=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(mn.copy(this),n),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=ln){Rt.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,a=mn.b;return e!==ln?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(nl);const r=Su(fr.h,nl.h,n),a=Su(fr.s,nl.s,n),c=Su(fr.l,nl.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new yt;yt.NAMES=qm;let f0=0;class zo extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=ks,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=Ku,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==yr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qu&&(r.blendSrc=this.blendSrc),this.blendDst!==Ku&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ap&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const f=[];for(const u in c){const h=c[u];delete h.metadata,f.push(h)}return f}if(n){const c=a(e.textures),f=a(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bl extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new j,il=new ct;class In{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Rp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)il.fromBufferAttribute(this,n),il.applyMatrix3(e),this.setXY(n,il.x,il.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix3(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Co(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Co(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Co(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Co(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Co(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array),c=Nn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rp&&(e.usage=this.usage),e}}class Km extends In{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class $m extends In{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Oi extends In{constructor(e,n,r){super(new Float32Array(e),n,r)}}let d0=0;const $n=new Kt,Fu=new $t,Cs=new j,Hn=new Ws,Do=new Ws,sn=new j;class zi extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gm(e)?$m:Km)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new xt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Oi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];Hn.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const u=n[c];Do.setFromBufferAttribute(u),this.morphTargetsRelative?(sn.addVectors(Hn.min,Do.min),Hn.expandByPoint(sn),sn.addVectors(Hn.max,Do.max),Hn.expandByPoint(sn)):(Hn.expandByPoint(Do.min),Hn.expandByPoint(Do.max))}Hn.getCenter(r);let a=0;for(let c=0,f=e.count;c<f;c++)sn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let c=0,f=n.length;c<f;c++){const u=n[c],h=this.morphTargetsRelative;for(let p=0,m=u.count;p<m;p++)sn.fromBufferAttribute(u,p),h&&(Cs.fromBufferAttribute(e,p),sn.add(Cs)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,a=n.position.array,c=n.normal.array,f=n.uv.array,u=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*u),4));const h=this.getAttribute("tangent").array,p=[],m=[];for(let L=0;L<u;L++)p[L]=new j,m[L]=new j;const v=new j,x=new j,S=new j,T=new ct,E=new ct,y=new ct,_=new j,P=new j;function A(L,te,ce){v.fromArray(a,L*3),x.fromArray(a,te*3),S.fromArray(a,ce*3),T.fromArray(f,L*2),E.fromArray(f,te*2),y.fromArray(f,ce*2),x.sub(v),S.sub(v),E.sub(T),y.sub(T);const pe=1/(E.x*y.y-y.x*E.y);isFinite(pe)&&(_.copy(x).multiplyScalar(y.y).addScaledVector(S,-E.y).multiplyScalar(pe),P.copy(S).multiplyScalar(E.x).addScaledVector(x,-y.x).multiplyScalar(pe),p[L].add(_),p[te].add(_),p[ce].add(_),m[L].add(P),m[te].add(P),m[ce].add(P))}let D=this.groups;D.length===0&&(D=[{start:0,count:r.length}]);for(let L=0,te=D.length;L<te;++L){const ce=D[L],pe=ce.start,B=ce.count;for(let Q=pe,ee=pe+B;Q<ee;Q+=3)A(r[Q+0],r[Q+1],r[Q+2])}const V=new j,O=new j,U=new j,ue=new j;function R(L){U.fromArray(c,L*3),ue.copy(U);const te=p[L];V.copy(te),V.sub(U.multiplyScalar(U.dot(te))).normalize(),O.crossVectors(ue,te);const pe=O.dot(m[L])<0?-1:1;h[L*4]=V.x,h[L*4+1]=V.y,h[L*4+2]=V.z,h[L*4+3]=pe}for(let L=0,te=D.length;L<te;++L){const ce=D[L],pe=ce.start,B=ce.count;for(let Q=pe,ee=pe+B;Q<ee;Q+=3)R(r[Q+0]),R(r[Q+1]),R(r[Q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new In(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new j,c=new j,f=new j,u=new j,h=new j,p=new j,m=new j,v=new j;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),E=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,T),c.fromBufferAttribute(n,E),f.fromBufferAttribute(n,y),m.subVectors(f,c),v.subVectors(a,c),m.cross(v),u.fromBufferAttribute(r,T),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,y),u.add(m),h.add(m),p.add(m),r.setXYZ(T,u.x,u.y,u.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),m.subVectors(f,c),v.subVectors(a,c),m.cross(v),r.setXYZ(x+0,m.x,m.y,m.z),r.setXYZ(x+1,m.x,m.y,m.z),r.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(u,h){const p=u.array,m=u.itemSize,v=u.normalized,x=new p.constructor(h.length*m);let S=0,T=0;for(let E=0,y=h.length;E<y;E++){u.isInterleavedBufferAttribute?S=h[E]*u.data.stride+u.offset:S=h[E]*m;for(let _=0;_<m;_++)x[T++]=p[S++]}return new In(x,m,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zi,r=this.index.array,a=this.attributes;for(const u in a){const h=a[u],p=e(h,r);n.setAttribute(u,p)}const c=this.morphAttributes;for(const u in c){const h=[],p=c[u];for(let m=0,v=p.length;m<v;m++){const x=p[m],S=e(x,r);h.push(S)}n.morphAttributes[u]=h}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let u=0,h=f.length;u<h;u++){const p=f[u];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let c=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let v=0,x=p.length;v<x;v++){const S=p[v];m.push(S.toJSON(e.data))}m.length>0&&(a[h]=m,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(n))}const c=e.morphAttributes;for(const p in c){const m=[],v=c[p];for(let x=0,S=v.length;x<S;x++)m.push(v[x].clone(n));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,m=f.length;p<m;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hp=new Kt,kr=new jm,rl=new uf,Gp=new j,bs=new j,Ps=new j,Ls=new j,Ou=new j,sl=new j,ol=new ct,al=new ct,ll=new ct,Vp=new j,Wp=new j,Xp=new j,cl=new j,ul=new j;class Gt extends $t{constructor(e=new zi,n=new bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=a.length;c<f;c++){const u=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(c&&u){sl.set(0,0,0);for(let h=0,p=c.length;h<p;h++){const m=u[h],v=c[h];m!==0&&(Ou.fromBufferAttribute(v,e),f?sl.addScaledVector(Ou,m):sl.addScaledVector(Ou.sub(n),m))}n.add(sl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),rl.copy(r.boundingSphere),rl.applyMatrix4(c),kr.copy(e.ray).recast(e.near),!(rl.containsPoint(kr.origin)===!1&&(kr.intersectSphere(rl,Gp)===null||kr.origin.distanceToSquared(Gp)>(e.far-e.near)**2))&&(Hp.copy(c).invert(),kr.copy(e.ray).applyMatrix4(Hp),!(r.boundingBox!==null&&kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,r){let a;const c=this.geometry,f=this.material,u=c.index,h=c.attributes.position,p=c.attributes.uv,m=c.attributes.uv1,v=c.attributes.normal,x=c.groups,S=c.drawRange;if(u!==null)if(Array.isArray(f))for(let T=0,E=x.length;T<E;T++){const y=x[T],_=f[y.materialIndex],P=Math.max(y.start,S.start),A=Math.min(u.count,Math.min(y.start+y.count,S.start+S.count));for(let D=P,V=A;D<V;D+=3){const O=u.getX(D),U=u.getX(D+1),ue=u.getX(D+2);a=fl(this,_,e,r,p,m,v,O,U,ue),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),E=Math.min(u.count,S.start+S.count);for(let y=T,_=E;y<_;y+=3){const P=u.getX(y),A=u.getX(y+1),D=u.getX(y+2);a=fl(this,f,e,r,p,m,v,P,A,D),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(f))for(let T=0,E=x.length;T<E;T++){const y=x[T],_=f[y.materialIndex],P=Math.max(y.start,S.start),A=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let D=P,V=A;D<V;D+=3){const O=D,U=D+1,ue=D+2;a=fl(this,_,e,r,p,m,v,O,U,ue),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let y=T,_=E;y<_;y+=3){const P=y,A=y+1,D=y+2;a=fl(this,f,e,r,p,m,v,P,A,D),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function h0(o,e,n,r,a,c,f,u){let h;if(e.side===Tn?h=r.intersectTriangle(f,c,a,!0,u):h=r.intersectTriangle(a,c,f,e.side===yr,u),h===null)return null;ul.copy(u),ul.applyMatrix4(o.matrixWorld);const p=n.ray.origin.distanceTo(ul);return p<n.near||p>n.far?null:{distance:p,point:ul.clone(),object:o}}function fl(o,e,n,r,a,c,f,u,h,p){o.getVertexPosition(u,bs),o.getVertexPosition(h,Ps),o.getVertexPosition(p,Ls);const m=h0(o,e,n,r,bs,Ps,Ls,cl);if(m){a&&(ol.fromBufferAttribute(a,u),al.fromBufferAttribute(a,h),ll.fromBufferAttribute(a,p),m.uv=li.getInterpolation(cl,bs,Ps,Ls,ol,al,ll,new ct)),c&&(ol.fromBufferAttribute(c,u),al.fromBufferAttribute(c,h),ll.fromBufferAttribute(c,p),m.uv1=li.getInterpolation(cl,bs,Ps,Ls,ol,al,ll,new ct),m.uv2=m.uv1),f&&(Vp.fromBufferAttribute(f,u),Wp.fromBufferAttribute(f,h),Xp.fromBufferAttribute(f,p),m.normal=li.getInterpolation(cl,bs,Ps,Ls,Vp,Wp,Xp,new j),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:u,b:h,c:p,normal:new j,materialIndex:0};li.getNormal(bs,Ps,Ls,v.normal),m.face=v}return m}class Xs extends zi{constructor(e=1,n=1,r=1,a=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:f};const u=this;a=Math.floor(a),c=Math.floor(c),f=Math.floor(f);const h=[],p=[],m=[],v=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,f,c,0),T("z","y","x",1,-1,r,n,-e,f,c,1),T("x","z","y",1,1,e,r,n,a,f,2),T("x","z","y",1,-1,e,r,-n,a,f,3),T("x","y","z",1,-1,e,n,r,a,c,4),T("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(h),this.setAttribute("position",new Oi(p,3)),this.setAttribute("normal",new Oi(m,3)),this.setAttribute("uv",new Oi(v,2));function T(E,y,_,P,A,D,V,O,U,ue,R){const L=D/U,te=V/ue,ce=D/2,pe=V/2,B=O/2,Q=U+1,ee=ue+1;let oe=0,H=0;const $=new j;for(let X=0;X<ee;X++){const N=X*te-pe;for(let W=0;W<Q;W++){const Y=W*L-ce;$[E]=Y*P,$[y]=N*A,$[_]=B,p.push($.x,$.y,$.z),$[E]=0,$[y]=0,$[_]=O>0?1:-1,m.push($.x,$.y,$.z),v.push(W/U),v.push(1-X/ue),oe+=1}}for(let X=0;X<ue;X++)for(let N=0;N<U;N++){const W=x+N+Q*X,Y=x+N+Q*(X+1),ae=x+(N+1)+Q*(X+1),he=x+(N+1)+Q*X;h.push(W,Y,he),h.push(Y,ae,he),H+=6}u.addGroup(S,H,R),S+=H,x+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Sn(o){const e={};for(let n=0;n<o.length;n++){const r=Vs(o[n]);for(const a in r)e[a]=r[a]}return e}function p0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Zm(o){return o.getRenderTarget()===null?o.outputColorSpace:Rt.workingColorSpace}const m0={clone:Vs,merge:Sn};var g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yr extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=_0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=p0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Qm extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class En extends Qm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Tl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_l*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tl*2*Math.atan(Math.tan(_l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,a,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_l*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,p=f.fullHeight;c+=f.offsetX*a/h,n-=f.offsetY*r/p,a*=f.width/h,r*=f.height/p}const u=this.filmOffset;u!==0&&(c+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ds=-90,Ns=1;class v0 extends $t{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new En(Ds,Ns,e,n);a.layers=this.layers,this.add(a);const c=new En(Ds,Ns,e,n);c.layers=this.layers,this.add(c);const f=new En(Ds,Ns,e,n);f.layers=this.layers,this.add(f);const u=new En(Ds,Ns,e,n);u.layers=this.layers,this.add(u);const h=new En(Ds,Ns,e,n);h.layers=this.layers,this.add(h);const p=new En(Ds,Ns,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,f,u,h]=n;for(const p of n)this.remove(p);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===El)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,u,h,p,m]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,u),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,a),e.render(n,m),e.setRenderTarget(v,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Jm extends Gn{constructor(e,n,r,a,c,f,u,h,p,m){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,r,a,c,f,u,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x0 extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];n.encoding!==void 0&&(Io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===xr?ln:Qn),this.texture=new Jm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Xs(5,5,5),c=new Yr({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Tn,blending:gr});c.uniforms.tEquirect.value=n;const f=new Gt(a,c),u=n.minFilter;return n.minFilter===Fo&&(n.minFilter=Zn),new v0(1,10,this).update(e,f),n.minFilter=u,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(c)}}const ku=new j,y0=new j,S0=new xt;class hr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=ku.subVectors(r,n).cross(y0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(ku),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||S0.getNormalMatrix(e),a=this.coplanarPoint(ku).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new uf,dl=new j;class ff{constructor(e=new hr,n=new hr,r=new hr,a=new hr,c=new hr,f=new hr){this.planes=[e,n,r,a,c,f]}set(e,n,r,a,c,f){const u=this.planes;return u[0].copy(e),u[1].copy(n),u[2].copy(r),u[3].copy(a),u[4].copy(c),u[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Fi){const r=this.planes,a=e.elements,c=a[0],f=a[1],u=a[2],h=a[3],p=a[4],m=a[5],v=a[6],x=a[7],S=a[8],T=a[9],E=a[10],y=a[11],_=a[12],P=a[13],A=a[14],D=a[15];if(r[0].setComponents(h-c,x-p,y-S,D-_).normalize(),r[1].setComponents(h+c,x+p,y+S,D+_).normalize(),r[2].setComponents(h+f,x+m,y+T,D+P).normalize(),r[3].setComponents(h-f,x-m,y-T,D-P).normalize(),r[4].setComponents(h-u,x-v,y-E,D-A).normalize(),n===Fi)r[5].setComponents(h+u,x+v,y+E,D+A).normalize();else if(n===El)r[5].setComponents(u,v,E,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(dl.x=a.normal.x>0?e.max.x:e.min.x,dl.y=a.normal.y>0?e.max.y:e.min.y,dl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eg(){let o=null,e=!1,n=null,r=null;function a(c,f){n(c,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function M0(o,e){const n=e.isWebGL2,r=new WeakMap;function a(p,m){const v=p.array,x=p.usage,S=v.byteLength,T=o.createBuffer();o.bindBuffer(m,T),o.bufferData(m,v,x),p.onUploadCallback();let E;if(v instanceof Float32Array)E=o.FLOAT;else if(v instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(n)E=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=o.UNSIGNED_SHORT;else if(v instanceof Int16Array)E=o.SHORT;else if(v instanceof Uint32Array)E=o.UNSIGNED_INT;else if(v instanceof Int32Array)E=o.INT;else if(v instanceof Int8Array)E=o.BYTE;else if(v instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:T,type:E,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version,size:S}}function c(p,m,v){const x=m.array,S=m._updateRange,T=m.updateRanges;if(o.bindBuffer(v,p),S.count===-1&&T.length===0&&o.bufferSubData(v,0,x),T.length!==0){for(let E=0,y=T.length;E<y;E++){const _=T[E];n?o.bufferSubData(v,_.start*x.BYTES_PER_ELEMENT,x,_.start,_.count):o.bufferSubData(v,_.start*x.BYTES_PER_ELEMENT,x.subarray(_.start,_.start+_.count))}m.clearUpdateRanges()}S.count!==-1&&(n?o.bufferSubData(v,S.offset*x.BYTES_PER_ELEMENT,x,S.offset,S.count):o.bufferSubData(v,S.offset*x.BYTES_PER_ELEMENT,x.subarray(S.offset,S.offset+S.count)),S.count=-1),m.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function u(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=r.get(p);m&&(o.deleteBuffer(m.buffer),r.delete(p))}function h(p,m){if(p.isGLBufferAttribute){const x=r.get(p);(!x||x.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const v=r.get(p);if(v===void 0)r.set(p,a(p,m));else if(v.version<p.version){if(v.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(v.buffer,p,m),v.version=p.version}}return{get:f,remove:u,update:h}}class df extends zi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,f=n/2,u=Math.floor(r),h=Math.floor(a),p=u+1,m=h+1,v=e/u,x=n/h,S=[],T=[],E=[],y=[];for(let _=0;_<m;_++){const P=_*x-f;for(let A=0;A<p;A++){const D=A*v-c;T.push(D,-P,0),E.push(0,0,1),y.push(A/u),y.push(1-_/h)}}for(let _=0;_<h;_++)for(let P=0;P<u;P++){const A=P+p*_,D=P+p*(_+1),V=P+1+p*(_+1),O=P+1+p*_;S.push(A,D,O),S.push(D,V,O)}this.setIndex(S),this.setAttribute("position",new Oi(T,3)),this.setAttribute("normal",new Oi(E,3)),this.setAttribute("uv",new Oi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new df(e.width,e.height,e.widthSegments,e.heightSegments)}}var E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,j0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",ex=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_x=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Px=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ay=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_y=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ey=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,by=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Py=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ly=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Iy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ky=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:E0,alphahash_pars_fragment:T0,alphamap_fragment:w0,alphamap_pars_fragment:A0,alphatest_fragment:R0,alphatest_pars_fragment:C0,aomap_fragment:b0,aomap_pars_fragment:P0,batching_pars_vertex:L0,batching_vertex:D0,begin_vertex:N0,beginnormal_vertex:U0,bsdfs:I0,iridescence_fragment:F0,bumpmap_pars_fragment:O0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:z0,clipping_planes_pars_vertex:B0,clipping_planes_vertex:H0,color_fragment:G0,color_pars_fragment:V0,color_pars_vertex:W0,color_vertex:X0,common:j0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:q0,displacementmap_pars_vertex:K0,displacementmap_vertex:$0,emissivemap_fragment:Z0,emissivemap_pars_fragment:Q0,colorspace_fragment:J0,colorspace_pars_fragment:ex,envmap_fragment:tx,envmap_common_pars_fragment:nx,envmap_pars_fragment:ix,envmap_pars_vertex:rx,envmap_physical_pars_fragment:gx,envmap_vertex:sx,fog_vertex:ox,fog_pars_vertex:ax,fog_fragment:lx,fog_pars_fragment:cx,gradientmap_pars_fragment:ux,lightmap_fragment:fx,lightmap_pars_fragment:dx,lights_lambert_fragment:hx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:_x,lights_toon_pars_fragment:vx,lights_phong_fragment:xx,lights_phong_pars_fragment:yx,lights_physical_fragment:Sx,lights_physical_pars_fragment:Mx,lights_fragment_begin:Ex,lights_fragment_maps:Tx,lights_fragment_end:wx,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Cx,logdepthbuf_vertex:bx,map_fragment:Px,map_pars_fragment:Lx,map_particle_fragment:Dx,map_particle_pars_fragment:Nx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Ix,morphcolor_vertex:Fx,morphnormal_vertex:Ox,morphtarget_pars_vertex:kx,morphtarget_vertex:zx,normal_fragment_begin:Bx,normal_fragment_maps:Hx,normal_pars_fragment:Gx,normal_pars_vertex:Vx,normal_vertex:Wx,normalmap_pars_fragment:Xx,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Yx,clearcoat_pars_fragment:qx,iridescence_pars_fragment:Kx,opaque_fragment:$x,packing:Zx,premultiplied_alpha_fragment:Qx,project_vertex:Jx,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:sy,shadowmap_vertex:oy,shadowmask_pars_fragment:ay,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:uy,skinnormal_vertex:fy,specularmap_fragment:dy,specularmap_pars_fragment:hy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:_y,uv_pars_fragment:vy,uv_pars_vertex:xy,uv_vertex:yy,worldpos_vertex:Sy,background_vert:My,background_frag:Ey,backgroundCube_vert:Ty,backgroundCube_frag:wy,cube_vert:Ay,cube_frag:Ry,depth_vert:Cy,depth_frag:by,distanceRGBA_vert:Py,distanceRGBA_frag:Ly,equirect_vert:Dy,equirect_frag:Ny,linedashed_vert:Uy,linedashed_frag:Iy,meshbasic_vert:Fy,meshbasic_frag:Oy,meshlambert_vert:ky,meshlambert_frag:zy,meshmatcap_vert:By,meshmatcap_frag:Hy,meshnormal_vert:Gy,meshnormal_frag:Vy,meshphong_vert:Wy,meshphong_frag:Xy,meshphysical_vert:jy,meshphysical_frag:Yy,meshtoon_vert:qy,meshtoon_frag:Ky,points_vert:$y,points_frag:Zy,shadow_vert:Qy,shadow_frag:Jy,sprite_vert:eS,sprite_frag:tS},be={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},gi={basic:{uniforms:Sn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Sn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new yt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Sn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Sn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Sn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new yt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Sn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Sn([be.points,be.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Sn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Sn([be.common,be.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Sn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Sn([be.sprite,be.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Sn([be.common,be.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Sn([be.lights,be.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};gi.physical={uniforms:Sn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const hl={r:0,b:0,g:0};function nS(o,e,n,r,a,c,f){const u=new yt(0);let h=c===!0?0:1,p,m,v=null,x=0,S=null;function T(y,_){let P=!1,A=_.isScene===!0?_.background:null;A&&A.isTexture&&(A=(_.backgroundBlurriness>0?n:e).get(A)),A===null?E(u,h):A&&A.isColor&&(E(A,1),P=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,f):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||P)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),A&&(A.isCubeTexture||A.mapping===Al)?(m===void 0&&(m=new Gt(new Xs(1,1,1),new Yr({name:"BackgroundCubeMaterial",uniforms:Vs(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(V,O,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),m.material.uniforms.envMap.value=A,m.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(A.colorSpace)!==Ut,(v!==A||x!==A.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,v=A,x=A.version,S=o.toneMapping),m.layers.enableAll(),y.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new Gt(new df(2,2),new Yr({name:"BackgroundMaterial",uniforms:Vs(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(A.colorSpace)!==Ut,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||x!==A.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,v=A,x=A.version,S=o.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null))}function E(y,_){y.getRGB(hl,Zm(o)),r.buffers.color.setClear(hl.r,hl.g,hl.b,_,f)}return{getClearColor:function(){return u},setClearColor:function(y,_=1){u.set(y),h=_,E(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,E(u,h)},render:T}}function iS(o,e,n,r){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),c=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||c!==null,u={},h=y(null);let p=h,m=!1;function v(B,Q,ee,oe,H){let $=!1;if(f){const X=E(oe,ee,Q);p!==X&&(p=X,S(p.object)),$=_(B,oe,ee,H),$&&P(B,oe,ee,H)}else{const X=Q.wireframe===!0;(p.geometry!==oe.id||p.program!==ee.id||p.wireframe!==X)&&(p.geometry=oe.id,p.program=ee.id,p.wireframe=X,$=!0)}H!==null&&n.update(H,o.ELEMENT_ARRAY_BUFFER),($||m)&&(m=!1,ue(B,Q,ee,oe),H!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function x(){return r.isWebGL2?o.createVertexArray():c.createVertexArrayOES()}function S(B){return r.isWebGL2?o.bindVertexArray(B):c.bindVertexArrayOES(B)}function T(B){return r.isWebGL2?o.deleteVertexArray(B):c.deleteVertexArrayOES(B)}function E(B,Q,ee){const oe=ee.wireframe===!0;let H=u[B.id];H===void 0&&(H={},u[B.id]=H);let $=H[Q.id];$===void 0&&($={},H[Q.id]=$);let X=$[oe];return X===void 0&&(X=y(x()),$[oe]=X),X}function y(B){const Q=[],ee=[],oe=[];for(let H=0;H<a;H++)Q[H]=0,ee[H]=0,oe[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ee,attributeDivisors:oe,object:B,attributes:{},index:null}}function _(B,Q,ee,oe){const H=p.attributes,$=Q.attributes;let X=0;const N=ee.getAttributes();for(const W in N)if(N[W].location>=0){const ae=H[W];let he=$[W];if(he===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(he=B.instanceColor)),ae===void 0||ae.attribute!==he||he&&ae.data!==he.data)return!0;X++}return p.attributesNum!==X||p.index!==oe}function P(B,Q,ee,oe){const H={},$=Q.attributes;let X=0;const N=ee.getAttributes();for(const W in N)if(N[W].location>=0){let ae=$[W];ae===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(ae=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(ae=B.instanceColor));const he={};he.attribute=ae,ae&&ae.data&&(he.data=ae.data),H[W]=he,X++}p.attributes=H,p.attributesNum=X,p.index=oe}function A(){const B=p.newAttributes;for(let Q=0,ee=B.length;Q<ee;Q++)B[Q]=0}function D(B){V(B,0)}function V(B,Q){const ee=p.newAttributes,oe=p.enabledAttributes,H=p.attributeDivisors;ee[B]=1,oe[B]===0&&(o.enableVertexAttribArray(B),oe[B]=1),H[B]!==Q&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,Q),H[B]=Q)}function O(){const B=p.newAttributes,Q=p.enabledAttributes;for(let ee=0,oe=Q.length;ee<oe;ee++)Q[ee]!==B[ee]&&(o.disableVertexAttribArray(ee),Q[ee]=0)}function U(B,Q,ee,oe,H,$,X){X===!0?o.vertexAttribIPointer(B,Q,ee,H,$):o.vertexAttribPointer(B,Q,ee,oe,H,$)}function ue(B,Q,ee,oe){if(r.isWebGL2===!1&&(B.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;A();const H=oe.attributes,$=ee.getAttributes(),X=Q.defaultAttributeValues;for(const N in $){const W=$[N];if(W.location>=0){let Y=H[N];if(Y===void 0&&(N==="instanceMatrix"&&B.instanceMatrix&&(Y=B.instanceMatrix),N==="instanceColor"&&B.instanceColor&&(Y=B.instanceColor)),Y!==void 0){const ae=Y.normalized,he=Y.itemSize,we=n.get(Y);if(we===void 0)continue;const Re=we.buffer,De=we.type,Ne=we.bytesPerElement,ze=r.isWebGL2===!0&&(De===o.INT||De===o.UNSIGNED_INT||Y.gpuType===Dm);if(Y.isInterleavedBufferAttribute){const ut=Y.data,ne=ut.stride,Lt=Y.offset;if(ut.isInstancedInterleavedBuffer){for(let fe=0;fe<W.locationSize;fe++)V(W.location+fe,ut.meshPerAttribute);B.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let fe=0;fe<W.locationSize;fe++)D(W.location+fe);o.bindBuffer(o.ARRAY_BUFFER,Re);for(let fe=0;fe<W.locationSize;fe++)U(W.location+fe,he/W.locationSize,De,ae,ne*Ne,(Lt+he/W.locationSize*fe)*Ne,ze)}else{if(Y.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)V(W.location+ut,Y.meshPerAttribute);B.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ut=0;ut<W.locationSize;ut++)D(W.location+ut);o.bindBuffer(o.ARRAY_BUFFER,Re);for(let ut=0;ut<W.locationSize;ut++)U(W.location+ut,he/W.locationSize,De,ae,he*Ne,he/W.locationSize*ut*Ne,ze)}}else if(X!==void 0){const ae=X[N];if(ae!==void 0)switch(ae.length){case 2:o.vertexAttrib2fv(W.location,ae);break;case 3:o.vertexAttrib3fv(W.location,ae);break;case 4:o.vertexAttrib4fv(W.location,ae);break;default:o.vertexAttrib1fv(W.location,ae)}}}}O()}function R(){ce();for(const B in u){const Q=u[B];for(const ee in Q){const oe=Q[ee];for(const H in oe)T(oe[H].object),delete oe[H];delete Q[ee]}delete u[B]}}function L(B){if(u[B.id]===void 0)return;const Q=u[B.id];for(const ee in Q){const oe=Q[ee];for(const H in oe)T(oe[H].object),delete oe[H];delete Q[ee]}delete u[B.id]}function te(B){for(const Q in u){const ee=u[Q];if(ee[B.id]===void 0)continue;const oe=ee[B.id];for(const H in oe)T(oe[H].object),delete oe[H];delete ee[B.id]}}function ce(){pe(),m=!0,p!==h&&(p=h,S(p.object))}function pe(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:v,reset:ce,resetDefaultState:pe,dispose:R,releaseStatesOfGeometry:L,releaseStatesOfProgram:te,initAttributes:A,enableAttribute:D,disableUnusedAttributes:O}}function rS(o,e,n,r){const a=r.isWebGL2;let c;function f(m){c=m}function u(m,v){o.drawArrays(c,m,v),n.update(v,c,1)}function h(m,v,x){if(x===0)return;let S,T;if(a)S=o,T="drawArraysInstanced";else if(S=e.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",S===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[T](c,m,v,x),n.update(v,c,x)}function p(m,v,x){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<x;T++)this.render(m[T],v[T]);else{S.multiDrawArraysWEBGL(c,m,0,v,0,x);let T=0;for(let E=0;E<x;E++)T+=v[E];n.update(T,c,1)}}this.setMode=f,this.render=u,this.renderInstances=h,this.renderMultiDraw=p}function sS(o,e,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=f||e.has("WEBGL_draw_buffers"),m=n.logarithmicDepthBuffer===!0,v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),y=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,D=f||e.has("OES_texture_float"),V=A&&D,O=f?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:a,getMaxPrecision:c,precision:u,logarithmicDepthBuffer:m,maxTextures:v,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:T,maxAttributes:E,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:P,vertexTextures:A,floatFragmentTextures:D,floatVertexTextures:V,maxSamples:O}}function oS(o){const e=this;let n=null,r=0,a=!1,c=!1;const f=new hr,u=new xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){c=!0,m(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){n=m(v,x,0)},this.setState=function(v,x,S){const T=v.clippingPlanes,E=v.clipIntersection,y=v.clipShadows,_=o.get(v);if(!a||T===null||T.length===0||c&&!y)c?m(null):p();else{const P=c?0:r,A=P*4;let D=_.clippingState||null;h.value=D,D=m(T,x,A,S);for(let V=0;V!==A;++V)D[V]=n[V];_.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function p(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(v,x,S,T){const E=v!==null?v.length:0;let y=null;if(E!==0){if(y=h.value,T!==!0||y===null){const _=S+E*4,P=x.matrixWorldInverse;u.getNormalMatrix(P),(y===null||y.length<_)&&(y=new Float32Array(_));for(let A=0,D=S;A!==E;++A,D+=4)f.copy(v[A]).applyMatrix4(P,u),f.normal.toArray(y,D),y[D+3]=f.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function aS(o){let e=new WeakMap;function n(f,u){return u===$u?f.mapping=Bs:u===Zu&&(f.mapping=Hs),f}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===$u||u===Zu)if(e.has(f)){const h=e.get(f).texture;return n(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const p=new x0(h.height/2);return p.fromEquirectangularTexture(o,f),e.set(f,p),f.addEventListener("dispose",a),n(p.texture,f.mapping)}else return null}}return f}function a(f){const u=f.target;u.removeEventListener("dispose",a);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class tg extends Qm{constructor(e=-1,n=1,r=1,a=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,f=r+e,u=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,u-=m*this.view.offsetY,h=u-m*this.view.height}this.projectionMatrix.makeOrthographic(c,f,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,jp=[.125,.215,.35,.446,.526,.582],Gr=20,zu=new tg,Yp=new yt;let Bu=null,Hu=0,Gu=0;const Br=(1+Math.sqrt(5))/2,Us=1/Br,qp=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Br,Us),new j(0,Br,-Us),new j(Us,0,Br),new j(-Us,0,Br),new j(Br,Us,0),new j(-Br,Us,0)];class nf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,a,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bu,Hu,Gu),e.scissorTest=!1,pl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Oo,format:ui,colorSpace:ki,depthBuffer:!1},a=Kp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lS(c)),this._blurMaterial=cS(c,e,n)}return a}_compileMaterial(e){const n=new Gt(this._lodPlanes[0],e);this._renderer.compile(n,zu)}_sceneToCubeUV(e,n,r,a){const u=new En(90,1,n,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,v=m.autoClear,x=m.toneMapping;m.getClearColor(Yp),m.toneMapping=_r,m.autoClear=!1;const S=new bl({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),T=new Gt(new Xs,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(Yp),E=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(u.up.set(0,h[_],0),u.lookAt(p[_],0,0)):P===1?(u.up.set(0,0,h[_]),u.lookAt(0,p[_],0)):(u.up.set(0,h[_],0),u.lookAt(0,0,p[_]));const A=this._cubeSize;pl(a,P*A,_>2?A:0,A,A),m.setRenderTarget(a),E&&m.render(T,u),m.render(e,u)}T.geometry.dispose(),T.material.dispose(),m.toneMapping=x,m.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Bs||e.mapping===Hs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());const c=a?this._cubemapMaterial:this._equirectMaterial,f=new Gt(this._lodPlanes[0],c),u=c.uniforms;u.envMap.value=e;const h=this._cubeSize;pl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(f,zu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),f=qp[(a-1)%qp.length];this._blur(e,a-1,a,c,f)}n.autoClear=r}_blur(e,n,r,a,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",c),this._halfBlur(f,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,f,u){const h=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,v=new Gt(this._lodPlanes[a],p),x=p.uniforms,S=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Gr-1),E=c/T,y=isFinite(c)?1+Math.floor(m*E):Gr;y>Gr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Gr}`);const _=[];let P=0;for(let U=0;U<Gr;++U){const ue=U/E,R=Math.exp(-ue*ue/2);_.push(R),U===0?P+=R:U<y&&(P+=2*R)}for(let U=0;U<_.length;U++)_[U]=_[U]/P;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",u&&(x.poleAxis.value=u);const{_lodMax:A}=this;x.dTheta.value=T,x.mipInt.value=A-r;const D=this._sizeLods[a],V=3*D*(a>A-Fs?a-A+Fs:0),O=4*(this._cubeSize-D);pl(n,V,O,3*D,2*D),h.setRenderTarget(n),h.render(v,zu)}}function lS(o){const e=[],n=[],r=[];let a=o;const c=o-Fs+1+jp.length;for(let f=0;f<c;f++){const u=Math.pow(2,a);n.push(u);let h=1/u;f>o-Fs?h=jp[f-o+Fs-1]:f===0&&(h=0),r.push(h);const p=1/(u-2),m=-p,v=1+p,x=[m,m,v,m,v,v,m,m,v,v,m,v],S=6,T=6,E=3,y=2,_=1,P=new Float32Array(E*T*S),A=new Float32Array(y*T*S),D=new Float32Array(_*T*S);for(let O=0;O<S;O++){const U=O%3*2/3-1,ue=O>2?0:-1,R=[U,ue,0,U+2/3,ue,0,U+2/3,ue+1,0,U,ue,0,U+2/3,ue+1,0,U,ue+1,0];P.set(R,E*T*O),A.set(x,y*T*O);const L=[O,O,O,O,O,O];D.set(L,_*T*O)}const V=new zi;V.setAttribute("position",new In(P,E)),V.setAttribute("uv",new In(A,y)),V.setAttribute("faceIndex",new In(D,_)),e.push(V),a>Fs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Kp(o,e,n){const r=new Xr(o,e,n);return r.texture.mapping=Al,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function cS(o,e,n){const r=new Float32Array(Gr),a=new j(0,1,0);return new Yr({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function $p(){return new Yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Zp(){return new Yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function hf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uS(o){let e=new WeakMap,n=null;function r(u){if(u&&u.isTexture){const h=u.mapping,p=h===$u||h===Zu,m=h===Bs||h===Hs;if(p||m)if(u.isRenderTargetTexture&&u.needsPMREMUpdate===!0){u.needsPMREMUpdate=!1;let v=e.get(u);return n===null&&(n=new nf(o)),v=p?n.fromEquirectangular(u,v):n.fromCubemap(u,v),e.set(u,v),v.texture}else{if(e.has(u))return e.get(u).texture;{const v=u.image;if(p&&v&&v.height>0||m&&v&&a(v)){n===null&&(n=new nf(o));const x=p?n.fromEquirectangular(u):n.fromCubemap(u);return e.set(u,x),u.addEventListener("dispose",c),x.texture}else return null}}}return u}function a(u){let h=0;const p=6;for(let m=0;m<p;m++)u[m]!==void 0&&h++;return h===p}function c(u){const h=u.target;h.removeEventListener("dispose",c);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function fS(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const a=n(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function dS(o,e,n,r){const a={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const E=x.morphAttributes[T];for(let y=0,_=E.length;y<_;y++)e.remove(E[y])}x.removeEventListener("dispose",f),delete a[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function u(v,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function h(v){const x=v.attributes;for(const T in x)e.update(x[T],o.ARRAY_BUFFER);const S=v.morphAttributes;for(const T in S){const E=S[T];for(let y=0,_=E.length;y<_;y++)e.update(E[y],o.ARRAY_BUFFER)}}function p(v){const x=[],S=v.index,T=v.attributes.position;let E=0;if(S!==null){const P=S.array;E=S.version;for(let A=0,D=P.length;A<D;A+=3){const V=P[A+0],O=P[A+1],U=P[A+2];x.push(V,O,O,U,U,V)}}else if(T!==void 0){const P=T.array;E=T.version;for(let A=0,D=P.length/3-1;A<D;A+=3){const V=A+0,O=A+1,U=A+2;x.push(V,O,O,U,U,V)}}else return;const y=new(Gm(x)?$m:Km)(x,1);y.version=E;const _=c.get(v);_&&e.remove(_),c.set(v,y)}function m(v){const x=c.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:u,update:h,getWireframeAttribute:m}}function hS(o,e,n,r){const a=r.isWebGL2;let c;function f(S){c=S}let u,h;function p(S){u=S.type,h=S.bytesPerElement}function m(S,T){o.drawElements(c,T,u,S*h),n.update(T,c,1)}function v(S,T,E){if(E===0)return;let y,_;if(a)y=o,_="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[_](c,T,u,S*h,E),n.update(T,c,E)}function x(S,T,E){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<E;_++)this.render(S[_]/h,T[_]);else{y.multiDrawElementsWEBGL(c,T,0,u,S,0,E);let _=0;for(let P=0;P<E;P++)_+=T[P];n.update(_,c,1)}}this.setMode=f,this.setIndex=p,this.render=m,this.renderInstances=v,this.renderMultiDraw=x}function pS(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,u){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=u*(c/3);break;case o.LINES:n.lines+=u*(c/2);break;case o.LINE_STRIP:n.lines+=u*(c-1);break;case o.LINE_LOOP:n.lines+=u*c;break;case o.POINTS:n.points+=u*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function mS(o,e){return o[0]-e[0]}function gS(o,e){return Math.abs(e[1])-Math.abs(o[1])}function _S(o,e,n){const r={},a=new Float32Array(8),c=new WeakMap,f=new zt,u=[];for(let p=0;p<8;p++)u[p]=[p,0];function h(p,m,v){const x=p.morphTargetInfluences;if(e.isWebGL2===!0){const T=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,E=T!==void 0?T.length:0;let y=c.get(m);if(y===void 0||y.count!==E){let Q=function(){pe.dispose(),c.delete(m),m.removeEventListener("dispose",Q)};var S=Q;y!==void 0&&y.texture.dispose();const A=m.morphAttributes.position!==void 0,D=m.morphAttributes.normal!==void 0,V=m.morphAttributes.color!==void 0,O=m.morphAttributes.position||[],U=m.morphAttributes.normal||[],ue=m.morphAttributes.color||[];let R=0;A===!0&&(R=1),D===!0&&(R=2),V===!0&&(R=3);let L=m.attributes.position.count*R,te=1;L>e.maxTextureSize&&(te=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const ce=new Float32Array(L*te*4*E),pe=new Xm(ce,L,te,E);pe.type=mr,pe.needsUpdate=!0;const B=R*4;for(let ee=0;ee<E;ee++){const oe=O[ee],H=U[ee],$=ue[ee],X=L*te*4*ee;for(let N=0;N<oe.count;N++){const W=N*B;A===!0&&(f.fromBufferAttribute(oe,N),ce[X+W+0]=f.x,ce[X+W+1]=f.y,ce[X+W+2]=f.z,ce[X+W+3]=0),D===!0&&(f.fromBufferAttribute(H,N),ce[X+W+4]=f.x,ce[X+W+5]=f.y,ce[X+W+6]=f.z,ce[X+W+7]=0),V===!0&&(f.fromBufferAttribute($,N),ce[X+W+8]=f.x,ce[X+W+9]=f.y,ce[X+W+10]=f.z,ce[X+W+11]=$.itemSize===4?f.w:1)}}y={count:E,texture:pe,size:new ct(L,te)},c.set(m,y),m.addEventListener("dispose",Q)}let _=0;for(let A=0;A<x.length;A++)_+=x[A];const P=m.morphTargetsRelative?1:1-_;v.getUniforms().setValue(o,"morphTargetBaseInfluence",P),v.getUniforms().setValue(o,"morphTargetInfluences",x),v.getUniforms().setValue(o,"morphTargetsTexture",y.texture,n),v.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}else{const T=x===void 0?0:x.length;let E=r[m.id];if(E===void 0||E.length!==T){E=[];for(let D=0;D<T;D++)E[D]=[D,0];r[m.id]=E}for(let D=0;D<T;D++){const V=E[D];V[0]=D,V[1]=x[D]}E.sort(gS);for(let D=0;D<8;D++)D<T&&E[D][1]?(u[D][0]=E[D][0],u[D][1]=E[D][1]):(u[D][0]=Number.MAX_SAFE_INTEGER,u[D][1]=0);u.sort(mS);const y=m.morphAttributes.position,_=m.morphAttributes.normal;let P=0;for(let D=0;D<8;D++){const V=u[D],O=V[0],U=V[1];O!==Number.MAX_SAFE_INTEGER&&U?(y&&m.getAttribute("morphTarget"+D)!==y[O]&&m.setAttribute("morphTarget"+D,y[O]),_&&m.getAttribute("morphNormal"+D)!==_[O]&&m.setAttribute("morphNormal"+D,_[O]),a[D]=U,P+=U):(y&&m.hasAttribute("morphTarget"+D)===!0&&m.deleteAttribute("morphTarget"+D),_&&m.hasAttribute("morphNormal"+D)===!0&&m.deleteAttribute("morphNormal"+D),a[D]=0)}const A=m.morphTargetsRelative?1:1-P;v.getUniforms().setValue(o,"morphTargetBaseInfluence",A),v.getUniforms().setValue(o,"morphTargetInfluences",a)}}return{update:h}}function vS(o,e,n,r){let a=new WeakMap;function c(h){const p=r.render.frame,m=h.geometry,v=e.get(h,m);if(a.get(v)!==p&&(e.update(v),a.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),a.get(h)!==p&&(n.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,o.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return v}function f(){a=new WeakMap}function u(h){const p=h.target;p.removeEventListener("dispose",u),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}class ng extends Gn{constructor(e,n,r,a,c,f,u,h,p,m){if(m=m!==void 0?m:Wr,m!==Wr&&m!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Wr&&(r=pr),r===void 0&&m===Gs&&(r=Vr),super(null,a,c,f,u,h,m,r,p),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=u!==void 0?u:Mn,this.minFilter=h!==void 0?h:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ig=new Gn,rg=new ng(1,1);rg.compareFunction=Hm;const sg=new Xm,og=new n0,ag=new Jm,Qp=[],Jp=[],em=new Float32Array(16),tm=new Float32Array(9),nm=new Float32Array(4);function js(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let c=Qp[a];if(c===void 0&&(c=new Float32Array(a),Qp[a]=c),e!==0){r.toArray(c,0);for(let f=1,u=0;f!==e;++f)u+=n,o[f].toArray(c,u)}return c}function Jt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function en(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Pl(o,e){let n=Jp[e];n===void 0&&(n=new Int32Array(e),Jp[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function xS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function yS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2fv(this.addr,e),en(n,e)}}function SS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;o.uniform3fv(this.addr,e),en(n,e)}}function MS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4fv(this.addr,e),en(n,e)}}function ES(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;nm.set(r),o.uniformMatrix2fv(this.addr,!1,nm),en(n,r)}}function TS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;tm.set(r),o.uniformMatrix3fv(this.addr,!1,tm),en(n,r)}}function wS(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;em.set(r),o.uniformMatrix4fv(this.addr,!1,em),en(n,r)}}function AS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function RS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2iv(this.addr,e),en(n,e)}}function CS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;o.uniform3iv(this.addr,e),en(n,e)}}function bS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4iv(this.addr,e),en(n,e)}}function PS(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function LS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;o.uniform2uiv(this.addr,e),en(n,e)}}function DS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;o.uniform3uiv(this.addr,e),en(n,e)}}function NS(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;o.uniform4uiv(this.addr,e),en(n,e)}}function US(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);const c=this.type===o.SAMPLER_2D_SHADOW?rg:ig;n.setTexture2D(e||c,a)}function IS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||og,a)}function FS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||ag,a)}function OS(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||sg,a)}function kS(o){switch(o){case 5126:return xS;case 35664:return yS;case 35665:return SS;case 35666:return MS;case 35674:return ES;case 35675:return TS;case 35676:return wS;case 5124:case 35670:return AS;case 35667:case 35671:return RS;case 35668:case 35672:return CS;case 35669:case 35673:return bS;case 5125:return PS;case 36294:return LS;case 36295:return DS;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return OS}}function zS(o,e){o.uniform1fv(this.addr,e)}function BS(o,e){const n=js(e,this.size,2);o.uniform2fv(this.addr,n)}function HS(o,e){const n=js(e,this.size,3);o.uniform3fv(this.addr,n)}function GS(o,e){const n=js(e,this.size,4);o.uniform4fv(this.addr,n)}function VS(o,e){const n=js(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function WS(o,e){const n=js(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function XS(o,e){const n=js(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function jS(o,e){o.uniform1iv(this.addr,e)}function YS(o,e){o.uniform2iv(this.addr,e)}function qS(o,e){o.uniform3iv(this.addr,e)}function KS(o,e){o.uniform4iv(this.addr,e)}function $S(o,e){o.uniform1uiv(this.addr,e)}function ZS(o,e){o.uniform2uiv(this.addr,e)}function QS(o,e){o.uniform3uiv(this.addr,e)}function JS(o,e){o.uniform4uiv(this.addr,e)}function eM(o,e,n){const r=this.cache,a=e.length,c=Pl(n,a);Jt(r,c)||(o.uniform1iv(this.addr,c),en(r,c));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||ig,c[f])}function tM(o,e,n){const r=this.cache,a=e.length,c=Pl(n,a);Jt(r,c)||(o.uniform1iv(this.addr,c),en(r,c));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||og,c[f])}function nM(o,e,n){const r=this.cache,a=e.length,c=Pl(n,a);Jt(r,c)||(o.uniform1iv(this.addr,c),en(r,c));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||ag,c[f])}function iM(o,e,n){const r=this.cache,a=e.length,c=Pl(n,a);Jt(r,c)||(o.uniform1iv(this.addr,c),en(r,c));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||sg,c[f])}function rM(o){switch(o){case 5126:return zS;case 35664:return BS;case 35665:return HS;case 35666:return GS;case 35674:return VS;case 35675:return WS;case 35676:return XS;case 5124:case 35670:return jS;case 35667:case 35671:return YS;case 35668:case 35672:return qS;case 35669:case 35673:return KS;case 5125:return $S;case 36294:return ZS;case 36295:return QS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}class sM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=kS(n.type)}}class oM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rM(n.type)}}class aM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,f=a.length;c!==f;++c){const u=a[c];u.setValue(e,n[u.id],r)}}}const Vu=/(\w+)(\])?(\[|\.)?/g;function im(o,e){o.seq.push(e),o.map[e.id]=e}function lM(o,e,n){const r=o.name,a=r.length;for(Vu.lastIndex=0;;){const c=Vu.exec(r),f=Vu.lastIndex;let u=c[1];const h=c[2]==="]",p=c[3];if(h&&(u=u|0),p===void 0||p==="["&&f+2===a){im(n,p===void 0?new sM(u,o,e):new oM(u,o,e));break}else{let v=n.map[u];v===void 0&&(v=new aM(u),im(n,v)),n=v}}}class vl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),f=e.getUniformLocation(n,c.name);lM(c,f,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,f=n.length;c!==f;++c){const u=n[c],h=r[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function rm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const cM=37297;let uM=0;function fM(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=a;f<c;f++){const u=f+1;r.push(`${u===e?">":" "} ${u}: ${n[f]}`)}return r.join(`
`)}function dM(o){const e=Rt.getPrimaries(Rt.workingColorSpace),n=Rt.getPrimaries(o);let r;switch(e===n?r="":e===Ml&&n===Sl?r="LinearDisplayP3ToLinearSRGB":e===Sl&&n===Ml&&(r="LinearSRGBToLinearDisplayP3"),o){case ki:case Rl:return[r,"LinearTransferOETF"];case ln:case cf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function sm(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+fM(o.getShaderSource(e),f)}else return a}function hM(o,e){const n=dM(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function pM(o,e){let n;switch(e){case wv:n="Linear";break;case Av:n="Reinhard";break;case Rv:n="OptimizedCineon";break;case Pm:n="ACESFilmic";break;case bv:n="AgX";break;case Cv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function mM(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function gM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Os).join(`
`)}function _M(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function vM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=o.getActiveAttrib(e,a),f=c.name;let u=1;c.type===o.FLOAT_MAT2&&(u=2),c.type===o.FLOAT_MAT3&&(u=3),c.type===o.FLOAT_MAT4&&(u=4),n[f]={type:c.type,location:o.getAttribLocation(e,f),locationSize:u}}return n}function Os(o){return o!==""}function om(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function am(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xM=/^[ \t]*#include +<([\w\d./]+)>/gm;function rf(o){return o.replace(xM,SM)}const yM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function SM(o,e){let n=pt[e];if(n===void 0){const r=yM.get(e);if(r!==void 0)n=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rf(n)}const MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lm(o){return o.replace(MM,EM)}function EM(o,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function cm(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Rm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Cm?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function wM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Bs:case Hs:e="ENVMAP_TYPE_CUBE";break;case Al:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function RM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case bm:e="ENVMAP_BLENDING_MULTIPLY";break;case Ev:e="ENVMAP_BLENDING_MIX";break;case Tv:e="ENVMAP_BLENDING_ADD";break}return e}function CM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function bM(o,e,n,r){const a=o.getContext(),c=n.defines;let f=n.vertexShader,u=n.fragmentShader;const h=TM(n),p=wM(n),m=AM(n),v=RM(n),x=CM(n),S=n.isWebGL2?"":mM(n),T=gM(n),E=_M(c),y=a.createProgram();let _,P,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Os).join(`
`),_.length>0&&(_+=`
`),P=[S,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Os).join(`
`),P.length>0&&(P+=`
`)):(_=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),P=[S,cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?pt.tonemapping_pars_fragment:"",n.toneMapping!==_r?pM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,hM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Os).join(`
`)),f=rf(f),f=om(f,n),f=am(f,n),u=rf(u),u=om(u,n),u=am(u,n),f=lm(f),u=lm(u),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[T,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,P=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+P);const D=A+_+f,V=A+P+u,O=rm(a,a.VERTEX_SHADER,D),U=rm(a,a.FRAGMENT_SHADER,V);a.attachShader(y,O),a.attachShader(y,U),n.index0AttributeName!==void 0?a.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function ue(ce){if(o.debug.checkShaderErrors){const pe=a.getProgramInfoLog(y).trim(),B=a.getShaderInfoLog(O).trim(),Q=a.getShaderInfoLog(U).trim();let ee=!0,oe=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(ee=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,y,O,U);else{const H=sm(a,O,"vertex"),$=sm(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Program Info Log: `+pe+`
`+H+`
`+$)}else pe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pe):(B===""||Q==="")&&(oe=!1);oe&&(ce.diagnostics={runnable:ee,programLog:pe,vertexShader:{log:B,prefix:_},fragmentShader:{log:Q,prefix:P}})}a.deleteShader(O),a.deleteShader(U),R=new vl(a,y),L=vM(a,y)}let R;this.getUniforms=function(){return R===void 0&&ue(this),R};let L;this.getAttributes=function(){return L===void 0&&ue(this),L};let te=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return te===!1&&(te=a.getProgramParameter(y,cM)),te},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uM++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=O,this.fragmentShader=U,this}let PM=0;class LM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new DM(e),n.set(e,r)),r}}class DM{constructor(e){this.id=PM++,this.code=e,this.usedTimes=0}}function NM(o,e,n,r,a,c,f){const u=new Ym,h=new LM,p=[],m=a.isWebGL2,v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(R){return R===0?"uv":`uv${R}`}function y(R,L,te,ce,pe){const B=ce.fog,Q=pe.geometry,ee=R.isMeshStandardMaterial?ce.environment:null,oe=(R.isMeshStandardMaterial?n:e).get(R.envMap||ee),H=oe&&oe.mapping===Al?oe.image.height:null,$=T[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const X=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,N=X!==void 0?X.length:0;let W=0;Q.morphAttributes.position!==void 0&&(W=1),Q.morphAttributes.normal!==void 0&&(W=2),Q.morphAttributes.color!==void 0&&(W=3);let Y,ae,he,we;if($){const It=gi[$];Y=It.vertexShader,ae=It.fragmentShader}else Y=R.vertexShader,ae=R.fragmentShader,h.update(R),he=h.getVertexShaderID(R),we=h.getFragmentShaderID(R);const Re=o.getRenderTarget(),De=pe.isInstancedMesh===!0,Ne=pe.isBatchedMesh===!0,ze=!!R.map,ut=!!R.matcap,ne=!!oe,Lt=!!R.aoMap,fe=!!R.lightMap,Ge=!!R.bumpMap,Ce=!!R.normalMap,St=!!R.displacementMap,nt=!!R.emissiveMap,b=!!R.metalnessMap,w=!!R.roughnessMap,Z=R.anisotropy>0,xe=R.clearcoat>0,ye=R.iridescence>0,Me=R.sheen>0,Xe=R.transmission>0,Le=Z&&!!R.anisotropyMap,ke=xe&&!!R.clearcoatMap,$e=xe&&!!R.clearcoatNormalMap,at=xe&&!!R.clearcoatRoughnessMap,ge=ye&&!!R.iridescenceMap,Mt=ye&&!!R.iridescenceThicknessMap,ft=Me&&!!R.sheenColorMap,it=Me&&!!R.sheenRoughnessMap,qe=!!R.specularMap,Ue=!!R.specularColorMap,F=!!R.specularIntensityMap,Te=Xe&&!!R.transmissionMap,je=Xe&&!!R.thicknessMap,Oe=!!R.gradientMap,ve=!!R.alphaMap,k=R.alphaTest>0,Ee=!!R.alphaHash,Pe=!!R.extensions,et=!!Q.attributes.uv1,Ze=!!Q.attributes.uv2,mt=!!Q.attributes.uv3;let gt=_r;return R.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(gt=o.toneMapping),{isWebGL2:m,shaderID:$,shaderType:R.type,shaderName:R.name,vertexShader:Y,fragmentShader:ae,defines:R.defines,customVertexShaderID:he,customFragmentShaderID:we,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Ne,instancing:De,instancingColor:De&&pe.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:Re===null?o.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:ki,map:ze,matcap:ut,envMap:ne,envMapMode:ne&&oe.mapping,envMapCubeUVHeight:H,aoMap:Lt,lightMap:fe,bumpMap:Ge,normalMap:Ce,displacementMap:x&&St,emissiveMap:nt,normalMapObjectSpace:Ce&&R.normalMapType===Hv,normalMapTangentSpace:Ce&&R.normalMapType===Bm,metalnessMap:b,roughnessMap:w,anisotropy:Z,anisotropyMap:Le,clearcoat:xe,clearcoatMap:ke,clearcoatNormalMap:$e,clearcoatRoughnessMap:at,iridescence:ye,iridescenceMap:ge,iridescenceThicknessMap:Mt,sheen:Me,sheenColorMap:ft,sheenRoughnessMap:it,specularMap:qe,specularColorMap:Ue,specularIntensityMap:F,transmission:Xe,transmissionMap:Te,thicknessMap:je,gradientMap:Oe,opaque:R.transparent===!1&&R.blending===ks,alphaMap:ve,alphaTest:k,alphaHash:Ee,combine:R.combine,mapUv:ze&&E(R.map.channel),aoMapUv:Lt&&E(R.aoMap.channel),lightMapUv:fe&&E(R.lightMap.channel),bumpMapUv:Ge&&E(R.bumpMap.channel),normalMapUv:Ce&&E(R.normalMap.channel),displacementMapUv:St&&E(R.displacementMap.channel),emissiveMapUv:nt&&E(R.emissiveMap.channel),metalnessMapUv:b&&E(R.metalnessMap.channel),roughnessMapUv:w&&E(R.roughnessMap.channel),anisotropyMapUv:Le&&E(R.anisotropyMap.channel),clearcoatMapUv:ke&&E(R.clearcoatMap.channel),clearcoatNormalMapUv:$e&&E(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&E(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&E(R.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&E(R.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&E(R.sheenColorMap.channel),sheenRoughnessMapUv:it&&E(R.sheenRoughnessMap.channel),specularMapUv:qe&&E(R.specularMap.channel),specularColorMapUv:Ue&&E(R.specularColorMap.channel),specularIntensityMapUv:F&&E(R.specularIntensityMap.channel),transmissionMapUv:Te&&E(R.transmissionMap.channel),thicknessMapUv:je&&E(R.thicknessMap.channel),alphaMapUv:ve&&E(R.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ce||Z),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:et,vertexUv2s:Ze,vertexUv3s:mt,pointsUvs:pe.isPoints===!0&&!!Q.attributes.uv&&(ze||ve),fog:!!B,useFog:R.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:pe.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:W,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&te.length>0,shadowMapType:o.shadowMap.type,toneMapping:gt,useLegacyLights:o._useLegacyLights,decodeVideoTexture:ze&&R.map.isVideoTexture===!0&&Rt.getTransfer(R.map.colorSpace)===Ut,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ii,flipSided:R.side===Tn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Pe&&R.extensions.derivatives===!0,extensionFragDepth:Pe&&R.extensions.fragDepth===!0,extensionDrawBuffers:Pe&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pe&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pe&&R.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:m||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function _(R){const L=[];if(R.shaderID?L.push(R.shaderID):(L.push(R.customVertexShaderID),L.push(R.customFragmentShaderID)),R.defines!==void 0)for(const te in R.defines)L.push(te),L.push(R.defines[te]);return R.isRawShaderMaterial===!1&&(P(L,R),A(L,R),L.push(o.outputColorSpace)),L.push(R.customProgramCacheKey),L.join()}function P(R,L){R.push(L.precision),R.push(L.outputColorSpace),R.push(L.envMapMode),R.push(L.envMapCubeUVHeight),R.push(L.mapUv),R.push(L.alphaMapUv),R.push(L.lightMapUv),R.push(L.aoMapUv),R.push(L.bumpMapUv),R.push(L.normalMapUv),R.push(L.displacementMapUv),R.push(L.emissiveMapUv),R.push(L.metalnessMapUv),R.push(L.roughnessMapUv),R.push(L.anisotropyMapUv),R.push(L.clearcoatMapUv),R.push(L.clearcoatNormalMapUv),R.push(L.clearcoatRoughnessMapUv),R.push(L.iridescenceMapUv),R.push(L.iridescenceThicknessMapUv),R.push(L.sheenColorMapUv),R.push(L.sheenRoughnessMapUv),R.push(L.specularMapUv),R.push(L.specularColorMapUv),R.push(L.specularIntensityMapUv),R.push(L.transmissionMapUv),R.push(L.thicknessMapUv),R.push(L.combine),R.push(L.fogExp2),R.push(L.sizeAttenuation),R.push(L.morphTargetsCount),R.push(L.morphAttributeCount),R.push(L.numDirLights),R.push(L.numPointLights),R.push(L.numSpotLights),R.push(L.numSpotLightMaps),R.push(L.numHemiLights),R.push(L.numRectAreaLights),R.push(L.numDirLightShadows),R.push(L.numPointLightShadows),R.push(L.numSpotLightShadows),R.push(L.numSpotLightShadowsWithMaps),R.push(L.numLightProbes),R.push(L.shadowMapType),R.push(L.toneMapping),R.push(L.numClippingPlanes),R.push(L.numClipIntersection),R.push(L.depthPacking)}function A(R,L){u.disableAll(),L.isWebGL2&&u.enable(0),L.supportsVertexTextures&&u.enable(1),L.instancing&&u.enable(2),L.instancingColor&&u.enable(3),L.matcap&&u.enable(4),L.envMap&&u.enable(5),L.normalMapObjectSpace&&u.enable(6),L.normalMapTangentSpace&&u.enable(7),L.clearcoat&&u.enable(8),L.iridescence&&u.enable(9),L.alphaTest&&u.enable(10),L.vertexColors&&u.enable(11),L.vertexAlphas&&u.enable(12),L.vertexUv1s&&u.enable(13),L.vertexUv2s&&u.enable(14),L.vertexUv3s&&u.enable(15),L.vertexTangents&&u.enable(16),L.anisotropy&&u.enable(17),L.alphaHash&&u.enable(18),L.batching&&u.enable(19),R.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.skinning&&u.enable(4),L.morphTargets&&u.enable(5),L.morphNormals&&u.enable(6),L.morphColors&&u.enable(7),L.premultipliedAlpha&&u.enable(8),L.shadowMapEnabled&&u.enable(9),L.useLegacyLights&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),R.push(u.mask)}function D(R){const L=T[R.type];let te;if(L){const ce=gi[L];te=m0.clone(ce.uniforms)}else te=R.uniforms;return te}function V(R,L){let te;for(let ce=0,pe=p.length;ce<pe;ce++){const B=p[ce];if(B.cacheKey===L){te=B,++te.usedTimes;break}}return te===void 0&&(te=new bM(o,L,R,c),p.push(te)),te}function O(R){if(--R.usedTimes===0){const L=p.indexOf(R);p[L]=p[p.length-1],p.pop(),R.destroy()}}function U(R){h.remove(R)}function ue(){h.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:V,releaseProgram:O,releaseShaderCache:U,programs:p,dispose:ue}}function UM(){let o=new WeakMap;function e(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function n(c){o.delete(c)}function r(c,f,u){o.get(c)[f]=u}function a(){o=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function IM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function um(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function fm(){const o=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function f(v,x,S,T,E,y){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:S,groupOrder:T,renderOrder:v.renderOrder,z:E,group:y},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=S,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=E,_.group=y),e++,_}function u(v,x,S,T,E,y){const _=f(v,x,S,T,E,y);S.transmission>0?r.push(_):S.transparent===!0?a.push(_):n.push(_)}function h(v,x,S,T,E,y){const _=f(v,x,S,T,E,y);S.transmission>0?r.unshift(_):S.transparent===!0?a.unshift(_):n.unshift(_)}function p(v,x){n.length>1&&n.sort(v||IM),r.length>1&&r.sort(x||um),a.length>1&&a.sort(x||um)}function m(){for(let v=e,x=o.length;v<x;v++){const S=o[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:u,unshift:h,finish:m,sort:p}}function FM(){let o=new WeakMap;function e(r,a){const c=o.get(r);let f;return c===void 0?(f=new fm,o.set(r,[f])):a>=c.length?(f=new fm,c.push(f)):f=c[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function OM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new yt};break;case"SpotLight":n={position:new j,direction:new j,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=n,n}}}function kM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let zM=0;function BM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function HM(o,e){const n=new OM,r=kM(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new j);const c=new j,f=new Kt,u=new Kt;function h(m,v){let x=0,S=0,T=0;for(let ce=0;ce<9;ce++)a.probe[ce].set(0,0,0);let E=0,y=0,_=0,P=0,A=0,D=0,V=0,O=0,U=0,ue=0,R=0;m.sort(BM);const L=v===!0?Math.PI:1;for(let ce=0,pe=m.length;ce<pe;ce++){const B=m[ce],Q=B.color,ee=B.intensity,oe=B.distance,H=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)x+=Q.r*ee*L,S+=Q.g*ee*L,T+=Q.b*ee*L;else if(B.isLightProbe){for(let $=0;$<9;$++)a.probe[$].addScaledVector(B.sh.coefficients[$],ee);R++}else if(B.isDirectionalLight){const $=n.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity*L),B.castShadow){const X=B.shadow,N=r.get(B);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,a.directionalShadow[E]=N,a.directionalShadowMap[E]=H,a.directionalShadowMatrix[E]=B.shadow.matrix,D++}a.directional[E]=$,E++}else if(B.isSpotLight){const $=n.get(B);$.position.setFromMatrixPosition(B.matrixWorld),$.color.copy(Q).multiplyScalar(ee*L),$.distance=oe,$.coneCos=Math.cos(B.angle),$.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),$.decay=B.decay,a.spot[_]=$;const X=B.shadow;if(B.map&&(a.spotLightMap[U]=B.map,U++,X.updateMatrices(B),B.castShadow&&ue++),a.spotLightMatrix[_]=X.matrix,B.castShadow){const N=r.get(B);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,a.spotShadow[_]=N,a.spotShadowMap[_]=H,O++}_++}else if(B.isRectAreaLight){const $=n.get(B);$.color.copy(Q).multiplyScalar(ee),$.halfWidth.set(B.width*.5,0,0),$.halfHeight.set(0,B.height*.5,0),a.rectArea[P]=$,P++}else if(B.isPointLight){const $=n.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity*L),$.distance=B.distance,$.decay=B.decay,B.castShadow){const X=B.shadow,N=r.get(B);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,N.shadowCameraNear=X.camera.near,N.shadowCameraFar=X.camera.far,a.pointShadow[y]=N,a.pointShadowMap[y]=H,a.pointShadowMatrix[y]=B.shadow.matrix,V++}a.point[y]=$,y++}else if(B.isHemisphereLight){const $=n.get(B);$.skyColor.copy(B.color).multiplyScalar(ee*L),$.groundColor.copy(B.groundColor).multiplyScalar(ee*L),a.hemi[A]=$,A++}}P>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=be.LTC_FLOAT_1,a.rectAreaLTC2=be.LTC_FLOAT_2):(a.rectAreaLTC1=be.LTC_HALF_1,a.rectAreaLTC2=be.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=be.LTC_FLOAT_1,a.rectAreaLTC2=be.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=be.LTC_HALF_1,a.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=x,a.ambient[1]=S,a.ambient[2]=T;const te=a.hash;(te.directionalLength!==E||te.pointLength!==y||te.spotLength!==_||te.rectAreaLength!==P||te.hemiLength!==A||te.numDirectionalShadows!==D||te.numPointShadows!==V||te.numSpotShadows!==O||te.numSpotMaps!==U||te.numLightProbes!==R)&&(a.directional.length=E,a.spot.length=_,a.rectArea.length=P,a.point.length=y,a.hemi.length=A,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=V,a.pointShadowMap.length=V,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=V,a.spotLightMatrix.length=O+U-ue,a.spotLightMap.length=U,a.numSpotLightShadowsWithMaps=ue,a.numLightProbes=R,te.directionalLength=E,te.pointLength=y,te.spotLength=_,te.rectAreaLength=P,te.hemiLength=A,te.numDirectionalShadows=D,te.numPointShadows=V,te.numSpotShadows=O,te.numSpotMaps=U,te.numLightProbes=R,a.version=zM++)}function p(m,v){let x=0,S=0,T=0,E=0,y=0;const _=v.matrixWorldInverse;for(let P=0,A=m.length;P<A;P++){const D=m[P];if(D.isDirectionalLight){const V=a.directional[x];V.direction.setFromMatrixPosition(D.matrixWorld),c.setFromMatrixPosition(D.target.matrixWorld),V.direction.sub(c),V.direction.transformDirection(_),x++}else if(D.isSpotLight){const V=a.spot[T];V.position.setFromMatrixPosition(D.matrixWorld),V.position.applyMatrix4(_),V.direction.setFromMatrixPosition(D.matrixWorld),c.setFromMatrixPosition(D.target.matrixWorld),V.direction.sub(c),V.direction.transformDirection(_),T++}else if(D.isRectAreaLight){const V=a.rectArea[E];V.position.setFromMatrixPosition(D.matrixWorld),V.position.applyMatrix4(_),u.identity(),f.copy(D.matrixWorld),f.premultiply(_),u.extractRotation(f),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),V.halfWidth.applyMatrix4(u),V.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const V=a.point[S];V.position.setFromMatrixPosition(D.matrixWorld),V.position.applyMatrix4(_),S++}else if(D.isHemisphereLight){const V=a.hemi[y];V.direction.setFromMatrixPosition(D.matrixWorld),V.direction.transformDirection(_),y++}}}return{setup:h,setupView:p,state:a}}function dm(o,e){const n=new HM(o,e),r=[],a=[];function c(){r.length=0,a.length=0}function f(v){r.push(v)}function u(v){a.push(v)}function h(v){n.setup(r,v)}function p(v){n.setupView(r,v)}return{init:c,state:{lightsArray:r,shadowsArray:a,lights:n},setupLights:h,setupLightsView:p,pushLight:f,pushShadow:u}}function GM(o,e){let n=new WeakMap;function r(c,f=0){const u=n.get(c);let h;return u===void 0?(h=new dm(o,e),n.set(c,[h])):f>=u.length?(h=new dm(o,e),u.push(h)):h=u[f],h}function a(){n=new WeakMap}return{get:r,dispose:a}}class VM extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WM extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const XM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YM(o,e,n){let r=new ff;const a=new ct,c=new ct,f=new zt,u=new VM({depthPacking:Bv}),h=new WM,p={},m=n.maxTextureSize,v={[yr]:Tn,[Tn]:yr,[Ii]:Ii},x=new Yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:XM,fragmentShader:jM}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new zi;T.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Gt(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rm;let _=this.type;this.render=function(O,U,ue){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const R=o.getRenderTarget(),L=o.getActiveCubeFace(),te=o.getActiveMipmapLevel(),ce=o.state;ce.setBlending(gr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const pe=_!==Ui&&this.type===Ui,B=_===Ui&&this.type!==Ui;for(let Q=0,ee=O.length;Q<ee;Q++){const oe=O[Q],H=oe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const $=H.getFrameExtents();if(a.multiply($),c.copy(H.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(c.x=Math.floor(m/$.x),a.x=c.x*$.x,H.mapSize.x=c.x),a.y>m&&(c.y=Math.floor(m/$.y),a.y=c.y*$.y,H.mapSize.y=c.y)),H.map===null||pe===!0||B===!0){const N=this.type!==Ui?{minFilter:Mn,magFilter:Mn}:{};H.map!==null&&H.map.dispose(),H.map=new Xr(a.x,a.y,N),H.map.texture.name=oe.name+".shadowMap",H.camera.updateProjectionMatrix()}o.setRenderTarget(H.map),o.clear();const X=H.getViewportCount();for(let N=0;N<X;N++){const W=H.getViewport(N);f.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),ce.viewport(f),H.updateMatrices(oe,N),r=H.getFrustum(),D(U,ue,H.camera,oe,this.type)}H.isPointLightShadow!==!0&&this.type===Ui&&P(H,ue),H.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(R,L,te)};function P(O,U){const ue=e.update(E);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Xr(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(U,null,ue,x,E,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(U,null,ue,S,E,null)}function A(O,U,ue,R){let L=null;const te=ue.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(te!==void 0)L=te;else if(L=ue.isPointLight===!0?h:u,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ce=L.uuid,pe=U.uuid;let B=p[ce];B===void 0&&(B={},p[ce]=B);let Q=B[pe];Q===void 0&&(Q=L.clone(),B[pe]=Q,U.addEventListener("dispose",V)),L=Q}if(L.visible=U.visible,L.wireframe=U.wireframe,R===Ui?L.side=U.shadowSide!==null?U.shadowSide:U.side:L.side=U.shadowSide!==null?U.shadowSide:v[U.side],L.alphaMap=U.alphaMap,L.alphaTest=U.alphaTest,L.map=U.map,L.clipShadows=U.clipShadows,L.clippingPlanes=U.clippingPlanes,L.clipIntersection=U.clipIntersection,L.displacementMap=U.displacementMap,L.displacementScale=U.displacementScale,L.displacementBias=U.displacementBias,L.wireframeLinewidth=U.wireframeLinewidth,L.linewidth=U.linewidth,ue.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const ce=o.properties.get(L);ce.light=ue}return L}function D(O,U,ue,R,L){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&L===Ui)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,O.matrixWorld);const pe=e.update(O),B=O.material;if(Array.isArray(B)){const Q=pe.groups;for(let ee=0,oe=Q.length;ee<oe;ee++){const H=Q[ee],$=B[H.materialIndex];if($&&$.visible){const X=A(O,$,R,L);O.onBeforeShadow(o,O,U,ue,pe,X,H),o.renderBufferDirect(ue,null,pe,X,O,H),O.onAfterShadow(o,O,U,ue,pe,X,H)}}}else if(B.visible){const Q=A(O,B,R,L);O.onBeforeShadow(o,O,U,ue,pe,Q,null),o.renderBufferDirect(ue,null,pe,Q,O,null),O.onAfterShadow(o,O,U,ue,pe,Q,null)}}const ce=O.children;for(let pe=0,B=ce.length;pe<B;pe++)D(ce[pe],U,ue,R,L)}function V(O){O.target.removeEventListener("dispose",V);for(const ue in p){const R=p[ue],L=O.target.uuid;L in R&&(R[L].dispose(),delete R[L])}}}function qM(o,e,n){const r=n.isWebGL2;function a(){let k=!1;const Ee=new zt;let Pe=null;const et=new zt(0,0,0,0);return{setMask:function(Ze){Pe!==Ze&&!k&&(o.colorMask(Ze,Ze,Ze,Ze),Pe=Ze)},setLocked:function(Ze){k=Ze},setClear:function(Ze,mt,gt,Ct,It){It===!0&&(Ze*=Ct,mt*=Ct,gt*=Ct),Ee.set(Ze,mt,gt,Ct),et.equals(Ee)===!1&&(o.clearColor(Ze,mt,gt,Ct),et.copy(Ee))},reset:function(){k=!1,Pe=null,et.set(-1,0,0,0)}}}function c(){let k=!1,Ee=null,Pe=null,et=null;return{setTest:function(Ze){Ze?Ne(o.DEPTH_TEST):ze(o.DEPTH_TEST)},setMask:function(Ze){Ee!==Ze&&!k&&(o.depthMask(Ze),Ee=Ze)},setFunc:function(Ze){if(Pe!==Ze){switch(Ze){case gv:o.depthFunc(o.NEVER);break;case _v:o.depthFunc(o.ALWAYS);break;case vv:o.depthFunc(o.LESS);break;case xl:o.depthFunc(o.LEQUAL);break;case xv:o.depthFunc(o.EQUAL);break;case yv:o.depthFunc(o.GEQUAL);break;case Sv:o.depthFunc(o.GREATER);break;case Mv:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pe=Ze}},setLocked:function(Ze){k=Ze},setClear:function(Ze){et!==Ze&&(o.clearDepth(Ze),et=Ze)},reset:function(){k=!1,Ee=null,Pe=null,et=null}}}function f(){let k=!1,Ee=null,Pe=null,et=null,Ze=null,mt=null,gt=null,Ct=null,It=null;return{setTest:function(_t){k||(_t?Ne(o.STENCIL_TEST):ze(o.STENCIL_TEST))},setMask:function(_t){Ee!==_t&&!k&&(o.stencilMask(_t),Ee=_t)},setFunc:function(_t,Ft,cn){(Pe!==_t||et!==Ft||Ze!==cn)&&(o.stencilFunc(_t,Ft,cn),Pe=_t,et=Ft,Ze=cn)},setOp:function(_t,Ft,cn){(mt!==_t||gt!==Ft||Ct!==cn)&&(o.stencilOp(_t,Ft,cn),mt=_t,gt=Ft,Ct=cn)},setLocked:function(_t){k=_t},setClear:function(_t){It!==_t&&(o.clearStencil(_t),It=_t)},reset:function(){k=!1,Ee=null,Pe=null,et=null,Ze=null,mt=null,gt=null,Ct=null,It=null}}}const u=new a,h=new c,p=new f,m=new WeakMap,v=new WeakMap;let x={},S={},T=new WeakMap,E=[],y=null,_=!1,P=null,A=null,D=null,V=null,O=null,U=null,ue=null,R=new yt(0,0,0),L=0,te=!1,ce=null,pe=null,B=null,Q=null,ee=null;const oe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=$>=2);let N=null,W={};const Y=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),he=new zt().fromArray(Y),we=new zt().fromArray(ae);function Re(k,Ee,Pe,et){const Ze=new Uint8Array(4),mt=o.createTexture();o.bindTexture(k,mt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let gt=0;gt<Pe;gt++)r&&(k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY)?o.texImage3D(Ee,0,o.RGBA,1,1,et,0,o.RGBA,o.UNSIGNED_BYTE,Ze):o.texImage2D(Ee+gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ze);return mt}const De={};De[o.TEXTURE_2D]=Re(o.TEXTURE_2D,o.TEXTURE_2D,1),De[o.TEXTURE_CUBE_MAP]=Re(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(De[o.TEXTURE_2D_ARRAY]=Re(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),De[o.TEXTURE_3D]=Re(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),u.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Ne(o.DEPTH_TEST),h.setFunc(xl),nt(!1),b(qh),Ne(o.CULL_FACE),Ce(gr);function Ne(k){x[k]!==!0&&(o.enable(k),x[k]=!0)}function ze(k){x[k]!==!1&&(o.disable(k),x[k]=!1)}function ut(k,Ee){return S[k]!==Ee?(o.bindFramebuffer(k,Ee),S[k]=Ee,r&&(k===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Ee),k===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function ne(k,Ee){let Pe=E,et=!1;if(k)if(Pe=T.get(Ee),Pe===void 0&&(Pe=[],T.set(Ee,Pe)),k.isWebGLMultipleRenderTargets){const Ze=k.texture;if(Pe.length!==Ze.length||Pe[0]!==o.COLOR_ATTACHMENT0){for(let mt=0,gt=Ze.length;mt<gt;mt++)Pe[mt]=o.COLOR_ATTACHMENT0+mt;Pe.length=Ze.length,et=!0}}else Pe[0]!==o.COLOR_ATTACHMENT0&&(Pe[0]=o.COLOR_ATTACHMENT0,et=!0);else Pe[0]!==o.BACK&&(Pe[0]=o.BACK,et=!0);et&&(n.isWebGL2?o.drawBuffers(Pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pe))}function Lt(k){return y!==k?(o.useProgram(k),y=k,!0):!1}const fe={[Hr]:o.FUNC_ADD,[tv]:o.FUNC_SUBTRACT,[nv]:o.FUNC_REVERSE_SUBTRACT};if(r)fe[Qh]=o.MIN,fe[Jh]=o.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(fe[Qh]=k.MIN_EXT,fe[Jh]=k.MAX_EXT)}const Ge={[iv]:o.ZERO,[rv]:o.ONE,[sv]:o.SRC_COLOR,[qu]:o.SRC_ALPHA,[fv]:o.SRC_ALPHA_SATURATE,[cv]:o.DST_COLOR,[av]:o.DST_ALPHA,[ov]:o.ONE_MINUS_SRC_COLOR,[Ku]:o.ONE_MINUS_SRC_ALPHA,[uv]:o.ONE_MINUS_DST_COLOR,[lv]:o.ONE_MINUS_DST_ALPHA,[dv]:o.CONSTANT_COLOR,[hv]:o.ONE_MINUS_CONSTANT_COLOR,[pv]:o.CONSTANT_ALPHA,[mv]:o.ONE_MINUS_CONSTANT_ALPHA};function Ce(k,Ee,Pe,et,Ze,mt,gt,Ct,It,_t){if(k===gr){_===!0&&(ze(o.BLEND),_=!1);return}if(_===!1&&(Ne(o.BLEND),_=!0),k!==ev){if(k!==P||_t!==te){if((A!==Hr||O!==Hr)&&(o.blendEquation(o.FUNC_ADD),A=Hr,O=Hr),_t)switch(k){case ks:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Kh:o.blendFunc(o.ONE,o.ONE);break;case $h:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zh:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ks:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Kh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case $h:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zh:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}D=null,V=null,U=null,ue=null,R.set(0,0,0),L=0,P=k,te=_t}return}Ze=Ze||Ee,mt=mt||Pe,gt=gt||et,(Ee!==A||Ze!==O)&&(o.blendEquationSeparate(fe[Ee],fe[Ze]),A=Ee,O=Ze),(Pe!==D||et!==V||mt!==U||gt!==ue)&&(o.blendFuncSeparate(Ge[Pe],Ge[et],Ge[mt],Ge[gt]),D=Pe,V=et,U=mt,ue=gt),(Ct.equals(R)===!1||It!==L)&&(o.blendColor(Ct.r,Ct.g,Ct.b,It),R.copy(Ct),L=It),P=k,te=!1}function St(k,Ee){k.side===Ii?ze(o.CULL_FACE):Ne(o.CULL_FACE);let Pe=k.side===Tn;Ee&&(Pe=!Pe),nt(Pe),k.blending===ks&&k.transparent===!1?Ce(gr):Ce(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const et=k.stencilWrite;p.setTest(et),et&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Z(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ne(o.SAMPLE_ALPHA_TO_COVERAGE):ze(o.SAMPLE_ALPHA_TO_COVERAGE)}function nt(k){ce!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),ce=k)}function b(k){k!==Q_?(Ne(o.CULL_FACE),k!==pe&&(k===qh?o.cullFace(o.BACK):k===J_?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ze(o.CULL_FACE),pe=k}function w(k){k!==B&&(H&&o.lineWidth(k),B=k)}function Z(k,Ee,Pe){k?(Ne(o.POLYGON_OFFSET_FILL),(Q!==Ee||ee!==Pe)&&(o.polygonOffset(Ee,Pe),Q=Ee,ee=Pe)):ze(o.POLYGON_OFFSET_FILL)}function xe(k){k?Ne(o.SCISSOR_TEST):ze(o.SCISSOR_TEST)}function ye(k){k===void 0&&(k=o.TEXTURE0+oe-1),N!==k&&(o.activeTexture(k),N=k)}function Me(k,Ee,Pe){Pe===void 0&&(N===null?Pe=o.TEXTURE0+oe-1:Pe=N);let et=W[Pe];et===void 0&&(et={type:void 0,texture:void 0},W[Pe]=et),(et.type!==k||et.texture!==Ee)&&(N!==Pe&&(o.activeTexture(Pe),N=Pe),o.bindTexture(k,Ee||De[k]),et.type=k,et.texture=Ee)}function Xe(){const k=W[N];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Le(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ke(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qe(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function F(k){he.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),he.copy(k))}function Te(k){we.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),we.copy(k))}function je(k,Ee){let Pe=v.get(Ee);Pe===void 0&&(Pe=new WeakMap,v.set(Ee,Pe));let et=Pe.get(k);et===void 0&&(et=o.getUniformBlockIndex(Ee,k.name),Pe.set(k,et))}function Oe(k,Ee){const et=v.get(Ee).get(k);m.get(Ee)!==et&&(o.uniformBlockBinding(Ee,et,k.__bindingPointIndex),m.set(Ee,et))}function ve(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},N=null,W={},S={},T=new WeakMap,E=[],y=null,_=!1,P=null,A=null,D=null,V=null,O=null,U=null,ue=null,R=new yt(0,0,0),L=0,te=!1,ce=null,pe=null,B=null,Q=null,ee=null,he.set(0,0,o.canvas.width,o.canvas.height),we.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),p.reset()}return{buffers:{color:u,depth:h,stencil:p},enable:Ne,disable:ze,bindFramebuffer:ut,drawBuffers:ne,useProgram:Lt,setBlending:Ce,setMaterial:St,setFlipSided:nt,setCullFace:b,setLineWidth:w,setPolygonOffset:Z,setScissorTest:xe,activeTexture:ye,bindTexture:Me,unbindTexture:Xe,compressedTexImage2D:Le,compressedTexImage3D:ke,texImage2D:qe,texImage3D:Ue,updateUBOMapping:je,uniformBlockBinding:Oe,texStorage2D:ft,texStorage3D:it,texSubImage2D:$e,texSubImage3D:at,compressedTexSubImage2D:ge,compressedTexSubImage3D:Mt,scissor:F,viewport:Te,reset:ve}}function KM(o,e,n,r,a,c,f){const u=a.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(b,w){return S?new OffscreenCanvas(b,w):wl("canvas")}function E(b,w,Z,xe){let ye=1;if((b.width>xe||b.height>xe)&&(ye=xe/Math.max(b.width,b.height)),ye<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const Me=w?tf:Math.floor,Xe=Me(ye*b.width),Le=Me(ye*b.height);v===void 0&&(v=T(Xe,Le));const ke=Z?T(Xe,Le):v;return ke.width=Xe,ke.height=Le,ke.getContext("2d").drawImage(b,0,0,Xe,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Xe+"x"+Le+")."),ke}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return bp(b.width)&&bp(b.height)}function _(b){return u?!1:b.wrapS!==ci||b.wrapT!==ci||b.minFilter!==Mn&&b.minFilter!==Zn}function P(b,w){return b.generateMipmaps&&w&&b.minFilter!==Mn&&b.minFilter!==Zn}function A(b){o.generateMipmap(b)}function D(b,w,Z,xe,ye=!1){if(u===!1)return w;if(b!==null){if(o[b]!==void 0)return o[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Me=w;if(w===o.RED&&(Z===o.FLOAT&&(Me=o.R32F),Z===o.HALF_FLOAT&&(Me=o.R16F),Z===o.UNSIGNED_BYTE&&(Me=o.R8)),w===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(Me=o.R8UI),Z===o.UNSIGNED_SHORT&&(Me=o.R16UI),Z===o.UNSIGNED_INT&&(Me=o.R32UI),Z===o.BYTE&&(Me=o.R8I),Z===o.SHORT&&(Me=o.R16I),Z===o.INT&&(Me=o.R32I)),w===o.RG&&(Z===o.FLOAT&&(Me=o.RG32F),Z===o.HALF_FLOAT&&(Me=o.RG16F),Z===o.UNSIGNED_BYTE&&(Me=o.RG8)),w===o.RGBA){const Xe=ye?yl:Rt.getTransfer(xe);Z===o.FLOAT&&(Me=o.RGBA32F),Z===o.HALF_FLOAT&&(Me=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(Me=Xe===Ut?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT_4_4_4_4&&(Me=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(Me=o.RGB5_A1)}return(Me===o.R16F||Me===o.R32F||Me===o.RG16F||Me===o.RG32F||Me===o.RGBA16F||Me===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function V(b,w,Z){return P(b,Z)===!0||b.isFramebufferTexture&&b.minFilter!==Mn&&b.minFilter!==Zn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function O(b){return b===Mn||b===ep||b===mu?o.NEAREST:o.LINEAR}function U(b){const w=b.target;w.removeEventListener("dispose",U),R(w),w.isVideoTexture&&m.delete(w)}function ue(b){const w=b.target;w.removeEventListener("dispose",ue),te(w)}function R(b){const w=r.get(b);if(w.__webglInit===void 0)return;const Z=b.source,xe=x.get(Z);if(xe){const ye=xe[w.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&L(b),Object.keys(xe).length===0&&x.delete(Z)}r.remove(b)}function L(b){const w=r.get(b);o.deleteTexture(w.__webglTexture);const Z=b.source,xe=x.get(Z);delete xe[w.__cacheKey],f.memory.textures--}function te(b){const w=b.texture,Z=r.get(b),xe=r.get(w);if(xe.__webglTexture!==void 0&&(o.deleteTexture(xe.__webglTexture),f.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(Z.__webglFramebuffer[ye]))for(let Me=0;Me<Z.__webglFramebuffer[ye].length;Me++)o.deleteFramebuffer(Z.__webglFramebuffer[ye][Me]);else o.deleteFramebuffer(Z.__webglFramebuffer[ye]);Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer[ye])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ye=0;ye<Z.__webglFramebuffer.length;ye++)o.deleteFramebuffer(Z.__webglFramebuffer[ye]);else o.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&o.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&o.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ye=0;ye<Z.__webglColorRenderbuffer.length;ye++)Z.__webglColorRenderbuffer[ye]&&o.deleteRenderbuffer(Z.__webglColorRenderbuffer[ye]);Z.__webglDepthRenderbuffer&&o.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ye=0,Me=w.length;ye<Me;ye++){const Xe=r.get(w[ye]);Xe.__webglTexture&&(o.deleteTexture(Xe.__webglTexture),f.memory.textures--),r.remove(w[ye])}r.remove(w),r.remove(b)}let ce=0;function pe(){ce=0}function B(){const b=ce;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),ce+=1,b}function Q(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function ee(b,w){const Z=r.get(b);if(b.isVideoTexture&&St(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const xe=b.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(Z,b,w);return}}n.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+w)}function oe(b,w){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){he(Z,b,w);return}n.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+w)}function H(b,w){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){he(Z,b,w);return}n.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+w)}function $(b,w){const Z=r.get(b);if(b.version>0&&Z.__version!==b.version){we(Z,b,w);return}n.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+w)}const X={[Qu]:o.REPEAT,[ci]:o.CLAMP_TO_EDGE,[Ju]:o.MIRRORED_REPEAT},N={[Mn]:o.NEAREST,[ep]:o.NEAREST_MIPMAP_NEAREST,[mu]:o.NEAREST_MIPMAP_LINEAR,[Zn]:o.LINEAR,[Pv]:o.LINEAR_MIPMAP_NEAREST,[Fo]:o.LINEAR_MIPMAP_LINEAR},W={[Gv]:o.NEVER,[qv]:o.ALWAYS,[Vv]:o.LESS,[Hm]:o.LEQUAL,[Wv]:o.EQUAL,[Yv]:o.GEQUAL,[Xv]:o.GREATER,[jv]:o.NOTEQUAL};function Y(b,w,Z){if(Z?(o.texParameteri(b,o.TEXTURE_WRAP_S,X[w.wrapS]),o.texParameteri(b,o.TEXTURE_WRAP_T,X[w.wrapT]),(b===o.TEXTURE_3D||b===o.TEXTURE_2D_ARRAY)&&o.texParameteri(b,o.TEXTURE_WRAP_R,X[w.wrapR]),o.texParameteri(b,o.TEXTURE_MAG_FILTER,N[w.magFilter]),o.texParameteri(b,o.TEXTURE_MIN_FILTER,N[w.minFilter])):(o.texParameteri(b,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(b,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(b===o.TEXTURE_3D||b===o.TEXTURE_2D_ARRAY)&&o.texParameteri(b,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(w.wrapS!==ci||w.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(b,o.TEXTURE_MAG_FILTER,O(w.magFilter)),o.texParameteri(b,o.TEXTURE_MIN_FILTER,O(w.minFilter)),w.minFilter!==Mn&&w.minFilter!==Zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(o.texParameteri(b,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(b,o.TEXTURE_COMPARE_FUNC,W[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const xe=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Mn||w.minFilter!==mu&&w.minFilter!==Fo||w.type===mr&&e.has("OES_texture_float_linear")===!1||u===!1&&w.type===Oo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(o.texParameterf(b,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function ae(b,w){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",U));const xe=w.source;let ye=x.get(xe);ye===void 0&&(ye={},x.set(xe,ye));const Me=Q(w);if(Me!==b.__cacheKey){ye[Me]===void 0&&(ye[Me]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),ye[Me].usedTimes++;const Xe=ye[b.__cacheKey];Xe!==void 0&&(ye[b.__cacheKey].usedTimes--,Xe.usedTimes===0&&L(w)),b.__cacheKey=Me,b.__webglTexture=ye[Me].texture}return Z}function he(b,w,Z){let xe=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(xe=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(xe=o.TEXTURE_3D);const ye=ae(b,w),Me=w.source;n.bindTexture(xe,b.__webglTexture,o.TEXTURE0+Z);const Xe=r.get(Me);if(Me.version!==Xe.__version||ye===!0){n.activeTexture(o.TEXTURE0+Z);const Le=Rt.getPrimaries(Rt.workingColorSpace),ke=w.colorSpace===Qn?null:Rt.getPrimaries(w.colorSpace),$e=w.colorSpace===Qn||Le===ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const at=_(w)&&y(w.image)===!1;let ge=E(w.image,at,!1,a.maxTextureSize);ge=nt(w,ge);const Mt=y(ge)||u,ft=c.convert(w.format,w.colorSpace);let it=c.convert(w.type),qe=D(w.internalFormat,ft,it,w.colorSpace,w.isVideoTexture);Y(xe,w,Mt);let Ue;const F=w.mipmaps,Te=u&&w.isVideoTexture!==!0&&qe!==km,je=Xe.__version===void 0||ye===!0,Oe=V(w,ge,Mt);if(w.isDepthTexture)qe=o.DEPTH_COMPONENT,u?w.type===mr?qe=o.DEPTH_COMPONENT32F:w.type===pr?qe=o.DEPTH_COMPONENT24:w.type===Vr?qe=o.DEPTH24_STENCIL8:qe=o.DEPTH_COMPONENT16:w.type===mr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Wr&&qe===o.DEPTH_COMPONENT&&w.type!==lf&&w.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=pr,it=c.convert(w.type)),w.format===Gs&&qe===o.DEPTH_COMPONENT&&(qe=o.DEPTH_STENCIL,w.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Vr,it=c.convert(w.type))),je&&(Te?n.texStorage2D(o.TEXTURE_2D,1,qe,ge.width,ge.height):n.texImage2D(o.TEXTURE_2D,0,qe,ge.width,ge.height,0,ft,it,null));else if(w.isDataTexture)if(F.length>0&&Mt){Te&&je&&n.texStorage2D(o.TEXTURE_2D,Oe,qe,F[0].width,F[0].height);for(let ve=0,k=F.length;ve<k;ve++)Ue=F[ve],Te?n.texSubImage2D(o.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,ft,it,Ue.data):n.texImage2D(o.TEXTURE_2D,ve,qe,Ue.width,Ue.height,0,ft,it,Ue.data);w.generateMipmaps=!1}else Te?(je&&n.texStorage2D(o.TEXTURE_2D,Oe,qe,ge.width,ge.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,ge.width,ge.height,ft,it,ge.data)):n.texImage2D(o.TEXTURE_2D,0,qe,ge.width,ge.height,0,ft,it,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Te&&je&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Oe,qe,F[0].width,F[0].height,ge.depth);for(let ve=0,k=F.length;ve<k;ve++)Ue=F[ve],w.format!==ui?ft!==null?Te?n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,ge.depth,ft,Ue.data,0,0):n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ve,qe,Ue.width,Ue.height,ge.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?n.texSubImage3D(o.TEXTURE_2D_ARRAY,ve,0,0,0,Ue.width,Ue.height,ge.depth,ft,it,Ue.data):n.texImage3D(o.TEXTURE_2D_ARRAY,ve,qe,Ue.width,Ue.height,ge.depth,0,ft,it,Ue.data)}else{Te&&je&&n.texStorage2D(o.TEXTURE_2D,Oe,qe,F[0].width,F[0].height);for(let ve=0,k=F.length;ve<k;ve++)Ue=F[ve],w.format!==ui?ft!==null?Te?n.compressedTexSubImage2D(o.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,ft,Ue.data):n.compressedTexImage2D(o.TEXTURE_2D,ve,qe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?n.texSubImage2D(o.TEXTURE_2D,ve,0,0,Ue.width,Ue.height,ft,it,Ue.data):n.texImage2D(o.TEXTURE_2D,ve,qe,Ue.width,Ue.height,0,ft,it,Ue.data)}else if(w.isDataArrayTexture)Te?(je&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Oe,qe,ge.width,ge.height,ge.depth),n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,ft,it,ge.data)):n.texImage3D(o.TEXTURE_2D_ARRAY,0,qe,ge.width,ge.height,ge.depth,0,ft,it,ge.data);else if(w.isData3DTexture)Te?(je&&n.texStorage3D(o.TEXTURE_3D,Oe,qe,ge.width,ge.height,ge.depth),n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,ft,it,ge.data)):n.texImage3D(o.TEXTURE_3D,0,qe,ge.width,ge.height,ge.depth,0,ft,it,ge.data);else if(w.isFramebufferTexture){if(je)if(Te)n.texStorage2D(o.TEXTURE_2D,Oe,qe,ge.width,ge.height);else{let ve=ge.width,k=ge.height;for(let Ee=0;Ee<Oe;Ee++)n.texImage2D(o.TEXTURE_2D,Ee,qe,ve,k,0,ft,it,null),ve>>=1,k>>=1}}else if(F.length>0&&Mt){Te&&je&&n.texStorage2D(o.TEXTURE_2D,Oe,qe,F[0].width,F[0].height);for(let ve=0,k=F.length;ve<k;ve++)Ue=F[ve],Te?n.texSubImage2D(o.TEXTURE_2D,ve,0,0,ft,it,Ue):n.texImage2D(o.TEXTURE_2D,ve,qe,ft,it,Ue);w.generateMipmaps=!1}else Te?(je&&n.texStorage2D(o.TEXTURE_2D,Oe,qe,ge.width,ge.height),n.texSubImage2D(o.TEXTURE_2D,0,0,0,ft,it,ge)):n.texImage2D(o.TEXTURE_2D,0,qe,ft,it,ge);P(w,Mt)&&A(xe),Xe.__version=Me.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function we(b,w,Z){if(w.image.length!==6)return;const xe=ae(b,w),ye=w.source;n.bindTexture(o.TEXTURE_CUBE_MAP,b.__webglTexture,o.TEXTURE0+Z);const Me=r.get(ye);if(ye.version!==Me.__version||xe===!0){n.activeTexture(o.TEXTURE0+Z);const Xe=Rt.getPrimaries(Rt.workingColorSpace),Le=w.colorSpace===Qn?null:Rt.getPrimaries(w.colorSpace),ke=w.colorSpace===Qn||Xe===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const $e=w.isCompressedTexture||w.image[0].isCompressedTexture,at=w.image[0]&&w.image[0].isDataTexture,ge=[];for(let ve=0;ve<6;ve++)!$e&&!at?ge[ve]=E(w.image[ve],!1,!0,a.maxCubemapSize):ge[ve]=at?w.image[ve].image:w.image[ve],ge[ve]=nt(w,ge[ve]);const Mt=ge[0],ft=y(Mt)||u,it=c.convert(w.format,w.colorSpace),qe=c.convert(w.type),Ue=D(w.internalFormat,it,qe,w.colorSpace),F=u&&w.isVideoTexture!==!0,Te=Me.__version===void 0||xe===!0;let je=V(w,Mt,ft);Y(o.TEXTURE_CUBE_MAP,w,ft);let Oe;if($e){F&&Te&&n.texStorage2D(o.TEXTURE_CUBE_MAP,je,Ue,Mt.width,Mt.height);for(let ve=0;ve<6;ve++){Oe=ge[ve].mipmaps;for(let k=0;k<Oe.length;k++){const Ee=Oe[k];w.format!==ui?it!==null?F?n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,k,0,0,Ee.width,Ee.height,it,Ee.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,k,Ue,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,k,0,0,Ee.width,Ee.height,it,qe,Ee.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,k,Ue,Ee.width,Ee.height,0,it,qe,Ee.data)}}}else{Oe=w.mipmaps,F&&Te&&(Oe.length>0&&je++,n.texStorage2D(o.TEXTURE_CUBE_MAP,je,Ue,ge[0].width,ge[0].height));for(let ve=0;ve<6;ve++)if(at){F?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ge[ve].width,ge[ve].height,it,qe,ge[ve].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ue,ge[ve].width,ge[ve].height,0,it,qe,ge[ve].data);for(let k=0;k<Oe.length;k++){const Pe=Oe[k].image[ve].image;F?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,k+1,0,0,Pe.width,Pe.height,it,qe,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,k+1,Ue,Pe.width,Pe.height,0,it,qe,Pe.data)}}else{F?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,it,qe,ge[ve]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ue,it,qe,ge[ve]);for(let k=0;k<Oe.length;k++){const Ee=Oe[k];F?n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,k+1,0,0,it,qe,Ee.image[ve]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,k+1,Ue,it,qe,Ee.image[ve])}}}P(w,ft)&&A(o.TEXTURE_CUBE_MAP),Me.__version=ye.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Re(b,w,Z,xe,ye,Me){const Xe=c.convert(Z.format,Z.colorSpace),Le=c.convert(Z.type),ke=D(Z.internalFormat,Xe,Le,Z.colorSpace);if(!r.get(w).__hasExternalTextures){const at=Math.max(1,w.width>>Me),ge=Math.max(1,w.height>>Me);ye===o.TEXTURE_3D||ye===o.TEXTURE_2D_ARRAY?n.texImage3D(ye,Me,ke,at,ge,w.depth,0,Xe,Le,null):n.texImage2D(ye,Me,ke,at,ge,0,Xe,Le,null)}n.bindFramebuffer(o.FRAMEBUFFER,b),Ce(w)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xe,ye,r.get(Z).__webglTexture,0,Ge(w)):(ye===o.TEXTURE_2D||ye>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xe,ye,r.get(Z).__webglTexture,Me),n.bindFramebuffer(o.FRAMEBUFFER,null)}function De(b,w,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,b),w.depthBuffer&&!w.stencilBuffer){let xe=u===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(Z||Ce(w)){const ye=w.depthTexture;ye&&ye.isDepthTexture&&(ye.type===mr?xe=o.DEPTH_COMPONENT32F:ye.type===pr&&(xe=o.DEPTH_COMPONENT24));const Me=Ge(w);Ce(w)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Me,xe,w.width,w.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,Me,xe,w.width,w.height)}else o.renderbufferStorage(o.RENDERBUFFER,xe,w.width,w.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,b)}else if(w.depthBuffer&&w.stencilBuffer){const xe=Ge(w);Z&&Ce(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,xe,o.DEPTH24_STENCIL8,w.width,w.height):Ce(w)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xe,o.DEPTH24_STENCIL8,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,b)}else{const xe=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ye=0;ye<xe.length;ye++){const Me=xe[ye],Xe=c.convert(Me.format,Me.colorSpace),Le=c.convert(Me.type),ke=D(Me.internalFormat,Xe,Le,Me.colorSpace),$e=Ge(w);Z&&Ce(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,$e,ke,w.width,w.height):Ce(w)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$e,ke,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,ke,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ne(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ee(w.depthTexture,0);const xe=r.get(w.depthTexture).__webglTexture,ye=Ge(w);if(w.depthTexture.format===Wr)Ce(w)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xe,0,ye):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xe,0);else if(w.depthTexture.format===Gs)Ce(w)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xe,0,ye):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function ze(b){const w=r.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ne(w.__webglFramebuffer,b)}else if(Z){w.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[xe]),w.__webglDepthbuffer[xe]=o.createRenderbuffer(),De(w.__webglDepthbuffer[xe],b,!1)}else n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),De(w.__webglDepthbuffer,b,!1);n.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(b,w,Z){const xe=r.get(b);w!==void 0&&Re(xe.__webglFramebuffer,b,b.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&ze(b)}function ne(b){const w=b.texture,Z=r.get(b),xe=r.get(w);b.addEventListener("dispose",ue),b.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=o.createTexture()),xe.__version=w.version,f.memory.textures++);const ye=b.isWebGLCubeRenderTarget===!0,Me=b.isWebGLMultipleRenderTargets===!0,Xe=y(b)||u;if(ye){Z.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(u&&w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[Le]=[];for(let ke=0;ke<w.mipmaps.length;ke++)Z.__webglFramebuffer[Le][ke]=o.createFramebuffer()}else Z.__webglFramebuffer[Le]=o.createFramebuffer()}else{if(u&&w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Le=0;Le<w.mipmaps.length;Le++)Z.__webglFramebuffer[Le]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(Me)if(a.drawBuffers){const Le=b.texture;for(let ke=0,$e=Le.length;ke<$e;ke++){const at=r.get(Le[ke]);at.__webglTexture===void 0&&(at.__webglTexture=o.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(u&&b.samples>0&&Ce(b)===!1){const Le=Me?w:[w];Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ke=0;ke<Le.length;ke++){const $e=Le[ke];Z.__webglColorRenderbuffer[ke]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[ke]);const at=c.convert($e.format,$e.colorSpace),ge=c.convert($e.type),Mt=D($e.internalFormat,at,ge,$e.colorSpace,b.isXRRenderTarget===!0),ft=Ge(b);o.renderbufferStorageMultisample(o.RENDERBUFFER,ft,Mt,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ke,o.RENDERBUFFER,Z.__webglColorRenderbuffer[ke])}o.bindRenderbuffer(o.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),De(Z.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ye){n.bindTexture(o.TEXTURE_CUBE_MAP,xe.__webglTexture),Y(o.TEXTURE_CUBE_MAP,w,Xe);for(let Le=0;Le<6;Le++)if(u&&w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)Re(Z.__webglFramebuffer[Le][ke],b,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,ke);else Re(Z.__webglFramebuffer[Le],b,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);P(w,Xe)&&A(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){const Le=b.texture;for(let ke=0,$e=Le.length;ke<$e;ke++){const at=Le[ke],ge=r.get(at);n.bindTexture(o.TEXTURE_2D,ge.__webglTexture),Y(o.TEXTURE_2D,at,Xe),Re(Z.__webglFramebuffer,b,at,o.COLOR_ATTACHMENT0+ke,o.TEXTURE_2D,0),P(at,Xe)&&A(o.TEXTURE_2D)}n.unbindTexture()}else{let Le=o.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(u?Le=b.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(Le,xe.__webglTexture),Y(Le,w,Xe),u&&w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)Re(Z.__webglFramebuffer[ke],b,w,o.COLOR_ATTACHMENT0,Le,ke);else Re(Z.__webglFramebuffer,b,w,o.COLOR_ATTACHMENT0,Le,0);P(w,Xe)&&A(Le),n.unbindTexture()}b.depthBuffer&&ze(b)}function Lt(b){const w=y(b)||u,Z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let xe=0,ye=Z.length;xe<ye;xe++){const Me=Z[xe];if(P(Me,w)){const Xe=b.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Le=r.get(Me).__webglTexture;n.bindTexture(Xe,Le),A(Xe),n.unbindTexture()}}}function fe(b){if(u&&b.samples>0&&Ce(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],Z=b.width,xe=b.height;let ye=o.COLOR_BUFFER_BIT;const Me=[],Xe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=r.get(b),ke=b.isWebGLMultipleRenderTargets===!0;if(ke)for(let $e=0;$e<w.length;$e++)n.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$e,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$e,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let $e=0;$e<w.length;$e++){Me.push(o.COLOR_ATTACHMENT0+$e),b.depthBuffer&&Me.push(Xe);const at=Le.__ignoreDepthValues!==void 0?Le.__ignoreDepthValues:!1;if(at===!1&&(b.depthBuffer&&(ye|=o.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ye|=o.STENCIL_BUFFER_BIT)),ke&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Le.__webglColorRenderbuffer[$e]),at===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Xe]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Xe])),ke){const ge=r.get(w[$e]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ge,0)}o.blitFramebuffer(0,0,Z,xe,0,0,Z,xe,ye,o.NEAREST),p&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Me)}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ke)for(let $e=0;$e<w.length;$e++){n.bindFramebuffer(o.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$e,o.RENDERBUFFER,Le.__webglColorRenderbuffer[$e]);const at=r.get(w[$e]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Le.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$e,o.TEXTURE_2D,at,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}}function Ge(b){return Math.min(a.maxSamples,b.samples)}function Ce(b){const w=r.get(b);return u&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function St(b){const w=f.render.frame;m.get(b)!==w&&(m.set(b,w),b.update())}function nt(b,w){const Z=b.colorSpace,xe=b.format,ye=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===ef||Z!==ki&&Z!==Qn&&(Rt.getTransfer(Z)===Ut?u===!1?e.has("EXT_sRGB")===!0&&xe===ui?(b.format=ef,b.minFilter=Zn,b.generateMipmaps=!1):w=Vm.sRGBToLinear(w):(xe!==ui||ye!==vr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}this.allocateTextureUnit=B,this.resetTextureUnits=pe,this.setTexture2D=ee,this.setTexture2DArray=oe,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=ut,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Ce}function $M(o,e,n){const r=n.isWebGL2;function a(c,f=Qn){let u;const h=Rt.getTransfer(f);if(c===vr)return o.UNSIGNED_BYTE;if(c===Nm)return o.UNSIGNED_SHORT_4_4_4_4;if(c===Um)return o.UNSIGNED_SHORT_5_5_5_1;if(c===Lv)return o.BYTE;if(c===Dv)return o.SHORT;if(c===lf)return o.UNSIGNED_SHORT;if(c===Dm)return o.INT;if(c===pr)return o.UNSIGNED_INT;if(c===mr)return o.FLOAT;if(c===Oo)return r?o.HALF_FLOAT:(u=e.get("OES_texture_half_float"),u!==null?u.HALF_FLOAT_OES:null);if(c===Nv)return o.ALPHA;if(c===ui)return o.RGBA;if(c===Uv)return o.LUMINANCE;if(c===Iv)return o.LUMINANCE_ALPHA;if(c===Wr)return o.DEPTH_COMPONENT;if(c===Gs)return o.DEPTH_STENCIL;if(c===ef)return u=e.get("EXT_sRGB"),u!==null?u.SRGB_ALPHA_EXT:null;if(c===Fv)return o.RED;if(c===Im)return o.RED_INTEGER;if(c===Ov)return o.RG;if(c===Fm)return o.RG_INTEGER;if(c===Om)return o.RGBA_INTEGER;if(c===gu||c===_u||c===vu||c===xu)if(h===Ut)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(c===gu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===_u)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===xu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(c===gu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===_u)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===vu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===xu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===tp||c===np||c===ip||c===rp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(c===tp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===np)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===ip)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===rp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===km)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===sp||c===op)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(c===sp)return h===Ut?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(c===op)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===ap||c===lp||c===cp||c===up||c===fp||c===dp||c===hp||c===pp||c===mp||c===gp||c===_p||c===vp||c===xp||c===yp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(c===ap)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===lp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===cp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===up)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===fp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===dp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===hp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===pp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===mp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===gp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===_p)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===vp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===xp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===yp)return h===Ut?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===yu||c===Sp||c===Mp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(c===yu)return h===Ut?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===Sp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===Mp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===kv||c===Ep||c===Tp||c===wp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(c===yu)return u.COMPRESSED_RED_RGTC1_EXT;if(c===Ep)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===Tp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===wp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===Vr?r?o.UNSIGNED_INT_24_8:(u=e.get("WEBGL_depth_texture"),u!==null?u.UNSIGNED_INT_24_8_WEBGL:null):o[c]!==void 0?o[c]:null}return{convert:a}}class ZM extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Uo extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,f=null;const u=this._targetRay,h=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const E of e.hand.values()){const y=n.getJointPose(E,r),_=this._getHandJoint(p,E);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const m=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=m.position.distanceTo(v.position),S=.02,T=.005;p.inputState.pinching&&x>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return u!==null&&(u.visible=a!==null),h!==null&&(h.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Uo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class JM extends qr{constructor(e,n){super();const r=this;let a=null,c=1,f=null,u="local-floor",h=1,p=null,m=null,v=null,x=null,S=null,T=null;const E=n.getContextAttributes();let y=null,_=null;const P=[],A=[],D=new ct;let V=null;const O=new En;O.layers.enable(1),O.viewport=new zt;const U=new En;U.layers.enable(2),U.viewport=new zt;const ue=[O,U],R=new ZM;R.layers.enable(1),R.layers.enable(2);let L=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ae=P[Y];return ae===void 0&&(ae=new Wu,P[Y]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Y){let ae=P[Y];return ae===void 0&&(ae=new Wu,P[Y]=ae),ae.getGripSpace()},this.getHand=function(Y){let ae=P[Y];return ae===void 0&&(ae=new Wu,P[Y]=ae),ae.getHandSpace()};function ce(Y){const ae=A.indexOf(Y.inputSource);if(ae===-1)return;const he=P[ae];he!==void 0&&(he.update(Y.inputSource,Y.frame,p||f),he.dispatchEvent({type:Y.type,data:Y.inputSource}))}function pe(){a.removeEventListener("select",ce),a.removeEventListener("selectstart",ce),a.removeEventListener("selectend",ce),a.removeEventListener("squeeze",ce),a.removeEventListener("squeezestart",ce),a.removeEventListener("squeezeend",ce),a.removeEventListener("end",pe),a.removeEventListener("inputsourceschange",B);for(let Y=0;Y<P.length;Y++){const ae=A[Y];ae!==null&&(A[Y]=null,P[Y].disconnect(ae))}L=null,te=null,e.setRenderTarget(y),S=null,x=null,v=null,a=null,_=null,W.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(D.width,D.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){c=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",ce),a.addEventListener("selectstart",ce),a.addEventListener("selectend",ce),a.addEventListener("squeeze",ce),a.addEventListener("squeezestart",ce),a.addEventListener("squeezeend",ce),a.addEventListener("end",pe),a.addEventListener("inputsourceschange",B),E.xrCompatible!==!0&&await n.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(D),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ae={antialias:a.renderState.layers===void 0?E.antialias:!0,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,ae),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),_=new Xr(S.framebufferWidth,S.framebufferHeight,{format:ui,type:vr,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}else{let ae=null,he=null,we=null;E.depth&&(we=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=E.stencil?Gs:Wr,he=E.stencil?Vr:pr);const Re={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:c};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(Re),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),_=new Xr(x.textureWidth,x.textureHeight,{format:ui,type:vr,depthTexture:new ng(x.textureWidth,x.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0});const De=e.properties.get(_);De.__ignoreDepthValues=x.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(h),p=null,f=await a.requestReferenceSpace(u),W.setContext(a),W.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function B(Y){for(let ae=0;ae<Y.removed.length;ae++){const he=Y.removed[ae],we=A.indexOf(he);we>=0&&(A[we]=null,P[we].disconnect(he))}for(let ae=0;ae<Y.added.length;ae++){const he=Y.added[ae];let we=A.indexOf(he);if(we===-1){for(let De=0;De<P.length;De++)if(De>=A.length){A.push(he),we=De;break}else if(A[De]===null){A[De]=he,we=De;break}if(we===-1)break}const Re=P[we];Re&&Re.connect(he)}}const Q=new j,ee=new j;function oe(Y,ae,he){Q.setFromMatrixPosition(ae.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const we=Q.distanceTo(ee),Re=ae.projectionMatrix.elements,De=he.projectionMatrix.elements,Ne=Re[14]/(Re[10]-1),ze=Re[14]/(Re[10]+1),ut=(Re[9]+1)/Re[5],ne=(Re[9]-1)/Re[5],Lt=(Re[8]-1)/Re[0],fe=(De[8]+1)/De[0],Ge=Ne*Lt,Ce=Ne*fe,St=we/(-Lt+fe),nt=St*-Lt;ae.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(nt),Y.translateZ(St),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const b=Ne+St,w=ze+St,Z=Ge-nt,xe=Ce+(we-nt),ye=ut*ze/w*b,Me=ne*ze/w*b;Y.projectionMatrix.makePerspective(Z,xe,ye,Me,b,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function H(Y,ae){ae===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ae.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;R.near=U.near=O.near=Y.near,R.far=U.far=O.far=Y.far,(L!==R.near||te!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,te=R.far);const ae=Y.parent,he=R.cameras;H(R,ae);for(let we=0;we<he.length;we++)H(he[we],ae);he.length===2?oe(R,O,U):R.projectionMatrix.copy(O.projectionMatrix),$(Y,R,ae)};function $(Y,ae,he){he===null?Y.matrix.copy(ae.matrixWorld):(Y.matrix.copy(he.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ae.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ae.projectionMatrix),Y.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Tl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Y){h=Y,x!==null&&(x.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)};let X=null;function N(Y,ae){if(m=ae.getViewerPose(p||f),T=ae,m!==null){const he=m.views;S!==null&&(e.setRenderTargetFramebuffer(_,S.framebuffer),e.setRenderTarget(_));let we=!1;he.length!==R.cameras.length&&(R.cameras.length=0,we=!0);for(let Re=0;Re<he.length;Re++){const De=he[Re];let Ne=null;if(S!==null)Ne=S.getViewport(De);else{const ut=v.getViewSubImage(x,De);Ne=ut.viewport,Re===0&&(e.setRenderTargetTextures(_,ut.colorTexture,x.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(_))}let ze=ue[Re];ze===void 0&&(ze=new En,ze.layers.enable(Re),ze.viewport=new zt,ue[Re]=ze),ze.matrix.fromArray(De.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(De.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Re===0&&(R.matrix.copy(ze.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),we===!0&&R.cameras.push(ze)}}for(let he=0;he<P.length;he++){const we=A[he],Re=P[he];we!==null&&Re!==void 0&&Re.update(we,ae,p||f)}X&&X(Y,ae),ae.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ae}),T=null}const W=new eg;W.setAnimationLoop(N),this.setAnimationLoop=function(Y){X=Y},this.dispose=function(){}}}function eE(o,e){function n(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Zm(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function a(y,_,P,A,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),v(y,_)):_.isMeshPhongMaterial?(c(y,_),m(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&S(y,_,D)):_.isMeshMatcapMaterial?(c(y,_),T(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),E(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&u(y,_)):_.isPointsMaterial?h(y,_,P,A):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,n(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Tn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,n(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Tn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,n(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,n(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const P=e.get(_).envMap;if(P&&(y.envMap.value=P,y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap){y.lightMap.value=_.lightMap;const A=o._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=_.lightMapIntensity*A,n(_.lightMap,y.lightMapTransform)}_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform))}function u(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function h(y,_,P,A){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*P,y.scale.value=A*.5,_.map&&(y.map.value=_.map,n(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,n(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,n(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,y.roughnessMapTransform)),e.get(_).envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,P){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Tn&&y.clearcoatNormalScale.value.negate())),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function E(y,_){const P=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function tE(o,e,n,r){let a={},c={},f=[];const u=n.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(P,A){const D=A.program;r.uniformBlockBinding(P,D)}function p(P,A){let D=a[P.id];D===void 0&&(T(P),D=m(P),a[P.id]=D,P.addEventListener("dispose",y));const V=A.program;r.updateUBOMapping(P,V);const O=e.render.frame;c[P.id]!==O&&(x(P),c[P.id]=O)}function m(P){const A=v();P.__bindingPointIndex=A;const D=o.createBuffer(),V=P.__size,O=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,V,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,A,D),D}function v(){for(let P=0;P<u;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const A=a[P.id],D=P.uniforms,V=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,A);for(let O=0,U=D.length;O<U;O++){const ue=Array.isArray(D[O])?D[O]:[D[O]];for(let R=0,L=ue.length;R<L;R++){const te=ue[R];if(S(te,O,R,V)===!0){const ce=te.__offset,pe=Array.isArray(te.value)?te.value:[te.value];let B=0;for(let Q=0;Q<pe.length;Q++){const ee=pe[Q],oe=E(ee);typeof ee=="number"||typeof ee=="boolean"?(te.__data[0]=ee,o.bufferSubData(o.UNIFORM_BUFFER,ce+B,te.__data)):ee.isMatrix3?(te.__data[0]=ee.elements[0],te.__data[1]=ee.elements[1],te.__data[2]=ee.elements[2],te.__data[3]=0,te.__data[4]=ee.elements[3],te.__data[5]=ee.elements[4],te.__data[6]=ee.elements[5],te.__data[7]=0,te.__data[8]=ee.elements[6],te.__data[9]=ee.elements[7],te.__data[10]=ee.elements[8],te.__data[11]=0):(ee.toArray(te.__data,B),B+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ce,te.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(P,A,D,V){const O=P.value,U=A+"_"+D;if(V[U]===void 0)return typeof O=="number"||typeof O=="boolean"?V[U]=O:V[U]=O.clone(),!0;{const ue=V[U];if(typeof O=="number"||typeof O=="boolean"){if(ue!==O)return V[U]=O,!0}else if(ue.equals(O)===!1)return ue.copy(O),!0}return!1}function T(P){const A=P.uniforms;let D=0;const V=16;for(let U=0,ue=A.length;U<ue;U++){const R=Array.isArray(A[U])?A[U]:[A[U]];for(let L=0,te=R.length;L<te;L++){const ce=R[L],pe=Array.isArray(ce.value)?ce.value:[ce.value];for(let B=0,Q=pe.length;B<Q;B++){const ee=pe[B],oe=E(ee),H=D%V;H!==0&&V-H<oe.boundary&&(D+=V-H),ce.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=D,D+=oe.storage}}}const O=D%V;return O>0&&(D+=V-O),P.__size=D,P.__cache={},this}function E(P){const A={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(A.boundary=4,A.storage=4):P.isVector2?(A.boundary=8,A.storage=8):P.isVector3||P.isColor?(A.boundary=16,A.storage=12):P.isVector4?(A.boundary=16,A.storage=16):P.isMatrix3?(A.boundary=48,A.storage=48):P.isMatrix4?(A.boundary=64,A.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),A}function y(P){const A=P.target;A.removeEventListener("dispose",y);const D=f.indexOf(A.__bindingPointIndex);f.splice(D,1),o.deleteBuffer(a[A.id]),delete a[A.id],delete c[A.id]}function _(){for(const P in a)o.deleteBuffer(a[P]);f=[],a={},c={}}return{bind:h,update:p,dispose:_}}class lg{constructor(e={}){const{canvas:n=Zv(),context:r=null,depth:a=!0,stencil:c=!0,alpha:f=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let x;r!==null?x=r.getContextAttributes().alpha:x=f;const S=new Uint32Array(4),T=new Int32Array(4);let E=null,y=null;const _=[],P=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this._useLegacyLights=!1,this.toneMapping=_r,this.toneMappingExposure=1;const A=this;let D=!1,V=0,O=0,U=null,ue=-1,R=null;const L=new zt,te=new zt;let ce=null;const pe=new yt(0);let B=0,Q=n.width,ee=n.height,oe=1,H=null,$=null;const X=new zt(0,0,Q,ee),N=new zt(0,0,Q,ee);let W=!1;const Y=new ff;let ae=!1,he=!1,we=null;const Re=new Kt,De=new ct,Ne=new j,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return U===null?oe:1}let ne=r;function Lt(C,K){for(let se=0;se<C.length;se++){const le=C[se],re=n.getContext(le,K);if(re!==null)return re}return null}try{const C={alpha:!0,depth:a,stencil:c,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${af}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",k,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),ne===null){const K=["webgl2","webgl","experimental-webgl"];if(A.isWebGL1Renderer===!0&&K.shift(),ne=Lt(K,C),ne===null)throw Lt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&ne instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),ne.getShaderPrecisionFormat===void 0&&(ne.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let fe,Ge,Ce,St,nt,b,w,Z,xe,ye,Me,Xe,Le,ke,$e,at,ge,Mt,ft,it,qe,Ue,F,Te;function je(){fe=new fS(ne),Ge=new sS(ne,fe,e),fe.init(Ge),Ue=new $M(ne,fe,Ge),Ce=new qM(ne,fe,Ge),St=new pS(ne),nt=new UM,b=new KM(ne,fe,Ce,nt,Ge,Ue,St),w=new aS(A),Z=new uS(A),xe=new M0(ne,Ge),F=new iS(ne,fe,xe,Ge),ye=new dS(ne,xe,St,F),Me=new vS(ne,ye,xe,St),ft=new _S(ne,Ge,b),at=new oS(nt),Xe=new NM(A,w,Z,fe,Ge,F,at),Le=new eE(A,nt),ke=new FM,$e=new GM(fe,Ge),Mt=new nS(A,w,Z,Ce,Me,x,h),ge=new YM(A,Me,Ge),Te=new tE(ne,St,Ge,Ce),it=new rS(ne,fe,St,Ge),qe=new hS(ne,fe,St,Ge),St.programs=Xe.programs,A.capabilities=Ge,A.extensions=fe,A.properties=nt,A.renderLists=ke,A.shadowMap=ge,A.state=Ce,A.info=St}je();const Oe=new JM(A,ne);this.xr=Oe,this.getContext=function(){return ne},this.getContextAttributes=function(){return ne.getContextAttributes()},this.forceContextLoss=function(){const C=fe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=fe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(C){C!==void 0&&(oe=C,this.setSize(Q,ee,!1))},this.getSize=function(C){return C.set(Q,ee)},this.setSize=function(C,K,se=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=C,ee=K,n.width=Math.floor(C*oe),n.height=Math.floor(K*oe),se===!0&&(n.style.width=C+"px",n.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(Q*oe,ee*oe).floor()},this.setDrawingBufferSize=function(C,K,se){Q=C,ee=K,oe=se,n.width=Math.floor(C*se),n.height=Math.floor(K*se),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(X)},this.setViewport=function(C,K,se,le){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,K,se,le),Ce.viewport(L.copy(X).multiplyScalar(oe).floor())},this.getScissor=function(C){return C.copy(N)},this.setScissor=function(C,K,se,le){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,K,se,le),Ce.scissor(te.copy(N).multiplyScalar(oe).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(C){Ce.setScissorTest(W=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){$=C},this.getClearColor=function(C){return C.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(C=!0,K=!0,se=!0){let le=0;if(C){let re=!1;if(U!==null){const Ie=U.texture.format;re=Ie===Om||Ie===Fm||Ie===Im}if(re){const Ie=U.texture.type,Ke=Ie===vr||Ie===pr||Ie===lf||Ie===Vr||Ie===Nm||Ie===Um,tt=Mt.getClearColor(),Be=Mt.getClearAlpha(),dt=tt.r,st=tt.g,lt=tt.b;Ke?(S[0]=dt,S[1]=st,S[2]=lt,S[3]=Be,ne.clearBufferuiv(ne.COLOR,0,S)):(T[0]=dt,T[1]=st,T[2]=lt,T[3]=Be,ne.clearBufferiv(ne.COLOR,0,T))}else le|=ne.COLOR_BUFFER_BIT}K&&(le|=ne.DEPTH_BUFFER_BIT),se&&(le|=ne.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",k,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),ke.dispose(),$e.dispose(),nt.dispose(),w.dispose(),Z.dispose(),Me.dispose(),F.dispose(),Te.dispose(),Xe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",It),Oe.removeEventListener("sessionend",_t),we&&(we.dispose(),we=null),Ft.stop()};function ve(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const C=St.autoReset,K=ge.enabled,se=ge.autoUpdate,le=ge.needsUpdate,re=ge.type;je(),St.autoReset=C,ge.enabled=K,ge.autoUpdate=se,ge.needsUpdate=le,ge.type=re}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Pe(C){const K=C.target;K.removeEventListener("dispose",Pe),et(K)}function et(C){Ze(C),nt.remove(C)}function Ze(C){const K=nt.get(C).programs;K!==void 0&&(K.forEach(function(se){Xe.releaseProgram(se)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,se,le,re,Ie){K===null&&(K=ze);const Ke=re.isMesh&&re.matrixWorld.determinant()<0,tt=Dl(C,K,se,le,re);Ce.setMaterial(le,Ke);let Be=se.index,dt=1;if(le.wireframe===!0){if(Be=ye.getWireframeAttribute(se),Be===void 0)return;dt=2}const st=se.drawRange,lt=se.attributes.position;let bt=st.start*dt,_n=(st.start+st.count)*dt;Ie!==null&&(bt=Math.max(bt,Ie.start*dt),_n=Math.min(_n,(Ie.start+Ie.count)*dt)),Be!==null?(bt=Math.max(bt,0),_n=Math.min(_n,Be.count)):lt!=null&&(bt=Math.max(bt,0),_n=Math.min(_n,lt.count));const Xt=_n-bt;if(Xt<0||Xt===1/0)return;F.setup(re,le,tt,se,Be);let wn,Et=it;if(Be!==null&&(wn=xe.get(Be),Et=qe,Et.setIndex(wn)),re.isMesh)le.wireframe===!0?(Ce.setLineWidth(le.wireframeLinewidth*ut()),Et.setMode(ne.LINES)):Et.setMode(ne.TRIANGLES);else if(re.isLine){let ht=le.linewidth;ht===void 0&&(ht=1),Ce.setLineWidth(ht*ut()),re.isLineSegments?Et.setMode(ne.LINES):re.isLineLoop?Et.setMode(ne.LINE_LOOP):Et.setMode(ne.LINE_STRIP)}else re.isPoints?Et.setMode(ne.POINTS):re.isSprite&&Et.setMode(ne.TRIANGLES);if(re.isBatchedMesh)Et.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)Et.renderInstances(bt,Xt,re.count);else if(se.isInstancedBufferGeometry){const ht=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,vn=Math.min(se.instanceCount,ht);Et.renderInstances(bt,Xt,vn)}else Et.render(bt,Xt)};function mt(C,K,se){C.transparent===!0&&C.side===Ii&&C.forceSinglePass===!1?(C.side=Tn,C.needsUpdate=!0,Bi(C,K,se),C.side=yr,C.needsUpdate=!0,Bi(C,K,se),C.side=Ii):Bi(C,K,se)}this.compile=function(C,K,se=null){se===null&&(se=C),y=$e.get(se),y.init(),P.push(y),se.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),C!==se&&C.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),y.setupLights(A._useLegacyLights);const le=new Set;return C.traverse(function(re){const Ie=re.material;if(Ie)if(Array.isArray(Ie))for(let Ke=0;Ke<Ie.length;Ke++){const tt=Ie[Ke];mt(tt,se,re),le.add(tt)}else mt(Ie,se,re),le.add(Ie)}),P.pop(),y=null,le},this.compileAsync=function(C,K,se=null){const le=this.compile(C,K,se);return new Promise(re=>{function Ie(){if(le.forEach(function(Ke){nt.get(Ke).currentProgram.isReady()&&le.delete(Ke)}),le.size===0){re(C);return}setTimeout(Ie,10)}fe.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let gt=null;function Ct(C){gt&&gt(C)}function It(){Ft.stop()}function _t(){Ft.start()}const Ft=new eg;Ft.setAnimationLoop(Ct),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(C){gt=C,Oe.setAnimationLoop(C),C===null?Ft.stop():Ft.start()},Oe.addEventListener("sessionstart",It),Oe.addEventListener("sessionend",_t),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(K),K=Oe.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,K,U),y=$e.get(C,P.length),y.init(),P.push(y),Re.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Y.setFromProjectionMatrix(Re),he=this.localClippingEnabled,ae=at.init(this.clippingPlanes,he),E=ke.get(C,_.length),E.init(),_.push(E),cn(C,K,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(H,$),this.info.render.frame++,ae===!0&&at.beginShadows();const se=y.state.shadowsArray;if(ge.render(se,C,K),ae===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),Mt.render(E,C),y.setupLights(A._useLegacyLights),K.isArrayCamera){const le=K.cameras;for(let re=0,Ie=le.length;re<Ie;re++){const Ke=le[re];Bo(E,C,Ke,Ke.viewport)}}else Bo(E,C,K);U!==null&&(b.updateMultisampleRenderTarget(U),b.updateRenderTargetMipmap(U)),C.isScene===!0&&C.onAfterRender(A,C,K),F.resetDefaultState(),ue=-1,R=null,P.pop(),P.length>0?y=P[P.length-1]:y=null,_.pop(),_.length>0?E=_[_.length-1]:E=null};function cn(C,K,se,le){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)se=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){le&&Ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Re);const Ke=Me.update(C),tt=C.material;tt.visible&&E.push(C,Ke,tt,se,Ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const Ke=Me.update(C),tt=C.material;if(le&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ne.copy(C.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),Ne.copy(Ke.boundingSphere.center)),Ne.applyMatrix4(C.matrixWorld).applyMatrix4(Re)),Array.isArray(tt)){const Be=Ke.groups;for(let dt=0,st=Be.length;dt<st;dt++){const lt=Be[dt],bt=tt[lt.materialIndex];bt&&bt.visible&&E.push(C,Ke,bt,se,Ne.z,lt)}}else tt.visible&&E.push(C,Ke,tt,se,Ne.z,null)}}const Ie=C.children;for(let Ke=0,tt=Ie.length;Ke<tt;Ke++)cn(Ie[Ke],K,se,le)}function Bo(C,K,se,le){const re=C.opaque,Ie=C.transmissive,Ke=C.transparent;y.setupLightsView(se),ae===!0&&at.setGlobalState(A.clippingPlanes,se),Ie.length>0&&Sr(re,Ie,K,se),le&&Ce.viewport(L.copy(le)),re.length>0&&_i(re,K,se),Ie.length>0&&_i(Ie,K,se),Ke.length>0&&_i(Ke,K,se),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Sr(C,K,se,le){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Ie=Ge.isWebGL2;we===null&&(we=new Xr(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Oo:vr,minFilter:Fo,samples:Ie?4:0})),A.getDrawingBufferSize(De),Ie?we.setSize(De.x,De.y):we.setSize(tf(De.x),tf(De.y));const Ke=A.getRenderTarget();A.setRenderTarget(we),A.getClearColor(pe),B=A.getClearAlpha(),B<1&&A.setClearColor(16777215,.5),A.clear();const tt=A.toneMapping;A.toneMapping=_r,_i(C,se,le),b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we);let Be=!1;for(let dt=0,st=K.length;dt<st;dt++){const lt=K[dt],bt=lt.object,_n=lt.geometry,Xt=lt.material,wn=lt.group;if(Xt.side===Ii&&bt.layers.test(le.layers)){const Et=Xt.side;Xt.side=Tn,Xt.needsUpdate=!0,Mr(bt,se,le,_n,Xt,wn),Xt.side=Et,Xt.needsUpdate=!0,Be=!0}}Be===!0&&(b.updateMultisampleRenderTarget(we),b.updateRenderTargetMipmap(we)),A.setRenderTarget(Ke),A.setClearColor(pe,B),A.toneMapping=tt}function _i(C,K,se){const le=K.isScene===!0?K.overrideMaterial:null;for(let re=0,Ie=C.length;re<Ie;re++){const Ke=C[re],tt=Ke.object,Be=Ke.geometry,dt=le===null?Ke.material:le,st=Ke.group;tt.layers.test(se.layers)&&Mr(tt,K,se,Be,dt,st)}}function Mr(C,K,se,le,re,Ie){C.onBeforeRender(A,K,se,le,re,Ie),C.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(A,K,se,le,C,Ie),re.transparent===!0&&re.side===Ii&&re.forceSinglePass===!1?(re.side=Tn,re.needsUpdate=!0,A.renderBufferDirect(se,K,le,re,C,Ie),re.side=yr,re.needsUpdate=!0,A.renderBufferDirect(se,K,le,re,C,Ie),re.side=Ii):A.renderBufferDirect(se,K,le,re,C,Ie),C.onAfterRender(A,K,se,le,re,Ie)}function Bi(C,K,se){K.isScene!==!0&&(K=ze);const le=nt.get(C),re=y.state.lights,Ie=y.state.shadowsArray,Ke=re.state.version,tt=Xe.getParameters(C,re.state,Ie,K,se),Be=Xe.getProgramCacheKey(tt);let dt=le.programs;le.environment=C.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(C.isMeshStandardMaterial?Z:w).get(C.envMap||le.environment),dt===void 0&&(C.addEventListener("dispose",Pe),dt=new Map,le.programs=dt);let st=dt.get(Be);if(st!==void 0){if(le.currentProgram===st&&le.lightsStateVersion===Ke)return Go(C,tt),st}else tt.uniforms=Xe.getUniforms(C),C.onBuild(se,tt,A),C.onBeforeCompile(tt,A),st=Xe.acquireProgram(tt,Be),dt.set(Be,st),le.uniforms=tt.uniforms;const lt=le.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(lt.clippingPlanes=at.uniform),Go(C,tt),le.needsLights=Vo(C),le.lightsStateVersion=Ke,le.needsLights&&(lt.ambientLightColor.value=re.state.ambient,lt.lightProbe.value=re.state.probe,lt.directionalLights.value=re.state.directional,lt.directionalLightShadows.value=re.state.directionalShadow,lt.spotLights.value=re.state.spot,lt.spotLightShadows.value=re.state.spotShadow,lt.rectAreaLights.value=re.state.rectArea,lt.ltc_1.value=re.state.rectAreaLTC1,lt.ltc_2.value=re.state.rectAreaLTC2,lt.pointLights.value=re.state.point,lt.pointLightShadows.value=re.state.pointShadow,lt.hemisphereLights.value=re.state.hemi,lt.directionalShadowMap.value=re.state.directionalShadowMap,lt.directionalShadowMatrix.value=re.state.directionalShadowMatrix,lt.spotShadowMap.value=re.state.spotShadowMap,lt.spotLightMatrix.value=re.state.spotLightMatrix,lt.spotLightMap.value=re.state.spotLightMap,lt.pointShadowMap.value=re.state.pointShadowMap,lt.pointShadowMatrix.value=re.state.pointShadowMatrix),le.currentProgram=st,le.uniformsList=null,st}function Ho(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=vl.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function Go(C,K){const se=nt.get(C);se.outputColorSpace=K.outputColorSpace,se.batching=K.batching,se.instancing=K.instancing,se.instancingColor=K.instancingColor,se.skinning=K.skinning,se.morphTargets=K.morphTargets,se.morphNormals=K.morphNormals,se.morphColors=K.morphColors,se.morphTargetsCount=K.morphTargetsCount,se.numClippingPlanes=K.numClippingPlanes,se.numIntersection=K.numClipIntersection,se.vertexAlphas=K.vertexAlphas,se.vertexTangents=K.vertexTangents,se.toneMapping=K.toneMapping}function Dl(C,K,se,le,re){K.isScene!==!0&&(K=ze),b.resetTextureUnits();const Ie=K.fog,Ke=le.isMeshStandardMaterial?K.environment:null,tt=U===null?A.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ki,Be=(le.isMeshStandardMaterial?Z:w).get(le.envMap||Ke),dt=le.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,st=!!se.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),lt=!!se.morphAttributes.position,bt=!!se.morphAttributes.normal,_n=!!se.morphAttributes.color;let Xt=_r;le.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Xt=A.toneMapping);const wn=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Et=wn!==void 0?wn.length:0,ht=nt.get(le),vn=y.state.lights;if(ae===!0&&(he===!0||C!==R)){const An=C===R&&le.id===ue;at.setState(le,C,An)}let Ot=!1;le.version===ht.__version?(ht.needsLights&&ht.lightsStateVersion!==vn.state.version||ht.outputColorSpace!==tt||re.isBatchedMesh&&ht.batching===!1||!re.isBatchedMesh&&ht.batching===!0||re.isInstancedMesh&&ht.instancing===!1||!re.isInstancedMesh&&ht.instancing===!0||re.isSkinnedMesh&&ht.skinning===!1||!re.isSkinnedMesh&&ht.skinning===!0||re.isInstancedMesh&&ht.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&ht.instancingColor===!1&&re.instanceColor!==null||ht.envMap!==Be||le.fog===!0&&ht.fog!==Ie||ht.numClippingPlanes!==void 0&&(ht.numClippingPlanes!==at.numPlanes||ht.numIntersection!==at.numIntersection)||ht.vertexAlphas!==dt||ht.vertexTangents!==st||ht.morphTargets!==lt||ht.morphNormals!==bt||ht.morphColors!==_n||ht.toneMapping!==Xt||Ge.isWebGL2===!0&&ht.morphTargetsCount!==Et)&&(Ot=!0):(Ot=!0,ht.__version=le.version);let xi=ht.currentProgram;Ot===!0&&(xi=Bi(le,K,re));let Wo=!1,fi=!1,Hi=!1;const Vt=xi.getUniforms(),Vn=ht.uniforms;if(Ce.useProgram(xi.program)&&(Wo=!0,fi=!0,Hi=!0),le.id!==ue&&(ue=le.id,fi=!0),Wo||R!==C){Vt.setValue(ne,"projectionMatrix",C.projectionMatrix),Vt.setValue(ne,"viewMatrix",C.matrixWorldInverse);const An=Vt.map.cameraPosition;An!==void 0&&An.setValue(ne,Ne.setFromMatrixPosition(C.matrixWorld)),Ge.logarithmicDepthBuffer&&Vt.setValue(ne,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Vt.setValue(ne,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,fi=!0,Hi=!0)}if(re.isSkinnedMesh){Vt.setOptional(ne,re,"bindMatrix"),Vt.setOptional(ne,re,"bindMatrixInverse");const An=re.skeleton;An&&(Ge.floatVertexTextures?(An.boneTexture===null&&An.computeBoneTexture(),Vt.setValue(ne,"boneTexture",An.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}re.isBatchedMesh&&(Vt.setOptional(ne,re,"batchingTexture"),Vt.setValue(ne,"batchingTexture",re._matricesTexture,b));const Ys=se.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0&&Ge.isWebGL2===!0)&&ft.update(re,se,xi),(fi||ht.receiveShadow!==re.receiveShadow)&&(ht.receiveShadow=re.receiveShadow,Vt.setValue(ne,"receiveShadow",re.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(Vn.envMap.value=Be,Vn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),fi&&(Vt.setValue(ne,"toneMappingExposure",A.toneMappingExposure),ht.needsLights&&vi(Vn,Hi),Ie&&le.fog===!0&&Le.refreshFogUniforms(Vn,Ie),Le.refreshMaterialUniforms(Vn,le,oe,ee,we),vl.upload(ne,Ho(ht),Vn,b)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(vl.upload(ne,Ho(ht),Vn,b),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Vt.setValue(ne,"center",re.center),Vt.setValue(ne,"modelViewMatrix",re.modelViewMatrix),Vt.setValue(ne,"normalMatrix",re.normalMatrix),Vt.setValue(ne,"modelMatrix",re.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const An=le.uniformsGroups;for(let Er=0,Xo=An.length;Er<Xo;Er++)if(Ge.isWebGL2){const Kr=An[Er];Te.update(Kr,xi),Te.bind(Kr,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function vi(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Vo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(C,K,se){nt.get(C.texture).__webglTexture=K,nt.get(C.depthTexture).__webglTexture=se;const le=nt.get(C);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=se===void 0,le.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,K){const se=nt.get(C);se.__webglFramebuffer=K,se.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,se=0){U=C,V=K,O=se;let le=!0,re=null,Ie=!1,Ke=!1;if(C){const Be=nt.get(C);Be.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(ne.FRAMEBUFFER,null),le=!1):Be.__webglFramebuffer===void 0?b.setupRenderTarget(C):Be.__hasExternalTextures&&b.rebindTextures(C,nt.get(C.texture).__webglTexture,nt.get(C.depthTexture).__webglTexture);const dt=C.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Ke=!0);const st=nt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(st[K])?re=st[K][se]:re=st[K],Ie=!0):Ge.isWebGL2&&C.samples>0&&b.useMultisampledRTT(C)===!1?re=nt.get(C).__webglMultisampledFramebuffer:Array.isArray(st)?re=st[se]:re=st,L.copy(C.viewport),te.copy(C.scissor),ce=C.scissorTest}else L.copy(X).multiplyScalar(oe).floor(),te.copy(N).multiplyScalar(oe).floor(),ce=W;if(Ce.bindFramebuffer(ne.FRAMEBUFFER,re)&&Ge.drawBuffers&&le&&Ce.drawBuffers(C,re),Ce.viewport(L),Ce.scissor(te),Ce.setScissorTest(ce),Ie){const Be=nt.get(C.texture);ne.framebufferTexture2D(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,ne.TEXTURE_CUBE_MAP_POSITIVE_X+K,Be.__webglTexture,se)}else if(Ke){const Be=nt.get(C.texture),dt=K||0;ne.framebufferTextureLayer(ne.FRAMEBUFFER,ne.COLOR_ATTACHMENT0,Be.__webglTexture,se||0,dt)}ue=-1},this.readRenderTargetPixels=function(C,K,se,le,re,Ie,Ke){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ke!==void 0&&(tt=tt[Ke]),tt){Ce.bindFramebuffer(ne.FRAMEBUFFER,tt);try{const Be=C.texture,dt=Be.format,st=Be.type;if(dt!==ui&&Ue.convert(dt)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const lt=st===Oo&&(fe.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&fe.has("EXT_color_buffer_float"));if(st!==vr&&Ue.convert(st)!==ne.getParameter(ne.IMPLEMENTATION_COLOR_READ_TYPE)&&!(st===mr&&(Ge.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-le&&se>=0&&se<=C.height-re&&ne.readPixels(K,se,le,re,Ue.convert(dt),Ue.convert(st),Ie)}finally{const Be=U!==null?nt.get(U).__webglFramebuffer:null;Ce.bindFramebuffer(ne.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(C,K,se=0){const le=Math.pow(2,-se),re=Math.floor(K.image.width*le),Ie=Math.floor(K.image.height*le);b.setTexture2D(K,0),ne.copyTexSubImage2D(ne.TEXTURE_2D,se,0,0,C.x,C.y,re,Ie),Ce.unbindTexture()},this.copyTextureToTexture=function(C,K,se,le=0){const re=K.image.width,Ie=K.image.height,Ke=Ue.convert(se.format),tt=Ue.convert(se.type);b.setTexture2D(se,0),ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,se.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,se.unpackAlignment),K.isDataTexture?ne.texSubImage2D(ne.TEXTURE_2D,le,C.x,C.y,re,Ie,Ke,tt,K.image.data):K.isCompressedTexture?ne.compressedTexSubImage2D(ne.TEXTURE_2D,le,C.x,C.y,K.mipmaps[0].width,K.mipmaps[0].height,Ke,K.mipmaps[0].data):ne.texSubImage2D(ne.TEXTURE_2D,le,C.x,C.y,Ke,tt,K.image),le===0&&se.generateMipmaps&&ne.generateMipmap(ne.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(C,K,se,le,re=0){if(A.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ie=C.max.x-C.min.x+1,Ke=C.max.y-C.min.y+1,tt=C.max.z-C.min.z+1,Be=Ue.convert(le.format),dt=Ue.convert(le.type);let st;if(le.isData3DTexture)b.setTexture3D(le,0),st=ne.TEXTURE_3D;else if(le.isDataArrayTexture||le.isCompressedArrayTexture)b.setTexture2DArray(le,0),st=ne.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}ne.pixelStorei(ne.UNPACK_FLIP_Y_WEBGL,le.flipY),ne.pixelStorei(ne.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),ne.pixelStorei(ne.UNPACK_ALIGNMENT,le.unpackAlignment);const lt=ne.getParameter(ne.UNPACK_ROW_LENGTH),bt=ne.getParameter(ne.UNPACK_IMAGE_HEIGHT),_n=ne.getParameter(ne.UNPACK_SKIP_PIXELS),Xt=ne.getParameter(ne.UNPACK_SKIP_ROWS),wn=ne.getParameter(ne.UNPACK_SKIP_IMAGES),Et=se.isCompressedTexture?se.mipmaps[re]:se.image;ne.pixelStorei(ne.UNPACK_ROW_LENGTH,Et.width),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,Et.height),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,C.min.x),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,C.min.y),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,C.min.z),se.isDataTexture||se.isData3DTexture?ne.texSubImage3D(st,re,K.x,K.y,K.z,Ie,Ke,tt,Be,dt,Et.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),ne.compressedTexSubImage3D(st,re,K.x,K.y,K.z,Ie,Ke,tt,Be,Et.data)):ne.texSubImage3D(st,re,K.x,K.y,K.z,Ie,Ke,tt,Be,dt,Et),ne.pixelStorei(ne.UNPACK_ROW_LENGTH,lt),ne.pixelStorei(ne.UNPACK_IMAGE_HEIGHT,bt),ne.pixelStorei(ne.UNPACK_SKIP_PIXELS,_n),ne.pixelStorei(ne.UNPACK_SKIP_ROWS,Xt),ne.pixelStorei(ne.UNPACK_SKIP_IMAGES,wn),re===0&&le.generateMipmaps&&ne.generateMipmap(st),Ce.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?b.setTextureCube(C,0):C.isData3DTexture?b.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?b.setTexture2DArray(C,0):b.setTexture2D(C,0),Ce.unbindTexture()},this.resetState=function(){V=0,O=0,U=null,Ce.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===cf?"display-p3":"srgb",n.unpackColorSpace=Rt.workingColorSpace===Rl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ln?xr:zm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===xr?ln:ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nE extends lg{}nE.prototype.isWebGL1Renderer=!0;class cg extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class sf extends zo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bm,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iE extends sf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}const hm={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class rE{constructor(e,n,r){const a=this;let c=!1,f=0,u=0,h;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(m){u++,c===!1&&a.onStart!==void 0&&a.onStart(m,f,u),c=!0},this.itemEnd=function(m){f++,a.onProgress!==void 0&&a.onProgress(m,f,u),f===u&&(c=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,v){return p.push(m,v),this},this.removeHandler=function(m){const v=p.indexOf(m);return v!==-1&&p.splice(v,2),this},this.getHandler=function(m){for(let v=0,x=p.length;v<x;v+=2){const S=p[v],T=p[v+1];if(S.global&&(S.lastIndex=0),S.test(m))return T}return null}}}const sE=new rE;class pf{constructor(e){this.manager=e!==void 0?e:sE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,c){r.load(e,a,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class oE extends Error{constructor(e,n){super(e),this.response=n}}class aE extends pf{constructor(e){super(e)}load(e,n,r,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=hm.get(e);if(c!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(c),this.manager.itemEnd(e)},0),c;if(Ni[e]!==void 0){Ni[e].push({onLoad:n,onProgress:r,onError:a});return}Ni[e]=[],Ni[e].push({onLoad:n,onProgress:r,onError:a});const f=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,h=this.responseType;fetch(f).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const m=Ni[e],v=p.body.getReader(),x=p.headers.get("Content-Length")||p.headers.get("X-File-Size"),S=x?parseInt(x):0,T=S!==0;let E=0;const y=new ReadableStream({start(_){P();function P(){v.read().then(({done:A,value:D})=>{if(A)_.close();else{E+=D.byteLength;const V=new ProgressEvent("progress",{lengthComputable:T,loaded:E,total:S});for(let O=0,U=m.length;O<U;O++){const ue=m[O];ue.onProgress&&ue.onProgress(V)}_.enqueue(D),P()}})}}});return new Response(y)}else throw new oE(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(h){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return p.json();default:if(u===void 0)return p.text();{const v=/charset="?([^;"\s]*)"?/i.exec(u),x=v&&v[1]?v[1].toLowerCase():void 0,S=new TextDecoder(x);return p.arrayBuffer().then(T=>S.decode(T))}}}).then(p=>{hm.add(e,p);const m=Ni[e];delete Ni[e];for(let v=0,x=m.length;v<x;v++){const S=m[v];S.onLoad&&S.onLoad(p)}}).catch(p=>{const m=Ni[e];if(m===void 0)throw this.manager.itemError(e),p;delete Ni[e];for(let v=0,x=m.length;v<x;v++){const S=m[v];S.onError&&S.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ll extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class lE extends Ll{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Xu=new Kt,pm=new j,mm=new j;class mf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ff,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(mm),n.updateMatrixWorld(),Xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class cE extends mf{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,r=Tl*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,c=e.distance||n.far;(r!==n.fov||a!==n.aspect||c!==n.far)&&(n.fov=r,n.aspect=a,n.far=c,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class uE extends Ll{constructor(e,n,r=0,a=Math.PI/3,c=0,f=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.distance=r,this.angle=a,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new cE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gm=new Kt,No=new j,ju=new j;class fE extends mf{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new zt(2,1,1,1),new zt(0,1,1,1),new zt(3,1,1,1),new zt(1,1,1,1),new zt(3,0,1,1),new zt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,n=0){const r=this.camera,a=this.matrix,c=e.distance||r.far;c!==r.far&&(r.far=c,r.updateProjectionMatrix()),No.setFromMatrixPosition(e.matrixWorld),r.position.copy(No),ju.copy(r.position),ju.add(this._cubeDirections[n]),r.up.copy(this._cubeUps[n]),r.lookAt(ju),r.updateMatrixWorld(),a.makeTranslation(-No.x,-No.y,-No.z),gm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gm)}}class dE extends Ll{constructor(e,n,r=0,a=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new fE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hE extends mf{constructor(){super(new tg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _m extends Ll{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new hE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class vm{constructor(e=1,n=0,r=0){return this.radius=e,this.phi=n,this.theta=r,this}set(e,n,r){return this.radius=e,this.phi=n,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,r){return this.radius=Math.sqrt(e*e+n*n+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(gn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:af}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=af);class pE extends pf{constructor(e){super(e)}load(e,n,r,a){const c=this,f=new aE(this.manager);f.setPath(this.path),f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setWithCredentials(this.withCredentials),f.load(e,function(u){try{n(c.parse(u))}catch(h){a?a(h):console.error(h),c.manager.itemError(e)}},r,a)}parse(e){function n(p){const m=new DataView(p),v=32/8*3+32/8*3*3+16/8,x=m.getUint32(80,!0);if(80+32/8+x*v===m.byteLength)return!0;const T=[115,111,108,105,100];for(let E=0;E<5;E++)if(r(T,m,E))return!1;return!0}function r(p,m,v){for(let x=0,S=p.length;x<S;x++)if(p[x]!==m.getUint8(v+x))return!1;return!0}function a(p){const m=new DataView(p),v=m.getUint32(80,!0);let x,S,T,E=!1,y,_,P,A,D;for(let te=0;te<70;te++)m.getUint32(te,!1)==1129270351&&m.getUint8(te+4)==82&&m.getUint8(te+5)==61&&(E=!0,y=new Float32Array(v*3*3),_=m.getUint8(te+6)/255,P=m.getUint8(te+7)/255,A=m.getUint8(te+8)/255,D=m.getUint8(te+9)/255);const V=84,O=50,U=new zi,ue=new Float32Array(v*3*3),R=new Float32Array(v*3*3),L=new yt;for(let te=0;te<v;te++){const ce=V+te*O,pe=m.getFloat32(ce,!0),B=m.getFloat32(ce+4,!0),Q=m.getFloat32(ce+8,!0);if(E){const ee=m.getUint16(ce+48,!0);(ee&32768)===0?(x=(ee&31)/31,S=(ee>>5&31)/31,T=(ee>>10&31)/31):(x=_,S=P,T=A)}for(let ee=1;ee<=3;ee++){const oe=ce+ee*12,H=te*3*3+(ee-1)*3;ue[H]=m.getFloat32(oe,!0),ue[H+1]=m.getFloat32(oe+4,!0),ue[H+2]=m.getFloat32(oe+8,!0),R[H]=pe,R[H+1]=B,R[H+2]=Q,E&&(L.set(x,S,T).convertSRGBToLinear(),y[H]=L.r,y[H+1]=L.g,y[H+2]=L.b)}}return U.setAttribute("position",new In(ue,3)),U.setAttribute("normal",new In(R,3)),E&&(U.setAttribute("color",new In(y,3)),U.hasColors=!0,U.alpha=D),U}function c(p){const m=new zi,v=/solid([\s\S]*?)endsolid/g,x=/facet([\s\S]*?)endfacet/g,S=/solid\s(.+)/;let T=0;const E=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+E+E+E,"g"),_=new RegExp("normal"+E+E+E,"g"),P=[],A=[],D=[],V=new j;let O,U=0,ue=0,R=0;for(;(O=v.exec(p))!==null;){ue=R;const L=O[0],te=(O=S.exec(L))!==null?O[1]:"";for(D.push(te);(O=x.exec(L))!==null;){let B=0,Q=0;const ee=O[0];for(;(O=_.exec(ee))!==null;)V.x=parseFloat(O[1]),V.y=parseFloat(O[2]),V.z=parseFloat(O[3]),Q++;for(;(O=y.exec(ee))!==null;)P.push(parseFloat(O[1]),parseFloat(O[2]),parseFloat(O[3])),A.push(V.x,V.y,V.z),B++,R++;Q!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+T),B!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+T),T++}const ce=ue,pe=R-ue;m.userData.groupNames=D,m.addGroup(ce,pe,U),U++}return m.setAttribute("position",new Oi(P,3)),m.setAttribute("normal",new Oi(A,3)),m}function f(p){return typeof p!="string"?new TextDecoder().decode(p):p}function u(p){if(typeof p=="string"){const m=new Uint8Array(p.length);for(let v=0;v<p.length;v++)m[v]=p.charCodeAt(v)&255;return m.buffer||m}else return p}const h=u(e);return n(h)?a(h):c(f(e))}}const xm={type:"change"},Yu={type:"start"},ym={type:"end"},ml=new jm,Sm=new hr,mE=Math.cos(70*$v.DEG2RAD);class Mm extends qr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dr.ROTATE,MIDDLE:dr.DOLLY,RIGHT:dr.PAN},this.touches={ONE:vs.ROTATE,TWO:vs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",$e),this._domElementKeyEvents=F},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",$e),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(xm),r.update(),c=a.NONE},this.update=(function(){const F=new j,Te=new jr().setFromUnitVectors(e.up,new j(0,1,0)),je=Te.clone().invert(),Oe=new j,ve=new jr,k=new j,Ee=2*Math.PI;return function(et=null){const Ze=r.object.position;F.copy(Ze).sub(r.target),F.applyQuaternion(Te),u.setFromVector3(F),r.autoRotate&&c===a.NONE&&ce(L(et)),r.enableDamping?(u.theta+=h.theta*r.dampingFactor,u.phi+=h.phi*r.dampingFactor):(u.theta+=h.theta,u.phi+=h.phi);let mt=r.minAzimuthAngle,gt=r.maxAzimuthAngle;isFinite(mt)&&isFinite(gt)&&(mt<-Math.PI?mt+=Ee:mt>Math.PI&&(mt-=Ee),gt<-Math.PI?gt+=Ee:gt>Math.PI&&(gt-=Ee),mt<=gt?u.theta=Math.max(mt,Math.min(gt,u.theta)):u.theta=u.theta>(mt+gt)/2?Math.max(mt,u.theta):Math.min(gt,u.theta)),u.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,u.phi)),u.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(m,r.dampingFactor):r.target.add(m),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&O||r.object.isOrthographicCamera?u.radius=X(u.radius):u.radius=X(u.radius*p),F.setFromSpherical(u),F.applyQuaternion(je),Ze.copy(r.target).add(F),r.object.lookAt(r.target),r.enableDamping===!0?(h.theta*=1-r.dampingFactor,h.phi*=1-r.dampingFactor,m.multiplyScalar(1-r.dampingFactor)):(h.set(0,0,0),m.set(0,0,0));let Ct=!1;if(r.zoomToCursor&&O){let It=null;if(r.object.isPerspectiveCamera){const _t=F.length();It=X(_t*p);const Ft=_t-It;r.object.position.addScaledVector(D,Ft),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const _t=new j(V.x,V.y,0);_t.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/p)),r.object.updateProjectionMatrix(),Ct=!0;const Ft=new j(V.x,V.y,0);Ft.unproject(r.object),r.object.position.sub(Ft).add(_t),r.object.updateMatrixWorld(),It=F.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;It!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(It).add(r.object.position):(ml.origin.copy(r.object.position),ml.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(ml.direction))<mE?e.lookAt(r.target):(Sm.setFromNormalAndCoplanarPoint(r.object.up,r.target),ml.intersectPlane(Sm,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/p)),r.object.updateProjectionMatrix(),Ct=!0);return p=1,O=!1,Ct||Oe.distanceToSquared(r.object.position)>f||8*(1-ve.dot(r.object.quaternion))>f||k.distanceToSquared(r.target)>0?(r.dispatchEvent(xm),Oe.copy(r.object.position),ve.copy(r.object.quaternion),k.copy(r.target),!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",Mt),r.domElement.removeEventListener("pointerdown",b),r.domElement.removeEventListener("pointercancel",Z),r.domElement.removeEventListener("wheel",Me),r.domElement.removeEventListener("pointermove",w),r.domElement.removeEventListener("pointerup",Z),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",$e),r._domElementKeyEvents=null)};const r=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=a.NONE;const f=1e-6,u=new vm,h=new vm;let p=1;const m=new j,v=new ct,x=new ct,S=new ct,T=new ct,E=new ct,y=new ct,_=new ct,P=new ct,A=new ct,D=new j,V=new ct;let O=!1;const U=[],ue={};let R=!1;function L(F){return F!==null?2*Math.PI/60*r.autoRotateSpeed*F:2*Math.PI/60/60*r.autoRotateSpeed}function te(F){const Te=Math.abs(F*.01);return Math.pow(.95,r.zoomSpeed*Te)}function ce(F){h.theta-=F}function pe(F){h.phi-=F}const B=(function(){const F=new j;return function(je,Oe){F.setFromMatrixColumn(Oe,0),F.multiplyScalar(-je),m.add(F)}})(),Q=(function(){const F=new j;return function(je,Oe){r.screenSpacePanning===!0?F.setFromMatrixColumn(Oe,1):(F.setFromMatrixColumn(Oe,0),F.crossVectors(r.object.up,F)),F.multiplyScalar(je),m.add(F)}})(),ee=(function(){const F=new j;return function(je,Oe){const ve=r.domElement;if(r.object.isPerspectiveCamera){const k=r.object.position;F.copy(k).sub(r.target);let Ee=F.length();Ee*=Math.tan(r.object.fov/2*Math.PI/180),B(2*je*Ee/ve.clientHeight,r.object.matrix),Q(2*Oe*Ee/ve.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(B(je*(r.object.right-r.object.left)/r.object.zoom/ve.clientWidth,r.object.matrix),Q(Oe*(r.object.top-r.object.bottom)/r.object.zoom/ve.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function oe(F){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?p/=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function H(F){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?p*=F:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function $(F,Te){if(!r.zoomToCursor)return;O=!0;const je=r.domElement.getBoundingClientRect(),Oe=F-je.left,ve=Te-je.top,k=je.width,Ee=je.height;V.x=Oe/k*2-1,V.y=-(ve/Ee)*2+1,D.set(V.x,V.y,1).unproject(r.object).sub(r.object.position).normalize()}function X(F){return Math.max(r.minDistance,Math.min(r.maxDistance,F))}function N(F){v.set(F.clientX,F.clientY)}function W(F){$(F.clientX,F.clientX),_.set(F.clientX,F.clientY)}function Y(F){T.set(F.clientX,F.clientY)}function ae(F){x.set(F.clientX,F.clientY),S.subVectors(x,v).multiplyScalar(r.rotateSpeed);const Te=r.domElement;ce(2*Math.PI*S.x/Te.clientHeight),pe(2*Math.PI*S.y/Te.clientHeight),v.copy(x),r.update()}function he(F){P.set(F.clientX,F.clientY),A.subVectors(P,_),A.y>0?oe(te(A.y)):A.y<0&&H(te(A.y)),_.copy(P),r.update()}function we(F){E.set(F.clientX,F.clientY),y.subVectors(E,T).multiplyScalar(r.panSpeed),ee(y.x,y.y),T.copy(E),r.update()}function Re(F){$(F.clientX,F.clientY),F.deltaY<0?H(te(F.deltaY)):F.deltaY>0&&oe(te(F.deltaY)),r.update()}function De(F){let Te=!1;switch(F.code){case r.keys.UP:F.ctrlKey||F.metaKey||F.shiftKey?pe(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ee(0,r.keyPanSpeed),Te=!0;break;case r.keys.BOTTOM:F.ctrlKey||F.metaKey||F.shiftKey?pe(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ee(0,-r.keyPanSpeed),Te=!0;break;case r.keys.LEFT:F.ctrlKey||F.metaKey||F.shiftKey?ce(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ee(r.keyPanSpeed,0),Te=!0;break;case r.keys.RIGHT:F.ctrlKey||F.metaKey||F.shiftKey?ce(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ee(-r.keyPanSpeed,0),Te=!0;break}Te&&(F.preventDefault(),r.update())}function Ne(F){if(U.length===1)v.set(F.pageX,F.pageY);else{const Te=Ue(F),je=.5*(F.pageX+Te.x),Oe=.5*(F.pageY+Te.y);v.set(je,Oe)}}function ze(F){if(U.length===1)T.set(F.pageX,F.pageY);else{const Te=Ue(F),je=.5*(F.pageX+Te.x),Oe=.5*(F.pageY+Te.y);T.set(je,Oe)}}function ut(F){const Te=Ue(F),je=F.pageX-Te.x,Oe=F.pageY-Te.y,ve=Math.sqrt(je*je+Oe*Oe);_.set(0,ve)}function ne(F){r.enableZoom&&ut(F),r.enablePan&&ze(F)}function Lt(F){r.enableZoom&&ut(F),r.enableRotate&&Ne(F)}function fe(F){if(U.length==1)x.set(F.pageX,F.pageY);else{const je=Ue(F),Oe=.5*(F.pageX+je.x),ve=.5*(F.pageY+je.y);x.set(Oe,ve)}S.subVectors(x,v).multiplyScalar(r.rotateSpeed);const Te=r.domElement;ce(2*Math.PI*S.x/Te.clientHeight),pe(2*Math.PI*S.y/Te.clientHeight),v.copy(x)}function Ge(F){if(U.length===1)E.set(F.pageX,F.pageY);else{const Te=Ue(F),je=.5*(F.pageX+Te.x),Oe=.5*(F.pageY+Te.y);E.set(je,Oe)}y.subVectors(E,T).multiplyScalar(r.panSpeed),ee(y.x,y.y),T.copy(E)}function Ce(F){const Te=Ue(F),je=F.pageX-Te.x,Oe=F.pageY-Te.y,ve=Math.sqrt(je*je+Oe*Oe);P.set(0,ve),A.set(0,Math.pow(P.y/_.y,r.zoomSpeed)),oe(A.y),_.copy(P);const k=(F.pageX+Te.x)*.5,Ee=(F.pageY+Te.y)*.5;$(k,Ee)}function St(F){r.enableZoom&&Ce(F),r.enablePan&&Ge(F)}function nt(F){r.enableZoom&&Ce(F),r.enableRotate&&fe(F)}function b(F){r.enabled!==!1&&(U.length===0&&(r.domElement.setPointerCapture(F.pointerId),r.domElement.addEventListener("pointermove",w),r.domElement.addEventListener("pointerup",Z)),ft(F),F.pointerType==="touch"?at(F):xe(F))}function w(F){r.enabled!==!1&&(F.pointerType==="touch"?ge(F):ye(F))}function Z(F){it(F),U.length===0&&(r.domElement.releasePointerCapture(F.pointerId),r.domElement.removeEventListener("pointermove",w),r.domElement.removeEventListener("pointerup",Z)),r.dispatchEvent(ym),c=a.NONE}function xe(F){let Te;switch(F.button){case 0:Te=r.mouseButtons.LEFT;break;case 1:Te=r.mouseButtons.MIDDLE;break;case 2:Te=r.mouseButtons.RIGHT;break;default:Te=-1}switch(Te){case dr.DOLLY:if(r.enableZoom===!1)return;W(F),c=a.DOLLY;break;case dr.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(r.enablePan===!1)return;Y(F),c=a.PAN}else{if(r.enableRotate===!1)return;N(F),c=a.ROTATE}break;case dr.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(r.enableRotate===!1)return;N(F),c=a.ROTATE}else{if(r.enablePan===!1)return;Y(F),c=a.PAN}break;default:c=a.NONE}c!==a.NONE&&r.dispatchEvent(Yu)}function ye(F){switch(c){case a.ROTATE:if(r.enableRotate===!1)return;ae(F);break;case a.DOLLY:if(r.enableZoom===!1)return;he(F);break;case a.PAN:if(r.enablePan===!1)return;we(F);break}}function Me(F){r.enabled===!1||r.enableZoom===!1||c!==a.NONE||(F.preventDefault(),r.dispatchEvent(Yu),Re(Xe(F)),r.dispatchEvent(ym))}function Xe(F){const Te=F.deltaMode,je={clientX:F.clientX,clientY:F.clientY,deltaY:F.deltaY};switch(Te){case 1:je.deltaY*=16;break;case 2:je.deltaY*=100;break}return F.ctrlKey&&!R&&(je.deltaY*=10),je}function Le(F){F.key==="Control"&&(R=!0,document.addEventListener("keyup",ke,{passive:!0,capture:!0}))}function ke(F){F.key==="Control"&&(R=!1,document.removeEventListener("keyup",ke,{passive:!0,capture:!0}))}function $e(F){r.enabled===!1||r.enablePan===!1||De(F)}function at(F){switch(qe(F),U.length){case 1:switch(r.touches.ONE){case vs.ROTATE:if(r.enableRotate===!1)return;Ne(F),c=a.TOUCH_ROTATE;break;case vs.PAN:if(r.enablePan===!1)return;ze(F),c=a.TOUCH_PAN;break;default:c=a.NONE}break;case 2:switch(r.touches.TWO){case vs.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ne(F),c=a.TOUCH_DOLLY_PAN;break;case vs.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Lt(F),c=a.TOUCH_DOLLY_ROTATE;break;default:c=a.NONE}break;default:c=a.NONE}c!==a.NONE&&r.dispatchEvent(Yu)}function ge(F){switch(qe(F),c){case a.TOUCH_ROTATE:if(r.enableRotate===!1)return;fe(F),r.update();break;case a.TOUCH_PAN:if(r.enablePan===!1)return;Ge(F),r.update();break;case a.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;St(F),r.update();break;case a.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;nt(F),r.update();break;default:c=a.NONE}}function Mt(F){r.enabled!==!1&&F.preventDefault()}function ft(F){U.push(F.pointerId)}function it(F){delete ue[F.pointerId];for(let Te=0;Te<U.length;Te++)if(U[Te]==F.pointerId){U.splice(Te,1);return}}function qe(F){let Te=ue[F.pointerId];Te===void 0&&(Te=new ct,ue[F.pointerId]=Te),Te.set(F.pageX,F.pageY)}function Ue(F){const Te=F.pointerId===U[0]?U[1]:U[0];return ue[Te]}r.domElement.addEventListener("contextmenu",Mt),r.domElement.addEventListener("pointerdown",b),r.domElement.addEventListener("pointercancel",Z),r.domElement.addEventListener("wheel",Me,{passive:!1}),document.addEventListener("keydown",Le,{passive:!0,capture:!0}),this.update()}}class gE extends cg{constructor(e=null){super();const n=new Xs;n.deleteAttribute("uv");const r=new sf({side:Tn}),a=new sf;let c=5;e!==null&&e._useLegacyLights===!1&&(c=900);const f=new dE(16777215,c,28,2);f.position.set(.418,16.199,.3),this.add(f);const u=new Gt(n,r);u.position.set(-.757,13.219,.717),u.scale.set(31.713,28.305,28.591),this.add(u);const h=new Gt(n,a);h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),this.add(h);const p=new Gt(n,a);p.position.set(-5.607,-.754,-.758),p.rotation.set(0,.994,0),p.scale.set(1.97,1.534,3.955),this.add(p);const m=new Gt(n,a);m.position.set(6.167,.857,7.803),m.rotation.set(0,.561,0),m.scale.set(3.927,6.285,3.687),this.add(m);const v=new Gt(n,a);v.position.set(-2.017,.018,6.124),v.rotation.set(0,.333,0),v.scale.set(2.002,4.566,2.064),this.add(v);const x=new Gt(n,a);x.position.set(2.291,-.756,-2.621),x.rotation.set(0,-.286,0),x.scale.set(1.546,1.552,1.496),this.add(x);const S=new Gt(n,a);S.position.set(-2.193,-.369,-5.547),S.rotation.set(0,.516,0),S.scale.set(3.875,3.487,2.986),this.add(S);const T=new Gt(n,Is(50));T.position.set(-16.116,14.37,8.208),T.scale.set(.1,2.428,2.739),this.add(T);const E=new Gt(n,Is(50));E.position.set(-16.109,18.021,-8.207),E.scale.set(.1,2.425,2.751),this.add(E);const y=new Gt(n,Is(17));y.position.set(14.904,12.198,-1.832),y.scale.set(.15,4.265,6.331),this.add(y);const _=new Gt(n,Is(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const P=new Gt(n,Is(20));P.position.set(3.235,11.486,-12.541),P.scale.set(2.5,2,.1),this.add(P);const A=new Gt(n,Is(100));A.position.set(0,20,0),A.scale.set(1,.1,1),this.add(A)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Is(o){const e=new bl;return e.color.setScalar(o),e}function _E(o){const e=atob(o),n=e.length,r=new Uint8Array(n);for(let a=0;a<n;a++)r[a]=e.charCodeAt(a);return r.buffer}function Em(o){const e=new lg({canvas:o,antialias:!0,alpha:!0});return e.setPixelRatio(window.devicePixelRatio||1),e.outputEncoding=xr,e.toneMapping=Pm,e.toneMappingExposure=1.1,e.shadowMap.enabled=!0,e.shadowMap.type=Cm,e.physicallyCorrectLights=!0,e}function vE(o){const e=new nf(o);e.compileEquirectangularShader();const n=new gE(o),r=e.fromScene(n),a=r.texture;return r.dispose(),n.dispose(),e.dispose(),a}function Tm(o){const e=new cg;e.background=new yt(16119803),o&&(e.environment=o);const n=new lE(16777215,1777455,.55),r=new _m(16777215,1.1);r.position.set(8,12,10),r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.bias=-1e-4;const a=new _m(14214655,.6);a.position.set(-6,6,-5);const c=new uE(16773845,.5,0,Math.PI/5,.4);return c.position.set(0,5,-9),c.target.position.set(0,0,0),c.castShadow=!0,e.add(n,r,a,c,c.target),e}function xE({previewCanvas:o,modalCanvas:e,orientationLabel:n,orientationOverlay:r,hintOverlay:a,onError:c}){const f={geometry:null,boundingRadius:20,loopHandle:null,environmentMap:null,autorotate:!0,autorotateSpeed:.002,autorotateTimeout:null,orientationTimeout:null,hintTimeout:null,preview:{canvas:o,renderer:null,scene:null,camera:null,controls:null,meshGroup:null},modal:{canvas:e,renderer:null,scene:null,camera:null,controls:null,meshGroup:null}};return f.init=()=>{f.preview.renderer=Em(f.preview.canvas),f.modal.renderer=Em(f.modal.canvas),f.environmentMap=vE(f.preview.renderer),f.preview.scene=Tm(f.environmentMap),f.modal.scene=Tm(f.environmentMap),f.preview.camera=new En(45,1,.1,2e3),f.modal.camera=new En(45,1,.1,2e3),f.preview.controls=new Mm(f.preview.camera,f.preview.canvas),f.preview.controls.enableDamping=!0,f.preview.controls.dampingFactor=.08,f.preview.controls.enablePan=!1,f.modal.controls=new Mm(f.modal.camera,f.modal.canvas),f.modal.controls.enableDamping=!0,f.modal.controls.dampingFactor=.08,f.modal.controls.screenSpacePanning=!0,f.modal.controls.panSpeed=.8,f.modal.controls.rotateSpeed=.9;const u={...f.modal.controls.mouseButtons},h=v=>{const x=f.modal.controls.mouseButtons;v?(x.LEFT=dr.PAN,x.RIGHT=dr.ROTATE):(x.LEFT=u.LEFT,x.MIDDLE=u.MIDDLE,x.RIGHT=u.RIGHT),f.modal.controls.enablePan=!0},p=v=>{v.shiftKey?h(!0):h(!1)},m=()=>{h(!1)};f.modal.canvas.addEventListener("pointerdown",p),f.modal.canvas.addEventListener("pointerup",m),f.modal.canvas.addEventListener("pointerleave",m),f.resize(),f.startLoop()},f.makeMeshGroup=u=>{if(!f.geometry)return null;const h=new Uo;if(u==="wireframe"||u==="solid-wireframe"){const p=new bl({color:16777215,wireframe:!0,vertexColors:!0,transparent:!0,opacity:.9}),m=new Gt(f.geometry,p);m.castShadow=!0,h.add(m)}if(u==="solid"||u==="solid-wireframe"){const p=new iE({color:12048639,roughness:.35,metalness:.15,clearcoat:.6,clearcoatRoughness:.15,reflectivity:.8,envMap:f.environmentMap||null,envMapIntensity:1.2,vertexColors:!0}),m=new Gt(f.geometry,p);m.castShadow=!0,m.receiveShadow=!0,h.add(m)}return h},f.applyViewMode=u=>{const h=p=>{const m=f[p];m.scene&&(m.meshGroup&&(m.scene.remove(m.meshGroup),m.meshGroup=null),m.meshGroup=f.makeMeshGroup(u),m.meshGroup&&m.scene.add(m.meshGroup))};h("preview"),h("modal"),f.renderOnce()},f.setGeometryFromBase64=u=>{try{const p=new pE().parse(_E(u));p.computeBoundingBox();const m=new j;p.boundingBox.getCenter(m),p.translate(-m.x,-m.y,-m.z),p.computeBoundingBox(),p.computeBoundingSphere();const v=p.getAttribute("position");if(v){const x=new Float32Array(v.count*3),S=new yt,T=p.boundingBox?.min.y??-1,E=p.boundingBox?.max.y??1,y=Math.max(E-T,1e-5);for(let _=0;_<v.count;_++){const A=(v.getY(_)-T)/y;S.setHSL(.6-.5*A,.75,.5+.15*A),x[_*3]=S.r,x[_*3+1]=S.g,x[_*3+2]=S.b}p.setAttribute("color",new In(x,3))}f.geometry=p,f.boundingRadius=p.boundingSphere?p.boundingSphere.radius:20,f.applyViewMode("solid"),f.fitCamera("preview"),f.fitCamera("modal"),f.resize()}catch(h){console.error("Failed to parse STL",h),c&&c("Failed to parse STL.")}},f.clearGeometry=()=>{const u=h=>{h.scene&&h.meshGroup&&(h.scene.remove(h.meshGroup),h.meshGroup=null)};u(f.preview),u(f.modal),f.geometry=null,f.boundingRadius=20,f.renderOnce()},f.fitCamera=u=>{const h=f[u];if(!h.scene||!h.camera||!f.geometry)return;const p=new Ws;p.setFromObject(h.meshGroup||new $t);const m=new j;p.getSize(m);const v=new j;p.getCenter(v);const S=Math.max(m.x,m.y,m.z,1)*1.3;h.camera.position.set(S,S,S),h.camera.lookAt(v),h.controls&&(h.controls.target.copy(v),h.controls.update())},f.setOrientation=u=>{const h=f.modal;if(!h.camera||!h.controls)return;const p=f.boundingRadius||10;switch(u){case"xy":h.camera.position.set(0,p*2,p*.01);break;case"xz":h.camera.position.set(0,p*.01,p*2);break;case"yz":h.camera.position.set(p*2,p*.01,0);break;default:h.camera.position.set(p*1.5,p*1.5,p*1.5);break}h.camera.lookAt(h.controls.target),h.controls.update(),f.renderOnce();let m="Perspective";switch(u){case"xy":m="Facing XY Plane";break;case"xz":m="Facing XZ Plane";break;case"yz":m="Facing YZ Plane";break;default:m="Perspective";break}f.updateOrientationLabel(m),f.showOrientationOverlay()},f.panModal=u=>{const h=f.modal;if(!h.camera||!h.controls)return;let p=0,m=0;switch(u){case"left":p=-1;break;case"right":p=1;break;case"up":m=1;break;case"down":m=-1;break;default:return}const v=Math.max(f.boundingRadius*.1,1),x=h.camera,S=h.controls,T=new j;x.getWorldDirection(T);const E=new j().crossVectors(T,x.up).normalize(),y=x.up.clone().normalize(),_=new j().addScaledVector(E,p*v).addScaledVector(y,m*v);x.position.add(_),S.target.add(_),S.update(),f.renderOnce(),f.resumeAutoRotate()},f.resize=()=>{const u=h=>{if(!h.renderer||!h.canvas||!h.camera)return;const{clientWidth:p,clientHeight:m}=h.canvas;h.renderer.setSize(p,m,!1),h.camera.aspect=p/m,h.camera.updateProjectionMatrix()};u(f.preview),u(f.modal)},f.renderOnce=()=>{const u=h=>{!h.renderer||!h.scene||!h.camera||h.renderer.render(h.scene,h.camera)};u(f.preview),u(f.modal)},f.tickRotate=()=>{const u=h=>{h.meshGroup&&(h.meshGroup.rotation.y+=f.autorotateSpeed)};f.autorotate&&(u(f.preview),u(f.modal))},f.startLoop=()=>{if(f.loopHandle)return;const u=()=>{f.modal.controls&&f.modal.controls.update(),f.preview.controls&&f.preview.controls.update(),f.tickRotate(),f.renderOnce(),f.loopHandle=requestAnimationFrame(u)};u()},f.stopLoop=()=>{f.loopHandle&&(cancelAnimationFrame(f.loopHandle),f.loopHandle=null)},f.resumeAutoRotate=(u=1500)=>{f.autorotate=!1,f.autorotateTimeout&&clearTimeout(f.autorotateTimeout),f.autorotateTimeout=setTimeout(()=>{f.autorotate=!0},u)},f.updateOrientationLabel=u=>{n&&(n.textContent=u)},f.showHintOverlay=()=>{a&&(a.classList.remove("hidden"),a.classList.add("show"),clearTimeout(f.hintTimeout),f.hintTimeout=setTimeout(()=>{a.classList.remove("show")},3500))},f.showOrientationOverlay=()=>{r&&(r.classList.remove("hidden"),r.classList.add("show"),clearTimeout(f.orientationTimeout),f.orientationTimeout=setTimeout(()=>{r.classList.remove("show")},2500))},f.handleModalToggle=u=>{u&&(f.setOrientation("reset"),f.updateOrientationLabel("Perspective"),f.showOrientationOverlay(),f.showHintOverlay(),f.renderOnce())},f.dispose=()=>{f.stopLoop(),f.preview.controls?.dispose(),f.modal.controls?.dispose(),f.preview.renderer?.dispose(),f.modal.renderer?.dispose(),f.geometry?.dispose(),f.environmentMap&&f.environmentMap.dispose?.(),f.autorotateTimeout&&clearTimeout(f.autorotateTimeout),f.orientationTimeout&&clearTimeout(f.orientationTimeout),f.hintTimeout&&clearTimeout(f.hintTimeout)},f}function yE({previewCanvasRef:o,modalCanvasRef:e,orientationLabelRef:n,orientationOverlayRef:r,hintOverlayRef:a,onError:c}){const f=ot.useRef(null);ot.useEffect(()=>{const y=o.current,_=e.current;if(!y||!_)return;const P=xE({previewCanvas:y,modalCanvas:_,orientationLabel:n?.current||null,orientationOverlay:r?.current||null,hintOverlay:a?.current||null,onError:c});f.current=P,P.init();const A=()=>{P.resize()};return window.addEventListener("resize",A),()=>{window.removeEventListener("resize",A),P.dispose(),f.current=null}},[o,e,n,r,a,c]);const u=ot.useCallback(y=>f.current?.setGeometryFromBase64(y),[]),h=ot.useCallback(()=>f.current?.clearGeometry(),[]),p=ot.useCallback(y=>f.current?.applyViewMode(y),[]),m=ot.useCallback(y=>f.current?.setOrientation(y),[]),v=ot.useCallback(y=>f.current?.panModal(y),[]),x=ot.useCallback(()=>f.current?.resize(),[]),S=ot.useCallback(y=>f.current?.resumeAutoRotate(y),[]),T=ot.useCallback(()=>f.current?.renderOnce(),[]),E=ot.useCallback(y=>f.current?.handleModalToggle(y),[]);return{loadMesh:u,clear:h,applyViewMode:p,setOrientation:m,pan:v,resize:x,resumeAutoRotate:S,renderOnce:T,onModalToggle:E,viewerRef:f}}const Un={rows:9,cols:["A","B","C"],radius:14,spacingX:65,spacingY:55},gl={cdepth:.16,cwidth:.4,cspace:.4},gf=[{key:"E11",note:"Young's Modulus (X)"},{key:"YS11",note:"Yield Strength (X)"},{key:"v11",note:"Poisson's Ratio (X)"},{key:"E22",note:"Young's Modulus (Y)"},{key:"YS22",note:"Yield Strength (Y)"},{key:"v22",note:"Poisson's Ratio (Y)"},{key:"k11",note:"Thermal Conductivity (X)"},{key:"k22",note:"Thermal Conductivity (Y)"},{key:"k33",note:"Thermal Conductivity (Z)"},{key:"CTE11",note:"Thermal Expansion (X)"},{key:"CTE22",note:"Thermal Expansion (Y)"},{key:"CTE33",note:"Thermal Expansion (Z)"}],SE=gf.slice(0,6),ME=gf.slice(6);function EE(){const[o,e]=ot.useState([]),[n,r]=ot.useState(null),[a,c]=ot.useState(null),[f,u]=ot.useState(null),[h,p]=ot.useState(gl),[m,v]=ot.useState(null),[x,S]=ot.useState({generating:!1,predicting:!1,meshing:!1}),[T,E]=ot.useState({message:"",isError:!1,visible:!1}),[y,_]=ot.useState("solid"),[P,A]=ot.useState(!1),D=ot.useRef(null),V=ot.useRef(null),O=ot.useRef(null),U=ot.useRef(null),ue=ot.useRef(null),R=ot.useCallback((fe,Ge=!1)=>{E({message:fe,isError:Ge,visible:!0})},[]);ot.useEffect(()=>{if(!T.visible)return;const fe=setTimeout(()=>E(Ge=>({...Ge,visible:!1})),2500);return()=>clearTimeout(fe)},[T.visible]);const L=ot.useCallback(fe=>{R(fe,!0)},[R]),{loadMesh:te,clear:ce,applyViewMode:pe,setOrientation:B,pan:Q,resize:ee,resumeAutoRotate:oe,renderOnce:H,onModalToggle:$}=yE({previewCanvasRef:D,modalCanvasRef:V,orientationLabelRef:O,orientationOverlayRef:U,hintOverlayRef:ue,onError:L});ot.useEffect(()=>{m?te(m):ce()},[m,te,ce]),ot.useEffect(()=>{pe(y)},[pe,y]),ot.useEffect(()=>{$(P),P&&(ee(),H())},[P,$,ee,H]);const X=ot.useMemo(()=>o.slice().sort((fe,Ge)=>(fe.order||0)-(Ge.order||0)).map(fe=>({row:fe.row,col:fe.col})),[o]),N=(fe,Ge)=>{const Ce=parseFloat(fe);return Number.isFinite(Ce)?Ce:Ge},W=ot.useCallback(()=>({cdepth:N(h.cdepth,gl.cdepth),cwidth:N(h.cwidth,gl.cwidth),cspace:N(h.cspace,gl.cspace)}),[h]),Y=ot.useCallback((fe,Ge)=>{e(Ce=>{const St=Ce.findIndex(w=>w.row===fe&&w.col===Ge);if(St!==-1){const w=Ce.slice();return w.splice(St,1),w.map((Z,xe)=>({...Z,order:xe+1}))}if(Ce.filter(w=>w.row===fe).length>=2)return R(`Row ${fe} already has 2 points.`,!0),Ce;const b=Ce.reduce((w,Z)=>Math.max(w,Z.row),0);return fe<b?(R("Points must be ordered bottom-to-top (row 1→9).",!0),Ce):[...Ce,{row:fe,col:Ge,order:Ce.length+1}]})},[R]),ae=ot.useCallback(()=>{e([]),r(null),c(null),u(null),v(null),A(!1),_("solid"),ce()},[ce]),he=ot.useCallback(async(fe,Ge)=>{const Ce=await fetch(fe,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Ge)});if(!Ce.ok){let St=Ce.statusText;try{const nt=await Ce.json();St=nt.detail||JSON.stringify(nt)}catch{St=await Ce.text()||St}throw new Error(St)}return Ce.json()},[]),we=ot.useCallback(async()=>{if(!x.generating){if(o.length===0){R("Select at least one point.",!0);return}S(fe=>({...fe,generating:!0}));try{const fe=await he("/api/flow/generate",{points:X,params:W()});r(fe.image_base64||null),c(fe.coords||null),u(null),v(null),_("solid"),ce(),R("Flow generated.")}catch(fe){R(fe.message,!0)}finally{S(fe=>({...fe,generating:!1}))}}},[he,ce,X,x.generating,o.length,W,R]),Re=ot.useCallback(async()=>{if(!x.predicting){if(o.length===0){R("Select points before prediction.",!0);return}S(fe=>({...fe,predicting:!0}));try{const fe=await he("/api/predict",{points:X,params:W()});r(fe.image_base64||null),c(fe.coords||null),u(fe.predictions||null),v(null),_("solid"),ce(),R("Prediction done.")}catch(fe){R(fe.message,!0)}finally{S(fe=>({...fe,predicting:!1}))}}},[he,ce,X,x.predicting,o.length,W,R]),De=ot.useCallback(async()=>{if(!x.meshing){S(fe=>({...fe,meshing:!0}));try{const Ge=await he("/api/mesh",{use_template:!n,middle_image_base64:n||null,coords:a||null,upper_thickness:4,middle_thickness:4,bottom_thickness:4,apply_smoothing:!1,output_filename:"Microfluidic_Geometry"});v(Ge.stl_base64||null),R("Mesh generated.")}catch(fe){R(fe.message,!0)}finally{S(fe=>({...fe,meshing:!1}))}}},[he,a,n,x.meshing,R]),Ne=ot.useCallback(()=>{if(!m)return;const fe=document.createElement("a");fe.href=`data:model/stl;base64,${m}`,fe.download="Microfluidic_Geometry.stl",document.body.appendChild(fe),fe.click(),fe.remove()},[m]),ze=(fe,Ge)=>{p(Ce=>({...Ce,[fe]:Ge}))},ut=fe=>{_(fe)},ne=()=>{if(!m){R("Generate mesh first.",!0);return}A(!0),oe(1e3)},Lt=()=>{A(!1)};return de.jsxs("div",{className:"page-shell",children:[de.jsx("header",{className:"toolbar",children:de.jsxs("div",{className:"title premium-title",children:[de.jsxs("div",{className:"title-text",children:[de.jsx("h1",{children:"Microfluidic Property Prediction"}),de.jsx("span",{className:"subtitle",children:"9x3 point selection · Flow preview · Prediction · 3D Mesh"})]}),de.jsx("div",{className:"title-badge",children:de.jsx("span",{className:"pill glow",children:"Pro Lab"})})]})}),de.jsxs("main",{className:"layout",children:[de.jsxs("section",{className:"panel input-panel",children:[de.jsx("div",{className:"panel-title",children:de.jsx("h2",{children:"User Input"})}),de.jsxs("div",{className:"input-grid",children:[de.jsxs("div",{className:"card",children:[de.jsx("h3",{children:"Point Selection (9 Rows x 3 Columns)"}),de.jsx("p",{className:"hint",children:"Draw from bottom to top (row 1→9). Up to 2 points per row."}),de.jsx("div",{className:"canvas-shell",children:de.jsx(TE,{points:o,onTogglePoint:Y})})]}),de.jsxs("div",{className:"card",children:[de.jsx("h3",{children:"Flow Path Visualization"}),de.jsx("p",{className:"hint",children:"Flow path will be rendered here after generation."}),de.jsxs("div",{className:"preview-shell flow-preview-shell",children:[n?de.jsx("img",{id:"flowPreview",src:`data:image/png;base64,${n}`,alt:"Flow preview",style:{display:"block"}}):null,n?null:de.jsx("div",{id:"flowPreviewPlaceholder",children:"Flow path preview will appear here."})]})]})]}),de.jsxs("div",{className:"card params-card form vertical",children:[de.jsxs("div",{className:"params",children:[de.jsxs("label",{children:["Channel Depth",de.jsx("input",{id:"cdepth",type:"number",step:"0.01",value:h.cdepth,onChange:fe=>ze("cdepth",fe.target.value)})]}),de.jsxs("label",{children:["Channel Width",de.jsx("input",{id:"cwidth",type:"number",step:"0.01",value:h.cwidth,onChange:fe=>ze("cwidth",fe.target.value)})]}),de.jsxs("label",{children:["Channel Space",de.jsx("input",{id:"cspace",type:"number",step:"0.01",value:h.cspace,onChange:fe=>ze("cspace",fe.target.value)})]})]}),de.jsxs("div",{className:"actions actions-split quick",children:[de.jsxs("div",{className:"actions-left",children:[de.jsx("button",{className:"btn green",id:"btnGenerate",onClick:we,disabled:x.generating,children:x.generating?"Generating...":"Generate Flow Pattern"}),de.jsx("button",{className:"btn green",id:"btnPredict",onClick:Re,disabled:x.predicting,children:x.predicting?"Predicting...":"Start Predict"})]}),de.jsx("div",{className:"actions-right",children:de.jsx("button",{className:"btn pink",id:"btnClear",onClick:ae,children:"Clear"})})]})]})]}),de.jsxs("section",{className:"panel output-panel",children:[de.jsx("div",{className:"panel-title",children:de.jsx("h2",{children:"User Output"})}),de.jsxs("div",{className:"card results-card history-dashboard-panel",children:[de.jsxs("div",{className:"results-header",children:[de.jsxs("div",{children:[de.jsx("p",{className:"eyebrow",children:"Outputs"}),de.jsx("h3",{children:"Mechanical & Thermal Properties"})]}),de.jsx("div",{className:"results-summary",children:de.jsx("span",{className:"pill",children:f?"Ready":"Awaiting prediction"})})]}),de.jsxs("div",{className:"props-group mechanical",children:[de.jsx("div",{className:"group-header",children:de.jsx("span",{className:"pill solid",children:"Mechanical"})}),de.jsx(wm,{fields:SE,predictions:f})]}),de.jsxs("div",{className:"props-group thermal",children:[de.jsx("div",{className:"group-header",children:de.jsx("span",{className:"pill outline",children:"Thermal"})}),de.jsx(wm,{fields:ME,predictions:f})]})]}),de.jsxs("div",{className:"card mesh-card",children:[de.jsxs("div",{className:"results-header",children:[de.jsxs("div",{children:[de.jsx("p",{className:"eyebrow",children:"3D Mesh"}),de.jsx("h3",{children:"Generation & Preview"})]}),de.jsx("div",{className:"results-summary",children:de.jsx("span",{className:"pill",children:x.meshing?"Generating...":m?"Mesh ready":"Awaiting mesh"})})]}),de.jsxs("div",{className:"mesh-actions",children:[de.jsx("button",{className:"btn green",id:"btnMesh",onClick:De,disabled:x.meshing,children:x.meshing?"Generating...":"Generate 3D Mesh"}),de.jsx("button",{className:"btn blue",id:"btnViewMesh",onClick:ne,disabled:!m,children:"Display 3D Mesh"}),de.jsx("button",{className:"btn yellow",id:"btnDownload",onClick:Ne,disabled:!m,children:"Download STL"})]}),de.jsxs("div",{className:"mesh-preview-shell",children:[de.jsx("canvas",{id:"meshPreviewCanvas",ref:D,onMouseDown:()=>oe(),onWheel:()=>oe(),onTouchStart:()=>oe()}),m?null:de.jsx("div",{id:"meshPreviewPlaceholder",children:"Mesh preview will appear here."})]}),de.jsx("p",{className:"hint",children:"Uses current flow; falls back to template if none."})]})]})]}),de.jsx(wE,{toast:T}),de.jsx("div",{className:"modal-backdrop",id:"meshModal",style:{display:P?"flex":"none"},onClick:fe=>{fe.target.id==="meshModal"&&Lt()},children:de.jsxs("div",{className:"modal-content resizable mesh-modal",children:[de.jsxs("div",{className:"modal-header",children:[de.jsx("h3",{children:"3D Mesh Viewer"}),de.jsx("button",{className:"modal-close-btn",id:"modalClose","aria-label":"Close modal",onClick:Lt,children:"×"})]}),de.jsxs("div",{className:"modal-controls dialog-actions",children:[de.jsx("div",{className:"controls-left",children:de.jsxs("div",{className:"control-group",children:[de.jsx("p",{className:"control-label",children:"View Mode"}),de.jsxs("select",{id:"viewMode",className:"view-mode-select",value:y,onChange:fe=>ut(fe.target.value),onMouseEnter:()=>oe(),children:[de.jsx("option",{value:"solid",children:"Solid"}),de.jsx("option",{value:"wireframe",children:"Wireframe"}),de.jsx("option",{value:"solid-wireframe",children:"Solid + Wireframe"})]})]})}),de.jsxs("div",{className:"controls-right",children:[de.jsxs("div",{className:"control-group",children:[de.jsx("p",{className:"control-label",children:"Orientation"}),de.jsxs("div",{className:"view-buttons chip-row",children:[de.jsx("button",{className:"btn blue small","data-view":"xy",onClick:()=>B("xy"),children:"XY"}),de.jsx("button",{className:"btn blue small","data-view":"xz",onClick:()=>B("xz"),children:"XZ"}),de.jsx("button",{className:"btn blue small","data-view":"yz",onClick:()=>B("yz"),children:"YZ"}),de.jsx("button",{className:"btn yellow small","data-view":"reset",onClick:()=>B("reset"),children:"Reset"})]})]}),de.jsxs("div",{className:"control-group pan-group",children:[de.jsx("p",{className:"control-label",children:"Pan"}),de.jsxs("div",{className:"pan-buttons",children:[de.jsx("button",{className:"btn small pan vertical","data-pan":"up",onClick:()=>Q("up"),children:"Up"}),de.jsx("button",{className:"btn small pan vertical","data-pan":"down",onClick:()=>Q("down"),children:"Down"}),de.jsx("button",{className:"btn small pan horizontal","data-pan":"left",onClick:()=>Q("left"),children:"Left"}),de.jsx("button",{className:"btn small pan horizontal","data-pan":"right",onClick:()=>Q("right"),children:"Right"})]})]})]})]}),de.jsxs("div",{className:"modal-canvas",children:[de.jsx("canvas",{id:"meshModalCanvas",ref:V,onMouseDown:()=>oe(),onWheel:()=>oe(),onTouchStart:()=>oe()}),de.jsxs("div",{className:"modal-overlay hidden",id:"modalOrientationOverlay",ref:U,children:["Facing ",de.jsx("span",{id:"orientationLabel",ref:O,children:"Perspective"})]}),de.jsx("div",{className:"modal-overlay hidden",id:"modalHintOverlay",ref:ue,children:"Drag to rotate · Hold Shift + drag to pan · Scroll to zoom"})]})]})})]})}function TE({points:o,onTogglePoint:e}){const n=ot.useRef(null),r=ot.useRef({positions:{}}),a=ot.useCallback(()=>{const f=n.current;if(!f)return;const u=f.getContext("2d"),h=f.clientWidth||300,p=f.clientHeight||300;f.width=h,f.height=p;const m=(Un.cols.length-1)*Un.spacingX,v=(Un.rows-1)*Un.spacingY,x=h/2,S=p/2,T=x-m/2,E=S-v/2,y={};u.clearRect(0,0,h,p),u.fillStyle="#fff",u.fillRect(0,0,h,p),u.strokeStyle="#000",u.lineWidth=2,u.strokeRect(1,1,h-2,p-2),u.fillStyle="#e0e0e0",u.strokeStyle="#333",u.textAlign="center",u.textBaseline="middle",u.font="11px Arial";for(let P=Un.rows;P>=1;P--){const A=Un.rows-P;for(let D=0;D<Un.cols.length;D++){const V=T+D*Un.spacingX,O=E+A*Un.spacingY,U=Un.cols[D];y[`${P}-${U}`]={x:V,y:O},u.beginPath(),u.arc(V,O,Un.radius,0,Math.PI*2),u.fillStyle="#e0e0e0",u.fill(),u.stroke(),u.fillStyle="#666",u.fillText(U,V,O)}}const _=o.slice().sort((P,A)=>(P.order||0)-(A.order||0));if(_.length>1){const P=y[`${_[0].row}-${_[0].col}`],A=y[`${_[_.length-1].row}-${_[_.length-1].col}`];if(P&&A){const D=u.createLinearGradient(P.x,P.y,A.x,A.y);D.addColorStop(0,"#d6f7e4"),D.addColorStop(1,"#b4eac8"),u.save(),u.strokeStyle=D,u.lineWidth=4,u.lineJoin="round",u.lineCap="round",u.shadowColor="rgba(182, 233, 200, 0.35)",u.shadowBlur=10,u.beginPath(),_.forEach((V,O)=>{const U=y[`${V.row}-${V.col}`];U&&(O===0?u.moveTo(U.x,U.y):u.lineTo(U.x,U.y))}),u.stroke(),u.restore()}}for(const P of _){const A=y[`${P.row}-${P.col}`];if(!A)continue;const D=u.createRadialGradient(A.x-3,A.y-3,3,A.x,A.y,Un.radius+2);D.addColorStop(0,"#f6fffb"),D.addColorStop(.5,"#d8f7e6"),D.addColorStop(1,"#b4eac8"),u.save(),u.fillStyle=D,u.strokeStyle="#6cc492",u.lineWidth=2,u.shadowColor="rgba(108, 196, 146, 0.35)",u.shadowBlur=8,u.beginPath(),u.arc(A.x,A.y,Un.radius,0,Math.PI*2),u.fill(),u.stroke(),u.restore(),u.fillStyle="#0f2a2f",u.font="bold 12px 'Segoe UI', Arial, sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText(P.col,A.x,A.y)}r.current={positions:y,offsetX:T,offsetY:E}},[o]);ot.useEffect(()=>{a()},[a]),ot.useEffect(()=>{const f=()=>a();return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[a]);const c=f=>{const u=n.current;if(!u)return;const h=u.getBoundingClientRect(),p=f.clientX-h.left,m=f.clientY-h.top,v=r.current.positions||{};let x=null;if(Object.entries(v).forEach(([S,T])=>{const E=Math.hypot(T.x-p,T.y-m);E<=Un.radius*1.1&&(!x||E<x.dist)&&(x={key:S,dist:E})}),x){const[S,T]=x.key.split("-");e(Number(S),T)}};return de.jsx("canvas",{id:"patternCanvas",ref:n,onClick:c})}function wm({fields:o,predictions:e}){return de.jsx("div",{className:"props-grid",children:o.map(n=>{const r=gf.findIndex(c=>c.key===n.key),a=e&&Number.isFinite(e[r])?Number(e[r]).toFixed(6):"--";return de.jsxs("div",{className:"prop-block",children:[de.jsx("label",{htmlFor:`prop-${n.key}`,children:n.key}),de.jsx("p",{className:"note",children:n.note}),de.jsx("input",{id:`prop-${n.key}`,readOnly:!0,value:a})]},n.key)})})}function wE({toast:o}){return de.jsx("div",{id:"toast",className:`toast ${o.visible?"show":""}`,style:{background:o.isError?"#c0392b":"#333"},children:o.message})}const Am=document.getElementById("root");Am&&Z_.createRoot(Am).render(de.jsx(EE,{}));
