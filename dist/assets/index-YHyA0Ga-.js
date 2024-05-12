(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ic(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const _e={},Rr=[],vt=()=>{},fy=()=>!1,Oo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),oc=t=>t.startsWith("onUpdate:"),Le=Object.assign,ac=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},py=Object.prototype.hasOwnProperty,ie=(t,e)=>py.call(t,e),K=Array.isArray,Sr=t=>si(t)==="[object Map]",No=t=>si(t)==="[object Set]",$u=t=>si(t)==="[object Date]",Z=t=>typeof t=="function",xe=t=>typeof t=="string",rn=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",_f=t=>(me(t)||Z(t))&&Z(t.then)&&Z(t.catch),yf=Object.prototype.toString,si=t=>yf.call(t),gy=t=>si(t).slice(8,-1),vf=t=>si(t)==="[object Object]",lc=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ms=ic(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},my=/-(\w)/g,zt=Vo(t=>t.replace(my,(e,n)=>n?n.toUpperCase():"")),_y=/\B([A-Z])/g,Wr=Vo(t=>t.replace(_y,"-$1").toLowerCase()),Mo=Vo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Da=Vo(t=>t?`on${Mo(t)}`:""),Dn=(t,e)=>!Object.is(t,e),$i=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wf=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},to=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Bu;const Ef=()=>Bu||(Bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cc(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=xe(r)?Ey(r):cc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(xe(t)||me(t))return t}const yy=/;(?![^(]*\))/g,vy=/:([^]+)/,wy=/\/\*[^]*?\*\//g;function Ey(t){const e={};return t.replace(wy,"").split(yy).forEach(n=>{if(n){const r=n.split(vy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Lo(t){let e="";if(xe(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const r=Lo(t[n]);r&&(e+=r+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Iy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ty=ic(Iy);function If(t){return!!t||t===""}function Ay(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Fo(t[r],e[r]);return n}function Fo(t,e){if(t===e)return!0;let n=$u(t),r=$u(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=rn(t),r=rn(e),n||r)return t===e;if(n=K(t),r=K(e),n||r)return n&&r?Ay(t,e):!1;if(n=me(t),r=me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Fo(t[o],e[o]))return!1}}return String(t)===String(e)}function by(t,e){return t.findIndex(n=>Fo(n,e))}const _s=t=>xe(t)?t:t==null?"":K(t)||me(t)&&(t.toString===yf||!Z(t.toString))?JSON.stringify(t,Tf,2):String(t),Tf=(t,e)=>e&&e.__v_isRef?Tf(t,e.value):Sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Oa(r,i)+" =>"]=s,n),{})}:No(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Oa(n))}:rn(e)?Oa(e):me(e)&&!K(e)&&!vf(e)?String(e):e,Oa=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class Ry{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Sy(t,e=It){e&&e.active&&e.effects.push(t)}function Py(){return It}let Xn;class uc{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Sy(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ln();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Cy(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Fn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Rn,n=Xn;try{return Rn=!0,Xn=this,this._runnings++,ju(this),this.fn()}finally{qu(this),this._runnings--,Xn=n,Rn=e}}stop(){var e;this.active&&(ju(this),qu(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Cy(t){return t.value}function ju(t){t._trackId++,t._depsLength=0}function qu(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Af(t.deps[e],t);t.deps.length=t._depsLength}}function Af(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Rn=!0,dl=0;const bf=[];function Ln(){bf.push(Rn),Rn=!1}function Fn(){const t=bf.pop();Rn=t===void 0?!0:t}function hc(){dl++}function dc(){for(dl--;!dl&&fl.length;)fl.shift()()}function Rf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Af(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const fl=[];function Sf(t,e,n){hc();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&fl.push(r.scheduler)))}dc()}const Pf=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},pl=new WeakMap,Zn=Symbol(""),gl=Symbol("");function ut(t,e,n){if(Rn&&Xn){let r=pl.get(t);r||pl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Pf(()=>r.delete(n))),Rf(Xn,s)}}function tn(t,e,n,r,s,i){const o=pl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&K(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!rn(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":K(t)?lc(n)&&a.push(o.get("length")):(a.push(o.get(Zn)),Sr(t)&&a.push(o.get(gl)));break;case"delete":K(t)||(a.push(o.get(Zn)),Sr(t)&&a.push(o.get(gl)));break;case"set":Sr(t)&&a.push(o.get(Zn));break}hc();for(const l of a)l&&Sf(l,4);dc()}const xy=ic("__proto__,__v_isRef,__isVue"),Cf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn)),Hu=ky();function ky(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)ut(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ln(),hc();const r=le(this)[e].apply(this,n);return dc(),Fn(),r}}),t}function Dy(t){rn(t)||(t=String(t));const e=le(this);return ut(e,"has",t),e.hasOwnProperty(t)}class xf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?zy:Nf:i?Of:Df).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=K(e);if(!s){if(o&&ie(Hu,n))return Reflect.get(Hu,n,r);if(n==="hasOwnProperty")return Dy}const a=Reflect.get(e,n,r);return(rn(n)?Cf.has(n):xy(n))||(s||ut(e,"get",n),i)?a:ht(a)?o&&lc(n)?a:a.value:me(a)?s?Mf(a):$o(a):a}}class kf extends xf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Ds(i);if(!no(r)&&!Ds(r)&&(i=le(i),r=le(r)),!K(e)&&ht(i)&&!ht(r))return l?!1:(i.value=r,!0)}const o=K(e)&&lc(n)?Number(n)<e.length:ie(e,n),a=Reflect.set(e,n,r,s);return e===le(s)&&(o?Dn(r,i)&&tn(e,"set",n,r):tn(e,"add",n,r)),a}deleteProperty(e,n){const r=ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rn(n)||!Cf.has(n))&&ut(e,"has",n),r}ownKeys(e){return ut(e,"iterate",K(e)?"length":Zn),Reflect.ownKeys(e)}}class Oy extends xf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ny=new kf,Vy=new Oy,My=new kf(!0);const fc=t=>t,Uo=t=>Reflect.getPrototypeOf(t);function Ai(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||(Dn(e,i)&&ut(s,"get",e),ut(s,"get",i));const{has:o}=Uo(s),a=r?fc:n?mc:Os;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function bi(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||(Dn(t,s)&&ut(r,"has",t),ut(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ri(t,e=!1){return t=t.__v_raw,!e&&ut(le(t),"iterate",Zn),Reflect.get(t,"size",t)}function zu(t){t=le(t);const e=le(this);return Uo(e).has.call(e,t)||(e.add(t),tn(e,"add",t,t)),this}function Ku(t,e){e=le(e);const n=le(this),{has:r,get:s}=Uo(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Dn(e,o)&&tn(n,"set",t,e):tn(n,"add",t,e),this}function Gu(t){const e=le(this),{has:n,get:r}=Uo(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&tn(e,"delete",t,void 0),i}function Wu(){const t=le(this),e=t.size!==0,n=t.clear();return e&&tn(t,"clear",void 0,void 0),n}function Si(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),l=e?fc:t?mc:Os;return!t&&ut(a,"iterate",Zn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Pi(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=Sr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?fc:e?mc:Os;return!e&&ut(i,"iterate",l?gl:Zn),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function fn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ly(){const t={get(i){return Ai(this,i)},get size(){return Ri(this)},has:bi,add:zu,set:Ku,delete:Gu,clear:Wu,forEach:Si(!1,!1)},e={get(i){return Ai(this,i,!1,!0)},get size(){return Ri(this)},has:bi,add:zu,set:Ku,delete:Gu,clear:Wu,forEach:Si(!1,!0)},n={get(i){return Ai(this,i,!0)},get size(){return Ri(this,!0)},has(i){return bi.call(this,i,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:Si(!0,!1)},r={get(i){return Ai(this,i,!0,!0)},get size(){return Ri(this,!0)},has(i){return bi.call(this,i,!0)},add:fn("add"),set:fn("set"),delete:fn("delete"),clear:fn("clear"),forEach:Si(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Pi(i,!1,!1),n[i]=Pi(i,!0,!1),e[i]=Pi(i,!1,!0),r[i]=Pi(i,!0,!0)}),[t,n,e,r]}const[Fy,Uy,$y,By]=Ly();function pc(t,e){const n=e?t?By:$y:t?Uy:Fy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const jy={get:pc(!1,!1)},qy={get:pc(!1,!0)},Hy={get:pc(!0,!1)};const Df=new WeakMap,Of=new WeakMap,Nf=new WeakMap,zy=new WeakMap;function Ky(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ky(gy(t))}function $o(t){return Ds(t)?t:gc(t,!1,Ny,jy,Df)}function Vf(t){return gc(t,!1,My,qy,Of)}function Mf(t){return gc(t,!0,Vy,Hy,Nf)}function gc(t,e,n,r,s){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Gy(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function ys(t){return Ds(t)?ys(t.__v_raw):!!(t&&t.__v_isReactive)}function Ds(t){return!!(t&&t.__v_isReadonly)}function no(t){return!!(t&&t.__v_isShallow)}function Lf(t){return t?!!t.__v_raw:!1}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function Wy(t){return Object.isExtensible(t)&&wf(t,"__v_skip",!0),t}const Os=t=>me(t)?$o(t):t,mc=t=>me(t)?Mf(t):t;class Ff{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new uc(()=>e(this._value),()=>Bi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return(!e._cacheable||e.effect.dirty)&&Dn(e._value,e._value=e.effect.run())&&Bi(e,4),Uf(e),e.effect._dirtyLevel>=2&&Bi(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Qy(t,e,n=!1){let r,s;const i=Z(t);return i?(r=t,s=vt):(r=t.get,s=t.set),new Ff(r,s,i||!s,n)}function Uf(t){var e;Rn&&Xn&&(t=le(t),Rf(Xn,(e=t.dep)!=null?e:t.dep=Pf(()=>t.dep=void 0,t instanceof Ff?t:void 0)))}function Bi(t,e=4,n){t=le(t);const r=t.dep;r&&Sf(r,e)}function ht(t){return!!(t&&t.__v_isRef===!0)}function mt(t){return $f(t,!1)}function Jy(t){return $f(t,!0)}function $f(t,e){return ht(t)?t:new Yy(t,e)}class Yy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:Os(e)}get value(){return Uf(this),this._value}set value(e){const n=this.__v_isShallow||no(e)||Ds(e);e=n?e:le(e),Dn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Os(e),Bi(this,4))}}function er(t){return ht(t)?t.value:t}const Xy={get:(t,e,n)=>er(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Bf(t){return ys(t)?t:new Proxy(t,Xy)}/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sn(t,e,n,r){try{return r?t(...r):t()}catch(s){Bo(s,e,n)}}function bt(t,e,n,r){if(Z(t)){const s=Sn(t,e,n,r);return s&&_f(s)&&s.catch(i=>{Bo(i,e,n)}),s}if(K(t)){const s=[];for(let i=0;i<t.length;i++)s.push(bt(t[i],e,n,r));return s}}function Bo(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Ln(),Sn(l,null,10,[t,o,a]),Fn();return}}Zy(t,n,s,r)}function Zy(t,e,n,r=!0){console.error(t)}let Ns=!1,ml=!1;const Xe=[];let Mt=0;const Pr=[];let mn=null,zn=0;const jf=Promise.resolve();let _c=null;function yc(t){const e=_c||jf;return t?e.then(this?t.bind(this):t):e}function ev(t){let e=Mt+1,n=Xe.length;for(;e<n;){const r=e+n>>>1,s=Xe[r],i=Vs(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function vc(t){(!Xe.length||!Xe.includes(t,Ns&&t.allowRecurse?Mt+1:Mt))&&(t.id==null?Xe.push(t):Xe.splice(ev(t.id),0,t),qf())}function qf(){!Ns&&!ml&&(ml=!0,_c=jf.then(zf))}function tv(t){const e=Xe.indexOf(t);e>Mt&&Xe.splice(e,1)}function nv(t){K(t)?Pr.push(...t):(!mn||!mn.includes(t,t.allowRecurse?zn+1:zn))&&Pr.push(t),qf()}function Qu(t,e,n=Ns?Mt+1:0){for(;n<Xe.length;n++){const r=Xe[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Xe.splice(n,1),n--,r()}}}function Hf(t){if(Pr.length){const e=[...new Set(Pr)].sort((n,r)=>Vs(n)-Vs(r));if(Pr.length=0,mn){mn.push(...e);return}for(mn=e,zn=0;zn<mn.length;zn++)mn[zn]();mn=null,zn=0}}const Vs=t=>t.id==null?1/0:t.id,rv=(t,e)=>{const n=Vs(t)-Vs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zf(t){ml=!1,Ns=!0,Xe.sort(rv);try{for(Mt=0;Mt<Xe.length;Mt++){const e=Xe[Mt];e&&e.active!==!1&&Sn(e,null,14)}}finally{Mt=0,Xe.length=0,Hf(),Ns=!1,_c=null,(Xe.length||Pr.length)&&zf()}}function sv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||_e;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||_e;d&&(s=n.map(g=>xe(g)?g.trim():g)),h&&(s=n.map(to))}let a,l=r[a=Da(e)]||r[a=Da(zt(e))];!l&&i&&(l=r[a=Da(Wr(e))]),l&&bt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bt(c,t,6,s)}}function Kf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Z(t)){const l=c=>{const u=Kf(c,e,!0);u&&(a=!0,Le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(me(t)&&r.set(t,null),null):(K(i)?i.forEach(l=>o[l]=null):Le(o,i),me(t)&&r.set(t,o),o)}function jo(t,e){return!t||!Oo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,Wr(e))||ie(t,e))}let Ve=null,Gf=null;function ro(t){const e=Ve;return Ve=t,Gf=t&&t.type.__scopeId||null,e}function qo(t,e=Ve,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&oh(-1);const i=ro(e);let o;try{o=t(...s)}finally{ro(i),r._d&&oh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Na(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:g,ctx:y,inheritAttrs:T}=t,b=ro(t);let x,O;try{if(n.shapeFlag&4){const $=s||r,ee=$;x=Vt(c.call(ee,$,u,h,g,d,y)),O=a}else{const $=e;x=Vt($.length>1?$(h,{attrs:a,slots:o,emit:l}):$(h,null)),O=e.props?a:iv(a)}}catch($){Is.length=0,Bo($,t,1),x=be(On)}let S=x;if(O&&T!==!1){const $=Object.keys(O),{shapeFlag:ee}=S;$.length&&ee&7&&(i&&$.some(oc)&&(O=ov(O,i)),S=Mr(S,O))}return n.dirs&&(S=Mr(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),x=S,ro(b),x}const iv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Oo(n))&&((e||(e={}))[n]=t[n]);return e},ov=(t,e)=>{const n={};for(const r in t)(!oc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function av(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ju(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!jo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ju(r,o,c):!0:!!o;return!1}function Ju(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!jo(n,i))return!0}return!1}function lv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Wf="components";function Qf(t,e){return uv(Wf,t,!0,e)||t}const cv=Symbol.for("v-ndc");function uv(t,e,n=!0,r=!1){const s=Ve||Ze;if(s){const i=s.type;if(t===Wf){const a=nw(i,!1);if(a&&(a===e||a===zt(e)||a===Mo(zt(e))))return i}const o=Yu(s[t]||i[t],e)||Yu(s.appContext[t],e);return!o&&r?i:o}}function Yu(t,e){return t&&(t[e]||t[zt(e)]||t[Mo(zt(e))])}const hv=t=>t.__isSuspense;function dv(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):nv(t)}const fv=Symbol.for("v-scx"),pv=()=>nn(fv),Ci={};function ji(t,e,n){return Jf(t,e,n)}function Jf(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=_e){if(e&&i){const M=e;e=(...pe)=>{M(...pe),ee()}}const l=Ze,c=M=>r===!0?M:Gn(M,r===!1?1:void 0);let u,h=!1,d=!1;if(ht(t)?(u=()=>t.value,h=no(t)):ys(t)?(u=()=>c(t),h=!0):K(t)?(d=!0,h=t.some(M=>ys(M)||no(M)),u=()=>t.map(M=>{if(ht(M))return M.value;if(ys(M))return c(M);if(Z(M))return Sn(M,l,2)})):Z(t)?e?u=()=>Sn(t,l,2):u=()=>(g&&g(),bt(t,l,3,[y])):u=vt,e&&r){const M=u;u=()=>Gn(M())}let g,y=M=>{g=S.onStop=()=>{Sn(M,l,4),g=S.onStop=void 0}},T;if(Ko)if(y=vt,e?n&&bt(e,l,3,[u(),d?[]:void 0,y]):u(),s==="sync"){const M=pv();T=M.__watcherHandles||(M.__watcherHandles=[])}else return vt;let b=d?new Array(t.length).fill(Ci):Ci;const x=()=>{if(!(!S.active||!S.dirty))if(e){const M=S.run();(r||h||(d?M.some((pe,ke)=>Dn(pe,b[ke])):Dn(M,b)))&&(g&&g(),bt(e,l,3,[M,b===Ci?void 0:d&&b[0]===Ci?[]:b,y]),b=M)}else S.run()};x.allowRecurse=!!e;let O;s==="sync"?O=x:s==="post"?O=()=>lt(x,l&&l.suspense):(x.pre=!0,l&&(x.id=l.uid),O=()=>vc(x));const S=new uc(u,vt,O),$=Py(),ee=()=>{S.stop(),$&&ac($.effects,S)};return e?n?x():b=S.run():s==="post"?lt(S.run.bind(S),l&&l.suspense):S.run(),T&&T.push(ee),ee}function gv(t,e,n){const r=this.proxy,s=xe(t)?t.includes(".")?Yf(r,t):()=>r[t]:t.bind(r,r);let i;Z(e)?i=e:(i=e.handler,n=e);const o=ii(this),a=Jf(s,i.bind(r),n);return o(),a}function Yf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Gn(t,e,n=0,r){if(!me(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ht(t))Gn(t.value,e,n,r);else if(K(t))for(let s=0;s<t.length;s++)Gn(t[s],e,n,r);else if(No(t)||Sr(t))t.forEach(s=>{Gn(s,e,n,r)});else if(vf(t))for(const s in t)Gn(t[s],e,n,r);return t}function Va(t,e){if(Ve===null)return t;const n=Go(Ve)||Ve.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=_e]=e[s];i&&(Z(i)&&(i={mounted:i,updated:i}),i.deep&&Gn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function jn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Ln(),bt(l,n,8,[t.el,a,t,e]),Fn())}}/*! #__NO_SIDE_EFFECTS__ */function Xf(t,e){return Z(t)?Le({name:t.name},e,{setup:t}):t}const vs=t=>!!t.type.__asyncLoader,Zf=t=>t.type.__isKeepAlive;function mv(t,e){ep(t,"a",e)}function _v(t,e){ep(t,"da",e)}function ep(t,e,n=Ze){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ho(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Zf(s.parent.vnode)&&yv(r,e,n,s),s=s.parent}}function yv(t,e,n,r){const s=Ho(e,t,r,!0);np(()=>{ac(r[e],s)},n)}function Ho(t,e,n=Ze,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ln();const a=ii(n),l=bt(e,n,t,o);return a(),Fn(),l});return r?s.unshift(i):s.push(i),i}}const un=t=>(e,n=Ze)=>(!Ko||t==="sp")&&Ho(t,(...r)=>e(...r),n),vv=un("bm"),tp=un("m"),wv=un("bu"),Ev=un("u"),Iv=un("bum"),np=un("um"),Tv=un("sp"),Av=un("rtg"),bv=un("rtc");function Rv(t,e=Ze){Ho("ec",t,e)}function rp(t,e,n,r){let s;const i=n;if(K(t)||xe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(me(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i)}}else s=[];return s}function sp(t,e,n={},r,s){if(Ve.isCE||Ve.parent&&vs(Ve.parent)&&Ve.parent.isCE)return be("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),Ae();const o=i&&ip(i(n)),a=Ic(Je,{key:n.key||o&&o.key||`_${e}`},o||[],o&&t._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ip(t){return t.some(e=>io(e)?!(e.type===On||e.type===Je&&!ip(e.children)):!0)?t:null}const _l=t=>t?Ip(t)?Go(t)||t.proxy:_l(t.parent):null,ws=Le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_l(t.parent),$root:t=>_l(t.root),$emit:t=>t.emit,$options:t=>wc(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,vc(t.update)}),$nextTick:t=>t.n||(t.n=yc.bind(t.proxy)),$watch:t=>gv.bind(t)}),Ma=(t,e)=>t!==_e&&!t.__isScriptSetup&&ie(t,e),Sv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ma(r,e))return o[e]=1,r[e];if(s!==_e&&ie(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&ie(c,e))return o[e]=3,i[e];if(n!==_e&&ie(n,e))return o[e]=4,n[e];yl&&(o[e]=0)}}const u=ws[e];let h,d;if(u)return e==="$attrs"&&ut(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&ie(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ie(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ma(s,e)?(s[e]=n,!0):r!==_e&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==_e&&ie(t,o)||Ma(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(ws,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xu(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yl=!0;function Pv(t){const e=wc(t),n=t.proxy,r=t.ctx;yl=!1,e.beforeCreate&&Zu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:T,deactivated:b,beforeDestroy:x,beforeUnmount:O,destroyed:S,unmounted:$,render:ee,renderTracked:M,renderTriggered:pe,errorCaptured:ke,serverPrefetch:ot,expose:$e,inheritAttrs:hn,components:Bn,directives:kt,filters:ss}=e;if(c&&Cv(c,r,null),o)for(const de in o){const ae=o[de];Z(ae)&&(r[de]=ae.bind(n))}if(s){const de=s.call(n,n);me(de)&&(t.data=$o(de))}if(yl=!0,i)for(const de in i){const ae=i[de],Qt=Z(ae)?ae.bind(n,n):Z(ae.get)?ae.get.bind(n,n):vt,dn=!Z(ae)&&Z(ae.set)?ae.set.bind(n):vt,Dt=st({get:Qt,set:dn});Object.defineProperty(r,de,{enumerable:!0,configurable:!0,get:()=>Dt.value,set:at=>Dt.value=at})}if(a)for(const de in a)op(a[de],r,n,de);if(l){const de=Z(l)?l.call(n):l;Reflect.ownKeys(de).forEach(ae=>{qi(ae,de[ae])})}u&&Zu(u,t,"c");function De(de,ae){K(ae)?ae.forEach(Qt=>de(Qt.bind(n))):ae&&de(ae.bind(n))}if(De(vv,h),De(tp,d),De(wv,g),De(Ev,y),De(mv,T),De(_v,b),De(Rv,ke),De(bv,M),De(Av,pe),De(Iv,O),De(np,$),De(Tv,ot),K($e))if($e.length){const de=t.exposed||(t.exposed={});$e.forEach(ae=>{Object.defineProperty(de,ae,{get:()=>n[ae],set:Qt=>n[ae]=Qt})})}else t.exposed||(t.exposed={});ee&&t.render===vt&&(t.render=ee),hn!=null&&(t.inheritAttrs=hn),Bn&&(t.components=Bn),kt&&(t.directives=kt)}function Cv(t,e,n=vt){K(t)&&(t=vl(t));for(const r in t){const s=t[r];let i;me(s)?"default"in s?i=nn(s.from||r,s.default,!0):i=nn(s.from||r):i=nn(s),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Zu(t,e,n){bt(K(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function op(t,e,n,r){const s=r.includes(".")?Yf(n,r):()=>n[r];if(xe(t)){const i=e[t];Z(i)&&ji(s,i)}else if(Z(t))ji(s,t.bind(n));else if(me(t))if(K(t))t.forEach(i=>op(i,e,n,r));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&ji(s,i,t)}}function wc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>so(l,c,o,!0)),so(l,e,o)),me(e)&&i.set(e,l),l}function so(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&so(t,i,n,!0),s&&s.forEach(o=>so(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=xv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const xv={data:eh,props:th,emits:th,methods:hs,computed:hs,beforeCreate:rt,created:rt,beforeMount:rt,mounted:rt,beforeUpdate:rt,updated:rt,beforeDestroy:rt,beforeUnmount:rt,destroyed:rt,unmounted:rt,activated:rt,deactivated:rt,errorCaptured:rt,serverPrefetch:rt,components:hs,directives:hs,watch:Dv,provide:eh,inject:kv};function eh(t,e){return e?t?function(){return Le(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function kv(t,e){return hs(vl(t),vl(e))}function vl(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function rt(t,e){return t?[...new Set([].concat(t,e))]:e}function hs(t,e){return t?Le(Object.create(null),t,e):e}function th(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:Le(Object.create(null),Xu(t),Xu(e??{})):e}function Dv(t,e){if(!t)return e;if(!e)return t;const n=Le(Object.create(null),t);for(const r in e)n[r]=rt(t[r],e[r]);return n}function ap(){return{app:null,config:{isNativeTag:fy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ov=0;function Nv(t,e){return function(r,s=null){Z(r)||(r=Le({},r)),s!=null&&!me(s)&&(s=null);const i=ap(),o=new WeakSet;let a=!1;const l=i.app={_uid:Ov++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:sw,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&Z(c.install)?(o.add(c),c.install(l,...u)):Z(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=be(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Go(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=Es;Es=l;try{return c()}finally{Es=u}}};return l}}let Es=null;function qi(t,e){if(Ze){let n=Ze.provides;const r=Ze.parent&&Ze.parent.provides;r===n&&(n=Ze.provides=Object.create(r)),n[t]=e}}function nn(t,e,n=!1){const r=Ze||Ve;if(r||Es){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Es._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(r&&r.proxy):e}}const lp={},cp=()=>Object.create(lp),up=t=>Object.getPrototypeOf(t)===lp;function Vv(t,e,n,r=!1){const s={},i=cp();t.propsDefaults=Object.create(null),hp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Vf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Mv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(jo(t.emitsOptions,d))continue;const g=e[d];if(l)if(ie(i,d))g!==i[d]&&(i[d]=g,c=!0);else{const y=zt(d);s[y]=wl(l,a,y,g,t,!1)}else g!==i[d]&&(i[d]=g,c=!0)}}}else{hp(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=Wr(h))===h||!ie(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=wl(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],c=!0)}c&&tn(t.attrs,"set","")}function hp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ms(l))continue;const c=e[l];let u;s&&ie(s,u=zt(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:jo(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=le(n),c=a||_e;for(let u=0;u<i.length;u++){const h=i[u];n[h]=wl(s,l,h,c[h],t,!ie(c,h))}}return o}function wl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Z(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=ii(s);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Wr(n))&&(r=!0))}return r}function dp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!Z(t)){const u=h=>{l=!0;const[d,g]=dp(h,e,!0);Le(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return me(t)&&r.set(t,Rr),Rr;if(K(i))for(let u=0;u<i.length;u++){const h=zt(i[u]);nh(h)&&(o[h]=_e)}else if(i)for(const u in i){const h=zt(u);if(nh(h)){const d=i[u],g=o[h]=K(d)||Z(d)?{type:d}:Le({},d);if(g){const y=ih(Boolean,g.type),T=ih(String,g.type);g[0]=y>-1,g[1]=T<0||y<T,(y>-1||ie(g,"default"))&&a.push(h)}}}const c=[o,a];return me(t)&&r.set(t,c),c}function nh(t){return t[0]!=="$"&&!ms(t)}function rh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function sh(t,e){return rh(t)===rh(e)}function ih(t,e){return K(e)?e.findIndex(n=>sh(n,t)):Z(e)&&sh(e,t)?0:-1}const fp=t=>t[0]==="_"||t==="$stable",Ec=t=>K(t)?t.map(Vt):[Vt(t)],Lv=(t,e,n)=>{if(e._n)return e;const r=qo((...s)=>Ec(e(...s)),n);return r._c=!1,r},pp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(fp(s))continue;const i=t[s];if(Z(i))e[s]=Lv(s,i,r);else if(i!=null){const o=Ec(i);e[s]=()=>o}}},gp=(t,e)=>{const n=Ec(e);t.slots.default=()=>n},Fv=(t,e)=>{const n=t.slots=cp();if(t.vnode.shapeFlag&32){const r=e._;r?(Le(n,e),wf(n,"_",r)):pp(e,n)}else e&&gp(t,e)},Uv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=_e;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Le(s,e),!n&&a===1&&delete s._):(i=!e.$stable,pp(e,s)),o=e}else e&&(gp(t,e),o={default:1});if(i)for(const a in s)!fp(a)&&o[a]==null&&delete s[a]};function El(t,e,n,r,s=!1){if(K(t)){t.forEach((d,g)=>El(d,e&&(K(e)?e[g]:e),n,r,s));return}if(vs(r)&&!s)return;const i=r.shapeFlag&4?Go(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(xe(c)?(u[c]=null,ie(h,c)&&(h[c]=null)):ht(c)&&(c.value=null)),Z(l))Sn(l,a,12,[o,u]);else{const d=xe(l),g=ht(l);if(d||g){const y=()=>{if(t.f){const T=d?ie(h,l)?h[l]:u[l]:l.value;s?K(T)&&ac(T,i):K(T)?T.includes(i)||T.push(i):d?(u[l]=[i],ie(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,ie(h,l)&&(h[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,lt(y,n)):y()}}}const lt=dv;function $v(t){return Bv(t)}function Bv(t,e){const n=Ef();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=vt,insertStaticContent:y}=t,T=(f,p,m,w=null,_=null,C=null,V=void 0,P=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!os(f,p)&&(w=v(f),at(f,_,C,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:A,ref:F,shapeFlag:z}=p;switch(A){case zo:b(f,p,m,w);break;case On:x(f,p,m,w);break;case Hi:f==null&&O(p,m,w,V);break;case Je:Bn(f,p,m,w,_,C,V,P,k);break;default:z&1?ee(f,p,m,w,_,C,V,P,k):z&6?kt(f,p,m,w,_,C,V,P,k):(z&64||z&128)&&A.process(f,p,m,w,_,C,V,P,k,B)}F!=null&&_&&El(F,f&&f.ref,C,p||f,!p)},b=(f,p,m,w)=>{if(f==null)r(p.el=a(p.children),m,w);else{const _=p.el=f.el;p.children!==f.children&&c(_,p.children)}},x=(f,p,m,w)=>{f==null?r(p.el=l(p.children||""),m,w):p.el=f.el},O=(f,p,m,w)=>{[f.el,f.anchor]=y(f.children,p,m,w,f.el,f.anchor)},S=({el:f,anchor:p},m,w)=>{let _;for(;f&&f!==p;)_=d(f),r(f,m,w),f=_;r(p,m,w)},$=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),s(f),f=m;s(p)},ee=(f,p,m,w,_,C,V,P,k)=>{p.type==="svg"?V="svg":p.type==="math"&&(V="mathml"),f==null?M(p,m,w,_,C,V,P,k):ot(f,p,_,C,V,P,k)},M=(f,p,m,w,_,C,V,P)=>{let k,A;const{props:F,shapeFlag:z,transition:j,dirs:J}=f;if(k=f.el=o(f.type,C,F&&F.is,F),z&8?u(k,f.children):z&16&&ke(f.children,k,null,w,_,La(f,C),V,P),J&&jn(f,null,w,"created"),pe(k,f,f.scopeId,V,w),F){for(const fe in F)fe!=="value"&&!ms(fe)&&i(k,fe,null,F[fe],C,f.children,w,_,Ge);"value"in F&&i(k,"value",null,F.value,C),(A=F.onVnodeBeforeMount)&&Nt(A,w,f)}J&&jn(f,null,w,"beforeMount");const te=jv(_,j);te&&j.beforeEnter(k),r(k,p,m),((A=F&&F.onVnodeMounted)||te||J)&&lt(()=>{A&&Nt(A,w,f),te&&j.enter(k),J&&jn(f,null,w,"mounted")},_)},pe=(f,p,m,w,_)=>{if(m&&g(f,m),w)for(let C=0;C<w.length;C++)g(f,w[C]);if(_){let C=_.subTree;if(p===C){const V=_.vnode;pe(f,V,V.scopeId,V.slotScopeIds,_.parent)}}},ke=(f,p,m,w,_,C,V,P,k=0)=>{for(let A=k;A<f.length;A++){const F=f[A]=P?_n(f[A]):Vt(f[A]);T(null,F,p,m,w,_,C,V,P)}},ot=(f,p,m,w,_,C,V)=>{const P=p.el=f.el;let{patchFlag:k,dynamicChildren:A,dirs:F}=p;k|=f.patchFlag&16;const z=f.props||_e,j=p.props||_e;let J;if(m&&qn(m,!1),(J=j.onVnodeBeforeUpdate)&&Nt(J,m,p,f),F&&jn(p,f,m,"beforeUpdate"),m&&qn(m,!0),A?$e(f.dynamicChildren,A,P,m,w,La(p,_),C):V||ae(f,p,P,null,m,w,La(p,_),C,!1),k>0){if(k&16)hn(P,p,z,j,m,w,_);else if(k&2&&z.class!==j.class&&i(P,"class",null,j.class,_),k&4&&i(P,"style",z.style,j.style,_),k&8){const te=p.dynamicProps;for(let fe=0;fe<te.length;fe++){const ve=te[fe],Oe=z[ve],Et=j[ve];(Et!==Oe||ve==="value")&&i(P,ve,Oe,Et,_,f.children,m,w,Ge)}}k&1&&f.children!==p.children&&u(P,p.children)}else!V&&A==null&&hn(P,p,z,j,m,w,_);((J=j.onVnodeUpdated)||F)&&lt(()=>{J&&Nt(J,m,p,f),F&&jn(p,f,m,"updated")},w)},$e=(f,p,m,w,_,C,V)=>{for(let P=0;P<p.length;P++){const k=f[P],A=p[P],F=k.el&&(k.type===Je||!os(k,A)||k.shapeFlag&70)?h(k.el):m;T(k,A,F,null,w,_,C,V,!0)}},hn=(f,p,m,w,_,C,V)=>{if(m!==w){if(m!==_e)for(const P in m)!ms(P)&&!(P in w)&&i(f,P,m[P],null,V,p.children,_,C,Ge);for(const P in w){if(ms(P))continue;const k=w[P],A=m[P];k!==A&&P!=="value"&&i(f,P,A,k,V,p.children,_,C,Ge)}"value"in w&&i(f,"value",m.value,w.value,V)}},Bn=(f,p,m,w,_,C,V,P,k)=>{const A=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:z,dynamicChildren:j,slotScopeIds:J}=p;J&&(P=P?P.concat(J):J),f==null?(r(A,m,w),r(F,m,w),ke(p.children||[],m,F,_,C,V,P,k)):z>0&&z&64&&j&&f.dynamicChildren?($e(f.dynamicChildren,j,m,_,C,V,P),(p.key!=null||_&&p===_.subTree)&&mp(f,p,!0)):ae(f,p,m,F,_,C,V,P,k)},kt=(f,p,m,w,_,C,V,P,k)=>{p.slotScopeIds=P,f==null?p.shapeFlag&512?_.ctx.activate(p,m,w,V,k):ss(p,m,w,_,C,V,k):gr(f,p,k)},ss=(f,p,m,w,_,C,V)=>{const P=f.component=Yv(f,w,_);if(Zf(f)&&(P.ctx.renderer=B),Xv(P),P.asyncDep){if(_&&_.registerDep(P,De),!f.el){const k=P.subTree=be(On);x(null,k,p,m)}}else De(P,f,p,m,_,C,V)},gr=(f,p,m)=>{const w=p.component=f.component;if(av(f,p,m))if(w.asyncDep&&!w.asyncResolved){de(w,p,m);return}else w.next=p,tv(w.update),w.effect.dirty=!0,w.update();else p.el=f.el,w.vnode=p},De=(f,p,m,w,_,C,V)=>{const P=()=>{if(f.isMounted){let{next:F,bu:z,u:j,parent:J,vnode:te}=f;{const yr=_p(f);if(yr){F&&(F.el=te.el,de(f,F,V)),yr.asyncDep.then(()=>{f.isUnmounted||P()});return}}let fe=F,ve;qn(f,!1),F?(F.el=te.el,de(f,F,V)):F=te,z&&$i(z),(ve=F.props&&F.props.onVnodeBeforeUpdate)&&Nt(ve,J,F,te),qn(f,!0);const Oe=Na(f),Et=f.subTree;f.subTree=Oe,T(Et,Oe,h(Et.el),v(Et),f,_,C),F.el=Oe.el,fe===null&&lv(f,Oe.el),j&&lt(j,_),(ve=F.props&&F.props.onVnodeUpdated)&&lt(()=>Nt(ve,J,F,te),_)}else{let F;const{el:z,props:j}=p,{bm:J,m:te,parent:fe}=f,ve=vs(p);if(qn(f,!1),J&&$i(J),!ve&&(F=j&&j.onVnodeBeforeMount)&&Nt(F,fe,p),qn(f,!0),z&&Ee){const Oe=()=>{f.subTree=Na(f),Ee(z,f.subTree,f,_,null)};ve?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Oe()):Oe()}else{const Oe=f.subTree=Na(f);T(null,Oe,m,w,f,_,C),p.el=Oe.el}if(te&&lt(te,_),!ve&&(F=j&&j.onVnodeMounted)){const Oe=p;lt(()=>Nt(F,fe,Oe),_)}(p.shapeFlag&256||fe&&vs(fe.vnode)&&fe.vnode.shapeFlag&256)&&f.a&&lt(f.a,_),f.isMounted=!0,p=m=w=null}},k=f.effect=new uc(P,vt,()=>vc(A),f.scope),A=f.update=()=>{k.dirty&&k.run()};A.id=f.uid,qn(f,!0),A()},de=(f,p,m)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,Mv(f,p.props,w,m),Uv(f,p.children,m),Ln(),Qu(f),Fn()},ae=(f,p,m,w,_,C,V,P,k=!1)=>{const A=f&&f.children,F=f?f.shapeFlag:0,z=p.children,{patchFlag:j,shapeFlag:J}=p;if(j>0){if(j&128){dn(A,z,m,w,_,C,V,P,k);return}else if(j&256){Qt(A,z,m,w,_,C,V,P,k);return}}J&8?(F&16&&Ge(A,_,C),z!==A&&u(m,z)):F&16?J&16?dn(A,z,m,w,_,C,V,P,k):Ge(A,_,C,!0):(F&8&&u(m,""),J&16&&ke(z,m,w,_,C,V,P,k))},Qt=(f,p,m,w,_,C,V,P,k)=>{f=f||Rr,p=p||Rr;const A=f.length,F=p.length,z=Math.min(A,F);let j;for(j=0;j<z;j++){const J=p[j]=k?_n(p[j]):Vt(p[j]);T(f[j],J,m,null,_,C,V,P,k)}A>F?Ge(f,_,C,!0,!1,z):ke(p,m,w,_,C,V,P,k,z)},dn=(f,p,m,w,_,C,V,P,k)=>{let A=0;const F=p.length;let z=f.length-1,j=F-1;for(;A<=z&&A<=j;){const J=f[A],te=p[A]=k?_n(p[A]):Vt(p[A]);if(os(J,te))T(J,te,m,null,_,C,V,P,k);else break;A++}for(;A<=z&&A<=j;){const J=f[z],te=p[j]=k?_n(p[j]):Vt(p[j]);if(os(J,te))T(J,te,m,null,_,C,V,P,k);else break;z--,j--}if(A>z){if(A<=j){const J=j+1,te=J<F?p[J].el:w;for(;A<=j;)T(null,p[A]=k?_n(p[A]):Vt(p[A]),m,te,_,C,V,P,k),A++}}else if(A>j)for(;A<=z;)at(f[A],_,C,!0),A++;else{const J=A,te=A,fe=new Map;for(A=te;A<=j;A++){const dt=p[A]=k?_n(p[A]):Vt(p[A]);dt.key!=null&&fe.set(dt.key,A)}let ve,Oe=0;const Et=j-te+1;let yr=!1,Lu=0;const is=new Array(Et);for(A=0;A<Et;A++)is[A]=0;for(A=J;A<=z;A++){const dt=f[A];if(Oe>=Et){at(dt,_,C,!0);continue}let Ot;if(dt.key!=null)Ot=fe.get(dt.key);else for(ve=te;ve<=j;ve++)if(is[ve-te]===0&&os(dt,p[ve])){Ot=ve;break}Ot===void 0?at(dt,_,C,!0):(is[Ot-te]=A+1,Ot>=Lu?Lu=Ot:yr=!0,T(dt,p[Ot],m,null,_,C,V,P,k),Oe++)}const Fu=yr?qv(is):Rr;for(ve=Fu.length-1,A=Et-1;A>=0;A--){const dt=te+A,Ot=p[dt],Uu=dt+1<F?p[dt+1].el:w;is[A]===0?T(null,Ot,m,Uu,_,C,V,P,k):yr&&(ve<0||A!==Fu[ve]?Dt(Ot,m,Uu,2):ve--)}}},Dt=(f,p,m,w,_=null)=>{const{el:C,type:V,transition:P,children:k,shapeFlag:A}=f;if(A&6){Dt(f.component.subTree,p,m,w);return}if(A&128){f.suspense.move(p,m,w);return}if(A&64){V.move(f,p,m,B);return}if(V===Je){r(C,p,m);for(let z=0;z<k.length;z++)Dt(k[z],p,m,w);r(f.anchor,p,m);return}if(V===Hi){S(f,p,m);return}if(w!==2&&A&1&&P)if(w===0)P.beforeEnter(C),r(C,p,m),lt(()=>P.enter(C),_);else{const{leave:z,delayLeave:j,afterLeave:J}=P,te=()=>r(C,p,m),fe=()=>{z(C,()=>{te(),J&&J()})};j?j(C,te,fe):fe()}else r(C,p,m)},at=(f,p,m,w=!1,_=!1)=>{const{type:C,props:V,ref:P,children:k,dynamicChildren:A,shapeFlag:F,patchFlag:z,dirs:j}=f;if(P!=null&&El(P,null,m,f,!0),F&256){p.ctx.deactivate(f);return}const J=F&1&&j,te=!vs(f);let fe;if(te&&(fe=V&&V.onVnodeBeforeUnmount)&&Nt(fe,p,f),F&6)Ti(f.component,m,w);else{if(F&128){f.suspense.unmount(m,w);return}J&&jn(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,m,_,B,w):A&&(C!==Je||z>0&&z&64)?Ge(A,p,m,!1,!0):(C===Je&&z&384||!_&&F&16)&&Ge(k,p,m),w&&mr(f)}(te&&(fe=V&&V.onVnodeUnmounted)||J)&&lt(()=>{fe&&Nt(fe,p,f),J&&jn(f,null,p,"unmounted")},m)},mr=f=>{const{type:p,el:m,anchor:w,transition:_}=f;if(p===Je){_r(m,w);return}if(p===Hi){$(f);return}const C=()=>{s(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:V,delayLeave:P}=_,k=()=>V(m,C);P?P(f.el,C,k):k()}else C()},_r=(f,p)=>{let m;for(;f!==p;)m=d(f),s(f),f=m;s(p)},Ti=(f,p,m)=>{const{bum:w,scope:_,update:C,subTree:V,um:P}=f;w&&$i(w),_.stop(),C&&(C.active=!1,at(V,f,p,m)),P&&lt(P,p),lt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ge=(f,p,m,w=!1,_=!1,C=0)=>{for(let V=C;V<f.length;V++)at(f[V],p,m,w,_)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let L=!1;const N=(f,p,m)=>{f==null?p._vnode&&at(p._vnode,null,null,!0):T(p._vnode||null,f,p,null,null,null,m),L||(L=!0,Qu(),Hf(),L=!1),p._vnode=f},B={p:T,um:at,m:Dt,r:mr,mt:ss,mc:ke,pc:ae,pbc:$e,n:v,o:t};let ce,Ee;return{render:N,hydrate:ce,createApp:Nv(N,ce)}}function La({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function jv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function mp(t,e,n=!1){const r=t.children,s=e.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=_n(s[i]),a.el=o.el),n||mp(o,a)),a.type===zo&&(a.el=o.el)}}function qv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function _p(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_p(e)}const Hv=t=>t.__isTeleport,Je=Symbol.for("v-fgt"),zo=Symbol.for("v-txt"),On=Symbol.for("v-cmt"),Hi=Symbol.for("v-stc"),Is=[];let Tt=null;function Ae(t=!1){Is.push(Tt=t?null:[])}function zv(){Is.pop(),Tt=Is[Is.length-1]||null}let Ms=1;function oh(t){Ms+=t}function yp(t){return t.dynamicChildren=Ms>0?Tt||Rr:null,zv(),Ms>0&&Tt&&Tt.push(t),t}function Me(t,e,n,r,s,i){return yp(R(t,e,n,r,s,i,!0))}function Ic(t,e,n,r,s){return yp(be(t,e,n,r,s,!0))}function io(t){return t?t.__v_isVNode===!0:!1}function os(t,e){return t.type===e.type&&t.key===e.key}const vp=({key:t})=>t??null,zi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||ht(t)||Z(t)?{i:Ve,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,r=0,s=null,i=t===Je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vp(e),ref:e&&zi(e),scopeId:Gf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ve};return a?(Tc(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=xe(n)?8:16),Ms>0&&!o&&Tt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Tt.push(l),l}const be=Kv;function Kv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===cv)&&(t=On),io(t)){const a=Mr(t,e,!0);return n&&Tc(a,n),Ms>0&&!i&&Tt&&(a.shapeFlag&6?Tt[Tt.indexOf(t)]=a:Tt.push(a)),a.patchFlag|=-2,a}if(rw(t)&&(t=t.__vccOpts),e){e=Gv(e);let{class:a,style:l}=e;a&&!xe(a)&&(e.class=Lo(a)),me(l)&&(Lf(l)&&!K(l)&&(l=Le({},l)),e.style=cc(l))}const o=xe(t)?1:hv(t)?128:Hv(t)?64:me(t)?4:Z(t)?2:0;return R(t,e,n,r,s,o,i,!0)}function Gv(t){return t?Lf(t)||up(t)?Le({},t):t:null}function Mr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Wv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&vp(a),ref:e&&e.ref?n&&s?K(s)?s.concat(zi(e)):[s,zi(e)]:zi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mr(t.ssContent),ssFallback:t.ssFallback&&Mr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function wp(t=" ",e=0){return be(zo,null,t,e)}function Ep(t,e){const n=be(Hi,null,t);return n.staticCount=e,n}function Ls(t="",e=!1){return e?(Ae(),Ic(On,null,t)):be(On,null,t)}function Vt(t){return t==null||typeof t=="boolean"?be(On):K(t)?be(Je,null,t.slice()):typeof t=="object"?_n(t):be(zo,null,String(t))}function _n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mr(t)}function Tc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Tc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!up(e)?e._ctx=Ve:s===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:Ve},n=32):(e=String(e),r&64?(n=16,e=[wp(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Lo([e.class,r.class]));else if(s==="style")e.style=cc([e.style,r.style]);else if(Oo(s)){const i=e[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Nt(t,e,n,r=null){bt(t,e,7,[n,r])}const Qv=ap();let Jv=0;function Yv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Qv,i={uid:Jv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ry(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dp(r,s),emitsOptions:Kf(r,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:r.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sv.bind(null,i),t.ce&&t.ce(i),i}let Ze=null,oo,Il;{const t=Ef(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};oo=e("__VUE_INSTANCE_SETTERS__",n=>Ze=n),Il=e("__VUE_SSR_SETTERS__",n=>Ko=n)}const ii=t=>{const e=Ze;return oo(t),t.scope.on(),()=>{t.scope.off(),oo(e)}},ah=()=>{Ze&&Ze.scope.off(),oo(null)};function Ip(t){return t.vnode.shapeFlag&4}let Ko=!1;function Xv(t,e=!1){e&&Il(e);const{props:n,children:r}=t.vnode,s=Ip(t);Vv(t,n,s,e),Fv(t,r);const i=s?Zv(t,e):void 0;return e&&Il(!1),i}function Zv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Sv);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?tw(t):null,i=ii(t);Ln();const o=Sn(r,t,0,[t.props,s]);if(Fn(),i(),_f(o)){if(o.then(ah,ah),e)return o.then(a=>{lh(t,a,e)}).catch(a=>{Bo(a,t,0)});t.asyncDep=o}else lh(t,o,e)}else Tp(t,e)}function lh(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=Bf(e)),Tp(t,n)}let ch;function Tp(t,e,n){const r=t.type;if(!t.render){if(!e&&ch&&!r.render){const s=r.template||wc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=Le(Le({isCustomElement:i,delimiters:a},o),l);r.render=ch(s,c)}}t.render=r.render||vt}{const s=ii(t);Ln();try{Pv(t)}finally{Fn(),s()}}}const ew={get(t,e){return ut(t,"get",""),t[e]}};function tw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ew),slots:t.slots,emit:t.emit,expose:e}}function Go(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bf(Wy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ws)return ws[n](t)},has(e,n){return n in e||n in ws}}))}function nw(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function rw(t){return Z(t)&&"__vccOpts"in t}const st=(t,e)=>Qy(t,e,Ko);function Ap(t,e,n){const r=arguments.length;return r===2?me(e)&&!K(e)?io(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&io(n)&&(n=[n]),be(t,e,n))}const sw="3.4.25";/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const iw="http://www.w3.org/2000/svg",ow="http://www.w3.org/1998/Math/MathML",yn=typeof document<"u"?document:null,uh=yn&&yn.createElement("template"),aw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?yn.createElementNS(iw,t):e==="mathml"?yn.createElementNS(ow,t):yn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>yn.createTextNode(t),createComment:t=>yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{uh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=uh.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},lw=Symbol("_vtc");function cw(t,e,n){const r=t[lw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const hh=Symbol("_vod"),uw=Symbol("_vsh"),hw=Symbol(""),dw=/(^|;)\s*display\s*:/;function fw(t,e,n){const r=t.style,s=xe(n);let i=!1;if(n&&!s){if(e)if(xe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ki(r,a,"")}else for(const o in e)n[o]==null&&Ki(r,o,"");for(const o in n)o==="display"&&(i=!0),Ki(r,o,n[o])}else if(s){if(e!==n){const o=r[hw];o&&(n+=";"+o),r.cssText=n,i=dw.test(n)}}else e&&t.removeAttribute("style");hh in t&&(t[hh]=i?r.display:"",t[uw]&&(r.display="none"))}const dh=/\s*!important$/;function Ki(t,e,n){if(K(n))n.forEach(r=>Ki(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=pw(t,e);dh.test(n)?t.setProperty(Wr(r),n.replace(dh,""),"important"):t[r]=n}}const fh=["Webkit","Moz","ms"],Fa={};function pw(t,e){const n=Fa[e];if(n)return n;let r=zt(e);if(r!=="filter"&&r in t)return Fa[e]=r;r=Mo(r);for(let s=0;s<fh.length;s++){const i=fh[s]+r;if(i in t)return Fa[e]=i}return e}const ph="http://www.w3.org/1999/xlink";function gw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ph,e.slice(6,e.length)):t.setAttributeNS(ph,e,n);else{const i=Ty(e);n==null||i&&!If(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function mw(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=If(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Kn(t,e,n,r){t.addEventListener(e,n,r)}function _w(t,e,n,r){t.removeEventListener(e,n,r)}const gh=Symbol("_vei");function yw(t,e,n,r,s=null){const i=t[gh]||(t[gh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=vw(e);if(r){const c=i[e]=Iw(r,s);Kn(t,a,c,l)}else o&&(_w(t,a,o,l),i[e]=void 0)}}const mh=/(?:Once|Passive|Capture)$/;function vw(t){let e;if(mh.test(t)){e={};let r;for(;r=t.match(mh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Wr(t.slice(2)),e]}let Ua=0;const ww=Promise.resolve(),Ew=()=>Ua||(ww.then(()=>Ua=0),Ua=Date.now());function Iw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;bt(Tw(r,n.value),e,5,[r])};return n.value=t,n.attached=Ew(),n}function Tw(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _h=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Aw=(t,e,n,r,s,i,o,a,l)=>{const c=s==="svg";e==="class"?cw(t,r,c):e==="style"?fw(t,n,r):Oo(e)?oc(e)||yw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bw(t,e,r,c))?mw(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),gw(t,e,r,c))};function bw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&_h(e)&&Z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _h(e)&&xe(n)?!1:e in t}const ao=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>$i(e,n):e};function Rw(t){t.target.composing=!0}function yh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Cr=Symbol("_assign"),vh={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Cr]=ao(s);const i=r||s.props&&s.props.type==="number";Kn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=to(a)),t[Cr](a)}),n&&Kn(t,"change",()=>{t.value=t.value.trim()}),e||(Kn(t,"compositionstart",Rw),Kn(t,"compositionend",yh),Kn(t,"change",yh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Cr]=ao(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?to(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Sw={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=No(e);Kn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?to(lo(o)):lo(o));t[Cr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,yc(()=>{t._assigning=!1})}),t[Cr]=ao(r)},mounted(t,{value:e,modifiers:{number:n}}){wh(t,e)},beforeUpdate(t,e,n){t[Cr]=ao(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||wh(t,e)}};function wh(t,e,n){const r=t.multiple,s=K(e);if(!(r&&!s&&!No(e))){for(let i=0,o=t.options.length;i<o;i++){const a=t.options[i],l=lo(a);if(r)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=e.some(u=>String(u)===String(l)):a.selected=by(e,l)>-1}else a.selected=e.has(l);else if(Fo(lo(a),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!r&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function lo(t){return"_value"in t?t._value:t.value}const Pw=["ctrl","shift","alt","meta"],Cw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pw.some(n=>t[`${n}Key`]&&!e.includes(n))},xw=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Cw[e[o]];if(a&&a(s,e))return}return t(s,...i)})},kw=Le({patchProp:Aw},aw);let Eh;function Dw(){return Eh||(Eh=$v(kw))}const Ow=(...t)=>{const e=Dw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Vw(r);if(!s)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Nw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Nw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Vw(t){return xe(t)?document.querySelector(t):t}/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const wr=typeof document<"u";function Mw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ue=Object.assign;function $a(t,e){const n={};for(const r in e){const s=e[r];n[r]=St(s)?s.map(t):t(s)}return n}const Ts=()=>{},St=Array.isArray,bp=/#/g,Lw=/&/g,Fw=/\//g,Uw=/=/g,$w=/\?/g,Rp=/\+/g,Bw=/%5B/g,jw=/%5D/g,Sp=/%5E/g,qw=/%60/g,Pp=/%7B/g,Hw=/%7C/g,Cp=/%7D/g,zw=/%20/g;function Ac(t){return encodeURI(""+t).replace(Hw,"|").replace(Bw,"[").replace(jw,"]")}function Kw(t){return Ac(t).replace(Pp,"{").replace(Cp,"}").replace(Sp,"^")}function Tl(t){return Ac(t).replace(Rp,"%2B").replace(zw,"+").replace(bp,"%23").replace(Lw,"%26").replace(qw,"`").replace(Pp,"{").replace(Cp,"}").replace(Sp,"^")}function Gw(t){return Tl(t).replace(Uw,"%3D")}function Ww(t){return Ac(t).replace(bp,"%23").replace($w,"%3F")}function Qw(t){return t==null?"":Ww(t).replace(Fw,"%2F")}function Fs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Jw=/\/$/,Yw=t=>t.replace(Jw,"");function Ba(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=tE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Fs(o)}}function Xw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ih(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Lr(e.matched[r],n.matched[s])&&xp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Lr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!eE(t[n],e[n]))return!1;return!0}function eE(t,e){return St(t)?Th(t,e):St(e)?Th(e,t):t===e}function Th(t,e){return St(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function tE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Us;(function(t){t.pop="pop",t.push="push"})(Us||(Us={}));var As;(function(t){t.back="back",t.forward="forward",t.unknown=""})(As||(As={}));function nE(t){if(!t)if(wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Yw(t)}const rE=/^[^#]+#/;function sE(t,e){return t.replace(rE,"#")+e}function iE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Wo=()=>({left:window.scrollX,top:window.scrollY});function oE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=iE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ah(t,e){return(history.state?history.state.position-e:-1)+t}const Al=new Map;function aE(t,e){Al.set(t,e)}function lE(t){const e=Al.get(t);return Al.delete(t),e}let cE=()=>location.protocol+"//"+location.host;function kp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Ih(l,"")}return Ih(n,t)+r+s}function uE(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=kp(t,location),y=n.value,T=e.value;let b=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}b=T?d.position-T.position:0}else r(g);s.forEach(x=>{x(n.value,y,{delta:b,type:Us.pop,direction:b?b>0?As.forward:As.back:As.unknown})})};function l(){o=n.value}function c(d){s.push(d);const g=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(ue({},d.state,{scroll:Wo()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function bh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Wo():null}}function hE(t){const{history:e,location:n}=window,r={value:kp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:cE()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(l,c){const u=ue({},e.state,bh(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=ue({},s.value,e.state,{forward:l,scroll:Wo()});i(u.current,u,!0);const h=ue({},bh(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function dE(t){t=nE(t);const e=hE(t),n=uE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ue({location:"",base:t,go:r,createHref:sE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fE(t){return typeof t=="string"||t&&typeof t=="object"}function Dp(t){return typeof t=="string"||typeof t=="symbol"}const pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Op=Symbol("");var Rh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Rh||(Rh={}));function Fr(t,e){return ue(new Error,{type:t,[Op]:!0},e)}function Jt(t,e){return t instanceof Error&&Op in t&&(e==null||!!(t.type&e))}const Sh="[^/]+?",pE={sensitive:!1,strict:!1,start:!0,end:!0},gE=/[.+*?^${}()[\]/\\]/g;function mE(t,e){const n=ue({},pE,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(gE,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:T,optional:b,regexp:x}=d;i.push({name:y,repeatable:T,optional:b});const O=x||Sh;if(O!==Sh){g+=10;try{new RegExp(`(${O})`)}catch($){throw new Error(`Invalid custom RegExp for param "${y}" (${O}): `+$.message)}}let S=T?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(S=b&&c.length<2?`(?:/${S})`:"/"+S),b&&(S+="?"),s+=S,g+=20,b&&(g+=-8),T&&(g+=-20),O===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",y=i[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:T,optional:b}=g,x=y in c?c[y]:"";if(St(x)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const O=St(x)?x.join("/"):x;if(!O)if(b)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=O}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function _E(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function yE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=_E(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ph(r))return 1;if(Ph(s))return-1}return s.length-r.length}function Ph(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vE={type:0,value:""},wE=/[a-zA-Z0-9_]/;function EE(t){if(!t)return[[]];if(t==="/")return[[vE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:wE.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function IE(t,e,n){const r=mE(EE(t.path),n),s=ue(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function TE(t,e){const n=[],r=new Map;e=kh({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const g=!d,y=AE(u);y.aliasOf=d&&d.record;const T=kh(e,u),b=[y];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const $ of S)b.push(ue({},y,{components:d?d.record.components:y.components,path:$,aliasOf:d?d.record:y}))}let x,O;for(const S of b){const{path:$}=S;if(h&&$[0]!=="/"){const ee=h.record.path,M=ee[ee.length-1]==="/"?"":"/";S.path=h.record.path+($&&M+$)}if(x=IE(S,h,T),d?d.alias.push(x):(O=O||x,O!==x&&O.alias.push(x),g&&u.name&&!xh(x)&&o(u.name)),y.children){const ee=y.children;for(let M=0;M<ee.length;M++)i(ee[M],x,d&&d.children[M])}d=d||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return O?()=>{o(O)}:Ts}function o(u){if(Dp(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&yE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Np(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!xh(u)&&r.set(u.record.name,u)}function c(u,h){let d,g={},y,T;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Fr(1,{location:u});T=d.record.name,g=ue(Ch(h.params,d.keys.filter(O=>!O.optional).concat(d.parent?d.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),u.params&&Ch(u.params,d.keys.map(O=>O.name))),y=d.stringify(g)}else if(u.path!=null)y=u.path,d=n.find(O=>O.re.test(y)),d&&(g=d.parse(y),T=d.record.name);else{if(d=h.name?r.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw Fr(1,{location:u,currentLocation:h});T=d.record.name,g=ue({},h.params,u.params),y=d.stringify(g)}const b=[];let x=d;for(;x;)b.unshift(x.record),x=x.parent;return{name:T,path:y,params:g,matched:b,meta:RE(b)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Ch(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function AE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:bE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function bE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function RE(t){return t.reduce((e,n)=>ue(e,n.meta),{})}function kh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Np(t,e){return e.children.some(n=>n===t||Np(t,n))}function SE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Rp," "),o=i.indexOf("="),a=Fs(o<0?i:i.slice(0,o)),l=o<0?null:Fs(i.slice(o+1));if(a in e){let c=e[a];St(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Dh(t){let e="";for(let n in t){const r=t[n];if(n=Gw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(St(r)?r.map(i=>i&&Tl(i)):[r&&Tl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function PE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=St(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const CE=Symbol(""),Oh=Symbol(""),bc=Symbol(""),Vp=Symbol(""),bl=Symbol("");function as(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Fr(4,{from:n,to:e})):d instanceof Error?l(d):fE(d)?l(Fr(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function ja(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(xE(l)){const u=(l.__vccOpts||l)[e];u&&i.push(vn(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=Mw(u)?u.default:u;o.components[a]=h;const g=(h.__vccOpts||h)[e];return g&&vn(g,n,r,o,a,s)()}))}}return i}function xE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Nh(t){const e=nn(bc),n=nn(Vp),r=st(()=>{const l=er(t.to);return e.resolve(l)}),s=st(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Lr.bind(null,u));if(d>-1)return d;const g=Vh(l[c-2]);return c>1&&Vh(u)===g&&h[h.length-1].path!==g?h.findIndex(Lr.bind(null,l[c-2])):d}),i=st(()=>s.value>-1&&NE(n.params,r.value.params)),o=st(()=>s.value>-1&&s.value===n.matched.length-1&&xp(n.params,r.value.params));function a(l={}){return OE(l)?e[er(t.replace)?"replace":"push"](er(t.to)).catch(Ts):Promise.resolve()}return{route:r,href:st(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const kE=Xf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Nh,setup(t,{slots:e}){const n=$o(Nh(t)),{options:r}=nn(bc),s=st(()=>({[Mh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Mh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ap("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),DE=kE;function OE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function NE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!St(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Vh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Mh=(t,e,n)=>t??e??n,VE=Xf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=nn(bl),s=st(()=>t.route||r.value),i=nn(Oh,0),o=st(()=>{let c=er(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=st(()=>s.value.matched[o.value]);qi(Oh,st(()=>o.value+1)),qi(CE,a),qi(bl,s);const l=mt();return ji(()=>[l.value,a.value,t.name],([c,u,h],[d,g,y])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Lr(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Lh(n.default,{Component:d,route:c});const g=h.props[u],y=g?g===!0?c.params:typeof g=="function"?g(c):g:null,b=Ap(d,ue({},y,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Lh(n.default,{Component:b,route:c})||b}}});function Lh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ME=VE;function LE(t){const e=TE(t.routes,t),n=t.parseQuery||SE,r=t.stringifyQuery||Dh,s=t.history,i=as(),o=as(),a=as(),l=Jy(pn);let c=pn;wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$a.bind(null,v=>""+v),h=$a.bind(null,Qw),d=$a.bind(null,Fs);function g(v,L){let N,B;return Dp(v)?(N=e.getRecordMatcher(v),B=L):B=v,e.addRoute(B,N)}function y(v){const L=e.getRecordMatcher(v);L&&e.removeRoute(L)}function T(){return e.getRoutes().map(v=>v.record)}function b(v){return!!e.getRecordMatcher(v)}function x(v,L){if(L=ue({},L||l.value),typeof v=="string"){const p=Ba(n,v,L.path),m=e.resolve({path:p.path},L),w=s.createHref(p.fullPath);return ue(p,m,{params:d(m.params),hash:Fs(p.hash),redirectedFrom:void 0,href:w})}let N;if(v.path!=null)N=ue({},v,{path:Ba(n,v.path,L.path).path});else{const p=ue({},v.params);for(const m in p)p[m]==null&&delete p[m];N=ue({},v,{params:h(p)}),L.params=h(L.params)}const B=e.resolve(N,L),ce=v.hash||"";B.params=u(d(B.params));const Ee=Xw(r,ue({},v,{hash:Kw(ce),path:B.path})),f=s.createHref(Ee);return ue({fullPath:Ee,hash:ce,query:r===Dh?PE(v.query):v.query||{}},B,{redirectedFrom:void 0,href:f})}function O(v){return typeof v=="string"?Ba(n,v,l.value.path):ue({},v)}function S(v,L){if(c!==v)return Fr(8,{from:L,to:v})}function $(v){return pe(v)}function ee(v){return $(ue(O(v),{replace:!0}))}function M(v){const L=v.matched[v.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let B=typeof N=="function"?N(v):N;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=O(B):{path:B},B.params={}),ue({query:v.query,hash:v.hash,params:B.path!=null?{}:v.params},B)}}function pe(v,L){const N=c=x(v),B=l.value,ce=v.state,Ee=v.force,f=v.replace===!0,p=M(N);if(p)return pe(ue(O(p),{state:typeof p=="object"?ue({},ce,p.state):ce,force:Ee,replace:f}),L||N);const m=N;m.redirectedFrom=L;let w;return!Ee&&Zw(r,B,N)&&(w=Fr(16,{to:m,from:B}),Dt(B,B,!0,!1)),(w?Promise.resolve(w):$e(m,B)).catch(_=>Jt(_)?Jt(_,2)?_:dn(_):ae(_,m,B)).then(_=>{if(_){if(Jt(_,2))return pe(ue({replace:f},O(_.to),{state:typeof _.to=="object"?ue({},ce,_.to.state):ce,force:Ee}),L||m)}else _=Bn(m,B,!0,f,ce);return hn(m,B,_),_})}function ke(v,L){const N=S(v,L);return N?Promise.reject(N):Promise.resolve()}function ot(v){const L=_r.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(v):v()}function $e(v,L){let N;const[B,ce,Ee]=FE(v,L);N=ja(B.reverse(),"beforeRouteLeave",v,L);for(const p of B)p.leaveGuards.forEach(m=>{N.push(vn(m,v,L))});const f=ke.bind(null,v,L);return N.push(f),Ge(N).then(()=>{N=[];for(const p of i.list())N.push(vn(p,v,L));return N.push(f),Ge(N)}).then(()=>{N=ja(ce,"beforeRouteUpdate",v,L);for(const p of ce)p.updateGuards.forEach(m=>{N.push(vn(m,v,L))});return N.push(f),Ge(N)}).then(()=>{N=[];for(const p of Ee)if(p.beforeEnter)if(St(p.beforeEnter))for(const m of p.beforeEnter)N.push(vn(m,v,L));else N.push(vn(p.beforeEnter,v,L));return N.push(f),Ge(N)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),N=ja(Ee,"beforeRouteEnter",v,L,ot),N.push(f),Ge(N))).then(()=>{N=[];for(const p of o.list())N.push(vn(p,v,L));return N.push(f),Ge(N)}).catch(p=>Jt(p,8)?p:Promise.reject(p))}function hn(v,L,N){a.list().forEach(B=>ot(()=>B(v,L,N)))}function Bn(v,L,N,B,ce){const Ee=S(v,L);if(Ee)return Ee;const f=L===pn,p=wr?history.state:{};N&&(B||f?s.replace(v.fullPath,ue({scroll:f&&p&&p.scroll},ce)):s.push(v.fullPath,ce)),l.value=v,Dt(v,L,N,f),dn()}let kt;function ss(){kt||(kt=s.listen((v,L,N)=>{if(!Ti.listening)return;const B=x(v),ce=M(B);if(ce){pe(ue(ce,{replace:!0}),B).catch(Ts);return}c=B;const Ee=l.value;wr&&aE(Ah(Ee.fullPath,N.delta),Wo()),$e(B,Ee).catch(f=>Jt(f,12)?f:Jt(f,2)?(pe(f.to,B).then(p=>{Jt(p,20)&&!N.delta&&N.type===Us.pop&&s.go(-1,!1)}).catch(Ts),Promise.reject()):(N.delta&&s.go(-N.delta,!1),ae(f,B,Ee))).then(f=>{f=f||Bn(B,Ee,!1),f&&(N.delta&&!Jt(f,8)?s.go(-N.delta,!1):N.type===Us.pop&&Jt(f,20)&&s.go(-1,!1)),hn(B,Ee,f)}).catch(Ts)}))}let gr=as(),De=as(),de;function ae(v,L,N){dn(v);const B=De.list();return B.length?B.forEach(ce=>ce(v,L,N)):console.error(v),Promise.reject(v)}function Qt(){return de&&l.value!==pn?Promise.resolve():new Promise((v,L)=>{gr.add([v,L])})}function dn(v){return de||(de=!v,ss(),gr.list().forEach(([L,N])=>v?N(v):L()),gr.reset()),v}function Dt(v,L,N,B){const{scrollBehavior:ce}=t;if(!wr||!ce)return Promise.resolve();const Ee=!N&&lE(Ah(v.fullPath,0))||(B||!N)&&history.state&&history.state.scroll||null;return yc().then(()=>ce(v,L,Ee)).then(f=>f&&oE(f)).catch(f=>ae(f,v,L))}const at=v=>s.go(v);let mr;const _r=new Set,Ti={currentRoute:l,listening:!0,addRoute:g,removeRoute:y,hasRoute:b,getRoutes:T,resolve:x,options:t,push:$,replace:ee,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:De.add,isReady:Qt,install(v){const L=this;v.component("RouterLink",DE),v.component("RouterView",ME),v.config.globalProperties.$router=L,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>er(l)}),wr&&!mr&&l.value===pn&&(mr=!0,$(s.location).catch(ce=>{}));const N={};for(const ce in pn)Object.defineProperty(N,ce,{get:()=>l.value[ce],enumerable:!0});v.provide(bc,L),v.provide(Vp,Vf(N)),v.provide(bl,l);const B=v.unmount;_r.add(v),v.unmount=function(){_r.delete(v),_r.size<1&&(c=pn,kt&&kt(),kt=null,l.value=pn,mr=!1,de=!1),B()}}};function Ge(v){return v.reduce((L,N)=>L.then(()=>ot(N)),Promise.resolve())}return Ti}function FE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Lr(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Lr(c,l))||s.push(l))}return[n,r,s]}const Qr=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},UE={},$E={class:"font-bold text-4xl"};function BE(t,e){return Ae(),Me("h1",$E,"Home")}const jE=Qr(UE,[["render",BE]]),qE={},HE={class:"font-bold text-4xl"};function zE(t,e){return Ae(),Me("h1",HE,"Online Görüşmeler")}const KE=Qr(qE,[["render",zE]]),GE={key:0,class:"fixed inset-0 bg-black bg-opacity-50 z-50"},WE={key:1,id:"add-blog-modal",tabindex:"-1","aria-hidden":"true",class:"fixed inset-0 flex items-center justify-center z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"},QE={class:"relative p-4 w-full max-w-4xl max-h-full"},JE={class:"relative bg-white rounded-lg shadow dark:bg-gray-700"},YE={class:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"},XE=R("h3",{class:"text-lg font-semibold text-gray-900 dark:text-white"}," Yeni Blog Yazısı Ekle ",-1),ZE=R("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[R("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),e0=R("span",{class:"sr-only"},"Close modal",-1),t0=[ZE,e0],n0={class:"grid gap-4 mb-4 grid-cols-2"},r0={class:"col-span-2"},s0=R("label",{for:"title",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},null,-1),i0={class:"col-span-2 sm:col-span-1"},o0=R("label",{for:"photo-upload",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Fotoğraf Seç",-1),a0=R("i",{class:"ri-download-2-line"},null,-1),l0={class:"col-span-2 sm:col-span-1"},c0=R("label",{for:"category",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Kategori",-1),u0=R("option",{value:"TV"},"Hukuk",-1),h0=R("option",{value:"PC"},"Haberler",-1),d0=R("option",{value:"GA"},"Son Dakika",-1),f0=R("option",{selected:"",value:"PH"},"Blog Yazısı",-1),p0=[u0,h0,d0,f0],g0={class:"col-span-2"},m0=R("label",{for:"content",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Yazı İçeriği",-1),_0=R("button",{type:"submit",class:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"},"Ekle",-1),y0={__name:"BlogModal",props:{show:Boolean},emits:["close","addBlog"],setup(t,{emit:e}){const n=e,r=mt(""),s=mt(""),i=mt("Blog Yazısı"),o=mt(null),a=mt(null),l=()=>{o.value.click()},c=d=>{const g=d.target.files[0];g&&g.type==="image/jpeg"?a.value=g.name:(a.value=null,console.error("Please select a JPEG file."))},u=st(()=>{if(a.value){const g=a.value;if(g.length<=20)return g;{const y=g.substring(0,10),T=g.substring(g.length-10);return`${y}...${T}`}}else return"Dosya Seçilmedi"}),h=()=>{const d={author:"admin",created_date:new Date,updated_date:new Date,url:"https://konect-software-solutions.github.io/tiryaki-hukuk-web-project/blog-single.html",title:r.value,image:"img link here",content:s.value,category:i.value};n("addBlog",d),r.value="",s.value="",i.value="Blog Yazısı",n("close")};return(d,g)=>(Ae(),Me(Je,null,[t.show?(Ae(),Me("div",GE)):Ls("",!0),t.show?(Ae(),Me("div",WE,[R("div",QE,[R("div",JE,[R("div",YE,[XE,R("button",{type:"button",onClick:g[0]||(g[0]=y=>d.$emit("close")),class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-toggle":"add-blog-modal"},t0)]),R("form",{onSubmit:xw(h,["prevent"]),class:"p-4 md:p-5"},[R("div",n0,[R("div",r0,[s0,Va(R("input",{"onUpdate:modelValue":g[1]||(g[1]=y=>r.value=y),type:"text",name:"title",id:"title",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Blog yazısı başlığını girin",required:""},null,512),[[vh,r.value]])]),R("div",i0,[o0,R("input",{type:"file",id:"photo-upload",ref_key:"fileInput",ref:o,style:{display:"none"},accept:"image/jpeg",onChange:c},null,544),R("button",{onClick:l,type:"button",id:"photo-upload",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"},[a0,wp(" "+_s(u.value),1)])]),R("div",l0,[c0,Va(R("select",{"onUpdate:modelValue":g[2]||(g[2]=y=>i.value=y),id:"category",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"},p0,512),[[Sw,i.value]])]),R("div",g0,[m0,Va(R("textarea",{"onUpdate:modelValue":g[3]||(g[3]=y=>s.value=y),id:"content",rows:"4",class:"block p-2.5 w-full h-64 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Ana içeriğinizi buraya yazınız."},null,512),[[vh,s.value]])])]),_0],32)])])])):Ls("",!0)],64))}},v0={key:0,id:"deleteModal",class:"font-medium text-sm fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"},w0={class:"bg-white rounded-lg p-4 max-w-sm w-full"},E0=R("div",{class:"mb-4"},[R("p",{class:"text-gray-800 text-sm"},"Bu blog yazısını silmek istediğinize emin misiniz?")],-1),I0={class:"flex justify-end"},T0={__name:"DeleteModal",props:{show:Boolean},setup(t){return(e,n)=>t.show?(Ae(),Me("div",v0,[R("div",w0,[E0,R("div",I0,[R("button",{onClick:n[0]||(n[0]=r=>e.$emit("close")),id:"cancelDelete",class:"bg-gray-300 text-gray-800 rounded px-4 py-2 mr-2"},"Hayır"),R("button",{onClick:n[1]||(n[1]=r=>e.$emit("delete")),id:"confirmDelete",class:"bg-red-600 text-white rounded px-4 py-2"},"Evet")])])])):Ls("",!0)}};var Fh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},A0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):A0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new b0;const d=i<<2|a>>4;if(r.push(d),c!==64){const g=a<<4&240|c>>2;if(r.push(g),h!==64){const y=c<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class b0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const R0=function(t){const e=Mp(t);return Lp.encodeByteArray(e,!0)},co=function(t){return R0(t).replace(/\./g,"")},Fp=function(t){try{return Lp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=()=>S0().__FIREBASE_DEFAULTS__,C0=()=>{if(typeof process>"u"||typeof Fh>"u")return;const t=Fh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},x0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fp(t[1]);return e&&JSON.parse(e)},Qo=()=>{try{return P0()||C0()||x0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Up=t=>{var e,n;return(n=(e=Qo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},k0=t=>{const e=Up(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},$p=()=>{var t;return(t=Qo())===null||t===void 0?void 0:t.config},Bp=t=>{var e;return(e=Qo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[co(JSON.stringify(n)),co(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function N0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function V0(){var t;const e=(t=Qo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function M0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function L0(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function F0(){return!V0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qp(){try{return typeof indexedDB=="object"}catch{return!1}}function Hp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function U0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0="FirebaseError";class xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$0,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ur.prototype.create)}}class ur{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?B0(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new xt(s,a,r)}}function B0(t,e){return t.replace(j0,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const j0=/\{\$([^}]+)}/g;function q0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $s(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Uh(i)&&Uh(o)){if(!$s(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Uh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function H0(t,e){const n=new z0(t,e);return n.subscribe.bind(n)}class z0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");K0(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qa),s.error===void 0&&(s.error=qa),s.complete===void 0&&(s.complete=qa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qa(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=1e3,W0=2,Q0=4*60*60*1e3,J0=.5;function $h(t,e=G0,n=W0){const r=e*Math.pow(n,t),s=Math.round(J0*r*(Math.random()-.5)*2);return Math.min(Q0,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){return t&&t._delegate?t._delegate:t}class Pt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new D0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Z0(e))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hn){return this.instances.has(e)}getOptions(e=Hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:X0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hn){return this.component?this.component.multipleInstances?e:Hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function X0(t){return t===Hn?void 0:t}function Z0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Y0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const tI={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},nI=re.INFO,rI={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},sI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jo{constructor(e){this.name=e,this._logLevel=nI,this._logHandler=sI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const iI=(t,e)=>e.some(n=>t instanceof n);let Bh,jh;function oI(){return Bh||(Bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aI(){return jh||(jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zp=new WeakMap,Rl=new WeakMap,Kp=new WeakMap,Ha=new WeakMap,Rc=new WeakMap;function lI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zp.set(n,t)}).catch(()=>{}),Rc.set(e,t),e}function cI(t){if(Rl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rl.set(t,e)}let Sl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uI(t){Sl=t(Sl)}function hI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(za(this),e,...n);return Kp.set(r,e.sort?e.sort():[e]),Pn(r)}:aI().includes(t)?function(...e){return t.apply(za(this),e),Pn(zp.get(this))}:function(...e){return Pn(t.apply(za(this),e))}}function dI(t){return typeof t=="function"?hI(t):(t instanceof IDBTransaction&&cI(t),iI(t,oI())?new Proxy(t,Sl):t)}function Pn(t){if(t instanceof IDBRequest)return lI(t);if(Ha.has(t))return Ha.get(t);const e=dI(t);return e!==t&&(Ha.set(t,e),Rc.set(e,t)),e}const za=t=>Rc.get(t);function Gp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Pn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Pn(o.result),l.oldVersion,l.newVersion,Pn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const fI=["get","getKey","getAll","getAllKeys","count"],pI=["put","add","delete","clear"],Ka=new Map;function qh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ka.get(e))return Ka.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=pI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Ka.set(e,i),i}uI(t=>({...t,get:(e,n,r)=>qh(e,n)||t.get(e,n,r),has:(e,n)=>!!qh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pl="@firebase/app",Hh="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new Jo("@firebase/app"),_I="@firebase/app-compat",yI="@firebase/analytics-compat",vI="@firebase/analytics",wI="@firebase/app-check-compat",EI="@firebase/app-check",II="@firebase/auth",TI="@firebase/auth-compat",AI="@firebase/database",bI="@firebase/database-compat",RI="@firebase/functions",SI="@firebase/functions-compat",PI="@firebase/installations",CI="@firebase/installations-compat",xI="@firebase/messaging",kI="@firebase/messaging-compat",DI="@firebase/performance",OI="@firebase/performance-compat",NI="@firebase/remote-config",VI="@firebase/remote-config-compat",MI="@firebase/storage",LI="@firebase/storage-compat",FI="@firebase/firestore",UI="@firebase/firestore-compat",$I="firebase",BI="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="[DEFAULT]",jI={[Pl]:"fire-core",[_I]:"fire-core-compat",[vI]:"fire-analytics",[yI]:"fire-analytics-compat",[EI]:"fire-app-check",[wI]:"fire-app-check-compat",[II]:"fire-auth",[TI]:"fire-auth-compat",[AI]:"fire-rtdb",[bI]:"fire-rtdb-compat",[RI]:"fire-fn",[SI]:"fire-fn-compat",[PI]:"fire-iid",[CI]:"fire-iid-compat",[xI]:"fire-fcm",[kI]:"fire-fcm-compat",[DI]:"fire-perf",[OI]:"fire-perf-compat",[NI]:"fire-rc",[VI]:"fire-rc-compat",[MI]:"fire-gcs",[LI]:"fire-gcs-compat",[FI]:"fire-fst",[UI]:"fire-fst-compat","fire-js":"fire-js",[$I]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Map,qI=new Map,xl=new Map;function zh(t,e){try{t.container.addComponent(e)}catch(n){rr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kt(t){const e=t.name;if(xl.has(e))return rr.debug(`There were multiple attempts to register component ${e}.`),!1;xl.set(e,t);for(const n of uo.values())zh(n,t);for(const n of qI.values())zh(n,t);return!0}function hr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function An(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new ur("app","Firebase",HI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=BI;function Wp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Cn.create("bad-app-name",{appName:String(s)});if(n||(n=$p()),!n)throw Cn.create("no-options");const i=uo.get(s);if(i){if($s(n,i.options)&&$s(r,i.config))return i;throw Cn.create("duplicate-app",{appName:s})}const o=new eI(s);for(const l of xl.values())o.addComponent(l);const a=new zI(n,r,o);return uo.set(s,a),a}function Sc(t=Cl){const e=uo.get(t);if(!e&&t===Cl&&$p())return Wp();if(!e)throw Cn.create("no-app",{appName:t});return e}function wt(t,e,n){var r;let s=(r=jI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rr.warn(a.join(" "));return}Kt(new Pt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="firebase-heartbeat-database",GI=1,Bs="firebase-heartbeat-store";let Ga=null;function Qp(){return Ga||(Ga=Gp(KI,GI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),Ga}async function WI(t){try{const n=(await Qp()).transaction(Bs),r=await n.objectStore(Bs).get(Jp(t));return await n.done,r}catch(e){if(e instanceof xt)rr.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rr.warn(n.message)}}}async function Kh(t,e){try{const r=(await Qp()).transaction(Bs,"readwrite");await r.objectStore(Bs).put(e,Jp(t)),await r.done}catch(n){if(n instanceof xt)rr.warn(n.message);else{const r=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(r.message)}}}function Jp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=1024,JI=30*24*60*60*1e3;class YI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=JI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gh(),{heartbeatsToSend:r,unsentEntries:s}=XI(this._heartbeatsCache.heartbeats),i=co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gh(){return new Date().toISOString().substring(0,10)}function XI(t,e=QI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Wh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Wh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qp()?Hp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wh(t){return co(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){Kt(new Pt("platform-logger",e=>new gI(e),"PRIVATE")),Kt(new Pt("heartbeat",e=>new YI(e),"PRIVATE")),wt(Pl,Hh,t),wt(Pl,Hh,"esm2017"),wt("fire-js","")}eT("");var tT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Pc=Pc||{},Q=tT||self;function Yo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Xo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nT(t){return Object.prototype.hasOwnProperty.call(t,Wa)&&t[Wa]||(t[Wa]=++rT)}var Wa="closure_uid_"+(1e9*Math.random()>>>0),rT=0;function sT(t,e,n){return t.call.apply(t.bind,arguments)}function iT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function et(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=sT:et=iT,et.apply(null,arguments)}function xi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Un(){this.s=this.s,this.o=this.o}var oT=0;Un.prototype.s=!1;Un.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),oT!=0)&&nT(this)};Un.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Cc(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Qh(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Yo(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}tt.prototype.h=function(){this.defaultPrevented=!0};var aT=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Q.addEventListener("test",n,e),Q.removeEventListener("test",n,e)}catch{}return t}();function js(t){return/^[\s\xa0]*$/.test(t)}function Zo(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Lt(t){return Zo().indexOf(t)!=-1}function xc(t){return xc[" "](t),t}xc[" "]=function(){};function lT(t,e){var n=tA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var cT=Lt("Opera"),Ur=Lt("Trident")||Lt("MSIE"),Xp=Lt("Edge"),kl=Xp||Ur,Zp=Lt("Gecko")&&!(Zo().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),uT=Zo().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function eg(){var t=Q.document;return t?t.documentMode:void 0}var Dl;e:{var Qa="",Ja=function(){var t=Zo();if(Zp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Xp)return/Edge\/([\d\.]+)/.exec(t);if(Ur)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uT)return/WebKit\/(\S+)/.exec(t);if(cT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ja&&(Qa=Ja?Ja[1]:""),Ur){var Ya=eg();if(Ya!=null&&Ya>parseFloat(Qa)){Dl=String(Ya);break e}}Dl=Qa}var Ol;if(Q.document&&Ur){var Jh=eg();Ol=Jh||parseInt(Dl,10)||void 0}else Ol=void 0;var hT=Ol;function qs(t,e){if(tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Zp){e:{try{xc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:dT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qs.$.h.call(this)}}Ue(qs,tt);var dT={2:"touch",3:"pen",4:"mouse"};qs.prototype.h=function(){qs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ea="closure_listenable_"+(1e6*Math.random()|0),fT=0;function pT(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++fT,this.fa=this.ia=!1}function ta(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function kc(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function gT(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function tg(t){const e={};for(const n in t)e[n]=t[n];return e}const Yh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ng(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Yh.length;i++)n=Yh[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function na(t){this.src=t,this.g={},this.h=0}na.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Vl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new pT(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Nl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Yp(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ta(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Dc="closure_lm_"+(1e6*Math.random()|0),Xa={};function rg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)rg(t,e[i],n,r,s);return null}return n=og(n),t&&t[ea]?t.O(e,n,Xo(r)?!!r.capture:!!r,s):mT(t,e,n,!1,r,s)}function mT(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Xo(s)?!!s.capture:!!s,a=Nc(t);if(a||(t[Dc]=a=new na(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=_T(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)aT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(ig(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function _T(){function t(n){return e.call(t.src,t.listener,n)}const e=yT;return t}function sg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)sg(t,e[i],n,r,s);else r=Xo(r)?!!r.capture:!!r,n=og(n),t&&t[ea]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Vl(i,n,r,s),-1<n&&(ta(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Nc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vl(e,n,r,s)),(n=-1<t?e[t]:null)&&Oc(n))}function Oc(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ea])Nl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ig(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Nc(e))?(Nl(n,t),n.h==0&&(n.src=null,e[Dc]=null)):ta(t)}}}function ig(t){return t in Xa?Xa[t]:Xa[t]="on"+t}function yT(t,e){if(t.fa)t=!0;else{e=new qs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Oc(t),t=n.call(r,e)}return t}function Nc(t){return t=t[Dc],t instanceof na?t:null}var Za="__closure_events_fn_"+(1e9*Math.random()>>>0);function og(t){return typeof t=="function"?t:(t[Za]||(t[Za]=function(e){return t.handleEvent(e)}),t[Za])}function Fe(){Un.call(this),this.i=new na(this),this.S=this,this.J=null}Ue(Fe,Un);Fe.prototype[ea]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){sg(this,t,e,n,r)};function He(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new tt(e,t);else if(e instanceof tt)e.target=e.target||t;else{var s=e;e=new tt(r,t),ng(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=ki(o,r,!0,e)&&s}if(o=e.g=t,s=ki(o,r,!0,e)&&s,s=ki(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=ki(o,r,!1,e)&&s}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ta(n[r]);delete t.g[e],t.h--}}this.J=null};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ki(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Nl(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Vc=Q.JSON.stringify;class vT{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function wT(){var t=Mc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class ET{constructor(){this.h=this.g=null}add(e,n){const r=ag.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ag=new vT(()=>new IT,t=>t.reset());class IT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TT(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function AT(t){Q.setTimeout(()=>{throw t},0)}let Hs,zs=!1,Mc=new ET,lg=()=>{const t=Q.Promise.resolve(void 0);Hs=()=>{t.then(bT)}};var bT=()=>{for(var t;t=wT();){try{t.h.call(t.g)}catch(n){AT(n)}var e=ag;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}zs=!1};function ra(t,e){Fe.call(this),this.h=t||1,this.g=e||Q,this.j=et(this.qb,this),this.l=Date.now()}Ue(ra,Fe);D=ra.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),He(this,"tick"),this.ga&&(Lc(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lc(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){ra.$.N.call(this),Lc(this),delete this.g};function Fc(t,e,n){if(typeof t=="function")n&&(t=et(t,n));else if(t&&typeof t.handleEvent=="function")t=et(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function cg(t){t.g=Fc(()=>{t.g=null,t.i&&(t.i=!1,cg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class RT extends Un{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cg(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ks(t){Un.call(this),this.h=t,this.g={}}Ue(Ks,Un);var Xh=[];function ug(t,e,n,r){Array.isArray(n)||(n&&(Xh[0]=n.toString()),n=Xh);for(var s=0;s<n.length;s++){var i=rg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function hg(t){kc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Oc(e)},t),t.g={}}Ks.prototype.N=function(){Ks.$.N.call(this),hg(this)};Ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sa(){this.g=!0}sa.prototype.Ea=function(){this.g=!1};function ST(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function PT(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ar(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+xT(t,n)+(r?" "+r:"")})}function CT(t,e){t.info(function(){return"TIMEOUT: "+e})}sa.prototype.info=function(){};function xT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Vc(n)}catch{return e}}var dr={},Zh=null;function ia(){return Zh=Zh||new Fe}dr.Ta="serverreachability";function dg(t){tt.call(this,dr.Ta,t)}Ue(dg,tt);function Gs(t){const e=ia();He(e,new dg(e))}dr.STAT_EVENT="statevent";function fg(t,e){tt.call(this,dr.STAT_EVENT,t),this.stat=e}Ue(fg,tt);function it(t){const e=ia();He(e,new fg(e,t))}dr.Ua="timingevent";function pg(t,e){tt.call(this,dr.Ua,t),this.size=e}Ue(pg,tt);function ai(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var oa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},gg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Uc(){}Uc.prototype.h=null;function ed(t){return t.h||(t.h=t.i())}function mg(){}var li={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function $c(){tt.call(this,"d")}Ue($c,tt);function Bc(){tt.call(this,"c")}Ue(Bc,tt);var Ml;function aa(){}Ue(aa,Uc);aa.prototype.g=function(){return new XMLHttpRequest};aa.prototype.i=function(){return{}};Ml=new aa;function ci(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ks(this),this.P=kT,t=kl?125:void 0,this.V=new ra(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _g}function _g(){this.i=null,this.g="",this.h=!1}var kT=45e3,yg={},Ll={};D=ci.prototype;D.setTimeout=function(t){this.P=t};function Fl(t,e,n){t.L=1,t.A=ca(sn(e)),t.u=n,t.S=!0,vg(t,null)}function vg(t,e){t.G=Date.now(),ui(t),t.B=sn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Sg(n.i,"t",r),t.o=0,n=t.l.J,t.h=new _g,t.g=Wg(t.l,n?e:null,!t.u),0<t.O&&(t.M=new RT(et(t.Pa,t,t.g),t.O)),ug(t.U,t.g,"readystatechange",t.nb),e=t.I?tg(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Gs(),ST(t.j,t.v,t.B,t.m,t.W,t.u)}D.nb=function(t){t=t.target;const e=this.M;e&&Ft(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const u=Ft(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||kl||this.g&&(this.h.h||this.g.ja()||sd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Gs(3):Gs(2)),la(this);var n=this.g.da();this.ca=n;t:if(wg(this)){var r=sd(this.g);t="";var s=r.length,i=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Wn(this),bs(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,PT(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!js(a)){var c=a;break t}}c=null}if(n=c)Ar(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ul(this,n);else{this.i=!1,this.s=3,it(12),Wn(this),bs(this);break e}}this.S?(Eg(this,u,o),kl&&this.i&&u==3&&(ug(this.U,this.V,"tick",this.mb),this.V.start())):(Ar(this.j,this.m,o,null),Ul(this,o)),u==4&&Wn(this),this.i&&!this.J&&(u==4?Hg(this.l,this):(this.i=!1,ui(this)))}else XT(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Wn(this),bs(this)}}}catch{}finally{}};function wg(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Eg(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=DT(t,n),s==Ll){e==4&&(t.s=4,it(14),r=!1),Ar(t.j,t.m,null,"[Incomplete Response]");break}else if(s==yg){t.s=4,it(15),Ar(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ar(t.j,t.m,s,null),Ul(t,s);wg(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,it(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gc(e),e.M=!0,it(11))):(Ar(t.j,t.m,n,"[Invalid Chunked Response]"),Wn(t),bs(t))}D.mb=function(){if(this.g){var t=Ft(this.g),e=this.g.ja();this.o<e.length&&(la(this),Eg(this,t,e),this.i&&t!=4&&ui(this))}};function DT(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Ll:(n=Number(e.substring(n,r)),isNaN(n)?yg:(r+=1,r+n>e.length?Ll:(e=e.slice(r,r+n),t.o=r+n,e)))}D.cancel=function(){this.J=!0,Wn(this)};function ui(t){t.Y=Date.now()+t.P,Ig(t,t.P)}function Ig(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=ai(et(t.lb,t),e)}function la(t){t.C&&(Q.clearTimeout(t.C),t.C=null)}D.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(CT(this.j,this.B),this.L!=2&&(Gs(),it(17)),Wn(this),this.s=2,bs(this)):Ig(this,this.Y-t)};function bs(t){t.l.H==0||t.J||Hg(t.l,t)}function Wn(t){la(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Lc(t.V),hg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ul(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||$l(n.i,t))){if(!t.K&&$l(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)po(n),da(n);else break e;Kc(n),it(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ai(et(n.ib,n),6e3));if(1>=xg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Qn(n,11)}else if((t.K||n.g==t)&&po(n),!js(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(jc(i,i.h),i.h=null))}if(r.F){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,ye(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Gg(r,r.J?r.pa:null,r.Y),o.K){kg(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(la(a),ui(a)),r.g=o}else jg(r);0<n.j.length&&fa(n)}else c[0]!="stop"&&c[0]!="close"||Qn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Qn(n,7):zc(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Gs(4)}catch{}}function OT(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function NT(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Yo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Tg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=NT(t),r=OT(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Ag=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function tr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof tr){this.h=t.h,ho(this,t.j),this.s=t.s,this.g=t.g,fo(this,t.m),this.l=t.l;var e=t.i,n=new Ws;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),td(this,n),this.o=t.o}else t&&(e=String(t).match(Ag))?(this.h=!1,ho(this,e[1]||"",!0),this.s=ds(e[2]||""),this.g=ds(e[3]||"",!0),fo(this,e[4]),this.l=ds(e[5]||"",!0),td(this,e[6]||"",!0),this.o=ds(e[7]||"")):(this.h=!1,this.i=new Ws(null,this.h))}tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fs(e,nd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(fs(e,nd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(fs(n,n.charAt(0)=="/"?FT:LT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fs(n,$T)),t.join("")};function sn(t){return new tr(t)}function ho(t,e,n){t.j=n?ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function fo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function td(t,e,n){e instanceof Ws?(t.i=e,BT(t.i,t.h)):(n||(e=fs(e,UT)),t.i=new Ws(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function ca(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,MT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function MT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nd=/[#\/\?@]/g,LT=/[#\?:]/g,FT=/[#\?]/g,UT=/[#\?@]/g,$T=/#/g;function Ws(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function $n(t){t.g||(t.g=new Map,t.h=0,t.i&&VT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Ws.prototype;D.add=function(t,e){$n(this),this.i=null,t=Yr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bg(t,e){$n(t),e=Yr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Rg(t,e){return $n(t),e=Yr(t,e),t.g.has(e)}D.forEach=function(t,e){$n(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};D.ta=function(){$n(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};D.Z=function(t){$n(this);let e=[];if(typeof t=="string")Rg(this,t)&&(e=e.concat(this.g.get(Yr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return $n(this),this.i=null,t=Yr(this,t),Rg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Sg(t,e,n){bg(t,e),0<n.length&&(t.i=null,t.g.set(Yr(t,e),Cc(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Yr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function BT(t,e){e&&!t.j&&($n(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(bg(this,r),Sg(this,s,n))},t)),t.j=e}var jT=class{constructor(t,e){this.g=t,this.map=e}};function Pg(t){this.l=t||qT,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qT=10;function Cg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function xg(t){return t.h?1:t.g?t.g.size:0}function $l(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jc(t,e){t.g?t.g.add(e):t.h=e}function kg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Pg.prototype.cancel=function(){if(this.i=Dg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Dg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Cc(t.i)}var HT=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function zT(){this.g=new HT}function KT(t,e,n){const r=n||"";try{Tg(t,function(s,i){let o=s;Xo(s)&&(o=Vc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function GT(t,e){const n=new sa;if(Q.Image){const r=new Image;r.onload=xi(Di,n,r,"TestLoadImage: loaded",!0,e),r.onerror=xi(Di,n,r,"TestLoadImage: error",!1,e),r.onabort=xi(Di,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=xi(Di,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Di(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function hi(t){this.l=t.ec||null,this.j=t.ob||!1}Ue(hi,Uc);hi.prototype.g=function(){return new ua(this.l,this.j)};hi.prototype.i=function(t){return function(){return t}}({});function ua(t,e){Fe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=qc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(ua,Fe);var qc=0;D=ua.prototype;D.open=function(t,e){if(this.readyState!=qc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,di(this)),this.readyState=qc};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qs(this)),this.g&&(this.readyState=3,Qs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Og(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Og(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?di(this):Qs(this),this.readyState==3&&Og(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,di(this))};D.Ya=function(t){this.g&&(this.response=t,di(this))};D.ka=function(){this.g&&di(this)};function di(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var WT=Q.JSON.parse;function Te(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ng,this.L=this.M=!1}Ue(Te,Fe);var Ng="",QT=/^https?$/i,JT=["POST","PUT"];D=Te.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ml.g(),this.C=this.u?ed(this.u):ed(Ml),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){rd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=Yp(JT,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Lg(this),0<this.B&&((this.L=YT(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=Fc(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){rd(this,i)}};function YT(t){return Ur&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof Pc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function rd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Vg(t),ha(t)}function Vg(t){t.F||(t.F=!0,He(t,"complete"),He(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),ha(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ha(this,!0)),Te.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?Mg(this):this.kb())};D.kb=function(){Mg(this)};function Mg(t){if(t.h&&typeof Pc<"u"&&(!t.C[1]||Ft(t)!=4||t.da()!=2)){if(t.v&&Ft(t)==4)Fc(t.La,0,t);else if(He(t,"readystatechange"),Ft(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Ag)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!QT.test(s?s.toLowerCase():"")}n=r}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var i=2<Ft(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Vg(t)}}finally{ha(t)}}}}function ha(t,e){if(t.g){Lg(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=r}catch{}}}function Lg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function Ft(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),WT(e)}};function sd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ng:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function XT(t){const e={};t=(t.g&&2<=Ft(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(js(t[r]))continue;var n=TT(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}gT(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Fg(t){let e="";return kc(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Hc(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Fg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ye(t,e,n))}function ls(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ug(t){this.Ga=0,this.j=[],this.l=new sa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ls("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ls("baseRetryDelayMs",5e3,t),this.hb=ls("retryDelaySeedMs",1e4,t),this.eb=ls("forwardChannelMaxRetries",2,t),this.xa=ls("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Pg(t&&t.concurrentRequestLimit),this.Ja=new zT,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=Ug.prototype;D.ra=8;D.H=1;function zc(t){if($g(t),t.H==3){var e=t.W++,n=sn(t.I);if(ye(n,"SID",t.K),ye(n,"RID",e),ye(n,"TYPE","terminate"),fi(t,n),e=new ci(t,t.l,e),e.L=2,e.A=ca(sn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.A,n=!0),n||(e.g=Wg(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ui(e)}Kg(t)}function da(t){t.g&&(Gc(t),t.g.cancel(),t.g=null)}function $g(t){da(t),t.u&&(Q.clearTimeout(t.u),t.u=null),po(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function fa(t){if(!Cg(t.i)&&!t.m){t.m=!0;var e=t.Na;Hs||lg(),zs||(Hs(),zs=!0),Mc.add(e,t),t.C=0}}function ZT(t,e){return xg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ai(et(t.Na,t,e),zg(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new ci(this,this.l,t);let i=this.s;if(this.U&&(i?(i=tg(i),ng(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Bg(this,s,e),n=sn(this.I),ye(n,"RID",t),ye(n,"CVER",22),this.F&&ye(n,"X-HTTP-Session-Id",this.F),fi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Fg(i)))+"&"+e:this.o&&Hc(n,this.o,i)),jc(this.i,s),this.bb&&ye(n,"TYPE","init"),this.P?(ye(n,"$req",e),ye(n,"SID","null"),s.aa=!0,Fl(s,n,null)):Fl(s,n,e),this.H=2}}else this.H==3&&(t?id(this,t):this.j.length==0||Cg(this.i)||id(this))};function id(t,e){var n;e?n=e.m:n=t.W++;const r=sn(t.I);ye(r,"SID",t.K),ye(r,"RID",n),ye(r,"AID",t.V),fi(t,r),t.o&&t.s&&Hc(r,t.o,t.s),n=new ci(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Bg(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),jc(t.i,n),Fl(n,r,e)}function fi(t,e){t.na&&kc(t.na,function(n,r){ye(e,r,n)}),t.h&&Tg({},function(n,r){ye(e,r,n)})}function Bg(t,e,n){n=Math.min(t.j.length,n);var r=t.h?et(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{KT(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function jg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Hs||lg(),zs||(Hs(),zs=!0),Mc.add(e,t),t.A=0}}function Kc(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ai(et(t.Ma,t),zg(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,qg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ai(et(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),da(this),qg(this))};function Gc(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function qg(t){t.g=new ci(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=sn(t.wa);ye(e,"RID","rpc"),ye(e,"SID",t.K),ye(e,"AID",t.V),ye(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ye(e,"TO",t.qa),ye(e,"TYPE","xmlhttp"),fi(t,e),t.o&&t.s&&Hc(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=ca(sn(e)),n.u=null,n.S=!0,vg(n,t)}D.ib=function(){this.v!=null&&(this.v=null,da(this),Kc(this),it(19))};function po(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function Hg(t,e){var n=null;if(t.g==e){po(t),Gc(t),t.g=null;var r=2}else if($l(t.i,e))n=e.F,kg(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=ia(),He(r,new pg(r,n)),fa(t)}else jg(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&ZT(t,e)||r==2&&Kc(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Qn(t,5);break;case 4:Qn(t,10);break;case 3:Qn(t,6);break;default:Qn(t,2)}}}function zg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Qn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=et(t.pb,t);n||(n=new tr("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||ho(n,"https"),ca(n)),GT(n.toString(),r)}else it(2);t.H=0,t.h&&t.h.za(e),Kg(t),$g(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))};function Kg(t){if(t.H=0,t.ma=[],t.h){const e=Dg(t.i);(e.length!=0||t.j.length!=0)&&(Qh(t.ma,e),Qh(t.ma,t.j),t.i.i.length=0,Cc(t.j),t.j.length=0),t.h.ya()}}function Gg(t,e,n){var r=n instanceof tr?sn(n):new tr(n);if(r.g!="")e&&(r.g=e+"."+r.g),fo(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new tr(null);r&&ho(i,r),e&&(i.g=e),s&&fo(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&ye(r,n,e),ye(r,"VER",t.ra),fi(t,r),r}function Wg(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Te(new hi({ob:n})):new Te(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function Qg(){}D=Qg.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function go(){if(Ur&&!(10<=Number(hT)))throw Error("Environmental error: no available transport.")}go.prototype.g=function(t,e){return new gt(t,e)};function gt(t,e){Fe.call(this),this.g=new Ug(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!js(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!js(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xr(this)}Ue(gt,Fe);gt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;it(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Gg(t,null,t.Y),fa(t)};gt.prototype.close=function(){zc(this.g)};gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Vc(t),t=n);e.j.push(new jT(e.fb++,t)),e.H==3&&fa(e)};gt.prototype.N=function(){this.g.h=null,delete this.j,zc(this.g),delete this.g,gt.$.N.call(this)};function Jg(t){$c.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(Jg,$c);function Yg(){Bc.call(this),this.status=1}Ue(Yg,Bc);function Xr(t){this.g=t}Ue(Xr,Qg);Xr.prototype.Ba=function(){He(this.g,"a")};Xr.prototype.Aa=function(t){He(this.g,new Jg(t))};Xr.prototype.za=function(t){He(this.g,new Yg)};Xr.prototype.ya=function(){He(this.g,"b")};function eA(){this.blockSize=-1}function Ct(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(Ct,eA);Ct.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function el(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ct.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)el(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){el(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){el(this,r),s=0;break}}this.h=s,this.i+=e};Ct.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function he(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var tA={};function Wc(t){return-128<=t&&128>t?lT(t,function(e){return new he([e|0],0>e?-1:0)}):new he([t|0],0>t?-1:0)}function Ut(t){if(isNaN(t)||!isFinite(t))return xr;if(0>t)return je(Ut(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Bl;return new he(e,0)}function Xg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return je(Xg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ut(Math.pow(e,8)),r=xr,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Ut(Math.pow(e,i)),r=r.R(i).add(Ut(o))):(r=r.R(n),r=r.add(Ut(o)))}return r}var Bl=4294967296,xr=Wc(0),jl=Wc(1),od=Wc(16777216);D=he.prototype;D.ea=function(){if(_t(this))return-je(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Bl+r)*e,e*=Bl}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Yt(this))return"0";if(_t(this))return"-"+je(this).toString(t);for(var e=Ut(Math.pow(t,6)),n=this,r="";;){var s=_o(n,e).g;n=mo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Yt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Yt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function _t(t){return t.h==-1}D.X=function(t){return t=mo(this,t),_t(t)?-1:Yt(t)?0:1};function je(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new he(n,~t.h).add(jl)}D.abs=function(){return _t(this)?je(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new he(n,n[n.length-1]&-2147483648?-1:0)};function mo(t,e){return t.add(je(e))}D.R=function(t){if(Yt(this)||Yt(t))return xr;if(_t(this))return _t(t)?je(this).R(je(t)):je(je(this).R(t));if(_t(t))return je(this.R(je(t)));if(0>this.X(od)&&0>t.X(od))return Ut(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Oi(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Oi(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Oi(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Oi(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new he(n,0)};function Oi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function cs(t,e){this.g=t,this.h=e}function _o(t,e){if(Yt(e))throw Error("division by zero");if(Yt(t))return new cs(xr,xr);if(_t(t))return e=_o(je(t),e),new cs(je(e.g),je(e.h));if(_t(e))return e=_o(t,je(e)),new cs(je(e.g),e.h);if(30<t.g.length){if(_t(t)||_t(e))throw Error("slowDivide_ only works with positive integers.");for(var n=jl,r=e;0>=r.X(t);)n=ad(n),r=ad(r);var s=vr(n,1),i=vr(r,1);for(r=vr(r,2),n=vr(n,2);!Yt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=vr(r,1),n=vr(n,1)}return e=mo(t,s.R(e)),new cs(s,e)}for(s=xr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Ut(n),o=i.R(e);_t(o)||0<o.X(t);)n-=r,i=Ut(n),o=i.R(e);Yt(i)&&(i=jl),s=s.add(i),t=mo(t,o)}return new cs(s,t)}D.gb=function(t){return _o(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new he(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new he(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new he(n,this.h^t.h)};function ad(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new he(n,t.h)}function vr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new he(s,t.h)}go.prototype.createWebChannel=go.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;oa.NO_ERROR=0;oa.TIMEOUT=8;oa.HTTP_ERROR=6;gg.COMPLETE="complete";mg.EventType=li;li.OPEN="a";li.CLOSE="b";li.ERROR="c";li.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;Te.prototype.listenOnce=Te.prototype.P;Te.prototype.getLastError=Te.prototype.Sa;Te.prototype.getLastErrorCode=Te.prototype.Ia;Te.prototype.getStatus=Te.prototype.da;Te.prototype.getResponseJson=Te.prototype.Wa;Te.prototype.getResponseText=Te.prototype.ja;Te.prototype.send=Te.prototype.ha;Te.prototype.setWithCredentials=Te.prototype.Oa;Ct.prototype.digest=Ct.prototype.l;Ct.prototype.reset=Ct.prototype.reset;Ct.prototype.update=Ct.prototype.j;he.prototype.add=he.prototype.add;he.prototype.multiply=he.prototype.R;he.prototype.modulo=he.prototype.gb;he.prototype.compare=he.prototype.X;he.prototype.toNumber=he.prototype.ea;he.prototype.toString=he.prototype.toString;he.prototype.getBits=he.prototype.D;he.fromNumber=Ut;he.fromString=Xg;var nA=function(){return new go},rA=function(){return ia()},tl=oa,sA=gg,iA=dr,ld={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},oA=hi,Ni=mg,aA=Te,lA=Ct,kr=he;const cd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr="10.11.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Jo("@firebase/firestore");function us(){return sr.logLevel}function U(t,...e){if(sr.logLevel<=re.DEBUG){const n=e.map(Qc);sr.debug(`Firestore (${Zr}): ${t}`,...n)}}function on(t,...e){if(sr.logLevel<=re.ERROR){const n=e.map(Qc);sr.error(`Firestore (${Zr}): ${t}`,...n)}}function $r(t,...e){if(sr.logLevel<=re.WARN){const n=e.map(Qc);sr.warn(`Firestore (${Zr}): ${t}`,...n)}}function Qc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: `+t;throw on(e),new Error(e)}function ge(t,e){t||W()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class uA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hA{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new Zg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new Qe(e)}}class dA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new pA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=mA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Br(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ce(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ce(0,0))}static max(){return new Y(new Ce(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Js.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Js?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Js{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new we(n)}static emptyPath(){return new we([])}}const _A=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends Js{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return _A.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new q(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new q(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(we.fromString(e))}static fromName(e){return new H(we.fromString(e).popFirst(5))}static empty(){return new H(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new we(e.slice()))}}function yA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(r===1e9?new Ce(n+1,0):new Ce(n,r));return new Nn(s,H.empty(),e)}function vA(t){return new Nn(t.readTime,t.key,-1)}class Nn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nn(Y.min(),H.empty(),-1)}static max(){return new Nn(Y.max(),H.empty(),-1)}}function wA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class IA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==EA)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new E((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):E.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):E.reject(n)}static resolve(e){return new E((n,r)=>{n(e)})}static reject(e){return new E((n,r)=>{r(e)})}static waitFor(e){return new E((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=E.resolve(!1);for(const r of e)n=n.next(s=>s?E.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new E((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new E((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function TA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jc.oe=-1;function pa(t){return t==null}function yo(t){return t===0&&1/t==-1/0}function AA(t){return typeof t=="number"&&Number.isInteger(t)&&!yo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vi(this.root,e,this.comparator,!0)}}class Vi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hd(this.data.getIterator())}getIteratorFrom(e){return new hd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class hd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new At([])}unionWith(e){let n=new ze(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Br(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new nm("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const bA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(t){if(ge(!!t),typeof t=="string"){let e=0;const n=bA.exec(t);if(ge(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ir(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xc(t){const e=t.mapValue.fields.__previous_value__;return Yc(e)?Xc(e):e}function Ys(t){const e=Vn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Xs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Xs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yc(t)?4:SA(t)?9007199254740991:10:W()}function Gt(t,e){if(t===e)return!0;const n=or(t);if(n!==or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ys(t).isEqual(Ys(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vn(s.timestampValue),a=Vn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ir(s.bytesValue).isEqual(ir(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Se(s.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Se(s.integerValue)===Se(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Se(s.doubleValue),a=Se(i.doubleValue);return o===a?yo(o)===yo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Br(t.arrayValue.values||[],e.arrayValue.values||[],Gt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(ud(o)!==ud(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Gt(o[l],a[l])))return!1;return!0}(t,e);default:return W()}}function Zs(t,e){return(t.values||[]).find(n=>Gt(n,e))!==void 0}function jr(t,e){if(t===e)return 0;const n=or(t),r=or(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Se(i.integerValue||i.doubleValue),l=Se(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return dd(t.timestampValue,e.timestampValue);case 4:return dd(Ys(t),Ys(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ir(i),l=ir(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=oe(a[c],l[c]);if(u!==0)return u}return oe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=oe(Se(i.latitude),Se(o.latitude));return a!==0?a:oe(Se(i.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=jr(a[c],l[c]);if(u)return u}return oe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Mi.mapValue&&o===Mi.mapValue)return 0;if(i===Mi.mapValue)return 1;if(o===Mi.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=oe(l[h],u[h]);if(d!==0)return d;const g=jr(a[l[h]],c[u[h]]);if(g!==0)return g}return oe(l.length,u.length)}(t.mapValue,e.mapValue);default:throw W()}}function dd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Vn(t),r=Vn(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function qr(t){return ql(t)}function ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ir(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ql(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ql(n.fields[o])}`;return s+"}"}(t.mapValue):W()}function Hl(t){return!!t&&"integerValue"in t}function Zc(t){return!!t&&"arrayValue"in t}function fd(t){return!!t&&"nullValue"in t}function pd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Gi(t){return!!t&&"mapValue"in t}function Rs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Rs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Rs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function SA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Gi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rs(n)}setAll(e){let n=qe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Rs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Gi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Gi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){es(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new yt(Rs(this.value))}}function rm(t){const e=[];return es(t.fields,(n,r)=>{const s=new qe([n]);if(Gi(r)){const i=rm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ye(e,0,Y.min(),Y.min(),Y.min(),yt.empty(),0)}static newFoundDocument(e,n,r,s){return new Ye(e,1,n,Y.min(),r,s,0)}static newNoDocument(e,n){return new Ye(e,2,n,Y.min(),Y.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new Ye(e,3,n,Y.min(),Y.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ye&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.position=e,this.inclusive=n}}function gd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=jr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function md(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n="asc"){this.field=e,this.dir=n}}function PA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{}class Pe extends sm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xA(e,n,r):n==="array-contains"?new OA(e,r):n==="in"?new NA(e,r):n==="not-in"?new VA(e,r):n==="array-contains-any"?new MA(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new kA(e,r):new DA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(jr(n,this.value)):n!==null&&or(this.value)===or(n)&&this.matchesComparison(jr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends sm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wt(e,n)}matches(e){return im(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function im(t){return t.op==="and"}function om(t){return CA(t)&&im(t)}function CA(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function zl(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+qr(t.value);if(om(t))return t.filters.map(e=>zl(e)).join(",");{const e=t.filters.map(n=>zl(n)).join(",");return`${t.op}(${e})`}}function am(t,e){return t instanceof Pe?function(r,s){return s instanceof Pe&&r.op===s.op&&r.field.isEqual(s.field)&&Gt(r.value,s.value)}(t,e):t instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&am(o,s.filters[a]),!0):!1}(t,e):void W()}function lm(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${qr(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(lm).join(" ,")+"}"}(t):"Filter"}class xA extends Pe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class kA extends Pe{constructor(e,n){super(e,"in",n),this.keys=cm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class DA extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=cm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class OA extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zc(n)&&Zs(n.arrayValue,this.value)}}class NA extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zs(this.value.arrayValue,n)}}class VA extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zs(this.value.arrayValue,n)}}class MA extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function _d(t,e=null,n=[],r=[],s=null,i=null,o=null){return new LA(t,e,n,r,s,i,o)}function eu(t){const e=X(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qr(r)).join(",")),e.ue=n}return e.ue}function tu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!am(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!md(t.startAt,e.startAt)&&md(t.endAt,e.endAt)}function Kl(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function FA(t,e,n,r,s,i,o,a){return new ga(t,e,n,r,s,i,o,a)}function um(t){return new ga(t)}function yd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UA(t){return t.collectionGroup!==null}function Ss(t){const e=X(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ze(qe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new wo(i,r))}),n.has(qe.keyField().canonicalString())||e.ce.push(new wo(qe.keyField(),r))}return e.ce}function $t(t){const e=X(t);return e.le||(e.le=$A(e,Ss(t))),e.le}function $A(t,e){if(t.limitType==="F")return _d(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new wo(s.field,i)});const n=t.endAt?new vo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vo(t.startAt.position,t.startAt.inclusive):null;return _d(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gl(t,e,n){return new ga(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ma(t,e){return tu($t(t),$t(e))&&t.limitType===e.limitType}function hm(t){return`${eu($t(t))}|lt:${t.limitType}`}function Er(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>lm(s)).join(", ")}]`),pa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>qr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>qr(s)).join(",")),`Target(${r})`}($t(t))}; limitType=${t.limitType})`}function _a(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ss(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=gd(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Ss(r),s)||r.endAt&&!function(o,a,l){const c=gd(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Ss(r),s))}(t,e)}function BA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dm(t){return(e,n)=>{let r=!1;for(const s of Ss(t)){const i=jA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jA(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?jr(l,c):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return tm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=new Ie(H.comparator);function an(){return qA}const fm=new Ie(H.comparator);function ps(...t){let e=fm;for(const n of t)e=e.insert(n.key,n);return e}function pm(t){let e=fm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jn(){return Ps()}function gm(){return Ps()}function Ps(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const HA=new Ie(H.comparator),zA=new ze(H.comparator);function ne(...t){let e=zA;for(const n of t)e=e.add(n);return e}const KA=new ze(oe);function GA(){return KA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yo(e)?"-0":e}}function _m(t){return{integerValue:""+t}}function WA(t,e){return AA(e)?_m(e):mm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this._=void 0}}function QA(t,e,n){return t instanceof Eo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yc(i)&&(i=Xc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ei?vm(t,e):t instanceof ti?wm(t,e):function(s,i){const o=ym(s,i),a=vd(o)+vd(s.Pe);return Hl(o)&&Hl(s.Pe)?_m(a):mm(s.serializer,a)}(t,e)}function JA(t,e,n){return t instanceof ei?vm(t,e):t instanceof ti?wm(t,e):n}function ym(t,e){return t instanceof Io?function(r){return Hl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Eo extends ya{}class ei extends ya{constructor(e){super(),this.elements=e}}function vm(t,e){const n=Em(e);for(const r of t.elements)n.some(s=>Gt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ti extends ya{constructor(e){super(),this.elements=e}}function wm(t,e){let n=Em(e);for(const r of t.elements)n=n.filter(s=>!Gt(s,r));return{arrayValue:{values:n}}}class Io extends ya{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function vd(t){return Se(t.integerValue||t.doubleValue)}function Em(t){return Zc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function YA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ei&&s instanceof ei||r instanceof ti&&s instanceof ti?Br(r.elements,s.elements,Gt):r instanceof Io&&s instanceof Io?Gt(r.Pe,s.Pe):r instanceof Eo&&s instanceof Eo}(t.transform,e.transform)}class XA{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class va{}function Im(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nu(t.key,Bt.none()):new mi(t.key,t.data,Bt.none());{const n=t.data,r=yt.empty();let s=new ze(qe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new fr(t.key,r,new At(s.toArray()),Bt.none())}}function ZA(t,e,n){t instanceof mi?function(s,i,o){const a=s.value.clone(),l=Ed(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof fr?function(s,i,o){if(!Wi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Ed(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Tm(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Cs(t,e,n,r){return t instanceof mi?function(i,o,a,l){if(!Wi(i.precondition,o))return a;const c=i.value.clone(),u=Id(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof fr?function(i,o,a,l){if(!Wi(i.precondition,o))return a;const c=Id(i.fieldTransforms,l,o),u=o.data;return u.setAll(Tm(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Wi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function eb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ym(r.transform,s||null);i!=null&&(n===null&&(n=yt.empty()),n.set(r.field,i))}return n||null}function wd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Br(r,s,(i,o)=>YA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mi extends va{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class fr extends va{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ed(t,e,n){const r=new Map;ge(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,JA(o,a,n[s]))}return r}function Id(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,QA(i,o,e))}return r}class nu extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tb extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&ZA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Cs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Cs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Im(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Br(this.mutations,e.mutations,(n,r)=>wd(n,r))&&Br(this.baseMutations,e.baseMutations,(n,r)=>wd(n,r))}}class ru{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ge(e.mutations.length===r.length);let s=function(){return HA}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ru(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,se;function ib(t){switch(t){default:return W();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function Am(t){if(t===void 0)return on("GRPC error has no .code"),I.UNKNOWN;switch(t){case Re.OK:return I.OK;case Re.CANCELLED:return I.CANCELLED;case Re.UNKNOWN:return I.UNKNOWN;case Re.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Re.INTERNAL:return I.INTERNAL;case Re.UNAVAILABLE:return I.UNAVAILABLE;case Re.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Re.NOT_FOUND:return I.NOT_FOUND;case Re.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Re.ABORTED:return I.ABORTED;case Re.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Re.DATA_LOSS:return I.DATA_LOSS;default:return W()}}(se=Re||(Re={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=new kr([4294967295,4294967295],0);function Td(t){const e=ob().encode(t),n=new lA;return n.update(e),new Uint8Array(n.digest())}function Ad(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new kr([n,r],0),new kr([s,i],0)]}class su{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new gs(`Invalid padding: ${n}`);if(r<0)throw new gs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new gs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=kr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(kr.fromNumber(r)));return s.compare(ab)===1&&(s=new kr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Td(e),[r,s]=Ad(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new su(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Td(e),[r,s]=Ad(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,_i.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wa(Y.min(),s,new Ie(oe),an(),ne())}}class _i{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new _i(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class bm{constructor(e,n){this.targetId=e,this.me=n}}class Rm{constructor(e,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class bd{constructor(){this.fe=0,this.ge=Sd(),this.pe=nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:W()}}),new _i(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Sd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class lb{constructor(e){this.Le=e,this.Be=new Map,this.ke=an(),this.qe=Rd(),this.Qe=new Ie(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Kl(i))if(r===0){const o=new H(i.path);this.Ue(n,o,Ye.newNoDocument(o,Y.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ir(r).toUint8Array()}catch(l){if(l instanceof nm)return $r("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new su(o,s,i)}catch(l){return $r(l instanceof gs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Kl(a.target)){const l=new H(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ye.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=ne();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new wa(e,n,this.Qe,this.ke,r);return this.ke=an(),this.qe=Rd(),this.Qe=new Ie(oe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new bd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ze(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new bd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Rd(){return new Ie(H.comparator)}function Sd(){return new Ie(H.comparator)}const cb={asc:"ASCENDING",desc:"DESCENDING"},ub={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},hb={and:"AND",or:"OR"};class db{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wl(t,e){return t.useProto3Json||pa(e)?e:{value:e}}function To(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fb(t,e){return To(t,e.toTimestamp())}function jt(t){return ge(!!t),Y.fromTimestamp(function(n){const r=Vn(n);return new Ce(r.seconds,r.nanos)}(t))}function iu(t,e){return Ql(t,e).canonicalString()}function Ql(t,e){const n=function(s){return new we(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Pm(t){const e=we.fromString(t);return ge(Om(e)),e}function Jl(t,e){return iu(t.databaseId,e.path)}function nl(t,e){const n=Pm(e);if(n.get(1)!==t.databaseId.projectId)throw new q(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(xm(n))}function Cm(t,e){return iu(t.databaseId,e)}function pb(t){const e=Pm(t);return e.length===4?we.emptyPath():xm(e)}function Yl(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xm(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Pd(t,e,n){return{name:Jl(t,e),fields:n.value.mapValue.fields}}function gb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(ge(u===void 0||typeof u=="string"),nt.fromBase64String(u||"")):(ge(u===void 0||u instanceof Buffer||u instanceof Uint8Array),nt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?I.UNKNOWN:Am(c.code);return new q(u,c.message||"")}(o);n=new Rm(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=nl(t,r.document.name),i=jt(r.document.updateTime),o=r.document.createTime?jt(r.document.createTime):Y.min(),a=new yt({mapValue:{fields:r.document.fields}}),l=Ye.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Qi(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=nl(t,r.document),i=r.readTime?jt(r.readTime):Y.min(),o=Ye.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Qi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=nl(t,r.document),i=r.removedTargetIds||[];n=new Qi([],i,s,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new sb(s,i),a=r.targetId;n=new bm(a,o)}}return n}function mb(t,e){let n;if(e instanceof mi)n={update:Pd(t,e.key,e.value)};else if(e instanceof nu)n={delete:Jl(t,e.key)};else if(e instanceof fr)n={update:Pd(t,e.key,e.data),updateMask:bb(e.fieldMask)};else{if(!(e instanceof tb))return W();n={verify:Jl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Eo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ei)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ti)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Io)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:fb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W()}(t,e.precondition)),n}function _b(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?jt(s.updateTime):jt(i);return o.isEqual(Y.min())&&(o=jt(i)),new XA(o,s.transformResults||[])}(n,e))):[]}function yb(t,e){return{documents:[Cm(t,e.path)]}}function vb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Cm(t,s);const i=function(c){if(c.length!==0)return Dm(Wt.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:Ir(d.field),direction:Ib(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Wl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:s}}function wb(t){let e=pb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ge(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=km(h);return d instanceof Wt&&om(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new wo(Tr(y.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,pa(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,g=h.values||[];return new vo(g,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,g=h.values||[];return new vo(g,d)}(n.endAt)),FA(e,s,o,i,a,"F",l,c)}function Eb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function km(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Tr(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Tr(n.unaryFilter.field);return Pe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tr(n.unaryFilter.field);return Pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Tr(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Tr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>km(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(t):W()}function Ib(t){return cb[t]}function Tb(t){return ub[t]}function Ab(t){return hb[t]}function Ir(t){return{fieldPath:t.canonicalString()}}function Tr(t){return qe.fromServerFormat(t.fieldPath)}function Dm(t){return t instanceof Pe?function(n){if(n.op==="=="){if(pd(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NAN"}};if(fd(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pd(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NAN"}};if(fd(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(n.field),op:Tb(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(s=>Dm(s));return r.length===1?r[0]:{compositeFilter:{op:Ab(n.op),filters:r}}}(t):W()}function bb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Om(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n,r,s,i=Y.min(),o=Y.min(),a=nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e){this.ut=e}}function Sb(t){const e=wb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(){this.on=new Cb}addToCollectionParentIndex(e,n){return this.on.add(n),E.resolve()}getCollectionParents(e,n){return E.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return E.resolve()}deleteFieldIndex(e,n){return E.resolve()}deleteAllFieldIndexes(e){return E.resolve()}createTargetIndexes(e,n){return E.resolve()}getDocumentsMatchingTarget(e,n){return E.resolve(null)}getIndexType(e,n){return E.resolve(0)}getFieldIndexes(e,n){return E.resolve([])}getNextCollectionGroupToUpdate(e){return E.resolve(null)}getMinOffset(e,n){return E.resolve(Nn.min())}getMinOffsetFromCollectionGroup(e,n){return E.resolve(Nn.min())}updateCollectionGroup(e,n,r){return E.resolve()}updateIndexEntries(e,n){return E.resolve()}}class Cb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(we.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Hr(0)}static Nn(){return new Hr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.changes=new ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ye.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Cs(r.mutation,s,At.empty(),Ce.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=Jn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ps();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=an();const o=Ps(),a=function(){return Ps()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof fr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Cs(u.mutation,c,u.mutation.getFieldMask(),Ce.now())):o.set(c.key,At.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new kb(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ps();let s=new Ie((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||At.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||ne()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=gm();u.forEach(d=>{if(!i.has(d)){const g=Im(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):E.resolve(Jn());let a=-1,l=i;return o.next(c=>E.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?E.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,ne())).next(u=>({batchId:a,changes:pm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=ps();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ps();return this.indexManager.getCollectionParents(e,i).next(a=>E.forEach(a,l=>{const c=function(h,d){return new ga(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Ye.newInvalidDocument(u)))});let a=ps();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Cs(u.mutation,c,At.empty(),Ce.now()),_a(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return E.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:jt(s.createTime)}}(n)),E.resolve()}getNamedQuery(e,n){return E.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:Sb(s.bundledQuery),readTime:jt(s.readTime)}}(n)),E.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(){this.overlays=new Ie(H.comparator),this.lr=new Map}getOverlay(e,n){return E.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jn();return E.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),E.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),E.resolve()}getOverlaysForCollection(e,n,r){const s=Jn(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return E.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ie((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Jn(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Jn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return E.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new rb(n,r));let i=this.lr.get(n);i===void 0&&(i=ne(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this.hr=new ze(Ne.Pr),this.Ir=new ze(Ne.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Ne(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Ne(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new H(new we([])),r=new Ne(n,e),s=new Ne(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new H(new we([])),r=new Ne(n,e),s=new Ne(n,e+1);let i=ne();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ne(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ne{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return H.comparator(e.key,n.key)||oe(e.gr,n.gr)}static Tr(e,n){return oe(e.gr,n.gr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ze(Ne.Pr)}checkEmpty(e){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nb(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Ne(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(e,n){return E.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return E.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ne(n,0),s=new Ne(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),E.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(oe);return n.forEach(s=>{const i=new Ne(s,0),o=new Ne(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),E.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Ne(new H(i),0);let a=new ze(oe);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.gr)),!0)},o),E.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ge(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return E.forEach(n.mutations,s=>{const i=new Ne(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Ne(n,0),s=this.yr.firstAfterOrEqual(r);return E.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,E.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.Cr=e,this.docs=function(){return new Ie(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(e,n){let r=an();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ye.newInvalidDocument(s))}),E.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=an();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||wA(vA(u),r)<=0||(s.has(u.key)||_a(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return E.resolve(i)}getAllFromCollectionGroup(e,n,r,s){W()}vr(e,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Lb(this)}getSize(e){return E.resolve(this.size)}}class Lb extends xb{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),E.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.persistence=e,this.Fr=new ts(n=>eu(n),tu),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ou,this.targetCount=0,this.Nr=Hr.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),E.resolve()}getLastRemoteSnapshotVersion(e){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return E.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),E.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Hr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,E.resolve()}updateTargetData(e,n){return this.kn(n),E.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),E.waitFor(i).next(()=>s)}getTargetCount(e){return E.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return E.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),E.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),E.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),E.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return E.resolve(r)}containsKey(e,n){return E.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n){this.Lr={},this.overlays={},this.Br=new Jc(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new Fb(this),this.indexManager=new Pb,this.remoteDocumentCache=function(s){return new Mb(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Rb(n),this.Kr=new Ob(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Nb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Vb(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const s=new $b(this.Br.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return E.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class $b extends IA{constructor(e){super(),this.currentSequenceNumber=e}}class au{constructor(e){this.persistence=e,this.Gr=new ou,this.zr=null}static jr(e){return new au(e)}get Hr(){if(this.zr)return this.zr;throw W()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),E.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),E.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Hr,r=>{const s=H.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,Y.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return E.or([()=>E.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new lu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=function(){return F0()?8:TA(Ke())>0?6:4}()}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Bb;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(us()<=re.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Er(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),E.resolve()):(us()<=re.DEBUG&&U("QueryEngine","Query:",Er(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(us()<=re.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Er(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(n))):E.resolve())}zi(e,n){if(yd(n))return E.resolve(null);let r=$t(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Gl(n,null,"F"),r=$t(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,Gl(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,r,s){return yd(n)||s.isEqual(Y.min())?E.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?E.resolve(null):(us()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Er(n)),this.Xi(e,o,n,yA(s,-1)).next(a=>a))})}Yi(e,n){let r=new ze(dm(e));return n.forEach((s,i)=>{_a(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return us()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Er(n)),this.Gi.getDocumentsMatchingQuery(e,n,Nn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Ie(oe),this.ns=new ts(i=>eu(i),tu),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Db(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function Hb(t,e,n,r){return new qb(t,e,n,r)}async function Nm(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ne();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function zb(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let g=E.resolve();return d.forEach(y=>{g=g.next(()=>u.getEntry(l,y)).next(T=>{const b=c.docVersions.get(y);ge(b!==null),T.version.compareTo(b)<0&&(h.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),u.addEntry(T)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ne();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Vm(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function Kb(t,e){const n=X(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(nt.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(T,b,x){return T.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(d,g,u)&&a.push(n.qr.updateTargetData(i,g))});let l=an(),c=ne();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Gb(i,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!r.isEqual(Y.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return E.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ts=s,i))}function Gb(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=an();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:s}})}function Wb(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Qb(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,E.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Xl(t,e,n){const r=X(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!gi(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function Cd(t,e,n){const r=X(t);let s=Y.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=X(l),d=h.ns.get(u);return d!==void 0?E.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(r,o,$t(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:Y.min(),n?i:ne())).next(a=>(Jb(r,BA(e),a),{documents:a,ls:i})))}function Jb(t,e,n){let r=t.rs.get(e)||Y.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class xd{constructor(){this.activeTargetIds=GA()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yb{constructor(){this.eo=new xd,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new xd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li=null;function rl(){return Li===null?Li=function(){return 268435456+Math.round(2147483648*Math.random())}():Li++,"0x"+Li.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.lo()}send(e){this.co(e)}Vo(){this.Po()}mo(){this.To()}fo(e){this.Ao(e)}po(e){this.Ro(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class tR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.yo=r+"://"+n.host,this.wo=`projects/${s}/databases/${i}`,this.So=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get bo(){return!1}Do(n,r,s,i,o){const a=rl(),l=this.Co(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.wo,"x-goog-request-params":this.So};return this.vo(c,i,o),this.Fo(n,l,c,s).then(u=>(U("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw $r("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}Mo(n,r,s,i,o,a){return this.Do(n,r,s,i,o)}vo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}Co(n,r){const s=Zb[n];return`${this.yo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Fo(e,n,r,s){const i=rl();return new Promise((o,a)=>{const l=new aA;l.setWithCredentials(!0),l.listenOnce(sA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case tl.NO_ERROR:const u=l.getResponseJson();U(We,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case tl.TIMEOUT:U(We,`RPC '${e}' ${i} timed out`),a(new q(I.DEADLINE_EXCEEDED,"Request time out"));break;case tl.HTTP_ERROR:const h=l.getStatus();if(U(We,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const y=function(b){const x=b.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(x)>=0?x:I.UNKNOWN}(g.status);a(new q(y,g.message))}else a(new q(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(I.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{U(We,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);U(We,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}xo(e,n,r){const s=rl(),i=[this.yo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=nA(),a=rA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new oA({})),this.vo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");U(We,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,g=!1;const y=new eR({co:b=>{g?U(We,`Not sending because RPC '${e}' stream ${s} is closed:`,b):(d||(U(We,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),U(We,`RPC '${e}' stream ${s} sending:`,b),h.send(b))},lo:()=>h.close()}),T=(b,x,O)=>{b.listen(x,S=>{try{O(S)}catch($){setTimeout(()=>{throw $},0)}})};return T(h,Ni.EventType.OPEN,()=>{g||(U(We,`RPC '${e}' stream ${s} transport opened.`),y.Vo())}),T(h,Ni.EventType.CLOSE,()=>{g||(g=!0,U(We,`RPC '${e}' stream ${s} transport closed`),y.fo())}),T(h,Ni.EventType.ERROR,b=>{g||(g=!0,$r(We,`RPC '${e}' stream ${s} transport errored:`,b),y.fo(new q(I.UNAVAILABLE,"The operation could not be completed")))}),T(h,Ni.EventType.MESSAGE,b=>{var x;if(!g){const O=b.data[0];ge(!!O);const S=O,$=S.error||((x=S[0])===null||x===void 0?void 0:x.error);if($){U(We,`RPC '${e}' stream ${s} received error:`,$);const ee=$.status;let M=function(ot){const $e=Re[ot];if($e!==void 0)return Am($e)}(ee),pe=$.message;M===void 0&&(M=I.INTERNAL,pe="Unknown error status: "+ee+" with message "+$.message),g=!0,y.fo(new q(M,pe)),h.close()}else U(We,`RPC '${e}' stream ${s} received:`,O),y.po(O)}}),T(a,iA.STAT_EVENT,b=>{b.stat===ld.PROXY?U(We,`RPC '${e}' stream ${s} detected buffering proxy`):b.stat===ld.NOPROXY&&U(We,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.mo()},0),y}}function sl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){return new db(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Oo=r,this.No=s,this.Lo=i,this.Bo=0,this.ko=null,this.qo=Date.now(),this.reset()}reset(){this.Bo=0}Qo(){this.Bo=this.Lo}Ko(e){this.cancel();const n=Math.floor(this.Bo+this.$o()),r=Math.max(0,Date.now()-this.qo),s=Math.max(0,n-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.ko=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.qo=Date.now(),e())),this.Bo*=this.No,this.Bo<this.Oo&&(this.Bo=this.Oo),this.Bo>this.Lo&&(this.Bo=this.Lo)}Uo(){this.ko!==null&&(this.ko.skipDelay(),this.ko=null)}cancel(){this.ko!==null&&(this.ko.cancel(),this.ko=null)}$o(){return(Math.random()-.5)*this.Bo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,n,r,s,i,o,a,l){this.si=e,this.Wo=r,this.Go=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.zo=0,this.jo=null,this.Ho=null,this.stream=null,this.Jo=new Mm(e,n)}Yo(){return this.state===1||this.state===5||this.Zo()}Zo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Xo()}async stop(){this.Yo()&&await this.close(0)}e_(){this.state=0,this.Jo.reset()}t_(){this.Zo()&&this.jo===null&&(this.jo=this.si.enqueueAfterDelay(this.Wo,6e4,()=>this.n_()))}r_(e){this.i_(),this.stream.send(e)}async n_(){if(this.Zo())return this.close(0)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}async close(e,n){this.i_(),this.s_(),this.Jo.cancel(),this.zo++,e!==4?this.Jo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.Jo.Qo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.o_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(n)}o_(){}auth(){this.state=1;const e=this.__(this.zo),n=this.zo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.zo===n&&this.a_(r,s)},r=>{e(()=>{const s=new q(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.u_(s)})})}a_(e,n){const r=this.__(this.zo);this.stream=this.c_(e,n),this.stream.ho(()=>{r(()=>this.listener.ho())}),this.stream.Io(()=>{r(()=>(this.state=2,this.Ho=this.si.enqueueAfterDelay(this.Go,1e4,()=>(this.Zo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(s=>{r(()=>this.u_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Xo(){this.state=5,this.Jo.Ko(async()=>{this.state=0,this.start()})}u_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}__(e){return n=>{this.si.enqueueAndForget(()=>this.zo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nR extends Lm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}c_(e,n){return this.connection.xo("Listen",e,n)}onMessage(e){this.Jo.reset();const n=gb(this.serializer,e),r=function(i){if(!("targetChange"in i))return Y.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?jt(o.readTime):Y.min()}(e);return this.listener.l_(n,r)}h_(e){const n={};n.database=Yl(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Kl(l)?{documents:yb(i,l)}:{query:vb(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Sm(i,o.resumeToken);const c=Wl(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){a.readTime=To(i,o.snapshotVersion.toTimestamp());const c=Wl(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=Eb(this.serializer,e);r&&(n.labels=r),this.r_(n)}P_(e){const n={};n.database=Yl(this.serializer),n.removeTarget=e,this.r_(n)}}class rR extends Lm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.I_=!1}get T_(){return this.I_}start(){this.I_=!1,this.lastStreamToken=void 0,super.start()}o_(){this.I_&&this.E_([])}c_(e,n){return this.connection.xo("Write",e,n)}onMessage(e){if(ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.I_){this.Jo.reset();const n=_b(e.writeResults,e.commitTime),r=jt(e.commitTime);return this.listener.d_(r,n)}return ge(!e.writeResults||e.writeResults.length===0),this.I_=!0,this.listener.A_()}R_(){const e={};e.database=Yl(this.serializer),this.r_(e)}E_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mb(this.serializer,r))};this.r_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.V_=!1}m_(){if(this.V_)throw new q(I.FAILED_PRECONDITION,"The client has already been terminated.")}Do(e,n,r,s){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Do(e,Ql(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(I.UNKNOWN,i.toString())})}Mo(e,n,r,s,i){return this.m_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Mo(e,Ql(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(I.UNKNOWN,o.toString())})}terminate(){this.V_=!0,this.connection.terminate()}}class iR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(on(n),this.y_=!1):U("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.ro(o=>{r.enqueueAndForget(async()=>{pr(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=X(l);c.M_.add(4),await yi(c),c.N_.set("Unknown"),c.M_.delete(4),await Ia(c)}(this))})}),this.N_=new iR(r,s)}}async function Ia(t){if(pr(t))for(const e of t.x_)await e(!0)}async function yi(t){for(const e of t.x_)await e(!1)}function Fm(t,e){const n=X(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),du(n)?hu(n):ns(n).Zo()&&uu(n,e))}function cu(t,e){const n=X(t),r=ns(n);n.F_.delete(e),r.Zo()&&Um(n,e),n.F_.size===0&&(r.Zo()?r.t_():pr(n)&&n.N_.set("Unknown"))}function uu(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ns(t).h_(e)}function Um(t,e){t.L_.xe(e),ns(t).P_(e)}function hu(t){t.L_=new lb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ns(t).start(),t.N_.w_()}function du(t){return pr(t)&&!ns(t).Yo()&&t.F_.size>0}function pr(t){return X(t).M_.size===0}function $m(t){t.L_=void 0}async function aR(t){t.N_.set("Online")}async function lR(t){t.F_.forEach((e,n)=>{uu(t,e)})}async function cR(t,e){$m(t),du(t)?(t.N_.D_(e),hu(t)):t.N_.set("Unknown")}async function uR(t,e,n){if(t.N_.set("Online"),e instanceof Rm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.F_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.F_.delete(a),s.L_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ao(t,r)}else if(e instanceof Qi?t.L_.Ke(e):e instanceof bm?t.L_.He(e):t.L_.We(e),!n.isEqual(Y.min()))try{const r=await Vm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.F_.get(c);u&&i.F_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.F_.get(l);if(!u)return;i.F_.set(l,u.withResumeToken(nt.EMPTY_BYTE_STRING,u.snapshotVersion)),Um(i,l);const h=new bn(u.target,l,c,u.sequenceNumber);uu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Ao(t,r)}}async function Ao(t,e,n){if(!gi(e))throw e;t.M_.add(1),await yi(t),t.N_.set("Offline"),n||(n=()=>Vm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Ia(t)})}function Bm(t,e){return e().catch(n=>Ao(t,n,e))}async function Ta(t){const e=X(t),n=Mn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;hR(e);)try{const s=await Wb(e.localStore,r);if(s===null){e.v_.length===0&&n.t_();break}r=s.batchId,dR(e,s)}catch(s){await Ao(e,s)}jm(e)&&qm(e)}function hR(t){return pr(t)&&t.v_.length<10}function dR(t,e){t.v_.push(e);const n=Mn(t);n.Zo()&&n.T_&&n.E_(e.mutations)}function jm(t){return pr(t)&&!Mn(t).Yo()&&t.v_.length>0}function qm(t){Mn(t).start()}async function fR(t){Mn(t).R_()}async function pR(t){const e=Mn(t);for(const n of t.v_)e.E_(n.mutations)}async function gR(t,e,n){const r=t.v_.shift(),s=ru.from(r,e,n);await Bm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ta(t)}async function mR(t,e){e&&Mn(t).T_&&await async function(r,s){if(function(o){return ib(o)&&o!==I.ABORTED}(s.code)){const i=r.v_.shift();Mn(r).e_(),await Bm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ta(r)}}(t,e),jm(t)&&qm(t)}async function Dd(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=pr(n);n.M_.add(3),await yi(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Ia(n)}async function _R(t,e){const n=X(t);e?(n.M_.delete(2),await Ia(n)):e||(n.M_.add(2),await yi(n),n.N_.set("Unknown"))}function ns(t){return t.B_||(t.B_=function(n,r,s){const i=X(n);return i.m_(),new nR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:aR.bind(null,t),Io:lR.bind(null,t),Eo:cR.bind(null,t),l_:uR.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.e_(),du(t)?hu(t):t.N_.set("Unknown")):(await t.B_.stop(),$m(t))})),t.B_}function Mn(t){return t.k_||(t.k_=function(n,r,s){const i=X(n);return i.m_(),new rR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:()=>Promise.resolve(),Io:fR.bind(null,t),Eo:mR.bind(null,t),A_:pR.bind(null,t),d_:gR.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.e_(),await Ta(t)):(await t.k_.stop(),t.v_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new fu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pu(t,e){if(on("AsyncQueue",`${e}: ${t}`),gi(t))return new q(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=ps(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Dr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Dr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Dr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.q_=new Ie(H.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):W():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class zr{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zr(e,n,Dr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class vR{constructor(){this.queries=new ts(e=>hm(e),ma),this.onlineState="Unknown",this.z_=new Set}}async function wR(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new yR,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=pu(o,`Initialization of query '${Er(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&gu(n)}async function ER(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function IR(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.U_)a.H_(s)&&(r=!0);o.K_=s}}r&&gu(n)}function TR(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function gu(t){t.z_.forEach(e=>{e.next()})}var Zl,Nd;(Nd=Zl||(Zl={})).J_="default",Nd.Cache="cache";class AR{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Zl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e){this.key=e}}class zm{constructor(e){this.key=e}}class bR{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ne(),this.mutatedKeys=ne(),this.Ia=dm(e),this.Ta=new Dr(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Od,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),g=_a(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let b=!1;d&&g?d.data.isEqual(g.data)?y!==T&&(r.track({type:3,doc:g}),b=!0):this.Ra(d,g)||(r.track({type:2,doc:g}),b=!0,(l&&this.Ia(g,l)>0||c&&this.Ia(g,c)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),b=!0):d&&!g&&(r.track({type:1,doc:d}),b=!0,(l||c)&&(a=!0)),b&&(g?(o=o.add(g),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Ta:o,Aa:r,Zi:a,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((u,h)=>function(g,y){const T=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return T(g)-T(y)}(u.type,h.type)||this.Ia(u.doc,h.doc)),this.Va(r),s=s!=null&&s;const a=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new zr(this.query,e.Ta,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Od,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ne(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new zm(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Hm(r))}),n}pa(e){this.la=e.ls,this.Pa=ne();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return zr.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class RR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class SR{constructor(e){this.key=e,this.wa=!1}}class PR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ts(a=>hm(a),ma),this.Da=new Map,this.Ca=new Set,this.va=new Ie(H.comparator),this.Fa=new Map,this.Ma=new ou,this.xa={},this.Oa=new Map,this.Na=Hr.Nn(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function CR(t,e,n=!0){const r=Ym(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Km(r,e,n,!0),s}async function xR(t,e){const n=Ym(t);await Km(n,e,!0,!1)}async function Km(t,e,n,r){const s=await Qb(t.localStore,$t(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await kR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Fm(t.remoteStore,s),a}async function kR(t,e,n,r,s){t.Ba=(h,d,g)=>async function(T,b,x,O){let S=b.view.da(x);S.Zi&&(S=await Cd(T.localStore,b.query,!1).then(({documents:pe})=>b.view.da(pe,S)));const $=O&&O.targetChanges.get(b.targetId),ee=O&&O.targetMismatches.get(b.targetId)!=null,M=b.view.applyChanges(S,T.isPrimaryClient,$,ee);return Md(T,b.targetId,M.fa),M.snapshot}(t,h,d,g);const i=await Cd(t.localStore,e,!0),o=new bR(e,i.ls),a=o.da(i.documents),l=_i.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Md(t,n,c.fa);const u=new RR(e,n,o);return t.ba.set(e,u),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function DR(t,e,n){const r=X(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!ma(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&cu(r.remoteStore,s.targetId),ec(r,s.targetId)}).catch(pi)):(ec(r,s.targetId),await Xl(r.localStore,s.targetId,!0))}async function OR(t,e){const n=X(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cu(n.remoteStore,r.targetId))}async function NR(t,e,n){const r=BR(t);try{const s=await function(o,a){const l=X(o),c=Ce.now(),u=a.reduce((g,y)=>g.add(y.key),ne());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=an(),T=ne();return l.ss.getEntries(g,u).next(b=>{y=b,y.forEach((x,O)=>{O.isValidDocument()||(T=T.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,y)).next(b=>{h=b;const x=[];for(const O of a){const S=eb(O,h.get(O.key).overlayedDocument);S!=null&&x.push(new fr(O.key,S,rm(S.value.mapValue),Bt.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,x,a)}).next(b=>{d=b;const x=b.applyToLocalDocumentSet(h,T);return l.documentOverlayCache.saveOverlays(g,b.batchId,x)})}).then(()=>({batchId:d.batchId,changes:pm(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new Ie(oe)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,s.batchId,n),await vi(r,s.changes),await Ta(r.remoteStore)}catch(s){const i=pu(s,"Failed to persist write");n.reject(i)}}async function Gm(t,e){const n=X(t);try{const r=await Kb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?ge(o.wa):s.removedDocuments.size>0&&(ge(o.wa),o.wa=!1))}),await vi(n,r,e)}catch(r){await pi(r)}}function Vd(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const a=o.view.j_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=X(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.U_)d.j_(a)&&(c=!0)}),c&&gu(l)}(r.eventManager,e),s.length&&r.Sa.l_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VR(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new Ie(H.comparator);o=o.insert(i,Ye.newNoDocument(i,Y.min()));const a=ne().add(i),l=new wa(Y.min(),new Map,new Ie(oe),o,a);await Gm(r,l),r.va=r.va.remove(i),r.Fa.delete(e),mu(r)}else await Xl(r.localStore,e,!1).then(()=>ec(r,e,n)).catch(pi)}async function MR(t,e){const n=X(t),r=e.batch.batchId;try{const s=await zb(n.localStore,e);Qm(n,r,null),Wm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vi(n,s)}catch(s){await pi(s)}}async function LR(t,e,n){const r=X(t);try{const s=await function(o,a){const l=X(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(ge(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);Qm(r,e,n),Wm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await vi(r,s)}catch(s){await pi(s)}}function Wm(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Qm(t,e,n){const r=X(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function ec(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Rr(e).forEach(r=>{t.Ma.containsKey(r)||Jm(t,r)})}function Jm(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(cu(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),mu(t))}function Md(t,e,n){for(const r of n)r instanceof Hm?(t.Ma.addReference(r.key,e),FR(t,r)):r instanceof zm?(U("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Jm(t,r.key)):W()}function FR(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(U("SyncEngine","New document in limbo: "+n),t.Ca.add(r),mu(t))}function mu(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new H(we.fromString(e)),r=t.Na.next();t.Fa.set(r,new SR(n)),t.va=t.va.insert(n,r),Fm(t.remoteStore,new bn($t(um(n.path)),r,"TargetPurposeLimboResolution",Jc.oe))}}async function vi(t,e,n){const r=X(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=lu.Qi(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.Sa.l_(s),await async function(l,c){const u=X(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(c,d=>E.forEach(d.ki,g=>u.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>E.forEach(d.qi,g=>u.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!gi(h))throw h;U("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const g=u.ts.get(d),y=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(y);u.ts=u.ts.insert(d,T)}}}(r.localStore,i))}async function UR(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await Nm(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(a=>{a.forEach(l=>{l.reject(new q(I.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vi(n,r._s)}}function $R(t,e){const n=X(t),r=n.Fa.get(e);if(r&&r.wa)return ne().add(r.key);{let s=ne();const i=n.Da.get(e);if(!i)return s;for(const o of i){const a=n.ba.get(o);s=s.unionWith(a.view.Ea)}return s}}function Ym(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$R.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VR.bind(null,e),e.Sa.l_=IR.bind(null,e.eventManager),e.Sa.ka=TR.bind(null,e.eventManager),e}function BR(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LR.bind(null,e),e}class Ld{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ea(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Hb(this.persistence,new jb,e.initialUser,this.serializer)}createPersistence(e){return new Ub(au.jr,this.serializer)}createSharedClientState(e){return new Yb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UR.bind(null,this.syncEngine),await _R(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vR}()}createDatastore(e){const n=Ea(e.databaseInfo.databaseId),r=function(i){return new tR(i)}(e.databaseInfo);return function(i,o,a,l){return new sR(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new oR(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Vd(this.syncEngine,n,0),function(){return kd.D()?new kd:new Xb}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new PR(s,i,o,a,l,c);return u&&(h.La=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=X(r);U("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await yi(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Qe.UNAUTHENTICATED,this.clientId=em.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function il(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Nm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KR(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Dd(e.remoteStore,s)),t._onlineComponents=e}function zR(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function KR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await il(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!zR(n))throw n;$r("Error using user provided cache. Falling back to memory cache: "+n),await il(t,new Ld)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await il(t,new Ld);return t._offlineComponents}async function Xm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Fd(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Fd(t,new jR))),t._onlineComponents}function GR(t){return Xm(t).then(e=>e.syncEngine)}async function WR(t){const e=await Xm(t),n=e.eventManager;return n.onListen=CR.bind(null,e.syncEngine),n.onUnlisten=DR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=OR.bind(null,e.syncEngine),n}function QR(t,e,n={}){const r=new xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new qR({next:d=>{o.enqueueAndForget(()=>ER(i,h)),d.fromCache&&l.source==="server"?c.reject(new q(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new AR(a,u,{includeMetadataChanges:!0,ra:!0});return wR(i,h)}(await WR(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t,e,n){if(!n)throw new q(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JR(t,e,n,r){if(e===!0&&r===!0)throw new q(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $d(t){if(!H.isDocumentKey(t))throw new q(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Bd(t){if(H.isDocumentKey(t))throw new q(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _u(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function ni(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_u(t);throw new q(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(I.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Aa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new cA;switch(r.type){case"firstParty":return new fA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ud.get(n);r&&(U("ComponentProvider","Removing Datastore"),Ud.delete(n),r.terminate())}(this),Promise.resolve()}}function YR(t,e,n,r={}){var s;const i=(t=ni(t,Aa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&$r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Qe.MOCK_USER;else{a=O0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Qe(c)}t._authCredentials=new uA(new Zg(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ba(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class kn extends ba{constructor(e,n,r){super(e,n,um(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new H(e))}withConverter(e){return new kn(this.firestore,e,this._path)}}function qd(t,e,...n){if(t=pt(t),e_("collection","path",e),t instanceof Aa){const r=we.fromString(e,...n);return Bd(r),new kn(t,null,r)}{if(!(t instanceof Rt||t instanceof kn))throw new q(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Bd(r),new kn(t.firestore,null,r)}}function t_(t,e,...n){if(t=pt(t),arguments.length===1&&(e=em.newId()),e_("doc","path",e),t instanceof Aa){const r=we.fromString(e,...n);return $d(r),new Rt(t,null,new H(r))}{if(!(t instanceof Rt||t instanceof kn))throw new q(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return $d(r),new Rt(t.firestore,t instanceof kn?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Jo=new Mm(this,"async_queue_retry"),this.hu=()=>{const n=sl();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Jo.Uo()};const e=sl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=sl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new xn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Jo.reset()}catch(e){if(!gi(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Jo.Ko(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw on("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=fu.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&W()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Ra extends Aa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new XR}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||r_(this),this._firestoreClient.terminate()}}function ZR(t,e){const n=typeof t=="object"?t:Sc(),r=typeof t=="string"?t:"(default)",s=hr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=k0("firestore");i&&YR(s,...i)}return s}function n_(t){return t._firestoreClient||r_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function r_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new RA(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Zm(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new HR(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kr(nt.fromBase64String(e))}catch(n){throw new q(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kr(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=/^__.*__$/;class tS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new mi(e,this.data,n,this.fieldTransforms)}}function i_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class wu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new wu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return bo(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(i_(this.fu)&&eS.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class nS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ea(e)}Fu(e,n,r,s=!1){return new wu({fu:e,methodName:n,vu:r,path:qe.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rS(t){const e=t._freezeSettings(),n=Ea(t._databaseId);return new nS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sS(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);c_("Data must be an object, but it was:",o,r);const a=a_(r,o);let l,c;if(i.merge)l=new At(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=iS(e,h,n);if(!o.contains(d))throw new q(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);aS(u,d)||u.push(d)}l=new At(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new tS(new yt(a),l,c)}function o_(t,e){if(l_(t=pt(t)))return c_("Unsupported field value:",e,t),a_(t,e);if(t instanceof s_)return function(r,s){if(!i_(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=o_(a,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return WA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ce.fromDate(r);return{timestampValue:To(s.serializer,i)}}if(r instanceof Ce){const i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:To(s.serializer,i)}}if(r instanceof vu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kr)return{bytesValue:Sm(s.serializer,r._byteString)};if(r instanceof Rt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:iu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${_u(r)}`)}(t,e)}function a_(t,e){const n={};return tm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,s)=>{const i=o_(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function l_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ce||t instanceof vu||t instanceof Kr||t instanceof Rt||t instanceof s_)}function c_(t,e,n){if(!l_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=_u(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function iS(t,e,n){if((e=pt(e))instanceof yu)return e._internalPath;if(typeof e=="string")return u_(t,e);throw bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const oS=new RegExp("[~\\*/\\[\\]]");function u_(t,e,n){if(e.search(oS)>=0)throw bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yu(...e.split("."))._internalPath}catch{throw bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new q(I.INVALID_ARGUMENT,a+t+l)}function aS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(d_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lS extends h_{data(){return super.data()}}function d_(t,e){return typeof e=="string"?u_(t,e):e instanceof yu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uS{convertValue(e,n="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ir(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new vu(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const n=Vn(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);ge(Om(r));const s=new Xs(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||on(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dS extends h_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ji(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(d_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ji extends dS{data(e={}){return super.data(e)}}class fS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Fi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ji(this._firestore,this._userDataWriter,r.key,r,new Fi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Ji(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Fi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ji(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Fi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:pS(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}class gS extends uS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function Hd(t){t=ni(t,ba);const e=ni(t.firestore,Ra),n=n_(e),r=new gS(e);return cS(t._query),QR(n,t._query).then(s=>new fS(e,r,t,s))}function mS(t){return f_(ni(t.firestore,Ra),[new nu(t._key,Bt.none())])}function _S(t,e){const n=ni(t.firestore,Ra),r=t_(t),s=hS(t.converter,e);return f_(n,[sS(rS(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function f_(t,e){return function(r,s){const i=new xn;return r.asyncQueue.enqueueAndForget(async()=>NR(await GR(r),s,i)),i.promise}(n_(t),e)}(function(e,n=!0){(function(s){Zr=s})(Jr),Kt(new Pt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ra(new hA(r.getProvider("auth-internal")),new gA(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),wt(cd,"4.6.1",e),wt(cd,"4.6.1","esm2017")})();var yS="firebase",vS="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt(yS,vS,"app");const p_="@firebase/installations",Eu="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=1e4,m_=`w:${Eu}`,__="FIS_v2",wS="https://firebaseinstallations.googleapis.com/v1",ES=60*60*1e3,IS="installations",TS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ar=new ur(IS,TS,AS);function y_(t){return t instanceof xt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_({projectId:t}){return`${wS}/projects/${t}/installations`}function w_(t){return{token:t.token,requestStatus:2,expiresIn:RS(t.expiresIn),creationTime:Date.now()}}async function E_(t,e){const r=(await e.json()).error;return ar.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function I_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function bS(t,{refreshToken:e}){const n=I_(t);return n.append("Authorization",SS(e)),n}async function T_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function RS(t){return Number(t.replace("s","000"))}function SS(t){return`${__} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=v_(t),s=I_(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:__,appId:t.appId,sdkVersion:m_},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await T_(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:w_(c.authToken)}}else throw await E_("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=/^[cdef][\w-]{21}$/,tc="";function kS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=DS(t);return xS.test(n)?n:tc}catch{return tc}}function DS(t){return CS(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=new Map;function R_(t,e){const n=Sa(t);S_(n,e),OS(n,e)}function S_(t,e){const n=b_.get(t);if(n)for(const r of n)r(e)}function OS(t,e){const n=NS();n&&n.postMessage({key:t,fid:e}),VS()}let Yn=null;function NS(){return!Yn&&"BroadcastChannel"in self&&(Yn=new BroadcastChannel("[Firebase] FID Change"),Yn.onmessage=t=>{S_(t.data.key,t.data.fid)}),Yn}function VS(){b_.size===0&&Yn&&(Yn.close(),Yn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="firebase-installations-database",LS=1,lr="firebase-installations-store";let ol=null;function Iu(){return ol||(ol=Gp(MS,LS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(lr)}}})),ol}async function Ro(t,e){const n=Sa(t),s=(await Iu()).transaction(lr,"readwrite"),i=s.objectStore(lr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&R_(t,e.fid),e}async function P_(t){const e=Sa(t),r=(await Iu()).transaction(lr,"readwrite");await r.objectStore(lr).delete(e),await r.done}async function Pa(t,e){const n=Sa(t),s=(await Iu()).transaction(lr,"readwrite"),i=s.objectStore(lr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&R_(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tu(t){let e;const n=await Pa(t.appConfig,r=>{const s=FS(r),i=US(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===tc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function FS(t){const e=t||{fid:kS(),registrationStatus:0};return C_(e)}function US(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ar.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=$S(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:BS(t)}:{installationEntry:e}}async function $S(t,e){try{const n=await PS(t,e);return Ro(t.appConfig,n)}catch(n){throw y_(n)&&n.customData.serverCode===409?await P_(t.appConfig):await Ro(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function BS(t){let e=await zd(t.appConfig);for(;e.registrationStatus===1;)await A_(100),e=await zd(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Tu(t);return r||n}return e}function zd(t){return Pa(t,e=>{if(!e)throw ar.create("installation-not-found");return C_(e)})}function C_(t){return jS(t)?{fid:t.fid,registrationStatus:0}:t}function jS(t){return t.registrationStatus===1&&t.registrationTime+g_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS({appConfig:t,heartbeatServiceProvider:e},n){const r=HS(t,n),s=bS(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:m_,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await T_(()=>fetch(r,a));if(l.ok){const c=await l.json();return w_(c)}else throw await E_("Generate Auth Token",l)}function HS(t,{fid:e}){return`${v_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(t,e=!1){let n;const r=await Pa(t.appConfig,i=>{if(!x_(i))throw ar.create("not-registered");const o=i.authToken;if(!e&&GS(o))return i;if(o.requestStatus===1)return n=zS(t,e),i;{if(!navigator.onLine)throw ar.create("app-offline");const a=QS(i);return n=KS(t,a),a}});return n?await n:r.authToken}async function zS(t,e){let n=await Kd(t.appConfig);for(;n.authToken.requestStatus===1;)await A_(100),n=await Kd(t.appConfig);const r=n.authToken;return r.requestStatus===0?Au(t,e):r}function Kd(t){return Pa(t,e=>{if(!x_(e))throw ar.create("not-registered");const n=e.authToken;return JS(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function KS(t,e){try{const n=await qS(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ro(t.appConfig,r),n}catch(n){if(y_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await P_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ro(t.appConfig,r)}throw n}}function x_(t){return t!==void 0&&t.registrationStatus===2}function GS(t){return t.requestStatus===2&&!WS(t)}function WS(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+ES}function QS(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function JS(t){return t.requestStatus===1&&t.requestTime+g_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t){const e=t,{installationEntry:n,registrationPromise:r}=await Tu(e);return r?r.catch(console.error):Au(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e=!1){const n=t;return await ZS(n),(await Au(n,e)).token}async function ZS(t){const{registrationPromise:e}=await Tu(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){if(!t||!t.options)throw al("App Configuration");if(!t.name)throw al("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw al(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function al(t){return ar.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="installations",tP="installations-internal",nP=t=>{const e=t.getProvider("app").getImmediate(),n=eP(e),r=hr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},rP=t=>{const e=t.getProvider("app").getImmediate(),n=hr(e,k_).getImmediate();return{getId:()=>YS(n),getToken:s=>XS(n,s)}};function sP(){Kt(new Pt(k_,nP,"PUBLIC")),Kt(new Pt(tP,rP,"PRIVATE"))}sP();wt(p_,Eu);wt(p_,Eu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="analytics",iP="firebase_id",oP="origin",aP=60*1e3,lP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",bu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Jo("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ft=new ur("analytics","Analytics",cP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t){if(!t.startsWith(bu)){const e=ft.create("invalid-gtag-resource",{gtagURL:t});return ct.warn(e.message),""}return t}function D_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function hP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function dP(t,e){const n=hP("firebase-js-sdk-policy",{createScriptURL:uP}),r=document.createElement("script"),s=`${bu}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function fP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function pP(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await D_(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){ct.error(a)}t("config",s,i)}async function gP(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await D_(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&e[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){ct.error(i)}}function mP(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await gP(t,e,n,a,l)}else if(i==="config"){const[a,l]=o;await pP(t,e,n,r,a,l)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){ct.error(a)}}return s}function _P(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=mP(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function yP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(bu)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=30,wP=1e3;class EP{constructor(e={},n=wP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const O_=new EP;function IP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function TP(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:IP(r)},i=lP.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw ft.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function AP(t,e=O_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw ft.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ft.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new SP;return setTimeout(async()=>{a.abort()},aP),N_({appId:r,apiKey:s,measurementId:i},o,a,e)}async function N_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=O_){var i;const{appId:o,measurementId:a}=t;try{await bP(r,e)}catch(l){if(a)return ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await TP(t);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!RP(c)){if(s.deleteThrottleMetadata(o),a)return ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?$h(n,s.intervalMillis,vP):$h(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),ct.debug(`Calling attemptFetch again in ${u} millis`),N_(t,h,r,s)}}function bP(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(ft.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function RP(t){if(!(t instanceof xt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class SP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function PP(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(){if(qp())try{await Hp()}catch(t){return ct.warn(ft.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ct.warn(ft.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function xP(t,e,n,r,s,i,o){var a;const l=AP(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ct.error(g)),e.push(l);const c=CP().then(g=>{if(g)return r.getId()}),[u,h]=await Promise.all([l,c]);yP(i)||dP(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[oP]="firebase",d.update=!0,h!=null&&(d[iP]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.app=e}_delete(){return delete xs[this.app.options.appId],Promise.resolve()}}let xs={},Gd=[];const Wd={};let ll="dataLayer",DP="gtag",Qd,V_,Jd=!1;function OP(){const t=[];if(jp()&&t.push("This is a browser extension environment."),U0()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ft.create("invalid-analytics-context",{errorInfo:e});ct.warn(n.message)}}function NP(t,e,n){OP();const r=t.options.appId;if(!r)throw ft.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ft.create("no-api-key");if(xs[r]!=null)throw ft.create("already-exists",{id:r});if(!Jd){fP(ll);const{wrappedGtag:i,gtagCore:o}=_P(xs,Gd,Wd,ll,DP);V_=i,Qd=o,Jd=!0}return xs[r]=xP(t,Gd,Wd,e,Qd,ll,n),new kP(t)}function VP(t=Sc()){t=pt(t);const e=hr(t,So);return e.isInitialized()?e.getImmediate():MP(t)}function MP(t,e={}){const n=hr(t,So);if(n.isInitialized()){const s=n.getImmediate();if($s(e,n.getOptions()))return s;throw ft.create("already-initialized")}return n.initialize({options:e})}function LP(t,e,n,r){t=pt(t),PP(V_,xs[t.app.options.appId],e,n,r).catch(s=>ct.error(s))}const Yd="@firebase/analytics",Xd="0.10.2";function FP(){Kt(new Pt(So,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return NP(r,s,n)},"PUBLIC")),Kt(new Pt("analytics-internal",t,"PRIVATE")),wt(Yd,Xd),wt(Yd,Xd,"esm2017");function t(e){try{const n=e.getProvider(So).getImmediate();return{logEvent:(r,s,i)=>LP(n,r,s,i)}}catch(n){throw ft.create("interop-component-reg-failed",{reason:n})}}}FP();function Ru(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function M_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UP=M_,L_=new ur("auth","Firebase",M_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Jo("@firebase/auth");function $P(t,...e){Po.logLevel<=re.WARN&&Po.warn(`Auth (${Jr}): ${t}`,...e)}function Yi(t,...e){Po.logLevel<=re.ERROR&&Po.error(`Auth (${Jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw Su(t,...e)}function qt(t,...e){return Su(t,...e)}function F_(t,e,n){const r=Object.assign(Object.assign({},UP()),{[e]:n});return new ur("auth","Firebase",r).create(e,{appName:t.name})}function nr(t){return F_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Su(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return L_.create(t,...e)}function G(t,e,...n){if(!t)throw Su(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yi(e),new Error(e)}function cn(t,e){t||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function BP(){return Zd()==="http:"||Zd()==="https:"}function Zd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BP()||jp()||"connection"in navigator)?navigator.onLine:!0}function qP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=N0()||M0()}get(){return jP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=new wi(3e4,6e4);function Cu(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function rs(t,e,n,r,s={}){return $_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=oi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),U_.fetch()(B_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function $_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},HP),e);try{const s=new GP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ui(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ui(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ui(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ui(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw F_(t,u,c);ln(t,u)}}catch(s){if(s instanceof xt)throw s;ln(t,"network-request-failed",{message:String(s)})}}async function KP(t,e,n,r,s={}){const i=await rs(t,e,n,r,s);return"mfaPendingCredential"in i&&ln(t,"multi-factor-auth-required",{_serverResponse:i}),i}function B_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Pu(t.config,s):`${t.config.apiScheme}://${s}`}class GP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),zP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ui(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WP(t,e){return rs(t,"POST","/v1/accounts:delete",e)}async function j_(t,e){return rs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QP(t,e=!1){const n=pt(t),r=await n.getIdToken(e),s=xu(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ks(cl(s.auth_time)),issuedAtTime:ks(cl(s.iat)),expirationTime:ks(cl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function cl(t){return Number(t)*1e3}function xu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Fp(n);return s?JSON.parse(s):(Yi("Failed to decode base64 JWT payload"),null)}catch(s){return Yi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ef(t){const e=xu(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xt&&JP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function JP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ks(this.lastLoginAt),this.creationTime=ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ri(t,j_(n,{idToken:r}));G(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?q_(i.providerUserInfo):[],a=ZP(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new rc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function XP(t){const e=pt(t);await Co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function q_(t){return t.map(e=>{var{providerId:n}=e,r=Ru(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(t,e){const n=await $_(t,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=B_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",U_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tC(t,e){return rs(t,"POST","/v2/accounts:revokeToken",Cu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ef(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=ef(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await eC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Or;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ru(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new rc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ri(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QP(this,e)}reload(){return XP(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(nr(this.auth));const e=await this.getIdToken();return await ri(this,WP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:$,isAnonymous:ee,providerData:M,stsTokenManager:pe}=n;G(S&&pe,e,"internal-error");const ke=Or.fromJSON(this.name,pe);G(typeof S=="string",e,"internal-error"),gn(h,e.name),gn(d,e.name),G(typeof $=="boolean",e,"internal-error"),G(typeof ee=="boolean",e,"internal-error"),gn(g,e.name),gn(y,e.name),gn(T,e.name),gn(b,e.name),gn(x,e.name),gn(O,e.name);const ot=new Zt({uid:S,auth:e,email:d,emailVerified:$,displayName:h,isAnonymous:ee,photoURL:y,phoneNumber:g,tenantId:T,stsTokenManager:ke,createdAt:x,lastLoginAt:O});return M&&Array.isArray(M)&&(ot.providerData=M.map($e=>Object.assign({},$e))),b&&(ot._redirectEventId=b),ot}static async _fromIdTokenResponse(e,n,r=!1){const s=new Or;s.updateFromServerResponse(n);const i=new Zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Co(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?q_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Or;a.updateFromIdToken(r);const l=new Zt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new rc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=new Map;function en(t){cn(t instanceof Function,"Expected a class definition");let e=tf.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}H_.type="NONE";const nf=H_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t,e,n){return`firebase:${t}:${e}:${n}`}class Nr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Xi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Nr(en(nf),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||en(nf);const o=Xi(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Zt._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Nr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Nr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(z_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q_(e))return"Blackberry";if(J_(e))return"Webos";if(ku(e))return"Safari";if((e.includes("chrome/")||K_(e))&&!e.includes("edge/"))return"Chrome";if(W_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function z_(t=Ke()){return/firefox\//i.test(t)}function ku(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K_(t=Ke()){return/crios\//i.test(t)}function G_(t=Ke()){return/iemobile/i.test(t)}function W_(t=Ke()){return/android/i.test(t)}function Q_(t=Ke()){return/blackberry/i.test(t)}function J_(t=Ke()){return/webos/i.test(t)}function Ca(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nC(t=Ke()){var e;return Ca(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rC(){return L0()&&document.documentMode===10}function Y_(t=Ke()){return Ca(t)||W_(t)||J_(t)||Q_(t)||/windows phone/i.test(t)||G_(t)}function sC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t,e=[]){let n;switch(t){case"Browser":n=rf(Ke());break;case"Worker":n=`${rf(Ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(t,e={}){return rs(t,"GET","/v2/passwordPolicy",Cu(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=6;class lC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sf(this),this.idTokenSubscription=new sf(this),this.beforeStateQueue=new iC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Nr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await j_(this,{idToken:e}),r=await Zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(An(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Co(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(nr(this));const n=e?pt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(nr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(nr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oC(this),n=new lC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ur("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Nr.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$P(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Du(t){return pt(t)}class sf{constructor(e){this.auth=e,this.observer=null,this.addObserver=H0(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uC(t){Ou=t}function hC(t){return Ou.loadJS(t)}function dC(){return Ou.gapiScript}function fC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t,e){const n=hr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if($s(i,e??{}))return s;ln(s,"already-initialized")}return n.initialize({options:e})}function gC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mC(t,e,n){const r=Du(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Z_(e),{host:o,port:a}=_C(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),yC()}function Z_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _C(t){const e=Z_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:of(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:of(o)}}}function of(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t,e){return KP(t,"POST","/v1/accounts:signInWithIdp",Cu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC="http://localhost";class cr extends ey{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ru(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new cr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vr(e,n)}buildRequest(){const e={requestUri:vC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends ty{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ei{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return En.credential(n,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Ei{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Ei{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Zt._fromIdTokenResponse(e,r,s),o=af(r);return new Gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=af(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function af(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends xt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new xo(e,n,r,s)}}function ny(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(t,i,e,r):i})}async function wC(t,e,n=!1){const r=await ri(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e,n=!1){const{auth:r}=t;if(An(r.app))return Promise.reject(nr(r));const s="reauthenticate";try{const i=await ri(t,ny(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=xu(i.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),Gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ln(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t,e,n=!1){if(An(t.app))return Promise.reject(nr(t));const r="signIn",s=await ny(t,r,e),i=await Gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function TC(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function AC(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}const ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bC(){const t=Ke();return ku(t)||Ca(t)}const RC=1e3,SC=10;class sy extends ry{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bC()&&sC(),this.fallbackToPolling=Y_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,SC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sy.type="LOCAL";const PC=sy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends ry{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iy.type="SESSION";const oy=iy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await CC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Nu("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function kC(t){Ht().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function DC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NC(){return ay()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="firebaseLocalStorageDb",VC=1,Do="firebaseLocalStorage",cy="fbase_key";class Ii{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ka(t,e){return t.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function MC(){const t=indexedDB.deleteDatabase(ly);return new Ii(t).toPromise()}function sc(){const t=indexedDB.open(ly,VC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Do,{keyPath:cy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Do)?e(r):(r.close(),await MC(),e(await sc()))})})}async function lf(t,e,n){const r=ka(t,!0).put({[cy]:e,value:n});return new Ii(r).toPromise()}async function LC(t,e){const n=ka(t,!1).get(e),r=await new Ii(n).toPromise();return r===void 0?null:r.value}function cf(t,e){const n=ka(t,!0).delete(e);return new Ii(n).toPromise()}const FC=800,UC=3;class uy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>UC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ay()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xa._getInstance(NC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DC(),!this.activeServiceWorker)return;this.sender=new xC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sc();return await lf(e,ko,"1"),await cf(e,ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>LC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ka(s,!1).getAll();return new Ii(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uy.type="LOCAL";const $C=uy;new wi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(t,e){return e?en(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu extends ey{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jC(t){return IC(t.auth,new Vu(t),t.bypassAuthState)}function qC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),EC(n,new Vu(t),t.bypassAuthState)}async function HC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),wC(n,new Vu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jC;case"linkViaPopup":case"linkViaRedirect":return HC;case"reauthViaPopup":case"reauthViaRedirect":return qC;default:ln(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=new wi(2e3,1e4);class br extends hy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=Nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zC.get())};e()}}br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="pendingRedirect",Zi=new Map;class GC extends hy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zi.get(this.auth._key());if(!e){try{const r=await WC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zi.set(this.auth._key(),e)}return this.bypassAuthState||Zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WC(t,e){const n=YC(e),r=JC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function QC(t,e){Zi.set(t._key(),e)}function JC(t){return en(t._redirectPersistence)}function YC(t){return Xi(KC,t.config.apiKey,t.name)}async function XC(t,e,n=!1){if(An(t.app))return Promise.reject(nr(t));const r=Du(t),s=BC(r,e),o=await new GC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=10*60*1e3;class e1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!t1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZC&&this.cachedEventUids.clear(),this.cachedEventUids.has(uf(e))}saveEventToCache(e){this.cachedEventUids.add(uf(e)),this.lastProcessedEventTime=Date.now()}}function uf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function t1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(t,e={}){return rs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,s1=/^https?/;async function i1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await n1(t);for(const n of e)try{if(o1(n))return}catch{}ln(t,"unauthorized-domain")}function o1(t){const e=nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!s1.test(n))return!1;if(r1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1=new wi(3e4,6e4);function hf(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function l1(t){return new Promise((e,n)=>{var r,s,i;function o(){hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hf(),n(qt(t,"network-request-failed"))},timeout:a1.get()})}if(!((s=(r=Ht().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ht().gapi)===null||i===void 0)&&i.load)o();else{const a=fC("iframefcb");return Ht()[a]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},hC(`${dC()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw eo=null,e})}let eo=null;function c1(t){return eo=eo||l1(t),eo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=new wi(5e3,15e3),h1="__/auth/iframe",d1="emulator/auth/iframe",f1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},p1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function g1(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pu(e,d1):`https://${t.config.authDomain}/${h1}`,r={apiKey:e.apiKey,appName:t.name,v:Jr},s=p1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${oi(r).slice(1)}`}async function m1(t){const e=await c1(t),n=Ht().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:g1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),a=Ht().setTimeout(()=>{i(o)},u1.get());function l(){Ht().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},y1=500,v1=600,w1="_blank",E1="http://localhost";class df{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function I1(t,e,n,r=y1,s=v1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_1),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ke().toLowerCase();n&&(a=K_(c)?w1:n),z_(c)&&(e=e||E1,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(nC(c)&&a!=="_self")return T1(e||"",a),new df(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new df(h)}function T1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1="__/auth/handler",b1="emulator/auth/handler",R1=encodeURIComponent("fac");async function ff(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jr,eventId:s};if(e instanceof ty){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",q0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Ei){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${R1}=${encodeURIComponent(l)}`:"";return`${S1(t)}?${oi(a).slice(1)}${c}`}function S1({config:t}){return t.emulator?Pu(t,b1):`https://${t.authDomain}/${A1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul="webStorageSupport";class P1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oy,this._completeRedirectFn=XC,this._overrideRedirectResult=QC}async _openPopup(e,n,r,s){var i;cn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ff(e,n,r,nc(),s);return I1(e,o,Nu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ff(e,n,r,nc(),s);return kC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await m1(e),r=new e1(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ul,{type:ul},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ul];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=i1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Y_()||ku()||Ca()}}const C1=P1;var pf="@firebase/auth",gf="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function D1(t){Kt(new Pt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X_(t)},c=new cC(r,s,i,l);return gC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kt(new Pt("auth-internal",e=>{const n=Du(e.getProvider("auth").getImmediate());return(r=>new x1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(pf,gf,k1(t)),wt(pf,gf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=5*60,N1=Bp("authIdTokenMaxAge")||O1;let mf=null;const V1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>N1)return;const s=n==null?void 0:n.token;mf!==s&&(mf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function M1(t=Sc()){const e=hr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pC(t,{popupRedirectResolver:C1,persistence:[$C,PC,oy]}),r=Bp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=V1(i.toString());AC(n,o,()=>o(n.currentUser)),TC(n,a=>o(a))}}const s=Up("auth");return s&&mC(n,`http://${s}`),n}function L1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uC({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",L1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});D1("Browser");const F1={apiKey:"AIzaSyDvdTUs36DFXUIZ3S7EGZJlSeeDxXg1mGY",authDomain:"tiryaki-hukuk-admin-pane-9a3f2.firebaseapp.com",projectId:"tiryaki-hukuk-admin-pane-9a3f2",storageBucket:"tiryaki-hukuk-admin-pane-9a3f2.appspot.com",messagingSenderId:"432646173233",appId:"1:432646173233:web:1c8a7ad94bacb703781b10",measurementId:"G-0LMBJQ2524"},Mu=Wp(F1);VP(Mu);M1(Mu);const hl=ZR(Mu),U1={},$1={class:"bg-gray-200 border border-gray-300 shadow-md shadow-black/5 p-6 rounded-md"};function B1(t,e){return Ae(),Me("section",$1,[sp(t.$slots,"default")])}const j1=Qr(U1,[["render",B1]]),q1=Ep('<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"><div class="bg-gray-200 rounded-md border border-gray-300 p-6 shadow-md shadow-black/5"><div class="flex justify-between mb-6"><div><div class="text-3xl font-semibold mb-1"> 10<span class="pl-2 font-medium text-gray-400">Blog Yazısı</span></div></div></div><div class="flex items-center"><div class="w-full bg-gray-100 rounded-full h-4"><div class="h-full bg-blue-500 rounded-full p-1" style="width:60%;"><div class="w-2 h-2 rounded-full bg-white ml-auto"></div></div></div><span class="text-sm font-medium text-gray-600 ml-4">60%</span></div></div><div class="bg-gray-200 rounded-md border border-gray-300 p-6 shadow-md shadow-black/5"><div class="flex justify-between mb-4"><div><div class="flex items-center mb-1"><div class="text-2xl font-semibold">324</div><div class="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2"> +30% </div></div><div class="text-sm font-medium text-gray-400">Ziyaretçi</div></div></div><div class="flex items-center"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded-full object-cover block"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded-full object-cover block -ml-3"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded-full object-cover block -ml-3"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded-full object-cover block -ml-3"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded-full object-cover block -ml-3"></div></div><div class="bg-gray-200 rounded-md border border-gray-300 p-6 shadow-md shadow-black/5"><div class="flex justify-between mb-6"><div><div class="text-2xl font-semibold mb-1">45</div><div class="text-sm font-medium text-gray-400">Yorumlar</div></div></div><a href="#" class="text-blue-500 font-medium text-sm hover:text-blue-600">Detayları gör.</a></div></div>',1),H1={class:"flex justify-between mb-4 items-start"},z1=R("h1",{class:"font-medium"},"Blog Yönetimi",-1),K1=R("form",{action:"",class:"flex items-center mb-4"},[R("div",{class:"relative w-full mr-2"},[R("input",{type:"text",class:"py-2 pr-4 pl-10 bg-gray-100 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500",placeholder:"Ara..."}),R("i",{class:"ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"})])],-1),G1={key:0,class:"w-full bg-gray-100 mt-6"},W1=R("thead",null,[R("tr",null,[R("th",{class:"w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md"}," Başlık "),R("th",{class:"w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"}," Yazar "),R("th",{class:"w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"}," Yaratılma Tarihi "),R("th",{class:"w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"}," Column "),R("th",{class:"w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"}," Column "),R("th",{class:"w-1/4 text-[12px] uppercase tracking-wide font-medium text-gray-600 py-2 px-4 bg-gray-50 text-left"}," Aksiyonlar ")])],-1),Q1={class:"py-2 px-4 border-b border-b-gray-50"},J1={class:"flex items-center"},Y1={href:"#",class:"text-gray-600 text-sm font-medium hover:text-blue-500 truncate"},X1={class:"py-2 px-4 border-b border-b-gray-50"},Z1={class:"text-[13px] font-medium text-gray-600"},ex={class:"py-2 px-4 border-b border-b-gray-50"},tx={class:"text-[13px] font-medium text-gray-600"},nx=R("td",{class:"py-2 px-4 border-b border-b-gray-50"},[R("div",{class:"flex space-x-5"},[R("span",{class:"text-[13px] font-medium text-gray-600"},"Data")])],-1),rx=R("td",{class:"py-2 px-4 border-b border-b-gray-50"},[R("div",{class:"flex space-x-5"},[R("span",{class:"text-[13px] font-medium text-gray-600"},"Data")])],-1),sx={class:"py-2 px-4 border-b border-b-gray-50 flex justify-between"},ix={class:"button-container relative flex flex-row gap-1"},ox=R("button",{class:"ri-edit-line text-lg bg-orange-400 hover:bg-gray-900 text-white font-bold px-2 rounded"},null,-1),ax=R("button",{class:"ri-eye-line text-lg bg-green-700 hover:bg-gray-900 text-white font-bold px-2 rounded"},null,-1),lx=["onClick"],cx={class:"pagination-container flex justify-end mt-4 w-full"},ux=["disabled"],hx=["disabled"],dx={__name:"BlogManagement",setup(t){const e=mt(!1),n=mt(!1);let r=null;function s(S){r=S,n.value=!0}const i=qd(hl,"blogs"),o=mt([]),a=mt(1),l=mt(10),c=st(()=>(a.value-1)*l.value),u=st(()=>{const S=c.value,$=S+l.value;return o.value.slice(S,$)}),h=st(()=>Math.ceil(o.value.length/l.value)),d=()=>{a.value<h.value&&(a.value++,console.log(a.value),console.log(h.value))},g=()=>{a.value>1&&a.value--};async function y(){let S=[];const $=await Hd(i);for(const ee of $.docs){let M=ee.data();M.id=ee.id;const pe=qd(hl,"blogs",ee.id,"comments"),ke=[];(await Hd(pe)).docs.forEach($e=>{ke.push($e.data())}),M.comments=ke,S.push(M)}return S}async function T(){try{const S=localStorage.getItem("cachedBlogs"),$=localStorage.getItem("cachedTime"),ee=30*60*1e3;if(S&&$&&new Date-new Date(parseInt($))<ee)return JSON.parse(S);{const M=await y();return localStorage.setItem("cachedBlogs",JSON.stringify(M)),localStorage.setItem("cachedTime",new Date().getTime().toString()),M}}catch(S){return console.error("Error getting blogs with comments:",S),[]}}function b(S){return new Date(S.seconds*1e3).toLocaleDateString("en-US")}async function x(){if(n.value=!1,r)try{await mS(t_(hl,"blogs",r)),o.value=o.value.filter(S=>S.id!==r),localStorage.setItem("cachedBlogs",JSON.stringify(o.value)),console.log(`Blog with ID ${r} deleted successfully.`)}catch(S){console.error("Error deleting blog:",S)}}async function O(S){console.log("Received new blog data:",S);try{await _S(i,S),o.value=[S,...o.value],localStorage.setItem("cachedBlogs",JSON.stringify(o.value))}catch($){console.error("Error adding document:",$)}}return tp(async()=>{T().then(S=>{o.value=S,console.log(new Date)})}),(S,$)=>(Ae(),Me(Je,null,[be(y0,{show:e.value,onClose:$[0]||($[0]=ee=>e.value=!1),onAddBlog:O},null,8,["show"]),be(T0,{show:n.value,onClose:$[1]||($[1]=ee=>n.value=!1),onDelete:x},null,8,["show"]),q1,be(j1,{class:"p-6"},{default:qo(()=>{var ee;return[R("div",H1,[z1,R("button",{onClick:$[2]||($[2]=M=>e.value=!0),class:"bg-green-700 text-white px-4 py-1 font-medium rounded"}," + Ekle ")]),K1,(ee=o.value)!=null&&ee.length?(Ae(),Me("table",G1,[W1,R("tbody",null,[(Ae(!0),Me(Je,null,rp(u.value,M=>(Ae(),Me("tr",{key:M.id},[R("td",Q1,[R("div",J1,[R("a",Y1,_s(M.title||""),1)])]),R("td",X1,[R("span",Z1,_s(M.author||""),1)]),R("td",ex,[R("span",tx,_s(b(M.created_date)),1)]),nx,rx,R("td",sx,[R("div",ix,[ox,ax,R("button",{onClick:pe=>s(M.id),id:"delete-blog-modal-button",class:"ri-delete-bin-6-line text-lg bg-red-700 hover:bg-gray-900 text-white font-bold px-2 rounded"},null,8,lx)])])]))),128))])])):Ls("",!0),R("div",cx,[R("button",{onClick:g,disabled:a.value===1,class:"ri-arrow-left-fill h-8 px-4 m-2 text-l text-white transition-colors duration-150 bg-gray-800 rounded-lg focus:shadow-outline hover:bg-indigo-800"},null,8,ux),R("button",{onClick:d,disabled:a.value===h.value,class:"ri-arrow-right-fill h-8 px-4 m-2 text-l text-white transition-colors duration-150 bg-gray-800 rounded-lg focus:shadow-outline hover:bg-indigo-800"},null,8,hx)])]}),_:1})],64))}},fx={},px={class:"font-bold text-4xl"};function gx(t,e){return Ae(),Me("h1",px,"Lawyers")}const mx=Qr(fx,[["render",gx]]),_x={},yx={class:"font-bold text-4xl"};function vx(t,e){return Ae(),Me("h1",yx,"Ayarlar")}const wx=Qr(_x,[["render",vx]]),Ex=[{path:"/",component:jE},{path:"/online-meetings",component:KE},{path:"/blog-management",component:dx},{path:"/lawyers",component:mx},{path:"/settings",component:wx}],Ix=LE({linkActiveClass:"bg-gray-950 text-white",history:dE(),routes:Ex}),Tx={class:"h-screen min-w-[16rem] bg-gray-800 p-4 z-50 sidebar-menu transition-opacity ease-in-out delay-150 duration-300 transition-transform"},Ax=R("a",{href:"#",class:"flex items-center pb-4 border-b border-b-gray-800"},[R("img",{src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg",alt:"",class:"w-8 h-8 rounded object-cover"}),R("span",{class:"text-lg font-bold text-white ml-3"},"Admin Panel")],-1),bx={class:"mt-4"},Rx={class:"text-lg"},Sx=R("div",{class:"fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"},null,-1),Px={__name:"Sidebar",setup(t){let e=[{title:"Ana Sayfa",icon:"ri-home-2-line",link:"/"},{title:"Online Görüşmeler",icon:"ri-video-on-line",link:"/online-meetings"},{title:"Blog Yönetimi",icon:"ri-article-line",link:"/blog-management"},{title:"Avukatlar",icon:"ri-team-line",link:"/lawyers"},{title:"Ayarlar",icon:"ri-settings-2-line",link:"/settings"},{title:"Çıkış",icon:"ri-logout-box-line",link:"/login"}];return(n,r)=>{const s=Qf("router-link");return Ae(),Me(Je,null,[R("div",Tx,[Ax,R("ul",bx,[(Ae(!0),Me(Je,null,rp(er(e),i=>(Ae(),Me("li",{key:i.title,class:"mb-1 group"},[be(s,{to:i.link,class:"flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md"},{default:qo(()=>[R("i",{class:Lo([i.icon,"mr-3 text-lg"])},null,2),R("span",Rx,_s(i.title),1)]),_:2},1032,["to"])]))),128))])]),Sx],64)}}},Cx={},xx={class:"p-6"};function kx(t,e){return Ae(),Me("section",xx,[sp(t.$slots,"default")])}const Dx=Qr(Cx,[["render",kx]]),Ox={class:"flex flex-grow"},Nx={class:"w-full max-h-screen overflow-scroll"},Vx={class:"py-2 px-6 bg-white flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30"},Mx=R("i",{class:"ri-menu-line"},null,-1),Lx=[Mx],Fx=Ep('<ul class="flex items-center text-sm ml-4"><li class="mr-2"><a href="#" class="text-gray-500 hover:text-gray-800 font-medium">Ana Sayfa</a></li></ul><ul class="ml-auto flex items-center"><li class="dropdown"><button type="button" class="dropdown-toggle text-black w-8 h-8 flex items-center justify-center hover:bg-gray-50 hover:text-gray-600"><i class="ri-notification-4-fill ri-2x mb-3 w-8 h-8 rounded block align-middle"></i></button><div class="dropdown-menu shadow-md shadow-black/5 z-30 hidden max-w-xs w-full bg-white rounded-md border border-gray-100" data-popper-id="popper-0" data-popper-placement="bottom-end" style="position:absolute;inset:0px 0px auto auto;margin:0px;transform:translate3d(-67.2222px, 53.8889px, 0px);"><div class="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab"><button type="button" data-tab="notification" data-tab-page="notifications" class="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1 active">Notifications</button><button type="button" data-tab="notification" data-tab-page="messages" class="text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 border-b-transparent mr-4 pb-1">Messages</button></div><div class="my-2"><ul class="max-h-64 overflow-y-auto" data-tab-for="notification" data-page="notifications"><li><a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"><div class="ml-2"><div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div><div class="text-[11px] text-gray-400">from a user</div></div></a></li><li><a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"><div class="ml-2"><div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div><div class="text-[11px] text-gray-400">from a user</div></div></a></li><li><a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"><div class="ml-2"><div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div><div class="text-[11px] text-gray-400">from a user</div></div></a></li><li><a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"><div class="ml-2"><div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div><div class="text-[11px] text-gray-400">from a user</div></div></a></li><li><a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"><div class="ml-2"><div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">New order</div><div class="text-[11px] text-gray-400">from a user</div></div></a></li></ul><ul class="max-h-64 overflow-y-auto hidden" data-tab-for="notification" data-page="messages"><li><a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"><div class="ml-2"><div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div><div class="text-[11px] text-gray-400">Hello there!</div></div></a></li><li><a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"><div class="ml-2"><div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div><div class="text-[11px] text-gray-400">Hello there!</div></div></a></li><li><a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"><div class="ml-2"><div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div><div class="text-[11px] text-gray-400">Hello there!</div></div></a></li><li><a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"><div class="ml-2"><div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div><div class="text-[11px] text-gray-400">Hello there!</div></div></a></li><li><a href="#" class="py-2 px-4 flex items-center hover:bg-gray-50 group"><img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded block object-cover align-middle"><div class="ml-2"><div class="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">John Doe</div><div class="text-[11px] text-gray-400">Hello there!</div></div></a></li></ul></div></div></li><li class="dropdown ml-3"><button type="button" class="dropdown-toggle flex items-center"><i class="ri-shield-user-fill ri-2x mb-3 w-8 h-8 rounded block align-middle"></i></button><ul class="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]" data-popper-id="popper-1" data-popper-placement="bottom-end" style="position:absolute;inset:0px 0px auto auto;margin:0px;transform:translate3d(-23.3333px, 60px, 0px);"><li><a href="#" class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Profile</a></li><li><a href="#" class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Settings</a></li><li><a href="login.html" class="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-blue-500 hover:bg-gray-50">Logout</a></li></ul></li></ul>',2),Ux={__name:"App",setup(t){const e=mt(!0);return(n,r)=>{const s=Qf("RouterView");return Ae(),Me("div",Ox,[e.value?(Ae(),Ic(Px,{key:0,class:"h-screen min-w-[16rem]"})):Ls("",!0),R("main",Nx,[R("div",Vx,[R("button",{type:"button",onClick:r[0]||(r[0]=i=>e.value=!e.value),class:"text-lg text-gray-600 sidebar-toggle"},Lx),Fx]),be(Dx,null,{default:qo(()=>[be(s)]),_:1})])])}}};Ow(Ux).use(Ix).mount("#app");
