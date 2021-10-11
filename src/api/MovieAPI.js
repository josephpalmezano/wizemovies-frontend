import { mapAttributes, API_URL } from "../api/ApiUtils";

export const getMovies = (page) => {
  return fetch(`${API_URL}/movies?page=${page}`)
    .then((res) => res.json())
    .then((res) => {
      return mapAttributes(res, "movies");
    });
};
