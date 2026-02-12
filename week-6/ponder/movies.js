// Movie data

const movies = [
  {
    id: 1,
    title: "Spider-Man: Into the Spider-Verse",
    date: "Dec 14, 2018",
    description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
    imgAlt: "Miles Morales swinging through the city",
    ages: "10+",
    genre: "Action/Adventure",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    id: 2,
    title: "The Other Side of Heaven",
    date: "December 14, 2001",
    description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
    imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
    ages: "10+",
    genre: "Drama/Religious",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 3,
    title: "Luca",
    date: "June 18, 2021",
    description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
    imgAlt: "Luca and Alberto standing on the beach",
    ages: "6+",
    genre: "Family/Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 4,
    title: "17 Miracles",
    date: "June 3, 2011",
    description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
    imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
    imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
    ages: "12+",
    genre: "Historical/Religious",
    stars: "⭐⭐⭐⭐"
  }
];

// Helper function to create star ratings
function makeStars(rating, outOf = 5) {
  const safeRating = Math.max(0, Math.min(rating, outOf));
  return "⭐".repeat(safeRating) + "☆".repeat(outOf - safeRating);
}

// Get container
const movieSection = document.getElementById("movie-list");

movies.forEach((movie) => {
  const article = document.createElement("article");
  article.classList.add("movie");

  article.innerHTML = `
    <img class="movie__img" src="${movie.imgSrc}" alt="${movie.imgAlt}" loading="lazy">

    <div class="movie__info">
      <h2 class="movie__title">${movie.title}</h2>

      <p><strong>Release Date:</strong> ${movie.date}</p>
      <p><strong>Recommended Age:</strong> ${movie.ages}</p>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p><strong>Rating:</strong> <span class="stars">${movie.stars}</span></p>
    </div>

    <p class="movie__desc">${movie.description}</p>
  `;

  movieSection.appendChild(article);
});

