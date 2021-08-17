const API_KEY = "bb079fa8";

export const fetchAllMovies = async (movie) => {
  const response = await fetch(
    `http://omdbapi.com/?apikey=${API_KEY}&s=${movie}`
  );
  if (!response.ok) {
    throw new Error("could not fetch data" || response.message);
  }
  const data = await response.json();
  return data;
};

export const fetchSingleMovie = async (movieId) => {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("could not fetch data" || response.message);
  }
  const data = await response.json();
  return data;
};
