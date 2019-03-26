import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPosts from './AllPosts';
import { connect } from 'react-redux';
import addPost from './actions/postActions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Post It</h2>
          </div>
          <PostForm addPost={(data)=>{this.props.addPost(data)}}/>
          <AllPosts posts={this.props.posts}/>
      </div>
    );
    }
  }
  const mapStateToProps = (state) => {
      return {
          posts: state.posts
      }
  }
  const matchDispatchToProps = (dispatch)=>{
    return{
      addPost : (data) =>{
        dispatch(addPost(data));
      }
    }
  };
  export default connect(mapStateToProps,matchDispatchToProps)(App);
