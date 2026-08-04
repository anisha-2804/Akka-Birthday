// =================================
// SCREEN CHANGE SYSTEM
// =================================

function nextScreen(id){

    const current = document.querySelector(".screen.active");

    const next = document.getElementById(id);


    if(current){

        current.classList.remove("active");

    }


    setTimeout(()=>{

        next.classList.add("active");

    },300);


    createHearts();

}





// =================================
// MUSIC SYSTEM
// =================================

const music = document.getElementById("music");


let musicStarted = false;



document.addEventListener("click",()=>{


    if(!musicStarted){

        music.play();

        musicStarted=true;

    }


},{once:true});





// =================================
// FLOATING HEARTS
// =================================


function createHearts(){


for(let i=0;i<15;i++){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";


heart.style.bottom="-20px";


heart.style.left=Math.random()*100+"vw";


heart.style.fontSize=

(20+Math.random()*30)+"px";



heart.style.animation=

"heartMove 5s linear forwards";



heart.style.zIndex="20";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},5000);



}


}




// Heart Animation CSS add dynamically

const heartStyle=document.createElement("style");


heartStyle.innerHTML=`

@keyframes heartMove{

0%{

transform:translateY(0);

opacity:1;

}


100%{

transform:translateY(-110vh);

opacity:0;

}


}

`;


document.head.appendChild(heartStyle);





// =================================
// GIFT OPEN
// =================================


function openGift(){


const gift=document.querySelector(".giftBox");


gift.classList.add("open");



document.getElementById("giftMessage").innerHTML=

"✨ You are the most special person in my life Akka ❤️";



confetti();



}




// =================================
// CAKE CELEBRATION
// =================================


function celebrate(){


const cake=document.querySelector(".cake");



cake.innerHTML="🎂✨";


cake.style.transform="scale(1.4)";



confetti();


fireworkBurst();



setTimeout(()=>{


cake.style.transform="scale(1)";


},1000);



}





// =================================
// CONFETTI
// =================================


function confetti(){



for(let i=0;i<120;i++){



let piece=document.createElement("div");



piece.style.position="fixed";


piece.style.top="-20px";


piece.style.left=

Math.random()*100+"vw";



piece.style.width="10px";


piece.style.height="18px";



piece.style.background=

`hsl(${Math.random()*360},100%,50%)`;



piece.style.zIndex="9999";



piece.style.transform=

`rotate(${Math.random()*360}deg)`;



piece.style.animation=

"fall 3s linear forwards";



document.body.appendChild(piece);



setTimeout(()=>{

piece.remove();

},3000);



}



}



const confettiStyle=document.createElement("style");


confettiStyle.innerHTML=`

@keyframes fall{


0%{

transform:translateY(0) rotate(0);

}


100%{

transform:translateY(100vh) rotate(720deg);

}


}

`;

document.head.appendChild(confettiStyle);





// =================================
// FIREWORK SYSTEM
// =================================


const canvas=

document.getElementById("fireworks");


const ctx=

canvas.getContext("2d");



canvas.width=

window.innerWidth;


canvas.height=

window.innerHeight;



window.addEventListener("resize",()=>{


canvas.width=window.innerWidth;


canvas.height=window.innerHeight;


});



let particles=[];



class Particle{


constructor(x,y,color){


this.x=x;

this.y=y;

this.color=color;


this.size=3;


this.speedX=

(Math.random()-0.5)*8;


this.speedY=

(Math.random()-0.5)*8;


this.life=80;


}



update(){


this.x+=this.speedX;


this.y+=this.speedY;


this.life--;


}



draw(){


ctx.beginPath();


ctx.arc(

this.x,

this.y,

this.size,

0,

Math.PI*2

);



ctx.fillStyle=this.color;


ctx.fill();



}



}




function fireworkBurst(){



let x=Math.random()*canvas.width;


let y=Math.random()*canvas.height/2;



for(let i=0;i<80;i++){


particles.push(

new Particle(

x,

y,

`hsl(${Math.random()*360},100%,60%)`

)

);


}



}



function animateFireworks(){


ctx.clearRect(

0,

0,

canvas.width,

canvas.height

);



particles.forEach((p,index)=>{


p.update();


p.draw();



if(p.life<=0){

particles.splice(index,1);

}



});



requestAnimationFrame(animateFireworks);


}



animateFireworks();




setInterval(()=>{


fireworkBurst();


},2500);





// =================================
// AUTO HEART EFFECT
// =================================


setInterval(()=>{


createHearts();


},4000);