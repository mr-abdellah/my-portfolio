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

let projectsContainer = document.querySelector('.my-recent-works');

function generatProject (name,description, image, technologies,liveVersion,source) {
  return `
  <div class="project">
  <div class="work-background" style="background : url(${image})"></div>
      <h3 class="work-title">${name}</h3>
      <div class="categories">
        <ul>
          ${
            technologies.map(technology =>{
              return `<li>${technology}</li>`
            })
          }
        </ul>
      </div>
      <button type="submit">See Project</button>
  </div>
</div>
  `
}
let myProject = generatProject("project 1", null , null, ["Ruby on rails", "css", "JavaScript"]);
projectsContainer.innerHTML = myProject;