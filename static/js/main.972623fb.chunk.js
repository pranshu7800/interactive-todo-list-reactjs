(this["webpackJsonpinteractive-todo-list-app"]=this["webpackJsonpinteractive-todo-list-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),s=n.n(i),r=(n(13),n(8)),o=n(6),d=n(3),l=(n(14),n(0));var j=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(function(){var e=localStorage.getItem("myTodoList");return e?JSON.parse(e):[]}()),s=Object(d.a)(i,2),j=s[0],u=s[1],b=Object(c.useState)(""),f=Object(d.a)(b,2),m=f[0],O=f[1],h=Object(c.useState)(!1),x=Object(d.a)(h,2),v=x[0],g=x[1];Object(c.useEffect)((function(){localStorage.setItem("myTodoList",JSON.stringify(j))}),[j]);var p=function(){if(n)if(n&&v)u(j.map((function(e){return e.id===m?Object(o.a)(Object(o.a)({},e),{},{name:n}):e}))),a([]),O(null),g(!1);else{var e={id:(new Date).getTime().toString(),name:n};u([].concat(Object(r.a)(j),[e])),a("")}else alert("Please enter the data")};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"main-div",children:Object(l.jsxs)("div",{className:"child-div",children:[Object(l.jsxs)("figure",{children:[Object(l.jsx)("img",{src:"todo.svg"}),Object(l.jsx)("figcaption",{children:Object(l.jsx)("strong",{children:"Add Your To-Do List Here \ud83d\udc47\ud83c\udffb"})})]}),Object(l.jsxs)("div",{className:"addItems",children:[Object(l.jsx)("input",{text:"text",placeholder:"\u270d\ud83c\udffb Add Item",className:"form-control",value:n,onChange:function(e){return a(e.target.value)}}),v?Object(l.jsx)("i",{className:"fa fa-edit add-btn",onClick:p}):Object(l.jsx)("i",{className:"fa fa-plus add-btn",onClick:p})]}),Object(l.jsx)("div",{className:"showItems",children:j.map((function(e){return Object(l.jsxs)("div",{className:"eachItem",children:[Object(l.jsxs)("h3",{children:["\u2b50",e.name]}),Object(l.jsxs)("div",{className:"todo-btn",children:[Object(l.jsx)("i",{className:"far fa-edit add-btn",onClick:function(){return function(e){var t=j.find((function(t){return t.id===e}));a(t.name),O(e),g(!0)}(e.id)}}),Object(l.jsx)("i",{className:"far fa-trash-alt add-btn",onClick:function(){return function(e){var t=j.filter((function(t){return t.id!==e}));u(t)}(e.id)}})]})]},e.id)}))}),Object(l.jsx)("div",{className:"showItems",children:Object(l.jsx)("button",{className:"btn effect04","data-sm-link-text":"Remove All\u274c",onClick:function(){u([])},children:Object(l.jsx)("span",{children:" CHECK LIST\u2705"})})})]})})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),u()}},[[16,1,2]]]);
//# sourceMappingURL=main.972623fb.chunk.js.map