(this["webpackJsonpscoreboard-admin"]=this["webpackJsonpscoreboard-admin"]||[]).push([[0],{46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n,c=a(1),s=a.n(c),i=a(23),r=a.n(i),l=(a(45),a(46),a(47),a(48),a(49),a(2)),o=(a(53),a(3)),u="home",d="away",m="heartbeat",j="partial",b="error",h="success",O="info",p=(n={},Object(o.a)(n,O,"#3298dc"),Object(o.a)(n,h,"#2ecc71"),Object(o.a)(n,b,"#e74c3c"),n),f="penalty",v="goal",x="yellowcard",y="redcard",g="goals",N="warning",k="timePenalty",P="disqualification",C=a(5),S=a(6),w=new(0,a(54).w3cwebsocket)("ws://localhost:8080/","echo-protocol");w.onerror=function(){console.log("Connection Error")},w.onopen=function(){console.log("WebSocket Client Connected")},w.onclose=function(){console.log("echo-protocol Client Closed")},w.onmessage=function(e){};var F,E={send:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m;w.send(JSON.stringify({event:t,payload:e})),console.log(e)},sendPartialEvent:function(e,t){this.send({key:e,value:t},j)}},A=(F={},Object(o.a)(F,u,0),Object(o.a)(F,d,0),F),T=Object(S.c)({name:"goals",initialState:A,reducers:{increase:function(e,t){e[t.payload]+=1,E.sendPartialEvent("goals",Object(C.a)({},e))},decrease:function(e,t){e[t.payload]-1>=0&&(e[t.payload]-=1),E.sendPartialEvent("goals",Object(C.a)({},e))},reset:function(e){e=A,E.sendPartialEvent("goals",Object(C.a)({},e))}}}),q=T.actions,G=q.increase,R=q.decrease,I=(q.reset,function(e){return e.goals}),D=T.reducer,z=a(0);function H(){var e=Object(l.c)(I),t=Object(l.b)();return Object(z.jsxs)("div",{className:"goals",children:[Object(z.jsxs)("div",{className:"controls home mr-4",children:[Object(z.jsx)("button",{onClick:function(){return t(G(u))},className:"button is-success is-outlined mb-1",children:"+"}),Object(z.jsx)("button",{onClick:function(){return t(R(u))},className:"button is-danger is-outlined",children:"-"})]}),Object(z.jsx)("div",{className:"display",children:Object(z.jsxs)("span",{children:[e.home,":",e.away]})}),Object(z.jsxs)("div",{className:"controls away ml-4",children:[Object(z.jsx)("button",{onClick:function(){return t(G(d))},className:"button is-success is-outlined mb-1",children:"+"}),Object(z.jsx)("button",{onClick:function(){return t(R(d))},className:"button is-danger is-outlined",children:"-"})]})]})}a(59);var B="running",L="stopped",J={gameTime:0,status:L},W=Object(S.c)({name:"time",initialState:J,reducers:{increase:function(e){e.gameTime+=1},decrease:function(e){e.gameTime-=1},setTime:function(e,t){return e.gameTime=t.payload},reset:function(e){return J},start:function(e){e.status=B},stop:function(e){e.status=L}}}),$=W.actions,K=$.increase,M=($.decrease,$.setTime,$.reset,$.start),U=$.stop,V=function(e){return e.time.gameTime},Q=function(e){return e.time.status},X=W.reducer,Y=function(e){return(e-(e%=60))/60+(9<e?":":":0")+e};function Z(){var e=Object(l.b)(),t=Object(l.c)(V),a=Object(l.c)(Q);return Object(z.jsxs)("div",{className:"time mt-4 mb-4",children:[Object(z.jsx)("span",{className:"display",children:Y(t)}),Object(z.jsx)("span",{className:"state is-size-7 mb-2",children:a}),Object(z.jsxs)("div",{className:"controls",children:[Object(z.jsx)("button",{className:"button is-success is-outlined mr-1",onClick:function(){return e(M())},children:"Start"}),Object(z.jsx)("button",{className:"button is-danger is-outlined",onClick:function(){return e(U())},children:"Stop"})]})]})}var _=a(21),ee=a(74),te=Object(S.c)({name:"penalties",initialState:{items:[],penaltyDuration:120},reducers:{addPenalty:function(e,t){var a;e.items=[].concat(Object(_.a)(e.items),[(a={team:t.payload},{team:a.team,time:120,id:Object(ee.a)()})]),E.sendPartialEvent("penalties",Object(C.a)({},e))},removePenalty:function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload})),E.sendPartialEvent("penalties",Object(C.a)({},e))},clear:function(e){e.items=[],E.sendPartialEvent("penalties",Object(C.a)({},e))},increaseAll:function(e){e.items=e.items.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{time:e.time-1})})).filter((function(e){return e.time>0})),E.sendPartialEvent("penalties",Object(C.a)({},e))}}}),ae=te.actions,ne=ae.addPenalty,ce=ae.removePenalty,se=(ae.clear,ae.increaseAll),ie=function(e){return function(t){return t.penalties.items.filter((function(t){return t.team===e}))}},re=te.reducer;a(60);function le(e){var t=Object(l.b)(),a=e.penalty;return Object(z.jsxs)("div",{className:"penalty tag is-danger is-large mb-2",children:[Object(z.jsx)("span",{children:Y(a.time)}),Object(z.jsx)("button",{className:"delete is-medium ml-3",onClick:function(){return t(ce(a.id))},children:"Remove"})]})}a(61);function oe(){var e=Object(l.b)(),t=Object(l.c)(ie(u)),a=Object(l.c)(ie(d));return Object(z.jsxs)("div",{className:"penalties columns",children:[Object(z.jsxs)("div",{className:"column home",children:[Object(z.jsx)("button",{className:"button is-outlined mb-2 is-success",onClick:function(){return e(ne(u))},children:"Add Home"}),Object(z.jsx)("div",{className:"penalty-list",children:t.map((function(e){return Object(z.jsx)(le,{penalty:e},e.id)}))})]}),Object(z.jsxs)("div",{className:"column guest",children:[Object(z.jsx)("button",{className:"button is-outlined mb-2 is-success",onClick:function(){return e(ne(d))},children:"Add Away"}),Object(z.jsx)("div",{className:"penalty-list",children:a.map((function(e){return Object(z.jsx)(le,{penalty:e},e.id)}))})]})]})}var ue,de=a(20),me=a.n(de),je=(ue={},Object(o.a)(ue,u,!1),Object(o.a)(ue,d,!1),ue),be=Object(S.c)({name:"emptyGoal",initialState:je,reducers:{toggleEmptyGoal:function(e,t){e[t.payload]=!e[t.payload],E.sendPartialEvent("emptyGoal",Object(C.a)({},e))}}}),he=be.actions.toggleEmptyGoal,Oe=function(e){return function(t){return t.emptyGoal[e]}},pe=be.reducer;function fe(){var e=Object(l.b)(),t=Object(l.c)(Oe(u)),a=Object(l.c)(Oe(d)),n=me()({"button mb-1":!0,"is-outlined":!t,"is-success":t}),c=me()({"button mb-1":!0,"is-outlined":!a,"is-success":a});return Object(z.jsxs)("div",{className:"empty-goal",children:[Object(z.jsx)("div",{className:"home",children:Object(z.jsx)("button",{className:n,onClick:function(){return e(he(u))},style:{width:"100%"},children:"Home"})}),Object(z.jsx)("div",{className:"away",children:Object(z.jsx)("button",{className:c,onClick:function(){return e(he(d))},style:{width:"100%"},children:"Away"})})]})}a(62);var ve=a(37),xe=a(38);function ye(e){var t=e.value,a=e.increase,n=e.decrease,c=e.min,s=e.max;return Object(z.jsxs)("div",{className:"number-input",children:[Object(z.jsx)("span",{children:t}),Object(z.jsxs)("div",{className:"controls ml-2",children:[Object(z.jsx)("span",{className:"icon is-small",onClick:function(){return t+1>s?void 0:a()},children:Object(z.jsx)(ve.a,{icon:xe.b})}),Object(z.jsx)("span",{className:"icon is-small",onClick:function(){return t-1<c?void 0:n()},children:Object(z.jsx)(ve.a,{icon:xe.a})})]})]})}a(66);var ge=a(12),Ne=a.n(ge),ke=a(16);function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var Ce,Se,we,Fe=Object(S.b)("counter/fetchCount",function(){var e=Object(ke.a)(Ne.a.mark((function e(t){var a;return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe(t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ee=Object(S.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(Fe.pending,(function(e){e.status="loading"})).addCase(Fe.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),Ae=Ee.actions,Te=(Ae.increment,Ae.decrement,Ae.incrementByAmount,Ee.reducer),qe=function(){var e=Object(ke.a)(Ne.a.mark((function e(t){var a,n,c;return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.mode,n=t.game,e.next=3,fetch("".concat("http://localhost:8000","/game/").concat(a,"/").concat(n));case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ge=(Ce={},Object(o.a)(Ce,u,{shortName:"Home",longName:"Home Team",color:"#92f50a",players:[],officials:[]}),Object(o.a)(Ce,d,{shortName:"Guest",longName:"Guest Team",color:"#004080",players:[],officials:[]}),Ce),Re=Object(S.b)("team/fetchTeamInformation",function(){var e=Object(ke.a)(Ne.a.mark((function e(t,a){var n;return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,qe(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),Ie=Object(S.c)({name:"teams",initialState:Ge,reducers:{changeTeamLongName:function(e,t){var a=t.payload,n=a.team,c=a.value;e[n].longName=c,E.sendPartialEvent("teams",Object(C.a)({},e))},changeTeamShortName:function(e,t){var a=t.payload,n=a.team,c=a.value;e[n].shortName=c,E.sendPartialEvent("teams",Object(C.a)({},e))},changeTeamColor:function(e,t){var a=t.payload,n=a.team,c=a.value;e[n].color=c,E.sendPartialEvent("teams",Object(C.a)({},e))},changePlayerProperty:function(e,t){var a=t.payload,n=a.team,c=a.person,s=a.key,i=a.value;try{e[n][isNaN(c)?"officials":"players"].find((function(e){return e.number==c}))[s]=i}catch(r){console.error(r),console.log("Property ".concat(s," or person ").concat(c," not found!"))}}},extraReducers:Object(o.a)({},Re.fulfilled,(function(e,t){var a=t.payload;e.home=Object(C.a)(Object(C.a)({},e.home),a.data.home),e.away=Object(C.a)(Object(C.a)({},e.away),a.data.away),E.sendPartialEvent("teams",Object(C.a)({},e))}))}),De=Ie.actions,ze=De.changeTeamLongName,He=De.changeTeamShortName,Be=De.changeTeamColor,Le=De.changePlayerProperty,Je=function(e){return function(t){return t.teams[e]}},We=function(e,t){return function(a){return{team:a.teams[e],player:[].concat(Object(_.a)(a.teams[e].players),Object(_.a)(a.teams[e].officials)).find((function(e){return e.number.toString()===t}))}}},$e=Ie.reducer,Ke=Object(S.c)({name:"gameEvent",initialState:{notifications:[]},reducers:{createNotification:function(e,t){E.send(Object(C.a)({},t.payload),"gameEvent")}}}),Me=Ke.actions.createNotification,Ue=Ke.reducer,Ve=a(14),Qe="timeout",Xe="halftime",Ye="gameend",Ze=(Se={},Object(o.a)(Se,Qe,"Auszeit"),Object(o.a)(Se,Xe,"Halbzeit"),Object(o.a)(Se,Ye,"Spielende"),Se),_e=(we={},Object(o.a)(we,Qe,{isActive:!1,label:Ze[Qe]}),Object(o.a)(we,Xe,{isActive:!1,label:Ze[Xe]}),Object(o.a)(we,Ye,{isActive:!1,label:Ze[Ye]}),we),et=Object(S.c)({name:"timeout",initialState:_e,reducers:{toggleTimeout:function(e,t){Object.entries(e).forEach((function(e){var a=Object(Ve.a)(e,2),n=a[0],c=a[1];return n===t.payload?c.isActive=!c.isActive:c.isActive=!1})),E.sendPartialEvent("timeout",Object(C.a)({},e))}}}),tt=et.actions.toggleTimeout,at=function(e){return function(t){return t.timeout[e]}},nt=et.reducer,ct=a(75),st=Object(S.c)({name:"logs",initialState:{logs:[]},reducers:{logEvent:function(e,t){e.logs.push({message:t.payload.message,type:t.payload.type,id:Object(ct.a)()})}}}),it=st.actions.logEvent,rt=function(e){return e.logs||[]},lt=st.reducer,ot=Object(S.c)({name:"gameSettings",initialState:{periodDuration:1500,periodCount:2,currentPeriod:1},reducers:{setPeriodDuration:function(e,t){e.periodDuration=t.payload},setPeriodCount:function(e,t){e.periodCount=t.payload},setCurrentPeriod:function(e,t){e.currentPeriod=t.payload},increaseCurrentPeriod:function(e,t){e.currentPeriod+1<=e.periodCount&&e.currentPeriod++}}}),ut=ot.actions,dt=ut.setPeriodDuration,mt=ut.setPeriodCount,jt=(ut.setCurrentPeriod,ut.increaseCurrentPeriod),bt=function(e){return e.gameSettings.periodDuration},ht=function(e){return e.gameSettings.periodCount},Ot=ot.reducer,pt=Object(S.a)({reducer:{counter:Te,time:X,goals:D,penalties:re,emptyGoal:pe,teams:$e,events:Ue,timeout:nt,logs:lt,gameSettings:Ot}}),ft=function(e){return/^[a-d]$/.test(e)?"O".concat(e.toString().toUpperCase()):e},vt=function(e){var t=e.team,a=e.player,n=e.quantity;return{type:v,team:t.longName,player:{name:"".concat(a.firstName," ").concat(a.lastName),number:ft(a.number)},quantity:n}},xt=function(e){var t=e.team,a=e.player;return{type:x,team:t.longName,player:{name:"".concat(a.firstName," ").concat(a.lastName),number:ft(a.number)},quantity:1}},yt=function(e){var t=e.team,a=e.player;return{type:y,team:t.longName,player:{name:"".concat(a.firstName," ").concat(a.lastName),number:ft(a.number)},quantity:1}},gt=function(e){var t=e.team,a=e.player,n=e.quantity;return{type:f,team:t.longName,player:{name:"".concat(a.firstName," ").concat(a.lastName),number:ft(a.number)},quantity:n}};function Nt(e){var t=e.player,a=e.team;return Object(z.jsxs)("tr",{className:"player",children:[Object(z.jsx)("td",{children:t.number}),Object(z.jsxs)("td",{children:[t.firstName," ",t.lastName]}),Object(z.jsx)("td",{children:Object(z.jsx)(ye,{max:100,min:0,value:t.goals,increase:function(){var e=We(a,t.number)(pt.getState());pt.dispatch(G(a)),pt.dispatch(Me(vt({team:e.team,player:t,quantity:t.goals+1}))),pt.dispatch(Le({team:a,person:t.number,key:g,value:t.goals+1}))},decrease:function(){pt.dispatch(R(a)),pt.dispatch(Le({team:a,person:t.number,key:g,value:t.goals-1}))}})}),Object(z.jsx)("td",{children:Object(z.jsx)(ye,{max:1,min:0,value:t.warning,increase:function(){var e=We(a,t.number)(pt.getState());pt.dispatch(Le({team:a,person:t.number,key:N,value:1})),pt.dispatch(Me(xt({team:e.team,player:t})))},decrease:function(){pt.dispatch(Le({team:a,person:t.number,key:N,value:0}))}})}),Object(z.jsx)("td",{children:Object(z.jsx)(ye,{max:3,min:0,value:t.timePenalty,increase:function(){var e=We(a,t.number)(pt.getState());pt.dispatch(Le({team:a,person:t.number,key:k,value:t.timePenalty+1})),pt.dispatch(ne(a)),pt.dispatch(Me(gt({team:e.team,player:t,quantity:t.timePenalty+1})))},decrease:function(){pt.dispatch(Le({team:a,person:t.number,key:k,value:t.timePenalty-1}))}})}),Object(z.jsx)("td",{children:Object(z.jsx)(ye,{max:1,min:0,value:t.disqualification,increase:function(){var e=We(a,t.number)(pt.getState());pt.dispatch(Le({team:a,person:t.number,key:P,value:1})),pt.dispatch(Me(yt({team:e.team,player:t})))},decrease:function(){pt.dispatch(Le({team:a,person:t.number,key:P,value:0}))}})})]})}var kt;a(68);function Pt(e){var t=e.official,a=e.team;return Object(z.jsxs)("tr",{className:"official",children:[Object(z.jsx)("td",{children:t.number}),Object(z.jsxs)("td",{children:[t.firstName," ",t.lastName]}),Object(z.jsx)("td",{children:"-"}),Object(z.jsx)("td",{children:Object(z.jsx)(ye,{max:1,min:0,value:t.warning,increase:function(){var e=We(a,t.number)(pt.getState());pt.dispatch(Le({team:a,person:t.number,key:N,value:1})),pt.dispatch(Me(xt({team:e.team,player:t})))},decrease:function(){pt.dispatch(Le({team:a,person:t.number,key:N,value:0}))}})}),Object(z.jsx)("td",{children:Object(z.jsx)(ye,{max:2,min:0,value:t.timePenalty,increase:function(){var e=We(a,t.number)(pt.getState());pt.dispatch(Le({team:a,person:t.number,key:k,value:t.timePenalty+1})),pt.dispatch(ne(a)),pt.dispatch(Me(gt({team:e.team,player:t,quantity:t.timePenalty+1})))},decrease:function(){pt.dispatch(Le({team:a,person:t.number,key:k,value:t.timePenalty-1}))}})}),Object(z.jsx)("td",{children:Object(z.jsx)(ye,{max:1,min:0,value:t.disqualification,increase:function(){var e=We(a,t.number)(pt.getState());pt.dispatch(Le({team:a,person:t.number,key:P,value:1})),pt.dispatch(Me(yt({team:e.team,player:t})))},decrease:function(){pt.dispatch(Le({team:a,person:t.number,key:P,value:0}))}})})]})}function Ct(e){var t=e.players,a=e.officials,n=e.team;return Object(z.jsxs)("div",{className:"card player-list",children:[Object(z.jsx)("div",{className:"card-header",children:Object(z.jsx)("p",{className:"card-header-title",children:"Players"})}),Object(z.jsx)("div",{className:"card-content",style:{padding:"0"},children:Object(z.jsxs)("table",{className:"table",style:{width:"100%"},children:[Object(z.jsx)("thead",{children:Object(z.jsxs)("tr",{children:[Object(z.jsx)("th",{children:"Nr."}),Object(z.jsx)("th",{children:"Name"}),Object(z.jsx)("th",{children:Object(z.jsx)("span",{children:"\ud83e\udd45"})}),Object(z.jsx)("th",{children:Object(z.jsx)("span",{children:"\ud83d\udfe8"})}),Object(z.jsx)("th",{children:Object(z.jsx)("span",{children:"\u270c"})}),Object(z.jsx)("th",{children:Object(z.jsx)("span",{children:"\ud83d\udfe5"})})]})}),Object(z.jsxs)("tbody",{children:[t.map((function(e){return Object(z.jsx)(Nt,{player:e,team:n},e.key)})),Object(z.jsx)("tr",{children:Object(z.jsx)("td",{colSpan:"6"})}),a.map((function(e){return Object(z.jsx)(Pt,{official:e,team:n},e.key)}))]})]})})]})}kt={},Object(o.a)(kt,u,"Home"),Object(o.a)(kt,d,"Guest");function St(e){var t=e.team,a=Object(l.c)(Je(t));return Object(z.jsx)("div",{className:"team",children:Object(z.jsx)(Ct,{players:a.players,officials:a.officials,team:t})})}function wt(e){var t=e.team;return Object(z.jsx)("div",{className:"team-info",children:Object(z.jsx)(St,{team:t})})}function Ft(){var e=Object(l.b)(),t=Object(l.c)(at(Qe)),a=Object(l.c)(at(Xe)),n=Object(l.c)(at(Ye));return console.log({timeoutState:t,halftimeState:a,gameEndState:n}),Object(z.jsxs)("div",{className:"timeout",style:{display:"flex",flexDirection:"column"},children:[Object(z.jsx)("button",{className:"button is-outlined is-success mb-1",onClick:function(){return e(tt(Qe))},children:"Timeout"}),Object(z.jsx)("button",{className:"button is-outlined is-primary mb-1",onClick:function(){return e(tt(Xe))},children:"Halftime"}),Object(z.jsx)("button",{className:"button is-outlined is-info",onClick:function(){return e(tt(Ye))},children:"Gameend"})]})}a(69);function Et(e){var t=e.position,a=e.children,n=me()(Object(o.a)({sidebar:!0,"p-2":!0},t,!0));return Object(z.jsx)("div",{className:n,children:a})}a(70);function At(e){var t=e.headline,a=e.children;return Object(z.jsx)("div",{className:"control-section column",children:Object(z.jsxs)("div",{className:"card",children:[Object(z.jsx)("div",{className:"card-header",children:Object(z.jsx)("p",{className:"card-header-title is-size-6 has-text-centered",children:t})}),Object(z.jsx)("div",{className:"card-content",children:a})]})})}a(71);var Tt,qt=a(39),Gt=a(7),Rt=a(8),It=a(11),Dt=a(9),zt=a(10),Ht=(Tt={},Object(o.a)(Tt,"h",u),Object(o.a)(Tt,"g",d),Tt),Bt=function(e,t){return null===e.exec(t)?{}:Object.entries(e.exec(t).groups).reduce((function(e,t){var a=Object(Ve.a)(t,2),n=a[0],c=a[1];return Object(C.a)(Object(C.a)({},e),{},Object(o.a)({},n,c))}),{})},Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(t){return e.includes(t)}},Jt=(Lt(["-","+"]),function(e){return"+"===e}),Wt=Lt(["h","g"]),$t=function(e){return Ht[e]},Kt=function(e){return e&&!isNaN(e)},Mt=function(e){return e&&1===e.length},Ut=function(){function e(){Object(Gt.a)(this,e),this.command=""}return Object(Rt.a)(e,[{key:"process",value:function(){}},{key:"log",value:function(e){var t=e.message,a=void 0===t?"message":t,n=e.type,c=void 0===n?O:n;pt.dispatch(it({message:a,type:c}))}}]),e}(),Vt=function(e){Object(Dt.a)(a,e);var t=Object(zt.a)(a);function a(){var e;return Object(Gt.a)(this,a),(e=t.call(this)).parserRegex=Object(It.a)(/([\0-\/:-@\[-\^`\{-\uFFFF]?[gh])?([\0-\/:-@\[-\^`\{-\uFFFF]?[0-9a-d]+)?([\0-\/:-@\[-\^`\{-\uFFFF]?[\+\x2D])?/,{team:1,number:2,modifier:3}),e}return Object(Rt.a)(a,[{key:"process",value:function(e){var t=Bt(this.parserRegex,e);if(Wt(t.team)){var a="undefined"===typeof t.modifier||Jt(t.modifier)?G:R,n="undefined"===typeof t.modifier||Jt(t.modifier)?"Added":"Removed";if(pt.dispatch(a($t(t.team))),this.log({message:"".concat(n," goal for team ").concat($t(t.team))}),Kt(t.number)||Mt(t.number)){var c=We($t(t.team),t.number)(pt.getState());if(!c.player)return void this.log({type:b,message:"Player with number ".concat(t.number," has not been found!")});pt.dispatch(Me(vt({team:c.team,player:c.player,quantity:c.player.goals+1}))),pt.dispatch(Le({team:$t(t.team),person:t.number,key:g,value:c.player.goals+1})),this.log({message:"Added notification for player"})}}else this.log({message:"Invalid team!",type:b})}}],[{key:"register",value:function(){return{handler:a,command:a.command}}}]),a}(Ut);Vt.command="g";var Qt=function(e){Object(Dt.a)(a,e);var t=Object(zt.a)(a);function a(){var e;return Object(Gt.a)(this,a),(e=t.call(this)).parserRegex=Object(It.a)(/([\0-\/:-@\[-\^`\{-\uFFFF]?[gh])?([\0-\/:-@\[-\^`\{-\uFFFF]?[0-9a-d]+)?/,{team:1,number:2}),e}return Object(Rt.a)(a,[{key:"process",value:function(e){var t=Bt(this.parserRegex,e);if(Wt(t.team)){if(pt.dispatch(ne($t(t.team))),this.log({message:"Added time penalty for team ".concat($t(t.team))}),Kt(t.number)||Mt(t.number)){var a=We($t(t.team),t.number)(pt.getState());if(!a.player)return void this.log({type:b,message:"Player with number ".concat(t.number," has not been found!")});pt.dispatch(Me(gt({team:a.team,player:a.player,quantity:a.player.timePenalty+1}))),pt.dispatch(Le({team:$t(t.team),person:t.number,key:k,value:a.player.timePenalty+1})),this.log({message:"Added notification for player ".concat(t.number,"!")})}}else this.log({message:"Invalid team!",type:b})}}],[{key:"register",value:function(){return{handler:a,command:a.command}}}]),a}(Ut);Qt.command="p";var Xt=function(e){Object(Dt.a)(a,e);var t=Object(zt.a)(a);function a(){var e;return Object(Gt.a)(this,a),(e=t.call(this)).parserRegex=Object(It.a)(/([\0-\/:-@\[-\^`\{-\uFFFF]?[gh])?([\0-\/:-@\[-\^`\{-\uFFFF]?[0-9a-d]+)?/,{team:1,number:2}),e}return Object(Rt.a)(a,[{key:"process",value:function(e){var t=Bt(this.parserRegex,e);if(Wt(t.team))if(Kt(t.number)){if(Kt(t.number)||Mt(t.number)){var a=We($t(t.team),t.number)(pt.getState());if(!a.player)return void this.log({type:b,message:"Player with number ".concat(t.number," has not been found!")});pt.dispatch(Me(yt({team:a.team,player:a.player,quantity:a.player.disqualification+1}))),pt.dispatch(Le({team:$t(t.team),person:t.number,key:P,value:a.player.disqualification+1})),this.log({message:"Added red card for team ".concat($t(t.team))}),this.log({message:"Added notification for player ".concat(t.number,"!")})}}else this.log({message:"Invalid number for player!",type:b});else this.log({message:"Invalid team!",type:b})}}],[{key:"register",value:function(){return{handler:a,command:a.command}}}]),a}(Ut);Xt.command="r";var Yt=function(e){Object(Dt.a)(a,e);var t=Object(zt.a)(a);function a(){var e;return Object(Gt.a)(this,a),(e=t.call(this)).parserRegex=Object(It.a)(/([\0-\/:-@\[-\^`\{-\uFFFF]?[ps])/,{command:1}),e}return Object(Rt.a)(a,[{key:"process",value:function(e){var t=Bt(this.parserRegex,e).command;return"s"===t?(pt.dispatch(M()),void this.log({message:"Time started!"})):function(e){return"p"===e}(t)?(pt.dispatch(U()),void this.log({message:"Time stopped!"})):void this.log({message:"Invalid time modifier!",type:b})}}],[{key:"register",value:function(){return{handler:a,command:a.command}}}]),a}(Ut);Yt.command="t";var Zt=function(e){Object(Dt.a)(a,e);var t=Object(zt.a)(a);function a(){var e;return Object(Gt.a)(this,a),(e=t.call(this)).parserRegex=Object(It.a)(/([\0-\/:-@\[-\^`\{-\uFFFF]?[gh])?([\0-\/:-@\[-\^`\{-\uFFFF]?[0-9a-d]+)?/,{team:1,number:2}),e}return Object(Rt.a)(a,[{key:"process",value:function(e){var t=Bt(this.parserRegex,e);if(Wt(t.team))if(Kt(t.number)){if(Kt(t.number)||Mt(t.number)){var a=We($t(t.team),t.number)(pt.getState());if(!a.player)return void this.log({type:b,message:"Player with number ".concat(t.number," has not been found!")});pt.dispatch(Me(xt({team:a.team,player:a.player,quantity:a.player.warning+1}))),pt.dispatch(Le({team:$t(t.team),person:t.number,key:N,value:a.player.warning+1})),this.log({message:"Added yellow card for team ".concat($t(t.team))}),this.log({message:"Added notification for player ".concat(t.number,"!")})}}else this.log({message:"Invalid number for player!",type:b});else this.log({message:"Invalid team!",type:b})}}],[{key:"register",value:function(){return{handler:a,command:a.command}}}]),a}(Ut);Zt.command="y";var _t=[Vt,Yt,Qt,Zt,Xt],ea=new(function(){function e(){Object(Gt.a)(this,e),this.commands=_t.map((function(e){return e.register()}))}return Object(Rt.a)(e,[{key:"processCommand",value:function(e){var t=e.trim().split(""),a=Object(qt.a)(t),n=a[0],c=a.slice(1);this.commands.forEach((function(e){return e.command===n?(new e.handler).process(c.join("")):void 0}))}}]),e}());function ta(){return Object(z.jsx)("div",{className:"command-line",children:Object(z.jsx)("input",{type:"text",className:"p-4 is-size-1",placeholder:"Command...",onKeyDown:function(e){"Enter"===e.key&&(ea.processCommand(e.target.value),e.target.value="")}})})}a(72);function aa(){var e=Object(l.c)(rt).logs;return Object(z.jsx)("div",{className:"logs p-3",children:e.map((function(e){return Object(z.jsx)("div",{className:"log is-size-7",style:{color:p[e.type]},children:Object(z.jsx)("p",{children:e.message})},e.id)}))})}var na,ca=a(13);function sa(){return Object(z.jsxs)("div",{className:"container p-5",children:[Object(z.jsx)(H,{}),Object(z.jsx)(Z,{}),Object(z.jsxs)("div",{className:"columns mt-4",children:[Object(z.jsx)(At,{headline:"Penalties",children:Object(z.jsx)(oe,{})}),Object(z.jsx)(At,{headline:"Empty Goal",children:Object(z.jsx)(fe,{})}),Object(z.jsx)(At,{headline:"Game State",children:Object(z.jsx)(Ft,{})})]})]})}function ia(){var e=Object(c.useState)("dhb"),t=Object(Ve.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("27549"),i=Object(Ve.a)(s,2),r=i[0],o=i[1],u=Object(l.b)();return Object(z.jsxs)("div",{className:"card team-settings",children:[Object(z.jsx)("div",{className:"card-header",children:Object(z.jsx)("p",{className:"card-header-title is-size-6 has-text-centered",children:"Team information"})}),Object(z.jsxs)("div",{className:"card-content",children:[Object(z.jsxs)("div",{className:"field",children:[Object(z.jsx)("label",{className:"label is-small",children:"Source"}),Object(z.jsx)("p",{className:"control",children:Object(z.jsx)("span",{className:"select is-small",children:Object(z.jsxs)("select",{onChange:function(e){return n(e.target.value)},value:a,children:[Object(z.jsx)("option",{value:"dhb",children:"DHB"}),Object(z.jsx)("option",{value:"nu",children:"nuLiga"})]})})})]}),Object(z.jsxs)("div",{className:"field",children:[Object(z.jsx)("label",{className:"label is-small",children:"GameId"}),Object(z.jsx)("p",{className:"control",children:Object(z.jsx)("input",{type:"text",className:"input is-small",value:r,onChange:function(e){return o(e.target.value)}})})]})]}),Object(z.jsx)("footer",{class:"card-footer",children:Object(z.jsx)("a",{class:"card-footer-item",onClick:function(){return u(Re({mode:a,game:r}))},children:"Load"})})]})}var ra=(na={},Object(o.a)(na,u,"Home"),Object(o.a)(na,d,"Guest"),na);function la(e){var t=e.team,a=Object(l.b)(),n=Object(l.c)(Je(t));return Object(z.jsxs)("div",{className:"card mb-2",children:[Object(z.jsx)("div",{className:"card-header",children:Object(z.jsx)("p",{className:"card-header-title is-size-6 has-text-centered",children:ra[t]})}),Object(z.jsxs)("div",{className:"card-content p-3",children:[Object(z.jsxs)("div",{className:"field mb-1",children:[Object(z.jsx)("label",{className:"field-label is-small",children:"Long name"}),Object(z.jsx)("div",{className:"field-body",children:Object(z.jsx)("div",{className:"field",children:Object(z.jsx)("div",{className:"control",children:Object(z.jsx)("input",{className:"input is-small",type:"text",onChange:function(e){return a(ze({team:t,value:e.target.value}))},value:n.longName})})})})]}),Object(z.jsxs)("div",{className:"field mb-1",children:[Object(z.jsx)("label",{className:"field-label is-small",children:"Short name"}),Object(z.jsx)("div",{className:"field-body",children:Object(z.jsx)("div",{className:"field",children:Object(z.jsx)("div",{className:"control",children:Object(z.jsx)("input",{className:"input is-small",type:"text",onChange:function(e){return a(He({team:t,value:e.target.value}))},value:n.shortName})})})})]}),Object(z.jsxs)("div",{className:"field mb-1",children:[Object(z.jsx)("label",{className:"field-label is-small",children:"Color"}),Object(z.jsx)("div",{className:"field-body",children:Object(z.jsx)("div",{className:"field",children:Object(z.jsx)("div",{className:"control",children:Object(z.jsx)("input",{className:"input is-small",type:"color",onChange:function(e){return a(Be({team:t,value:e.target.value}))},value:n.color})})})})]})]})]})}function oa(){var e=Object(l.b)(),t=Object(l.c)(bt),a=Object(l.c)(ht);return Object(z.jsxs)("div",{className:"card",children:[Object(z.jsx)("div",{className:"card-header",children:Object(z.jsx)("p",{className:"card-header-title is-size-6 has-text-centered",children:"Period settings"})}),Object(z.jsx)("div",{className:"card-content",children:Object(z.jsxs)("div",{className:"columns",children:[Object(z.jsx)("div",{className:"column",children:Object(z.jsxs)("div",{className:"field",children:[Object(z.jsx)("label",{className:"label is-small",children:"Period duration"}),Object(z.jsx)("p",{className:"control",children:Object(z.jsx)("span",{className:"select is-small",children:Object(z.jsxs)("select",{value:t,onChange:function(t){return e(dt(t.target.value))},children:[Object(z.jsx)("option",{value:1800,children:"30:00"}),Object(z.jsx)("option",{value:1500,children:"25:00"}),Object(z.jsx)("option",{value:1200,children:"20:00"}),Object(z.jsx)("option",{value:900,children:"15:00"}),Object(z.jsx)("option",{value:600,children:"10:00"}),Object(z.jsx)("option",{value:300,children:"05:00"}),Object(z.jsx)("option",{value:60,children:"01:00"}),Object(z.jsx)("option",{value:10,children:"00:10"})]})})})]})}),Object(z.jsx)("div",{className:"column",children:Object(z.jsxs)("div",{className:"field",children:[Object(z.jsx)("label",{className:"label is-small",children:"Periods"}),Object(z.jsx)("p",{className:"control",children:Object(z.jsx)("span",{className:"select is-small",children:Object(z.jsxs)("select",{value:a,onChange:function(t){return e(mt(t.target.value))},children:[Object(z.jsx)("option",{value:1,children:"1"}),Object(z.jsx)("option",{value:2,children:"2"}),Object(z.jsx)("option",{value:3,children:"3"}),Object(z.jsx)("option",{value:4,children:"4"})]})})})]})})]})})]})}function ua(){return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)("div",{className:"columns m-3",children:[Object(z.jsx)("div",{className:"column",children:Object(z.jsx)(ia,{})}),Object(z.jsx)("div",{className:"column",children:Object(z.jsx)(la,{team:u})}),Object(z.jsx)("div",{className:"column",children:Object(z.jsx)(la,{team:d})})]}),Object(z.jsx)("div",{className:"columns m-3",children:Object(z.jsx)("div",{className:"column is-one-third",children:Object(z.jsx)(oa,{})})})]})}var da=function(){return Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(Et,{position:"left",children:Object(z.jsx)(wt,{team:u})}),Object(z.jsx)("div",{className:"main",children:Object(z.jsxs)(ca.d,{children:[Object(z.jsxs)(ca.b,{children:[Object(z.jsx)(ca.a,{children:"SCOREBOARD"}),Object(z.jsx)(ca.a,{children:"CONFIG"}),Object(z.jsx)(ca.a,{children:"ADVERTISING"})]}),Object(z.jsx)(ca.c,{children:Object(z.jsx)(sa,{})}),Object(z.jsx)(ca.c,{children:Object(z.jsx)(ua,{})}),Object(z.jsx)(ca.c,{children:Object(z.jsx)("div",{children:"Advertising"})})]})}),Object(z.jsx)(aa,{}),Object(z.jsx)(Et,{position:"right",children:Object(z.jsx)(wt,{team:d})}),Object(z.jsx)("div",{className:"command-palette",children:Object(z.jsx)(ta,{})}),Object(z.jsx)("div",{className:"app-footer p-2",children:Object(z.jsxs)("span",{children:["Powered by ",Object(z.jsx)("b",{children:"FGsportfoto"})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ma=a(40),ja=function(){var e=ba(pt.getState());if(e.forEach(pt.dispatch),e.length>0){var t=pt.getState(),a=(t.logs,Object(ma.a)(t,["logs"]));E.send(a)}},ba=function(e){var t=e.time,a=e.gameSettings,n=[];return t.status===B&&(t.gameTime+1<=a.currentPeriod*a.periodDuration?(n.push(K()),n.push(se())):(n.push(U()),n.push(jt()))),n};setInterval(ja,1e3),r.a.render(Object(z.jsx)(s.a.StrictMode,{children:Object(z.jsx)(l.a,{store:pt,children:Object(z.jsx)(da,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[73,1,2]]]);
//# sourceMappingURL=main.ca5c3a0a.chunk.js.map