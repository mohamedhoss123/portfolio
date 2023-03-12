const content = document.querySelectorAll(".type-animation")
const observer = new IntersectionObserver((entires) => {
    entires.forEach((entiry) => {
        entiry.target.classList.toggle("type-animation",entiry.isIntersecting)
        entiry.target.classList.toggle("display-hidden",!entiry.isIntersecting)
        // entiry.target.classList.toggle("display-hidden")

    })
})
content.forEach((cont) => {
    observer.observe(cont)
})



