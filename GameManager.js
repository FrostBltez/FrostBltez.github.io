function Game_Init(){
window.addEventListener('keydown', function(evt){
var key_pressed = String.fromCharCode(evt.keyCode);
console.log(key_pressed);
});



console.log("GAME WORKING!")
}


function Game_Main(){
    Game_Init();
    console.log("I am the console, I speak for the program!");
}

window.addEventListener('load', function(event){
Game_Main()
});