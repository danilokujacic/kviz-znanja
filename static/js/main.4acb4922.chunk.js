(this.webpackJsonpquizz=this.webpackJsonpquizz||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/geography.3e78c53f.png"},23:function(e,t,n){e.exports=n.p+"static/media/history.5a99e060.jpg"},24:function(e,t,n){e.exports=n.p+"static/media/social.8c6b6452.png"},25:function(e,t,n){e.exports=n.p+"static/media/music.1376d7e4.jpg"},27:function(e,t,n){e.exports=n(39)},32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=(n(32),n(2)),s=n(3),i=n.n(s),u=n(8),l=n(4),m=n(22),p=n.n(m),f=n(23),d=n.n(f),h=n(24),E=n.n(h),g=n(25),b=n.n(g),v=[{name:"Geography",image:p.a},{name:"History",image:d.a},{name:"Social",image:E.a},{name:"Music",image:b.a}],y=[{question:"RARARA",answers:[{answer:"Yea",correct:!0},{answer:"Yea",correct:!0},{answer:"Yea",correct:!0},{answer:"Yea",correct:!0}]}],O=n(5),j=n(1),S=n(9),w=Object(O.b)((function(e,t){return{user:e.user,quiz:e.quiz}}),(function(e){return{goBack:function(){return e({type:"FINISH_QUIZ"})},removeUser:function(){return e({type:"REMOVE_USER"})}}}))((function(e){var t=e.user,n=e.quiz,a=e.goBack,c=e.removeUser,o=Object(j.g)();return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"user-header-text"},t?n?r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){o.push("/"),a()}},"Go back"):r.a.createElement("span",null,"Hello ",t.name,",",t.points," points"):r.a.createElement("span",null,"Hello there, guest!")),t?r.a.createElement("div",{className:"login-register"},r.a.createElement(S.a,{onClick:function(){sessionStorage.removeItem("user_token"),c(),o.push("/")},to:"/"},"Logout")):r.a.createElement("div",{className:"login-register"},r.a.createElement(S.a,{to:"/login"},"Login"),r.a.createElement(S.a,{to:"/register"},"Register")))})),N=function(){return r.a.createElement("div",{className:"start-quiz"},r.a.createElement(S.a,{to:"/choose-quiz"},"Start"))},A=Object(O.b)((function(){return{}}),(function(e){return{activateQuiz:function(){return e({type:"START_QUIZ"})}}}))((function(e){var t=e.activateQuiz,n=r.a.useState(),a=Object(l.a)(n,2),c=a[0],o=a[1],s=function(){return o(v)};return r.a.useEffect((function(){setTimeout(s,50)}),[]),r.a.createElement("div",{className:"quiz-selection"},c&&c.map((function(e,n){return r.a.createElement("div",{key:n,style:{backgroundImage:"url(".concat(e.image,")"),animation:"roll-in 0.5s ease-in forwards ".concat(n/4,"s")},className:"quiz quiz-animate"},r.a.createElement(S.a,{onClick:function(){return t()},className:"quiz-title",style:{zIndex:1},to:{pathname:"/quiz/".concat(e.name),state:{auth:!0}}},r.a.createElement("span",null,e.name)))})))})),z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{processAnswer:!1,initLoading:!1},t=arguments.length>1?arguments[1]:void 0,n=t.type;t.payload;return"SET_LOADING"===n?Object(o.a)({},e,{initLoading:!0}):"FINISH_LOADING"===n||"RESET_LOADING"===n?Object(o.a)({},e,{initLoading:!1}):e},_=Object(O.b)((function(e){return{quiz:e.quiz}}),(function(e){return{setUser:function(t){return e({type:"SET_USER",payload:Object(o.a)({},t)})},setQuiz:function(){e({type:"FINISH_QUIZ"})}}}))((function(e){var t=e.quiz,n=e.setUser,c=e.setQuiz,o=Object(j.i)(),s=Object(j.g)(),m=Object(a.useReducer)(z,{processAnswer:!1,initLoading:!1}),p=Object(l.a)(m,2),f=p[0],d=p[1],h=Object(a.useState)(),E=Object(l.a)(h,2),g=E[0],b=E[1],v=Object(a.useState)(0),y=Object(l.a)(v,2),O=y[0],S=y[1],w=Object(a.useState)(0),N=Object(l.a)(w,2),A=N[0],_=N[1];r.a.useEffect((function(){if(!1===t)return s.push("/");(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/quiz/"+o.component.toLowerCase()).then((function(e){return e.json()}));case 2:t=e.sent,b(t.questions);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var I=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.querySelectorAll(".answers div"),t.correct?(r[a].classList.add("correct"),_(A+=5)):(_(A-=3),g&&g[O]&&g[O].answers&&(o=g[O].answers.findIndex((function(e){return!0===e.correct})),r[o].classList.add("correct")),r[a].classList.add("wrong")),d({type:"SET_LOADING"}),e.next=5,new Promise((function(e){return setTimeout((function(){return e(d({type:"FINISH_LOADING"}))}),3e3)}));case 5:g&&!g[O+1]?fetch("http://localhost:3000/update",{method:"PUT",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("user_token")},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({points:A})}).then((function(e){return e.json()})).then((function(e){n({name:e.user,points:e.points}),c(),s.push("/"),r.forEach((function(e){e.classList.remove("correct"),e.classList.remove("wrong")}))})):(r.forEach((function(e){e.classList.remove("correct"),e.classList.remove("wrong")})),S(O+1));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,g?g[O]?r.a.createElement("div",{className:"question-div"},f.initLoading?r.a.createElement("div",{className:"quiz-alert"},"Procesuiram sledece pitanje..."):null,r.a.createElement("div",{className:"questions"},r.a.createElement("div",{className:"question"},g[O].question),r.a.createElement("div",{className:"answers"},g[O].answers.map((function(e,t){return r.a.createElement("div",{onClick:function(){I(e,t)},key:t},e.answer)}))))):r.a.createElement("div",null,"No more questions for you bro!"):r.a.createElement("div",null,"Loading..."))})),I=function(e){var t=e.message,n=e.inSide,c=e.setAlert,o=r.a.useState(!1),s=Object(l.a)(o,2),m=s[0],p=s[1];return r.a.useEffect((function(){n&&(p(!0),setTimeout((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!1),e.next=3,new Promise((function(e){return setTimeout(e,250)}));case 3:c(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),3e3))}),[n]),r.a.createElement(a.Fragment,null,n&&r.a.createElement("div",{style:{top:n?"initial":"-100px",animation:"".concat(m?"slide-in":"slide-out"," 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95)")},className:"alert-box"},t))},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:"",password:""},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return"CHANGE_USERNAME"===n?Object(o.a)({},e,{username:a}):"CHANGE_PASSWORD"===n?Object(o.a)({},e,{password:a}):e},q=Object(O.b)((function(e,t){return{user:e.user}}),(function(e){return{setUser:function(t){return e({type:"SET_USER",payload:Object(o.a)({},t)})}}}))((function(e){var t=e.user,n=e.setUser,c=Object(j.g)();r.a.useEffect((function(){t&&c.push("/")}),[]);var o=Object(a.useReducer)(x,{username:"",password:""}),s=Object(l.a)(o,2),m=s[0],p=s[1],f=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:3000/login",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(m)}).then((function(e){return e.json()}));case 3:(a=e.sent).name&&(r=a.status,o=a.name,s=a.points,"Logged in"===r&&(sessionStorage.setItem("user_token",a.token),n({name:o,points:s}),c.push("/")));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-div"},r.a.createElement("form",{onSubmit:f},r.a.createElement("div",null,r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",onChange:function(e){p({type:"CHANGE_USERNAME",payload:e.target.value})}})),r.a.createElement("div",null,r.a.createElement("label",null,"Login"),r.a.createElement("input",{type:"password",onChange:function(e){p({type:"CHANGE_PASSWORD",payload:e.target.value})}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Login"))))})),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{username:"",password:""},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return"CHANGE_USERNAME"===n?Object(o.a)({},e,{username:a}):"CHANGE_PASSWORD"===n?Object(o.a)({},e,{password:a}):e},U=Object(O.b)((function(e,t){return{user:e.user}}),(function(e){return{setUser:function(t){return e({type:"SET_USER",payload:Object(o.a)({},t)})}}}))((function(e){var t=e.user,n=e.setUser,c=Object(j.g)();r.a.useEffect((function(){t&&c.push("/")}),[]);var o=Object(a.useReducer)(k,{username:"",password:""}),s=Object(l.a)(o,2),m=s[0],p=s[1],f=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:3000/register",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(m)}).then((function(e){return e.json()}));case 3:(a=e.sent).name&&(r=a.status,o=a.name,s=a.points,"Logged in"===r&&(sessionStorage.setItem("user_token",a.token),n({name:o,points:s}),c.push("/")));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-div"},r.a.createElement("form",{onSubmit:f},r.a.createElement("div",null,r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",onChange:function(e){p({type:"CHANGE_USERNAME",payload:e.target.value})}})),r.a.createElement("div",null,r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",onChange:function(e){p({type:"CHANGE_PASSWORD",payload:e.target.value})}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Register"))))})),R=Object(O.b)((function(e){return{user:e.user}}),(function(e){return{setUser:function(t){return e({type:"SET_USER",payload:Object(o.a)({},t)})}}}))((function(e){e.user;var t=e.setUser,n=Object(a.useState)(),c=Object(l.a)(n,2)[1],o=Object(a.useState)(!1),s=Object(l.a)(o,2),m=s[0],p=s[1],f=Object(j.g)();Object(j.h)();return Object(a.useEffect)((function(){if(f.listen((function(e){if("/"!==e.pathname&&"/login"!==e.pathname&&"/register"!==e.pathname)if(sessionStorage.getItem("user_token")){function t(){return(t=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/verify",{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("user_token")}}).then((function(e){return e.json()})).then((function(e){return e}));case 2:(t=e.sent).status&&"Approved"===t.status||(f.push("/"),m||p(!0));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}else f.push("/"),m||p(!0)})),sessionStorage.getItem("user_token")){function e(){return(e=Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/verify",{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("user_token")}}).then((function(e){return e.json()})).then((function(e){return e}));case 2:"Approved"===(n=e.sent).status?t({name:n.name,points:n.points}):"/login"!==f.location.pathname&&f.push("/");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}else"/login"!==f.location.pathname&&"/register"!==f.location.pathname&&f.push("/");setTimeout((function(){c(y)}),50)}),[]),r.a.createElement(a.Fragment,null,r.a.createElement(a.Fragment,null,r.a.createElement(I,{setAlert:p,inSide:m,message:"You must register/login to proceed"}),r.a.createElement(w,null),r.a.createElement(j.d,null,r.a.createElement(j.b,{defaultPath:!0,exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(j.b,{exact:!0,path:"/choose-quiz"},r.a.createElement(A,null)),r.a.createElement(j.b,{exact:!0,path:"/login"},r.a.createElement(q,null)),r.a.createElement(j.b,{exact:!0,path:"/register"},r.a.createElement(U,null)),r.a.createElement(j.b,{exact:!0,path:"/quiz/:component"},r.a.createElement(_,null)),r.a.createElement(j.a,{to:"/"}))))})),L=n(6),T=n(14),C={user:null,quiz:!1},P=Object(T.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return"START_QUIZ"===n?Object(o.a)({},e,{quiz:!0}):"FINISH_QUIZ"===n?Object(o.a)({},e,{quiz:!1}):"REMOVE_USER"===n?Object(o.a)({},e,{user:null}):"SET_USER"===n?Object(o.a)({},e,{user:Object(o.a)({},a)}):e})),H=Object(L.a)();Object(c.render)(r.a.createElement(j.c,{history:H},r.a.createElement(O.a,{store:P},r.a.createElement(R,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.4acb4922.chunk.js.map