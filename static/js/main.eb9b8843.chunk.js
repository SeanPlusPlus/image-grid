(this["webpackJsonpimage-grid"]=this["webpackJsonpimage-grid"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(5),c=n.n(r),s=(n(12),n(13),n(0));var o=function(e){var t=e.total;return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"toast-header",children:[Object(s.jsx)("strong",{className:"me-auto",children:"Image Grid"}),Object(s.jsx)("small",{children:"Click on an image to remove it"})]}),Object(s.jsxs)("div",{className:"toast-body",children:["Display images of varying heights in ",Object(s.jsx)("code",{children:t})," columns, such that the column height balances out"]})]})})})},h=n(6),u=n(7);function l(e){return"https://dummyimage.com/600x".concat(e,"/D3D3D3/111")}function g(e){for(var t=[],n=0;n<e.length;n++){var a=e[n];if(0===a.images.length)return n;t.push(a.height)}return t.indexOf(Math.min.apply(Math,t))}function m(e){for(var t=[],n=0;n<e;n++)t[n]={images:[],height:0};return t}function d(e){return Object(u.a)(Array(e)).map((function(){return e=200,t=400,Math.floor(Math.random()*(t-e)+e);var e,t}))}var f=function(e){var t=e.total,n=Object(a.useState)([]),i=Object(h.a)(n,2),r=i[0],c=i[1],o=d(13),u=[],f=m(t);function j(e){e.preventDefault();var n=parseInt(e.target.id,10);c(function(e,t,n){for(var a=[],i=0;i<e.length;i++)for(var r=e[i],c=0;c<r.images.length;c++)r.images[c].id!==t&&a.push(r.images[c]);var s=m(n);return a.forEach((function(e){var t=g(s,e.height);s[t].images.push(e),s[t].height+=parseInt(e.height,10)})),s}(r,n,t))}function v(e){e.preventDefault();var n=d(13),a=[],i=m(t);n.forEach((function(e,t){var n=l(e),i=new Image;a.push(new Promise((function(e){i.onload=function(){e({height:i.height,src:n,id:t})}}))),i.src=n})),Promise.all(a).then((function(e){e.forEach((function(e){var t=g(i,e.height);i[t].images.push(e),i[t].height+=parseInt(e.height,10)})),c(i)}))}return o.forEach((function(e,t){var n=l(e),a=new Image;u.push(new Promise((function(e){a.onload=function(){e({height:a.height,src:n,id:t})}}))),a.src=n})),Object(a.useEffect)((function(){Promise.all(u).then((function(e){e.forEach((function(e){var t=g(f,e.height);f[t].images.push(e),f[t].height+=parseInt(e.height,10)})),c(f)}))}),[]),Object(s.jsx)(s.Fragment,{children:r.map((function(e,t){return Object(s.jsxs)("div",{className:"col",children:[e.images.map((function(e){return Object(s.jsx)("img",{id:e.id,src:e.src,alt:e.src,onClick:j},e.id)})),0===t&&0===e.images.length&&Object(s.jsx)("div",{className:"play-again",children:Object(s.jsx)("button",{type:"button",className:"btn btn-primary",onClick:v,children:"Play Again"})})]},t)}))})};var j=function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)(o,{total:3}),Object(s.jsx)(f,{total:3})]})})};c.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.eb9b8843.chunk.js.map