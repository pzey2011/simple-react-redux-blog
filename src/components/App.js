import React from 'react';
import PostForm from '../containers/PostForm';
import AllPosts from '../containers/AllPosts';
import { connect } from 'react-redux';
import addPost from '../actions/postActions';

const App =(props)=> {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Post It</h2>
          </div>
          <PostForm addPost={(data)=>{props.addPost(data)}}/>
          <AllPosts posts={props.posts}/>
      </div>
    );
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
