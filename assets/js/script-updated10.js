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
