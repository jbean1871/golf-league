(function(e){function n(n){for(var a,r,u=n[0],i=n[1],d=n[2],s=0,l=[];s<u.length;s++)r=u[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(n);while(l.length)l.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],a=!0,r=1;r<t.length;r++){var u=t[r];0!==o[u]&&(a=!1)}a&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},r={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0ef3dd64":"3e14330b","chunk-272cb452":"3989a442","chunk-2d0a31e2":"71f4a587","chunk-2d0ae9a8":"85831871","chunk-2d0aed75":"5f3a7ed7","chunk-2d0b72a8":"f3665646","chunk-2d0c8e41":"24b59f9d","chunk-2d210801":"522e21fc","chunk-2d221d88":"34c329ea","chunk-6dcca856":"87c088d4","chunk-759e4f07":"5e0b7754","chunk-b2fd574e":"5819f969"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0ef3dd64":1,"chunk-272cb452":1,"chunk-6dcca856":1,"chunk-759e4f07":1,"chunk-b2fd574e":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-0ef3dd64":"168282fc","chunk-272cb452":"afd8fc12","chunk-2d0a31e2":"31d6cfe0","chunk-2d0ae9a8":"31d6cfe0","chunk-2d0aed75":"31d6cfe0","chunk-2d0b72a8":"31d6cfe0","chunk-2d0c8e41":"31d6cfe0","chunk-2d210801":"31d6cfe0","chunk-2d221d88":"31d6cfe0","chunk-6dcca856":"e9fe7813","chunk-759e4f07":"1e6e2c10","chunk-b2fd574e":"48791a3d"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var d=c[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===a||s===o))return n()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){d=l[u],s=d.getAttribute("data-href");if(s===a||s===o)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var a=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),t(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var c=new Promise((function(n,t){a=o[e]=[n,t]}));n.push(a[2]=c);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var l=new Error;d=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,t[1](l)}o[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:s})}),12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n),t.d(n,"db",(function(){return O}));t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nav",{staticClass:"navbar navbar-dark justify-content-between flex-nowrap flex-row"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"navbar-brand float-left",attrs:{id:"spl_logo",to:"/"}},[t("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/golf-f56a7.appspot.com/o/spl_2021.png?alt=media&token=6d878ce5-69a0-421e-a5f7-aefabeba6bd6",alt:"Seacoast Premiere League 2021"}})]),t("ul",{staticClass:"nav navbar-nav flex-row float-right"},[t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link pr-3 spl-link",attrs:{to:"/teams"}},[e._v("Teams")])],1),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link pr-3 spl-link",attrs:{to:"/scoreboard"}},[e._v("Leaderboard")])],1)])],1)]),t("div",[t("router-view")],1)])},o=[],c=(t("ac1f"),t("5319"),t("5530")),u=t("2f62"),i=t("2591"),d={computed:Object(c["a"])({},Object(u["b"])({user:"user"})),methods:{signOut:function(){var e=this;i["a"].auth().signOut().then((function(){e.$router.replace({name:"login"})}))}}},s=d,l=(t("5c0b"),t("2877")),f=Object(l["a"])(s,r,o,!1,null,null,null),h=f.exports,p=(t("d3b7"),t("8c4f"));a["a"].use(p["a"]);var m=[{path:"/add",name:"add",component:function(){return t.e("chunk-2d0ae9a8").then(t.bind(null,"0b88"))}},{path:"/list",name:"list",component:function(){return t.e("chunk-0ef3dd64").then(t.bind(null,"74b3"))}},{path:"/scoreboard",name:"scoreboard",component:function(){return t.e("chunk-272cb452").then(t.bind(null,"38d9"))}},{path:"/teams",name:"teams",component:function(){return t.e("chunk-759e4f07").then(t.bind(null,"da13"))}},{path:"/",name:"home",component:function(){return t.e("chunk-b2fd574e").then(t.bind(null,"57da"))}},{path:"/edit/:id",name:"edit",component:function(){return t.e("chunk-2d210801").then(t.bind(null,"b7c9"))}},{path:"/editTeam/:id",name:"editTeam",component:function(){return t.e("chunk-2d0a31e2").then(t.bind(null,"018c"))}},{path:"/teamScores/:id",name:"teamScores",component:function(){return t.e("chunk-6dcca856").then(t.bind(null,"0774"))}},{path:"/login",name:"login",component:function(){return t.e("chunk-2d0c8e41").then(t.bind(null,"578a"))}},{path:"/register",name:"register",component:function(){return t.e("chunk-2d0b72a8").then(t.bind(null,"1feb"))}},{path:"/dashboard",name:"dashboard",component:function(){return t.e("chunk-2d0aed75").then(t.bind(null,"0c7c"))}},{path:"/updateRound/:id/:round",name:"updateRound",component:function(){return t.e("chunk-2d221d88").then(t.bind(null,"cba4"))}}],b=new p["a"]({mode:"history",base:"/",routes:m}),g=b,k=t("260b");t("e71f"),t("ea7b");a["a"].use(u["a"]);var v=new u["a"].Store({state:{user:{loggedIn:!1,data:null}},getters:{user:function(e){return e.user}},mutations:{SET_LOGGED_IN:function(e,n){e.user.loggedIn=n},SET_USER:function(e,n){e.user.data=n}},actions:{fetchUser:function(e,n){var t=e.commit;t("SET_LOGGED_IN",null!==n),n?(t("SET_USER",{email:n.email,displayName:n.displayName}),console.log(n)):t("SET_USER",null)}}}),y=t("ecee"),w=t("c074"),S=t("ad3d");t("ab8b");a["a"].config.productionTip=!1,y["c"].add(w["a"]),a["a"].component("font-awesome-icon",S["a"]);var _={apiKey:"AIzaSyD2XZGQnge48oLnbtYVYvYikQWbbIgDUr0",authDomain:"golf-f56a7.firebaseapp.com",projectId:"golf-f56a7",storageBucket:"golf-f56a7.appspot.com",messagingSenderId:"1731750651",appId:"1:1731750651:web:8bc1bc061545881a945e5e",measurementId:"G-K55M36M1RJ"},E=k["a"].initializeApp(_);k["a"].auth().onAuthStateChanged((function(e){v.dispatch("fetchUser",e)}));var O=E.firestore();new a["a"]({router:g,store:v,render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.6cc0b8eb.js.map