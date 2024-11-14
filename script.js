document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('theme-switch');
  const themeLink = document.getElementById('theme-link');

  themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('header, nav, .carousel-item').forEach(el => el.classList.toggle('dark-mode'));
  });

  const searchBar = document.getElementById('search-bar');
  searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    document.querySelectorAll('.carousel-item').forEach(item => {
      const title = item.innerText.toLowerCase();
      item.style.display = title.includes(query) ? '' : 'none';
    });
  });
});
