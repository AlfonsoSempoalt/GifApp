(this["webpackJsonpgifs-app"]=this["webpackJsonpgifs-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),i=n.n(c),r=n(2),s=n(10),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(r.a)(n,2),i=c[0],o=c[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>1&&(t((function(e){return[i].concat(Object(s.a)(e))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}})}),Object(u.jsx)("input",{type:"submit",value:"Limpiar Busqueda",onClick:function(){t([""])},id:"clearBtn"})]})},j=n(7),d=function(e){var t=e.url,n=e.title;e.id;return Object(u.jsxs)("section",{className:"card animate__animated animate__fadeIn ",children:[Object(u.jsx)("img",{src:t,alt:n}),Object(u.jsx)("h4",{children:n})]})},l=n(6),b=n.n(l),m=n(9),f=function(){var e=Object(m.a)(b.a.mark((function e(t){var n,a,c,i,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t)," &limit=15&api_key=XldqhgQr2Dgg65t15bK7dGk8ztMOxsTL"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.data,r=i.map((function(e){var t;return{id:e.id,title:null===e||void 0===e?void 0:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(r.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){i({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,i=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"animate__animated animate__fadeIn",children:t}),i&&Object(u.jsx)("p",{className:"animate__animated animate__flash ",children:"loading..."}),Object(u.jsxs)("section",{className:"card-grid",children:[Object(u.jsx)("p",{}),c.map((function(e){return Object(a.createElement)(d,Object(j.a)(Object(j.a)({},e),{},{key:e.id}))}))]})]})},O=function(){var e=Object(a.useState)(["One piece"]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"GifApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(p,{category:e},e)}))})]})},h=(n(17),document.getElementById("root"));i.a.render(Object(u.jsx)(O,{}),h)}},[[18,1,2]]]);
//# sourceMappingURL=main.3eb2f7d5.chunk.js.map