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

function generatProject ({ name, image, technologies }) {
  return `
  <div class="project">
  <div class="work-background" style="background : url(${image})"></div>
      <h3 class="work-title">${name}</h3>
      <div class="categories">
        <ul>
          ${
            technologies.map(technology =>{
              return `<li>${technology}</li>`
            }).join('')
          }
        </ul>
      </div>
      <button type="submit">See Project</button>
  </div>
</div>
  `
}

const projects = [
    {
        name: 'Project One',
        description: 'Test',
        image: './images/bg.jpg',
        technologies: ["Ruby on rails", "css", "JavaScript"],
        liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
        source: 'https://google.com',
    },
    {
        name: 'Project Two',
        description: 'Test',
        image: './images/bg.jpg',
        technologies: ["Ruby on rails", "css", "JavaScript"],
        liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
        source: 'https://google.com',
    },
    {
        name: 'Project Three',
        description: 'Test',
        image: './images/bg.jpg',
        technologies: ["Ruby on rails", "css", "JavaScript"],
        liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
        source: 'https://google.com',
    },
    {
        name: 'Project four',
        description: 'Test',
        image: './images/bg.jpg',
        technologies: ["Ruby on rails", "css", "JavaScript"],
        liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
        source: 'https://google.com',
    },
    {
        name: 'Project Five',
        description: 'Test',
        image: './images/bg.jpg',
        technologies: ["Ruby on rails", "css", "JavaScript"],
        liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
        source: 'https://google.com',
    },
    {
        name: 'Project Six',
        description: 'Test',
        image: './images/bg.jpg',
        technologies: ["Ruby on rails", "css", "JavaScript"],
        liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
        source: 'https://google.com',
    }
]

let htmlProjects = projects.map(project => generatProject(project)).join('');

projectsContainer.innerHTML = htmlProjects;