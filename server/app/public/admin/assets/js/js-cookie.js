/*! js-cookie v3.0.1 | MIT */function d(r){for(var t=1;t<arguments.length;t++){var f=arguments[t];for(var p in f)r[p]=f[p]}return r}var v={read:function(r){return r[0]==='"'&&(r=r.slice(1,-1)),r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(r){return encodeURIComponent(r).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function s(r,t){function f(n,c,e){if(!(typeof document>"u")){e=d({},t,e),typeof e.expires=="number"&&(e.expires=new Date(Date.now()+e.expires*864e5)),e.expires&&(e.expires=e.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var i in e)e[i]&&(o+="; "+i,e[i]!==!0&&(o+="="+e[i].split(";")[0]));return document.cookie=n+"="+r.write(c,n)+o}}function p(n){if(!(typeof document>"u"||arguments.length&&!n)){for(var c=document.cookie?document.cookie.split("; "):[],e={},o=0;o<c.length;o++){var i=c[o].split("="),a=i.slice(1).join("=");try{var u=decodeURIComponent(i[0]);if(e[u]=r.read(a,u),n===u)break}catch(g){}}return n?e[n]:e}}return Object.create({set:f,get:p,remove:function(n,c){f(n,"",d({},c,{expires:-1}))},withAttributes:function(n){return s(this.converter,d({},this.attributes,n))},withConverter:function(n){return s(d({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(r)}})}var m=s(v,{path:"/"});export{m as a};
