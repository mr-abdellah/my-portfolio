const hamburgerOpenBtn = document.getElementById("open");
const mobileNav = document.querySelector(".m-navbar");
const hamburgerCloseBtn = document.getElementById("close");
const mobileLink = document.querySelectorAll(".m-navbar-link");

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


mobileLink.forEach(link => {
    link.addEventListener("click", closeContent)
});

function closeContent() {
    mobileNav.style.display = "none";
    mobileNav.style.top = "-100%";
    console.log("link clicked");
}
