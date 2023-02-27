let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');

let start=document.getElementById('btn-start');

let startTime=null;

let stopTune= new Audio('stopsound.mp3');

function createAlert(){
    stopTune.play();
    alert('Timer finished');
}

function createTimer(){
    if(hours.value == 0 & minutes.value==0 & seconds.value==0){
        hours.value=0;
        minutes.value=0;
        seconds.value=0;
        clearInterval(startTime);
        createAlert();

    }
    else if(seconds.value!=0){
        seconds.value-=1;
    }
    else if(minutes.value!=0 & seconds.value==0){
        seconds.value=59;
        minutes.value-=1;
    }
    else if(hours.value!=0 & minutes.value==0){
        minutes.value=60;
        hours.value-=1;
    }
}

start.addEventListener('click',function(){
    function startcountDown(){
        startTime=setInterval(function(){
            createTimer();
        },1000);
    }
    startcountDown();
    
})



