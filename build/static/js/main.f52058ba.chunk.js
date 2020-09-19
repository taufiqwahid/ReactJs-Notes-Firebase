(this["webpackJsonpreactjs-firebase"]=this["webpackJsonpreactjs-firebase"]||[]).push([[0],{37:function(e,t,a){e.exports=a(58)},42:function(e,t,a){},47:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),l=a.n(o),s=(a(42),a(6)),i=a(12),c=a(13),u=a(15),m=a(14),p=a(10),d=(a(47),a(24)),g=a.n(d);a(48),a(50);g.a.initializeApp({apiKey:"AIzaSyA3fAvJa4l6v19mWUCFaWdLKj9IoBgmvd4",authDomain:"reactjs-notes-10b1b.firebaseapp.com",databaseURL:"https://reactjs-notes-10b1b.firebaseio.com",projectId:"reactjs-notes-10b1b",storageBucket:"reactjs-notes-10b1b.appspot.com",messagingSenderId:"65211879809",appId:"1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",measurementId:"G-8GSGZQ44ST"});g.a.database();var h=g.a,v=a(35),f=a.n(v),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:"",data:""},e.onInputChange=function(t,a){e.setState(Object(s.a)({},a,t.target.value))},e.handleSaveNotes=function(){var t=e.state,a=t.title,n=t.content,r=JSON.parse(localStorage.getItem("dataUser"));console.log("localStorage",r);var o={title:a,content:n,date:(new Date).getTime(),userId:r.uid};void 0===o.userId?(alert("Silahkan Login Dlu"),console.log("Tidak Ditemukan UID, Silahkan Login"),e.setState({title:"",content:"",data:""}),e.props.history.push("/login")):(e.setState({title:"",content:"",data:""}),e.props.saveNotes(o));console.log("SAVE NOTES = ",o)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("dataUser"));this.props.getNotes(e.uid)}},{key:"render",value:function(){var e=this,t=this.state,a=t.title,o=t.content,l=this.props.notes;return console.log("NOTES:",l),r.a.createElement("div",{className:"notes"},r.a.createElement("h1",null,"Simple Notes Firebase"),r.a.createElement("div",{className:"inputContent"},r.a.createElement("input",{type:"text",placeholder:"Title",value:a,onChange:function(t){return e.onInputChange(t,"title")}}),r.a.createElement("textarea",{name:"content",id:"content",rows:"5",placeholder:"content",value:o,onChange:function(t){return e.onInputChange(t,"content")}}),r.a.createElement("button",{onClick:this.handleSaveNotes},"Simpan")),r.a.createElement("hr",null),l.length>0?r.a.createElement(n.Fragment,null,r.a.createElement(f.a,{delay:50,transitionDuration:1e3},l.map((function(e){return r.a.createElement("div",{className:"content",key:e.id},r.a.createElement("h4",null,e.data.title),r.a.createElement("p",{className:"tanggal"},e.data.date),r.a.createElement("p",{className:"contentNotes"},e.data.content))})))):null)}}]),a}(n.Component),E=Object(p.b)((function(e){return{userData:e.isUser,notes:e.notes}}),(function(e){return{saveNotes:function(t){return e(function(e){return function(t){h.database().ref("notes/"+e.userId).push({title:e.title,content:e.content,date:e.date})}}(t))},getNotes:function(t){return e((a=t,function(e){return new Promise((function(t,n){h.database().ref("notes/"+a).on("value",(function(a){console.log("GetData = ",a.val());var n=[];Object.keys(a.val()).map((function(e){return n.push({id:e,data:a.val()[e]})})),e({type:"SET_NOTES",value:n}),t(a.val())}))}))}));var a}}}))(b),O=a(16),S=a.n(O),N=a(23),I=a(9),w=function(e){var t=e.onClick,a=e.value;return e.loading?r.a.createElement("input",{type:"submit",value:"Proces...",disabled:!0}):r.a.createElement("input",{type:"submit",value:a,onClick:t})},j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChangeValue=function(t){var a;e.setState((a={},Object(s.a)(a,t.target.id,t.target.value),Object(s.a)(a,"loading",!1),a))},e.handleLoginSubmit=Object(N.a)(S.a.mark((function t(){var a,n,r,o;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.email,r=a.password,t.next=3,e.props.loginAPI({email:n,password:r}).catch((function(e){return e}));case 3:!0===t.sent?(o=e.props.history,console.log("Login sukses!"),e.setState({email:"",password:""}),o.push("/")):(console.log("Login Gagal!"),e.setState({email:"",password:""}));case 5:case"end":return t.stop()}}),t)}))),e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"register"},r.a.createElement("h3",null,"Login Page"),r.a.createElement("form",{action:"#"},r.a.createElement("input",{id:"email",type:"email",placeholder:"Email",onChange:this.handleChangeValue,autoComplete:"off",value:this.state.email}),r.a.createElement("input",{id:"password",type:"password",placeholder:"Password",onChange:this.handleChangeValue,value:this.state.password}),r.a.createElement(w,{className:"submit",onClick:this.handleLoginSubmit,value:"Login",loading:this.props.isLoading})),r.a.createElement("br",null),r.a.createElement(I.b,{to:"/"},r.a.createElement("button",null,"Go to Dashboard")))}}]),a}(n.Component),y=Object(p.b)((function(e){return{isLoading:e.isLoading}}),(function(e){return{loginAPI:function(t){return e(function(e){return function(t){return t({type:"CHANGE_ISLOADING",value:!0}),new Promise((function(a,n){h.auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){var n={uid:e.user.uid,email:e.user.email,verication:e.user.emailVerified,refreshToken:e.user.refreshToken};console.log("SignIn = ",e),localStorage.setItem("dataUser",JSON.stringify(n)),t({type:"CHANGE_ISLOADING",value:!1}),t({type:"CHANGE_ISLOGIN",value:!0}),t({type:"CHANGE_ISUSER",value:n}),alert("Sukses Login Menggunakan Firebase"),a(!0)})).catch((function(e){t({type:"CHANGE_ISLOADING",value:!1}),t({type:"CHANGE_ISLOGIN",value:!1});var a=e.code,r=e.message;console.log("errorCode = ",a),console.log("errorMessage = ",r),r&&alert("Ada kesalahan dalam mengimput Email ataupun Password"),n(!1)}))}))}}(t))}}}))(j),C=(a(56),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleChangeValue=function(t){var a;e.setState((a={},Object(s.a)(a,t.target.id,t.target.value),Object(s.a)(a,"loading",!1),a))},e.handleRegisterValue=Object(N.a)(S.a.mark((function t(){var a,n,r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,n=a.email,r=a.password,t.next=3,e.props.registerAPI({email:n,password:r}).catch((function(e){return e}));case 3:!0===t.sent&&e.setState({email:"",password:""}),e.props.history.push("/login");case 7:case"end":return t.stop()}}),t)}))),e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"register"},r.a.createElement("h3",null,"Register Page"),r.a.createElement("form",{action:"#"},r.a.createElement("input",{id:"email",type:"email",placeholder:"Email",onChange:this.handleChangeValue,autoComplete:"off",value:this.state.email}),r.a.createElement("input",{id:"password",type:"password",placeholder:"Password",onChange:this.handleChangeValue,value:this.state.password}),r.a.createElement(w,{className:"submit",onClick:this.handleRegisterValue,value:"Registration",loading:this.props.isLoading})),r.a.createElement("br",null),r.a.createElement(I.b,{to:"/"},r.a.createElement("button",null,"Go to Dashboard")))}}]),a}(n.Component)),A=Object(p.b)((function(e){return{isLoading:e.isLoading}}),(function(e){return{registerAPI:function(t){return e(function(e){return function(t){return t({type:"CHANGE_ISLOADING",value:!0}),new Promise((function(a,n){h.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(e){console.log("Create = ",e),t({type:"CHANGE_ISLOADING",value:!1}),alert("Sukses Menambahkan Data ke Firebase"),a(!0)})).catch((function(e){t({type:"CHANGE_ISLOADING",value:!1});var a=e.code,r=e.message;console.log("errorCode = ",a),console.log("errorMessage = ",r),r&&alert("Ada kesalahan dalam mengimput Email ataupun Password"),n(!1)}))}))}}(t))}}}))(C),k=a(2),L=a(18),G=a(5),P={popUp:"PopUp",isLoading:!1,isLogin:!1,isUser:{},notes:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;return"CHANGE_POPUP"===t.type?Object(G.a)(Object(G.a)({},e),{},{popUp:t.value}):"CHANGE_ISLOADING"===t.type?Object(G.a)(Object(G.a)({},e),{},{isLoading:t.value}):"CHANGE_ISLOGIN"===t.type?Object(G.a)(Object(G.a)({},e),{},{isLogin:t.value}):"CHANGE_ISUSER"===t.type?Object(G.a)(Object(G.a)({},e),{},{isUser:t.value}):"SET_NOTES"===t.type?Object(G.a)(Object(G.a)({},e),{},{notes:t.value}):e},U=a(36),_=Object(L.c)(D,Object(L.a)(U.a));a(57);var H=function(){return r.a.createElement(p.a,{store:_},r.a.createElement(I.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(I.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(I.b,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(I.b,{to:"/register"},"Register")))),r.a.createElement(k.a,{path:"/",exact:!0,component:E}),r.a.createElement(k.a,{path:"/login",component:y}),r.a.createElement(k.a,{path:"/register",component:A}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.f52058ba.chunk.js.map