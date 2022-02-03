import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import { connect } from "react-redux";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    if (this.props.id > 0) {
      return <Post />;
    } else {
      return (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path={`/${props.id}`} element={<Post />} /> */}
          </Routes>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    id: state.id,
  };
};

export default connect(mapStateToProps)(App);
