/*    Mobile Navbar Toggle    */
let navMenu = document.getElementById("navMenu");
let menuBtn = document.getElementById("menuBtn");
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
let subMenuOpen = 0;
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

let closeForm = document.getElementById("form-close");
closeForm.addEventListener("click", hideForm);

/* Brand Slider */
let BrandSlideIndex = 1;
showSlidesBrand(BrandSlideIndex);
function plusSlidesBrand(n) {
  showSlidesBrand((BrandSlideIndex += n));
}
function showSlidesBrand(n) {
  let i;
  let slides = document.getElementsByClassName("brandSlides");
  if (n > slides.length) {
    BrandSlideIndex = 1;
  }
  if (n < 1) {
    BrandSlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[BrandSlideIndex - 1].style.display = "flex";
}
const brandPrev = document.getElementById("brandPrev");
brandPrev.addEventListener("click", () => {
  plusSlidesBrand(-1);
});
const brandNext = document.getElementById("brandNext");
brandNext.addEventListener("click", () => {
  plusSlidesBrand(1);
});

/* Testimonial Slider */
let TestimonialslideIndex = 1;
showSlides(TestimonialslideIndex);
function plusSlides(n) {
  showSlides((TestimonialslideIndex += n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
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
const testiPrev = document.getElementById("testiPrev");
testiPrev.addEventListener("click", () => {
  plusSlides(-1);
});
const testiNext = document.getElementById("testiNext");
testiNext.addEventListener("click", () => {
  plusSlides(1);
});
/* Calling Slider Automatic */
setInterval(function () {
  plusSlidesBrand(1);
  plusSlides(1);
}, 3000);
