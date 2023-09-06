System.register(["./spark-md5-legacy.js"],(function(t,e){"use strict";var r;return{setters:[t=>{r=t.S}],execute:function(){var t,e,n=globalThis&&globalThis.__extends||(t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)},function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)});!function(t){t.InvalidFile="InvalidFile",t.InvalidToken="InvalidToken",t.InvalidMetadata="InvalidMetadata",t.InvalidChunkSize="InvalidChunkSize",t.InvalidCustomVars="InvalidCustomVars",t.NotAvailableUploadHost="NotAvailableUploadHost",t.ReadCacheFailed="ReadCacheFailed",t.InvalidCacheData="InvalidCacheData",t.WriteCacheFailed="WriteCacheFailed",t.RemoveCacheFailed="RemoveCacheFailed",t.GetCanvasContextFailed="GetCanvasContextFailed",t.UnsupportedFileType="UnsupportedFileType",t.FileReaderReadFailed="FileReaderReadFailed",t.NotAvailableXMLHttpRequest="NotAvailableXMLHttpRequest",t.InvalidProgressEventTarget="InvalidProgressEventTarget",t.RequestError="RequestError"}(e||(e={}));var o=function(t,e){this.name=t,this.message=e,this.stack=(new Error).stack},i=function(t){function r(r,n,o,i){var a=t.call(this,e.RequestError,o)||this;return a.code=r,a.reqId=n,a.isRequestError=!0,a.data=i,a}return n(r,t),r}(o),a=function(t){function e(e,r){return void 0===r&&(r=""),t.call(this,0,r,e)||this}return n(e,t),e}(i),s=function(){function t(t,e){this.runTask=t,this.limit=e,this.aborted=!1,this.queue=[],this.processing=[]}return t.prototype.enqueue=function(t){var e=this;return new Promise((function(r,n){e.queue.push({task:t,resolve:r,reject:n}),e.check()}))},t.prototype.run=function(t){var e=this;this.queue=this.queue.filter((function(e){return e!==t})),this.processing.push(t),this.runTask(t.task).then((function(){e.processing=e.processing.filter((function(e){return e!==t})),t.resolve(),e.check()}),(function(e){return t.reject(e)}))},t.prototype.check=function(){var t=this;if(!this.aborted){var e=this.processing.length,r=this.limit-e;this.queue.slice(0,r).forEach((function(e){t.run(e)}))}},t.prototype.abort=function(){this.queue=[],this.aborted=!0},t}(),l=globalThis&&globalThis.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},u.apply(this,arguments)};function c(t){var e,r,n,o,i,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s=0,l=0,u="",c=[];if(!t)return t;t=function(t){if(null==t)return"";var e,r,n,o=t+"",i="";e=r=0,n=o.length;for(var a=0;a<n;a++){var s=o.charCodeAt(a),l=null;if(s<128)r++;else if(s>127&&s<2048)l=String.fromCharCode(s>>6|192,63&s|128);else if((63488&s^55296)>0)l=String.fromCharCode(s>>12|224,s>>6&63|128,63&s|128);else{if((64512&s^55296)>0)throw new RangeError("Unmatched trail surrogate at "+a);var u=o.charCodeAt(++a);if((64512&u^56320)>0)throw new RangeError("Unmatched lead surrogate at "+(a-1));s=((1023&s)<<10)+(1023&u)+65536,l=String.fromCharCode(s>>18|240,s>>12&63|128,s>>6&63|128,63&s|128)}null!==l&&(r>e&&(i+=o.slice(e,r)),i+=l,e=r=a+1)}return r>e&&(i+=o.slice(e,n)),i}(t+"");do{e=(i=t.charCodeAt(s++)<<16|t.charCodeAt(s++)<<8|t.charCodeAt(s++))>>18&63,r=i>>12&63,n=i>>6&63,o=63&i,c[l++]=a.charAt(e)+a.charAt(r)+a.charAt(n)+a.charAt(o)}while(s<t.length);switch(u=c.join(""),t.length%3){case 1:u=u.slice(0,-2)+"==";break;case 2:u=u.slice(0,-1)+"="}return u}function h(t){var e,r,n,o,i,a,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",l=0,u=0,c=[];if(!t)return t;t+="";do{e=(a=s.indexOf(t.charAt(l++))<<18|s.indexOf(t.charAt(l++))<<12|(o=s.indexOf(t.charAt(l++)))<<6|(i=s.indexOf(t.charAt(l++))))>>16&255,r=a>>8&255,n=255&a,c[u++]=64===o?String.fromCharCode(e):64===i?String.fromCharCode(e,r):String.fromCharCode(e,r,n)}while(l<t.length);return function(t){var e=[],r=0,n=0,o=0;for(t+="";r<t.length;){o=0,(n=255&t.charCodeAt(r))<=191?(n&=127,o=1):n<=223?(n&=31,o=2):n<=239?(n&=15,o=3):(n&=7,o=4);for(var i=1;i<o;++i)n=n<<6|63&t.charCodeAt(i+r);4===o?(n-=65536,e.push(String.fromCharCode(55296|n>>10&1023)),e.push(String.fromCharCode(56320|1023&n))):e.push(String.fromCharCode(n)),r+=o}return e.join("")}(c.join(""))}function p(t){return(t=c(t)).replace(/\//g,"_").replace(/\+/g,"-")}!function(t){function e(e,r,n){var o=t.call(this)||this;return o.isStopped=!1,o.destination=e&&"object"==typeof e?e:u(u(u({},e&&{next:e}),r&&{error:r}),n&&{complete:n}),o}l(e,t),e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype.next=function(t){!this.isStopped&&this.destination.next&&this.destination.next(t)},e.prototype.error=function(t){!this.isStopped&&this.destination.error&&(this.isStopped=!0,this.destination.error(t))},e.prototype.complete=function(t){!this.isStopped&&this.destination.complete&&(this.isStopped=!0,this.destination.complete(t))}}(function(){function t(){this.closed=!1}return t.prototype.unsubscribe=function(){this.closed||(this.closed=!0,this._unsubscribe&&this._unsubscribe())},t.prototype.add=function(t){this._unsubscribe=t},t}());var f,d=globalThis&&globalThis.__assign||function(){return d=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},d.apply(this,arguments)},g=globalThis&&globalThis.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{l(n.next(t))}catch(e){i(e)}}function s(t){try{l(n.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}l((n=n.apply(t,e||[])).next())}))},y=globalThis&&globalThis.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},b=Math.pow(1024,2);function v(t,r){try{localStorage.removeItem(t)}catch(n){r.warn(new o(e.RemoveCacheFailed,"removeLocalFileInfo failed. key: "+t))}}function m(t){return{Authorization:"UpToken "+t}}function w(t){var e=m(t);return d({"content-type":"application/json"},e)}function k(t){return g(this,void 0,void 0,(function(){var e,n;return y(this,(function(o){switch(o.label){case 0:return[4,_(t)];case 1:return e=o.sent(),(n=new r.ArrayBuffer).append(e),[2,n.end()]}}))}))}function _(t){return new Promise((function(r,n){var i=new FileReader;i.onload=function(t){if(t.target){var i=t.target.result;r(i)}else n(new o(e.InvalidProgressEventTarget,"progress event target is undefined"))},i.onerror=function(){n(new o(e.FileReaderReadFailed,"fileReader read failed"))},i.readAsArrayBuffer(t)}))}function T(t,r){return new Promise((function(n,s){var l=function(){if(window.XMLHttpRequest)return new XMLHttpRequest;if(window.ActiveXObject)return new window.ActiveXObject("Microsoft.XMLHTTP");throw new o(e.NotAvailableXMLHttpRequest,"the current environment does not support.")}();if(l.open(r.method,t),r.onCreate&&r.onCreate(l),r.headers){var u=r.headers;Object.keys(u).forEach((function(t){l.setRequestHeader(t,u[t])}))}l.upload.addEventListener("progress",(function(t){t.lengthComputable&&r.onProgress&&r.onProgress({loaded:t.loaded,total:t.total})})),l.onreadystatechange=function(){var t=l.responseText;if(4===l.readyState){var e=l.getResponseHeader("x-reqId")||"";if(0!==l.status)if(200===l.status)try{n({data:JSON.parse(t),reqId:e})}catch(u){s(u)}else{var r="xhr request failed, code: "+l.status;t&&(r+=" response: "+t);var o=void 0;try{o=JSON.parse(t)}catch(f){}s(new i(l.status,e,r,o))}else s(new a("network error.",e))}},l.send(r.body)}))}function x(t){if(t&&t.match){var e=t.match(/(^https?)/);if(!e)return"";var r=e[1];return(e=t.match(/^https?:\/\/([^:^/]*):(\d*)/))?e[2]:"http"===r?"80":"443"}return""}function C(t){if(t&&t.match){var e=t.match(/^https?:\/\/([^:^/]*)/);return e?e[1]:""}return""}function P(t){if(!t)throw new o(e.InvalidToken,"invalid token.");var r=t.split(":");if(1===r.length)throw new o(e.InvalidToken,"invalid token segments.");var n=r.length>3?r[1]:r[0];if(!n)throw new o(e.InvalidToken,"missing assess key field.");var i=null;try{i=JSON.parse(h(r[r.length-1].replace(/_/g,"/").replace(/-/g,"+")))}catch(s){throw new o(e.InvalidToken,"token parse failed.")}if(null==i)throw new o(e.InvalidToken,"putPolicy is null.");if(null==i.scope)throw new o(e.InvalidToken,"scope field is null.");var a=i.scope.split(":")[0];if(!a)throw new o(e.InvalidToken,"resolve bucketName failed.");return{assessKey:n,bucketName:a,scope:i.scope}}var I="z1",O="z2",S="na0",z="as0",A="cn-east-2";(f={}).z0={srcUphost:["up.qiniup.com"],cdnUphost:["upload.qiniup.com"]},f[I]={srcUphost:["up-z1.qiniup.com"],cdnUphost:["upload-z1.qiniup.com"]},f[O]={srcUphost:["up-z2.qiniup.com"],cdnUphost:["upload-z2.qiniup.com"]},f[S]={srcUphost:["up-na0.qiniup.com"],cdnUphost:["upload-na0.qiniup.com"]},f[z]={srcUphost:["up-as0.qiniup.com"],cdnUphost:["upload-as0.qiniup.com"]},f[A]={srcUphost:["up-cn-east-2.qiniup.com"],cdnUphost:["upload-cn-east-2.qiniup.com"]};var E=globalThis&&globalThis.__assign||function(){return E=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},E.apply(this,arguments)};function U(t,e,r){var n=r.url,o=r.id;return n+"/buckets/"+t+"/objects/"+(null!=e?p(e):"~")+"/uploads/"+o}function j(t,e,r,n,o){var i=U(P(t).bucketName,e,n)+"/"+r,a=function(t){var e=m(t);return d({"content-type":"application/octet-stream"},e)}(t);return o.md5&&(a["Content-MD5"]=o.md5),T(i,E(E({},o),{method:"PUT",headers:a}))}globalThis&&globalThis.__awaiter,globalThis&&globalThis.__generator;var q=globalThis&&globalThis.__assign||function(){return q=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},q.apply(this,arguments)},F=globalThis&&globalThis.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{l(n.next(t))}catch(e){i(e)}}function s(t){try{l(n.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}l((n=n.apply(t,e||[])).next())}))},L=globalThis&&globalThis.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},R=globalThis&&globalThis.__read||function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,i=r.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(s){o={error:s}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},H=globalThis&&globalThis.__spread||function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(R(arguments[e]));return t},N=[0,502,503,504,599],D=H(N,[612]),M=Math.pow(1024,3),V=function(){function t(t,e,r,n){this.hostPool=r,this.logger=n,this.aborted=!1,this.retryCount=0,this.xhrList=[],this.config=t.config,n.info("config inited.",this.config),this.putExtra=q({fname:""},t.putExtra),n.info("putExtra inited.",this.putExtra),this.key=t.key,this.file=t.file,this.token=t.token,this.onData=e.onData,this.onError=e.onError,this.onComplete=e.onComplete;try{var o=P(this.token);this.bucketName=o.bucketName,this.assessKey=o.assessKey}catch(i){n.error("get putPolicy from token failed.",i),this.onError(i)}}return t.prototype.checkAndUpdateUploadHost=function(){return F(this,void 0,void 0,(function(){var t;return L(this,(function(r){switch(r.label){case 0:return this.logger.info("get available upload host."),[4,this.hostPool.getUp(this.assessKey,this.bucketName,this.config.upprotocol)];case 1:if(null==(t=r.sent()))throw new o(e.NotAvailableUploadHost,"no available upload host.");return null!=this.uploadHost&&this.uploadHost.host!==t.host?this.logger.warn("host switches from "+this.uploadHost.host+" to "+t.host+"."):this.logger.info("use host "+t.host+"."),this.uploadHost=t,[2]}}))}))},t.prototype.checkAndUnfreezeHost=function(){this.logger.info("check unfreeze host."),null!=this.uploadHost&&this.uploadHost.isFrozen()&&(this.logger.warn(this.uploadHost.host+" will be unfrozen."),this.uploadHost.unfreeze())},t.prototype.checkAndFreezeHost=function(t){this.logger.info("check freeze host."),t instanceof i&&null!=this.uploadHost&&N.includes(t.code)&&(this.logger.warn(this.uploadHost.host+" will be temporarily frozen."),this.uploadHost.freeze())},t.prototype.handleError=function(t){this.logger.error(t.message),this.onError(t)},t.prototype.putFile=function(){return F(this,void 0,void 0,(function(){var t,r,n;return L(this,(function(a){switch(a.label){case 0:if(this.aborted=!1,this.putExtra.fname||(this.logger.info("use file.name as fname."),this.putExtra.fname=this.file.name),this.file.size>1e4*M)return this.handleError(new o(e.InvalidFile,"file size exceed maximum value 10000G")),[2];if(this.putExtra.customVars&&(s=this.putExtra.customVars,!Object.keys(s).every((function(t){return 0===t.indexOf("x:")}))))return this.handleError(new o(e.InvalidCustomVars,"customVars key should start width x:")),[2];if(this.putExtra.metadata&&!function(t){return Object.keys(t).every((function(t){return 0===t.indexOf("x-qn-meta-")}))}(this.putExtra.metadata))return this.handleError(new o(e.InvalidMetadata,"metadata key should start with x-qn-meta-")),[2];a.label=1;case 1:return a.trys.push([1,4,,5]),this.uploadAt=(new Date).getTime(),[4,this.checkAndUpdateUploadHost()];case 2:return a.sent(),[4,this.run()];case 3:return t=a.sent(),this.onComplete(t.data),this.checkAndUnfreezeHost(),this.sendLog(t.reqId,200),[2];case 4:return r=a.sent(),this.aborted?(this.logger.warn("upload is aborted."),this.sendLog("",-2),[2]):(this.clear(),this.logger.error(r),r instanceof i&&(this.sendLog(r.reqId,r.code),this.checkAndFreezeHost(r),n=++this.retryCount<=this.config.retryCount,D.includes(r.code)&&n)?(this.logger.warn("error auto retry: "+this.retryCount+"/"+this.config.retryCount+"."),this.putFile(),[2]):(this.onError(r),[3,5]));case 5:return[2]}var s}))}))},t.prototype.clear=function(){this.xhrList.forEach((function(t){t.onreadystatechange=null,t.abort()})),this.xhrList=[],this.logger.info("cleanup uploading xhr.")},t.prototype.stop=function(){this.logger.info("aborted."),this.clear(),this.aborted=!0},t.prototype.addXhr=function(t){this.xhrList.push(t)},t.prototype.sendLog=function(t,e){var r,n;this.logger.report({code:e,reqId:t,remoteIp:"",upType:"jssdk-h5",size:this.file.size,time:Math.floor(this.uploadAt/1e3),port:x(null===(r=this.uploadHost)||void 0===r?void 0:r.getUrl()),host:C(null===(n=this.uploadHost)||void 0===n?void 0:n.getUrl()),bytesSent:this.progress?this.progress.total.loaded:0,duration:Math.floor(((new Date).getTime()-this.uploadAt)/1e3)})},t.prototype.getProgressInfoItem=function(t,e,r){return q({size:e,loaded:t,percent:t/e*100},null==r?{}:{fromCache:r})},t}(),B=globalThis&&globalThis.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),X=globalThis&&globalThis.__assign||function(){return X=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},X.apply(this,arguments)},G=globalThis&&globalThis.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{l(n.next(t))}catch(e){i(e)}}function s(t){try{l(n.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}l((n=n.apply(t,e||[])).next())}))},K=globalThis&&globalThis.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};!function(t){function r(){return null!==t&&t.apply(this,arguments)||this}B(r,t),r.prototype.run=function(){return G(this,void 0,void 0,(function(){var t,r,n,a,l,u=this;return K(this,(function(c){switch(c.label){case 0:if(this.logger.info("start run Resume."),!this.config.chunkSize||(h=this.config.chunkSize,!/^[1-9]\d*$/.test(String(h))))throw new o(e.InvalidChunkSize,"chunkSize must be a positive integer");if(this.config.chunkSize>1024)throw new o(e.InvalidChunkSize,"chunkSize maximum value is 1024");return[4,this.initBeforeUploadChunks()];case 1:c.sent(),t=new s((function(e){return G(u,void 0,void 0,(function(){return K(this,(function(r){switch(r.label){case 0:if(this.aborted)throw t.abort(),new Error("pool is aborted");return[4,this.uploadChunk(e)];case 1:return r.sent(),[2]}}))}))}),this.config.concurrentRequestLimit),r=null,n=this.getLocalKey(),a=this.chunks.map((function(e,r){return t.enqueue({chunk:e,index:r})})),c.label=2;case 2:return c.trys.push([2,5,,6]),[4,Promise.all(a)];case 3:return c.sent(),[4,this.mkFileReq()];case 4:return r=c.sent(),[3,6];case 5:throw(l=c.sent())instanceof i&&(612===l.code||400===l.code)&&v(n,this.logger),l;case 6:return v(n,this.logger),[2,r]}var h}))}))},r.prototype.uploadChunk=function(t){return G(this,void 0,void 0,(function(){var e,r,n,o,i,a,s,l,u,c=this;return K(this,(function(h){switch(h.label){case 0:return e=t.index,r=t.chunk,n=this.cachedUploadedList[e],this.logger.info("upload part "+e+", cache:",n),o=this.config.checkByMD5,i=function(){c.usedCacheList[e]=!0,c.updateChunkProgress(r.size,e),c.uploadedList[e]=n,c.updateLocalCache()},n&&!o?(i(),[2]):[4,k(r)];case 1:return a=h.sent(),this.logger.info("computed part md5.",a),n&&a===n.md5?(i(),[2]):(this.usedCacheList[e]=!1,s=function(t){c.updateChunkProgress(t.loaded,e)},l={body:r,md5:this.config.checkByServer?a:void 0,onProgress:s,onCreate:function(t){return c.addXhr(t)}},this.logger.info("part "+e+" start uploading."),[4,j(this.token,this.key,t.index+1,this.getUploadInfo(),l)]);case 2:return u=h.sent(),this.logger.info("part "+e+" upload completed."),s({loaded:r.size,total:r.size}),this.uploadedList[e]={etag:u.data.etag,md5:u.data.md5,size:r.size},this.updateLocalCache(),[2]}}))}))},r.prototype.mkFileReq=function(){return G(this,void 0,void 0,(function(){var t,e,r=this;return K(this,(function(n){switch(n.label){case 0:return t=X(X(X({parts:this.uploadedList.map((function(t,e){return{etag:t.etag,partNumber:e+1}})),fname:this.putExtra.fname},this.putExtra.mimeType&&{mimeType:this.putExtra.mimeType}),this.putExtra.customVars&&{customVars:this.putExtra.customVars}),this.putExtra.metadata&&{metadata:this.putExtra.metadata}),this.logger.info("parts upload completed, make file.",t),[4,(o=this.token,i=this.key,a=this.getUploadInfo(),s={onCreate:function(t){return r.addXhr(t)},body:JSON.stringify(t)},T(U(P(o).bucketName,i,a),E(E({},s),{method:"POST",headers:w(o)})))];case 1:return e=n.sent(),this.logger.info("finish Resume Progress."),this.updateMkFileProgress(1),[2,e]}var o,i,a,s}))}))},r.prototype.initBeforeUploadChunks=function(){return G(this,void 0,void 0,(function(){var t,r,n;return K(this,(function(i){switch(i.label){case 0:return this.uploadedList=[],this.usedCacheList=[],(t=function(t,r){var n=null;try{n=localStorage.getItem(t)}catch(i){r.warn(new o(e.ReadCacheFailed,"getLocalFileInfo failed. key: "+t))}if(null==n)return null;var a=null;try{a=JSON.parse(n)}catch(s){v(t,r),r.warn(new o(e.InvalidCacheData,"getLocalFileInfo failed to parse. key: "+t))}return a}(this.getLocalKey(),this.logger))?[3,2]:(this.logger.info("init upload parts from api."),[4,(a=this.token,s=this.bucketName,l=this.key,u=this.uploadHost.getUrl(),T(u+"/buckets/"+s+"/objects/"+(null!=l?p(l):"~")+"/uploads",{method:"POST",headers:m(a)}))]);case 1:return r=i.sent(),this.logger.info("initd upload parts of id: "+r.data.uploadId+"."),this.uploadId=r.data.uploadId,this.cachedUploadedList=[],[3,3];case 2:n=["resume upload parts from local cache,","total "+t.data.length+" part,","id is "+t.id+"."],this.logger.info(n.join(" ")),this.cachedUploadedList=t.data,this.uploadId=t.id,i.label=3;case 3:return this.chunks=function(t,e){var r=e*b;if(r>t.size)r=t.size;else for(;t.size>1e4*r;)r*=2;for(var n=[],o=Math.ceil(t.size/r),i=0;i<o;i++){var a=t.slice(r*i,i===o-1?t.size:r*(i+1));n.push(a)}return n}(this.file,this.config.chunkSize),this.loaded={mkFileProgress:0,chunks:this.chunks.map((function(t){return 0}))},this.notifyResumeProgress(),[2]}var a,s,l,u}))}))},r.prototype.getUploadInfo=function(){return{id:this.uploadId,url:this.uploadHost.getUrl()}},r.prototype.getLocalKey=function(){return t=this.file.name,e=this.key,r=this.file.size,"qiniu_js_sdk_upload_file_name_"+t+(null==e?"_":"_key_"+e+"_")+"size_"+r;var t,e,r},r.prototype.updateLocalCache=function(){!function(t,r,n){try{localStorage.setItem(t,JSON.stringify(r))}catch(i){n.warn(new o(e.WriteCacheFailed,"setLocalFileInfo failed: "+t))}}(this.getLocalKey(),{id:this.uploadId,data:this.uploadedList},this.logger)},r.prototype.updateChunkProgress=function(t,e){this.loaded.chunks[e]=t,this.notifyResumeProgress()},r.prototype.updateMkFileProgress=function(t){this.loaded.mkFileProgress=t,this.notifyResumeProgress()},r.prototype.notifyResumeProgress=function(){var t,e=this;this.progress={total:this.getProgressInfoItem((t=this.loaded.chunks,t.reduce((function(t,e){return t+e}),0)+this.loaded.mkFileProgress),this.file.size+1),chunks:this.chunks.map((function(t,r){var n=e.usedCacheList[r];return e.getProgressInfoItem(e.loaded.chunks[r],t.size,n)})),uploadInfo:{id:this.uploadId,url:this.uploadHost.getUrl()}},this.onData(this.progress)}}(V);var J=globalThis&&globalThis.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{l(n.next(t))}catch(e){i(e)}}function s(t){try{l(n.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}l((n=n.apply(t,e||[])).next())}))},W=globalThis&&globalThis.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},Q=function(){function t(){this.crc=-1,this.table=this.makeTable()}return t.prototype.makeTable=function(){for(var t=new Array,e=0;e<256;e++){for(var r=e,n=0;n<8;n++)1&r?r=r>>>1^3988292384:r>>>=1;t[e]=r}return t},t.prototype.append=function(t){for(var e=this.crc,r=0;r<t.byteLength;r++)e=e>>>8^this.table[255&(e^t[r])];this.crc=e},t.prototype.compute=function(){return(-1^this.crc)>>>0},t.prototype.readAsUint8Array=function(t){return J(this,void 0,void 0,(function(){var e;return W(this,(function(r){switch(r.label){case 0:return"function"!=typeof t.arrayBuffer?[3,2]:(e=Uint8Array.bind,[4,t.arrayBuffer()]);case 1:return[2,new(e.apply(Uint8Array,[void 0,r.sent()]))];case 2:return[2,new Promise((function(e,r){var n=new FileReader;n.onload=function(){null!=n.result&&"string"!=typeof n.result?e(new Uint8Array(n.result)):r()},n.readAsArrayBuffer(t)}))]}}))}))},t.prototype.file=function(t){return J(this,void 0,void 0,(function(){var e,r,n,o,i,a;return W(this,(function(s){switch(s.label){case 0:return t.size<=b?(e=this.append,[4,this.readAsUint8Array(t)]):[3,2];case 1:return e.apply(this,[s.sent()]),[2,this.compute()];case 2:r=Math.ceil(t.size/b),n=0,s.label=3;case 3:return n<r?(o=n*b,i=n===r-1?t.size:o+b,[4,this.readAsUint8Array(t.slice(o,i))]):[3,6];case 4:a=s.sent(),this.append(new Uint8Array(a)),s.label=5;case 5:return n++,[3,3];case 6:return[2,this.compute()]}}))}))},t.file=function(e){return(new t).file(e)},t}(),Y=globalThis&&globalThis.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},t(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Z=globalThis&&globalThis.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{l(n.next(t))}catch(e){i(e)}}function s(t){try{l(n.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}l((n=n.apply(t,e||[])).next())}))},$=globalThis&&globalThis.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(s){i=[6,s],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};!function(t){function e(){return null!==t&&t.apply(this,arguments)||this}Y(e,t),e.prototype.run=function(){return Z(this,void 0,void 0,(function(){var t,e,r,n,o=this;return $(this,(function(i){switch(i.label){case 0:return this.logger.info("start run Direct."),(t=new FormData).append("file",this.file),t.append("token",this.token),null!=this.key&&t.append("key",this.key),t.append("fname",this.putExtra.fname),this.config.checkByServer?[4,Q.file(this.file)]:[3,2];case 1:e=i.sent(),t.append("crc32",e.toString()),i.label=2;case 2:return this.putExtra.customVars&&(this.logger.info("init customVars."),r=this.putExtra.customVars,Object.keys(r).forEach((function(e){return t.append(e,r[e].toString())})),this.logger.info("customVars inited.")),this.logger.info("formData inited."),[4,(a=this.uploadHost.getUrl(),s=t,l={onProgress:function(t){o.updateDirectProgress(t.loaded,t.total)},onCreate:function(t){return o.addXhr(t)}},T(a,E({method:"POST",body:s},l)))];case 3:return n=i.sent(),this.logger.info("Direct progress finish."),this.finishDirectProgress(),[2,n]}var a,s,l}))}))},e.prototype.updateDirectProgress=function(t,e){this.progress={total:this.getProgressInfoItem(t,e+1)},this.onData(this.progress)},e.prototype.finishDirectProgress=function(){if(!this.progress)return this.logger.warn("progress is null."),this.progress={total:this.getProgressInfoItem(this.file.size,this.file.size)},void this.onData(this.progress);var t=this.progress.total;this.progress={total:this.getProgressInfoItem(t.loaded+1,t.size)},this.onData(this.progress)}}(V),globalThis&&globalThis.__read,globalThis&&globalThis.__spread,globalThis&&globalThis.__awaiter,globalThis&&globalThis.__generator,globalThis&&globalThis.__read,globalThis&&globalThis.__spread;var tt=globalThis&&globalThis.__assign||function(){return tt=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},tt.apply(this,arguments)};globalThis&&globalThis.__rest,globalThis&&globalThis.__read,globalThis&&globalThis.__spread;var et=globalThis&&globalThis.__assign||function(){return et=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},et.apply(this,arguments)};globalThis&&globalThis.__awaiter,globalThis&&globalThis.__generator;var rt={PNG:"image/png",JPEG:"image/jpeg",WEBP:"image/webp",BMP:"image/bmp"};Object.keys(rt).map((function(t){return rt[t]}))}}}));