import{Q as H,a as k}from"./QBtn.cf32686d.js";import{c as y,h as x,a as C}from"./use-router-link.64770ad3.js";import{c as s,h as m,i as L,e as p,r as w,w as v,o as T,l as O,g as F,_ as I,a as N,b as R,d as S,f as c,j as i,k as P,t as j}from"./index.5a1fbaca.js";import{Q as D,a as M,b as U}from"./QLayout.12a5019d.js";var K=y({name:"QToolbarTitle",props:{shrink:Boolean},setup(t,{slots:l}){const u=s(()=>"q-toolbar__title ellipsis"+(t.shrink===!0?" col-shrink":""));return()=>m("div",{class:u.value},x(l.default))}}),A=y({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:l}){const u=s(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>m("div",{class:u.value,role:"toolbar"},x(l.default))}}),E=y({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:l,emit:u}){const{proxy:{$q:h}}=F(),a=L(O,p);if(a===p)return console.error("QHeader needs to be child of QLayout"),p;const d=w(parseInt(t.heightHint,10)),o=w(!0),_=s(()=>t.reveal===!0||a.view.value.indexOf("H")>-1||h.platform.is.ios&&a.isContainer.value===!0),b=s(()=>{if(t.modelValue!==!0)return 0;if(_.value===!0)return o.value===!0?d.value:0;const e=d.value-a.scroll.value.position;return e>0?e:0}),g=s(()=>t.modelValue!==!0||_.value===!0&&o.value!==!0),q=s(()=>t.modelValue===!0&&g.value===!0&&t.reveal===!0),B=s(()=>"q-header q-layout__section--marginal "+(_.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(g.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),V=s(()=>{const e=a.rows.value.top,n={};return e[0]==="l"&&a.left.space===!0&&(n[h.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(n[h.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),n});function r(e,n){a.update("header",e,n)}function f(e,n){e.value!==n&&(e.value=n)}function $({height:e}){f(d,e),r("size",e)}function z(e){q.value===!0&&f(o,!0),u("focusin",e)}v(()=>t.modelValue,e=>{r("space",e),f(o,!0),a.animate()}),v(b,e=>{r("offset",e)}),v(()=>t.reveal,e=>{e===!1&&f(o,t.modelValue)}),v(o,e=>{a.animate(),u("reveal",e)}),v(a.scroll,e=>{t.reveal===!0&&f(o,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const Q={};return a.instances.header=Q,t.modelValue===!0&&r("size",d.value),r("space",t.modelValue),r("offset",b.value),T(()=>{a.instances.header===Q&&(a.instances.header=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const e=C(l.default,[]);return t.elevated===!0&&e.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(m(D,{debounce:0,onResize:$})),m("header",{class:B.value,style:V.value,onFocusin:z},e)}}});const G={computed:{title(){return this.$route.path==="/"?"Homepage":"Post Details"}}};function J(t,l,u,h,a,d){const o=N("router-view");return R(),S(M,{view:"hHh lpR fFf"},{default:c(()=>[i(E,{elevated:"",class:"bg-primary text-white"},{default:c(()=>[i(A,null,{default:c(()=>[i(H,{flat:"",dense:"",round:"",onClick:l[0]||(l[0]=_=>t.$router.push("/"))},{default:c(()=>[i(k,{name:"home"})]),_:1}),i(K,{class:"text-center"},{default:c(()=>[P("span",null,j(d.title),1)]),_:1})]),_:1})]),_:1}),i(U,null,{default:c(()=>[i(o)]),_:1})]),_:1})}var ee=I(G,[["render",J],["__scopeId","data-v-69043970"]]);export{ee as default};
