(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=(n(10),n(11),n(12),function(){return r.a.createElement("div",{className:"welcome-container"},r.a.createElement("div",{className:"welcome-text-container"},r.a.createElement("h1",null,"Conway's"),r.a.createElement("h1",{className:"game-of-life"},"Game of life"),r.a.createElement("h2",null,"Rules:"),r.a.createElement("ul",null,r.a.createElement("li",null,"1. Any live cell with fewer than two live neighbours dies, as if by underpopulation."),r.a.createElement("li",null,"2. Any live cell with two or three live neighbours lives on to the next generation."),r.a.createElement("li",null,"3. Any live cell with more than three live neighbours dies, as if by overpopulation."),r.a.createElement("li",null,"4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction."))))}),i=n(1),u=n(2),s=(n(14),{block:[[0,0],[0,1],[1,0],[1,1]],blinker:[[0,0],[1,0],[2,0]],penta:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[0,1],[2,1],[3,1],[4,1],[5,1],[7,1],[0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2]]}),m=[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]],f=function(){for(var e=[],t=0;t<30;t++)e.push(Array.from(Array(30),(function(){return 0})));return e},b=function(){var e=Object(a.useState)((function(){return f()})),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),o=Object(i.a)(l,2),b=o[0],v=o[1],h=Object(a.useState)(!1),E=Object(i.a)(h,2),d=E[0],p=E[1],g=Object(a.useState)({x:0,y:0}),y=Object(i.a)(g,2),k=y[0],j=y[1],O=Object(a.useState)([]),w=Object(i.a)(O,2),C=w[0],N=w[1],x=Object(a.useState)(0),A=Object(i.a)(x,2),S=A[0],R=A[1],M=Object(a.useRef)(b);M.current=b;var T=Object(a.useRef)(d);T.current=d;var B=Object(a.useRef)(S);B.current=S;var G=function(e){T.current||N()},J=Object(a.useCallback)((function(){M.current&&(c((function(e){return Object(u.a)(e,(function(t){for(var a=function(n){for(var a=function(a){var r=0;m.forEach((function(t){var c=Object(i.a)(t,2),l=c[0],o=c[1],u=n+l,s=a+o;u>=0&&u<30&&s>=0&&s<30&&(r+=e[u][s])})),r<2||r>3?t[n][a]=0:0===e[n][a]&&3===r&&(t[n][a]=1)},r=0;r<30;r++)a(r)},r=0;r<30;r++)a(r);t!==n&&R(B.current+=1)}))})),setTimeout(J,70))}),[n]);return r.a.createElement("div",{className:"interactive-container"},r.a.createElement("div",{className:"grid-left-container"},r.a.createElement("div",{className:"buttons-logic"},r.a.createElement("button",{onClick:function(){v(!b),b||(M.current=!0,J())}},b?"stop":"start"),r.a.createElement("button",{onClick:function(){for(var e=[],t=0;t<30;t++)e.push(Array.from(Array(30),(function(){return Math.random()>.7?1:0})));c(e)}},"random"),r.a.createElement("button",{onClick:function(){c(f()),R(0)}},"clear")),r.a.createElement("div",{className:"grid",style:{gridTemplateColumns:"repeat(".concat(30,", 20px)")}},n.map((function(e,t){return e.map((function(e,a){return r.a.createElement("div",{className:"grid-squares",key:"".concat(t,"-").concat(a),onMouseEnter:function(){j({x:t,y:a})},onClick:function(){!function(e,t){if(T.current&&C){var a=Object(u.a)(n,(function(a){for(var r=0;r<C.length;r++){var c=e+C[r][0],l=t+C[r][1];a[c][l]=n[e][t]?0:1}}));c(a)}else if(!T.current){var r=Object(u.a)(n,(function(a){a[e][t]=n[e][t]?0:1}));c(r)}}(t,a)},style:{backgroundColor:n[t][a]?"black":void 0}})}))})))),r.a.createElement("div",{className:"grid-right-container"},r.a.createElement("div",{className:"buttons-patterns"},r.a.createElement("button",{onClick:function(){p(!d),N(s.block),d||(T.current=!0,G())}},"place block"),r.a.createElement("button",{onClick:function(){p(!d),N(s.blinker),d||(T.current=!0,G())}},"place blinker"),r.a.createElement("button",{onClick:function(){p(!d),N(s.penta),d||(T.current=!0,G())}},"place penta-something")),r.a.createElement("div",{className:"stats"},r.a.createElement("h2",null,"Current Position X:",k.x,", y:",k.y),r.a.createElement("h2",null,"There have been ",B.current," evolutions"))))},v=(n(15),function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("h1",null,"Conway's Game of life"))});var h=function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement(o,null),r.a.createElement(b,null),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.76acdfea.chunk.js.map