import { mapAttributes, API_URL } from "../api/ApiUtils";

export const postReview = (data) => {
  const newReview = {
    user_name: data.userName,
    title: data.title,
    content: data.content,
    rating: data.rating,
    movie_id: data.movieId
  };
  return fetch(`${API_URL}/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(newReview)
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

export const fetchReviews = (movieId) => {
  return fetch(`${API_URL}/reviews/movie_reviews/${movieId}`)
    .then((res) => res.json())
    .then((res) => {
      return mapAttributes(res, "reviews");
    })
    .catch((error) => {
      return [];
    });
};
