System.register(["./index-legacy.js"],(function(e,t){"use strict";var a,s;return{setters:[e=>{a=e.h,s=e.A}],execute:function(){e("l",(e=>a({url:`${s.BASE_API}/api/message/list?cur=${e}&pageSize=10`,method:"get"}))),e("c",(e=>a({url:`${s.BASE_API}/api/message/create`,method:"post",data:e}))),e("a",(e=>a({url:`${s.BASE_API}/api/message/delete?id=${e}`,method:"get"}))),e("u",(e=>a({url:`${s.BASE_API}/api/message/update`,method:"post",data:e}))),e("d",(e=>a({url:`${s.BASE_API}/api/message/detail?id=${e}`,method:"get"})))}}}));
