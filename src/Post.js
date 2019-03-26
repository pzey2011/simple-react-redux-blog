import React from 'react';
const Post =(props)=> {
    return (
      <div className="post">
        <h2 className="post_title">{props.post.title}</h2>
        <p className="post_message">{props.post.message}</p>
      </div>
    );
  }
export default Post;
