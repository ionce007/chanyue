import{Y as b,P as C,v as S,M as D}from"./@element-plus.js";import{s as v,f as V,d as x}from"./category.js";import{_ as E,t as T,a as B}from"./index.js";import{ag as i,aq as $,o as s,c as d,Z as l,V as a,W as q,U as F,F as N,Y as m,t as U}from"./@vue.js";import"./api.js";import"./axios.js";import"./form-data.js";import"./element-plus.js";import"./lodash-es.js";import"./@vueuse.js";import"./@popperjs.js";import"./@ctrl.js";import"./dayjs.js";import"./async-validator.js";import"./memoize-one.js";import"./escape-html.js";import"./normalize-wheel-es.js";import"./@floating-ui.js";import"./pinia.js";import"./vue-router.js";import"./js-cookie.js";const Y={name:"category-index",setup(){return{Edit:b,Delete:C,View:S,Search:D}},data:()=>({keywords:"",loading:!0,tableData:[],multipleSelection:[]}),computed:{},created(){this.search()},methods:{clearSearch(){this.keywords="",this.tableData=[],this.multipleSelection=[],this.search()},async search(){try{const e=this.keywords;let t=await v(e);if(t.code===200){let p=T(t.data);console.log("data->",p),this.tableData=B(p),this.loading=!1}}catch(e){console.log(e)}},toggleSelection(e){e?e.forEach(t=>{this.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let t=e.id;this.$router.push({name:"category-edit",params:{id:t}})},async hasChild(e){try{let t=await V(e);if(t.code===200)return t.data.length>0}catch(t){console.log(t)}},async del(e){try{(await x(e)).code===200&&(this.$message({message:"栏目删除成功 ^_^",type:"success"}),this.clearSearch())}catch(t){console.log(t)}},delSome(){},handleDel(e){let t=e.id;if(this.hasChild(t).length>0)return this.$message({message:"我下面还有栏目啊 ^_^",type:"success"}),!1;this.del(t)}}},j={key:0},z={key:1},I={key:0},L={key:1};function M(e,t,p,h,P,n){const f=i("el-input"),c=i("el-button"),_=i("el-col"),g=i("router-link"),y=i("el-row"),r=i("el-table-column"),k=i("el-table"),w=$("loading");return s(),d(N,null,[l(y,{type:"flex",justify:"space-between"},{default:a(()=>[l(_,{span:18},{default:a(()=>[l(f,{class:"mr-10 w-auto",placeholder:"请输入内容","suffix-icon":h.Search,modelValue:e.keywords,"onUpdate:modelValue":t[0]||(t[0]=o=>e.keywords=o)},null,8,["suffix-icon","modelValue"]),l(c,{type:"primary",onClick:n.search,round:""},{default:a(()=>[m("搜索")]),_:1},8,["onClick"]),l(c,{onClick:n.clearSearch,round:""},{default:a(()=>[m("清空")]),_:1},8,["onClick"])]),_:1}),l(g,{class:"c-fff add-btn",to:"/category/add"},{default:a(()=>[m("新增")]),_:1})]),_:1}),q((s(),F(k,{ref:"multipleTable",data:e.tableData,"tooltip-effect":"dark","row-key":"id",size:"small","tree-props":{children:"children",hasChildren:"hasChildren"},onSelectionChange:n.handleSelectionChange},{default:a(()=>[l(r,{type:"selection"}),l(r,{prop:"id",label:"编号"}),l(r,{prop:"name",label:"名称"}),l(r,{prop:"type",label:"类型"},{default:a(o=>[o.row.type==0?(s(),d("p",j,"栏目")):(s(),d("p",z,"单页"))]),_:1}),l(r,{prop:"sort",label:"排序"},{default:a(o=>[m(U(o.row.sort),1)]),_:1}),l(r,{prop:"status",label:"状态"},{default:a(o=>[o.row.status==0?(s(),d("p",I,"显示")):(s(),d("p",L,"隐藏"))]),_:1}),l(r,{fixed:"right",label:"操作",width:"160"},{default:a(o=>[l(c,{icon:h.View,circle:"",onClick:u=>e.handleClick(o.row)},null,8,["icon","onClick"]),l(c,{icon:h.Edit,circle:"",onClick:u=>n.toEdit(o.row)},null,8,["icon","onClick"]),l(c,{icon:h.Delete,circle:"",onClick:u=>n.handleDel(o.row)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[w,e.loading]])],64)}const de=E(Y,[["render",M]]);export{de as default};
