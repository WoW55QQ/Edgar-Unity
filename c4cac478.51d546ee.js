(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{197:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return m}));var n=r(2),o=r(6),a=(r(0),r(228)),i=r(231),l=r(237),c={title:"Example 2"},s={id:"examples/example-2",title:"Example 2",description:"In this tutorial, we will use this tileset by 0x72. Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles.",source:"@site/docs\\examples\\example-2.md",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/example-2",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/docs/examples/example-2.md",version:"next",sidebar:"docs",previous:{title:"Example 1",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/example-1"},next:{title:"(PRO) Platformer 1",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/platformer-1"}},u=[{value:"Simple example",id:"simple-example",children:[{value:"Basic rooms romplates",id:"basic-rooms-romplates",children:[]},{value:"Vertical corridors",id:"vertical-corridors",children:[]},{value:"Horizontal corridors",id:"horizontal-corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}]},{value:"Real-life example",id:"real-life-example",children:[{value:"Spawn and boss rooms",id:"spawn-and-boss-rooms",children:[]},{value:"Additional room template",id:"additional-room-template",children:[]},{value:"Wider corridors",id:"wider-corridors",children:[]},{value:"Level graph",id:"level-graph-1",children:[]},{value:"Results",id:"results-1",children:[]}]}],p={rightToc:u};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this tutorial, we will use ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://0x72.itch.io/dungeontileset-ii"}),"this tileset")," by ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://0x72.itch.io/"}),"0x72"),". Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles."),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/original/example2_result1.png",caption:"Simple example",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/v2/examples/example2/result_reallife1.png",caption:"Real-life example",mdxType:"GalleryImage"})),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," I recommend reading ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," first as this is a little bit harder to setup and I will not repeat the basics here.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(a.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/Example2"),".")),Object(a.b)(l.a,{id:"example-2",mdxType:"ExampleFeatures"}),Object(a.b)("h2",{id:"simple-example"},"Simple example"),Object(a.b)("p",null,"The goal is to create two basic rectangular room remplates of different sizes and a room template for both horizontal and vertical corridors."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," This tileset is trickier than the one used in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"example1.md"}),"Example 1")," because there is an additional row of ligther tiles above all horizontal wall tiles. It will cause us problems when working with corridors.")),Object(a.b)("h3",{id:"basic-rooms-romplates"},"Basic rooms romplates"),Object(a.b)("p",null,"For this example, I am using doors with two different lengths (1 and 2). That means that we have to use the ",Object(a.b)("em",{parentName:"p"},"Specific positions mode")," mode because the ",Object(a.b)("em",{parentName:"p"},"Simple mode")," can only handle doors with the same length. As you can see below, the door positions look quite messy because they overlap. However, this is only to showcase that it is possible and you can use doors with the same length."),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/original/example2_room1.png",caption:"Smaller room",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/example2_room2.png",caption:"Bigger room",mdxType:"GalleryImage"})),Object(a.b)("h3",{id:"vertical-corridors"},"Vertical corridors"),Object(a.b)("p",null,"As I said before, there is a problem with corridors when working with this tileset. To be more precise, there is a problem with vertical corridors because of the additional roow of tiles above wall tiles. If we were to design our vertical corridors as in Example 1, we would end up with something like this:"),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/original/example2_wrong_corridor.png",caption:"Incorrent vertical corridor",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/example2_wrong_corridor2.png",caption:"Incorrent connection",mdxType:"GalleryImage"})),Object(a.b)("p",null,"We can solve this by using the ",Object(a.b)("strong",{parentName:"p"},"Outline override")," feature. It allows us to tell the algorithm that instead of automatically computing the outline of the room template, we want to draw it manually. You can see the result below. By doing so, we easily fix the problem with walls being one tile taller and the level is drawn correctly."),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/v2/examples/example2/corridor_vertical_before.png",caption:"Incorrect - Without outline override",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/v2/examples/example2/corridor_vertical_after.png",caption:"Correct - With outline override",mdxType:"GalleryImage"})),Object(a.b)("p",null,"To enable the ",Object(a.b)("strong",{parentName:"p"},"Outline override"),", we have to click the ",Object(a.b)("strong",{parentName:"p"},"Add outline override")," button. This button adds another tilemap layer called ",Object(a.b)("em",{parentName:"p"},"Outline Override"),". "),Object(a.b)(i.c,{src:"img/v2/examples/example2/corridor_vertical_before_gui.png",caption:"Add outline override button",mdxType:"Image"}),Object(a.b)("p",null,"When computing the outline of this room template, the generator will now ignore all the other layers and use only the ",Object(a.b)("em",{parentName:"p"},"Outline Override")," layer. Moreover, the generator will ignore this layer while copying individual tiles to the shared tilemap so we can use any tiles to draw on this layer. And where we are done with drawing the outline, we can make that tilemap layer inactive so we can see how the room template normally looks."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," We must not forget to make sure that all our doors are contained on the new outline.")),Object(a.b)(i.c,{src:"img/v2/examples/example2/corridor_vertical_with_outline_shown.png",caption:"We can use any tiles to draw on the Outline Override layer as they are not used in the output.",mdxType:"Image"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," In the previous version of the algorithm, we had to manually implement some additional logic to fix these situations. The goal of the current version is to make it possible without writing any code.")),Object(a.b)("h3",{id:"horizontal-corridors"},"Horizontal corridors"),Object(a.b)("p",null,"There is also a slight problem with horizontal corridors. It is currently not possible to have doors with length 1 to be at the corners of the room template outline. We fix this by adding ",Object(a.b)("strong",{parentName:"p"},"Outline override")," and using a rectangular outline where the doors are not at the corners."),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/v2/examples/example2/corridor_horizontal_before.png",caption:"Incorrect - Without outline override. There must not be doors of length 1 at the corners of the outline.",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/v2/examples/example2/corridor_horizontal_after.png",caption:"Correct - With outline override. Doors are no longer at the corners of the outline.",mdxType:"GalleryImage"})),Object(a.b)("h3",{id:"level-graph"},"Level graph"),Object(a.b)(i.c,{src:"img/v2/examples/example2/level_graph1.png",caption:"Level graph",mdxType:"Image"}),Object(a.b)("h3",{id:"results"},"Results"),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/original/example2_result2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/example2_result3.png",caption:"Example result",mdxType:"GalleryImage"})),Object(a.b)("h2",{id:"real-life-example"},"Real-life example"),Object(a.b)("p",null,"To create something that is closer to a real-life example, we will add more rooms to the level graph, add special room templates for spawn and boss rooms and also two more corridor room templates."),Object(a.b)("h3",{id:"spawn-and-boss-rooms"},"Spawn and boss rooms"),Object(a.b)("p",null,"These rooms will contain:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"our player prefab with basic movement"),Object(a.b)("li",{parentName:"ul"},"interactable chest that changes appearance after interaction (no loot is implemented)"),Object(a.b)("li",{parentName:"ul"},"ladder that causes the game manager to generated a new level after interaction"),Object(a.b)("li",{parentName:"ul"},"an ogre in the boss room (no AI implemented)")),Object(a.b)(i.c,{src:"img/v2/examples/example2/spawn.png",caption:"Spawn room with our player prefab, chest and exit",mdxType:"Image"}),Object(a.b)(i.c,{src:"img/v2/examples/example2/boss.png",caption:"Boss room with our enemy prefab, chest and exit",mdxType:"Image"}),Object(a.b)("h3",{id:"additional-room-template"},"Additional room template"),Object(a.b)("p",null,"We can make generated dungeons more interesting by adding smaller room templates to our dead-end rooms."),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/original/example2_room3.png",caption:"Additional room tempalte",mdxType:"GalleryImage"})),Object(a.b)("h3",{id:"wider-corridors"},"Wider corridors"),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/original/example2_corridor_horizontal2.png",caption:"Wider horizontal corridor",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/original/example2_corridor_vertical2.png",caption:"Wider vertical corridor",mdxType:"GalleryImage"})),Object(a.b)("h3",{id:"level-graph-1"},"Level graph"),Object(a.b)("p",null,"So the goal is to have more rooms than in the simple example and also a spawn room and a boss room. You can see one such level graph below."),Object(a.b)(i.c,{src:"img/v2/examples/example2/level_graph2.png",caption:"Level graph",mdxType:"Image"}),Object(a.b)("h3",{id:"results-1"},"Results"),Object(a.b)(i.c,{src:"img/v2/examples/example2/result_reallife2.png",caption:"Example result",mdxType:"Image"}),Object(a.b)(i.c,{src:"img/v2/examples/example2/result_reallife3.png",caption:"Example result",mdxType:"Image"}))}m.isMDXComponent=!0},228:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return r?o.a.createElement(b,l(l({ref:t},s),{},{components:r})):o.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},229:function(e,t,r){"use strict";var n=r(0),o=r(34);t.a=function(){return Object(n.useContext)(o.a)}},230:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(229);function o(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:r="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},231:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return p}));var n=r(2),o=r(0),a=r.n(o),i=r(230);const l=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,t=>a.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),s=e=>a.a.createElement(l,{cols:e.cols},a.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},a.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&a.a.createElement(u,null,e.caption)),u=e=>a.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:r,...o}=e;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",Object(n.a)({src:Object(i.a)(e.src)},o)),void 0!==e.caption&&a.a.createElement(u,null,e.caption))}},232:function(e,t,r){"use strict";var n,o,a=r(259),i=RegExp.prototype.exec,l=String.prototype.replace,c=i,s=(n=/a/,o=/b*/g,i.call(n,"a"),i.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),u=void 0!==/()??/.exec("")[1];(s||u)&&(c=function(e){var t,r,n,o,c=this;return u&&(r=new RegExp("^"+c.source+"$(?!\\s)",a.call(c))),s&&(t=c.lastIndex),n=i.call(c,e),s&&n&&(c.lastIndex=c.global?n.index+n[0].length:t),u&&n&&n.length>1&&l.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),e.exports=c},233:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(20),i=r(234),l=r(37),c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var{isNavLink:t}=e,r=c(e,["isNavLink"]);const{to:s,href:u}=r,p=s||u,m=Object(i.a)(p),d=Object(n.useRef)(!1),b=t?a.c:a.b,h=l.a.canUseIntersectionObserver;let f;return Object(n.useEffect)(()=>(!h&&m&&window.docusaurus.prefetch(p),()=>{h&&f&&f.disconnect()}),[p,h,m]),p&&m&&!p.startsWith("#")?o.a.createElement(b,Object.assign({},r,{onMouseEnter:()=>{d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:e=>{var t,r;h&&e&&m&&(t=e,r=()=>{window.docusaurus.prefetch(p)},f=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),r())})}),f.observe(t))},to:p})):o.a.createElement("a",Object.assign({href:p},!m&&{target:"_blank",rel:"noopener noreferrer"},r))}},234:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))},235:function(e,t,r){var n=r(19),o=r(53),a=r(11)("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==o(e))}},237:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return u}));r(238),r(239),r(241),r(245),r(250),r(253);var n=r(0),o=r.n(n),a=r(233),i=[{id:"outline-override",url:"../basics/room-templates#outline-override",name:"Outline override",usages:[{id:"corridors",description:"Outline override is used to properly handle corridors"}]},{id:"custom-rooms-and-connections",url:"../basics/level-graphs#pro-custom-rooms-and-connections",name:"Custom rooms",usages:[{id:"room-type",description:"The definition of rooms is enhanced with a custom type"}]},{id:"custom-post-processing",url:"../generators/post-process#custom-post-processing",name:"Custom post-processing",usages:[{id:"enemies",description:"A custom post-processing task is used to spawn enemies after a level is generated"},{id:"player-spawn",description:"Move the player to the spawn position of the level"}]}],l=[{id:"example-1",name:"Example 1",url:"../examples/example-1",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"}]},{id:"example-2",name:"Example 2",url:"../examples/example-2",features:[{id:"outline-override",usage:"corridors",anchor:"vertical-corridors"}]},{id:"dead-cells",name:"Dead Cells",url:"../examples/dead-cells",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"},{id:"custom-post-processing",usage:"player-spawn",anchor:"spawn-position"},{id:"custom-rooms-and-connections",usage:"room-type",anchor:"custom-room-and-connection-types"}]}];function c(e){if("undefined"!=typeof window){var t=window.location.href.split("/");t[t.length-1].startsWith("#")&&(e="../"+e)}else e="../"+e;return e}var s=function(e){var t=i.find((function(t){return t.id===e.id})).usages.map((function(e){return Object.assign({},e,{examples:[]})}));return l.forEach((function(r){r.features.forEach((function(n){n.id===e.id&&t.find((function(e){return e.id===n.usage})).examples.push({example:r,feature:n})}))})),console.log(t),o.a.createElement("div",{className:"featureUsage"},o.a.createElement("div",{className:"featureUsage__title"},"Where is this feature used?"),o.a.createElement("div",{className:"featureUsage__description"},"Below is the list of examples/tutorials where we use this feature. Feel free to check them out if you're not sure how something works or if you just want to see this feature used in action."),o.a.createElement("table",null,o.a.createElement("tbody",null,t.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e.examples.map((function(e,t){return o.a.createElement("span",null,t?", ":"",o.a.createElement(a.a,{to:c(e.example.url+"#"+e.feature.anchor)},e.example.name))}))),o.a.createElement("td",null,e.description))})))))},u=function(e){var t=l.find((function(t){return t.id===e.id})),r=[];return t.features.forEach((function(e){var t=i.find((function(t){return t.id===e.id})),n=t.usages.find((function(t){return t.id===e.usage}));r.push(Object.assign({},e,{feature:t,featureUsage:n}))})),o.a.createElement("div",{className:"featureUsage"},o.a.createElement("div",{className:"featureUsage__title"},"List of used features"),o.a.createElement("div",{className:"featureUsage__description"},"Below is a list of features that are used in this example."),o.a.createElement("table",null,o.a.createElement("tbody",null,r.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,o.a.createElement(a.a,{to:e.feature.url},e.feature.name)),o.a.createElement("td",null,e.featureUsage.description))})))))}},238:function(e,t,r){var n=r(21).f,o=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in o||r(12)&&n(o,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},239:function(e,t,r){"use strict";r(240)("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},240:function(e,t,r){var n=r(52),o=r(35),a=r(36),i=/"/g,l=function(e,t,r,n){var o=String(a(e)),l="<"+t;return""!==r&&(l+=" "+r+'="'+String(n).replace(i,"&quot;")+'"'),l+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(l),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},241:function(e,t,r){var n=r(52);n(n.S+n.F,"Object",{assign:r(242)})},242:function(e,t,r){"use strict";var n=r(12),o=r(38),a=r(243),i=r(244),l=r(56),c=r(55),s=Object.assign;e.exports=!s||r(35)((function(){var e={},t={},r=Symbol(),n="abcdefghijklmnopqrst";return e[r]=7,n.split("").forEach((function(e){t[e]=e})),7!=s({},e)[r]||Object.keys(s({},t)).join("")!=n}))?function(e,t){for(var r=l(e),s=arguments.length,u=1,p=a.f,m=i.f;s>u;)for(var d,b=c(arguments[u++]),h=p?o(b).concat(p(b)):o(b),f=h.length,g=0;f>g;)d=h[g++],n&&!m.call(b,d)||(r[d]=b[d]);return r}:s},243:function(e,t){t.f=Object.getOwnPropertySymbols},244:function(e,t){t.f={}.propertyIsEnumerable},245:function(e,t,r){"use strict";var n=r(52),o=r(246)(5),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),n(n.P+n.F*a,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),r(57)("find")},246:function(e,t,r){var n=r(58),o=r(55),a=r(56),i=r(54),l=r(247);e.exports=function(e,t){var r=1==e,c=2==e,s=3==e,u=4==e,p=6==e,m=5==e||p,d=t||l;return function(t,l,b){for(var h,f,g=a(t),v=o(g),x=n(l,b,3),y=i(v.length),O=0,w=r?d(t,y):c?d(t,0):void 0;y>O;O++)if((m||O in v)&&(f=x(h=v[O],O,g),e))if(r)w[O]=f;else if(f)switch(e){case 3:return!0;case 5:return h;case 6:return O;case 2:w.push(h)}else if(u)return!1;return p?-1:s||u?u:w}}},247:function(e,t,r){var n=r(248);e.exports=function(e,t){return new(n(e))(t)}},248:function(e,t,r){var n=r(19),o=r(249),a=r(11)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),n(t)&&null===(t=t[a])&&(t=void 0)),void 0===t?Array:t}},249:function(e,t,r){var n=r(53);e.exports=Array.isArray||function(e){return"Array"==n(e)}},250:function(e,t,r){"use strict";var n=r(52),o=r(54),a=r(251),i="".startsWith;n(n.P+n.F*r(252)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})},251:function(e,t,r){var n=r(235),o=r(36);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},252:function(e,t,r){var n=r(11)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}},253:function(e,t,r){"use strict";var n=r(235),o=r(18),a=r(254),i=r(255),l=r(54),c=r(257),s=r(232),u=r(35),p=Math.min,m=[].push,d="length",b=!u((function(){RegExp(4294967295,"y")}));r(260)("split",2,(function(e,t,r,u){var h;return h="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[d]||2!="ab".split(/(?:ab)*/)[d]||4!=".".split(/(.?)(.?)/)[d]||".".split(/()()/)[d]>1||"".split(/.?/)[d]?function(e,t){var o=String(this);if(void 0===e&&0===t)return[];if(!n(e))return r.call(o,e,t);for(var a,i,l,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,b=void 0===t?4294967295:t>>>0,h=new RegExp(e.source,u+"g");(a=s.call(h,o))&&!((i=h.lastIndex)>p&&(c.push(o.slice(p,a.index)),a[d]>1&&a.index<o[d]&&m.apply(c,a.slice(1)),l=a[0][d],p=i,c[d]>=b));)h.lastIndex===a.index&&h.lastIndex++;return p===o[d]?!l&&h.test("")||c.push(""):c.push(o.slice(p)),c[d]>b?c.slice(0,b):c}:"0".split(void 0,0)[d]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,n){var o=e(this),a=null==r?void 0:r[t];return void 0!==a?a.call(r,o,n):h.call(String(o),r,n)},function(e,t){var n=u(h,e,this,t,h!==r);if(n.done)return n.value;var s=o(e),m=String(this),d=a(s,RegExp),f=s.unicode,g=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(b?"y":"g"),v=new d(b?s:"^(?:"+s.source+")",g),x=void 0===t?4294967295:t>>>0;if(0===x)return[];if(0===m.length)return null===c(v,m)?[m]:[];for(var y=0,O=0,w=[];O<m.length;){v.lastIndex=b?O:0;var j,E=c(v,b?m:m.slice(O));if(null===E||(j=p(l(v.lastIndex+(b?0:O)),m.length))===y)O=i(m,O,f);else{if(w.push(m.slice(y,O)),w.length===x)return w;for(var T=1;T<=E.length-1;T++)if(w.push(E[T]),w.length===x)return w;O=y=j}}return w.push(m.slice(y)),w}]}))},254:function(e,t,r){var n=r(18),o=r(59),a=r(11)("species");e.exports=function(e,t){var r,i=n(e).constructor;return void 0===i||null==(r=n(i)[a])?t:o(r)}},255:function(e,t,r){"use strict";var n=r(256)(!0);e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},256:function(e,t,r){var n=r(39),o=r(36);e.exports=function(e){return function(t,r){var a,i,l=String(o(t)),c=n(r),s=l.length;return c<0||c>=s?e?"":void 0:(a=l.charCodeAt(c))<55296||a>56319||c+1===s||(i=l.charCodeAt(c+1))<56320||i>57343?e?l.charAt(c):a:e?l.slice(c,c+2):i-56320+(a-55296<<10)+65536}}},257:function(e,t,r){"use strict";var n=r(258),o=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"==typeof r){var a=r.call(e,t);if("object"!=typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(e))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(e,t)}},258:function(e,t,r){var n=r(53),o=r(11)("toStringTag"),a="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,r,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=Object(e),o))?r:a?n(t):"Object"==(i=n(t))&&"function"==typeof t.callee?"Arguments":i}},259:function(e,t,r){"use strict";var n=r(18);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},260:function(e,t,r){"use strict";r(261);var n=r(22),o=r(8),a=r(35),i=r(36),l=r(11),c=r(232),s=l("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var m=l(e),d=!a((function(){var t={};return t[m]=function(){return 7},7!=""[e](t)})),b=d?!a((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[s]=function(){return r}),r[m](""),!t})):void 0;if(!d||!b||"replace"===e&&!u||"split"===e&&!p){var h=/./[m],f=r(i,m,""[e],(function(e,t,r,n,o){return t.exec===c?d&&!o?{done:!0,value:h.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}})),g=f[0],v=f[1];n(String.prototype,e,g),o(RegExp.prototype,m,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},261:function(e,t,r){"use strict";var n=r(232);r(52)({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})}}]);