import React, { Component } from "react";
import { fetchMovies } from "./../../api/MovieAPI";
import "./infiniteScroll.css";
import { Link } from "react-router-dom";

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      page: 1,
      isLoading: true
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.infiniteScroll);
    this.getMovies(this.state.page);
  };

  infiniteScroll = () => {
    // End of the document reached?
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      let newPage = this.state.page;
      newPage++;
      this.setState({
        page: newPage
      });

      this.getMovies(newPage);
    }
  };

  getRandomRating = () => {
    return Math.round((Math.random() * (5 - 1) + 1) * 10) / 10;
  };

  getMovies = async (pageNum) => {
    let data = await fetchMovies(pageNum);
    this.setState({
      movies: [...this.state.movies, ...data],
      isLoading: false
    });
  };

  render() {
    return (
      <div style={{ width: "90%", margin: "0 auto" }}>
        <div>
          {this.state.isLoading && <p>Loading...</p>}
          {!this.state.isLoading && !this.state.movies.length && (
            <p>No results</p>
          )}
          {this.state.movies.map((movie, i) => {
            return (
              <div key={i} className="card hovers">
                <div
                  className="card-img"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_url})`
                  }}
                >
                  <div className="overlay">
                    <div className="overlay-content">
                      <span
                        role="img"
                        aria-label="rating"
                        style={{ padding: 0 }}
                      >
                        &#11088;
                      </span>
                      <p
                        style={{
                          marginTop: "-3.5rem",
                          fontSize: "1.35rem",
                          fontWeight: 500
                        }}
                      >
                        {this.getRandomRating()}
                      </p>
                      <br></br>
                      <Link className="hovers" to={`/reviews/${movie.id}`}>
                        Add a Review
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <a href="#!">
                    <h2>{movie.title}</h2>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default InfiniteScroll;
