import{Y as b,P as y,v as k,M as w}from"./@element-plus.js";import{s as S,d as x}from"./frag.js";import{_ as D}from"./index.js";import{ag as l,o as V,c as v,Z as t,V as o,F as E,Y as p,t as T}from"./@vue.js";import"./api.js";import"./axios.js";import"./form-data.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const j={name:"frag-index",setup(){return{Edit:b,Delete:y,View:k,Search:w}},data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.search()},methods:{async search(){try{let e=await S(this.cur,this.keywords);e.code===200&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.search()},toggleSelection(e){e?e.forEach(a=>{this.$refs.multipleTable.toggleRowSelection(a)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let a=e.id;this.$router.push({name:"frag-edit",params:{id:a}})},async handleDel(e){let a=e.id;try{(await x(a)).code===200&&(this.$message({message:"文章删除成功 ^_^",type:"success"}),this.search())}catch(c){console.log(c)}}}};function z(e,a,c,s,A,r){const u=l("el-input"),d=l("el-button"),f=l("el-col"),h=l("router-link"),m=l("el-row"),n=l("el-table-column"),_=l("el-table"),g=l("el-pagination");return V(),v(E,null,[t(m,{type:"flex",justify:"space-between"},{default:o(()=>[t(f,{span:18},{default:o(()=>[t(u,{class:"mr-10 w-auto",placeholder:"请输入内容","suffix-icon":s.Search,clearable:"",onClear:r.search,modelValue:e.keywords,"onUpdate:modelValue":a[0]||(a[0]=i=>e.keywords=i)},null,8,["suffix-icon","onClear","modelValue"]),t(d,{type:"primary",onClick:r.search,round:""},{default:o(()=>[p("搜索")]),_:1},8,["onClick"])]),_:1}),t(h,{class:"c-fff add-btn",to:"/frag/add"},{default:o(()=>[p("新增")]),_:1})]),_:1}),t(_,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",size:"small",onSelectionChange:r.handleSelectionChange},{default:o(()=>[t(n,{type:"selection"}),t(n,{prop:"id",label:"编号"}),t(n,{prop:"name",label:"名称"}),t(n,{prop:"mark",label:"标识"}),t(n,{prop:"createdAt",label:"发布时间"},{default:o(i=>[p(T(i.row.createdAt),1)]),_:1}),t(n,{fixed:"right",label:"操作"},{default:o(i=>[t(d,{icon:s.Edit,circle:"",onClick:C=>r.toEdit(i.row)},null,8,["icon","onClick"]),t(d,{icon:s.Delete,circle:"",onClick:C=>r.handleDel(i.row)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"]),t(m,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:o(()=>[t(g,{background:"",layout:"prev, pager, next",onCurrentChange:r.handleCurrentChange,"pager-size":10,total:e.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])]),_:1})],64)}const ee=D(j,[["render",z]]);export{ee as default};