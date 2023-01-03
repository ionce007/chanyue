import{Y as g,P as b,v as C,M as y}from"./@element-plus.js";import{l as w,d as k}from"./message.js";import{_ as S}from"./index.js";import{ag as o,o as x,c as D,Z as t,V as n,F as v,Y as m,t as E}from"./@vue.js";import"./api.js";import"./axios.js";import"./form-data.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const T={name:"message-index",setup(){return{Edit:g,Delete:b,View:C,Search:y}},data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.list()},methods:{async list(){try{let e=await w(this.cur);e.code===200&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.list()},toggleSelection(e){e?e.forEach(a=>{this.$refs.multipleTable.toggleRowSelection(a)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let a=e.id;this.$router.push({name:"message-edit",params:{id:a}})},async handleDel(e){let a=e.id;try{(await k(a)).code===200&&(this.$message({message:"标签删除成功 ^_^",type:"success"}),this.list())}catch(c){console.log(c)}}}};function V(e,a,c,s,$,i){const u=o("router-link"),d=o("el-row"),l=o("el-table-column"),p=o("el-button"),h=o("el-table"),_=o("el-pagination");return x(),D(v,null,[t(d,{type:"flex",justify:"end"},{default:n(()=>[t(u,{class:"c-fff add-btn",to:"/message/add"},{default:n(()=>[m("新增")]),_:1})]),_:1}),t(h,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:i.handleSelectionChange},{default:n(()=>[t(l,{type:"selection"}),t(l,{prop:"id",label:"编号"}),t(l,{prop:"name",label:"标题"}),t(l,{prop:"tel",label:"手机号"}),t(l,{prop:"wx",label:"微信"}),t(l,{prop:"createdAt",label:"发布时间"},{default:n(r=>[m(E(r.row.createdAt),1)]),_:1}),t(l,{fixed:"right",label:"操作"},{default:n(r=>[t(p,{icon:s.Edit,circle:"",onClick:f=>i.toEdit(r.row)},null,8,["icon","onClick"]),t(p,{icon:s.Delete,circle:"",onClick:f=>i.handleDel(r.row)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"]),t(d,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:n(()=>[t(_,{background:"",layout:"prev, pager, next",onCurrentChange:i.handleCurrentChange,"pager-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])]),_:1})],64)}const W=S(T,[["render",V]]);export{W as default};
