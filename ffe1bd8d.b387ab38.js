(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{237:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(241)),i=r(245),c={title:"Level structure and rooms data"},s={unversionedId:"basics/generated-level-info",id:"version-2.0.0-alpha.4/basics/generated-level-info",isDocsHomePage:!1,title:"Level structure and rooms data",description:"Level structure",source:"@site/versioned_docs\\version-2.0.0-alpha.4\\basics\\generated-level-info.md",permalink:"/Edgar-Unity/docs/2.0.0-alpha.4/basics/generated-level-info",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.4/basics/generated-level-info.md",version:"2.0.0-alpha.4",sidebar:"version-2.0.0-alpha.4/docs",previous:{title:"Generator setup",permalink:"/Edgar-Unity/docs/2.0.0-alpha.4/basics/generator-setup"},next:{title:"Performance tips",permalink:"/Edgar-Unity/docs/2.0.0-alpha.4/basics/performance-tips"}},l=[{value:"Level structure",id:"level-structure",children:[]},{value:"Rooms information",id:"rooms-information",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"level-structure"},"Level structure"),Object(o.b)("p",null,"In the image below, we can see the structure of a level. The game object that holds the level has two children - ",Object(o.b)("strong",{parentName:"p"},"Tilemaps")," game object and ",Object(o.b)("strong",{parentName:"p"},"Rooms")," game object:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Tilemaps")," game object holds all the tilemap layers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Rooms")," game object holds instance of all room templates that are used in the level. Name of each of the children is formed as ",Object(o.b)("strong",{parentName:"li"},'"{roomName} - {roomTemplate}"')," to make it easier to find a specific room when debugging.")),Object(o.b)(i.c,{src:"img/v2/basics/level_structure.png",caption:"Structure of the level",mdxType:"Image"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," If you want to retrieve any of the game object from a script, the best-practice is to use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.GeneratorConstants.html#fields"}),"GeneratorConstants")," static fields instead of using hardcoded names.")),Object(o.b)("h2",{id:"rooms-information"},"Rooms information"),Object(o.b)("p",null,"The generator also produces information about individual rooms in the level - their positions, which room template is used, what are neighbours of the room, etc. All this information is exposed through the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.RoomInstance.html#properties"}),"RoomInstance")," class."),Object(o.b)("p",null,"There are at least two ways of getting an instance of this class:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"From the game object of the room.")," All the room template instances that were described in the previous section have a ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.RoomInfo.html"}),"RoomInfo")," component attached. This component has a reference to the corresponding ",Object(o.b)("em",{parentName:"li"},"RoomInstance"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"From a post-processing task"),". Each ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"../generators/post-process#custom-post-processing"}),"custom post-processing task")," receives an instance of the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.GeneratedLevel.html#methods"}),"GeneratedLevel")," class which has a method ",Object(o.b)("inlineCode",{parentName:"li"},"GetRoomInstances()")," that can be used to retrieve all the room instances from the level.")))}p.isMDXComponent=!0},241:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},242:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(244),a=r(243);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:o=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const i=!r.startsWith(t)?t+r.replace(/^\//,""):r;return o?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=o();return r(e,t)}},243:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},244:function(e,t,r){"use strict";var n=r(0),a=r(20);t.a=function(){const e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},245:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return p}));var n=r(2),a=r(0),o=r.n(a),i=r(242);const c=e=>o.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),s=e=>o.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},o.a.Children.map(e.children,t=>o.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),l=e=>o.a.createElement(c,{cols:e.cols},o.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},o.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&o.a.createElement(u,null,e.caption)),u=e=>o.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:r,...a}=e;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",Object(n.a)({src:Object(i.a)(e.src)},a)),void 0!==e.caption&&o.a.createElement(u,null,e.caption))}}}]);