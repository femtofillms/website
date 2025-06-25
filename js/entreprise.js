const projects = [
  {
    title: "Freestyle Aquatique",
    type: "Vidéo sportive",
    videoSrc: "videos/freestyle_amaury_540p.mp4",
    poster: "Images/miniature/freestyle_amaury_540p.jpg"
  },
  {
    title: "Shooting Mariage",
    type: "Backstage",
    videoSrc: "videos/backstage_shooting_mariage_540p.mp4",
    poster: "Images/miniature/backstage_shooting_mariage_540p.jpg"
  },
  {
    title: "Bonne année !",
    type: "Vœux d'entreprise",
    videoSrc: "videos/voeux_inmovere_2024_360p.mp4",
    poster: "Images/miniature/voeux_inmovere_2024_360p.jpg"
  },
  {
    title: "Shooting Mariage",
    type: "Backstage",
    videoSrc: "videos/shoot_ambre_360p.mp4",
    poster: "Images/miniature/shoot_ambre_360p.jpg"
  },
  {
    title: "OBJECITF DAKAR",
    type: "Vidéo sportive",
    videoSrc: "videos/objectif_dakar_2023_v6 (360p).mp4",
    poster: "Images/miniature/objectif_dakar.jpg"
  },
  {
    title: "Saint Jacques Wetsuits",
    type: "Films d'entreprise",
    videoSrc: "videos/lancement_de_produit_sjw_the_firm_v5 (360p).mp4",
    poster: "Images/miniature/SJW.jpg"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4";
  col.innerHTML = `
    <div class="project-item">
      <video class="project-video" muted loop preload="metadata" playsinline poster="${project.poster}">
        <source src="${project.videoSrc}" type="video/mp4" />
        Votre navigateur ne prend pas en charge la vidéo.
      </video>
      <div class="project-overlay">
        <div class="project-title-entreprise">${project.title}</div>
        <div class="project-type">${project.type}</div>
      </div>
    </div>
  `;
  container.appendChild(col);
});

const videos = document.querySelectorAll(".project-video");
videos.forEach(video => {
  video.addEventListener("mouseenter", () => video.play());
  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});

const soundToggleBtn = document.getElementById("sound-toggle");
const icon = soundToggleBtn.querySelector("i");
let soundEnabled = false;

soundToggleBtn.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundToggleBtn.classList.toggle("active", soundEnabled);
  icon.className = soundEnabled ? "bi bi-volume-up" : "bi bi-volume-mute";

  document.querySelectorAll(".project-video").forEach(video => {
    video.muted = !soundEnabled;
  });
});
