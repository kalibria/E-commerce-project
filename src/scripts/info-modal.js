const infoButton = document.querySelector(".description__info");
const modalWindow = document.querySelector(".description__info-modal");
const buttonExit = document.querySelector(".info-modal__exit");

infoButton.addEventListener("click", () => modalWindow.style.display = "block");
buttonExit.addEventListener("click", () => modalWindow.style.display = "none");


document.addEventListener("click", function(e){
    const target = e.target.closest(".description__info-modal");   
        if(
        target == null && modalWindow.style.display == "block"
        
    ){
        modalWindow.style.display = "none";
    }
}, true);





