(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edea453c"],{"00ef":function(e,t,s){"use strict";s("66d4")},"117a":function(e,t,s){"use strict";s("3563")},3563:function(e,t,s){},"40a3":function(e,t,s){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,s){var n=s("1d80"),i=s("5899"),a="["+i+"]",c=RegExp("^"+a+a+"*"),r=RegExp(a+a+"*$"),u=function(e){return function(t){var s=String(n(t));return 1&e&&(s=s.replace(c,"")),2&e&&(s=s.replace(r,"")),s}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5bba":function(e,t,s){"use strict";s("99af");var n=s("7a23"),i={class:"task"},a={class:"main"},c={class:"header"},r={class:"id"},u={class:"menu"},d={key:0,class:"menu-options dropdown"},o={class:"title"},l={class:"footer"},b={class:"deadline"},h=Object(n["h"])("div",{class:"text"},"Deadline",-1),f={class:"view"},p=Object(n["h"])("span",{class:"material-icons"}," visibility ",-1),O={class:"status"};function v(e,t,s,v,j,g){var y=Object(n["x"])("router-link"),C=Object(n["x"])("WavePath");return Object(n["q"])(),Object(n["d"])("div",i,[Object(n["h"])("div",a,[Object(n["h"])("div",c,[Object(n["h"])("div",r,"Issue : "+Object(n["z"])(s.issueNumber),1),Object(n["h"])("div",{class:g.getIssueStatusClass},Object(n["z"])(g.getIssueStatus),3),Object(n["h"])("div",u,[Object(n["h"])("div",{class:"material-icons btn",onClick:t[1]||(t[1]=function(){return g.toggleMenu&&g.toggleMenu.apply(g,arguments)}),ref:"menu"}," more_vert ",512),j.isMenuOpen?(Object(n["q"])(),Object(n["d"])("div",d,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(g.getMenuOptions,(function(e,t){return Object(n["q"])(),Object(n["d"])("a",{href:"#",key:t,onClick:function(t){return g.updateStatus(e)}},Object(n["z"])(e),9,["onClick"])})),128))])):Object(n["e"])("",!0)])]),Object(n["h"])("div",o,Object(n["z"])(g.getIssueTitle),1),Object(n["h"])("div",l,[Object(n["h"])("div",b,[h,Object(n["h"])("div",{class:["date","danger"===this.deadlineType?"danger":""]},Object(n["z"])(g.parsedDate),3)]),Object(n["h"])("div",f,[Object(n["h"])(y,{to:{name:"ViewIssue",params:{issue_id:s.issueNumber,index:s.index,type:s.type}}},{default:Object(n["E"])((function(){return[p]})),_:1},8,["to"])])])]),Object(n["h"])("div",O,[Object(n["h"])(C,{fill:g.svgFillColor,class:"hundred"===this.deadlineStatus?"remove-svg":""},null,8,["fill","class"]),Object(n["h"])("div",{class:["progress","".concat(this.deadlineStatus," ").concat(this.deadlineType)]},null,2)])])}s("a9e3"),s("fb6a"),s("9129");var j=s("c1df"),g=s.n(j),y=(s("cb29"),{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"});function C(e,t,s,i,a,c){return Object(n["q"])(),Object(n["d"])("svg",y,[Object(n["h"])("path",{fill:s.fill,"fill-opacity":"1",d:c.getRandomWavePath},null,8,["fill","d"])])}var m={name:"WavePath",props:["fill"],computed:{getRandomWavePath:function(){var e="M0,32L34.3,32C68.6,32,137,32,206,74.7C274.3,117,343,203,411,224C480,245,549,203,617,165.3C685.7,128,754,96,823,112C891.4,128,960,192,1029,181.3C1097.1,171,1166,85,1234,53.3C1302.9,21,1371,43,1406,53.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z",t="M0,128L21.8,128C43.6,128,87,128,131,144C174.5,160,218,192,262,176C305.5,160,349,96,393,106.7C436.4,117,480,203,524,208C567.3,213,611,139,655,106.7C698.2,75,742,85,785,112C829.1,139,873,181,916,176C960,171,1004,117,1047,106.7C1090.9,96,1135,128,1178,144C1221.8,160,1265,160,1309,144C1352.7,128,1396,96,1418,80L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z",s=[e,t];return s[Math.round(Math.random())]}}};m.render=C;var I=m,S={name:"IssueCard",data:function(){return{deadlineStatus:"",deadlineType:"success",isMenuOpen:!1}},components:{WavePath:I},props:{issueNumber:Number,title:String,deadline:String,startDate:String,issueStatus:String,index:Number,type:String},methods:{toggleMenu:function(){var e=this,t=function t(s){e.catchOutsideClick(s,e.$refs.menu)&&(window.removeEventListener("click",t),e.isMenuOpen=!1)};window.addEventListener("click",t),this.isMenuOpen=!this.isMenuOpen},updateStatus:function(e){"Edit"===e?this.$router.push({name:"ViewIssue",params:{issue_id:this.issueNumber,index:this.index,type:this.type}}):this.$store.dispatch("updateIssueStatus",{status:e,id:this.issueNumber})},catchOutsideClick:function(e,t){return t!==e.target&&(this.isMenuOpen&&e.target,!0)}},computed:{parsedDate:function(){var e=this.deadline,t=g()(e,"YYYY-MM-DD");return t.isValid()?t.toLocaleString().substring(0,16):"No deadline"},svgFillColor:function(){var e="#54F00A",t="#F0CB0A",s="#FF2300";switch(this.deadlineType){case"danger":return s;case"warning":return t;default:return e}},getIssueTitle:function(){return this.title.length>80?"".concat(this.title.substring(0,77),"..."):this.title},getIssueStatus:function(){return this.issueStatus[0].toUpperCase()+this.issueStatus.slice(1).toLowerCase()},getIssueStatusClass:function(){return this.issueStatus.toLowerCase()},getMenuOptions:function(){var e=["Edit"];return""!==this.issueStatus&&"TODO"===this.issueStatus?e.push("Doing","Done"):""!==this.issueStatus&&"INPROGRESS"===this.issueStatus?e.push("Todo","Done"):e.push("Todo","Doing"),e}},created:function(){if(void 0!==this.deadline&&void 0!==this.startDate){var e=g()(this.startDate),t=g()(this.deadline,"YYYY-MM-DD"),s=t.diff(g()(),"days"),n=t.diff(e,"days"),i=0!==s||0!==n?s/n*100:0,a=100-i;!Number.isNaN(a)&&t.isValid()&&"DONE"!==this.issueStatus?a>=100?(this.deadlineStatus="hundred",this.deadlineType="danger"):a>80?(this.deadlineStatus="eighty",this.deadlineType="danger"):a>60?(this.deadlineStatus="sixty",this.deadlineType="warning"):a>50?(this.deadlineStatus="fifty",this.deadlineType="warning"):this.deadlineStatus=a>20?"twenty":"ten":this.deadlineStatus="hundred"}else this.deadlineStatus="hundred"}};s("00ef");S.render=v;t["a"]=S},"66d4":function(e,t,s){},"6a2a":function(e,t,s){"use strict";s("c4e1")},7156:function(e,t,s){var n=s("861d"),i=s("d2bb");e.exports=function(e,t,s){var a,c;return i&&"function"==typeof(a=t.constructor)&&a!==s&&n(c=a.prototype)&&c!==s.prototype&&i(e,c),e}},"727d":function(e,t,s){"use strict";s("40a3")},"81d5":function(e,t,s){"use strict";var n=s("7b0b"),i=s("23cb"),a=s("50c4");e.exports=function(e){var t=n(this),s=a(t.length),c=arguments.length,r=i(c>1?arguments[1]:void 0,s),u=c>2?arguments[2]:void 0,d=void 0===u?s:i(u,s);while(d>r)t[r++]=e;return t}},9129:function(e,t,s){var n=s("23e7");n({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},"99af":function(e,t,s){"use strict";var n=s("23e7"),i=s("d039"),a=s("e8b5"),c=s("861d"),r=s("7b0b"),u=s("50c4"),d=s("8418"),o=s("65f0"),l=s("1dde"),b=s("b622"),h=s("2d00"),f=b("isConcatSpreadable"),p=9007199254740991,O="Maximum allowed index exceeded",v=h>=51||!i((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),j=l("concat"),g=function(e){if(!c(e))return!1;var t=e[f];return void 0!==t?!!t:a(e)},y=!v||!j;n({target:"Array",proto:!0,forced:y},{concat:function(e){var t,s,n,i,a,c=r(this),l=o(c,0),b=0;for(t=-1,n=arguments.length;t<n;t++)if(a=-1===t?c:arguments[t],g(a)){if(i=u(a.length),b+i>p)throw TypeError(O);for(s=0;s<i;s++,b++)s in a&&d(l,b,a[s])}else{if(b>=p)throw TypeError(O);d(l,b++,a)}return l.length=b,l}})},a9e3:function(e,t,s){"use strict";var n=s("83ab"),i=s("da84"),a=s("94ca"),c=s("6eeb"),r=s("5135"),u=s("c6b6"),d=s("7156"),o=s("c04e"),l=s("d039"),b=s("7c73"),h=s("241c").f,f=s("06cf").f,p=s("9bf2").f,O=s("58a8").trim,v="Number",j=i[v],g=j.prototype,y=u(b(g))==v,C=function(e){var t,s,n,i,a,c,r,u,d=o(e,!1);if("string"==typeof d&&d.length>2)if(d=O(d),t=d.charCodeAt(0),43===t||45===t){if(s=d.charCodeAt(2),88===s||120===s)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+d}for(a=d.slice(2),c=a.length,r=0;r<c;r++)if(u=a.charCodeAt(r),u<48||u>i)return NaN;return parseInt(a,n)}return+d};if(a(v,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var m,I=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof I&&(y?l((function(){g.valueOf.call(s)})):u(s)!=v)?d(new j(C(t)),s,I):C(t)},S=n?h(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;S.length>N;N++)r(j,m=S[N])&&!r(I,m)&&p(I,m,f(j,m));I.prototype=g,g.constructor=I,c(i,v,I)}},bb51:function(e,t,s){"use strict";s.r(t);var n=s("7a23"),i={class:"page-container"},a={key:0,class:"home"},c={class:"home-header"},r={class:"left"},u=Object(n["h"])("div",{class:"title"},"Welcome to your personal issue tracker",-1),d=Object(n["h"])("div",{class:"subtitle"}," Organize your tasks and never miss a deadline. ",-1),o={class:"cta"},l={class:"right"},b={class:"task-count-grid-container"},h={key:0,class:"next-tasks"},f=Object(n["h"])("div",{class:"section-title"},"Approaching deadline",-1),p={class:"section-items"},O={key:1,class:"next-tasks"},v=Object(n["h"])("div",{class:"section-title"},"Recent issue",-1),j={class:"section-items"},g={key:2,class:"next-tasks"},y=Object(n["h"])("div",{class:"section-title"},"Issue status",-1),C={class:"section-items"},m={key:1,class:"loading-container"};function I(e,t,s,I,S,N){var T=Object(n["x"])("Navbar"),k=Object(n["x"])("Topbar"),w=Object(n["x"])("IssueCount"),x=Object(n["x"])("IssueCard"),E=Object(n["x"])("IssueStatusInfoCard"),M=Object(n["x"])("Loading");return Object(n["q"])(),Object(n["d"])("div",null,[Object(n["h"])(T,{page:"home"}),Object(n["h"])("div",i,[Object(n["h"])(k),e.$store.state.isLoading?Object(n["e"])("",!0):(Object(n["q"])(),Object(n["d"])("div",a,[Object(n["h"])("div",c,[Object(n["h"])("div",r,[u,d,Object(n["h"])("div",o,[Object(n["h"])("button",{class:"btn-primary",onClick:t[1]||(t[1]=function(t){return e.$router.push("/add-issue")})}," Add new issue "),Object(n["h"])("button",{class:"btn-primary",onClick:t[2]||(t[2]=function(t){return e.$router.push("/board")})}," View all issues ")])]),Object(n["h"])("div",l,[Object(n["h"])("div",b,[Object(n["h"])(w,{cardType:"total-card",count:e.$store.getters.getTaskCount.total,type:"Total"},null,8,["count"]),Object(n["h"])(w,{cardType:"count-card",count:e.$store.getters.getTaskCount.done,type:"Done"},null,8,["count"]),Object(n["h"])(w,{cardType:"count-card",count:e.$store.getters.getTaskCount.todo,type:"Todo"},null,8,["count"]),Object(n["h"])(w,{cardType:"count-card",count:e.$store.getters.getTaskCount.doing,type:"Doing"},null,8,["count"])])])]),e.$store.getters.hasDeadlineIssues?(Object(n["q"])(),Object(n["d"])("div",h,[f,Object(n["h"])("div",p,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(e.$store.state.deadlineIssues,(function(e,t){return Object(n["q"])(),Object(n["d"])("div",{key:e.id},[Object(n["h"])(x,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status,index:t,type:"DEADLINE"},null,8,["issueNumber","title","deadline","startDate","issueStatus","index"])])})),128))])])):Object(n["e"])("",!0),e.$store.getters.hasRecentIssues?(Object(n["q"])(),Object(n["d"])("div",O,[v,Object(n["h"])("div",j,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(e.$store.state.recentIssues,(function(e,t){return Object(n["q"])(),Object(n["d"])("div",{key:e.id},[Object(n["h"])(x,{issueNumber:e.id,title:e.title,deadline:e.end_date,startDate:e.created_at,issueStatus:e.status,index:t,type:"RECENT"},null,8,["issueNumber","title","deadline","startDate","issueStatus","index"])])})),128))])])):Object(n["e"])("",!0),e.$store.getters.hasEmptyActionItems?(Object(n["q"])(),Object(n["d"])("div",g,[y,Object(n["h"])("div",C,[Object(n["h"])(E,{cardType:"deadline"}),Object(n["h"])(E,{cardType:"recent"})])])):Object(n["e"])("",!0)])),e.$store.state.isLoading?(Object(n["q"])(),Object(n["d"])("div",m,[Object(n["h"])(M)])):Object(n["e"])("",!0)])])}var S=s("d178"),N=s("ddc0"),T={class:"count"},k={class:"type"};function w(e,t,s,i,a,c){return Object(n["q"])(),Object(n["d"])("div",{class:["task-count","total-card"==s.cardType?"total":"task-count"]},[Object(n["h"])("div",null,[Object(n["h"])("div",T,Object(n["z"])(s.count),1),Object(n["h"])("div",k,Object(n["z"])(s.type),1)])],2)}s("a9e3");var x={name:"IssueCount",props:{cardType:String,count:Number,type:String}};s("117a");x.render=w;var E=x,M=s("5bba"),D={class:"task update"},L={class:"info"},A=Object(n["h"])("div",{class:"icon"},[Object(n["h"])("span",{class:"material-icons"}," thumb_up ")],-1),$={class:"meesage"};function q(e,t,s,i,a,c){return Object(n["q"])(),Object(n["d"])("div",D,[Object(n["h"])("div",L,[A,Object(n["h"])("div",$,Object(n["z"])(c.getMessage),1)])])}var _={name:"IssueStatusInfoCard",props:["cardType"],computed:{getMessage:function(){return"deadline"===this.cardType?"No deadline issues.":"No issues recently updated."}}};s("6a2a");_.render=q;var F=_,R=s("3a5e"),Y={name:"Home",components:{Navbar:S["a"],Topbar:N["a"],IssueCount:E,IssueCard:M["a"],IssueStatusInfoCard:F,Loading:R["a"]},mounted:function(){this.$store.getters.isUserInfoLoaded||this.$store.dispatch("loadUserInfo")}};s("727d");Y.render=I;t["default"]=Y},c4e1:function(e,t,s){},cb29:function(e,t,s){var n=s("23e7"),i=s("81d5"),a=s("44d2");n({target:"Array",proto:!0},{fill:i}),a("fill")},fb6a:function(e,t,s){"use strict";var n=s("23e7"),i=s("861d"),a=s("e8b5"),c=s("23cb"),r=s("50c4"),u=s("fc6a"),d=s("8418"),o=s("b622"),l=s("1dde"),b=l("slice"),h=o("species"),f=[].slice,p=Math.max;n({target:"Array",proto:!0,forced:!b},{slice:function(e,t){var s,n,o,l=u(this),b=r(l.length),O=c(e,b),v=c(void 0===t?b:t,b);if(a(l)&&(s=l.constructor,"function"!=typeof s||s!==Array&&!a(s.prototype)?i(s)&&(s=s[h],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return f.call(l,O,v);for(n=new(void 0===s?Array:s)(p(v-O,0)),o=0;O<v;O++,o++)O in l&&d(n,o,l[O]);return n.length=o,n}})}}]);
//# sourceMappingURL=chunk-edea453c.20104517.js.map