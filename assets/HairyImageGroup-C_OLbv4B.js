import{d as p,aM as u,aN as c,i as d,p as _,b as f,c as m,r as g,_ as v}from"./app-OlkgLHGm.js";import{a as r,r as y,_ as h}from"./HairyImageViewer.vue_vue_type_script_setup_true_lang-CeieSRik.js";const I={class:"HairyImageGroup"},w=p({__name:"HairyImageGroup",props:{row:{default:"auto"},col:{default:"auto"},gap:{default:10},justify:{default:"space-evenly"},align:{default:"initial"}},setup(n){const e=n;u(()=>({width:r(e.row),height:r(e.col),gap:r(e.gap),justify:e.justify,align:e.align}));const o=c(),i=d(()=>{var a;return(a=o.default)==null?void 0:a.call(o).map(t=>{var s;return(s=t.props)==null?void 0:s.src}).filter(Boolean)});function l(a){const t=i.value.findIndex(s=>s===a)||0;y(h,{urlList:i.value,initialIndex:t})}return _("HairyImageGroup:preview",l),(a,t)=>(f(),m("div",I,[g(a.$slots,"default",{},void 0,!0)]))}}),B=v(w,[["__scopeId","data-v-39c94cb7"]]);export{B as _};
