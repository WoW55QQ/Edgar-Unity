(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{309:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,l(l({ref:t},s),{},{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},310:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(22),o=n(311);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},311:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return p}));var r=n(3),o=n(0),a=n.n(o),i=n(310);const l=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,(t=>a.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})))),s=e=>a.a.createElement(l,{cols:e.cols},a.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},a.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&a.a.createElement(u,null,e.caption)),u=e=>a.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:n,...o}=e;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",Object(r.a)({src:Object(i.a)(e.src)},o)),void 0!==e.caption&&a.a.createElement(u,null,e.caption))}},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(309)),i=n(312),l={title:"Dungeon generator"},c={unversionedId:"generators/dungeon-generator",id:"version-2.0.0-alpha.3/generators/dungeon-generator",isDocsHomePage:!1,title:"Dungeon generator",description:"Minimal setup",source:"@site/versioned_docs\\version-2.0.0-alpha.3\\generators\\dungeon-generator.md",slug:"/generators/dungeon-generator",permalink:"/Edgar-Unity/docs/2.0.0-alpha.3/generators/dungeon-generator",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.3/generators/dungeon-generator.md",version:"2.0.0-alpha.3",sidebar:"version-2.0.0-alpha.3/docs",previous:{title:"Performance tips",permalink:"/Edgar-Unity/docs/2.0.0-alpha.3/basics/performance-tips"},next:{title:"(PRO) Platformer generator",permalink:"/Edgar-Unity/docs/2.0.0-alpha.3/generators/platformer-generator"}},s=[{value:"Minimal setup",id:"minimal-setup",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Call the generator from script",id:"call-the-generator-from-script",children:[{value:"(PRO) With coroutines",id:"pro-with-coroutines",children:[]}]}],u={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"minimal-setup"},"Minimal setup"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add the ",Object(a.b)("strong",{parentName:"li"},"Dungeon Generator Component")," to any Game Object in the Scene."),Object(a.b)("li",{parentName:"ul"},"Assign your level graph to the ",Object(a.b)("strong",{parentName:"li"},"Level Graph")," field."),Object(a.b)("li",{parentName:"ul"},"Hit the ",Object(a.b)("strong",{parentName:"li"},"Generate dungeon")," button or enable ",Object(a.b)("strong",{parentName:"li"},"Generate on start")," and enter play mode")),Object(a.b)(i.c,{src:"img/v2/generators/dungeon_generator_inspector.png",caption:"Dungeon generator runner",width:"500px",mdxType:"Image"}),Object(a.b)("h2",{id:"configuration"},"Configuration"),Object(a.b)("h4",{id:"input-config"},"Input config"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Level Graph")," - Level graph that should be used. Must not be null."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Use corridors")," - Whether corridors should be used between neighboring rooms. If enabled, corridor room templates must be provided in the level graph.")),Object(a.b)("h4",{id:"generator-config"},"Generator config"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Root Game Object")," - Game Object to which the generated level will be attached. New Game Object will be created if null."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Timeout")," - How long (in milliseconds) should we wait for the algorithm to generate a level. We may sometimes create an input that is too hard for the algoritm so it is good to stop after some amount of time with an error."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Repeat Mode Override")," - Whether to override the repeat mode of individual room templates.",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"No override")," - Nothing is overriden, keep repeat modes from room templates."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Allow repeat")," - All room templates may repeat in generated levels."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"No immeadiate")," - Neighboring room must have different room templates."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"No repeat")," - All rooms must have different room templates.")))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," If you provide too few room templates, they may repeat in generated levels even if you choose the ",Object(a.b)("strong",{parentName:"p"},"No immeadiate")," or ",Object(a.b)("strong",{parentName:"p"},"No repeat")," options. To make sure that the repeat mode is satisifed, please provide enough room templates to choose from.")),Object(a.b)("h4",{id:"post-processing-config"},"Post processing config"),Object(a.b)("p",null,"Please refer see the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../generators/post-process"}),"Post processing")," page to find detailed information this configuration."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Initialize Shared Tilemaps")," - Whether to initialize tilemaps that will hold the generated level."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Tilemap Layers Handler")," - Which tilemap layers handler should be used to initialize shared tilemaps. Uses the ",Object(a.b)("inlineCode",{parentName:"li"},"DungeonTilemapLayersHandler")," if not set."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Copy Tiles To Shared Tilemaps")," - Whether to copy tiles from individual room template to the shared tilemaps."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Center Grid")," - Whether to move the level so that its center is approximately at (0,0). Useful for debugging in Scene view in editor."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Disable Room Template Renderers")," - Whether to disable tilemap renderers of individual rooms, useful only when ",Object(a.b)("em",{parentName:"li"},"Copy Tiles To Shared Tilemaps")," is enabled."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Disable Room Template Colliders")," - Whether to disable tilemap colliders of individual rooms, useful only when ",Object(a.b)("em",{parentName:"li"},"Copy Tiles To Shared Tilemaps")," is enabled.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"TODO:")," Link to page with tilemap layers.")),Object(a.b)("h4",{id:"other-config"},"Other config"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Use Random Seed")," - Whether to use a random seed for each new generated level. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Random Generator Seed")," - Random generator seed that will be used when ",Object(a.b)("strong",{parentName:"li"},"Use Random Seed")," is disabled. Useful for debugging."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Generate On Start")," - Whether to generate a new level when play mode is entered.")),Object(a.b)("h2",{id:"call-the-generator-from-script"},"Call the generator from script"),Object(a.b)("p",null,"It is very simple to call the generator from a script:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Get the ",Object(a.b)("inlineCode",{parentName:"li"},"DungeonGenerator")," component from the game object that holds the generator"),Object(a.b)("li",{parentName:"ol"},"Call the ",Object(a.b)("inlineCode",{parentName:"li"},"Generate()")," method")),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'var generator = GameObject.Find("Dungeon Generator").GetComponent<DungeonGenerator>();\ngenerator.Generate();\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," The ",Object(a.b)("inlineCode",{parentName:"p"},"Generate()")," method blocks the main Unity thread so the game may freeze while the dungeon is generated. The PRO version comes with an implementation that uses coroutines to make sure that the games does not freeze.")),Object(a.b)("h3",{id:"pro-with-coroutines"},"(PRO) With coroutines"),Object(a.b)("p",null,"If we do not want to block the main Unity thread when the level is generating, we can use a coroutine. There are two ways of doing that."),Object(a.b)("p",null,"The simple approach uses only built-in Unity coroutines and works like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'var generator = GameObject.Find("Dungeon Generator").GetComponent<DungeonGenerator>();\nStartCoroutine(generator.GenerateCoroutine());\n')),Object(a.b)("p",null,"There is one problem with the simple approach - coroutines cannot really handle exceptions. So if there is some problem with the generator or with custom post processing logic, the coroutine just dies and we are not able to do any cleanup. Therefore, I implemented a smarter coroutine that lets us handle any errors. Example usage:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'using System.Collections;\nusing ProceduralLevelGenerator.Unity.Generators.DungeonGenerator;\nusing ProceduralLevelGenerator.Unity.Pro;\nusing UnityEngine;\n\npublic class CoroutineWithDataExampleAdvanced : MonoBehaviour\n{\n    public void Start()\n    {\n        var generator = GameObject.Find("Dungeon Generator").GetComponent<DungeonGenerator>();\n        StartCoroutine(GeneratorCoroutine(generator));\n    }\n\n    private IEnumerator GeneratorCoroutine(DungeonGenerator generator)\n    {\n        // Start the smart coroutine\n        // StartCoroutineWithData is a custom extension method of MonoBehaviour, be sure to use the ProceduralLevelGenerator.Unity.Pro namespace\n        var generatorCoroutine = this.StartCoroutineWithData(generator.GenerateCoroutine());\n\n        // Wait until the smart coroutine is completed\n        // Make sure to yield return the Coroutine property and not the generator coroutine itself!!\n        yield return generatorCoroutine.Coroutine;\n\n        // Check if the coroutine was successful\n        if (generatorCoroutine.IsSuccessful)\n        {\n            Debug.Log("Level generated!");\n        }\n        // If there were any errors, we can access the Exception object\n        // Or we can also rethrow the exception by calling generatorCoroutine.ThrowIfNotSuccessful();\n        else\n        {\n            Debug.LogError("There was an error when generating the level!");\n            Debug.LogError(generatorCoroutine.Exception.Message);\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);