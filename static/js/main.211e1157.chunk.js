(this["webpackJsonpfour-tictactoeapp"]=this["webpackJsonpfour-tictactoeapp"]||[]).push([[0],{12:function(e,t,a){e.exports=a(24)},17:function(e,t,a){},18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(6),o=a.n(r),s=(a(17),a(10)),m=(a(18),a(8)),l=function(e){switch(e.name){case"circle":return n.a.createElement(m.b,{className:"icons"});case"cross":return n.a.createElement(m.c,{className:"icons"});default:return n.a.createElement(m.a,{className:"icons"})}},i=a(9),p=(a(19),a(28)),u=a(29),y=a(30),d=a(33),f=a(31),E=a(32),w=(a(20),a(21),new Array(9).fill("empty"));var b=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),m=Object(s.a)(o,2),b=m[0],h=m[1],v=function(e){return b?Object(i.b)(b,{type:"success"}):"empty"!==w[e]?Object(i.b)("already filled",{type:"error"}):(w[e]=a?"cross":"circle",r(!a),void(w[0]===w[1]&&w[0]===w[2]&&"empty"!==w[0]?h("".concat(w[0]," won")):"empty"!==w[3]&&w[3]===w[4]&&w[4]===w[5]?h("".concat(w[3]," won")):"empty"!==w[6]&&w[6]===w[7]&&w[7]===w[8]?h("".concat(w[6]," won")):"empty"!==w[0]&&w[0]===w[3]&&w[3]===w[6]?h("".concat(w[0]," won")):"empty"!==w[1]&&w[1]===w[4]&&w[4]===w[7]?h("".concat(w[1]," won")):"empty"!==w[2]&&w[2]===w[5]&&w[5]===w[8]?h("".concat(w[2]," won")):"empty"!==w[0]&&w[0]===w[4]&&w[4]===w[8]?h("".concat(w[0]," won")):"empty"!==w[2]&&w[2]===w[4]&&w[4]===w[6]?h("".concat(w[2]," won")):"empty"!==w[0]&&"empty"!==w[1]&&"empty"!==w[2]&&"empty"!==w[3]&&"empty"!==w[4]&&"empty"!==w[5]&&"empty"!==w[6]&&"empty"!==w[7]&&"empty"!==w[8]&&h("Match Draw")))};return n.a.createElement(p.a,{className:"p-5"},n.a.createElement(i.a,{position:"bottom-center"}),n.a.createElement(u.a,null,n.a.createElement(y.a,{md:6,className:"offset-md-3"},n.a.createElement("div",{className:"mb-2 mt-2"},n.a.createElement("h1",{className:"text-success text-uppercase text-center"},"Tic-Tac-Toe App ",n.a.createElement(l,{name:"cross"})," VS ",n.a.createElement(l,{name:"circle"}))),b?n.a.createElement("div",{className:"mb-2 mt-2"},n.a.createElement("h1",{className:"text-success text-uppercase text-center"},b),n.a.createElement(d.a,{color:"success",block:!0,onClick:function(){r(!1),h(""),w.fill("empty",0,9)}},"Reload the Game")):n.a.createElement("h1",{className:"text-primary text-warning text-center"},a?"Cross":"Circle"," turns"),n.a.createElement("div",{className:"grid"},w.map((function(e,t){return n.a.createElement(f.a,{color:"warning",onClick:function(){return v(t)}},n.a.createElement(E.a,{className:"box"},n.a.createElement(l,{name:e})))}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.211e1157.chunk.js.map