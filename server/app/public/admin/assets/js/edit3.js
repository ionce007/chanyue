import{y as e,A as a,B as l,q as t,p as s,u as o,L as d,f as r,o as i}from"./element-plus.js";import{f as m,a as p,u as n}from"./category.js";import{_ as u,e as c,b as h,t as y}from"./index.js";import{l as g}from"./model.js";import{p as V}from"./pinyin-pro.js";import{o as f,c as _,a as b,U as j,W as U,a1 as v,_ as S,F as P,aa as C,X as k,t as w,h as x,a2 as L}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const I={class:"mr-10 ml-10"},q={class:"mr-10 ml-10 mb-20"};const E=u({name:"category-edit",data:()=>({id:0,categorySelected:[],categorySelectedPath:"",categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],modList:[],params:{pid:0,seo_title:"",seo_keywords:"",seo_description:"",name:"",path:"",pinyin:"",mid:"0",description:"",url:"",sort:0,type:"0",target:"0",status:"0"}}),computed:{},created(){this.id=this.$route.params.id,this.modelList(),this.query(),this.findById()},methods:{createPinyin(e){this.params.pinyin=V(e,{toneType:"none"}).replace(/\s+/g,""),this.params.path=this.categorySelectedPath?this.categorySelectedPath+this.params.pinyin:"/"+this.categorySelectedPath+this.params.pinyin},changePath(e){this.params.path=this.categorySelectedPath?this.categorySelectedPath+e:"/"+this.categorySelectedPath+e},handleClick(e){this.activeIndex=e.index},async query(){try{let e=await m();if(200===e.code){let a=e.data;this.cate=e.data;let l=c(this.id,a);l.length>1&&(l.length=l.length-1),this.categorySelected=l;let t=h(y(a));this.category=[...t]}}catch(e){console.log(e)}},async modelList(){try{let e=await g(this.cur);200===e.code&&(this.modList=e.data.list.map((e=>(e.id=e.id.toString(),e))))}catch(e){console.log(e)}},async findById(){try{let e=await p(this.id);if(200===e.code){this.params=e.data;let a=[];this.cate.forEach((l=>{l.id==e.data.pid&&a.push("/"+l.pinyin)})),this.categorySelectedPath=a.join("")+"/"}}catch(e){console.error(e)}},handleChange(e){let a=[];Object.values(e).forEach((e=>{this.cate.forEach((l=>{l.id==e&&a.push("/"+l.pinyin)}))})),this.categorySelectedPath=a.join("")+"/",this.params.path=this.categorySelectedPath+this.params.pinyin,-1!=e[0]&&(this.params.pid=e[e.length-1])},async update(){try{(await n(this.params)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(m,p,n,u,c,h){const y=e,g=a,V=l,E=t,$=s,B=o,N=d,T=r,z=i;return f(),_(P,null,[b("div",I,[j(g,{modelValue:m.activeName,"onUpdate:modelValue":p[0]||(p[0]=e=>m.activeName=e),onTabClick:h.handleClick},{default:U((()=>[j(y,{label:"基本信息",name:"first"}),j(y,{label:"SEO设置",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),b("div",q,[j(z,{ref:"params",model:m.params,rules:m.paramsRules,"label-width":"84px",class:"w640"},{default:U((()=>[v(b("div",null,[j(E,{label:"上级栏目"},{default:U((()=>[j(V,{props:m.categoryProps,"show-all-levels":!1,modelValue:m.categorySelected,"onUpdate:modelValue":p[1]||(p[1]=e=>m.categorySelected=e),options:m.category,onChange:h.handleChange,placeholder:"不选择为顶级栏目"},null,8,["props","modelValue","options","onChange"])])),_:1}),j(E,{label:"栏目名称",prop:"name",rules:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:U((()=>[j($,{modelValue:m.params.name,"onUpdate:modelValue":p[2]||(p[2]=e=>m.params.name=e),onChange:h.createPinyin},null,8,["modelValue","onChange"])])),_:1}),j(E,{label:"栏目标识"},{default:U((()=>[j($,{modelValue:m.params.pinyin,"onUpdate:modelValue":p[3]||(p[3]=e=>m.params.pinyin=e),onChange:h.changePath},null,8,["modelValue","onChange"])])),_:1}),j(E,{label:"栏目路径"},{default:U((()=>[j($,{modelValue:m.params.path,"onUpdate:modelValue":p[4]||(p[4]=e=>m.params.path=e),disabled:""},null,8,["modelValue"])])),_:1}),j(E,{label:"栏目类型"},{default:U((()=>[j(B,{modelValue:m.params.type,"onUpdate:modelValue":p[5]||(p[5]=e=>m.params.type=e),label:"0"},{default:U((()=>[S("栏目")])),_:1},8,["modelValue"]),j(B,{modelValue:m.params.type,"onUpdate:modelValue":p[6]||(p[6]=e=>m.params.type=e),label:"1"},{default:U((()=>[S("单页")])),_:1},8,["modelValue"])])),_:1}),j(E,{label:"扩展模型"},{default:U((()=>[j(N,{modelValue:m.params.mid,"onUpdate:modelValue":p[7]||(p[7]=e=>m.params.mid=e)},{default:U((()=>[j(B,{label:"0"},{default:U((()=>[S("基本模型")])),_:1}),m.modList.length>0?(f(!0),_(P,{key:0},C(m.modList,((e,a)=>(f(),k(B,{key:a,label:e.id},{default:U((()=>[S(w(e.model_name)+"模型 ",1)])),_:2},1032,["label"])))),128)):x("",!0)])),_:1},8,["modelValue"])])),_:1}),j(E,{label:"是否显示"},{default:U((()=>[j(B,{modelValue:m.params.status,"onUpdate:modelValue":p[8]||(p[8]=e=>m.params.status=e),label:"0"},{default:U((()=>[S("显示")])),_:1},8,["modelValue"]),j(B,{modelValue:m.params.status,"onUpdate:modelValue":p[9]||(p[9]=e=>m.params.status=e),label:"1"},{default:U((()=>[S("隐藏")])),_:1},8,["modelValue"])])),_:1}),j(E,{label:"栏目排序"},{default:U((()=>[j($,{modelValue:m.params.sort,"onUpdate:modelValue":p[10]||(p[10]=e=>m.params.sort=e)},null,8,["modelValue"])])),_:1})],512),[[L,0==m.activeIndex]]),v(b("div",null,[j(E,{label:"栏目描述"},{default:U((()=>[j($,{modelValue:m.params.description,"onUpdate:modelValue":p[11]||(p[11]=e=>m.params.description=e)},null,8,["modelValue"])])),_:1}),j(E,{label:"栏目链接"},{default:U((()=>[j($,{modelValue:m.params.url,"onUpdate:modelValue":p[12]||(p[12]=e=>m.params.url=e)},null,8,["modelValue"])])),_:1}),j(E,{label:"打开方式"},{default:U((()=>[j(B,{modelValue:m.params.target,"onUpdate:modelValue":p[13]||(p[13]=e=>m.params.target=e),label:"0"},{default:U((()=>[S("当前页面")])),_:1},8,["modelValue"]),j(B,{modelValue:m.params.target,"onUpdate:modelValue":p[14]||(p[14]=e=>m.params.target=e),label:"1"},{default:U((()=>[S("新页面")])),_:1},8,["modelValue"])])),_:1}),j(E,{label:"seo标题"},{default:U((()=>[j($,{modelValue:m.params.seo_title,"onUpdate:modelValue":p[15]||(p[15]=e=>m.params.seo_title=e)},null,8,["modelValue"])])),_:1}),j(E,{label:"seo关键词"},{default:U((()=>[j($,{modelValue:m.params.seo_keywords,"onUpdate:modelValue":p[16]||(p[16]=e=>m.params.seo_keywords=e)},null,8,["modelValue"])])),_:1}),j(E,{label:"seo描述"},{default:U((()=>[j($,{modelValue:m.params.seo_description,"onUpdate:modelValue":p[17]||(p[17]=e=>m.params.seo_description=e)},null,8,["modelValue"])])),_:1})],512),[[L,1==m.activeIndex]]),j(E,null,{default:U((()=>[j(T,{type:"primary",onClick:p[18]||(p[18]=e=>h.submit("params"))},{default:U((()=>[S("保存")])),_:1})])),_:1})])),_:1},8,["model","rules"])])],64)}]]);export{E as default};
