export function getYear(){
    const spanYear = document.querySelector(".footer__year");
    const date = new Date ();    
    spanYear.append(date.getFullYear());
}

getYear()