(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/flash.6bad39b6.svg"},17:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),l=n.n(r),o=(n(15),n(1)),c=n(2),s=n(4),u=n(3),m=n(5),h=(n(16),n(6),function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("p",null,this.props.nama),i.a.createElement("img",{src:"tangled.jpg",width:"400px"}))}}]),t}(a.Component)),f=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:"Calculator",color:"Pink",nilai1:null,nilai2:null,operator:null,hasil:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderHasil",value:function(){var e=this.state,t=e.nilai1,n=e.nilai2,a=e.operator,r=e.hasil;if(this.state.hasil)return i.a.createElement("div",null,i.a.createElement("p",{className:"alert alert-success"},t+a+n+"="+r))}},{key:"render",value:function(){return i.a.createElement("div",null,"This is ",i.a.createElement("span",{className:"selected "+this.state.color},this.state.name)," ",i.a.createElement("br",null)," ",i.a.createElement("br",null),i.a.createElement("form",{onSubmit:this.handleSumbit.bind(this)},i.a.createElement("br",null),i.a.createElement("input",{type:"number",ref:"nilai1",className:"form-conrol"}),i.a.createElement("select",{ref:"operator",className:"from-control"},i.a.createElement("option",{value:"+"},"+"),i.a.createElement("option",{value:"-"},"-"),i.a.createElement("option",{value:"*"},"*"),i.a.createElement("option",{value:"/"},"/")),i.a.createElement("input",{type:"number",ref:"nilai2",className:"form-conrol"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{className:"btn btn-ptimary"},"Hitung")),this.renderHasil())}},{key:"handleSumbit",value:function(e){e.preventDefault();var t,n=parseInt(this.refs.nilai1.value),a=parseInt(this.refs.nilai2.value),i=this.refs.operator.value;switch(i){case"+":t=n+a;break;case"-":t=n-a;break;case"*":t=n*a;break;case"/":t=n/a}this.setState({nilai1:n,nilai2:a,operator:i,hasil:t}),this.refs.nilai1.value=null,this.refs.nilai2.value=null}}]),t}(a.Component),d=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={name:"Mickey Mouse",color:"Merah",img:"merah.jpg",nilai1:null,nilai2:null,operator:null,hasil:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"renderHasil",value:function(){var e=this.state,t=e.nilai1,n=e.nilai2,a=e.operator,r=e.hasil;if(this.state.hasil)return i.a.createElement("div",null,i.a.createElement("p",{className:"alert alert-success"},t+a+n+"="+r))}},{key:"info",value:function(e){return"Calculator"==e?i.a.createElement(f,null):"Profile"==e?i.a.createElement("h2",null,i.a.createElement(h,{nama:"Rapunzel"})):i.a.createElement("div",null,"This is ",i.a.createElement("span",{className:"selected "+this.state.color},this.state.name)," ",i.a.createElement("br",null)," ",i.a.createElement("br",null),i.a.createElement("img",{src:this.state.img,width:"400"}))}},{key:"clicked",value:function(e){this.setState({name:e.name,color:e.color,img:e.img})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{id:"App"},i.a.createElement("nav",{className:"nav"},this.props.items.map(function(t,n){var a="menu";return e.state.color===t.color&&(a="".concat(a," is-active")),i.a.createElement("div",{className:a+" "+t.color,onClick:e.clicked.bind(e,t),key:n},t.name)})),i.a.createElement("div",{className:"info"},this.info(this.state.name),i.a.createElement("div",null)))}}]),t}(a.Component),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(i.a.createElement(d,{items:[{name:"Mickey Mouse",color:"Merah",img:"merah.jpg"},{name:"Pluto",color:"Kuning",img:"kuning.jpg"},{name:"Mike Wazowski",color:"Hijau",img:"hijau.jpg"},{name:"Sullivan",color:"Biru",img:"biru.jpg"},{name:"Calculator",color:"Pink",img:""},{name:"Profile",color:"Peach",img:""}]}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reactku",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/reactku","/service-worker.js");p?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):v(t,e)})}}()},6:function(e,t,n){},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ec812a4b.chunk.js.map