(this["webpackJsonptic-tac-two"]=this["webpackJsonptic-tac-two"]||[]).push([[0],{78:function(e,t,c){},79:function(e,t,c){},90:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(16),r=c.n(i),s=(c(78),c(79),c(19)),o=c(128),l=c(125),j=c(131),u=c(121),d=c(48),b={apiKey:"AIzaSyDyxR_SwWR-JeUvI-udOuXE7KCdEqHh1T0",authDomain:"tic-tac-two-d3477.firebaseapp.com",databaseURL:"https://tic-tac-two-d3477-default-rtdb.firebaseio.com",projectId:"tic-tac-two-d3477",storageBucket:"tic-tac-two-d3477.appspot.com",messagingSenderId:"315005811898",appId:"1:315005811898:web:90c046cbd735eb84741683",measurementId:"G-H4BW3WB4SN"};d.a.initializeApp(b);var O=d.a.database(),v=c(6),f=a.a.createContext();function x(e){var t=e.children,c=Object(n.useState)(null),a=Object(s.a)(c,2),i=a[0],r=a[1],o=Object(n.useState)(Array(9).fill(null)),l=Object(s.a)(o,2),j=l[0],u=l[1],d=Object(n.useState)([0,1,2,3,4,5]),b=Object(s.a)(d,2),x=b[0],h=b[1];return Object(n.useEffect)((function(){!function(){var e={};e["/games/"+i]={board:j},O.ref().update(e)}()}),[j,i]),Object(n.useEffect)((function(){console.log("called"),O.ref("/").on("value",(function(e){console.log(e.val())}))}),[i]),Object(v.jsx)(f.Provider,{value:{gameId:i,board:j,pieces:x,setGameId:r,setBoard:u,setPieces:h},children:t})}function h(){var e=a.a.useContext(f);if(void 0===e)throw new Error("playGame must be used within a GameProvider");return e}var m=function(e){var t=e.nickname,c=h().setGameId,a=Object(n.useState)(null),i=Object(s.a)(a,2),r=i[0],l=i[1];return Object(v.jsxs)("div",{children:[Object(v.jsxs)(u.a,{children:["Hello ",t,"!"]}),Object(v.jsx)(o.a,{id:"outlined-basic",label:"Enter code",variant:"outlined",onChange:function(e){console.log(e),l(e.target.value),console.log(r)}}),Object(v.jsx)(j.a,{variant:"contained",onClick:function(){console.log("poop"),null!==r&&(console.log("successs",r),c("AAAA"))},children:"Join Room"})]})},g=function(e){var t=e.nickname,c=h().setGameId;return Object(v.jsxs)("div",{children:[Object(v.jsxs)(u.a,{children:["Hello ",t,"!"]}),Object(v.jsx)(u.a,{children:"AAAA"}),Object(v.jsx)(j.a,{variant:"contained",onClick:function(){c("BBBB")},children:"Start Game"})]})},p=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),r=Object(s.a)(i,2),u=r[0],d=r[1],b=Object(n.useState)(!1),O=Object(s.a)(b,2),f=O[0],x=O[1],h=function(){return""!==c};return Object(v.jsxs)("div",{children:[Object(v.jsx)(o.a,{id:"outlined-basic",label:"Enter nickname",variant:"outlined",onChange:function(e){a(e.target.value)}}),Object(v.jsxs)(l.a,{container:!0,children:[Object(v.jsx)(l.a,{item:!0,children:Object(v.jsx)(j.a,{onClick:function(){h()&&(x(!0),d(!1))},variant:"contained",children:"Create Game"})}),Object(v.jsx)(l.a,{item:!0}),Object(v.jsx)(l.a,{item:!0,children:Object(v.jsx)(j.a,{onClick:function(){h()&&(d(!0),x(!1))},variant:"contained",children:"Join Existing Game"})})]}),u&&Object(v.jsx)(m,{nickname:c}),f&&Object(v.jsx)(g,{nickname:c})]})},w=c(55),S=c(130),I=c(129),k=function(e){var t=e.value,c=Object(I.a)((function(){return{type:"circle",item:{id:t},collect:function(e){return{isDragging:!!e.isDragging()}}}})),n=Object(s.a)(c,2),a=(n[0].isDragging,n[1]);return Object(v.jsx)("div",{id:"circle-".concat(t),ref:a,className:"circle size-".concat(t),children:t})},A=function(e){var t=e.value,c=h(),a=(c.gameId,c.board),i=c.setBoard,r=(c.pieces,c.setPieces,Object(n.useState)(null)),o=Object(s.a)(r,2),l=o[0],j=o[1],u=Object(S.a)((function(){return{accept:"circle",drop:function(e){return O(e.id)},collect:function(e){return{isOver:!!e.isOver()}}}}),[a]),d=Object(s.a)(u,2),b=(d[0].isOver,d[1]),O=function(e){(null===a[t]||e>a[t])&&(i([].concat(Object(w.a)(a.slice(0,t)),[e],Object(w.a)(a.slice(t+1)))),j(e))};return Object(n.useEffect)((function(){console.log("board",a),console.log("has",l)}),[a]),Object(v.jsx)("div",{id:t,ref:b,className:"square",children:l>=0?Object(v.jsx)(k,{value:a[t]}):Object(v.jsx)("div",{})})},C=c(127),B=c(67),E=function(){var e=Object(n.useState)(1),t=Object(s.a)(e,2),c=t[0],a=t[1],i=h(),r=(i.gameId,i.board),o=(i.setBoard,i.pieces);Object(n.useEffect)((function(){l()?console.log("winnder winnder chicken dinner"):a(0===c?1:0)}),[r]);var l=function(){for(var e=0;e<3;e++){if(r[0+e]===r[1+e]&&r[1+e]===r[2+e]&&null!==r[0+e])return!0;if(r[0+e]===r[3+e]&&r[3+e]===r[6+e]&&null!==r[6+e])return!0}return r[0]===r[4]&&r[4]===r[8]&&null!=r[8]||r[2]===r[4]&&r[4]===r[6]&&null!=r[6]};return Object(v.jsx)("div",{children:Object(v.jsxs)(C.a,{backend:B.a,children:[Object(v.jsxs)("div",{children:["next player: p",c]}),Object(v.jsxs)("div",{className:"board-row",children:[Object(v.jsx)(A,{value:0}),Object(v.jsx)(A,{value:1}),Object(v.jsx)(A,{value:2})]}),Object(v.jsxs)("div",{className:"board-row",children:[Object(v.jsx)(A,{value:3}),Object(v.jsx)(A,{value:4}),Object(v.jsx)(A,{value:5})]}),Object(v.jsxs)("div",{className:"board-row",children:[Object(v.jsx)(A,{value:6}),Object(v.jsx)(A,{value:7}),Object(v.jsx)(A,{value:8})]}),o.map((function(e){return Object(v.jsx)(k,{value:e})}))]})})};var G=function(){var e=h().gameId;return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)("header",{className:"App-header",children:null===e?Object(v.jsx)(p,{}):Object(v.jsx)(E,{})})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,133)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(x,{children:Object(v.jsx)(G,{})})}),document.getElementById("root")),y()}},[[90,1,2]]]);
//# sourceMappingURL=main.0bb6173c.chunk.js.map