(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{270:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(6),a=(r(0),r(282)),i=r(286),c={title:"Level structure and rooms data"},s={id:"basics/generated-level-info",isDocsHomePage:!1,title:"Level structure and rooms data",description:"Level structure",source:"@site/docs\\basics\\generated-level-info.md",permalink:"/Edgar-Unity/docs/next/basics/generated-level-info",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/docs/basics/generated-level-info.md",version:"next",sidebar:"docs",previous:{title:"Generator setup",permalink:"/Edgar-Unity/docs/next/basics/generator-setup"},next:{title:"Performance tips",permalink:"/Edgar-Unity/docs/next/basics/performance-tips"},latestVersionMainDocPermalink:"/Edgar-Unity/docs/introduction"},l=[{value:"Level structure",id:"level-structure",children:[]},{value:"Rooms information",id:"rooms-information",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"level-structure"},"Level structure"),Object(a.b)("p",null,"In the image below, we can see the structure of a level. The game object that holds the level has two children - ",Object(a.b)("strong",{parentName:"p"},"Tilemaps")," game object and ",Object(a.b)("strong",{parentName:"p"},"Rooms")," game object:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Tilemaps")," game object holds all the tilemap layers."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Rooms")," game object holds instance of all room templates that are used in the level. Name of each of the children is formed as ",Object(a.b)("strong",{parentName:"li"},'"{roomName} - {roomTemplate}"')," to make it easier to find a specific room when debugging.")),Object(a.b)(i.c,{src:"img/v2/basics/level_structure.png",caption:"Structure of the level",mdxType:"Image"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," If you want to retrieve any of the game object from a script, the best-practice is to use the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/ProceduralLevelGenerator.Unity.Generators.Common.Utils.GeneratorConstants.html#fields"}),"GeneratorConstants")," static fields instead of using hardcoded names.")),Object(a.b)("h2",{id:"rooms-information"},"Rooms information"),Object(a.b)("p",null,"The generator also produces information about individual rooms in the level - their positions, which room template is used, what are neighbours of the room, etc. All this information is exposed through the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/ProceduralLevelGenerator.Unity.Generators.Common.Rooms.RoomInstance.html#properties"}),"RoomInstance")," class."),Object(a.b)("p",null,"There are at least two ways of getting an instance of this class:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"From the game object of the room.")," All the room template instances that were described in the previous section have a ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/ProceduralLevelGenerator.Unity.Generators.Common.Rooms.RoomInfo.html"}),"RoomInfo")," component attached. This component has a reference to the corresponding ",Object(a.b)("em",{parentName:"li"},"RoomInstance"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"From a post-processing task"),". Each ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"../generators/post-process#custom-post-processing"}),"custom post-processing task")," receives an instance of the ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/ProceduralLevelGenerator.Unity.Generators.Common.GeneratedLevel.html#methods"}),"GeneratedLevel")," class which has a method ",Object(a.b)("inlineCode",{parentName:"li"},"GetRoomInstances()")," that can be used to retrieve all the room instances from the level.")))}p.isMDXComponent=!0},282:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},283:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))},284:function(e,t,r){"use strict";var n=r(0),o=r(35);t.a=function(){return Object(n.useContext)(o.a)}},285:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(284),o=r(283);function a(e,{forcePrependBaseUrl:t=!1,absolute:r=!1}={}){const{siteConfig:{baseUrl:a="/",url:i}={}}=Object(n.a)();if(!e)return e;if(t)return a+e;if(!Object(o.a)(e))return e;const c=a+e.replace(/^\//,"");return r?i+c:c}},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return p}));var n=r(2),o=r(0),a=r.n(o),i=r(285);const c=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),s=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,t=>a.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),l=e=>a.a.createElement(c,{cols:e.cols},a.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},a.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&a.a.createElement(u,null,e.caption)),u=e=>a.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:r,...o}=e;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",Object(n.a)({src:Object(i.a)(e.src)},o)),void 0!==e.caption&&a.a.createElement(u,null,e.caption))}}}]);