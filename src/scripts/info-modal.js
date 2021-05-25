const infoButton = document.querySelector(".description__info");
const modalWindow = document.querySelector(".description__infa-modal");
const buttonExit = document.querySelector(".infa-modal__exit");

infoButton.addEventListener("click", () => modalWindow.style.display = "block");
buttonExit.addEventListener("click", () => modalWindow.style.display = "none");


document.addEventListener("click", function(e){
    const target = e.target;    
    if(!target.classList.contains("description__infa-modal") || !target.classList.contains("description__info")){
        modalWindow.style.display = "none";
    }
}, true);





