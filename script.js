var myVar;
var score = 0;
var clock = 0;
var level = 1;
var timing = 1000;

$(document).ready(function(){
    $("img").click(function(){
    score++;
    document.getElementById("count").innerHTML = score;
    random();
    });
  });


function random(){
    clearTimeout(myVar);
    $("img").hide();
var randomNumber = Math.floor(Math.random() * 9) + 1;

if(randomNumber == 1){
    $("#mole1").show();
}
if(randomNumber == 2){
    $("#mole2").show();
}
if(randomNumber == 3){
    $("#mole3").show();
}
if(randomNumber == 4){
    $("#mole4").show();
}
if(randomNumber == 5){
    $("#mole5").show();
}
if(randomNumber == 6){
    $("#mole6").show();
}
if(randomNumber == 7){
    $("#mole7").show();
}
if(randomNumber == 8){
    $("#mole8").show();
}
if(randomNumber == 9){
    $("#mole9").show();
}
myVar = setTimeout(random, timing);

}

$(document).ready(function(){
 setInterval(realclock, 1000);  
});

function realclock(){
    clock++;
    document.getElementById("clock").innerHTML = clock;
    if(clock==30){
        if (score >= 10){
            window.alert("Congratz! You are qualified for the next level. Score: " + score);
            score = 0;
            clock = 0;
            document.getElementById("count").innerHTML = score;
            level++;
            timing = timing * ((10-level)/10);
        }
        else{
        window.alert("Time is up! Your score: " + score + " Sorry, you did not score enough to reach the next level.");
        score = 0;
        clock = 0;
        document.getElementById("count").innerHTML = score;
        timing = 1000;
        }
    }
}




// to add: levels, make it prettier, modify the pop-up + quit/next level, prevent the image from hiding, disable block (p), set limit for levelling, save results in highscore

