(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{149:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return c})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return p})),o.d(t,"default",(function(){return d}));var r=o(2),a=o(6),n=(o(0),o(269)),i=o(273),s=o(275),c={title:"Level graphs"},l={unversionedId:"basics/level-graphs",id:"version-2.0.0-alpha.5/basics/level-graphs",isDocsHomePage:!1,title:"Level graphs",description:"Level graph is an abstraction that lets us control the structure of generated levels.",source:"@site/versioned_docs\\version-2.0.0-alpha.5\\basics\\level-graphs.md",permalink:"/Edgar-Unity/docs/2.0.0-alpha.5/basics/level-graphs",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.5/basics/level-graphs.md",version:"2.0.0-alpha.5",sidebar:"version-2.0.0-alpha.5/docs",previous:{title:"Room templates",permalink:"/Edgar-Unity/docs/2.0.0-alpha.5/basics/room-templates"},next:{title:"Generator setup",permalink:"/Edgar-Unity/docs/2.0.0-alpha.5/basics/generator-setup"}},p=[{value:"Basics",id:"basics",children:[]},{value:"Limitations",id:"limitations",children:[{value:"Planar graphs",id:"planar-graphs",children:[]},{value:"Connected graphs",id:"connected-graphs",children:[]}]},{value:"Creating level graphs",id:"creating-level-graphs",children:[{value:"Graph editor",id:"graph-editor",children:[]}]},{value:"Room templates",id:"room-templates",children:[{value:"Room templates sets",id:"room-templates-sets",children:[]},{value:"Default room templates",id:"default-room-templates",children:[]},{value:"Corridor room templates",id:"corridor-room-templates",children:[]},{value:"Configuring individual rooms",id:"configuring-individual-rooms",children:[]}]},{value:"(PRO) Custom rooms and connections",id:"pro-custom-rooms-and-connections",children:[{value:"Inherit from Room",id:"inherit-from-room",children:[]},{value:"Inherit from RoomBase",id:"inherit-from-roombase",children:[]},{value:"Configure level graph",id:"configure-level-graph",children:[]},{value:"Accessing room information",id:"accessing-room-information",children:[]},{value:"Custom colours in level graph editor",id:"custom-colours-in-level-graph-editor",children:[]}]}],m={rightToc:p};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},m,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Level graph is an abstraction that lets us control the structure of generated levels. "),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," In the context of this plugin, the term ",Object(n.b)("em",{parentName:"p"},"graph")," is used to refer to a mathematical structure consisting of nodes and edges, not a way to visualise functions.")),Object(n.b)("h2",{id:"basics"},"Basics"),Object(n.b)("p",null,"Level graph consists of rooms and room connections. Each room corresponds to a room in a generated level and each connection tells the algorithm that the two rooms must be connected either directly to each other or via a corridor."),Object(n.b)("p",null,"Below you can see a simple level graph with 5 rooms and 4 connections. If we use this level graph as an input for the algorithm, each generated dungeon will have exactly 5 rooms and ",Object(n.b)("em",{parentName:"p"},"room 1")," will be connected to every other room in the dungeon."),Object(n.b)(i.c,{src:"img/v2/level_graphs/basic_level_graph.png",caption:"Simple level graph with 5 rooms and 4 room connections",mdxType:"Image"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," It is not important how we draw the graph. It is only important how many rooms there are and which rooms are connected to each other.")),Object(n.b)("h2",{id:"limitations"},"Limitations"),Object(n.b)("h3",{id:"planar-graphs"},"Planar graphs"),Object(n.b)("p",null,"Level graphs must be ",Object(n.b)("strong",{parentName:"p"},"planar"),". We say that a graph is planar if it can be drawn on the plane in such a way that no two edges intersect. In our case that means that no two connection lines may intersect. If the input graph was not planar, we would not be able to find a dungeon without rooms or corridors overlapping one another."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:"),' A level graph may be planar even if we draw it in a way that some edges intersect. It is because even if one drawing of the graph is "incorrect", that does not mean that there are intersecting edges in all the drawings.')),Object(n.b)("h3",{id:"connected-graphs"},"Connected graphs"),Object(n.b)("p",null,"Level graphs must be ",Object(n.b)("strong",{parentName:"p"},"connected"),". We say that a graph is connected if there is a path between every pair of vertices. Below you can see a level graph that is not connected because there is no path between vertices on the left side and vertices on the right side."),Object(n.b)(i.c,{src:"img/v2/level_graphs/not_connected_level_graph.png",caption:"Example of a level graph that is not connected",mdxType:"Image"}),Object(n.b)("h2",{id:"creating-level-graphs"},"Creating level graphs"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"LevelGraph")," is a ScriptableObject that can be created by navigating to ",Object(n.b)("em",{parentName:"p"},"Create -> Dungeon generator -> Level graph"),". Below you can see how are level graphs displayed in the Inspector window."),Object(n.b)(i.c,{src:"img/v2/level_graphs/level_graph_inspector.png",caption:"Level graph in the Inspector window",mdxType:"Image"}),Object(n.b)("h3",{id:"graph-editor"},"Graph editor"),Object(n.b)("p",null,"The Graph editor window can be opened by clicking the ",Object(n.b)("em",{parentName:"p"},"Open graph editor")," button."),Object(n.b)(i.c,{src:"img/v2/level_graphs/level_graph_window.png",caption:"Graph editor window",mdxType:"Image"}),Object(n.b)("p",null,"Window controls:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Selected graph"),": name of the currently selected level graph"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Select in inspector"),": selects the current graph in the inspector window"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Select level graph"),": selects a different level graph")),Object(n.b)("p",null,"Working with level graphs:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Create room"),": double click on an empty space in the grid"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Configure room"),": double click on an existing room"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Delete room"),": right click on a room and select ",Object(n.b)("em",{parentName:"li"},"Delete room")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Move room"),": left click and then drag around"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Add connection"),": hold ",Object(n.b)("em",{parentName:"li"},"ctrl")," while left-clicking a room and then move the cursor to a different room"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"Delete connection"),": right click on a connection handle and select ",Object(n.b)("em",{parentName:"li"},"Delete connection"))),Object(n.b)(i.c,{src:"img/v2/level_graphs/level_graph_controls.gif",caption:"Level graph controls",mdxType:"Image"}),Object(n.b)("h2",{id:"room-templates"},"Room templates"),Object(n.b)("p",null,"When we have our rooms and connections, it is time to setup room templates. In the ",Object(n.b)("em",{parentName:"p"},"Level graph")," inspector window above, we can see 2 sections - ",Object(n.b)("em",{parentName:"p"},"Default room templates")," and ",Object(n.b)("em",{parentName:"p"},"Corridor room templates"),". These section are used to specify which room templates are available for which room. Below you can see the setup from ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/Edgar-Unity/docs/2.0.0-alpha.5/examples/example-1"}),"Example 1"),"."),Object(n.b)(i.c,{src:"img/v2/level_graphs/level_graph_inspector2.png",caption:"Example of assigned room templates",mdxType:"Image"}),Object(n.b)("h3",{id:"room-templates-sets"},"Room templates sets"),Object(n.b)("p",null,"It may sometimes be useful to group our room templates into groups like ",Object(n.b)("em",{parentName:"p"},"Shop rooms"),", ",Object(n.b)("em",{parentName:"p"},"Boss rooms"),", etc. We can create a so-called ",Object(n.b)("strong",{parentName:"p"},"Room templates set")," by navigating to ",Object(n.b)("em",{parentName:"p"},"Create -> Dungeon generator -> Room templates set"),". It is a simple ScriptableObject that holds an array of room templates and we can use it instead of assigning individual room templates one by one. The main advantage is that if we later decide to add a new shop room template, we do not have to change all the shop rooms to include this new template - we simply add it to the room templates set."),Object(n.b)(i.c,{src:"img/v2/level_graphs/room_templates_set.png",caption:"Example of a room templates set that holds all our basic rooms. If we add another room template later, the change gets propagated to all the rooms in the level graph that are using this room templates set.",mdxType:"Image"}),Object(n.b)("h3",{id:"default-room-templates"},"Default room templates"),Object(n.b)("h4",{id:"room-templates-1"},"Room templates"),Object(n.b)("p",null,"Array of room templates that will be used for rooms that have no room shapes assigned. We can use this for our basic rooms and then configure our special rooms (spawn room, boss room, etc.) to use a different set of room templates."),Object(n.b)("h4",{id:"room-templates-sets-1"},"Room templates sets"),Object(n.b)("p",null,"Array of room templates sets that will be used for rooms that have no room shapes assigned. Room templates from these sets are used together with individual room templates."),Object(n.b)("h3",{id:"corridor-room-templates"},"Corridor room templates"),Object(n.b)("h4",{id:"room-templates-2"},"Room templates"),Object(n.b)("p",null,"Array of room templates that will be used for corridor rooms. These room templates will be used if we setup the algorithm to use corridors instead of connecting rooms directly by doors. Can be left empty if we do not want to use corridors."),Object(n.b)("h4",{id:"room-templates-sets-2"},"Room templates sets"),Object(n.b)("p",null,"Array of room templates sets that will be used for corridor rooms. Room templates from these sets are used together with individual room templates."),Object(n.b)("h3",{id:"configuring-individual-rooms"},"Configuring individual rooms"),Object(n.b)("p",null,"If we double click on a room in the Graph editor, it gets selected and we can configure it in the inspector. We can set the name of the room which will be displayed in the Graph editor. We can also assign room templates and room templates sets that will be used only for this room. By assigning any room template or room template set, we override the default room templates that are set in the level graph itself."),Object(n.b)(i.c,{src:"img/v2/level_graphs/room_inspector1.png",caption:"Configuration of a spawn room",mdxType:"Image"}),Object(n.b)("h2",{id:"pro-custom-rooms-and-connections"},"(PRO) Custom rooms and connections"),Object(n.b)("p",null,"It may be often useful to add additional information to individual rooms (or connections). For example, we may want to add a type to each of the rooms and then do something based on the type. To achieve that, we can provide our own implementation of the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.RoomBase.html"}),"RoomBase")," and ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.ConnectionBase.html"}),"ConnectionBase")," classes. There are at least two possible approaches."),Object(n.b)(s.b,{id:"custom-rooms-and-connections",mdxType:"FeatureUsage"}),Object(n.b)("h3",{id:"inherit-from-room"},"Inherit from ",Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.Room.html"}),"Room")),Object(n.b)("p",null,"The first approach is that we create a class that inherits from the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.Room.html"}),"Room")," class which is the default implementation that is used in level graphs. This approach is good if we want to just add something and do not want to change how the room works. We can also override the ",Object(n.b)("inlineCode",{parentName:"p"},"GetDisplayName()")," method to change how is the room displayed in the level graph editor."),Object(n.b)("p",null,"This is the recommended approach for the majority of users."),Object(n.b)("h3",{id:"inherit-from-roombase"},"Inherit from ",Object(n.b)("a",Object(r.a)({parentName:"h3"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.RoomBase.html"}),"RoomBase")),Object(n.b)("p",null,"The second approach is that we inherit directly from the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.RoomBase.html"}),"RoomBase")," class. If we do that, we have to implement all the abstract methods (currently ",Object(n.b)("inlineCode",{parentName:"p"},"GetDisplayName()")," and ",Object(n.b)("inlineCode",{parentName:"p"},"GetRoomTemplates()"),"). An advantage of this approach is that in some situations, we may not need any logic related to room templates so we just return null from the method and we will not see anything related to room templates in the inspector of the room. This may be useful in a situation where we resolve room templates manually based on the type of the room."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," The same logic applies to inheriting from ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.Connection.html"}),"Connection")," or ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.ConnectionBase.html"}),"ConnectionBase"),".")),Object(n.b)("h3",{id:"configure-level-graph"},"Configure level graph"),Object(n.b)("p",null,"When we have our custom room or connection type ready, we have to configure the level graph to use them. If we open the level graph in the inspector, we should be able to choose the custom types from the dropdown."),Object(n.b)(i.c,{src:"img/v2/level_graphs/custom_rooms.png",caption:"Custom room and connection types (PRO version)",mdxType:"Image"}),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Note:")," It is not possible to easily convert a level graph from using one room/connection type to another. Therefore, it is important to decide if you want to use a custom room/connection before you create your level graphs. Otherwise, you will have to recreate them later with the correct types.")),Object(n.b)("h3",{id:"accessing-room-information"},"Accessing room information"),Object(n.b)("p",null,"If we add some additional information to a room or connection, we probably expect to somehow use this information later. The first step is to get access to the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.RoomInstance.html#properties"}),"RoomInstance")," class which is described ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/Edgar-Unity/docs/2.0.0-alpha.5/basics/generated-level-info"}),"here"),". When we have an instance of this class, we can use the ",Object(n.b)("inlineCode",{parentName:"p"},"RoomInstance.Room")," property. This property is of the ",Object(n.b)("inlineCode",{parentName:"p"},"RoomBase")," type so we have to cast it to our custom room type."),Object(n.b)("h3",{id:"custom-colours-in-level-graph-editor"},"Custom colours in level graph editor"),Object(n.b)("p",null,"It is also possible to change how custom rooms and connections look in the level graph editor. We just have to override the ",Object(n.b)("inlineCode",{parentName:"p"},"GetEditorStyle()")," method and return an instance of ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.RoomEditorStyle.html#properties"}),"RoomEditorStyle")," or ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://ondrejnepozitek.github.io/ProceduralLevelGenerator-UnityApiDocs/master/api/Edgar.Unity.ConnectionEditorStyle.html#properties"}),"ConnectionEditorStyle"),"."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{}),"public class GungeonRoom : RoomBase\n{\n    public GungeonRoomType Type;\n\n    /* ... */\n\n    public override RoomEditorStyle GetEditorStyle(bool isFocused)\n    {\n        var style = base.GetEditorStyle(isFocused);\n\n        var backgroundColor = style.BackgroundColor;\n\n        // Use different colors for different types of rooms\n        switch (Type)\n        {\n            case GungeonRoomType.Entrance:\n                backgroundColor = new Color(38/256f, 115/256f, 38/256f);\n                break;\n\n            /* ... */\n        }\n\n        style.BackgroundColor = backgroundColor;\n\n        // Darken the color when focused\n        if (isFocused)\n        {\n            style.BackgroundColor = Color.Lerp(style.BackgroundColor, Color.black, 0.7f);\n        }\n\n        return style;\n    }\n}\n")),Object(n.b)(i.c,{src:"img/v2/examples/gungeon/level_graph_1.png",caption:"Different colours for special types of rooms",mdxType:"Image"}))}d.isMDXComponent=!0},269:function(e,t,o){"use strict";o.d(t,"a",(function(){return m})),o.d(t,"b",(function(){return u}));var r=o(0),a=o.n(r);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(o),h=r,u=m["".concat(i,".").concat(h)]||m[h]||d[h]||n;return o?a.a.createElement(u,s(s({ref:t},l),{},{components:o})):a.a.createElement(u,s({ref:t},l))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<n;l++)i[l]=o[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},270:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return i}));var r=o(272),a=o(271);function n(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(o,r)=>function(e,t,o,{forcePrependBaseUrl:r=!1,absolute:n=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if(Object(a.b)(o))return o;if(r)return t+o;const i=!o.startsWith(t)?t+o.replace(/^\//,""):o;return n?e+i:i}(t,e,o,r)}}function i(e,t={}){const{withBaseUrl:o}=n();return o(e,t)}},271:function(e,t,o){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return a}))},272:function(e,t,o){"use strict";var r=o(0),a=o(20);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},273:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return m}));var r=o(2),a=o(0),n=o.n(a),i=o(270);const s=e=>n.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),c=e=>n.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},n.a.Children.map(e.children,t=>n.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),l=e=>n.a.createElement(s,{cols:e.cols},n.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},n.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&n.a.createElement(p,null,e.caption)),p=e=>n.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),m=e=>{const{src:t,caption:o,...a}=e;return n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("img",Object(r.a)({src:Object(i.a)(e.src)},a)),void 0!==e.caption&&n.a.createElement(p,null,e.caption))}},274:function(e,t,o){"use strict";var r=o(0),a=o.n(r),n=o(13),i=o(271),s=o(7);const c=Object(r.createContext)({collectLink:()=>{}});var l=o(270),p=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]])}return o};t.a=function(e){var t,{isNavLink:o,to:m,href:d,activeClassName:h,"data-noBrokenLinkCheck":u}=e,b=p(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]);const{withBaseUrl:g}=Object(l.b)(),f=Object(r.useContext)(c),v=m||d,O=void 0!==v?(e=>e.startsWith("/"))(j=v)?g(j):v:void 0;var j;const y=Object(i.a)(O),w=Object(r.useRef)(!1),N=o?n.e:n.c,E=s.a.canUseIntersectionObserver;let k;Object(r.useEffect)(()=>(!E&&y&&window.docusaurus.prefetch(O),()=>{E&&k&&k.disconnect()}),[O,E,y]);const x=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,C=!O||!y||x;return O&&y&&!x&&!u&&f.collectLink(O),C?a.a.createElement("a",Object.assign({href:O},!y&&{target:"_blank",rel:"noopener noreferrer"},b)):a.a.createElement(N,Object.assign({},b,{onMouseEnter:()=>{w.current||(window.docusaurus.preload(O),w.current=!0)},innerRef:e=>{var t,o;E&&e&&y&&(t=e,o=()=>{window.docusaurus.prefetch(O)},k=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),o())})}),k.observe(t))},to:O},o&&{activeClassName:h}))}},275:function(e,t,o){"use strict";o.d(t,"b",(function(){return l})),o.d(t,"a",(function(){return p}));var r=o(0),a=o.n(r),n=o(274);const i=[{id:"outline-override",url:"../basics/room-templates#outline-override",name:"Outline override",usages:[{id:"corridors",description:"Outline override is used to properly handle corridors"}]},{id:"custom-rooms-and-connections",url:"../basics/level-graphs#pro-custom-rooms-and-connections",name:"Custom rooms",usages:[{id:"room-type",description:"The definition of rooms is enhanced with a custom type"}]},{id:"custom-post-processing",url:"../generators/post-process#custom-post-processing",name:"Custom post-processing",usages:[{id:"enemies",description:"A custom post-processing task is used to spawn enemies after a level is generated"},{id:"player-spawn",description:"Move the player to the spawn position of the level"}]}],s=[{id:"example-1",name:"Example 1",url:"../examples/example-1",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"}]},{id:"example-2",name:"Example 2",url:"../examples/example-2",features:[{id:"outline-override",usage:"corridors",anchor:"vertical-corridors"}]},{id:"dead-cells",name:"Dead Cells",url:"../examples/dead-cells",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"},{id:"custom-post-processing",usage:"player-spawn",anchor:"spawn-position"},{id:"custom-rooms-and-connections",usage:"room-type",anchor:"custom-room-and-connection-types"}]}];function c(e){if("undefined"!=typeof window){const t=window.location.href,o=t.split("/");(o[o.length-1].startsWith("#")||t.endsWith("/"))&&(e="../"+e)}return e}const l=e=>{const t=i.find(t=>t.id===e.id).usages.map(e=>({...e,examples:[]}));return s.forEach(o=>{o.features.forEach(r=>{if(r.id===e.id){t.find(e=>e.id===r.usage).examples.push({example:o,feature:r})}})}),a.a.createElement("div",{className:"featureUsage"},a.a.createElement("div",{className:"featureUsage__title"},"Where is this feature used?"),a.a.createElement("div",{className:"featureUsage__description"},"Below is the list of examples/tutorials where we use this feature. Feel free to check them out if you're not sure how something works or if you just want to see this feature used in action."),a.a.createElement("table",null,a.a.createElement("tbody",null,t.map((e,t)=>a.a.createElement("tr",{key:t},a.a.createElement("td",null,e.examples.map((e,t)=>a.a.createElement("span",null,t?", ":"",a.a.createElement(n.a,{to:c(e.example.url+"#"+e.feature.anchor),onClick:()=>{return t=e.feature.anchor,void setTimeout((function(){var e=document.getElementById(t);e&&e.scrollIntoView()}),1e3);var t}},e.example.name)))),a.a.createElement("td",null,e.description))))))},p=e=>{const t=s.find(t=>t.id===e.id),o=[];return t.features.forEach(e=>{const t=i.find(t=>t.id===e.id),r=t.usages.find(t=>t.id===e.usage);o.push({...e,feature:t,featureUsage:r})}),a.a.createElement("div",{className:"featureUsage"},a.a.createElement("div",{className:"featureUsage__title"},"List of used features"),a.a.createElement("div",{className:"featureUsage__description"},"Below is a list of features that are used in this example."),a.a.createElement("table",null,a.a.createElement("tbody",null,o.map((e,t)=>a.a.createElement("tr",{key:t},a.a.createElement("td",null,a.a.createElement(n.a,{to:e.feature.url},e.feature.name)),a.a.createElement("td",null,e.featureUsage.description))))))}}}]);