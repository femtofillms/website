function getQueryParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const id = getQueryParam("id");
    const project = projects.find(p => p.id === id);
    const container = document.getElementById("fiche-container");
  
    if (!project) {
      container.innerHTML = "<p class='text-center text-danger'>Projet introuvable.</p>";
      return;
    }
  
    document.title = `${project.title} - Femto Films`;
  
    const creditsHTML = (project.credits || []).map(credit =>
      `<li><strong>${credit.role} :</strong> ${credit.value}</li>`
    ).join("");
  
    container.innerHTML = `
      <div class="row g-5 align-items-start px-3">
        <div class="col-12 col-lg-6">
          <div class="video-container">
                <iframe
                    width="100%"
                    height="100%"
                    src="${project.videoUrl}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>      
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <h1 class="text-lg-start">${project.title}</h1>
          <p>${project.type} · ${project.duration}</p>
          <p>${project.synopsis}</p>
          <ul class="credits-list list-unstyled pt-4">${creditsHTML}</ul>
        </div>
      </div>
  
      <div class="container">
        <picflow-gallery 
          id="${project.galleryId}" 
          tenant="tnt_jOeqorGZAp4BMzgk" 
          lightbox="#000000E6" 
          no-background="true">
        </picflow-gallery>
      </div>
    `;
  });
  