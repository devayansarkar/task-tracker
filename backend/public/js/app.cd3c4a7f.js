(function(e){function t(t){for(var s,a,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},o={app:0},r=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0c49c9dd":"bb36d2d2","chunk-5739a041":"d8850efb","chunk-7dd0d849":"85b82afb","chunk-e3366a26":"e50832b6","chunk-17e2320e":"60197a2e","chunk-3d2b8aec":"af672951","chunk-6a8b9473":"c6d359b5"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0c49c9dd":1,"chunk-5739a041":1,"chunk-7dd0d849":1,"chunk-e3366a26":1,"chunk-17e2320e":1,"chunk-3d2b8aec":1,"chunk-6a8b9473":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-0c49c9dd":"aa50808e","chunk-5739a041":"e171740b","chunk-7dd0d849":"9ddf92c3","chunk-e3366a26":"19409777","chunk-17e2320e":"e9aab4d2","chunk-3d2b8aec":"f94266f3","chunk-6a8b9473":"e6f94ff4"}[e]+".css",o=i.p+s,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===s||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var s=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete a[e],f.parentNode.removeChild(f),n(r)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var s=o[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,n){s=o[e]=[t,n]}));t.push(s[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",d.name="ChunkLoadError",d.type=s,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0cec":function(e,t,n){},"3a5e":function(e,t,n){"use strict";var s=n("7a23"),a=Object(s["h"])("div",{class:"water"},null,-1),o=Object(s["h"])("div",{class:"loading"},"Loading...",-1);function r(e,t,n,r,c,i){return Object(s["q"])(),Object(s["d"])("div",null,[a,o])}var c={name:"Loading"};n("aa6a");c.render=r;t["a"]=c},"427a":function(e,t,n){"use strict";n("7b67")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23"),a=n("2106"),o=n.n(a);function r(e,t){var n=Object(s["x"])("router-view");return Object(s["q"])(),Object(s["d"])("div",null,[Object(s["h"])(n)])}n("d34b");const c={};c.render=r;var i=c,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),l={key:0,class:"auth-form-container"},d={class:"left-section"},f={class:"login-form-container"},h=Object(s["h"])("div",{class:"app-title"},"Issue Tracker",-1),p=Object(s["h"])("div",{class:"app-subtitle"},"Login in your portal",-1),g={class:"input-container"},b=Object(s["h"])("label",{for:"email",class:"form-field-label"},"Email",-1),m={class:"input-container"},k=Object(s["h"])("label",{for:"password",class:"form-field-label"},"Password",-1),v=Object(s["h"])("button",{class:"btn btn-primary"},"Login",-1),O=Object(s["h"])("div",{class:"sign-up-info"},"Do not have an account yet ?",-1),j=Object(s["h"])("button",{type:"submit",class:"btn btn-secondary"},"Sign up",-1),y=Object(s["h"])("div",{class:"right-section"},null,-1),_={key:1,class:"loading-container"};function S(e,t,n,a,o,r){var c=Object(s["x"])("router-link"),i=Object(s["x"])("Loading");return Object(s["q"])(),Object(s["d"])("div",null,[o.isLoading?Object(s["e"])("",!0):(Object(s["q"])(),Object(s["d"])("div",l,[Object(s["h"])("div",d,[Object(s["h"])("div",f,[o.message.text?(Object(s["q"])(),Object(s["d"])("div",{key:0,class:["info-message",o.message.type]},Object(s["z"])(o.message.text),3)):Object(s["e"])("",!0),h,p,Object(s["h"])("form",{onSubmit:t[3]||(t[3]=Object(s["G"])((function(){return r.login&&r.login.apply(r,arguments)}),["prevent"]))},[Object(s["h"])("div",g,[b,Object(s["F"])(Object(s["h"])("input",{id:"email",type:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.email=e}),class:"form-field",placeholder:"Enter your email"},null,512),[[s["C"],o.email]])]),Object(s["h"])("div",m,[k,Object(s["F"])(Object(s["h"])("input",{id:"password",type:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.password=e}),class:"form-field",placeholder:"Enter your password"},null,512),[[s["C"],o.password]])]),v],32),O,Object(s["h"])(c,{to:"/signup"},{default:Object(s["E"])((function(){return[j]})),_:1})])]),y])),o.isLoading?(Object(s["q"])(),Object(s["d"])("div",_,[Object(s["h"])(i)])):Object(s["e"])("",!0)])}n("5319"),n("ac1f");var I=n("3a5e"),L={name:"Login",data:function(){return{isLoading:!0,email:"",password:"",message:{type:"success",text:""}}},components:{Loading:I["a"]},methods:{login:function(){var e=this;this.isLoading=!0,this.$http.plain.post("/signin",{email:this.email,password:this.password}).then((function(t){return e.signinSuccessful(t)})).catch((function(t){return e.signinFailed(t)}))},signinSuccessful:function(e){this.addTokensToLocalStorage(e.data),this.$router.replace("/home")},signinFailed:function(e){var t=e.response&&e.response.data&&e.response.data.error||"Unable to sign user.";this.isLoading=!1,this.message={type:"error",text:t},this.removeTokensFromLocalStorage(),this.isLoading=!1},addTokensToLocalStorage:function(e){localStorage.access_token=e.access,localStorage.refresh_token=e.refresh,localStorage.access_expires_at=e.access_expires_at,localStorage.refresh_token_expires_at=e.refresh_expires_at},removeTokensFromLocalStorage:function(){delete localStorage.access_token,delete localStorage.refresh_token,delete localStorage.access_expires_at,delete localStorage.refresh_token_expires_at}},created:function(){var e=this;this.$http.secured.post("/refresh",{}).then((function(t){return e.signinSuccessful(t)})).catch((function(){e.removeTokensFromLocalStorage(),e.isLoading=!1}))}};n("427a");L.render=S;var w=L,x=[{path:"/home",name:"Home",component:function(){return Promise.all([n.e("chunk-0c49c9dd"),n.e("chunk-5739a041")]).then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-3d2b8aec").then(n.bind(null,"f820"))}},{path:"/board",name:"Board",component:function(){return Promise.all([n.e("chunk-0c49c9dd"),n.e("chunk-e3366a26")]).then(n.bind(null,"09b2"))}},{path:"/signup",name:"SignUp",component:function(){return n.e("chunk-17e2320e").then(n.bind(null,"34c3"))}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-6a8b9473").then(n.bind(null,"c66d"))}},{path:"/add-issue",name:"AddIssue",component:function(){return Promise.all([n.e("chunk-0c49c9dd"),n.e("chunk-7dd0d849")]).then(n.bind(null,"1b10"))}},{path:"/view-issue/:issue_id",name:"ViewIssue",component:function(){return Promise.all([n.e("chunk-0c49c9dd"),n.e("chunk-7dd0d849")]).then(n.bind(null,"1b10"))}},{path:"/",name:"Login",component:w}],C=Object(u["a"])({history:Object(u["b"])("/"),routes:x}),T=C,E=n("5530"),A=(n("b0c0"),n("159b"),n("5502")),P=n("bc3a"),U=n.n(P),F=U.a.create({baseURL:"/",withCredentials:!0,headers:{"Content-Type":"application/json"}}),D=U.a.create({baseURL:"/",withCredentials:!0,headers:{"Content-Type":"application/json"}});F.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(localStorage.access_token),e})),F.interceptors.response.use(null,(function(e){return e.response&&e.response.config&&401===e.response.status?D.post("/refresh",{},{headers:{Authorization:"Bearer ".concat(localStorage.access_token),x_refresh_token:"Bearer ".concat(localStorage.refresh_token)}}).then((function(t){var n=t.data;localStorage.access_token=n.access_token,localStorage.refresh_token=n.refresh,localStorage.access_expires_at=n.access_expires_at,localStorage.refresh_token_expires_at=n.refresh_expires_at;var s=e.response.config;return s.headers.Authorization="Bearer ".concat(localStorage.access_token),D.request(s)})).catch((function(e){return delete localStorage.access_token,delete localStorage.refresh_token,"/"!==location.pathname&&location.replace("/"),Promise.reject(e)})):Promise.reject(e)}));var N=Object(A["a"])({state:{isLoading:!1,user:{name:"",email:""},tasks:{todo:[],doing:[],done:[]},deadlineIssues:[],recentIssues:[],taskCount:{doing:-1,done:-1,todo:-1},message:{type:"success",text:""},issue:{id:"",title:"",description:"",endDate:"",lane:"",category:""}},mutations:{startLoader:function(e){e.isLoading=!0},loadUserInfoSuccess:function(e,t){e.user={name:t.name,email:t.email},e.taskCount={done:t.done,doing:t.inProgress,todo:t.todo},e.deadlineIssues=t.deadlineIssues,e.recentIssues=t.recentlyUpdatedIssues,e.isLoading=!1},loadUserInfoFailure:function(e){e.isLoading=!1},loadAllIssuesSuccess:function(e,t){var n=[],s=[],a=[];void 0!==t&&void 0!==t.issues&&t.issues.forEach((function(e){"TODO"===e.status?n.push(e):"INPROGRESS"===e.status?s.push(e):a.push(e)})),e.tasks={todo:n,doing:s,done:a},e.isLoading=!1},loadAllIssuesFailure:function(e,t){e.isLoading=!1,void 0!==t&&void 0!==t.tasks&&t.tasks.forEach((function(e){console.log(e)}))},signoutSuccess:function(e){e.isLoading=!1,delete localStorage.access_token,delete localStorage.refresh_token,delete localStorage.access_expires_at,delete localStorage.refresh_token_expires_at},signoutFailure:function(e){e.isLoading=!0},issueOperationSuccess:function(e,t){e.isLoading=!1,e.message={type:"success",text:t},setTimeout((function(){e.message={type:"success",text:""}}),5e3)},issueOperationFailure:function(e,t){e.isLoading=!1,e.message={type:"error",text:t},setTimeout((function(){e.message={type:"error",text:""}}),5e3)},getIssueSuccess:function(e,t){e.isLoading=!1,e.issue=t}},actions:{loadUserInfo:function(e,t){var n=e.commit;t||n("startLoader"),F.get("/api/v1/user").then((function(e){return n("loadUserInfoSuccess",e.data)})).catch((function(e){return n("loadUserInfoFailure",e)}))},loadAllIssues:function(e,t){var n=e.commit;t||n("startLoader"),F.get("/api/v1/issues").then((function(e){return n("loadAllIssuesSuccess",e.data)})).catch((function(e){return n("loadAllIssuesFailure",e)}))},logout:function(e){var t=e.commit;t("startLoader"),F.delete("/signin").then((function(){return t("signoutSuccess")})).catch((function(){return t("signoutFailure")}))},addNewIssue:function(e,t){var n=e.commit,s=e.dispatch;n("startLoader"),F.post("/api/v1/issues",t).then((function(){n("issueOperationSuccess","Issue is added successfully."),s("loadAllIssues",!0),s("loadUserInfo",!0)})).catch((function(){return n("issueOperationFailure","Unable to add the issue, please try again later.")}))},updateIssue:function(e,t){var n=e.commit,s=e.dispatch,a=t.payload,o=t.id;n("startLoader"),F.patch("/api/v1/issues/".concat(o),a).then((function(){n("issueOperationSuccess","Issue is updated successfully."),s("loadAllIssues",!0),s("loadUserInfo",!0)})).catch((function(e){console.log(e),n("issueOperationFailure","Unable to update the issue, please try again later")}))},getIssue:function(e,t){var n=e.commit,s=t.id;n("startLoader"),F.get("/api/v1/issues/".concat(s)).then((function(e){n("getIssueSuccess",e.data)})).catch((function(){return n("issueOperationFailure","Unable to fetch issue, please check the number or add a new one")}))}},modules:{},getters:{getUser:function(e){return Object(E["a"])({},e.user)},hasDeadlineIssues:function(e){return e.deadlineIssues.length>0},hasRecentIssues:function(e){return e.recentIssues.length>0},hasEmptyActionItems:function(e){return 0===e.recentIssues.length||0===e.deadlineIssues.length},getTaskCount:function(e){return Object(E["a"])(Object(E["a"])({},e.taskCount),{},{total:e.taskCount.todo+e.taskCount.done+e.taskCount.doing})},getIssues:function(e){return function(t){return"TODO"===t?e.tasks.todo:"DOING"===t?e.tasks.doing:e.tasks.done}},isUserInfoLoaded:function(e){return e.taskCount.done>=0&&e.taskCount.doing>=0&&e.taskCount.todo>=0},areIssuesLoaded:function(e){return e.taskCount.todo<=e.tasks.todo.length&&e.taskCount.doing<=e.tasks.doing.length&&e.taskCount.done<=e.tasks.done.length},getIssue:function(e){return function(t){var n=t.type,s=t.index;switch(n){case"DEADLINE":return e.deadlineIssues[s];case"RECENT":return e.recentIssues[s];case"TODO":return e.tasks.todo[s];case"DOING":return e.tasks.doing[s];case"DONE":return e.tasks.done[s];default:return}}}}});Object(s["c"])(i).use(N).use(o.a,{secured:F,plain:D}).use(T).mount("#app")},"7b67":function(e,t,n){},a7a1:function(e,t,n){},aa6a:function(e,t,n){"use strict";n("a7a1")},d34b:function(e,t,n){"use strict";n("0cec")}});
//# sourceMappingURL=app.cd3c4a7f.js.map