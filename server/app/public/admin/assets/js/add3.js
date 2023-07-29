import{G as e,H as a,I as l,r as t,s,q as o,J as d,v as m,w as r,B as u,a as i,A as p,x as n,y as c,f,K as g,t as _,u as V,p as h,L as b}from"./element-plus.js";import{f as y}from"./category.js";import{f as v,c as j}from"./article.js";import{s as w}from"./tag.js";import{_ as U}from"./@jsdawn.js";import{t as k}from"./tinymce.js";import{B as x}from"./@element-plus.js";import{_ as C,b as I,t as S,c as A,f as D}from"./index.js";import{af as N,o as T,c as L,a as P,U as q,W as z,a1 as E,_ as $,X as F,h as O,F as B,aa as M,a2 as G}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const H={class:"mr-10 ml-10"},J={class:"mr-10 ml-10 mb-20"},K={class:"cover row"};const W=C({name:"article-add",components:{Vue3Tinymce:U,Plus:x},data:()=>({setting:k,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!0,autoDes:!0,picNum:1,taglist:[],params:{cid:0,title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"禅悦",status:"0",pv:0,link:""},field:[],dialogImageUrl:"",dialogVisible:!1,disabled:!1,cur:1,keywords:"",drawer:!1,drawerList:["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]}),computed:{},mounted(){},created(){this.query(),this.searchTag()},unmounted(){},methods:{handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},tinymce(){this.loading=!1},selectCover(e){this.params.img=e},async searchTag(e){try{let a=await w(this.cur,e);if(200===a.code){let e=[];a.data.list.forEach((a=>{e.push({label:a.name,value:a.id})})),this.taglist=e}}catch(a){console.log(a)}},async query(){try{let e=await y();if(200===e.code){let a=I(S(e.data)),l=I(e.data);this.cateList=l,this.category=[...a]}}catch(e){console.log(e)}},handleChange(e){console.log(e),-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){if(e.size/1024/1024>2)return this.$message("上传文件必须小于1M"),!1},upload(e){200===e.code&&(this.params.img=e.data.path)},async findField(e){try{let a=await v(e);200===a.code&&(this.field=a.data.fields)}catch(a){console.log(a)}},async create(){try{let e={...this.params};e.attr=e.attr.toString(),e.tag_id=e.tag_id.toString(),e.img||(e.img=A(e.content)[0]),e.description||(e.description=D(e.content).substr(0,255));let a={};this.field.map((e=>{a[e.field_ename]=e.field_values})),(await j({defaultParams:e,fieldParams:a})).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.create()}))}}},[["render",function(y,v,j,w,U,k){const x=e,C=a,I=l,S=t,A=s,D=o,W=d,X=m,Q=r,R=u,Y=N("MostlyCloudy"),Z=i,ee=p,ae=n,le=c,te=f,se=g,oe=_,de=N("vue3-tinymce"),me=V,re=h,ue=b;return T(),L(B,null,[P("div",H,[q(C,{modelValue:y.activeName,"onUpdate:modelValue":v[0]||(v[0]=e=>y.activeName=e),onTabClick:k.handleClick},{default:z((()=>[q(x,{label:"基本信息",name:"first"}),q(x,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),P("div",J,[q(re,{ref:"params",model:y.params,"label-width":"90px"},{default:z((()=>[E((T(),L("div",null,[q(oe,{gutter:20},{default:z((()=>[q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"文章栏目"},{default:z((()=>[q(I,{props:y.categoryProps,"show-all-levels":!1,modelValue:y.categorySelected,"onUpdate:modelValue":v[1]||(v[1]=e=>y.categorySelected=e),options:y.category,onChange:k.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:z((()=>[q(D,{modelValue:y.params.title,"onUpdate:modelValue":v[2]||(v[2]=e=>y.params.title=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"tag标签"},{default:z((()=>[q(W,{modelValue:y.params.tag_id,"onUpdate:modelValue":v[3]||(v[3]=e=>y.params.tag_id=e),options:y.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":k.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"内容属性"},{default:z((()=>[q(Q,{modelValue:y.params.attr,"onUpdate:modelValue":v[4]||(v[4]=e=>y.params.attr=e),onChange:k.handleAttr},{default:z((()=>[q(X,{label:"1"},{default:z((()=>[$("头条")])),_:1}),q(X,{label:"2"},{default:z((()=>[$("推荐")])),_:1}),q(X,{label:"3"},{default:z((()=>[$("轮播")])),_:1}),q(X,{label:"4"},{default:z((()=>[$("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"发布时间"},{default:z((()=>[q(R,{modelValue:y.params.createdAt,"onUpdate:modelValue":v[5]||(v[5]=e=>y.params.createdAt=e),"default-value":new Date,type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue","default-value"])])),_:1})])),_:1}),q(A,{sm:24,md:12},{default:z((()=>[q(S,{class:"row",label:"缩略图"},{default:z((()=>[q(ae,{class:"avatar-uploader",action:"/api/upload","on-success":k.upload,"show-file-list":!1,"before-upload":k.beforeUpload},{default:z((()=>[q(ee,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，尺寸240*180，大小50k内"},{reference:z((()=>[q(Z,{class:"avatar-uploader-icon"},{default:z((()=>[q(Y)])),_:1})])),_:1})])),_:1},8,["on-success","before-upload"]),y.params.img?(T(),F(ee,{key:0,placement:"right",width:400,trigger:"hover"},{reference:z((()=>[q(le,{class:"avatar-uploader-icon pointer ml-10",src:y.params.img},null,8,["src"])])),default:z((()=>[q(le,{style:{width:"100%"},src:y.params.img},null,8,["src"])])),_:1})):O("",!0),q(te,{type:"primary",class:"ml-10",onClick:v[6]||(v[6]=e=>y.drawer=!0)},{default:z((()=>[$(" 默认封面图 ")])),_:1}),q(se,{modelValue:y.drawer,"onUpdate:modelValue":v[7]||(v[7]=e=>y.drawer=e),title:"默认封面图",class:"w-300","with-header":!1},{default:z((()=>[P("div",K,[(T(!0),L(B,null,M(y.drawerList,((e,a)=>(T(),F(le,{key:a,src:e,onClick:a=>k.selectCover(e),fit:"fit"},null,8,["src","onClick"])))),128))])])),_:1},8,["modelValue"]),q(D,{class:"ml-10 flex-1",modelValue:y.params.img,"onUpdate:modelValue":v[8]||(v[8]=e=>y.params.img=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),q(S,{label:"内容摘要"},{default:z((()=>[q(D,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:y.params.description,"onUpdate:modelValue":v[9]||(v[9]=e=>y.params.description=e)},null,8,["modelValue"])])),_:1}),q(S,{label:"文章内容"},{default:z((()=>[q(de,{modelValue:y.params.content,"onUpdate:modelValue":v[10]||(v[10]=e=>y.params.content=e),setting:y.setting,onInit:k.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),q(oe,{gutter:20},{default:z((()=>[q(A,{sm:24,md:12,lg:8},{default:z((()=>[q(S,{label:"自动封面"},{default:z((()=>[q(X,{modelValue:y.autoImg,"onUpdate:modelValue":v[12]||(v[12]=e=>y.autoImg=e)},{default:z((()=>[$(" 文章第 "),q(D,{modelValue:y.picNum,"onUpdate:modelValue":v[11]||(v[11]=e=>y.picNum=e),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),$("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),q(A,{sm:24,md:12,lg:8},{default:z((()=>[q(S,{label:"提取描述"},{default:z((()=>[q(X,{modelValue:y.autoDes,"onUpdate:modelValue":v[13]||(v[13]=e=>y.autoDes=e)},{default:z((()=>[$("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),q(A,{sm:24,md:12,lg:8},{default:z((()=>[q(S,{label:"是否显示"},{default:z((()=>[q(me,{modelValue:y.params.status,"onUpdate:modelValue":v[14]||(v[14]=e=>y.params.status=e),label:"0"},{default:z((()=>[$("发布")])),_:1},8,["modelValue"]),q(me,{modelValue:y.params.status,"onUpdate:modelValue":v[15]||(v[15]=e=>y.params.status=e),label:"1"},{default:z((()=>[$("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),[[G,0==y.activeIndex],[ue,y.loading]]),E(P("div",null,[q(oe,{gutter:20},{default:z((()=>[q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"短标题",prop:"name"},{default:z((()=>[q(D,{modelValue:y.params.short_title,"onUpdate:modelValue":v[16]||(v[16]=e=>y.params.short_title=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"SEO标题"},{default:z((()=>[q(D,{modelValue:y.params.seo_title,"onUpdate:modelValue":v[17]||(v[17]=e=>y.params.seo_title=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"SEO关键词"},{default:z((()=>[q(D,{modelValue:y.params.seo_keywords,"onUpdate:modelValue":v[18]||(v[18]=e=>y.params.seo_keywords=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"SEO描述"},{default:z((()=>[q(D,{modelValue:y.params.seo_description,"onUpdate:modelValue":v[19]||(v[19]=e=>y.params.seo_description=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"来源"},{default:z((()=>[q(D,{modelValue:y.params.source,"onUpdate:modelValue":v[20]||(v[20]=e=>y.params.source=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"作者"},{default:z((()=>[q(D,{modelValue:y.params.author,"onUpdate:modelValue":v[21]||(v[21]=e=>y.params.author=e)},null,8,["modelValue"])])),_:1})])),_:1}),q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"外链跳转"},{default:z((()=>[q(D,{modelValue:y.params.link,"onUpdate:modelValue":v[22]||(v[22]=e=>y.params.link=e),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),(T(!0),L(B,null,M(y.field,((e,a)=>(T(),F(A,{sm:24,md:12,lg:8,key:a},{default:z((()=>[q(S,{label:e.field_cname},{default:z((()=>["1"===e.field_type?(T(),F(D,{key:0,modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):"2"===e.field_type?(T(),F(D,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"])):(T(),F(D,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:e.field_values,"onUpdate:modelValue":a=>e.field_values=a},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])])),_:2},1024)))),128)),q(A,{sm:24,md:12},{default:z((()=>[q(S,{label:"浏览数"},{default:z((()=>[q(D,{modelValue:y.params.pv,"onUpdate:modelValue":v[23]||(v[23]=e=>y.params.pv=e)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[G,1==y.activeIndex]]),q(S,null,{default:z((()=>[q(te,{type:"primary",onClick:v[24]||(v[24]=e=>k.submit("params"))},{default:z((()=>[$("保存")])),_:1})])),_:1})])),_:1},8,["model"])])],64)}]]);export{W as default};
//# sourceMappingURL=add3.js.map
