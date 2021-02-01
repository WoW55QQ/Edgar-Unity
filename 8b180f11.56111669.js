(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{191:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return m})),o.d(t,"metadata",(function(){return d})),o.d(t,"toc",(function(){return u})),o.d(t,"default",(function(){return h}));var n=o(3),r=o(7),a=(o(0),o(309)),i=o(312),s=(o(314),o(322)),l=o(323),c=o(321),m=(o(310),{title:"(PRO) Enter the Gungeon"}),d={unversionedId:"examples/enter-the-gungeon",id:"version-2.0.0-alpha.7/examples/enter-the-gungeon",isDocsHomePage:!1,title:"(PRO) Enter the Gungeon",description:"In this tutorial, we will look into how to generate levels similar to what we can see in Enter the Gungeon. We will use this tileset by @pixelpoem - be sure to check out their work if you like the tileset.",source:"@site/versioned_docs\\version-2.0.0-alpha.7\\examples\\enter-the-gungeon.md",slug:"/examples/enter-the-gungeon",permalink:"/Edgar-Unity/docs/examples/enter-the-gungeon",editUrl:"https://github.com/OndrejNepozitek/Edgar-Unity/tree/docusaurus/versioned_docs/version-2.0.0-alpha.7/examples/enter-the-gungeon.md",version:"2.0.0-alpha.7",sidebar:"version-2.0.0-alpha.7/docs",previous:{title:"(PRO) Isometric 1",permalink:"/Edgar-Unity/docs/examples/isometric-1"},next:{title:"(PRO) Dead Cells",permalink:"/Edgar-Unity/docs/examples/dead-cells"}},u=[{value:"Room templates",id:"room-templates",children:[]},{value:"Level graphs",id:"level-graphs",children:[{value:"Custom rooms and connections",id:"custom-rooms-and-connections",children:[]},{value:"Input setup task",id:"input-setup-task",children:[]},{value:"Pick random level graph",id:"pick-random-level-graph",children:[]},{value:"Random secret rooms",id:"random-secret-rooms",children:[]}]},{value:"Room manager",id:"room-manager",children:[{value:"Current room detection",id:"current-room-detection",children:[]},{value:"Enemies",id:"enemies",children:[]},{value:"Doors",id:"doors",children:[]},{value:"Locked doors",id:"locked-doors",children:[]}]},{value:"Fog of War",id:"fog-of-war",children:[]},{value:"Results",id:"results",children:[]}],p={toc:u};function h(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this tutorial, we will look into how to generate levels similar to what we can see in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://store.steampowered.com/app/311690/Enter_the_Gungeon/"}),"Enter the Gungeon"),". We will use ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://pixel-poem.itch.io/dungeon-assetpuck"}),"this tileset")," by ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/pixel_poem"}),"@pixel_poem")," - be sure to check out their work if you like the tileset."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Disclaimer:")," We are in no way affiliated with the authors of the Enter the Gungeon game and this plugin is not used in the game. This is only a case study about how to use this plugin to create something similar to what is done in that game.")),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/v2/examples/gungeon/result1.png",caption:"Example result",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/v2/examples/gungeon/result2.png",caption:"Example result",mdxType:"GalleryImage"})),Object(a.b)(c.a,{src:"img/v2/examples/gungeon/example_video.mp4",style:{marginBottom:15,marginTop:-15},mdxType:"Video"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," All files from this example can be found at ",Object(a.b)("em",{parentName:"p"},"ProceduralLevelGenerator/Examples/EnterTheGungeon"),".")),Object(a.b)("h2",{id:"room-templates"},"Room templates"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," If you want to add some more room templates, be sure to use the ",Object(a.b)("em",{parentName:"p"},"Create")," menu (",Object(a.b)("em",{parentName:"p"},"Examples/Enter the Gungeon/Room template"),") or duplicate one of the existing room templates.")),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/v2/examples/gungeon/room_templates/entrance.png",caption:"Entrance",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/v2/examples/gungeon/room_templates/hub1.png",caption:"Hub",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/v2/examples/gungeon/room_templates/normal5.png",caption:"Normal",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/v2/examples/gungeon/room_templates/reward.png",caption:"Reward",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/v2/examples/gungeon/room_templates/shop.png",caption:"Shop",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/v2/examples/gungeon/room_templates/secret.png",caption:"Secret",mdxType:"GalleryImage"})),Object(a.b)("h2",{id:"level-graphs"},"Level graphs"),Object(a.b)("p",null,"In Enter the Gungeon, they use multiple level graphs for each stage of the game."),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/v2/examples/gungeon/level_graph_2.png",caption:"Stage 1 level graph",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/v2/examples/gungeon/level_graph_1.png",caption:"Stage 2 level graph",mdxType:"GalleryImage"})),Object(a.b)("h3",{id:"custom-rooms-and-connections"},"Custom rooms and connections"),Object(a.b)("p",null,"In the level graph above, we used custom room and connection types. We use this feature to add additional data to rooms and connection and also to change how they are displayed in the editor."),Object(a.b)("h4",{id:"rooms"},"Rooms"),Object(a.b)("p",null,"Each room in Enter the Gungeon has its type - there are rooms with enemies, treasure rooms, shops, etc. We use a custom room implementation to add the ",Object(a.b)("inlineCode",{parentName:"p"},"GungGungeonRoomType Type")," field to each room. Moreover, we use different colours to distinguish different types of rooms in the level graph editor."),Object(a.b)("h4",{id:"connections"},"Connections"),Object(a.b)("p",null,"Some corridors in Enter the Gungeon are locked and can be unlocked only from the other side of the door. This is usually used to force the player to go trough a loop that ends with a treasure or shop room and the door then serves as a shortcut to get back to the main path. We use a custom connection implementation to add the ",Object(a.b)("inlineCode",{parentName:"p"},"bool IsLocked")," field. If the door is locked, we use red colour to draw the line between the two rooms."),Object(a.b)(s.a,{defaultValue:"room",values:[{label:"GungeonRoom.cs",value:"room"},{label:"GungeonConnection.cs",value:"connection"}],mdxType:"Tabs"},Object(a.b)(l.a,{value:"room",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"public class GungeonRoom : RoomBase\n    {\n        public GungeonRoomType Type;\n\n        public override List<GameObject> GetRoomTemplates()\n        {\n            // We do not need any room templates here because they are resolved based on the type of the room.\n            return null;\n        }\n\n        public override string GetDisplayName()\n        {\n            // Use the type of the room as its display name.\n            return Type.ToString();\n        }\n\n        public override RoomEditorStyle GetEditorStyle(bool isFocused)\n        {\n            var style = base.GetEditorStyle(isFocused);\n\n            var backgroundColor = style.BackgroundColor;\n\n            // Use different colors for different types of rooms\n            switch (Type)\n            {\n                case GungeonRoomType.Entrance:\n                    backgroundColor = new Color(38/256f, 115/256f, 38/256f);\n                    break;\n\n                /* ... */\n            }\n\n            style.BackgroundColor = backgroundColor;\n\n            // Darken the color when focused\n            if (isFocused)\n            {\n                style.BackgroundColor = Color.Lerp(style.BackgroundColor, Color.black, 0.7f);\n            }\n\n            return style;\n        }\n    }\n"))),Object(a.b)(l.a,{value:"connection",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"    public class GungeonConnection : Connection\n    {\n        // Whether the corresponding corridor should be locked\n        public bool IsLocked;\n\n        public override ConnectionEditorStyle GetEditorStyle(bool isFocused)\n        {\n            var style = base.GetEditorStyle(isFocused);\n\n            // Use red color when locked\n            if (IsLocked)\n            {\n                style.LineColor = Color.red;\n            }\n\n            return style;\n        }\n    }\n")))),Object(a.b)("h3",{id:"input-setup-task"},"Input setup task"),Object(a.b)("p",null,"We will use a ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/Edgar-Unity/docs/generators/custom-input"}),"custom input setup task")," because it gives us more control when working with the input. We will use it to choose a random level graph and add a random secret room. The base of the task is the same as in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/Edgar-Unity/docs/examples/dead-cells#input-setup"}),"Dead Cells")," example."),Object(a.b)("h3",{id:"pick-random-level-graph"},"Pick random level graph"),Object(a.b)("p",null,"Because we have multiple level graphs for each stage of the game, we want to choose the level graph randomly from the available options. The implementation is straightforward:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"public class GungeonInputSetupTask : DungeonGeneratorInputBase\n{\n    [Range(1, 2)]\n    public int Stage = 1;\n\n    public LevelGraph[] Stage1LevelGraphs;\n\n    public LevelGraph[] Stage2LevelGraphs;\n\n    protected override LevelDescription GetLevelDescription()\n    {\n        // Pick random level graph\n        var levelGraphs = Stage == 1 ? Stage1LevelGraphs : Stage2LevelGraphs;\n        var levelGraph = levelGraphs.GetRandom(Payload.Random);\n        GungeonGameManager.Instance.CurrentLevelGraph = levelGraph;\n\n        /* ... */\n    }\n}\n")),Object(a.b)("p",null,"Then we just assign level graphs to the two arrays. The last step is to control the current stage of the game. We can do that in the game manager before we generate a level:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"private IEnumerator GeneratorCoroutine(DungeonGenerator generator)\n{\n    /* ... */\n\n    // Configure the generator with the current stage number\n    var inputTask = (GungeonInputSetupTask) generator.CustomInputTask;\n    inputTask.Stage = Stage;\n\n    /* ... */\n}\n")),Object(a.b)("h3",{id:"random-secret-rooms"},"Random secret rooms"),Object(a.b)("p",null,"Even though all the levels are primarily guided by hand-made level graphs, there is a little bit of randomness included. When we setup the input for the algorithm, we roll a dice to determine if we want to add a secret room to the level. We can add a ",Object(a.b)("inlineCode",{parentName:"p"},"float SecretRoomChance")," field to the input setup and configure this value directly in the generator inspector. In Enter the Gungeon, they also choose whether to connect the room to a dead-end room or to any rooms - this is controlled with ",Object(a.b)("inlineCode",{parentName:"p"},"SecretRoomDeadEndChance"),"."),Object(a.b)("p",null,"To add the secret room to the level, we first get all the rooms from the level description and randomly choose one of them to attach the secret room to. Then we have to do 3 things. First, we create an instance of the secret room - this corresponds to a room node in the level graph. Second, we create an instance of the connection between the two rooms - this corresponds to an edge in the level graph. And third, because we use corridors, we also need to create an instance of the corridor room that is between the two rooms."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," Our secret rooms are not really secret as we do not hide them in any way. I may revisit this in the future to make them really secret.")),Object(a.b)("details",null,Object(a.b)("summary",null,"Show code block"),Object(a.b)("div",null,Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"    public class GungeonInputSetupTask : DungeonGeneratorInputBase\n    {\n        public LevelGraph LevelGraph;\n\n        public GungeonRoomTemplatesConfig RoomTemplates;\n\n        // The probability that a secret room is added to the level\n        [Range(0f, 1f)]\n        public float SecretRoomChance = 0.9f;\n\n        // The probability that a secret room is attached to a dead-end room\n        [Range(0f, 1f)]\n        public float SecretRoomDeadEndChance = 0.5f;\n\n        protected override LevelDescription GetLevelDescription()\n        {\n            /* ... */\n\n            // Add secret rooms\n            AddSecretRoom(levelDescription);\n\n            /* ... */\n        }\n\n        private void AddSecretRoom(LevelDescription levelDescription)\n        {\n            // Return early if no secret room should be added to the level\n            if (Payload.Random.NextDouble() > SecretRoomChance) return;\n\n            // Get the graphs of rooms\n            var graph = levelDescription.GetGraph();\n\n            // Decide whether to attach the secret room to a dead end room or not\n            var attachToDeadEnd = Payload.Random.NextDouble() < SecretRoomDeadEndChance;\n\n            // Find all the possible rooms to attach to and choose a random one\n            var possibleRoomsToAttachTo = graph.Vertices.Cast<GungeonRoom>().Where(x =>\n                (!attachToDeadEnd || graph.GetNeighbours(x).Count() == 1) && x.Type != GungeonRoomType.Entrance\n            ).ToList();\n            var roomToAttachTo = possibleRoomsToAttachTo[Payload.Random.Next(possibleRoomsToAttachTo.Count)];\n\n            // Create secret room\n            var secretRoom = ScriptableObject.CreateInstance<GungeonRoom>();\n            secretRoom.Type = GungeonRoomType.Secret;\n            levelDescription.AddRoom(secretRoom, RoomTemplates.GetRoomTemplates(secretRoom).ToList());\n\n            // Prepare the connection between secretRoom and roomToAttachTo\n            var connection = ScriptableObject.CreateInstance<GungeonConnection>();\n            connection.From = roomToAttachTo;\n            connection.To = secretRoom;\n\n            // Connect the two rooms with a corridor\n            var corridorRoom = ScriptableObject.CreateInstance<GungeonRoom>();\n            corridorRoom.Type = GungeonRoomType.Corridor;\n            levelDescription.AddCorridorConnection(connection, RoomTemplates.CorridorRoomTemplates.ToList(), corridorRoom);\n        }\n    }\n")))),Object(a.b)("h2",{id:"room-manager"},"Room manager"),Object(a.b)("p",null,"In Enter the Gungeon, when a player visits a (combat-oriented) room for the first time, two things happen. First, all the doors to neighbouring rooms get closed and locked. And second, enemies are spawned. Only after all the enemies are defeated, the doors unlock."),Object(a.b)(c.a,{src:"img/v2/examples/gungeon/enter_room.mp4",mdxType:"Video"}),Object(a.b)("br",null),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," The enemies in this example are very dumb - they just stand there and cannot be killed as there is no combat system implemented. Therefore, the doors open after some time even though enemies are still alive.")),Object(a.b)("h3",{id:"current-room-detection"},"Current room detection"),Object(a.b)("p",null,"The base of this setup is detecting when a player enters a room. We will use the same setup as we described in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/Edgar-Unity/docs/guides/current-room-detection"}),"Current room detection")," tutorial. That means that we have a floor collider that is set to trigger and it informs ",Object(a.b)("inlineCode",{parentName:"p"},"RoomManager")," when the player enters a room."),Object(a.b)("h3",{id:"enemies"},"Enemies"),Object(a.b)("p",null,"We will use a very simple approach to a randomized spawn of enemies. We will use the floor collider that we set up in the previous step to get a random position inside the room."),Object(a.b)("p",null,"The algorithm works as follows:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Get a random position inside floor collider bounds"),Object(a.b)("li",{parentName:"ol"},"Check if the position is actually inside the collider (there may be holes)"),Object(a.b)("li",{parentName:"ol"},"Check that there are no other colliders near the position"),Object(a.b)("li",{parentName:"ol"},"Pick a random enemy and instantiate it at the position")),Object(a.b)("details",null,Object(a.b)("summary",null,"Show code block"),Object(a.b)("div",null,Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"\n    public class GungeonRoomManager : MonoBehaviour\n    {\n        /// <summary>\n        /// Enemies that can spawn inside the room.\n        /// </summary>\n        public GameObject[] Enemies;\n\n        /// <summary>\n        /// Collider of the floor tilemap layer.\n        /// </summary>\n        public Collider2D FloorCollider;\n\n        /* ... */\n\n        private void SpawnEnemies()\n        {\n            EnemiesSpawned = true;\n\n            var enemies = new List<GameObject>();\n            var totalEnemiesCount = GungeonGameManager.Instance.Random.Next(4, 8);\n\n            while(enemies.Count < totalEnemiesCount)\n            {\n                // Find random position inside floor collider bounds\n                var position = RandomPointInBounds(FloorCollider.bounds, 1f);\n\n                // Check if the point is actually inside the collider as there may be holes in the floor, etc.\n                if (!IsPointWithinCollider(FloorCollider, position))\n                {\n                    continue;\n                }\n\n                // We want to make sure that there is no other collider in the radius of 1\n                if (Physics2D.OverlapCircleAll(position, 0.5f).Any(x => !x.isTrigger))\n                {\n                    continue;\n                }\n\n                // Pick random enemy prefab\n                var enemyPrefab = Enemies[Random.Range(0, Enemies.Length)];\n\n                // Create an instance of the enemy and set position and parent\n                var enemy = Instantiate(enemyPrefab);\n                enemy.transform.position = position;\n                enemy.transform.parent = roomInstance.RoomTemplateInstance.transform;\n                enemies.Add(enemy);\n            }\n        }\n    }\n")))),Object(a.b)("br",null),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," As the process of choosing enemy spawn points is random, we hope that the success rate is quite high and we do not have to spend too much time on it. However, if we wanted to spawn too many enemies or there were too many holes in the collider, we could have problems with performance. In that case, it would be better to use a different approach.")),Object(a.b)("h3",{id:"doors"},"Doors"),Object(a.b)("p",null,"Our goal is to close neighbouring corridors with doors when the player enters the room and then open the doors when all the enemies are dead. The only slightly complex part is how to obtain the game objects that represent the doors. To make our lives easier, we added the doors directly to each corridor room template. That means that after the level is generated we just have to retrieve the doors from corridor room templates."),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/v2/examples/gungeon/room_templates/ver5.png",caption:"Vertical corridor",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/v2/examples/gungeon/room_templates/hor5.png",caption:"Horizontal corridor",mdxType:"GalleryImage"})),Object(a.b)("p",null,"We can do it like this:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Prepare a custom post-processing task"),Object(a.b)("li",{parentName:"ol"},"Go trough all non-corridor rooms"),Object(a.b)("li",{parentName:"ol"},"Find all the corridors that are connected to the room"),Object(a.b)("li",{parentName:"ol"},"Get the door game object from each neighbouring corridor"),Object(a.b)("li",{parentName:"ol"},"Store all the doors in the room manager")),Object(a.b)("p",null,"When we have the game objects, we can simply activate them when the player enters the room and then deactivate them when enemies are dead. (Or just open the doors after 3 seconds because we do not have any combat implemented.)"),Object(a.b)("details",null,Object(a.b)("summary",null,"Show code block"),Object(a.b)("div",null,Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'\n    public class GungeonPostProcessTask : DungeonGeneratorPostProcessBase\n    {\n        public GameObject[] Enemies;\n\n        public override void Run(GeneratedLevel level, LevelDescription levelDescription)\n        {\n            /* ... */\n\n            foreach (var roomInstance in level.GetRoomInstances())\n            {\n                var room = (GungeonRoom) roomInstance.Room;\n                var roomTemplateInstance = roomInstance.RoomTemplateInstance;\n\n                // Find floor tilemap layer\n                var tilemaps = RoomTemplateUtils.GetTilemaps(roomTemplateInstance);\n                var floor = tilemaps.Single(x => x.name == "Floor").gameObject;\n\n                // Add current room detection handler\n                floor.AddComponent<GungeonCurrentRoomHandler>();\n\n                // Add room manager\n                var roomManager = roomTemplateInstance.AddComponent<GungeonRoomManager>();\n                \n                if (room.Type != GungeonRoomType.Corridor)\n                {\n                    // Set enemies and floor collider to the room manager\n                    roomManager.Enemies = Enemies;\n                    roomManager.FloorCollider = floor.GetComponent<CompositeCollider2D>();\n\n                    // Find all the doors of neighboring corridors and save them in the room manager\n                    // The term "door" has two different meanings here:\n                    //   1. it represents the connection point between two rooms in the level\n                    //   2. it represents the door game object that we have inside each corridor\n                    foreach (var door in roomInstance.Doors)\n                    {\n                        // Get the room instance of the room that is connected via this door\n                        var corridorRoom = door.ConnectedRoomInstance;\n\n                        // Get the room template instance of the corridor room\n                        var corridorGameObject = corridorRoom.RoomTemplateInstance;\n\n                        // Find the door game object by its name\n                        var doorsGameObject = corridorGameObject.transform.Find("Door")?.gameObject;\n\n                        // Each corridor room instance has a connection that represents the edge in the level graph\n                        // We use the connection object to check if the corridor should be locked or not\n                        var connection = (GungeonConnection) corridorRoom.Connection;\n\n                        if (doorsGameObject != null)\n                        {\n                            // If the connection is locked, we set the Locked state and keep the game object active\n                            // Otherwise we set the EnemyLocked state and deactivate the door. That means that the door is active and locked\n                            // only when there are enemies in the room.\n                            if (connection.IsLocked)\n                            {\n                                doorsGameObject.GetComponent<GungeonDoor>().State = GungeonDoor.DoorState.Locked;\n                            }\n                            else\n                            {\n                                doorsGameObject.GetComponent<GungeonDoor>().State = GungeonDoor.DoorState.EnemyLocked;\n                                doorsGameObject.SetActive(false);\n                            }\n                            \n                            roomManager.Doors.Add(doorsGameObject);\n                        }\n                    }\n                }\n            }\n        }\n    }\n')))),Object(a.b)("h3",{id:"locked-doors"},"Locked doors"),Object(a.b)("p",null,"The last thing that we have to handle are doors that should be locked even if there are no enemies. These doors are used to separate reward/shop rooms from other rooms and force the player to find a different path to the reward room. When the player discovers the reward room, all the neighbouring locked doors are unlocked."),Object(a.b)("h2",{id:"fog-of-war"},"Fog of War"),Object(a.b)("p",null,"In this example, the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/Edgar-Unity/docs/guides/fog-of-war"}),"Fog of War")," feature is enabled. For more information on how to setup the feature, please see the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/Edgar-Unity/docs/guides/fog-of-war"}),"documentation"),". In order to integrate the Fog of War into this example scene, I modified the current room detection script (",Object(a.b)("inlineCode",{parentName:"p"},"GungeonCurrentRoomHandler")," class) to trigger the fog when a player enters a corridor room, and I also modified the ",Object(a.b)("inlineCode",{parentName:"p"},"GungeonPostProcessTask")," class to setup the fog after a level is generated."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," The integration of the Fog of War effect into this example could be improved. I think that it looks better when the next room is revealed only after the player walks though the middle of a corridor and not right when he enters the corridor. Also, the integration with doors is not ideal - you can reveal rooms behind locked rooms if you go close to the door. I want to improve this in the future.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," To disable the Fog of War effect, go to the main camera and disable the Fog of War component.")),Object(a.b)("h2",{id:"results"},"Results"),Object(a.b)(i.a,{cols:2,fixedHeight:!0,mdxType:"Gallery"},Object(a.b)(i.b,{src:"img/v2/examples/gungeon/result3.png",caption:"Example result",mdxType:"GalleryImage"}),Object(a.b)(i.b,{src:"img/v2/examples/gungeon/result4.png",caption:"Example result",mdxType:"GalleryImage"})))}h.isMDXComponent=!0},309:function(e,t,o){"use strict";o.d(t,"a",(function(){return d})),o.d(t,"b",(function(){return h}));var n=o(0),r=o.n(n);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=m(o),p=n,h=d["".concat(i,".").concat(p)]||d[p]||u[p]||a;return o?r.a.createElement(h,s(s({ref:t},c),{},{components:o})):r.a.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},310:function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"a",(function(){return i}));var n=o(22),r=o(311);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(o,n)=>function(e,t,o,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!o)return o;if(o.startsWith("#"))return o;if(Object(r.b)(o))return o;if(n)return t+o;const i=o.startsWith(t)?o:t+o.replace(/^\//,"");return a?e+i:i}(t,e,o,n)}}function i(e,t={}){const{withBaseUrl:o}=a();return o(e,t)}},311:function(e,t,o){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return r}))},312:function(e,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return c})),o.d(t,"c",(function(){return d}));var n=o(3),r=o(0),a=o.n(r),i=o(310);const s=e=>a.a.createElement("div",{style:{display:"inline-block",margin:2,overflow:"hidden",position:"relative",width:`calc(${100/e.cols}% - 4px)`,verticalAlign:"top"}},e.children),l=e=>a.a.createElement("div",{style:{fontSize:"0px",margin:"20px 0"}},a.a.Children.map(e.children,(t=>a.a.cloneElement(t,{cols:e.cols||4,fixedHeight:e.fixedHeight})))),c=e=>a.a.createElement(s,{cols:e.cols},a.a.createElement("a",{href:Object(i.a)(e.src),target:"_blank"},a.a.createElement("img",{src:Object(i.a)(e.src),alt:"result",style:{height:!0===e.fixedHeight?800/e.cols+"px":"auto",objectFit:!0===e.fixedHeight?"cover":"initial"}})),void 0!==e.caption&&a.a.createElement(m,null,e.caption)),m=e=>a.a.createElement("div",{style:{fontSize:16,fontStyle:"italic",textAlign:"center",margin:"10px 0px 15px"}},e.children),d=e=>{const{src:t,caption:o,...r}=e;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement("img",Object(n.a)({src:Object(i.a)(e.src)},r)),void 0!==e.caption&&a.a.createElement(m,null,e.caption))}},313:function(e,t,o){"use strict";var n=o(0),r=o.n(n),a=o(11),i=o(311),s=o(8);const l=Object(n.createContext)({collectLink:()=>{}});var c=o(310),m=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};t.a=function(e){var t,{isNavLink:o,to:d,href:u,activeClassName:p,isActive:h,"data-noBrokenLinkCheck":b,autoAddBaseUrl:g=!0}=e,f=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:v}=Object(c.b)(),y=Object(n.useContext)(l),O=d||u,j=Object(i.a)(O),w=null==O?void 0:O.replace("pathname://",""),k=void 0!==w?(x=w,g&&(e=>e.startsWith("/"))(x)?v(x):x):void 0;var x;const E=Object(n.useRef)(!1),G=o?a.e:a.c,T=s.a.canUseIntersectionObserver;let C;Object(n.useEffect)((()=>(!T&&j&&window.docusaurus.prefetch(k),()=>{T&&C&&C.disconnect()})),[k,T,j]);const R=null!==(t=null==k?void 0:k.startsWith("#"))&&void 0!==t&&t,N=!k||!j||R;return k&&j&&!R&&!b&&y.collectLink(k),N?r.a.createElement("a",Object.assign({href:k},O&&!j&&{target:"_blank",rel:"noopener noreferrer"},f)):r.a.createElement(G,Object.assign({},f,{onMouseEnter:()=>{E.current||(window.docusaurus.preload(k),E.current=!0)},innerRef:e=>{var t,o;T&&e&&j&&(t=e,o=()=>{window.docusaurus.prefetch(k)},C=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),o())}))})),C.observe(t))},to:k||""},o&&{isActive:h,activeClassName:p}))}},314:function(e,t,o){"use strict";o.d(t,"b",(function(){return c})),o.d(t,"a",(function(){return m}));var n=o(0),r=o.n(n),a=o(313);const i=[{id:"outline-override",url:"../basics/room-templates#outline-override",name:"Outline override",usages:[{id:"corridors",description:"Outline override is used to properly handle corridors"}]},{id:"custom-rooms-and-connections",url:"../basics/level-graphs#pro-custom-rooms-and-connections",name:"Custom rooms",usages:[{id:"room-type",description:"The definition of rooms is enhanced with a custom type"}]},{id:"custom-post-processing",url:"../generators/post-process#custom-post-processing",name:"Custom post-processing",usages:[{id:"enemies",description:"A custom post-processing task is used to spawn enemies after a level is generated"},{id:"player-spawn",description:"Move the player to the spawn position of the level"}]}],s=[{id:"example-1",name:"Example 1",url:"../examples/example-1",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"}]},{id:"example-2",name:"Example 2",url:"../examples/example-2",features:[{id:"outline-override",usage:"corridors",anchor:"vertical-corridors"}]},{id:"dead-cells",name:"Dead Cells",url:"../examples/dead-cells",features:[{id:"custom-post-processing",usage:"enemies",anchor:"enemies"},{id:"custom-post-processing",usage:"player-spawn",anchor:"spawn-position"},{id:"custom-rooms-and-connections",usage:"room-type",anchor:"custom-room-and-connection-types"}]}];function l(e){if("undefined"!=typeof window){const t=window.location.href,o=t.split("/");(o[o.length-1].startsWith("#")||t.endsWith("/"))&&(e="../"+e)}return e}const c=e=>{const t=i.find((t=>t.id===e.id)).usages.map((e=>({...e,examples:[]})));return s.forEach((o=>{o.features.forEach((n=>{if(n.id===e.id){t.find((e=>e.id===n.usage)).examples.push({example:o,feature:n})}}))})),r.a.createElement("div",{className:"featureUsage"},r.a.createElement("div",{className:"featureUsage__title"},"Where is this feature used?"),r.a.createElement("div",{className:"featureUsage__description"},"Below is the list of examples/tutorials where we use this feature. Feel free to check them out if you're not sure how something works or if you just want to see this feature used in action."),r.a.createElement("table",null,r.a.createElement("tbody",null,t.map(((e,t)=>r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.examples.map(((e,t)=>r.a.createElement("span",null,t?", ":"",r.a.createElement(a.a,{to:l(e.example.url+"#"+e.feature.anchor),onClick:()=>{return t=e.feature.anchor,void setTimeout((function(){var e=document.getElementById(t);e&&e.scrollIntoView()}),1e3);var t}},e.example.name))))),r.a.createElement("td",null,e.description)))))))},m=e=>{const t=s.find((t=>t.id===e.id)),o=[];return t.features.forEach((e=>{const t=i.find((t=>t.id===e.id)),n=t.usages.find((t=>t.id===e.usage));o.push({...e,feature:t,featureUsage:n})})),r.a.createElement("div",{className:"featureUsage"},r.a.createElement("div",{className:"featureUsage__title"},"List of used features"),r.a.createElement("div",{className:"featureUsage__description"},"Below is a list of features that are used in this example."),r.a.createElement("table",null,r.a.createElement("tbody",null,o.map(((e,t)=>r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(a.a,{to:e.feature.url},e.feature.name)),r.a.createElement("td",null,e.featureUsage.description)))))))}},315:function(e,t,o){"use strict";function n(e){var t,o,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=n(e[t]))&&(r&&(r+=" "),r+=o);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,o=0,r="";o<arguments.length;)(e=arguments[o++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},319:function(e,t,o){"use strict";var n=o(0),r=o(320);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},320:function(e,t,o){"use strict";var n=o(0);const r=Object(n.createContext)(void 0);t.a=r},321:function(e,t,o){"use strict";o.d(t,"a",(function(){return l}));var n=o(3),r=o(0),a=o.n(r),i=o(310);const s=e=>a.a.createElement(a.a.Fragment,null,a.a.createElement("source",{src:Object(i.a)(e.src),type:"video/mp4"}));class l extends a.a.Component{constructor(e){super(e),this.video=a.a.createRef()}componentDidMount(){this.video.current.play()}onEnded(e){const t=this.video;this.props.timeout?setTimeout((function(){t.current.play()}),this.props.timeout):t.current.play()}render(){const{src:e,...t}=this.props;return a.a.createElement("video",Object(n.a)({ref:this.video,width:"100%",onEnded:this.onEnded.bind(this),muted:!0},t),a.a.createElement(s,{src:e}),"Your browser does not support the video tag.")}}},322:function(e,t,o){"use strict";var n=o(0),r=o.n(n),a=o(319),i=o(315),s=o(56),l=o.n(s);const c=37,m=39;t.a=function(e){const{lazy:t,block:o,defaultValue:s,values:d,groupId:u,className:p}=e,{tabGroupChoices:h,setTabGroupChoices:b}=Object(a.a)(),[g,f]=Object(n.useState)(s),v=n.Children.toArray(e.children);if(null!=u){const e=h[u];null!=e&&e!==g&&d.some((t=>t.value===e))&&f(e)}const y=e=>{f(e),null!=u&&b(u,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":o},p)},d.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>O.push(e),onKeyDown:e=>{((e,t,o)=>{switch(o.keyCode){case m:((e,t)=>{const o=e.indexOf(t)+1;e[o]?e[o].focus():e[0].focus()})(e,t);break;case c:((e,t)=>{const o=e.indexOf(t)-1;e[o]?e[o].focus():e[e.length-1].focus()})(e,t)}})(O,e.target,e)},onFocus:()=>y(e),onClick:()=>{y(e)}},t)))),t?Object(n.cloneElement)(v.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}},323:function(e,t,o){"use strict";var n=o(3),r=o(0),a=o.n(r);t.a=function({children:e,hidden:t,className:o}){return a.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:o}),e)}}}]);