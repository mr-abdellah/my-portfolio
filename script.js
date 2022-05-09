const hamburgerOpenBtn = document.getElementById("open");
const mobileNav = document.querySelector(".m-navbar");

hamburgerOpenBtn.addEventListener("click", open);
function open() {
    mobileNav.style.display = "flex";
    mobileNav.style.top = "0";
    console.log("open button clicked");
}