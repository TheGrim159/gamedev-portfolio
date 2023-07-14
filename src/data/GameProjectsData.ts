import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-10", "Melee Mayham", "img/projects/MM_Menu.png", `
    <div class="paragraph">
        <strong>Melee Mayham</strong> is a third person arena PVP fighter where you play as a robot that has the task to fight and kill its opponent.
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/8J0FKobZMU4" title="Melee Mayham Gameplay" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Worked with a team of 4 people</li>
        <li>I set up local multiplayer with the split screen view the spawn system and the controls setup.</li>
        <li>I set up the hit detection and lock-on systems.</li>
        <li>I implemented the knockdown, execution, and parry systems.</li>
        <li>I created the options menu and the save system.</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/MM_1.png" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/MM_2.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/MM_3.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/MM_4.jpg" alt="Cloud Drew Land Screenshot" />
    </div>
    <div class="paragraph">
        I was a developer for this game. <br/>
        The tools I used for this game were Unreal 4.27 and blueprints. <br/>
        Post Mortem: <br/>
        In this game I was brought in later to make the game be local multiplayer (which I wanted to learn) instead of online multiplayer since it wasn't working. In this I figured out we had to redo a lot of the blueprints since they only worked for player 1, 
        so this taught me to pay closer attention to how you call variables in blueprints. One issue with the development of this game is that this game was made in Zygobot (like most of the games on this list) which is the indie studio in Full Sail 
        that I was an intern for as part of my degree program and the problem was that the project lead kept adding more features to the game.  Because of this there was no time left for the other developer and I to make sure that the features were all polished and 
        bug free by the time we graduated and it is also the reason why the game is not currently released for people to play since the project lead is the only one working on it and he has little developer experience. I should have tried to
        talk about my frustations about adding in new features to a game that to my knowledge was supposed to be released that week instead of polishing the game since I wanted to avoid conflict.
    </div>
    `, "#FC4205"),

    new ProjectData("project-9", "Threads of Fate", "img/projects/ToF_Menu.png", `
    <div class="paragraph">
        <strong>Threads of Fate</strong> is a first person shooter rpg where you play a knight getting rid of the enemies that have taken over a castle. This was a 1 month school project.
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/qyVbp4G7kds" title="Threads of Fate Gameplay" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Worked with a team of 5 people</li>
        <li>I made the save system which saves the player's menu settings and saves ammo, quest progression, guns equipped, health, experience and levels.</li>
        <li>I designed and implemented the player's gun system, swap system and ammo pickup system.</li>
        <ul>
            <li>The weapons were designed so that the player could choose between 3 firing modes single fire, 3 round burst fire, and full automatic fire and the reason for this was that player could swap them depending range and how good they were on recoil control.</li>
        </ul>
        <li>I also made the lower half of the player's HUD ui which is the health bar, experience bar and the ammo bar.</li>
        <ul>
            <li>The hud was inspired by games that I have played that use bars to display information to players with the primary inspiration being the Borderlands series.</li>
        </ul>
        <li>I created and implemented the experience and leveling system which includes how the player gains experience and a leveling curve formula.</li>
        <li>I made the immunity and damage buff powerups.</li>
        <ul>
            <li>The damage buff powerup if the purple power up in the game and it makes the ammo bar flash purple as well to give the player feedback that their gun has been buffed.</li>
            <li>The immunity powerup is not shown in the video but it is green and makes the health bar flash green so that the player knows they are immune to damage.</li>
        </ul>
        <li>I helped work on most of the other systems in the game to make sure that all of the systems implemented worked together.</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Tof1.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/Tof2.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/Tof3.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/TofDamBuff.gif" alt="Cloud Drew Land Screenshot" />
    </div>
    <div class="paragraph">
        I was a systems designer and developer for this game. <br/>
        The tools I used for this game were Unreal 5.1 and blueprints. <br/>
        Post Mortem: <br/>
        I am proud of what my team was able to accomplish during this one month game even though we had some pretty major setbacks at the beginning. During this project I slowly became basically the project lead after the 2nd week and that was a new experience for me, 
        but I believe that this experience will help me grow in the future for future projects and games. Another lesson that I learned from this project is learning to prioritize on the important things essential to the game. The reason how I learned this lesson is that for the last week 
        of the project we had to cut features that were not important to gameplay and focused on trying to polish what we had and bring it all together so that the game felt cohesive instead of disjointed with individual features. One thing we had to cut were 
        related leveling system other than the player leveling up since the leveling system was not core to the gameplay loop of the game and though we were disappointed to get rid of it we had a better game at the end because we cut it.
    </div>
    `, "#9BCD50"),

    new ProjectData("project-8", "Legend of Nazera: War", "img/projects/LegendOfNazeraMenu.jpg", `
    <div class="paragraph">
        <strong>Legend of Nazera: War</strong> Tower defense adventure where you recruit heroes and use them to take down the corruption.
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/XUOuHogSdZw" title="Nazera Gameplay" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Worked with a team of 13 people</li>
        <li>I made the save system which saves the player's menu settings and has the framework to save levels beaten, dialogues played and heros unlocked but since those features were not finished for the first release they are not in the game.</li>
        <li>I designed and implemented 3 characters Ambrose the Mage, Cathbad the Druid, and Zorin the Summoner (though Zorin had to be cut due to time since testthe models could not be made in time). I also helped implement Nirxul the necromancer.</li>
            <ul>
            <li> Ambrose was designed to have a play style where 1 of the units was a tank that would protect the other 2 lower health units that could deal a lot of damage. This was coupled with the 
            abilities where 2 do damage overtime and debuff the enemy units and a buff that increases attack speed of friendly units.</li>
            <li> The reason for the ablities to have effects and damage overtime was to compliment the slower playstyle of Ambrose and because the game had no overtime abilities yet.</li>
            <li> Cathbad was designed to have to have 2 units that attacked faster but did less damage and a meduim range slow moving druid. With one of the abilities Cathbad summons a plant golem tank unit that heals it's allies,
            then the other abilities is an arrow attack than slows the enemies, and then the final ability summons vines but does no damage but it buffs allies and debuffes enemies attack and movement speed.</li>
            <li> The design orginally for Cathbad was to have him be an elf faction which is why the units had lower health but hit faster and harder and the plant golem tank was to be their shield, and this is why there is a arrow attack and the vines, but the character was changed to be celtic and norse tribal people. </li>
            </ul>
        <li>I created and implemented most of the visual effects used in the game by the player.</li>
        <li>I designed the dialogue system that is used for the dialogue that is show in the level select scene, before the level starts, during the game for abilities and for the end of level.</li>
            <ul>
            <li> The inspiration for the dialogue's visuals and how it worked is based off of JRPG games dialogue, where the player is shown a portrait of the character talking and their name.</li>
            <li> The same inspiration was used for the dialogue shown when an ability is used, but this was also added to give the player more infomation so they would know when the opponent used an ability since not all abilities are obvious and reduce the chance of confusion.</li>
            </ul>
        <li>I also helped to balance the different characters to try to make sure that all of the character were at a simular power level.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        The game was published to Steam and the link to look at the store page is : <a href="https://store.steampowered.com/app/2179190/Legend_Of_Nazera_War/" target="_blank">HERE</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/LoN1.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/LoN2.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/LoN3.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/LoN4.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/LoN5.gif" alt="Cloud Drew Land Screenshot" />
    </div>
    <div class="paragraph">
        I was a systems and character designer, developer, and somewhat of a VFXs artist for this game. Though I am not a great VFXs artist I was just willing to learn anything and the team needed it.<br/>
        The tools I used for this game were Unreal 5.1, blueprints, and Niagara for VFXs. <br/>
        <b> Post Mortem: </b> <br/>
        This game was the first time I had ever truely dived into using the Unreal Engine and though I am proud of what I accomplished now that I have learned more I realized I could have done my 
        work in coding for the game using more effient code practices such as creating more fuctions for repeated code. Another thing is that I wish I spent more time on learning how to balance the characters 
        because even though I helped with the process of balancing the characters I wish I spent more time learning what makes a balanced character instead of just tweaking values based off of 
        intuition and seeing if it worked. The final thing I wished I could have done in this game is adding more polish to the characters so that the vfxs of the abilities felt even more 
        impactful in the game like adding camera shake to higher level abilities, because even though I tried to make all of the characters I designed to have visual indicators that the ability 
        leveled up I wish I could have done even more. <br/>
        </div>`, "#666431", false, true),

    new ProjectData("project-7", "ReDeSync", "img/projects/ReDeSyncmenu.png", `
    <div class="paragraph">
        <strong>ReDeSync</strong> is a stealth action-adventure game where the player takes on the mantle of ER-7, the last friendly robot in range of the task. The player has access to sneak abilities, melee and blocking, or the option of waiting against the enemy drones while trying to complete their task of detonating the ERBs, Earth Recovery Bombs. Standing in the way are enemy drones, whose goal is to attack the player and kill them, which "ends the mission." The game is a short adventure to restore earth after drones have wiped out a large part of the population and made life uninhabitable on earth.
    </div>
    
    <div class="paragraph center">
        <img src="img/projects/ReDeSyncmenu.png" width=100% width="900"/>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Worked with a team of 8 people</li>
        <li>I created the save system which saves the player's location, health, battery, the number of abilities unlocked, metal and batteries collected, which level they are one, and enemy's health and location.</li>
        <li>I made the menus for the Save System in the main menu, and the save system menu in the options menu.</li>
        <li>I coded in the block ability for the player to reduce the damage taken by the enemies.</li>
        <li>I implemented the enemy AI waypoint script and then edited it so that they don't break when loading a save game.</li>
        <li>I created multiple enemy types such a tank enemy and an enemy that could see through invisibility among others and I made a special pickup that gave the player a popup screen that the player more of the story but I did not work on the game in the last 2 months of the games creation due to the team lead saying he had no more use for a developer and then removed these 2 features without telling me about it.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        The game was published to Itch.io and the link is : <a href="https://deusgd.itch.io/redesync" target="_blank">HERE</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/ReDeSync1.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/ReDeSync2.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/ReDeSync3.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/ReDeSync4.jpg" alt="Cloud Drew Land Screenshot" />
    </div>`, "#83DEC7"),
    /*
    new ProjectData("project-6", "Paravoid", "img/projects/paramenu.jpg", `
    <div class="paragraph">
        <strong>Paravoid</strong> is a singleplayer 3D platformer with a strong emphasis on an eerie, dream-like, and anxiety-inducing atmosphere. Step into a liminal nightmare and confront the call of the void.
    </div>
    
    <div class="paragraph center">
        <img src="img/projects/paramenu.jpg" width=100% width="900"/>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Worked with a group of 22 people</li>
        <li>I coded the respawn and death mechanics</li>
        <li>I created checkpoints script and linked it to the save script</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available: <a href="https://ff4ff14d-f903-498f-a616-e761da126e51.filesusr.com/archives/52ef35_23a7358dd5bf475fa45395cd2e7f4046.zip?dn=PARAVOID_FinalBuild.zip" target="_blank">HERE</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/para1.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/para2.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/para3.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/para4.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/para5.jpg" alt="Cloud Drew Land Screenshot" />
    </div>`, "#5a78af"),
    
    new ProjectData("project-5", "Gun With Legs", "img/projects/GunWithLegs_Menu.png", `
    <div class="paragraph">
        <strong>Gun With Legs</strong> is a 2d platformer where you play as a senitent gun. In this game as you fire your bullets you are also shooting your health away be careful.
    </div>

    <div class="paragraph center">
        <img src="img/projects/GunWithLegs_Menu.png" width=100% width="900"/>
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Collaborated with a team of 11 people</li>
        <li>I coded the script for the RailGun</li>
        <li>I fixed enemy-player collisions so that the player did not launch weirdly</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available: <a href="https://drive.google.com/file/d/1fhViYgxJpHnGDi90HfuFxLDx6ltF-P7A/view?usp=sharing" target="_blank">HERE</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/gun1.png" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/gun2.png" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/gun3.png" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/gun4.png" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/gun5.png" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/gun6.png" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/gun7.png" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/gun8.png" alt="Cloud Drew Land Screenshot" />
    </div>`, "#23bd69"), */

    new ProjectData("project-4", "Agent Gunne", "img/projects/BondMonke.png", `
    <div class="paragraph">
    <strong>Agent Gunne vs Hugh Mann Invasion</strong> is a 3rd person BeatEmUp game where you play as agent Gunne to defeat your enemies and reach the end. This game was done as a school project.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/-tn4bWrCPDc" title="Gunne Monke trailer" frameborder="0" allowfullscreen></iframe>
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Worked with a team of 5 people for this class project</li>
        <li>I created the collectable scripts</li>
        <li>I created the death and respawn mechanics</li>
        <li>I made the scripts for the checkpoints/rest areas</li>
        <li>I created the mouse sensitivity script</li>
        <li>I fixed the elevator so that the player could go up and down smoothly</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows and MAC build available: <a href="https://drive.google.com/file/d/1MqRSnuL4MK0KSNEMtJWKrCm8C7QyFhB6/view?usp=sharing" target="_blank">HERE</a>.
        </div>
    </div>

    <div class="paragraph center">
        Gameplay Video:
    </div>
    <div class="paragraph center">
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/lbkrDBuDJyw" title="GunneMonke gameplay" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#383838"),
    /*
    new ProjectData("project-3", "Overheat", "img/projects/OverheatBanner.png", `
    <div class="paragraph">
        <strong>Overheat</strong> is a 3rd person action BeatEmUp in a style similar to Devil May Cry or God of War. With the story being that Axel's precious creations have been stolen by his brother for dubious ends. Time for him to take it all back the only way he knows how: in style. Play as Axel and combo robot enemies into oblivion to take down your brother!
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/4upX3EyyPWI" title="Overheat video" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Collaborated with a group of 13 people</li>
        <li>Created the Back Special attack</li>
        <li>Created Move List and End Credits UI</li>
        <li>Helped with the Level Design</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Overheat1.png" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="img/projects/Overheat2.png" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="img/projects/Overheat3.png" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="img/projects/Overheat4.png" alt="Drawing Overload Screenshot" />
    </div>
    `, "#f04c2e"),

    new ProjectData("project-2", "Senpai, Me, and the Chocolate", "img/projects/smc_menu.png", `
    <div class="paragraph">
        <strong>Senpai, Me, and the Chocolate</strong> 2d action stealth game where you avoid being caught by the other male students to give your chocolate to senpai.
    </div>
    <div class="paragraph center">
        <img src="img/projects/smc_menu.png" width=100%>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>I collaborated with a group of 6 people</li>
        <li>I coded all of movement mechanics into the game</li>
        <li>I helped implement the stealth walk with the hearing mechanic for the enemy AI</li>
        <li>I created and coded a distraction mechanic and a roll mechinaic but since Covid-19 hit before it was totally finished it was scrapped</li>
        <li>I helped code the camera tracking</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
    Windows build available: <a href="https://ff4ff14d-f903-498f-a616-e761da126e51.filesusr.com/archives/974cc4_e450f465bf23495798b993dc9afe4542.zip?dn=SMC-Virtual-Demo-Build2.zip" target="_blank">HERE</a>.
        
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/SMC1.png" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/SMC2.png" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/SMC3.png" alt="Singing Addict Screenshot" />
    </div>
    `, "#c4355b"),

    new ProjectData("project-1", "Walpurgisnacht", "img/projects/walpurgisnacht.png", `
    <div class="paragraph">
     <strong>Walpurgisnacht</strong> is a spell-slinging 2D top-down fighting game in which players face off against each other in a hail of curtain fire.
    </div>
    <div class="paragraph center">
        <img src="img/projects/walpurgisnacht.png" width=100% width="900"/>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Created with a team of 10 people</li>
        <li>I coded the input map for the player</li>
        <li>I coded the top down player controller and connected it to the input map</li>
        <li>I co-wrote the controller interface for a physical controller and connected it to the player controls</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/wals1.png" alt="Optimistic Chubby Screenshot" />
        <img class="pc-screenshot" src="img/projects/wals2.png" alt="Optimistic Chubby Screenshot" />
        <img class="pc-screenshot" src="img/projects/wals3.png" alt="Optimistic Chubby Screenshot" />
        <img class="pc-screenshot" src="img/projects/wals4.png" alt="Optimistic Chubby Screenshot" />
    </div>
    `, "#741075"),*/
];