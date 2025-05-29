document.addEventListener("DOMContentLoaded", () => {
  // Charger la navbar
  fetch("/navbar.html")
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById("navbar-container");
      if (container) container.innerHTML = html;
    });

  // Charger le footer
  fetch("/footer.html")
    .then(response => response.text())
    .then(html => {
      const container = document.getElementById("footer-container");
      if (container) container.innerHTML = html;
    });
});
