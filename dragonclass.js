// Get all content sections
const contentSections = document.querySelectorAll('.content');

// Iterate over each content section
contentSections.forEach((contentSection) => {
    // Find elements within the current content section
    const slides = contentSection.querySelectorAll('.slide');
    const prevBtn = contentSection.querySelector('.prev');
    const nextBtn = contentSection.querySelector('.next');
    const slider = contentSection.querySelector('.slider');
    let slideIndex = 0;

    // Add event listeners to previous and next buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Function to navigate to the previous slide
    function prevSlide() {
        slides[slideIndex].classList.remove('active');
        slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
        slides[slideIndex].classList.add('active');
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    // Function to navigate to the next slide
    function nextSlide() {
        slides[slideIndex].classList.remove('active');
        slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
        slides[slideIndex].classList.add('active');
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }
});
