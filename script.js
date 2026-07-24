const openBtn = document.getElementById("openBtn");
const leftDoor = document.getElementById("leftDoor");
const rightDoor = document.getElementById("rightDoor");

const invitation = document.getElementById("invitation");
const music = document.getElementById("music");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

openBtn.addEventListener("click", () => {

leftDoor.style.transform =
"perspective(1200px) rotateY(-105deg)";

rightDoor.style.transform =
"perspective(1200px) rotateY(105deg)";

openBtn.disabled = true;

setTimeout(()=>{

document.querySelector(".hero").style.display="none";

invitation.style.display="block";

startCountdown();

if(music){
music.play().catch(()=>{});
}

window.scrollTo({
top:0,
behavior:"smooth"
});

},2200);

});

function startCountdown(){

const target =
new Date("2026-09-06T19:00:00").getTime();

function update(){

const now = new Date().getTime();

const diff = target-now;

if(diff<=0){

days.textContent="00";
hours.textContent="00";
minutes.textContent="00";
seconds.textContent="00";

return;

}

days.textContent=Math.floor(diff/86400000);

hours.textContent=Math.floor(
(diff%86400000)/3600000
);

minutes.textContent=Math.floor(
(diff%3600000)/60000
);

seconds.textContent=Math.floor(
(diff%60000)/1000
);

}

update();

setInterval(update,1000);

}