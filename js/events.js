(function currentCategory() {
  const categories = document.querySelectorAll(".categories_nav>ul>li>a");
  categories.forEach((category) => {
    category.onclick = (e) => {
      if (!category.classList.contains("current")) {
        document.querySelector(".current").classList.remove("current");
        category.classList.add("current");
      }
    };
  });
})();

function showModal() {
  const modal = document.getElementById("hamburguerModal");
  if (modal.style.display === "none") return (modal.style.display = "flex");
  return (modal.style.display = "none");
}

document.getElementById("iconHamburguer").onclick = showModal;

document
  .querySelectorAll(".nav_link")
  .forEach(
    (link) =>
      (link.onclick = () =>
        (document.getElementById("hamburguerModal").style.display = "none"))
  );
