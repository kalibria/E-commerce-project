export function clearAllClasses (element) {
    const classes = element.classList;
    const arrayOfClasses = Array.from(classes);
    arrayOfClasses.forEach(function (item) {
        element.classList.remove(item)
    })
}