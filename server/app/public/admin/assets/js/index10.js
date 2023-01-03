import{Y as b,P as C,v as y,M as w}from"./@element-plus.js";import{l as k,d as x}from"./admin.js";import{_ as S,g as D}from"./index.js";import{ag as i,o as v,c as E,Z as t,V as a,a as T,F as $,Y as d,t as p}from"./@vue.js";import"./api.js";import"./axios.js";import"./form-data.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const B={name:"admin-index",setup(){return{Edit:b,Delete:C,View:y,Search:w}},data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1,username:""}),computed:{},created(){this.username=D("username"),this.list()},methods:{async list(){try{let e=await k(this.cur);e.code===200&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.list()},toggleSelection(e){e?e.forEach(l=>{this.$refs.multipleTable.toggleRowSelection(l)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let l=e.id;this.$router.push({name:"admin-edit",params:{id:l}})},async handleDel(e){let l=e.id;try{this.$confirm("这么疯狂，要删管理员？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{(await x(l)).code===200&&(this.$message({message:"删除成功 ^_^",type:"success"}),this.list())}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})}catch(s){console.log(s)}}}},V={class:"mr-10 ml-10"};function N(e,l,s,m,j,r){const h=i("router-link"),c=i("el-row"),o=i("el-table-column"),u=i("el-button"),f=i("el-table"),_=i("el-pagination");return v(),E($,null,[t(c,{type:"flex",justify:"end"},{default:a(()=>[t(h,{class:"c-fff add-btn",to:"/admin/add"},{default:a(()=>[d("新增")]),_:1})]),_:1}),T("div",V,[t(c,null,{default:a(()=>[t(f,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:r.handleSelectionChange},{default:a(()=>[t(o,{type:"selection"}),t(o,{prop:"id",label:"编号"}),t(o,{prop:"username",label:"管理员"}),t(o,{prop:"status",label:"状态"},{default:a(n=>[d(p(n.row.status==1?"启用":"关闭"),1)]),_:1}),t(o,{prop:"createdAt",label:"发布时间",width:"160"},{default:a(n=>[d(p(n.row.createdAt),1)]),_:1}),t(o,{fixed:"right",label:"操作"},{default:a(n=>[t(u,{icon:m.Edit,circle:"",onClick:g=>r.toEdit(n.row)},null,8,["icon","onClick"]),t(u,{icon:m.Delete,circle:"",onClick:g=>r.handleDel(n.row)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"]),t(c,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:a(()=>[t(_,{background:"",layout:"prev, pager, next",onCurrentChange:r.handleCurrentChange,"pager-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])]),_:1})]),_:1})])],64)}const te=S(B,[["render",N]]);export{te as default};
