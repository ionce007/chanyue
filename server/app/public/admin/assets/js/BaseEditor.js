import{B as p,E as v,T as h}from"./@wangeditor.js";import{s as y,h as b,D as x,d as k,a5 as c,o as u,c as g,a as m,Y as f,S as B,ak as V,a0 as E,V as M}from"./@vue.js";import{_ as w,g as N}from"./index.js";import{m as O}from"./mitt.js";const C=O();try{class r{constructor(){this.title="\u6E90\u7801",this.tag="button"}getValue(){return""}isActive(){return!1}isDisabled(){return!1}exec(e){console.log(e),C.emit("toggle")}}const o={key:"source",factory(){return new r}};p.registerMenu(o)}catch(r){console.log(r)}const T={components:{Editor:v,Toolbar:h},props:["content"],setup(r,{emit:o}){const n=y();b(()=>{C.on("toggle",()=>{a()})});const e={insertKeys:{index:0,keys:"source"}},d={placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9...",MENU_CONF:{uploadImage:{server:"/api/upload",headers:{auth:N("token")||""},customInsert(t,_){console.log(t),_(t.link,"","")}}}};x(()=>{const t=n.value;t!=null&&t.destroy()});const i=t=>{console.log("created",t),n.value=t},l=t=>{o("setContent",t.getHtml())},s=k(!1),a=()=>{s.value=!s.value};return{editorRef:n,mode:"default",toolbarConfig:e,editorConfig:d,sourceFlag:s,handleCreated:i,handleChange:l,toggleSource:a}}},S={style:{border:"1px solid #ccc","margin-top":"10px"}};function U(r,o,n,e,d,i){const l=c("Toolbar"),s=c("Editor");return u(),g("div",null,[m("div",S,[f(l,{editor:e.editorRef,defaultConfig:e.toolbarConfig,mode:e.mode,style:{"border-bottom":"1px solid #ccc"}},null,8,["editor","defaultConfig","mode"]),f(s,{defaultConfig:e.editorConfig,mode:e.mode,modelValue:n.content,"onUpdate:modelValue":o[0]||(o[0]=a=>n.content=a),style:{height:"400px","overflow-y":"hidden"},onOnCreated:e.handleCreated,onOnChange:e.handleChange},null,8,["defaultConfig","mode","modelValue","onOnCreated","onOnChange"])]),e.sourceFlag?(u(),g("div",{key:0,class:"source",onClick:o[3]||(o[3]=(...a)=>e.toggleSource&&e.toggleSource(...a))},[B(m("textarea",{"onUpdate:modelValue":o[1]||(o[1]=a=>n.content=a),autofocus:"true",class:"content",onClick:o[2]||(o[2]=E(()=>{},["stop"]))},null,512),[[V,n.content]])])):M("",!0)])}const A=w(T,[["render",U],["__scopeId","data-v-be834a68"]]);export{A as B};
