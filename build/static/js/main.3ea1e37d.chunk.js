(this.webpackJsonplearn=this.webpackJsonplearn||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(5),a=c.n(s),r=(c(4),c(3)),i=c.n(r),o=c(6),l=c(7),h=c(0),u=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(h.jsx)("img",{src:e.img,className:"card-img-top",alt:"..."}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("h5",{className:"card-title",children:[e.title," "]}),Object(h.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."})]})]})})},m=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1],a=function(){var e=Object(o.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.tvmaze.com/search/shows?q=all",e.next=3,fetch("https://api.tvmaze.com/search/shows?q=all");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){a()}),[]),Object(h.jsx)(h.Fragment,{children:c.map((function(e){return console.log(e.show.id),Object(h.jsx)(u,{img:e.show.image,titlle:e.show.name})}))})};a.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3ea1e37d.chunk.js.map