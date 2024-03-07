const noOfButton=document.querySelectorAll(".drum").length;
for(let i=0;i<noOfButton;i++)
{
    const button=document.querySelectorAll(".drum")[i];
    button.addEventListener("click",e=>{
        const char=e.currentTarget.textContent;
        producesound(char);
       
    }
    );
}
document.addEventListener("keypress",e=>{
producesound(e.key);
});
function producesound(char){
   switch (char) {
      case 'a':
         var audio=new Audio('sounds/tom-2.mp3');
              audio.play();
      break;
      case 'w':
         var audio=new Audio('sounds/tom-1.mp3');
              audio.play();
      break;
      case 's':
         var audio=new Audio('sounds/tom-3.mp3');
              audio.play();
      break;
      case 'd':
         var audio=new Audio('sounds/tom-4.mp3');
              audio.play();
      break;
      case 'j':
         var audio=new Audio('sounds/snare.mp3');
              audio.play();
      break;
      case 'k':
         var audio=new Audio('sounds/crash.mp3');
              audio.play();
      break;
      case 'l':
         var audio=new Audio('sounds/kick-bass.mp3');
              audio.play();
      break;
      default:
          break;
     }
}