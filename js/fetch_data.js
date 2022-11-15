let projects = [
  {
    id: 1,
    title: "Tonic",
    subtitle: "CANOPI",
    position: "Back End Dev",
    year: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ["html", "css", "javascript"],
    img: "tonic-work.jpg",
    source_code: "https://github.com/chiztechnology/Israel-Portfolio/",
    live_version: "https://chiztechnology.github.io/Israel-Portfolio/"
  },
  {
    id: 2,
    title: "Multi-Post Story",
    subtitle: "CANOPI",
    position: "Back End Dev",
    year: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ["html", "css", "javascript"],
    img: "Snapshoot Portfolio.png",
    source_code: "https://github.com/chiztechnology/Israel-Portfolio/",
    live_version: "https://chiztechnology.github.io/Israel-Portfolio/"
  },
  {
    id: 3,
    title: "Tonic",
    subtitle: "CANOPI",
    position: "Back End Dev",
    year: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ["html", "css", "javascript"],
    img: "Snapshoot Portfolio (1).png",
    source_code: "https://github.com/chiztechnology/Israel-Portfolio/",
    live_version: "https://chiztechnology.github.io/Israel-Portfolio/"
  }, {
    id: 4,
    title: "Multi-post Stories",
    subtitle: "CANOPI",
    position: "Back End Dev",
    year: "2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    skills: ["html", "css", "javascript"],
    img: "Snapshoot Portfolio (2).png",
    source_code: "https://github.com/chiztechnology/Israel-Portfolio/",
    live_version: "https://chiztechnology.github.io/Israel-Portfolio/"
  },
]


window.onload = () => {
  projects.forEach((p) => {
    document.getElementById("works-section").innerHTML +=
      "<div class=\"cards-work\">" +
      "<img src=\"img/" + p.img + "\" alt=\"portfolio project image\" class=\"cards-img\">" +
      "<div>" +
      "<h2 class=\"work-title\">" + p.title + "</h2>" +
      "<div class=\"frame-2\">" +
      "<h3 class=\"frame-subtitle\">" + p.subtitle + "</h3>" +
      "<div class=\"rounded-bullet\"></div>" +
      "<h3 class=\"position-title\">" + p.position + "</h3>" +
      "<div class=\"rounded-bullet\"></div>" +
      "<h3 class=\"work-year\">" + p.year + "</h3>" +
      "</div>" +
      "<p class=\"skills-description\">" +
      p.description +
    "</p>" +
      "<ul class=\"skills-ul\">" +
        return_skills(p.skills) +
      "</ul>" +
      "<button class=\"view-project-button\">See Project</button>" +
      "</div>" +
      "</div>";
  })
}

function return_skills(array) {
  let value = "";
  for (let i = 0; i < array.length; i++) {
    value += "<li class=\"skills-list first-element\">" +
      "<div class=\"skills-container-" + (i + 1) + "\">" +
      "<h4 class=\"skills-item\">" + array[i] + "</h4>" +
      "</div>" +
      "</li>"
  }
  return value;
}