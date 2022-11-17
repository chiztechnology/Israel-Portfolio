const projects = [
  {
    id: 1,
    title: 'Tonic',
    subtitle: 'CANOPI',
    position: 'Back End Dev',
    year: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    img: 'tonic-work.jpg',
    source_code: 'https://github.com/chiztechnology/Israel-Portfolio/',
    live_version: 'https://chiztechnology.github.io/Israel-Portfolio/',
  },
  {
    id: 2,
    title: 'Multi-Post Story',
    subtitle: 'CANOPI',
    position: 'Back End Dev',
    year: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    img: 'Snapshoot Portfolio.png',
    source_code: 'https://github.com/chiztechnology/Israel-Portfolio/',
    live_version: 'https://chiztechnology.github.io/Israel-Portfolio/',
  },
  {
    id: 3,
    title: 'Tonic',
    subtitle: 'CANOPI',
    position: 'Back End Dev',
    year: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    img: 'Snapshoot Portfolio (1).png',
    source_code: 'https://github.com/chiztechnology/Israel-Portfolio/',
    live_version: 'https://chiztechnology.github.io/Israel-Portfolio/',
  }, {
    id: 4,
    title: 'Multi-post Stories',
    subtitle: 'CANOPI',
    position: 'Back End Dev',
    year: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javascript'],
    img: 'Snapshoot Portfolio (2).png',
    source_code: 'https://github.com/chiztechnology/Israel-Portfolio/',
    live_version: 'https://chiztechnology.github.io/Israel-Portfolio/',
  },
];

function returnSkills(array) {
  let value = '';
  for (let i = 0; i < array.length; i += 1) {
    value += `<li class="skills-list first-element">
      <div class="skills-container-${(i + 1)}">
      <h4 class="skills-item">${array[i]} "</h4>
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
           ${p.description}
        </p>
        <ul class="skills-ul">
            ${returnSkills(p.skills)}
        </ul>
        <button class="view-project-button openProject" id="${p.id}">See Project</button>
    </div>
</div>`;
});

const btn = document.querySelectorAll('.openProject');

function showModal(obj) {
  if (document.getElementById('modal') !== null) {
    document.getElementById('modal').remove();
  }

  document.getElementById('works-section').innerHTML += `
  <div class="modal" id="modal" tabindex="-1">
                <!-- Modal content -->
                <div class="modal-content">
                    <div class="cards-work-preview">
                        <div>
                            <div class="card-preview-header">
                                <h2 class="work-title-preview">${obj.title}</h2>
                                <span class="close">&times;</span>
                            </div>

                            <div class="frame-2">
                                <h3 class="frame-subtitle">${obj.subtitle}</h3>
                                <div class="rounded-bullet"></div>
                                <h3 class="position-title">${obj.position}</h3>
                                <div class="rounded-bullet"></div>
                                <h3 class="work-year">${obj.year}</h3>
                            </div>
                            <img src="img/${obj.img}" alt="portfolio project image" class="cards-img-preview">
                            <!-- body content -->
                            <div class="preview-body-content"> 
                                <p class="skills-description-preview">
                                    ${obj.description}
                                </p>
                                <div class="skills-and-footer-body">
                                    <ul class="skills-ul-preview">
                                        ${returnSkills(obj.skills)}
                                    </ul>
        
                                    <div class="footer-popup">
                                        <!-- customized buttons -->
                                        <a href="${obj.live_version}" class="footer-popup-link">
                                        <div class="footer-popup-button">
                                            <h5 class="footer-button-title">See Live</h5>
                                            <img src="img/github_icon_preview.svg" alt="">
                                        </div>
                                        </a>
                                        <a href="${obj.source_code}" class="footer-popup-link">
                                        <div class="footer-popup-button">
                                            <h5 class="footer-button-title">See Source</h5>
                                            <img src="img/go-live-icon.svg" alt="">
                                        </div>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  // // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close')[0];

  // // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === document.getElementById('modal')) {
      modal.style.display = 'none';
    }
  };
}

btn.forEach((node) => {
  node.addEventListener('click', (e) => {
    const item = projects.find((item) => (item.id === parseInt(node.id, 10)));
    showModal(item);
    e.preventDefault();
  });
});
