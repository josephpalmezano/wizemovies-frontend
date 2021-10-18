import React, { Component } from "react";
import "./review.css";

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    console.log(this.props);
  };

  render() {
    return (
      <div id="qa">
        <div className="w-100">
          <div id="feed">
            <div className="question-card card" id="question-card-1">
              <div className="question-title cf w-100 valign-child">
                <div className="fl">
                  <h1>{this.props.title}</h1>
                </div>
                <div
                  style={{ fontWeight: "bold", color: "#ecaa1a" }}
                  className="fr mla"
                >
                  <span className="permalink" role="img" aria-label="rating">
                    &#11088;&nbsp;&nbsp;&nbsp;
                  </span>
                  {this.props.rating}
                </div>
              </div>
              <p>{this.props.content}</p>
              <br />
              <strong>By:&nbsp;{this.props.userName}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
