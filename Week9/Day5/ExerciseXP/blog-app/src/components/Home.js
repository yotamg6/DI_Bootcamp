import { Link } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { getPost, deletePost } from "../redux/actions";
class Home extends React.Component {
  constructor() {
    super();
  }
  render() {
    const postsArr = this.props.posts;
    console.log("render, bef and af:", postsArr);
    return (
      <>
        <h1>Home</h1>
        {postsArr.length > 0 ? (
          postsArr.map((post, i) => {
            const id = post.id;
            return (
              <div key={post.id}>
                <p> {post.title}</p>
                <button onClick={() => this.props.handleClick(id)}>
                  click
                </button>
                <button onClick={() => this.props.deletePost(id)}>
                  Delete post
                </button>
                {/* <Link to={`${id}`} /> */}
                <img src="https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%2010/Day5/Mini%20Projects/Mini%20Project%201%20-%20Redux%20Blog/blog.png"></img>
              </div>
            );
          })
        ) : (
          <p>No posts to show</p>
        )}
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
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (id) => dispatch(getPost(id)),
    deletePost: (id) => dispatch(deletePost(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);

// In the render() function of the component, return all the posts if there are any. Create a ternary operation to check:
// if there is at least one post:
// map the posts
// use the id as the key,
// use the image blog that we imported
// add a Link that redirect the user to the specific post, when clicked on.
// else, return a message “No post to show”
{
  /* <button onClick={() => this.props.handleClick(post.id)}>
                  clickMe
                </button> */
}
