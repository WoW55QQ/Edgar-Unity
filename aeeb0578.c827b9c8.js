(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{224:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(309)),i=n(312),c={title:"Generator setup"},l={unversionedId:"basics/generator-setup",id:"version-1.0.3/basics/generator-setup",isDocsHomePage:!1,title:"Generator setup",description:"With our level graph prepared, we are now ready to generate our very first dungeon. In order to do that, we have to setup our procedural dungeon generator. There are two ways to do that - you either use the prefab that comes with the plugin or you create your own instance of the generator.",source:"@site/versioned_docs\\version-1.0.3\\basics\\generator-setup.md",slug:"/basics/generator-setup",permalink:"/Edgar-Unity/docs/1.0.3/basics/generator-setup",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-1.0.3/basics/generator-setup.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Level graphs",permalink:"/Edgar-Unity/docs/1.0.3/basics/level-graphs"},next:{title:"Performance tips",permalink:"/Edgar-Unity/docs/1.0.3/basics/performance-tips"}},p=[{value:"Using prefab",id:"using-prefab",children:[]},{value:"Manual setup",id:"manual-setup",children:[]}],s={toc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With our level graph prepared, we are now ready to generate our very first dungeon. In order to do that, we have to setup our procedural dungeon generator. There are two ways to do that - you either use the prefab that comes with the plugin or you create your own instance of the generator."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," The goal of this guide is not to describe individual options of the generator but rather to describe how to get an instance of the generator with reasonable default configuration. If you are interested in individual options, head to the ",Object(o.b)("em",{parentName:"p"},"Pipeline tasks")," section.")),Object(o.b)("h2",{id:"using-prefab"},"Using prefab"),Object(o.b)("p",null,"The easiest way to start generating dungeons is to use the ",Object(o.b)("em",{parentName:"p"},"Dungeon Generator")," prefab that is located at ",Object(o.b)("em",{parentName:"p"},"ProceduralDungeonGenerator/Examples/BasicDungeonGenerator"),". Simply drag and drop it to the scene and open in in the Inspector. It should look like the image below."),Object(o.b)(i.c,{src:"img/original/dungeon_generator_inspector1.png",caption:"Basic dungeon generator script",mdxType:"Image"}),Object(o.b)("p",null,"Now you can simply drop you level graph to the ",Object(o.b)("em",{parentName:"p"},"Level Graph")," property in the generator pipeline and then hit the ",Object(o.b)("em",{parentName:"p"},"Generate")," button to generate a layout."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:")," The dungeon generator script is made of ScriptableObjects. Therefore, you cannot duplicate this prefab and think that you have a separate copy of the generator as it is linked to the same instance of the ScriptableObjects. If you want to create another instance of the generator, follow the ",Object(o.b)("em",{parentName:"p"},"Manual setup")," section below.")),Object(o.b)("h2",{id:"manual-setup"},"Manual setup"),Object(o.b)("p",null,"To create our own dungeon generator, we have to follow a few simple steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create an empty GameObject and add the ",Object(o.b)("em",{parentName:"li"},"DungeonGeneratorPipeline")," component"),Object(o.b)("li",{parentName:"ol"},"Create ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"fixedInput.md"}),"Fixed input")," ScriptableObject (",Object(o.b)("em",{parentName:"li"},"Dungeon generator/Pipeline/Fixed input"),") and add it as the first element in the ",Object(o.b)("em",{parentName:"li"},"GeneratorPipeline")),Object(o.b)("li",{parentName:"ol"},"Create ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"graphBasedGenerator.md"}),"Graph based generator")," ScriptableObject (",Object(o.b)("em",{parentName:"li"},"Dungeon generator/Generators/Graph based generator"),") and add it as the second element in the ",Object(o.b)("em",{parentName:"li"},"GeneratorPipeline")),Object(o.b)("li",{parentName:"ol"},"Create ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"payloadInitializer.md"}),"PayloadInitializer")," ScriptableObject (",Object(o.b)("em",{parentName:"li"},"Dungeon generator/Pipeline/Payload initializer"),") and add it ti the ",Object(o.b)("em",{parentName:"li"},"Payload Initializer")," field")))}u.isMDXComponent=!0},309:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},310:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(22),a=n(311);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},311:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return u}));var r=n(3),a=n(0),o=n.n(a),i=n(310);const c=e=>o.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),l=e=>o.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},o.a.Children.map(e.children,(t=>o.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})))),p=e=>o.a.createElement(c,{cols:e.cols},o.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},o.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&o.a.createElement(s,null,e.caption)),s=e=>o.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),u=e=>{const{src:t,caption:n,...a}=e;return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("img",Object(r.a)({src:Object(i.a)(e.src)},a)),void 0!==e.caption&&o.a.createElement(s,null,e.caption))}}}]);