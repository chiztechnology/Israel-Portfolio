const projects = [
  {
    id: 142134,
    title: 'Car renting app',
    subtitle: 'CAPSTONE',
    position: 'Full-Stack',
    year: '2023',
    description: 'CAR BOOKING is a platform built in two different apps that allow users to reserve cars for renting. the user can browse the list of cars and show details for each car, the user can submit a reservation form and can cancel reservation...',
    skills: ['React', 'Ruby', 'Rails', 'Javascript', 'Git', 'Pair-programming'],
    img: 'car-renting-app-overview.png',
    source_code: 'https://github.com/sajibarafatsiddiqui/final-capstone-project',
    live_version: '#',
  },
  {
    id: 1,
    title: 'Africa Summit',
    subtitle: 'Af. SUM',
    position: 'Front-End Dev',
    year: '2022',
    description: 'Africa-Summit is a project that presents an online conference attendance page with some features that allow visitors to get informed about...',
    skills: ['html', 'css', 'javascript'],
    img: 'cc-global-summit-work.png',
    source_code: 'https://github.com/chiztechnology/Africa-Summit',
    live_version: 'https://chiztechnology.github.io/Africa-Summit/index.html',
  },
  {
    id: 2,
    title: 'TODO-List App',
    subtitle: 'ES6',
    position: 'Back End Dev',
    year: '2022',
    description: 'we built a simple todolist that allows users to add/remove tasks or mark them as finished from a list. we achieved it that by using JavaScript ...',
    skills: ['html', 'css', 'javascript'],
    img: 'todo-sc-work.png',
    source_code: 'https://github.com/chiztechnology/Todo-List',
    live_version: 'https://chiztechnology.github.io/Todo-List/dist/',
  },
  {
    id: 3,
    title: 'Awesome Books',
    subtitle: 'LST',
    position: 'Back End Dev',
    year: '2022',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    img: 'awesome-books-scr.png',
    source_code: 'https://github.com/chiztechnology/Awesome-books',
    live_version: 'https://chiztechnology.github.io/Awesome-books',
  },
];

function returnSkills(array) {
  let value = '';
  for (let i = 0; i < array.length; i += 1) {
    value += `<li class="skills-list first-element">
      <div class="skills-container-badge">
      <h4 class="skills-item">${array[i]}</h4>
      </div>
      </li>`;
  }
  return value;
}

projects.forEach((p) => {
  document.getElementById('works-section').innerHTML += `<div class="cards-work">
    <img src="img/${p.img}" alt="portfolio project image" class="cards-img">
    <div>
        <h2 class="work-title">${p.title}</h2>
        <div class="frame-2">
            <h3 class="frame-subtitle">${p.subtitle}</h3>
            <div class="rounded-bullet"></div>
            <h3 class="position-title">${p.position}</h3>
            <div class="rounded-bullet"></div>
            <h3 class="work-year">${p.year}</h3>
        </div>
        <p class="skills-description">
           ${p.description.substring(0, 206)}...
        </p>
        <ul class="skills-ul">
            ${returnSkills(p.skills)}
        </ul>
        <button class="view-project-button openProject" id="${p.id}">See Project</button>
    </div>
</div>`;
});

const btn = document.querySelectorAll('.openProject');
let wrapper = null;

function showModal(obj) {
  if (wrapper !== null) {
    document.body.removeChild(wrapper);
    // document.getElementById('modal').remove();
  }
  // alert("clicked "
  wrapper = document.createElement('div');
  wrapper.innerHTML = `
  <div class="modal" id="modal">
                <!-- Modal content -->
                <div class="modal-content">
                    <div class="cards-work-preview">
                        <div>
                            <div class="card-preview-header">
                                <h2 class="work-title-preview">${obj.title}</h2>
                                <span class="close">&times;</span>
                            </div>

                            <div class="frame-2-preview">
                                <h3 class="frame-subtitle">${obj.subtitle}</h3>
                                <div class="rounded-bullet"></div>
                                <h3 class="position-title">${obj.position}</h3>
                                <div class="rounded-bullet"></div>
                                <h3 class="work-year">${obj.year}</h3>
                            </div>
                            <div class="middle-container">
                            <img src="img/${obj.img}" alt="portfolio project image" class="cards-img-preview">
                            <!-- body content -->
                            <div class="preview-body-content"> 
                                <p class="skills-description-preview">
                                ${obj.description.substring(0, 206)}...
                                </p>
                                <div class="skills-and-footer-body">
                                    <ul class="skills-ul-preview">
                                        ${returnSkills(obj.skills)}
                                    </ul>
        
                                    <div class="footer-popup">
                                        <!-- customized buttons -->
                                        <a href="${obj.live_version}" target="_blank" class="footer-popup-link">
                                        <div class="footer-popup-button">
                                            <h5 class="footer-button-title">Go Live</h5>
                                            <img src="img/go-live-icon.svg" alt="">
                                        </div>
                                        </a>
                                        <a href="${obj.source_code}" target="_blank" class="footer-popup-link">
                                        <div class="footer-popup-button">
                                            <h5 class="footer-button-title">View Source</h5>
                                            <img src="img/github_icon_preview.svg" alt="">
                                        </div>
                                        </a>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
  document.body.appendChild(wrapper);

  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  // // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];

  // // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal.style.display = 'none';
    // document.getElementById('modal').remove();
  };

  window.onclick = (event) => {
    if (event.target === document.getElementById('modal')) {
      modal.style.display = 'none';
      // document.getElementById('modal').remove();
    }
  };
}

btn.forEach((node) => {
  document.getElementById(node.id).addEventListener('click', () => {
    const item = projects.find((item) => (item.id === parseInt(node.id, 10)));
    showModal(item);
  });
});
