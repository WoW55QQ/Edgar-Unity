(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{214:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return m}));var a=r(2),o=r(6),i=(r(0),r(282)),l=r(286),n={title:"Example 2"},c={id:"version-1.0.3/examples/example-2",isDocsHomePage:!1,title:"Example 2",description:"In this tutorial, we will use this tileset by 0x72. Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles.",source:"@site/versioned_docs\\version-1.0.3\\examples\\example-2.md",permalink:"/Edgar-Unity/docs/1.0.3/examples/example-2",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-1.0.3/examples/example-2.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Example 1",permalink:"/Edgar-Unity/docs/1.0.3/examples/example-1"},next:{title:"Platformers",permalink:"/Edgar-Unity/docs/1.0.3/examples/platformers"},latestVersionMainDocPermalink:"/Edgar-Unity/docs/introduction"},s=[{value:"Simple example",id:"simple-example",children:[{value:"Basic rooms romplates",id:"basic-rooms-romplates",children:[]},{value:"Corridors",id:"corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}]},{value:"Real-life example",id:"real-life-example",children:[{value:"Spawn and boss rooms",id:"spawn-and-boss-rooms",children:[]},{value:"Additional room template",id:"additional-room-template",children:[]},{value:"Wider corridors",id:"wider-corridors",children:[]},{value:"Level graph",id:"level-graph-1",children:[]},{value:"Results",id:"results-1",children:[]}]}],p={rightToc:s};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this tutorial, we will use ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://0x72.itch.io/dungeontileset-ii"}),"this tileset")," by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://0x72.itch.io/"}),"0x72"),". Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles."),Object(i.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(i.b)(l.b,{src:"img/original/example2_result1.png",caption:"Simple example",mdxType:"GalleryImage"}),Object(i.b)(l.b,{src:"img/original/example2_result_reallife1.png",caption:"Real-life example",mdxType:"GalleryImage"})),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," I recommend reading ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," first as this is a little bit harder to setup and I will not repeat the basics here.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(i.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/Example2"),".")),Object(i.b)("h2",{id:"simple-example"},"Simple example"),Object(i.b)("p",null,"The goal is to create two basic rectangular room remplates of different sizes and a room template for both horizontal and vertical corridors."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," This tileset is trickier than the one used in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," because there is an additional row of ligther tiles above all horizontal wall tiles. It will cause us problems when working with corridors.")),Object(i.b)("h3",{id:"basic-rooms-romplates"},"Basic rooms romplates"),Object(i.b)("p",null,"For this example, I am using doors with two different lengths (1 and 2). That means that we have to use the ",Object(i.b)("em",{parentName:"p"},"Specific positions mode")," mode because the ",Object(i.b)("em",{parentName:"p"},"Simple mode")," can only handle doors with the same length. As you can see below, the door positions look quite messy because they overlap."),Object(i.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(i.b)(l.b,{src:"img/original/example2_room1.png",caption:"Smaller room",mdxType:"GalleryImage"}),Object(i.b)(l.b,{src:"img/original/example2_room2.png",caption:"Bigger room",mdxType:"GalleryImage"})),Object(i.b)("h3",{id:"corridors"},"Corridors"),Object(i.b)("p",null,"As I said before, there is a problem with corridors when working with this tileset. To be more precise, there is a problem with vertical corridors because of the additional roow of tiles above wall tiles. If we were to design our vertical corridors as in Example 1, we would end up with something like this:"),Object(i.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(i.b)(l.b,{src:"img/original/example2_wrong_corridor.png",caption:"Incorrent vertical corridor",mdxType:"GalleryImage"}),Object(i.b)(l.b,{src:"img/original/example2_wrong_corridor2.png",caption:"Incorrent connection",mdxType:"GalleryImage"})),Object(i.b)("p",null,"Unfortunately, we cannot solve this problem just by designing our room templates in a different way. Therefore, we will have to solve this by a pipeline task - the procedure is described in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"corridorsCorrection.md"}),"Corridors correction")," tutorial. For this tutorial it is sufficient to know that we have to design our vertical corridors without the top and the bottom rows."),Object(i.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(i.b)(l.b,{src:"img/original/example2_corridor_horizontal.png",caption:"Horizontal corridor",mdxType:"GalleryImage"}),Object(i.b)(l.b,{src:"img/original/example2_corridor_vertical.png",caption:"Vertical corridor",mdxType:"GalleryImage"})),Object(i.b)("h3",{id:"level-graph"},"Level graph"),Object(i.b)(l.c,{src:"img/original/example2_level_graph1.png",caption:"Level graph",mdxType:"Image"}),Object(i.b)("h3",{id:"results"},"Results"),Object(i.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(i.b)(l.b,{src:"img/original/example2_result2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(i.b)(l.b,{src:"img/original/example2_result3.png",caption:"Example result",mdxType:"GalleryImage"})),Object(i.b)("h2",{id:"real-life-example"},"Real-life example"),Object(i.b)("p",null,"To create something that is closer to a real-life example, we will add more rooms to the level graph, add special room templates for spawn and boss rooms and also two more corridor room templates."),Object(i.b)("h3",{id:"spawn-and-boss-rooms"},"Spawn and boss rooms"),Object(i.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(i.b)(l.b,{src:"img/original/example2_spawn.png",caption:"Spawn room template",mdxType:"GalleryImage"}),Object(i.b)(l.b,{src:"img/original/example2_boss.png",caption:"Boos room template",mdxType:"GalleryImage"})),Object(i.b)("h3",{id:"additional-room-template"},"Additional room template"),Object(i.b)("p",null,"We can make generated dungeons more interesting by adding smaller room templates to our dead-end rooms."),Object(i.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(i.b)(l.b,{src:"img/original/example2_room3.png",caption:"Additional room tempalte",mdxType:"GalleryImage"})),Object(i.b)("h3",{id:"wider-corridors"},"Wider corridors"),Object(i.b)(l.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(i.b)(l.b,{src:"img/original/example2_corridor_horizontal2.png",caption:"Wider horizontal corridor",mdxType:"GalleryImage"}),Object(i.b)(l.b,{src:"img/original/example2_corridor_vertical2.png",caption:"Wider vertical corridor",mdxType:"GalleryImage"})),Object(i.b)("h3",{id:"level-graph-1"},"Level graph"),Object(i.b)("p",null,"So the goal is to have more rooms than in the simple example and also a spawn room and a boss room. You can see one such level graph below."),Object(i.b)(l.c,{src:"img/original/example2_level_graph2.png",caption:"Level graph",mdxType:"Image"}),Object(i.b)("h3",{id:"results-1"},"Results"),Object(i.b)(l.c,{src:"img/original/example2_result_reallife2.png",caption:"Example result",mdxType:"Image"}),Object(i.b)(l.c,{src:"img/original/example2_result_reallife3.png",caption:"Example result",mdxType:"Image"}))}m.isMDXComponent=!0},282:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return u}));var a=r(0),o=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},m=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),b=a,u=m["".concat(l,".").concat(b)]||m[b]||d[b]||i;return r?o.a.createElement(u,n(n({ref:t},s),{},{components:r})):o.a.createElement(u,n({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=b;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n.mdxType="string"==typeof e?e:a,l[1]=n;for(var s=2;s<i;s++)l[s]=r[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},283:function(e,t,r){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return a}))},284:function(e,t,r){"use strict";var a=r(0),o=r(35);t.a=function(){return Object(a.useContext)(o.a)}},285:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(284),o=r(283);function i(e,{forcePrependBaseUrl:t=!1,absolute:r=!1}={}){const{siteConfig:{baseUrl:i="/",url:l}={}}=Object(a.a)();if(!e)return e;if(t)return i+e;if(!Object(o.a)(e))return e;const n=i+e.replace(/^\//,"");return r?l+n:n}},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return m}));var a=r(2),o=r(0),i=r.n(o),l=r(285);const n=e=>i.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>i.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},i.a.Children.map(e.children,t=>i.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),s=e=>i.a.createElement(n,{cols:e.cols},i.a.createElement("a",{href:Object(l.a)(e.src),target:"_blank"},i.a.createElement("img",{src:Object(l.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&i.a.createElement(p,null,e.caption)),p=e=>i.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),m=e=>{const{src:t,caption:r,...o}=e;return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",Object(a.a)({src:Object(l.a)(e.src)},o)),void 0!==e.caption&&i.a.createElement(p,null,e.caption))}}}]);