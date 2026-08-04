// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2500);
});


// ==========================
// MUSIC
// ==========================

const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");

playBtn.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        playBtn.innerHTML = "Pause Music ⏸️";

    } else {

        music.pause();

        playBtn.innerHTML = "Play Music 🎵";

    }

});


// ==========================
// TYPING EFFECT
// ==========================

const text =
"Happy Birthday Abisha ❤️ Wishing you endless happiness, success, love and beautiful memories. Thank you for always being the best sister in my life.";

let index = 0;

function typing(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,50);

    }

}

typing();


// ==========================
// FLOATING HEARTS
// ==========================

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*40)+"px";

    heart.style.animationDuration=(4+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },8000);

}

setInterval(createHeart,400);


// ==========================
// CAKE BUTTON
// ==========================

const cake=document.querySelector(".cake");

document.getElementById("cakeBtn").onclick=()=>{

cake.style.transform="scale(1.3) rotate(10deg)";

cake.innerHTML="🎂✨";

confetti();

setTimeout(()=>{

cake.style.transform="scale(1)";

},800);

}


// ==========================
// CONFETTI
// ==========================

function confetti(){

for(let i=0;i<150;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.width="8px";

c.style.height="15px";

c.style.background=`hsl(${Math.random()*360},100%,50%)`;

c.style.transform=`rotate(${Math.random()*360}deg)`;

c.style.zIndex="9999";

document.body.appendChild(c);

let y=0;

let x=(Math.random()-0.5)*4;

const fall=setInterval(()=>{

y+=6;

c.style.top=y+"px";

c.style.left=(parseFloat(c.style.left)+x)+"px";

if(y>window.innerHeight){

clearInterval(fall);

c.remove();

}

},20);

}

}


// ==========================
// SIMPLE FIREWORKS
// ==========================

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

class Particle{

constructor(x,y,color){

this.x=x;

this.y=y;

this.radius=2+Math.random()*2;

this.color=color;

this.dx=(Math.random()-0.5)*8;

this.dy=(Math.random()-0.5)*8;

this.life=80;

}

draw(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

ctx.fillStyle=this.color;

ctx.fill();

}

update(){

this.x+=this.dx;

this.y+=this.dy;

this.dy+=0.05;

this.life--;

this.draw();

}

}

let particles=[];

function createFirework(){

const x=Math.random()*canvas.width;

const y=Math.random()*canvas.height/2;

const color=`hsl(${Math.random()*360},100%,60%)`;

for(let i=0;i<80;i++){

particles.push(new Particle(x,y,color));

}

}

setInterval(createFirework,2500);

function animate(){

requestAnimationFrame(animate);

ctx.clearRect(0,0,canvas.width,canvas.height);

particles=particles.filter(p=>p.life>0);

particles.forEach(p=>p.update());

}

animate();


// ==========================
// GALLERY ANIMATION
// ==========================

const images=document.querySelectorAll(".slider img");

images.forEach((img)=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08) rotate(2deg)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


// ==========================
// SCROLL ANIMATION
// ==========================

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(80px)";

sec.style.transition="1s";

observer.observe(sec);

});


// ==========================
// SURPRISE MESSAGE
// ==========================

setTimeout(()=>{

// alert("🎉 Happy Birthday Dear Akka ❤️\n\nMay your life be filled with happiness, love and success! 🎂✨");

},5000);