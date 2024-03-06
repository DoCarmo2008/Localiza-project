var currentIndex = 0;
var totalSlides = document.querySelectorAll('.carousel-item').length;
var track = document.getElementById('carousel-track');

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    var newTransformValue = -currentIndex * 100 + '%';
    track.style.transform = 'translateX(' + newTransformValue + ')';
    console.log('Current Index:', currentIndex);
}

setInterval(function () {
    nextSlide();
    console.log('Automatic Slide Change');
}, 5000);


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("carro");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}