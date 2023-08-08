System.register(["./element-plus-legacy.js","./category-legacy.js","./article-legacy.js","./@jsdawn-legacy.js","./tinymce-legacy.js","./tag-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./escape-html-legacy.js","./normalize-wheel-es-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,t,d,s,o,u,i,r,m,n,c,p,g,f,h,_,y,V,b,v,w,j,U,x,k,C,S,I,A,N,D,T,q,E,F,L,P,$,z,O,M,B,G,H,J,K,R;return{setters:[e=>{a=e.A,t=e.B,d=e.C,s=e.r,o=e.s,u=e.q,i=e.D,r=e.F,m=e.G,n=e.u,c=e.a,p=e.H,g=e.I,f=e.J,h=e.f,_=e.K,y=e.t,V=e.v,b=e.p,v=e.L},e=>{w=e.f},e=>{j=e.f,U=e.d,x=e.u},e=>{k=e._},e=>{C=e.t},e=>{S=e.s},e=>{I=e._,A=e.e,N=e.b,D=e.t,T=e.f,q=e.c,E=e.d},e=>{F=e.af,L=e.o,P=e.c,$=e.a,z=e.U,O=e.W,M=e.a1,B=e.X,G=e._,H=e.h,J=e.F,K=e.aa,R=e.a2},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var l=document.createElement("style");l.textContent=":deep(.tiny-textarea){height:436px}.cover div{width:120px;height:90px;margin:5px;cursor:pointer}.w-300{width:300px!important}\n",document.head.appendChild(l);const W={class:"mr-10 ml-10"},X={class:"mr-10 ml-10 mb-20"},Q={class:"cover row"};e("default",I({name:"article-edit",components:{Vue3Tinymce:k},data:()=>({setting:C,loading:!0,categorySelected:[],categoryProps:{checkStrictly:!0},activeName:"first",activeIndex:"0",category:[],cateList:[],autoImg:!1,autoDes:!1,picNum:1,taglist:[],params:{id:0,cid:0,sub_cid:[],title:"",short_title:"",tag_id:"",attr:[],seo_title:"",seo_keywords:"",seo_description:"",source:"",author:"",description:"",img:"",createdAt:new Date,updatedAt:new Date,content:"",status:"0",pv:0,link:""},field:[],fieldParams:{},dialogImageUrl:"",dialogVisible:!1,disabled:!1,paramsRules:{title:[{required:!0,message:"请输入栏目名称",trigger:"blur"},{min:2,max:50,message:"名称长度在 2 到 50 个字符之间",trigger:"blur"}]},cur:1,keywords:"",drawer:!1,drawerList:["/public/cover/01.jpg","/public/cover/02.jpg","/public/cover/03.jpg","/public/cover/04.jpg","/public/cover/05.jpg","/public/cover/06.jpg","/public/cover/07.jpg","/public/cover/08.jpg","/public/cover/09.jpg","/public/cover/10.jpg"]}),computed:{},async mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail(),await this.query(),this.searchTag()},unmounted(){},methods:{tinymce(){this.loading=!1},handleClick(e){this.activeIndex=e.index},setContent(e){this.params.content=e},selectCover(e){this.params.img=e},async searchTag(e){try{let l=await S(this.cur,e,100);if(200===l.code){let e=[];l.data.list.forEach((l=>{e.push({label:l.name,value:l.id})})),this.taglist=e}}catch(l){console.log(l)}},async query(){try{let e=await w();if(200===e.code){let l=e.data,a=A(this.params.cid,l);this.categorySelected=a,this.findField(this.params.cid);let t=N(D(l));this.cateList=N(l),this.category=[...t]}}catch(e){console.log(e)}},handleChange(e){-1!=e[0]?(this.params.cid=e[e.length-1],this.findField(this.params.cid)):this.field=[]},async findField(e){try{let l=await j(e);200===l.code&&(this.field=l.data.fields)}catch(l){console.log(l)}},async detail(){try{let e=await U(this.params.id);if(200===e.code){let l=e.data;l.attr=l.attr?l.attr.split(","):[],l.sub_cid=l.sub_cid?l.sub_cid.split(",").map((e=>Number(e))):[],l.tag_id=l.tag_id?l.tag_id.split(",").map((e=>Number(e))):[],l.status=l.status.toString(),l.updatedAt=new Date(l.createdAt),this.params=l,this.fieldParams=l.field,this.loading=!1}}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){if(e.size/1024/1024>2)return this.$message("上传文件必须小于1M"),!1},upload(e){200===e.code&&(this.params.img=e.data.path)},async update(){try{let e={...this.params};e.attr=e.attr.toString(),e.sub_cid=e.sub_cid.toString(),e.tag_id=e.tag_id.toString(),e.content=T(e.content),e.img||(e.img=q(e.content)[0]),e.description||(e.description=E(e.content).substr(0,255)),(await x({...e,field:this.fieldParams})).code&&(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1))}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,l,w,j,U,x){const k=a,C=t,S=d,I=s,A=o,N=u,D=i,T=r,q=m,E=n,Y=F("MostlyCloudy"),Z=c,ee=p,le=g,ae=f,te=h,de=_,se=y,oe=F("vue3-tinymce"),ue=V,ie=b,re=v;return L(),P(J,null,[$("div",W,[z(C,{modelValue:e.activeName,"onUpdate:modelValue":l[0]||(l[0]=l=>e.activeName=l),onTabClick:x.handleClick},{default:O((()=>[z(k,{label:"基本信息",name:"first"}),z(k,{label:"扩展信息",name:"second"})])),_:1},8,["modelValue","onTabClick"])]),$("div",X,[M((L(),B(ie,{ref:"params",model:e.params,"label-width":"90px"},{default:O((()=>[M($("div",null,[z(se,{gutter:20},{default:O((()=>[z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"文章栏目"},{default:O((()=>[z(S,{props:e.categoryProps,"show-all-levels":!1,modelValue:e.categorySelected,"onUpdate:modelValue":l[1]||(l[1]=l=>e.categorySelected=l),options:e.category,onChange:x.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"文章标题",prop:"title",rules:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:1,max:50,message:"栏目不能超过50个字",trigger:"blur"}]},{default:O((()=>[z(N,{modelValue:e.params.title,"onUpdate:modelValue":l[2]||(l[2]=l=>e.params.title=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"tag标签"},{default:O((()=>[z(D,{modelValue:e.params.tag_id,"onUpdate:modelValue":l[3]||(l[3]=l=>e.params.tag_id=l),options:e.taglist,placeholder:"请选择标签",style:{width:"240px"},multiple:"",filterable:"",remote:"","remote-method":x.searchTag},null,8,["modelValue","options","remote-method"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"内容属性"},{default:O((()=>[z(q,{modelValue:e.params.attr,"onUpdate:modelValue":l[4]||(l[4]=l=>e.params.attr=l),onChange:x.handleAttr},{default:O((()=>[z(T,{label:"1"},{default:O((()=>[G("头条")])),_:1}),z(T,{label:"2"},{default:O((()=>[G("推荐")])),_:1}),z(T,{label:"3"},{default:O((()=>[G("轮播")])),_:1}),z(T,{label:"4"},{default:O((()=>[G("热门")])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"发布时间"},{default:O((()=>[z(E,{modelValue:e.params.updatedAt,"onUpdate:modelValue":l[5]||(l[5]=l=>e.params.updatedAt=l),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:O((()=>[z(I,{class:"row",label:"缩略图"},{default:O((()=>[z(le,{class:"avatar-uploader",action:"/api/upload","on-success":x.upload,"show-file-list":!1,"before-upload":x.beforeUpload},{default:O((()=>[z(ee,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，尺寸240*180，大小50k内"},{reference:O((()=>[z(Z,{class:"avatar-uploader-icon"},{default:O((()=>[z(Y)])),_:1})])),_:1})])),_:1},8,["on-success","before-upload"]),e.params.img?(L(),B(ee,{key:0,placement:"right",width:400,trigger:"hover"},{reference:O((()=>[z(ae,{class:"avatar-uploader-icon pointer ml-10",src:e.params.img},null,8,["src"])])),default:O((()=>[z(ae,{style:{width:"100%"},src:e.params.img},null,8,["src"])])),_:1})):H("",!0),z(te,{type:"primary",class:"ml-10",onClick:l[6]||(l[6]=l=>e.drawer=!0)},{default:O((()=>[G(" 默认封面图 ")])),_:1}),z(de,{modelValue:e.drawer,"onUpdate:modelValue":l[7]||(l[7]=l=>e.drawer=l),title:"默认封面图",class:"w-300","with-header":!1},{default:O((()=>[$("div",Q,[(L(!0),P(J,null,K(e.drawerList,((e,l)=>(L(),B(ae,{key:l,src:e,onClick:l=>x.selectCover(e),fit:"fill"},null,8,["src","onClick"])))),128))])])),_:1},8,["modelValue"]),z(N,{class:"ml-10 flex-1",modelValue:e.params.img,"onUpdate:modelValue":l[8]||(l[8]=l=>e.params.img=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),z(I,{label:"内容摘要"},{default:O((()=>[z(N,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:e.params.description,"onUpdate:modelValue":l[9]||(l[9]=l=>e.params.description=l)},null,8,["modelValue"])])),_:1}),z(I,{label:"文章内容"},{default:O((()=>[z(oe,{modelValue:e.params.content,"onUpdate:modelValue":l[10]||(l[10]=l=>e.params.content=l),setting:e.setting,onInit:x.tinymce,"script-src":"/public/admin/tinymce/tinymce.min.js"},null,8,["modelValue","setting","onInit"])])),_:1}),z(se,{gutter:20},{default:O((()=>[z(A,{sm:24,md:12,lg:8},{default:O((()=>[z(I,{label:"自动封面"},{default:O((()=>[z(T,{modelValue:e.autoImg,"onUpdate:modelValue":l[12]||(l[12]=l=>e.autoImg=l)},{default:O((()=>[G(" 文章第 "),z(N,{modelValue:e.picNum,"onUpdate:modelValue":l[11]||(l[11]=l=>e.picNum=l),class:"w-80 mr-8 ml-8",placeholder:"请输入内容"},null,8,["modelValue"]),G("张图 ")])),_:1},8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12,lg:8},{default:O((()=>[z(I,{label:"提取描述"},{default:O((()=>[z(T,{modelValue:e.autoDes,"onUpdate:modelValue":l[13]||(l[13]=l=>e.autoDes=l)},{default:O((()=>[G("提取文章描述")])),_:1},8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12,lg:8},{default:O((()=>[z(I,{label:"是否显示"},{default:O((()=>[z(ue,{modelValue:e.params.status,"onUpdate:modelValue":l[14]||(l[14]=l=>e.params.status=l),label:"0"},{default:O((()=>[G("发布")])),_:1},8,["modelValue"]),z(ue,{modelValue:e.params.status,"onUpdate:modelValue":l[15]||(l[15]=l=>e.params.status=l),label:"1"},{default:O((()=>[G("不发布")])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[R,0==e.activeIndex]]),M($("div",null,[z(se,{gutter:20},{default:O((()=>[z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"短标题",prop:"name"},{default:O((()=>[z(N,{modelValue:e.params.short_title,"onUpdate:modelValue":l[16]||(l[16]=l=>e.params.short_title=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"SEO标题"},{default:O((()=>[z(N,{modelValue:e.params.seo_title,"onUpdate:modelValue":l[17]||(l[17]=l=>e.params.seo_title=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"SEO关键词"},{default:O((()=>[z(N,{modelValue:e.params.seo_keywords,"onUpdate:modelValue":l[18]||(l[18]=l=>e.params.seo_keywords=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"SEO描述"},{default:O((()=>[z(N,{modelValue:e.params.seo_description,"onUpdate:modelValue":l[19]||(l[19]=l=>e.params.seo_description=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"来源"},{default:O((()=>[z(N,{modelValue:e.params.source,"onUpdate:modelValue":l[20]||(l[20]=l=>e.params.source=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"作者"},{default:O((()=>[z(N,{modelValue:e.params.author,"onUpdate:modelValue":l[21]||(l[21]=l=>e.params.author=l)},null,8,["modelValue"])])),_:1})])),_:1}),z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"外链跳转"},{default:O((()=>[z(N,{modelValue:e.params.link,"onUpdate:modelValue":l[22]||(l[22]=l=>e.params.link=l),max:"120"},null,8,["modelValue"])])),_:1})])),_:1}),(L(!0),P(J,null,K(e.field,((e,l)=>(L(),B(A,{sm:24,md:12,lg:8,key:l},{default:O((()=>[z(I,{label:e.field_cname},{default:O((()=>["1"===e.field_type?(L(),B(N,{key:0,modelValue:e.field_values,"onUpdate:modelValue":l=>e.field_values=l,max:"120"},null,8,["modelValue","onUpdate:modelValue"])):"2"===e.field_type?(L(),B(N,{key:1,type:"textarea",rows:3,placeholder:"请输入内容",modelValue:e.field_values,"onUpdate:modelValue":l=>e.field_values=l},null,8,["modelValue","onUpdate:modelValue"])):(L(),B(N,{key:2,type:"textarea",rows:3,placeholder:"请输入内容",autosize:"false",modelValue:e.field_values,"onUpdate:modelValue":l=>e.field_values=l},null,8,["modelValue","onUpdate:modelValue"]))])),_:2},1032,["label"])])),_:2},1024)))),128)),z(A,{sm:24,md:12},{default:O((()=>[z(I,{label:"浏览数"},{default:O((()=>[z(N,{modelValue:e.params.pv,"onUpdate:modelValue":l[23]||(l[23]=l=>e.params.pv=l)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})],512),[[R,1==e.activeIndex]]),z(I,null,{default:O((()=>[z(te,{type:"primary",onClick:l[24]||(l[24]=e=>x.submit("params"))},{default:O((()=>[G("保存")])),_:1})])),_:1})])),_:1},8,["model"])),[[re,e.loading]])])],64)}]]))}}}));
//# sourceMappingURL=edit-legacy2.js.map
