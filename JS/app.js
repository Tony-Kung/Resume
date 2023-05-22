const text = document.querySelectorAll(".thepaths");

/*console.log(text[0].getTotalLength());*/


for (let i=0; i<text.length;i++){
    console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
} 


/*動畫完成後消失掉*/

const lastword = document.querySelector("#seven");
/*console.log(lastword);*/
const animation =document.querySelector("div.animation");
lastword.addEventListener("animationend", () =>{
    animation.style="transition: all 1.5s ease; opacity:0; pointer-events:none;";
})