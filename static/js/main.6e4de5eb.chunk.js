(this["webpackJsonpsigp-assessment"]=this["webpackJsonpsigp-assessment"]||[]).push([[0],{15:function(e,t,a){e.exports={detail:"MovieDetail_detail__2TfUU",image:"MovieDetail_image__EG-8r",info:"MovieDetail_info__2UzPD",about:"MovieDetail_about__3h6Ki",star:"MovieDetail_star__wvujF",starIcon:"MovieDetail_starIcon__1ZQSb",starFavorite:"MovieDetail_starFavorite__3jwb5",rating:"MovieDetail_rating__5Rp9O"}},37:function(e,t,a){e.exports={navbar:"Navbar_navbar__298q8",navlink:"Navbar_navlink__N0-ok"}},38:function(e,t,a){e.exports={favorite:"FavoritePage_favorite__gQG6f",img:"FavoritePage_img__3Mvuh",remove:"FavoritePage_remove__2oXnl"}},43:function(e,t,a){e.exports={container:"Layout_container__2kOVp"}},47:function(e,t,a){e.exports={searchpage:"Searchpage_searchpage__2jLts"}},48:function(e,t,a){e.exports={movie:"Movie_movie__3Tv81"}},61:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(16),i=a.n(n),r=(a(61),a(17)),s=a(37),o=a.n(s),j=a(2),l=function(){return Object(j.jsx)("div",{className:o.a.navbar,children:Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{"aria-label":"ul",children:[Object(j.jsx)(r.c,{exact:!0,to:"/",className:o.a.navlink,children:"Home"}),Object(j.jsx)(r.c,{to:"/favorites",className:o.a.navlink,children:"Favorites"})]})})})},b=a(43),u=a.n(b),v=function(e){var t=e.children;return Object(j.jsxs)("div",{className:u.a.layout,children:[Object(j.jsx)(l,{}),Object(j.jsx)("div",{className:u.a.container,children:t})]})},d=a(4),h=a(12),m=a(47),O=a.n(m),f=a(48),x=a.n(f),p=function(e){var t=e.title,a=e.image,c=e.id;return Object(j.jsxs)(r.b,{to:"/detail/".concat(c),className:x.a.movie,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:a,alt:""})}),Object(j.jsx)("p",{children:t})]})},_=function(e){var t=e.movieList;return Object(j.jsx)("ul",{"aria-label":"ul",children:null===t||void 0===t?void 0:t.map((function(e){return Object(j.jsx)(p,{title:e.Title,image:e.Poster,id:e.imdbID},e.imdbID)}))})},g=a(30),D=a.n(g),N=a(44),I="bb079fa8",S=function(){var e=Object(N.a)(D.a.mark((function e(t){var a,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://omdbapi.com/?apikey=".concat(I,"&s=").concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("could not fetch data");case 5:return e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(N.a)(D.a.mark((function e(t){var a,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://www.omdbapi.com/?i=".concat(t,"&apikey=").concat(I));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("could not fetch data");case 5:return e.next=7,a.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=a(49),y=a.n(k),w=function(){var e=Object(c.useRef)(),t=Object(c.useState)([]),a=Object(h.a)(t,2),n=a[0],i=a[1];return Object(j.jsxs)("div",{className:O.a.searchpage,children:[Object(j.jsx)("h1",{children:"Search movie"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",placeholder:"...search movie",ref:e}),Object(j.jsxs)("button",{type:"submit",onClick:function(t){t.preventDefault(),""!==e.current.value&&S(e.current.value).then((function(e){return i(e.Search)})).catch((function(e){return alert(e.message)}))},children:[Object(j.jsx)(y.a,{}),"Search"]})]}),Object(j.jsx)(_,{movieList:n})]})},F=a(15),P=a.n(F),T=a(53),E=a.n(T),J=a(52),C=a.n(J),L=a(90),G=a(24),R=a(20),U=a(36),B=Object(U.b)({name:"movie",initialState:{favoriteMovies:[]},reducers:{addMovie:function(e,t){e.favoriteMovies=[].concat(Object(R.a)(e.favoriteMovies),[t.payload.movie]);var a=JSON.parse(localStorage.getItem("movies"));null==a&&(a=[]),a.push(t.payload.movie),localStorage.setItem("movies",JSON.stringify(a))},removeMovie:function(e,t){console.log(e.favoriteMovies),e.favoriteMovies=e.favoriteMovies.filter((function(e){return e.imdbID!==t.payload.imdbID}));var a=JSON.parse(localStorage.getItem("movies")).filter((function(e){return e.imdbID!==t.payload.imdbID}));localStorage.setItem("movies",JSON.stringify(a))}}}),Q=B.actions,Y=Q.addMovie,q=Q.removeMovie,z=function(e){return e.movie.favoriteMovies},A=B.reducer,H=function(e){var t=e.movie,a=Object(c.useState)(!1),n=Object(h.a)(a,2),i=n[0],r=n[1],s=Object(G.b)(),o=Object(G.c)(z),l=t.imdbID,b=o.filter((function(e){return e.imdbID===t.imdbID}));Object(c.useEffect)((function(){0===b.length?r(!1):r(!0)}),[b.length]);return Object(j.jsxs)("div",{className:P.a.detail,children:[Object(j.jsx)("div",{className:P.a.image,children:Object(j.jsx)("img",{src:t.Poster,alt:t.Title})}),Object(j.jsxs)("div",{className:P.a.info,children:[Object(j.jsxs)("header",{children:[Object(j.jsx)(L.a,{className:P.a.star,onClick:i?function(){s(q({imdbID:l}))}:function(){s(Y({movie:t}))},children:i?Object(j.jsx)(C.a,{className:P.a.starFavorite}):Object(j.jsx)(E.a,{className:P.a.starIcon})}),Object(j.jsx)("h1",{children:t.Title}),Object(j.jsxs)("p",{children:["(",t.Year,")"]}),Object(j.jsxs)("h2",{children:["Directed by ",t.Director]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Genre:"})," ",t.Genre]})]}),Object(j.jsxs)("div",{className:P.a.about,children:[Object(j.jsx)("p",{children:t.Plot}),Object(j.jsxs)("p",{children:[Object(j.jsx)("b",{children:"Stars:"})," ",Object(j.jsx)("span",{children:t.Actors})]})]}),Object(j.jsx)("div",{className:P.a.rating,children:Object(j.jsxs)("p",{children:[t.imdbRating,"/10"]})})]})]})},K=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],i=Object(d.f)().movieId;return Object(c.useEffect)((function(){M(i).then((function(e){return n(e)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsx)(H,{movie:a})})},V=a(38),X=a.n(V),Z=a(54),W=a.n(Z),$=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],i=Object(G.b)();Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("movies"));n(e)}),[a]);return Object(j.jsx)("div",{className:X.a.favorite,children:a.length>0?Object(j.jsx)("ul",{children:a.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("div",{className:X.a.img,children:Object(j.jsx)("img",{src:e.Poster,alt:""})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.Title}),Object(j.jsxs)("p",{children:["by ",e.Director]})]}),Object(j.jsx)(W.a,{className:X.a.remove,onClick:function(){return t=e.imdbID,void i(q({imdbID:t}));var t}})]},e.imdbID)}))}):Object(j.jsx)("p",{children:"You don't have any movies saved."})})};var ee=function(){return Object(j.jsx)(r.a,{children:Object(j.jsx)("div",{className:"app",children:Object(j.jsx)(v,{children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/",exact:!0,children:Object(j.jsx)(w,{})}),Object(j.jsx)(d.a,{path:"/detail/:movieId",children:Object(j.jsx)(K,{})}),Object(j.jsx)(d.a,{path:"/favorites",children:Object(j.jsx)($,{})})]})})})})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,91)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)}))},ae=Object(U.a)({reducer:{movie:A}});i.a.render(Object(j.jsx)(G.a,{store:ae,children:Object(j.jsx)(ee,{})}),document.getElementById("root")),te()}},[[74,1,2]]]);
//# sourceMappingURL=main.6e4de5eb.chunk.js.map