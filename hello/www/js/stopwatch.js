
function stopwatchjavascript() {
    
var hours = 00;
    var minutes = 00; 
  var seconds = 00; 
  var tens = 00;
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var appendMinutes = document.getElementById("minutes")
  var appendHours = document.getElementById("hours")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;
    
   

  buttonStart.onclick = function() {
    
     clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
      minutes = "00";
      hours = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
      appendMinutes.innerHTML = minutes;
      appendHours.innerHTML = hours;
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if(seconds < 9){
      appendSeconds.innerHTML = "0" + seconds;
    }  
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
      
      
    if (minutes > 59) {
      console.log("hours");
      hours++;
      appendHours.innerHTML = "0" + hours;
      minutes = 0;
      appendMinutes.innerHTML = "0" + 0;
    }
  
  }
  
var hours1 = 00;
    var minutes1 = 00; 
  var seconds1 = 00; 
  var tens1 = 00;
  var appendTens1 = document.getElementById("tens1")
  var appendSeconds1 = document.getElementById("seconds1")
  var appendMinutes1 = document.getElementById("minutes1")
  var appendHours1 = document.getElementById("hours1")
  var buttonStart1 = document.getElementById('button-start1');
  var buttonStop1 = document.getElementById('button-stop1');
  var buttonReset1 = document.getElementById('button-reset1');
  var Interval1 ;
    
   

  buttonStart1.onclick = function() {
    
     clearInterval(Interval1);
     Interval1 = setInterval(startTimer1, 10);
  }
  
    buttonStop1.onclick = function() {
       clearInterval(Interval1);
  }
  

  buttonReset1.onclick = function() {
     clearInterval(Interval1);
    tens1 = "00";
  	seconds1 = "00";
      minutes1 = "00";
      hours1 = "00";
    appendTens1.innerHTML = tens1;
  	appendSeconds1.innerHTML = seconds1;
      appendMinutes1.innerHTML = minutes1;
      appendHours1.innerHTML = hours1;
  }
  
   
  
  function startTimer1 () {
    tens1++; 
    
    if(tens1 < 9){
      appendTens1.innerHTML = "0" + tens1;
    }
    
    if (tens1 > 9){
      appendTens1.innerHTML = tens1;
      
    } 
    
    if (tens1 > 99) {
      console.log("seconds1");
      seconds1++;
      appendSeconds1.innerHTML = "0" + seconds1;
      tens1 = 0;
      appendTens1.innerHTML = "0" + 0;
    }
    
    if(seconds1 < 9){
      appendSeconds1.innerHTML = "0" + seconds1;
    }  
    if (seconds1 > 9){
      appendSeconds1.innerHTML = seconds1;
    }
    if (seconds1 > 59) {
      console.log("minutes1");
      minutes1++;
      appendMinutes1.innerHTML = "0" + minutes1;
      seconds1 = 0;
      appendSeconds1.innerHTML = "0" + 0;
    }
      
      
    if (minutes1 > 59) {
      console.log("hours1");
      hours1++;
      appendHours1.innerHTML = "0" + hours1;
      minutes1 = 0;
      appendMinutes1.innerHTML = "0" + 0;
    }
  
  }
    var hours2 = 00;
    var minutes2 = 00; 
  var seconds2 = 00; 
  var tens2 = 00;
  var appendTens2 = document.getElementById("tens2")
  var appendSeconds2 = document.getElementById("seconds2")
  var appendMinutes2 = document.getElementById("minutes2")
  var appendHours2 = document.getElementById("hours2")
  var buttonStart2 = document.getElementById('button-start2');
  var buttonStop2 = document.getElementById('button-stop2');
  var buttonReset2 = document.getElementById('button-reset2');
  var Interval2 ;
    
   

  buttonStart2.onclick = function() {
    
     clearInterval(Interval2);
     Interval2 = setInterval(startTimer2, 10);
  }
  
    buttonStop2.onclick = function() {
       clearInterval(Interval2);
  }
  

  buttonReset2.onclick = function() {
     clearInterval(Interval2);
    tens2 = "00";
  	seconds2 = "00";
      minutes2 = "00";
      hours2 = "00";
    appendTens2.innerHTML = tens2;
  	appendSeconds2.innerHTML = seconds2;
      appendMinutes2.innerHTML = minutes2;
      appendHours2.innerHTML = hours2;
  }
  
   
  
  function startTimer2 () {
    tens2++; 
    
    if(tens2 < 9){
      appendTens2.innerHTML = "0" + tens2;
    }
    
    if (tens2 > 9){
      appendTens2.innerHTML = tens2;
      
    } 
    
    if (tens2 > 99) {
      console.log("seconds2");
      seconds2++;
      appendSeconds2.innerHTML = "0" + seconds2;
      tens2 = 0;
      appendTens2.innerHTML = "0" + 0;
    }
    
    if(seconds2 < 9){
      appendSeconds2.innerHTML = "0" + seconds2;
    }  
    if (seconds2 > 9){
      appendSeconds2.innerHTML = seconds2;
    }
    if (seconds2 > 59) {
      console.log("minutes2");
      minutes2++;
      appendMinutes2.innerHTML = "0" + minutes2;
      seconds2 = 0;
      appendSeconds2.innerHTML = "0" + 0;
    }
      
      
    if (minutes2 > 59) {
      console.log("hours2");
      hours2++;
      appendHours2.innerHTML = "0" + hours2;
      minutes2 = 0;
      appendMinutes2.innerHTML = "0" + 0;
    }
  
  }
}
window.onload = stopwatchjavascript;


  





