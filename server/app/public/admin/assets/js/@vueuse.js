import{s as z,h as L,i as H,u as M,j as J,k as U,l as v,w as b,m as Q,b as G,n as q,p as V}from"./@vue.js";var K=Object.defineProperty,X=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ee=(e,t)=>{for(var n in t||(t={}))Z.call(t,n)&&C(e,n,t[n]);if(N)for(var n of N(t))k.call(t,n)&&C(e,n,t[n]);return e},te=(e,t)=>X(e,Y(t));function Pe(e,t){var n;const r=z();return L(()=>{r.value=e()},te(ee({},t),{flush:(n=t==null?void 0:t.flush)!=null?n:"sync"})),H(r)}var D;const E=typeof window<"u",ne=e=>typeof e<"u",Ie=e=>typeof e=="boolean",re=e=>typeof e=="function",Ee=e=>typeof e=="number",oe=e=>typeof e=="string",ie=()=>{};E&&((D=window==null?void 0:window.navigator)!=null&&D.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function w(e){return typeof e=="function"?e():M(e)}function B(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}function se(e,t={}){let n,r;return u=>{const o=w(e),s=w(t.maxWait);if(n&&clearTimeout(n),o<=0||s!==void 0&&s<=0)return r&&(clearTimeout(r),r=null),u();s&&!r&&(r=setTimeout(()=>{n&&clearTimeout(n),r=null,u()},s)),n=setTimeout(()=>{r&&clearTimeout(r),r=null,u()},o)}}function ue(e,t=!0,n=!0){let r=0,i,u=!0;const o=()=>{i&&(clearTimeout(i),i=void 0)};return l=>{const f=w(e),d=Date.now()-r;if(o(),f<=0)return r=Date.now(),l();d>f&&(n||!u)?(r=Date.now(),l()):t&&(i=setTimeout(()=>{r=Date.now(),u=!0,o(),l()},f-d)),!n&&!i&&(i=setTimeout(()=>u=!0,f)),u=!1}}function ae(e){return e}function x(e){return J()?(U(e),!0):!1}function le(e,t=200,n={}){return B(se(t,n),e)}function Se(e,t=200,n={}){const r=v(e.value),i=le(()=>{r.value=e.value},t,n);return b(e,()=>i()),r}function Te(e,t=200,n=!1,r=!0){return B(ue(t,n,r),e)}function F(e,t=!0){Q()?G(e):t?e():q(e)}function $e(e,t,n={}){const{immediate:r=!0}=n,i=v(!1);let u=null;function o(){u&&(clearTimeout(u),u=null)}function s(){i.value=!1,o()}function l(...f){o(),i.value=!0,u=setTimeout(()=>{i.value=!1,u=null,e(...f)},w(t))}return r&&(i.value=!0,E&&l()),x(s),{isPending:i,start:l,stop:s}}function _(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const P=E?window:void 0,ce=E?window.document:void 0;function h(...e){let t,n,r,i;if(oe(e[0])||Array.isArray(e[0])?([n,r,i]=e,t=P):[t,n,r,i]=e,!t)return ie;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const u=[],o=()=>{u.forEach(d=>d()),u.length=0},s=(d,O,p)=>(d.addEventListener(O,p,i),()=>d.removeEventListener(O,p,i)),l=b(()=>_(t),d=>{o(),d&&u.push(...n.flatMap(O=>r.map(p=>s(d,O,p))))},{immediate:!0,flush:"post"}),f=()=>{l(),o()};return x(f),f}function xe(e,t,n={}){const{window:r=P,ignore:i=[],capture:u=!0,detectIframe:o=!1}=n;if(!r)return;let s=!0,l;const f=a=>i.some(c=>{if(typeof c=="string")return Array.from(r.document.querySelectorAll(c)).some(m=>m===a.target||a.composedPath().includes(m));{const m=_(c);return m&&(a.target===m||a.composedPath().includes(m))}}),d=a=>{r.clearTimeout(l);const c=_(e);if(!(!c||c===a.target||a.composedPath().includes(c))){if(a.detail===0&&(s=!f(a)),!s){s=!0;return}t(a)}},O=[h(r,"click",d,{passive:!0,capture:u}),h(r,"pointerdown",a=>{const c=_(e);c&&(s=!a.composedPath().includes(c)&&!f(a))},{passive:!0}),h(r,"pointerup",a=>{if(a.button===0){const c=a.composedPath();a.composedPath=()=>c,l=r.setTimeout(()=>d(a),50)}},{passive:!0}),o&&h(r,"blur",a=>{var c;const m=_(e);((c=r.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(m!=null&&m.contains(r.document.activeElement))&&t(a)})].filter(Boolean);return()=>O.forEach(a=>a())}function fe(e,t=!1){const n=v(),r=()=>n.value=Boolean(e());return r(),F(r,t),n}function de(e){return JSON.parse(JSON.stringify(e))}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$="__vueuse_ssr_handlers__";T[$]=T[$]||{};T[$];function Fe(e,t,{window:n=P,initialValue:r=""}={}){const i=v(r),u=V(()=>{var o;return _(t)||((o=n==null?void 0:n.document)==null?void 0:o.documentElement)});return b([u,()=>w(e)],([o,s])=>{var l;if(o&&n){const f=(l=n.getComputedStyle(o).getPropertyValue(s))==null?void 0:l.trim();i.value=f||r}},{immediate:!0}),b(i,o=>{var s;(s=u.value)!=null&&s.style&&u.value.style.setProperty(w(e),o)}),i}function Ne({document:e=ce}={}){if(!e)return v("visible");const t=v(e.visibilityState);return h(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var j=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,me=(e,t)=>{var n={};for(var r in e)pe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&j)for(var r of j(e))t.indexOf(r)<0&&ve.call(e,r)&&(n[r]=e[r]);return n};function Oe(e,t,n={}){const r=n,{window:i=P}=r,u=me(r,["window"]);let o;const s=fe(()=>i&&"ResizeObserver"in i),l=()=>{o&&(o.disconnect(),o=void 0)},f=b(()=>_(e),O=>{l(),s.value&&i&&O&&(o=new ResizeObserver(t),o.observe(O,u))},{immediate:!0,flush:"post"}),d=()=>{l(),f()};return x(d),{isSupported:s,stop:d}}function Ce(e,t={}){const{reset:n=!0,windowResize:r=!0,windowScroll:i=!0,immediate:u=!0}=t,o=v(0),s=v(0),l=v(0),f=v(0),d=v(0),O=v(0),p=v(0),a=v(0);function c(){const m=_(e);if(!m){n&&(o.value=0,s.value=0,l.value=0,f.value=0,d.value=0,O.value=0,p.value=0,a.value=0);return}const y=m.getBoundingClientRect();o.value=y.height,s.value=y.bottom,l.value=y.left,f.value=y.right,d.value=y.top,O.value=y.width,p.value=y.x,a.value=y.y}return Oe(e,c),b(()=>_(e),m=>!m&&c()),i&&h("scroll",c,{passive:!0}),r&&h("resize",c,{passive:!0}),F(()=>{u&&c()}),{height:o,bottom:s,left:l,right:f,top:d,width:O,x:p,y:a,update:c}}var A;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(A||(A={}));var ye=Object.defineProperty,W=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,be=(e,t)=>{for(var n in t||(t={}))he.call(t,n)&&R(e,n,t[n]);if(W)for(var n of W(t))_e.call(t,n)&&R(e,n,t[n]);return e};const ge={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};be({linear:ae},ge);function De(e,t,n,r={}){var i,u,o;const{clone:s=!1,passive:l=!1,eventName:f,deep:d=!1,defaultValue:O}=r,p=Q(),a=n||(p==null?void 0:p.emit)||((i=p==null?void 0:p.$emit)==null?void 0:i.bind(p))||((o=(u=p==null?void 0:p.proxy)==null?void 0:u.$emit)==null?void 0:o.bind(p==null?void 0:p.proxy));let c=f;t||(t="modelValue"),c=f||c||`update:${t.toString()}`;const m=g=>s?re(s)?s(g):de(g):g,y=()=>ne(e[t])?m(e[t]):O;if(l){const g=y(),S=v(g);return b(()=>e[t],I=>S.value=m(I)),b(S,I=>{(I!==e[t]||d)&&a(c,I)},{deep:d}),S}else return V({get(){return y()},set(g){a(c,g)}})}function je({window:e=P}={}){if(!e)return v(!1);const t=v(e.document.hasFocus());return h(e,"blur",()=>{t.value=!1}),h(e,"focus",()=>{t.value=!0}),t}function Ae(e={}){const{window:t=P,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:i=!0,includeScrollbar:u=!0}=e,o=v(n),s=v(r),l=()=>{t&&(u?(o.value=t.innerWidth,s.value=t.innerHeight):(o.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};return l(),F(l),h("resize",l,{passive:!0}),i&&h("orientationchange",l,{passive:!0}),{width:o,height:s}}export{Ee as a,Ie as b,Ae as c,Ce as d,h as e,Oe as f,Te as g,Fe as h,E as i,$e as j,Ne as k,je as l,Pe as m,De as n,xe as o,Se as r,x as t,_ as u};
