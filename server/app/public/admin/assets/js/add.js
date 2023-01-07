import{a as P,c as E}from"./category.js";import{_ as B,a as I,t as T}from"./index.js";import{l as q}from"./model.js";import{E as _}from"./pinyin-pro.js";import{ag as d,o as f,c as y,a as i,Z as o,V as t,F as h,W as v,_ as U,Y as r,a6 as $,U as j,t as A}from"./@vue.js";import"./api.js";import"./axios.js";import"./form-data.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const D={name:"category-add",data:()=>({categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],modList:[],params:{pid:0,seo_title:"",seo_keywords:"",seo_description:"",name:"",path:"",pinyin:"",mid:"0",description:"",url:"",sort:0,type:"0",target:"0",status:"0"},paramsRules:{name:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:10,message:"名称长度在 2 到 10 个字符之间",trigger:"blur"}]}}),computed:{allPath(){return this.params.path==""?this.params.path+"/"+this.params.pinyin:this.params.path+this.params.pinyin}},created(){this.query(),this.modelList()},watch:{"params.name":function(e,a){this.params.pinyin=_(e,{toneType:"none"}).replace(/\s+/g,"")}},methods:{handleClick(e){this.activeIndex=e.index},async query(){try{let e=await P();if(e.code===200){let a=I(T(e.data));this.cate=e.data,this.category=[...a]}}catch(e){console.log(e)}},handleChange(e){let a=[],u=Object.values(e);console.log(u),u.forEach(b=>{this.cate.forEach(V=>{V.id==b&&a.push("/"+V.pinyin)})}),this.params.path=a.join("")+"/",e[0]!=-1&&(this.params.pid=e[e.length-1])},async modelList(){try{let e=await q(this.cur);e.code===200&&(this.modList=e.data.list)}catch(e){console.log(e)}},async categoryAdd(){try{(await E(this.params)).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.params.path=this.allPath,this.$refs[e].validate(a=>{if(a)this.categoryAdd();else return console.log("error submit!!"),!1})}}},F={class:"mr-10 ml-10"},O={class:"mr-10 ml-10 mb-20"};function R(e,a,u,b,V,p){const g=d("el-tab-pane"),k=d("el-tabs"),w=d("el-cascader"),s=d("el-form-item"),m=d("el-input"),n=d("el-radio"),C=d("el-radio-group"),L=d("el-button"),S=d("el-form");return f(),y(h,null,[i("div",F,[o(k,{modelValue:e.activeName,"onUpdate:modelValue":a[0]||(a[0]=l=>e.activeName=l),onTabClick:p.handleClick},{default:t(()=>[o(g,{label:"基本信息",name:"first"}),o(g,{label:"SEO设置",name:"second"})]),_:1},8,["modelValue","onTabClick"])]),i("div",O,[o(S,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px"},{default:t(()=>[v(i("div",null,[o(s,{label:"上级栏目"},{default:t(()=>[o(w,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":a[1]||(a[1]=l=>e.categorySelected=l),options:e.category,onChange:p.handleChange},null,8,["props","modelValue","options","onChange"]),r(" 不选择为顶级栏目 ")]),_:1}),o(s,{label:"栏目名称",prop:"name"},{default:t(()=>[o(m,{modelValue:e.params.name,"onUpdate:modelValue":a[2]||(a[2]=l=>e.params.name=l)},null,8,["modelValue"])]),_:1}),o(s,{label:"栏目标识"},{default:t(()=>[o(m,{modelValue:e.params.pinyin,"onUpdate:modelValue":a[3]||(a[3]=l=>e.params.pinyin=l),disabled:""},null,8,["modelValue"])]),_:1}),o(s,{label:"栏目路径"},{default:t(()=>[o(m,{modelValue:p.allPath,"onUpdate:modelValue":a[4]||(a[4]=l=>p.allPath=l),disabled:""},null,8,["modelValue"])]),_:1}),o(s,{label:"栏目类型"},{default:t(()=>[o(n,{modelValue:e.params.type,"onUpdate:modelValue":a[5]||(a[5]=l=>e.params.type=l),label:"0"},{default:t(()=>[r("栏目")]),_:1},8,["modelValue"]),o(n,{modelValue:e.params.type,"onUpdate:modelValue":a[6]||(a[6]=l=>e.params.type=l),label:"1"},{default:t(()=>[r("单页")]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"扩展模型"},{default:t(()=>[o(C,{modelValue:e.params.mid,"onUpdate:modelValue":a[7]||(a[7]=l=>e.params.mid=l)},{default:t(()=>[o(n,{label:"0"},{default:t(()=>[r("基本模型")]),_:1}),(f(!0),y(h,null,$(e.modList,(l,N)=>(f(),j(n,{key:N,label:l.id},{default:t(()=>[r(A(l.model_name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"是否显示"},{default:t(()=>[o(n,{modelValue:e.params.status,"onUpdate:modelValue":a[8]||(a[8]=l=>e.params.status=l),label:"0"},{default:t(()=>[r("显示")]),_:1},8,["modelValue"]),o(n,{modelValue:e.params.status,"onUpdate:modelValue":a[9]||(a[9]=l=>e.params.status=l),label:"1"},{default:t(()=>[r("隐藏")]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"栏目排序"},{default:t(()=>[o(m,{modelValue:e.params.sort,"onUpdate:modelValue":a[10]||(a[10]=l=>e.params.sort=l)},null,8,["modelValue"])]),_:1})],512),[[U,e.activeIndex==0]]),v(i("div",null,[o(s,{label:"栏目描述"},{default:t(()=>[o(m,{modelValue:e.params.description,"onUpdate:modelValue":a[11]||(a[11]=l=>e.params.description=l)},null,8,["modelValue"])]),_:1}),o(s,{label:"栏目链接"},{default:t(()=>[o(m,{modelValue:e.params.url,"onUpdate:modelValue":a[12]||(a[12]=l=>e.params.url=l)},null,8,["modelValue"])]),_:1}),o(s,{label:"打开方式"},{default:t(()=>[o(n,{modelValue:e.params.target,"onUpdate:modelValue":a[13]||(a[13]=l=>e.params.target=l),label:"0"},{default:t(()=>[r("当前页面")]),_:1},8,["modelValue"]),o(n,{modelValue:e.params.target,"onUpdate:modelValue":a[14]||(a[14]=l=>e.params.target=l),label:"1"},{default:t(()=>[r("新页面")]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"seo标题"},{default:t(()=>[o(m,{modelValue:e.params.seo_title,"onUpdate:modelValue":a[15]||(a[15]=l=>e.params.seo_title=l)},null,8,["modelValue"])]),_:1}),o(s,{label:"seo关键词"},{default:t(()=>[o(m,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":a[16]||(a[16]=l=>e.params.seo_keywords=l)},null,8,["modelValue"])]),_:1}),o(s,{label:"seo描述"},{default:t(()=>[o(m,{modelValue:e.params.seo_description,"onUpdate:modelValue":a[17]||(a[17]=l=>e.params.seo_description=l)},null,8,["modelValue"])]),_:1})],512),[[U,e.activeIndex==1]]),o(s,null,{default:t(()=>[o(L,{type:"primary",onClick:a[18]||(a[18]=l=>p.submit("params"))},{default:t(()=>[r("保存")]),_:1})]),_:1})]),_:1},8,["model","rules"])])],64)}const pe=B(D,[["render",R]]);export{pe as default};