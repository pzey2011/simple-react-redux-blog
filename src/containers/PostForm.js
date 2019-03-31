import React, { Component } from 'react';


export default class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message =  this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message
    };
    this.props.addPost(data);
    this.getTitle.value="";
    this.getMessage.value="";
  }
  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input required type="text" placeholder="Enter Post Title" ref={(input)=>this.getTitle = input}  /><br /><br />
          <textarea required rows="5" cols="28" placeholder="Enter Post" ref={(input)=>this.getMessage = input}/><br /><br />
          <button className="button add-button">Post</button>
        </form>
      </div>
    );
    }
  }
