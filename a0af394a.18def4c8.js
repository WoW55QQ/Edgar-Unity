(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{211:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),i=(r(0),r(282)),o=r(286),c={title:"Tilemap layers"},l={id:"version-1.0.3/other/tilemap-layers",isDocsHomePage:!1,title:"Tilemap layers",description:"The default structure of tilemaps was already described on the Room templates page. The goal of this tutorial is to show you how we can override the default behaviour.",source:"@site/versioned_docs\\version-1.0.3\\other\\tilemap-layers.md",permalink:"/Edgar-Unity/docs/1.0.3/other/tilemap-layers",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-1.0.3/other/tilemap-layers.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Corridors correction",permalink:"/Edgar-Unity/docs/1.0.3/guides/corridors-correction"},latestVersionMainDocPermalink:"/Edgar-Unity/docs/introduction"},s=[{value:"Overriding defaults",id:"overriding-defaults",children:[]}],u={rightToc:s};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The default structure of tilemaps was already described on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"roomTemplates.md"}),"Room templates")," page. The goal of this tutorial is to show you how we can override the default behaviour."),Object(i.b)("h2",{id:"overriding-defaults"},"Overriding defaults"),Object(i.b)("p",null,"To override the default behaviour, we have to create a class that inherits from the ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractTilemapLayersHandler")," class. You can see the default implementation in the ",Object(i.b)("inlineCode",{parentName:"p"},"TilemapLayersHandler")," class."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'public abstract class AbstractTilemapLayersHandler : ScriptableObject, ITilemapLayersHandler\n{\n    /// <summary>\n    /// Initializes the structure of tilemaps of a given gameObject.\n    /// </summary>\n    /// <remarks>\n    /// Adds child GameObjects with tilemap components attached. Multiple tilemaps are\n    /// used to layer individual tiles over one another. This is also the place to add\n    /// colliders and setup sorting order.\n    /// </remarks>\n    /// <param name="gameObject">Parent GameObject of created tilemaps.</param>\n    public abstract void InitializeTilemaps(GameObject gameObject);\n}\n')),Object(i.b)("p",null,"Then you have to assign this tilemap layers handler to the ",Object(i.b)("em",{parentName:"p"},"Tilemap Layers Handler")," field of the payload initializer that is used by the generator. That will ensure that all generated dungeons will have this structure of tilemaps. The last step is to ensure that all room templates have the same structure of tilemaps as generated dungeons. With the default structure, we use the ",Object(i.b)("em",{parentName:"p"},"Default Room Template Initializer")," script to initialize room templates. If we want to use a different structure, we have to use the ",Object(i.b)("em",{parentName:"p"},"Configurable Room Template Initializer")," and assign our new tilemap layers handler."),Object(i.b)(o.c,{src:"img/original/configurable_room_template_initializer.png",caption:"Configurable room template initializer script",mdxType:"Image"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note:")," It is ",Object(i.b)("strong",{parentName:"p"},"VERY IMPORTANT")," to to choose the right structure of tilemap layers before creating a larger number of room templates because it is very difficult to convert room templates from one structure to another.")))}p.isMDXComponent=!0},282:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return r?n.a.createElement(f,c(c({ref:t},s),{},{components:r})):n.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},283:function(e,t,r){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}r.d(t,"a",(function(){return a}))},284:function(e,t,r){"use strict";var a=r(0),n=r(35);t.a=function(){return Object(a.useContext)(n.a)}},285:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(284),n=r(283);function i(e,{forcePrependBaseUrl:t=!1,absolute:r=!1}={}){const{siteConfig:{baseUrl:i="/",url:o}={}}=Object(a.a)();if(!e)return e;if(t)return i+e;if(!Object(n.a)(e))return e;const c=i+e.replace(/^\//,"");return r?o+c:c}},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return p}));var a=r(2),n=r(0),i=r.n(n),o=r(285);const c=e=>i.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),l=e=>i.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},i.a.Children.map(e.children,t=>i.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),s=e=>i.a.createElement(c,{cols:e.cols},i.a.createElement("a",{href:Object(o.a)(e.src),target:"_blank"},i.a.createElement("img",{src:Object(o.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&i.a.createElement(u,null,e.caption)),u=e=>i.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:r,...n}=e;return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",Object(a.a)({src:Object(o.a)(e.src)},n)),void 0!==e.caption&&i.a.createElement(u,null,e.caption))}}}]);