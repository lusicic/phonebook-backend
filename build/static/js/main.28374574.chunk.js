(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(15),a=t.n(c),r=t(6),o=t(3),u=t(1),s=t(0),i=function(e){var n=e.searchTerm,t=e.handleSearch;return Object(s.jsxs)("div",{children:["filter shown with"," ",Object(s.jsx)("input",{type:"text",placeholder:"Search",value:n,onChange:t})]})},l=function(e){var n=e.addPerson,t=e.newName,c=e.handleNameChange,a=e.newNumber,r=e.handleNumberChange;return Object(s.jsxs)("form",{onSubmit:n,children:[Object(s.jsx)("h2",{children:"add new person"}),Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{value:t,onChange:c})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{value:a,onChange:r})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.persons,t=e.deletePerson;return Object(s.jsx)("ul",{children:n.map((function(e){return Object(s.jsxs)("li",{children:[e.name," ",e.number,Object(s.jsx)("button",{onClick:function(){return t(e)},children:"delete"})," "]},e.name)}))})},j=function(e){var n=e.message,t=e.success;return null===n?null:!0===t?Object(s.jsx)("div",{className:"message",children:n}):Object(s.jsx)("div",{className:"error",children:n})},h=t(4),b=t.n(h),f="/api/persons",m=function(){return b.a.get(f).then((function(e){return e.data}))},O=function(e){return b.a.post(f,e).then((function(e){return e.data}))},p=function(e,n){return b.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return b.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},v=(t(39),function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(u.useState)(""),h=Object(o.a)(a,2),b=h[0],f=h[1],v=Object(u.useState)(""),x=Object(o.a)(v,2),w=x[0],N=x[1],S=Object(u.useState)(""),C=Object(o.a)(S,2),y=C[0],k=C[1],P=Object(u.useState)(null),D=Object(o.a)(P,2),J=D[0],L=D[1],T=Object(u.useState)(null),E=Object(o.a)(T,2),I=E[0],B=E[1];Object(u.useEffect)((function(){m().then((function(e){c(e)})).catch((function(e){return console.log("fail")}))}),[]);var q=y?t.filter((function(e){return e.name.toLowerCase().includes(y.toLocaleLowerCase())})):t,z=function(e,n){L(e),B(n),setTimeout((function(){L(null),B(null)}),5e3)};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(i,{searchTerm:y,handleSearch:function(e){console.log(e.target.value),k(e.target.value)}}),Object(s.jsx)(j,{message:J,success:I}),Object(s.jsx)(l,{addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(b)){if(window.confirm("".concat(b," is already in phonebook. Do you want to replace the number?"))){var n=t.find((function(e){return e.name===b})),a=Object(r.a)(Object(r.a)({},n),{},{number:w}),o=n.id;p(o,a).then((function(e){c(t.map((function(n){return n.id!==o?n:e}))),f(""),N("")})).catch((function(e){console.log("fail"),z("Information of ".concat(b," is already there"),!1),f(""),N("")}))}}else O({name:b,number:w}).then((function(e){c(t.concat(e)),z("".concat(b," successfully added"),!0),f(""),N("")})).catch((function(e){z(JSON.stringify(e.response.data.error),!1),console.log(e.response.data)}))},newName:b,newNumber:w,handleNameChange:function(e){console.log(e.target.value),f(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),N(e.target.value)}}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(d,{persons:q,deletePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&g(e.id).then(c(t.filter((function(n){return n.id!==e.id})))).catch((function(e){return console.log("fail")}))}})]})});a.a.render(Object(s.jsx)(v,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.28374574.chunk.js.map