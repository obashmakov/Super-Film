(this["webpackJsonpsuper-film"]=this["webpackJsonpsuper-film"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n(6),r=n.n(s),i=n(2),o=n(23),u=["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],l=[31,28,31,30,31,30,31,31,30,31,30,31],j=[6,0,1,2,3,4,5],b=1;function d(e,t){for(var n=[],c=new Date(e,t),a=function(e){var t=e.getMonth(),n=e.getFullYear(),c=l[t];return function(e){return!(e%4||!(e%100)&&e%400)}(n)&&t===b?c+1:c}(c),s=function(e){var t=e.getDay();return j[t]}(c),r=1,i=0;i<(a+s)/7;i++){n[i]=[];for(var o=0;o<7;o++)n[i][o]=0===i&&o<s||r>a?void 0:new Date(e,t,r++)}return n}n(12);var m=function(e){var t=e.onChange,n=Object(a.useState)(new Date),s=Object(i.a)(n,2),r=s[0],l=s[1],j=u,b=r.getFullYear(),m=r.getMonth(),h=String(new Date).slice(0,15),O=d(r.getFullYear(),r.getMonth());return Object(c.jsxs)("div",{className:"calendar",children:[Object(c.jsxs)("div",{className:"calendar__header",children:[Object(c.jsx)("button",{className:"calendar__button",type:"button",onClick:function(){l(new Date(b,m-1))},children:"<"}),Object(c.jsx)("span",{className:"calendar__month",children:"".concat(j[r.getMonth()])}),Object(c.jsx)("button",{className:"calendar__button",type:"button",onClick:function(){l(new Date(b,m+1))},children:">"})]}),Object(c.jsx)("table",{className:"calendar__table",children:Object(c.jsx)("tbody",{children:O.map((function(e){return Object(c.jsx)("tr",{className:"calendar__row",children:e.map((function(e){return e?Object(c.jsx)("td",{className:h===String(e).slice(0,15)?"calendar__day calendar__day--selected":"calendar__day",onClick:function(){return function(e){t(e)}(e)},children:e.getDate()},Object(o.a)()):Object(c.jsx)("td",{className:"calendar__day"},Object(o.a)())}))},Object(o.a)())}))})})]})},h=(n(13),function(e){var t=e.date,n=e.setDate;return Object(c.jsxs)("header",{className:"header",children:["Super Film",null!==t&&Object(c.jsx)("button",{className:"header__button",type:"button",onClick:function(){return n(null)}})]})}),O=n.p+"static/media/TVimage.08120a3d.png",f=(n(14),function(){return Object(c.jsxs)("section",{className:"content",children:[Object(c.jsx)("img",{className:"content__img",src:O,alt:"tv"}),Object(c.jsx)("p",{className:"content__text",children:"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043f\u0438\u0441\u043a\u0430 \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u043c\u0435\u0441\u044f\u0446 \u0438 \u0434\u0435\u043d\u044c."})]})}),_=n(3),x=n.n(_),v=n(4),p=function(){var e=Object(v.a)(x.a.mark((function e(t,n){var c,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.tvmaze.com/schedule").concat(t),n);case 2:if(c=e.sent){e.next=5;break}throw new Error("".concat(c.status," - ").concat(c.statusText));case 5:return e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(v.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("?country=US&date=".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=n.p+"static/media/arrowDown.ce6cdfc6.svg",w=(n(16),function(e){var t=e.setIsClicked,n=e.quantity;return Object(c.jsxs)("button",{className:"movies__button",type:"button",onClick:function(){t(!0)},children:["Show ".concat(n," More"),Object(c.jsx)("img",{className:"movies__arrow",src:N,alt:"arrow"})]})}),y=(n(17),function(e){var t=e.image,n=e.name,a=e.year,s=e.season,r=e.episode;return Object(c.jsxs)("li",{className:"movies__item",children:[Object(c.jsx)("img",{className:"movies__image",src:t,alt:"movie"}),Object(c.jsxs)("div",{className:"movies__description",children:[Object(c.jsx)("p",{className:"movies__title",children:n}),Object(c.jsx)("p",{className:"movies__year",children:a.slice(0,4)}),Object(c.jsxs)("div",{className:"movies__info",children:[Object(c.jsx)("div",{className:"movies__season",children:"Season: ".concat(s)}),Object(c.jsx)("div",{className:"movies__episode",children:"Episode: ".concat(r)})]})]})]})}),D=(n(18),function(e){var t=e.date,n=e.headerDate,s=e.setDate,r=Object(a.useState)([]),o=Object(i.a)(r,2),u=o[0],l=o[1],j=Object(a.useState)(!1),b=Object(i.a)(j,2),d=b[0],m=b[1],O=Object(a.useState)(null),f=Object(i.a)(O,2),_=f[0],x=f[1];return Object(a.useEffect)((function(){g(t).then((function(e){422===e.status?(l([]),x(null)):d?l(e):(l(e.slice(0,3)),x(e.length))}))}),[t,d]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{setDate:s}),Object(c.jsxs)("section",{className:"movies",children:[Object(c.jsx)("div",{className:"movies__date",children:n}),Object(c.jsxs)("div",{className:"movies__container",children:[0===u.length&&Object(c.jsx)("p",{children:"No Data Available"}),u&&Object(c.jsx)("ul",{className:"movies__list",children:u.map((function(e){return e.show.image&&Object(c.jsx)(y,{image:e.show.image.medium,name:e.show.name,year:e.show.premiered,season:e.season,episode:e.number},e.id)}))})]}),!d&&_>3&&Object(c.jsx)(w,{setIsClicked:m,quantity:_})]})]})}),S={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},k=(n(19),function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(null),o=Object(i.a)(r,2),u=o[0],l=o[1],j=Object(a.useState)(""),b=Object(i.a)(j,2),d=b[0],O=b[1];return Object(a.useEffect)((function(){if(n){var e=String(n).slice(11,15),t=n.getMonth()+1,c=String(n).slice(8,10);l("".concat(e,"-").concat(t,"-").concat(c)),O("".concat(c.startsWith(0)?c.slice(1):c," ").concat(S[t]," ").concat(e.slice(2)))}}),[n]),Object(c.jsxs)("div",{className:"container",children:[!n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{date:n}),Object(c.jsx)(f,{}),Object(c.jsx)(m,{onChange:function(e){return s(e)}})]}),u&&n&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(D,{date:u,headerDate:d,setDate:s})})]})});n(20);r.a.render(Object(c.jsx)(k,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.34637179.chunk.js.map