(this["webpackJsonpinfinite-scroll"]=this["webpackJsonpinfinite-scroll"]||[]).push([[0],{23:function(n,t,e){},24:function(n,t,e){},26:function(n,t,e){},27:function(n,t,e){},46:function(n,t,e){"use strict";e.r(t);var c=e(1),i=e.n(c),r=e(15),s=e.n(r),a=(e(23),e(6)),o=e(18),j=(e(24),e(0)),l=function(){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"React infiniteScroll."})})},u=(e(26),function(){return Object(j.jsx)("div",{className:"container-loader",children:Object(j.jsx)("div",{class:"loadingio-spinner-eclipse-6znzqgv3c99",children:Object(j.jsx)("div",{class:"ldio-0vml7y83m86",children:Object(j.jsx)("div",{})})})})}),d=(e(27),function(n){var t=n.url,e=n.key;return Object(j.jsx)("img",{src:t},e)}),b=e(16),f=e(17),h=e.n(f);var O=function(){var n=Object(c.useState)([]),t=Object(o.a)(n,2),e=t[0],i=t[1];Object(c.useEffect)((function(){r()}),[]);var r=function(){h.a.get("".concat("https://api.unsplash.com","/photos/random?client_id=").concat("q41_mwCvX_lnlofGffrwzZSHm8JUHHpRu-NIB4_Ozak","&count=12")).then((function(n){return i([].concat(Object(a.a)(e),Object(a.a)(n.data)))}))};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsx)(b.a,{dataLength:e.length,next:r,hasMore:!0,loader:Object(j.jsx)(u,{}),children:e.map((function(n){return Object(j.jsx)(d,{url:n.urls.thumb},n.id)}))})]})};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.82fbddac.chunk.js.map