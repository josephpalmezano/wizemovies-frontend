import React, { Component } from "react";
import { postReview } from "./../../api/ReviewAPI";
import "./newReview.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class NewReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      title: "",
      content: "",
      rating: 0,
      movieId: this.props.movieId
    };

    this.onChangeValue = this.onChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {};

  notify = () =>
    toast.success("👻 Review added!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });

  handleSubmit(event) {
    postReview(this.state);
    this.props.reloadReviews();
    this.notify();
    event.preventDefault();
    this.setState({
      userName: "",
      title: "",
      content: "",
      rating: 0,
      movieId: this.props.movieId
    });
    event.target.reset();
  }

  onChangeValue(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addReview = async () => {};

  render() {
    return (
      <div id="container" style={{ border: 0, margin: "0 auto" }}>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div id="contact-form">
          <h2>New Review</h2>
          <form
            onSubmit={this.handleSubmit}
            id="contact"
            name="review"
            acceptCharset="utf-8"
          >
            <label className="form-label">
              <span>User name*</span>
              <input
                onChange={this.onChangeValue}
                value={this.state.userName}
                name="userName"
                type="text"
                placeholder="User name"
                required
              />
            </label>
            <label className="form-label">
              <span>Title*</span>
              <input
                onChange={this.onChangeValue}
                value={this.state.title}
                name="title"
                type="text"
                placeholder="Title"
                required
              />
            </label>
            <label className="form-label">
              <span>Review*</span>
              <textarea
                onChange={this.onChangeValue}
                value={this.state.content}
                name="content"
                placeholder="Message"
                required
              ></textarea>
            </label>
            <fieldset>
              <span className="star-cb-group">
                <input
                  onChange={this.onChangeValue}
                  type="radio"
                  id="rating-5"
                  name="rating"
                  value="5"
                />
                <label className="star-label" htmlFor="rating-5">
                  5
                </label>
                <input
                  onChange={this.onChangeValue}
                  type="radio"
                  id="rating-4"
                  name="rating"
                  value="4"
                />
                <label className="star-label" htmlFor="rating-4">
                  4
                </label>
                <input
                  onChange={this.onChangeValue}
                  type="radio"
                  id="rating-3"
                  name="rating"
                  value="3"
                />
                <label className="star-label" htmlFor="rating-3">
                  3
                </label>
                <input
                  onChange={this.onChangeValue}
                  type="radio"
                  id="rating-2"
                  name="rating"
                  value="2"
                />
                <label className="star-label" htmlFor="rating-2">
                  2
                </label>
                <input
                  onChange={this.onChangeValue}
                  type="radio"
                  id="rating-1"
                  name="rating"
                  value="1"
                />
                <label className="star-label" htmlFor="rating-1">
                  1
                </label>
                <input
                  onChange={this.onChangeValue}
                  type="radio"
                  id="rating-0"
                  name="rating"
                  value="0"
                  className="star-cb-clear"
                />
                <label className="star-label" htmlFor="rating-0">
                  0
                </label>
              </span>
            </fieldset>
            <input name="submit" type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}

export default NewReview;
