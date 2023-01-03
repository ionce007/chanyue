import{c}from"./frag.js";import{_ as f}from"./@jsdawn.js";import{t as _}from"./tinymce.js";import{E as g}from"./pinyin-pro.js";import{_ as V}from"./index.js";import{ag as m,o as b,c as y,Z as a,V as r,a as h,Y as k}from"./@vue.js";import"./api.js";import"./axios.js";import"./form-data.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const v={name:"frag-add",components:{Vue3Tinymce:f},data:()=>({setting:_,params:{name:"",mark:"",createdAt:new Date,content:"禅悦"},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]}}),computed:{},async mounted(){},created(){},unmounted(){},watch:{"params.name":function(e,t){this.params.mark=g(e,{toneType:"none"}).replaceAll(" ","")}},methods:{setContent(e){this.params.content=e},handleAttr(e){console.log("e-->",e)},handleSubCid(e){console.log("e-->",e)},async create(){try{(await c(this.params)).code&&(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate(t=>{if(t)this.create();else return console.log("error submit!!"),!1})}}},$={class:"mr-10 ml-10 mb-20"};function w(e,t,A,C,U,s){const n=m("el-input"),l=m("el-form-item"),p=m("vue3-tinymce"),i=m("el-date-picker"),d=m("el-button"),u=m("el-form");return b(),y("div",$,[a(u,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:""},{default:r(()=>[h("div",null,[a(l,{label:"碎片名称",prop:"name"},{default:r(()=>[a(n,{modelValue:e.params.name,"onUpdate:modelValue":t[0]||(t[0]=o=>e.params.name=o),placeholder:"请输入汉字"},null,8,["modelValue"])]),_:1}),a(l,{label:"碎片标识"},{default:r(()=>[a(n,{modelValue:e.params.mark,"onUpdate:modelValue":t[1]||(t[1]=o=>e.params.mark=o),placeholder:"模板使用标识"},null,8,["modelValue"])]),_:1}),a(l,{label:"文章内容"},{default:r(()=>[a(p,{modelValue:e.params.content,"onUpdate:modelValue":t[2]||(t[2]=o=>e.params.content=o),setting:e.setting,"script-src":"/tinymce/tinymce.min.js"},null,8,["modelValue","setting"])]),_:1}),a(l,{label:"发布时间"},{default:r(()=>[a(i,{modelValue:e.params.createdAt,"onUpdate:modelValue":t[3]||(t[3]=o=>e.params.createdAt=o),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])]),_:1})]),a(l,null,{default:r(()=>[a(d,{type:"primary",onClick:t[4]||(t[4]=o=>s.submit("params"))},{default:r(()=>[k("保存")]),_:1})]),_:1})]),_:1},8,["model","rules"])])}const X=V(v,[["render",w]]);export{X as default};
