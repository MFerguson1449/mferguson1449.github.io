/* Calling SubMenu Navbar */
const dropDown = document.getElementById("dropdown_submenu");
dropDown.addEventListener("click", openSubMenu);
/* Form Hide */
const formSec = document.getElementById("banner_form");
const hideForm = () => {
  formSec.style.display = "none";
};
