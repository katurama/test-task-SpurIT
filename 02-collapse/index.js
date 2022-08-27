const button = document.querySelector(".collapsible__button");
const hidden = document.querySelector(".collapsible__action--hidden");
const visible = document.querySelector(".collapsible__action--visible");
const container = document.querySelector(".collapsible__content")
const text = document.querySelector("p");

hidden.style.display = "none";
button.addEventListener("click", ()=>{
  if(hidden.style.display === "none"){
    const animation = text.animate([{ transform: 'translateY(0)'}, { transform: `translateY(-${text.scrollHeight}px)`, maxHeight: 0, overflow: "hidden"}], {
      duration: 300,
      easing: 'ease-out',
    });
    
    animation.addEventListener("finish",  () => {
      text.style.maxHeight= 0;
      text.style.overflow= "hidden"
    });
     visible.style.display="none";
     hidden.style.display = "block";
  } else {
     const animation = text.animate([{ transform: `translateY(-${text.scrollHeight}px)`, maxHeight: 0}, { transform: 'translateY(0)', maxHeight: `${container.scrollHeight}px`, overflow: "visible"}], {
      duration:300,
      easing: 'ease-out',
    });
    animation.addEventListener("finish",  () => {
      text.style.removeProperty("max-height");
    });  
  hidden.style.display="none";
  visible.style.display="block";
  }
})
