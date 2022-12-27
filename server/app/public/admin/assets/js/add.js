var g=(e,a,i)=>new Promise((b,f)=>{var u=d=>{try{V(i.next(d))}catch(s){f(s)}},y=d=>{try{V(i.throw(d))}catch(s){f(s)}},V=d=>d.done?b(d.value):Promise.resolve(d.value).then(u,y);V((i=i.apply(e,a)).next())});import{a as P,c}from"./category.js";import{_ as T,a as B,t as E}from"./index.js";import{l as I}from"./model.js";import{p as q}from"./pinyin-pro.js";import{a5 as n,o as v,c as _,a as h,Y as o,R as t,F as U,S as k,T as w,a8 as A,W as r,Q as R,X as $}from"./@vue.js";import"./api.js";import"./axios.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@element-plus.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const j={name:"category-add",data:()=>({categorySelected:[-1],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],modList:[],params:{pid:0,seo_title:"",seo_keywords:"",seo_description:"",name:"",path:"",pinyin:"",mid:"0",description:"",url:"",sort:0,type:"0",target:"0",status:"0"},paramsRules:{name:[{required:!0,message:"\u8BF7\u8F93\u5165\u680F\u76EE\u540D\u79F0",trigger:"blur"},{min:2,max:10,message:"\u540D\u79F0\u957F\u5EA6\u5728 2 \u5230 10 \u4E2A\u5B57\u7B26\u4E4B\u95F4",trigger:"blur"}]}}),computed:{allPath(){return this.params.path==""?this.params.path+"/"+this.params.pinyin:this.params.path+this.params.pinyin}},created(){this.query(),this.modelList()},watch:{"params.name":function(e,a){this.params.pinyin=q(e,{toneType:"none"}).replaceAll(" ","")}},methods:{handleClick(e){this.activeIndex=e.index},query(){return g(this,null,function*(){try{let e=yield P();if(e.code===200){let a=B(E(e.data));this.cate=e.data,this.category=[{label:"\u9876\u7EA7\u680F\u76EE",value:-1},...a]}}catch(e){console.log(e)}})},handleChange(e){let a=[],i=Object.values(e);console.log(i),i.forEach(b=>{this.cate.forEach(f=>{f.id==b&&a.push("/"+f.pinyin)})}),this.params.path=a.join("")+"/",e[0]!=-1&&(this.params.pid=e[e.length-1])},modelList(){return g(this,null,function*(){try{let e=yield I(this.cur);e.code===200&&(this.modList=e.data.list)}catch(e){console.log(e)}})},categoryAdd(){return g(this,null,function*(){try{(yield c(this.params)).code&&(this.$message({message:"\u66F4\u65B0\u6210\u529F^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}})},submit(e){this.params.path=this.allPath,this.$refs[e].validate(a=>{if(a)this.categoryAdd();else return console.log("error submit!!"),!1})}}},D={class:"mr-10 ml-10"},F={class:"mr-10 ml-10 mb-20"},O=r(" \u4E0D\u9009\u62E9\u4E3A\u9876\u7EA7\u680F\u76EE "),Q=r("\u680F\u76EE"),W=r("\u5355\u9875"),X=r("\u57FA\u672C\u6A21\u578B"),Y=r("\u663E\u793A"),z=r("\u9690\u85CF"),G=r("\u5F53\u524D\u9875\u9762"),H=r("\u65B0\u9875\u9762"),J=r("\u4FDD\u5B58");function K(e,a,i,b,f,u){const y=n("el-tab-pane"),V=n("el-tabs"),d=n("el-cascader"),s=n("el-form-item"),m=n("el-input"),p=n("el-radio"),C=n("el-radio-group"),S=n("el-button"),L=n("el-form");return v(),_(U,null,[h("div",D,[o(V,{modelValue:e.activeName,"onUpdate:modelValue":a[0]||(a[0]=l=>e.activeName=l),onTabClick:u.handleClick},{default:t(()=>[o(y,{label:"\u57FA\u672C\u4FE1\u606F",name:"first"}),o(y,{label:"SEO\u8BBE\u7F6E",name:"second"})]),_:1},8,["modelValue","onTabClick"])]),h("div",F,[o(L,{ref:"params",model:e.params,rules:e.paramsRules,"label-width":"84px"},{default:t(()=>[k(h("div",null,[o(s,{label:"\u4E0A\u7EA7\u680F\u76EE"},{default:t(()=>[o(d,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":a[1]||(a[1]=l=>e.categorySelected=l),options:e.category,onChange:u.handleChange},null,8,["props","modelValue","options","onChange"]),O]),_:1}),o(s,{label:"\u680F\u76EE\u540D\u79F0",prop:"name"},{default:t(()=>[o(m,{modelValue:e.params.name,"onUpdate:modelValue":a[2]||(a[2]=l=>e.params.name=l)},null,8,["modelValue"])]),_:1}),o(s,{label:"\u680F\u76EE\u6807\u8BC6"},{default:t(()=>[o(m,{modelValue:e.params.pinyin,"onUpdate:modelValue":a[3]||(a[3]=l=>e.params.pinyin=l),disabled:""},null,8,["modelValue"])]),_:1}),o(s,{label:"\u680F\u76EE\u8DEF\u5F84"},{default:t(()=>[o(m,{modelValue:u.allPath,"onUpdate:modelValue":a[4]||(a[4]=l=>u.allPath=l),disabled:""},null,8,["modelValue"])]),_:1}),o(s,{label:"\u680F\u76EE\u7C7B\u578B"},{default:t(()=>[o(p,{modelValue:e.params.type,"onUpdate:modelValue":a[5]||(a[5]=l=>e.params.type=l),label:"0"},{default:t(()=>[Q]),_:1},8,["modelValue"]),o(p,{modelValue:e.params.type,"onUpdate:modelValue":a[6]||(a[6]=l=>e.params.type=l),label:"1"},{default:t(()=>[W]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"\u6269\u5C55\u6A21\u578B"},{default:t(()=>[o(C,{modelValue:e.params.mid,"onUpdate:modelValue":a[7]||(a[7]=l=>e.params.mid=l)},{default:t(()=>[o(p,{label:"0"},{default:t(()=>[X]),_:1}),(v(!0),_(U,null,A(e.modList,(l,N)=>(v(),R(p,{key:N,label:l.id},{default:t(()=>[r($(l.model_name),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"\u662F\u5426\u663E\u793A"},{default:t(()=>[o(p,{modelValue:e.params.status,"onUpdate:modelValue":a[8]||(a[8]=l=>e.params.status=l),label:"0"},{default:t(()=>[Y]),_:1},8,["modelValue"]),o(p,{modelValue:e.params.status,"onUpdate:modelValue":a[9]||(a[9]=l=>e.params.status=l),label:"1"},{default:t(()=>[z]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"\u680F\u76EE\u6392\u5E8F"},{default:t(()=>[o(m,{modelValue:e.params.sort,"onUpdate:modelValue":a[10]||(a[10]=l=>e.params.sort=l)},null,8,["modelValue"])]),_:1})],512),[[w,e.activeIndex==0]]),k(h("div",null,[o(s,{label:"\u680F\u76EE\u63CF\u8FF0"},{default:t(()=>[o(m,{modelValue:e.params.description,"onUpdate:modelValue":a[11]||(a[11]=l=>e.params.description=l)},null,8,["modelValue"])]),_:1}),o(s,{label:"\u680F\u76EE\u94FE\u63A5"},{default:t(()=>[o(m,{modelValue:e.params.url,"onUpdate:modelValue":a[12]||(a[12]=l=>e.params.url=l)},null,8,["modelValue"])]),_:1}),o(s,{label:"\u6253\u5F00\u65B9\u5F0F"},{default:t(()=>[o(p,{modelValue:e.params.target,"onUpdate:modelValue":a[13]||(a[13]=l=>e.params.target=l),label:"0"},{default:t(()=>[G]),_:1},8,["modelValue"]),o(p,{modelValue:e.params.target,"onUpdate:modelValue":a[14]||(a[14]=l=>e.params.target=l),label:"1"},{default:t(()=>[H]),_:1},8,["modelValue"])]),_:1}),o(s,{label:"seo\u6807\u9898"},{default:t(()=>[o(m,{modelValue:e.params.seo_title,"onUpdate:modelValue":a[15]||(a[15]=l=>e.params.seo_title=l)},null,8,["modelValue"])]),_:1}),o(s,{label:"seo\u5173\u952E\u8BCD"},{default:t(()=>[o(m,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":a[16]||(a[16]=l=>e.params.seo_keywords=l)},null,8,["modelValue"])]),_:1}),o(s,{label:"seo\u63CF\u8FF0"},{default:t(()=>[o(m,{modelValue:e.params.seo_description,"onUpdate:modelValue":a[17]||(a[17]=l=>e.params.seo_description=l)},null,8,["modelValue"])]),_:1})],512),[[w,e.activeIndex==1]]),o(s,null,{default:t(()=>[o(S,{type:"primary",onClick:a[18]||(a[18]=l=>u.submit("params"))},{default:t(()=>[J]),_:1})]),_:1})]),_:1},8,["model","rules"])])],64)}const _e=T(j,[["render",K]]);export{_e as default};
