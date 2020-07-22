(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{267:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),i=t(6),a=(t(0),t(282)),o={title:"Run pipeline"},p={id:"version-1.0.3/generator-pipeline/run-pipeline",isDocsHomePage:!1,title:"Run pipeline",description:"There are currently three ways to run a pipeline:",source:"@site/versioned_docs\\version-1.0.3\\generator-pipeline\\run-pipeline.md",permalink:"/Edgar-Unity/docs/1.0.3/generator-pipeline/run-pipeline",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-1.0.3/generator-pipeline/run-pipeline.md",version:"1.0.3",sidebar:"version-1.0.3/docs",previous:{title:"Pipeline tasks",permalink:"/Edgar-Unity/docs/1.0.3/generator-pipeline/pipeline-tasks"},next:{title:"Fixed input",permalink:"/Edgar-Unity/docs/1.0.3/pipeline-tasks/fixed-input"},latestVersionMainDocPermalink:"/Edgar-Unity/docs/introduction"},c=[],l={rightToc:c};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are currently three ways to run a pipeline:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add the ",Object(a.b)("em",{parentName:"li"},"DungeonGeneratorPipeline")," component to a GameObject in a scene, setup the pipeline in the editor and then click the ",Object(a.b)("em",{parentName:"li"},"Generate")," button."),Object(a.b)("li",{parentName:"ul"},"Setup the ",Object(a.b)("em",{parentName:"li"},"DungeonGeneratorPipeline")," component as in the previous way and then call the ",Object(a.b)("inlineCode",{parentName:"li"},"Generate")," method on the component. "),Object(a.b)("li",{parentName:"ul"},"Create an instance of the ",Object(a.b)("inlineCode",{parentName:"li"},"PipelineRunner")," class and then call the ",Object(a.b)("inlineCode",{parentName:"li"},"Run")," method that accepts an array of pipeline items and a payload object.")))}u.isMDXComponent=!0},282:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||a;return t?i.a.createElement(m,p(p({ref:n},l),{},{components:t})):i.a.createElement(m,p({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<a;l++)o[l]=t[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);