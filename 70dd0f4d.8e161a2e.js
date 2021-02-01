(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var i=a(3),n=a(7),r=(a(0),a(309)),o=a(312),l=(a(314),{title:"(PRO) Minimap"}),s={unversionedId:"guides/minimap",id:"version-2.0.0-alpha.7/guides/minimap",isDocsHomePage:!1,title:"(PRO) Minimap",description:"In this guide, we will learn how to implement a simple minimap functionality.",source:"@site/versioned_docs\\version-2.0.0-alpha.7\\guides\\minimap.md",slug:"/guides/minimap",permalink:"/Edgar-Unity/docs/guides/minimap",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.7/guides/minimap.md",version:"2.0.0-alpha.7",sidebar:"version-2.0.0-alpha.7/docs",previous:{title:"(PRO) Fog of war",permalink:"/Edgar-Unity/docs/guides/fog-of-war"},next:{title:"Migration from v1 to v2",permalink:"/Edgar-Unity/docs/other/migration-v1-v2"}},c=[{value:"Example scene",id:"example-scene",children:[]},{value:"Setup",id:"setup",children:[{value:"Create a Minimap camera",id:"create-a-minimap-camera",children:[]},{value:"Create Render Texture",id:"create-render-texture",children:[]},{value:"Assign render texture to the camera",id:"assign-render-texture-to-the-camera",children:[]},{value:"Prepare UI elements",id:"prepare-ui-elements",children:[]},{value:"<em>(Optional)</em> Simplified view",id:"optional-simplified-view",children:[]},{value:"<em>(Optional)</em> Fog of War",id:"optional-fog-of-war",children:[]}]},{value:"Customization",id:"customization",children:[{value:"Shape or border",id:"shape-or-border",children:[]},{value:"Background colour",id:"background-colour",children:[]},{value:"Zoom level",id:"zoom-level",children:[]},{value:"Simplified view",id:"simplified-view",children:[]},{value:"Add player (or other) icon(s)",id:"add-player-or-other-icons",children:[]}]}],m={toc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this guide, we will learn how to implement a simple minimap functionality."),Object(r.b)(o.c,{src:"img/v2/guides/minimap/result.png",caption:"Minimap in the top-right corner, simplified view of the level, with fog of war",mdxType:"Image"}),Object(r.b)("h2",{id:"example-scene"},"Example scene"),Object(r.b)("p",null,"An example scene can be found at ",Object(r.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/MinimapExample"),". "),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("h3",{id:"create-a-minimap-camera"},"Create a Minimap camera"),Object(r.b)("p",null,"The first step is to create an additional camera that will render the minimap view. For starters, configure the camera so that it renders the same things as the main camera. Later, you will be able to change the background colour or zoom it out. Do not forget to make the camera follow your player so that it is always centered on the player."),Object(r.b)("h3",{id:"create-render-texture"},"Create Render Texture"),Object(r.b)("p",null,"The next step is to create a Render Texture that we will use to show the minimap inside the UI. Go to ",Object(r.b)("em",{parentName:"p"},"Create -> Render Texture")," to create the render texture and set its size to e.g. 512x512. "),Object(r.b)("h3",{id:"assign-render-texture-to-the-camera"},"Assign render texture to the camera"),Object(r.b)("p",null,"The next step is to assign the render texture to the ",Object(r.b)("em",{parentName:"p"},"Target Texture")," field of our minimap camera. By doing so, the camera will now render its view to the render texture instead of on the screen. If you run the game now, you should see that the render texture changes as you move in the level."),Object(r.b)("h3",{id:"prepare-ui-elements"},"Prepare UI elements"),Object(r.b)("p",null,"The next step is to show the render texture in our UI. To make this tutorial simple, we will create a simple square minimap with a solid white border. However, it should be very easy to customize the look of the minimap - make it circular or add a custom border."),Object(r.b)("p",null,"First, create a canvas if you do not have one already. Next, add an ",Object(r.b)("em",{parentName:"p"},"Image")," (",Object(r.b)("em",{parentName:"p"},"UI -> Image"),") element inside the canvas. Set its colour to white and the size to e.g. 204x204. Move the image to the top-right corner so that it looks like the left image below. Next, add a ",Object(r.b)("em",{parentName:"p"},"Raw Image")," (",Object(r.b)("em",{parentName:"p"},"UI -> Raw Image"),") element inside the white image. Set its size to 200x200 and move it to the centre of the white background. And finally, assign our render texture to the ",Object(r.b)("em",{parentName:"p"},"Texture")," field of the raw image. The screen should now look like the right image below."),Object(r.b)(o.a,{cols:2,mdxType:"Gallery"},Object(r.b)(o.b,{src:"img/v2/guides/minimap/ui_white_background.png",caption:"Minimap with background only",mdxType:"GalleryImage"}),Object(r.b)(o.b,{src:"img/v2/guides/minimap/ui_with_texture.png",caption:"Minimap with render texture",mdxType:"GalleryImage"})),Object(r.b)("p",null,"The minimap is now fully functional. The following steps are optional but I recommend to check them out."),Object(r.b)("h3",{id:"optional-simplified-view"},Object(r.b)("em",{parentName:"h3"},"(Optional)")," Simplified view"),Object(r.b)("p",null,"We may sometimes want to use simplified graphics for the minimap instead of the real level graphics. The goal is the following: We will create an additional tilemap layer in which we will create a simplified version of the level with single-coloured tiles. We will also create a special Unity layer, assign this layer to the new tilemap layer and then setup cameras in a way that only the minimap camera displays the new layer."),Object(r.b)("p",null,"The first step is to create a new Unity Layer, called for example ",Object(r.b)("em",{parentName:"p"},'"Minimap"'),"."),Object(r.b)("p",null,"Next, we have to create an instance of the ",Object(r.b)("em",{parentName:"p"},"MinimapPostProcess")," scriptable object. In order to do that, head to ",Object(r.b)("em",{parentName:"p"},"Create -> Edgar -> Features -> Minimap post-process")," which should create a new file for you. Now drag and drop this file to the ",Object(r.b)("em",{parentName:"p"},"Custom post-process tasks")," section of the dungeon generator in order to enable it. After you do that, you should see several editor fields in the task:"),Object(r.b)(o.c,{src:"img/v2/guides/minimap/post_processing.png",caption:"Minimap post-processing task",mdxType:"Image"}),Object(r.b)("p",null,"First, change the ",Object(r.b)("em",{parentName:"p"},"Layer")," field to match the layer that you created for the minimap. Next, check that the ",Object(r.b)("em",{parentName:"p"},"Walls Tilemaps")," and ",Object(r.b)("em",{parentName:"p"},"Floor Tilemaps")," match the names of your wall tilemap layer and floor tilemap layer. After you generate a level, you should see something similar to the image below. You can see that there is an additional tilemap layer on top of the level, and it contains a simplified view of the level."),Object(r.b)(o.c,{src:"img/v2/guides/minimap/simplified_view.png",caption:"Both cameras rendering the simplified view",mdxType:"Image"}),Object(r.b)("p",null,"The last step is to change which camera renders which layers. In your main camera, exclude the minimap layer from the ",Object(r.b)("em",{parentName:"p"},"Culling Mask")," field. In your minimap camera, render only the minimap layer. After doing that, you should see something similar to the image below."),Object(r.b)(o.c,{src:"img/v2/guides/minimap/simplified_view_result.png",caption:"Only the minimap camera rendering the simplified view",mdxType:"Image"}),Object(r.b)("h3",{id:"optional-fog-of-war"},Object(r.b)("em",{parentName:"h3"},"(Optional)")," Fog of War"),Object(r.b)("p",null,"The minimap works really well with the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/Edgar-Unity/docs/guides/fog-of-war"}),"Fog of War")," feature. If you have the Fog of War already working, it is very easy to use it together with the minimap. Because the ",Object(r.b)("em",{parentName:"p"},"Fog Of War")," component is a singleton, we cannot directly add it to the minimap camera. However, there is the ",Object(r.b)("em",{parentName:"p"},"Fog Of War Additional Camera")," components that was created for this exact purpose. If you add this component to the minimap camera, the fog effect will be applied to both cameras."),Object(r.b)(o.a,{cols:2,mdxType:"Gallery"},Object(r.b)(o.b,{src:"img/v2/guides/minimap/fog_original.png",caption:"Fog of War",mdxType:"GalleryImage"}),Object(r.b)(o.b,{src:"img/v2/guides/minimap/fog_simplified.png",caption:"Fog of War with simplified view",mdxType:"GalleryImage"})),Object(r.b)("h2",{id:"customization"},"Customization"),Object(r.b)("h3",{id:"shape-or-border"},"Shape or border"),Object(r.b)("p",null,"See 3rd party tutorials ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://blog.theknightsofunity.com/implementing-minimap-unity/"}),"here")," or ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://learn.unity.com/tutorial/5c5151b9edbc2a0020694df6#5c7f8528edbc2a002053b552"}),"here"),"."),Object(r.b)("h3",{id:"background-colour"},"Background colour"),Object(r.b)("p",null,"Change the background colour of the minimap camera."),Object(r.b)("h3",{id:"zoom-level"},"Zoom level"),Object(r.b)("p",null,"If you want to zoom out the minimap view, just change the ",Object(r.b)("em",{parentName:"p"},"Size")," field of the minimap camera to a larger number."),Object(r.b)("h3",{id:"simplified-view"},"Simplified view"),Object(r.b)("p",null,"The simplified minimap view is achieved with the ",Object(r.b)("em",{parentName:"p"},"MinimapPostProcessing")," task (see the Setup section). The post-processing task has several options that can be changed to customize the look of the minimap."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," If you change something in the task settings, you have to generate the level again to see the changes applied.")),Object(r.b)("h4",{id:"walls-and-floor-colours"},"Walls and Floor colours"),Object(r.b)("p",null,"These two fields control which colours will be used for the walls and floor tiles in the simplified view."),Object(r.b)(o.a,{cols:2,mdxType:"Gallery"},Object(r.b)(o.b,{src:"img/v2/guides/minimap/wall_size_0_5.png",caption:"Default colours",mdxType:"GalleryImage"}),Object(r.b)(o.b,{src:"img/v2/guides/minimap/colors_green.png",caption:"Green colours (the camera background is also changed to match the colours)",mdxType:"GalleryImage"})),Object(r.b)("h4",{id:"walls-and-floor-tilemaps"},"Walls and Floor tilemaps"),Object(r.b)("p",null,"These two fields control which tilemaps layers are used to create simplified views. By default, ",Object(r.b)("em",{parentName:"p"},"Walls Tilemaps")," is set to ",Object(r.b)("em",{parentName:"p"},'"Walls"')," as that is the default name of the tilemap layer that contains wall tiles. Similarly, ",Object(r.b)("em",{parentName:"p"},"Floor Tilemaps")," is set to ",Object(r.b)("em",{parentName:"p"},'"Floor"')," by default. In both fields, you can specify more tilemaps by separating the with a comma, e.g. ",Object(r.b)("em",{parentName:"p"},'"Walls,Colliders"'),"."),Object(r.b)("p",null,"First, the post-processing task creates a new tilemap layer in the level. Then, it find all the tiles in the ",Object(r.b)("em",{parentName:"p"},"Walls Tilemaps")," and copies them to the new tilemap layer. But instead of using the original graphics, it uses a new single-coloured tile. And finally, the same process is performed with ",Object(r.b)("em",{parentName:"p"},"Floor Tilemaps"),"."),Object(r.b)("h4",{id:"wall-size"},"Wall size"),Object(r.b)("p",null,"The ",Object(r.b)("em",{parentName:"p"},"Wall Size")," property makes it possible to make the wall tiles look smaller than the floor tiles. The motivation for doing so can be seen in the images below. In the left image, we can see how the minimap looks with equal sizes of wall and floor tiles (i.e. ",Object(r.b)("em",{parentName:"p"},"Wall Size"),' set to 1). The problem is that the original wall tiles do not occupy the whole tile which results in the outline of the simplified view looking more "chunkier". To compensate for that, we can set the ',Object(r.b)("em",{parentName:"p"},"Wall Size")," to 0.5 which means that the wall tiles will be half the size of the floor tiles. This can be seen in the right image. Experiment with different wall sizes to find out which looks good for you!"),Object(r.b)(o.a,{cols:2,mdxType:"Gallery"},Object(r.b)(o.b,{src:"img/v2/guides/minimap/wall_size_1.png",caption:"Wall Size 1",mdxType:"GalleryImage"}),Object(r.b)(o.b,{src:"img/v2/guides/minimap/wall_size_0_5.png",caption:"Wall Size 0.5",mdxType:"GalleryImage"})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," Behind the scenes, this effect is achieved by making the floor tiles larger, thus overlapping the wall tiles and making them look smaller.")),Object(r.b)("h4",{id:"custom-tiles-instead-of-single-colour-tiles-and-other-customizations"},"Custom tiles instead of single-colour tiles (and other customizations)"),Object(r.b)("p",null,"By default, the simplified view uses single-coloured tiles for wall and floor tiles. If you want to use real tiles for the simplified view, you can change the post-processing task yourself. Head to ",Object(r.b)("em",{parentName:"p"},"Edgar/Runtime/Pro"),", copy the ",Object(r.b)("em",{parentName:"p"},"MinimapPostProcess.cs")," file to your project, change the class name (and the ",Object(r.b)("em",{parentName:"p"},"CreateAssetMenu")," attribute path) and change to code to your liking. The code is relatively simple and commented, so it should not be a problem to slightly change it."),Object(r.b)("h3",{id:"add-player-or-other-icons"},"Add player (or other) icon(s)"),Object(r.b)("p",null,"You can easily add a player icon to the minimap. Add a child game object to your player, add your player icon as a sprite to the game object and change its layer to the minimap layer. By doing so, the sprite will be only visible on the minimap. You can do the same thing with enemies, treasures, etc."))}p.isMDXComponent=!0},309:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),m=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(a),u=i,h=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return a?n.a.createElement(h,l(l({ref:t},c),{},{components:a})):n.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},310:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var i=a(22),n=a(311);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(i.default)();return{withBaseUrl:(a,i)=>function(e,t,a,{forcePrependBaseUrl:i=!1,absolute:r=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(i)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return r?e+o:o}(t,e,a,i)}}function o(e,t={}){const{withBaseUrl:a}=r();return a(e,t)}},311:function(e,t,a){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!i(e)}a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return n}))},312:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return p}));var i=a(3),n=a(0),r=a.n(n),o=a(310);const l=e=>r.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),s=e=>r.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},r.a.Children.map(e.children,(t=>r.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})))),c=e=>r.a.createElement(l,{cols:e.cols},r.a.createElement("a",{href:Object(o.a)(e.src),target:"_blank"},r.a.createElement("img",{src:Object(o.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&r.a.createElement(m,null,e.caption)),m=e=>r.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:a,...n}=e;return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",Object(i.a)({src:Object(o.a)(e.src)},n)),void 0!==e.caption&&r.a.createElement(m,null,e.caption))}},313:function(e,t,a){"use strict";var i=a(0),n=a.n(i),r=a(11),o=a(311),l=a(8);const s=Object(i.createContext)({collectLink:()=>{}});var c=a(310),m=function(e,t){var a={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(i=Object.getOwnPropertySymbols(e);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(a[i[n]]=e[i[n]])}return a};t.a=function(e){var t,{isNavLink:a,to:p,href:d,activeClassName:u,isActive:h,"data-noBrokenLinkCheck":b,autoAddBaseUrl:f=!0}=e,g=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:y}=Object(c.b)(),w=Object(i.useContext)(s),v=p||d,O=Object(o.a)(v),j=null==v?void 0:v.replace("pathname://",""),x=void 0!==j?(k=j,f&&(e=>e.startsWith("/"))(k)?y(k):k):void 0;var k;const E=Object(i.useRef)(!1),N=a?r.e:r.c,T=l.a.canUseIntersectionObserver;let I;Object(i.useEffect)((()=>(!T&&O&&window.docusaurus.prefetch(x),()=>{T&&I&&I.disconnect()})),[x,T,O]);const C=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,z=!x||!O||C;return x&&O&&!C&&!b&&w.collectLink(x),z?n.a.createElement("a",Object.assign({href:x},v&&!O&&{target:"_blank",rel:"noopener noreferrer"},g)):n.a.createElement(N,Object.assign({},g,{onMouseEnter:()=>{E.current||(window.docusaurus.preload(x),E.current=!0)},innerRef:e=>{var t,a;T&&e&&O&&(t=e,a=()=>{window.docusaurus.prefetch(x)},I=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(I.unobserve(t),I.disconnect(),a())}))})),I.observe(t))},to:x||""},a&&{isActive:h,activeClassName:u}))}},314:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return m}));var i=a(0),n=a.n(i),r=a(313);const o=[{id:"outline-override",url:"../basics/room-templates#outline-override",name:"Outline override",usages:[{id:"corridors",description:"Outline override is used to properly handle corridors"}]},{id:"custom-rooms-and-connections",url:"../basics/level-graphs#pro-custom-rooms-and-connections",name:"Custom rooms",usages:[{id:"room-type",description:"The definition of rooms is enhanced with a custom type"}]},{id:"custom-post-processing",url:"../generators/post-process#custom-post-processing",name:"Custom post-processing",usages:[{id:"enemies",description:"A custom post-processing task is used to spawn enemies after a level is generated"},{id:"player-spawn",description:"Move the player to the spawn position of the level"}]}],l=[{id:"example-1",name:"Example 1",url:"../examples/example-1",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"}]},{id:"example-2",name:"Example 2",url:"../examples/example-2",features:[{id:"outline-override",usage:"corridors",anchor:"vertical-corridors"}]},{id:"dead-cells",name:"Dead Cells",url:"../examples/dead-cells",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"},{id:"custom-post-processing",usage:"player-spawn",anchor:"spawn-position"},{id:"custom-rooms-and-connections",usage:"room-type",anchor:"custom-room-and-connection-types"}]}];function s(e){if("undefined"!=typeof window){const t=window.location.href,a=t.split("/");(a[a.length-1].startsWith("#")||t.endsWith("/"))&&(e="../"+e)}return e}const c=e=>{const t=o.find((t=>t.id===e.id)).usages.map((e=>({...e,examples:[]})));return l.forEach((a=>{a.features.forEach((i=>{if(i.id===e.id){t.find((e=>e.id===i.usage)).examples.push({example:a,feature:i})}}))})),n.a.createElement("div",{className:"featureUsage"},n.a.createElement("div",{className:"featureUsage__title"},"Where is this feature used?"),n.a.createElement("div",{className:"featureUsage__description"},"Below is the list of examples/tutorials where we use this feature. Feel free to check them out if you're not sure how something works or if you just want to see this feature used in action."),n.a.createElement("table",null,n.a.createElement("tbody",null,t.map(((e,t)=>n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.examples.map(((e,t)=>n.a.createElement("span",null,t?", ":"",n.a.createElement(r.a,{to:s(e.example.url+"#"+e.feature.anchor),onClick:()=>{return t=e.feature.anchor,void setTimeout((function(){var e=document.getElementById(t);e&&e.scrollIntoView()}),1e3);var t}},e.example.name))))),n.a.createElement("td",null,e.description)))))))},m=e=>{const t=l.find((t=>t.id===e.id)),a=[];return t.features.forEach((e=>{const t=o.find((t=>t.id===e.id)),i=t.usages.find((t=>t.id===e.usage));a.push({...e,feature:t,featureUsage:i})})),n.a.createElement("div",{className:"featureUsage"},n.a.createElement("div",{className:"featureUsage__title"},"List of used features"),n.a.createElement("div",{className:"featureUsage__description"},"Below is a list of features that are used in this example."),n.a.createElement("table",null,n.a.createElement("tbody",null,a.map(((e,t)=>n.a.createElement("tr",{key:t},n.a.createElement("td",null,n.a.createElement(r.a,{to:e.feature.url},e.feature.name)),n.a.createElement("td",null,e.featureUsage.description)))))))}}}]);