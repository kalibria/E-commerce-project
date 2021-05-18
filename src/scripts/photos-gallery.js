//carousel for block 1

const arrowRightFromGal1 = document.querySelector(".arrow-right-1");
const arrowLeftFromGal1 = document.querySelector(".arrow-left-1");


arrowRightFromGal1.addEventListener("click" , () => {
    let galleryImgs = document.getElementById("gallery1__items");
    const firstImg = galleryImgs.firstElementChild;
    galleryImgs.append(firstImg);
    
});

arrowLeftFromGal1.addEventListener("click", () => {
    let galleryImgs = document.getElementById("gallery1__items");
    const lastImg = galleryImgs.lastElementChild;
    galleryImgs.prepend(lastImg);
});

const photosFromGallery1 = document.querySelectorAll(".gallery-1 > img");
photosFromGallery1.forEach(function(el){
    el.addEventListener("click", (event)=> {
    const bigPhoto = document.getElementById("photo-1");
   
    let copyImg = event.currentTarget.cloneNode(true);

    photosFromGallery1.forEach(function(el){
        if(el.style.border == "2px solid red"){
        el.style.border = "none";
        }
    });

    event.currentTarget.style.border = "2px solid red";
    
    
    
    if(bigPhoto.firstElementChild){
        bigPhoto.firstElementChild.remove();
        }
    bigPhoto.append(copyImg);  
    })
})

//carousel for block 2

const arrowRightFromGal2 = document.querySelector(".arrow-right-2");
const arrowLeftFromGal2 = document.querySelector(".arrow-left-2");


arrowRightFromGal2.addEventListener("click" , () => {
    let galleryImgs = document.getElementById("gallery2__items");
    const firstImg = galleryImgs.firstElementChild;
    galleryImgs.append(firstImg);
});

arrowLeftFromGal2.addEventListener("click", () => {
    let galleryImgs = document.getElementById("gallery2__items");
    const lastImg = galleryImgs.lastElementChild;
    galleryImgs.prepend(lastImg);
});


const photosFromGallery2 = document.querySelectorAll(".gallery-2 > img");
photosFromGallery2.forEach(function(el){
    el.addEventListener("click", (event)=> {
    const bigPhoto = document.getElementById("photo-2");
    let copyImg = event.currentTarget.cloneNode(true);
    console.log("clickedIm",copyImg);

    photosFromGallery2.forEach(function(el){
        if(el.style.border == "2px solid red"){
        el.style.border = "none";
        }
    });

    event.currentTarget.style.border = "2px solid red";

    if(bigPhoto.firstElementChild){
        bigPhoto.firstElementChild.remove();
        }
    bigPhoto.append(copyImg);  
    })
})

//carousel for block 3

const arrowRightFromGal3 = document.querySelector(".arrow-right-3");
const arrowLeftFromGal3 = document.querySelector(".arrow-left-3");


arrowRightFromGal3.addEventListener("click" , () => {
    let galleryImgs = document.getElementById("gallery3__items");
    const firstImg = galleryImgs.firstElementChild;
    galleryImgs.append(firstImg);
});

arrowLeftFromGal3.addEventListener("click", () => {
    let galleryImgs = document.getElementById("gallery3__items");
    const lastImg = galleryImgs.lastElementChild;
    galleryImgs.prepend(lastImg);
});


const photosFromGallery3 = document.querySelectorAll(".gallery-3 > img");
photosFromGallery3.forEach(function(el){
    el.addEventListener("click", (event)=> {
    const bigPhoto = document.getElementById("photo-3");
    let copyImg = event.currentTarget.cloneNode(true);
    

    photosFromGallery3.forEach(function(el){
        if(el.style.border == "2px solid red"){
        el.style.border = "none";
        }
    });

    event.currentTarget.style.border = "2px solid red";

    if(bigPhoto.firstElementChild){
        bigPhoto.firstElementChild.remove();
        }
    bigPhoto.append(copyImg);  
    })
})






