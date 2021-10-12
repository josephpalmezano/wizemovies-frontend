import React, { Component } from "react";
import { fetchMovies } from "./../../api/MovieAPI";
import "./infiniteScroll.css";

class InfiniteScroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      page: 1
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.infiniteScroll);
    this.getMovies(this.state.page);
  };

  infiniteScroll = () => {
    console.log("page: " + this.state.page);
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

  getMovies = async (pageNum) => {
    let data = await fetchMovies(pageNum);
    console.log(data);
    this.setState({
      movies: [...this.state.movies, ...data]
    });
  };

  render() {
    return (
      <div className="container">
        {!this.state.movies.length && <p>No results</p>}
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
                      className="rating-star"
                    >
                      &#11088;
                    </span>
                    <p className="rating">5.0</p>
                    <br></br>
                    <p className="hovers">Add a Review</p>
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
    );
  }
}

export default InfiniteScroll;
