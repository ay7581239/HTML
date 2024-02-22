const btn=document.querySelector(".btn");
const currentcolor=document.querySelector("#colorcode");
const body=document.body;
btn.addEventListener("click",(e)=>{
const red=Math.floor(Math.random()*256);
const green=Math.floor(Math.random()*256);
const blue=Math.floor(Math.random()*256);
const randomcolor=`rgb(${red},${green},${blue})`;
console.log(randomcolor);
body.style.backgroundColor=randomcolor;
currentcolor.textContent=randomcolor;
});