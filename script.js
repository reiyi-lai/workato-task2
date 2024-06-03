document.addEventListener('DOMContentLoaded', function () {
    const helpIcon = document.getElementById('help-icon');
    const popup = document.getElementById('popup');
    const arrowUp = document.querySelector('.arrow-up');
    const closeButton = document.querySelector('.close-btn');
    const slides = document.querySelectorAll('.slide');
    const nextButtons = document.querySelectorAll('.next');
    const prevButtons = document.querySelectorAll('.prev');
  
    let currentSlide = 0;
    let isPopupVisible = false;
  
    // Function to position the popup below the help icon
    function positionPopup() {
      const iconRect = helpIcon.getBoundingClientRect();
      const popupWidth = popup.offsetWidth;
      popup.style.left = `${iconRect.left + iconRect.width / 2 - popupWidth / 2}px`;
      popup.style.top = `${iconRect.bottom}px`;
      arrowUp.style.left = `${popupWidth / 2}px`;
    }
  
    // Function to show a specific slide
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }
  
    // Event listener for the help icon click
    helpIcon.addEventListener('click', () => {
      isPopupVisible = !isPopupVisible;
      if (isPopupVisible) {
        popup.style.display = 'block';
        positionPopup();
      } else {
        popup.style.display = 'none';
      }
    });
  
    // Event listener for the close button click
    closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  
    // Event listeners for the next and previous buttons
    nextButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
          currentSlide++;
          showSlide(currentSlide);
        }
      });
    });
  
    prevButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (currentSlide > 0) {
          currentSlide--;
          showSlide(currentSlide);
        }
      });
    });
  
    // Event listener for window resize
    window.addEventListener('resize', () => {
      if (isPopupVisible) {
        positionPopup();
      }
    });
  
    // Event listener for window scroll
    window.addEventListener('scroll', () => {
      if (isPopupVisible) {
        positionPopup();
      }
    });
  });
  