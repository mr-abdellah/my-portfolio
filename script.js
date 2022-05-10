const hamburgerOpenBtn = document.getElementById('open');
const mobileNav = document.querySelector('.m-navbar');
const hamburgerCloseBtn = document.getElementById('close');
const mobileLink = document.querySelectorAll('.m-navbar-link');

hamburgerOpenBtn.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
  mobileNav.style.top = '0';
});

hamburgerCloseBtn.addEventListener('click', () => {
  mobileNav.style.display = 'none';
  mobileNav.style.top = '-100%';
});
function closeContent() {
  mobileNav.style.display = 'none';
  mobileNav.style.top = '-100%';
}

mobileLink.forEach((link) => { link.addEventListener('click', closeContent); });