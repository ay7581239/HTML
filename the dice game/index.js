const a=Math.floor(Math.random()*6)+1;
const b=Math.floor(Math.random()*6)+1;
const img1="dice"+a+".png";
const img2="dice"+b+".png";
function onloading(){
    document.getElementsByClassName("img1")[0].setAttribute("src",img1);
document.getElementsByClassName("img2")[0].setAttribute("src",img2);
if(a>b)
{
    document.querySelector("h1").textContent="🚩 Player 1 Wins";
}
else if(b>a)
{
        document.querySelector("h1").textContent="Player 2 Wins 🚩";
}
else{
    document.querySelector("h1").textContent="Draw!";
}
}
