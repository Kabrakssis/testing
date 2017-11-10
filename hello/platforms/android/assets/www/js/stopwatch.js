
function stopwatchjavascript() {
    alert("Hello! I am an alert box!");
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
  

}
window.onload = stopwatchjavascript;
