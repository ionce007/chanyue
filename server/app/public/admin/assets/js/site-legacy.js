System.register(["./api-legacy.js"],(function(t,e){"use strict";var i,n;return{setters:[function(t){i=t.h,n=t.a}],execute:function(){t("s",(function(){return i({url:"".concat(n.API_URL,"/api/site/find"),method:"get"})})),t("u",(function(t){var e=t.id,a=t.name,o=t.domain,r=t.email,c=t.icp,u=t.code;return i({url:"".concat(n.API_URL,"/api/auth/site/updateInfo"),method:"post",data:{id:e,name:a,domain:o,email:r,icp:c,code:u}})})),t("a",(function(t){var e=t.id,a=t.title,o=t.keywords,r=t.description;return i({url:"".concat(n.API_URL,"/api/auth/site/updateSeo"),method:"post",data:{id:e,title:a,keywords:o,description:r}})})),t("r",(function(){return i({url:"".concat(n.API_URL,"/api/site/runEnv"),method:"get"})}))}}}));
