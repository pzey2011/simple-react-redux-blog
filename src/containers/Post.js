import React from 'react';
const Post =(props)=> {
    const handleEdit = (e) => {
      e.preventDefault();
      props.editPost(props.post.id);
    }
    const handleDelete = (e) => {
      e.preventDefault();
      props.deletePost(props.post.id);
    }
    return (
      <div className="post">
        <h2 className="post_title">{props.post.title}</h2>
        <p className="post_message">{props.post.message}</p>
        <button className="button edit-button" onClick={handleEdit}>Edit</button>
        <button className="button delete-button" onClick={handleDelete}>Delete</button>
      </div>
    );
  }
export default Post;
