document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");
  const contentSections = document.querySelectorAll(".content");

  menuItems.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();

      // Активная кнопка меню
      menuItems.forEach(menu => menu.classList.remove("active"));
      item.classList.add("active");

      // Показ соответствующего раздела
      contentSections.forEach(section => {
        if (section.id === item.getAttribute("href").substring(1)) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
    });
  });
});
