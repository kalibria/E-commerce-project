arrowRight.addEventListener("click" , () => {
    const firstImg = galleryImgs.firstElementChild;
    galleryImgs.append(firstImg);
});

arrowLeft.addEventListener("click", () => {
    const lastImg = galleryImgs.lastElementChild;
    galleryImgs.prepend(lastImg);
});

