import React, { Component } from "react";
import axios from "axios";
import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidUpdate() {
    if (
      this.props.id != null &&
      (this.state.loadedPost == null ||
        this.state.loadedPost.id !== this.props.id)
    ) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
        .then((response) => {
          console.log(response);
          this.setState({ loadedPost: response.data });
        });
    }
  }

  deletePostHandler = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.id != null) {
      post = <p style={{ textAlign: "center" }}>Loading</p>;
    }
    if (this.state.loadedPost != null) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.content}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
