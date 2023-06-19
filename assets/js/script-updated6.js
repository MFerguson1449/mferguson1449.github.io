/*    Mobile Navbar Toggle    */
var navMenu = document.getElementById("navMenu");
var menuBtn = document.getElementById("menuBtn");
var navOpen = 0;
menuBtn.addEventListener("click", () => {
  if (navOpen === 0) {
    //alert("True");
    navMenu.style.display = "flex";
    navMenu.style.animationName = "slide_show";
    menuBtn.classList.add("open");
    navOpen = 1;
  } else {
    //alert("False");
    navMenu.style.display = "flex";
    navMenu.style.animationName = "slide_hide";
    menuBtn.classList.remove("open");
    navOpen = 0;
  }
});

/* SubMenu Navbar */
const subMenuMobile = document.getElementById("subMenuMobile");
const mediaQuery = window.matchMedia("(max-width: 991px)");
var subMenuOpen = 0;
const openSubMenu = () => {
  if (mediaQuery.matches) {
    //alert('Media Query Matched!');
    if (subMenuOpen === 0) {
      subMenuMobile.style.display = "block";
      subMenuOpen = 1;
    } else {
      subMenuMobile.style.display = "none";
      subMenuOpen = 0;
    }
  }
};
/* Calling SubMenu Navbar */
const dropDown = document.getElementById("dropdown_submenu");
dropDown.addEventListener("click", openSubMenu);
/* Form Hide */
const formSec = document.getElementById("banner_form");
const hideForm = () => {
  formSec.style.display = "none";
};

/* Testimonial Slider */
var TestimonialslideIndex = 1;
showSlides(TestimonialslideIndex);
function plusSlides(n) {
  showSlides((TestimonialslideIndex += n));
}
function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  if (n > slides.length) {
    TestimonialslideIndex = 1;
  }
  if (n < 1) {
    TestimonialslideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[TestimonialslideIndex - 1].style.display = "flex";
}

/* Calling Slider Automatic */
setInterval(function () {
  plusSlidesBrand(1);
  plusSlides(1);
}, 3000);
