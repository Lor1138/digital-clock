const container = document.querySelector("#container");
const clock = document.querySelector("#clock");
const time = document.querySelector("#time");

;
 


 function digitalClock(){
     const currentTime  = new Date().toLocaleTimeString()
     time.textContent = currentTime;
 }


digitalClock()
setInterval(digitalClock, 1000)



