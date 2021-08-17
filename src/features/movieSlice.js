import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { favoriteMovies: [] },
  reducers: {
    addMovie: (state, action) => {
      state.favoriteMovies = [...state.favoriteMovies, action.payload.movie];
      let existingMovies = JSON.parse(localStorage.getItem("movies"));
      if (existingMovies == null) existingMovies = [];
      existingMovies.push(action.payload.movie);
      localStorage.setItem("movies", JSON.stringify(existingMovies));
    },
    removeMovie: (state, action) => {
      console.log(state.favoriteMovies);
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
      const favoriteMovies = JSON.parse(localStorage.getItem("movies"));
      const filtered = favoriteMovies.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
      localStorage.setItem("movies", JSON.stringify(filtered));
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export const selectMovie = (state) => state.movie.favoriteMovies;

export default movieSlice.reducer;
