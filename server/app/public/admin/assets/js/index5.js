import{Y as b,P as y,v as C,M as w}from"./@element-plus.js";import{l as k,d as S}from"./field.js";import{h as q}from"./model.js";import{_ as v}from"./index.js";import{ag as o,aq as D,o as u,c as E,Z as t,V as n,W as $,U as x,F as N,Y as T}from"./@vue.js";import"./api.js";import"./axios.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const U={name:"field-index",setup(){return{Edit:b,Delete:y,View:C,Search:w}},data:()=>({query:{mid:""},model_name:"",table_name:"",multipleSelection:[],tableData:[],count:0,cur:1,loading:!0}),computed:{},created(){this.query=this.$route.query,this.list()},update(){},methods:{async list(){try{let e=await k(this.query.mid,this.cur);if(e.code===200){const a=e.data;this.tableData=[...a.list],this.model_name=a.model.model_name,this.table_name=a.model.table_name,this.count=a.count,this.loading=!1}}catch(e){console.log(e)}},toggleSelection(e){e?e.forEach(a=>{this.$refs.multipleTable.toggleRowSelection(a)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},handleCurrentChange(e){this.cur=Number(e),sessionStorage.setItem("cur",Number(e)),this.list()},toEdit(e){console.log(e);const{id:a,field_ename:i}=e;this.$router.push({name:"field-edit",query:{fid:a,mid:this.query.mid,table_name:i,model_name:this.model_name}})},delSome(){},async hasUse(e){return await q(e)},async handleDel(e){let{id:a}=e;try{(await this.hasUse(this.query.mid)).data.count===0?(await S(a)).code===200&&(this.$message({message:"\u6587\u7AE0\u5220\u9664\u6210\u529F ^_^",type:"success"}),this.list()):this.$message({message:"\u5F53\u524D\u6A21\u578B\u6B63\u5728\u4F7F\u7528\uFF0C\u5B57\u6BB5\u4E0D\u80FD\u5220\u9664 ^_^",type:"success"})}catch(i){console.log(i)}}}};function V(e,a,i,s,B,r){const p=o("router-link"),d=o("el-row"),l=o("el-table-column"),c=o("el-button"),h=o("el-table"),_=o("el-pagination"),f=D("loading");return u(),E(N,null,[t(d,{type:"flex",justify:"end"},{default:n(()=>[t(p,{class:"c-fff add-btn",to:{name:"field-add",query:{mid:e.query.mid,table_name:e.table_name,model_name:e.model_name}}},{default:n(()=>[T("\u65B0\u589E")]),_:1},8,["to"])]),_:1}),$((u(),x(h,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark",style:{width:"100%"},"row-key":"id",size:"small",onSelectionChange:r.handleSelectionChange},{default:n(()=>[t(l,{type:"selection",width:"55"}),t(l,{prop:"id",label:"\u7F16\u53F7"}),t(l,{prop:"field_cname",label:"\u4E2D\u6587\u540D\u79F0"}),t(l,{prop:"field_ename",label:"\u5B57\u6BB5\u540D\u79F0"}),t(l,{prop:"field_sort",label:"\u6392\u5E8F"}),t(l,{fixed:"right",label:"\u64CD\u4F5C",width:"150"},{default:n(m=>[t(c,{icon:s.Edit,circle:"",onClick:g=>r.toEdit(m.row)},null,8,["icon","onClick"]),t(c,{icon:s.Delete,circle:"",onClick:g=>r.handleDel(m.row)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[f,e.loading]]),t(d,{type:"flex",class:"mt-20",justify:"space-between"},{default:n(()=>[t(_,{background:"",layout:"prev, pager, next",onCurrentChange:r.handleCurrentChange,"pager-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])]),_:1})],64)}const ae=v(U,[["render",V]]);export{ae as default};
