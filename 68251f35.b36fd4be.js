(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(309)),i=n(312),l={id:"introduction",title:"Introduction"},c={unversionedId:"introduction",id:"version-1.0.3/introduction",isDocsHomePage:!1,title:"Introduction",description:"This project is a Unity plugin for procedural generation of 2D dungeons and aims to give game designers a complete control over generated layouts. Under the hood, the plugin uses my procedural level generator.",source:"@site/versioned_docs\\version-1.0.3\\introduction.md",slug:"/introduction",permalink:"/Edgar-Unity/docs/1.0.3/introduction",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-1.0.3/introduction.md",version:"1.0.3",sidebar:"version-1.0.3/docs",next:{title:"Motivation",permalink:"/Edgar-Unity/docs/1.0.3/motivation"}},s=[{value:"Features",id:"features",children:[]},{value:"Shortcomings",id:"shortcomings",children:[]},{value:"Planned features",id:"planned-features",children:[]},{value:"Terms of use",id:"terms-of-use",children:[]},{value:"Examples",id:"examples",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This project is a Unity plugin for procedural generation of 2D dungeons and aims to give game designers a complete control over generated layouts. Under the hood, the plugin uses my ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator"}),"procedural level generator"),"."),Object(a.b)("p",null,"The plugin is currently in its early alpha stage of development and I am mostly ",Object(a.b)("strong",{parentName:"p"},"looking for feedback"),". The main focus of my Master thesis is to further improve my dungeon generator library so any feedback is really appreciated and will most likely lead to making the library (and therefore also this plugin) closer to being usable in production scenarios. Please read the Shortcomings section before trying out the plugin."),Object(a.b)("h2",{id:"features"},"Features"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Complete control over the look of individual rooms."),"\nYou can draw room templates using Unity built-in Tilemap feature. You can use all available tools (brushes, rule tiles, etc.) to design room templates."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Complete control over the structure of generated layouts.")," Instead of generating completely random dungeons, you specify how many rooms you want and how they should be connected and the generator finds dungeons that follow exactly that structure."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Rooms either directly connected by doors or connected by corridors.")," You can choose to either connect all rooms by corridors or to not use corridors at all. But I plan to make it possible to configure that on a per-connection basis in the future."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Easy to customize.")," The plugin is ready to be customized and extended. All important parts of the plugin can be replaced with a different implementation."),Object(a.b)("h2",{id:"shortcomings"},"Shortcomings"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Alpha version.")," There are probably bugs tham I am not aware of (and also bugs that I am aware of but not yet fixed). Moreover, there will be ",Object(a.b)("strong",{parentName:"p"},"breaking changes")," in the API."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Not everything can be configured via editor.")," You need to have programming knowledge in order to generate anything non-trivial. The plugin currently does not help you to handle monster spawns, triggers, etc. It handles only positions and shapes of rooms and basic templating."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Performance hiccups.")," The underlying algorithm searches through a space of possible layouts until it finds a layout that satisfies all contraints given by the level graph. And because the algorithm is stochastic, the number of iterations needed to find a layout may greatly vary. And if the algorithm is very unlucky, it may struggle even on simpler inputs. This will be addressed in the future."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},".NET CLR vs Mono CLR performance.")," After performing a really simply benchmark of the dungeon generator algorithm using .NET CLR and Mono CLR, it seems like on Mono CLR the algorithm is up to 3 times slower. Unfortunately, Mono is the runtime of choice in Unity so I cannot really do much with that. If Unity ever switches to CoreCLR, we may see a significant performace gain."),Object(a.b)("h2",{id:"planned-features"},"Planned features"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Improved corridors.")," Currently, we have to manually specify all corridor room templates. That means specifying a room template for each possible length of corridors. But we usually do not care that much about the length - it would be more convenient to simply say that we want to have corridors of lenghts 3 to 10 than having to do that manually. Moreover, the algorithm currently works well only with straight corridors and cannot really handle i.e. l-shaped corridors."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Support for caves and other organic shapes.")," If we want to introduce caves to our generated dungeons, we have 2 options. The first option is to create a room template for the cave. The problem is that all our caves will look exactly the same even though there is a big potential to make caves procedural, making generated dungeons less repetetive. The second option is to make a simple rectangular room template and apply postprocessing afterwards to make it look like a cave. This approach solves the problem with all caves being identical. However, the problem with this approach is that the algorithm internally works with the rectangular shape and is therefore limited. It would be better to tell the algorithm that we do not really care if the shape is exactly rectangular, which would give the algorithm more freedom and it would converge faster."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"A lot of performance improvements.")),Object(a.b)("h2",{id:"terms-of-use"},"Terms of use"),Object(a.b)("p",null,"The plugin can be used in bot commercial and non-commerical projects but ",Object(a.b)("strong",{parentName:"p"},"cannot be redistributed or reselled"),". If you want to include this plugin in your own asset, please contact me and we will figure that out."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/original/example1_result1.png",caption:"Example 1",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/example1_result_reallife1.png",caption:"Example 1",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/example2_result1.png",caption:"Example 2",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/example2_result_reallife1.png",caption:"Example 2",mdxType:"GalleryImage"})))}p.isMDXComponent=!0},309:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?o.a.createElement(h,l(l({ref:t},s),{},{components:n})):o.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},310:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(22),o=n(311);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},311:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return p}));var r=n(3),o=n(0),a=n.n(o),i=n(310);const l=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,(t=>a.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})))),s=e=>a.a.createElement(l,{cols:e.cols},a.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},a.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&a.a.createElement(u,null,e.caption)),u=e=>a.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:n,...o}=e;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",Object(r.a)({src:Object(i.a)(e.src)},o)),void 0!==e.caption&&a.a.createElement(u,null,e.caption))}}}]);