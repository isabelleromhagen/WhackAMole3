var myVar;
var counter = 0;
var clock = 0;

$(document).ready(function(){
    $("img").click(function(){
    counter++;
    document.getElementById("count").innerHTML = counter;
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
myVar = setTimeout(random, 1000);

}

$(document).ready(function(){
 setInterval(realclock, 1000);  
});

function realclock(){
    clock++;
    document.getElementById("clock").innerHTML = clock;
    if(clock==30){
        window.alert("Time is up! Your score: " + counter);
        counter = 0;
        clock = 0;
        document.getElementById("count").innerHTML = counter;
    }
}

// to add: levels, make it prettier, modify the pop-up + quit/next level, prevent the image from hiding, disable block (p), set limit for levelling, save results in highscore

