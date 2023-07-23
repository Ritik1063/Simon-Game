
var gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;

function NextSequence(){

    userClickedPattern=[];

    var randomNumber = Math.floor((4*(Math.random())));

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();

    level++;

    $("h1").text("Level " + level);
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}

function checkAnswer(level){
    if(gamePattern[level] == userClickedPattern[level]){
        if(gamePattern.length === userClickedPattern.length){

        setTimeout(function(){
            NextSequence();
        },1000)
    }
    }
    else{
        wrong(); 
    }
    
}

function wrong (){

    var audioWrong = new Audio("sounds/wrong.mp3");

    $("body").addClass("game-over");

    setTimeout(function(){
        $("body").removeClass("game-over");
    },200)

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();
}

function startOver(){
    gamePattern = [];
    level = 0;
}

$("body").keydown(function(){
    if(gamePattern[0]== null){
    NextSequence();
    }
})

$(".btn").click(function() {
    var userChosenColour = this.id;

    userClickedPattern.push(userChosenColour);
    
    var audio = new Audio("sounds/" + this.id + ".mp3");
    audio.play();

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
})






    // $("btn").on("click","handler(e)");
    
    
    // $(".btn").click(handler(e.target));

    // function handler(e){
    //     var userChosenColour = e.id;
    //     console.log(userChosenColour);
    // }







