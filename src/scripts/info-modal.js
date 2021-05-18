const infoButton = document.querySelector(".description__info");

function callModal () {
    const modalWindow = document.querySelector(".description__infa-modal");
    modalWindow.style.display = "block";
    console.log("modal",modalWindow);

    modalWindow.addEventListener("mouseout",() => modalWindow.style.display = "none")
    
}



infoButton.addEventListener("click", callModal);
//infoButton.removeEventListener("click", callModal);