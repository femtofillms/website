const projects = [
  {
    title: "Bonne année 2025 !",
    type: "Vœux d'entreprise",
    videoSrc: "videos/voeux_inmovere_2025_v5 (360p).mp4",
    poster: "Images/miniature/Miniature_INMOVERE_V1.jpg"
  },
  {
    title: "Shooting Editorial",
    type: "Video Réseaux Sociaux",
    videoSrc: "videos/backstage_shooting_mariage_540p.mp4",
    poster: "Images/miniature/Minia_shoot_pascal.jpeg"
  },
  {
    title: "Saint Jacques Wetsuits",
    type: "Films d'entreprise",
    videoSrc: "videos/lancement_de_produit_sjw_the_firm_v5 (360p).mp4",
    poster: "Images/miniature/SJW.jpg"
  },
  {
    title: "Shooting Editorial",
    type: "Video Réseaux Sociaux",
    videoSrc: "videos/shoot_ambre_360p.mp4",
    poster: "Images/miniature/Minia_shoot_yann.jpeg"
  },
  {
    title: "Freestyle Aquatique",
    type: "Vidéo sportive",
    videoSrc: "videos/freestyle_amaury_540p.mp4",
    poster: "Images/miniature/Miniature_Amaury_4.PNG"
  },
  {
    title: "OBJECTIF DAKAR",
    type: "Vidéo sportive",
    videoSrc: "videos/objectif_dakar_2023_v6_(360p).mp4",
    poster: "Images/miniature/Miniature_Dakar_V2.PNG"
  },
  {
    title: "Bonne année 2024 !",
    type: "Vœux d'entreprise",
    videoSrc: "videos/voeux_inmovere_2024_360p.mp4",
    poster: "Images/miniature/voeux_inmovere_2024_360p.jpg"
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
    video.load();        // forces the poster image to show again
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
