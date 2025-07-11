var Nm=Object.defineProperty;var Om=(n,e,t)=>e in n?Nm(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var $a=(n,e,t)=>Om(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const xt={},sr=[],li=()=>{},Fm=()=>!1,Pa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),iu=n=>n.startsWith("onUpdate:"),Yt=Object.assign,su=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Bm=Object.prototype.hasOwnProperty,ht=(n,e)=>Bm.call(n,e),ze=Array.isArray,rr=n=>fo(n)==="[object Map]",yr=n=>fo(n)==="[object Set]",nh=n=>fo(n)==="[object Date]",Je=n=>typeof n=="function",Pt=n=>typeof n=="string",Jn=n=>typeof n=="symbol",yt=n=>n!==null&&typeof n=="object",mf=n=>(yt(n)||Je(n))&&Je(n.then)&&Je(n.catch),gf=Object.prototype.toString,fo=n=>gf.call(n),km=n=>fo(n).slice(8,-1),vf=n=>fo(n)==="[object Object]",ru=n=>Pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Gr=nu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ia=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Hm=/-(\w)/g,Vn=Ia(n=>n.replace(Hm,(e,t)=>t?t.toUpperCase():"")),Vm=/\B([A-Z])/g,Is=Ia(n=>n.replace(Vm,"-$1").toLowerCase()),La=Ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),el=Ia(n=>n?`on${La(n)}`:""),es=(n,e)=>!Object.is(n,e),ta=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Kl=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},fa=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Gm=n=>{const e=Pt(n)?Number(n):NaN;return isNaN(e)?n:e};let ih;const Ua=()=>ih||(ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wt(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Pt(i)?Ym(i):wt(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Pt(n)||yt(n))return n}const zm=/;(?![^(]*\))/g,Wm=/:([^]+)/,Xm=/\/\*[^]*?\*\//g;function Ym(n){const e={};return n.replace(Xm,"").split(zm).forEach(t=>{if(t){const i=t.split(Wm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ut(n){let e="";if(Pt(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=ut(n[t]);i&&(e+=i+" ")}else if(yt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function _f(n){if(!n)return null;let{class:e,style:t}=n;return e&&!Pt(e)&&(n.class=ut(e)),t&&(n.style=wt(t)),n}const qm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Km=nu(qm);function xf(n){return!!n||n===""}function Zm(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=po(n[i],e[i]);return t}function po(n,e){if(n===e)return!0;let t=nh(n),i=nh(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Jn(n),i=Jn(e),t||i)return n===e;if(t=ze(n),i=ze(e),t||i)return t&&i?Zm(n,e):!1;if(t=yt(n),i=yt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!po(n[o],e[o]))return!1}}return String(n)===String(e)}function ou(n,e){return n.findIndex(t=>po(t,e))}const Af=n=>!!(n&&n.__v_isRef===!0),yn=n=>Pt(n)?n:n==null?"":ze(n)||yt(n)&&(n.toString===gf||!Je(n.toString))?Af(n)?yn(n.value):JSON.stringify(n,Mf,2):String(n),Mf=(n,e)=>Af(e)?Mf(n,e.value):rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[tl(i,r)+" =>"]=s,t),{})}:yr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>tl(t))}:Jn(e)?tl(e):yt(e)&&!ze(e)&&!vf(e)?String(e):e,tl=(n,e="")=>{var t;return Jn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _n;class Qm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=_n,!e&&_n&&(this.index=(_n.scopes||(_n.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=_n;try{return _n=this,e()}finally{_n=t}}}on(){++this._on===1&&(this.prevScope=_n,_n=this)}off(){this._on>0&&--this._on===0&&(_n=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function jm(){return _n}let Et;const nl=new WeakSet;class yf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,_n&&_n.active&&_n.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,nl.has(this)&&(nl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ef(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sh(this),wf(this);const e=Et,t=Qn;Et=this,Qn=!0;try{return this.fn()}finally{Tf(this),Et=e,Qn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cu(e);this.deps=this.depsTail=void 0,sh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?nl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zl(this)&&this.run()}get dirty(){return Zl(this)}}let Sf=0,zr,Wr;function Ef(n,e=!1){if(n.flags|=8,e){n.next=Wr,Wr=n;return}n.next=zr,zr=n}function au(){Sf++}function lu(){if(--Sf>0)return;if(Wr){let e=Wr;for(Wr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;zr;){let e=zr;for(zr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function wf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Tf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),cu(i),Jm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Zl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function bf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===$r)||(n.globalVersion=$r,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Zl(n))))return;n.flags|=2;const e=n.dep,t=Et,i=Qn;Et=n,Qn=!0;try{wf(n);const s=n.fn(n._value);(e.version===0||es(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,Qn=i,Tf(n),n.flags&=-3}}function cu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)cu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Jm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Qn=!0;const Cf=[];function Ii(){Cf.push(Qn),Qn=!1}function Li(){const n=Cf.pop();Qn=n===void 0?!0:n}function sh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let $r=0;class $m{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!Qn||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new $m(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,Rf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,$r++,this.notify(e)}notify(e){au();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{lu()}}}function Rf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Rf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const pa=new WeakMap,bs=Symbol(""),Ql=Symbol(""),eo=Symbol("");function $t(n,e,t){if(Qn&&Et){let i=pa.get(n);i||pa.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new uu),s.map=i,s.key=t),s.track()}}function wi(n,e,t,i,s,r){const o=pa.get(n);if(!o){$r++;return}const a=l=>{l&&l.trigger()};if(au(),e==="clear")o.forEach(a);else{const l=ze(n),c=l&&ru(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===eo||!Jn(d)&&d>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(eo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(bs)),rr(n)&&a(o.get(Ql)));break;case"delete":l||(a(o.get(bs)),rr(n)&&a(o.get(Ql)));break;case"set":rr(n)&&a(o.get(bs));break}}lu()}function eg(n,e){const t=pa.get(n);return t&&t.get(e)}function Bs(n){const e=lt(n);return e===n?e:($t(e,"iterate",eo),Hn(n)?e:e.map(qt))}function Na(n){return $t(n=lt(n),"iterate",eo),n}const tg={__proto__:null,[Symbol.iterator](){return il(this,Symbol.iterator,qt)},concat(...n){return Bs(this).concat(...n.map(e=>ze(e)?Bs(e):e))},entries(){return il(this,"entries",n=>(n[1]=qt(n[1]),n))},every(n,e){return fi(this,"every",n,e,void 0,arguments)},filter(n,e){return fi(this,"filter",n,e,t=>t.map(qt),arguments)},find(n,e){return fi(this,"find",n,e,qt,arguments)},findIndex(n,e){return fi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return fi(this,"findLast",n,e,qt,arguments)},findLastIndex(n,e){return fi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return fi(this,"forEach",n,e,void 0,arguments)},includes(...n){return sl(this,"includes",n)},indexOf(...n){return sl(this,"indexOf",n)},join(n){return Bs(this).join(n)},lastIndexOf(...n){return sl(this,"lastIndexOf",n)},map(n,e){return fi(this,"map",n,e,void 0,arguments)},pop(){return Rr(this,"pop")},push(...n){return Rr(this,"push",n)},reduce(n,...e){return rh(this,"reduce",n,e)},reduceRight(n,...e){return rh(this,"reduceRight",n,e)},shift(){return Rr(this,"shift")},some(n,e){return fi(this,"some",n,e,void 0,arguments)},splice(...n){return Rr(this,"splice",n)},toReversed(){return Bs(this).toReversed()},toSorted(n){return Bs(this).toSorted(n)},toSpliced(...n){return Bs(this).toSpliced(...n)},unshift(...n){return Rr(this,"unshift",n)},values(){return il(this,"values",qt)}};function il(n,e,t){const i=Na(n),s=i[e]();return i!==n&&!Hn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const ng=Array.prototype;function fi(n,e,t,i,s,r){const o=Na(n),a=o!==n&&!Hn(n),l=o[e];if(l!==ng[e]){const h=l.apply(n,r);return a?qt(h):h}let c=t;o!==n&&(a?c=function(h,d){return t.call(this,qt(h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function rh(n,e,t,i){const s=Na(n);let r=t;return s!==n&&(Hn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,qt(a),l,n)}),s[e](r,...i)}function sl(n,e,t){const i=lt(n);$t(i,"iterate",eo);const s=i[e](...t);return(s===-1||s===!1)&&fu(t[0])?(t[0]=lt(t[0]),i[e](...t)):s}function Rr(n,e,t=[]){Ii(),au();const i=lt(n)[e].apply(n,t);return lu(),Li(),i}const ig=nu("__proto__,__v_isRef,__isVue"),Df=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Jn));function sg(n){Jn(n)||(n=String(n));const e=lt(this);return $t(e,"has",n),e.hasOwnProperty(n)}class Pf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?pg:Nf:r?Uf:Lf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!s){let l;if(o&&(l=tg[t]))return l;if(t==="hasOwnProperty")return sg}const a=Reflect.get(e,t,Zt(e)?e:i);return(Jn(t)?Df.has(t):ig(t))||(s||$t(e,"get",t),r)?a:Zt(a)?o&&ru(t)?a:a.value:yt(a)?s?Of(a):Ui(a):a}}class If extends Pf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=os(r);if(!Hn(i)&&!os(i)&&(r=lt(r),i=lt(i)),!ze(e)&&Zt(r)&&!Zt(i))return l?!1:(r.value=i,!0)}const o=ze(e)&&ru(t)?Number(t)<e.length:ht(e,t),a=Reflect.set(e,t,i,Zt(e)?e:s);return e===lt(s)&&(o?es(i,r)&&wi(e,"set",t,i):wi(e,"add",t,i)),a}deleteProperty(e,t){const i=ht(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&wi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Jn(t)||!Df.has(t))&&$t(e,"has",t),i}ownKeys(e){return $t(e,"iterate",ze(e)?"length":bs),Reflect.ownKeys(e)}}class rg extends Pf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const og=new If,ag=new rg,lg=new If(!0);const jl=n=>n,So=n=>Reflect.getPrototypeOf(n);function cg(n,e,t){return function(...i){const s=this.__v_raw,r=lt(s),o=rr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?jl:e?ma:qt;return!e&&$t(r,"iterate",l?Ql:bs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Eo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ug(n,e){const t={get(s){const r=this.__v_raw,o=lt(r),a=lt(s);n||(es(s,a)&&$t(o,"get",s),$t(o,"get",a));const{has:l}=So(o),c=e?jl:n?ma:qt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&$t(lt(s),"iterate",bs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=lt(r),a=lt(s);return n||(es(s,a)&&$t(o,"has",s),$t(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=lt(a),c=e?jl:n?ma:qt;return!n&&$t(l,"iterate",bs),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Yt(t,n?{add:Eo("add"),set:Eo("set"),delete:Eo("delete"),clear:Eo("clear")}:{add(s){!e&&!Hn(s)&&!os(s)&&(s=lt(s));const r=lt(this);return So(r).has.call(r,s)||(r.add(s),wi(r,"add",s,s)),this},set(s,r){!e&&!Hn(r)&&!os(r)&&(r=lt(r));const o=lt(this),{has:a,get:l}=So(o);let c=a.call(o,s);c||(s=lt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?es(r,u)&&wi(o,"set",s,r):wi(o,"add",s,r),this},delete(s){const r=lt(this),{has:o,get:a}=So(r);let l=o.call(r,s);l||(s=lt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&wi(r,"delete",s,void 0),c},clear(){const s=lt(this),r=s.size!==0,o=s.clear();return r&&wi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=cg(s,n,e)}),t}function hu(n,e){const t=ug(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(ht(t,s)&&s in i?t:i,s,r)}const hg={get:hu(!1,!1)},dg={get:hu(!1,!0)},fg={get:hu(!0,!1)};const Lf=new WeakMap,Uf=new WeakMap,Nf=new WeakMap,pg=new WeakMap;function mg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gg(n){return n.__v_skip||!Object.isExtensible(n)?0:mg(km(n))}function Ui(n){return os(n)?n:du(n,!1,og,hg,Lf)}function vg(n){return du(n,!1,lg,dg,Uf)}function Of(n){return du(n,!0,ag,fg,Nf)}function du(n,e,t,i,s){if(!yt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=gg(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function or(n){return os(n)?or(n.__v_raw):!!(n&&n.__v_isReactive)}function os(n){return!!(n&&n.__v_isReadonly)}function Hn(n){return!!(n&&n.__v_isShallow)}function fu(n){return n?!!n.__v_raw:!1}function lt(n){const e=n&&n.__v_raw;return e?lt(e):n}function _g(n){return!ht(n,"__v_skip")&&Object.isExtensible(n)&&Kl(n,"__v_skip",!0),n}const qt=n=>yt(n)?Ui(n):n,ma=n=>yt(n)?Of(n):n;function Zt(n){return n?n.__v_isRef===!0:!1}function se(n){return Ff(n,!1)}function Dn(n){return Ff(n,!0)}function Ff(n,e){return Zt(n)?n:new xg(n,e)}class xg{constructor(e,t){this.dep=new uu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:lt(e),this._value=t?e:qt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Hn(e)||os(e);e=i?e:lt(e),es(e,t)&&(this._rawValue=e,this._value=i?e:qt(e),this.dep.trigger())}}function V(n){return Zt(n)?n.value:n}const Ag={get:(n,e,t)=>e==="__v_raw"?n:V(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Zt(s)&&!Zt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Bf(n){return or(n)?n:new Proxy(n,Ag)}function Sr(n){const e=ze(n)?new Array(n.length):{};for(const t in n)e[t]=yg(n,t);return e}class Mg{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return eg(lt(this._object),this._key)}}function yg(n,e,t){const i=n[e];return Zt(i)?i:new Mg(n,e,t)}class Sg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new uu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$r-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Ef(this,!0),!0}get value(){const e=this.dep.track();return bf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Eg(n,e,t=!1){let i,s;return Je(n)?i=n:(i=n.get,s=n.set),new Sg(i,s,t)}const wo={},ga=new WeakMap;let ys;function wg(n,e=!1,t=ys){if(t){let i=ga.get(t);i||ga.set(t,i=[]),i.push(n)}}function Tg(n,e,t=xt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=A=>s?A:Hn(A)||s===!1||s===0?Ti(A,1):Ti(A);let u,h,d,f,v=!1,_=!1;if(Zt(n)?(h=()=>n.value,v=Hn(n)):or(n)?(h=()=>c(n),v=!0):ze(n)?(_=!0,v=n.some(A=>or(A)||Hn(A)),h=()=>n.map(A=>{if(Zt(A))return A.value;if(or(A))return c(A);if(Je(A))return l?l(A,2):A()})):Je(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){Ii();try{d()}finally{Li()}}const A=ys;ys=u;try{return l?l(n,3,[f]):n(f)}finally{ys=A}}:h=li,e&&s){const A=h,T=s===!0?1/0:s;h=()=>Ti(A(),T)}const m=jm(),p=()=>{u.stop(),m&&m.active&&su(m.effects,u)};if(r&&e){const A=e;e=(...T)=>{A(...T),p()}}let b=_?new Array(n.length).fill(wo):wo;const w=A=>{if(!(!(u.flags&1)||!u.dirty&&!A))if(e){const T=u.run();if(s||v||(_?T.some((E,M)=>es(E,b[M])):es(T,b))){d&&d();const E=ys;ys=u;try{const M=[T,b===wo?void 0:_&&b[0]===wo?[]:b,f];b=T,l?l(e,3,M):e(...M)}finally{ys=E}}}else u.run()};return a&&a(w),u=new yf(h),u.scheduler=o?()=>o(w,!1):w,f=A=>wg(A,!1,u),d=u.onStop=()=>{const A=ga.get(u);if(A){if(l)l(A,4);else for(const T of A)T();ga.delete(u)}},e?i?w(!0):b=u.run():o?o(w.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ti(n,e=1/0,t){if(e<=0||!yt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Zt(n))Ti(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)Ti(n[i],e,t);else if(yr(n)||rr(n))n.forEach(i=>{Ti(i,e,t)});else if(vf(n)){for(const i in n)Ti(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ti(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mo(n,e,t,i){try{return i?n(...i):n()}catch(s){Oa(s,e,t)}}function $n(n,e,t,i){if(Je(n)){const s=mo(n,e,t,i);return s&&mf(s)&&s.catch(r=>{Oa(r,e,t)}),s}if(ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push($n(n[r],e,t,i));return s}}function Oa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Ii(),mo(r,null,10,[n,l,c]),Li();return}}bg(n,t,s,i,o)}function bg(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const un=[];let ii=-1;const ar=[];let Yi=null,$s=0;const kf=Promise.resolve();let va=null;function Ni(n){const e=va||kf;return n?e.then(this?n.bind(this):n):e}function Cg(n){let e=ii+1,t=un.length;for(;e<t;){const i=e+t>>>1,s=un[i],r=to(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function pu(n){if(!(n.flags&1)){const e=to(n),t=un[un.length-1];!t||!(n.flags&2)&&e>=to(t)?un.push(n):un.splice(Cg(e),0,n),n.flags|=1,Hf()}}function Hf(){va||(va=kf.then(Gf))}function Rg(n){ze(n)?ar.push(...n):Yi&&n.id===-1?Yi.splice($s+1,0,n):n.flags&1||(ar.push(n),n.flags|=1),Hf()}function oh(n,e,t=ii+1){for(;t<un.length;t++){const i=un[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;un.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Vf(n){if(ar.length){const e=[...new Set(ar)].sort((t,i)=>to(t)-to(i));if(ar.length=0,Yi){Yi.push(...e);return}for(Yi=e,$s=0;$s<Yi.length;$s++){const t=Yi[$s];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Yi=null,$s=0}}const to=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Gf(n){try{for(ii=0;ii<un.length;ii++){const e=un[ii];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),mo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ii<un.length;ii++){const e=un[ii];e&&(e.flags&=-2)}ii=-1,un.length=0,Vf(),va=null,(un.length||ar.length)&&Gf()}}let Xt=null,Fa=null;function _a(n){const e=Xt;return Xt=n,Fa=n&&n.type.__scopeId||null,e}function mu(n){Fa=n}function gu(){Fa=null}function Lt(n,e=Xt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Ah(-1);const r=_a(e);let o;try{o=n(...s)}finally{_a(r),i._d&&Ah(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function kt(n,e){if(Xt===null)return n;const t=Xa(Xt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=xt]=e[s];r&&(Je(r)&&(r={mounted:r,updated:r}),r.deep&&Ti(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ds(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ii(),$n(l,t,8,[n.el,a,n,e]),Li())}}const zf=Symbol("_vte"),Wf=n=>n.__isTeleport,Xr=n=>n&&(n.disabled||n.disabled===""),ah=n=>n&&(n.defer||n.defer===""),lh=n=>typeof SVGElement<"u"&&n instanceof SVGElement,ch=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Jl=(n,e)=>{const t=n&&n.to;return Pt(t)?e?e(t):null:t},Xf={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:v,createText:_,createComment:m}}=c,p=Xr(e.props);let{shapeFlag:b,children:w,dynamicChildren:A}=e;if(n==null){const T=e.el=_(""),E=e.anchor=_("");f(T,t,i),f(E,t,i);const M=(g,x)=>{b&16&&(s&&s.isCE&&(s.ce._teleportTarget=g),u(w,g,x,s,r,o,a,l))},S=()=>{const g=e.target=Jl(e.props,v),x=Yf(g,e,_,f);g&&(o!=="svg"&&lh(g)?o="svg":o!=="mathml"&&ch(g)&&(o="mathml"),p||(M(g,x),na(e,!1)))};p&&(M(t,E),na(e,!0)),ah(e.props)?(e.el.__isMounted=!1,an(()=>{S(),delete e.el.__isMounted},r)):S()}else{if(ah(e.props)&&n.el.__isMounted===!1){an(()=>{Xf.process(n,e,t,i,s,r,o,a,l,c)},r);return}e.el=n.el,e.targetStart=n.targetStart;const T=e.anchor=n.anchor,E=e.target=n.target,M=e.targetAnchor=n.targetAnchor,S=Xr(n.props),g=S?t:E,x=S?T:M;if(o==="svg"||lh(E)?o="svg":(o==="mathml"||ch(E))&&(o="mathml"),A?(d(n.dynamicChildren,A,g,s,r,o,a),xu(n,e,!0)):l||h(n,e,g,x,s,r,o,a,!1),p)S?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):To(e,t,T,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const P=e.target=Jl(e.props,v);P&&To(e,P,null,c,0)}else S&&To(e,E,M,c,1);na(e,p)}},remove(n,e,t,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:d}=n;if(h&&(s(c),s(u)),r&&s(l),o&16){const f=r||!Xr(d);for(let v=0;v<a.length;v++){const _=a[v];i(_,e,t,f,!!_.dynamicChildren)}}},move:To,hydrate:Dg};function To(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,h=r===2;if(h&&i(o,e,t),(!h||Xr(u))&&l&16)for(let d=0;d<c.length;d++)s(c[d],e,t,2);h&&i(a,e,t)}function Dg(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){const d=e.target=Jl(e.props,l);if(d){const f=Xr(e.props),v=d._lpa||d.firstChild;if(e.shapeFlag&16)if(f)e.anchor=h(o(n),e,a(n),t,i,s,r),e.targetStart=v,e.targetAnchor=v&&o(v);else{e.anchor=o(n);let _=v;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,d._lpa=e.targetAnchor&&o(e.targetAnchor);break}}_=o(_)}e.targetAnchor||Yf(d,e,u,c),h(v&&o(v),e,d,t,i,s,r)}na(e,f)}return e.anchor&&o(e.anchor)}const Ba=Xf;function na(n,e){const t=n.ctx;if(t&&t.ut){let i,s;for(e?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function Yf(n,e,t,i){const s=e.targetStart=t(""),r=e.targetAnchor=t("");return s[zf]=r,n&&(i(s,n),i(r,n)),r}const qi=Symbol("_leaveCb"),bo=Symbol("_enterCb");function Pg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sn(()=>{n.isMounted=!0}),Ls(()=>{n.isUnmounting=!0}),n}const On=[Function,Array],qf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:On,onEnter:On,onAfterEnter:On,onEnterCancelled:On,onBeforeLeave:On,onLeave:On,onAfterLeave:On,onLeaveCancelled:On,onBeforeAppear:On,onAppear:On,onAfterAppear:On,onAppearCancelled:On},Kf=n=>{const e=n.subTree;return e.component?Kf(e.component):e},Ig={name:"BaseTransition",props:qf,setup(n,{slots:e}){const t=Tp(),i=Pg();return()=>{const s=e.default&&jf(e.default(),!0);if(!s||!s.length)return;const r=Zf(s),o=lt(n),{mode:a}=o;if(i.isLeaving)return rl(r);const l=uh(r);if(!l)return rl(r);let c=$l(l,o,i,t,h=>c=h);l.type!==nn&&no(l,c);let u=t.subTree&&uh(t.subTree);if(u&&u.type!==nn&&!Es(l,u)&&Kf(t).type!==nn){let h=$l(u,o,i,t);if(no(u,h),a==="out-in"&&l.type!==nn)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},rl(r);a==="in-out"&&l.type!==nn?h.delayLeave=(d,f,v)=>{const _=Qf(i,u);_[String(u.key)]=u,d[qi]=()=>{f(),d[qi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Zf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==nn){e=t;break}}return e}const Lg=Ig;function Qf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function $l(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:b,onAppearCancelled:w}=e,A=String(n.key),T=Qf(t,n),E=(g,x)=>{g&&$n(g,i,9,x)},M=(g,x)=>{const P=x[1];E(g,x),ze(g)?g.every(I=>I.length<=1)&&P():g.length<=1&&P()},S={mode:o,persisted:a,beforeEnter(g){let x=l;if(!t.isMounted)if(r)x=m||l;else return;g[qi]&&g[qi](!0);const P=T[A];P&&Es(n,P)&&P.el[qi]&&P.el[qi](),E(x,[g])},enter(g){let x=c,P=u,I=h;if(!t.isMounted)if(r)x=p||c,P=b||u,I=w||h;else return;let L=!1;const F=g[bo]=Y=>{L||(L=!0,Y?E(I,[g]):E(P,[g]),S.delayedLeave&&S.delayedLeave(),g[bo]=void 0)};x?M(x,[g,F]):F()},leave(g,x){const P=String(n.key);if(g[bo]&&g[bo](!0),t.isUnmounting)return x();E(d,[g]);let I=!1;const L=g[qi]=F=>{I||(I=!0,x(),F?E(_,[g]):E(v,[g]),g[qi]=void 0,T[P]===n&&delete T[P])};T[P]=n,f?M(f,[g,L]):L()},clone(g){const x=$l(g,e,t,i,s);return s&&s(x),x}};return S}function rl(n){if(ka(n))return n=as(n),n.children=null,n}function uh(n){if(!ka(n))return Wf(n.type)&&n.children?Zf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Je(t.default))return t.default()}}function no(n,e){n.shapeFlag&6&&n.component?(n.transition=e,no(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function jf(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===At?(o.patchFlag&128&&s++,i=i.concat(jf(o.children,e,a))):(e||o.type!==nn)&&i.push(a!=null?as(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function cs(n,e){return Je(n)?Yt({name:n.name},e,{setup:n}):n}function Jf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Yr(n,e,t,i,s=!1){if(ze(n)){n.forEach((v,_)=>Yr(v,e&&(ze(e)?e[_]:e),t,i,s));return}if(lr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Yr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Xa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===xt?a.refs={}:a.refs,h=a.setupState,d=lt(h),f=h===xt?()=>!1:v=>ht(d,v);if(c!=null&&c!==l&&(Pt(c)?(u[c]=null,f(c)&&(h[c]=null)):Zt(c)&&(c.value=null)),Je(l))mo(l,a,12,[o,u]);else{const v=Pt(l),_=Zt(l);if(v||_){const m=()=>{if(n.f){const p=v?f(l)?h[l]:u[l]:l.value;s?ze(p)&&su(p,r):ze(p)?p.includes(r)||p.push(r):v?(u[l]=[r],f(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else v?(u[l]=o,f(l)&&(h[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,an(m,t)):m()}}}Ua().requestIdleCallback;Ua().cancelIdleCallback;const lr=n=>!!n.type.__asyncLoader,ka=n=>n.type.__isKeepAlive;function Ug(n,e){$f(n,"a",e)}function Ng(n,e){$f(n,"da",e)}function $f(n,e,t=Kt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ha(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ka(s.parent.vnode)&&Og(i,e,t,s),s=s.parent}}function Og(n,e,t,i){const s=Ha(e,n,i,!0);Er(()=>{su(i[e],s)},t)}function Ha(n,e,t=Kt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ii();const a=go(t),l=$n(e,t,n,o);return a(),Li(),l});return i?s.unshift(r):s.push(r),r}}const Fi=n=>(e,t=Kt)=>{(!ro||n==="sp")&&Ha(n,(...i)=>e(...i),t)},Fg=Fi("bm"),Sn=Fi("m"),Bg=Fi("bu"),kg=Fi("u"),Ls=Fi("bum"),Er=Fi("um"),Hg=Fi("sp"),Vg=Fi("rtg"),Gg=Fi("rtc");function zg(n,e=Kt){Ha("ec",n,e)}const ep="components";function tp(n,e){return ip(ep,n,!0,e)||n}const np=Symbol.for("v-ndc");function ec(n){return Pt(n)?ip(ep,n,!1)||n:n||np}function ip(n,e,t=!0,i=!1){const s=Xt||Kt;if(s){const r=s.type;{const a=bv(r,!1);if(a&&(a===e||a===Vn(e)||a===La(Vn(e))))return r}const o=hh(s[n]||r[n],e)||hh(s.appContext[n],e);return!o&&i?r:o}}function hh(n,e){return n&&(n[e]||n[Vn(e)]||n[La(Vn(e))])}function ei(n,e,t,i){let s;const r=t,o=ze(n);if(o||Pt(n)){const a=o&&or(n);let l=!1,c=!1;a&&(l=!Hn(n),c=os(n),n=Na(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?ma(qt(n[u])):qt(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(yt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function sp(n,e){for(let t=0;t<e.length;t++){const i=e[t];if(ze(i))for(let s=0;s<i.length;s++)n[i[s].name]=i[s].fn;else i&&(n[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return n}function Bt(n,e,t={},i,s){if(Xt.ce||Xt.parent&&lr(Xt.parent)&&Xt.parent.ce)return e!=="default"&&(t.name=e),de(),dt(At,null,[Ze("slot",t,i&&i())],64);let r=n[e];r&&r._c&&(r._d=!1),de();const o=r&&rp(r(t)),a=t.key||o&&o.key,l=dt(At,{key:(a&&!Jn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function rp(n){return n.some(e=>so(e)?!(e.type===nn||e.type===At&&!rp(e.children)):!0)?n:null}const tc=n=>n?bp(n)?Xa(n):tc(n.parent):null,qr=Yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>tc(n.parent),$root:n=>tc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>lp(n),$forceUpdate:n=>n.f||(n.f=()=>{pu(n.update)}),$nextTick:n=>n.n||(n.n=Ni.bind(n.proxy)),$watch:n=>hv.bind(n)}),ol=(n,e)=>n!==xt&&!n.__isScriptSetup&&ht(n,e),Wg={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ol(i,e))return o[e]=1,i[e];if(s!==xt&&ht(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&ht(c,e))return o[e]=3,r[e];if(t!==xt&&ht(t,e))return o[e]=4,t[e];nc&&(o[e]=0)}}const u=qr[e];let h,d;if(u)return e==="$attrs"&&$t(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==xt&&ht(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,ht(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ol(s,e)?(s[e]=t,!0):i!==xt&&ht(i,e)?(i[e]=t,!0):ht(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==xt&&ht(n,o)||ol(e,o)||(a=r[0])&&ht(a,o)||ht(i,o)||ht(qr,o)||ht(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ht(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function op(){return Xg().slots}function Xg(){const n=Tp();return n.setupContext||(n.setupContext=Rp(n))}function dh(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let nc=!0;function Yg(n){const e=lp(n),t=n.proxy,i=n.ctx;nc=!1,e.beforeCreate&&fh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:v,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:w,unmounted:A,render:T,renderTracked:E,renderTriggered:M,errorCaptured:S,serverPrefetch:g,expose:x,inheritAttrs:P,components:I,directives:L,filters:F}=e;if(c&&qg(c,i,null),o)for(const j in o){const X=o[j];Je(X)&&(i[j]=X.bind(t))}if(s){const j=s.call(t,t);yt(j)&&(n.data=Ui(j))}if(nc=!0,r)for(const j in r){const X=r[j],ce=Je(X)?X.bind(t,t):Je(X.get)?X.get.bind(t,t):li,_e=!Je(X)&&Je(X.set)?X.set.bind(t):li,Ie=mr({get:ce,set:_e});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:le=>Ie.value=le})}if(a)for(const j in a)ap(a[j],i,t,j);if(l){const j=Je(l)?l.call(t):l;Reflect.ownKeys(j).forEach(X=>{Jt(X,j[X])})}u&&fh(u,n,"c");function B(j,X){ze(X)?X.forEach(ce=>j(ce.bind(t))):X&&j(X.bind(t))}if(B(Fg,h),B(Sn,d),B(Bg,f),B(kg,v),B(Ug,_),B(Ng,m),B(zg,S),B(Gg,E),B(Vg,M),B(Ls,b),B(Er,A),B(Hg,g),ze(x))if(x.length){const j=n.exposed||(n.exposed={});x.forEach(X=>{Object.defineProperty(j,X,{get:()=>t[X],set:ce=>t[X]=ce})})}else n.exposed||(n.exposed={});T&&n.render===li&&(n.render=T),P!=null&&(n.inheritAttrs=P),I&&(n.components=I),L&&(n.directives=L),g&&Jf(n)}function qg(n,e,t=li){ze(n)&&(n=ic(n));for(const i in n){const s=n[i];let r;yt(s)?"default"in s?r=ft(s.from||i,s.default,!0):r=ft(s.from||i):r=ft(s),Zt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function fh(n,e,t){$n(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function ap(n,e,t,i){let s=i.includes(".")?Ap(t,i):()=>t[i];if(Pt(n)){const r=e[n];Je(r)&&et(s,r)}else if(Je(n))et(s,n.bind(t));else if(yt(n))if(ze(n))n.forEach(r=>ap(r,e,t,i));else{const r=Je(n.handler)?n.handler.bind(t):e[n.handler];Je(r)&&et(s,r,n)}}function lp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>xa(l,c,o,!0)),xa(l,e,o)),yt(e)&&r.set(e,l),l}function xa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&xa(n,r,t,!0),s&&s.forEach(o=>xa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Kg[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Kg={data:ph,props:mh,emits:mh,methods:Br,computed:Br,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:Br,directives:Br,watch:Qg,provide:ph,inject:Zg};function ph(n,e){return e?n?function(){return Yt(Je(n)?n.call(this,this):n,Je(e)?e.call(this,this):e)}:e:n}function Zg(n,e){return Br(ic(n),ic(e))}function ic(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function rn(n,e){return n?[...new Set([].concat(n,e))]:e}function Br(n,e){return n?Yt(Object.create(null),n,e):e}function mh(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:Yt(Object.create(null),dh(n),dh(e??{})):e}function Qg(n,e){if(!n)return e;if(!e)return n;const t=Yt(Object.create(null),n);for(const i in e)t[i]=rn(n[i],e[i]);return t}function cp(){return{app:null,config:{isNativeTag:Fm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jg=0;function Jg(n,e){return function(i,s=null){Je(i)||(i=Yt({},i)),s!=null&&!yt(s)&&(s=null);const r=cp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:jg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Rv,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Je(u.install)?(o.add(u),u.install(c,...h)):Je(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||Ze(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(f,u,d),l=!0,c._container=u,u.__vue_app__=c,Xa(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&($n(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=cr;cr=c;try{return u()}finally{cr=h}}};return c}}let cr=null;function Jt(n,e){if(Kt){let t=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===t&&(t=Kt.provides=Object.create(i)),t[n]=e}}function ft(n,e,t=!1){const i=Kt||Xt;if(i||cr){let s=cr?cr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Je(e)?e.call(i&&i.proxy):e}}const up={},hp=()=>Object.create(up),dp=n=>Object.getPrototypeOf(n)===up;function $g(n,e,t,i=!1){const s={},r=hp();n.propsDefaults=Object.create(null),fp(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:vg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function ev(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=lt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Va(n.emitsOptions,d))continue;const f=e[d];if(l)if(ht(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const v=Vn(d);s[v]=sc(l,a,v,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{fp(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!ht(e,h)&&((u=Is(h))===h||!ht(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=sc(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!ht(e,h))&&(delete r[h],c=!0)}c&&wi(n.attrs,"set","")}function fp(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Gr(l))continue;const c=e[l];let u;s&&ht(s,u=Vn(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Va(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=lt(t),c=a||xt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=sc(s,l,h,c[h],n,!ht(c,h))}}return o}function sc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=ht(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=go(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Is(t))&&(i=!0))}return i}const tv=new WeakMap;function pp(n,e,t=!1){const i=t?tv:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Je(n)){const u=h=>{l=!0;const[d,f]=pp(h,e,!0);Yt(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return yt(n)&&i.set(n,sr),sr;if(ze(r))for(let u=0;u<r.length;u++){const h=Vn(r[u]);gh(h)&&(o[h]=xt)}else if(r)for(const u in r){const h=Vn(u);if(gh(h)){const d=r[u],f=o[h]=ze(d)||Je(d)?{type:d}:Yt({},d),v=f.type;let _=!1,m=!0;if(ze(v))for(let p=0;p<v.length;++p){const b=v[p],w=Je(b)&&b.name;if(w==="Boolean"){_=!0;break}else w==="String"&&(m=!1)}else _=Je(v)&&v.name==="Boolean";f[0]=_,f[1]=m,(_||ht(f,"default"))&&a.push(h)}}const c=[o,a];return yt(n)&&i.set(n,c),c}function gh(n){return n[0]!=="$"&&!Gr(n)}const vu=n=>n[0]==="_"||n==="$stable",_u=n=>ze(n)?n.map(si):[si(n)],nv=(n,e,t)=>{if(e._n)return e;const i=Lt((...s)=>_u(e(...s)),t);return i._c=!1,i},mp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(vu(s))continue;const r=n[s];if(Je(r))e[s]=nv(s,r,i);else if(r!=null){const o=_u(r);e[s]=()=>o}}},gp=(n,e)=>{const t=_u(e);n.slots.default=()=>t},vp=(n,e,t)=>{for(const i in e)(t||!vu(i))&&(n[i]=e[i])},iv=(n,e,t)=>{const i=n.slots=hp();if(n.vnode.shapeFlag&32){const s=e.__;s&&Kl(i,"__",s,!0);const r=e._;r?(vp(i,e,t),t&&Kl(i,"_",r,!0)):mp(e,i)}else e&&gp(n,e)},sv=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=xt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:vp(s,e,t):(r=!e.$stable,mp(e,s)),o=e}else e&&(gp(n,e),o={default:1});if(r)for(const a in s)!vu(a)&&o[a]==null&&delete s[a]},an=_v;function rv(n){return ov(n)}function ov(n,e){const t=Ua();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=li,insertStaticContent:v}=n,_=(U,N,C,he=null,ee=null,oe=null,ne=void 0,ue=null,ie=!!N.dynamicChildren)=>{if(U===N)return;U&&!Es(U,N)&&(he=me(U),le(U,ee,oe,!0),U=null),N.patchFlag===-2&&(ie=!1,N.dynamicChildren=null);const{type:te,ref:we,shapeFlag:R}=N;switch(te){case Ga:m(U,N,C,he);break;case nn:p(U,N,C,he);break;case ia:U==null&&b(N,C,he,ne);break;case At:I(U,N,C,he,ee,oe,ne,ue,ie);break;default:R&1?T(U,N,C,he,ee,oe,ne,ue,ie):R&6?L(U,N,C,he,ee,oe,ne,ue,ie):(R&64||R&128)&&te.process(U,N,C,he,ee,oe,ne,ue,ie,Fe)}we!=null&&ee?Yr(we,U&&U.ref,oe,N||U,!N):we==null&&U&&U.ref!=null&&Yr(U.ref,null,oe,U,!0)},m=(U,N,C,he)=>{if(U==null)i(N.el=a(N.children),C,he);else{const ee=N.el=U.el;N.children!==U.children&&c(ee,N.children)}},p=(U,N,C,he)=>{U==null?i(N.el=l(N.children||""),C,he):N.el=U.el},b=(U,N,C,he)=>{[U.el,U.anchor]=v(U.children,N,C,he,U.el,U.anchor)},w=({el:U,anchor:N},C,he)=>{let ee;for(;U&&U!==N;)ee=d(U),i(U,C,he),U=ee;i(N,C,he)},A=({el:U,anchor:N})=>{let C;for(;U&&U!==N;)C=d(U),s(U),U=C;s(N)},T=(U,N,C,he,ee,oe,ne,ue,ie)=>{N.type==="svg"?ne="svg":N.type==="math"&&(ne="mathml"),U==null?E(N,C,he,ee,oe,ne,ue,ie):g(U,N,ee,oe,ne,ue,ie)},E=(U,N,C,he,ee,oe,ne,ue)=>{let ie,te;const{props:we,shapeFlag:R,transition:y,dirs:k}=U;if(ie=U.el=o(U.type,oe,we&&we.is,we),R&8?u(ie,U.children):R&16&&S(U.children,ie,null,he,ee,al(U,oe),ne,ue),k&&ds(U,null,he,"created"),M(ie,U,U.scopeId,ne,he),we){for(const re in we)re!=="value"&&!Gr(re)&&r(ie,re,null,we[re],oe,he);"value"in we&&r(ie,"value",null,we.value,oe),(te=we.onVnodeBeforeMount)&&ti(te,he,U)}k&&ds(U,null,he,"beforeMount");const K=av(ee,y);K&&y.beforeEnter(ie),i(ie,N,C),((te=we&&we.onVnodeMounted)||K||k)&&an(()=>{te&&ti(te,he,U),K&&y.enter(ie),k&&ds(U,null,he,"mounted")},ee)},M=(U,N,C,he,ee)=>{if(C&&f(U,C),he)for(let oe=0;oe<he.length;oe++)f(U,he[oe]);if(ee){let oe=ee.subTree;if(N===oe||yp(oe.type)&&(oe.ssContent===N||oe.ssFallback===N)){const ne=ee.vnode;M(U,ne,ne.scopeId,ne.slotScopeIds,ee.parent)}}},S=(U,N,C,he,ee,oe,ne,ue,ie=0)=>{for(let te=ie;te<U.length;te++){const we=U[te]=ue?Ki(U[te]):si(U[te]);_(null,we,N,C,he,ee,oe,ne,ue)}},g=(U,N,C,he,ee,oe,ne)=>{const ue=N.el=U.el;let{patchFlag:ie,dynamicChildren:te,dirs:we}=N;ie|=U.patchFlag&16;const R=U.props||xt,y=N.props||xt;let k;if(C&&fs(C,!1),(k=y.onVnodeBeforeUpdate)&&ti(k,C,N,U),we&&ds(N,U,C,"beforeUpdate"),C&&fs(C,!0),(R.innerHTML&&y.innerHTML==null||R.textContent&&y.textContent==null)&&u(ue,""),te?x(U.dynamicChildren,te,ue,C,he,al(N,ee),oe):ne||X(U,N,ue,null,C,he,al(N,ee),oe,!1),ie>0){if(ie&16)P(ue,R,y,C,ee);else if(ie&2&&R.class!==y.class&&r(ue,"class",null,y.class,ee),ie&4&&r(ue,"style",R.style,y.style,ee),ie&8){const K=N.dynamicProps;for(let re=0;re<K.length;re++){const q=K[re],De=R[q],Ae=y[q];(Ae!==De||q==="value")&&r(ue,q,De,Ae,ee,C)}}ie&1&&U.children!==N.children&&u(ue,N.children)}else!ne&&te==null&&P(ue,R,y,C,ee);((k=y.onVnodeUpdated)||we)&&an(()=>{k&&ti(k,C,N,U),we&&ds(N,U,C,"updated")},he)},x=(U,N,C,he,ee,oe,ne)=>{for(let ue=0;ue<N.length;ue++){const ie=U[ue],te=N[ue],we=ie.el&&(ie.type===At||!Es(ie,te)||ie.shapeFlag&198)?h(ie.el):C;_(ie,te,we,null,he,ee,oe,ne,!0)}},P=(U,N,C,he,ee)=>{if(N!==C){if(N!==xt)for(const oe in N)!Gr(oe)&&!(oe in C)&&r(U,oe,N[oe],null,ee,he);for(const oe in C){if(Gr(oe))continue;const ne=C[oe],ue=N[oe];ne!==ue&&oe!=="value"&&r(U,oe,ue,ne,ee,he)}"value"in C&&r(U,"value",N.value,C.value,ee)}},I=(U,N,C,he,ee,oe,ne,ue,ie)=>{const te=N.el=U?U.el:a(""),we=N.anchor=U?U.anchor:a("");let{patchFlag:R,dynamicChildren:y,slotScopeIds:k}=N;k&&(ue=ue?ue.concat(k):k),U==null?(i(te,C,he),i(we,C,he),S(N.children||[],C,we,ee,oe,ne,ue,ie)):R>0&&R&64&&y&&U.dynamicChildren?(x(U.dynamicChildren,y,C,ee,oe,ne,ue),(N.key!=null||ee&&N===ee.subTree)&&xu(U,N,!0)):X(U,N,C,we,ee,oe,ne,ue,ie)},L=(U,N,C,he,ee,oe,ne,ue,ie)=>{N.slotScopeIds=ue,U==null?N.shapeFlag&512?ee.ctx.activate(N,C,he,ne,ie):F(N,C,he,ee,oe,ne,ie):Y(U,N,ie)},F=(U,N,C,he,ee,oe,ne)=>{const ue=U.component=Sv(U,he,ee);if(ka(U)&&(ue.ctx.renderer=Fe),Ev(ue,!1,ne),ue.asyncDep){if(ee&&ee.registerDep(ue,B,ne),!U.el){const ie=ue.subTree=Ze(nn);p(null,ie,N,C)}}else B(ue,U,N,C,ee,oe,ne)},Y=(U,N,C)=>{const he=N.component=U.component;if(gv(U,N,C))if(he.asyncDep&&!he.asyncResolved){j(he,N,C);return}else he.next=N,he.update();else N.el=U.el,he.vnode=N},B=(U,N,C,he,ee,oe,ne)=>{const ue=()=>{if(U.isMounted){let{next:R,bu:y,u:k,parent:K,vnode:re}=U;{const Ue=_p(U);if(Ue){R&&(R.el=re.el,j(U,R,ne)),Ue.asyncDep.then(()=>{U.isUnmounted||ue()});return}}let q=R,De;fs(U,!1),R?(R.el=re.el,j(U,R,ne)):R=re,y&&ta(y),(De=R.props&&R.props.onVnodeBeforeUpdate)&&ti(De,K,R,re),fs(U,!0);const Ae=_h(U),Pe=U.subTree;U.subTree=Ae,_(Pe,Ae,h(Pe.el),me(Pe),U,ee,oe),R.el=Ae.el,q===null&&vv(U,Ae.el),k&&an(k,ee),(De=R.props&&R.props.onVnodeUpdated)&&an(()=>ti(De,K,R,re),ee)}else{let R;const{el:y,props:k}=N,{bm:K,m:re,parent:q,root:De,type:Ae}=U,Pe=lr(N);fs(U,!1),K&&ta(K),!Pe&&(R=k&&k.onVnodeBeforeMount)&&ti(R,q,N),fs(U,!0);{De.ce&&De.ce._def.shadowRoot!==!1&&De.ce._injectChildStyle(Ae);const Ue=U.subTree=_h(U);_(null,Ue,C,he,U,ee,oe),N.el=Ue.el}if(re&&an(re,ee),!Pe&&(R=k&&k.onVnodeMounted)){const Ue=N;an(()=>ti(R,q,Ue),ee)}(N.shapeFlag&256||q&&lr(q.vnode)&&q.vnode.shapeFlag&256)&&U.a&&an(U.a,ee),U.isMounted=!0,N=C=he=null}};U.scope.on();const ie=U.effect=new yf(ue);U.scope.off();const te=U.update=ie.run.bind(ie),we=U.job=ie.runIfDirty.bind(ie);we.i=U,we.id=U.uid,ie.scheduler=()=>pu(we),fs(U,!0),te()},j=(U,N,C)=>{N.component=U;const he=U.vnode.props;U.vnode=N,U.next=null,ev(U,N.props,he,C),sv(U,N.children,C),Ii(),oh(U),Li()},X=(U,N,C,he,ee,oe,ne,ue,ie=!1)=>{const te=U&&U.children,we=U?U.shapeFlag:0,R=N.children,{patchFlag:y,shapeFlag:k}=N;if(y>0){if(y&128){_e(te,R,C,he,ee,oe,ne,ue,ie);return}else if(y&256){ce(te,R,C,he,ee,oe,ne,ue,ie);return}}k&8?(we&16&&Me(te,ee,oe),R!==te&&u(C,R)):we&16?k&16?_e(te,R,C,he,ee,oe,ne,ue,ie):Me(te,ee,oe,!0):(we&8&&u(C,""),k&16&&S(R,C,he,ee,oe,ne,ue,ie))},ce=(U,N,C,he,ee,oe,ne,ue,ie)=>{U=U||sr,N=N||sr;const te=U.length,we=N.length,R=Math.min(te,we);let y;for(y=0;y<R;y++){const k=N[y]=ie?Ki(N[y]):si(N[y]);_(U[y],k,C,null,ee,oe,ne,ue,ie)}te>we?Me(U,ee,oe,!0,!1,R):S(N,C,he,ee,oe,ne,ue,ie,R)},_e=(U,N,C,he,ee,oe,ne,ue,ie)=>{let te=0;const we=N.length;let R=U.length-1,y=we-1;for(;te<=R&&te<=y;){const k=U[te],K=N[te]=ie?Ki(N[te]):si(N[te]);if(Es(k,K))_(k,K,C,null,ee,oe,ne,ue,ie);else break;te++}for(;te<=R&&te<=y;){const k=U[R],K=N[y]=ie?Ki(N[y]):si(N[y]);if(Es(k,K))_(k,K,C,null,ee,oe,ne,ue,ie);else break;R--,y--}if(te>R){if(te<=y){const k=y+1,K=k<we?N[k].el:he;for(;te<=y;)_(null,N[te]=ie?Ki(N[te]):si(N[te]),C,K,ee,oe,ne,ue,ie),te++}}else if(te>y)for(;te<=R;)le(U[te],ee,oe,!0),te++;else{const k=te,K=te,re=new Map;for(te=K;te<=y;te++){const Be=N[te]=ie?Ki(N[te]):si(N[te]);Be.key!=null&&re.set(Be.key,te)}let q,De=0;const Ae=y-K+1;let Pe=!1,Ue=0;const pe=new Array(Ae);for(te=0;te<Ae;te++)pe[te]=0;for(te=k;te<=R;te++){const Be=U[te];if(De>=Ae){le(Be,ee,oe,!0);continue}let ke;if(Be.key!=null)ke=re.get(Be.key);else for(q=K;q<=y;q++)if(pe[q-K]===0&&Es(Be,N[q])){ke=q;break}ke===void 0?le(Be,ee,oe,!0):(pe[ke-K]=te+1,ke>=Ue?Ue=ke:Pe=!0,_(Be,N[ke],C,null,ee,oe,ne,ue,ie),De++)}const Le=Pe?lv(pe):sr;for(q=Le.length-1,te=Ae-1;te>=0;te--){const Be=K+te,ke=N[Be],Ee=Be+1<we?N[Be+1].el:he;pe[te]===0?_(null,ke,C,Ee,ee,oe,ne,ue,ie):Pe&&(q<0||te!==Le[q]?Ie(ke,C,Ee,2):q--)}}},Ie=(U,N,C,he,ee=null)=>{const{el:oe,type:ne,transition:ue,children:ie,shapeFlag:te}=U;if(te&6){Ie(U.component.subTree,N,C,he);return}if(te&128){U.suspense.move(N,C,he);return}if(te&64){ne.move(U,N,C,Fe);return}if(ne===At){i(oe,N,C);for(let R=0;R<ie.length;R++)Ie(ie[R],N,C,he);i(U.anchor,N,C);return}if(ne===ia){w(U,N,C);return}if(he!==2&&te&1&&ue)if(he===0)ue.beforeEnter(oe),i(oe,N,C),an(()=>ue.enter(oe),ee);else{const{leave:R,delayLeave:y,afterLeave:k}=ue,K=()=>{U.ctx.isUnmounted?s(oe):i(oe,N,C)},re=()=>{R(oe,()=>{K(),k&&k()})};y?y(oe,K,re):re()}else i(oe,N,C)},le=(U,N,C,he=!1,ee=!1)=>{const{type:oe,props:ne,ref:ue,children:ie,dynamicChildren:te,shapeFlag:we,patchFlag:R,dirs:y,cacheIndex:k}=U;if(R===-2&&(ee=!1),ue!=null&&(Ii(),Yr(ue,null,C,U,!0),Li()),k!=null&&(N.renderCache[k]=void 0),we&256){N.ctx.deactivate(U);return}const K=we&1&&y,re=!lr(U);let q;if(re&&(q=ne&&ne.onVnodeBeforeUnmount)&&ti(q,N,U),we&6)O(U.component,C,he);else{if(we&128){U.suspense.unmount(C,he);return}K&&ds(U,null,N,"beforeUnmount"),we&64?U.type.remove(U,N,C,Fe,he):te&&!te.hasOnce&&(oe!==At||R>0&&R&64)?Me(te,N,C,!1,!0):(oe===At&&R&384||!ee&&we&16)&&Me(ie,N,C),he&&Se(U)}(re&&(q=ne&&ne.onVnodeUnmounted)||K)&&an(()=>{q&&ti(q,N,U),K&&ds(U,null,N,"unmounted")},C)},Se=U=>{const{type:N,el:C,anchor:he,transition:ee}=U;if(N===At){Z(C,he);return}if(N===ia){A(U);return}const oe=()=>{s(C),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(U.shapeFlag&1&&ee&&!ee.persisted){const{leave:ne,delayLeave:ue}=ee,ie=()=>ne(C,oe);ue?ue(U.el,oe,ie):ie()}else oe()},Z=(U,N)=>{let C;for(;U!==N;)C=d(U),s(U),U=C;s(N)},O=(U,N,C)=>{const{bum:he,scope:ee,job:oe,subTree:ne,um:ue,m:ie,a:te,parent:we,slots:{__:R}}=U;vh(ie),vh(te),he&&ta(he),we&&ze(R)&&R.forEach(y=>{we.renderCache[y]=void 0}),ee.stop(),oe&&(oe.flags|=8,le(ne,U,N,C)),ue&&an(ue,N),an(()=>{U.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&U.asyncDep&&!U.asyncResolved&&U.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},Me=(U,N,C,he=!1,ee=!1,oe=0)=>{for(let ne=oe;ne<U.length;ne++)le(U[ne],N,C,he,ee)},me=U=>{if(U.shapeFlag&6)return me(U.component.subTree);if(U.shapeFlag&128)return U.suspense.next();const N=d(U.anchor||U.el),C=N&&N[zf];return C?d(C):N};let be=!1;const tt=(U,N,C)=>{U==null?N._vnode&&le(N._vnode,null,null,!0):_(N._vnode||null,U,N,null,null,null,C),N._vnode=U,be||(be=!0,oh(),Vf(),be=!1)},Fe={p:_,um:le,m:Ie,r:Se,mt:F,mc:S,pc:X,pbc:x,n:me,o:n};return{render:tt,hydrate:void 0,createApp:Jg(tt)}}function al({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function fs({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function av(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function xu(n,e,t=!1){const i=n.children,s=e.children;if(ze(i)&&ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ki(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&xu(o,a)),a.type===Ga&&(a.el=o.el),a.type===nn&&!a.el&&(a.el=o.el)}}function lv(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function _p(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_p(e)}function vh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const cv=Symbol.for("v-scx"),uv=()=>ft(cv);function et(n,e,t){return xp(n,e,t)}function xp(n,e,t=xt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Yt({},t),l=e&&i||!e&&r!=="post";let c;if(ro){if(r==="sync"){const f=uv();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=li,f.resume=li,f.pause=li,f}}const u=Kt;a.call=(f,v,_)=>$n(f,u,v,_);let h=!1;r==="post"?a.scheduler=f=>{an(f,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,v)=>{v?f():pu(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=Tg(n,e,a);return ro&&(c?c.push(d):l&&d()),d}function hv(n,e,t){const i=this.proxy,s=Pt(n)?n.includes(".")?Ap(i,n):()=>i[n]:n.bind(i,i);let r;Je(e)?r=e:(r=e.handler,t=e);const o=go(this),a=xp(s,r.bind(i),t);return o(),a}function Ap(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const dv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Vn(e)}Modifiers`]||n[`${Is(e)}Modifiers`];function fv(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||xt;let s=t;const r=e.startsWith("update:"),o=r&&dv(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Pt(u)?u.trim():u)),o.number&&(s=t.map(fa)));let a,l=i[a=el(e)]||i[a=el(Vn(e))];!l&&r&&(l=i[a=el(Is(e))]),l&&$n(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,$n(c,n,6,s)}}function Mp(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Je(n)){const l=c=>{const u=Mp(c,e,!0);u&&(a=!0,Yt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(yt(n)&&i.set(n,null),null):(ze(r)?r.forEach(l=>o[l]=null):Yt(o,r),yt(n)&&i.set(n,o),o)}function Va(n,e){return!n||!Pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(n,e[0].toLowerCase()+e.slice(1))||ht(n,Is(e))||ht(n,e))}function _h(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:v,inheritAttrs:_}=n,m=_a(n);let p,b;try{if(t.shapeFlag&4){const A=s||i,T=A;p=si(c.call(T,A,u,h,f,d,v)),b=a}else{const A=e;p=si(A.length>1?A(h,{attrs:a,slots:o,emit:l}):A(h,null)),b=e.props?a:pv(a)}}catch(A){Kr.length=0,Oa(A,n,1),p=Ze(nn)}let w=p;if(b&&_!==!1){const A=Object.keys(b),{shapeFlag:T}=w;A.length&&T&7&&(r&&A.some(iu)&&(b=mv(b,r)),w=as(w,b,!1,!0))}return t.dirs&&(w=as(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&no(w,t.transition),p=w,_a(m),p}const pv=n=>{let e;for(const t in n)(t==="class"||t==="style"||Pa(t))&&((e||(e={}))[t]=n[t]);return e},mv=(n,e)=>{const t={};for(const i in n)(!iu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function gv(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?xh(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!Va(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?xh(i,o,c):!0:!!o;return!1}function xh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Va(t,r))return!0}return!1}function vv({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const yp=n=>n.__isSuspense;function _v(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):Rg(n)}const At=Symbol.for("v-fgt"),Ga=Symbol.for("v-txt"),nn=Symbol.for("v-cmt"),ia=Symbol.for("v-stc"),Kr=[];let Pn=null;function de(n=!1){Kr.push(Pn=n?null:[])}function xv(){Kr.pop(),Pn=Kr[Kr.length-1]||null}let io=1;function Ah(n,e=!1){io+=n,n<0&&Pn&&e&&(Pn.hasOnce=!0)}function Sp(n){return n.dynamicChildren=io>0?Pn||sr:null,xv(),io>0&&Pn&&Pn.push(n),n}function ye(n,e,t,i,s,r){return Sp(ae(n,e,t,i,s,r,!0))}function dt(n,e,t,i,s){return Sp(Ze(n,e,t,i,s,!0))}function so(n){return n?n.__v_isVNode===!0:!1}function Es(n,e){return n.type===e.type&&n.key===e.key}const Ep=({key:n})=>n??null,sa=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Pt(n)||Zt(n)||Je(n)?{i:Xt,r:n,k:e,f:!!t}:n:null);function ae(n,e=null,t=null,i=0,s=null,r=n===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ep(e),ref:e&&sa(e),scopeId:Fa,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xt};return a?(Au(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Pt(t)?8:16),io>0&&!o&&Pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Pn.push(l),l}const Ze=Av;function Av(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===np)&&(n=nn),so(n)){const a=as(n,e,!0);return t&&Au(a,t),io>0&&!r&&Pn&&(a.shapeFlag&6?Pn[Pn.indexOf(n)]=a:Pn.push(a)),a.patchFlag=-2,a}if(Cv(n)&&(n=n.__vccOpts),e){e=wp(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=ut(a)),yt(l)&&(fu(l)&&!ze(l)&&(l=Yt({},l)),e.style=wt(l))}const o=Pt(n)?1:yp(n)?128:Wf(n)?64:yt(n)?4:Je(n)?2:0;return ae(n,e,t,i,s,o,r,!0)}function wp(n){return n?fu(n)||dp(n)?Yt({},n):n:null}function as(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?pr(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ep(c),ref:e&&e.ref?t&&r?ze(r)?r.concat(sa(e)):[r,sa(e)]:sa(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==At?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&as(n.ssContent),ssFallback:n.ssFallback&&as(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&no(u,l.clone(u)),u}function za(n=" ",e=0){return Ze(Ga,null,n,e)}function Wa(n,e){const t=Ze(ia,null,n);return t.staticCount=e,t}function Ye(n="",e=!1){return e?(de(),dt(nn,null,n)):Ze(nn,null,n)}function si(n){return n==null||typeof n=="boolean"?Ze(nn):ze(n)?Ze(At,null,n.slice()):so(n)?Ki(n):Ze(Ga,null,String(n))}function Ki(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:as(n)}function Au(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Au(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!dp(e)?e._ctx=Xt:s===3&&Xt&&(Xt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:Xt},t=32):(e=String(e),i&64?(t=16,e=[za(e)]):t=8);n.children=e,n.shapeFlag|=t}function pr(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=ut([e.class,i.class]));else if(s==="style")e.style=wt([e.style,i.style]);else if(Pa(s)){const r=e[s],o=i[s];o&&r!==o&&!(ze(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function ti(n,e,t,i=null){$n(n,e,7,[t,i])}const Mv=cp();let yv=0;function Sv(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Mv,r={uid:yv++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pp(i,s),emitsOptions:Mp(i,s),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fv.bind(null,r),n.ce&&n.ce(r),r}let Kt=null;const Tp=()=>Kt||Xt;let Aa,rc;{const n=Ua(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Aa=e("__VUE_INSTANCE_SETTERS__",t=>Kt=t),rc=e("__VUE_SSR_SETTERS__",t=>ro=t)}const go=n=>{const e=Kt;return Aa(n),n.scope.on(),()=>{n.scope.off(),Aa(e)}},Mh=()=>{Kt&&Kt.scope.off(),Aa(null)};function bp(n){return n.vnode.shapeFlag&4}let ro=!1;function Ev(n,e=!1,t=!1){e&&rc(e);const{props:i,children:s}=n.vnode,r=bp(n);$g(n,i,r,e),iv(n,s,t||e);const o=r?wv(n,e):void 0;return e&&rc(!1),o}function wv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Wg);const{setup:i}=t;if(i){Ii();const s=n.setupContext=i.length>1?Rp(n):null,r=go(n),o=mo(i,n,0,[n.props,s]),a=mf(o);if(Li(),r(),(a||n.sp)&&!lr(n)&&Jf(n),a){if(o.then(Mh,Mh),e)return o.then(l=>{yh(n,l)}).catch(l=>{Oa(l,n,0)});n.asyncDep=o}else yh(n,o)}else Cp(n)}function yh(n,e,t){Je(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:yt(e)&&(n.setupState=Bf(e)),Cp(n)}function Cp(n,e,t){const i=n.type;n.render||(n.render=i.render||li);{const s=go(n);Ii();try{Yg(n)}finally{Li(),s()}}}const Tv={get(n,e){return $t(n,"get",""),n[e]}};function Rp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Tv),slots:n.slots,emit:n.emit,expose:e}}function Xa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Bf(_g(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in qr)return qr[t](n)},has(e,t){return t in e||t in qr}})):n.proxy}function bv(n,e=!0){return Je(n)?n.displayName||n.name:n.name||e&&n.__name}function Cv(n){return Je(n)&&"__vccOpts"in n}const mr=(n,e)=>Eg(n,e,ro);function gr(n,e,t){const i=arguments.length;return i===2?yt(e)&&!ze(e)?so(e)?Ze(n,null,[e]):Ze(n,e):Ze(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&so(t)&&(t=[t]),Ze(n,e,t))}const Rv="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oc;const Sh=typeof window<"u"&&window.trustedTypes;if(Sh)try{oc=Sh.createPolicy("vue",{createHTML:n=>n})}catch{}const Dp=oc?n=>oc.createHTML(n):n=>n,Dv="http://www.w3.org/2000/svg",Pv="http://www.w3.org/1998/Math/MathML",Ei=typeof document<"u"?document:null,Eh=Ei&&Ei.createElement("template"),Iv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ei.createElementNS(Dv,n):e==="mathml"?Ei.createElementNS(Pv,n):t?Ei.createElement(n,{is:t}):Ei.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ei.createTextNode(n),createComment:n=>Ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Eh.innerHTML=Dp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Eh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ki="transition",Dr="animation",oo=Symbol("_vtc"),Pp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lv=Yt({},qf,Pp),Uv=n=>(n.displayName="Transition",n.props=Lv,n),Nv=Uv((n,{slots:e})=>gr(Lg,Ov(n),e)),ps=(n,e=[])=>{ze(n)?n.forEach(t=>t(...e)):n&&n(...e)},wh=n=>n?ze(n)?n.some(e=>e.length>1):n.length>1:!1;function Ov(n){const e={};for(const I in n)I in Pp||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:d=`${t}-leave-active`,leaveToClass:f=`${t}-leave-to`}=n,v=Fv(s),_=v&&v[0],m=v&&v[1],{onBeforeEnter:p,onEnter:b,onEnterCancelled:w,onLeave:A,onLeaveCancelled:T,onBeforeAppear:E=p,onAppear:M=b,onAppearCancelled:S=w}=e,g=(I,L,F,Y)=>{I._enterCancelled=Y,ms(I,L?u:a),ms(I,L?c:o),F&&F()},x=(I,L)=>{I._isLeaving=!1,ms(I,h),ms(I,f),ms(I,d),L&&L()},P=I=>(L,F)=>{const Y=I?M:b,B=()=>g(L,I,F);ps(Y,[L,B]),Th(()=>{ms(L,I?l:r),pi(L,I?u:a),wh(Y)||bh(L,i,_,B)})};return Yt(e,{onBeforeEnter(I){ps(p,[I]),pi(I,r),pi(I,o)},onBeforeAppear(I){ps(E,[I]),pi(I,l),pi(I,c)},onEnter:P(!1),onAppear:P(!0),onLeave(I,L){I._isLeaving=!0;const F=()=>x(I,L);pi(I,h),I._enterCancelled?(pi(I,d),Dh()):(Dh(),pi(I,d)),Th(()=>{I._isLeaving&&(ms(I,h),pi(I,f),wh(A)||bh(I,i,m,F))}),ps(A,[I,F])},onEnterCancelled(I){g(I,!1,void 0,!0),ps(w,[I])},onAppearCancelled(I){g(I,!0,void 0,!0),ps(S,[I])},onLeaveCancelled(I){x(I),ps(T,[I])}})}function Fv(n){if(n==null)return null;if(yt(n))return[ll(n.enter),ll(n.leave)];{const e=ll(n);return[e,e]}}function ll(n){return Gm(n)}function pi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[oo]||(n[oo]=new Set)).add(e)}function ms(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[oo];t&&(t.delete(e),t.size||(n[oo]=void 0))}function Th(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Bv=0;function bh(n,e,t,i){const s=n._endId=++Bv,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=kv(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,d),r()},d=f=>{f.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,d)}function kv(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),s=i(`${ki}Delay`),r=i(`${ki}Duration`),o=Ch(s,r),a=i(`${Dr}Delay`),l=i(`${Dr}Duration`),c=Ch(a,l);let u=null,h=0,d=0;e===ki?o>0&&(u=ki,h=o,d=r.length):e===Dr?c>0&&(u=Dr,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?ki:Dr:null,d=u?u===ki?r.length:l.length:0);const f=u===ki&&/\b(transform|all)(,|$)/.test(i(`${ki}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Ch(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Rh(t)+Rh(n[i])))}function Rh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Dh(){return document.body.offsetHeight}function Hv(n,e,t){const i=n[oo];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ma=Symbol("_vod"),Ip=Symbol("_vsh"),ac={beforeMount(n,{value:e},{transition:t}){n[Ma]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Pr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Pr(n,!0),i.enter(n)):i.leave(n,()=>{Pr(n,!1)}):Pr(n,e))},beforeUnmount(n,{value:e}){Pr(n,e)}};function Pr(n,e){n.style.display=e?n[Ma]:"none",n[Ip]=!e}const Vv=Symbol(""),Gv=/(^|;)\s*display\s*:/;function zv(n,e,t){const i=n.style,s=Pt(t);let r=!1;if(t&&!s){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ra(i,a,"")}else for(const o in e)t[o]==null&&ra(i,o,"");for(const o in t)o==="display"&&(r=!0),ra(i,o,t[o])}else if(s){if(e!==t){const o=i[Vv];o&&(t+=";"+o),i.cssText=t,r=Gv.test(t)}}else e&&n.removeAttribute("style");Ma in n&&(n[Ma]=r?i.display:"",n[Ip]&&(i.display="none"))}const Ph=/\s*!important$/;function ra(n,e,t){if(ze(t))t.forEach(i=>ra(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Wv(n,e);Ph.test(t)?n.setProperty(Is(i),t.replace(Ph,""),"important"):n[i]=t}}const Ih=["Webkit","Moz","ms"],cl={};function Wv(n,e){const t=cl[e];if(t)return t;let i=Vn(e);if(i!=="filter"&&i in n)return cl[e]=i;i=La(i);for(let s=0;s<Ih.length;s++){const r=Ih[s]+i;if(r in n)return cl[e]=r}return e}const Lh="http://www.w3.org/1999/xlink";function Uh(n,e,t,i,s,r=Km(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Lh,e.slice(6,e.length)):n.setAttributeNS(Lh,e,t):t==null||r&&!xf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Jn(t)?String(t):t)}function Nh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Dp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=xf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Qi(n,e,t,i){n.addEventListener(e,t,i)}function Xv(n,e,t,i){n.removeEventListener(e,t,i)}const Oh=Symbol("_vei");function Yv(n,e,t,i,s=null){const r=n[Oh]||(n[Oh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=qv(e);if(i){const c=r[e]=Qv(i,s);Qi(n,a,c,l)}else o&&(Xv(n,a,o,l),r[e]=void 0)}}const Fh=/(?:Once|Passive|Capture)$/;function qv(n){let e;if(Fh.test(n)){e={};let i;for(;i=n.match(Fh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Is(n.slice(2)),e]}let ul=0;const Kv=Promise.resolve(),Zv=()=>ul||(Kv.then(()=>ul=0),ul=Date.now());function Qv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;$n(jv(i,t.value),e,5,[i])};return t.value=n,t.attached=Zv(),t}function jv(n,e){if(ze(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Bh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jv=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Hv(n,i,o):e==="style"?zv(n,t,i):Pa(e)?iu(e)||Yv(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$v(n,e,i,o))?(Nh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Uh(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Pt(i))?Nh(n,Vn(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Uh(n,e,i,o))};function $v(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Bh(e)&&Je(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Bh(e)&&Pt(t)?!1:e in n}const vr=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ze(e)?t=>ta(e,t):e};function e_(n){n.target.composing=!0}function kh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Di=Symbol("_assign"),ts={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Di]=vr(s);const r=i||s.props&&s.props.type==="number";Qi(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=fa(a)),n[Di](a)}),t&&Qi(n,"change",()=>{n.value=n.value.trim()}),e||(Qi(n,"compositionstart",e_),Qi(n,"compositionend",kh),Qi(n,"change",kh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Di]=vr(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?fa(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},tr={deep:!0,created(n,e,t){n[Di]=vr(t),Qi(n,"change",()=>{const i=n._modelValue,s=ao(n),r=n.checked,o=n[Di];if(ze(i)){const a=ou(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(yr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Up(n,r))})},mounted:Hh,beforeUpdate(n,e,t){n[Di]=vr(t),Hh(n,e,t)}};function Hh(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(ze(e))s=ou(e,i.props.value)>-1;else if(yr(e))s=e.has(i.props.value);else{if(e===t)return;s=po(e,Up(n,!0))}n.checked!==s&&(n.checked=s)}const Lp={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=yr(e);Qi(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?fa(ao(o)):ao(o));n[Di](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,Ni(()=>{n._assigning=!1})}),n[Di]=vr(i)},mounted(n,{value:e}){Vh(n,e)},beforeUpdate(n,e,t){n[Di]=vr(t)},updated(n,{value:e}){n._assigning||Vh(n,e)}};function Vh(n,e){const t=n.multiple,i=ze(e);if(!(t&&!i&&!yr(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=ao(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=ou(e,a)>-1}else o.selected=e.has(a);else if(po(ao(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ao(n){return"_value"in n?n._value:n.value}function Up(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const t_=["ctrl","shift","alt","meta"],n_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>t_.some(t=>n[`${t}Key`]&&!e.includes(t))},Np=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=n_[e[o]];if(a&&a(s,e))return}return n(s,...r)})},i_=Yt({patchProp:Jv},Iv);let Gh;function Op(){return Gh||(Gh=rv(i_))}const zh=(...n)=>{Op().render(...n)},s_=(...n)=>{const e=Op().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=o_(i);if(!s)return;const r=e._component;!Je(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,r_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function r_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function o_(n){return Pt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mu="178",ur={ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a_=0,Wh=1,l_=2,Fp=1,c_=2,Mi=3,ls=0,Mn=1,qn=2,jn=0,hr=1,lc=2,Xh=3,Yh=4,u_=5,ws=100,h_=101,d_=102,f_=103,p_=104,m_=200,g_=201,v_=202,__=203,cc=204,uc=205,x_=206,A_=207,M_=208,y_=209,S_=210,E_=211,w_=212,T_=213,b_=214,hc=0,dc=1,fc=2,_r=3,pc=4,mc=5,gc=6,vc=7,Bp=0,C_=1,R_=2,ns=0,D_=1,P_=2,I_=3,L_=4,U_=5,N_=6,O_=7,kp=300,xr=301,Ar=302,ya=303,_c=304,Ya=306,xc=1e3,Ci=1001,Ac=1002,In=1003,F_=1004,Co=1005,dn=1006,hl=1007,Ji=1008,ui=1009,Hp=1010,Vp=1011,lo=1012,yu=1013,Rs=1014,kn=1015,en=1016,Su=1017,Eu=1018,co=1020,Gp=35902,zp=1021,Wp=1022,Zn=1023,uo=1026,ho=1027,Xp=1028,wu=1029,Yp=1030,Tu=1031,bu=1033,oa=33776,aa=33777,la=33778,ca=33779,Mc=35840,yc=35841,Sc=35842,Ec=35843,wc=36196,Tc=37492,bc=37496,Cc=37808,Rc=37809,Dc=37810,Pc=37811,Ic=37812,Lc=37813,Uc=37814,Nc=37815,Oc=37816,Fc=37817,Bc=37818,kc=37819,Hc=37820,Vc=37821,ua=36492,Gc=36494,zc=36495,qp=36283,Wc=36284,Xc=36285,Yc=36286,B_=3200,Kp=3201,Zp=0,k_=1,ji="",Bn="srgb",Ds="srgb-linear",Sa="linear",gt="srgb",ks=7680,qh=519,H_=512,V_=513,G_=514,Qp=515,z_=516,W_=517,X_=518,Y_=519,Kh=35044,Zh="300 es",Ri=2e3,Ea=2001;class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,qc=180/Math.PI;function vo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function q_(n,e){return(n%e+e)%e}function dl(n,e,t){return(1-t)*n+t*e}function Ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const K_={DEG2RAD:ha};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],v=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=_;return}if(h!==_||l!==d||c!==f||u!==v){let m=1-a;const p=l*d+c*f+u*v+h*_,b=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const T=Math.sqrt(w),E=Math.atan2(T,p*b);m=Math.sin(m*E)/T,a=Math.sin(a*E)/T}const A=a*b;if(l=l*m+d*A,c=c*m+f*A,u=u*m+v*A,h=h*m+_*A,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],v=r[o+3];return e[t]=a*v+u*h+l*f-c*d,e[t+1]=l*v+u*d+c*h-a*f,e[t+2]=c*v+u*f+a*d-l*h,e[t+3]=u*v-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"YXZ":this._x=d*u*h+c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"ZXY":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h-d*f*v;break;case"ZYX":this._x=d*u*h-c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h+d*f*v;break;case"YZX":this._x=d*u*h+c*f*v,this._y=c*f*h+d*u*v,this._z=c*u*v-d*f*h,this._w=c*u*h-d*f*v;break;case"XZY":this._x=d*u*h-c*f*v,this._y=c*f*h-d*u*v,this._z=c*u*v+d*f*h,this._w=c*u*h+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fl=new G,Qh=new Ps;class nt{constructor(e,t,i,s,r,o,a,l,c){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],v=i[8],_=s[0],m=s[3],p=s[6],b=s[1],w=s[4],A=s[7],T=s[2],E=s[5],M=s[8];return r[0]=o*_+a*b+l*T,r[3]=o*m+a*w+l*E,r[6]=o*p+a*A+l*M,r[1]=c*_+u*b+h*T,r[4]=c*m+u*w+h*E,r[7]=c*p+u*A+h*M,r[2]=d*_+f*b+v*T,r[5]=d*m+f*w+v*E,r[8]=d*p+f*A+v*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,v=t*h+i*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pl.makeScale(e,t)),this}rotate(e){return this.premultiply(pl.makeRotation(-e)),this}translate(e,t){return this.premultiply(pl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pl=new nt;function jp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Z_(){const n=wa("canvas");return n.style.display="block",n}const jh={};function dr(n){n in jh||(jh[n]=!0,console.warn(n))}function Q_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function j_(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function J_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Jh=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $_(){const n={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=fr(s.r),s.g=fr(s.g),s.b=fr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ji?Sa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return dr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return dr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ds]:{primaries:e,whitePoint:i,transfer:Sa,toXYZ:Jh,fromXYZ:$h,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Jh,fromXYZ:$h,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),n}const ct=$_();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hs;class e0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=wa("canvas")),Hs.width=e.width,Hs.height=e.height;const s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t0=0;class Cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ml(s[o].image)):r.push(ml(s[o]))}else r=ml(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function ml(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?e0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n0=0;const gl=new G;class fn extends Us{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=Ci,s=Ci,r=dn,o=Ji,a=Zn,l=ui,c=fn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=vo(),this.name="",this.source=new Cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gl).x}get height(){return this.source.getSize(gl).y}get depth(){return this.source.getSize(gl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xc:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xc:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=kp;fn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,i=0,s=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],v=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,A=(f+1)/2,T=(p+1)/2,E=(u+d)/4,M=(h+_)/4,S=(v+m)/4;return w>A&&w>T?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=M/i):A>T?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=E/s,r=S/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=M/r,s=S/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-v)*(m-v)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(m-v)/b,this.y=(h-_)/b,this.z=(d-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i0 extends Us{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new fn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Cu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends i0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jp extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class s0 extends fn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _o{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),Do.subVectors(this.max,Lr),Vs.subVectors(e.a,Lr),Gs.subVectors(e.b,Lr),zs.subVectors(e.c,Lr),Hi.subVectors(Gs,Vs),Vi.subVectors(zs,Gs),gs.subVectors(Vs,zs);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-gs.z,gs.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,gs.z,0,-gs.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-gs.y,gs.x,0];return!vl(t,Vs,Gs,zs,Do)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,Vs,Gs,zs,Do))?!1:(Po.crossVectors(Hi,Vi),t=[Po.x,Po.y,Po.z],vl(t,Vs,Gs,zs,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mi=[new G,new G,new G,new G,new G,new G,new G,new G],zn=new G,Ro=new _o,Vs=new G,Gs=new G,zs=new G,Hi=new G,Vi=new G,gs=new G,Lr=new G,Do=new G,Po=new G,vs=new G;function vl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vs.fromArray(n,r);const a=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=e.dot(vs),c=t.dot(vs),u=i.dot(vs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const r0=new _o,Ur=new G,_l=new G;class qa{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):r0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(_l)),this.expandByPoint(Ur.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gi=new G,xl=new G,Io=new G,Gi=new G,Al=new G,Lo=new G,Ml=new G;class Ka{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){xl.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(xl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Io),a=Gi.dot(this.direction),l=-Gi.dot(Io),c=Gi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,v;if(u>0)if(h=o*l-a,d=o*a-l,v=r*u,h>=0)if(d>=-v)if(d<=v){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xl).addScaledVector(Io,d),f}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),s=gi.dot(gi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,s,r){Al.subVectors(t,e),Lo.subVectors(i,e),Ml.crossVectors(Al,Lo);let o=this.direction.dot(Ml),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(Lo.crossVectors(Gi,Lo));if(l<0)return null;const c=a*this.direction.dot(Al.cross(Gi));if(c<0||l+c>o)return null;const u=-a*Gi.dot(Ml);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,t,i,s,r,o,a,l,c,u,h,d,f,v,_,m){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,f,v,_,m)}set(e,t,i,s,r,o,a,l,c,u,h,d,f,v,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=v,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),o=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,v=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+v*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=v+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,v=c*u,_=c*h;t[0]=d+_*a,t[4]=v*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-v,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,v=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=v+f*a,t[1]=f+v*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,v=a*u,_=a*h;t[0]=l*u,t[4]=v*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=v*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+v,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,f=o*c,v=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-v,t[2]=v*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o0,e,a0)}lookAt(e,t,i){const s=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),zi.crossVectors(i,Tn),zi.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),zi.crossVectors(i,Tn)),zi.normalize(),Uo.crossVectors(Tn,zi),s[0]=zi.x,s[4]=Uo.x,s[8]=Tn.x,s[1]=zi.y,s[5]=Uo.y,s[9]=Tn.y,s[2]=zi.z,s[6]=Uo.z,s[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],v=i[2],_=i[6],m=i[10],p=i[14],b=i[3],w=i[7],A=i[11],T=i[15],E=s[0],M=s[4],S=s[8],g=s[12],x=s[1],P=s[5],I=s[9],L=s[13],F=s[2],Y=s[6],B=s[10],j=s[14],X=s[3],ce=s[7],_e=s[11],Ie=s[15];return r[0]=o*E+a*x+l*F+c*X,r[4]=o*M+a*P+l*Y+c*ce,r[8]=o*S+a*I+l*B+c*_e,r[12]=o*g+a*L+l*j+c*Ie,r[1]=u*E+h*x+d*F+f*X,r[5]=u*M+h*P+d*Y+f*ce,r[9]=u*S+h*I+d*B+f*_e,r[13]=u*g+h*L+d*j+f*Ie,r[2]=v*E+_*x+m*F+p*X,r[6]=v*M+_*P+m*Y+p*ce,r[10]=v*S+_*I+m*B+p*_e,r[14]=v*g+_*L+m*j+p*Ie,r[3]=b*E+w*x+A*F+T*X,r[7]=b*M+w*P+A*Y+T*ce,r[11]=b*S+w*I+A*B+T*_e,r[15]=b*g+w*L+A*j+T*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],v=e[3],_=e[7],m=e[11],p=e[15];return v*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*f-i*l*f)+_*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+i*o*f+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],v=e[12],_=e[13],m=e[14],p=e[15],b=h*m*c-_*d*c+_*l*f-a*m*f-h*l*p+a*d*p,w=v*d*c-u*m*c-v*l*f+o*m*f+u*l*p-o*d*p,A=u*_*c-v*h*c+v*a*f-o*_*f-u*a*p+o*h*p,T=v*h*l-u*_*l-v*a*d+o*_*d+u*a*m-o*h*m,E=t*b+i*w+s*A+r*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=b*M,e[1]=(_*d*r-h*m*r-_*s*f+i*m*f+h*s*p-i*d*p)*M,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*M,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*f-i*l*f)*M,e[4]=w*M,e[5]=(u*m*r-v*d*r+v*s*f-t*m*f-u*s*p+t*d*p)*M,e[6]=(v*l*r-o*m*r-v*s*c+t*m*c+o*s*p-t*l*p)*M,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*M,e[8]=A*M,e[9]=(v*h*r-u*_*r-v*i*f+t*_*f+u*i*p-t*h*p)*M,e[10]=(o*_*r-v*a*r+v*i*c-t*_*c-o*i*p+t*a*p)*M,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*f-t*a*f)*M,e[12]=T*M,e[13]=(u*_*s-v*h*s+v*i*d-t*_*d-u*i*m+t*h*m)*M,e[14]=(v*a*s-o*_*s-v*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*M,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,v=r*h,_=o*u,m=o*h,p=a*h,b=l*c,w=l*u,A=l*h,T=i.x,E=i.y,M=i.z;return s[0]=(1-(_+p))*T,s[1]=(f+A)*T,s[2]=(v-w)*T,s[3]=0,s[4]=(f-A)*E,s[5]=(1-(d+p))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(v+w)*M,s[9]=(m-b)*M,s[10]=(1-(d+_))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ws.set(s[0],s[1],s[2]).length();const o=Ws.set(s[4],s[5],s[6]).length(),a=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);const c=1/r,u=1/o,h=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,t.setFromRotationMatrix(Wn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ri){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let f,v;if(a===Ri)f=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ea)f=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ri){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,f=(i+s)*u;let v,_;if(a===Ri)v=(o+r)*h,_=-2*h;else if(a===Ea)v=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ws=new G,Wn=new Rt,o0=new G(0,0,0),a0=new G(1,1,1),zi=new G,Uo=new G,Tn=new G,ed=new Rt,td=new Ps;class hi{constructor(e=0,t=0,i=0,s=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ed,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return td.setFromEuler(this),this.setFromQuaternion(td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class Ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let l0=0;const nd=new G,Xs=new Ps,vi=new Rt,No=new G,Nr=new G,c0=new G,u0=new Ps,id=new G(1,0,0),sd=new G(0,1,0),rd=new G(0,0,1),od={type:"added"},h0={type:"removed"},Ys={type:"childadded",child:null},yl={type:"childremoved",child:null};class Ht extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new G,t=new hi,i=new Ps,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new nt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(id,e)}rotateY(e){return this.rotateOnAxis(sd,e)}rotateZ(e){return this.rotateOnAxis(rd,e)}translateOnAxis(e,t){return nd.copy(e).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(id,e)}translateY(e){return this.translateOnAxis(sd,e)}translateZ(e){return this.translateOnAxis(rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?No.copy(e):No.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Nr,No,this.up):vi.lookAt(No,Nr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(vi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(od),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h0),yl.child=e,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(od),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,c0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,u0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new G(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new G,_i=new G,Sl=new G,xi=new G,qs=new G,Ks=new G,ad=new G,El=new G,wl=new G,Tl=new G,bl=new Nt,Cl=new Nt,Rl=new Nt;class Kn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xn.subVectors(e,t),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Xn.subVectors(s,t),_i.subVectors(i,t),Sl.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(_i),l=Xn.dot(Sl),c=_i.dot(_i),u=_i.dot(Sl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,v=(o*u-a*l)*d;return r.set(1-f-v,v,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return bl.setScalar(0),Cl.setScalar(0),Rl.setScalar(0),bl.fromBufferAttribute(e,t),Cl.fromBufferAttribute(e,i),Rl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(bl,r.x),o.addScaledVector(Cl,r.y),o.addScaledVector(Rl,r.z),o}static isFrontFacing(e,t,i,s){return Xn.subVectors(i,t),_i.subVectors(e,t),Xn.cross(_i).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Xn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Kn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;qs.subVectors(s,i),Ks.subVectors(r,i),El.subVectors(e,i);const l=qs.dot(El),c=Ks.dot(El);if(l<=0&&c<=0)return t.copy(i);wl.subVectors(e,s);const u=qs.dot(wl),h=Ks.dot(wl);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(qs,o);Tl.subVectors(e,r);const f=qs.dot(Tl),v=Ks.dot(Tl);if(v>=0&&f<=v)return t.copy(r);const _=f*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(Ks,a);const m=u*v-f*h;if(m<=0&&h-u>=0&&f-v>=0)return ad.subVectors(r,s),a=(h-u)/(h-u+(f-v)),t.copy(s).addScaledVector(ad,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(i).addScaledVector(qs,o).addScaledVector(Ks,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=q_(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Dl(o,r,e+1/3),this.g=Dl(o,r,e),this.b=Dl(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Bn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bn){const i=$p[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return ct.workingToColorSpace(jt.copy(this),e),Math.round(rt(jt.r*255,0,255))*65536+Math.round(rt(jt.g*255,0,255))*256+Math.round(rt(jt.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(jt.copy(this),t);const i=jt.r,s=jt.g,r=jt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Bn){ct.workingToColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,s=jt.b;return e!==Bn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Oo);const i=dl(Wi.h,Oo.h,t),s=dl(Wi.s,Oo.s,t),r=dl(Wi.l,Oo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new qe;qe.NAMES=$p;let d0=0;class wr extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=hr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=uc,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hr&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cc&&(i.blendSrc=this.blendSrc),this.blendDst!==uc&&(i.blendDst=this.blendDst),this.blendEquation!==ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Du extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bi=f0();function f0(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,s[l]=24,s[l|256]=24):(i[l]=31744,i[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function p0(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=rt(n,-65504,65504),bi.floatView[0]=n;const e=bi.uint32View[0],t=e>>23&511;return bi.baseTable[t]+((e&8388607)>>bi.shiftTable[t])}function m0(n){const e=n>>10;return bi.uint32View[0]=bi.mantissaTable[bi.offsetTable[e]+(n&1023)]+bi.exponentTable[e],bi.floatView[0]}class Fo{static toHalfFloat(e){return p0(e)}static fromHalfFloat(e){return m0(e)}}const Ot=new G,Bo=new Ge;let g0=0;class ci{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kh,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),s=gn(s,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kh&&(e.usage=this.usage),e}}class em extends ci{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class tm extends ci{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends ci{constructor(e,t,i){super(new Float32Array(e),t,i)}}let v0=0;const Fn=new Rt,Pl=new Ht,Zs=new G,bn=new _o,Or=new _o,zt=new G;class pn extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?tm:em)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Pl.lookAt(e),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(bn.min,Or.min),bn.expandByPoint(zt),zt.addVectors(bn.max,Or.max),bn.expandByPoint(zt)):(bn.expandByPoint(Or.min),bn.expandByPoint(Or.max))}bn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(e,c),zt.add(Zs)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new G,l[S]=new G;const c=new G,u=new G,h=new G,d=new Ge,f=new Ge,v=new Ge,_=new G,m=new G;function p(S,g,x){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,g),h.fromBufferAttribute(i,x),d.fromBufferAttribute(r,S),f.fromBufferAttribute(r,g),v.fromBufferAttribute(r,x),u.sub(c),h.sub(c),f.sub(d),v.sub(d);const P=1/(f.x*v.y-v.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(P),a[S].add(_),a[g].add(_),a[x].add(_),l[S].add(m),l[g].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let S=0,g=b.length;S<g;++S){const x=b[S],P=x.start,I=x.count;for(let L=P,F=P+I;L<F;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const w=new G,A=new G,T=new G,E=new G;function M(S){T.fromBufferAttribute(s,S),E.copy(T);const g=a[S];w.copy(g),w.sub(T.multiplyScalar(T.dot(g))).normalize(),A.crossVectors(E,g);const P=A.dot(l[S])<0?-1:1;o.setXYZW(S,w.x,w.y,w.z,P)}for(let S=0,g=b.length;S<g;++S){const x=b[S],P=x.start,I=x.count;for(let L=P,F=P+I;L<F;L+=3)M(e.getX(L+0)),M(e.getX(L+1)),M(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ci(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let p=0;p<u;p++)d[v++]=c[f++]}return new ci(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ld=new Rt,_s=new Ka,ko=new qa,cd=new G,Ho=new G,Vo=new G,Go=new G,Il=new G,zo=new G,ud=new G,Wo=new G;class An extends Ht{constructor(e=new pn,t=new Du){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Il.fromBufferAttribute(h,e),o?zo.addScaledVector(Il,u):zo.addScaledVector(Il.sub(t),u))}t.add(zo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(ko.containsPoint(_s.origin)===!1&&(_s.intersectSphere(ko,cd)===null||_s.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(ld.copy(r).invert(),_s.copy(e.ray).applyMatrix4(ld),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const m=d[v],p=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let A=b,T=w;A<T;A+=3){const E=a.getX(A),M=a.getX(A+1),S=a.getX(A+2);s=Xo(this,p,e,i,c,u,h,E,M,S),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=v,p=_;m<p;m+=3){const b=a.getX(m),w=a.getX(m+1),A=a.getX(m+2);s=Xo(this,o,e,i,c,u,h,b,w,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const m=d[v],p=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let A=b,T=w;A<T;A+=3){const E=A,M=A+1,S=A+2;s=Xo(this,p,e,i,c,u,h,E,M,S),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=v,p=_;m<p;m+=3){const b=m,w=m+1,A=m+2;s=Xo(this,o,e,i,c,u,h,b,w,A),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function _0(n,e,t,i,s,r,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ls,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Wo);return c<t.near||c>t.far?null:{distance:c,point:Wo.clone(),object:n}}function Xo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ho),n.getVertexPosition(l,Vo),n.getVertexPosition(c,Go);const u=_0(n,e,t,i,Ho,Vo,Go,ud);if(u){const h=new G;Kn.getBarycoord(ud,Ho,Vo,Go,h),s&&(u.uv=Kn.getInterpolatedAttribute(s,a,l,c,h,new Ge)),r&&(u.uv1=Kn.getInterpolatedAttribute(r,a,l,c,h,new Ge)),o&&(u.normal=Kn.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new G,materialIndex:0};Kn.getNormal(Ho,Vo,Go,d.normal),u.face=d,u.barycoord=h}return u}class Ns extends pn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;v("z","y","x",-1,-1,i,t,e,o,r,0),v("z","y","x",1,-1,i,t,-e,o,r,1),v("x","z","y",1,1,e,i,t,s,o,2),v("x","z","y",1,-1,e,i,-t,s,o,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(u,3)),this.setAttribute("uv",new Mt(h,2));function v(_,m,p,b,w,A,T,E,M,S,g){const x=A/M,P=T/S,I=A/2,L=T/2,F=E/2,Y=M+1,B=S+1;let j=0,X=0;const ce=new G;for(let _e=0;_e<B;_e++){const Ie=_e*P-L;for(let le=0;le<Y;le++){const Se=le*x-I;ce[_]=Se*b,ce[m]=Ie*w,ce[p]=F,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[p]=E>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(le/M),h.push(1-_e/S),j+=1}}for(let _e=0;_e<S;_e++)for(let Ie=0;Ie<M;Ie++){const le=d+Ie+Y*_e,Se=d+Ie+Y*(_e+1),Z=d+(Ie+1)+Y*(_e+1),O=d+(Ie+1)+Y*_e;l.push(le,Se,O),l.push(Se,Z,O),X+=6}a.addGroup(f,X,g),f+=X,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=Mr(n[t]);for(const s in i)e[s]=i[s]}return e}function x0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Pu={clone:Mr,merge:on};var A0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A0,this.fragmentShader=M0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=x0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class im extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new G,hd=new Ge,dd=new Ge;class Rn extends im{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qc*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,hd,dd),t.subVectors(dd,hd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,js=1;class y0 extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rn(Qs,js,e,t);s.layers=this.layers,this.add(s);const r=new Rn(Qs,js,e,t);r.layers=this.layers,this.add(r);const o=new Rn(Qs,js,e,t);o.layers=this.layers,this.add(o);const a=new Rn(Qs,js,e,t);a.layers=this.layers,this.add(a);const l=new Rn(Qs,js,e,t);l.layers=this.layers,this.add(l);const c=new Rn(Qs,js,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class sm extends fn{constructor(e=[],t=xr,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class S0 extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ns(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:jn});r.uniforms.tEquirect.value=t;const o=new An(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=dn),new y0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Yo extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const E0={type:"move"};class Ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(E0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class w0 extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class T0 extends fn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=In,u=In,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ul=new G,b0=new G,C0=new nt;class Zi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ul.subVectors(i,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ul),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||C0.getNormalMatrix(e),s=this.coplanarPoint(Ul).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new qa,R0=new Ge(.5,.5),qo=new G;class Iu{constructor(e=new Zi,t=new Zi,i=new Zi,s=new Zi,r=new Zi,o=new Zi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ri){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],v=s[9],_=s[10],m=s[11],p=s[12],b=s[13],w=s[14],A=s[15];if(i[0].setComponents(l-r,d-c,m-f,A-p).normalize(),i[1].setComponents(l+r,d+c,m+f,A+p).normalize(),i[2].setComponents(l+o,d+u,m+v,A+b).normalize(),i[3].setComponents(l-o,d-u,m-v,A-b).normalize(),i[4].setComponents(l-a,d-h,m-_,A-w).normalize(),t===Ri)i[5].setComponents(l+a,d+h,m+_,A+w).normalize();else if(t===Ea)i[5].setComponents(a,h,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){xs.center.set(0,0,0);const t=R0.distanceTo(e.center);return xs.radius=.7071067811865476+t,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(qo.x=s.normal.x>0?e.max.x:e.min.x,qo.y=s.normal.y>0?e.max.y:e.min.y,qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lu extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ta=new G,ba=new G,fd=new Rt,Fr=new Ka,Ko=new qa,Nl=new G,pd=new G;class D0 extends Ht{constructor(e=new pn,t=new Lu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Ta.fromBufferAttribute(t,s-1),ba.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ta.distanceTo(ba);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(s),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;fd.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(fd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=f,m=v-1;_<m;_+=c){const p=u.getX(_),b=u.getX(_+1),w=Zo(this,e,Fr,l,p,b,_);w&&t.push(w)}if(this.isLineLoop){const _=u.getX(v-1),m=u.getX(f),p=Zo(this,e,Fr,l,_,m,v-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let _=f,m=v-1;_<m;_+=c){const p=Zo(this,e,Fr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Zo(this,e,Fr,l,v-1,f,v-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Zo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Ta.fromBufferAttribute(a,s),ba.fromBufferAttribute(a,r),t.distanceSqToSegment(Ta,ba,Nl,pd)>i)return;Nl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Nl);if(!(c<e.near||c>e.far))return{distance:c,point:pd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const md=new G,gd=new G;class rm extends D0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)md.fromBufferAttribute(t,s),gd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+md.distanceTo(gd);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class om extends fn{constructor(e,t,i=Rs,s,r,o,a=In,l=In,c,u=uo,h=1){if(u!==uo&&u!==ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Cu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Za extends pn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let v=0;const _=[],m=i/2;let p=0;b(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Mt(h,3)),this.setAttribute("normal",new Mt(d,3)),this.setAttribute("uv",new Mt(f,2));function b(){const A=new G,T=new G;let E=0;const M=(t-e)/i;for(let S=0;S<=r;S++){const g=[],x=S/r,P=x*(t-e)+e;for(let I=0;I<=s;I++){const L=I/s,F=L*l+a,Y=Math.sin(F),B=Math.cos(F);T.x=P*Y,T.y=-x*i+m,T.z=P*B,h.push(T.x,T.y,T.z),A.set(Y,M,B).normalize(),d.push(A.x,A.y,A.z),f.push(L,1-x),g.push(v++)}_.push(g)}for(let S=0;S<s;S++)for(let g=0;g<r;g++){const x=_[g][S],P=_[g+1][S],I=_[g+1][S+1],L=_[g][S+1];(e>0||g!==0)&&(u.push(x,P,L),E+=3),(t>0||g!==r-1)&&(u.push(P,I,L),E+=3)}c.addGroup(p,E,0),p+=E}function w(A){const T=v,E=new Ge,M=new G;let S=0;const g=A===!0?e:t,x=A===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),v++;const P=v;for(let I=0;I<=s;I++){const F=I/s*l+a,Y=Math.cos(F),B=Math.sin(F);M.x=g*B,M.y=m*x,M.z=g*Y,h.push(M.x,M.y,M.z),d.push(0,x,0),E.x=Y*.5+.5,E.y=B*.5*x+.5,f.push(E.x,E.y),v++}for(let I=0;I<s;I++){const L=T+I,F=P+I;A===!0?u.push(F,F+1,L):u.push(F+1,F,L),S+=3}c.addGroup(p,S,A===!0?1:2),p+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uu extends Za{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Uu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tr extends pn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Mt(r,3)),this.setAttribute("normal",new Mt(r.slice(),3)),this.setAttribute("uv",new Mt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const w=new G,A=new G,T=new G;for(let E=0;E<t.length;E+=3)f(t[E+0],w),f(t[E+1],A),f(t[E+2],T),l(w,A,T,b)}function l(b,w,A,T){const E=T+1,M=[];for(let S=0;S<=E;S++){M[S]=[];const g=b.clone().lerp(A,S/E),x=w.clone().lerp(A,S/E),P=E-S;for(let I=0;I<=P;I++)I===0&&S===E?M[S][I]=g:M[S][I]=g.clone().lerp(x,I/P)}for(let S=0;S<E;S++)for(let g=0;g<2*(E-S)-1;g++){const x=Math.floor(g/2);g%2===0?(d(M[S][x+1]),d(M[S+1][x]),d(M[S][x])):(d(M[S][x+1]),d(M[S+1][x+1]),d(M[S+1][x]))}}function c(b){const w=new G;for(let A=0;A<r.length;A+=3)w.x=r[A+0],w.y=r[A+1],w.z=r[A+2],w.normalize().multiplyScalar(b),r[A+0]=w.x,r[A+1]=w.y,r[A+2]=w.z}function u(){const b=new G;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];const A=m(b)/2/Math.PI+.5,T=p(b)/Math.PI+.5;o.push(A,1-T)}v(),h()}function h(){for(let b=0;b<o.length;b+=6){const w=o[b+0],A=o[b+2],T=o[b+4],E=Math.max(w,A,T),M=Math.min(w,A,T);E>.9&&M<.1&&(w<.2&&(o[b+0]+=1),A<.2&&(o[b+2]+=1),T<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,w){const A=b*3;w.x=e[A+0],w.y=e[A+1],w.z=e[A+2]}function v(){const b=new G,w=new G,A=new G,T=new G,E=new Ge,M=new Ge,S=new Ge;for(let g=0,x=0;g<r.length;g+=9,x+=6){b.set(r[g+0],r[g+1],r[g+2]),w.set(r[g+3],r[g+4],r[g+5]),A.set(r[g+6],r[g+7],r[g+8]),E.set(o[x+0],o[x+1]),M.set(o[x+2],o[x+3]),S.set(o[x+4],o[x+5]),T.copy(b).add(w).add(A).divideScalar(3);const P=m(T);_(E,x+0,b,P),_(M,x+2,w,P),_(S,x+4,A,P)}}function _(b,w,A,T){T<0&&b.x===1&&(o[w]=b.x-1),A.x===0&&A.z===0&&(o[w]=T/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.vertices,e.indices,e.radius,e.details)}}class Nu extends Tr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Nu(e.radius,e.detail)}}class Ou extends Tr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ou(e.radius,e.detail)}}class Fu extends Tr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fu(e.radius,e.detail)}}class xo extends pn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],v=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*d-o;for(let w=0;w<c;w++){const A=w*h-r;v.push(A,-b,0),_.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const w=b+c*p,A=b+c*(p+1),T=b+1+c*(p+1),E=b+1+c*p;f.push(w,A,E),f.push(A,T,E)}this.setIndex(f),this.setAttribute("position",new Mt(v,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bu extends pn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new G,d=new G,f=[],v=[],_=[],m=[];for(let p=0;p<=i;p++){const b=[],w=p/i;let A=0;p===0&&o===0?A=.5/t:p===i&&l===Math.PI&&(A=-.5/t);for(let T=0;T<=t;T++){const E=T/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+w*a),v.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(E+A,1-w),b.push(c++)}u.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const w=u[p][b+1],A=u[p][b],T=u[p+1][b],E=u[p+1][b+1];(p!==0||o>0)&&f.push(w,A,E),(p!==i-1||l<Math.PI)&&f.push(A,T,E)}this.setIndex(f),this.setAttribute("position",new Mt(v,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ku extends Tr{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ku(e.radius,e.detail)}}class Hu extends pn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new G,h=new G,d=new G;for(let f=0;f<=i;f++)for(let v=0;v<=s;v++){const _=v/s*r,m=f/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(v/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let v=1;v<=s;v++){const _=(s+1)*f+v-1,m=(s+1)*(f-1)+v-1,p=(s+1)*(f-1)+v,b=(s+1)*f+v;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Mt(a,3)),this.setAttribute("normal",new Mt(l,3)),this.setAttribute("uv",new Mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class am extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zp,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lm extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P0 extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vd={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class I0{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],v=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null}}}const L0=new I0;class Vu{constructor(e){this.manager=e!==void 0?e:L0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Vu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ai={};class U0 extends Error{constructor(e,t){super(e),this.response=t}}class N0 extends Vu{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vd.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ai[e]!==void 0){Ai[e].push({onLoad:t,onProgress:i,onError:s});return}Ai[e]=[],Ai[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ai[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,v=f!==0;let _=0;const m=new ReadableStream({start(p){b();function b(){h.read().then(({done:w,value:A})=>{if(w)p.close();else{_+=A.byteLength;const T=new ProgressEvent("progress",{lengthComputable:v,loaded:_,total:f});for(let E=0,M=u.length;E<M;E++){const S=u[E];S.onProgress&&S.onProgress(T)}p.enqueue(A),b()}},w=>{p.error(w)})}}});return new Response(m)}else throw new U0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(v=>f.decode(v))}}}).then(c=>{vd.add(`file:${e}`,c);const u=Ai[e];delete Ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Ai[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ai[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class O0 extends Vu{constructor(e){super(e)}load(e,t,i,s){const r=this,o=new T0,a=new N0(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(s!==void 0)s(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ci,o.wrapT=c.wrapT!==void 0?c.wrapT:Ci,o.magFilter=c.magFilter!==void 0?c.magFilter:dn,o.minFilter=c.minFilter!==void 0?c.minFilter:dn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ji),c.mipmapCount===1&&(o.minFilter=dn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,s),o}}class cm extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ol=new Rt,_d=new G,xd=new G;class F0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=ui,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Iu,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;_d.setFromMatrixPosition(e.matrixWorld),t.position.copy(_d),xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xd),t.updateMatrixWorld(),Ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gu extends im{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class B0 extends F0{constructor(){super(new Gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k0 extends cm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new B0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class H0 extends cm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class V0 extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class G0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ad=new Rt;class Kc{constructor(e,t,i=0,s=1/0){this.ray=new Ka(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ru,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ad.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ad),this}intersectObject(e,t=!0,i=[]){return Zc(e,this,i,t),i.sort(Md),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Zc(e[s],this,i,t);return i.sort(Md),i}}function Md(n,e){return n.distance-e.distance}function Zc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Zc(r[o],e,t,!0)}}class yd{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class z0 extends rm{constructor(e=10,t=10,i=4473924,s=8947848){i=new qe(i),s=new qe(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,v=-a;d<=t;d++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const _=d===r?i:s;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new pn;u.setAttribute("position",new Mt(l,3)),u.setAttribute("color",new Mt(c,3));const h=new Lu({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class W0 extends rm{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new pn;s.setAttribute("position",new Mt(t,3)),s.setAttribute("color",new Mt(i,3));const r=new Lu({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,i){const s=new qe,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class X0 extends Us{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Sd(n,e,t,i){const s=Y0(i);switch(t){case zp:return n*e;case Xp:return n*e/s.components*s.byteLength;case wu:return n*e/s.components*s.byteLength;case Yp:return n*e*2/s.components*s.byteLength;case Tu:return n*e*2/s.components*s.byteLength;case Wp:return n*e*3/s.components*s.byteLength;case Zn:return n*e*4/s.components*s.byteLength;case bu:return n*e*4/s.components*s.byteLength;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case la:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yc:case Ec:return Math.max(n,16)*Math.max(e,8)/4;case Mc:case Sc:return Math.max(n,8)*Math.max(e,8)/2;case wc:case Tc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case kc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ua:case Gc:case zc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qp:case Wc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xc:case Yc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Y0(n){switch(n){case ui:case Hp:return{byteLength:1,components:1};case lo:case Vp:case en:return{byteLength:2,components:1};case Su:case Eu:return{byteLength:2,components:4};case Rs:case yu:case kn:return{byteLength:4,components:1};case Gp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function um(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function q0(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<h.length;f++){const v=h[d],_=h[f];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,v=h.length;f<v;f++){const _=h[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var K0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Z0=`#ifdef USE_ALPHAHASH
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
#endif`,Q0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ex=`#ifdef USE_AOMAP
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
#endif`,tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ox=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ax=`#ifdef USE_IRIDESCENCE
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
#endif`,lx=`#ifdef USE_BUMPMAP
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vx=`#define PI 3.141592653589793
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
} // validated`,_x=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",wx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tx=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nx=`#ifdef USE_GRADIENTMAP
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
}`,Ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kx=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Hx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xx=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Yx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,qx=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iA=`#if defined( USE_POINTS_UV )
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
#endif`,sA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gA=`#ifdef USE_NORMALMAP
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
#endif`,vA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_A=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,SA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,DA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,PA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UA=`#ifdef USE_SKINNING
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
#endif`,NA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OA=`#ifdef USE_SKINNING
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
#endif`,FA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HA=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VA=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GA=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KA=`uniform sampler2D t2D;
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
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,eM=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tM=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,nM=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,lM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cM=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,uM=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hM=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,dM=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,fM=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,pM=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mM=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,gM=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,vM=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,_M=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,xM=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,AM=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,MM=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,yM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,SM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,EM=`uniform vec3 color;
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
}`,wM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,TM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,st={alphahash_fragment:K0,alphahash_pars_fragment:Z0,alphamap_fragment:Q0,alphamap_pars_fragment:j0,alphatest_fragment:J0,alphatest_pars_fragment:$0,aomap_fragment:ex,aomap_pars_fragment:tx,batching_pars_vertex:nx,batching_vertex:ix,begin_vertex:sx,beginnormal_vertex:rx,bsdfs:ox,iridescence_fragment:ax,bumpmap_pars_fragment:lx,clipping_planes_fragment:cx,clipping_planes_pars_fragment:ux,clipping_planes_pars_vertex:hx,clipping_planes_vertex:dx,color_fragment:fx,color_pars_fragment:px,color_pars_vertex:mx,color_vertex:gx,common:vx,cube_uv_reflection_fragment:_x,defaultnormal_vertex:xx,displacementmap_pars_vertex:Ax,displacementmap_vertex:Mx,emissivemap_fragment:yx,emissivemap_pars_fragment:Sx,colorspace_fragment:Ex,colorspace_pars_fragment:wx,envmap_fragment:Tx,envmap_common_pars_fragment:bx,envmap_pars_fragment:Cx,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:Hx,envmap_vertex:Dx,fog_vertex:Px,fog_pars_vertex:Ix,fog_fragment:Lx,fog_pars_fragment:Ux,gradientmap_pars_fragment:Nx,lightmap_pars_fragment:Ox,lights_lambert_fragment:Fx,lights_lambert_pars_fragment:Bx,lights_pars_begin:kx,lights_toon_fragment:Vx,lights_toon_pars_fragment:Gx,lights_phong_fragment:zx,lights_phong_pars_fragment:Wx,lights_physical_fragment:Xx,lights_physical_pars_fragment:Yx,lights_fragment_begin:qx,lights_fragment_maps:Kx,lights_fragment_end:Zx,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:jx,logdepthbuf_pars_vertex:Jx,logdepthbuf_vertex:$x,map_fragment:eA,map_pars_fragment:tA,map_particle_fragment:nA,map_particle_pars_fragment:iA,metalnessmap_fragment:sA,metalnessmap_pars_fragment:rA,morphinstance_vertex:oA,morphcolor_vertex:aA,morphnormal_vertex:lA,morphtarget_pars_vertex:cA,morphtarget_vertex:uA,normal_fragment_begin:hA,normal_fragment_maps:dA,normal_pars_fragment:fA,normal_pars_vertex:pA,normal_vertex:mA,normalmap_pars_fragment:gA,clearcoat_normal_fragment_begin:vA,clearcoat_normal_fragment_maps:_A,clearcoat_pars_fragment:xA,iridescence_pars_fragment:AA,opaque_fragment:MA,packing:yA,premultiplied_alpha_fragment:SA,project_vertex:EA,dithering_fragment:wA,dithering_pars_fragment:TA,roughnessmap_fragment:bA,roughnessmap_pars_fragment:CA,shadowmap_pars_fragment:RA,shadowmap_pars_vertex:DA,shadowmap_vertex:PA,shadowmask_pars_fragment:IA,skinbase_vertex:LA,skinning_pars_vertex:UA,skinning_vertex:NA,skinnormal_vertex:OA,specularmap_fragment:FA,specularmap_pars_fragment:BA,tonemapping_fragment:kA,tonemapping_pars_fragment:HA,transmission_fragment:VA,transmission_pars_fragment:GA,uv_pars_fragment:zA,uv_pars_vertex:WA,uv_vertex:XA,worldpos_vertex:YA,background_vert:qA,background_frag:KA,backgroundCube_vert:ZA,backgroundCube_frag:QA,cube_vert:jA,cube_frag:JA,depth_vert:$A,depth_frag:eM,distanceRGBA_vert:tM,distanceRGBA_frag:nM,equirect_vert:iM,equirect_frag:sM,linedashed_vert:rM,linedashed_frag:oM,meshbasic_vert:aM,meshbasic_frag:lM,meshlambert_vert:cM,meshlambert_frag:uM,meshmatcap_vert:hM,meshmatcap_frag:dM,meshnormal_vert:fM,meshnormal_frag:pM,meshphong_vert:mM,meshphong_frag:gM,meshphysical_vert:vM,meshphysical_frag:_M,meshtoon_vert:xM,meshtoon_frag:AM,points_vert:MM,points_frag:yM,shadow_vert:SM,shadow_frag:EM,sprite_vert:wM,sprite_frag:TM},Te={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ri={basic:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:on([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:on([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:on([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:on([Te.points,Te.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:on([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:on([Te.common,Te.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:on([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:on([Te.sprite,Te.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:on([Te.common,Te.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:on([Te.lights,Te.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ri.physical={uniforms:on([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Qo={r:0,b:0,g:0},As=new hi,bM=new Rt;function CM(n,e,t,i,s,r,o){const a=new qe(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function v(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?t:e).get(A)),A}function _(w){let A=!1;const T=v(w);T===null?p(a,l):T&&T.isColor&&(p(T,1),A=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,A){const T=v(A);T&&(T.isCubeTexture||T.mapping===Ya)?(u===void 0&&(u=new An(new Ns(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Mr(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),As.copy(A.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bM.makeRotationFromEuler(As)),u.material.toneMapped=ct.getTransfer(T.colorSpace)!==gt,(h!==T||d!==T.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new An(new xo(2,2),new hn({name:"BackgroundMaterial",uniforms:Mr(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ct.getTransfer(T.colorSpace)!==gt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,A){w.getRGB(Qo,nm(n)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,A,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),l=A,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:_,addToRenderList:m,dispose:b}}function RM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(x,P,I,L,F){let Y=!1;const B=h(L,I,P);r!==B&&(r=B,c(r.object)),Y=f(x,L,I,F),Y&&v(x,L,I,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,A(x,P,I,L),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,P,I){const L=I.wireframe===!0;let F=i[x.id];F===void 0&&(F={},i[x.id]=F);let Y=F[P.id];Y===void 0&&(Y={},F[P.id]=Y);let B=Y[L];return B===void 0&&(B=d(l()),Y[L]=B),B}function d(x){const P=[],I=[],L=[];for(let F=0;F<t;F++)P[F]=0,I[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:L,object:x,attributes:{},index:null}}function f(x,P,I,L){const F=r.attributes,Y=P.attributes;let B=0;const j=I.getAttributes();for(const X in j)if(j[X].location>=0){const _e=F[X];let Ie=Y[X];if(Ie===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Ie=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Ie=x.instanceColor)),_e===void 0||_e.attribute!==Ie||Ie&&_e.data!==Ie.data)return!0;B++}return r.attributesNum!==B||r.index!==L}function v(x,P,I,L){const F={},Y=P.attributes;let B=0;const j=I.getAttributes();for(const X in j)if(j[X].location>=0){let _e=Y[X];_e===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(_e=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(_e=x.instanceColor));const Ie={};Ie.attribute=_e,_e&&_e.data&&(Ie.data=_e.data),F[X]=Ie,B++}r.attributes=F,r.attributesNum=B,r.index=L}function _(){const x=r.newAttributes;for(let P=0,I=x.length;P<I;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){const I=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;I[x]=1,L[x]===0&&(n.enableVertexAttribArray(x),L[x]=1),F[x]!==P&&(n.vertexAttribDivisor(x,P),F[x]=P)}function b(){const x=r.newAttributes,P=r.enabledAttributes;for(let I=0,L=P.length;I<L;I++)P[I]!==x[I]&&(n.disableVertexAttribArray(I),P[I]=0)}function w(x,P,I,L,F,Y,B){B===!0?n.vertexAttribIPointer(x,P,I,F,Y):n.vertexAttribPointer(x,P,I,L,F,Y)}function A(x,P,I,L){_();const F=L.attributes,Y=I.getAttributes(),B=P.defaultAttributeValues;for(const j in Y){const X=Y[j];if(X.location>=0){let ce=F[j];if(ce===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),ce!==void 0){const _e=ce.normalized,Ie=ce.itemSize,le=e.get(ce);if(le===void 0)continue;const Se=le.buffer,Z=le.type,O=le.bytesPerElement,Me=Z===n.INT||Z===n.UNSIGNED_INT||ce.gpuType===yu;if(ce.isInterleavedBufferAttribute){const me=ce.data,be=me.stride,tt=ce.offset;if(me.isInstancedInterleavedBuffer){for(let Fe=0;Fe<X.locationSize;Fe++)p(X.location+Fe,me.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Fe=0;Fe<X.locationSize;Fe++)m(X.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Fe=0;Fe<X.locationSize;Fe++)w(X.location+Fe,Ie/X.locationSize,Z,_e,be*O,(tt+Ie/X.locationSize*Fe)*O,Me)}else{if(ce.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)p(X.location+me,ce.meshPerAttribute);x.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let me=0;me<X.locationSize;me++)w(X.location+me,Ie/X.locationSize,Z,_e,Ie*O,Ie/X.locationSize*me*O,Me)}}else if(B!==void 0){const _e=B[j];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(X.location,_e);break;case 3:n.vertexAttrib3fv(X.location,_e);break;case 4:n.vertexAttrib4fv(X.location,_e);break;default:n.vertexAttrib1fv(X.location,_e)}}}}b()}function T(){S();for(const x in i){const P=i[x];for(const I in P){const L=P[I];for(const F in L)u(L[F].object),delete L[F];delete P[I]}delete i[x]}}function E(x){if(i[x.id]===void 0)return;const P=i[x.id];for(const I in P){const L=P[I];for(const F in L)u(L[F].object),delete L[F];delete P[I]}delete i[x.id]}function M(x){for(const P in i){const I=i[P];if(I[x.id]===void 0)continue;const L=I[x.id];for(const F in L)u(L[F].object),delete L[F];delete I[x.id]}}function S(){g(),o=!0,r!==s&&(r=s,c(r.object))}function g(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:g,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function DM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let v=0;v<h;v++)f+=u[v];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let v=0;for(let _=0;_<h;_++)v+=u[_]*d[_];t.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function PM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(M){return!(M!==Zn&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const S=M===en&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ui&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==kn&&!S)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=v>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:A,vertexTextures:T,maxSamples:E}}function IM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Zi,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const v=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const b=r?0:i,w=b*4;let A=p.clippingState||null;l.value=A,A=u(v,d,w,f);for(let T=0;T!==w;++T)A[T]=t[T];p.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,v){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,A=f;w!==_;++w,A+=4)o.copy(h[w]).applyMatrix4(b,a),o.normal.toArray(m,A),m[A+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function LM(n){let e=new WeakMap;function t(o,a){return a===ya?o.mapping=xr:a===_c&&(o.mapping=Ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ya||a===_c)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new S0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ir=4,Ed=[.125,.215,.35,.446,.526,.582],Ts=20,Fl=new Gu,wd=new qe;let Bl=null,kl=0,Hl=0,Vl=!1;const Ss=(1+Math.sqrt(5))/2,Js=1/Ss,Td=[new G(-Ss,Js,0),new G(Ss,Js,0),new G(-Js,0,Ss),new G(Js,0,Ss),new G(0,Ss,-Js),new G(0,Ss,Js),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],UM=new G;class bd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=UM}=r;Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bl,kl,Hl),this._renderer.xr.enabled=Vl,e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bl=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:en,format:Zn,colorSpace:Ds,depthBuffer:!1},s=Cd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NM(r)),this._blurMaterial=OM(r,e,t)}return s}_compileMaterial(e){const t=new An(this._lodPlanes[0],e);this._renderer.compile(t,Fl)}_sceneToCubeUV(e,t,i,s,r){const l=new Rn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(wd),h.toneMapping=ns,h.autoClear=!1;const v=new Du({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new An(new Ns,v);let m=!1;const p=e.background;p?p.isColor&&(v.color.copy(p),e.background=null,m=!0):(v.color.copy(wd),m=!0);for(let b=0;b<6;b++){const w=b%3;w===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):w===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));const A=this._cubeSize;jo(s,w*A,b>2?A:0,A,A),h.setRenderTarget(s),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===xr||e.mapping===Ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;jo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Td[(s-r-1)%Td.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new An(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ts-1),_=r/v,m=isFinite(r)?1+Math.floor(u*_):Ts;m>Ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);const p=[];let b=0;for(let M=0;M<Ts;++M){const S=M/_,g=Math.exp(-S*S/2);p.push(g),M===0?b+=g:M<m&&(b+=2*g)}for(let M=0;M<p.length;M++)p[M]=p[M]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=v,d.mipInt.value=w-i;const A=this._sizeLods[s],T=3*A*(s>w-ir?s-w+ir:0),E=4*(this._cubeSize-A);jo(t,T,E,3*A,2*A),l.setRenderTarget(t),l.render(h,Fl)}}function NM(n){const e=[],t=[],i=[];let s=n;const r=n-ir+1+Ed.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ir?l=Ed[o-n+ir-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,v=6,_=3,m=2,p=1,b=new Float32Array(_*v*f),w=new Float32Array(m*v*f),A=new Float32Array(p*v*f);for(let E=0;E<f;E++){const M=E%3*2/3-1,S=E>2?0:-1,g=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];b.set(g,_*v*E),w.set(d,m*v*E);const x=[E,E,E,E,E,E];A.set(x,p*v*E)}const T=new pn;T.setAttribute("position",new ci(b,_)),T.setAttribute("uv",new ci(w,m)),T.setAttribute("faceIndex",new ci(A,p)),e.push(T),s>ir&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Cd(n,e,t){const i=new ln(n,e,t);return i.texture.mapping=Ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function OM(n,e,t){const i=new Float32Array(Ts),s=new G(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zu(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Rd(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Dd(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function zu(){return`

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
	`}function FM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ya||l===_c,u=l===xr||l===Ar;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new bd(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new bd(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function BM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&dr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function kM(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,v=h.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let w=0,A=b.length;w<A;w+=3){const T=b[w+0],E=b[w+1],M=b[w+2];d.push(T,E,E,M,M,T)}}else if(v!==void 0){const b=v.array;_=v.version;for(let w=0,A=b.length/3-1;w<A;w+=3){const T=w+0,E=w+1,M=w+2;d.push(T,E,E,M,M,T)}}else return;const m=new(jp(d)?tm:em)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function HM(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,v){v!==0&&(n.drawElementsInstanced(i,f,r,d*o,v),t.update(f,i,v))}function u(d,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,v);let m=0;for(let p=0;p<v;p++)m+=f[p];t.update(m,i,1)}function h(d,f,v,_){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,v);let p=0;for(let b=0;b<v;b++)p+=f[b]*_[b];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function VM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function GM(n,e,t){const i=new WeakMap,s=new Nt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let g=function(){M.dispose(),i.delete(a),a.removeEventListener("dispose",g)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let w=0;f===!0&&(w=1),v===!0&&(w=2),_===!0&&(w=3);let A=a.attributes.position.count*w,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*T*4*h),M=new Jp(E,A,T,h);M.type=kn,M.needsUpdate=!0;const S=w*4;for(let x=0;x<h;x++){const P=m[x],I=p[x],L=b[x],F=A*T*4*x;for(let Y=0;Y<P.count;Y++){const B=Y*S;f===!0&&(s.fromBufferAttribute(P,Y),E[F+B+0]=s.x,E[F+B+1]=s.y,E[F+B+2]=s.z,E[F+B+3]=0),v===!0&&(s.fromBufferAttribute(I,Y),E[F+B+4]=s.x,E[F+B+5]=s.y,E[F+B+6]=s.z,E[F+B+7]=0),_===!0&&(s.fromBufferAttribute(L,Y),E[F+B+8]=s.x,E[F+B+9]=s.y,E[F+B+10]=s.z,E[F+B+11]=L.itemSize===4?s.w:1)}}d={count:h,texture:M,size:new Ge(A,T)},i.set(a,d),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const v=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function zM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const hm=new fn,Pd=new om(1,1),dm=new Jp,fm=new s0,pm=new sm,Id=[],Ld=[],Ud=new Float32Array(16),Nd=new Float32Array(9),Od=new Float32Array(4);function br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qa(n,e){let t=Ld[e];t===void 0&&(t=new Int32Array(e),Ld[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function WM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function XM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function YM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function qM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function KM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Od.set(i),n.uniformMatrix2fv(this.addr,!1,Od),Gt(t,i)}}function ZM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Nd.set(i),n.uniformMatrix3fv(this.addr,!1,Nd),Gt(t,i)}}function QM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,i))return;Ud.set(i),n.uniformMatrix4fv(this.addr,!1,Ud),Gt(t,i)}}function jM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function JM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function ey(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function ty(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function ry(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Pd.compareFunction=Qp,r=Pd):r=hm,t.setTexture2D(e||r,s)}function oy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fm,s)}function ay(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||pm,s)}function ly(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||dm,s)}function cy(n){switch(n){case 5126:return WM;case 35664:return XM;case 35665:return YM;case 35666:return qM;case 35674:return KM;case 35675:return ZM;case 35676:return QM;case 5124:case 35670:return jM;case 35667:case 35671:return JM;case 35668:case 35672:return $M;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return ly}}function uy(n,e){n.uniform1fv(this.addr,e)}function hy(n,e){const t=br(e,this.size,2);n.uniform2fv(this.addr,t)}function dy(n,e){const t=br(e,this.size,3);n.uniform3fv(this.addr,t)}function fy(n,e){const t=br(e,this.size,4);n.uniform4fv(this.addr,t)}function py(n,e){const t=br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function my(n,e){const t=br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gy(n,e){const t=br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function vy(n,e){n.uniform1iv(this.addr,e)}function _y(n,e){n.uniform2iv(this.addr,e)}function xy(n,e){n.uniform3iv(this.addr,e)}function Ay(n,e){n.uniform4iv(this.addr,e)}function My(n,e){n.uniform1uiv(this.addr,e)}function yy(n,e){n.uniform2uiv(this.addr,e)}function Sy(n,e){n.uniform3uiv(this.addr,e)}function Ey(n,e){n.uniform4uiv(this.addr,e)}function wy(n,e,t){const i=this.cache,s=e.length,r=Qa(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||hm,r[o])}function Ty(n,e,t){const i=this.cache,s=e.length,r=Qa(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||fm,r[o])}function by(n,e,t){const i=this.cache,s=e.length,r=Qa(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||pm,r[o])}function Cy(n,e,t){const i=this.cache,s=e.length,r=Qa(t,s);Vt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||dm,r[o])}function Ry(n){switch(n){case 5126:return uy;case 35664:return hy;case 35665:return dy;case 35666:return fy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return vy;case 35667:case 35671:return _y;case 35668:case 35672:return xy;case 35669:case 35673:return Ay;case 5125:return My;case 36294:return yy;case 36295:return Sy;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return Cy}}class Dy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cy(t.type)}}class Py{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ry(t.type)}}class Iy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Gl=/(\w+)(\])?(\[|\.)?/g;function Fd(n,e){n.seq.push(e),n.map[e.id]=e}function Ly(n,e,t){const i=n.name,s=i.length;for(Gl.lastIndex=0;;){const r=Gl.exec(i),o=Gl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fd(t,c===void 0?new Dy(a,n,e):new Py(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Iy(a),Fd(t,h)),t=h}}}class da{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Ly(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Bd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Uy=37297;let Ny=0;function Oy(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const kd=new nt;function Fy(n){ct._getMatrix(kd,ct.workingColorSpace,n);const e=`mat3( ${kd.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case Sa:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Hd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Oy(n.getShaderSource(e),o)}else return s}function By(n,e){const t=Fy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ky(n,e){let t;switch(e){case D_:t="Linear";break;case P_:t="Reinhard";break;case I_:t="Cineon";break;case L_:t="ACESFilmic";break;case N_:t="AgX";break;case O_:t="Neutral";break;case U_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jo=new G;function Hy(){ct.getLuminanceCoefficients(Jo);const n=Jo.x.toFixed(4),e=Jo.y.toFixed(4),t=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function Gy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function kr(n){return n!==""}function Vd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(n){return n.replace(Wy,Yy)}const Xy=new Map;function Yy(n,e){let t=st[e];if(t===void 0){const i=Xy.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qc(t)}const qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(n){return n.replace(qy,Ky)}function Ky(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===c_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Qy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case Ar:e="ENVMAP_TYPE_CUBE";break;case Ya:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function Jy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bp:e="ENVMAP_BLENDING_MULTIPLY";break;case C_:e="ENVMAP_BLENDING_MIX";break;case R_:e="ENVMAP_BLENDING_ADD";break}return e}function $y(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function eS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Zy(t),c=Qy(t),u=jy(t),h=Jy(t),d=$y(t),f=Vy(t),v=Gy(r),_=s.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(kr).join(`
`),p.length>0&&(p+=`
`)):(m=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),p=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?st.tonemapping_pars_fragment:"",t.toneMapping!==ns?ky("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,By("linearToOutputTexel",t.outputColorSpace),Hy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),o=Qc(o),o=Vd(o,t),o=Gd(o,t),a=Qc(a),a=Vd(a,t),a=Gd(a,t),o=zd(o),a=zd(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+o,A=b+p+a,T=Bd(s,s.VERTEX_SHADER,w),E=Bd(s,s.FRAGMENT_SHADER,A);s.attachShader(_,T),s.attachShader(_,E),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function M(P){if(n.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(E).trim();let Y=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,E);else{const j=Hd(s,T,"vertex"),X=Hd(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+j+`
`+X)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(L===""||F==="")&&(B=!1);B&&(P.diagnostics={runnable:Y,programLog:I,vertexShader:{log:L,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(T),s.deleteShader(E),S=new da(s,_),g=zy(s,_)}let S;this.getUniforms=function(){return S===void 0&&M(this),S};let g;this.getAttributes=function(){return g===void 0&&M(this),g};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Uy)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ny++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=E,this}let tS=0;class nS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new iS(e),t.set(e,i)),i}}class iS{constructor(e){this.id=tS++,this.code=e,this.usedTimes=0}}function sS(n,e,t,i,s,r,o){const a=new Ru,l=new nS,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return c.add(g),g===0?"uv":`uv${g}`}function m(g,x,P,I,L){const F=I.fog,Y=L.geometry,B=g.isMeshStandardMaterial?I.environment:null,j=(g.isMeshStandardMaterial?t:e).get(g.envMap||B),X=j&&j.mapping===Ya?j.image.height:null,ce=v[g.type];g.precision!==null&&(f=s.getMaxPrecision(g.precision),f!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));const _e=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ie=_e!==void 0?_e.length:0;let le=0;Y.morphAttributes.position!==void 0&&(le=1),Y.morphAttributes.normal!==void 0&&(le=2),Y.morphAttributes.color!==void 0&&(le=3);let Se,Z,O,Me;if(ce){const pt=ri[ce];Se=pt.vertexShader,Z=pt.fragmentShader}else Se=g.vertexShader,Z=g.fragmentShader,l.update(g),O=l.getVertexShaderID(g),Me=l.getFragmentShaderID(g);const me=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),tt=L.isInstancedMesh===!0,Fe=L.isBatchedMesh===!0,St=!!g.map,U=!!g.matcap,N=!!j,C=!!g.aoMap,he=!!g.lightMap,ee=!!g.bumpMap,oe=!!g.normalMap,ne=!!g.displacementMap,ue=!!g.emissiveMap,ie=!!g.metalnessMap,te=!!g.roughnessMap,we=g.anisotropy>0,R=g.clearcoat>0,y=g.dispersion>0,k=g.iridescence>0,K=g.sheen>0,re=g.transmission>0,q=we&&!!g.anisotropyMap,De=R&&!!g.clearcoatMap,Ae=R&&!!g.clearcoatNormalMap,Pe=R&&!!g.clearcoatRoughnessMap,Ue=k&&!!g.iridescenceMap,pe=k&&!!g.iridescenceThicknessMap,Le=K&&!!g.sheenColorMap,Be=K&&!!g.sheenRoughnessMap,ke=!!g.specularMap,Ee=!!g.specularColorMap,je=!!g.specularIntensityMap,H=re&&!!g.transmissionMap,Ce=re&&!!g.thicknessMap,ge=!!g.gradientMap,Oe=!!g.alphaMap,ve=g.alphaTest>0,fe=!!g.alphaHash,He=!!g.extensions;let $e=ns;g.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&($e=n.toneMapping);const Tt={shaderID:ce,shaderType:g.type,shaderName:g.name,vertexShader:Se,fragmentShader:Z,defines:g.defines,customVertexShaderID:O,customFragmentShaderID:Me,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&L._colorsTexture!==null,instancing:tt,instancingColor:tt&&L.instanceColor!==null,instancingMorph:tt&&L.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ds,alphaToCoverage:!!g.alphaToCoverage,map:St,matcap:U,envMap:N,envMapMode:N&&j.mapping,envMapCubeUVHeight:X,aoMap:C,lightMap:he,bumpMap:ee,normalMap:oe,displacementMap:d&&ne,emissiveMap:ue,normalMapObjectSpace:oe&&g.normalMapType===k_,normalMapTangentSpace:oe&&g.normalMapType===Zp,metalnessMap:ie,roughnessMap:te,anisotropy:we,anisotropyMap:q,clearcoat:R,clearcoatMap:De,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Pe,dispersion:y,iridescence:k,iridescenceMap:Ue,iridescenceThicknessMap:pe,sheen:K,sheenColorMap:Le,sheenRoughnessMap:Be,specularMap:ke,specularColorMap:Ee,specularIntensityMap:je,transmission:re,transmissionMap:H,thicknessMap:Ce,gradientMap:ge,opaque:g.transparent===!1&&g.blending===hr&&g.alphaToCoverage===!1,alphaMap:Oe,alphaTest:ve,alphaHash:fe,combine:g.combine,mapUv:St&&_(g.map.channel),aoMapUv:C&&_(g.aoMap.channel),lightMapUv:he&&_(g.lightMap.channel),bumpMapUv:ee&&_(g.bumpMap.channel),normalMapUv:oe&&_(g.normalMap.channel),displacementMapUv:ne&&_(g.displacementMap.channel),emissiveMapUv:ue&&_(g.emissiveMap.channel),metalnessMapUv:ie&&_(g.metalnessMap.channel),roughnessMapUv:te&&_(g.roughnessMap.channel),anisotropyMapUv:q&&_(g.anisotropyMap.channel),clearcoatMapUv:De&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:Be&&_(g.sheenRoughnessMap.channel),specularMapUv:ke&&_(g.specularMap.channel),specularColorMapUv:Ee&&_(g.specularColorMap.channel),specularIntensityMapUv:je&&_(g.specularIntensityMap.channel),transmissionMapUv:H&&_(g.transmissionMap.channel),thicknessMapUv:Ce&&_(g.thicknessMap.channel),alphaMapUv:Oe&&_(g.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(oe||we),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!Y.attributes.uv&&(St||Oe),fog:!!F,useFog:g.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:be,skinning:L.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:le,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:$e,decodeVideoTexture:St&&g.map.isVideoTexture===!0&&ct.getTransfer(g.map.colorSpace)===gt,decodeVideoTextureEmissive:ue&&g.emissiveMap.isVideoTexture===!0&&ct.getTransfer(g.emissiveMap.colorSpace)===gt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===qn,flipSided:g.side===Mn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:He&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&g.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function p(g){const x=[];if(g.shaderID?x.push(g.shaderID):(x.push(g.customVertexShaderID),x.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)x.push(P),x.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(b(x,g),w(x,g),x.push(n.outputColorSpace)),x.push(g.customProgramCacheKey),x.join()}function b(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapCubeUVHeight),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.morphAttributeCount),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)}function w(g,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),g.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),g.push(a.mask)}function A(g){const x=v[g.type];let P;if(x){const I=ri[x];P=Pu.clone(I.uniforms)}else P=g.uniforms;return P}function T(g,x){let P;for(let I=0,L=u.length;I<L;I++){const F=u[I];if(F.cacheKey===x){P=F,++P.usedTimes;break}}return P===void 0&&(P=new eS(n,x,g,r),u.push(P)),P}function E(g){if(--g.usedTimes===0){const x=u.indexOf(g);u[x]=u[u.length-1],u.pop(),g.destroy()}}function M(g){l.remove(g)}function S(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:A,acquireProgram:T,releaseProgram:E,releaseShaderCache:M,programs:u,dispose:S}}function rS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function oS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,v,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:v,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=v,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,v,_,m){const p=o(h,d,f,v,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,v,_,m){const p=o(h,d,f,v,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||oS),i.length>1&&i.sort(d||Xd),s.length>1&&s.sort(d||Xd)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function aS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Yd,n.set(i,[o])):s>=r.length?(o=new Yd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function lS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new qe};break;case"SpotLight":t={position:new G,direction:new G,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function cS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let uS=0;function hS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function dS(n){const e=new lS,t=cS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new Rt,o=new Rt;function a(c){let u=0,h=0,d=0;for(let g=0;g<9;g++)i.probe[g].set(0,0,0);let f=0,v=0,_=0,m=0,p=0,b=0,w=0,A=0,T=0,E=0,M=0;c.sort(hS);for(let g=0,x=c.length;g<x;g++){const P=c[g],I=P.color,L=P.intensity,F=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=I.r*L,h+=I.g*L,d+=I.b*L;else if(P.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(P.sh.coefficients[B],L);M++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const j=P.shadow,X=t.get(P);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=P.shadow.matrix,b++}i.directional[f]=B,f++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(I).multiplyScalar(L),B.distance=F,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,i.spot[_]=B;const j=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,j.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[_]=j.matrix,P.castShadow){const X=t.get(P);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=Y,A++}_++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(I).multiplyScalar(L),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const j=P.shadow,X=t.get(P);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,i.pointShadow[v]=X,i.pointShadowMap[v]=Y,i.pointShadowMatrix[v]=P.shadow.matrix,w++}i.point[v]=B,v++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(L),B.groundColor.copy(P.groundColor).multiplyScalar(L),i.hemi[p]=B,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const S=i.hash;(S.directionalLength!==f||S.pointLength!==v||S.spotLength!==_||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==b||S.numPointShadows!==w||S.numSpotShadows!==A||S.numSpotMaps!==T||S.numLightProbes!==M)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=A+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=M,S.directionalLength=f,S.pointLength=v,S.spotLength=_,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=b,S.numPointShadows=w,S.numSpotShadows=A,S.numSpotMaps=T,S.numLightProbes=M,i.version=uS++)}function l(c,u){let h=0,d=0,f=0,v=0,_=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const w=c[p];if(w.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),h++}else if(w.isSpotLight){const A=i.spot[f];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const A=i.hemi[_];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function qd(n){const e=new dS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new qd(n),e.set(s,[a])):r>=o.length?(a=new qd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const pS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mS=`uniform sampler2D shadow_pass;
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
}`;function gS(n,e,t){let i=new Iu;const s=new Ge,r=new Ge,o=new Nt,a=new lm({depthPacking:Kp}),l=new P0,c={},u=t.maxTextureSize,h={[ls]:Mn,[Mn]:ls,[qn]:qn},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:pS,fragmentShader:mS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new pn;v.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new An(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fp;let p=this.type;this.render=function(E,M,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const g=n.getRenderTarget(),x=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),I=n.state;I.setBlending(jn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const L=p!==Mi&&this.type===Mi,F=p===Mi&&this.type!==Mi;for(let Y=0,B=E.length;Y<B;Y++){const j=E[Y],X=j.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ce=X.getFrameExtents();if(s.multiply(ce),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ce.x),s.x=r.x*ce.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ce.y),s.y=r.y*ce.y,X.mapSize.y=r.y)),X.map===null||L===!0||F===!0){const Ie=this.type!==Mi?{minFilter:In,magFilter:In}:{};X.map!==null&&X.map.dispose(),X.map=new ln(s.x,s.y,Ie),X.map.texture.name=j.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const _e=X.getViewportCount();for(let Ie=0;Ie<_e;Ie++){const le=X.getViewport(Ie);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),I.viewport(o),X.updateMatrices(j,Ie),i=X.getFrustum(),A(M,S,X.camera,j,this.type)}X.isPointLightShadow!==!0&&this.type===Mi&&b(X,S),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(g,x,P)};function b(E,M){const S=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ln(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(M,null,S,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(M,null,S,f,_,null)}function w(E,M,S,g){let x=null;const P=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)x=P;else if(x=S.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const I=x.uuid,L=M.uuid;let F=c[I];F===void 0&&(F={},c[I]=F);let Y=F[L];Y===void 0&&(Y=x.clone(),F[L]=Y,M.addEventListener("dispose",T)),x=Y}if(x.visible=M.visible,x.wireframe=M.wireframe,g===Mi?x.side=M.shadowSide!==null?M.shadowSide:M.side:x.side=M.shadowSide!==null?M.shadowSide:h[M.side],x.alphaMap=M.alphaMap,x.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,x.map=M.map,x.clipShadows=M.clipShadows,x.clippingPlanes=M.clippingPlanes,x.clipIntersection=M.clipIntersection,x.displacementMap=M.displacementMap,x.displacementScale=M.displacementScale,x.displacementBias=M.displacementBias,x.wireframeLinewidth=M.wireframeLinewidth,x.linewidth=M.linewidth,S.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=n.properties.get(x);I.light=S}return x}function A(E,M,S,g,x){if(E.visible===!1)return;if(E.layers.test(M.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Mi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);const L=e.update(E),F=E.material;if(Array.isArray(F)){const Y=L.groups;for(let B=0,j=Y.length;B<j;B++){const X=Y[B],ce=F[X.materialIndex];if(ce&&ce.visible){const _e=w(E,ce,g,x);E.onBeforeShadow(n,E,M,S,L,_e,X),n.renderBufferDirect(S,null,L,_e,E,X),E.onAfterShadow(n,E,M,S,L,_e,X)}}}else if(F.visible){const Y=w(E,F,g,x);E.onBeforeShadow(n,E,M,S,L,Y,null),n.renderBufferDirect(S,null,L,Y,E,null),E.onAfterShadow(n,E,M,S,L,Y,null)}}const I=E.children;for(let L=0,F=I.length;L<F;L++)A(I[L],M,S,g,x)}function T(E){E.target.removeEventListener("dispose",T);for(const S in c){const g=c[S],x=E.target.uuid;x in g&&(g[x].dispose(),delete g[x])}}}const vS={[hc]:dc,[fc]:gc,[pc]:vc,[_r]:mc,[dc]:hc,[gc]:fc,[vc]:pc,[mc]:_r};function _S(n,e){function t(){let H=!1;const Ce=new Nt;let ge=null;const Oe=new Nt(0,0,0,0);return{setMask:function(ve){ge!==ve&&!H&&(n.colorMask(ve,ve,ve,ve),ge=ve)},setLocked:function(ve){H=ve},setClear:function(ve,fe,He,$e,Tt){Tt===!0&&(ve*=$e,fe*=$e,He*=$e),Ce.set(ve,fe,He,$e),Oe.equals(Ce)===!1&&(n.clearColor(ve,fe,He,$e),Oe.copy(Ce))},reset:function(){H=!1,ge=null,Oe.set(-1,0,0,0)}}}function i(){let H=!1,Ce=!1,ge=null,Oe=null,ve=null;return{setReversed:function(fe){if(Ce!==fe){const He=e.get("EXT_clip_control");fe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ce=fe;const $e=ve;ve=null,this.setClear($e)}},getReversed:function(){return Ce},setTest:function(fe){fe?me(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(fe){ge!==fe&&!H&&(n.depthMask(fe),ge=fe)},setFunc:function(fe){if(Ce&&(fe=vS[fe]),Oe!==fe){switch(fe){case hc:n.depthFunc(n.NEVER);break;case dc:n.depthFunc(n.ALWAYS);break;case fc:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case pc:n.depthFunc(n.EQUAL);break;case mc:n.depthFunc(n.GEQUAL);break;case gc:n.depthFunc(n.GREATER);break;case vc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Oe=fe}},setLocked:function(fe){H=fe},setClear:function(fe){ve!==fe&&(Ce&&(fe=1-fe),n.clearDepth(fe),ve=fe)},reset:function(){H=!1,ge=null,Oe=null,ve=null,Ce=!1}}}function s(){let H=!1,Ce=null,ge=null,Oe=null,ve=null,fe=null,He=null,$e=null,Tt=null;return{setTest:function(pt){H||(pt?me(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(pt){Ce!==pt&&!H&&(n.stencilMask(pt),Ce=pt)},setFunc:function(pt,Gn,di){(ge!==pt||Oe!==Gn||ve!==di)&&(n.stencilFunc(pt,Gn,di),ge=pt,Oe=Gn,ve=di)},setOp:function(pt,Gn,di){(fe!==pt||He!==Gn||$e!==di)&&(n.stencilOp(pt,Gn,di),fe=pt,He=Gn,$e=di)},setLocked:function(pt){H=pt},setClear:function(pt){Tt!==pt&&(n.clearStencil(pt),Tt=pt)},reset:function(){H=!1,Ce=null,ge=null,Oe=null,ve=null,fe=null,He=null,$e=null,Tt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],v=null,_=!1,m=null,p=null,b=null,w=null,A=null,T=null,E=null,M=new qe(0,0,0),S=0,g=!1,x=null,P=null,I=null,L=null,F=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=j>=2);let ce=null,_e={};const Ie=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),Se=new Nt().fromArray(Ie),Z=new Nt().fromArray(le);function O(H,Ce,ge,Oe){const ve=new Uint8Array(4),fe=n.createTexture();n.bindTexture(H,fe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<ge;He++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Oe,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(Ce+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return fe}const Me={};Me[n.TEXTURE_2D]=O(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=O(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=O(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=O(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(_r),ee(!1),oe(Wh),me(n.CULL_FACE),C(jn);function me(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function be(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function tt(H,Ce){return h[H]!==Ce?(n.bindFramebuffer(H,Ce),h[H]=Ce,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ce),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Fe(H,Ce){let ge=f,Oe=!1;if(H){ge=d.get(Ce),ge===void 0&&(ge=[],d.set(Ce,ge));const ve=H.textures;if(ge.length!==ve.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,He=ve.length;fe<He;fe++)ge[fe]=n.COLOR_ATTACHMENT0+fe;ge.length=ve.length,Oe=!0}}else ge[0]!==n.BACK&&(ge[0]=n.BACK,Oe=!0);Oe&&n.drawBuffers(ge)}function St(H){return v!==H?(n.useProgram(H),v=H,!0):!1}const U={[ws]:n.FUNC_ADD,[h_]:n.FUNC_SUBTRACT,[d_]:n.FUNC_REVERSE_SUBTRACT};U[f_]=n.MIN,U[p_]=n.MAX;const N={[m_]:n.ZERO,[g_]:n.ONE,[v_]:n.SRC_COLOR,[cc]:n.SRC_ALPHA,[S_]:n.SRC_ALPHA_SATURATE,[M_]:n.DST_COLOR,[x_]:n.DST_ALPHA,[__]:n.ONE_MINUS_SRC_COLOR,[uc]:n.ONE_MINUS_SRC_ALPHA,[y_]:n.ONE_MINUS_DST_COLOR,[A_]:n.ONE_MINUS_DST_ALPHA,[E_]:n.CONSTANT_COLOR,[w_]:n.ONE_MINUS_CONSTANT_COLOR,[T_]:n.CONSTANT_ALPHA,[b_]:n.ONE_MINUS_CONSTANT_ALPHA};function C(H,Ce,ge,Oe,ve,fe,He,$e,Tt,pt){if(H===jn){_===!0&&(be(n.BLEND),_=!1);return}if(_===!1&&(me(n.BLEND),_=!0),H!==u_){if(H!==m||pt!==g){if((p!==ws||A!==ws)&&(n.blendEquation(n.FUNC_ADD),p=ws,A=ws),pt)switch(H){case hr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFunc(n.ONE,n.ONE);break;case Xh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case hr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Xh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,w=null,T=null,E=null,M.set(0,0,0),S=0,m=H,g=pt}return}ve=ve||Ce,fe=fe||ge,He=He||Oe,(Ce!==p||ve!==A)&&(n.blendEquationSeparate(U[Ce],U[ve]),p=Ce,A=ve),(ge!==b||Oe!==w||fe!==T||He!==E)&&(n.blendFuncSeparate(N[ge],N[Oe],N[fe],N[He]),b=ge,w=Oe,T=fe,E=He),($e.equals(M)===!1||Tt!==S)&&(n.blendColor($e.r,$e.g,$e.b,Tt),M.copy($e),S=Tt),m=H,g=!1}function he(H,Ce){H.side===qn?be(n.CULL_FACE):me(n.CULL_FACE);let ge=H.side===Mn;Ce&&(ge=!ge),ee(ge),H.blending===hr&&H.transparent===!1?C(jn):C(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Oe=H.stencilWrite;a.setTest(Oe),Oe&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ue(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(H){x!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),x=H)}function oe(H){H!==a_?(me(n.CULL_FACE),H!==P&&(H===Wh?n.cullFace(n.BACK):H===l_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),P=H}function ne(H){H!==I&&(B&&n.lineWidth(H),I=H)}function ue(H,Ce,ge){H?(me(n.POLYGON_OFFSET_FILL),(L!==Ce||F!==ge)&&(n.polygonOffset(Ce,ge),L=Ce,F=ge)):be(n.POLYGON_OFFSET_FILL)}function ie(H){H?me(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function te(H){H===void 0&&(H=n.TEXTURE0+Y-1),ce!==H&&(n.activeTexture(H),ce=H)}function we(H,Ce,ge){ge===void 0&&(ce===null?ge=n.TEXTURE0+Y-1:ge=ce);let Oe=_e[ge];Oe===void 0&&(Oe={type:void 0,texture:void 0},_e[ge]=Oe),(Oe.type!==H||Oe.texture!==Ce)&&(ce!==ge&&(n.activeTexture(ge),ce=ge),n.bindTexture(H,Ce||Me[H]),Oe.type=H,Oe.texture=Ce)}function R(){const H=_e[ce];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{n.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{n.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{n.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{n.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{n.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ue(){try{n.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{n.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(H){Se.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Se.copy(H))}function Be(H){Z.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Z.copy(H))}function ke(H,Ce){let ge=c.get(Ce);ge===void 0&&(ge=new WeakMap,c.set(Ce,ge));let Oe=ge.get(H);Oe===void 0&&(Oe=n.getUniformBlockIndex(Ce,H.name),ge.set(H,Oe))}function Ee(H,Ce){const Oe=c.get(Ce).get(H);l.get(Ce)!==Oe&&(n.uniformBlockBinding(Ce,Oe,H.__bindingPointIndex),l.set(Ce,Oe))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,_e={},h={},d=new WeakMap,f=[],v=null,_=!1,m=null,p=null,b=null,w=null,A=null,T=null,E=null,M=new qe(0,0,0),S=0,g=!1,x=null,P=null,I=null,L=null,F=null,Se.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:be,bindFramebuffer:tt,drawBuffers:Fe,useProgram:St,setBlending:C,setMaterial:he,setFlipSided:ee,setCullFace:oe,setLineWidth:ne,setPolygonOffset:ue,setScissorTest:ie,activeTexture:te,bindTexture:we,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:Ue,texImage3D:pe,updateUBOMapping:ke,uniformBlockBinding:Ee,texStorage2D:Ae,texStorage3D:Pe,texSubImage2D:K,texSubImage3D:re,compressedTexSubImage2D:q,compressedTexSubImage3D:De,scissor:Le,viewport:Be,reset:je}}function xS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return f?new OffscreenCanvas(R,y):wa("canvas")}function _(R,y,k){let K=1;const re=we(R);if((re.width>k||re.height>k)&&(K=k/Math.max(re.width,re.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(K*re.width),De=Math.floor(K*re.height);h===void 0&&(h=v(q,De));const Ae=y?v(q,De):h;return Ae.width=q,Ae.height=De,Ae.getContext("2d").drawImage(R,0,0,q,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+q+"x"+De+")."),Ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,y,k,K,re=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=y;if(y===n.RED&&(k===n.FLOAT&&(q=n.R32F),k===n.HALF_FLOAT&&(q=n.R16F),k===n.UNSIGNED_BYTE&&(q=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.R8UI),k===n.UNSIGNED_SHORT&&(q=n.R16UI),k===n.UNSIGNED_INT&&(q=n.R32UI),k===n.BYTE&&(q=n.R8I),k===n.SHORT&&(q=n.R16I),k===n.INT&&(q=n.R32I)),y===n.RG&&(k===n.FLOAT&&(q=n.RG32F),k===n.HALF_FLOAT&&(q=n.RG16F),k===n.UNSIGNED_BYTE&&(q=n.RG8)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RG8UI),k===n.UNSIGNED_SHORT&&(q=n.RG16UI),k===n.UNSIGNED_INT&&(q=n.RG32UI),k===n.BYTE&&(q=n.RG8I),k===n.SHORT&&(q=n.RG16I),k===n.INT&&(q=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGB8UI),k===n.UNSIGNED_SHORT&&(q=n.RGB16UI),k===n.UNSIGNED_INT&&(q=n.RGB32UI),k===n.BYTE&&(q=n.RGB8I),k===n.SHORT&&(q=n.RGB16I),k===n.INT&&(q=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),k===n.UNSIGNED_INT&&(q=n.RGBA32UI),k===n.BYTE&&(q=n.RGBA8I),k===n.SHORT&&(q=n.RGBA16I),k===n.INT&&(q=n.RGBA32I)),y===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),y===n.RGBA){const De=re?Sa:ct.getTransfer(K);k===n.FLOAT&&(q=n.RGBA32F),k===n.HALF_FLOAT&&(q=n.RGBA16F),k===n.UNSIGNED_BYTE&&(q=De===gt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function A(R,y){let k;return R?y===null||y===Rs||y===co?k=n.DEPTH24_STENCIL8:y===kn?k=n.DEPTH32F_STENCIL8:y===lo&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Rs||y===co?k=n.DEPTH_COMPONENT24:y===kn?k=n.DEPTH_COMPONENT32F:y===lo&&(k=n.DEPTH_COMPONENT16),k}function T(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==In&&R.minFilter!==dn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function E(R){const y=R.target;y.removeEventListener("dispose",E),S(y),y.isVideoTexture&&u.delete(y)}function M(R){const y=R.target;y.removeEventListener("dispose",M),x(y)}function S(R){const y=i.get(R);if(y.__webglInit===void 0)return;const k=R.source,K=d.get(k);if(K){const re=K[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&g(R),Object.keys(K).length===0&&d.delete(k)}i.remove(R)}function g(R){const y=i.get(R);n.deleteTexture(y.__webglTexture);const k=R.source,K=d.get(k);delete K[y.__cacheKey],o.memory.textures--}function x(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let re=0;re<y.__webglFramebuffer[K].length;re++)n.deleteFramebuffer(y.__webglFramebuffer[K][re]);else n.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)n.deleteFramebuffer(y.__webglFramebuffer[K]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=R.textures;for(let K=0,re=k.length;K<re;K++){const q=i.get(k[K]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(k[K])}i.remove(R)}let P=0;function I(){P=0}function L(){const R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function F(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Y(R,y){const k=i.get(R);if(R.isVideoTexture&&ie(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(k,R,y);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function B(R,y){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Me(k,R,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function j(R,y){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Me(k,R,y);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function X(R,y){const k=i.get(R);if(R.version>0&&k.__version!==R.version){me(k,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}const ce={[xc]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[Ac]:n.MIRRORED_REPEAT},_e={[In]:n.NEAREST,[F_]:n.NEAREST_MIPMAP_NEAREST,[Co]:n.NEAREST_MIPMAP_LINEAR,[dn]:n.LINEAR,[hl]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},Ie={[H_]:n.NEVER,[Y_]:n.ALWAYS,[V_]:n.LESS,[Qp]:n.LEQUAL,[G_]:n.EQUAL,[X_]:n.GEQUAL,[z_]:n.GREATER,[W_]:n.NOTEQUAL};function le(R,y){if(y.type===kn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===dn||y.magFilter===hl||y.magFilter===Co||y.magFilter===Ji||y.minFilter===dn||y.minFilter===hl||y.minFilter===Co||y.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ce[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ce[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ce[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,_e[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,_e[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===In||y.minFilter!==Co&&y.minFilter!==Ji||y.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Se(R,y){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",E));const K=y.source;let re=d.get(K);re===void 0&&(re={},d.set(K,re));const q=F(y);if(q!==R.__cacheKey){re[q]===void 0&&(re[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),re[q].usedTimes++;const De=re[R.__cacheKey];De!==void 0&&(re[R.__cacheKey].usedTimes--,De.usedTimes===0&&g(y)),R.__cacheKey=q,R.__webglTexture=re[q].texture}return k}function Z(R,y,k){return Math.floor(Math.floor(R/k)/y)}function O(R,y,k,K){const q=R.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,k,K,y.data);else{q.sort((pe,Le)=>pe.start-Le.start);let De=0;for(let pe=1;pe<q.length;pe++){const Le=q[De],Be=q[pe],ke=Le.start+Le.count,Ee=Z(Be.start,y.width,4),je=Z(Le.start,y.width,4);Be.start<=ke+1&&Ee===je&&Z(Be.start+Be.count-1,y.width,4)===Ee?Le.count=Math.max(Le.count,Be.start+Be.count-Le.start):(++De,q[De]=Be)}q.length=De+1;const Ae=n.getParameter(n.UNPACK_ROW_LENGTH),Pe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ue=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let pe=0,Le=q.length;pe<Le;pe++){const Be=q[pe],ke=Math.floor(Be.start/4),Ee=Math.ceil(Be.count/4),je=ke%y.width,H=Math.floor(ke/y.width),Ce=Ee,ge=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,je,H,Ce,ge,k,K,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ue)}}function Me(R,y,k){let K=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=n.TEXTURE_3D);const re=Se(R,y),q=y.source;t.bindTexture(K,R.__webglTexture,n.TEXTURE0+k);const De=i.get(q);if(q.version!==De.__version||re===!0){t.activeTexture(n.TEXTURE0+k);const Ae=ct.getPrimaries(ct.workingColorSpace),Pe=y.colorSpace===ji?null:ct.getPrimaries(y.colorSpace),Ue=y.colorSpace===ji||Ae===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let pe=_(y.image,!1,s.maxTextureSize);pe=te(y,pe);const Le=r.convert(y.format,y.colorSpace),Be=r.convert(y.type);let ke=w(y.internalFormat,Le,Be,y.colorSpace,y.isVideoTexture);le(K,y);let Ee;const je=y.mipmaps,H=y.isVideoTexture!==!0,Ce=De.__version===void 0||re===!0,ge=q.dataReady,Oe=T(y,pe);if(y.isDepthTexture)ke=A(y.format===ho,y.type),Ce&&(H?t.texStorage2D(n.TEXTURE_2D,1,ke,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,ke,pe.width,pe.height,0,Le,Be,null));else if(y.isDataTexture)if(je.length>0){H&&Ce&&t.texStorage2D(n.TEXTURE_2D,Oe,ke,je[0].width,je[0].height);for(let ve=0,fe=je.length;ve<fe;ve++)Ee=je[ve],H?ge&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ee.width,Ee.height,Le,Be,Ee.data):t.texImage2D(n.TEXTURE_2D,ve,ke,Ee.width,Ee.height,0,Le,Be,Ee.data);y.generateMipmaps=!1}else H?(Ce&&t.texStorage2D(n.TEXTURE_2D,Oe,ke,pe.width,pe.height),ge&&O(y,pe,Le,Be)):t.texImage2D(n.TEXTURE_2D,0,ke,pe.width,pe.height,0,Le,Be,pe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){H&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,ke,je[0].width,je[0].height,pe.depth);for(let ve=0,fe=je.length;ve<fe;ve++)if(Ee=je[ve],y.format!==Zn)if(Le!==null)if(H){if(ge)if(y.layerUpdates.size>0){const He=Sd(Ee.width,Ee.height,y.format,y.type);for(const $e of y.layerUpdates){const Tt=Ee.data.subarray($e*He/Ee.data.BYTES_PER_ELEMENT,($e+1)*He/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,$e,Ee.width,Ee.height,1,Le,Tt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Ee.width,Ee.height,pe.depth,Le,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,ke,Ee.width,Ee.height,pe.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?ge&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Ee.width,Ee.height,pe.depth,Le,Be,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,ke,Ee.width,Ee.height,pe.depth,0,Le,Be,Ee.data)}else{H&&Ce&&t.texStorage2D(n.TEXTURE_2D,Oe,ke,je[0].width,je[0].height);for(let ve=0,fe=je.length;ve<fe;ve++)Ee=je[ve],y.format!==Zn?Le!==null?H?ge&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Ee.width,Ee.height,Le,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?ge&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Ee.width,Ee.height,Le,Be,Ee.data):t.texImage2D(n.TEXTURE_2D,ve,ke,Ee.width,Ee.height,0,Le,Be,Ee.data)}else if(y.isDataArrayTexture)if(H){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Oe,ke,pe.width,pe.height,pe.depth),ge)if(y.layerUpdates.size>0){const ve=Sd(pe.width,pe.height,y.format,y.type);for(const fe of y.layerUpdates){const He=pe.data.subarray(fe*ve/pe.data.BYTES_PER_ELEMENT,(fe+1)*ve/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,pe.width,pe.height,1,Le,Be,He)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Le,Be,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,pe.width,pe.height,pe.depth,0,Le,Be,pe.data);else if(y.isData3DTexture)H?(Ce&&t.texStorage3D(n.TEXTURE_3D,Oe,ke,pe.width,pe.height,pe.depth),ge&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Le,Be,pe.data)):t.texImage3D(n.TEXTURE_3D,0,ke,pe.width,pe.height,pe.depth,0,Le,Be,pe.data);else if(y.isFramebufferTexture){if(Ce)if(H)t.texStorage2D(n.TEXTURE_2D,Oe,ke,pe.width,pe.height);else{let ve=pe.width,fe=pe.height;for(let He=0;He<Oe;He++)t.texImage2D(n.TEXTURE_2D,He,ke,ve,fe,0,Le,Be,null),ve>>=1,fe>>=1}}else if(je.length>0){if(H&&Ce){const ve=we(je[0]);t.texStorage2D(n.TEXTURE_2D,Oe,ke,ve.width,ve.height)}for(let ve=0,fe=je.length;ve<fe;ve++)Ee=je[ve],H?ge&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Le,Be,Ee):t.texImage2D(n.TEXTURE_2D,ve,ke,Le,Be,Ee);y.generateMipmaps=!1}else if(H){if(Ce){const ve=we(pe);t.texStorage2D(n.TEXTURE_2D,Oe,ke,ve.width,ve.height)}ge&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Le,Be,pe)}else t.texImage2D(n.TEXTURE_2D,0,ke,Le,Be,pe);m(y)&&p(K),De.__version=q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function me(R,y,k){if(y.image.length!==6)return;const K=Se(R,y),re=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+k);const q=i.get(re);if(re.version!==q.__version||K===!0){t.activeTexture(n.TEXTURE0+k);const De=ct.getPrimaries(ct.workingColorSpace),Ae=y.colorSpace===ji?null:ct.getPrimaries(y.colorSpace),Pe=y.colorSpace===ji||De===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ue=y.isCompressedTexture||y.image[0].isCompressedTexture,pe=y.image[0]&&y.image[0].isDataTexture,Le=[];for(let fe=0;fe<6;fe++)!Ue&&!pe?Le[fe]=_(y.image[fe],!0,s.maxCubemapSize):Le[fe]=pe?y.image[fe].image:y.image[fe],Le[fe]=te(y,Le[fe]);const Be=Le[0],ke=r.convert(y.format,y.colorSpace),Ee=r.convert(y.type),je=w(y.internalFormat,ke,Ee,y.colorSpace),H=y.isVideoTexture!==!0,Ce=q.__version===void 0||K===!0,ge=re.dataReady;let Oe=T(y,Be);le(n.TEXTURE_CUBE_MAP,y);let ve;if(Ue){H&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,je,Be.width,Be.height);for(let fe=0;fe<6;fe++){ve=Le[fe].mipmaps;for(let He=0;He<ve.length;He++){const $e=ve[He];y.format!==Zn?ke!==null?H?ge&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,0,0,$e.width,$e.height,ke,$e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,je,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,0,0,$e.width,$e.height,ke,Ee,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,je,$e.width,$e.height,0,ke,Ee,$e.data)}}}else{if(ve=y.mipmaps,H&&Ce){ve.length>0&&Oe++;const fe=we(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,je,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(pe){H?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Le[fe].width,Le[fe].height,ke,Ee,Le[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,je,Le[fe].width,Le[fe].height,0,ke,Ee,Le[fe].data);for(let He=0;He<ve.length;He++){const Tt=ve[He].image[fe].image;H?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,0,0,Tt.width,Tt.height,ke,Ee,Tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,je,Tt.width,Tt.height,0,ke,Ee,Tt.data)}}else{H?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ke,Ee,Le[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,je,ke,Ee,Le[fe]);for(let He=0;He<ve.length;He++){const $e=ve[He];H?ge&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,0,0,ke,Ee,$e.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,je,ke,Ee,$e.image[fe])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),q.__version=re.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function be(R,y,k,K,re,q){const De=r.convert(k.format,k.colorSpace),Ae=r.convert(k.type),Pe=w(k.internalFormat,De,Ae,k.colorSpace),Ue=i.get(y),pe=i.get(k);if(pe.__renderTarget=y,!Ue.__hasExternalTextures){const Le=Math.max(1,y.width>>q),Be=Math.max(1,y.height>>q);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,q,Pe,Le,Be,y.depth,0,De,Ae,null):t.texImage2D(re,q,Pe,Le,Be,0,De,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ue(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,re,pe.__webglTexture,0,ne(y)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,re,pe.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(R,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){const K=y.depthTexture,re=K&&K.isDepthTexture?K.type:null,q=A(y.stencilBuffer,re),De=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=ne(y);ue(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ae,q,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,q,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,q,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,R)}else{const K=y.textures;for(let re=0;re<K.length;re++){const q=K[re],De=r.convert(q.format,q.colorSpace),Ae=r.convert(q.type),Pe=w(q.internalFormat,De,Ae,q.colorSpace),Ue=ne(y);k&&ue(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Pe,y.width,y.height):ue(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ue,Pe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const re=K.__webglTexture,q=ne(y);if(y.depthTexture.format===uo)ue(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(y.depthTexture.format===ho)ue(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function St(R){const y=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const re=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",re)};K.addEventListener("dispose",re),y.__depthDisposeCallback=re}y.__boundDepthTexture=K}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const K=R.texture.mipmaps;K&&K.length>0?Fe(y.__webglFramebuffer[0],R):Fe(y.__webglFramebuffer,R)}else if(k){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=n.createRenderbuffer(),tt(y.__webglDepthbuffer[K],R,!1);else{const re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,q)}}else{const K=R.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),tt(y.__webglDepthbuffer,R,!1);else{const re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function U(R,y,k){const K=i.get(R);y!==void 0&&be(K.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&St(R)}function N(R){const y=R.texture,k=i.get(R),K=i.get(y);R.addEventListener("dispose",M);const re=R.textures,q=R.isWebGLCubeRenderTarget===!0,De=re.length>1;if(De||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=y.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[Ae]=[];for(let Pe=0;Pe<y.mipmaps.length;Pe++)k.__webglFramebuffer[Ae][Pe]=n.createFramebuffer()}else k.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let Ae=0;Ae<y.mipmaps.length;Ae++)k.__webglFramebuffer[Ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(De)for(let Ae=0,Pe=re.length;Ae<Pe;Ae++){const Ue=i.get(re[Ae]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&ue(R)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Ae=0;Ae<re.length;Ae++){const Pe=re[Ae];k.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[Ae]);const Ue=r.convert(Pe.format,Pe.colorSpace),pe=r.convert(Pe.type),Le=w(Pe.internalFormat,Ue,pe,Pe.colorSpace,R.isXRRenderTarget===!0),Be=ne(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,Le,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,k.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),tt(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),le(n.TEXTURE_CUBE_MAP,y);for(let Ae=0;Ae<6;Ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let Pe=0;Pe<y.mipmaps.length;Pe++)be(k.__webglFramebuffer[Ae][Pe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pe);else be(k.__webglFramebuffer[Ae],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let Ae=0,Pe=re.length;Ae<Pe;Ae++){const Ue=re[Ae],pe=i.get(Ue);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),le(n.TEXTURE_2D,Ue),be(k.__webglFramebuffer,R,Ue,n.COLOR_ATTACHMENT0+Ae,n.TEXTURE_2D,0),m(Ue)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,K.__webglTexture),le(Ae,y),y.mipmaps&&y.mipmaps.length>0)for(let Pe=0;Pe<y.mipmaps.length;Pe++)be(k.__webglFramebuffer[Pe],R,y,n.COLOR_ATTACHMENT0,Ae,Pe);else be(k.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,Ae,0);m(y)&&p(Ae),t.unbindTexture()}R.depthBuffer&&St(R)}function C(R){const y=R.textures;for(let k=0,K=y.length;k<K;k++){const re=y[k];if(m(re)){const q=b(R),De=i.get(re).__webglTexture;t.bindTexture(q,De),p(q),t.unbindTexture()}}}const he=[],ee=[];function oe(R){if(R.samples>0){if(ue(R)===!1){const y=R.textures,k=R.width,K=R.height;let re=n.COLOR_BUFFER_BIT;const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=i.get(R),Ae=y.length>1;if(Ae)for(let Ue=0;Ue<y.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const Pe=R.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ue=0;Ue<y.length;Ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ue]);const pe=i.get(y[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,k,K,0,0,k,K,re,n.NEAREST),l===!0&&(he.length=0,ee.length=0,he.push(n.COLOR_ATTACHMENT0+Ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(he.push(q),ee.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let Ue=0;Ue<y.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,De.__webglColorRenderbuffer[Ue]);const pe=i.get(y[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ne(R){return Math.min(s.maxSamples,R.samples)}function ue(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ie(R){const y=o.render.frame;u.get(R)!==y&&(u.set(R,y),R.update())}function te(R,y){const k=R.colorSpace,K=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ds&&k!==ji&&(ct.getTransfer(k)===gt?(K!==Zn||re!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=X,this.rebindTextures=U,this.setupRenderTarget=N,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ue}function AS(n,e){function t(i,s=ji){let r;const o=ct.getTransfer(s);if(i===ui)return n.UNSIGNED_BYTE;if(i===Su)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hp)return n.BYTE;if(i===Vp)return n.SHORT;if(i===lo)return n.UNSIGNED_SHORT;if(i===yu)return n.INT;if(i===Rs)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===en)return n.HALF_FLOAT;if(i===zp)return n.ALPHA;if(i===Wp)return n.RGB;if(i===Zn)return n.RGBA;if(i===uo)return n.DEPTH_COMPONENT;if(i===ho)return n.DEPTH_STENCIL;if(i===Xp)return n.RED;if(i===wu)return n.RED_INTEGER;if(i===Yp)return n.RG;if(i===Tu)return n.RG_INTEGER;if(i===bu)return n.RGBA_INTEGER;if(i===oa||i===aa||i===la||i===ca)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mc||i===yc||i===Sc||i===Ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wc||i===Tc||i===bc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===wc||i===Tc)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cc||i===Rc||i===Dc||i===Pc||i===Ic||i===Lc||i===Uc||i===Nc||i===Oc||i===Fc||i===Bc||i===kc||i===Hc||i===Vc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ic)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Uc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Oc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vc)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ua||i===Gc||i===zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ua)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qp||i===Wc||i===Xc||i===Yc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===co?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const MS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new fn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new hn({vertexShader:MS,fragmentShader:yS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new xo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ES extends Us{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,v=null;const _=new SS,m=t.getContextAttributes();let p=null,b=null;const w=[],A=[],T=new Ge;let E=null;const M=new Rn;M.viewport=new Nt;const S=new Rn;S.viewport=new Nt;const g=[M,S],x=new V0;let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let O=w[Z];return O===void 0&&(O=new Ll,w[Z]=O),O.getTargetRaySpace()},this.getControllerGrip=function(Z){let O=w[Z];return O===void 0&&(O=new Ll,w[Z]=O),O.getGripSpace()},this.getHand=function(Z){let O=w[Z];return O===void 0&&(O=new Ll,w[Z]=O),O.getHandSpace()};function L(Z){const O=A.indexOf(Z.inputSource);if(O===-1)return;const Me=w[O];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||o),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function F(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<w.length;Z++){const O=A[Z];O!==null&&(A[Z]=null,w[Z].disconnect(O))}P=null,I=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,b=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,me=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?ho:uo,me=m.stencil?co:Rs);const tt={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ln(d.textureWidth,d.textureHeight,{format:Zn,type:ui,depthTexture:new om(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ln(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Se.setContext(s),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(Z){for(let O=0;O<Z.removed.length;O++){const Me=Z.removed[O],me=A.indexOf(Me);me>=0&&(A[me]=null,w[me].disconnect(Me))}for(let O=0;O<Z.added.length;O++){const Me=Z.added[O];let me=A.indexOf(Me);if(me===-1){for(let tt=0;tt<w.length;tt++)if(tt>=A.length){A.push(Me),me=tt;break}else if(A[tt]===null){A[tt]=Me,me=tt;break}if(me===-1)break}const be=w[me];be&&be.connect(Me)}}const B=new G,j=new G;function X(Z,O,Me){B.setFromMatrixPosition(O.matrixWorld),j.setFromMatrixPosition(Me.matrixWorld);const me=B.distanceTo(j),be=O.projectionMatrix.elements,tt=Me.projectionMatrix.elements,Fe=be[14]/(be[10]-1),St=be[14]/(be[10]+1),U=(be[9]+1)/be[5],N=(be[9]-1)/be[5],C=(be[8]-1)/be[0],he=(tt[8]+1)/tt[0],ee=Fe*C,oe=Fe*he,ne=me/(-C+he),ue=ne*-C;if(O.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ue),Z.translateZ(ne),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),be[10]===-1)Z.projectionMatrix.copy(O.projectionMatrix),Z.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const ie=Fe+ne,te=St+ne,we=ee-ue,R=oe+(me-ue),y=U*St/te*ie,k=N*St/te*ie;Z.projectionMatrix.makePerspective(we,R,y,k,ie,te),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ce(Z,O){O===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(O.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let O=Z.near,Me=Z.far;_.texture!==null&&(_.depthNear>0&&(O=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),x.near=S.near=M.near=O,x.far=S.far=M.far=Me,(P!==x.near||I!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,I=x.far),M.layers.mask=Z.layers.mask|2,S.layers.mask=Z.layers.mask|4,x.layers.mask=M.layers.mask|S.layers.mask;const me=Z.parent,be=x.cameras;ce(x,me);for(let tt=0;tt<be.length;tt++)ce(be[tt],me);be.length===2?X(x,M,S):x.projectionMatrix.copy(M.projectionMatrix),_e(Z,x,me)};function _e(Z,O,Me){Me===null?Z.matrix.copy(O.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(O.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(O.projectionMatrix),Z.projectionMatrixInverse.copy(O.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=qc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Ie=null;function le(Z,O){if(u=O.getViewerPose(c||o),v=O,u!==null){const Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let me=!1;Me.length!==x.cameras.length&&(x.cameras.length=0,me=!0);for(let Fe=0;Fe<Me.length;Fe++){const St=Me[Fe];let U=null;if(f!==null)U=f.getViewport(St);else{const C=h.getViewSubImage(d,St);U=C.viewport,Fe===0&&(e.setRenderTargetTextures(b,C.colorTexture,C.depthStencilTexture),e.setRenderTarget(b))}let N=g[Fe];N===void 0&&(N=new Rn,N.layers.enable(Fe),N.viewport=new Nt,g[Fe]=N),N.matrix.fromArray(St.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(St.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(U.x,U.y,U.width,U.height),Fe===0&&(x.matrix.copy(N.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),me===!0&&x.cameras.push(N)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const Fe=h.getDepthInformation(Me[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,s.renderState)}}for(let Me=0;Me<w.length;Me++){const me=A[Me],be=w[Me];me!==null&&be!==void 0&&be.update(me,O,c||o)}Ie&&Ie(Z,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),v=null}const Se=new um;Se.setAnimationLoop(le),this.setAnimationLoop=function(Z){Ie=Z},this.dispose=function(){}}}const Ms=new hi,wS=new Rt;function TS(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,nm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,w,A){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,A)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),w=b.envMap,A=b.envMapRotation;w&&(m.envMap.value=w,Ms.copy(A),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(wS.makeRotationFromEuler(Ms)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const A=w.program;i.uniformBlockBinding(b,A)}function c(b,w){let A=s[b.id];A===void 0&&(v(b),A=u(b),s[b.id]=A,b.addEventListener("dispose",m));const T=w.program;i.updateUBOMapping(b,T);const E=e.render.frame;r[b.id]!==E&&(d(b),r[b.id]=E)}function u(b){const w=h();b.__bindingPointIndex=w;const A=n.createBuffer(),T=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,A),A}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const w=s[b.id],A=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,M=A.length;E<M;E++){const S=Array.isArray(A[E])?A[E]:[A[E]];for(let g=0,x=S.length;g<x;g++){const P=S[g];if(f(P,E,g,T)===!0){const I=P.__offset,L=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let Y=0;Y<L.length;Y++){const B=L[Y],j=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,I+F,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,F),F+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,w,A,T){const E=b.value,M=w+"_"+A;if(T[M]===void 0)return typeof E=="number"||typeof E=="boolean"?T[M]=E:T[M]=E.clone(),!0;{const S=T[M];if(typeof E=="number"||typeof E=="boolean"){if(S!==E)return T[M]=E,!0}else if(S.equals(E)===!1)return S.copy(E),!0}return!1}function v(b){const w=b.uniforms;let A=0;const T=16;for(let M=0,S=w.length;M<S;M++){const g=Array.isArray(w[M])?w[M]:[w[M]];for(let x=0,P=g.length;x<P;x++){const I=g[x],L=Array.isArray(I.value)?I.value:[I.value];for(let F=0,Y=L.length;F<Y;F++){const B=L[F],j=_(B),X=A%T,ce=X%j.boundary,_e=X+ce;A+=ce,_e!==0&&T-_e<j.storage&&(A+=T-_e),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=A,A+=j.storage}}}const E=A%T;return E>0&&(A+=T-E),b.__size=A,b.__cache={},this}function _(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){const w=b.target;w.removeEventListener("dispose",m);const A=o.indexOf(w.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class CS{constructor(e={}){const{canvas:t=Z_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const v=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ns,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let T=!1;this._outputColorSpace=Bn;let E=0,M=0,S=null,g=-1,x=null;const P=new Nt,I=new Nt;let L=null;const F=new qe(0);let Y=0,B=t.width,j=t.height,X=1,ce=null,_e=null;const Ie=new Nt(0,0,B,j),le=new Nt(0,0,B,j);let Se=!1;const Z=new Iu;let O=!1,Me=!1;const me=new Rt,be=new Rt,tt=new G,Fe=new Nt,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let U=!1;function N(){return S===null?X:1}let C=i;function he(D,z){return t.getContext(D,z)}try{const D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mu}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",fe,!1),C===null){const z="webgl2";if(C=he(z,D),C===null)throw he(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let ee,oe,ne,ue,ie,te,we,R,y,k,K,re,q,De,Ae,Pe,Ue,pe,Le,Be,ke,Ee,je,H;function Ce(){ee=new BM(C),ee.init(),Ee=new AS(C,ee),oe=new PM(C,ee,e,Ee),ne=new _S(C,ee),oe.reverseDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),ue=new VM(C),ie=new rS,te=new xS(C,ee,ne,ie,oe,Ee,ue),we=new LM(A),R=new FM(A),y=new q0(C),je=new RM(C,y),k=new kM(C,y,ue,je),K=new zM(C,k,y,ue),Le=new GM(C,oe,te),Pe=new IM(ie),re=new sS(A,we,R,ee,oe,je,Pe),q=new TS(A,ie),De=new aS,Ae=new fS(ee),pe=new CM(A,we,R,ne,K,f,l),Ue=new gS(A,K,oe),H=new bS(C,ue,oe,ne),Be=new DM(C,ee,ue),ke=new HM(C,ee,ue),ue.programs=re.programs,A.capabilities=oe,A.extensions=ee,A.properties=ie,A.renderLists=De,A.shadowMap=Ue,A.state=ne,A.info=ue}Ce();const ge=new ES(A,C);this.xr=ge,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const D=ee.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=ee.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(D){D!==void 0&&(X=D,this.setSize(B,j,!1))},this.getSize=function(D){return D.set(B,j)},this.setSize=function(D,z,J=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,j=z,t.width=Math.floor(D*X),t.height=Math.floor(z*X),J===!0&&(t.style.width=D+"px",t.style.height=z+"px"),this.setViewport(0,0,D,z)},this.getDrawingBufferSize=function(D){return D.set(B*X,j*X).floor()},this.setDrawingBufferSize=function(D,z,J){B=D,j=z,X=J,t.width=Math.floor(D*J),t.height=Math.floor(z*J),this.setViewport(0,0,D,z)},this.getCurrentViewport=function(D){return D.copy(P)},this.getViewport=function(D){return D.copy(Ie)},this.setViewport=function(D,z,J,$){D.isVector4?Ie.set(D.x,D.y,D.z,D.w):Ie.set(D,z,J,$),ne.viewport(P.copy(Ie).multiplyScalar(X).round())},this.getScissor=function(D){return D.copy(le)},this.setScissor=function(D,z,J,$){D.isVector4?le.set(D.x,D.y,D.z,D.w):le.set(D,z,J,$),ne.scissor(I.copy(le).multiplyScalar(X).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(D){ne.setScissorTest(Se=D)},this.setOpaqueSort=function(D){ce=D},this.setTransparentSort=function(D){_e=D},this.getClearColor=function(D){return D.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(D=!0,z=!0,J=!0){let $=0;if(D){let W=!1;if(S!==null){const xe=S.texture.format;W=xe===bu||xe===Tu||xe===wu}if(W){const xe=S.texture.type,Re=xe===ui||xe===Rs||xe===lo||xe===co||xe===Su||xe===Eu,Ve=pe.getClearColor(),Ne=pe.getClearAlpha(),Ke=Ve.r,Qe=Ve.g,We=Ve.b;Re?(v[0]=Ke,v[1]=Qe,v[2]=We,v[3]=Ne,C.clearBufferuiv(C.COLOR,0,v)):(_[0]=Ke,_[1]=Qe,_[2]=We,_[3]=Ne,C.clearBufferiv(C.COLOR,0,_))}else $|=C.COLOR_BUFFER_BIT}z&&($|=C.DEPTH_BUFFER_BIT),J&&($|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),pe.dispose(),De.dispose(),Ae.dispose(),ie.dispose(),we.dispose(),R.dispose(),K.dispose(),je.dispose(),H.dispose(),re.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Zu),ge.removeEventListener("sessionend",Qu),us.stop()};function Oe(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const D=ue.autoReset,z=Ue.enabled,J=Ue.autoUpdate,$=Ue.needsUpdate,W=Ue.type;Ce(),ue.autoReset=D,Ue.enabled=z,Ue.autoUpdate=J,Ue.needsUpdate=$,Ue.type=W}function fe(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function He(D){const z=D.target;z.removeEventListener("dispose",He),$e(z)}function $e(D){Tt(D),ie.remove(D)}function Tt(D){const z=ie.get(D).programs;z!==void 0&&(z.forEach(function(J){re.releaseProgram(J)}),D.isShaderMaterial&&re.releaseShaderCache(D))}this.renderBufferDirect=function(D,z,J,$,W,xe){z===null&&(z=St);const Re=W.isMesh&&W.matrixWorld.determinant()<0,Ve=Rm(D,z,J,$,W);ne.setMaterial($,Re);let Ne=J.index,Ke=1;if($.wireframe===!0){if(Ne=k.getWireframeAttribute(J),Ne===void 0)return;Ke=2}const Qe=J.drawRange,We=J.attributes.position;let ot=Qe.start*Ke,mt=(Qe.start+Qe.count)*Ke;xe!==null&&(ot=Math.max(ot,xe.start*Ke),mt=Math.min(mt,(xe.start+xe.count)*Ke)),Ne!==null?(ot=Math.max(ot,0),mt=Math.min(mt,Ne.count)):We!=null&&(ot=Math.max(ot,0),mt=Math.min(mt,We.count));const Ut=mt-ot;if(Ut<0||Ut===1/0)return;je.setup(W,$,Ve,J,Ne);let bt,_t=Be;if(Ne!==null&&(bt=y.get(Ne),_t=ke,_t.setIndex(bt)),W.isMesh)$.wireframe===!0?(ne.setLineWidth($.wireframeLinewidth*N()),_t.setMode(C.LINES)):_t.setMode(C.TRIANGLES);else if(W.isLine){let Xe=$.linewidth;Xe===void 0&&(Xe=1),ne.setLineWidth(Xe*N()),W.isLineSegments?_t.setMode(C.LINES):W.isLineLoop?_t.setMode(C.LINE_LOOP):_t.setMode(C.LINE_STRIP)}else W.isPoints?_t.setMode(C.POINTS):W.isSprite&&_t.setMode(C.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)dr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))_t.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Xe=W._multiDrawStarts,It=W._multiDrawCounts,at=W._multiDrawCount,En=Ne?y.get(Ne).bytesPerElement:1,Fs=ie.get($).currentProgram.getUniforms();for(let wn=0;wn<at;wn++)Fs.setValue(C,"_gl_DrawID",wn),_t.render(Xe[wn]/En,It[wn])}else if(W.isInstancedMesh)_t.renderInstances(ot,Ut,W.count);else if(J.isInstancedBufferGeometry){const Xe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,It=Math.min(J.instanceCount,Xe);_t.renderInstances(ot,Ut,It)}else _t.render(ot,Ut)};function pt(D,z,J){D.transparent===!0&&D.side===qn&&D.forceSinglePass===!1?(D.side=Mn,D.needsUpdate=!0,yo(D,z,J),D.side=ls,D.needsUpdate=!0,yo(D,z,J),D.side=qn):yo(D,z,J)}this.compile=function(D,z,J=null){J===null&&(J=D),p=Ae.get(J),p.init(z),w.push(p),J.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),D!==J&&D.traverseVisible(function(W){W.isLight&&W.layers.test(z.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const $=new Set;return D.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){const Ve=xe[Re];pt(Ve,J,W),$.add(Ve)}else pt(xe,J,W),$.add(xe)}),p=w.pop(),$},this.compileAsync=function(D,z,J=null){const $=this.compile(D,z,J);return new Promise(W=>{function xe(){if($.forEach(function(Re){ie.get(Re).currentProgram.isReady()&&$.delete(Re)}),$.size===0){W(D);return}setTimeout(xe,10)}ee.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Gn=null;function di(D){Gn&&Gn(D)}function Zu(){us.stop()}function Qu(){us.start()}const us=new um;us.setAnimationLoop(di),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(D){Gn=D,ge.setAnimationLoop(D),D===null?us.stop():us.start()},ge.addEventListener("sessionstart",Zu),ge.addEventListener("sessionend",Qu),this.render=function(D,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(z),z=ge.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,z,S),p=Ae.get(D,w.length),p.init(z),w.push(p),be.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(be),Me=this.localClippingEnabled,O=Pe.init(this.clippingPlanes,Me),m=De.get(D,b.length),m.init(),b.push(m),ge.enabled===!0&&ge.isPresenting===!0){const xe=A.xr.getDepthSensingMesh();xe!==null&&ja(xe,z,-1/0,A.sortObjects)}ja(D,z,0,A.sortObjects),m.finish(),A.sortObjects===!0&&m.sort(ce,_e),U=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,U&&pe.addToRenderList(m,D),this.info.render.frame++,O===!0&&Pe.beginShadows();const J=p.state.shadowsArray;Ue.render(J,D,z),O===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,W=m.transmissive;if(p.setupLights(),z.isArrayCamera){const xe=z.cameras;if(W.length>0)for(let Re=0,Ve=xe.length;Re<Ve;Re++){const Ne=xe[Re];Ju($,W,D,Ne)}U&&pe.render(D);for(let Re=0,Ve=xe.length;Re<Ve;Re++){const Ne=xe[Re];ju(m,D,Ne,Ne.viewport)}}else W.length>0&&Ju($,W,D,z),U&&pe.render(D),ju(m,D,z);S!==null&&M===0&&(te.updateMultisampleRenderTarget(S),te.updateRenderTargetMipmap(S)),D.isScene===!0&&D.onAfterRender(A,D,z),je.resetDefaultState(),g=-1,x=null,w.pop(),w.length>0?(p=w[w.length-1],O===!0&&Pe.setGlobalState(A.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ja(D,z,J,$){if(D.visible===!1)return;if(D.layers.test(z.layers)){if(D.isGroup)J=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(z);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Z.intersectsSprite(D)){$&&Fe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(be);const Re=K.update(D),Ve=D.material;Ve.visible&&m.push(D,Re,Ve,J,Fe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Z.intersectsObject(D))){const Re=K.update(D),Ve=D.material;if($&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Fe.copy(D.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Fe.copy(Re.boundingSphere.center)),Fe.applyMatrix4(D.matrixWorld).applyMatrix4(be)),Array.isArray(Ve)){const Ne=Re.groups;for(let Ke=0,Qe=Ne.length;Ke<Qe;Ke++){const We=Ne[Ke],ot=Ve[We.materialIndex];ot&&ot.visible&&m.push(D,Re,ot,J,Fe.z,We)}}else Ve.visible&&m.push(D,Re,Ve,J,Fe.z,null)}}const xe=D.children;for(let Re=0,Ve=xe.length;Re<Ve;Re++)ja(xe[Re],z,J,$)}function ju(D,z,J,$){const W=D.opaque,xe=D.transmissive,Re=D.transparent;p.setupLightsView(J),O===!0&&Pe.setGlobalState(A.clippingPlanes,J),$&&ne.viewport(P.copy($)),W.length>0&&Mo(W,z,J),xe.length>0&&Mo(xe,z,J),Re.length>0&&Mo(Re,z,J),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Ju(D,z,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new ln(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?en:ui,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const xe=p.state.transmissionRenderTarget[$.id],Re=$.viewport||P;xe.setSize(Re.z*A.transmissionResolutionScale,Re.w*A.transmissionResolutionScale);const Ve=A.getRenderTarget(),Ne=A.getActiveCubeFace(),Ke=A.getActiveMipmapLevel();A.setRenderTarget(xe),A.getClearColor(F),Y=A.getClearAlpha(),Y<1&&A.setClearColor(16777215,.5),A.clear(),U&&pe.render(J);const Qe=A.toneMapping;A.toneMapping=ns;const We=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),O===!0&&Pe.setGlobalState(A.clippingPlanes,$),Mo(D,J,$),te.updateMultisampleRenderTarget(xe),te.updateRenderTargetMipmap(xe),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let mt=0,Ut=z.length;mt<Ut;mt++){const bt=z[mt],_t=bt.object,Xe=bt.geometry,It=bt.material,at=bt.group;if(It.side===qn&&_t.layers.test($.layers)){const En=It.side;It.side=Mn,It.needsUpdate=!0,$u(_t,J,$,Xe,It,at),It.side=En,It.needsUpdate=!0,ot=!0}}ot===!0&&(te.updateMultisampleRenderTarget(xe),te.updateRenderTargetMipmap(xe))}A.setRenderTarget(Ve,Ne,Ke),A.setClearColor(F,Y),We!==void 0&&($.viewport=We),A.toneMapping=Qe}function Mo(D,z,J){const $=z.isScene===!0?z.overrideMaterial:null;for(let W=0,xe=D.length;W<xe;W++){const Re=D[W],Ve=Re.object,Ne=Re.geometry,Ke=Re.group;let Qe=Re.material;Qe.allowOverride===!0&&$!==null&&(Qe=$),Ve.layers.test(J.layers)&&$u(Ve,z,J,Ne,Qe,Ke)}}function $u(D,z,J,$,W,xe){D.onBeforeRender(A,z,J,$,W,xe),D.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),W.onBeforeRender(A,z,J,$,D,xe),W.transparent===!0&&W.side===qn&&W.forceSinglePass===!1?(W.side=Mn,W.needsUpdate=!0,A.renderBufferDirect(J,z,$,W,D,xe),W.side=ls,W.needsUpdate=!0,A.renderBufferDirect(J,z,$,W,D,xe),W.side=qn):A.renderBufferDirect(J,z,$,W,D,xe),D.onAfterRender(A,z,J,$,W,xe)}function yo(D,z,J){z.isScene!==!0&&(z=St);const $=ie.get(D),W=p.state.lights,xe=p.state.shadowsArray,Re=W.state.version,Ve=re.getParameters(D,W.state,xe,z,J),Ne=re.getProgramCacheKey(Ve);let Ke=$.programs;$.environment=D.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(D.isMeshStandardMaterial?R:we).get(D.envMap||$.environment),$.envMapRotation=$.environment!==null&&D.envMap===null?z.environmentRotation:D.envMapRotation,Ke===void 0&&(D.addEventListener("dispose",He),Ke=new Map,$.programs=Ke);let Qe=Ke.get(Ne);if(Qe!==void 0){if($.currentProgram===Qe&&$.lightsStateVersion===Re)return th(D,Ve),Qe}else Ve.uniforms=re.getUniforms(D),D.onBeforeCompile(Ve,A),Qe=re.acquireProgram(Ve,Ne),Ke.set(Ne,Qe),$.uniforms=Ve.uniforms;const We=$.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(We.clippingPlanes=Pe.uniform),th(D,Ve),$.needsLights=Pm(D),$.lightsStateVersion=Re,$.needsLights&&(We.ambientLightColor.value=W.state.ambient,We.lightProbe.value=W.state.probe,We.directionalLights.value=W.state.directional,We.directionalLightShadows.value=W.state.directionalShadow,We.spotLights.value=W.state.spot,We.spotLightShadows.value=W.state.spotShadow,We.rectAreaLights.value=W.state.rectArea,We.ltc_1.value=W.state.rectAreaLTC1,We.ltc_2.value=W.state.rectAreaLTC2,We.pointLights.value=W.state.point,We.pointLightShadows.value=W.state.pointShadow,We.hemisphereLights.value=W.state.hemi,We.directionalShadowMap.value=W.state.directionalShadowMap,We.directionalShadowMatrix.value=W.state.directionalShadowMatrix,We.spotShadowMap.value=W.state.spotShadowMap,We.spotLightMatrix.value=W.state.spotLightMatrix,We.spotLightMap.value=W.state.spotLightMap,We.pointShadowMap.value=W.state.pointShadowMap,We.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Qe,$.uniformsList=null,Qe}function eh(D){if(D.uniformsList===null){const z=D.currentProgram.getUniforms();D.uniformsList=da.seqWithValue(z.seq,D.uniforms)}return D.uniformsList}function th(D,z){const J=ie.get(D);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function Rm(D,z,J,$,W){z.isScene!==!0&&(z=St),te.resetTextureUnits();const xe=z.fog,Re=$.isMeshStandardMaterial?z.environment:null,Ve=S===null?A.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ds,Ne=($.isMeshStandardMaterial?R:we).get($.envMap||Re),Ke=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),We=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,mt=!!J.morphAttributes.color;let Ut=ns;$.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ut=A.toneMapping);const bt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,_t=bt!==void 0?bt.length:0,Xe=ie.get($),It=p.state.lights;if(O===!0&&(Me===!0||D!==x)){const sn=D===x&&$.id===g;Pe.setState($,D,sn)}let at=!1;$.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==It.state.version||Xe.outputColorSpace!==Ve||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isBatchedMesh&&Xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xe.instancingMorph===!1&&W.morphTexture!==null||Xe.envMap!==Ne||$.fog===!0&&Xe.fog!==xe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Pe.numPlanes||Xe.numIntersection!==Pe.numIntersection)||Xe.vertexAlphas!==Ke||Xe.vertexTangents!==Qe||Xe.morphTargets!==We||Xe.morphNormals!==ot||Xe.morphColors!==mt||Xe.toneMapping!==Ut||Xe.morphTargetsCount!==_t)&&(at=!0):(at=!0,Xe.__version=$.version);let En=Xe.currentProgram;at===!0&&(En=yo($,z,W));let Fs=!1,wn=!1,Cr=!1;const Dt=En.getUniforms(),Un=Xe.uniforms;if(ne.useProgram(En.program)&&(Fs=!0,wn=!0,Cr=!0),$.id!==g&&(g=$.id,wn=!0),Fs||x!==D){ne.buffers.depth.getReversed()?(me.copy(D.projectionMatrix),j_(me),J_(me),Dt.setValue(C,"projectionMatrix",me)):Dt.setValue(C,"projectionMatrix",D.projectionMatrix),Dt.setValue(C,"viewMatrix",D.matrixWorldInverse);const mn=Dt.map.cameraPosition;mn!==void 0&&mn.setValue(C,tt.setFromMatrixPosition(D.matrixWorld)),oe.logarithmicDepthBuffer&&Dt.setValue(C,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Dt.setValue(C,"isOrthographic",D.isOrthographicCamera===!0),x!==D&&(x=D,wn=!0,Cr=!0)}if(W.isSkinnedMesh){Dt.setOptional(C,W,"bindMatrix"),Dt.setOptional(C,W,"bindMatrixInverse");const sn=W.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Dt.setValue(C,"boneTexture",sn.boneTexture,te))}W.isBatchedMesh&&(Dt.setOptional(C,W,"batchingTexture"),Dt.setValue(C,"batchingTexture",W._matricesTexture,te),Dt.setOptional(C,W,"batchingIdTexture"),Dt.setValue(C,"batchingIdTexture",W._indirectTexture,te),Dt.setOptional(C,W,"batchingColorTexture"),W._colorsTexture!==null&&Dt.setValue(C,"batchingColorTexture",W._colorsTexture,te));const Nn=J.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Le.update(W,J,En),(wn||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,Dt.setValue(C,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Un.envMap.value=Ne,Un.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(Un.envMapIntensity.value=z.environmentIntensity),wn&&(Dt.setValue(C,"toneMappingExposure",A.toneMappingExposure),Xe.needsLights&&Dm(Un,Cr),xe&&$.fog===!0&&q.refreshFogUniforms(Un,xe),q.refreshMaterialUniforms(Un,$,X,j,p.state.transmissionRenderTarget[D.id]),da.upload(C,eh(Xe),Un,te)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(da.upload(C,eh(Xe),Un,te),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Dt.setValue(C,"center",W.center),Dt.setValue(C,"modelViewMatrix",W.modelViewMatrix),Dt.setValue(C,"normalMatrix",W.normalMatrix),Dt.setValue(C,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const sn=$.uniformsGroups;for(let mn=0,Ja=sn.length;mn<Ja;mn++){const hs=sn[mn];H.update(hs,En),H.bind(hs,En)}}return En}function Dm(D,z){D.ambientLightColor.needsUpdate=z,D.lightProbe.needsUpdate=z,D.directionalLights.needsUpdate=z,D.directionalLightShadows.needsUpdate=z,D.pointLights.needsUpdate=z,D.pointLightShadows.needsUpdate=z,D.spotLights.needsUpdate=z,D.spotLightShadows.needsUpdate=z,D.rectAreaLights.needsUpdate=z,D.hemisphereLights.needsUpdate=z}function Pm(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(D,z,J){const $=ie.get(D);$.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ie.get(D.texture).__webglTexture=z,ie.get(D.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,z){const J=ie.get(D);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};const Im=C.createFramebuffer();this.setRenderTarget=function(D,z=0,J=0){S=D,E=z,M=J;let $=!0,W=null,xe=!1,Re=!1;if(D){const Ne=ie.get(D);if(Ne.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(C.FRAMEBUFFER,null),$=!1;else if(Ne.__webglFramebuffer===void 0)te.setupRenderTarget(D);else if(Ne.__hasExternalTextures)te.rebindTextures(D,ie.get(D.texture).__webglTexture,ie.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const We=D.depthTexture;if(Ne.__boundDepthTexture!==We){if(We!==null&&ie.has(We)&&(D.width!==We.image.width||D.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(D)}}const Ke=D.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Re=!0);const Qe=ie.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Qe[z])?W=Qe[z][J]:W=Qe[z],xe=!0):D.samples>0&&te.useMultisampledRTT(D)===!1?W=ie.get(D).__webglMultisampledFramebuffer:Array.isArray(Qe)?W=Qe[J]:W=Qe,P.copy(D.viewport),I.copy(D.scissor),L=D.scissorTest}else P.copy(Ie).multiplyScalar(X).floor(),I.copy(le).multiplyScalar(X).floor(),L=Se;if(J!==0&&(W=Im),ne.bindFramebuffer(C.FRAMEBUFFER,W)&&$&&ne.drawBuffers(D,W),ne.viewport(P),ne.scissor(I),ne.setScissorTest(L),xe){const Ne=ie.get(D.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ne.__webglTexture,J)}else if(Re){const Ne=ie.get(D.texture),Ke=z;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ne.__webglTexture,J,Ke)}else if(D!==null&&J!==0){const Ne=ie.get(D.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ne.__webglTexture,J)}g=-1},this.readRenderTargetPixels=function(D,z,J,$,W,xe,Re,Ve=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ie.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){ne.bindFramebuffer(C.FRAMEBUFFER,Ne);try{const Ke=D.textures[Ve],Qe=Ke.format,We=Ke.type;if(!oe.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=D.width-$&&J>=0&&J<=D.height-W&&(D.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ve),C.readPixels(z,J,$,W,Ee.convert(Qe),Ee.convert(We),xe))}finally{const Ke=S!==null?ie.get(S).__webglFramebuffer:null;ne.bindFramebuffer(C.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(D,z,J,$,W,xe,Re,Ve=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=ie.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne)if(z>=0&&z<=D.width-$&&J>=0&&J<=D.height-W){ne.bindFramebuffer(C.FRAMEBUFFER,Ne);const Ke=D.textures[Ve],Qe=Ke.format,We=Ke.type;if(!oe.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ot),C.bufferData(C.PIXEL_PACK_BUFFER,xe.byteLength,C.STREAM_READ),D.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ve),C.readPixels(z,J,$,W,Ee.convert(Qe),Ee.convert(We),0);const mt=S!==null?ie.get(S).__webglFramebuffer:null;ne.bindFramebuffer(C.FRAMEBUFFER,mt);const Ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Q_(C,Ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ot),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,xe),C.deleteBuffer(ot),C.deleteSync(Ut),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,z=null,J=0){const $=Math.pow(2,-J),W=Math.floor(D.image.width*$),xe=Math.floor(D.image.height*$),Re=z!==null?z.x:0,Ve=z!==null?z.y:0;te.setTexture2D(D,0),C.copyTexSubImage2D(C.TEXTURE_2D,J,0,0,Re,Ve,W,xe),ne.unbindTexture()};const Lm=C.createFramebuffer(),Um=C.createFramebuffer();this.copyTextureToTexture=function(D,z,J=null,$=null,W=0,xe=null){xe===null&&(W!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=W,W=0):xe=0);let Re,Ve,Ne,Ke,Qe,We,ot,mt,Ut;const bt=D.isCompressedTexture?D.mipmaps[xe]:D.image;if(J!==null)Re=J.max.x-J.min.x,Ve=J.max.y-J.min.y,Ne=J.isBox3?J.max.z-J.min.z:1,Ke=J.min.x,Qe=J.min.y,We=J.isBox3?J.min.z:0;else{const Nn=Math.pow(2,-W);Re=Math.floor(bt.width*Nn),Ve=Math.floor(bt.height*Nn),D.isDataArrayTexture?Ne=bt.depth:D.isData3DTexture?Ne=Math.floor(bt.depth*Nn):Ne=1,Ke=0,Qe=0,We=0}$!==null?(ot=$.x,mt=$.y,Ut=$.z):(ot=0,mt=0,Ut=0);const _t=Ee.convert(z.format),Xe=Ee.convert(z.type);let It;z.isData3DTexture?(te.setTexture3D(z,0),It=C.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(te.setTexture2DArray(z,0),It=C.TEXTURE_2D_ARRAY):(te.setTexture2D(z,0),It=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,z.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,z.unpackAlignment);const at=C.getParameter(C.UNPACK_ROW_LENGTH),En=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Fs=C.getParameter(C.UNPACK_SKIP_PIXELS),wn=C.getParameter(C.UNPACK_SKIP_ROWS),Cr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,bt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,bt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ke),C.pixelStorei(C.UNPACK_SKIP_ROWS,Qe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,We);const Dt=D.isDataArrayTexture||D.isData3DTexture,Un=z.isDataArrayTexture||z.isData3DTexture;if(D.isDepthTexture){const Nn=ie.get(D),sn=ie.get(z),mn=ie.get(Nn.__renderTarget),Ja=ie.get(sn.__renderTarget);ne.bindFramebuffer(C.READ_FRAMEBUFFER,mn.__webglFramebuffer),ne.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ja.__webglFramebuffer);for(let hs=0;hs<Ne;hs++)Dt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ie.get(D).__webglTexture,W,We+hs),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ie.get(z).__webglTexture,xe,Ut+hs)),C.blitFramebuffer(Ke,Qe,Re,Ve,ot,mt,Re,Ve,C.DEPTH_BUFFER_BIT,C.NEAREST);ne.bindFramebuffer(C.READ_FRAMEBUFFER,null),ne.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(W!==0||D.isRenderTargetTexture||ie.has(D)){const Nn=ie.get(D),sn=ie.get(z);ne.bindFramebuffer(C.READ_FRAMEBUFFER,Lm),ne.bindFramebuffer(C.DRAW_FRAMEBUFFER,Um);for(let mn=0;mn<Ne;mn++)Dt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Nn.__webglTexture,W,We+mn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Nn.__webglTexture,W),Un?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,sn.__webglTexture,xe,Ut+mn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,sn.__webglTexture,xe),W!==0?C.blitFramebuffer(Ke,Qe,Re,Ve,ot,mt,Re,Ve,C.COLOR_BUFFER_BIT,C.NEAREST):Un?C.copyTexSubImage3D(It,xe,ot,mt,Ut+mn,Ke,Qe,Re,Ve):C.copyTexSubImage2D(It,xe,ot,mt,Ke,Qe,Re,Ve);ne.bindFramebuffer(C.READ_FRAMEBUFFER,null),ne.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Un?D.isDataTexture||D.isData3DTexture?C.texSubImage3D(It,xe,ot,mt,Ut,Re,Ve,Ne,_t,Xe,bt.data):z.isCompressedArrayTexture?C.compressedTexSubImage3D(It,xe,ot,mt,Ut,Re,Ve,Ne,_t,bt.data):C.texSubImage3D(It,xe,ot,mt,Ut,Re,Ve,Ne,_t,Xe,bt):D.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,xe,ot,mt,Re,Ve,_t,Xe,bt.data):D.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,xe,ot,mt,bt.width,bt.height,_t,bt.data):C.texSubImage2D(C.TEXTURE_2D,xe,ot,mt,Re,Ve,_t,Xe,bt);C.pixelStorei(C.UNPACK_ROW_LENGTH,at),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,En),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fs),C.pixelStorei(C.UNPACK_SKIP_ROWS,wn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Cr),xe===0&&z.generateMipmaps&&C.generateMipmap(It),ne.unbindTexture()},this.copyTextureToTexture3D=function(D,z,J=null,$=null,W=0){return dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,z,J,$,W)},this.initRenderTarget=function(D){ie.get(D).__webglFramebuffer===void 0&&te.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?te.setTextureCube(D,0):D.isData3DTexture?te.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?te.setTexture2DArray(D,0):te.setTexture2D(D,0),ne.unbindTexture()},this.resetState=function(){E=0,M=0,S=null,ne.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const mm={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ao{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const RS=new Gu(-1,1,1,-1,0,1);class DS extends pn{constructor(){super(),this.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mt([0,2,0,0,2,0],2))}}const PS=new DS;class gm{constructor(e){this._mesh=new An(PS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,RS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class vm extends Ao{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pu.clone(e.uniforms),this.material=new hn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new gm(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Kd extends Ao{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class IS extends Ao{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class LS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ge);this._width=i.width,this._height=i.height,t=new ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vm(mm),this.copyPass.material.blending=jn,this.clock=new G0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Kd!==void 0&&(o instanceof Kd?i=!0:o instanceof IS&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class US extends Ao{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}class $i extends Ao{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new qe(1,1,1),this.hiddenEdgeColor=new qe(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new Ge(e.x,e.y):new Ge(256,256);const r=Math.round(this.resolution.x/this.downSampleRatio),o=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new ln(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new lm,this.depthMaterial.side=qn,this.depthMaterial.depthPacking=Kp,this.depthMaterial.blending=jn,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=qn,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new ln(this.resolution.x,this.resolution.y,{type:en}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new ln(r,o,{type:en}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new ln(r,o,{type:en}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new ln(Math.round(r/2),Math.round(o/2),{type:en}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new ln(r,o,{type:en}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new ln(Math.round(r/2),Math.round(o/2),{type:en}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;const a=4,l=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(a),this.separableBlurMaterial1.uniforms.texSize.value.set(r,o),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(l),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(o/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=l,this.overlayMaterial=this._getOverlayMaterial();const c=mm;this.copyUniforms=Pu.clone(c.uniforms),this.materialCopy=new hn({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:jn,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new qe,this.oldClearAlpha=1,this._fsQuad=new gm(null),this.tempPulseColor1=new qe,this.tempPulseColor2=new qe,this.textureMatrix=new Rt;function u(h,d){const f=d.isPerspectiveCamera?"perspective":"orthographic";return h.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}render(e,t,i,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);const a=this.renderScene.background,l=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=a,this.renderScene.overrideMaterial=l,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){const c=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(c),this.tempPulseColor2.multiplyScalar(c)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=$i.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=$i.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=$i.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=$i.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){const e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}_changeVisibilityOfSelectedObjects(e){const t=this._visibilityCache;for(const i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}_changeVisibilityOfNonSelectedObjects(e){const t=this._visibilityCache,i=this._selectionCache;function s(r){if(r.isMesh||r.isSprite){if(!i.has(r)){const o=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,o)}}else(r.isPoints||r.isLine)&&(e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e))}this.renderScene.traverse(s)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new hn({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Ge(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <batching_vertex>
					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}_getEdgeDetectionMaterial(){return new hn({uniforms:{maskTexture:{value:null},texSize:{value:new Ge(.5,.5)},visibleEdgeColor:{value:new G(1,1,1)},hiddenEdgeColor:{value:new G(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}_getSeparableBlurMaterial(e){return new hn({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ge(.5,.5)},direction:{value:new Ge(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}_getOverlayMaterial(){return new hn({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:lc,depthTest:!1,depthWrite:!1,transparent:!0})}}$i.BlurDirectionX=new Ge(1,0);$i.BlurDirectionY=new Ge(0,1);const NS={name:"GammaCorrectionShader",uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = sRGBTransferOETF( tex );

		}`},Zd={type:"change"},Wu={type:"start"},_m={type:"end"},$o=new Ka,Qd=new Zi,OS=Math.cos(70*K_.DEG2RAD),Ft=new G,vn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zl=1e-6;class FS extends X0{constructor(e,t=null){super(e,t),this.state=vt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ur.ROTATE,MIDDLE:ur.DOLLY,RIGHT:ur.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Ps,this._lastTargetPosition=new G,this._quat=new Ps().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yd,this._sphericalDelta=new yd,this._scale=1,this._panOffset=new G,this._rotateStart=new Ge,this._rotateEnd=new Ge,this._rotateDelta=new Ge,this._panStart=new Ge,this._panEnd=new Ge,this._panDelta=new Ge,this._dollyStart=new Ge,this._dollyEnd=new Ge,this._dollyDelta=new Ge,this._dollyDirection=new G,this._mouse=new Ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=kS.bind(this),this._onPointerDown=BS.bind(this),this._onPointerUp=HS.bind(this),this._onContextMenu=qS.bind(this),this._onMouseWheel=zS.bind(this),this._onKeyDown=WS.bind(this),this._onTouchStart=XS.bind(this),this._onTouchMove=YS.bind(this),this._onMouseDown=VS.bind(this),this._onMouseMove=GS.bind(this),this._interceptControlDown=KS.bind(this),this._interceptControlUp=ZS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zd),this.update(),this.state=vt.NONE}update(e=null){const t=this.object.position;Ft.copy(t).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=vn:i>Math.PI&&(i-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($o.origin.copy(this.object.position),$o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($o.direction))<OS?this.object.lookAt(this.target):(Qd.setFromNormalAndCoplanarPoint(this.object.up,this.target),$o.intersectPlane(Qd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zl||this._lastTargetPosition.distanceToSquared(this.target)>zl?(this.dispatchEvent(Zd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ft.setFromMatrixColumn(t,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,t){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(t,1):(Ft.setFromMatrixColumn(t,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ge,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function BS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function kS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function HS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_m),this.state=vt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function VS(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ur.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=vt.DOLLY;break;case ur.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=vt.ROTATE}break;case ur.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Wu)}function GS(n){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function zS(n){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(n.preventDefault(),this.dispatchEvent(Wu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(_m))}function WS(n){this.enabled!==!1&&this._handleKeyDown(n)}function XS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case nr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=vt.TOUCH_ROTATE;break;case nr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case nr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=vt.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Wu)}function YS(n){switch(this._trackPointer(n),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=vt.NONE}}function qS(n){this.enabled!==!1&&n.preventDefault()}function KS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ZS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class oi{constructor(e,t){this.objects=e,this.root=t}each(e){return this.objects.forEach(e),this}find(e){const t=[];return this.objects.forEach(i=>{const s=this.root.query(e,i);t.push(...s.objects)}),new oi(t,this.root)}scale(e,t,i){var s;return e===void 0?(s=this.objects[0])==null?void 0:s.scale:(this.each(r=>r.scale.set(e,t,i)),this)}pos(e,t,i){var s;return e===void 0?(s=this.objects[0])==null?void 0:s.position:(this.each(r=>r.position.set(e,t,i)),this)}rot(e,t,i){var s;return e===void 0?(s=this.objects[0])==null?void 0:s.rotation:(typeof e=="object"?this.each(r=>r.quaternion.copy(e)):this.each(r=>r.rotation.set(e,t,i)),this)}material(e,t=!1){var i;return e?(this.each(s=>{const r=Array.isArray(s.material)?s.material:[s.material];(t?r:[r[0]]).forEach(o=>{Object.entries(e).forEach(([a,l])=>{a in o?o[a]=l:console.warn(`Property ${a} not in material`)})})}),this):(i=this.objects[0])==null?void 0:i.material}toggle(){return this.each(e=>e.visible=!e.visible),this}show(e){var t;return e===void 0?(t=this.objects[0])==null?void 0:t.visible:(this.each(i=>i.visible=e),this)}id(e){var t,i;return e?(this.each(s=>{var r;const o=s._threeQueryMeta.id;o&&((r=this.root.idMap.get(o))==null||r.splice(this.root.idMap.get(o).indexOf(s),1)),s._threeQueryMeta.id=e,s.userData.name=`#${e}`,this.root.idMap.has(e)||this.root.idMap.set(e,[]),this.root.idMap.get(e).push(s)}),this):(i=(t=this.objects[0])==null?void 0:t._threeQueryMeta)==null?void 0:i.id}addClass(e){return this.each(t=>{t._threeQueryMeta.classes.add(e),t.userData.name+=` .${e}`,this.root.classMap.has(e)||this.root.classMap.set(e,[]),this.root.classMap.get(e).push(t)}),this}removeClass(e){return this.each(t=>{var i;t._threeQueryMeta.classes.delete(e),t.userData.name=t.userData.name.replace(new RegExp(`\\.${e}`),""),(i=this.root.classMap.get(e))==null||i.splice(this.root.classMap.get(e).indexOf(t),1)}),this}toggleClass(e){return this.each(t=>{t._threeQueryMeta.classes.has(e)?this.removeClass(e):this.addClass(e)}),this}class(){var e,t;return[...((t=(e=this.objects[0])==null?void 0:e._threeQueryMeta)==null?void 0:t.classes)||[]]}parent(e){var t;if(!e)return(t=this.objects[0])==null?void 0:t.parent;const i=e instanceof oi?e.objects[0]:e;return this.each(s=>i.add(s)),this}clone(){const e=this.objects.map(t=>t.clone(!0));return new oi(e,this.root)}object(){return this.objects.length===1?this.objects[0]:this.objects}on(e,t){const i=this.root.eventRegistry;return i.has(e)||i.set(e,new Map),this.objects.forEach(s=>{i.get(e).has(s)||i.get(e).set(s,new Set),i.get(e).get(s).add(t)}),this}off(e,t){const i=this.root.eventRegistry;return i.has(e)?(this.objects.forEach(s=>{const r=i.get(e);r.has(s)&&(t?(r.get(s).delete(t),r.get(s).size===0&&r.delete(s)):r.delete(s))}),i.get(e).size===0&&i.delete(e),this):this}}class Wl{constructor({object:e,root:t,originalEvent:i,raycast:s,x:r,y:o}){this.target=new oi([e],t),this.originalEvent=i,this.raycast=s,this.time=(i==null?void 0:i.timeStamp)||performance.now(),this.x=r,this.y=o,this.button=(i==null?void 0:i.button)??null,this.deltaY=(i==null?void 0:i.deltaY)??null}}class Oi{constructor(e,t,i){this.scene=e,this.idMap=new Map,this.classMap=new Map,this.loaders=new Map,this.eventRegistry=new Map,this.mouse={x:0,y:0},this.raycastCache={x:null,y:null,results:[]},this.lastIntersections=new Set,this.renderer=null,this.camera=null,this.scan(e),t&&this.setRenderer(t),i&&this.setCamera(i),this.$=this.$.bind(this)}setRenderer(e){this.renderer=e;const t=e.domElement;this._boundMouseMove=s=>{const r=t.getBoundingClientRect();this.mouse.x=(s.clientX-r.left)/r.width*2-1,this.mouse.y=-((s.clientY-r.top)/r.height)*2+1,(this.eventRegistry.has("mousemove")||this.eventRegistry.has("mouseenter")||this.eventRegistry.has("mouseleave"))&&this._handleMouseEvent("mousemove",s)},t.addEventListener("mousemove",this._boundMouseMove),this._boundEvents={},["click","dblclick","mousedown","mouseup","wheel"].forEach(s=>{this._boundEvents[s]=r=>this._handleMouseEvent(s,r),t.addEventListener(s,this._boundEvents[s])});const i=e.onAfterRender;e.onAfterRender=()=>{i&&i(),this.raycastCache.results=[],this.raycastCache.x=null,this.raycastCache.y=null}}setCamera(e){this.camera=e}addLoader(e,t){this.loaders.set(e,t)}async loadGeometry(e,t){const i=this.loaders.get(e);if(!i)throw new Error(`No loader for type ${e}`);const s=await i(t);return this.scan(s),s}scan(e){e.traverse(t=>{if(!t.userData.name)return;const{id:i,classes:s}=Oi.parseName(t.userData.name);i&&(this.idMap.has(i)||this.idMap.set(i,[]),this.idMap.get(i).push(t));for(let r of s)this.classMap.has(r)||this.classMap.set(r,[]),this.classMap.get(r).push(t);t._threeQueryMeta={id:i,classes:new Set(s)}})}static parseName(e){const t=e.match(/#(\w+)/),i=[...e.matchAll(/\.(\w+)/g)].map(s=>s[1]);return{id:t?t[1]:null,classes:i||[]}}query(e,t=this.scene){if(e==="*"){const r=[];return t.traverse(o=>r.push(o)),new oi(r,this)}if(e instanceof Ht)return new oi([e],this);if(Array.isArray(e)&&e.every(r=>r instanceof Ht))return new oi(e,this);if(typeof e=="string"&&e.includes(",")){const r=e.split(",").map(a=>a.trim()),o=new Set;return r.forEach(a=>{this.query(a,t).objects.forEach(l=>o.add(l))}),new oi([...o],this)}let i=/\s/.test(e)?e.trim().split(/\s+/):[e.trim()];const s=(r,o)=>{if(o>=i.length)return r;const a=i[o];let l=new Set;return r.forEach(c=>{c.children.forEach(u=>{u.traverse(h=>{Oi.matches(h,a)&&l.add(h)})})}),s(l,o+1)};return new oi([...s(new Set([t]),0)],this)}static matches(e,t){if(!e._threeQueryMeta)return!1;const{id:i,classes:s}=e._threeQueryMeta,r=t.match(/^#(\w+)/),o=[...t.matchAll(/\.(\w+)/g)].map(a=>a[1]);if(!r&&o.length===0||r&&i!==r[1])return!1;for(let a of o)if(!s.has(a))return!1;return!0}$(e){return this.query(e)}_handleMouseEvent(e,t){this.renderer.domElement;const i=this.eventRegistry.get(e);if((!i||i.size===0)&&e!=="mousemove")return;const{x:s,y:r}=this.mouse;if(this.raycastCache.x!==s||this.raycastCache.y!==r){const l=new Kc;l.setFromCamera({x:s,y:r},this.camera),this.raycastCache.results=l.intersectObjects(this.scene.children,!0),this.raycastCache.x=s,this.raycastCache.y=r}const o=new Set,a=[];for(const l of this.raycastCache.results)o.has(l.object)||(o.add(l.object),a.push(l));if(e==="mousemove"&&this._handleEnterLeave(a,t),!(!i||i.size===0))for(const l of a){const c=l.object;if(!i.has(c))continue;const u=i.get(c);if(!u)continue;const h=new Wl({object:c,root:this,originalEvent:t,raycast:l,x:s,y:r});this._dispatchCallbacks(u,h,e)}}_handleEnterLeave(e,t){const i=new Set(e.map(l=>l.object)),s=new Set,r=new Set;for(const l of i)this.lastIntersections.has(l)||s.add(l);for(const l of this.lastIntersections)i.has(l)||r.add(l);this.lastIntersections=i;const o=this.eventRegistry.get("mouseenter");if(o)for(const l of s){const c=o.get(l);if(!c)continue;const u=e.find(d=>d.object===l),h=new Wl({object:l,root:this,originalEvent:t,raycast:u,x:this.mouse.x,y:this.mouse.y});this._dispatchCallbacks(c,h,"mouseenter")}const a=this.eventRegistry.get("mouseleave");if(a)for(const l of r){const c=a.get(l);if(!c)continue;const u=new Wl({object:l,root:this,originalEvent:t,raycast:null,x:this.mouse.x,y:this.mouse.y});this._dispatchCallbacks(c,u,"mouseleave")}}_dispatchCallbacks(e,t,i){for(const s of e)try{s(t)}catch(r){console.error(`ThreeQuery: error in ${i} callback:`,r)}}destroy(){if(!this.renderer)return;const e=this.renderer.domElement;e.removeEventListener("mousemove",this._boundMouseMove),["click","dblclick","mousedown","mouseup","wheel"].forEach(t=>{var i;e.removeEventListener(t,(i=this._boundEvents)==null?void 0:i[t])}),this.eventRegistry.clear(),this.lastIntersections.clear(),this.raycastCache={x:null,y:null,results:[]},this.mouse={x:0,y:0},this.renderer=null,this._boundMouseMove=null,this._boundEvents=null}}Oi.createScene=function(n,e={}){const t=new w0;return Oi.useScene(t,n,e)};Oi.useScene=function(n,e,{autoSize:t=!0,autoRender:i=!0,onRender:s=null,addCube:r=!1,addLights:o=!1,addControls:a=!1}={}){const l=new Rn(75,e.clientWidth/e.clientHeight,.1,1e3);l.position.set(0,0,3);const c=new CS({antialias:!0});c.setSize(e.clientWidth,e.clientHeight),e.appendChild(c.domElement);let u=null;if(t){const v=()=>{const _=e.clientWidth,m=e.clientHeight;l.aspect=_/m,l.updateProjectionMatrix(),c.setSize(_,m),i&&c.render(n,l)};u=new ResizeObserver(v),u.observe(e)}let h=null;a&&(h=new FS(l,c.domElement),h.enableDamping=!0);let d=null;if(o){const v=new H0(16777215,.6),_=new k0(16777215,.8);_.position.set(5,5,5),n.add(v,_),d={ambientLight:v,directionalLight:_}}let f=null;if(r){const v=new Ns,_=new am({color:"red"}),m=new An(v,_);m.userData.name="#defaultCube .red .box",n.add(m),f={geometry:v,material:_,object:m}}if(i){let v=function(){requestAnimationFrame(v),s&&s(),h&&h.update(),c.render(n,l)};v()}return{scene:n,renderer:c,camera:l,controls:h,cube:f,lights:d,resizeObserver:u}};class QS extends O0{constructor(e){super(e),this.type=en}parse(e){const o=function(S,g){switch(S){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(g||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(g||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(g||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(g||""))}},u=`
`,h=function(S,g,x){g=g||1024;let I=S.pos,L=-1,F=0,Y="",B=String.fromCharCode.apply(null,new Uint16Array(S.subarray(I,I+128)));for(;0>(L=B.indexOf(u))&&F<g&&I<S.byteLength;)Y+=B,F+=B.length,I+=128,B+=String.fromCharCode.apply(null,new Uint16Array(S.subarray(I,I+128)));return-1<L?(S.pos+=F+L+1,Y+B.slice(0,L)):!1},d=function(S){const g=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let Y,B;for((S.pos>=S.byteLength||!(Y=h(S)))&&o(1,"no header found"),(B=Y.match(g))||o(3,"bad initial token"),F.valid|=1,F.programtype=B[1],F.string+=Y+`
`;Y=h(S),Y!==!1;){if(F.string+=Y+`
`,Y.charAt(0)==="#"){F.comments+=Y+`
`;continue}if((B=Y.match(x))&&(F.gamma=parseFloat(B[1])),(B=Y.match(P))&&(F.exposure=parseFloat(B[1])),(B=Y.match(I))&&(F.valid|=2,F.format=B[1]),(B=Y.match(L))&&(F.valid|=4,F.height=parseInt(B[1],10),F.width=parseInt(B[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},f=function(S,g,x){const P=g;if(P<8||P>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);P!==(S[2]<<8|S[3])&&o(3,"wrong scanline width");const I=new Uint8Array(4*g*x);I.length||o(4,"unable to allocate buffer space");let L=0,F=0;const Y=4*P,B=new Uint8Array(4),j=new Uint8Array(Y);let X=x;for(;X>0&&F<S.byteLength;){F+4>S.byteLength&&o(1),B[0]=S[F++],B[1]=S[F++],B[2]=S[F++],B[3]=S[F++],(B[0]!=2||B[1]!=2||(B[2]<<8|B[3])!=P)&&o(3,"bad rgbe scanline format");let ce=0,_e;for(;ce<Y&&F<S.byteLength;){_e=S[F++];const le=_e>128;if(le&&(_e-=128),(_e===0||ce+_e>Y)&&o(3,"bad scanline data"),le){const Se=S[F++];for(let Z=0;Z<_e;Z++)j[ce++]=Se}else j.set(S.subarray(F,F+_e),ce),ce+=_e,F+=_e}const Ie=P;for(let le=0;le<Ie;le++){let Se=0;I[L]=j[le+Se],Se+=P,I[L+1]=j[le+Se],Se+=P,I[L+2]=j[le+Se],Se+=P,I[L+3]=j[le+Se],L+=4}X--}return I},v=function(S,g,x,P){const I=S[g+3],L=Math.pow(2,I-128)/255;x[P+0]=S[g+0]*L,x[P+1]=S[g+1]*L,x[P+2]=S[g+2]*L,x[P+3]=1},_=function(S,g,x,P){const I=S[g+3],L=Math.pow(2,I-128)/255;x[P+0]=Fo.toHalfFloat(Math.min(S[g+0]*L,65504)),x[P+1]=Fo.toHalfFloat(Math.min(S[g+1]*L,65504)),x[P+2]=Fo.toHalfFloat(Math.min(S[g+2]*L,65504)),x[P+3]=Fo.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const p=d(m),b=p.width,w=p.height,A=f(m.subarray(m.pos),b,w);let T,E,M;switch(this.type){case kn:M=A.length/4;const S=new Float32Array(M*4);for(let x=0;x<M;x++)v(A,x*4,S,x*4);T=S,E=kn;break;case en:M=A.length/4;const g=new Uint16Array(M*4);for(let x=0;x<M;x++)_(A,x*4,g,x*4);T=g,E=en;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:b,height:w,data:T,header:p.string,gamma:p.gamma,exposure:p.exposure,type:E}}setDataType(e){return this.type=e,this}load(e,t,i,s){function r(o,a){switch(o.type){case kn:case en:o.colorSpace=Ds,o.minFilter=dn,o.magFilter=dn,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,i,s)}}const Da=class Da{constructor(e){this.app=e;const t=document.createElement("div");this.sceneDetails=Oi.createScene(t,{autoSize:!1,autoRender:!1,addLights:!0,addControls:!1,addCube:!1}),this.scene=this.sceneDetails.scene,this.lights=this.sceneDetails.lights,this.lights.directionalLight.position.set(5,10,5),this.lights.directionalLight.intensity=2.5,this.gridHelper=new z0(10,10),this.gridHelper.visible=!1,this.scene.add(this.gridHelper),this.gridPlane=new An(new xo(10,10),new Du({visible:!1})),this.gridPlane.rotateX(-Math.PI/2),this.scene.add(this.gridPlane),this.axesHelper=new W0(2),this.axesHelper.visible=!1,this.scene.add(this.axesHelper),this.loadHDR(),this.selectedItem={id:se(null),item:null,name:se(""),mesh:null,visible:se(!0),position:{x:se(0),y:se(0),z:se(0)},rotation:{x:se(0),y:se(0),z:se(0)},scale:{x:se(1),y:se(1),z:se(1)},color:se("#000000"),roughness:se(.5),metalness:se(.5),wireframe:se(!1)},this.sceneItems=Dn([]),this._eventListeners={},this.addDemoItems(),this.watchSelection()}async loadHDR(e="/img/hdr/venice_sunset_1k.hdr"){const t=new QS;return new Promise((i,s)=>{t.load(e,r=>{r.mapping=ya,this.scene.environment=r,this.scene.background=r,this.hdrTexture=r,this.showHDR(!1),i(r)},void 0,s)})}addDemoItems(){this.addItem("Cube");const e=this.addItem("Sphere"),t=this.addItem("Torus");e.mesh.position.set(2,0,0),t.mesh.position.set(-2,0,0),this.sceneItems.value.length>0&&this.selectItem(this.sceneItems.value[0])}showHDR(e=!0){var t;this.hdrTexture&&(this.scene.background=e?this.hdrTexture:null,(t=this.threeBits)!=null&&t.renderer&&this.threeBits.renderer.setClearAlpha(e?1:0))}showGrid(e=!0){this.gridHelper&&(this.gridHelper.visible=e)}showAxes(e=!0){this.axesHelper&&(this.axesHelper.visible=e)}toggleLights(e=!0){if(this.lights){const{ambientLight:t,directionalLight:i}=this.lights;t&&(t.visible=e),i&&(i.visible=e)}e?this.scene.environment=this.hdrTexture||null:this.scene.environment=null}getThreeColor(e){if(e instanceof qe)return e;try{if(typeof e=="number")return new qe(e);if(typeof e!="string")throw new Error("Color must be a string or number");let t=e.trim();if(/^([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(t))return t=`#${t}`,new qe(t);const i=t.match(/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)/i);if(i){const s=parseInt(i[1]),r=parseInt(i[2]),o=parseInt(i[3]);return new qe(s/255,r/255,o/255)}return new qe(t.toLowerCase())}catch(t){return console.warn(`Could not parse color "${e}": ${t.message}`),new qe(0)}}watchSelection(){const e=(t,i)=>{et(()=>t.x.value,s=>{this.selectedItem.mesh[i].x=s}),et(()=>t.y.value,s=>{this.selectedItem.mesh[i].y=s}),et(()=>t.z.value,s=>{this.selectedItem.mesh[i].z=s})};et(this.selectedItem.name,t=>{this.selectedItem.item.name.value=t}),et(this.selectedItem.visible,t=>{this.selectedItem.item.mesh.visible=t}),e(this.selectedItem.position,"position"),e(this.selectedItem.rotation,"rotation"),e(this.selectedItem.scale,"scale"),et(this.selectedItem.color,t=>{t=this.getThreeColor(t),this.selectedItem.item.mesh.material.color.set(t)}),et(this.selectedItem.roughness,t=>{this.selectedItem.item.mesh.material.roughness=t}),et(this.selectedItem.metalness,t=>{this.selectedItem.item.mesh.material.metalness=t}),et(this.selectedItem.wireframe,t=>{this.selectedItem.item.mesh.material.wireframe=t})}selectItem(e){e instanceof An&&(e=this.sceneItems.value.find(o=>o.mesh===e));const t=typeof e=="object"?e.id:parseInt(e,10),i=this.sceneItems.value.find(r=>r.id===t),s=(r,o)=>{r.x.value=o.x,r.y.value=o.y,r.z.value=o.z};return i?(this.selectedItem.item=i,this.selectedItem.mesh=i.mesh,this.selectedItem.id.value=i.id,this.selectedItem.name.value=i.name.value,this.selectedItem.visible.value=i.mesh.visible,s(this.selectedItem.position,i.mesh.position),s(this.selectedItem.rotation,i.mesh.rotation),s(this.selectedItem.scale,i.mesh.scale),this.selectedItem.color.value="#"+i.mesh.material.color.getHexString(),this.selectedItem.roughness.value=i.mesh.material.roughness,this.selectedItem.metalness.value=i.mesh.material.metalness,this.selectedItem.wireframe.value=i.mesh.material.wireframe,!0):(this.selectedItem.id=null,this.selectedItem.item=null,!1)}selectNone(){return this.selectedItem.id.value=null,this.selectedItem.item.value=null,!0}addItem(e){const t=this.getGeometryByKind(e);if(!t)return null;const i=new am({color:new qe(Math.random(),Math.random(),Math.random())}),s=new An(t,i);this.scene.add(s),s.userData.clickable=!0;const r=this.generateUniqueName(e),o={id:Da.itemIDCounter++,mesh:s,name:se(r)};return this.sceneItems.value=[...this.sceneItems.value,o],this.emitEvent("items-added",this.sceneItems.value,[o]),o}removeItem(e){const t=typeof e=="object"?e.id:parseInt(e,10),i=this.sceneItems.value.find(s=>s.id===t);return i?(this.emitEvent("before-items-removed",this.sceneItems.value,[i]),this.scene.remove(i.mesh),i.mesh.geometry&&i.mesh.geometry.dispose(),i.mesh.material&&i.mesh.material.dispose(),this.selectNone(),this.sceneItems.value=this.sceneItems.value.filter(s=>s.id!==t),this.emitEvent("items-removed",this.sceneItems.value),!0):!1}getItemByID(e){return e=parseInt(e,10),this.sceneItems.value.find(t=>t.id===e)||null}on(e,t){this._eventListeners[e]||(this._eventListeners[e]=new Set),this._eventListeners[e].add(t)}off(e,t){this._eventListeners[e]&&this._eventListeners[e].delete(t)}emitEvent(e,...t){const i=this._eventListeners[e];if(i)for(const s of i)s(...t)}getGeometryByKind(e){switch(e.toLowerCase()){case"cube":return new Ns(1,1,1);case"sphere":return new Bu(.75,32,32);case"cone":return new Uu(.5,1,32);case"cylinder":return new Za(.5,.5,1,32);case"torus":return new Hu(.6,.2,16,100);case"dodecahedron":return new Nu(.7);case"icosahedron":return new Ou(.7);case"octahedron":return new Fu(.7);case"tetrahedron":return new ku(.7);default:return null}}generateUniqueName(e){e=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();const t=this.sceneItems.value.map(s=>s.name.value);if(!t.includes(e))return e;let i=1;for(;t.includes(`${e} ${i}`);)i++;return`${e} ${i}`}};$a(Da,"itemIDCounter",1);let jc=Da;class jS{constructor(e){this.app=e,this.assets=Dn([{id:1,name:"Cube"},{id:2,name:"Sphere"},{id:3,name:"Torus"},{id:4,name:"Cone"},{id:5,name:"Cylinder"},{id:6,name:"Dodecahedron"},{id:7,name:"Icosahedron"},{id:8,name:"Octahedron"},{id:9,name:"Tetrahedron"}])}}const Jr=class Jr{constructor(e){this.app=e,this.notes=Dn([]),this.addDemoNotes()}addDemoNotes(){const e=this.addNote();this.setNoteName(e.id,"Welcome Note"),this.setNoteContent(e.id,`This is a demo note to show how the note-taking system works.
			

You can add, remove, and update notes as you wish.
			

Enjoy! :)`);const t=this.addNote();this.setNoteName(t.id,"Fun Note"),this.setNoteContent(t.id,`This is a fun note to show how the note-taking system works.
			

You can add, remove, and update notes as you wish.
			

Have fun! :)`);const i=this.addNote();this.setNoteName(i.id,"Third Note"),this.setNoteContent(i.id,`This is the third note to show how the note-taking system works.
			

You can add, remove, and update notes as you wish.
			

This is just a demo note.`)}addNote(){const e={id:Jr.noteIDCounter++,title:se(`Note ${Jr.noteIDCounter}`),content:se(""),createdAt:new Date,updatedAt:se(new Date)};return this.notes.value=[...this.notes.value,e],e}getNoteByID(e){return e=parseInt(e,10),this.notes.value.find(i=>i.id===e)||null}deleteNote(e){if(e==null||typeof e!="object"||!e.id)return!1;this.deleteNoteByID(e.id)}deleteNoteByID(e){e=parseInt(e,10),this.notes.value=this.notes.value.filter(t=>t.id!==e)}setNoteName(e,t){const i=this.getNoteByID(e);return i==null?!1:(i.title.value=t,i.updatedAt.value=new Date,i)}setNoteContent(e,t){const i=this.getNoteByID(e);return i==null?!1:(i.content.value=t,i.updatedAt.value=new Date,i)}};$a(Jr,"noteIDCounter",1);let Jc=Jr;class JS{constructor(e){this.app=e,this.showGrids=se(!0),this.showAxes=se(!0),this.backgroundColor=se("#333333"),this.showHDRBackground=se(!1),this.lightingEnabled=se(!0),this.ambientLightIntensity=se(.5),this.directionalLightIntensity=se(.5),this.setUpWatches()}setUpWatches(){et(()=>this.showGrids.value,e=>{this.app.sceneMgr.showGrid(e)},{immediate:!0}),et(()=>this.showAxes.value,e=>{this.app.sceneMgr.showAxes(e)},{immediate:!0}),et(()=>this.showHDRBackground.value,e=>{this.app.sceneMgr.showHDR(e)},{immediate:!0}),et(()=>this.lightingEnabled.value,e=>{this.app.sceneMgr.toggleLights(e)},{immediate:!0}),et(()=>this.ambientLightIntensity.value,e=>{this.app.sceneMgr.lights.ambientLight.intensity=e},{immediate:!0}),et(()=>this.directionalLightIntensity.value,e=>{this.app.sceneMgr.lights.directionalLight.intensity=e},{immediate:!0})}registerWatches(e){return[]}}var $S=Object.defineProperty,eE=(n,e,t)=>e in n?$S(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,tn=(n,e,t)=>(eE(n,typeof e!="symbol"?e+"":e,t),t),xm=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)},Ct=(n,e,t)=>(xm(n,e,"read from private field"),t?t.call(n):e.get(n)),is=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},ss=(n,e,t,i)=>(xm(n,e,"write to private field"),e.set(n,t),t),yi,$c,eu,Yn,tu,Hr,Si,er;const Bi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},tE={},nE={class:"topBar"};function iE(n,e){return de(),ye("div",nE,[Bt(n.$slots,"default",{},void 0,!0)])}const sE=Bi(tE,[["render",iE],["__scopeId","data-v-6177d290"]]);let rs=null;function rE(){return rs!==null}function oE(n){rs&&Am(),rs=n}function jd(n){n===rs&&(rs=null)}function Am(){rs&&(rs.closeMenu(),rs=null)}const ai={defaultDirection:"br",defaultMinWidth:100,defaultMaxWidth:600,defaultZindex:100,defaultZoom:1,defaultAdjustPadding:{x:0,y:10}};function Zr(n,e){let t=n.offsetTop;return n.offsetParent!=null&&n.offsetParent!=e&&(t-=n.offsetParent.scrollTop,t+=Zr(n.offsetParent,e)),t}function Qr(n,e){let t=n.offsetLeft;return n.offsetParent!=null&&n.offsetParent!=e&&(t-=n.offsetParent.scrollLeft,t+=Qr(n.offsetParent,e)),t}function aE(n,e,t,i){return{x:Qr(n,i)+e,y:Zr(n,i)+t}}const Xl="mx-menu-default-container",lE="mx-menu-container-";let cE=0;function Mm(n){const{getContainer:e,zIndex:t}=n;if(e){const s=typeof e=="function"?e():e;if(s){let r=s.getAttribute("id");return r||(r=lE+cE++,s.setAttribute("id",r)),{eleId:r,container:s,isNew:!1}}}let i=document.getElementById(Xl);return i||(i=document.createElement("div"),i.setAttribute("id",Xl),i.setAttribute("class","mx-menu-ghost-host fullscreen"),document.body.appendChild(i)),i.style.zIndex=(t==null?void 0:t.toString())||ai.defaultZindex.toString(),{eleId:Xl,container:i,isNew:!0}}function Jd(n){return typeof n=="number"?`${n}px`:n}const ni=cs({props:{vnode:{type:null},data:{type:null,default:null}},setup(n){const{vnode:e,data:t}=Sr(n);return()=>typeof e.value=="function"?e.value(t.value):e.value}});function uE(n,e){const t={...n};return delete t[e],t}var hE=Object.defineProperty,dE=(n,e,t)=>e in n?hE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,$d=(n,e,t)=>dE(n,typeof e!="symbol"?e+"":e,t);class ef{constructor(e,t){$d(this,"x",0),$d(this,"y",0),this.x=e||0,this.y=t||0}set(e,t){this.x=e,this.y=t}substract(e){this.x-=e.x,this.y-=e.y}}function tf(n){const{onDown:e,onMove:t,onUp:i}=n,s=new ef,r=new ef;let o;function a(c){c.stopPropagation(),r.set(c.x,c.y),r.substract(s),t(s,r,c,o)}function l(c){i(c,o),s.set(0,0),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l)}return(c,u)=>e(c,u)?(o=u,s.set(c.x,c.y),document.addEventListener("mousemove",a),document.addEventListener("mouseup",l),c.stopPropagation(),!0):!1}function fE(n,e){let t=0;return{start(){t>0&&clearInterval(t),t=setInterval(()=>{t=0,e()},n)},stop(){t>0&&(clearInterval(t),t=0)}}}const Vr=[],nf=fE(100,()=>{for(const n of Vr)n()});function pE(n,e,t,i){let s=0,r=0;function o(){n.value&&(e&&s!==n.value.offsetWidth&&e(n.value.offsetWidth),t&&r!==n.value.offsetHeight&&t(n.value.offsetHeight),s=n.value.offsetWidth,r=n.value.offsetHeight)}return{startResizeChecker(){nf.start(),Vr.push(o)},stopResizeChecker(){const a=Vr.indexOf(o);a>=0&&Vr.splice(a,1),Vr.length===0&&nf.stop()}}}const sf=140,mE=70,gE=cs({__name:"ScrollRect",props:{scroll:{type:String,default:"both"},scrollBarAlwaysShow:{type:Boolean,default:!1},scrollBarBackgroundClickable:{type:Boolean,default:!1},height:{type:Number,default:void 0},width:{type:Number,default:void 0},maxHeight:{type:Number,default:void 0},maxWidth:{type:Number,default:void 0},containerClass:{type:String,default:""},containerStyle:{type:null}},emits:["scroll","resized"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=se(),o=se(),a=se(),l=se(),c=se(),u=se(),h=se(!1),d=mr(()=>i.scroll==="horizontal"||i.scroll==="both"),f=mr(()=>i.scroll==="vertical"||i.scroll==="both"),v=Ui({show:!1,size:0,sizeRaw:0,pos:0}),_=Ui({show:!1,size:0,sizeRaw:0,pos:0});let m=0,p=0,b=0,w=0,A=null;const T={attributes:!0,childList:!0};function E(){if(r.value){if(v.show){const O=r.value.offsetWidth/r.value.scrollWidth;v.sizeRaw=O*r.value.offsetWidth,v.size=O*100,v.pos=r.value.scrollLeft/(r.value.scrollWidth-r.value.offsetWidth)*(100-v.size),O>=1&&(v.show=!1)}if(_.show){const O=r.value.offsetHeight/r.value.scrollHeight;_.sizeRaw=O*r.value.offsetHeight,_.size=O*100,_.pos=r.value.scrollTop/(r.value.scrollHeight-r.value.offsetHeight)*(100-_.size),O>=1&&(_.show=!1)}s("scroll",r.value.scrollLeft,r.value.scrollTop)}}function M(O=!1){if(!r.value)return;let Me=d.value,me=f.value;const be=Me&&(m!==r.value.scrollWidth||b!==r.value.offsetWidth),tt=f&&(p!==r.value.scrollHeight||w!==r.value.offsetHeight);if(!O&&!be&&!tt)return;const Fe=window.getComputedStyle(r.value);(Fe.overflow==="hidden"||Fe.overflowX==="hidden")&&(Me=!1),(Fe.overflow==="hidden"||Fe.overflowY==="hidden")&&(me=!1),v.show=Me,_.show=me,E(),b=r.value.offsetWidth,w=r.value.offsetHeight,m=r.value.scrollWidth,p=r.value.scrollHeight,s("resized",m,p)}function S(O){var Me;i.scroll=="horizontal"&&(O.deltaMode==0&&((Me=r.value)==null||Me.scrollTo({left:r.value.scrollLeft+(O.deltaY>0?sf:-140),behavior:"smooth"})),O.preventDefault(),O.stopPropagation())}function g(O){var Me;O.deltaMode==0&&((Me=r.value)==null||Me.scrollTo({left:r.value.scrollLeft+(O.deltaY>0?sf:-140),behavior:"smooth"}),O.preventDefault(),O.stopPropagation())}function x(O){var Me;O.deltaMode==0&&((Me=r.value)==null||Me.scrollTo({top:r.value.scrollTop+(O.deltaY>0?mE:-70),behavior:"smooth"}),O.preventDefault(),O.stopPropagation())}let P=0,I=0,L=0,F=0;const Y=tf({onDown(O){return!a.value||!c.value?!1:(P=O.offsetX,I=O.x-O.offsetX-c.value.offsetLeft,O.preventDefault(),h.value=!0,!0)},onMove(O,Me,me){r.value&&a.value&&(ce(me.x-P-I),me.preventDefault(),me.stopPropagation())},onUp(){h.value=!1}}),B=tf({onDown(O){return!l.value||!u.value?!1:(L=O.offsetY,F=O.y-O.offsetY-u.value.offsetTop,O.preventDefault(),h.value=!0,!0)},onMove(O,Me,me){r.value&&l.value&&(_e(me.y-L-F),me.preventDefault(),me.stopPropagation())},onUp(){h.value=!1}});function j(O){r.value&&(r.value.scrollLeft=O/100*(r.value.scrollWidth-r.value.offsetWidth))}function X(O){r.value&&(r.value.scrollLeft=O/100*(r.value.scrollHeight-r.value.offsetHeight))}function ce(O){r.value&&(r.value.scrollLeft=O/(r.value.offsetWidth-v.sizeRaw)*(r.value.scrollWidth-r.value.offsetWidth))}function _e(O){r.value&&(r.value.scrollTop=O/(r.value.offsetHeight-_.sizeRaw)*(r.value.scrollHeight-r.value.offsetHeight))}function Ie(O){i.scrollBarBackgroundClickable&&ce(O.offsetX-v.sizeRaw/2)}function le(O){i.scrollBarBackgroundClickable&&_e(O.offsetY-_.sizeRaw/2)}const{startResizeChecker:Se,stopResizeChecker:Z}=pE(r,()=>M(),()=>M());return Sn(()=>{Ni(()=>{setTimeout(()=>M(!0),200),M(!0),Se(),A=new MutationObserver(()=>M()),A.observe(r.value,T)})}),Ls(()=>{Z(),A&&(A.disconnect(),A=null)}),e({refreshScrollState(){M(!0)},getScrollContainer(){return r.value},scrollTo(O,Me){var me;(me=r.value)==null||me.scrollTo(O,Me)},scrollToTop(){var O;(O=r.value)==null||O.scrollTo(0,0)},scrollToBottom(){var O;(O=r.value)==null||O.scrollTo(r.value.scrollWidth,r.value.scrollHeight)}}),(O,Me)=>(de(),ye("div",{ref_key:"scrollrect",ref:o,class:ut(["vue-scroll-rect",n.scrollBarAlwaysShow?"always-show-scrollbar":"",n.scrollBarBackgroundClickable?"background-clickable":"",h.value?"dragging":""]),style:wt({width:n.width?`${n.width}px`:void 0,height:n.height?`${n.height}px`:void 0}),onWheel:S},[ae("div",{ref_key:"container",ref:r,class:ut(["scroll-content",n.scroll,n.containerClass]),style:wt({maxWidth:n.maxWidth?`${n.maxWidth}px`:void 0,maxHeight:n.maxHeight?`${n.maxHeight}px`:void 0,...n.containerStyle}),onScroll:E},[Bt(O.$slots,"default")],38),v.show?Bt(O.$slots,"scrollBarX",{key:0,scrollBarValue:v,onScroll:j},()=>[ae("div",{ref_key:"scrollBarRefX",ref:a,class:"scrollbar horizontal",onClick:Ie,onWheel:g},[ae("div",{class:"thumb",ref_key:"scrollBarThumbRefX",ref:c,style:wt({left:`${v.pos}%`,width:`${v.size}%`}),onMousedown:Me[0]||(Me[0]=(...me)=>V(Y)&&V(Y)(...me)),onWheel:g},null,36)],544)]):Ye("",!0),_.show?Bt(O.$slots,"scrollBarY",{key:1,scrollBarValue:_,onScroll:X},()=>[_.show?(de(),ye("div",{key:0,ref_key:"scrollBarRefY",ref:l,class:"scrollbar vertical",onClick:le,onWheel:x},[ae("div",{class:"thumb",ref_key:"scrollBarThumbRefY",ref:u,style:wt({top:`${_.pos}%`,height:`${_.size}%`}),onMousedown:Me[1]||(Me[1]=(...me)=>V(B)&&V(B)(...me)),onWheel:x},null,36)],544)):Ye("",!0)]):Ye("",!0)],38))}}),Xu=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},vE={},_E={class:"mx-checked-mark","aria-hidden":"true",viewBox:"0 0 1024 1024"},xE=ae("path",{d:"M129.3,428.6L52,512l345,372.5l575-620.8l-69.5-75L400.4,718.2L129.3,428.6z"},null,-1),AE=[xE];function ME(n,e){return de(),ye("svg",_E,AE)}const yE=Xu(vE,[["render",ME]]),SE={},EE={class:"mx-right-arrow","aria-hidden":"true",viewBox:"0 0 1024 1024"},wE=ae("path",{d:"M307.018 49.445c11.517 0 23.032 4.394 31.819 13.18L756.404 480.18c8.439 8.438 13.181 19.885 13.181 31.82s-4.741 23.38-13.181 31.82L338.838 961.376c-17.574 17.573-46.065 17.573-63.64-0.001-17.573-17.573-17.573-46.065 0.001-63.64L660.944 512 275.198 126.265c-17.574-17.573-17.574-46.066-0.001-63.64C283.985 53.839 295.501 49.445 307.018 49.445z"},null,-1),TE=[wE];function bE(n,e){return de(),ye("svg",EE,TE)}const CE=Xu(SE,[["render",bE]]),RE={class:"mx-item-row"},DE=["xlink:href"],PE={key:1,class:"label"},IE={class:"mx-item-row"},LE={class:"mx-shortcut"},Yu=cs({__name:"ContextMenuItem",props:{disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},customRender:{type:Function,default:null},customClass:{type:String,default:""},clickHandler:{type:Function,default:null},label:{type:[String,Object,Function],default:""},icon:{type:[String,Object,Function],default:""},iconFontClass:{type:String,default:"iconfont"},checked:{type:Boolean,default:!1},shortcut:{type:String,default:""},svgIcon:{type:String,default:""},svgProps:{type:Object,default:null},preserveIconWidth:{type:Boolean,default:!0},showRightArrow:{type:Boolean,default:!1},hasChildren:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},clickableWhenHasChildren:{type:Boolean,default:!1},rawMenuItem:{type:Object,default:void 0}},emits:["click","subMenuOpen","subMenuClose"],setup(n,{expose:e,emit:t}){const i=n,s=t,{clickHandler:r,clickClose:o,clickableWhenHasChildren:a,disabled:l,hidden:c,label:u,icon:h,iconFontClass:d,showRightArrow:f,shortcut:v,hasChildren:_}=Sr(i),m=se(!1),p=se(!1),b=se(),w=ft("globalOptions"),A=ft("globalHasSlot"),T=ft("globalRenderSlot"),E=ft("globalCloseMenu"),M=ft("menuContext"),S={getSubMenuInstance:()=>{},showSubMenu:()=>m.value?(M.markActiveMenuItem(S,!0),!0):_.value?(x(),!0):!1,hideSubMenu:()=>{M.closeOtherSubMenu()},isDisabledOrHidden:()=>l.value||c.value,getElement:()=>b.value,focus:()=>p.value=!0,blur:()=>p.value=!1,click:g};Jt("menuItemInstance",S),Sn(()=>{M.isMenuItemDataCollectedFlag()?Ni(()=>{let L=0;const F=M.getElement();if(F){let Y=0;for(let B=0;B<F.children.length;B++){const j=F.children[B];if(j.getAttribute("data-type")==="ContextMenuItem"){if(j===b.value){L=Y;break}Y++}}}M.addChildMenuItem(S,L)}):M.addChildMenuItem(S)}),Ls(()=>{M.removeChildMenuItem(S)});function g(L){if(!l.value){if(L){const F=L.target;if(F.classList.contains("mx-context-no-clickable")||w.value.ignoreClickClassName&&F.classList.contains(w.value.ignoreClickClassName))return;if(w.value.clickCloseClassName&&F.classList.contains(w.value.clickCloseClassName)){L.stopPropagation(),E(i.rawMenuItem);return}}_.value?a.value?(typeof r.value=="function"&&r.value(L),s("click",L)):m.value||x():(typeof r.value=="function"&&r.value(L),s("click",L),o.value&&E(i.rawMenuItem))}}function x(L){p.value=!1,M.checkCloseOtherSubMenuTimeOut()||M.closeOtherSubMenu(),l.value||(M.markActiveMenuItem(S),_.value&&(L||M.markThisOpenedByKeyBoard(),M.addOpenedSubMenu(P),m.value=!0,Ni(()=>s("subMenuOpen",S))))}function P(){p.value=!1,m.value=!1,s("subMenuClose",S)}function I(){return{disabled:l.value,label:u.value,icon:h.value,iconFontClass:d.value,showRightArrow:f.value,clickClose:o.value,clickableWhenHasChildren:a.value,shortcut:v.value,theme:w.value.theme,isOpen:m,hasChildren:_,onClick:g,onMouseEnter:x,closeMenu:E}}return e(S),(L,F)=>V(c)?Ye("",!0):(de(),ye("div",{key:0,class:"mx-context-menu-item-wrapper",ref_key:"menuItemRef",ref:b,"data-type":"ContextMenuItem"},[V(A)("itemRender")?(de(),dt(V(ni),{key:0,vnode:()=>V(T)("itemRender",I())},null,8,["vnode"])):n.customRender?(de(),dt(V(ni),{key:1,vnode:n.customRender,data:I()},null,8,["vnode","data"])):(de(),ye("div",{key:2,class:ut(["mx-context-menu-item",V(l)?"disabled":"",p.value?"keyboard-focus":"",n.customClass?" "+n.customClass:"",m.value?"open":""]),onClick:g,onMouseenter:x},[Bt(L.$slots,"default",{},()=>[ae("div",RE,[ae("div",{class:ut(["mx-icon-placeholder",n.preserveIconWidth?"preserve-width":""])},[Bt(L.$slots,"icon",{},()=>[V(A)("itemIconRender")?(de(),dt(V(ni),{key:0,vnode:()=>V(T)("itemIconRender",I())},null,8,["vnode"])):typeof n.svgIcon=="string"&&n.svgIcon?(de(),ye("svg",pr({key:1,class:"icon svg"},n.svgProps),[ae("use",{"xlink:href":n.svgIcon},null,8,DE)],16)):typeof V(h)!="string"?(de(),dt(V(ni),{key:2,vnode:V(h),data:V(h)},null,8,["vnode","data"])):typeof V(h)=="string"&&V(h)!==""?(de(),ye("i",{key:3,class:ut(V(h)+" icon "+V(d)+" "+V(w).iconFontClass)},null,2)):Ye("",!0)]),n.checked?Bt(L.$slots,"check",{key:0},()=>[V(A)("itemCheckRender")?(de(),dt(V(ni),{key:0,vnode:()=>V(T)("itemCheckRender",I())},null,8,["vnode"])):Ye("",!0),Ze(yE)]):Ye("",!0)],2),Bt(L.$slots,"label",{},()=>[V(A)("itemLabelRender")?(de(),dt(V(ni),{key:0,vnode:()=>V(T)("itemLabelRender",I())},null,8,["vnode"])):typeof V(u)=="string"?(de(),ye("span",PE,yn(V(u)),1)):(de(),dt(V(ni),{key:2,vnode:V(u),data:V(u)},null,8,["vnode","data"]))])]),ae("div",IE,[V(v)||L.$slots.shortcut?Bt(L.$slots,"shortcut",{key:0},()=>[V(A)("itemShortcutRender")?(de(),dt(V(ni),{key:0,vnode:()=>V(T)("itemShortcutRender",I())},null,8,["vnode"])):Ye("",!0),ae("span",LE,yn(V(v)),1)]):Ye("",!0),V(f)?Bt(L.$slots,"rightArrow",{key:1},()=>[V(A)("itemRightArrowRender")?(de(),dt(V(ni),{key:0,vnode:()=>V(T)("itemRightArrowRender",I())},null,8,["vnode"])):Ye("",!0),Ze(CE)]):Ye("",!0)])])],34)),Bt(L.$slots,"submenu",{context:S,show:m.value})],512))}}),UE=cs({name:"ContextMenuSperator",components:{VNodeRender:ni},setup(){const n=ft("globalHasSlot"),e=ft("globalRenderSlot");return{globalHasSlot:n,globalRenderSlot:e}}}),NE={key:1,class:"mx-context-menu-item-sperator mx-context-no-clickable"};function OE(n,e,t,i,s,r){const o=tp("VNodeRender");return n.globalHasSlot("separatorRender")?(de(),dt(o,{key:0,vnode:()=>n.globalRenderSlot("separatorRender",{})},null,8,["vnode"])):(de(),ye("div",NE))}const jr=Xu(UE,[["render",OE]]),qu=cs({__name:"ContextSubMenu",props:{items:{type:Object,default:null},show:{type:Boolean,default:!1},maxHeight:{type:Number,default:0},maxWidth:{type:[String,Number],default:0},minWidth:{type:[String,Number],default:0},adjustPosition:{type:Boolean,default:!0},direction:{type:String,default:"br"},parentMenuItemContext:{type:Object,default:null}},emits:["closeAnimFinished"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=se(!1),o=ft("globalGetMenuHostId",""),a=ft("menuContext"),l=ft("globalOptions");ft("globalHasSlot"),ft("globalRenderSlot");const{zIndex:c,getParentWidth:u,getParentHeight:h,getZoom:d}=a,{adjustPosition:f}=Sr(i),v=se(),_=se(),m=se(),p=[],b=ft("globalSetCurrentSubMenu"),w=[];let A=null,T=0;function E(){A&&A.blur()}function M(le,Se){if(le){for(let Z=Se!==void 0?Se:0;Z<w.length;Z++)if(!w[Z].isDisabledOrHidden()){S(Z);break}}else for(let Z=Se!==void 0?Se:w.length-1;Z>=0;Z--)if(!w[Z].isDisabledOrHidden()){S(Z);break}}function S(le){var Se;if(A&&E(),le!==void 0&&(A=w[Math.max(0,Math.min(le,w.length-1))]),!A)return;A.focus();const Z=A.getElement();Z&&((Se=v.value)==null||Se.scrollTo(0,Math.min(Math.max(-B.value,-Z.offsetTop-Z.offsetHeight+j.value),0)))}function g(){b(x)}const x={isTopLevel:()=>a.getParentContext()===null,closeSelfAndActiveParent:()=>{const le=L.getParentContext();if(le){le.closeOtherSubMenu();const Se=le.getSubMenuInstanceContext();if(Se)return Se.focusCurrentItem(),!0}return!1},closeCurrentSubMenu:()=>{var le;return(le=L.getParentContext())==null?void 0:le.closeOtherSubMenu()},moveCurrentItemFirst:()=>M(!0),moveCurrentItemLast:()=>M(!1),moveCurrentItemDown:()=>M(!0,A?w.indexOf(A)+1:0),moveCurrentItemUp:()=>M(!1,A?w.indexOf(A)-1:0),focusCurrentItem:()=>S(),openCurrentItemSubMenu:()=>A?A==null?void 0:A.showSubMenu():!1,triggerCurrentItemClick:le=>A==null?void 0:A.click(le)};let P=!1,I=!1;const L={zIndex:c+1,container:a.container,adjustPadding:l.value.adjustPadding||ai.defaultAdjustPadding,getParentWidth:()=>{var le;return((le=m.value)==null?void 0:le.offsetWidth)||0},getParentHeight:()=>{var le;return((le=m.value)==null?void 0:le.offsetHeight)||0},getPositon:()=>[ce.value.x,ce.value.y],getZoom:()=>l.value.zoom||ai.defaultZoom,addOpenedSubMenu(le){p.push(le)},closeOtherSubMenu(){p.forEach(le=>le()),p.splice(0,p.length),b(x)},checkCloseOtherSubMenuTimeOut(){return T?(clearTimeout(T),T=0,!0):!1},closeOtherSubMenuWithTimeOut(){T=setTimeout(()=>{T=0,this.closeOtherSubMenu()},200)},addChildMenuItem:(le,Se)=>{Se===void 0?w.push(le):w.splice(Se,0,le)},removeChildMenuItem:le=>{w.splice(w.indexOf(le),1),le.getSubMenuInstance=()=>{}},markActiveMenuItem:(le,Se=!1)=>{E(),A=le,Se&&S()},markThisOpenedByKeyBoard:()=>{P=!0},isOpenedByKeyBoardFlag:()=>P?(P=!1,!0):!1,isMenuItemDataCollectedFlag:()=>I,getElement:()=>m.value||null,getParentContext:()=>a,getSubMenuInstanceContext:()=>x};Jt("menuContext",L);const F={getChildItem:le=>w[le],getMenuDimensions:()=>_.value?{width:_.value.offsetWidth,height:_.value.offsetHeight}:{width:0,height:0},getSubmenuRoot:()=>_.value,getMenu:()=>m.value,getScrollValue:()=>{var le,Se;return((Se=(le=v.value)==null?void 0:le.getScrollContainer())==null?void 0:Se.scrollTop)||0},setScrollValue:le=>{var Se;return(Se=v.value)==null?void 0:Se.scrollTo(0,le)},getScrollHeight:()=>B.value,adjustPosition:()=>{_e()},getMaxHeight:()=>j.value,getPosition:()=>ce.value,setPosition:(le,Se)=>{ce.value.x=le,ce.value.y=Se}},Y=ft("menuItemInstance",void 0);Y&&(Y.getSubMenuInstance=()=>F);const B=se(0),j=se(0),X=se(!1),ce=se({x:0,y:0});function _e(){Ni(()=>{const le=m.value,Se=_.value;if(le&&Se&&v.value){const{container:Z}=a,O=(u==null?void 0:u())??0,Me=(h==null?void 0:h())??0,me=getComputedStyle(Se),be=parseFloat(me.paddingLeft),tt=parseFloat(me.paddingTop),Fe=Me>0?tt:0,St=document.documentElement.scrollHeight/d(),U=document.documentElement.scrollWidth/d(),N=Math.min(U,Z.offsetWidth),C=Math.min(St,Z.offsetHeight);let he=Qr(le,Z),ee=Zr(le,Z);i.direction.includes("l")?ce.value.x-=le.offsetWidth+be:i.direction.includes("r")?ce.value.x+=O+be:(ce.value.x+=O/2,ce.value.x-=(le.offsetWidth+be)/2),i.direction.includes("t")?ce.value.y-=(le.offsetHeight+tt*2)/d():i.direction.includes("b")?ce.value.y-=tt/d():ce.value.y-=(le.offsetHeight+tt)/2/d(),Ni(()=>{var oe,ne;he=Qr(le,Z),ee=Zr(le,Z);const ue=((ne=(oe=v.value)==null?void 0:oe.getScrollContainer())==null?void 0:ne.scrollHeight)||0,ie=i.maxHeight;B.value=i.maxHeight?Math.min(ue,i.maxHeight):ue;const te=he+le.offsetWidth-N,we=ee+B.value+Fe*2-C;if(X.value=we>0,f.value&&te>0){const R=O+le.offsetWidth-be,y=he;R>y?ce.value.x-=y:ce.value.x-=R}if(X.value){if(f.value){const R=we,y=ee;R>y?ce.value.y-=y-Fe:ce.value.y-=R-Fe}j.value=C-(ce.value.y+tt)}else j.value=ie||0})}le==null||le.focus({preventScroll:!0}),a.isOpenedByKeyBoardFlag()&&M(!0),I=!0})}function Ie(){var le;const Se=(le=i.parentMenuItemContext)==null?void 0:le.getElement();if(Se){const Z=Qr(Se,a.container),O=Zr(Se,a.container);ce.value.x=Z,ce.value.y=O}else{const[Z,O]=a.getPositon();ce.value.x=Z,ce.value.y=O}_e()}return et(()=>i.show,le=>{le&&Ie()}),Sn(()=>{r.value=!0,b(x),Ie()}),Ls(()=>{r.value=!1,Y&&(Y.getSubMenuInstance=()=>{})}),e(F),(le,Se)=>{const Z=tp("ContextSubMenu",!0);return r.value?(de(),dt(Ba,{key:0,to:`#${V(o)}`},[Ze(Nv,pr({appear:""},V(l).menuTransitionProps||{duration:10},{onAfterLeave:Se[0]||(Se[0]=O=>s("closeAnimFinished"))}),{default:Lt(()=>[n.show?(de(),ye("div",pr({key:0,ref_key:"submenuRoot",ref:_},le.$attrs,{class:["mx-context-menu",V(l).customClass?V(l).customClass:"",V(l).theme??""],style:{maxWidth:n.maxWidth?V(Jd)(n.maxWidth):`${V(ai).defaultMaxWidth}px`,minWidth:n.minWidth?V(Jd)(n.minWidth):`${V(ai).defaultMinWidth}px`,zIndex:V(c),left:`${ce.value.x}px`,top:`${ce.value.y}px`},"data-type":"ContextSubMenu",onClick:g}),[Ze(V(gE),{ref_key:"scrollRectRef",ref:v,scroll:"vertical",maxHeight:j.value,containerClass:"mx-context-menu-scroll"},{default:Lt(()=>[ae("div",{class:ut(["mx-context-menu-items"]),ref_key:"menu",ref:m},[Bt(le.$slots,"default",{},()=>[(de(!0),ye(At,null,ei(n.items,(O,Me)=>(de(),ye(At,{key:Me},[O.hidden!==!0&&O.divided==="up"?(de(),dt(jr,{key:0})):Ye("",!0),O.hidden!==!0&&O.divided==="self"?(de(),dt(jr,{key:1})):(de(),dt(Yu,{key:2,clickHandler:O.onClick?me=>O.onClick(me):void 0,disabled:typeof O.disabled=="object"?O.disabled.value:O.disabled,hidden:typeof O.hidden=="object"?O.hidden.value:O.hidden,icon:O.icon,iconFontClass:O.iconFontClass,svgIcon:O.svgIcon,svgProps:O.svgProps,label:O.label,customRender:O.customRender,customClass:O.customClass,checked:typeof O.checked=="object"?O.checked.value:O.checked,shortcut:O.shortcut,clickClose:O.clickClose,clickableWhenHasChildren:O.clickableWhenHasChildren,preserveIconWidth:O.preserveIconWidth!==void 0?O.preserveIconWidth:V(l).preserveIconWidth,showRightArrow:O.children&&O.children.length>0,hasChildren:O.children&&O.children.length>0,rawMenuItem:O,onSubMenuOpen:me=>{var be;return(be=O.onSubMenuOpen)==null?void 0:be.call(O,me)},onSubMenuClose:me=>{var be;return(be=O.onSubMenuClose)==null?void 0:be.call(O,me)}},sp({_:2},[O.children&&O.children.length>0?{name:"submenu",fn:Lt(({context:me,show:be})=>[Ze(Z,{show:be,parentMenuItemContext:me,items:O.children,maxWidth:O.maxWidth,minWidth:O.minWidth,maxHeight:O.maxHeight,adjustPosition:O.adjustSubMenuPosition!==void 0?O.adjustSubMenuPosition:V(l).adjustPosition,direction:O.direction!==void 0?O.direction:V(l).direction},null,8,["show","parentMenuItemContext","items","maxWidth","minWidth","maxHeight","adjustPosition","direction"])]),key:"0"}:void 0]),1032,["clickHandler","disabled","hidden","icon","iconFontClass","svgIcon","svgProps","label","customRender","customClass","checked","shortcut","clickClose","clickableWhenHasChildren","preserveIconWidth","showRightArrow","hasChildren","rawMenuItem","onSubMenuOpen","onSubMenuClose"])),O.hidden!==!0&&(O.divided==="down"||O.divided===!0)?(de(),dt(jr,{key:3})):Ye("",!0)],64))),128))])],512)]),_:3},8,["maxHeight"])],16)):Ye("",!0)]),_:3},16)],8,["to"])):Ye("",!0)}}}),ym=cs({__name:"ContextSubMenuWrapper",props:{options:{type:Object,default:null},show:{type:null,default:null},container:{type:Object,default:null},isFullScreenContainer:{type:Boolean,default:!0}},emits:["close","closeAnimFinished"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=op(),o=se(),{options:a,show:l,container:c}=Sr(i);Sn(()=>{l.value&&d()}),Ls(()=>{m()}),et(l,E=>{E?d():(jd(u),m())});const u={closeMenu:f,isClosed:v,getMenuRef:()=>o.value,getMenuDimensions:()=>{var E;return((E=o.value)==null?void 0:E.getMenuDimensions())??{width:0,height:0}}};let h=!1;function d(){_(),oE(u)}function f(E){h=!0,s("close",E),a.value.menuTransitionProps||s("closeAnimFinished"),jd(u)}function v(){return h}function _(){setTimeout(()=>{document.addEventListener("click",A,!0),document.addEventListener("contextmenu",A,!0),document.addEventListener("scroll",w,!0),!i.isFullScreenContainer&&c.value&&c.value.addEventListener("scroll",w,!0),a.value.keyboardControl!==!1&&document.addEventListener("keydown",b,!0)},50)}function m(){document.removeEventListener("contextmenu",A,!0),document.removeEventListener("click",A,!0),document.removeEventListener("scroll",w,!0),!i.isFullScreenContainer&&c.value&&c.value.removeEventListener("scroll",w,!0),a.value.keyboardControl!==!1&&document.removeEventListener("keydown",b,!0)}const p=se();Jt("globalSetCurrentSubMenu",E=>p.value=E),Jt("globalGetMenuHostId",c.value.id);function b(E){var M,S,g,x,P,I,L,F,Y,B,j,X,ce;let _e=!0;switch(E.key){case"Escape":{((M=p.value)==null?void 0:M.isTopLevel())===!1?(S=p.value)==null||S.closeCurrentSubMenu():f();break}case"ArrowDown":(g=p.value)==null||g.moveCurrentItemDown();break;case"ArrowUp":(x=p.value)==null||x.moveCurrentItemUp();break;case"Home":(P=p.value)==null||P.moveCurrentItemFirst();break;case"End":(I=p.value)==null||I.moveCurrentItemLast();break;case"ArrowLeft":{(L=p.value)!=null&&L.closeSelfAndActiveParent()||(Y=(F=a.value).onKeyFocusMoveLeft)==null||Y.call(F);break}case"ArrowRight":(B=p.value)!=null&&B.openCurrentItemSubMenu()||(X=(j=a.value).onKeyFocusMoveRight)==null||X.call(j);break;case"Enter":(ce=p.value)==null||ce.triggerCurrentItemClick(E);break;default:_e=!1;break}_e&&p.value&&(E.stopPropagation(),E.preventDefault())}function w(E){a.value.closeWhenScroll!==!1&&T(E.target,null)}function A(E){T(E.target,E)}function T(E,M){for(var S,g;E;){if(E.classList&&E.classList.contains("mx-context-menu"))return;E=E.parentNode}M?a.value.clickCloseOnOutside!==!1?(m(),f()):(g=(S=a.value).onClickOnOutside)==null||g.call(S,M):(m(),f())}return Jt("globalOptions",a),Jt("globalCloseMenu",f),Jt("globalIsFullScreenContainer",i.isFullScreenContainer),Jt("globalHasSlot",E=>r[E]!==void 0),Jt("globalRenderSlot",(E,M)=>Bt(r,E,{...M},()=>[gr("span","Render slot failed")],!1)),Jt("menuContext",{zIndex:a.value.zIndex||ai.defaultZindex,container:c.value,adjustPadding:{x:0,y:0},getZoom:()=>a.value.zoom||ai.defaultZoom,getParentWidth:()=>0,getParentHeight:()=>0,getPositon:()=>[a.value.x,a.value.y],closeOtherSubMenuWithTimeOut:()=>{},checkCloseOtherSubMenuTimeOut:()=>!1,addOpenedSubMenu:()=>{},closeOtherSubMenu:()=>{},getParentContext:()=>null,getSubMenuInstanceContext:()=>null,getElement:()=>null,addChildMenuItem:()=>{},removeChildMenuItem:()=>{},markActiveMenuItem:()=>{},markThisOpenedByKeyBoard:()=>{},isOpenedByKeyBoardFlag:()=>!1,isMenuItemDataCollectedFlag:()=>!1}),e(u),(E,M)=>(de(),dt(qu,{ref_key:"submenuInstance",ref:o,show:V(l),items:V(a).items,adjustPosition:V(a).adjustPosition,maxWidth:V(a).maxWidth||V(ai).defaultMaxWidth,minWidth:V(a).minWidth||V(ai).defaultMinWidth,maxHeight:V(a).maxHeight,direction:V(a).direction||V(ai).defaultDirection,onCloseAnimFinished:M[0]||(M[0]=S=>s("closeAnimFinished"))},{default:Lt(()=>[Bt(E.$slots,"default")]),_:3},8,["show","items","adjustPosition","maxWidth","minWidth","maxHeight","direction"]))}}),FE=cs({__name:"ContextMenu",props:{options:{type:Object,default:null},show:{type:Boolean,default:!1}},emits:["update:show","close"],setup(n,{expose:e,emit:t}){const i=t,s=n,{options:r,show:o}=Sr(s),{isNew:a,container:l,eleId:c}=Mm(r.value),u=se(null),h=op();function d(f){var v,_;i("update:show",!1),i("close"),(_=(v=r.value).onClose)==null||_.call(v,f)}return e({closeMenu:()=>i("update:show",!1),isClosed:()=>!o.value,getMenuRef:()=>{var f;return(f=u.value)==null?void 0:f.getMenuRef()},getMenuDimensions:()=>{var f;return((f=u.value)==null?void 0:f.getMenuDimensions())??{width:0,height:0}}}),(f,v)=>(de(),dt(Ba,{to:`#${V(c)}`},[Ze(ym,{ref_key:"menuRef",ref:u,options:V(r),show:V(o),container:V(l),isFullScreenContainer:!V(a),onClose:d},sp({_:2},[ei(V(h),(_,m)=>({name:m,fn:Lt(p=>[Bt(f.$slots,m,_f(wp(p)))])}))]),1032,["options","show","container","isFullScreenContainer"])],8,["to"]))}}),BE=cs({name:"ContextMenuGroup",props:{disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},clickHandler:{type:Function,default:null},label:{type:String,default:""},icon:{type:String,default:""},iconFontClass:{type:String,default:"iconfont"},checked:{type:Boolean,default:!1},shortcut:{type:String,default:""},svgIcon:{type:String,default:""},svgProps:{type:Object,default:null},preserveIconWidth:{type:Boolean,default:!0},showRightArrow:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},adjustSubMenuPosition:{type:Boolean,default:void 0},maxHeight:{type:[String,Number],default:0},maxWidth:{type:[String,Number],default:0},minWidth:{type:[String,Number],default:0}},setup(n,e){const t=ft("globalOptions"),{adjustSubMenuPosition:i,maxWidth:s,minWidth:r,maxHeight:o}=Sr(n),a=typeof i.value<"u"?i.value:t.value.adjustPosition,l=se(),c=se();return e.expose({getSubMenuRef:()=>l.value,getMenuItemRef:()=>c.value}),()=>gr(Yu,{...n,ref:c,showRightArrow:!0,maxWidth:void 0,minWidth:void 0,maxHeight:void 0,adjustSubMenuPosition:void 0,hasChildren:typeof e.slots.default!==void 0},e.slots.default?{submenu:u=>gr(qu,{ref:l,show:u.show,maxWidth:s.value,minWidth:r.value,maxHeight:o.value,adjustPosition:a,parentMenuItemContext:u.context},{default:e.slots.default}),...uE(e.slots,"default")}:e.slots)}});function kE(n,e,t,i){const s=se(!0),r=gr(ym,{options:n,show:s,container:e,isFullScreenContainer:!t,onCloseAnimFinished:()=>{zh(null,e)},onClose:o=>{var a;(a=n.onClose)==null||a.call(n,o),s.value=!1}},i);return zh(r,e),r.component}function rf(n,e){const t=Mm(n);return kE(n,t.container,t.isNew,e).exposed}const of={install(n){n.config.globalProperties.$contextmenu=rf,n.component("ContextMenu",FE),n.component("ContextMenuItem",Yu),n.component("ContextMenuGroup",BE),n.component("ContextMenuSperator",jr),n.component("ContextMenuSeparator",jr),n.component("ContextSubMenu",qu)},showContextMenu(n,e){return rf(n,e)},isAnyContextMenuOpen(){return rE()},closeContextMenu:Am,transformMenuPosition:aE};var HE=function(n,e,t,i){let s=[],r=[],o=[],a=new Map,l=new Map;{for(let c=0;c<n.length;c++)a.set(n[c][t],n[c]);for(let c=0;c<e.length;c++)l.set(e[c][i],e[c]);n=n.map(c=>c[t]),e=e.map(c=>c[i])}for(let c=0;c<e.length;c++)n.includes(e[c])==!1?s.push(l.get(e[c])):o.push(l.get(e[c]));for(let c=0;c<n.length;c++)e.includes(n[c])==!1&&r.push(a.get(n[c]));return{diffs:s.length+r.length,newItems:s,removedItems:r,commonItems:o}};class VE{constructor(e,t){is(this,yi,null),is(this,$c,{}),is(this,eu,null),ss(this,yi,e),ss(this,$c,t),this.id=e.windowID,ss(this,eu,Ct(this,yi).mgr)}getTitle(){return Ct(this,yi).title}setTitle(e){Ct(this,yi).title=e,Ct(this,yi).titleRef.value=e}close(){Ct(this,yi).close()}setKind(e){Ct(this,yi).setWindowKind(e)}}yi=new WeakMap;$c=new WeakMap;eu=new WeakMap;function Ca(n,e){if(typeof n>"u"||n==null)return e;for(var t=Object.entries(e),i=0;i<t.length;i++){var s=t[i][0];n[s]=typeof n[s]>"u"?e[s]:n[s]}return n}function af(n,e,t){for(let i=0;i<t.length;i++){const s=t[i];n[s]=e[s]}}function Sm(n,e,t){return Math.min(Math.max(n,e),t)}function ea(n){return Sm(n,0,1)}function Cn(n,e,t,i){if(n>e){let s=e;e=n,n=s}if(t>i){let s=i;i=t,t=s}return n==t&&e==i?Cn.RESULT.EXACT_MATCH:n<t&&e<t||n>i&&e>i?Cn.RESULT.NO_OVERLAP:t>=n&&t<=e||i>=n&&i<=e||n>=t&&n<=i||e>=t&&e<=i||n==t||n==i||e==t||e==i?Cn.RESULT.OVERLAP:Cn.RESULT.NO_OVERLAP}Cn.RESULT={NO_OVERLAP:0,OVERLAP:1,EXACT_MATCH:2};const Em=class wm{constructor(e,t,i){this.windowID=`window_${wm.IDCounter++}`,this.mgr=e,this.typeName="Window",this.props=i||{},this.position=Ui({x:null,y:null,z:null}),this.size=Ui({width:640,height:480}),this.domContainer=se(null),this.tabOrder=se(0),t=t===void 0?null:t,this.kind=t,this.kindRef=se(this.kind),this.windowSlug=this.kind,this.windowDetails=this.mgr.availableWindowList.getWindowBySlug(this.windowSlug),this.title=this.windowDetails.title,this.titleRef=se(this.title),this.ctx=new VE(this,{titleRef:this.titleRef,domContainer:this.domContainer})}setWindowKind(e){e!==this.kind&&(this.kind=e,this.kindRef.value=this.kind,this.windowSlug=this.kind,this.windowDetails=this.mgr.availableWindowList.getWindowBySlug(this.windowSlug),this.title=this.windowDetails.title,this.titleRef.value=this.title)}moveWindow(e){e=Ca(e,{x:this.position.x,y:this.position.y}),af(this.position,e,["x","y"])}resizeWindow(e){e=Ca(e,{x:this.size.x,y:this.size.y}),af(this.size,e,["width","height"])}setTitle(e){this.title=e,this.titleRef.value=e}close(){const e=this.mgr.getFrameFromWindow(this);e!=null&&e.removeWindow(this,{noMerge:!0})}};tn(Em,"IDCounter",0);let Tm=Em;class Cs{static loadDefaultLayout(e){var t=[{name:"window",top:0,left:0,bottom:1080,right:1920},{name:"MainEditor",windows:[],style:Q.STYLE.SINGLE,left:0,right:["ref","window.right-330"],top:0,bottom:["ref","window.bottom-300"]},{name:"debug",windows:[],left:0,style:Q.STYLE.TABBED,right:["ref","MainEditor.right"],top:["ref","MainEditor.bottom"],bottom:["ref","window.bottom"]},{name:"tools",windows:[],style:Q.STYLE.TABBED,left:["ref","MainEditor.right"],right:["ref","window.right"],top:0,bottom:["ref","window.bottom"]}];e.defaultLayout!==null&&(t=e.defaultLayout),Cs.loadLayout(t,e)}static layoutSingleFrame(e,t){const i=[{name:"single",style:Q.STYLE.TABBED,windows:[e],left:0,right:["ref","window.right"],top:0,bottom:["ref","window.bottom"]}];Cs.loadLayout(i,t)}static loadLayout(e,t){const i={},s=e.filter(h=>h.name.toLowerCase()=="window")[0],r={top:0,left:0,bottom:1080,right:1920};i.window=s===void 0?r:s;var o=[];const a=(h,d,f)=>{let v;if(typeof h=="number")v=h;else if(h[0]=="val")v=h[1],h[2]=="%"&&(v=parseInt(v/100*f));else{let _=h[1].split("."),m=_[0],p=_[1].split("+")[0].split("-")[0];v=d[m][p],_[1].split("+").length>1&&(v+=parseInt(_[1].split("+")[1])),_[1].split("-").length>1&&(v-=parseInt(_[1].split("-")[1]))}return v};for(var l=0;l<e.length;l++){var c=e[l];if(c.name!="window"){var u={windows:c.windows,style:c.style===void 0?Q.STYLE.TABBED:c.style,pos:{top:a(c.top,i,i.window.bottom),left:a(c.left,i,i.window.right),bottom:a(c.bottom,i,i.window.bottom),right:a(c.right,i,i.window.right)}};o.push(u),typeof c.name>"u"||(i[c.name]=u.pos)}}for(let h=0;h<o.length;h++){const d=o[h],{windows:f,style:v}=d,{top:_,left:m,bottom:p,right:b}=d.pos,w=t.addWindowFrame(_,p,m,b,!1);w.frameStyle.value=v;for(let A=0;A<f.length;A++){const T=typeof f[A]=="object",E=T?f[A].kind:f[A],M=T?f[A].props:{},S=t.createWindow(E,M);w.addWindow(S)}}t.edgeMap.computeFrameLayout()}static getLayoutObject(e){const t=e.windowDOMContainer.offsetWidth,s=[{name:"window",top:0,left:0,bottom:e.windowDOMContainer.offsetHeight,right:t}];for(const r of e.frames){const{t:o,b:a,l,r:c}=r.screenPos.value,u=r.windows.map(h=>h.windowSlug);s.push({name:r.frameID,style:r.frameStyle.value,windows:u,top:o,bottom:a,left:l,right:c})}return s}static saveLayout(e){}}class lf{constructor(e){this.windowMgr=e,this.xMap=new Map,this.yMap=new Map,this.hMap=new Map,this.vMap=new Map,this.lMap=new Map,this.rMap=new Map,this.tMap=new Map,this.bMap=new Map,this.xMin=null,this.xMax=null,this.yMin=null,this.yMax=null}rebuildMap(){this.xMap=new Map,this.yMap=new Map,this.hMap=new Map,this.vMap=new Map,this.lMap=new Map,this.rMap=new Map,this.tMap=new Map,this.bMap=new Map,this.xMin=null,this.xMax=null,this.yMin=null,this.yMax=null;const e=(t,i,s)=>{t.has(i)?t.get(i).push(s):t.set(i,[s])};for(let t=0;t<this.windowMgr.frames.length;t++){const i=this.windowMgr.frames[t];let{t:s,b:r,l:o,r:a}=i.screenPos.value;s=s-s%Wt.SNAP_SIZE,r=r-r%Wt.SNAP_SIZE,o=o-o%Wt.SNAP_SIZE,a=a-a%Wt.SNAP_SIZE;const l=Math.min(o,a),c=Math.max(o,a);this.xMin=this.xMin==null||l<this.xMin?l:this.xMin,this.xMax=this.xMax==null||c>this.xMax?c:this.xMax;const u=Math.min(s,r),h=Math.max(s,r);this.yMin=this.yMin==null||u<this.yMin?u:this.yMin,this.yMax=this.yMax==null||h>this.yMax?h:this.yMax,e(this.xMap,o,{frame:i,edge:Q.EDGE.LEFT}),e(this.xMap,a,{frame:i,edge:Q.EDGE.RIGHT}),e(this.yMap,s,{frame:i,edge:Q.EDGE.TOP}),e(this.yMap,r,{frame:i,edge:Q.EDGE.BOTTOM}),e(this.hMap,o,{frame:i,edge:Q.EDGE.LEFT}),e(this.hMap,a,{frame:i,edge:Q.EDGE.RIGHT}),e(this.vMap,s,{frame:i,edge:Q.EDGE.TOP}),e(this.vMap,r,{frame:i,edge:Q.EDGE.BOTTOM}),e(this.lMap,o,{frame:i,edge:Q.EDGE.LEFT}),e(this.rMap,a,{frame:i,edge:Q.EDGE.RIGHT}),e(this.tMap,s,{frame:i,edge:Q.EDGE.TOP}),e(this.bMap,r,{frame:i,edge:Q.EDGE.BOTTOM})}}computeFrameLayout(){let e=null,t=null,i=null,s=null;for(let a=0;a<this.windowMgr.frames.length;a++){const l=this.windowMgr.frames[a],{t:c,b:u,l:h,r:d}=l.screenPos.value;e=e==null||h<e?h:e,e=e==null||d<e?d:e,t=t==null||h>t?h:t,t=t==null||d>t?d:t,i=i==null||c<i?c:i,i=i==null||u<i?u:i,s=s==null||c>s?c:s,s=s==null||u>s?u:s}const r=t-e,o=s-i;for(let a=0;a<this.windowMgr.frames.length;a++){const l=this.windowMgr.frames[a];let{t:c,b:u,l:h,r:d}=l.screenPos.value;c-=i,u-=i,h-=e,d-=e,l.updateFramePos({t:c,b:u,l:h,r:d}),l.cachePreferredPercentages(r,o,!0)}this.fitWindows()}fitWindows(e,t,i){e=e===void 0?!1:e,e&&this.computeFrameLayout(),t=t===void 0?this.windowMgr.windowDOMContainer.offsetWidth:t,i=i===void 0?this.windowMgr.windowDOMContainer.offsetHeight:i,i-=4;for(let s=0;s<this.windowMgr.frames.length;s++)this.windowMgr.frames[s].autoUpdateFramePos(t,i);return this.rebuildMap(),this.evaluateNeighbors(t,i),{width:t,height:i}}checkValidLayout(e,t){for(let i=0;i<this.windowMgr.frames.length;i++){const r=this.windowMgr.frames[i].getFrameDim();if(r.width<Wt.SMALLEST_WIDTH_OR_HEIGHT||r.height<Wt.SMALLEST_WIDTH_OR_HEIGHT||r.right<r.left||r.bottom<r.top||r.left<0||r.top<0||r.right>e||r.bottom>t)return!1}return!0}evaluateNeighbors(e,t){for(let i=0;i<this.windowMgr.frames.length;i++)this.windowMgr.frames[i].updateNeighbors(e,t)}getPreferredPositionsCache(){const e=[];for(let t=0;t<this.windowMgr.frames.length;t++){const i=this.windowMgr.frames[t];e.push({id:i.frameID,...i.preferredPos})}return e}applyPreferredPositionsCache(e,t){e=e===void 0?[]:e;for(let i=0;i<e.length;i++){const s=e[i],r=this.windowMgr.getFrameByID(s.id);delete s.id,r.preferredPos={...s}}t=t===void 0?!0:t,t&&this.fitWindows()}}class GE{constructor(e){tn(this,"isDragging",se(!1)),tn(this,"dragOperationDetails",null),tn(this,"dragPos",{x:se(0),y:se(0)}),tn(this,"dropRegion",{x:se(-10),y:se(-10),width:se(0),height:se(0),isTab:se(!1),tabFrame:se(null),tabLeft:se(0),isMWI:se(!1)}),tn(this,"dropTarget",{frame:null,el:null,targetRegion:null}),tn(this,"dragTitleEl",se(null)),this.mgr=e}getCursorPos(e=!1){const t=this.mgr.dragHelper.getCursorPos();return e&&(t.x-=this.mgr.pos.pagePos.x,t.y-=this.mgr.pos.pagePos.y),t}tearWindow(e,t,i){const s=e.domContainer.value.getBoundingClientRect(),r=i.getBoundingClientRect(),a={initialCursorPos:this.getCursorPos(),initialWindowDIM:s,initialHandleDIM:r,handleDOM:i,isTab:i.classList.contains("tab"),window:e,fromFrame:t};this.startDrag(a)}startDrag(e){this.dragOperationDetails=e,this.isDragging.value=!0,e.fromFrame.removeWindow(e.window,!0),this.mgr.dragHelper.dragStart((t,i)=>{let s=this.getCursorPos(!0);this.dragPos.x.value=s.x,this.dragPos.y.value=s.y,s=this.getCursorPos(!1),s.x-=window.scrollX,s.y-=window.scrollY,this.raycastForDropTarget(s.x,s.y)},(t,i)=>{this.applyDropTarget(),this.isDragging.value=!1,this.mgr.frameFocusID.value=null,this.dropTarget={frame:null,el:null,targetRegion:null},this.dropRegion.x.value=-10,this.dropRegion.y.value=-10,this.dropRegion.width.value=0,this.dropRegion.height.value=-0,this.dropRegion.isTab.value=!1,this.dropRegion.tabFrame.value=null,this.dropRegion.tabLeft.value=0})}applyDropTarget(){if(this.dropTarget.frame!=null){const e=this.dropTarget.frame,t=this.dragOperationDetails.window;if(this.dropTarget.targetRegion=="frame"||this.dropTarget.targetRegion=="tab"){if(e.addWindow(t),e.frameStyle.value==Q.STYLE.MWI){const i=e.getFrameDim(!0);t.position.x=this.dropRegion.x.value-i.left-e.mwiDragX.value,t.position.y=this.dropRegion.y.value-i.top-e.mwiDragY.value}}else this.mgr.splitOnDrop(e,this.dropTarget.targetRegion).addWindow(t)}else{const e=this.dragOperationDetails.fromFrame,t=this.dragOperationDetails.window;e.addWindow(t)}}raycastForDropTarget(e,t){const i=document.elementFromPoint(e,t);if(i==null||i===void 0||i.classList.contains("dropTarget")==!1)return;const r=i.getAttribute("frameID");this.mgr.frameFocusID.value=r;const o=this.mgr.getFrameByID(r),a=this.dragOperationDetails.window;if(o==null)return;const l=i.getAttribute("region");this.dropTarget={frame:o,el:i,targetRegion:l};const c=25;this.dropRegion.isTab.value=!1,this.dropRegion.isMWI.value=!1;const u=o.getFrameDim(!1);switch(u.top+=1,l){case"left":this.dropRegion.x.value=u.left,this.dropRegion.y.value=u.top,this.dropRegion.width.value=u.width*.5,this.dropRegion.height.value=u.height-4,this.dropRegion.tabFrame.value=null,this.dropRegion.tabLeft.value=null;break;case"right":this.dropRegion.x.value=u.left+u.width*.5,this.dropRegion.y.value=u.top,this.dropRegion.width.value=u.width*.5-4,this.dropRegion.height.value=u.height-4,this.dropRegion.tabFrame.value=null,this.dropRegion.tabLeft.value=null;break;case"top":this.dropRegion.x.value=u.left,this.dropRegion.y.value=u.top,this.dropRegion.width.value=u.width-4,this.dropRegion.height.value=u.height*.5,this.dropRegion.tabFrame.value=null,this.dropRegion.tabLeft.value=null;break;case"bottom":this.dropRegion.x.value=u.left,this.dropRegion.y.value=u.top+u.height*.5-4,this.dropRegion.width.value=u.width-4,this.dropRegion.height.value=u.height*.5,this.dropRegion.tabFrame.value=null,this.dropRegion.tabLeft.value=null;break;case"frame":if(this.dropRegion.x.value=u.left,this.dropRegion.y.value=u.top,this.dropRegion.width.value=u.width-4,this.dropRegion.height.value=u.height-4,this.dropRegion.tabFrame.value=null,this.dropRegion.tabLeft.value=null,o.frameStyle.value==Q.STYLE.MWI){const f=this.dragTitleEl.value.getBoundingClientRect();this.dropRegion.x.value=f.left-this.mgr.pos.screenPos.x,this.dropRegion.y.value=f.top-this.mgr.pos.screenPos.y,this.dropRegion.width.value=a.size.width,this.dropRegion.height.value=a.size.height,this.dropRegion.isMWI.value=!0}o.frameStyle.value==Q.STYLE.TABBED&&(this.dropRegion.y.value+=c,this.dropRegion.height.value-=c,this.dropRegion.isTab.value=!0,this.dropRegion.tabFrame.value=r,this.dropRegion.tabLeft.value=99999);break;case"tab":this.dropRegion.x.value=u.left,this.dropRegion.y.value=u.top+c,this.dropRegion.width.value=u.width-4,this.dropRegion.height.value=u.height-c-4,this.dropRegion.isTab.value=!0,this.dropRegion.tabFrame.value=r;const h=i.getBoundingClientRect(),d=this.getCursorPos().x;this.dropRegion.tabLeft.value=d-h.left-10;break}}}class zE{constructor(e=[]){this._componentToSlug=new Map,this._slugToWindow=new Map,this._visibleSlugs=new Set,this._anonymousCounter=0,this.setAvailableWindows(e)}_pascalCase(e){return e.replace(/[-_ ]+(\w)/g,(t,i)=>i.toUpperCase()).replace(/^\w/,t=>t.toUpperCase())}_pascalToTitle(e){return e.replace(/([A-Z])/g," $1").replace(/^\s*/,"").replace(/^\w/,t=>t.toUpperCase())}_generateSlug(e){var t,i;const s=e.name||e.__name||((i=(t=e==null?void 0:e.__file)==null?void 0:t.split(/[\\/]/).pop())==null?void 0:i.replace(/\.vue$/,""));return s?this._pascalCase(s):"AnonymousComponent"}_getOrCreateUniqueSlug(e){if(this._componentToSlug.has(e))return this._componentToSlug.get(e);let t=this._generateSlug(e),i=t,s=1;for(;this._slugToWindow.has(i)&&this._slugToWindow.get(i).window!==e;)i=`${t}${s++}`;return this._componentToSlug.set(e,i),i}setAvailableWindows(e){this._visibleSlugs.clear();for(const t of e){let i,s,r,o;typeof t=="object"&&t.window?(i=t.window,r=t.slug||this._getOrCreateUniqueSlug(i),s=t.title||this._pascalToTitle(r),o=t.icon||""):(i=t,r=this._getOrCreateUniqueSlug(i),s=this._pascalToTitle(r),o="");const a={window:i,title:s,slug:r,icon:o};this._componentToSlug.set(i,r),this._slugToWindow.set(r,a),this._visibleSlugs.add(r)}}getWindowBySlug(e){return this._slugToWindow.get(e)||null}getWindows(){const e=[];for(const t of this._visibleSlugs){const i=this._slugToWindow.get(t);i&&e.push(i)}return e}getWindowSlugs(){return Array.from(this._visibleSlugs)}getAvailableWindowKinds(){return this.getWindowSlugs()}}let WE=class{constructor(){this._mouseX=0,this._mouseY=0,this._startX=0,this._startY=0,this._callBacks=[],this._isDragging=!1,window.addEventListener("mousemove",e=>{this._mouseX=e.pageX,this._mouseY=e.pageY}),window.addEventListener("mousemove",e=>{this._onDragMove(e)}),window.addEventListener("mouseup",e=>{this._onDragEnd(e)})}getCursorPos(){return{x:this._mouseX,y:this._mouseY}}dragStart(e,t){return this._isDragging||(this._startX=this._mouseX,this._startY=this._mouseY),this._callBacks.push({onMove:typeof e>"u"?null:e,onEnd:typeof t>"u"?null:t}),this._isDragging=!0,this._callBacks.length-1}_onDragMove(e){if(!this._isDragging)return!1;e.preventDefault();var t=this._startX-this._mouseX,i=this._startY-this._mouseY;if(this._callBacks.length>0)for(var s=0;s<this._callBacks.length;s++)this._callBacks[s].onMove!=null&&this._callBacks[s].onMove.call(null,t,i)}_onDragEnd(e){var t=this._startX-this._mouseX,i=this._startY-this._mouseY;if(this._callBacks.length>0)for(var s=0;s<this._callBacks.length;s++)this._callBacks[s].onEnd!=null&&this._callBacks[s].onEnd.call(null,t,i);this._isDragging=!1,this._callBacks=[]}cancelCallback(e){this._callBacks[e]={onMove:null,onEnd:null}}};class Wt{constructor(e,t,i,s){this.frames=[],this.availableWindows=e||[],this.availableWindowList=new zE(this.availableWindows),this.defaultLayout=t||null,this.pos=i,this.useWindowingDebug=se(s||!1),this.dragHelper=new WE,this.framesRef=Dn([]),this.windows=[],this.windowsRef=Dn([]),this.windowDOMContainer=null,this.showBlenderSplitMergeHandles=se(!0),this.isReady=se(!1),this.frameFocusID=se(null),this.mergePreviewID=se(null),this.mergePreviewDirection=se(null),this.splitModeDetails=Dn(null),this.edgeMap=new lf(this),this.windowDragSystem=new GE(this),this.selectedEdges=Dn([]),this.useWindowingDebug.value==!0&&(console.log("Building new WindowManager"),window.wm=this),this.mwiBGImagePath=se("")}clearWindowLayout(){this.frames=[],this.framesRef.value=[],this.windows=[],this.windowsRef.value=[],this.frameFocusID.value=null,this.mergePreviewID.value=null,this.edgeMap=new lf(this),this.selectedEdges.value=[]}loadWindowLayout(){console.log("Building a window layout..."),Cs.loadDefaultLayout(this)}setContainerEl(e){this.windowDOMContainer=e,this.isReady.value=!0,console.log("Window Manager is Ready"),this.loadWindowLayout(),this.edgeMap.fitWindows(!0)}unsetContainerEl(){this.windowDOMContainer=null,this.isReady.value=!1}addWindowFrame(e,t,i,s,r,o){r=r===void 0?!1:r;const a=new Q(this,o);return a.updateFramePos({t:e,b:t,l:i,r:s}),this.frames=[...this.frames,a],this.framesRef.value=this.frames,r&&this.edgeMap.fitWindows(!0),a}getFrameByID(e){e=typeof e=="number"?`frame_${e}`:e;const t=this.frames.filter(i=>i.frameID===e);if(t.length<=0)return null;if(t.length>1)throw new Error("Oh dear, something has gone very wrong.");return t[0]}getFrameFromWindow(e){if(e==null)return null;for(let t=0;t<this.frames.length;t++){const i=this.frames[t];if(i.windows.includes(e))return i}return null}removeWindowFrame(e,t){if(t=t===void 0?!1:t,e=typeof e=="number"?`frame_${e}`:e,e=typeof e=="string"?this.getFrameByID(e):e,e==null)throw new Error("Attempt to remove a WindowFrame that could not be found or doesn't exist");this.frames=this.frames.filter(i=>i!=e),this.framesRef.value=this.frames,t&&this.edgeMap.fitWindows(!0)}startFrameSplit(e,t,i){this.splitModeDetails.value={frame:e,axis:t,superSplitMode:i===void 0?!1:i},e.splitMode.value=t,this.frameFocusID.value=e.frameID}endFrameSplit(e,t){if(this.splitModeDetails.value!=null){if(this.splitModeDetails.value.frame.splitMode.value=Q.SPLIT_MODE.OFF,e==!0){const{frame:i,axis:s}=this.splitModeDetails.value,{splitPos:r}=t,o=i.screenPos.value,a={t:o.t,b:o.b,l:o.l,r:o.r};if(s==Q.SPLIT_MODE.HORIZONTAL){const l=o.t+r;i.updateFramePos({b:l}),this.addWindowFrame(l,a.b,a.l,a.r)}else{const l=o.l+r;i.updateFramePos({r:l}),this.addWindowFrame(a.t,a.b,l,a.r)}this.isReady.value==!0&&this.edgeMap.fitWindows(!0)}this.splitModeDetails.value=null,this.frameFocusID.value=null}}splitOnDrop(e,t){const i=e.screenPos.value,s={t:i.t,b:i.b,l:i.l,r:i.r},r=i.l+(i.r-i.l)/2,o=i.t+(i.b-i.t)/2;let a=null;switch(t){case"left":e.updateFramePos({l:r}),a=this.addWindowFrame(s.t,s.b,s.l,r);break;case"right":e.updateFramePos({r}),a=this.addWindowFrame(s.t,s.b,r,s.r);break;case"top":e.updateFramePos({t:o}),a=this.addWindowFrame(s.t,o,s.l,s.r);break;case"bottom":e.updateFramePos({b:o}),a=this.addWindowFrame(o,s.b,s.l,s.r);break}return this.edgeMap.fitWindows(!0),a}onContainerResize(e,t){this.edgeMap.fitWindows()}startDrag(e,t){this.selectEdges(e,t);const i=Q.EDGE,s=Q.EDGE_ORIENTATION,r=t==i.LEFT||t==i.RIGHT?s.VERTICAL:s.HORIZONTAL;let o=this.windowDOMContainer.offsetWidth,a=this.windowDOMContainer.offsetHeight;const l=e.preferredPos[t];this.dragHelper.dragStart((c,u)=>{const h=this.edgeMap.getPreferredPositionsCache();c/=o,u/=a;const d=r==s.VERTICAL?l-c:l-u;for(let m=0;m<this.selectedEdges.value.length;m++){const{frame:p,edge:b}=this.selectedEdges.value[m];p.preferredPos[b]=d}const{width:f,height:v}=this.edgeMap.fitWindows(!1);this.edgeMap.checkValidLayout(f,v)==!1&&this.edgeMap.applyPreferredPositionsCache(h)},(c,u)=>{this.endDrag()})}selectEdges(e,t){const s=[...this.findConnectedEdges(e,t)];this.selectedEdges.value=s}findConnectedEdges(e,t){const i=[];i.push({frame:e,edge:t}),this.edgeMap.rebuildMap();const s=e.screenPos.value[t],r=Q.EDGE,o=Q.EDGE_ORIENTATION,a=t==r.LEFT||t==r.RIGHT?o.VERTICAL:o.HORIZONTAL,l=a==o.HORIZONTAL?r.LEFT:r.TOP,c=a==o.HORIZONTAL?r.RIGHT:r.BOTTOM;let h=(a==o.HORIZONTAL?this.edgeMap.vMap:this.edgeMap.hMap).get(s).filter(v=>v.frame!=e),d=e.screenPos.value[l],f=e.screenPos.value[c];for(;;){let v=!1;for(let _=0;_<h.length;_++){const m=h[_],p=m.frame.screenPos.value[l],b=m.frame.screenPos.value[c],w=Cn(d,f,p,b);if(w==Cn.RESULT.OVERLAP||w==Cn.RESULT.EXACT_MATCH){i.push(m),h=h.filter(A=>A!=m),d=p<d?p:d,f=b>f?b:f,v=!0;break}}if(v==!1)break}return i}endDrag(){this.selectedEdges.value=[]}mergeWindowFrames(e,t){const i=e.neighbors[t];if(i==null){console.error("Merging with neighbor that DNE.");return}const s={t:Math.min(e.preferredPos.t,i.preferredPos.t),b:Math.max(e.preferredPos.b,i.preferredPos.b),l:Math.min(e.preferredPos.l,i.preferredPos.l),r:Math.max(e.preferredPos.r,i.preferredPos.r)};e.preferredPos=s,this.removeWindowFrame(i),this.edgeMap.fitWindows()}createWindow(e,t){if(e==null)throw new Error("Cannot create a window without a kind.");(t==null||typeof t!="object")&&(t={});const i=new Tm(this,e,t);return this.windows.push(i),this.windowsRef.value=[...this.windows],i}cullOrphanedWindows(){let e=[];this.frames.map(t=>e=[...e,...t.windows]),this.windows=e,this.windowsRef.value=[...this.windows]}}tn(Wt,"SNAP_SIZE",10);tn(Wt,"SMALLEST_WIDTH_OR_HEIGHT",20);tn(Wt,"SPLIT_MERGE_DRAG_THRESHOLD",10);class XE{constructor(e,t){is(this,Yn,null),is(this,tu,{}),is(this,Hr,null),ss(this,Yn,e),ss(this,tu,t),ss(this,Hr,Ct(this,Yn).mgr)}printFrame(){console.log("Printing from WindowFrameContext"),console.log(Ct(this,Yn))}addWindow(e,t={}){if(!this.getAvailableWindowKinds().includes(e))throw new Error(`Window slug "${e}" is not available in this frame.`);const s=Ct(this,Hr).createWindow(e,t);Ct(this,Yn).addWindow(s)}getAvailableWindowKinds(){return Ct(this,Hr).availableWindowList.getAvailableWindowKinds()}getFrameDimensions(){return Ct(this,Yn).getFrameDim()}getWindows(){return[...Ct(this,Yn).windows].map(i=>i.ctx)}closeAllWindows(){Ct(this,Yn).closeAllWindows()}setFrameStyle(e){const t=Object.values(Q.STYLE),i=Object.keys(Q.STYLE);if(typeof e!="string"&&typeof e!="number")throw new Error(`Invalid frame style type: ${typeof e}. Must be a string or number.`);if(typeof e=="string")if(!isNaN(e))e=parseInt(e,10);else{if(e=e.toUpperCase(),!i.includes(e))throw new Error(`Invalid frame style key: ${e}. Must be one of ${i.join(", ")}.`);e=Q.STYLE[e]}if(typeof e=="number"&&!t.includes(e))throw new Error(`Invalid frame style value: ${e}. Must be one of ${t.join(", ")}.`);Ct(this,Yn).frameStyle.value=e}getFrameStyle(){const e=Ct(this,Yn).frameStyle.value;return{styleName:Object.keys(Q.STYLE).find(i=>Q.STYLE[i]===e),styleValue:e}}}Yn=new WeakMap;tu=new WeakMap;Hr=new WeakMap;const Os=class it{constructor(e,t){this.frameID=`frame_${it.IDCounter++}`,this.mgr=e,t=Ca(t,{frameStyle:it.STYLE.TABBED,allowIconifying:!1,addDebugWindows:!1}),this.frameStyle=se(t.frameStyle),this.allowIconifying=se(t.allowIconifying),this.splitMode=se(it.SPLIT_MODE.OFF),this.windows=[],this.windowsRef=Dn([]),this.currentTab=se(null),this.screenPos=Dn({t:50,b:100,l:70,r:140}),this.neighborStatus=Ui({t:it.EDGE_NEIGHBOR_STATUS.UNDETERMINED,b:it.EDGE_NEIGHBOR_STATUS.UNDETERMINED,l:it.EDGE_NEIGHBOR_STATUS.UNDETERMINED,r:it.EDGE_NEIGHBOR_STATUS.UNDETERMINED}),this.neighbors={t:null,b:null,l:null,r:null},this.preferredPos={t:0,b:0,l:0,r:0},this.preferredPosRef=se({}),this.preferredPosRef.value={...this.preferredPos},this.mwiDragX=se(0),this.mwiDragY=se(0),this.frameContext=new XE(this)}getFrameDim(e){const t={top:this.screenPos.value[it.EDGE.TOP],bottom:this.screenPos.value[it.EDGE.BOTTOM],left:this.screenPos.value[it.EDGE.LEFT],right:this.screenPos.value[it.EDGE.RIGHT]};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.top+=2,t}updateFramePos(e){const t=Ca(e,{t:this.screenPos.value.t,b:this.screenPos.value.b,l:this.screenPos.value.l,r:this.screenPos.value.r});this.screenPos.value=t}cachePreferredPercentages(e,t,i){i=i===void 0?!1:i;const s=ea(this.screenPos.value.t/t),r=ea(this.screenPos.value.b/t),o=ea(this.screenPos.value.l/e),a=ea(this.screenPos.value.r/e);this.preferredPos.t=this.preferredPos.t==null||i?s:this.preferredPos.t,this.preferredPos.b=this.preferredPos.b==null||i?r:this.preferredPos.b,this.preferredPos.l=this.preferredPos.l==null||i?o:this.preferredPos.l,this.preferredPos.r=this.preferredPos.r==null||i?a:this.preferredPos.r,this.preferredPosRef.value={...this.preferredPos}}autoUpdateFramePos(e,t){const i={t:this.preferredPos.t*t,b:this.preferredPos.b*t,l:this.preferredPos.l*e,r:this.preferredPos.r*e};this.preferredPos.t<1&&(i.t-=i.t%Wt.SNAP_SIZE),this.preferredPos.b<1&&(i.b-=i.b%Wt.SNAP_SIZE),this.preferredPos.l<1&&(i.l-=i.l%Wt.SNAP_SIZE),this.preferredPos.r<1&&(i.r-=i.r%Wt.SNAP_SIZE),this.updateFramePos(i)}updateNeighbors(e,t){this.updateNeighborsOnEdge(it.EDGE.LEFT,e,t),this.updateNeighborsOnEdge(it.EDGE.RIGHT,e,t),this.updateNeighborsOnEdge(it.EDGE.TOP,e,t),this.updateNeighborsOnEdge(it.EDGE.BOTTOM,e,t)}updateNeighborsOnEdge(e,t,i){this.neighbors[e]=null;const s=e==it.EDGE.TOP||e==it.EDGE.BOTTOM,r=!s,o=this.screenPos.value[e];if(o<=0||s&&o>=i||r&&o>=t){this.neighborStatus[e]=it.EDGE_NEIGHBOR_STATUS.EXTREMITY;return}this.neighborStatus[e]=it.EDGE_NEIGHBOR_STATUS.PARTIAL;const l=(s?this.mgr.edgeMap.vMap:this.mgr.edgeMap.hMap).get(o).filter(f=>f.frame.frameID!=this.frameID),c=r?it.EDGE.TOP:it.EDGE.LEFT,u=r?it.EDGE.BOTTOM:it.EDGE.RIGHT,h=this.screenPos.value[c],d=this.screenPos.value[u];for(let f=0;f<l.length;f++){const v=l[f].frame,_=v.screenPos.value[c],m=v.screenPos.value[u];if(Cn(h,d,_,m)==Cn.RESULT.EXACT_MATCH){this.neighborStatus[e]=it.EDGE_NEIGHBOR_STATUS.ADJACENT,this.neighbors[e]=v;return}}}addWindow(e){this.frameStyle.value==it.STYLE.SINGLE&&(this.windows=[]),this.windows.push(e),this.windowsRef.value=[...this.windows]}removeWindow(e,t){let i=!1,s=!1;if(typeof t=="boolean"?i=t:typeof t=="object"&&(i=t.noCull||!1,s=t.noMerge||!1),typeof e=="string"){let r=this.windows.filter(o=>o.windowID==e)[0];if(e===void 0){console.error(`Tried to remove window ${e} from frame ${this.frameID} that doesn't exist`);return}e=r}if(e.typeName!==void 0&&e.typeName!="Window"){console.error("Tried to remove something other than a window");return}if(this.windows=this.windows.filter(r=>r!=e),this.windowsRef.value=[...this.windows],s==!1&&this.frameStyle.value!=it.STYLE.MWI&&this.windows.length<=0){let r=[{check:it.EDGE.RIGHT,opposite:it.EDGE.LEFT},{check:it.EDGE.BOTTOM,opposite:it.EDGE.TOP},{check:it.EDGE.LEFT,opposite:it.EDGE.RIGHT},{check:it.EDGE.TOP,opposite:it.EDGE.BOTTOM}];for(let o=0;o<r.length;o++){const a=r[o].check,l=r[o].opposite;if(this.neighborStatus[a]==it.EDGE_NEIGHBOR_STATUS.ADJACENT){const c=this.neighbors[a];this.mgr.mergeWindowFrames(c,l);break}}}i==!1&&this.mgr.cullOrphanedWindows()}static getOppositeEdge(e){return{t:it.EDGE.BOTTOM,b:it.EDGE.TOP,l:it.EDGE.RIGHT,r:it.EDGE.LEFT}[e]}closeAllWindows(){const e=[...this.windows];for(let t=0;t<e.length;t++)e[t].close();this.windows=[],this.windowsRef.value=[],this.currentTab.value=null}};tn(Os,"IDCounter",0);tn(Os,"STYLE",{SINGLE:0,TABBED:10,MWI:20});tn(Os,"SPLIT_MODE",{OFF:0,HORIZONTAL:10,VERTICAL:20});tn(Os,"EDGE",{LEFT:"l",RIGHT:"r",TOP:"t",BOTTOM:"b"});tn(Os,"EDGE_NEIGHBOR_STATUS",{UNDETERMINED:0,EXTREMITY:1,PARTIAL:2,ADJACENT:3,SELECTED:4});tn(Os,"EDGE_ORIENTATION",{VERTICAL:0,HORIZONTAL:1});let Q=Os;function Ra(n,e){const i=(Ra.canvas||(Ra.canvas=document.createElement("canvas"))).getContext("2d");return i.font=e,i.measureText(n).width}function Yl(n,e){return window.getComputedStyle(n,null).getPropertyValue(e)}function bm(n=document.body){const e=Yl(n,"font-weight")||"normal",t=Yl(n,"font-size")||"16px",i=Yl(n,"font-family")||"Times New Roman";return`${e} ${t} ${i}`}const YE=n=>(mu("data-v-482379b9"),n=n(),gu(),n),qE=["frameID"],KE=["frameID"],ZE=["frameID","fantomTabX","idx","onMousedown"],QE={class:"title"},jE=["onMousedown"],JE=YE(()=>ae("span",null,"✖",-1)),$E=[JE],ew={key:1,class:"gradientFade left"},tw={key:2,class:"gradientFade right"},nw={__name:"WindowFrameHeader",props:{frame:{type:Q,default:null}},emits:["onWindowTearOff"],setup(n,{emit:e}){const t=n,i=se(null),s=se(null),r=se(!1),o=se(0),a=se(0);let l=[];const c=Dn([]);let u=[],h=null,d=null;Sn(()=>{T(t.frame.windows)}),et(()=>t.frame.windowsRef.value,()=>{T(t.frame.windows)}),et(()=>t.frame.frameStyle.value,()=>{T(t.frame.windows)});const f=se(null);et(()=>t.frame.mgr.windowDragSystem.isDragging.value,()=>{if(t.frame.mgr.windowDragSystem.isDragging.value)f.value=t.frame.currentTab.value;else{const M=l.filter(S=>S.fantom==!0)[0];if(M!==void 0){M.fantom=!1,t.frame.currentTab.value=M.id;return}f.value!=null&&(t.frame.currentTab.value=f.value)}}),et(()=>t.frame.mgr.windowDragSystem.dropRegion.tabLeft.value,()=>{v()});function v(){if(t.frame.mgr.windowDragSystem.dropRegion.tabFrame.value!=t.frame.frameID){T(t.frame.windows),f.value!=null&&(t.frame.currentTab.value=f.value);return}let M=l.filter(g=>g.fantom==!0)[0];(M==null||M===void 0)&&(M=A(t.frame.mgr.windowDragSystem.dragOperationDetails.window,!0)),M.x=t.frame.mgr.windowDragSystem.dropRegion.tabLeft.value-M.width/2;let S=[...l,M];S.sort((g,x)=>g.x-x.x);for(let g=0;g<S.length;g++)S[g].order=g;T(t.frame.windows,M),t.frame.currentTab.value=9999}function _(E){i.value.scrollBy({left:E.deltaY<0?-30:30})}function m(E,M){if(t.frame.windows.length<=0)return;const S=10;d=E.target,r.value=!0,h=t.frame.mgr.dragHelper.dragStart((x,P)=>{if(Math.abs(x)>S||Math.abs(P)>S){b(M),r.value=!1;return}},(x,P)=>{r.value=!1,d=null})}function p(E,M){t.frame.currentTab.value=M.id,f.value=M.id;const S=30,g=M.x;s.value=M.id,d=E.target,h=t.frame.mgr.dragHelper.dragStart((P,I)=>{if(Math.abs(I)>S){b(M);return}const L=g-P;M.x=L;let F=[...l];F.sort((Y,B)=>Y.x-B.x);for(let Y=0;Y<F.length;Y++)F[Y].order=Y;T(t.frame.windows),M.x=L},(P,I)=>{T(t.frame.windows),s.value=null,d=null})}function b(E){const M=t.frame.windows.filter(g=>g.windowID==E.id)[0],S=t.frame.mgr.dragHelper;h!=null&&(S.cancelCallback(h),h=null),e("onWindowTearOff",{window:M,frame:t.frame,titleBar:d})}function w(E){t.frame.removeWindow(E.id)}function A(E,M){M=M===void 0?!1:M;const S=i.value==null?"":bm(i.value),g=Ra(E.titleRef.value,S),x=E.windowDetails.icon,P=x!="",I=P?24:0,L=g*1.1+30+I;return{id:E.windowID,title:E.titleRef,width:L,order:9999,x:0,fantom:M,hasIcon:P,iconPath:x}}function T(E,M){u.forEach(I=>I()),u=[],a.value=t.frame.windows.length,t.frame.frameStyle.value==Q.STYLE.SINGLE&&t.frame.windows.length>1&&t.frame.windows.filter(L=>L.windowID!=t.frame.currentTab.value).map(L=>t.frame.removeWindow(L));const S=E.map(I=>{const L=A(I),F=et(()=>I.titleRef.value,()=>{T(t.frame.windows)});return u.push(F),L});M!==void 0&&S.push(M);let g=[...l];const x=HE(l,S,"id","id");x.removedItems.length>0&&x.removedItems.map(I=>{g=g.filter(L=>L.id!=I.id)}),g=[...g,...x.newItems],g.map(I=>{const L=S.filter(F=>F.id==I.id)[0];L&&(I.width=L.width)}),g.sort((I,L)=>I.order-L.order);let P=6;for(let I=0;I<g.length;I++){const L=g[I];L.order=0,L.x=P,P+=L.width+3}o.value=P,l=g,c.value=[...l],t.frame.currentTab.value==null?t.frame.currentTab.value=l.length<=0?null:l[0].id:(g.filter(I=>I.id==t.frame.currentTab.value).length<=0&&(t.frame.currentTab.value=l.length<=0?null:l[0].id),x.newItems.length>0&&l.length>0&&(t.frame.currentTab.value=l[l.length-1].id))}return(E,M)=>{var S,g,x;return n.frame.frameStyle.value!=V(Q).STYLE.MWI?(de(),ye("div",{key:0,class:ut(["frameHeader noSel",{tabbed:n.frame.frameStyle.value==V(Q).STYLE.TABBED}])},[n.frame.frameStyle.value==V(Q).STYLE.SINGLE&&((S=c.value[0])!=null&&S.hasIcon)?(de(),ye("div",{key:0,class:"icon",style:wt({backgroundImage:`url(${(g=c.value[0])==null?void 0:g.iconPath})`})},null,4)):Ye("",!0),kt(ae("div",{class:ut(["singleTitle dropTarget",{isDragging:r.value}]),frameID:n.frame.frameID,region:"frame",onMousedown:M[0]||(M[0]=P=>m(P,c.value[0]))},yn((x=c.value[0])==null?void 0:x.title.value),43,qE),[[ac,n.frame.frameStyle.value==V(Q).STYLE.SINGLE]]),kt(ae("div",{ref_key:"tabContainerEl",ref:i,class:ut(["tabContainer dropTarget",{dropMode:t.frame.mgr.windowDragSystem.isDragging.value==!0}]),frameID:n.frame.frameID,region:"tab",fantomTabX:9e3,onWheelPassive:_},[(de(!0),ye(At,null,ei(c.value,(P,I)=>(de(),ye("div",{class:ut(["tab",{dropTarget:P.fantom==!1,selected:P.id==n.frame.currentTab.value,dragging:P.id==s.value,fantom:P.fantom==!0,hasIcon:P.hasIcon}]),frameID:n.frame.frameID,region:"tab",fantomTabX:P.x,key:I,idx:I,style:wt({left:`${P.x}px`,width:`${P.width}px`}),onMousedown:L=>p(L,P)},[P.hasIcon?(de(),ye("div",{key:0,class:"icon",style:wt({backgroundImage:`url(${P.iconPath})`})},null,4)):Ye("",!0),ae("div",QE,yn(P.title.value),1),ae("div",{class:"closeButton",onMousedown:L=>w(P)},$E,40,jE)],46,ZE))),128)),ae("div",{class:"spacer",style:wt({left:`${o.value}px`})},null,4)],42,KE),[[ac,n.frame.frameStyle.value==V(Q).STYLE.TABBED]]),n.frame.frameStyle.value==V(Q).STYLE.TABBED?(de(),ye("div",ew)):Ye("",!0),n.frame.frameStyle.value==V(Q).STYLE.TABBED?(de(),ye("div",tw)):Ye("",!0)],2)):Ye("",!0)}}},iw=Bi(nw,[["__scopeId","data-v-482379b9"]]),sw=n=>(mu("data-v-3d3d9978"),n=n(),gu(),n),rw=["idx","onMousedown"],ow=["onMousedown"],aw={class:"titleText"},lw=["onMousedown"],cw=sw(()=>ae("span",null,"✖",-1)),uw=[cw],hw=["onMousedown"],dw=["onMousedown"],fw=["onMousedown"],pw=["onMousedown"],mw=["onMousedown"],gw=["onMousedown"],vw=["onMousedown"],_w=["onMousedown"],xw={key:1,class:"MWIInnerShadow"},Aw={__name:"WindowFrameContents",props:{frame:{type:Q,default:null}},emits:["onWindowTearOff"],setup(n,{emit:e}){const t=n;let i=10;const s=se(!1);let r=null,o=null;const a=se(!1);let l=null;et(()=>t.frame.frameStyle.value,()=>{t.frame.frameStyle.value==Q.STYLE.MWI&&m(t.frame.windows)}),et(()=>t.frame.windowsRef.value.length,()=>{if(t.frame.frameStyle.value==Q.STYLE.MWI&&(m(t.frame.windows),t.frame.windows.length>0)){const T=t.frame.windows.length-1,E=t.frame.windows[T];v(E)}});function c(){if(a.value==!0){const T=o;o=null,u(T)}}function u(T){o=null;const E=t.frame.mgr.dragHelper;l!=null&&(E.cancelCallback(l),l=null);const M=r;a.value=!1,r=null,e("onWindowTearOff",{window:T,frame:t.frame,titleBar:M})}function h(T,E){const M={x:T.position.x,y:T.position.y,width:T.size.width,height:T.size.height};E=Array.isArray(E)==!1?[E]:E,t.frame.mgr.dragHelper.dragStart((g,x)=>{E.map(P=>{switch(P){case"left":T.size.width=M.width+g,T.position.x=M.x-g;break;case"top":T.size.height=M.height+x,T.position.y=M.y-x;break;case"right":T.size.width=M.width-g;break;case"bottom":T.size.height=M.height-x;break}}),T.size.width=T.size.width<100?100:T.size.width,T.size.height=T.size.height<40?40:T.size.height},(g,x)=>{s.value=!1})}function d(T){if(T.which!=3)return;T.preventDefault();const E={x:t.frame.mwiDragX.value,y:t.frame.mwiDragY.value};s.value=!0,t.frame.mgr.dragHelper.dragStart((S,g)=>{t.frame.mwiDragX.value=E.x-S,t.frame.mwiDragY.value=E.y-g},(S,g)=>{s.value=!1,r=null})}function f(T,E){v(E),r=T.target;const M={x:E.position.x,y:E.position.y};a.value=!0,o=E,l=t.frame.mgr.dragHelper.dragStart((g,x)=>{E.position.x=M.x-g,E.position.y=M.y-x},(g,x)=>{a.value=!1,o=null})}function v(T){T.position.z=999;let E=[...t.frame.windows].sort((M,S)=>M.position.z-S.position.z);for(let M=0;M<E.length;M++)E[M].position.z=M*30}function _(T){t.frame.removeWindow(T)}function m(T){for(let M=0;M<T.length;M++){const S=T[M];S.position.x==null&&(S.position.x=i,S.position.y=parseInt(i*1.5),S.position.z=i,i+=30)}}function p(T){switch(T.frameStyle.value){case Q.STYLE.MWI:return"frame_mwi";case Q.STYLE.SINGLE:return"frame_single";case Q.STYLE.TABBED:return"frame_tabbed";default:return"frame_single"}}function b(T){return t.frame.frameStyle.value==Q.STYLE.MWI||t.frame.frameStyle.value==Q.STYLE.SINGLE||T.windowID==t.frame.currentTab.value}function w(T){return t.frame.frameStyle.value!=Q.STYLE.MWI?{inset:"0px 0px 0px 0px",width:"auto",height:"auto"}:{left:`${T.position.x}px`,top:`${T.position.y}px`,width:`${T.size.width}px`,height:`${T.size.height}px`,"z-index":`${T.position.z}`}}function A(T,E){E.domContainer.value=T}return(T,E)=>(de(),ye("div",{style:wt({"background-position":`${n.frame.mwiDragX.value}px ${n.frame.mwiDragY.value}px`,"--bg-image--old":"url('/mwi_dot.png')","--bg-image":`url(${n.frame.mgr.mwiBGImagePath.value})`}),class:ut({frameContents:!0,noHeader:n.frame.frameStyle.value==V(Q).STYLE.MWI,isDragging:s.value}),onMousedown:E[0]||(E[0]=M=>d(M)),onMouseleave:c},[Ye("",!0),ae("div",{class:"dragLayer",style:wt({left:n.frame.frameStyle.value==V(Q).STYLE.MWI?`${n.frame.mwiDragX.value}px`:"0px",top:n.frame.frameStyle.value==V(Q).STYLE.MWI?`${n.frame.mwiDragY.value}px`:"0px"})},[(de(!0),ye(At,null,ei(n.frame.windowsRef.value,(M,S)=>kt((de(),ye("div",{key:M.windowID,idx:S,class:ut([p(n.frame),"windowContentsContainer"]),style:wt(w(M)),onMousedown:g=>v(M)},[ae("div",{class:"titleBar",onMousedown:g=>f(g,M)},[M.windowDetails.icon!=""?(de(),ye("div",{key:0,class:"icon",style:wt({backgroundImage:`url('${M.windowDetails.icon}')`})},null,4)):Ye("",!0),ae("div",aw,yn(M.titleRef.value),1),ae("div",{class:"closeButton",onMousedown:g=>_(M)},uw,40,lw)],40,ow),ae("div",{class:"windowContents",ref_for:!0,ref:g=>A(g,M)},null,512),n.frame.frameStyle.value==V(Q).STYLE.MWI?(de(),ye("div",{key:0,class:"mwiResizeHandle left",onMousedown:g=>h(M,"left")},null,40,hw)):Ye("",!0),n.frame.frameStyle.value==V(Q).STYLE.MWI?(de(),ye("div",{key:1,class:"mwiResizeHandle right",onMousedown:g=>h(M,"right")},null,40,dw)):Ye("",!0),n.frame.frameStyle.value==V(Q).STYLE.MWI?(de(),ye("div",{key:2,class:"mwiResizeHandle top",onMousedown:g=>h(M,"top")},null,40,fw)):Ye("",!0),n.frame.frameStyle.value==V(Q).STYLE.MWI?(de(),ye("div",{key:3,class:"mwiResizeHandle bottom",onMousedown:g=>h(M,"bottom")},null,40,pw)):Ye("",!0),n.frame.frameStyle.value==V(Q).STYLE.MWI?(de(),ye("div",{key:4,class:"mwiResizeHandle tl",onMousedown:g=>h(M,["top","left"])},null,40,mw)):Ye("",!0),n.frame.frameStyle.value==V(Q).STYLE.MWI?(de(),ye("div",{key:5,class:"mwiResizeHandle tr",onMousedown:g=>h(M,["top","right"])},null,40,gw)):Ye("",!0),n.frame.frameStyle.value==V(Q).STYLE.MWI?(de(),ye("div",{key:6,class:"mwiResizeHandle bl",onMousedown:g=>h(M,["bottom","left"])},null,40,vw)):Ye("",!0),n.frame.frameStyle.value==V(Q).STYLE.MWI?(de(),ye("div",{key:7,class:"mwiResizeHandle br",onMousedown:g=>h(M,["bottom","right"])},null,40,_w)):Ye("",!0)],46,rw)),[[ac,b(M)]])),128))],4),n.frame.frameStyle.value==V(Q).STYLE.MWI?(de(),ye("div",xw)):Ye("",!0)],38))}},Mw=Bi(Aw,[["__scopeId","data-v-3d3d9978"]]),Ku=n=>(mu("data-v-1d51c388"),n=n(),gu(),n),yw={class:"innerWrapper"},Sw=Ku(()=>ae("div",{class:"icon"},null,-1)),Ew=[Sw],ww=Ku(()=>ae("div",{class:"arrowGraphic"},null,-1)),Tw=Ku(()=>ae("div",{class:"darkenGraphic"},null,-1)),bw=[ww,Tw],Cw={key:1,class:"tabDropTargets"},Rw=["frameID"],Dw=["frameID"],Pw=["frameID"],Iw=["frameID"],Lw=["frameID"],Uw={__name:"WindowFrameV",props:{frame:{type:Q,default:null}},emits:["onWindowTearOff"],setup(n,{emit:e}){const t=n,i=ft("windowManager"),s=se(0),r=se(null);et(()=>t.frame.splitMode.value,()=>{t.frame.splitMode.value!=Q.SPLIT_MODE.OFF&&setTimeout(()=>{var M;return(M=r.value)==null?void 0:M.focus()},10)});function o(M){e("onWindowTearOff",M)}function a(M){const S=t.frame.neighborStatus[M],g={};g[Q.EDGE_NEIGHBOR_STATUS.UNDETERMINED]="undetermined_edge",g[Q.EDGE_NEIGHBOR_STATUS.EXTREMITY]="extremity_edge",g[Q.EDGE_NEIGHBOR_STATUS.PARTIAL]="partial_edge",g[Q.EDGE_NEIGHBOR_STATUS.ADJACENT]="adjacent_edge";let x=g[S],P=[...i.selectedEdges.value];return P=P.filter(I=>I.frame==t.frame),P.length>0&&P[0].edge==M&&(x="selected_edge"),x}function l(M){if(M==null){const S=l(Q.EDGE.TOP),g=l(Q.EDGE.BOTTOM),x=l(Q.EDGE.LEFT),P=l(Q.EDGE.RIGHT);return S||g||x||P}else return t.frame.neighborStatus[M]==Q.EDGE_NEIGHBOR_STATUS.ADJACENT}function c(){const M=Wt.SMALLEST_WIDTH_OR_HEIGHT*2,S=t.frame.getFrameDim();return{h:S.height>M,v:S.width>M,neither:!(S.height>M)&&!(S.width>M)}}function u(M,S,g){of.showContextMenu({x:M.x,y:M.y,theme:"vue-win-mgr-theme",items:[{label:"Split Vertically",hidden:g=="v",disabled:c().v==!1,svgIcon:"#iconVSplit",onClick:()=>_("v",!0)},{label:"Split Horizontally",hidden:g=="h",disabled:c().h==!1,svgIcon:"#iconHSplit",onClick:()=>_("h",!0)},{label:"Merge Left",hidden:l(S)==!1||g=="h",svgIcon:"#iconMergeLeft",onClick:()=>A(S,S==Q.EDGE.RIGHT)},{label:"Merge Right",hidden:l(S)==!1||g=="h",svgIcon:"#iconMergeRight",onClick:()=>A(S,S==Q.EDGE.LEFT)},{label:"Merge Up",hidden:l(S)==!1||g=="v",svgIcon:"#iconMergeUp",onClick:()=>A(S,S==Q.EDGE.BOTTOM)},{label:"Merge Down",hidden:l(S)==!1||g=="v",svgIcon:"#iconMergeDown",onClick:()=>A(S,S==Q.EDGE.TOP)}]})}function h(M){const S={};S[Q.STYLE.SINGLE]="iconFrameSingle",S[Q.STYLE.TABBED]="iconFrameTabbed",S[Q.STYLE.MWI]="iconFrameMWI";const g=`#${S[t.frame.frameStyle.value]}`,x=t.frame.frameStyle.value;let P="Add Tab";x==Q.STYLE.SINGLE&&(P="Switch View"),x==Q.STYLE.MWI&&(P="Add Window"),of.showContextMenu({x:M.x,y:M.y,theme:"vue-win-mgr-theme",items:[{label:P,svgIcon:g,children:i.availableWindowList.getWindows().map(I=>({label:I.title,onClick:()=>d(I.slug),icon:I.icon==""?null:gr("img",{src:I.icon,style:{width:"20px",height:"20px"}})}))},{label:"Frame Mode",svgIcon:g,children:[{label:"Tabbed",onClick:()=>f(Q.STYLE.TABBED),checked:t.frame.frameStyle.value==Q.STYLE.TABBED},{label:"Single Window",onClick:()=>f(Q.STYLE.SINGLE),checked:t.frame.frameStyle.value==Q.STYLE.SINGLE},{label:"Floating Windows",onClick:()=>f(Q.STYLE.MWI),checked:t.frame.frameStyle.value==Q.STYLE.MWI}]},{label:"Split Frame...",disabled:c().neither,svgIcon:"#iconSplitFrame",children:[{label:"Vertically",disabled:c().v==!1,svgIcon:"#iconVSplit",onClick:()=>_("v",!0)},{label:"Horizontally",disabled:c().h==!1,svgIcon:"#iconHSplit",onClick:()=>_("h",!0)}]},{label:"Merge Frame...",disabled:l()==!1,svgIcon:"#iconMergeRight",children:[{label:"Merge Left",disabled:l(Q.EDGE.LEFT)==!1,svgIcon:"#iconMergeLeft",onClick:()=>A(Q.EDGE.LEFT)},{label:"Merge Right",disabled:l(Q.EDGE.RIGHT)==!1,svgIcon:"#iconMergeRight",onClick:()=>A(Q.EDGE.RIGHT)},{label:"Merge Up",disabled:l(Q.EDGE.TOP)==!1,svgIcon:"#iconMergeUp",onClick:()=>A(Q.EDGE.TOP)},{label:"Merge Down",disabled:l(Q.EDGE.BOTTOM)==!1,svgIcon:"#iconMergeDown",onClick:()=>A(Q.EDGE.BOTTOM)}]}]})}function d(M){const S=i.createWindow(M);t.frame.addWindow(S)}function f(M){t.frame.frameStyle.value=M}function v(){const M=i.splitModeDetails.value;if(M==null||M.superSplitMode==!1)return;const S=M.axis;(S==Q.SPLIT_MODE.VERTICAL&&c().v==!0||S==Q.SPLIT_MODE.HORIZONTAL&&c().h==!0)!=!1&&(i.endFrameSplit(!1),setTimeout(()=>{const x=S==Q.SPLIT_MODE.VERTICAL?"v":"h";_(x,!0)},20))}function _(M,S){S=S===void 0?!1:S,M=M.toUpperCase(),M={H:Q.SPLIT_MODE.HORIZONTAL,V:Q.SPLIT_MODE.VERTICAL}[M],s.value=-10,i.startFrameSplit(t.frame,M,S)}function m(M){const S=t.frame.splitMode.value==Q.SPLIT_MODE.HORIZONTAL;let g=S?M.y-t.frame.screenPos.value.t-i.pos.screenPos.y:M.x-t.frame.screenPos.value.l-i.pos.screenPos.x;const x=Wt.SMALLEST_WIDTH_OR_HEIGHT,P=t.frame.screenPos.value,I=P.r-P.l,L=P.b-P.t,F=x,Y=S?L-x:I-x;g-=g%Wt.SNAP_SIZE,s.value=Sm(g,F,Y),r.value.focus()}function p(){t.frame.splitMode.value!=Q.SPLIT_MODE.OFF&&i.endFrameSplit(!1)}function b(){i.endFrameSplit(!0,{splitPos:s.value})}function w(M){t.frame.neighborStatus[M]!=Q.EDGE_NEIGHBOR_STATUS.UNDETERMINED&&t.frame.neighborStatus[M]!=Q.EDGE_NEIGHBOR_STATUS.EXTREMITY&&i.startDrag(t.frame,M)}function A(M,S){if(S=S===void 0?!1:S,l(M)==!1){console.error("Tried an impossible merge, this should never have happened");return}let g=t.frame;S&&(g=t.frame.neighbors[M],M=Q.getOppositeEdge(M)),i.mergeWindowFrames(g,M)}function T(M){if(M===void 0){i.mergePreviewID.value=null,i.mergePreviewDirection.value=null;return}if(l(M)==!1)return;const S=t.frame.neighbors[M],g=M.replace("t","u").replace("b","d");i.mergePreviewID.value=S.frameID,i.mergePreviewDirection.value=g}function E(M,S){const g={u:{cancelFn:(B,j)=>j>0},d:{cancelFn:(B,j)=>j<0},l:{cancelFn:(B,j)=>B>0},r:{cancelFn:(B,j)=>B<0}};M==Q.EDGE.TOP?(g.u.opFn=l(Q.EDGE.TOP)?()=>(T(Q.EDGE.TOP),!1):null,g.u.completeFn=()=>{A(Q.EDGE.TOP)},g.d.opFn=c().h?()=>(_("h"),!0):null,g.d.completeFn=()=>{b()}):(g.u.opFn=c().h?()=>(_("h"),!0):null,g.u.completeFn=()=>{b()},g.d.opFn=l(Q.EDGE.BOTTOM)?()=>(T(Q.EDGE.BOTTOM),!1):null,g.d.completeFn=()=>{A(Q.EDGE.BOTTOM)}),S==Q.EDGE.LEFT?(g.l.opFn=l(Q.EDGE.LEFT)?()=>(T(Q.EDGE.LEFT),!1):null,g.l.completeFn=()=>{A(Q.EDGE.LEFT)},g.r.opFn=c().v?()=>(_("v"),!0):null,g.r.completeFn=()=>{b()}):(g.l.opFn=c().v?()=>(_("v"),!0):null,g.l.completeFn=()=>{b()},g.r.opFn=l(Q.EDGE.RIGHT)?()=>(T(Q.EDGE.RIGHT),!1):null,g.r.completeFn=()=>{A(Q.EDGE.RIGHT)});let x=!0,P=null,I=null;const L=B=>{const{opFn:j,cancelFn:X,completeFn:ce}=g[B];j!=null&&(I=B,P=ce,j())},F=()=>{i.endFrameSplit(!1),T(),P=null,I=null};i.dragHelper.dragStart((B,j)=>{B*=-1,j*=-1;const X=x;x=Math.sqrt(B*B+j*j)<=Wt.SPLIT_MERGE_DRAG_THRESHOLD;const ce=X!=x,_e=ce&&!x;if(ce&&x){F();return}let Se=Math.abs(B)>=Math.abs(j)?B<0?"l":"r":j<0?"u":"d";if(Se=x?null:Se,_e==!0&&I==null){F(),L(Se);return}let Z=I=="l"&&B>0||I=="r"&&B<0||I=="u"&&j>0||I=="d"&&j<0;if(x==!1&&Z==!0){let O=null;O=I=="r"?"l":O,O=I=="l"?"r":O,O=I=="u"?"d":O,O=I=="d"?"u":O,F(),L(O);return}},(B,j)=>{P!=null&&P(),F()})}return(M,S)=>(de(),ye("div",{class:ut(["windowFrame",{debug:V(i).useWindowingDebug==!0,noHeader:n.frame.frameStyle.value==V(Q).STYLE.MWI}]),style:wt({top:n.frame.screenPos.value.t+"px",left:n.frame.screenPos.value.l+"px",height:n.frame.screenPos.value.b-n.frame.screenPos.value.t+"px",width:n.frame.screenPos.value.r-n.frame.screenPos.value.l+"px"})},[ae("div",yw,[Ze(iw,{frame:n.frame,onOnWindowTearOff:o},null,8,["frame"]),ae("div",{class:"hamburgerMenu noSel",title:"Click for Window Frame Options",onClick:h},Ew),Ze(Mw,{frame:n.frame,onOnWindowTearOff:o},null,8,["frame"]),ae("div",{class:ut(["focusCurtain noSel",{enabled:V(i).frameFocusID.value!=null&&V(i).frameFocusID.value!=n.frame.frameID}]),onMouseenter:v},null,34),ae("div",{class:ut(["mergeOverlay noSel",{enabled:V(i).mergePreviewID.value!=null&&V(i).mergePreviewID.value==n.frame.frameID,up:V(i).mergePreviewDirection.value=="u",down:V(i).mergePreviewDirection.value=="d",left:V(i).mergePreviewDirection.value=="l",right:V(i).mergePreviewDirection.value=="r"}])},bw,2),n.frame.splitMode.value!=V(Q).SPLIT_MODE.OFF?(de(),ye("div",{key:0,class:"splitLayer",ref_key:"splitLayerEl",ref:r,tabindex:0,onMousemove:m,onBlur:p,onClick:b},[ae("div",{class:ut(["splitCursorRedLine",{horizontal:n.frame.splitMode.value==V(Q).SPLIT_MODE.HORIZONTAL,vertical:n.frame.splitMode.value==V(Q).SPLIT_MODE.VERTICAL}]),style:wt({left:n.frame.splitMode.value==V(Q).SPLIT_MODE.HORIZONTAL?"0px":`${s.value-2}px`,top:n.frame.splitMode.value==V(Q).SPLIT_MODE.HORIZONTAL?`${s.value-2}px`:"0px"})},null,6)],544)):Ye("",!0),V(i).windowDragSystem.isDragging.value==!0?(de(),ye("div",Cw,[ae("div",{frameID:n.frame.frameID,class:ut(["dropTarget center",{canSplitH:c().h,canSplitV:c().v}]),region:"frame"},null,10,Rw),c().v==!0?(de(),ye("div",{key:0,frameID:n.frame.frameID,class:"dropTarget splitLeft",region:"left"},null,8,Dw)):Ye("",!0),c().v==!0?(de(),ye("div",{key:1,frameID:n.frame.frameID,class:"dropTarget splitRight",region:"right"},null,8,Pw)):Ye("",!0),c().h==!0?(de(),ye("div",{key:2,frameID:n.frame.frameID,class:"dropTarget splitTop",region:"top"},null,8,Iw)):Ye("",!0),c().h==!0?(de(),ye("div",{key:3,frameID:n.frame.frameID,class:"dropTarget splitBottom",region:"bottom"},null,8,Lw)):Ye("",!0)])):Ye("",!0)]),ae("div",{class:ut(["grabHandle vertical left",`${a(V(Q).EDGE.LEFT)}`]),onMousedown:S[0]||(S[0]=g=>w(V(Q).EDGE.LEFT)),onContextmenu:S[1]||(S[1]=g=>u(g,V(Q).EDGE.LEFT,"v"))},null,34),ae("div",{class:ut(["grabHandle vertical right",`${a(V(Q).EDGE.RIGHT)}`]),onMousedown:S[2]||(S[2]=g=>w(V(Q).EDGE.RIGHT)),onContextmenu:S[3]||(S[3]=g=>u(g,V(Q).EDGE.RIGHT,"v"))},null,34),ae("div",{class:ut(["grabHandle horizontal top",`${a(V(Q).EDGE.TOP)}`]),onMousedown:S[4]||(S[4]=g=>w(V(Q).EDGE.TOP)),onContextmenu:S[5]||(S[5]=g=>u(g,V(Q).EDGE.TOP,"h"))},null,34),ae("div",{class:ut(["grabHandle horizontal bottom",`${a(V(Q).EDGE.BOTTOM)}`]),onMousedown:S[6]||(S[6]=g=>w(V(Q).EDGE.BOTTOM)),onContextmenu:S[7]||(S[7]=g=>u(g,V(Q).EDGE.BOTTOM,"h"))},null,34),V(i).showBlenderSplitMergeHandles.value==!0?(de(),ye("div",{key:0,class:"mergeHandle TL",onMousedown:S[8]||(S[8]=g=>E(V(Q).EDGE.TOP,V(Q).EDGE.LEFT))},null,32)):Ye("",!0),V(i).showBlenderSplitMergeHandles.value==!0?(de(),ye("div",{key:1,class:"mergeHandle TR",onMousedown:S[9]||(S[9]=g=>E(V(Q).EDGE.TOP,V(Q).EDGE.RIGHT))},null,32)):Ye("",!0),V(i).showBlenderSplitMergeHandles.value==!0?(de(),ye("div",{key:2,class:"mergeHandle BL",onMousedown:S[10]||(S[10]=g=>E(V(Q).EDGE.BOTTOM,V(Q).EDGE.LEFT))},null,32)):Ye("",!0),V(i).showBlenderSplitMergeHandles.value==!0?(de(),ye("div",{key:3,class:"mergeHandle BR",onMousedown:S[11]||(S[11]=g=>E(V(Q).EDGE.BOTTOM,V(Q).EDGE.RIGHT))},null,32)):Ye("",!0)],6))}},Nw=Bi(Uw,[["__scopeId","data-v-1d51c388"]]),Ow={class:"appViewContainer"},Fw={__name:"WindowV",props:{penContainerElement:{default:null},window:{type:Tm,default:null}},setup(n){const e=n,t=e.window.mgr;function i(r){return t.availableWindowList.getWindowBySlug(r).window}const s=t.getFrameFromWindow(e.window).frameContext;return Jt("frameCtx",s),Jt("windowCtx",e.window.ctx),(r,o)=>(de(),dt(Ba,{to:n.window.domContainer.value!=null?n.window.domContainer.value:n.penContainerElement},[ae("div",Ow,[n.window.kind!=null?(de(),dt(ec(i(n.window.kindRef.value)),_f(pr({key:0},n.window.props)),null,16)):Ye("",!0)])],8,["to"]))}},Bw=Bi(Fw,[["__scopeId","data-v-97c92585"]]),kw={__name:"WindowPen",setup(n){const e=ft("windowManager"),t=se(null);return(i,s)=>(de(),ye("div",{ref_key:"thePenRef",ref:t,class:"thePen"},[(de(!0),ye(At,null,ei(V(e).windowsRef.value,(r,o)=>(de(),dt(Bw,{key:r.windowID,"pen-container-element":t.value,window:r},null,8,["pen-container-element","window"]))),128))],512))}},Hw=Bi(kw,[["__scopeId","data-v-72c433fd"]]),Vw={__name:"WindowDragLayer",setup(n){const e=ft("windowManager"),t=se("a"),i=se(null),s=se(null),r=se(0),o=se(0),a=se(0),l=se(0),c=se(1),u=se(!1);let h=0,d=0;const f=se(0),v=se(0),_=se(0),m=se(!1),p=se("");et(()=>e.windowDragSystem.isDragging.value,()=>{e.windowDragSystem.isDragging.value==!0&&setTimeout(()=>{e.windowDragSystem.dragTitleEl.value=i.value,w()},0)});const b=A=>{setTimeout(A,100)};async function w(){u.value=!1,Ni(()=>{const A=e.windowDragSystem.dragOperationDetails;t.value=A.window.title;const T=A.window.windowDetails.icon;m.value=T!="",p.value=T;const E=m.value?24:0,M=bm(i.value);let S=Ra(A.window.title,M)*1.1+16;h=A.initialCursorPos.x,d=A.initialCursorPos.y,A.isTab==!0?(f.value=A.initialHandleDIM.left,v.value=A.initialCursorPos.y-10,_.value=S):(v.value=A.initialCursorPos.y-10,f.value=A.initialHandleDIM.left,_.value=A.initialHandleDIM.width+E),a.value=A.initialWindowDIM.left,l.value=v.value+25,r.value=A.initialWindowDIM.width,o.value=A.initialWindowDIM.height,c.value=1,A.window.domContainer.value=s.value,b(()=>{u.value=!0,Ni(()=>{f.value=A.initialCursorPos.x-S/2,_.value=S,a.value=f.value-8;const g=100,x=S+32,P=x>g?x:g;let I=A.initialWindowDIM.width;I=I<P?P:I;let L=I*.5625;r.value=I,o.value=L;const F=1/(I/P);r.value+=E/2*(1/F),c.value=F})})})}return(A,T)=>V(e).windowDragSystem.isDragging.value==!0?(de(),ye("div",{key:0,class:ut(["windowDragLayer",{animations:u.value==!0}])},[ae("div",{class:ut(["targetRegion",{isMWI:V(e).windowDragSystem.dropRegion.isMWI.value==!0}]),style:wt({left:`${V(e).windowDragSystem.dropRegion.x.value}px`,top:`${V(e).windowDragSystem.dropRegion.y.value}px`,width:`${V(e).windowDragSystem.dropRegion.width.value}px`,height:`${V(e).windowDragSystem.dropRegion.height.value}px`})},null,6),ae("div",{class:"windowDragContainer",style:wt({left:`${V(e).windowDragSystem.dragPos.x.value-V(h)}px`,top:`${V(e).windowDragSystem.dragPos.y.value-V(d)}px`})},[ae("div",{ref_key:"dragTitleEl",ref:i,class:ut(["dragTitle",{hasIcon:m.value==!0}]),style:wt({left:`${f.value}px`,top:`${v.value}px`,width:`${_.value}px`})},[m.value?(de(),ye("div",{key:0,class:"titleIcon",style:wt({backgroundImage:`url(${p.value})`})},null,4)):Ye("",!0),za(" "+yn(t.value),1)],6),ae("div",{ref_key:"windowThumbEl",ref:s,class:"windowThumb",style:wt({left:`${a.value}px`,top:`${l.value}px`,width:`${r.value}px`,height:`${o.value}px`,transform:`scale(${c.value})`,"border-radius":`${7*(1/c.value)}px`})},null,4)],4)],2)):Ye("",!0)}},Gw=Bi(Vw,[["__scopeId","data-v-4bff7087"]]),zw={__name:"WindowingSystem",setup(n){const e=se(null),t=Dn({width:0,height:0}),i=ft("windowManager");window.cr=e;function s(){const a=e.value.offsetWidth,l=e.value.offsetHeight;t.value={width:a,height:l},i.onContainerResize(a,l)}const r=new ResizeObserver(s);Sn(()=>{r.observe(e.value),i.setContainerEl(e.value)}),Er(()=>{r.disconnect(),i.unsetContainerEl()});function o(a){const{window:l,frame:c,titleBar:u}=a;i.windowDragSystem.tearWindow(l,c,u)}return(a,l)=>(de(),ye(At,null,[ae("div",{ref_key:"containerRef",ref:e,class:"windowFrameContainer",v:""},[Ye("",!0),(de(!0),ye(At,null,ei(V(i).framesRef.value,(c,u)=>(de(),dt(Nw,{frameID:c.frameID,frame:c,key:c.frameID,idx:u,onOnWindowTearOff:o},null,8,["frameID","frame","idx"]))),128))],512),Ze(Hw),Ze(Gw)],64))}},Ww={},Xw={class:"statusBar"};function Yw(n,e){return de(),ye("div",Xw,[Bt(n.$slots,"default",{},void 0,!0)])}const qw=Bi(Ww,[["render",Yw],["__scopeId","data-v-8d551a18"]]),Kw="data:image/png;base64,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",Zw="data:image/png;base64,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",Qw="data:image/png;base64,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",jw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABVCAYAAAC/xEFcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAa1JREFUeNrs3cFRwkAAQNEfhjspIVQAHUgJWAF0IB1Ygi1gB5QQOsAOYgdQwXJgOXiAUYyyu/w/k5vOJPtMdiNDUoUQAKbAGpiQT5/ACthQUFUIoQF2wCjTY3guCWUQ/8pGGR/DqqQzZBAvV5YQiAlilxp+42e2CeznNPN5rheQQxyILoH9rIE2s2V575esdSIYAPvS7jduAakT29f6EUCuXbIW8QxpE5lDlk7q8Bo3c9kriAniZF8iyARoBEmrTSlnyrAQkElcom8Supn9Se359qIKIbTAk9Pp3XsHlkPHIZkWQOuyN61mgqRVI4jLXhNEEBNEEBNEkKt9AGOgcvuyjePY/DvInDz/kffXdcDsHiBiXG7vHOIcYoIIYoIIYoKYIIKYIIKYIIKYIIKYICaIICaIINY/SOcwCGJesgQxQQQxQQQxQQQxQUwQQUwQQUwQQUwQQUwQ6xVk5fBdbH7rL/7mqaRvnF4j0eLn8udqTo/VeLkHCJwebbrQwTlEEBNEEBPEBBHEBMm2XRVCaIAdD/Ly34Q7ANPz1xFmpPFW6EdtGw26IwAAAP//AwAjWzmq0cdYHAAAAABJRU5ErkJggg==",Jw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABVCAYAAAC/xEFcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAX9JREFUeNrs3d1pwmAYhuEn4rmOoBu4gW5QN7Ab1E3aETqKbqAbZASd4OtBUkqhSrX+xHLdkCMV4b0wX9SQVKWUJJkkeUsyje7RNslzkk1VShkl2SQZmMtd2yeZ9JIsYXSiQZLnXru7Ujea9cygWwHpWP1fPGdtTBdtei7Ivl1fajO8aEePao/tst5hXKW6ne3Ja8jQ7K76KTl5l7VoNVfmd9lD2yRPhx6sSimr+MmkK60d9voeIiBABASIgAARECACIiBABASIgADRw4Bsk4yTVLZv27idzc1B5nFWyk/Vaf43vzkIjMPtrCHWEAEBIiBABERAgAgIEAEBIiBA1CmQnTF0C2RjDHZZAvI4IDNjsIbIUZY1RECACAgQAQEiIAICRECACAgQAQEiIALyn0GWxnew+bkv7P/hTV/T3IFnFVd1+GyY5iyel3uAJM09RhYcrCFABASIgAgIEAF52DZVKWWUI/dm1c3aJ5n08nUVTXeFvl/r1qD+AAAA//8DAJzOM/fw9Nd0AAAAAElFTkSuQmCC",$w="data:image/png;base64,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",eT="data:image/png;base64,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",tT="data:image/png;base64,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",nT="data:image/png;base64,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",iT="data:image/png;base64,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",sT={viewBox:"0 0 80 20",xmlns:"http://www.w3.org/2000/svg"},rT=Wa('<symbol id="iconSplitFrame" viewBox="0 0 16 16" data-v-fd8dc3ad><image href="'+Kw+'" height="16" width="16" data-v-fd8dc3ad></image></symbol><symbol id="iconHSplit" viewBox="0 0 16 16" data-v-fd8dc3ad><image href="'+Zw+'" height="16" width="16" data-v-fd8dc3ad></image></symbol><symbol id="iconVSplit" viewBox="0 0 16 16" data-v-fd8dc3ad><image href="'+Qw+'" height="16" width="16" data-v-fd8dc3ad></image></symbol><symbol id="iconFrameTabbed" viewBox="0 0 16 16" data-v-fd8dc3ad><image href="'+jw+'" height="16" width="16" data-v-fd8dc3ad></image></symbol><symbol id="iconFrameSingle" viewBox="0 0 16 16" data-v-fd8dc3ad><image href="'+Jw+'" height="16" width="16" data-v-fd8dc3ad></image></symbol><symbol id="iconFrameMWI" viewBox="0 0 16 16" data-v-fd8dc3ad><image href="'+$w+'" height="16" width="16" data-v-fd8dc3ad></image></symbol><symbol id="iconMergeUp" viewBox="0 0 16 16" data-v-fd8dc3ad><image href="'+eT+'" height="16" width="16" data-v-fd8dc3ad></image></symbol><symbol id="iconMergeDown" viewBox="0 0 16 16" data-v-fd8dc3ad><image href="'+tT+'" height="16" width="16" data-v-fd8dc3ad></image></symbol><symbol id="iconMergeLeft" viewBox="0 0 16 16" data-v-fd8dc3ad><image href="'+nT+'" height="16" width="16" data-v-fd8dc3ad></image></symbol><symbol id="iconMergeRight" viewBox="0 0 16 16" data-v-fd8dc3ad><image href="'+iT+'" height="16" width="16" data-v-fd8dc3ad></image></symbol>',10),oT=[rT],aT={__name:"MenuIconSVGs",setup(n){return(e,t)=>(de(),ye("svg",sT,oT))}},lT=Bi(aT,[["__scopeId","data-v-fd8dc3ad"]]);class cT{constructor(e,t){is(this,Si,null),is(this,er,{}),ss(this,Si,e),ss(this,er,t)}showTopBar(e=!0){Ct(this,er).showTopBar.value=e}showStatusBar(e=!0){Ct(this,er).showStatusBar.value=e}showSplitMergeHandles(e=!0){Ct(this,er).splitMergeHandles.value=e}loadLayout(e){Ct(this,Si).clearWindowLayout(),Cs.loadLayout(e,Ct(this,Si))}resetLayout(){Ct(this,Si).clearWindowLayout();const e=Ct(this,Si).defaultLayout;if(e!=null){this.loadLayout(e);return}Cs.loadDefaultLayout(Ct(this,Si))}getLayoutDetails(){return Cs.getLayoutObject(Ct(this,Si))}}Si=new WeakMap;er=new WeakMap;function uT(n){const e=n.getBoundingClientRect(),t={x:e.left,y:e.top},i={x:e.left+window.scrollX,y:e.top+window.scrollY};let s=n.offsetParent||n.parentElement;(!s||s===document.body||s===document.documentElement)&&(s=n.parentElement);let r={x:0,y:0};if(s instanceof Element){const o=s.getBoundingClientRect();r={x:e.left-o.left,y:e.top-o.top}}return{screenPos:t,pagePos:i,containerPos:r}}function hT(n,e=!0){const t=Ui({screenPos:{x:0,y:0},pagePos:{x:0,y:0},containerPos:{x:0,y:0}});let i=null,s=null,r=null;function o(u,h){return u.x===h.x&&u.y===h.y}function a(){if(!n.value)return;const u=uT(n.value);(!o(u.screenPos,t.screenPos)||!o(u.pagePos,t.pagePos)||!o(u.containerPos,t.containerPos))&&(Object.assign(t.screenPos,u.screenPos),Object.assign(t.pagePos,u.pagePos),Object.assign(t.containerPos,u.containerPos))}function l(){if(n.value&&(s=new ResizeObserver(a),s.observe(n.value),r=new MutationObserver(a),r.observe(document.body,{attributes:!0,subtree:!0,childList:!0,attributeFilter:["style","class"]}),window.addEventListener("scroll",a,!0),window.addEventListener("resize",a),e)){const u=()=>{a(),i=requestAnimationFrame(u)};i=requestAnimationFrame(u)}}function c(){s==null||s.disconnect(),r==null||r.disconnect(),window.removeEventListener("scroll",a,!0),window.removeEventListener("resize",a),i&&cancelAnimationFrame(i)}return Sn(()=>{et(n,u=>{u&&(a(),l())},{immediate:!0})}),Ls(c),t}const cf="data:image/png;base64,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",dT={__name:"WindowManager",props:{availableWindows:{type:Array,default:()=>[]},defaultLayout:{type:Array,default:null},useWindowingDebug:{type:Boolean,default:!1},showTopBar:{type:Boolean,default:!1},showStatusBar:{type:Boolean,default:!1},topBarComponent:{type:Object,default:null},statusBarComponent:{type:Object,default:null},splitMergeHandles:{type:Boolean,default:!0},mwiBGPattern:{type:String,default:null},theme:{type:Object,default:()=>({})}},emits:["update:showTopBar","update:showStatusBar","update:splitMergeHandles"],setup(n,{expose:e,emit:t}){const i=n,s=se(i.showTopBar),r=se(i.showStatusBar),o=se(i.splitMergeHandles),a=se(null),l=document.createElement("style");l.type="text/css",l.setAttribute("data-vue-window-manager","true"),l.wasMounted=!1;const c=se(null),u=hT(c,!1),h={systemBGColor:"#000",topBarBGColor:"#31313B",statusBarBGColor:"#31313B",frameBGColor:"#737378",windowBGColor:"#EFEFEF",mwiBGColor:"#39393E",menuBGColor:"rgba(0, 0, 0, 0.7)",menuActiveBGColor:"rgba(255, 255, 255, 0.8)",frameHeaderColor:"#5C5C60",frameTabsHeaderColor:"#2E2E30",frameTabsColor:"#4A4A4E",frameTabsActiveColor:"#737378",windowTitleTextColor:"rgb(209, 209, 209)",tabTextColor:"rgb(150, 149, 149)",activeTabTextColor:"rgb(209, 209, 209)",menuTextColor:"#EFEFEF",menuActiveTextColor:"#000",menuDisabledTextColor:"#999",menuBlur:"2px",hamburgerIconColor:"rgba(255, 255, 255, 0.5)",hamburgerIconColorHover:"#FFF",hamburgerCircleColor:"none",hamburgerCircleColorHover:"rgba(255, 255, 255, 0.25)",closeButtonCircle:"none",closeButtonCircleHover:"rgba(255, 0, 0, 0.3)",closeButtonXColor:"rgba(0, 0, 0, 0.5)",closeButtonXColorHover:"rgba(255, 255, 255, 1)"},d=new Wt(i.availableWindows,i.defaultLayout,u,i.useWindowingDebug);d.showBlenderSplitMergeHandles.value=i.splitMergeHandles,Jt("windowManager",d);const f=mr(()=>{const T=s.value?38:1,E=r.value?28:1;return`${T}px 1px ${E}px 1px`}),v=se(null);function _(){console.log(cf),d.mwiBGImagePath.value=i.mwiBGPattern||cf}_();const m={},p=se({});function b(T={}){(!T||typeof T!="object")&&(T={});const E={};for(const M in h){const S=T[M]??h[M];M in m?m[M].value!==S&&(m[M].value=S):m[M]=se(S),E[`--theme-${M}`]=m[M].value}p.value=E,l.innerText=`
		& {
			--vue-win-mgr-theme-menuBGColor: ${p.value["--theme-menuBGColor"]};
			--vue-win-mgr-theme-menuActiveBGColor: ${p.value["--theme-menuActiveBGColor"]};
			--vue-win-mgr-theme-menuTextColor: ${p.value["--theme-menuTextColor"]};
			--vue-win-mgr-theme-menuActiveTextColor: ${p.value["--theme-menuActiveTextColor"]};
			--vue-win-mgr-theme-menuDisabledTextColor: ${p.value["--theme-menuDisabledTextColor"]};
			--vue-win-mgr-theme-menuBlur: ${p.value["--theme-menuBlur"]};
		}
	`}Jt("themeColors",m),b(i.theme),et(()=>i.showTopBar,T=>{s.value=T},{immediate:!0}),et(()=>i.showStatusBar,T=>{r.value=T},{immediate:!0}),et(()=>i.splitMergeHandles,T=>{o.value=T},{immediate:!0}),et(()=>i.availableWindows,T=>{d.availableWindowList.setAvailableWindows(T)},{immediate:!0}),et(()=>i.splitMergeHandles,T=>{d.showBlenderSplitMergeHandles.value=T},{immediate:!0}),et(()=>i.theme,T=>b(T),{deep:!0}),et(()=>s.value,T=>{t("update:showTopBar",T)}),et(()=>r.value,T=>{t("update:showStatusBar",T)}),et(()=>o.value,T=>{t("update:splitMergeHandles",T),d.showBlenderSplitMergeHandles.value=T}),et(()=>i.mwiBGPattern,T=>{_()});const w=new cT(d,{showTopBar:s,showStatusBar:r,splitMergeHandles:o});function A(){return w}return e({getContext:A}),Sn(()=>{a.value.appendChild(l),l.wasMounted=!0,b(i.theme)}),(T,E)=>(de(),ye("div",{class:"windowManager",style:wt({...p.value,"--window-system-inset":f.value})},[s.value?(de(),dt(sE,{key:0},{default:Lt(()=>[Bt(T.$slots,"topBar",{},()=>[n.topBarComponent!=null?(de(),dt(ec(n.topBarComponent),{key:0})):Ye("",!0)])]),_:3})):Ye("",!0),ae("div",{ref_key:"containerRef",ref:c,class:"windowingSystemWrapper"},[Ze(zw)],512),r.value?(de(),dt(qw,{key:1},{default:Lt(()=>[Bt(T.$slots,"statusBar",{},()=>[n.statusBarComponent!=null?(de(),dt(ec(n.statusBarComponent),{key:0})):Ye("",!0)])]),_:3})):Ye("",!0),Ze(lT),ae("div",{ref_key:"dragHoverLayerRef",ref:v,class:"dragHoverLayer"},null,512),ae("div",{ref_key:"styleMountEl",ref:a,class:"styleMountEl"},null,512)],4))}},cn=Q.STYLE;let fT=class{constructor(){this.wc=null,this.sceneMgr=new jc(this),this.assetMgr=new jS(this),this.noteMgr=new Jc(this),this.settingsMgr=new JS(this)}setWindowManagerContext(e){this.wc=e}};class pT{constructor(e,t,i){this.app=e,this.scene=t,this.containerElement=i,this.orbit=se(!0),this.cancelRenderLoop=!1,this.buildScene(),this.settingsWatches=this.app.settingsMgr.registerWatches(this),this.startRenderLoop()}destruct(){this.resizeObserver&&this.containerElement&&(this.resizeObserver.unobserve(this.containerElement),this.resizeObserver.disconnect(),this.resizeObserver=null),this.stopRenderLoop(),this.settingsWatches&&(this.settingsWatches.forEach(e=>e()),this.settingsWatches=null)}async buildScene(){const e=this.containerElement;this.threeBits=Oi.useScene(this.scene,e,{autoSize:!0,autoRender:!1,addCube:!1,addLights:!1,addControls:!0});const{renderer:t,camera:i,controls:s,cube:r,lights:o,resizeObserver:a}=this.threeBits;this.composer=new LS(t),this.renderPass=new US(this.scene,i),this.outlinePass=new $i(new Ge(e.clientWidth,e.clientHeight),this.scene,i),this.outlinePass.edgeStrength=3,this.outlinePass.visibleEdgeColor.set("#ffffff"),this.outlinePass.renderToScreen=!1,this.outlinePass.clear=!1,this.outlinePass.selectedObjects=[],et(()=>this.app.sceneMgr.selectedItem.id.value,u=>{this.outlinePass.selectedObjects=u==null?[]:[this.app.sceneMgr.selectedItem.mesh]},{immediate:!0}),this.gammaCorrectionPass=new vm(NS),this.gammaCorrectionPass.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.outlinePass),this.composer.addPass(this.gammaCorrectionPass),this.threeBits.renderer.setClearColor(0,0),this.orbitCamera=i;const l=this.containerElement.clientWidth,c=this.containerElement.clientHeight;this.staticCamera=new Rn(75,l/c,.1,1e3),this.staticCamera.position.set(0,0,10),this.staticCamera.lookAt(0,0,0),this.setOrbitCameraToDefaultView(),this.resizeObserver=new ResizeObserver(()=>{const u=this.containerElement.clientWidth,h=this.containerElement.clientHeight;this.staticCamera.aspect=u/h,this.staticCamera.updateProjectionMatrix(),this.composer.setSize(u,h)}),this.resizeObserver.observe(this.containerElement),this.composer.setSize(l,c),this.tq=new Oi(this.scene),this.$=this.tq.$}setCamera(e,t=5){const i=e.toUpperCase();if(i==="FREE"){this.orbit.value=!0;return}this.orbit.value=!1;const r={TOP:{axis:"y",dir:1},BOTTOM:{axis:"y",dir:-1},LEFT:{axis:"x",dir:-1},RIGHT:{axis:"x",dir:1},FRONT:{axis:"z",dir:1},BACK:{axis:"z",dir:-1}}[i];if(!r){console.warn("Unknown camera side:",e);return}this.staticCamera.position.set(0,0,0),this.staticCamera.position[r.axis]=r.dir*t,this.staticCamera.lookAt(0,0,0)}setOrbitCameraToDefaultView(e=6){var r;if(!this.orbitCamera||!((r=this.threeBits)!=null&&r.controls))return;const t=this.orbitCamera,i=this.threeBits.controls,s=e/Math.sqrt(3);t.position.set(-s/3,s/2,s),i.target.set(0,0,0),i.enableDamping=!1,i.update()}getRaycastPoint(e,t){const i=this.containerElement,s=this.orbit.value?this.orbitCamera:this.staticCamera,r=this.scene,o=i.getBoundingClientRect(),a=(e-o.left)/o.width*2-1,l=-((t-o.top)/o.height)*2+1,c=new Kc;c.setFromCamera(new Ge(a,l),s);const u=c.intersectObjects(r.children,!0);return u.length>0?u[0].point.clone():null}onClick(e){const i=this.containerElement.getBoundingClientRect(),s=(e.clientX-i.left)/i.width*2-1,r=-((e.clientY-i.top)/i.height)*2+1,o=new Kc;o.setFromCamera(new Ge(s,r),this.orbit.value?this.orbitCamera:this.staticCamera);let a=o.intersectObjects(this.scene.children,!0);if(a=a.filter(l=>{var c;return((c=l.object.userData)==null?void 0:c.clickable)==!0}),a.length>0){const l=a[0].object;this.app.sceneMgr.selectItem(l)}else this.app.sceneMgr.selectNone()}startRenderLoop(){const e=()=>{if(this.cancelRenderLoop==!0){this.cancelRenderLoop=!1;return}this.animationID=requestAnimationFrame(e);const t=this.orbit.value?this.orbitCamera:this.staticCamera;this.renderPass.camera=t,this.outlinePass.camera=t,this.composer.render(this.scene,t)};e()}stopRenderLoop(){this.cancelRenderLoop=!0,this.animationID&&cancelAnimationFrame(this.animationID),this.animationID=null}}const Ln=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},mT={class:"viewport-window"},gT={class:"view-mode-select"},uf="drop-receiver",vT={__name:"Viewport",props:{side:{type:String,default:"free"}},setup(n){const e=ft("app"),t=e.sceneMgr.scene,i=se(null),s=n,r=se(s.side);let o=Dn(null);Sn(()=>{o.value=new pT(e,t,i.value),o.value.setCamera(s.side),i.value[uf]={drop:(l,c)=>{const u=o.value.getRaycastPoint(c.x,c.y),h=e.sceneMgr.addItem(l.name);u&&h.mesh.position.set(u.x,u.y+.5,u.z)}}});const a=mr(()=>{var l,c;return((c=(l=o.value)==null?void 0:l.orbit)==null?void 0:c.value)===!0});return Er(()=>{o.value!==null&&(o.value.destruct(),o.value=null),i.value&&delete i.value[uf]}),(l,c)=>(de(),ye("div",mT,[ae("div",{ref_key:"viewportContainerEl",ref:i,class:"container",style:wt({background:V(e).settingsMgr.backgroundColor.value||"black"}),onClick:c[0]||(c[0]=u=>V(o).onClick(u))},null,4),ae("div",gT,[kt(ae("select",{onChange:c[1]||(c[1]=u=>V(o).setCamera(u.target.value)),"onUpdate:modelValue":c[2]||(c[2]=u=>r.value=u)},c[4]||(c[4]=[Wa('<option value="free" data-v-bdcc45b4>Free</option><option value="top" data-v-bdcc45b4>Top</option><option value="bottom" data-v-bdcc45b4>Bottom</option><option value="left" data-v-bdcc45b4>Left</option><option value="right" data-v-bdcc45b4>Right</option><option value="front" data-v-bdcc45b4>Front</option><option value="back" data-v-bdcc45b4>Back</option>',7)]),544),[[Lp,r.value]])]),a.value?(de(),ye("div",{key:0,class:"home-button",onClick:c[3]||(c[3]=u=>V(o).setOrbitCameraToDefaultView())},c[5]||(c[5]=[ae("span",{class:"material-icons"},"home",-1)]))):Ye("",!0)]))}},_T=Ln(vT,[["__scopeId","data-v-bdcc45b4"]]),xT={class:"note-window"},AT={class:"notes-list"},MT={class:"list"},yT=["onClick"],ST={class:"note-title"},ET=["onClick"],wT={key:0,class:"note-editor"},TT={class:"note-title-input"},bT={class:"note-content-input"},CT={key:1,class:"note-select-blurb"},RT={__name:"Notes",setup(n){const t=ft("app").noteMgr,i=se(1),s=mr(()=>i.value===null?null:t.getNoteByID(i.value));function r(l){i.value=l.id}function o(){const l=t.addNote();i.value=l.id}function a(l){i.value=null,t.deleteNote(l);const c=t.notes.value.length>1?t.notes.value[t.notes.value.length-1].id:null;i.value=c}return(l,c)=>(de(),ye("div",xT,[ae("div",AT,[c[4]||(c[4]=ae("div",{class:"header"},"My Notes:",-1)),ae("div",MT,[(de(!0),ye(At,null,ei(V(t).notes.value,u=>(de(),ye("div",{key:u.id,class:ut(["note-item",{selected:i.value===u.id}]),onClick:h=>r(u)},[ae("div",ST,yn(u.title.value),1),ae("div",{class:"delete-button",onClick:Np(h=>a(u),["stop"])},c[2]||(c[2]=[ae("span",{class:"icon"},"x",-1)]),8,ET)],10,yT))),128)),ae("div",{class:"add-note-button",onClick:o},c[3]||(c[3]=[ae("span",{class:"icon"},"+",-1)]))])]),i.value!=null?(de(),ye("div",wT,[ae("div",TT,[kt(ae("input",{type:"text",placeholder:"Note Title","onUpdate:modelValue":c[0]||(c[0]=u=>s.value.title.value=u)},null,512),[[ts,s.value.title.value]])]),ae("div",bT,[kt(ae("textarea",{placeholder:"Note Content","onUpdate:modelValue":c[1]||(c[1]=u=>s.value.content.value=u),rows:"10",style:{width:"100%",resize:"none"}},null,512),[[ts,s.value.content.value]])])])):(de(),ye("div",CT,c[5]||(c[5]=[ae("p",null,'Select a note to edit it, or click the "+" button to create a new note.',-1)])))]))}},DT=Ln(RT,[["__scopeId","data-v-94fae455"]]),hf=""+new URL("../img/logos/github_logo.png",import.meta.url).href,Cm=""+new URL("../img/logos/npm_logo.png",import.meta.url).href,PT={class:"about-window"},IT={__name:"About",setup(n){return(e,t)=>(de(),ye("div",PT,t[0]||(t[0]=[Wa('<div class="page mac-bar" data-v-e10c34e2><h1 data-v-e10c34e2>About This App!</h1><br data-v-e10c34e2><p data-v-e10c34e2> This App is a simple Vue 3 application to demonstrate my <a href="https://github.com/orokro/Vue-Window-Manager" target="_blank" data-v-e10c34e2>vue-win-mgr</a> library. This application is open source, as well as the library. This application also demonstrates my <a href="" target="_blank" data-v-e10c34e2>ThreeQuery</a> library, which is a wrapper around ThreeJS to make it easier to use. Though, in this case the ThreeQuery library is not really used to it&#39;s full potential, so this really isn&#39;t a good demonstration of ThreeQuery. </p><br data-v-e10c34e2><hr data-v-e10c34e2><br data-v-e10c34e2><p data-v-e10c34e2> You can find the source code for this demo app, here on github: <br data-v-e10c34e2><br data-v-e10c34e2><a href="https://github.com/orokro/vue-win-mgr-3d-demo" target="_blank" data-v-e10c34e2><code data-v-e10c34e2>vue-win-mgr-3d-demo</code> on GitHub</a><br data-v-e10c34e2><a href="https://github.com/orokro/vue-win-mgr-3d-demo" target="_blank" data-v-e10c34e2><img src="'+hf+'" alt="GitHub Logo" height="60px" style="vertical-align:middle;" data-v-e10c34e2></a></p><br data-v-e10c34e2><hr data-v-e10c34e2><br data-v-e10c34e2><p data-v-e10c34e2> For the <code data-v-e10c34e2>vue-win-mgr</code> library, you can find the library or the source code on github / npm: <br data-v-e10c34e2><br data-v-e10c34e2><a href="https://github.com/orokro/Vue-Window-Manager" target="_blank" data-v-e10c34e2><code data-v-e10c34e2>vue-win-mgr</code> on GitHub</a><br data-v-e10c34e2><a href="https://github.com/orokro/Vue-Window-Manager" target="_blank" data-v-e10c34e2><img src="'+hf+'" alt="GitHub Logo" height="60px" style="vertical-align:middle;" data-v-e10c34e2></a><br data-v-e10c34e2><br data-v-e10c34e2><a href="https://www.npmjs.com/package/vue-win-mgr?activeTab=readme" target="_blank" data-v-e10c34e2><code data-v-e10c34e2>vue-win-mgr</code> on NPM</a><br data-v-e10c34e2><a href="https://www.npmjs.com/package/vue-win-mgr?activeTab=readme" target="_blank" data-v-e10c34e2><img src="'+Cm+'" alt="GitHub Logo" height="40px" style="margin-left:28px;vertical-align:middle;" data-v-e10c34e2></a></p><br data-v-e10c34e2><hr data-v-e10c34e2><br data-v-e10c34e2><p data-v-e10c34e2> Created by Greg Miller - 2025 <br data-v-e10c34e2><a href="http://gmiller.net" target="_blank" data-v-e10c34e2>gmiller.net</a></p></div>',1)])))}},LT=Ln(IT,[["__scopeId","data-v-e10c34e2"]]),UT={class:"scene-list-window"},NT={class:"list mac-bar"},OT=["onClick"],FT={class:"item-title"},BT=["onClick"],df="drop-receiver",kT={__name:"SceneList",setup(n){const t=ft("app").sceneMgr,i=se(null);return Sn(()=>{i.value[df]={drop:s=>{t.addItem(s.name)}}}),Er(()=>{i.value&&delete i.value[df]}),(s,r)=>(de(),ye("div",UT,[ae("div",{ref_key:"dropEl",ref:i,class:"items-list"},[ae("div",NT,[(de(!0),ye(At,null,ei(V(t).sceneItems.value,o=>(de(),ye("div",{key:o.id,class:ut(["scene-item",{selected:V(t).selectedItem.id.value===o.id}]),onClick:a=>V(t).selectItem(o)},[ae("div",FT,yn(o.name.value),1),ae("div",{class:"delete-button",onClick:Np(a=>V(t).removeItem(o),["stop"])},r[0]||(r[0]=[ae("span",{class:"icon"},"x",-1)]),8,BT)],10,OT))),128))])],512)]))}},HT=Ln(kT,[["__scopeId","data-v-12283660"]]);class VT{constructor(e){const t={usePointerEvents:!1,scaleMultiplier:1};e=e===void 0?{}:e,this.options={...t,...e},this._mouseX=0,this._mouseY=0,this._startX=0,this._startY=0,this._callBacks=[],this._isDragging=!1,this._firstMove=!1,this._ended=!1,this._listeners=[];const i=this.options.usePointerEvents?"pointermove":"mousemove",s=c=>{this._mouseX=c.pageX,this._mouseY=c.pageY};window.addEventListener(i,s),this._listeners.push([i,s]);const r=c=>this._onDragMove(c);window.addEventListener(i,r),this._listeners.push([i,r]);const o=c=>this._onDragEnd(c);window.addEventListener("mouseup",o),this._listeners.push(["mouseup",o]);const a=c=>this._onDragEnd(c);window.addEventListener("pointerup",a),this._listeners.push(["pointerup",a]);const l=c=>this._onDragEnd(c);window.addEventListener("touchend",l),this._listeners.push(["touchend",l])}getCursorPos(){if(this._ended)throw new Error("Cannot call getCursorPos after DragHelper has been ended.");return{x:this._mouseX,y:this._mouseY}}setScaleMultiplier(e){this.options.scaleMultiplier=e}dragStart(e,t,i){if(this._ended)throw new Error("Cannot call dragStart after DragHelper has been ended.");return i=i===void 0?this.options.scaleMultiplier:i,this.options.scaleMultiplier=i,this._isDragging||(this._startX=this._mouseX,this._startY=this._mouseY),this._callBacks.push({onMove:typeof e>"u"?null:e,onEnd:typeof t>"u"?null:t}),this._isDragging=!0,this._firstMove=!0,this._callBacks.length-1}dragStop(){if(this._ended)throw new Error("Cannot call dragStop after DragHelper has been ended.");this._isDragging!=!1&&this._onDragEnd()}_onDragMove(e){if(this._ended||!this._isDragging)return!1;e.preventDefault(),this._firstMove==!0&&this.options.usePointerEvents==!0&&(this._startX=this._mouseX,this._startY=this._mouseY);var t=(this._startX-this._mouseX)*this.options.scaleMultiplier,i=(this._startY-this._mouseY)*this.options.scaleMultiplier;if(this._callBacks.length>0)for(var s=0;s<this._callBacks.length;s++)this._callBacks[s].onMove!=null&&this._callBacks[s].onMove.call(null,t,i);this._firstMove=!1}_onDragEnd(e){if(!this._ended&&this._isDragging!=!1){var t=(this._startX-this._mouseX)*this.options.scaleMultiplier,i=(this._startY-this._mouseY)*this.options.scaleMultiplier;if(this._callBacks.length>0)for(var s=0;s<this._callBacks.length;s++)this._callBacks[s].onEnd!=null&&this._callBacks[s].onEnd.call(null,t,i);this._isDragging=!1,this._callBacks=[]}}cancelCallback(e){console.warn("cancelCallback is deprecated"),this._callBacks[e]={onMove:null,onEnd:null}}end(){if(!this._ended){for(const[e,t]of this._listeners)window.removeEventListener(e,t);this._listeners=[],this._callBacks=[],this._isDragging=!1,this._ended=!0}}}const GT={class:"asset-list-window"},zT={class:"assets-list"},WT={class:"list mac-bar"},XT={class:"flex-wrapper"},YT=["title","onMousedown"],qT={class:"thumbnail",align:"center"},KT=["src","alt"],ZT={class:"item-title"},QT={key:0,class:"drag-overlay"},jT=["src","alt"],ff="drop-receiver",JT={__name:"Assets",setup(n){const e=ft("app");e.sceneMgr;const t=e.assetMgr,i=se(!1),s=se(null),r=se(0),o=se(0),a=se(!1),l=new VT;function c(h,d){s.value=d,i.value=!0,a.value=!1;const f=h.target.getBoundingClientRect(),v=f.left,_=f.top;r.value=v,o.value=_,l.dragStart((m,p)=>{r.value=v-m,o.value=_-p;const b=l.getCursorPos(),w=u(b.x,b.y);a.value=!!w},(m,p)=>{const b=l.getCursorPos(),w=u(b.x,b.y);w!=null&&w.receiver.drop(d,b),i.value=!1,s.value=null})}function u(h,d){let f=document.elementFromPoint(h,d);for(;f&&f!==document.body;){if(f[ff])return{el:f,receiver:f[ff]};f=f.parentElement}return null}return Er(()=>{l.end()}),(h,d)=>(de(),ye(At,null,[ae("div",GT,[ae("div",zT,[d[1]||(d[1]=ae("div",{class:"header"},"Click and Drag Any Asset Type to the Scene:",-1)),ae("div",WT,[ae("div",XT,[(de(!0),ye(At,null,ei(V(t).assets.value,f=>(de(),ye("div",{key:f.id,class:"asset-item",title:`${f.name}`,onClick:d[0]||(d[0]=()=>{}),onMousedown:v=>c(v,f)},[ae("div",qT,[ae("img",{src:`/img/shapes/${f.name.toLowerCase()}.png`,height:"100%",alt:`${f.name}`},null,8,KT)]),ae("div",ZT,yn(f.name),1)],40,YT))),128))])])])]),(de(),dt(Ba,{to:"body"},[i.value?(de(),ye("div",QT,[ae("div",{class:ut(["thumbnail",{"over-drop-target":a.value}]),align:"center",style:wt({left:`${r.value}px`,top:`${o.value}px`})},[ae("img",{src:`/img/shapes/${s.value.name.toLowerCase()}.png`,height:"100%",alt:`${s.value.name}`},null,8,jT)],6)])):Ye("",!0)]))],64))}},$T=Ln(JT,[["__scopeId","data-v-4898afcb"]]),eb={class:"property-row"},tb={class:"label"},nb={class:"value"},ib={__name:"PropertyRow",props:{label:String},setup(n){return(e,t)=>(de(),ye("div",eb,[ae("div",tb,yn(n.label),1),ae("div",nb,[Bt(e.$slots,"default",{},void 0,!0)])]))}},xn=Ln(ib,[["__scopeId","data-v-2adc7185"]]),sb={__name:"FloatInput",props:{modelValue:{type:Number,required:!0}},emits:["update:modelValue"],setup(n,{emit:e}){const t=n,i=e,s=se(""),r=se(!1);let o=0;et(()=>t.modelValue,u=>{r.value||(s.value=String(u),o=u)});const a=u=>/^[-+]?\d*\.?\d+(e[-+]?\d+)?$/i.test(u.trim()),l=()=>{if(a(s.value)){const u=parseFloat(s.value);o=u,i("update:modelValue",u),r.value=!1}else r.value=!0},c=()=>{if(!a(s.value))r.value=!1,s.value=String(o);else{const u=parseFloat(s.value);o=u,i("update:modelValue",u),r.value=!1}};return Sn(()=>{typeof t.modelValue=="number"&&!Number.isNaN(t.modelValue)?(o=t.modelValue,s.value=String(t.modelValue)):(o=0,s.value="0",i("update:modelValue",0))}),(u,h)=>kt((de(),ye("input",pr({type:"text",class:["float-input",{invalid:r.value}]},u.$attrs,{"onUpdate:modelValue":h[0]||(h[0]=d=>s.value=d),onInput:l,onBlur:c}),null,16)),[[ts,s.value]])}},rb=Ln(sb,[["__scopeId","data-v-16c66e01"]]),ob={class:"property-row"},ab={class:"label"},lb={class:"value vector3"},cb={__name:"Vector3Row",props:{label:String,vector:Object,isRotation:Boolean},setup(n){const e=n,t={x:se(!0),y:se(!0),z:se(!0)};function i(s,r){const o=s.clientX,a=parseFloat(e.vector[r].value),l=u=>{const h=u.ctrlKey,d=u.shiftKey,f=h?.001:d?.01:.1,_=(u.clientX-o)*f,m=a+_;e.vector[r].value=parseFloat(m.toFixed(3)),t[r].value=!0},c=()=>{window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}return(s,r)=>(de(),ye("div",ob,[ae("div",ab,yn(n.label),1),ae("div",lb,[(de(),ye(At,null,ei(["x","y","z"],o=>ae("label",{key:o,class:"vector-input"},[za(yn(o)+": ",1),Ze(rb,{modelValue:n.vector[o].value,"onUpdate:modelValue":a=>n.vector[o].value=a,onMousedown:a=>i(a,o),style:{cursor:"ns-resize"}},null,8,["modelValue","onUpdate:modelValue","onMousedown"])])),64))])]))}},ql=Ln(cb,[["__scopeId","data-v-a3c800e3"]]),ub={class:"properties-inspector-window"},hb={class:"items-list mac-bar"},db={class:"list mac-bar"},fb={key:0,class:"no-selection"},pb={class:"property-group"},mb=["value"],gb={class:"property-group"},vb={class:"property-group"},_b={class:"colorInputWrapper"},xb=["value"],Ab={__name:"PropertiesInspector",setup(n){const t=ft("app").sceneMgr;function i(s){!t.selectedItem.item!=null&&(t.selectedItem.color.value=s.target.value)}return(s,r)=>(de(),ye("div",ub,[ae("div",hb,[ae("div",db,[V(t).selectedItem.id.value==null?(de(),ye("div",fb," Select an item to see and edit its properties ")):(de(),ye(At,{key:1},[r[6]||(r[6]=ae("div",{class:"section-header"},"Properties",-1)),ae("div",pb,[Ze(xn,{label:"ID"},{default:Lt(()=>[ae("input",{type:"text",value:V(t).selectedItem.id.value,class:"ro",readonly:""},null,8,mb)]),_:1}),Ze(xn,{label:"Name"},{default:Lt(()=>[kt(ae("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>V(t).selectedItem.name.value=o)},null,512),[[ts,V(t).selectedItem.name.value]])]),_:1}),Ze(xn,{label:"Visible"},{default:Lt(()=>[kt(ae("input",{type:"checkbox","onUpdate:modelValue":r[1]||(r[1]=o=>V(t).selectedItem.visible.value=o)},null,512),[[tr,V(t).selectedItem.visible.value]])]),_:1}),Ze(xn,{label:"Wireframe"},{default:Lt(()=>[kt(ae("input",{type:"checkbox","onUpdate:modelValue":r[2]||(r[2]=o=>V(t).selectedItem.wireframe.value=o)},null,512),[[tr,V(t).selectedItem.wireframe.value]])]),_:1})]),r[7]||(r[7]=ae("div",{class:"section-header"},"Transform",-1)),ae("div",gb,[Ze(ql,{label:"Position",vector:V(t).selectedItem.position},null,8,["vector"]),Ze(ql,{label:"Rotation",vector:V(t).selectedItem.rotation,isRotation:""},null,8,["vector"]),Ze(ql,{label:"Scale",vector:V(t).selectedItem.scale},null,8,["vector"])]),r[8]||(r[8]=ae("div",{class:"section-header"},"Material",-1)),ae("div",vb,[Ze(xn,{label:"Color"},{default:Lt(()=>[ae("div",_b,[ae("input",{type:"color",value:V(t).selectedItem.color.value,onInput:r[3]||(r[3]=o=>i(o))},null,40,xb)])]),_:1}),Ze(xn,{label:"Roughness"},{default:Lt(()=>[kt(ae("input",{type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":r[4]||(r[4]=o=>V(t).selectedItem.roughness.value=o)},null,512),[[ts,V(t).selectedItem.roughness.value,void 0,{number:!0}]])]),_:1}),Ze(xn,{label:"Metalness"},{default:Lt(()=>[kt(ae("input",{type:"range",min:"0",max:"1",step:"0.01","onUpdate:modelValue":r[5]||(r[5]=o=>V(t).selectedItem.metalness.value=o)},null,512),[[ts,V(t).selectedItem.metalness.value,void 0,{number:!0}]])]),_:1})])],64))])])]))}},Mb=Ln(Ab,[["__scopeId","data-v-8761477b"]]),yb={class:"properties-inspector-window"},Sb={class:"items-list mac-bar"},Eb={class:"list mac-bar"},wb={class:"property-group"},Tb={class:"property-group"},bb={class:"colorInputWrapper"},Cb=["value"],Rb={class:"property-group"},Db={__name:"Settings",setup(n){const t=ft("app").settingsMgr;function i(s){t.backgroundColor.value=s.target.value}return(s,r)=>(de(),ye("div",yb,[ae("div",Sb,[ae("div",Eb,[r[7]||(r[7]=ae("div",{class:"section-header"},"Viewport Items",-1)),ae("div",wb,[Ze(xn,{label:"Show Grid Floor"},{default:Lt(()=>[kt(ae("input",{type:"checkbox","onUpdate:modelValue":r[0]||(r[0]=o=>V(t).showGrids.value=o)},null,512),[[tr,V(t).showGrids.value]])]),_:1}),Ze(xn,{label:"Show Axes"},{default:Lt(()=>[kt(ae("input",{type:"checkbox","onUpdate:modelValue":r[1]||(r[1]=o=>V(t).showAxes.value=o)},null,512),[[tr,V(t).showAxes.value]])]),_:1})]),r[8]||(r[8]=ae("div",{class:"section-header"},"Background Settings",-1)),ae("div",Tb,[Ze(xn,{label:"Background Color"},{default:Lt(()=>[ae("div",bb,[ae("input",{type:"color",value:V(t).backgroundColor.value,onInput:r[2]||(r[2]=o=>i(o))},null,40,Cb)])]),_:1}),Ze(xn,{label:"Show HDR Background Image"},{default:Lt(()=>[kt(ae("input",{type:"checkbox","onUpdate:modelValue":r[3]||(r[3]=o=>V(t).showHDRBackground.value=o)},null,512),[[tr,V(t).showHDRBackground.value]])]),_:1})]),r[9]||(r[9]=ae("div",{class:"section-header"},"Lighting Settings",-1)),ae("div",Rb,[Ze(xn,{label:"Enable Lighting"},{default:Lt(()=>[kt(ae("input",{type:"checkbox","onUpdate:modelValue":r[4]||(r[4]=o=>V(t).lightingEnabled.value=o)},null,512),[[tr,V(t).lightingEnabled.value]])]),_:1}),Ze(xn,{label:"Ambient Light Intensity"},{default:Lt(()=>[kt(ae("input",{type:"range",min:"0",max:"10",step:"0.01","onUpdate:modelValue":r[5]||(r[5]=o=>V(t).ambientLightIntensity.value=o)},null,512),[[ts,V(t).ambientLightIntensity.value,void 0,{number:!0}]])]),_:1}),Ze(xn,{label:"Directional Light Intensity"},{default:Lt(()=>[kt(ae("input",{type:"range",min:"0",max:"10",step:"0.01","onUpdate:modelValue":r[6]||(r[6]=o=>V(t).directionalLightIntensity.value=o)},null,512),[[ts,V(t).directionalLightIntensity.value,void 0,{number:!0}]])]),_:1})])])])]))}},Pb=Ln(Db,[["__scopeId","data-v-e080e8bc"]]),pf=""+new URL("../img/logos/gh_white_small.png",import.meta.url).href,Ib=[{name:"window",top:0,left:0,bottom:1080,right:1920},{name:"MainView",windows:["viewport","about","notes"],style:cn.TABBED,left:0,right:["ref","window.right-460"],top:0,bottom:["ref","window.bottom-300"]},{name:"bottom",windows:["assets","notes"],left:0,style:cn.TABBED,right:["ref","MainView.right"],top:["ref","MainView.bottom"],bottom:["ref","window.bottom"]},{name:"sceneList",windows:["scene-list"],style:cn.TABBED,left:["ref","MainView.right"],right:["ref","window.right"],top:0,bottom:["ref","window.top+400"]},{name:"propertiesInspector",windows:["properties-inspector","settings"],style:cn.TABBED,left:["ref","MainView.right"],right:["ref","window.right"],top:["ref","sceneList.bottom"],bottom:["ref","window.bottom"]}],Lb=[{name:"window",top:0,left:0,bottom:1080,right:1920},{name:"MainView",windows:["viewport","about","notes"],style:cn.TABBED,left:0,right:730,top:0,bottom:390},{name:"TopView",windows:[{kind:"viewport",props:{side:"top"}}],style:cn.SINGLE,left:["ref","MainView.right"],right:730*2,top:0,bottom:390},{name:"LeftView",windows:[{kind:"viewport",props:{side:"left"}}],style:cn.SINGLE,left:0,right:730,top:390,bottom:390*2},{name:"RightView",windows:[{kind:"viewport",props:{side:"right"}}],style:cn.SINGLE,left:["ref","MainView.right"],right:730*2,top:390,bottom:390*2},{name:"bottom",windows:["assets","notes"],left:0,style:cn.TABBED,right:["ref","TopView.right"],top:["ref","LeftView.bottom"],bottom:["ref","window.bottom"]},{name:"sceneList",windows:["scene-list"],style:cn.TABBED,left:["ref","TopView.right"],right:["ref","window.right"],top:0,bottom:["ref","window.top+400"]},{name:"propertiesInspector",windows:["properties-inspector","settings"],style:cn.TABBED,left:["ref","TopView.right"],right:["ref","window.right"],top:["ref","sceneList.bottom"],bottom:["ref","window.bottom"]}],Ub={class:"header-bar"},Nb={class:"block layout-select"},Ob=["value"],Fb={class:"block layout-select"},Bb={__name:"HeaderBar",setup(n){const e=se("default"),t=Dn([{name:"Default",slug:"default",layout:Ib},{name:"Quad",slug:"quad",layout:Lb}]),i=ft("app");et(()=>e.value,r=>{const o=t.value.find(a=>a.slug===r);o&&i.wc.loadLayout(o.layout)});function s(){const r=i.wc.getLayoutDetails(),o=prompt("Enter a name for the new layout:","New Layout");o&&(t.value.push({name:o,slug:o.toLowerCase().replace(/\s+/g,"-"),layout:r}),e.value=t.value[t.value.length-1].slug)}return(r,o)=>(de(),ye("div",Ub,[o[4]||(o[4]=ae("div",{class:"block title"},[ae("span",null,"vue-win-mgr 3d demo")],-1)),ae("div",Nb,[o[2]||(o[2]=za(" Layout: ")),kt(ae("select",{"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a)},[(de(!0),ye(At,null,ei(t.value,a=>(de(),ye("option",{key:a.slug,value:a.slug},yn(a.name),9,Ob))),128))],512),[[Lp,e.value]])]),ae("div",Fb,[ae("button",{type:"button",class:"add-layout-button",onClick:o[1]||(o[1]=a=>s())},o[3]||(o[3]=[ae("span",{class:"material-icons"},"add",-1)]))]),o[5]||(o[5]=Wa('<div class="flex-grow" data-v-10ec8ce7></div><div class="flex items-center links" data-v-10ec8ce7><div data-v-10ec8ce7><a href="https://github.com/orokro/vue-win-mgr-3d-demo" target="_blank" rel="noopener noreferrer" data-v-10ec8ce7><img src="'+pf+'" alt="Logo" height="23px" data-v-10ec8ce7></a><span class="label" data-v-10ec8ce7><a href="https://github.com/orokro/vue-win-mgr-3d-demo" target="_blank" rel="noopener noreferrer" data-v-10ec8ce7>Project</a></span></div><div data-v-10ec8ce7><a href="https://github.com/orokro/Vue-Window-Manager" target="_blank" rel="noopener noreferrer" data-v-10ec8ce7><img src="'+pf+'" alt="Logo" height="23px" data-v-10ec8ce7></a><span class="label" data-v-10ec8ce7><a href="https://github.com/orokro/Vue-Window-Manager" target="_blank" rel="noopener noreferrer" data-v-10ec8ce7>Library</a></span></div><div data-v-10ec8ce7><a href="https://www.npmjs.com/package/vue-win-mgr?activeTab=readme" target="_blank" rel="noopener noreferrer" data-v-10ec8ce7><img src="'+Cm+'" alt="Logo" height="23px" data-v-10ec8ce7></a><span class="label" data-v-10ec8ce7><a href="https://www.npmjs.com/package/vue-win-mgr?activeTab=readme" target="_blank" rel="noopener noreferrer" data-v-10ec8ce7>Library</a></span></div></div>',2))]))}},kb=Ln(Bb,[["__scopeId","data-v-10ec8ce7"]]),Hb={},Vb={class:"statusBar"};function Gb(n,e){return de(),ye("div",Vb,e[0]||(e[0]=[ae("div",{class:"version-number"},"v1.0.0",-1)]))}const zb=Ln(Hb,[["render",Gb],["__scopeId","data-v-f542cd7e"]]),Wb={__name:"App",setup(n){const e=se(null),t=new fT;Jt("app",t);const i=[{window:_T,title:"Scene Viewport",slug:"viewport",icon:"/img/icons/viewport.png"},{window:DT,title:"Notes",slug:"notes",icon:"/img/icons/notes.png"},{window:HT,title:"Scene Items",slug:"scene-list",icon:"/img/icons/scene_list.png"},{window:$T,title:"Assets",slug:"assets",icon:"/img/icons/assets.png"},{window:Mb,title:"Properties Inspector",slug:"properties-inspector",icon:"/img/icons/properties.png"},{window:LT,title:"About This App",slug:"about",icon:"/img/icons/about.png"},{window:Pb,title:"Settings",slug:"settings",icon:"/img/icons/settings.png"}],s=[{name:"window",top:0,left:0,bottom:1080,right:1920},{name:"MainView",windows:["viewport","about","notes"],style:cn.TABBED,left:0,right:["ref","window.right-460"],top:0,bottom:["ref","window.bottom-300"]},{name:"bottom",windows:["assets","notes"],left:0,style:cn.TABBED,right:["ref","MainView.right"],top:["ref","MainView.bottom"],bottom:["ref","window.bottom"]},{name:"sceneList",windows:["scene-list"],style:cn.TABBED,left:["ref","MainView.right"],right:["ref","window.right"],top:0,bottom:["ref","window.top+400"]},{name:"propertiesInspector",windows:["properties-inspector","settings"],style:cn.TABBED,left:["ref","MainView.right"],right:["ref","window.right"],top:["ref","sceneList.bottom"],bottom:["ref","window.bottom"]}];function r(o){if(o.shiftKey==!1)return o.preventDefault(),!1}return Sn(()=>{var a;const o=(a=e.value)==null?void 0:a.getContext();t.setWindowManagerContext(o),window.app=t}),(o,a)=>(de(),ye("main",{onContextmenu:r},[(de(),dt(V(dT),{key:0,ref_key:"windowManagerEl",ref:e,availableWindows:i,defaultLayout:s,showTopBar:!0,showStatusBar:!0,topBarComponent:kb,splitMergeHandles:!0,theme:{frameTabsActiveColor:"RGB(105,105,105)"}},{statusBar:Lt(()=>[Ze(zb)]),_:1},512))],32))}},Xb=Ln(Wb,[["__scopeId","data-v-2c6ba6f7"]]);s_(Xb).mount("#app");
