// =================================
// SCREEN CHANGE
// =================================

function nextScreen(id){

    const current = document.querySelector(".screen.active");

    const next = document.getElementById(id);


    if(current){

        current.classList.remove("active");

    }


    setTimeout(()=>{

        next.classList.add("active");

        createHearts();

    },400);


}



// =================================
// MUSIC START
// =================================

const music = document.getElementById("music");

let musicPlayed = false;


document.addEventListener("click",()=>{


    if(!musicPlayed){

        music.play();

        musicPlayed=true;

    }


},{once:true});




// =================================
// FLOATING HEARTS
// =================================


function createHearts(){


for(let i=0;i<20;i++){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";


heart.style.fontSize=

(20+Math.random()*35)+"px";


heart.style.zIndex="30";


heart.style.animation=

"heartFloat 5s linear forwards";



document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},5000);


}


}




const heartCSS=document.createElement("style");


heartCSS.innerHTML=`

@keyframes heartFloat{


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

document.head.appendChild(heartCSS);





// =================================
// GIFT OPEN
// =================================


function openGift(){


const gift=document.querySelector(".giftBox");


gift.classList.add("open");



document.getElementById("giftMessage").innerHTML=

`
✨ Surprise! ✨

You are not just my Akka...

You are always my betterhalf and forever support ❤️
`;



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


for(let i=0;i<150;i++){



let box=document.createElement("div");



box.style.position="fixed";


box.style.top="-20px";


box.style.left=Math.random()*100+"vw";


box.style.width="10px";


box.style.height="18px";



box.style.background=

`hsl(${Math.random()*360},100%,50%)`;



box.style.zIndex="9999";


box.style.animation=

"confettiFall 3s linear forwards";



document.body.appendChild(box);



setTimeout(()=>{

box.remove();

},3000);



}


}



const confettiCSS=document.createElement("style");


confettiCSS.innerHTML=`

@keyframes confettiFall{


from{

transform:translateY(0) rotate(0);

}


to{

transform:translateY(100vh) rotate(720deg);

}


}

`;

document.head.appendChild(confettiCSS);





// =================================
// FIREWORKS
// =================================


const canvas=document.getElementById("fireworks");


const ctx=canvas.getContext("2d");



canvas.width=window.innerWidth;

canvas.height=window.innerHeight;



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


this.life=90;


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



for(let i=0;i<100;i++){


particles.push(

new Particle(

x,

y,

`hsl(${Math.random()*360},100%,60%)`

)

);


}


}





function animate(){


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



requestAnimationFrame(animate);


}



animate();





setInterval(()=>{


fireworkBurst();


},3000);






// =================================
// FINAL SCREEN EFFECT
// =================================


const finalScreen=document.getElementById("final");


const observer=new MutationObserver(()=>{


if(finalScreen.classList.contains("active")){


confetti();


fireworkBurst();


createHearts();


}


});


observer.observe(finalScreen,{

attributes:true,

attributeFilter:["class"]

});





// =================================
// AUTO HEARTS
// =================================


setInterval(()=>{

createHearts();

},5000);