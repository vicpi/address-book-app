!function(e){var t={},n={0:0};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){if(0!==n[t]){var r=require("./"+({}[t]||t)+".js"),a=r.modules,c=r.ids;for(var l in a)e[l]=a[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static/",r.oe=function(e){process.nextTick((function(){throw e}))},r(r.s=28)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"h",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"i",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return m})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return f})),n.d(t,"j",(function(){return v})),n.d(t,"m",(function(){return p}));var r="ADD_USERS",a="SET_SEED",c="SET_PAGE",l="LOAD_INITIAL_USERS",i="START_LOADING_USERS",o="FINISH_LOADING_USERS",u="ADD_NEXT_BATCH_OF_USERS",s="FILTER_USERS",m="SELECT_USER",d=function(){return{type:l}},f=function(){return{type:"SCROLL_TO_THE_BOTTOM_OF_THE_PAGE"}},v=function(e){return{type:s,searchText:e}},p=function(e){return{type:m,uuid:e}}},function(e,t){e.exports=require("react-redux")},function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"b",(function(){return i}));var r=function(e){return e.settings.nationalities},a=function(e){return e.users.all},c=function(e){return e.settings.maxCatalogLength},l=function(e){return e.users.selected},i=function(e){return e.users.filtered}},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="SET_NATIONALITY_SETTINGS",a=function(e,t,n){return{type:"UPDATE_NATIONALITY_SETTINGS",nationalityName:e,nationalityLabel:t,checked:n}}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(1),l=n.n(c),i=n(5),o=n(2),u=n(3);n(18);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(){var e=Object(u.useDispatch)(),t=s(Object(r.useState)(""),2),n=t[0],c=t[1],l=Object(r.useCallback)((function(t){var n=t.target.value;c(n),e(Object(o.j)(n))}));return a.a.createElement("form",{className:"form-inline"},a.a.createElement("input",{className:"search-users-input form-control mr-sm-2",type:"search",placeholder:"Search by name","aria-label":"Search",value:n,onChange:l}))},d=(n(19),function(e){return a.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},a.a.createElement("ul",{className:"navbar-nav mr-auto"},a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.NavLink,{className:"nav-link",to:"/",exact:!0},"Home")),a.a.createElement("li",{className:"nav-item"},a.a.createElement(i.NavLink,{className:"nav-link",to:"/settings",exact:!0},"Settings"))),e.showSearch?a.a.createElement(m,null):null)});d.propTypes={showSearch:l.a.bool};t.a=d},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("classnames")},function(e,t){e.exports=require("react-hot-loader/root")},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){var r=n(7).Router();r.get("/health",(function(e,t){return t.json({success:!0})})),e.exports=r},function(e,t,n){"use strict";n.r(t);var r=n(6),a=n.n(r),c=n(7),l=n.n(c),i=n(10),o=n.n(i),u=n(0),s=n.n(u),m=n(11),d=n(12),f=n(3),v=n(2);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var h=function(e,t){return""===t?e:e.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(t.toLowerCase())}))},y={all:[],filtered:[],nextBatch:[],selected:null,page:0,filterPattern:"",seed:void 0},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.b:var n=[].concat(g(e.all),g(t.users));return b({},e,{filtered:h(n,e.filterPattern),all:n,nextBatch:[]});case v.h:return b({},e,{seed:t.seed});case v.g:return b({},e,{page:t.page});case v.a:return b({},e,{nextBatch:g(t.users)});case v.c:var r=h(e.all,t.searchText);return b({},e,{filtered:r,filterPattern:t.searchText});case v.e:return b({},e,{filtered:[],all:[],nextBatch:[],seed:void 0});case v.f:var a=null!==t.uuid?e.all.find((function(e){return e.login.uuid===t.uuid})):null;return b({},e,{selected:a});default:return e}},O=n(8);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _={nationalities:{ch:{name:"ch",label:"CH",enabled:!0},es:{name:"es",label:"ES",enabled:!0},fr:{name:"fr",label:"FR",enabled:!0},gb:{name:"gb",label:"GB",enabled:!0}},batchSize:50,maxCatalogLength:1e3},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a:return S({},e,{nationalities:S({},e.nationalities,w({},t.nationalityName,{name:t.nationalityName,label:t.nationalityLabel,enabled:t.checked}))});default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.i:return!0;case v.d:return!1;default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{users:N(e.users,t),settings:x(e.settings,t),loading:T(e.loading,t)}},A=n(13),C=(n(16),n(5)),D=(n(17),function(){return s.a.createElement("div",{className:"loading-container row"},s.a.createElement("div",{className:"loading spinner-border"},s.a.createElement("span",{className:"sr-only"},"Loading...")))}),R=n(9),L=n(4),k=function(){var e=Object(f.useSelector)(L.c),t=Object(f.useSelector)(L.a);return function(){return t.length>=e}},q=function(){var e=Object(f.useSelector)(L.a),t=Object(f.useDispatch)();Object(u.useEffect)((function(){0===e.length&&t(Object(v.k)())}),[])},I=function(e){var t=Object(f.useDispatch)(),n=Object(u.useCallback)((function(){document.body.clientHeight-(window.scrollY+window.innerHeight)<800&&t(e())}));Object(u.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[])},F=n(1),U=n.n(F),H=(n(20),function(e){var t=e.user,n=Object(f.useDispatch)(),r=Object(u.useCallback)((function(){n(Object(v.m)(t.login.uuid))}));return s.a.createElement("tr",{key:t.login.uuid,className:"user-row",onClick:r},s.a.createElement("td",null,s.a.createElement("img",{src:t.picture.thumbnail,className:"rounded",alt:"User picture",width:"48",height:"48"})),s.a.createElement("td",null,t.name.first),s.a.createElement("td",null,t.name.last),s.a.createElement("td",null,t.login.username),s.a.createElement("td",null,t.email))});H.propTypes={user:U.a.shape({login:U.a.shape({uuid:U.a.string.isRequired,username:U.a.string.isRequired}),picture:U.a.shape({thumbnail:U.a.string}),name:U.a.shape({first:U.a.string.isRequired,last:U.a.string.isRequired}),email:U.a.string})};var B=H,G=(n(21),function(){return s.a.createElement("p",{className:"row end-catalog"},"End of users catalog")});n(22);var M=function(){q(),I(v.l);var e=k(),t=Object(f.useSelector)(L.b);return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"row"},s.a.createElement("table",{className:"users-table table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"Picture"),s.a.createElement("th",{scope:"col"},"First Name"),s.a.createElement("th",{scope:"col"},"Last Name"),s.a.createElement("th",{scope:"col"},"Username"),s.a.createElement("th",{scope:"col"},"Email"))),s.a.createElement("tbody",null,t.map((function(e){return s.a.createElement(B,{key:e.login.uuid,user:e})}))))),e()?s.a.createElement(G,null):s.a.createElement(D,null))},Y=n(14),z=n.n(Y),J=n(15),X=n.n(J),K=(n(23),function(e){var t=e.visible,n=e.title,r=e.children,a=e.onClose,c=X()("modal",{visible:t});return s.a.createElement("div",{className:c,tabIndex:"-1",onClick:function(e){"userModal"===e.target.id&&a(e)},role:"dialog",id:"userModal"},s.a.createElement("div",{className:"modal-dialog",role:"document"},s.a.createElement("div",{className:"modal-content"},n?s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title"},n),s.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:a},s.a.createElement("span",{"aria-hidden":"true"},"×"))):null,s.a.createElement("div",{className:"modal-body"},r),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:a},"Close")))))});K.propTypes={visible:U.a.bool,title:U.a.string,children:U.a.element.isRequired,onClose:U.a.func.isRequired};var Q=function(e){return function(e,t){var n=null;if("undefined"!=typeof window&&window.document){var r=document.querySelector(t);null!==r&&(n=z.a.createPortal(e,r))}return n}(s.a.createElement(K,e),"#modal-root")};Q.propTypes={visible:U.a.bool,title:U.a.string,children:U.a.element.isRequired,onClose:U.a.func.isRequired};var V=Q,W=(n(24),function(){var e=Object(f.useSelector)(L.e),t=Object(f.useDispatch)();return e?s.a.createElement(V,{title:"User Details",visible:!0,onClose:function(){t(Object(v.m)(null))}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},"Firstname"),s.a.createElement("div",{className:"col"},e.name.first)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},"Lastname"),s.a.createElement("div",{className:"col"},e.name.last)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},"Username"),s.a.createElement("div",{className:"col"},e.login.username)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},"Email"),s.a.createElement("div",{className:"col"},e.email)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},"Street"),s.a.createElement("div",{className:"col"},e.location.street.name)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},"City"),s.a.createElement("div",{className:"col"},e.location.city)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},"State"),s.a.createElement("div",{className:"col"},e.location.state)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},"Country"),s.a.createElement("div",{className:"col"},e.location.country)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},"Postcode"),s.a.createElement("div",{className:"col"},e.location.postcode)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},"Phone"),s.a.createElement("div",{className:"col"},e.phone)),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},"Cell"),s.a.createElement("div",{className:"col"},e.cell))):null});n(25);var Z=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(R.a,{showSearch:!0}),s.a.createElement("div",{className:"container"},s.a.createElement(M,null),s.a.createElement(W,null)))},$=(n(26),s.a.lazy((function(){return n.e(1).then(n.bind(null,30))}))),ee=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"App"},s.a.createElement(C.Switch,null,s.a.createElement(C.Route,{exact:!0,path:"/",component:Z}),s.a.createElement(C.Route,{exact:!0,path:"/settings",render:function(){return s.a.createElement(u.Suspense,{fallback:s.a.createElement(D,null)},s.a.createElement($,null))}}))))},te=n(27),ne=l()(),re=process.env.PORT||3e3;ne.use("/static",l.a.static(a.a.join(__dirname,"..","dist"))),ne.get("/favicon.ico/",(function(e,t){t.sendFile(a.a.join(__dirname,"..","dist/favicon.ico"))})),ne.get("/manifest.json/",(function(e,t){t.sendFile(a.a.join(__dirname,"..","dist/manifest.json"))})),ne.get("/robots.txt/",(function(e,t){t.sendFile(a.a.join(__dirname,"..","dist/robots.txt"))})),ne.use("/",te),ne.get("/*",(function(e,t){var n=Object(d.createStore)(P),r=Object(m.renderToString)(s.a.createElement(f.Provider,{store:n},s.a.createElement(A.StaticRouter,{location:e.originalUrl,context:{}},s.a.createElement(ee,null)))),c=n.getState();t.send(function(e,t){var n=o.a.readFileSync(a.a.resolve(__dirname,"..","dist","index.html"),"utf8"),r=JSON.stringify(t).replace(/</g,"\\u003c");return n=n.replace('<div id="root"></div>'," <script> window.__PRELOADED_STATE__ = ".concat(r,' <\/script><div id="root">').concat(e,"</div>")),console.log(n),n}(r,c))})),ne.listen(re)}]);