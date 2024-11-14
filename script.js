document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const searchBar = document.getElementById('search-bar');
    const movieCards = document.querySelectorAll('.movie-card');
    const currentTheme = localStorage.getItem('theme') || 'light';

    document.body.classList.add(currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    searchBar.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        movieCards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            card.style.display = title.includes(searchText) ? '' : 'none';
        });
    });
});
