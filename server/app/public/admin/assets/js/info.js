import{t as p}from"./article.js";import{r as d}from"./site.js";import{_ as l}from"./index.js";import{ag as r,o as _,c as h,a as e,Z as i,V as n,t as f,aw as u,ax as y}from"./@vue.js";import"./api.js";import"./axios.js";import"./form-data.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const g={name:"home-info",data:()=>({data:{month:0,quarter:0,today:0,week:0,year:0,yesterday:0,message:0},dirname:"",loading:!0}),computed:{},created(){},mounted(){this.tongji(),this.runEnv()},methods:{async tongji(){try{let t=await p();t.code===200&&(this.data=t.data,this.loading=!1,this.articleNum())}catch(t){console.log(t)}},async runEnv(){try{let t=await d();const{code:o,data:a}=t;o===200&&(this.dirname=a.dirname)}catch(t){console.log(t)}},articleNum(){this.data.yesterday,this.data.today,this.data.week,this.data.month,this.data.quarter,this.data.year,this.data.message}}},s=t=>(u("data-v-eee32ebe"),t=t(),y(),t),w={class:"main"},b={class:"info c-9ca4bf"},v=s(()=>e("p",{class:"f-16 mb-5"}," 技术架构：nodejs v16.16.0+ eggjs mysql-5.7 vue3 element-plus ",-1)),x=s(()=>e("p",{class:"f-16 mb-5"},"程序版本：v.0.0.3",-1)),j={class:"f-16 mb-5"},k=s(()=>e("p",{class:"f-16 mb-5"},"发布时间：2022-07-23",-1)),I=s(()=>e("p",{class:"f-16 mb-5"},"开发人员：明空",-1)),E=s(()=>e("p",{class:"f-16 mb-5"},"UI设计师：16号",-1)),N=s(()=>e("p",{class:"f-16 mb-5 row"},"联系微信：yanyutao",-1)),S=s(()=>e("p",{class:"f-16 mb-5"},[e("a",{class:"c-9ca4bf",href:"http://www.禅悦.top",target:"_blank"},"云蛋系统：© www.禅悦.top")],-1));function $(t,o,a,q,B,V){const c=r("el-col"),m=r("el-row");return _(),h("div",null,[e("main",w,[i(m,{gutter:20},{default:n(()=>[i(c,{class:"mb-20",xs:24,sm:12,md:12,lg:12,xl:12},{default:n(()=>[e("div",b,[v,x,e("p",j,"程序路径："+f(t.dirname),1),k,I,E,N,S])]),_:1})]),_:1})])])}const et=l(g,[["render",$],["__scopeId","data-v-eee32ebe"]]);export{et as default};
