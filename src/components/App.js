import React from 'react';
import PostForm from '../containers/PostForm';
import AllPosts from '../containers/AllPosts';
import { connect } from 'react-redux';
import {updatePost,deletePost,editPost,addPost} from '../actions/postActions';

const App =(props)=> {
  return (
      <div className="App">
        <div className="navbar">
          <h2 className="center ">Post It</h2>
        </div>
        <PostForm addPost={(data)=>{props.addPost(data)}}/>
        <AllPosts posts={props.posts}
              editPost={(data)=>{props.editPost(data)}}
              updatePost={(data)=>{props.updatePost(data)}}
              deletePost={(data)=>{props.deletePost(data)}}
        />
    </div>
    );
  }
  const mapStateToProps = (state) => {
      return {
          posts: state
      }
  }
  const matchDispatchToProps = (dispatch)=>{
    return{
      addPost : (data) =>{
        dispatch(addPost(data));
      },
      editPost: (data) =>{
        dispatch(editPost(data));
      },
      updatePost: (data) =>{
        dispatch(updatePost(data));
      },
      deletePost: (data) =>{
        dispatch(deletePost(data));
      }
    }
  };
  export default connect(mapStateToProps,matchDispatchToProps)(App);
