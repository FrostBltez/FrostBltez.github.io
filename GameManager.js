let GameManager = {
    setGameStart: function(classType){
      this.resetPlayer(classType);
      this.SetPreFight();
      },
      resetPlayer: function(classType){
        switch (classType) {
            case "Monster":
            player = new Player(classType, 100, 0, 200, 100, 50,0);
            break;
            case "Alien":
            player = new Player(classType, 200, 0, 175, 100, 150);
            break; 
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="Characters/' + classType.toLowerCase() + '.png" class="Characters"><div><h3>'+ classType 
        + '</h3><p> Health: ' + player.health + '</p><p> mana: '+ player.mana +
         '</p><p> Strength: ' + player.strength + '</p><p> Agility: '+ player.agility + 
         '</p><p> Speed: ' + player.speed + '</p></div>';
      },
      SetPreFight: function(){
          let getHeader  = document.querySelector(".header");
          let getActions  = document.querySelector(".actions");
          let getArena  = document.querySelector(".arena");
          getHeader.innerHTML = '<p>Task:Find an enemy!</p>';
          getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.SetFight()">Search for an enemy</a>';
          getArena.style.visibility = "visible";
    
      },
      SetFight: function() {
        let getHeader  = document.querySelector(".header");
        let getActions  = document.querySelector(".actions");
        let getEmeny  = document.querySelector(".enemy");
        // Create enemy!
        let enemy00 = new Enemy("DiscordBot", 100, 0, 50, 100 , 100);
        let enemy01 = new Enemy("Cat", 100, 0, 50, 150 , 150);
        let chooseRamdonEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRamdonEnemy) {
            case 0:
             enemy = enemy00;
            break;
            case 1:
            enemy = enemy01;
            break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.caluAttack()">Attack!</a>';
        getEmeny.innerHTML =  '<img src="Characters/' 
        + enemy.enemyType.toLowerCase() + '.png" class="Characters"><div><h3>'+ enemy.enemyType 
        + '</h3><p> Health: ' + enemy.health + '</p><p> mana: '+ enemy.mana +
         '</p><p> Strength: ' + enemy.strength + '</p><p> Agility: '+ enemy.agility + 
         '</p><p> Speed: ' + enemy.speed + '</p></div>';
       }
    }
    
let player;

function Player(classType, health, mana, strength, agility, speed) {
 this.classType = classType;
 this.health = health;
 this.mana = mana;
 this.strength = strength;
 this.agility = agility;
 this.speed = speed;
}

let enemy;

function Enemy(enemyType, health, mana, strength, agility, speed) {
    this.enemyType = enemyType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

