(function(e){function t(t){for(var r,c,i=t[0],u=t[1],s=t[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c0dc7":"b8d6e020"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var s=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var p=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,a,c){var i=Object(r["u"])("router-view");return Object(r["q"])(),Object(r["c"])(i)}n("5319"),n("ac1f");var a=n("6c02"),c=n("2591"),i={setup:function(){var e=Object(a["d"])(),t=Object(a["c"])();Object(r["n"])((function(){c["a"].auth().onAuthStateChanged((function(n){n?"/login"==t.path&&e.replace("/"):e.replace("/login")}))}))}};i.render=o;var u=i,s=(n("d3b7"),n("3ca3"),n("ddb0"),{class:" mx-2 flex justify-center"});function p(e,t,n,o,a,c){return Object(r["q"])(),Object(r["c"])("div",s,[Object(r["g"])("button",{class:"mx-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",onClick:t[1]||(t[1]=function(){return o.google_sign_in&&o.google_sign_in.apply(o,arguments)})}," Sign with google ")])}var l={name:"Home",setup:function(){var e=function(){var e=new c["a"].auth.GoogleAuthProvider;c["a"].auth().signInWithPopup(e).then((function(){console.log("signed in")}))};return{google_sign_in:e}}};l.render=p;var f=l,d=[{path:"/login",name:"login",component:f},{path:"/",name:"Terms",component:function(){return n.e("chunk-2d0c0dc7").then(n.bind(null,"441b"))}}],b=Object(a["a"])({history:Object(a["b"])("/"),routes:d}),g=b,h=n("260b"),m=(n("e71f"),n("ba8c"),{apiKey:"AIzaSyAMPRkDtNsYLdg3u2CzR_s_L61ec2GOPsk",authDomain:"terms-5f6d7.firebaseapp.com",projectId:"terms-5f6d7",storageBucket:"terms-5f6d7.appspot.com",messagingSenderId:"887587738733",appId:"1:887587738733:web:0d9ba1b0d072557ca29b64"});h["a"].initializeApp(m);var v=h["a"].firestore();v.settings({timestampsInSnapshots:!0}),Object(r["b"])(u).use(g).mount("#app");t["default"]=v},ba8c:function(e,t,n){}});
//# sourceMappingURL=app.01b2739c.js.map