(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{122:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return d}));var o=a(2),r=a(6),l=(a(0),a(228)),n=a(231),s=a(234),i={title:"Example 1"},c={id:"examples/example-1",title:"Example 1",description:"In this tutorial, we will use this tileset by @pixelpoem. Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles.",source:"@site/docs\\examples\\example-1.md",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/example-1",editUrl:"https://github.com/OndrejNepozitek/ProceduralLevelGenerator-Unity/tree/docusaurus/docs/examples/example-1.md",version:"next",sidebar:"docs",previous:{title:"Post-processing",permalink:"/ProceduralLevelGenerator-Unity/docs/next/generators/post-process"},next:{title:"Example 2",permalink:"/ProceduralLevelGenerator-Unity/docs/next/examples/example-2"}},m=[{value:"Simple example",id:"simple-example",children:[{value:"Basic rooms romplates",id:"basic-rooms-romplates",children:[]},{value:"Corridors",id:"corridors",children:[]},{value:"Level graph",id:"level-graph",children:[]},{value:"Results",id:"results",children:[]}]},{value:"Real-life example",id:"real-life-example",children:[{value:"Spawn room",id:"spawn-room",children:[]},{value:"Boss room",id:"boss-room",children:[]},{value:"Additional room template",id:"additional-room-template",children:[]},{value:"Doors",id:"doors",children:[]},{value:"Longer corridors",id:"longer-corridors",children:[]},{value:"Enemies",id:"enemies",children:[]},{value:"Level graph",id:"level-graph-1",children:[]},{value:"Results",id:"results-1",children:[]}]}],p={rightToc:m};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this tutorial, we will use ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://pixel-poem.itch.io/dungeon-assetpuck"}),"this tileset")," by ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/pixel_poem"}),"@pixel_poem"),". Be sure to check their work out if you like the tileset. We will not care about room decorations - we will use just basic walls, floor and  door tiles. "),Object(l.b)(n.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(n.b,{src:"img/v2/examples/example1_result1.png",caption:"Simple example",mdxType:"GalleryImage"}),Object(l.b)(n.b,{src:"img/v2/examples/example1_result_reallife1.png",caption:"Real-life example",mdxType:"GalleryImage"})),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(l.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/Example1"),".")),Object(l.b)(s.a,{id:"example-1",mdxType:"ExampleFeatures"}),Object(l.b)("h2",{id:"simple-example"},"Simple example"),Object(l.b)("p",null,"The goal is to create two basic rectangular room remplates of different sizes and a room template for both horizontal and vertical corridors. We will use the smaller room template for our dead-end rooms and the bigger room template for other rooms."),Object(l.b)("h3",{id:"basic-rooms-romplates"},"Basic rooms romplates"),Object(l.b)("p",null,"There should be nothing hard about the design of the two rectangular room templates. We use the ",Object(l.b)("em",{parentName:"p"},"simple doors mode configured")," to door length 1 and corner distance 2. We need corner distance 2 in order to easily connect corridors."),Object(l.b)(n.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(n.b,{src:"img/v2/examples/example1_room1.png",caption:"Bigger room",mdxType:"GalleryImage"}),Object(l.b)(n.b,{src:"img/v2/examples/example1_room2.png",caption:"Smaller room",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"corridors"},"Corridors"),Object(l.b)("p",null,"Corridors are very simple with this tileset. We use the ",Object(l.b)("em",{parentName:"p"},"specific positions")," doors mode to choose the two possible door positions. And because corridors are by default placed after non-corridor rooms, these room templates just work without the need of any scripting."),Object(l.b)(n.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(n.b,{src:"img/original/example1_corridor_horizontal.png",caption:"Horizontal corridor",mdxType:"GalleryImage"}),Object(l.b)(n.b,{src:"img/original/example1_corridor_vertical.png",caption:"Vertical corridor",mdxType:"GalleryImage"})),Object(l.b)("p",null,"We just need to make sure that we do not allow door positions of non-corridor rooms that are closer than 2 tiles from corners. Below you can see what would happen otherwise. It is possible to allow that but we would have to implement some post process logic that would fix such cases."),Object(l.b)(n.c,{src:"img/original/example1_wrong_corridor.png",caption:"Incorrect corridor connection",mdxType:"Image"}),Object(l.b)("h3",{id:"level-graph"},"Level graph"),Object(l.b)("p",null,"With only two room templates for non-corridor rooms, we must think about which level graphs are possible to lay out and which are not. For example, using only the bigger room template, the algorithm is not able to lay out cycles of lengths 3 and 5 because there simply is not any way to form these cycles with such room templates. But cycles of length 4 are possible so that is what we do here."),Object(l.b)(n.c,{src:"img/v2/examples/example1_level_graph1.png",caption:"Level graph",mdxType:"Image"}),Object(l.b)("h3",{id:"results"},"Results"),Object(l.b)(n.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(n.b,{src:"img/v2/examples/example1_result2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(l.b)(n.b,{src:"img/v2/examples/example1_result3.png",caption:"Example result",mdxType:"GalleryImage"})),Object(l.b)("h2",{id:"real-life-example"},"Real-life example"),Object(l.b)("p",null,"To create something that is closer to a real-life example, we will:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"add spawn room template that includes a player"),Object(l.b)("li",{parentName:"ul"},"add boss room that contains a ladder to the next level"),Object(l.b)("li",{parentName:"ul"},"add doors to corridors"),Object(l.b)("li",{parentName:"ul"},"add two more corridor room templates"),Object(l.b)("li",{parentName:"ul"},"add enemies"),Object(l.b)("li",{parentName:"ul"},"add more rooms to the level graph")),Object(l.b)("h3",{id:"spawn-room"},"Spawn room"),Object(l.b)("p",null,"Our spawn room will look different than our basic rooms. We will also want the generator to spawn our player prefab inside the room. This can be simply achieved by placing our prefab inside the room template, next to the GameObject that holds our tilemaps."),Object(l.b)(n.c,{src:"img/v2/examples/example1_spawn.png",caption:"Spawn room with player prefab",mdxType:"Image"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," A basic script for player movement is included in the example scene.")),Object(l.b)("h3",{id:"boss-room"},"Boss room"),Object(l.b)("p",null,"Our boss room will also have a special look. We also created a simple Exit prefab that looks like a ladder a generates a new level when interacted with. And similarly to placing our player prefab, we can also let the generator spawn a ",Object(l.b)("em",{parentName:"p"},"mighty ogre")," that will guard the exit."),Object(l.b)(n.c,{src:"img/v2/examples/example1_boss.png",caption:"Boss room template with exit prefab",mdxType:"Image"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:")," There is no enemy AI so the ogre is really not the mighty.")),Object(l.b)("h3",{id:"additional-room-template"},"Additional room template"),Object(l.b)("p",null,"Even for ordinary rooms, we can have non-rectangular room templates."),Object(l.b)(n.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(n.b,{src:"img/original/example1_room3.png",caption:"Additional room tempalte",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"doors"},"Doors"),Object(l.b)("p",null,"We can easily add doors to our corridors. We created a simple door prefab that has a collider and also a trigger that lets the player open the door."),Object(l.b)(n.c,{src:"img/v2/examples/example1_corridor_doors.png",caption:"Corridor with doors",mdxType:"Image"}),Object(l.b)("h3",{id:"longer-corridors"},"Longer corridors"),Object(l.b)(n.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(n.b,{src:"img/v2/examples/example1_corridor_horizontal2.png",caption:"Longer horizontal corridor",mdxType:"GalleryImage"}),Object(l.b)(n.b,{src:"img/v2/examples/example1_corridor_vertical2.png",caption:"Longer vertical corridor",mdxType:"GalleryImage"})),Object(l.b)("h3",{id:"enemies"},"Enemies"),Object(l.b)("p",null,"We can easily add enemies to our levels. In this tutorial, we will add enemies directly to room templates and then implement a post process task that spawns each enemy with a configurable chance. "),Object(l.b)("p",null,'We will start by creating a GameObject called "Enemies" in all the room templates that will contain enemies a make all the enemies children of this GameObject.'),Object(l.b)(n.c,{src:"img/v2/examples/example1/room_with_monsters.png",caption:"Enemies added to the room template",mdxType:"Image"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note:"),' We must make sure to always name the root GameObject "Enemies" as we will use that name to work with the enemies.')),Object(l.b)("p",null,"If we now generate the dungeon, we will see that it contains all the enemies that we added to individual room templates."),Object(l.b)(n.c,{src:"img/v2/examples/example1/dungeon_with_monsters.png",caption:"Dungeon with monsters",mdxType:"Image"}),Object(l.b)("p",null,"If we are happy with the results, we can stop here. However, to showcase how we can add some post processing logic to the generator, we will try to spawn each monster with some predefined probability so that different monsters spawn every time. The result can be found below."),Object(l.b)("p",null,"We have to create a class that inherits from ",Object(l.b)("inlineCode",{parentName:"p"},"DungeonGeneratorPostProcessBase")," and because the base class is a ScriptableObject, we need to add the ",Object(l.b)("inlineCode",{parentName:"p"},"CreateAssetMenu")," attribute so we are able to create an instance of that ScriptableObject. After a level is generated, the ",Object(l.b)("inlineCode",{parentName:"p"},"Run")," method is called and that is the place where we call our post process logic."),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),'[CreateAssetMenu(menuName = "Dungeon generator/Examples/Example 1/Post process", fileName = "Example1PostProcess")]\npublic class Example1PostProcess : DungeonGeneratorPostProcessBase\n{\n    [Range(0, 1)]\n    public float EnemySpawnChance = 0.5f;\n\n    protected override void Run(GeneratedLevel level, LevelDescription levelDescription)\n    { \n        HandleEnemies(level);\n    }\n\n    private void HandleEnemies(GeneratedLevel level)\n    {\n        // Iterate through all the rooms\n        foreach (var roomInstance in level.GetRoomInstances())\n        {\n            // Get the transform that holds all the enemies\n            var enemiesHolder = roomInstance.RoomTemplateInstance.transform.Find("Enemies");\n\n            // Skip this room if there are no enemies\n            if (enemiesHolder == null)\n            {\n                continue;\n            }\n\n            // Iterate through all enemies (children of the enemiesHolder)\n            foreach (Transform enemyTransform in enemiesHolder)\n            {\n                var enemy = enemyTransform.gameObject;\n\n                // Roll a dice and check whether to spawn this enemy or not\n                // Use the provided Random instance so that the whole generator uses the same seed and the results can be reproduced\n                if (Random.NextDouble() < EnemySpawnChance)\n                {\n                    enemy.SetActive(true);\n                }\n                else\n                {\n                    enemy.SetActive(false);\n                }\n            }\n        }\n    }\n}\n')),Object(l.b)("p",null,"With the implementation ready, we now have to create an instance of that ScriptableObject by right clicking in the project view and ",Object(l.b)("em",{parentName:"p"},"Create -> Dungeon generator -> Examples -> Example 1-> Post process"),". And the last step is to drag and drop this GameObject in the ",Object(l.b)("em",{parentName:"p"},"Custom post process tasks")," section of the dungeon generator."),Object(l.b)(n.c,{src:"img/v2/examples/example1/custom_post_process.png",caption:"Add the ScriptableObject to the Custom post process tasks array",mdxType:"Image"}),Object(l.b)("h3",{id:"level-graph-1"},"Level graph"),Object(l.b)("p",null,"So the goal is to have more rooms than in the simple example and also a spawn room and a boss room. You can see one such level graph below."),Object(l.b)(n.c,{src:"img/v2/examples/example1_level_graph2.png",caption:"Level graph",mdxType:"Image"}),Object(l.b)("p",null,"You can also see that with corridors of different lengths a more room templates to choose from, we can now have cycles of various sizes. The boss and spawn rooms have assigned only a single room template."),Object(l.b)("h3",{id:"results-1"},"Results"),Object(l.b)(n.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(l.b)(n.b,{src:"img/v2/examples/example1_result_reallife2.png",caption:"Example result",mdxType:"GalleryImage"}),Object(l.b)(n.b,{src:"img/v2/examples/example1_result_reallife3.png",caption:"Example result",mdxType:"GalleryImage"}),Object(l.b)(n.b,{src:"img/v2/examples/example1_result_reallife4.png",caption:"Example result with enemies",mdxType:"GalleryImage"}),Object(l.b)(n.b,{src:"img/v2/examples/example1_result_reallife5.png",caption:"Example result with enemies",mdxType:"GalleryImage"})))}d.isMDXComponent=!0},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return p}));var o=a(2),r=a(0),l=a.n(r),n=a(230);const s=e=>l.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),i=e=>l.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},l.a.Children.map(e.children,t=>l.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight}))),c=e=>l.a.createElement(s,{cols:e.cols},l.a.createElement("a",{href:Object(n.a)(e.src),target:"_blank"},l.a.createElement("img",{src:Object(n.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&l.a.createElement(m,null,e.caption)),m=e=>l.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),p=e=>{const{src:t,caption:a,...r}=e;return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",Object(o.a)({src:Object(n.a)(e.src)},r)),void 0!==e.caption&&l.a.createElement(m,null,e.caption))}},234:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return m}));a(236),a(237),a(238),a(239),a(240),a(241),a(242);var o=a(0),r=a.n(o),l=a(232),n=[{id:"outline-override",url:"../basics/room-templates#outline-override",name:"Outline override",usages:[{id:"corridors",description:"Outline override is used to properly handle corridors"}]},{id:"custom-rooms-and-connections",url:"../basics/level-graphs#pro-custom-rooms-and-connections",name:"Custom rooms",usages:[{id:"room-type",description:"The definition of rooms is enhanced with a custom type"}]},{id:"custom-post-processing",url:"../generators/post-process#custom-post-processing",name:"Custom post-processing",usages:[{id:"enemies",description:"A custom post-processing task is used to spawn enemies after a level is generated"},{id:"player-spawn",description:"Move the player to the spawn position of the level"}]}],s=[{id:"example-1",name:"Example 1",url:"../examples/example-1",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"}]},{id:"example-2",name:"Example 2",url:"../examples/example-2",features:[{id:"outline-override",usage:"corridors",anchor:"vertical-corridors"}]},{id:"dead-cells",name:"Dead Cells",url:"../examples/dead-cells",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"},{id:"custom-post-processing",usage:"player-spawn",anchor:"spawn-position"},{id:"custom-rooms-and-connections",usage:"room-type",anchor:"custom-room-and-connection-types"}]}];function i(e){if("undefined"!=typeof window){var t=window.location.href,a=t.split("/");(a[a.length-1].startsWith("#")||t.endsWith("/"))&&(e="../"+e)}return e}var c=function(e){var t=n.find((function(t){return t.id===e.id})).usages.map((function(e){return Object.assign({},e,{examples:[]})}));return s.forEach((function(a){a.features.forEach((function(o){o.id===e.id&&t.find((function(e){return e.id===o.usage})).examples.push({example:a,feature:o})}))})),r.a.createElement("div",{className:"featureUsage"},r.a.createElement("div",{className:"featureUsage__title"},"Where is this feature used?"),r.a.createElement("div",{className:"featureUsage__description"},"Below is the list of examples/tutorials where we use this feature. Feel free to check them out if you're not sure how something works or if you just want to see this feature used in action."),r.a.createElement("table",null,r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.examples.map((function(e,t){return r.a.createElement("span",null,t?", ":"",r.a.createElement(l.a,{to:i(e.example.url+"#"+e.feature.anchor),onClick:function(){return t=e.feature.anchor,void setTimeout((function(){var e=document.getElementById(t);e&&e.scrollIntoView()}),750);var t}},e.example.name))}))),r.a.createElement("td",null,e.description))})))))},m=function(e){var t=s.find((function(t){return t.id===e.id})),a=[];return t.features.forEach((function(e){var t=n.find((function(t){return t.id===e.id})),o=t.usages.find((function(t){return t.id===e.usage}));a.push(Object.assign({},e,{feature:t,featureUsage:o}))})),r.a.createElement("div",{className:"featureUsage"},r.a.createElement("div",{className:"featureUsage__title"},"List of used features"),r.a.createElement("div",{className:"featureUsage__description"},"Below is a list of features that are used in this example."),r.a.createElement("table",null,r.a.createElement("tbody",null,a.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(l.a,{to:e.feature.url},e.feature.name)),r.a.createElement("td",null,e.featureUsage.description))})))))}}}]);