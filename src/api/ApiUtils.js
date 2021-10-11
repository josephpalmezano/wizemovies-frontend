const mapAttributes = (response, objectType) => {
  let result = undefined;

  if (objectType === "movies") {
    result = response.data.data.map((data) => data.attributes);
  }

  return result;
};

const API_URL = "https://wizemovies-backend.herokuapp.com/api/v1";

export { mapAttributes, API_URL };
