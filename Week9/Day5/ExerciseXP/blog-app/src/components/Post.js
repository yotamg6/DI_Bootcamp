import React from "react";
import { connect } from "react-redux";
class Post extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { posts, id } = this.props;
    const selectedPost = posts.find((post) => post.id == id);
    return (
      <>
        <h1>Post no {selectedPost.id}</h1>
        <div> {selectedPost.title}</div>
        <div> {selectedPost.body}</div>
        <img src="https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%2010/Day5/Mini%20Projects/Mini%20Project%201%20-%20Redux%20Blog/blog.png"></img>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    id: state.id,
  };
};
// use the id to render specific post
export default connect(mapStateToProps, null)(Post);
