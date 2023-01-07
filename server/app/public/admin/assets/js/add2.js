import{a as O}from"./category.js";import{f as z,c as R}from"./article.js";import{s as $}from"./tag.js";import{_ as j}from"./@jsdawn.js";import{t as H}from"./tinymce.js";import{B as M}from"./@element-plus.js";import{_ as W,a as k,t as Y,c as Z,f as G}from"./index.js";import{ag as d,o as u,c as y,a as g,Z as t,V as o,F as _,W as w,_ as C,Y as m,U as p,a6 as S,t as J}from"./@vue.js";import"./api.js";import"./axios.js";import"./form-data.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const K={name:"article-add",components:{Vue3Tinymce:j,Plus:M},data:()=>({setting:H,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!0,autoDes:!0,picNum:1,taglist:[],params:{cid:0,sub_cid:[],title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"禅悦",status:"0",pv:0,link:""},field:[],dialogImageUrl:"",dialogVisible:!1,disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]},cur:1,keywords:""}),computed:{},mounted(){},created(){this.query(),this.searchTag()},unmounted(){},methods:{handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},async searchTag(e){try{let l=await $(this.cur,e);if(l.code===200){let f=[];l.data.list.forEach(V=>{f.push({label:V.name,value:V.id})}),this.taglist=f}}catch(l){console.log(l)}},async query(){try{let e=await O();if(e.code===200){let l=k(Y(e.data)),f=k(e.data);this.cateList=f,this.category=[...l]}}catch(e){console.log(e)}},handleChange(e){console.log(e),e[0]!=-1?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},handleAttr(e){console.log("e-->",e)},handleSubCid(e){console.log("e-->",e)},beforeUpload(e){if(e.size/1024/1024>2)return this.$message("上传文件必须小于1M"),!1},upload(e){e.code===200&&(this.params.img=e.data.path)},async findField(e){try{let l=await z(e);l.code===200&&(this.field=l.data.fields)}catch(l){console.log(l)}},async create(){try{let e={...this.params};e.attr=e.attr.toString(),e.sub_cid=e.sub_cid.toString(),e.tag_id=e.tag_id.toString(),e.img||(e.img=Z(e.content)[0]),e.description||(e.description=G(e.content).substr(0,255));let l={};this.field.map(V=>{l[V.field_ename]=V.field_values}),(await R({defaultParams:e,fieldParams:l})).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate(l=>{if(l)this.create();else return console.log("error submit!!"),!1})}}},Q={class:"mr-10 ml-10"},X={class:"mr-10 ml-10 mb-20"},x={class:"w-640"},ee=g("p",{class:"tips"},"(可选发布到其它栏目)",-1);function le(e,l,f,V,ae,n){const v=d("el-tab-pane"),I=d("el-tabs"),N=d("el-cascader"),s=d("el-form-item"),r=d("el-input"),i=d("el-checkbox"),h=d("el-checkbox-group"),P=d("el-select-v2"),D=d("el-image"),T=d("Plus"),A=d("el-icon"),F=d("el-upload"),B=d("vue3-tinymce"),E=d("el-date-picker"),U=d("el-radio"),L=d("el-button"),q=d("el-form");return u(),y(_,null,[g("div",Q,[t(I,{modelValue:e.activeName,"onUpdate:modelValue":l[0]||(l[0]=a=>e.activeName=a),onTabClick:n.handleClick},{default:o(()=>[t(v,{label:"基本信息",name:"first"}),t(v,{label:"扩展信息",name:"second"})]),_:1},8,["modelValue","onTabClick"])]),g("div",X,[t(q,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"100px",class:""},{default:o(()=>[w(g("div",null,[t(s,{label:"文章栏目"},{default:o(()=>[t(N,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":l[1]||(l[1]=a=>e.categorySelected=a),options:e.category,onChange:n.handleChange},null,8,["props","modelValue","options","onChange"])]),_:1}),t(s,{label:"文章标题",prop:"title"},{default:o(()=>[t(r,{modelValue:e.params.title,"onUpdate:modelValue":l[2]||(l[2]=a=>e.params.title=a)},null,8,["modelValue"])]),_:1}),t(s,{label:"内容属性"},{default:o(()=>[t(h,{modelValue:e.params.attr,"onUpdate:modelValue":l[3]||(l[3]=a=>e.params.attr=a),onChange:n.handleAttr},{default:o(()=>[t(i,{label:"1"},{default:o(()=>[m("头条")]),_:1}),t(i,{label:"2"},{default:o(()=>[m("推荐")]),_:1}),t(i,{label:"3"},{default:o(()=>[m("轮播")]),_:1}),t(i,{label:"4"},{default:o(()=>[m("热门")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),t(s,{label:"tag标签"},{default:o(()=>[t(P,{modelValue:e.params.tag_id,"onUpdate:modelValue":l[4]||(l[4]=a=>e.params.tag_id=a),options:e.taglist,placeholder:"Please select",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":n.searchTag},null,8,["modelValue","options","remote-method"])]),_:1}),t(s,{label:"内容摘要"},{default:o(()=>[t(r,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:e.params.description,"onUpdate:modelValue":l[5]||(l[5]=a=>e.params.description=a)},null,8,["modelValue"])]),_:1}),t(s,{label:"缩略图"},{default:o(()=>[t(F,{class:"avatar-uploader",action:"/api/upload","on-success":n.upload,"show-file-list":!1,"before-upload":n.beforeUpload},{default:o(()=>[e.params.img?(u(),p(D,{key:0,style:{width:"100%"},src:e.params.img},null,8,["src"])):(u(),p(A,{key:1,class:"avatar-uploader-icon"},{default:o(()=>[t(T)]),_:1}))]),_:1},8,["on-success","before-upload"])]),_:1}),t(s,{label:"文章内容"},{default:o(()=>[t(B,{modelValue:e.params.content,"onUpdate:modelValue":l[6]||(l[6]=a=>e.params.content=a),setting:e.setting,"script-src":"/tinymce/tinymce.min.js"},null,8,["modelValue","setting"])]),_:1}),t(s,{label:"内容功能"},{default:o(()=>[t(i,{modelValue:e.autoImg,"onUpdate:modelValue":l[8]||(l[8]=a=>e.autoImg=a)},{default:o(()=>[m(" 提取第 "),t(r,{modelValue:e.picNum,"onUpdate:modelValue":l[7]||(l[7]=a=>e.picNum=a),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),m("张图片作封面 ")]),_:1},8,["modelValue"]),t(i,{modelValue:e.autoDes,"onUpdate:modelValue":l[9]||(l[9]=a=>e.autoDes=a)},{default:o(()=>[m("提取文章描述")]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"发布时间"},{default:o(()=>[t(E,{modelValue:e.params.createdAt,"onUpdate:modelValue":l[10]||(l[10]=a=>e.params.createdAt=a),"default-value":new Date,type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue","default-value"])]),_:1}),t(s,{label:"是否显示"},{default:o(()=>[t(U,{modelValue:e.params.status,"onUpdate:modelValue":l[11]||(l[11]=a=>e.params.status=a),label:"0"},{default:o(()=>[m("发布")]),_:1},8,["modelValue"]),t(U,{modelValue:e.params.status,"onUpdate:modelValue":l[12]||(l[12]=a=>e.params.status=a),label:"1"},{default:o(()=>[m("不发布")]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"浏览数"},{default:o(()=>[t(r,{modelValue:e.params.pv,"onUpdate:modelValue":l[13]||(l[13]=a=>e.params.pv=a)},null,8,["modelValue"])]),_:1})],512),[[C,e.activeIndex==0]]),w(g("div",null,[t(s,{label:"短标题",prop:"name"},{default:o(()=>[t(r,{modelValue:e.params.short_title,"onUpdate:modelValue":l[14]||(l[14]=a=>e.params.short_title=a)},null,8,["modelValue"])]),_:1}),t(s,{label:"其它栏目"},{default:o(()=>[g("div",x,[t(h,{modelValue:e.params.sub_cid,"onUpdate:modelValue":l[15]||(l[15]=a=>e.params.sub_cid=a),onChange:n.handleSubCid},{default:o(()=>[(u(!0),y(_,null,S(e.cateList,(a,c)=>(u(),p(i,{key:c,label:a.value},{default:o(()=>[m(J(a.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","onChange"]),ee])]),_:1}),t(s,{label:"SEO标题"},{default:o(()=>[t(r,{modelValue:e.params.seo_title,"onUpdate:modelValue":l[16]||(l[16]=a=>e.params.seo_title=a)},null,8,["modelValue"])]),_:1}),t(s,{label:"SEO关键词"},{default:o(()=>[t(r,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":l[17]||(l[17]=a=>e.params.seo_keywords=a)},null,8,["modelValue"])]),_:1}),t(s,{label:"SEO描述"},{default:o(()=>[t(r,{modelValue:e.params.seo_description,"onUpdate:modelValue":l[18]||(l[18]=a=>e.params.seo_description=a)},null,8,["modelValue"])]),_:1}),t(s,{label:"来源"},{default:o(()=>[t(r,{modelValue:e.params.source,"onUpdate:modelValue":l[19]||(l[19]=a=>e.params.source=a)},null,8,["modelValue"])]),_:1}),t(s,{label:"作者"},{default:o(()=>[t(r,{modelValue:e.params.author,"onUpdate:modelValue":l[20]||(l[20]=a=>e.params.author=a)},null,8,["modelValue"])]),_:1}),t(s,{label:"外链跳转"},{default:o(()=>[t(r,{modelValue:e.params.link,"onUpdate:modelValue":l[21]||(l[21]=a=>e.params.link=a),max:"120"},null,8,["modelValue"])]),_:1}),(u(!0),y(_,null,S(e.field,(a,c)=>(u(),p(s,{label:a.field_cname,key:c},{default:o(()=>[a.field_type==="1"?(u(),p(r,{key:0,modelValue:a.field_values,"onUpdate:modelValue":b=>a.field_values=b,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):a.field_type==="2"?(u(),p(r,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:a.field_values,"onUpdate:modelValue":b=>a.field_values=b},null,8,["modelValue","onUpdate:modelValue"])):(u(),p(r,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:a.field_values,"onUpdate:modelValue":b=>a.field_values=b},null,8,["modelValue","onUpdate:modelValue"]))]),_:2},1032,["label"]))),128))],512),[[C,e.activeIndex==1]]),t(s,null,{default:o(()=>[t(L,{type:"primary",onClick:l[22]||(l[22]=a=>n.submit("params"))},{default:o(()=>[m("保存")]),_:1})]),_:1})]),_:1},8,["model","rules"])])],64)}const Ne=W(K,[["render",le]]);export{Ne as default};