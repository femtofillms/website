document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("intro-video");
    const textContainer = document.getElementById("text-container");
    const videoWrapper = document.getElementById("video-wrapper");
  
    if (window.innerWidth <= 768 && video) {
      video.addEventListener("ended", function () {
        videoWrapper.classList.add("video-hidden");
  
        setTimeout(() => {
          videoWrapper.style.display = "none";
          textContainer.classList.add("text-visible");
        }, 1500);
      });
    }
  });
  