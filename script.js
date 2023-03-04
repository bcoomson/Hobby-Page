console.log("JavaScript is working!");
setInterval(time, 1000);

function time() {
var date = new Date();
var p =document.querySelector("#clock");
p.innerHTML = date;
}