import React, { Component } from 'react';
import {connect} from 'react-redux';
import addPost from './actions/postActions';


class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message
    };
    this.props.dispatch(addPost(data));
    this.getTitle.value="";
    this.getMessage.value="";
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input required type="text" placeholder="Enter Post Title" ref={(input)=>this.getTitle = input}  /><br /><br />
        <textarea required rows="5" cols="28" placeholder="Enter Post" ref={(input)=>this.getMessage = input}/><br /><br />
        <button>Post</button>
      </form>
    );
    }
  }
  export default connect()(PostForm);
