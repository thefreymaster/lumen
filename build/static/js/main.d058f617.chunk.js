(this.webpackJsonprainmaker=this.webpackJsonprainmaker||[]).push([[0],{140:function(e,t){},209:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),c=n.n(i),r=(n(91),n(12)),l=(n(92),n(93),n(21)),s=n.n(l),u=n(210),f=n(212),m=n(36),d=n.n(m),v=n(22),h=n.n(v),g=d()("http://localhost:6700"),E=function(e){var t=e.zone,n=e.setZones;return o.a.createElement(u.a,{key:t.zone,cover:o.a.createElement("img",{style:{width:window.innerWidth/5,filter:t.active?"grayscale(0)":"grayscale(1)",transition:"filter 350ms ease-in-out"},src:"/api/zone/image/".concat(t.zone)}),style:{width:window.innerWidth/5}},o.a.createElement(u.a.Meta,{avatar:o.a.createElement("i",{class:"fas fa-tint"}),title:t.name,description:t.uptime?o.a.createElement(p,{time:t.uptime}):"Not Watering"}),o.a.createElement("br",null),o.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"}},o.a.createElement(f.a,{onChange:function(){return t.active?function(e){var t=e.zone,n=e.setZones;return s.a.get("/api/zone/off/".concat(t.zone)).then((function(e){return n(e.data)})).catch((function(e){console.log(e)}))}({zone:t,setZones:n}):function(e){var t=e.zone,n=e.setZones;s.a.get("/api/zone/on/".concat(t.zone)).then((function(e){n(e.data)})).catch((function(e){console.log(e)}))}({zone:t,setZones:n})},checked:t.active,defaultChecked:t.active}),o.a.createElement(w,{zone:t})))},p=function(e){var t=e.time;return o.a.createElement(h.a,{initialTime:new Date-Date.parse(t)},o.a.createElement(h.a.Minutes,null),":",o.a.createElement(h.a.Seconds,null)," minutes")},w=function(e){var t=e.zone;return o.a.createElement("div",{style:{marginLeft:10,fontWeight:t.active?700:300,color:t.active&&"#1890ff"}},t.active?"Active":"Inactive")},z=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!0),l=Object(r.a)(c,2),u=l[0],f=l[1];return Object(a.useLayoutEffect)((function(){g.on("connection",(function(e){console.log(e)})),g.on("zones_update",(function(e){console.log(e),i(e)})),s.a.get("/api/zones").then((function(e){return e})).catch((function(e){console.log(e)})).then((function(e){var t=e.data;i(t),f(!1)}))}),[]),u?"Loading":n.map((function(e){return o.a.createElement(E,{zone:e,setZones:i})}))},y=n(213),b=y.a.Header,k=y.a.Footer,j=(y.a.Sider,y.a.Content);var x=function(){var e=o.a.useState(window.innerHeight-129),t=Object(r.a)(e,2),n=t[0],a=t[1],i={zones:{height:n,flexWrap:"wrap"}};return window.addEventListener("resize",(function(){a(window.innerHeight-129)})),o.a.createElement(y.a,null,o.a.createElement(b,null,o.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},o.a.createElement("div",{style:{color:"white",fontWeight:900}},"Rainmaker"))),o.a.createElement(y.a,null,o.a.createElement(j,null,o.a.createElement("div",{className:"zones-container",style:i.zones},o.a.createElement(z,null)))),o.a.createElement(k,null,o.a.createElement("div",{style:{display:"flex",justifyContent:"center",fontSize:11,color:"#b4b6ba"}},"Canvas 23 Studios")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t,n){e.exports=n(209)},91:function(e,t,n){},92:function(e,t,n){e.exports=n.p+"static/media/logo.fd10fc13.svg"},93:function(e,t,n){}},[[86,1,2]]]);
//# sourceMappingURL=main.d058f617.chunk.js.map