import{a as $}from"./category.js";import{f as z,a as R,u as j}from"./article.js";import{_ as H}from"./@jsdawn.js";import{t as M}from"./tinymce.js";import{s as W}from"./tag.js";import{B as Y}from"./@element-plus.js";import{_ as Z,b as G,a as w,t as J,c as K,f as Q}from"./index.js";import{ag as d,aq as X,o as i,c as y,a as V,Z as t,V as o,W as h,U as p,F as _,Y as m,_ as C,a6 as S,t as x}from"./@vue.js";import"./api.js";import"./axios.js";import"./form-data.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const ee={name:"article-edit",components:{Vue3Tinymce:H,Plus:Y},data:()=>({setting:M,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!0,autoDes:!0,picNum:1,taglist:[],params:{id:0,cid:0,sub_cid:[],title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"",status:"0",pv:0,link:""},field:[],fieldParams:{},dialogImageUrl:"",dialogVisible:!1,disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]},cur:1,keywords:""}),computed:{},async mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail(),await this.query(),this.searchTag()},unmounted(){},methods:{handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},async searchTag(e){try{let a=await W(this.cur,e,100);if(a.code===200){let n=[];a.data.list.forEach(g=>{n.push({label:g.name,value:g.id})}),this.taglist=n}}catch(a){console.log(a)}},async query(){try{let e=await $();if(e.code===200){let a=e.data,n=G(this.params.cid,a);this.categorySelected=n,this.findField(this.params.cid);let g=w(J(a));this.cateList=w(a),this.category=[...g]}}catch(e){console.log(e)}},handleChange(e){e[0]!=-1?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},async findField(e){try{let a=await z(e);a.code===200&&(this.field=a.data.fields)}catch(a){console.log(a)}},async detail(){try{let e=await R(this.params.id);if(e.code===200){let a=e.data;a.attr=a.attr?a.attr.split(","):[],a.sub_cid=a.sub_cid?a.sub_cid.split(",").map(n=>Number(n)):[],a.tag_id=a.tag_id?a.tag_id.split(",").map(n=>Number(n)):[],a.status=a.status.toString(),a.updatedAt=new Date(a.createdAt),this.params=a,this.fieldParams=a.field,this.loading=!1}}catch(e){console.error(e)}},handleAttr(e){console.log("e-->",e)},handleSubCid(e){console.log("e-->",e)},beforeUpload(e){if(e.size/1024/1024>2)return this.$message("上传文件必须小于1M"),!1},upload(e){e.code===200&&(this.params.img=e.data.path)},async update(){try{let e={...this.params};e.attr=e.attr.toString(),e.sub_cid=e.sub_cid.toString(),e.tag_id=e.tag_id.toString(),e.img||(e.img=K(e.content)[0]),e.description||(e.description=Q(e.content).substr(0,255)),(await j({...e,field:this.fieldParams})).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate(a=>{if(a)this.update();else return console.log("error submit!!"),!1})}}},ae={class:"mr-10 ml-10"},le={class:"mr-10 ml-10 mb-20"},te={class:"w-640"},oe=V("p",{class:"tips"},"(可选发布到其它栏目)",-1);function se(e,a,n,g,de,u){const U=d("el-tab-pane"),P=d("el-tabs"),N=d("el-cascader"),s=d("el-form-item"),r=d("el-input"),f=d("el-checkbox"),v=d("el-checkbox-group"),I=d("el-select-v2"),D=d("el-image"),A=d("Plus"),F=d("el-icon"),T=d("el-upload"),B=d("vue3-tinymce"),E=d("el-date-picker"),k=d("el-radio"),L=d("el-button"),q=d("el-form"),O=X("loading");return i(),y(_,null,[V("div",ae,[t(P,{modelValue:e.activeName,"onUpdate:modelValue":a[0]||(a[0]=l=>e.activeName=l),onTabClick:u.handleClick},{default:o(()=>[t(U,{label:"基本信息",name:"first"}),t(U,{label:"扩展信息",name:"second"})]),_:1},8,["modelValue","onTabClick"])]),V("div",le,[h((i(),p(q,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"100px"},{default:o(()=>[h(V("div",null,[t(s,{label:"文章栏目"},{default:o(()=>[t(N,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":a[1]||(a[1]=l=>e.categorySelected=l),options:e.category,onChange:u.handleChange},null,8,["props","modelValue","options","onChange"])]),_:1}),t(s,{label:"文章标题",prop:"title"},{default:o(()=>[t(r,{modelValue:e.params.title,"onUpdate:modelValue":a[2]||(a[2]=l=>e.params.title=l)},null,8,["modelValue"])]),_:1}),t(s,{label:"内容属性"},{default:o(()=>[t(v,{modelValue:e.params.attr,"onUpdate:modelValue":a[3]||(a[3]=l=>e.params.attr=l),onChange:u.handleAttr},{default:o(()=>[t(f,{label:"1"},{default:o(()=>[m("头条")]),_:1}),t(f,{label:"2"},{default:o(()=>[m("推荐")]),_:1}),t(f,{label:"3"},{default:o(()=>[m("轮播")]),_:1}),t(f,{label:"4"},{default:o(()=>[m("热门")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),t(s,{label:"tag标签"},{default:o(()=>[t(I,{modelValue:e.params.tag_id,"onUpdate:modelValue":a[4]||(a[4]=l=>e.params.tag_id=l),options:e.taglist,placeholder:"Please select",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":u.searchTag},null,8,["modelValue","options","remote-method"])]),_:1}),t(s,{label:"内容摘要"},{default:o(()=>[t(r,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:e.params.description,"onUpdate:modelValue":a[5]||(a[5]=l=>e.params.description=l)},null,8,["modelValue"])]),_:1}),t(s,{label:"缩略图"},{default:o(()=>[t(T,{class:"avatar-uploader",action:"/api/upload","on-success":u.upload,"show-file-list":!1,"before-upload":u.beforeUpload},{default:o(()=>[e.params.img?(i(),p(D,{key:0,style:{width:"100%"},src:e.params.img},null,8,["src"])):(i(),p(F,{key:1,class:"avatar-uploader-icon"},{default:o(()=>[t(A)]),_:1}))]),_:1},8,["on-success","before-upload"])]),_:1}),t(s,{label:"文章内容"},{default:o(()=>[t(B,{modelValue:e.params.content,"onUpdate:modelValue":a[6]||(a[6]=l=>e.params.content=l),setting:e.setting,"script-src":"/tinymce/tinymce.min.js"},null,8,["modelValue","setting"])]),_:1}),t(s,{label:"内容功能"},{default:o(()=>[t(f,{modelValue:e.autoImg,"onUpdate:modelValue":a[8]||(a[8]=l=>e.autoImg=l)},{default:o(()=>[m(" 提取第 "),t(r,{modelValue:e.picNum,"onUpdate:modelValue":a[7]||(a[7]=l=>e.picNum=l),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),m("张图片作封面 ")]),_:1},8,["modelValue"]),t(f,{modelValue:e.autoDes,"onUpdate:modelValue":a[9]||(a[9]=l=>e.autoDes=l)},{default:o(()=>[m("提取文章描述")]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"发布时间"},{default:o(()=>[t(E,{modelValue:e.params.updatedAt,"onUpdate:modelValue":a[10]||(a[10]=l=>e.params.updatedAt=l),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])]),_:1}),t(s,{label:"是否显示"},{default:o(()=>[t(k,{modelValue:e.params.status,"onUpdate:modelValue":a[11]||(a[11]=l=>e.params.status=l),label:"0"},{default:o(()=>[m("发布")]),_:1},8,["modelValue"]),t(k,{modelValue:e.params.status,"onUpdate:modelValue":a[12]||(a[12]=l=>e.params.status=l),label:"1"},{default:o(()=>[m("不发布")]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"浏览数"},{default:o(()=>[t(r,{modelValue:e.params.pv,"onUpdate:modelValue":a[13]||(a[13]=l=>e.params.pv=l)},null,8,["modelValue"])]),_:1})],512),[[C,e.activeIndex==0]]),h(V("div",null,[t(s,{label:"短标题",prop:"name"},{default:o(()=>[t(r,{modelValue:e.params.short_title,"onUpdate:modelValue":a[14]||(a[14]=l=>e.params.short_title=l)},null,8,["modelValue"])]),_:1}),t(s,{label:"其它栏目"},{default:o(()=>[V("div",te,[t(v,{modelValue:e.params.sub_cid,"onUpdate:modelValue":a[15]||(a[15]=l=>e.params.sub_cid=l),onChange:u.handleSubCid},{default:o(()=>[(i(!0),y(_,null,S(e.cateList,(l,c)=>(i(),p(f,{key:c,label:l.id},{default:o(()=>[m(x(l.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","onChange"]),oe])]),_:1}),t(s,{label:"SEO标题"},{default:o(()=>[t(r,{modelValue:e.params.seo_title,"onUpdate:modelValue":a[16]||(a[16]=l=>e.params.seo_title=l)},null,8,["modelValue"])]),_:1}),t(s,{label:"SEO关键词"},{default:o(()=>[t(r,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":a[17]||(a[17]=l=>e.params.seo_keywords=l)},null,8,["modelValue"])]),_:1}),t(s,{label:"SEO描述"},{default:o(()=>[t(r,{modelValue:e.params.seo_description,"onUpdate:modelValue":a[18]||(a[18]=l=>e.params.seo_description=l)},null,8,["modelValue"])]),_:1}),t(s,{label:"来源"},{default:o(()=>[t(r,{modelValue:e.params.source,"onUpdate:modelValue":a[19]||(a[19]=l=>e.params.source=l)},null,8,["modelValue"])]),_:1}),t(s,{label:"作者"},{default:o(()=>[t(r,{modelValue:e.params.author,"onUpdate:modelValue":a[20]||(a[20]=l=>e.params.author=l)},null,8,["modelValue"])]),_:1}),t(s,{label:"外链跳转"},{default:o(()=>[t(r,{modelValue:e.params.link,"onUpdate:modelValue":a[21]||(a[21]=l=>e.params.link=l),max:"120"},null,8,["modelValue"])]),_:1}),(i(!0),y(_,null,S(e.field,(l,c)=>(i(),p(s,{label:l.field_cname,key:c},{default:o(()=>[l.field_type==="1"?(i(),p(r,{key:0,modelValue:e.fieldParams[l.field_ename],"onUpdate:modelValue":b=>e.fieldParams[l.field_ename]=b,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):l.field_type==="2"?(i(),p(r,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.fieldParams[l.field_ename],"onUpdate:modelValue":b=>e.fieldParams[l.field_ename]=b},null,8,["modelValue","onUpdate:modelValue"])):(i(),p(r,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:e.fieldParams[l.field_ename],"onUpdate:modelValue":b=>e.fieldParams[l.field_ename]=b},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["label"]))),128))],512),[[C,e.activeIndex==1]]),t(s,null,{default:o(()=>[t(L,{type:"primary",onClick:a[22]||(a[22]=l=>u.submit("params"))},{default:o(()=>[m("保存")]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[O,e.loading]])])],64)}const Fe=Z(ee,[["render",se]]);export{Fe as default};