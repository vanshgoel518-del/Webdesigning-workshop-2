const intro = document.getElementById("intro");
const gallery = document.getElementById("gallery");
const cakePage = document.getElementById("cakePage");
const finalPage = document.getElementById("finalPage");

const gift = document.getElementById("gift");
const continueBtn = document.getElementById("continueBtn");
const wishBtn = document.getElementById("wishBtn");
const replay = document.getElementById("replay");

const slides = document.querySelectorAll(".slide");
const quote = document.getElementById("quote");
const progressBar = document.getElementById("progressBar");
const music = document.getElementById("music");

const quotes = [
"Every smile has a story ❤️",
"Beautiful memories never fade ✨",
"Life looks better when you're smiling 😊",
"Collect moments, not things 📸",
"Another chapter begins today 🎉",
"Keep dreaming big 🚀",
"Smile. Shine. Repeat 💖",
"The best is yet to come 🌍",
"Enjoy every little moment 🌸",
"Happy Birthday Vansh ❤️"
];

let current = 0;
let slideInterval;

// ---------- Gift ----------
gift.addEventListener("click",()=>{

intro.classList.remove("active");
gallery.classList.add("active");

music.play().catch(()=>{});

slideInterval=setInterval(changeSlide,3000);

});

// ---------- Slideshow ----------
function changeSlide(){

slides[current].classList.remove("active");

current=(current+1)%slides.length;

slides[current].classList.add("active");

quote.innerHTML=quotes[current];

progressBar.style.width=((current+1)/slides.length)*100+"%";

}

// ---------- Continue ----------
continueBtn.addEventListener("click",()=>{

clearInterval(slideInterval);

gallery.classList.remove("active");

cakePage.classList.add("active");

});

// ---------- Cake ----------
wishBtn.addEventListener("click",()=>{

wishBtn.innerHTML="🎉 Wish Made!";

createConfetti();

setTimeout(()=>{

cakePage.classList.remove("active");

finalPage.classList.add("active");

startFireworks();

},1800);

});

// ---------- Replay ----------
replay.addEventListener("click",()=>{

location.reload();

});

// ---------- Hearts ----------
setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","💜"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*3)+"s";

heart.style.fontSize=(20+Math.random()*20)+"px";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},300);

// ---------- Confetti ----------
function createConfetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.width="8px";

c.style.height="14px";

c.style.background=`hsl(${Math.random()*360},100%,60%)`;

c.style.transform=`rotate(${Math.random()*360}deg)`;

c.style.transition="4s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

c.style.transform=`translateX(${Math.random()*300-150}px) rotate(720deg)`;

},30);

setTimeout(()=>{

c.remove();

},4500);

}

}

// ---------- Fireworks ----------
function startFireworks(){

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let particles=[];

function burst(){

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height*0.6;

for(let i=0;i<80;i++){

particles.push({

x,

y,

dx:(Math.random()-0.5)*8,

dy:(Math.random()-0.5)*8,

life:100,

color:`hsl(${Math.random()*360},100%,60%)`

});

}

}

setInterval(burst,800);

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x+=p.dx;

p.y+=p.dy;

p.life--;

ctx.beginPath();

ctx.arc(p.x,p.y,3,0,Math.PI*2);

ctx.fillStyle=p.color;

ctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();

}