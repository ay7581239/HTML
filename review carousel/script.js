let step=0;
const img=document.querySelector(".img");
const button=document.querySelector(".button");
Show(step);
button.addEventListener("click",(e)=>{
    if(e.target.classList.contains("pre"))
    {
     step-=1;
     Show(step);  
    }
    if(e.target.classList.contains("next"))
    {
        step=parseInt(step)+1;
        Show(step);
    }
});
function Show(steps){
    let n=document.querySelectorAll(".img");
    if(step>=n.length)
    {
        step=0;
    }
    if(step<0)
    {
        step=n.length-1;
    }
    for(let i=0;i<n.length;i++)
    {
        n[i].style.display="none";
    }
    n[step].style.display="block";
}