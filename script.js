const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval;

// Function to update the active slide and dot
function updateSlider(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Show the next slide
function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider(currentIndex);
}

// Restart the auto-slide timer
function resetSlideInterval() {
  clearInterval(slideInterval);
  slideInterval = setInterval(showNextSlide, 3000); // 3 seconds for auto-slide
}

// Attach event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateSlider(currentIndex);
    resetSlideInterval();
  });
});

// Start the auto-slide functionality
slideInterval = setInterval(showNextSlide, 3000);
