(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[954],{8642:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},894:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(5321).Z,n=r(1322).Z,l=r(6687).Z,a=r(6239).Z,i=l(r(1258)),u=n(r(2181)),s=r(3756),c=r(8655),d=r(2515);r(9571);var f=n(r(6325));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,r,n,l,a,i){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let u="decode"in e?e.decode():Promise.resolve();u.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&a(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,l=!1;n.current(o({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==l?void 0:l.current)&&l.current(e)}})}let b=i.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:l,qualityInt:u,className:s,imgStyle:c,blurStyle:d,isLazy:f,fill:p,placeholder:h,loading:g,srcString:b,config:y,unoptimized:v,loader:_,onLoadRef:w,onLoadingCompleteRef:O,setBlurComplete:j,setShowAltText:E,onLoad:C,onError:S}=e,P=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,i.default.createElement(i.default.Fragment,null,i.default.createElement("img",Object.assign({},P,r,{width:l,height:n,decoding:"async","data-nimg":p?"fill":"1",className:s,loading:g,style:o({},c,d),ref:i.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,b,h,w,O,j,v))},[b,h,w,O,j,S,v,t]),onLoad:e=>{let t=e.currentTarget;m(t,b,h,w,O,j,v)},onError:e=>{E(!0),"blur"===h&&j(!0),S&&S(e)}})))}),y=i.forwardRef((e,t)=>{let r,n;var l,{src:m,sizes:y,unoptimized:v=!1,priority:_=!1,loading:w,className:O,quality:j,width:E,height:C,fill:S,style:P,onLoad:x,onLoadingComplete:k,placeholder:M="empty",blurDataURL:R,layout:N,objectFit:z,objectPosition:D,lazyBoundary:L,lazyRoot:T}=e,I=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=i.useContext(d.ImageConfigContext),Z=i.useMemo(()=>{let e=p||A||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return o({},e,{allSizes:t,deviceSizes:r})},[A]),B=I,F=B.loader||f.default;delete B.loader;let G="__next_img_default"in F;if(G){if("custom"===Z.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=F;F=t=>{let{config:r}=t,o=a(t,["config"]);return e(o)}}if(N){"fill"===N&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[N];e&&(P=o({},P,e));let t={responsive:"100vw",fill:"100vw"}[N];t&&!y&&(y=t)}let U="",V=g(E),W=g(C);if("object"==typeof(l=m)&&(h(l)||void 0!==l.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,R=R||e.blurDataURL,U=e.src,!S){if(V||W){if(V&&!W){let t=V/e.width;W=Math.round(e.height*t)}else if(!V&&W){let t=W/e.height;V=Math.round(e.width*t)}}else V=e.width,W=e.height}}let q=!_&&("lazy"===w||void 0===w);((m="string"==typeof m?m:U).startsWith("data:")||m.startsWith("blob:"))&&(v=!0,q=!1),Z.unoptimized&&(v=!0),G&&m.endsWith(".svg")&&!Z.dangerouslyAllowSVG&&(v=!0);let[H,K]=i.useState(!1),[X,Y]=i.useState(!1),J=g(j),$=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:D}:{},X?{}:{color:"transparent"},P),Q="blur"===M&&R&&!H?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(s.getImageBlurSvg({widthInt:V,heightInt:W,blurWidth:r,blurHeight:n,blurDataURL:R}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:o,width:n,quality:l,sizes:a,loader:i}=e;if(o)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:o,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let o;o=e.exec(r);o)t.push(parseInt(o[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=o[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:o,kind:"w"};let l=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:l,kind:"x"}}(t,n,a),c=u.length-1;return{sizes:a||"w"!==s?a:"100vw",srcSet:u.map((e,o)=>"".concat(i({config:t,src:r,quality:l,width:e})," ").concat("w"===s?e:o+1).concat(s)).join(", "),src:i({config:t,src:r,quality:l,width:u[c]})}}({config:Z,src:m,unoptimized:v,width:V,quality:J,sizes:y,loader:F}),et=m,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},eo=i.useRef(x);i.useEffect(()=>{eo.current=x},[x]);let en=i.useRef(k);i.useEffect(()=>{en.current=k},[k]);let el=o({isLazy:q,imgAttributes:ee,heightInt:W,widthInt:V,qualityInt:J,className:O,imgStyle:$,blurStyle:Q,loading:w,config:Z,fill:S,unoptimized:v,placeholder:M,loader:F,srcString:et,onLoadRef:eo,onLoadingCompleteRef:en,setBlurComplete:K,setShowAltText:Y},B);return i.default.createElement(i.default.Fragment,null,i.default.createElement(b,Object.assign({},el,{ref:t})),_?i.default.createElement(u.default,null,i.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6550:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(1322).Z,n=r(6239).Z,l=o(r(1258)),a=r(7024),i=r(7946),u=r(8617),s=r(4817),c=r(5546),d=r(8496),f=r(8642),p=r(724);let h=new Set;function g(e,t,r,o){if(a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let n=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+n;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,r,o)).catch(e=>{})}}function m(e){return"string"==typeof e?e:i.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let r,o;let{href:i,as:h,children:b,prefetch:y,passHref:v,replace:_,shallow:w,scroll:O,locale:j,onClick:E,onMouseEnter:C,onTouchStart:S,legacyBehavior:P=!1}=e,x=n(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=b,P&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let k=!1!==y,M=l.default.useContext(s.RouterContext),R=l.default.useContext(c.AppRouterContext),N=null!=M?M:R,z=!M,{href:D,as:L}=l.default.useMemo(()=>{if(!M){let e=m(i);return{href:e,as:h?m(h):e}}let[e,t]=a.resolveHref(M,i,!0);return{href:e,as:h?a.resolveHref(M,h):t||e}},[M,i,h]),T=l.default.useRef(D),I=l.default.useRef(L);P&&(o=l.default.Children.only(r));let A=P?o&&"object"==typeof o&&o.ref:t,[Z,B,F]=d.useIntersection({rootMargin:"200px"}),G=l.default.useCallback(e=>{(I.current!==L||T.current!==D)&&(F(),I.current=L,T.current=D),Z(e),A&&("function"==typeof A?A(e):"object"==typeof A&&(A.current=e))},[L,A,D,F,Z]);l.default.useEffect(()=>{N&&B&&k&&g(N,D,L,{locale:j})},[L,D,B,j,k,null==M?void 0:M.locale,N]);let U={ref:G,onClick(e){P||"function"!=typeof E||E(e),P&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,r,o,n,i,u,s,c,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:i,locale:s,scroll:u}):t[n?"replace":"push"](o||r,{forceOptimisticNavigation:!d})};c?l.default.startTransition(h):h()}(e,N,D,L,_,w,O,j,z,k)},onMouseEnter(e){P||"function"!=typeof C||C(e),P&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),N&&(k||!z)&&g(N,D,L,{locale:j,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){P||"function"!=typeof S||S(e),P&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),N&&(k||!z)&&g(N,D,L,{locale:j,priority:!0,bypassPrefetchedCheck:!0})}};if(!P||v||"a"===o.type&&!("href"in o.props)){let e=void 0!==j?j:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&f.getDomainLocale(L,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);U.href=t||p.addBasePath(u.addLocale(L,e,null==M?void 0:M.defaultLocale))}return P?l.default.cloneElement(o,U):l.default.createElement("a",Object.assign({},x,U),r)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8496:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!l,[c,d]=o.useState(!1),f=o.useRef(null),p=o.useCallback(e=>{f.current=e},[]);o.useEffect(()=>{if(l){if(s||c)return;let e=f.current;if(e&&e.tagName){let o=function(e,t,r){let{id:o,observer:n,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=i.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=a.get(o)))return t;let n=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:n},i.push(r),a.set(r,t),t}(r);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),a.delete(o);let e=i.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return o}}else if(!c){let e=n.requestIdleCallback(()=>d(!0));return()=>n.cancelIdleCallback(e)}},[s,r,t,c,f.current]);let h=o.useCallback(()=>{d(!1)},[]);return[p,c,h]};var o=r(1258),n=r(7546);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1134:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.suspense=function(){let e=Error(o.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=o.NEXT_DYNAMIC_NO_SSR_CODE,e},t.NoSSR=function(e){let{children:t}=e;return t},(0,r(1322).Z)(r(1258));var o=r(2052)},1414:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:o}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n=o({},n,e)),n=o({},n,t);let i=n.loader,u=()=>null!=i?i().then(a):Promise.resolve(a(()=>null));return n.loadableGenerated&&delete(n=o({},n,n.loadableGenerated)).loadableGenerated,"boolean"!=typeof n.ssr||n.ssr||(delete n.webpack,delete n.modules),r(o({},n,{loader:u}))};var o=r(5321).Z,n=r(1322).Z;n(r(1258));var l=n(r(224));function a(e){return{default:(null==e?void 0:e.default)||e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3756:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:o,blurHeight:n,blurDataURL:l}=e,a=o||t,i=n||r,u=l.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&i?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(i,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(o&&n?"1":"20","'/%3E").concat(u,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(l,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(l,"'/%3E%3C/svg%3E")}},6325:function(e,t){"use strict";function r(e){let{config:t,src:r,width:o,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(o,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},9464:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=(0,r(1322).Z)(r(1258));let n=o.default.createContext(null);t.LoadableContext=n},224:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(9219).Z,n=r(5321).Z,l=(0,r(1322).Z)(r(1258)),a=r(1134),i=r(9464);let u=[],s=[],c=!1;function d(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class f{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=n({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function p(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,ssr:!0},t),n=null;function u(){if(!n){let t=new f(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(r.lazy=l.default.lazy(o(function*(){if(r.ssr&&n){let e=n.getCurrentValue(),t=yield e.loaded;if(t)return t}return yield r.loader()})),!c){let e=r.webpack?r.webpack():r.modules;e&&s.push(t=>{for(let r of e)if(-1!==t.indexOf(r))return u()})}function d(e){!function(){u();let e=l.default.useContext(i.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let t=r.loading,o=l.default.createElement(t,{isLoading:!0,pastDelay:!0,error:null}),n=r.ssr?l.default.Fragment:a.NoSSR,s=r.lazy;return l.default.createElement(l.default.Suspense,{fallback:o},l.default.createElement(n,null,l.default.createElement(s,Object.assign({},e))))}return d.preload=()=>u(),d.displayName="LoadableComponent",d}(d,e)}function h(e,t){let r=[];for(;e.length;){let o=e.pop();r.push(o(t))}return Promise.all(r).then(()=>{if(e.length)return h(e,t)})}p.preloadAll=()=>new Promise((e,t)=>{h(u).then(e,t)}),p.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let r=()=>(c=!0,t());h(s,e).then(r,r)})},window.__NEXT_PRELOADREADY=p.preloadReady,t.default=p},1765:function(e,t,r){e.exports=r(1414)},8663:function(e,t,r){r(2181)},5304:function(e,t,r){e.exports=r(894)},1169:function(e,t,r){e.exports=r(6550)},2858:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var o=r(1258),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.createContext&&o.createContext(n),a=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){var o,n,l;o=e,n=t,l=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in o?Object.defineProperty(o,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[n]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>o.createElement(d,i({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,r)=>o.createElement(t.tag,s({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:n,size:l,title:u}=e,c=function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,a),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),u&&o.createElement("title",null,u),e.children)};return void 0!==l?o.createElement(l.Consumer,null,e=>t(e)):t(n)}}}]);