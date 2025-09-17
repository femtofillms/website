const projects = [
  {
    id: "allez-y",
    title: "Allez-y",
    type: "Court-métrage",
    duration: "4'44 min",
    image: "Images/affiches/AFFICHE_ALLEZ-Y.jpeg",
    link: "fiche-fiction.html?id=allez-y",
    synopsis: "Deux scénaristes en herbe tentent de faire produire leurs idées de films à un producteur antipathique",
    videoUrl: "https://www.youtube.com/emed/zbPJuB0iFfg",
    galleryId: "",
    credits: [
      { role: "Réalisation", value: "Maxime CASTELLO & Antoine BIGUET" },
      { role: "Scénario", value: "Maxime CASTELLO" },
      { role: "Casting", value: "Colyne PIERFEDERICI, Emma SCHARFF, Mathis JAKOVENKO,  Maxime GIROUD, Johana ISAAC, Alexandre GERARD"  }
    ]
  },
  {
    id: "adlc",
    title: "L'Aube de la Civilisation",
    type: "Court-métrage",
    duration: "2'20 min",
    image: "Images/affiches/AFFICHE ADLC VERTICAL V5.jpg",
    link: "fiche-fiction.html?id=adlc",
    synopsis: "A l'aube de la civilisation, une simple partie d'échec pourrait changer le destin de l'humanité.",
    videoUrl: "https://www.youtube.com/embed/WiN_KzqAUjw",
    galleryId: "gal_2n954gmcReykWS76",
    credits: [
      { role: "Réalisation", value: "Antoine BIGUET & Maxime CASTELLO" },
      { role: "Scénario", value: "Antoine BIGUET" },
      { role: "Casting", value: "Mathis JAKOVENKO, Hamzah RAJA" }
    ]
  },
  {
    id: "gribouille",
    title: "Jackpot Gribouille",
    type: "Court-métrage",
    duration: "2'20 min",
    image: "Images/affiches/AFFICHE GRIBOUILLE VERTICAL V2.jpg",
    link: "fiche-fiction.html?id=gribouille",
    synopsis: "Et si votre chien s'envolait pour vous faire gagner le jackpot ?",
    videoUrl: "https://www.youtube.com/embed/YguwmreasW8",
    galleryId: "gal_WlEPWcYq4powEANm",
    credits: [
      { role: "Réalisation", value: "Antoine BIGUET & Maxime CASTELLO" },
      { role: "Scénario", value: "Maxime CASTELLO" },
      { role: "Casting", value: "Mathis JAKOVENKO, Emma SCHARFF" }
    ]
  },
  {
    id: "ruptur",
    title: "RUPTUR",
    type: "Court-métrage",
    duration: "9 min",
    image: "Images/affiches/AFFICHE_RUPTUR_VERTICAL_V9.jpg",
    link: "fiche-fiction.html?id=ruptur",
    synopsis: "Un thriller <span class='highlight'>captivant</span> qui explore la fragilité des liens familiaux.",
    videoUrl: "https://www.youtube.com/embed/HOxt9nwNC84",
    galleryId: "gal_0XSLGpBggjEolcZz",
    credits: [
      { role: "Réalisation", value: "Antoine BIGUET & Maxime CASTELLO" },
      { role: "Scénario", value: "Antoine BIGUET" },
      { role: "Casting", value: "Emma SCHARFF, Melanie RAOUL, Hamzah RAJA" }
    ]
  },
  {
    id: "pulsion",
    title: "PULSION",
    type: "Court-métrage",
    duration: "20 min",
    image: "Images/affiches/AFFICHE_PULSION_V1.jpg",
    link: "fiche-fiction.html?id=pulsion",
    synopsis: "Un drame psychologique <span class='highlight'>intense</span> sur la quête de soi et les relations humaines.",
    videoUrl : "https://www.youtube.com/embed/hjpMtHGCfRs",
    galleryId: "gal_16Luw6mtp9RPk2v6",
    credits: [
      { role: "Réalisation", value: "Maxime CASTELO & Antoine BIGUET" },
      { role: "Scénario", value: "Maxime CASTELLO" },
      { role: "Casting", value: "Mathis, JAKOVENKO, Emma Scharff, Paul GILETTE" },
      { role: "Musique", value: "Alexandre GERARD" }
    ]
  },
  {
    id: "stearine",
    title: "Stéarine",
    type: "Court-métrage",
    duration: "2'20 min",
    image: "Images/affiches/AFFICHE_STEARINE_VERTICAL_V1.jpg",
    link: "fiche-fiction.html?id=stearine",
    synopsis: "La flamme d'une bougie est aussi fragile que brulante",
    videoUrl: "https://www.youtube.com/embed/MP8YSToOnIM",
    galleryId: "",
    credits: [
      { role: "Réalisation", value: "Antoine BIGUET & Maxime CASTELLO" },
      { role: "Scénario", value: "Antoine BIGUET & Maxime CASTELLO" },
      { role: "Casting", value: "Mathis JAKOVENKO, Emma SCHARFF" }
    ]
  },
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const item = document.createElement("div");
  item.className = "col-6 col-sm-6 col-md-4 col-lg-3";
  item.innerHTML = `
    <a href="${project.link}" class="project-item text-decoration-none text-white d-block">
      <div class="project-item">
        <img src="${project.image}" alt="Affiche ${project.title}" class="project-image">
        <div class="project-info">
          <div class="project-title">${project.title}</div>
          <div class="project-meta">${project.type} · ${project.duration}</div>
        </div>
      </div>
    </a>
  `;
  container.appendChild(item);
});
