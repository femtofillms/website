const projects = [
    {
        id: "adlc",
        title: "ADLC",
        type: "Court-métrage",
        duration: "2'20 min",
        image: "/Images/affiches/AFFICHE ADLC VERTICAL V4.jpg",
        link: "/fiche-fiction.html?id=adlc",
        synopsis: "Un thriller <span class='highlight'>captivant</span> qui explore la fragilité des liens familiaux.",
        videoUrl: "https://www.youtube.com/embed/HOxt9nwNC84",
        galleryId: "gal_0XSLGpBggjEolcZz",
        credits: [
          { role: "Réalisation", value: "Antoine Biguet & Maxime Castello" },
          { role: "Scénario", value: "Antoine Biguet" },
          { role: "Casting", value: "Mathis Jakovenko, Emma Scharff" }
        ]
      },
    {
      id: "ruptur",
      title: "RUPTUR",
      type: "Court-métrage",
      duration: "9 min",
      image: "/Images/affiches/AFFICHE_RUPTUR_9_16_V2_LOW.jpg",
      link: "/fiche-fiction.html?id=ruptur",
      synopsis: "Un thriller <span class='highlight'>captivant</span> qui explore la fragilité des liens familiaux.",
      videoUrl: "https://www.youtube.com/embed/HOxt9nwNC84",
      galleryId: "gal_0XSLGpBggjEolcZz",
      credits: [
        { role: "Réalisation", value: "Antoine Biguet & Maxime Castello" },
        { role: "Scénario", value: "Antoine Biguet" },
        { role: "Casting", value: "Mathis Jakovenko, Emma Scharff" }
      ]
    },
    {
      id: "pulsion",
      title: "PULSION",
      type: "Court-métrage",
      duration: "20 min",
      image: "/Images/affiches/AFFICHE_PULSION_V2.png",
      link: "/fiche-fiction.html?id=pulsion",
      synopsis: "Un drame psychologique <span class='highlight'>intense</span> sur la quête de soi et les relations humaines.",
      videoUrl : "https://www.youtube.com/embed/hjpMtHGCfRs",
      galleryId: "gal_16Luw6mtp9RPk2v6",
      credits: [
        { role: "Réalisation", value: "Maxime Castello" },
        { role: "Scénario", value: "Maxime Castello" },
        { role: "Musique", value: "Alexandre Lambert" }
      ]
    }
    // Ajoute d'autres fictions
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

  

  