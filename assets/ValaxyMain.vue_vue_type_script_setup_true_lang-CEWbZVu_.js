import{A as pe,B as D,C as te,D as It,i as Ot,E as je,G as Ie,d as Be,H as St,I as Ht,J as xt,K as Y,L as Tt,b as ce,c as me,r as b,f as K,h as A,t as Oe,g as X,M as Nt,j as Mt,w as Rt}from"./app-OlkgLHGm.js";function jt(e,t){const n=document.createElement("div");n.className=t,e.parentNode.insertBefore(n,e),e.parentNode.removeChild(e),n.appendChild(e)}function Bt(e=document){e.querySelectorAll("table").forEach(t=>{const n=document.createElement("div");n.className="table-container",jt(t,"table-container")})}function Vt(){if(pe){const e=new WeakMap;window.addEventListener("click",t=>{var o;const n=t.target;if(n.matches('div[class*="language-"] > button.copy')){const a=n.parentElement,i=(o=n.nextElementSibling)==null?void 0:o.nextElementSibling;if(!a||!i)return;const m=/language-(shellscript|shell|bash|sh|zsh)/.test(a.className);let f="";i.querySelectorAll("span.line:not(.diff.remove)").forEach(E=>f+=`${E.textContent||""}
`),f=f.slice(0,-1),m&&(f=f.replace(/^ *(\$|>) /gm,"").trim()),qt(f).then(()=>{n.classList.add("copied"),clearTimeout(e.get(n));const E=setTimeout(()=>{n.classList.remove("copied"),n.blur(),e.delete(n)},2e3);e.set(n,E)})}})}}async function qt(e){try{return navigator.clipboard.writeText(e)}catch{const t=document.createElement("textarea"),n=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const o=document.getSelection(),a=o?o.rangeCount>0&&o.getRangeAt(0):null;document.body.appendChild(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length,document.execCommand("copy"),document.body.removeChild(t),a&&(o.removeAllRanges(),o.addRange(a)),n&&n.focus()}}/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */var S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},J=function(t){return t.tagName==="IMG"},Pt=function(t){return NodeList.prototype.isPrototypeOf(t)},Q=function(t){return t&&t.nodeType===1},Se=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},He=function(t){try{return Array.isArray(t)?t.filter(J):Pt(t)?[].slice.call(t).filter(J):Q(t)?[t].filter(J):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(J):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},Dt=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},Ut=function(t){var n=t.getBoundingClientRect(),o=n.top,a=n.left,i=n.width,m=n.height,f=t.cloneNode(),E=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,T=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return f.removeAttribute("id"),f.style.position="absolute",f.style.top=o+E+"px",f.style.left=a+T+"px",f.style.width=i+"px",f.style.height=m+"px",f.style.transform="",f},R=function(t,n){var o=S({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,o);var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,o.bubbles,o.cancelable,o.detail),a},Ft=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=window.Promise||function(s){function l(){}s(l,l)},a=function(s){var l=s.target;if(l===Z){$();return}_.indexOf(l)!==-1&&Le({target:l})},i=function(){if(!(N||!r.original)){var s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(Ae-s)>c.scrollOffset&&setTimeout($,150)}},m=function(s){var l=s.key||s.keyCode;(l==="Escape"||l==="Esc"||l===27)&&$()},f=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s;if(s.background&&(Z.style.background=s.background),s.container&&s.container instanceof Object&&(l.container=S({},c.container,s.container)),s.template){var u=Q(s.template)?s.template:document.querySelector(s.template);l.template=u}return c=S({},c,l),_.forEach(function(g){g.dispatchEvent(R("medium-zoom:update",{detail:{zoom:p}}))}),p},E=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(S({},c,s))},T=function(){for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];var g=l.reduce(function(d,h){return[].concat(d,He(h))},[]);return g.filter(function(d){return _.indexOf(d)===-1}).forEach(function(d){_.push(d),d.classList.add("medium-zoom-image")}),G.forEach(function(d){var h=d.type,z=d.listener,M=d.options;g.forEach(function(L){L.addEventListener(h,z,M)})}),p},ut=function(){for(var s=arguments.length,l=Array(s),u=0;u<s;u++)l[u]=arguments[u];r.zoomed&&$();var g=l.length>0?l.reduce(function(d,h){return[].concat(d,He(h))},[]):_;return g.forEach(function(d){d.classList.remove("medium-zoom-image"),d.dispatchEvent(R("medium-zoom:detach",{detail:{zoom:p}}))}),_=_.filter(function(d){return g.indexOf(d)===-1}),p},ft=function(s,l){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return _.forEach(function(g){g.addEventListener("medium-zoom:"+s,l,u)}),G.push({type:"medium-zoom:"+s,listener:l,options:u}),p},gt=function(s,l){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return _.forEach(function(g){g.removeEventListener("medium-zoom:"+s,l,u)}),G=G.filter(function(g){return!(g.type==="medium-zoom:"+s&&g.listener.toString()===l.toString())}),p},Ce=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s.target,u=function(){var d={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},h=void 0,z=void 0;if(c.container)if(c.container instanceof Object)d=S({},d,c.container),h=d.width-d.left-d.right-c.margin*2,z=d.height-d.top-d.bottom-c.margin*2;else{var M=Q(c.container)?c.container:document.querySelector(c.container),L=M.getBoundingClientRect(),ie=L.width,bt=L.height,yt=L.left,_t=L.top;d=S({},d,{width:ie,height:bt,left:yt,top:_t})}h=h||d.width-c.margin*2,z=z||d.height-c.margin*2;var V=r.zoomedHd||r.original,Et=Se(V)?h:V.naturalWidth||h,zt=Se(V)?z:V.naturalHeight||z,W=V.getBoundingClientRect(),$t=W.top,wt=W.left,se=W.width,le=W.height,Ct=Math.min(Math.max(se,Et),h)/se,Lt=Math.min(Math.max(le,zt),z)/le,de=Math.min(Ct,Lt),At=(-wt+(h-se)/2+c.margin+d.left)/de,kt=(-$t+(z-le)/2+c.margin+d.top)/de,ke="scale("+de+") translate3d("+At+"px, "+kt+"px, 0)";r.zoomed.style.transform=ke,r.zoomedHd&&(r.zoomedHd.style.transform=ke)};return new o(function(g){if(l&&_.indexOf(l)===-1){g(p);return}var d=function ie(){N=!1,r.zoomed.removeEventListener("transitionend",ie),r.original.dispatchEvent(R("medium-zoom:opened",{detail:{zoom:p}})),g(p)};if(r.zoomed){g(p);return}if(l)r.original=l;else if(_.length>0){var h=_;r.original=h[0]}else{g(p);return}if(r.original.dispatchEvent(R("medium-zoom:open",{detail:{zoom:p}})),Ae=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,N=!0,r.zoomed=Ut(r.original),document.body.appendChild(Z),c.template){var z=Q(c.template)?c.template:document.querySelector(c.template);r.template=document.createElement("div"),r.template.appendChild(z.content.cloneNode(!0)),document.body.appendChild(r.template)}if(r.original.parentElement&&r.original.parentElement.tagName==="PICTURE"&&r.original.currentSrc&&(r.zoomed.src=r.original.currentSrc),document.body.appendChild(r.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),r.original.classList.add("medium-zoom-image--hidden"),r.zoomed.classList.add("medium-zoom-image--opened"),r.zoomed.addEventListener("click",$),r.zoomed.addEventListener("transitionend",d),r.original.getAttribute("data-zoom-src")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("srcset"),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading"),r.zoomedHd.src=r.zoomed.getAttribute("data-zoom-src"),r.zoomedHd.onerror=function(){clearInterval(M),console.warn("Unable to reach the zoom image target "+r.zoomedHd.src),r.zoomedHd=null,u()};var M=setInterval(function(){r.zoomedHd.complete&&(clearInterval(M),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",$),document.body.appendChild(r.zoomedHd),u())},10)}else if(r.original.hasAttribute("srcset")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading");var L=r.zoomedHd.addEventListener("load",function(){r.zoomedHd.removeEventListener("load",L),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",$),document.body.appendChild(r.zoomedHd),u()})}else u()})},$=function(){return new o(function(s){if(N||!r.original){s(p);return}var l=function u(){r.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(r.zoomed),r.zoomedHd&&document.body.removeChild(r.zoomedHd),document.body.removeChild(Z),r.zoomed.classList.remove("medium-zoom-image--opened"),r.template&&document.body.removeChild(r.template),N=!1,r.zoomed.removeEventListener("transitionend",u),r.original.dispatchEvent(R("medium-zoom:closed",{detail:{zoom:p}})),r.original=null,r.zoomed=null,r.zoomedHd=null,r.template=null,s(p)};N=!0,document.body.classList.remove("medium-zoom--opened"),r.zoomed.style.transform="",r.zoomedHd&&(r.zoomedHd.style.transform=""),r.template&&(r.template.style.transition="opacity 150ms",r.template.style.opacity=0),r.original.dispatchEvent(R("medium-zoom:close",{detail:{zoom:p}})),r.zoomed.addEventListener("transitionend",l)})},Le=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=s.target;return r.original?$():Ce({target:l})},pt=function(){return c},vt=function(){return _},ht=function(){return r.original},_=[],G=[],N=!1,Ae=0,c=n,r={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?c=t:(t||typeof t=="string")&&T(t),c=S({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},c);var Z=Dt(c.background);document.addEventListener("click",a),document.addEventListener("keyup",m),document.addEventListener("scroll",i),window.addEventListener("resize",$);var p={open:Ce,close:$,toggle:Le,update:f,clone:E,attach:T,detach:ut,on:ft,off:gt,getOptions:pt,getImages:vt,getZoomedImage:ht};return p};function Gt(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&o.firstChild?o.insertBefore(a,o.firstChild):o.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var Zt=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";Gt(Zt);function Wt(){const t=D().value.mediumZoom;te(()=>{t.enable&&Ft(t.selector||".markdown-body img",{background:"var(--medium-zoom-c-bg, rgba(0, 0, 0, 0.8))",...t.options})})}function Yt(){const e=D(),t=It();pe&&window.addEventListener("click",n=>{const o=n.target;if(o.matches('[class*="language-"] > button.collapse')){const a=o.parentElement;a==null||a.removeAttribute("style"),a==null||a.classList.remove("folded")}}),te(()=>{const n=document.querySelectorAll('div[class*="language-"]'),o=e.value.codeHeightLimit,a=t.value.codeHeightLimit;let i;if(typeof a!="number"||a<=0){if(o===void 0||o<=0)return;i=o}else i=a;for(const m of Array.from(n))m.scrollHeight>i&&m.classList.add("folded")})}function Jt(){const e=D(),t=Ot(()=>e.value.cdn.prefix);je({link:[{rel:"stylesheet",href:`${t.value}aplayer/dist/APlayer.min.css`}]}),Ie(`${t.value}aplayer/dist/APlayer.min.js`,()=>{Ie(`${t.value}meting@2/dist/Meting.min.js`)})}function Kt(){je({script:[{src:"https://static.codepen.io/assets/embed/ei.js",async:!0}]})}const I=typeof window<"u",Ve=I&&!("onscroll"in window)||typeof navigator<"u"&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),qe=I&&window.devicePixelRatio>1,Xt={elements_selector:".lazy",container:Ve||I?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},Pe=e=>Object.assign({},Xt,e),xe=function(e,t){let n;const o="LazyLoad::Initialized",a=new e(t);try{n=new CustomEvent(o,{detail:{instance:a}})}catch{n=document.createEvent("CustomEvent"),n.initCustomEvent(o,!1,!1,{instance:a})}window.dispatchEvent(n)},Qt=(e,t)=>{if(t)if(t.length)for(let n,o=0;n=t[o];o+=1)xe(e,n);else xe(e,t)},C="src",ve="srcset",he="sizes",De="poster",U="llOriginalAttrs",Ue="data",be="loading",Fe="loaded",Ge="applied",en="entered",ye="error",Ze="native",We="data-",Ye="ll-status",y=(e,t)=>e.getAttribute(We+t),tn=(e,t,n)=>{const o=We+t;n!==null?e.setAttribute(o,n):e.removeAttribute(o)},F=e=>y(e,Ye),x=(e,t)=>tn(e,Ye,t),ne=e=>x(e,null),_e=e=>F(e)===null,nn=e=>F(e)===be,on=e=>F(e)===ye,Ee=e=>F(e)===Ze,an=[be,Fe,Ge,ye],rn=e=>an.indexOf(F(e))>=0,O=(e,t,n,o)=>{e&&typeof e=="function"&&(o===void 0?n===void 0?e(t):e(t,n):e(t,n,o))},B=(e,t)=>{I&&t!==""&&e.classList.add(t)},w=(e,t)=>{I&&t!==""&&e.classList.remove(t)},sn=e=>{e.llTempImage=document.createElement("IMG")},ln=e=>{delete e.llTempImage},Je=e=>e.llTempImage,oe=(e,t)=>{if(!t)return;const n=t._observer;n&&n.unobserve(e)},dn=e=>{e.disconnect()},cn=(e,t,n)=>{t.unobserve_entered&&oe(e,n)},ze=(e,t)=>{e&&(e.loadingCount+=t)},mn=e=>{e&&(e.toLoadCount-=1)},Ke=(e,t)=>{e&&(e.toLoadCount=t)},un=e=>e.loadingCount>0,fn=e=>e.toLoadCount>0,Xe=e=>{let t=[];for(let n,o=0;n=e.children[o];o+=1)n.tagName==="SOURCE"&&t.push(n);return t},$e=(e,t)=>{const n=e.parentNode;n&&n.tagName==="PICTURE"&&Xe(n).forEach(t)},Qe=(e,t)=>{Xe(e).forEach(t)},ae=[C],et=[C,De],P=[C,ve,he],tt=[Ue],re=e=>!!e[U],nt=e=>e[U],ot=e=>delete e[U],j=(e,t)=>{if(re(e))return;const n={};t.forEach(o=>{n[o]=e.getAttribute(o)}),e[U]=n},gn=e=>{re(e)||(e[U]={backgroundImage:e.style.backgroundImage})},H=(e,t)=>{if(!re(e))return;const n=nt(e);t.forEach(o=>{((a,i,m)=>{m?a.setAttribute(i,m):a.removeAttribute(i)})(e,o,n[o])})},pn=e=>{if(!re(e))return;const t=nt(e);e.style.backgroundImage=t.backgroundImage},at=(e,t,n)=>{B(e,t.class_applied),x(e,Ge),n&&(t.unobserve_completed&&oe(e,t),O(t.callback_applied,e,n))},rt=(e,t,n)=>{B(e,t.class_loading),x(e,be),n&&(ze(n,1),O(t.callback_loading,e,n))},k=(e,t,n)=>{n&&e.setAttribute(t,n)},Te=(e,t)=>{k(e,he,y(e,t.data_sizes)),k(e,ve,y(e,t.data_srcset)),k(e,C,y(e,t.data_src))},vn=(e,t)=>{$e(e,n=>{j(n,P),Te(n,t)}),j(e,P),Te(e,t)},hn=(e,t)=>{j(e,ae),k(e,C,y(e,t.data_src))},bn=(e,t)=>{Qe(e,n=>{j(n,ae),k(n,C,y(n,t.data_src))}),j(e,et),k(e,De,y(e,t.data_poster)),k(e,C,y(e,t.data_src)),e.load()},yn=(e,t)=>{j(e,tt),k(e,Ue,y(e,t.data_src))},_n=(e,t,n)=>{const o=y(e,t.data_bg),a=y(e,t.data_bg_hidpi),i=qe&&a?a:o;i&&(e.style.backgroundImage=`url("${i}")`,Je(e).setAttribute(C,i),rt(e,t,n))},En=(e,t,n)=>{const o=y(e,t.data_bg_multi),a=y(e,t.data_bg_multi_hidpi),i=qe&&a?a:o;i&&(e.style.backgroundImage=i,at(e,t,n))},zn=(e,t,n)=>{const o=y(e,t.data_bg_set);if(!o)return;let a=o.split("|").map(i=>`image-set(${i})`);e.style.backgroundImage=a.join(),at(e,t,n)},it={IMG:vn,IFRAME:hn,VIDEO:bn,OBJECT:yn},$n=(e,t)=>{const n=it[e.tagName];n&&n(e,t)},wn=(e,t,n)=>{const o=it[e.tagName];o&&(o(e,t),rt(e,t,n))},Cn=["IMG","IFRAME","VIDEO","OBJECT"],Ln=e=>Cn.indexOf(e.tagName)>-1,st=(e,t)=>{!t||un(t)||fn(t)||O(e.callback_finish,t)},Ne=(e,t,n)=>{e.addEventListener(t,n),e.llEvLisnrs[t]=n},An=(e,t,n)=>{e.removeEventListener(t,n)},we=e=>!!e.llEvLisnrs,kn=(e,t,n)=>{we(e)||(e.llEvLisnrs={});const o=e.tagName==="VIDEO"?"loadeddata":"load";Ne(e,o,t),Ne(e,"error",n)},ue=e=>{if(!we(e))return;const t=e.llEvLisnrs;for(let n in t){const o=t[n];An(e,n,o)}delete e.llEvLisnrs},lt=(e,t,n)=>{ln(e),ze(n,-1),mn(n),w(e,t.class_loading),t.unobserve_completed&&oe(e,n)},In=(e,t,n,o)=>{const a=Ee(t);lt(t,n,o),B(t,n.class_loaded),x(t,Fe),O(n.callback_loaded,t,o),a||st(n,o)},On=(e,t,n,o)=>{const a=Ee(t);lt(t,n,o),B(t,n.class_error),x(t,ye),O(n.callback_error,t,o),n.restore_on_error&&H(t,P),a||st(n,o)},fe=(e,t,n)=>{const o=Je(e)||e;we(o)||kn(o,a=>{In(0,e,t,n),ue(o)},a=>{On(0,e,t,n),ue(o)})},ge=(e,t,n)=>{Ln(e)?((o,a,i)=>{fe(o,a,i),wn(o,a,i)})(e,t,n):((o,a,i)=>{sn(o),fe(o,a,i),gn(o),_n(o,a,i),En(o,a,i),zn(o,a,i)})(e,t,n)},Sn=(e,t,n)=>{e.setAttribute("loading","lazy"),fe(e,t,n),$n(e,t),x(e,Ze)},Me=e=>{e.removeAttribute(C),e.removeAttribute(ve),e.removeAttribute(he)},Hn=e=>{$e(e,t=>{Me(t)}),Me(e)},dt=e=>{$e(e,t=>{H(t,P)}),H(e,P)},xn=e=>{Qe(e,t=>{H(t,ae)}),H(e,et),e.load()},Tn=e=>{H(e,ae)},Nn=e=>{H(e,tt)},Mn={IMG:dt,IFRAME:Tn,VIDEO:xn,OBJECT:Nn},Rn=(e,t)=>{(n=>{const o=Mn[n.tagName];o?o(n):pn(n)})(e),((n,o)=>{_e(n)||Ee(n)||(w(n,o.class_entered),w(n,o.class_exited),w(n,o.class_applied),w(n,o.class_loading),w(n,o.class_loaded),w(n,o.class_error))})(e,t),ne(e),ot(e)},jn=(e,t,n,o)=>{n.cancel_on_exit&&nn(e)&&e.tagName==="IMG"&&(ue(e),Hn(e),dt(e),w(e,n.class_loading),ze(o,-1),ne(e),O(n.callback_cancel,e,t,o))},Bn=(e,t,n,o)=>{const a=rn(e);x(e,en),B(e,n.class_entered),w(e,n.class_exited),cn(e,n,o),O(n.callback_enter,e,t,o),a||ge(e,n,o)},Vn=(e,t,n,o)=>{_e(e)||(B(e,n.class_exited),jn(e,t,n,o),O(n.callback_exit,e,t,o))},qn=["IMG","IFRAME","VIDEO"],ct=e=>e.use_native&&"loading"in HTMLImageElement.prototype,Pn=(e,t,n)=>{e.forEach(o=>{qn.indexOf(o.tagName)!==-1&&Sn(o,t,n)}),Ke(n,0)},Dn=e=>e.isIntersecting||e.intersectionRatio>0,Un=(e,t)=>{t.forEach(n=>{e.observe(n)})},Fn=(e,t)=>{dn(e),Un(e,t)},Gn=(e,t)=>{ct(e)||(t._observer=new IntersectionObserver(n=>{((o,a,i)=>{o.forEach(m=>Dn(m)?Bn(m.target,m,a,i):Vn(m.target,m,a,i))})(n,e,t)},(n=>({root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}))(e)))},mt=e=>Array.prototype.slice.call(e),ee=e=>e.container.querySelectorAll(e.elements_selector),Zn=e=>mt(e).filter(_e),Wn=e=>on(e),Yn=e=>mt(e).filter(Wn),Re=(e,t)=>Zn(e||ee(t)),Jn=(e,t)=>{Yn(ee(e)).forEach(n=>{w(n,e.class_error),ne(n)}),t.update()},Kn=(e,t)=>{I&&(t._onlineHandler=()=>{Jn(e,t)},window.addEventListener("online",t._onlineHandler))},Xn=e=>{I&&window.removeEventListener("online",e._onlineHandler)},q=function(e,t){const n=Pe(e);this._settings=n,this.loadingCount=0,Gn(n,this),Kn(n,this),this.update(t)};q.prototype={update:function(e){const t=this._settings,n=Re(e,t);Ke(this,n.length),Ve?this.loadAll(n):ct(t)?Pn(n,t,this):Fn(this._observer,n)},destroy:function(){this._observer&&this._observer.disconnect(),Xn(this),ee(this._settings).forEach(e=>{ot(e)}),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(e){const t=this._settings;Re(e,t).forEach(n=>{oe(n,this),ge(n,t,this)})},restoreAll:function(){const e=this._settings;ee(e).forEach(t=>{Rn(t,e)})}},q.load=(e,t)=>{const n=Pe(t);ge(e,n)},q.resetStatus=e=>{ne(e)},I&&Qt(q,window.lazyLoadOptions);function Qn(e={}){return document.querySelectorAll(".lazy").forEach(t=>{const n=t.getAttribute("src");t.removeAttribute("src"),t.setAttribute("data-src",n??"")}),new q({elements_selector:".lazy",...e})}function eo(){const e=D();e.value.vanillaLazyload.enable&&te(()=>{Qn(e.value.vanillaLazyload)})}function to(){pe&&window.addEventListener("click",e=>{var n;const t=e.target;if(t.matches(".vp-code-group input")){const o=(n=t.parentElement)==null?void 0:n.parentElement;if(!o)return;const a=Array.from(o.querySelectorAll("input")).indexOf(t);if(a<0)return;const i=o.querySelector(".blocks");if(!i)return;const m=Array.from(i.children).find(T=>T.classList.contains("active"));if(!m)return;const f=i.children[a];if(!f||m===f)return;m.classList.remove("active"),f.classList.add("active");const E=o==null?void 0:o.querySelector(`label[for="${t.id}"]`);E==null||E.scrollIntoView({block:"nearest"})}})}const no={key:0,text:"center"},oo=["href"],ao={m:"y-4",class:"end flex justify-center items-center"},ro=A("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),io={p:"x-4",font:"bold",class:"whitespace-nowrap"},so=A("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),lo=Be({__name:"ValaxyMd",props:{frontmatter:{},excerpt:{}},setup(e){const t=e,{t:n}=St(),o=Ht();return xt(()=>{Bt(o.value)}),te(()=>{Y()}),Tt(()=>{Y()}),t.frontmatter.aplayer&&Jt(),t.frontmatter.codepen&&Kt(),Vt(),to(),Yt(),(typeof t.frontmatter.medium_zoom>"u"||t.frontmatter.medium_zoom)&&Wt(),eo(),(a,i)=>a.$slots.default?(ce(),me("article",{key:0,class:Nt(a.frontmatter.markdownClass||"markdown-body")},[b(a.$slots,"default",{ref_key:"contentRef",ref:o,onVnodeUpdated:i[0]||(i[0]=(...m)=>K(Y)&&K(Y)(...m))}),a.frontmatter.url?(ce(),me("div",no,[A("a",{href:a.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},Oe(K(n)("post.view_link")),9,oo)])):X("v-if",!0),a.frontmatter.end!==void 0?b(a.$slots,"end",{key:1},()=>[A("div",ao,[ro,A("span",io,Oe(a.frontmatter.end?"Q.E.D.":"To Be Continued."),1),so])]):X("v-if",!0)],2)):X("v-if",!0)}}),co={w:"full",flex:"~"},mo={class:"content",flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},uo={class:"markdown-body prose max-w-none pb-8"},go=Be({__name:"ValaxyMain",props:{frontmatter:{},data:{}},setup(e){const t=D();return(n,o)=>{const a=lo;return ce(),me("main",null,[A("div",co,[b(n.$slots,"main",{},()=>[A("div",mo,[b(n.$slots,"main-header"),b(n.$slots,"main-header-after"),b(n.$slots,"main-content",{},()=>[A("div",uo,[Mt(a,{frontmatter:n.frontmatter},{default:Rt(()=>[b(n.$slots,"main-content-md"),b(n.$slots,"default")]),_:3},8,["frontmatter"])]),b(n.$slots,"main-content-after")])]),b(n.$slots,"main-nav-before"),b(n.$slots,"main-nav"),b(n.$slots,"main-nav-after"),K(t).comment.enable&&n.frontmatter.comment!==!1?b(n.$slots,"comment",{key:0}):X("v-if",!0),b(n.$slots,"footer")])]),b(n.$slots,"aside")])}}});export{go as _};
