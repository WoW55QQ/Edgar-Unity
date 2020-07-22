(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return d}));var n=r(2),o=r(6),a=(r(0),r(282)),i=r(286),s=r(288),c={title:"Post-processing"},l={id:"version-2.0.0-alpha.4/generators/post-process",isDocsHomePage:!1,title:"Post-processing",description:"After a level is generated, we may often want to run some additional logic like spawning enemies, etc. This can be achieved by providing your own post processing logic that will be called after the level is generated and provided with information about the level.",source:"@site/versioned_docs\\version-2.0.0-alpha.4\\generators\\post-process.md",permalink:"/Edgar-Unity/docs/2.0.0-alpha.4/generators/post-process",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.4/generators/post-process.md",version:"2.0.0-alpha.4",sidebar:"version-2.0.0-alpha.4/docs",previous:{title:"(PRO) Custom input",permalink:"/Edgar-Unity/docs/2.0.0-alpha.4/generators/custom-input"},next:{title:"Example 1",permalink:"/Edgar-Unity/docs/2.0.0-alpha.4/examples/example-1"},latestVersionMainDocPermalink:"/Edgar-Unity/docs/introduction"},p=[{value:"Built-in post processing steps",id:"built-in-post-processing-steps",children:[{value:"0. Instantiate room template with correct positions",id:"0-instantiate-room-template-with-correct-positions",children:[]},{value:"1. Initialize shared tilemaps",id:"1-initialize-shared-tilemaps",children:[]},{value:"2. Copy rooms to shared tilemaps",id:"2-copy-rooms-to-shared-tilemaps",children:[]},{value:"3. Center grid",id:"3-center-grid",children:[]},{value:"4. Disable room template renderers",id:"4-disable-room-template-renderers",children:[]},{value:"5. Disable room template colliders",id:"5-disable-room-template-colliders",children:[]}]},{value:"Custom post processing",id:"custom-post-processing",children:[{value:"(PRO) Priority callbacks",id:"pro-priority-callbacks",children:[]}]}],u={rightToc:p};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"After a level is generated, we may often want to run some additional logic like spawning enemies, etc. This can be achieved by providing your own post processing logic that will be called after the level is generated and provided with information about the level. "),Object(a.b)("p",null,"To better understand how the generator works, we will first describe which post processing is done by the generator itself and then provide ways to extend this behaviour and provide your own logic."),Object(a.b)("h2",{id:"built-in-post-processing-steps"},"Built-in post processing steps"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"TODO:")," This section is not completed")),Object(a.b)("h3",{id:"0-instantiate-room-template-with-correct-positions"},"0. Instantiate room template with correct positions"),Object(a.b)("h3",{id:"1-initialize-shared-tilemaps"},"1. Initialize shared tilemaps"),Object(a.b)("h3",{id:"2-copy-rooms-to-shared-tilemaps"},"2. Copy rooms to shared tilemaps"),Object(a.b)("h3",{id:"3-center-grid"},"3. Center grid"),Object(a.b)("h3",{id:"4-disable-room-template-renderers"},"4. Disable room template renderers"),Object(a.b)("h3",{id:"5-disable-room-template-colliders"},"5. Disable room template colliders"),Object(a.b)("h2",{id:"custom-post-processing"},"Custom post processing"),Object(a.b)("p",null,"If we want to add our own post processing logic, we have to create a class that inherits from ",Object(a.b)("inlineCode",{parentName:"p"},"DungeonGeneratorPostProcessBase"),". And because the base class is a ScriptableObject, we need to add the ",Object(a.b)("inlineCode",{parentName:"p"},"CreateAssetMenu")," attribute so we are able to create an instance of that ScriptableObject. After a level is generated, the ",Object(a.b)("inlineCode",{parentName:"p"},"Run")," method is called and that is the place where we put our post process logic."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'[CreateAssetMenu(menuName = "Dungeon generator/Examples/Docs/My custom post process", fileName = "MyCustomPostProcess")]\npublic class MyCustomPostProcess : DungeonGeneratorPostProcessBase\n{\n    public override void Run(GeneratedLevel level, LevelDescription levelDescription)\n    { \n        // Implement the logic here\n    }\n}\n')),Object(a.b)("p",null,"With the implementation ready, we now have to create an instance of that ScriptableObject by right clicking in the project view and ",Object(a.b)("em",{parentName:"p"},"Create -> Dungeon generator -> Examples -> Docs -> My custom post process"),". And the last step is to drag and drop this GameObject in the ",Object(a.b)("em",{parentName:"p"},"Custom post process tasks")," section of the dungeon generator."),Object(a.b)(i.c,{src:"img/v2/examples/example1/custom_post_process.png",caption:"Add the ScriptableObject to the Custom post process tasks array",mdxType:"Image"}),Object(a.b)(s.b,{id:"custom-post-processing",mdxType:"FeatureUsage"}),Object(a.b)("h3",{id:"pro-priority-callbacks"},"(PRO) Priority callbacks"))}d.isMDXComponent=!0},282:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?o.a.createElement(b,s(s({ref:t},l),{},{components:r})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},283:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return n}))},284:function(e,t,r){"use strict";var n=r(0),o=r(35);t.a=function(){return Object(n.useContext)(o.a)}},285:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(284),o=r(283);function a(e,{forcePrependBaseUrl:t=!1,absolute:r=!1}={}){const{siteConfig:{baseUrl:a="/",url:i}={}}=Object(n.a)();if(!e)return e;if(t)return a+e;if(!Object(o.a)(e))return e;const s=a+e.replace(/^\//,"");return r?i+s:s}},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return u}));var n=r(2),o=r(0),a=r.n(o),i=r(285);const s=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,t=>a.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),l=e=>a.a.createElement(s,{cols:e.cols},a.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},a.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&a.a.createElement(p,null,e.caption)),p=e=>a.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),u=e=>{const{src:t,caption:r,...o}=e;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",Object(n.a)({src:Object(i.a)(e.src)},o)),void 0!==e.caption&&a.a.createElement(p,null,e.caption))}},287:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(19),i=r(283),s=r(8),c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var{isNavLink:t}=e,r=c(e,["isNavLink"]);const{to:l,href:p}=r,u=l||p,d=Object(i.a)(u),m=Object(n.useRef)(!1),b=t?a.c:a.b,f=s.a.canUseIntersectionObserver;let h;return Object(n.useEffect)(()=>(!f&&d&&window.docusaurus.prefetch(u),()=>{f&&h&&h.disconnect()}),[u,f,d]),u&&d&&!u.startsWith("#")?o.a.createElement(b,Object.assign({},r,{onMouseEnter:()=>{m.current||(window.docusaurus.preload(u),m.current=!0)},innerRef:e=>{var t,r;f&&e&&d&&(t=e,r=()=>{window.docusaurus.prefetch(u)},h=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(h.unobserve(t),h.disconnect(),r())})}),h.observe(t))},to:u})):o.a.createElement("a",Object.assign({href:u},!d&&{target:"_blank",rel:"noopener noreferrer"},r))}},288:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return p}));var n=r(0),o=r.n(n),a=r(287);const i=[{id:"outline-override",url:"../basics/room-templates#outline-override",name:"Outline override",usages:[{id:"corridors",description:"Outline override is used to properly handle corridors"}]},{id:"custom-rooms-and-connections",url:"../basics/level-graphs#pro-custom-rooms-and-connections",name:"Custom rooms",usages:[{id:"room-type",description:"The definition of rooms is enhanced with a custom type"}]},{id:"custom-post-processing",url:"../generators/post-process#custom-post-processing",name:"Custom post-processing",usages:[{id:"enemies",description:"A custom post-processing task is used to spawn enemies after a level is generated"},{id:"player-spawn",description:"Move the player to the spawn position of the level"}]}],s=[{id:"example-1",name:"Example 1",url:"../examples/example-1",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"}]},{id:"example-2",name:"Example 2",url:"../examples/example-2",features:[{id:"outline-override",usage:"corridors",anchor:"vertical-corridors"}]},{id:"dead-cells",name:"Dead Cells",url:"../examples/dead-cells",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"},{id:"custom-post-processing",usage:"player-spawn",anchor:"spawn-position"},{id:"custom-rooms-and-connections",usage:"room-type",anchor:"custom-room-and-connection-types"}]}];function c(e){if("undefined"!=typeof window){const t=window.location.href,r=t.split("/");(r[r.length-1].startsWith("#")||t.endsWith("/"))&&(e="../"+e)}return e}const l=e=>{const t=i.find(t=>t.id===e.id).usages.map(e=>({...e,examples:[]}));return s.forEach(r=>{r.features.forEach(n=>{if(n.id===e.id){t.find(e=>e.id===n.usage).examples.push({example:r,feature:n})}})}),o.a.createElement("div",{className:"featureUsage"},o.a.createElement("div",{className:"featureUsage__title"},"Where is this feature used?"),o.a.createElement("div",{className:"featureUsage__description"},"Below is the list of examples/tutorials where we use this feature. Feel free to check them out if you're not sure how something works or if you just want to see this feature used in action."),o.a.createElement("table",null,o.a.createElement("tbody",null,t.map((e,t)=>o.a.createElement("tr",{key:t},o.a.createElement("td",null,e.examples.map((e,t)=>o.a.createElement("span",null,t?", ":"",o.a.createElement(a.a,{to:c(e.example.url+"#"+e.feature.anchor),onClick:()=>{return t=e.feature.anchor,void setTimeout((function(){var e=document.getElementById(t);e&&e.scrollIntoView()}),1e3);var t}},e.example.name)))),o.a.createElement("td",null,e.description))))))},p=e=>{const t=s.find(t=>t.id===e.id),r=[];return t.features.forEach(e=>{const t=i.find(t=>t.id===e.id),n=t.usages.find(t=>t.id===e.usage);r.push({...e,feature:t,featureUsage:n})}),o.a.createElement("div",{className:"featureUsage"},o.a.createElement("div",{className:"featureUsage__title"},"List of used features"),o.a.createElement("div",{className:"featureUsage__description"},"Below is a list of features that are used in this example."),o.a.createElement("table",null,o.a.createElement("tbody",null,r.map((e,t)=>o.a.createElement("tr",{key:t},o.a.createElement("td",null,o.a.createElement(a.a,{to:e.feature.url},e.feature.name)),o.a.createElement("td",null,e.featureUsage.description))))))}}}]);