import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Movie from "../movie/movie";

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount = () => {};

  getRandomRating = () => {
    return Math.round((Math.random() * (5 - 1) + 1) * 10) / 10;
  };

  render() {
    return (
      <div style={{ border: "1px solid blue", width: "90%", margin: "0 auto" }}>
        <Movie movieId={this.props.match.params.movieId}></Movie>
      </div>
    );
  }
}

export default withRouter(Reviews);
