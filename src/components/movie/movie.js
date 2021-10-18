import React, { Component } from "react";
import { fetchMovie } from "./../../api/MovieAPI";
import "./movie.css";

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {},
      isLoading: true
    };
  }

  componentDidMount = () => {
    this.getMovie(this.props.movieId);
  };

  getMovie = async (movieId) => {
    let data = await fetchMovie(movieId);
    this.setState({
      movie: data,
      isLoading: false
    });
  };

  render() {
    return (
      <div id="container" style={{ margin: "0 auto" }}>
        {this.state.isLoading && <p>Loading...</p>}
        {!this.state.isLoading && !this.state.movie && <p>No results</p>}
        <div className="movie-card">
          <img
            alt=""
            className="movie-image"
            src={`https://image.tmdb.org/t/p/original${this.state.movie.poster_url}`}
          />
          <div className="movie-details">
            <h3 className="movie-title">{this.state.movie.title}</h3>
            <p className="post-description">{this.state.movie.plot}</p>
            <p className="movie-rating">
              <span role="img" aria-label="rating">
                &#11088;&nbsp;&nbsp;&nbsp;
              </span>
              {this.state.movie.rating}
            </p>
            <ul className="genre-pill">
              {this.state.movie.genres &&
                this.state.movie.genres.map((genre, i) => {
                  return <li key={i}>{genre}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
