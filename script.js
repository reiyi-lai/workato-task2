const slides = document.querySelectorAll('.slide');
const nextButtons = document.querySelectorAll('.next');
const prevButtons = document.querySelectorAll('.prev');

// const helpIcon = document.querySelector('help-icon');
const arrowUp = document.querySelector('arrow-up');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-btn');
const testCaseInput = document.querySelector('input[name="navigation_items"][id="#test_cases"]');

let currentSlide = 0;
let isPopupVisible = false;

// Display specified slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Make 'next' and 'prev' buttons dynamic
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

// Hide popup when 'close' button is clicked
if (closeButton) {
    closeButton.addEventListener('click', () => {
        if (popup) {
            popup.style.display = 'none';
        }
    });
}

// Show popup when 'Test cases' is clicked
if (testCaseInput) {
    testCaseInput.addEventListener('click', () => {
        if (popup) {
            popup.style.display = 'flex';
        }
    });
}


function positionPopup() {
    const rect = helpIcon.getBoundingClientRect();
    popup.style.top = `${rect.bottom + window.scrollY}px`;
    popup.style.left = `${rect.left + window.scrollX}px`;
    arrowUp.style.left = `${rect.width / 2}px`;
}

if (helpIcon) {
    helpIcon.addEventListener('click', () => {
      isPopupVisible = !isPopupVisible;
      if (isPopupVisible) {
        popup.style.display = 'flex';
        positionPopup();
      } else {
        popup.style.display = 'none';
      }
   });
}
  
  
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


const helpIcon = document.getElementById('help-icon');
const popupid = document.getElementById('popup');

// Get the position of the help icon
const iconRect = helpIcon.getBoundingClientRect();

// Set the position of the popup based on the position of the help icon
popupid.style.left = `${iconRect.left + window.scrollX}px`;
popupid.style.top = `${iconRect.bottom + window.scrollY + 10}px`;