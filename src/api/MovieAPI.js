import { mapAttributes, API_URL } from "../api/ApiUtils";

export const fetchMovies = (page) => {
  return fetch(`${API_URL}/movies?page=${page}`)
    .then((res) => res.json())
    .then((res) => {
      return mapAttributes(res, "movies");
    })
    .catch((error) => {
      return [];
    });
};

export const fetchMovie = (movieId) => {
  return fetch(`${API_URL}/movies/${movieId}`)
    .then((res) => res.json())
    .then((res) => {
      return mapAttributes(res, "movie");
    })
    .catch((error) => {
      return {};
    });
};
