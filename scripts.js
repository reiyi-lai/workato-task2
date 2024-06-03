document.addEventListener('DOMContentLoaded', function() {
  const helpIcon = document.getElementById('help-icon');
  const popup = document.getElementById('popup');
  const arrowUp = document.querySelector('.arrow-up');
  const closeButton = document.querySelector('.close-btn');
  const nextButtons = document.querySelectorAll('.next');
  const prevButtons = document.querySelectorAll('.prev');
  const slides = document.querySelectorAll('.slide');
  const progressDots = document.querySelectorAll('.progress-dot');
  let currentSlide = 0;
  let isPopupVisible = false;

  function positionPopup() {
    const rect = helpIcon.getBoundingClientRect();
    popup.style.top = `${rect.bottom + window.scrollY + 10}px`; // Added offset to place the arrow at the correct position
    popup.style.left = `${rect.left + window.scrollX - (popup.offsetWidth / 2) + (rect.width / 2)}px`;
    arrowUp.style.left = '50%'; // Centering the arrow
  }

  function togglePopup() {
    isPopupVisible = !isPopupVisible;
    if (isPopupVisible) {
      popup.style.display = 'block';
      positionPopup();
    } else {
      popup.style.display = 'none';
    }
  }

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
      progressDots[i].classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  helpIcon.addEventListener('click', togglePopup);
  closeButton.addEventListener('click', togglePopup);

  nextButtons.forEach(button => {
    button.addEventListener('click', nextSlide);
  });

  prevButtons.forEach(button => {
    button.addEventListener('click', prevSlide);
  });

  window.addEventListener('resize', () => {
    if (isPopupVisible) {
      positionPopup();
    }
  });

  window.addEventListener('scroll', () => {
    if (isPopupVisible) {
      positionPopup();
    }
  });

  // Initial setup
  showSlide(currentSlide);
  positionPopup();
});
