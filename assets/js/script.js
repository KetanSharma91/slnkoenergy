let menuIcon = document.querySelector('.menu');
let navbar = document.querySelector('nav');

menuIcon.onclick = () => {
  navbar.classList.toggle('show');
};


document.querySelectorAll('.navlist > .navlista').forEach(link => {
  link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent page reload

      // Toggle 'show' class on the next sibling element (the <ul> submenu)
      const dropdownMenu = link.nextElementSibling;
      dropdownMenu.classList.toggle('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// //go-top opacity
// const box = document.querySelector('.go-top');
// const homeSection = document.getElementsByClassName('home');
// console.log('v1');

// const observerhome = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     console.log('v');
//     if (entry.isIntersecting) {
//       // If the section is the home section, hide the box
//       if (entry.target.className === 'home') {
//         console.log('0');
//         box.style.opacity = '0'; // Hide the box
//       } else {
//         console.log('1');
//         box.style.opacity = '1'; // Show the box in other sections
//       }
//     }
//   });
// }, { threshold: 0.1 }); // Adjust threshold as needed


document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
    loop: true, // Enable looping
    speed: 500,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 1, // Single view on smaller screens
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});


function showTab(tabIndex) {
  // Hide all tab entries
  const tabEntries = document.querySelectorAll('.tabs-entry');
  tabEntries.forEach((entry) => {
      entry.style.display = 'none';
  });

  // Remove active class from all tab switches
  const tabSwitches = document.querySelectorAll('.tabs-switch');
  tabSwitches.forEach((tab) => {
      tab.classList.remove('active');
  });

  // Show the selected tab entry
  document.getElementById(`tab-${tabIndex}`).style.display = 'block';

  // Add active class to the selected tab switch
  tabSwitches[tabIndex - 1].classList.add('active');
}
