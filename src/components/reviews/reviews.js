import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Movie from "../movie/movie";
import NewReview from "./newReview";
import Review from "./review";
import { fetchReviews } from "./../../api/ReviewAPI";

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      isLoading: true,
      created: false
    };
  }
  componentDidMount = () => {
    this.getReviews(this.props.match.params.movieId);
  };

  getReviews = async (movieId) => {
    let data = await fetchReviews(movieId);
    this.setState({
      reviews: data,
      isLoading: false
    });
  };

  reloadReviews = () => {
    this.getReviews(this.props.match.params.movieId);
  };

  render() {
    return (
      <div style={{ width: "90%", margin: "0 auto" }}>
        <Movie movieId={this.props.match.params.movieId}></Movie>
        <NewReview
          reloadReviews={this.reloadReviews}
          movieId={this.props.match.params.movieId}
        ></NewReview>
        {!this.state.reviews.length && <p>No reviews yet</p>}
        {this.state.reviews.map((review, i) => {
          return (
            <div key={i}>
              <Review
                rating={`${review.rating}.0`}
                content={review.content}
                userName={review.user_name}
                title={review.title}
              ></Review>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withRouter(Reviews);
