window.onscroll = function () {
    scrollFunction() 
}
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("first-div").style.top = "0"
    }
    else {
        document.getElementById("first-div").style.top = "0px"
    }
}

const summaries = document.querySelectorAll('summary');
summaries.forEach((summary) => {
    summary.addEventListener('click', closeOpenedDetails);
});

function closeOpenedDetails(){
    summaries.forEach((summary) => {
        let detail = summary.parentNode;
        if(detail != this.parentNode){
            detail.removeAttribute('open')
        }
    })
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("landing");
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000)
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

const card = document.querySelector(".card");
card.addEventListener("click", function(){
    if(card.classList.contains("flipped")){
        card.classList.remove("flipped");
    }
    else {
        card.classList.add("flipped");
    }
})