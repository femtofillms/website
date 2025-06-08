document.addEventListener("DOMContentLoaded", () => {
  const fetchAndInsert = (url, id) =>
    fetch(url)
      .then(res => res.text())
      .then(html => {
        const container = document.getElementById(id);
        if (container) container.innerHTML = html;
      });

  Promise.all([
    fetchAndInsert("navbar.html", "navbar-container"),
    fetchAndInsert("footer.html", "footer-container"),
  ]);
});
