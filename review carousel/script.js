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
    Text(step);
}

//const span=document.getElementById("span");

function Text(step)
{
    const span=document.querySelector("#span");
     if(step==0)
    span.textContent="img 0";
    else if(step==1)
    span.textContent="img 1";
    else if(step==2)
    span.textContent="img 2";
    else if(step==3)
    span.textContent="img 3";
    else if(step==4)
    span.textContent="img 4";
    else if(step==5)
    span.textContent="img 5";
    else if(step==6)
    span.textContent="img 6";
    else if(step==7)
    span.textContent="img 7";
    else if(step==8)
    span.textContent="img 8";
    else if(step==9)
    span.textContent="img 9";
    else
    span.textContent="img";
}
