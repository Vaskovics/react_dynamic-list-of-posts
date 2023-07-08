(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{19:function(e,t,s){},22:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var c=s(11),a=s.n(c),n=s(2),i=s(1),l=(s(17),s(18),s(19),s(3)),r=s.n(l),o=s(0),d=function(e){var t=e.posts,s=e.onSelectPost,c=e.selectedPost,a=function(){s(null)};return Object(o.jsx)(o.Fragment,{children:t.length>0&&Object(o.jsxs)("div",{"data-cy":"PostsList",children:[Object(o.jsx)("p",{className:"title",children:"Posts:"}),Object(o.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{className:"has-background-link-light",children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"Post",children:[Object(o.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(o.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:(null===c||void 0===c?void 0:c.id)===e.id?Object(o.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link",onClick:a,children:"Close"}):Object(o.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:function(){return function(e){s(e)}(e)},children:"Open"})})]},e.id)}))})]})]})})},j=s(7),m=s(4),u=s.n(m),b=(s(22),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),h=s(12),O=s(8),x=s(10),f="https://mate.academy/students-api";function p(e){return new Promise((function(t){setTimeout(t,e)}))}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return s&&(c.body=JSON.stringify(s),c.headers={"Content-Type":"application/json; charset=UTF-8"}),p(300).then((function(){return fetch(f+e,c)})).then((function(e){return e.json()}))}var v,y=function(e){return N(e)},g=function(e,t){return N(e,"POST",t)},S=function(e){return N(e,"DELETE")};!function(e){e.none="",e.general="Something went wrong!",e.noPosts="No posts yet"}(v||(v={}));var C=function(e){return{name:"",email:"",body:"",postId:e}},P=function(e){var t=e.postId,s=e.updatePostComments,c=e.updateErrorStatus,a=Object(i.useState)(C(t)),l=Object(n.a)(a,2),d=l[0],m=l[1],b=Object(i.useState)(!1),f=Object(n.a)(b,2),p=f[0],N=f[1],y=Object(i.useState)(!0),S=Object(n.a)(y,2),P=S[0],k=S[1],w=Object(i.useState)(!0),E=Object(n.a)(w,2),T=E[0],F=E[1],I=Object(i.useState)(!0),U=Object(n.a)(I,2),B=U[0],D=U[1],L=function(e){var t=e.target,s=t.name,c=t.value;"name"!==s||P||k(!0),"email"!==s||T||F(!0),"body"!==s||B||D(!0),m((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(O.a)({},s,c))}))},M=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!0),e.next=4,g("/comments",d);case 4:t=e.sent,s((function(e){return[].concat(Object(h.a)(e),[t])})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c(v.general);case 11:return e.prev=11,N(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){var s;e.preventDefault(),d.name||(k(!1),s=!0),d.email||(F(!1),s=!0),d.body||(D(!1),s=!0),s||(M(),m(C(t)))},children:[Object(o.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:r()("input",{"is-danger":!P}),onChange:L,value:d.name}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-user"})}),!P&&Object(o.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),!P&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(o.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(o.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(o.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:r()("input",{"is-danger":!T}),value:d.email,onChange:L}),Object(o.jsx)("span",{className:"icon is-small is-left",children:Object(o.jsx)("i",{className:"fas fa-envelope"})}),!T&&Object(o.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(o.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),!T&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(o.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(o.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:r()("textarea",{"is-danger":!B}),value:d.body,onChange:L})}),!B&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"submit",className:r()("button","is-link",{"is-loading":p}),children:"Add"})}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{type:"reset",className:"button is-link is-light",children:"Clear"})})]})]})},k=function(e){var t=e.selectedPost,s=Object(i.useState)([]),c=Object(n.a)(s,2),a=c[0],l=c[1],r=Object(i.useState)(!1),d=Object(n.a)(r,2),m=d[0],h=d[1],O=Object(i.useState)(!1),x=Object(n.a)(O,2),f=x[0],p=x[1],N=Object(i.useState)(v.none),g=Object(n.a)(N,2),C=g[0],k=g[1];if(Object(i.useEffect)((function(){var e;return k(v.none),t&&(h(!0),(e=t.id,y("/comments?postId=".concat(e))).then((function(e){l(e)})).catch((function(){l([]),k(v.general)})).finally((function(){h(!1)}))),function(){p(!1)}}),[t]),!t)return Object(o.jsx)("div",{children:"No post selected"});var w=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{S("/comments/".concat(t)),l(a.filter((function(e){return e.id!==t})))}catch(s){k(v.general)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(o.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(o.jsxs)("div",{className:"block",children:[Object(o.jsx)("h2",{"data-cy":"PostTitle",children:t.title}),Object(o.jsx)("p",{"data-cy":"PostBody",children:t.body})]}),Object(o.jsxs)("div",{className:"block",children:[C&&Object(o.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),!a.length&&!C&&Object(o.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),a.length?Object(o.jsx)("p",{className:"title is-4",children:"Comments:"}):"",m&&Object(o.jsx)(b,{}),a.map((function(e){return Object(o.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(o.jsxs)("div",{className:"message-header",children:[Object(o.jsx)("a",{href:"mailto:".concat(e.email),"data-cy":"CommentAuthor",children:e.name}),Object(o.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return w(e.id)},children:"delete button"})]}),Object(o.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:e.body})]})})),!f&&Object(o.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){p(!0)},children:"Write a comment"})]}),f&&Object(o.jsx)(P,{postId:t.id,updatePostComments:l,updateErrorStatus:k})]})})},w=function(e){var t=e.listOfUserf,s=e.saveSelectedUser,c=e.choosenUser,a=Object(i.useState)(!1),l=Object(n.a)(a,2),d=l[0],j=l[1];return Object(o.jsxs)("div",{"data-cy":"UserSelector",className:r()("dropdown",{"is-active":d}),children:[Object(o.jsx)("div",{className:"dropdown-trigger",children:Object(o.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return j(!d)},children:[null!==c&&void 0!==c&&c.name?Object(o.jsx)("p",{children:c.name}):Object(o.jsx)("span",{children:"Choose a user"}),Object(o.jsx)("span",{className:"icon is-small",children:Object(o.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(o.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(o.jsx)("div",{className:"dropdown-content",children:t.map((function(e,t){return Object(o.jsx)("a",{href:"#user=".concat(t+1),className:r()("dropdown-item",{"is-active":e.id===(null===c||void 0===c?void 0:c.id)}),onClick:function(){s(e),j(!1)},children:e.name},e.id)}))})})]})},E=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),s=t[0],c=t[1],a=Object(i.useState)([]),l=Object(n.a)(a,2),j=l[0],m=l[1],u=Object(i.useState)(null),h=Object(n.a)(u,2),O=h[0],x=h[1],f=Object(i.useState)(null),p=Object(n.a)(f,2),N=p[0],g=p[1],S=Object(i.useState)(v.none),C=Object(n.a)(S,2),P=C[0],E=C[1],T=Object(i.useState)(!1),F=Object(n.a)(T,2),I=F[0],U=F[1];return Object(i.useEffect)((function(){y("/users").then((function(e){c(e)}))}),[]),Object(i.useEffect)((function(){var e;O&&(U(!0),E(v.none),(e=O.id,y("/posts?userId=".concat(e))).then((function(e){m(e),e.length||E(v.noPosts)})).finally((function(){U(!1),g(null)})))}),[O]),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"tile is-ancestor",children:[Object(o.jsx)("div",{className:"tile is-parent",children:Object(o.jsxs)("div",{className:"tile is-child box is-success",children:[Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(w,{listOfUserf:s,saveSelectedUser:function(e){return x(e)},choosenUser:O})}),Object(o.jsxs)("div",{className:"block","data-cy":"MainContent",children:[O?null:Object(o.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),I&&Object(o.jsx)(b,{}),P&&Object(o.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),O&&Object(o.jsx)(d,{posts:j,onSelectPost:g,selectedPost:N})]})]})}),N&&Object(o.jsx)("div",{"data-cy":"Sidebar",className:r()("tile","is-parent","is-8-desktop","Sidebar","Sidebar--open"),children:Object(o.jsx)("div",{className:"tile is-child box is-success ",children:Object(o.jsx)(k,{selectedPost:N})})})]})})})};a.a.render(Object(o.jsx)(E,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.2fb16830.chunk.js.map