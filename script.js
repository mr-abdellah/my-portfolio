const hamburgerOpenBtn = document.getElementById("open");
const mobileNav = document.querySelector(".m-navbar");
const hamburgerCloseBtn = document.getElementById("close");

hamburgerOpenBtn.addEventListener("click", open);
hamburgerCloseBtn.addEventListener("click", close);

function open() {
    mobileNav.style.display = "flex";
    mobileNav.style.top = "0";
    console.log("open button clicked");
}

function close (){
    mobileNav.style.display = "none";
    mobileNav.style.top = "-100%";
    console.log("close buttonclicked");
}
