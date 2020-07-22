(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{217:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var o=r(2),a=r(6),l=(r(0),r(282)),i=r(286),n={title:"Example 1"},c={id:"version-1.0.3/examples/example-1",isDocsHomePage:!1,title:"Example 1",description:"In this tutorial, we will use this tileset by @pixelpoem. Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles.",source:"@site/versioned_docs\\version-1.0.3\\examples\\example-1.md",permalink:"/Edgar-Unity/docs/1.0.3/examples/example-1",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-1.0.3/examples/example-1.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Performance tips",permalink:"/Edgar-Unity/docs/1.0.3/basics/performance-tips"},next:{title:"Example 2",permalink:"/Edgar-Unity/docs/1.0.3/examples/example-2"},latestVersionMainDocPermalink:"/Edgar-Unity/docs/introduction"},s=[{value:"Simple example",id:"simple-example",children:[{value:"Basic rooms romplates",id:"basic-rooms-romplates",children:[]},{value:"Corridors",id:"corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}]},{value:"Real-life example",id:"real-life-example",children:[{value:"Spawn and boss rooms",id:"spawn-and-boss-rooms",children:[]},{value:"Additional room template",id:"additional-room-template",children:[]},{value:"Longer corridors",id:"longer-corridors",children:[]},{value:"Level graph",id:"level-graph-1",children:[]},{value:"Results",id:"results-1",children:[]}]}],p={rightToc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this tutorial, we will use ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://pixel-poem.itch.io/dungeon-assetpuck"}),"this tileset")," by ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/pixel_poem"}),"@pixel_poem"),". Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles. "),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example1_result1.png",caption:"Simple example",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example1_result_reallife1.png",caption:"Real-life example",mdxType:"GalleryImage"})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(l.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/Example1"),".")),Object(l.b)("h2",{id:"simple-example"},"Simple example"),Object(l.b)("p",null,"The goal is to create two basic rectangular room remplates of different sizes and a room template for both horizontal and vertical corridors. We will use the smaller room template for our dead-end rooms and the bigger room template for other rooms."),Object(l.b)("h3",{id:"basic-rooms-romplates"},"Basic rooms romplates"),Object(l.b)("p",null,"There should be nothing hard about the design of the two rectangular room templates. We use the ",Object(l.b)("em",{parentName:"p"},"simple doors mode configured")," to door length 1 and corner distance 2. We need corner distance 2 in order to easily connect corridors."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example1_room1.png",caption:"Bigger room",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example1_room2.png",caption:"Smaller room",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"corridors"},"Corridors"),Object(l.b)("p",null,"Corridors are very simple with this tileset. We use the ",Object(l.b)("em",{parentName:"p"},"specific positions")," doors mode to choose the two possible door positions. And because corridors are by default placed after non-corridor rooms, these room templates just work without the need of any scripting."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example1_corridor_horizontal.png",caption:"Horizontal corridor",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example1_corridor_vertical.png",caption:"Vertical corridor",mdxType:"GalleryImage"})),Object(l.b)("p",null,"We just need to make sure that we do not allow door positions of non-corridor rooms that are closer than 2 tiles from corners. Below you can see what would happen otherwise. It is possible to allow that but we would have to create a pipeline task that would fix such cases."),Object(l.b)(i.c,{src:"img/original/example1_wrong_corridor.png",caption:"Incorrect corridor connection",mdxType:"Image"}),Object(l.b)("h3",{id:"level-graph"},"Level graph"),Object(l.b)("p",null,"With only two room templates for non-corridor rooms, we must think about which level graphs are possible to lay out and which are not. For example, using only the bigger room template, the algorithm is not able to lay out cycles of lengths 3 and 5 because there simply is not any way to form these cycles with such room templates. But cycles of length 4 are possible so that is what we do here."),Object(l.b)(i.c,{src:"img/original/example1_level_graph1.png",caption:"Level graph",mdxType:"Image"}),Object(l.b)("h3",{id:"results"},"Results"),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example1_result2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example1_result3.png",caption:"Example result",mdxType:"GalleryImage"})),Object(l.b)("h2",{id:"real-life-example"},"Real-life example"),Object(l.b)("p",null,"To create something that is closer to a real-life example, we will add more rooms to the level graph, add special room templates for spawn and boss rooms and also two more corridor room templates."),Object(l.b)("h3",{id:"spawn-and-boss-rooms"},"Spawn and boss rooms"),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example1_spawn.png",caption:"Spawn room template",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example1_boss.png",caption:"Boos room template",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"additional-room-template"},"Additional room template"),Object(l.b)("p",null,"Even for ordinary rooms, we can have non-rectangular room templates."),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example1_room3.png",caption:"Additional room tempalte",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"longer-corridors"},"Longer corridors"),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example1_corridor_horizontal2.png",caption:"Longer horizontal corridor",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example1_corridor_vertical2.png",caption:"Longer vertical corridor",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"level-graph-1"},"Level graph"),Object(l.b)("p",null,"So the goal is to have more rooms than in the simple example and also a spawn room and a boss room. You can see one such level graph below."),Object(l.b)(i.c,{src:"img/original/example1_level_graph2.png",caption:"Level graph",mdxType:"Image"}),Object(l.b)("p",null,"You can also see that with corridors of different lengths a more room templates to choose from, we can now have cycles of various sizes. The boss and spawn rooms have assigned only a single room template."),Object(l.b)("h3",{id:"results-1"},"Results"),Object(l.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(i.b,{src:"img/original/example1_result_reallife2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(l.b)(i.b,{src:"img/original/example1_result_reallife3.png",caption:"Example result",mdxType:"GalleryImage"})))}m.isMDXComponent=!0},282:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return u}));var o=r(0),a=r.n(o);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),b=o,u=m["".concat(i,".").concat(b)]||m[b]||d[b]||l;return r?a.a.createElement(u,n(n({ref:t},s),{},{components:r})):a.a.createElement(u,n({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=b;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:o,i[1]=n;for(var s=2;s<l;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},283:function(e,t,r){"use strict";function o(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return o}))},284:function(e,t,r){"use strict";var o=r(0),a=r(35);t.a=function(){return Object(o.useContext)(a.a)}},285:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r(284),a=r(283);function l(e,{forcePrependBaseUrl:t=!1,absolute:r=!1}={}){const{siteConfig:{baseUrl:l="/",url:i}={}}=Object(o.a)();if(!e)return e;if(t)return l+e;if(!Object(a.a)(e))return e;const n=l+e.replace(/^\//,"");return r?i+n:n}},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return m}));var o=r(2),a=r(0),l=r.n(a),i=r(285);const n=e=>l.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>l.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},l.a.Children.map(e.children,t=>l.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),s=e=>l.a.createElement(n,{cols:e.cols},l.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},l.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&l.a.createElement(p,null,e.caption)),p=e=>l.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),m=e=>{const{src:t,caption:r,...a}=e;return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",Object(o.a)({src:Object(i.a)(e.src)},a)),void 0!==e.caption&&l.a.createElement(p,null,e.caption))}}}]);