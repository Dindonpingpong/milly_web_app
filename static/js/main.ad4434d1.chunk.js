(this.webpackJsonpmilly_web_app=this.webpackJsonpmilly_web_app||[]).push([[0],{16:function(e,i,t){},20:function(e,i,t){},21:function(e,i,t){},23:function(e,i,t){"use strict";t.r(i);var a=t(3),s=t.n(a),n=t(10),c=t.n(n),r=(t(9),t(24)),o=t(25),d=t(26),l=(t(16),t(1)),m=function(){return Object(l.jsx)("header",{children:Object(l.jsx)(r.a,{children:Object(l.jsxs)(o.a,{children:[Object(l.jsx)(d.a,{children:Object(l.jsx)("span",{className:"font-link header-title",children:"Milly"})}),Object(l.jsx)(d.a,{children:Object(l.jsx)("img",{className:"header__profile",src:"/milly_web_app/images/profile.png",alt:"profile"})})]})})})},p=t(11),u=t(27),g=t(28),h=t(29),j=t(30),f=t(31),b=t(32),x=t(33),w=(t(20),function(e){var i=e.id,t=e.title,a=e.description,s=e.image,n=e.isLoading,c=void 0!==n&&n;return Object(l.jsxs)(u.a,{body:!0,className:"dish-card",children:[!c&&Object(l.jsx)(g.a,{top:!0,width:"100%",src:s,alt:t}),c&&Object(l.jsx)(h.a,{children:Object(l.jsx)(j.a,{color:"success",children:""})}),!c&&Object(l.jsxs)(h.a,{children:[Object(l.jsx)(f.a,{className:"font-link",tag:"h1",children:t}),Object(l.jsx)(b.a,{className:"font-link",children:a}),Object(l.jsxs)(o.a,{className:"card-buttons",children:[Object(l.jsx)(d.a,{children:Object(l.jsx)(x.a,{outline:!0,color:"success",block:!0,children:"Add"})}),Object(l.jsx)(d.a,{children:Object(l.jsx)(x.a,{outline:!0,color:"danger",block:!0,children:"Like"})})]})]})]},i)}),O=(t(21),function(){var e=Object(a.useState)([]),i=Object(p.a)(e,2),t=i[0],s=i[1];Object(a.useEffect)((function(){return document.body.addEventListener("keydown",n),s(v.map((function(e){var i=e.title,t=e.description,a=e.image;return Object(l.jsx)(d.a,{sm:"4",children:Object(l.jsx)(w,{title:i,description:t,image:a},i)})}))),function(){window.removeEventListener("keydown",n)}}),[]);var n=function(e){37===(e=e||window.event).keyCode?(s(k.map((function(e){var i=e.id,t=e.title,a=e.description,s=e.image;return Object(l.jsx)(d.a,{sm:"4",children:Object(l.jsx)(w,{title:t,description:a,image:s,isLoading:!0},i)})}))),setTimeout((function(){s(v.map((function(e){var i=e.id,t=e.title,a=e.description,s=e.image;return Object(l.jsx)(d.a,{sm:"4",children:Object(l.jsx)(w,{title:t,description:a,image:s},i)})})))}),500)):39===e.keyCode&&(s(k.map((function(e){var i=e.id,t=e.title,a=e.description,s=e.image;return Object(l.jsx)(d.a,{sm:"4",children:Object(l.jsx)(w,{title:t,description:a,image:s,isLoading:!0},i)})}))),setTimeout((function(){s(y.map((function(e){var i=e.id,t=e.title,a=e.description,s=e.image;return Object(l.jsx)(d.a,{sm:"4",children:Object(l.jsx)(w,{title:t,description:a,image:s},i)})})))}),500))};return Object(l.jsx)(r.a,{className:"catalog",children:Object(l.jsx)(o.a,{children:t})})}),v=[{id:1,title:"Tiramisu",description:"a coffee-flavoured Italian dessert. It is made of ladyfingers (savoiardi) dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese, flavoured with cocoa.",image:"https://www.dolce-gusto.ru/media/wysiwyg/mygento/recipes/main-tiramisu.jpg"},{id:2,title:"Pancakes",description:"is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.",image:"https://lacuisinedegeraldine.fr/wp-content/uploads/2021/06/Pancakes-04483-2-scaled.jpg"},{id:3,title:"Cheesecake",description:" is a sweet dessert consisting of one or more layers. The main, and thickest, layer consists of a mixture of a soft, fresh cheese (typically cottage cheese, cream cheese or ricotta), eggs, and sugar.",image:"https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw789aa3a6/images/project/WLRECIP-8831/Mini-Classic-Cheesecakes.jpg?sw=800&sh=800"}],y=[{id:1,title:"Dumplings",description:"is a broad class of dishes that consist of pieces of dough (made from a variety of starch sources) wrapped around a filling, or of dough with no filling. The dough can be based on bread, flour or potatoes, and may be filled with meat, fish, cheese, vegetables, fruits or sweets.",image:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/11/19/0/MW612_pork-dumplings_s4x3.jpg.rend.hgtvcom.616.462.suffix/1605802271825.jpeg"},{id:2,title:"Pelmeni",description:"are dumplings of Russian cuisine that consist of a filling wrapped in thin, unleavened dough.The debate about the exact place of origin is still active, with Ural and Siberia both maintaining strong claims",image:"https://www.thespruceeats.com/thmb/yockXsiLyMgJ0zbIuHFd6KEHgHU=/3333x3333/smart/filters:no_upscale()/russian-pelmeni-meat-dumplings-recipe-1137313-hero-01-54b39db73c8148ac9d552efb6768b54f.jpg"},{id:3,title:"Manti",description:"a dumpling in Asian cuisine.",image:"https://img.povar.ru/main/68/d2/0a/72/manti-33573.jpg"}],k=[{id:1,title:"",description:"",image:""},{id:2,title:"",description:"",image:""},{id:3,title:"",description:"",image:""}];var _=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(m,{}),Object(l.jsx)(O,{})]})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(i){var t=i.getCLS,a=i.getFID,s=i.getFCP,n=i.getLCP,c=i.getTTFB;t(e),a(e),s(e),n(e),c(e)}))};t(22);c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),L()},9:function(e,i,t){}},[[23,1,2]]]);
//# sourceMappingURL=main.ad4434d1.chunk.js.map