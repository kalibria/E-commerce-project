export function createReviews ()    {
    
    const reviews = [
    {
        name:"Ann",
        photo:"",
        review:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat libero aliquid vero sequi, quis vitae nobis, quas odio neque soluta laboriosam obcaecati nam reiciendis, magni laudantium optio similique quo perspiciatis.",
    },
    {
        name:"Jone",
        photo:"",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, numquam.",

    },
    {
        name:"Kate",
        photo:"",
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt quae tempore."
    }
];

reviews.forEach(function(item){
    const conteinerReviews = document.querySelector(".reviews__conteiner");

    const divReview = document.createElement("div");
    divReview.className = "reviews__item";
    conteinerReviews.append(divReview);

    const name = document.createElement("p");
    name.className = "review__name";
    name.append(item["name"]);
    divReview.append(name);

    const photo = document.createElement("div");
    photo.className = "review__photo";
    photo.append(item["photo"]);
    divReview.append(photo);

    const review = document.createElement("p");
    review.className = "review__text";
    review.append(item["review"]);
    divReview.append(review);

})

}


createReviews();


