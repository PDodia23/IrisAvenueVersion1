// Mobile Navigation

const navToggle = document.querySelector(".mobile-nav-toggle");
const mobileNav = document.querySelector(".mobile-navigation");
const closeMenu = document.querySelector(".closeIcon");
const body = document.querySelector("body");

navToggle.addEventListener("click", () => {
  mobileNav.style.right = "0%";
  body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  mobileNav.style.right = "100%";
  body.style.overflow = "scroll";
});

// Form

function thumbnailImg(smallImg) {
  const fullImg = document.getElementById("fullImg");
  fullImg.src = smallImg.src;
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot-slider");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
