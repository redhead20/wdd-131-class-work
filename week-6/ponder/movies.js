// Movie data
const movieList = [
  {
    id: 1,
    name: "Spider-Man: Into the Spider-Verse",
    imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
    imgAlt: "Miles Morales swinging through the city",
    releaseDate: "Dec 14, 2018",
    age: "10+",
    genre: "Action/Adventure",
    rating: 5,
    desc: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse."
  },
  {
    id: 2,
    name: "The Other Side of Heaven",
    imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
    imgAlt: "A young couple and missionaries in a row boat on the ocean",
    releaseDate: "December 14, 2001",
    age: "10+",
    genre: "Drama/Religious",
    rating: 4,
    desc: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles."
  }
];

// Helper function to create star ratings
function makeStars(rating, outOf = 5) {
  const safeRating = Math.max(0, Math.min(rating, outOf));
  return "⭐".repeat(safeRating) + "☆".repeat(outOf - safeRating);
}

// Get container
const movieSection = document.getElementById("movie-list");

// Loop through movies and insert into page
movieList.forEach((movie) => {
  const article = document.createElement("article");
  article.classList.add("movie");
  article.id = `movie-${movie.id}`;

  article.innerHTML = `
    <h2>${movie.name}</h2>
    <img src="${movie.imgSrc}" alt="${movie.imgAlt}" loading="lazy">
    <p><strong>Release Date:</strong> ${movie.releaseDate}</p>
    <p><strong>Recommended Age:</strong> ${movie.age}</p>
    <p><strong>Genre:</strong> ${movie.genre}</p>
    <p><strong>Rating:</strong>
      <span class="stars" aria-label="${movie.rating} out of 5 stars">
        ${makeStars(movie.rating)}
      </span>
    </p>
    <p class="desc">${movie.desc}</p>
  `;

  movieSection.appendChild(article);
});
