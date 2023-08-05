import{P as s,s as a,Q as t,R as e,t as l}from"./element-plus.js";import{t as o}from"./article.js";import{r}from"./site.js";import{_ as m}from"./index.js";import{o as n,c as i,U as c,W as p,a as d,_ as u,t as h,az as y,aA as f}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const g={name:"home-info",data:()=>({data:{month:0,quarter:0,today:0,week:0,year:0,yesterday:0,message:0},dirname:"",loading:!0}),computed:{},created(){},mounted(){this.tongji(),this.runEnv()},methods:{async tongji(){try{let s=await o();200===s.code&&(this.data=s.data,this.loading=!1,this.articleNum())}catch(s){console.log(s)}},async runEnv(){try{let s=await r();const{code:a,data:t}=s;200===a&&(this.dirname=t.dirname)}catch(s){console.log(s)}},articleNum(){this.data.yesterday,this.data.today,this.data.week,this.data.month,this.data.quarter,this.data.year,this.data.message}}},j=s=>(y("data-v-584be997"),s=s(),f(),s),x={class:"pd-10"},b=j((()=>d("div",{class:"card-header"},[d("h1",null,"技术架构")],-1))),_=j((()=>d("p",{class:"f-14 mb-6"},[d("strong",null,"技术架构："),u("nodejs v18.16.0 express4+ mysql-5.6/5.7 ")],-1))),v=j((()=>d("p",{class:"f-14 mb-6"},[d("strong",null,"前端架构："),u("vite4.0 vue3 element-plus pinia axios ")],-1))),w=j((()=>d("p",{class:"f-14 mb-6"},[d("strong",null,"程序版本："),u("v.1.0.2")],-1))),k={class:"f-14 mb-6"},q=j((()=>d("strong",null,"程序路径：",-1))),z=j((()=>d("p",{class:"f-14 mb-6"},[d("strong",null,"发布时间："),u("2023-07-21")],-1))),E=j((()=>d("p",{class:"f-14 mb-6"},[d("strong",null,"独立开发："),u("明空")],-1))),I=j((()=>d("p",{class:"f-14 mb-6"},[d("strong",null,"UI界面："),u("16号")],-1))),N=j((()=>d("p",{class:"f-14 mb-6 row"},[d("strong",null,"联系微信："),u("yanyutao2014")],-1))),U=j((()=>d("p",{class:"f-14 mb-6"},[d("strong",null,"禅悦内容管理系统："),d("a",{class:"c-9ca4bf",href:"http://www.chanyue.top",target:"_blank"}," © www.chanyue.top ")],-1))),A=j((()=>d("div",{class:"card-header"},[d("h1",null,"历史进程")],-1))),B=j((()=>d("p",null,"第四次重构（chanyuecms）基于express mysql knex开发第三版",-1))),D=j((()=>d("p",null,"第三次重构（eggcms） 基于egg mysql Sequelize重构",-1))),P=j((()=>d("p",null,"第二次重构（koacms）基于koa2 mysql重构",-1))),Q=j((()=>d("p",null,"第一次构想 基于express mongoDB开发第一版cms",-1))),R=j((()=>d("div",{class:"chanyue-title"},[d("h1",null,"禅悦由来")],-1))),S=j((()=>d("p",{class:"chanyue-title text-c bold f-16"},"禅悦二首·其二",-1))),W=j((()=>d("p",{class:"chanyue-author text-c f-14 mb-10 mt-10"},"清代·张问陶",-1))),C=j((()=>d("p",{class:"chanyue-txt text-c f-15"},"门庭清妙即禅关，",-1))),F=j((()=>d("p",{class:"chanyue-txt text-c f-15"},"枉费黄金去买山。",-1))),G=j((()=>d("p",{class:"chanyue-txt text-c f-15"},"只要心光如满月，",-1))),H=j((()=>d("p",{class:"chanyue-txt text-c f-15"},"在家还比出家闲。",-1))),J=j((()=>d("p",{class:"mt-20"}," 译文：在清幽的家中修持，同样也可以进入禅关，不必花费万金去买山寻求幽静。 只要心性澄明，智慧之光绽放如满月，就算在家被俗世缠身，内心也比出家人清闲。 ",-1)));const K=m(g,[["render",function(o,r,m,y,f,g){const j=s,K=a,L=t,M=e,O=l;return n(),i("div",x,[c(O,{gutter:20},{default:p((()=>[c(K,{class:"mb-20",xs:24,sm:12,md:12,lg:12,xl:12},{default:p((()=>[c(j,{class:"box-card"},{header:p((()=>[b])),default:p((()=>[_,v,w,d("p",k,[q,u(h(o.dirname),1)]),z,E,I,N,U])),_:1})])),_:1}),c(K,{class:"mb-20",xs:24,sm:12,md:12,lg:12,xl:12},{default:p((()=>[c(j,null,{header:p((()=>[A])),default:p((()=>[c(M,null,{default:p((()=>[c(L,{type:"primary",hollow:!0,timestamp:"2022/6/12"},{default:p((()=>[B])),_:1}),c(L,{type:"primary",hollow:!0,timestamp:"2020/10/1"},{default:p((()=>[D])),_:1}),c(L,{type:"primary",hollow:!0,timestamp:"2018/4/2"},{default:p((()=>[P])),_:1}),c(L,{type:"primary",hollow:!0,timestamp:"2015/6/2"},{default:p((()=>[Q])),_:1})])),_:1})])),_:1})])),_:1}),c(K,{class:"mb-20",xs:24,sm:12,md:12,lg:12,xl:12},{default:p((()=>[c(j,{class:"chanyue"},{header:p((()=>[R])),default:p((()=>[S,W,C,F,G,H,J])),_:1})])),_:1})])),_:1})])}],["__scopeId","data-v-584be997"]]);export{K as default};
//# sourceMappingURL=info.js.map
