webpackJsonp([22],{164:function(e,t,r){r(835);var n=r(71)(r(520),r(867),"data-v-26c6c782",null);e.exports=n.exports},187:function(e,t,r){"use strict";function n(e){return"[object Array]"===x.call(e)}function o(e){return"[object ArrayBuffer]"===x.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function a(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===x.call(e)}function d(e){return"[object File]"===x.call(e)}function f(e){return"[object Blob]"===x.call(e)}function m(e){return"[object Function]"===x.call(e)}function h(e){return l(e)&&m(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function b(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function y(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function w(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=w(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)y(arguments[r],e);return t}function _(e,t,r){return y(t,function(t,n){e[n]=r&&"function"==typeof t?j(t,r):t}),e}var j=r(195),x=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:o,isFormData:i,isArrayBufferView:a,isString:s,isNumber:u,isObject:l,isUndefined:c,isDate:p,isFile:d,isBlob:f,isFunction:m,isStream:h,isURLSearchParams:g,isStandardBrowserEnv:b,forEach:y,merge:w,extend:_,trim:v}},190:function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(187),i=r(212),a=/^\)\]\}',?\n/,s={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(191):void 0!==t&&(e=r(191)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(a,"");try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){u.headers[e]={}}),o.forEach(["post","put","patch"],function(e){u.headers[e]=o.merge(s)}),e.exports=u}).call(t,r(72))},191:function(e,t,r){"use strict";var n=r(187),o=r(204),i=r(207),a=r(213),s=r(211),u=r(194),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(206);e.exports=function(e){return new Promise(function(t,l){var p=e.data,d=e.headers;n.isFormData(p)&&delete d["Content-Type"];var f=new XMLHttpRequest,m="onreadystatechange",h=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in f||s(e.url)||(f=new window.XDomainRequest,m="onload",h=!0,f.onprogress=function(){},f.ontimeout=function(){}),e.auth){var g=e.auth.username||"",v=e.auth.password||"";d.Authorization="Basic "+c(g+":"+v)}if(f.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f[m]=function(){if(f&&(4===f.readyState||h)&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in f?a(f.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?f.response:f.responseText,i={data:n,status:1223===f.status?204:f.status,statusText:1223===f.status?"No Content":f.statusText,headers:r,config:e,request:f};o(t,l,i),f=null}},f.onerror=function(){l(u("Network Error",e)),f=null},f.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),f=null},n.isStandardBrowserEnv()){var b=r(209),y=(e.withCredentials||s(e.url))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in f&&n.forEach(d,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete d[t]:f.setRequestHeader(t,e)}),e.withCredentials&&(f.withCredentials=!0),e.responseType)try{f.responseType=e.responseType}catch(e){if("json"!==f.responseType)throw e}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){f&&(f.abort(),l(e),f=null)}),void 0===p&&(p=null),f.send(p)})}},192:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},193:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},194:function(e,t,r){"use strict";var n=r(203);e.exports=function(e,t,r,o){var i=new Error(e);return n(i,t,r,o)}},195:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},197:function(e,t,r){e.exports=r(198)},198:function(e,t,r){"use strict";function n(e){var t=new a(e),r=i(a.prototype.request,t);return o.extend(r,a.prototype,t),o.extend(r,t),r}var o=r(187),i=r(195),a=r(200),s=r(190),u=n(s);u.Axios=a,u.create=function(e){return n(o.merge(s,e))},u.Cancel=r(192),u.CancelToken=r(199),u.isCancel=r(193),u.all=function(e){return Promise.all(e)},u.spread=r(214),e.exports=u,e.exports.default=u},199:function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(192);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},200:function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new a,response:new a}}var o=r(190),i=r(187),a=r(201),s=r(202),u=r(210),c=r(208);n.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},i.forEach(["delete","get","head"],function(e){n.prototype[e]=function(t,r){return this.request(i.merge(r||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(i.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},201:function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(187);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},202:function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(187),i=r(205),a=r(193),s=r(190);e.exports=function(e){return n(e),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return n(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return a(t)||(n(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},203:function(e,t,r){"use strict";e.exports=function(e,t,r,n){return e.config=t,r&&(e.code=r),e.response=n,e}},204:function(e,t,r){"use strict";var n=r(194);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r)):e(r)}},205:function(e,t,r){"use strict";var n=r(187);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},206:function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}function o(e){for(var t,r,o=String(e),a="",s=0,u=i;o.charAt(0|s)||(u="=",s%1);a+=u.charAt(63&t>>8-s%1*8)){if((r=o.charCodeAt(s+=.75))>255)throw new n;t=t<<8|r}return a}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=o},207:function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(187);e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(o.isURLSearchParams(t))i=t.toString();else{var a=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),a.push(n(t)+"="+n(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},208:function(e,t,r){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},209:function(e,t,r){"use strict";var n=r(187);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},210:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},211:function(e,t,r){"use strict";var n=r(187);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},212:function(e,t,r){"use strict";var n=r(187);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},213:function(e,t,r){"use strict";var n=r(187);e.exports=function(e){var t,r,o,i={};return e?(n.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t&&(i[t]=i[t]?i[t]+", "+r:r)}),i):i}},214:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},215:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delApiGroup=t.updateApiGroup=t.addApiGroup=t.getApiGroupList=t.addApiDetail=t.getTestTenResult=t.getTestTenTime=t.getTestResultList=t.addEmailConfig=t.delEmailConfig=t.getEmailConfigDetail=t.getProjectMemberList=t.getProjectDynamicList=t.addHost=t.updateHost=t.enableHost=t.disableHost=t.delHost=t.getHost=t.getProjectDetail=t.addProject=t.updateProject=t.enableProject=t.disableProject=t.delProject=t.getProject=t.recordVisitor=t.requestLogin=t.test=void 0;var n=r(197),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=t.test="http://120.79.232.23:8000";t.requestLogin=function(e){return o.default.post(i+"/api/user/login",e).then(function(e){return e.data})},t.recordVisitor=function(e){return o.default.post(i+"/api/user/VisitorRecord",e).then(function(e){return e.data})},t.getProject=function(e,t){return o.default.get(i+"/api/project/project_list",{params:t,headers:e}).then(function(e){return e.data})},t.delProject=function(e,t){return o.default.post(i+"/api/project/del_project",t,{headers:e}).then(function(e){return e.data})},t.disableProject=function(e,t){return o.default.post(i+"/api/project/disable_project",t,{headers:e}).then(function(e){return e.data})},t.enableProject=function(e,t){return o.default.post(i+"/api/project/enable_project",t,{headers:e}).then(function(e){return e.data})},t.updateProject=function(e,t){return o.default.post(i+"/api/project/update_project",t,{headers:e}).then(function(e){return e.data})},t.addProject=function(e,t){return o.default.post(i+"/api/project/add_project",t,{headers:e}).then(function(e){return e.data})},t.getProjectDetail=function(e,t){return o.default.get(i+"/api/title/project_info",{params:t,headers:e}).then(function(e){return e.data})},t.getHost=function(e,t){return o.default.get(i+"/api/global/host_total",{params:t,headers:e}).then(function(e){return e.data})},t.delHost=function(e,t){return o.default.post(i+"/api/global/del_host",t,{headers:e}).then(function(e){return e.data})},t.disableHost=function(e,t){return o.default.post(i+"/api/global/disable_host",t,{headers:e}).then(function(e){return e.data})},t.enableHost=function(e,t){return o.default.post(i+"/api/global/enable_host",t,{headers:e}).then(function(e){return e.data})},t.updateHost=function(e,t){return o.default.post(i+"/api/global/update_host",t,{headers:e}).then(function(e){return e.data})},t.addHost=function(e,t){return o.default.post(i+"/api/global/add_host",t,{headers:e}).then(function(e){return e.data})},t.getProjectDynamicList=function(e,t){return o.default.get(i+"/api/dynamic/dynamic",{params:t,headers:e}).then(function(e){return e.data})},t.getProjectMemberList=function(e,t){return o.default.get(i+"/api/member/project_member",{params:t,headers:e}).then(function(e){return e.data})},t.getEmailConfigDetail=function(e,t){return o.default.get(i+"/api/member/get_email",{params:t,headers:e}).then(function(e){return e.data})},t.delEmailConfig=function(e,t){return o.default.post(i+"/api/member/del_email",t,{headers:e}).then(function(e){return e.data})},t.addEmailConfig=function(e,t){return o.default.post(i+"/api/member/email_config",t,{headers:e}).then(function(e){return e.data})},t.getTestResultList=function(e,t){return o.default.get(i+"/api/report/auto_test_report",{params:t,headers:e}).then(function(e){return e.data})},t.getTestTenTime=function(e,t){return o.default.get(i+"/api/report/test_time",{params:t,headers:e}).then(function(e){return e.data})},t.getTestTenResult=function(e,t){return o.default.get(i+"/api/report/lately_ten",{params:t,headers:e}).then(function(e){return e.data})},t.addApiDetail=function(e,t){return o.default.post(i+"/api/api/add_api",t,{headers:e}).then(function(e){return e.data})},t.getApiGroupList=function(e,t){return o.default.get(i+"/api/api/group",{params:t,headers:e}).then(function(e){return e.data})},t.addApiGroup=function(e,t){return o.default.post(i+"/api/api/add_group",t,{headers:e}).then(function(e){return e.data})},t.updateApiGroup=function(e,t){return o.default.post(i+"/api/api/update_name_group",t,{headers:e}).then(function(e){return e.data})},t.delApiGroup=function(e,t){return o.default.post(i+"/api/api/del_group",t,{headers:e}).then(function(e){return e.data})}},520:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(215);t.default={data:function(){return{memberData:[],total:0,page:1,listLoading:!1,reportFrom:"",editFormVisible:!1,editLoading:!1,editFormRules:{reportFrom:[{required:!0,message:"请输入发送人",trigger:"blur"},{min:1,max:100,message:"长度在 1 到 100 个字符",trigger:"blur"}],mailUser:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:1,max:100,message:"长度在 1 到 100 个字符",trigger:"blur"}],mailPass:[{required:!0,message:"请输入口令",trigger:"blur"},{min:1,max:100,message:"长度在 1 到 100 个字符",trigger:"blur"}],mailSmtp:[{required:!1,message:"请输入邮件服务器",trigger:"blur"},{min:1,max:100,message:"长度在 1 到 100 个字符",trigger:"blur"}]},editForm:{}}},methods:{handleCurrentChange:function(e){this.page=e,this.getProjectMember()},getProjectMember:function(){this.listLoading=!0;var e=this,t={project_id:this.$route.params.project_id,page:e.page},r={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};(0,n.getProjectMemberList)(r,t).then(function(t){var r=t.msg,n=t.code,o=t.data;e.listLoading=!1,"999999"===n?(e.total=o.total,e.memberData=o.data):e.$message.error({message:r,center:!0})})},getEmailConfig:function(){var e=this,t={project_id:this.$route.params.project_id},r={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};(0,n.getEmailConfigDetail)(r,t).then(function(t){var r=t.msg,n=t.code,o=t.data;e.listLoading=!1,"999999"===n?(console.log(o),o?(e.reportFrom=o.reportFrom,e.editForm=o):(e.reportFrom="",e.editForm={})):e.$message.error({message:r,center:!0})})},DelEmail:function(){var e=this,t={project_id:Number(this.$route.params.project_id)},r={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};(0,n.delEmailConfig)(r,t).then(function(t){var r=t.msg,n=t.code;t.data;e.listLoading=!1,"999999"===n?(e.$message.success({message:"删除成功",center:!0}),e.getEmailConfig()):e.$message.error({message:r,center:!0})})},editSubmit:function(){var e=this,t=this;this.$refs.editForm.validate(function(r){r&&e.$confirm("确认提交吗？","提示",{}).then(function(){t.editLoading=!0;var r={project_id:Number(e.$route.params.project_id),reportFrom:e.editForm.reportFrom,mailUser:e.editForm.mailUser,mailPass:e.editForm.mailPass,mailSmtp:e.editForm.mailSmtp},o={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};(0,n.addEmailConfig)(o,r).then(function(e){var r=e.msg,n=e.code;e.data;t.editLoading=!1,"999999"===n?(t.$message({message:"修改成功",center:!0,type:"success"}),t.$refs.editForm.resetFields(),t.editFormVisible=!1,t.getEmailConfig()):t.$message.error({message:r,center:!0})})})})}},mounted:function(){this.getProjectMember(),this.getEmailConfig()}}},555:function(e,t,r){t=e.exports=r(155)(!1),t.push([e.i,".member-manage[data-v-26c6c782]{margin:35px}",""])},835:function(e,t,r){var n=r(555);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);r(156)("d5393bc6",n,!0)},867:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"member-manage"},[r("p",{staticStyle:{color:"#999"}},[e._v("*注"),r("strong",[e._v(": ")]),e._v("自动化测试结果会发送给所有项目成员")]),e._v(" "),r("div",{staticStyle:{"margin-bottom":"20px","font-size":"20px"}},[r("div",[r("div",{staticStyle:{display:"inline"}},[e._v("测试报告发送账号： ")]),e._v(" "),e.reportFrom?e._e():r("div",{staticStyle:{display:"inline"}},[e._v("未添加账号")]),e._v(" "),e.reportFrom?r("div",{staticStyle:{display:"inline"}},[e._v(e._s(e.reportFrom))]):e._e(),e._v("\n\n                  \n                "),r("i",{staticClass:"el-icon-edit",staticStyle:{cursor:"pointer",display:"inline"},on:{click:function(t){e.editFormVisible=!0}}}),e._v("\n                                  \n                "),e.reportFrom?r("i",{staticClass:"el-icon-delete",staticStyle:{cursor:"pointer",display:"inline"},on:{click:function(t){e.DelEmail()}}}):e._e()])]),e._v(" "),r("el-dialog",{staticStyle:{width:"60%",left:"20%"},attrs:{title:"编辑","close-on-click-modal":!1},model:{value:e.editFormVisible,callback:function(t){e.editFormVisible=t},expression:"editFormVisible"}},[r("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"100px",rules:e.editFormRules}},[r("el-form-item",{attrs:{label:"发送人邮箱:",prop:"reportFrom"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.reportFrom,callback:function(t){e.$set(e.editForm,"reportFrom","string"==typeof t?t.trim():t)},expression:"editForm.reportFrom"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"用户名:",prop:"mailUser"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.mailUser,callback:function(t){e.$set(e.editForm,"mailUser","string"==typeof t?t.trim():t)},expression:"editForm.mailUser"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"口令:",prop:"mailPass"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.mailPass,callback:function(t){e.$set(e.editForm,"mailPass","string"==typeof t?t.trim():t)},expression:"editForm.mailPass"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"邮箱服务器:",prop:"mailSmtp"}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.mailSmtp,callback:function(t){e.$set(e.editForm,"mailSmtp","string"==typeof t?t.trim():t)},expression:"editForm.mailSmtp"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit(t)}}},[e._v("提交")])],1)],1),e._v(" "),r("el-col",{attrs:{span:24}},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.memberData,"highlight-current-row":""}},[r("el-table-column",{attrs:{prop:"username",label:"姓名","min-width":"30%",sortable:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"permissionType",label:"权限","min-width":"30%",sortable:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"userPhone",label:"手机号","min-width":"20%",sortable:""}}),e._v(" "),r("el-table-column",{attrs:{prop:"userEmail",label:"邮箱地址","min-width":"20%",sortable:""}})],1),e._v(" "),r("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,"page-count":e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]}}});