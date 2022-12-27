var m=(e,a,o)=>new Promise((d,u)=>{var i=t=>{try{n(o.next(t))}catch(r){u(r)}},h=t=>{try{n(o.throw(t))}catch(r){u(r)}},n=t=>t.done?d(t.value):Promise.resolve(t.value).then(i,h);n((o=o.apply(e,a)).next())});import{Y as C,P as w,v as S,M as k}from"./@element-plus.js";import{l as v,d as q}from"./field.js";import{h as D}from"./model.js";import{_ as E}from"./index.js";import{a5 as s,aj as $,o as _,c as x,Y as l,R as c,S as N,Q as T,F as j,W as B}from"./@vue.js";import"./api.js";import"./axios.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const U={name:"field-index",setup(){return{Edit:C,Delete:w,View:S,Search:k}},data:()=>({query:{mid:""},model_name:"",table_name:"",multipleSelection:[],tableData:[],count:0,cur:1,loading:!0}),computed:{},created(){this.query=this.$route.query,this.list()},update(){},methods:{list(){return m(this,null,function*(){try{let e=yield v(this.query.mid,this.cur);if(e.code===200){const a=e.data;this.tableData=[...a.list],this.model_name=a.model.model_name,this.table_name=a.model.table_name,this.count=a.count,this.loading=!1}}catch(e){console.log(e)}})},toggleSelection(e){e?e.forEach(a=>{this.$refs.multipleTable.toggleRowSelection(a)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},handleCurrentChange(e){this.cur=Number(e),sessionStorage.setItem("cur",Number(e)),this.list()},toEdit(e){console.log(e);const{id:a,field_ename:o}=e;this.$router.push({name:"field-edit",query:{fid:a,mid:this.query.mid,table_name:o,model_name:this.model_name}})},delSome(){},hasUse(e){return m(this,null,function*(){return yield D(e)})},handleDel(e){return m(this,null,function*(){let{id:a}=e;try{(yield this.hasUse(this.query.mid)).data.has.length==0?(yield q(a)).code===200&&(this.$message({message:"\u6587\u7AE0\u5220\u9664\u6210\u529F ^_^",type:"success"}),this.list()):this.$message({message:"\u5F53\u524D\u6A21\u578B\u6B63\u5728\u4F7F\u7528\uFF0C\u5B57\u6BB5\u4E0D\u80FD\u5220\u9664 ^_^",type:"success"})}catch(o){console.log(o)}})}}},V=B("\u65B0\u589E");function z(e,a,o,d,u,i){const h=s("router-link"),n=s("el-row"),t=s("el-table-column"),r=s("el-button"),f=s("el-table"),g=s("el-pagination"),b=$("loading");return _(),x(j,null,[l(n,{type:"flex",justify:"end"},{default:c(()=>[l(h,{class:"c-fff add-btn",to:{name:"field-add",query:{mid:e.query.mid,table_name:e.table_name,model_name:e.model_name}}},{default:c(()=>[V]),_:1},8,["to"])]),_:1}),N((_(),T(f,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark",style:{width:"100%"},"row-key":"id",size:"small",onSelectionChange:i.handleSelectionChange},{default:c(()=>[l(t,{type:"selection",width:"55"}),l(t,{prop:"id",label:"\u7F16\u53F7"}),l(t,{prop:"field_cname",label:"\u4E2D\u6587\u540D\u79F0"}),l(t,{prop:"field_ename",label:"\u5B57\u6BB5\u540D\u79F0"}),l(t,{prop:"field_sort",label:"\u6392\u5E8F"}),l(t,{fixed:"right",label:"\u64CD\u4F5C",width:"150"},{default:c(p=>[l(r,{icon:d.Edit,circle:"",onClick:y=>i.toEdit(p.row)},null,8,["icon","onClick"]),l(r,{icon:d.Delete,circle:"",onClick:y=>i.handleDel(p.row)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[b,e.loading]]),l(n,{type:"flex",class:"mt-20",justify:"space-between"},{default:c(()=>[l(g,{background:"",layout:"prev, pager, next",onCurrentChange:i.handleCurrentChange,"pager-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])]),_:1})],64)}const ie=E(U,[["render",z]]);export{ie as default};
