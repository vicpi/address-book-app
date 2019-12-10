!function(e){var t={},n={0:0};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){if(0!==n[t]){var r=require("./"+({}[t]||t)+".js"),a=r.modules,c=r.ids;for(var l in a)e[l]=a[l];for(var o=0;o<c.length;o++)n[c[o]]=0}return Promise.all([])},r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r.oe=function(e){process.nextTick((function(){throw e}))},r(r.s=39)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"h",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"i",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return m})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return f})),n.d(t,"j",(function(){return p})),n.d(t,"m",(function(){return b}));var r="ADD_USERS",a="SET_SEED",c="SET_PAGE",l="LOAD_INITIAL_USERS",o="START_LOADING_USERS",i="FINISH_LOADING_USERS",s="ADD_NEXT_BATCH_OF_USERS",u="FILTER_USERS",m="SELECT_USER",d=function(){return{type:l}},f=function(){return{type:"SCROLL_TO_THE_BOTTOM_OF_THE_PAGE"}},p=function(e){return{type:u,searchText:e}},b=function(e){return{type:m,uuid:e}}},function(e,t){e.exports=require("react-redux")},function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));var r=function(e){return e.settings.nationalities},a=function(e){return e.users.all},c=function(e){return e.settings.maxCatalogLength},l=function(e){return e.users.selected},o=function(e){return e.users.filtered},i=function(e){return e.loading}},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("webpack")},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="SET_NATIONALITY_SETTINGS",a=function(e,t,n){return{type:"UPDATE_NATIONALITY_SETTINGS",nationalityName:e,nationalityLabel:t,checked:n}}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(1),l=n.n(c),o=n(5),i=n(2),s=n(3);n(23);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(r=(l=o.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(){var e=Object(s.useDispatch)(),t=u(Object(r.useState)(""),2),n=t[0],c=t[1],l=Object(r.useCallback)((function(t){var n=t.target.value;c(n),e(Object(i.j)(n))}));return a.a.createElement("form",{className:"form-inline"},a.a.createElement("input",{className:"search-users-input form-control mr-sm-2",type:"search",placeholder:"Search by name","aria-label":"Search",value:n,onChange:l}))},d=(n(24),function(e){return a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},a.a.createElement("ul",{className:"navbar-nav mr-auto"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.NavLink,{className:"nav-link",to:"/",exact:!0},"Home")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(o.NavLink,{className:"nav-link",to:"/settings",exact:!0},"Settings"))),e.showSearch?a.a.createElement(m,null):null)});d.propTypes={showSearch:l.a.bool};t.a=d},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("is-object")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(e,t){e.exports=require("open")},function(e,t){e.exports=require("react-hot-loader/root")},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){var r=n(6),a=n(9),c=n(33),l=n(34),o=n(35);e.exports={entry:{index:["webpack-hot-middleware/client?reload=true&timeout=2000","./src/index.js"]},output:{path:r.join(__dirname,"../..","dist"),publicPath:"/",chunkFilename:"[name].bundle.js",filename:"[name].js"},mode:"development",resolve:{alias:{"react-dom":"@hot-loader/react-dom"},modules:["node_modules","src"]},module:{rules:[{test:/\.(js|jsx)$/,exclude:/node_modules/,use:{loader:"babel-loader"}},{test:/\.html$/,use:[{loader:"html-loader"}]},{test:/\.css$/,use:["style-loader","css-loader"]},{test:/\.scss$/,use:["style-loader","css-loader",{loader:"postcss-loader",options:{plugins:function(){return[n(36),n(37)]}}},"sass-loader"]},{test:[/\.bmp$/,/\.gif$/,/\.jpe?g$/,/\.png$/],loader:"url-loader",options:{limit:1e4,name:"img/[name].[hash:8].[ext]"}}]},plugins:[new c({template:"./src/index.html",filename:"./index.html"}),new a.HotModuleReplacementPlugin,new l,new o("node_modules")]}},function(e,t){e.exports=require("html-webpack-plugin")},function(e,t){e.exports=require("case-sensitive-paths-webpack-plugin")},function(e,t){e.exports=require("react-dev-utils/WatchMissingNodeModulesPlugin")},function(e,t){e.exports=require("precss")},function(e,t){e.exports=require("autoprefixer")},function(e,t,n){var r=n(8).Router();r.get("/health",(function(e,t){return t.json({success:!0})})),e.exports=r},function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),c=n(8),l=n.n(c),o=n(12),i=n.n(o),s=n(0),u=n.n(s),m=n(13),d=n(7),f=n(3),p=n(14),b=n.n(p),v=n(2);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(n,!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var O=function(e,t){return""===t?e:e.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(t.toLowerCase())}))},N={all:[],filtered:[],nextBatch:[],selected:null,page:0,filterPattern:"",seed:void 0},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.b:var n=[].concat(y(e.all),y(t.users));return h({},e,{filtered:O(n,e.filterPattern),all:n,nextBatch:[]});case v.h:return h({},e,{seed:t.seed});case v.g:return h({},e,{page:t.page});case v.a:return h({},e,{nextBatch:y(t.users)});case v.c:var r=O(e.all,t.searchText);return h({},e,{filtered:r,filterPattern:t.searchText});case v.e:return h({},e,{filtered:[],all:[],nextBatch:[],seed:void 0});case v.f:var a=null!==t.uuid?e.all.find((function(e){return e.login.uuid===t.uuid})):null;return h({},e,{selected:a});default:return e}},j=n(10);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P={nationalities:{ch:{name:"ch",label:"CH",enabled:!0},es:{name:"es",label:"ES",enabled:!0},fr:{name:"fr",label:"FR",enabled:!0},gb:{name:"gb",label:"GB",enabled:!0}},batchSize:50,maxCatalogLength:1e3},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.a:return x({},e,{nationalities:x({},e.nationalities,_({},t.nationalityName,{name:t.nationalityName,label:t.nationalityLabel,enabled:t.checked}))});default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.i:return!0;case v.d:return!1;default:return e}},k=Object(d.combineReducers)({users:w,settings:T,loading:q}),A=n(15),C=(n(21),n(5)),R=(n(22),function(){return u.a.createElement("div",{className:"loading-container row"},u.a.createElement("div",{className:"loading spinner-border"},u.a.createElement("span",{className:"sr-only"},"Loading...")))}),D=n(11),L=n(4),I=function(){var e=Object(f.useSelector)(L.d),t=Object(f.useSelector)(L.a);return function(){return t.length>=e}},U=function(){var e=Object(f.useSelector)(L.a),t=Object(f.useDispatch)();Object(s.useEffect)((function(){0===e.length&&t(Object(v.k)())}),[])},F=function(e){var t=Object(f.useDispatch)(),n=Object(s.useCallback)((function(){document.body.clientHeight-(window.scrollY+window.innerHeight)<800&&t(e())}));Object(s.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[])},M=n(1),H=n.n(M),B=(n(25),function(e){var t=e.user,n=Object(f.useDispatch)(),r=Object(s.useCallback)((function(){n(Object(v.m)(t.login.uuid))}));return u.a.createElement("tr",{key:t.login.uuid,className:"user-row",onClick:r},u.a.createElement("td",null,u.a.createElement("img",{src:t.picture.thumbnail,className:"rounded",alt:"User picture",width:"48",height:"48"})),u.a.createElement("td",null,t.name.first),u.a.createElement("td",null,t.name.last),u.a.createElement("td",null,t.login.username),u.a.createElement("td",null,t.email))});B.propTypes={user:H.a.shape({login:H.a.shape({uuid:H.a.string.isRequired,username:H.a.string.isRequired}),picture:H.a.shape({thumbnail:H.a.string}),name:H.a.shape({first:H.a.string.isRequired,last:H.a.string.isRequired}),email:H.a.string})};var $=B,G=(n(26),function(){return u.a.createElement("p",{className:"row end-catalog"},"End of users catalog")});n(27);var Y=function(){U(),F(v.l);var e=Object(f.useSelector)(L.c),t=I(),n=Object(f.useSelector)(L.b);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"row"},u.a.createElement("table",{className:"users-table table"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",{scope:"col"},"Picture"),u.a.createElement("th",{scope:"col"},"First Name"),u.a.createElement("th",{scope:"col"},"Last Name"),u.a.createElement("th",{scope:"col"},"Username"),u.a.createElement("th",{scope:"col"},"Email"))),u.a.createElement("tbody",null,n.map((function(e){return u.a.createElement($,{key:e.login.uuid,user:e})}))))),e?u.a.createElement(R,null):null,t()?u.a.createElement(G,null):null)},z=n(16),J=n.n(z),W=n(17),X=n.n(W),K=(n(28),function(e){var t=e.visible,n=e.title,r=e.children,a=e.onClose,c=X()("modal",{visible:t});return u.a.createElement("div",{className:c,tabIndex:"-1",onClick:function(e){"userModal"===e.target.id&&a(e)},role:"dialog",id:"userModal"},u.a.createElement("div",{className:"modal-dialog",role:"document"},u.a.createElement("div",{className:"modal-content"},n?u.a.createElement("div",{className:"modal-header"},u.a.createElement("h5",{className:"modal-title"},n),u.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:a},u.a.createElement("span",{"aria-hidden":"true"},"×"))):null,u.a.createElement("div",{className:"modal-body"},r),u.a.createElement("div",{className:"modal-footer"},u.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:a},"Close")))))});K.propTypes={visible:H.a.bool,title:H.a.string,children:H.a.element.isRequired,onClose:H.a.func.isRequired};var Q=function(e){return function(e,t){var n=null;if("undefined"!=typeof window&&window.document){var r=document.querySelector(t);null!==r&&(n=J.a.createPortal(e,r))}return n}(u.a.createElement(K,e),"#modal-root")};Q.propTypes={visible:H.a.bool,title:H.a.string,children:H.a.element.isRequired,onClose:H.a.func.isRequired};var V=Q,Z=(n(29),function(){var e=Object(f.useSelector)(L.f),t=Object(f.useDispatch)();return e?u.a.createElement(V,{title:"User Details",visible:!0,onClose:function(){t(Object(v.m)(null))}},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col"},"Firstname"),u.a.createElement("div",{className:"col"},e.name.first)),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col"},"Lastname"),u.a.createElement("div",{className:"col"},e.name.last)),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col"},"Username"),u.a.createElement("div",{className:"col"},e.login.username)),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col"},"Email"),u.a.createElement("div",{className:"col"},e.email)),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col"},"Street"),u.a.createElement("div",{className:"col"},e.location.street.name)),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col"},"City"),u.a.createElement("div",{className:"col"},e.location.city)),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col"},"State"),u.a.createElement("div",{className:"col"},e.location.state)),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col"},"Country"),u.a.createElement("div",{className:"col"},e.location.country)),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col"},"Postcode"),u.a.createElement("div",{className:"col"},e.location.postcode)),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col"},"Phone"),u.a.createElement("div",{className:"col"},e.phone)),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col"},"Cell"),u.a.createElement("div",{className:"col"},e.cell))):null});n(30);var ee=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(D.a,{showSearch:!0}),u.a.createElement("div",{className:"container"},u.a.createElement(Y,null),u.a.createElement(Z,null)))},te=(n(31),u.a.lazy((function(){return n.e(1).then(n.bind(null,41))}))),ne=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"App"},u.a.createElement(C.Switch,null,u.a.createElement(C.Route,{exact:!0,path:"/",component:ee}),u.a.createElement(C.Route,{exact:!0,path:"/settings",render:function(){return u.a.createElement(s.Suspense,{fallback:u.a.createElement(R,null)},u.a.createElement(te,null))}}))))},re=n(9),ae=n.n(re),ce=n(18),le=n.n(ce),oe=n(19),ie=n.n(oe),se=n(20),ue=n.n(se),me=n(32),de=n(38),fe=l()(),pe=ae()(me);fe.use(le()(pe,{publicPath:me.output.publicPath,writeToDisk:!0,serverSideRender:!0,index:!1})),fe.use(ie()(pe)),fe.use("/",de),fe.get("/*",(function(e,t){var n,r=t.locals.webpackStats.toJson().assetsByChunkName,c=(n=r.index,b()(n)?Object.values(n):Array.isArray(n)?n:[n]).filter((function(e){return e.endsWith(".js")})).map((function(e){return'<script src="'.concat(me.output.publicPath+e,'"><\/script>')})).join("\n"),l=Object(d.createStore)(k),o=JSON.stringify(l.getState()).replace(/</g,"\\u003c"),s=Object(m.renderToString)(u.a.createElement(f.Provider,{store:l},u.a.createElement(A.StaticRouter,{location:e.originalUrl,context:{}},u.a.createElement(ne,null)))),p=i.a.readFileSync(a.a.resolve(__dirname,"..","src","index.html"),"utf8");console.log(a.a.resolve(__dirname,"..","src","index.html")),p=p.replace('<div id="root"></div>'," <script> window.__PRELOADED_STATE__ = ".concat(o,' <\/script>\n        <div id="root">').concat(s,"</div>\n        ").concat(c,"\n        ")),t.send(p)}));var be=process.env.PORT||3e3;fe.listen(be,(function(){console.log("App listening to ".concat(be,"....")),console.log("Press Ctrl+C to quit."),ue()("http://localhost:".concat(be))}))}]);