const currentvalue=document.querySelector("#currentvalue");
const button1=document.querySelector(".button");
button1.addEventListener("click",(e)=>{
    if(e.target.classList.contains("desc")){
        currentvalue.textContent-=1;
        }
        if(e.target.classList.contains("reset")){
            currentvalue.textContent=0;
            currentvalue.style.color="green";
        }
        if(e.target.classList.contains("incr")){
            currentvalue.style.color="blue";
            currentvalue.textContent=parseInt(currentvalue.textContent) + 1;
        }
        if(currentvalue.textContent<0)
        {
            currentvalue.style.color="red";
        }
        if(currentvalue.textContent>0)
        {
            currentvalue.style.color="orange";
        }
        if(currentvalue.textContent==0)
        {
            currentvalue.style.color="green";
        }

});