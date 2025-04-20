// NEWS CAROUSEL

const slider = document.querySelector(".slider")
const slides = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

let slideIndex = 0
slides[slideIndex].classList.add('active')
prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)

function prevSlide(){
    slides[slideIndex].classList.remove('active')
    slideIndex = (slideIndex === 0) ? slides.length -1 : slideIndex -1
    slides[slideIndex].classList.add('active')
    slider.style.transform = `translateX(-${slideIndex * 100}%)`
}

function nextSlide(){
    slides[slideIndex].classList.remove('active')
    slideIndex = (slideIndex ===  slides.length -1 ) ? 0 : slideIndex +1
    slides[slideIndex].classList.add('active')
    slider.style.transform = `translateX(-${slideIndex * 100}%)`
}


// Auto Sliding
function timer(){
    nextSlide();
}

function autoSliding(){
    deleteInterval = setInterval(timer, 3000);
}
autoSliding();

// Stop auto sliding when mouse is over the next and prev button
prevBtn.addEventListener('mouseover', function(){
	clearInterval(deleteInterval);
});

nextBtn.addEventListener('mouseover', function(){
	clearInterval(deleteInterval);
});

// Resume sliding when mouse is out
prevBtn.addEventListener('mouseout', autoSliding);
nextBtn.addEventListener('mouseout', autoSliding);

// --------------------------------------------------------------------------------------------------
// ANIMATION

// // animasi 1
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
//         }else{
//             entry.target.classList.remove('show');
//         }
//     });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

// // animasi 2

// window.addEventListener('scroll', reveal);

// function reveal(){
//     var reveals = document.querySelectorAll('.reveal');

//     for(var i=0;i<reveals.length;i++){
//         var windowHeight = window.innerHeight;
//         var revealTop = reveals[i].getBoundingClientRect().top;
//         var revealPoint = 150;

//         if(revealTop < windowHeight - revealPoint){
//             reveals[i].classList.add('active');
//         }
//         else{
//             reveals[i].classList.add('active');
//         }
//     }
// }