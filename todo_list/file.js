const todoform=document.querySelector(".todo-list");
const todolist=document.querySelector(".todolist");
const input=document.querySelector('.todo-list input[type="text"]');
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newtodotext=input.value;
    const newli=document.createElement("li");
    const newliinnerhtml='<span class="text" id="text1"></span><div class="todo-button"><button class="todo-button done btn">Done</button><button class="todo-button remove btn">Remove</button></div>';

    newli.innerHTML=newliinnerhtml;
    todolist.append(newli);
    const spanElement = newli.querySelector('#text1');
    spanElement.textContent = newtodotext;
    input.value=""; 
});

todolist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
    const targetli=e.target.parentNode.parentNode;
        targetli.remove();
    }
    if(e.target.classList.contains("done")){
    const targetli=e.target.parentNode.previousElementSibling;
        targetli.style.textDecoration="line-through";
    }
});