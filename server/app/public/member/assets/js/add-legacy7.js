System.register(["./element-plus-legacy.js","./friendlink-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,t,u,r,n,m,c,o,d,i,p;return{setters:[e=>{a=e.p,s=e.q,t=e.t,u=e.f,r=e.o},e=>{n=e.c},e=>{m=e._},e=>{c=e.o,o=e.c,d=e.U,i=e.W,p=e._},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10 mb-20"};e("default",m({name:"friendlink-add",data:()=>({params:{title:"",link:"",sort:0,createdAt:new Date},paramsRules:{name:[{required:!0,message:"请输入标签名称",trigger:"blur"},{min:2,max:20,message:"名称长度在 2 到 20 个字符之间",trigger:"blur"}]}}),computed:{},mounted(){},async created(){},methods:{handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async create(){try{let e=await n(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return!1;this.create()}))}}},[["render",function(e,n,m,g,y,j){const f=a,h=s,V=t,b=u,_=r;return c(),o("div",l,[d(_,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px",class:"mt-20"},{default:i((()=>[d(h,{label:"标题",prop:"title"},{default:i((()=>[d(f,{modelValue:e.params.title,"onUpdate:modelValue":n[0]||(n[0]=l=>e.params.title=l)},null,8,["modelValue"])])),_:1}),d(h,{label:"链接"},{default:i((()=>[d(f,{modelValue:e.params.link,"onUpdate:modelValue":n[1]||(n[1]=l=>e.params.link=l)},null,8,["modelValue"])])),_:1}),d(h,{label:"排序"},{default:i((()=>[d(f,{modelValue:e.params.sort,"onUpdate:modelValue":n[2]||(n[2]=l=>e.params.sort=l)},null,8,["modelValue"])])),_:1}),d(h,{label:"发布时间"},{default:i((()=>[d(V,{modelValue:e.params.createdAt,"onUpdate:modelValue":n[3]||(n[3]=l=>e.params.createdAt=l),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),d(h,null,{default:i((()=>[d(b,{type:"primary",onClick:n[4]||(n[4]=e=>j.submit("params"))},{default:i((()=>[p("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]))}}}));
