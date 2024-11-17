// Данные о проектах
const projects = {
  Wolf_Man: {
    title: "Wolf Man",
    genre: "Фильм ужасов о сверхъестественном",
    releaseDate: "17 января 2025",
    ratings: {
      imdb: 8.5,
      rottenTomatoes: "95%",
      metacritic: 87
    },
    poster: "images/wolf_man.jpg",
    trailer: "https://www.youtube.com/embed/kAw4PH2IQgo"
  },
  Dog_Man: {
    title: "Dog Man",
    genre: "Семейный",
    releaseDate: "31 января 2025",
    ratings: {
      imdb: 7.8,
      rottenTomatoes: "85%",
      metacritic: 75
    },
    poster: "images/Dog_Man.jpg",
    trailer: "https://www.youtube.com/embed/your_trailer_id"
  }
  // Добавь другие проекты сюда
};

// Получаем параметры из URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("movie");

// Заполняем страницу данными
if (movieId && projects[movieId]) {
  const project = projects[movieId];
  document.getElementById("poster").src = project.poster;
  document.getElementById("title").textContent = project.title;
  document.getElementById("genre").textContent = `Жанр: ${project.genre}`;
  document.getElementById("release-date").textContent = `Дата выхода: ${project.releaseDate}`;
  document.getElementById(
    "ratings"
  ).textContent = `IMDB: ${project.ratings.imdb}, RT: ${project.ratings.rottenTomatoes}, Metacritic: ${project.ratings.metacritic}`;
  document.getElementById("trailer").src = project.trailer;
} else {
  document.body.innerHTML = "<p>Проект не найден.</p>";
}
