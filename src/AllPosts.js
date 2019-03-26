import React, { Component } from 'react';

import { connect } from 'react-redux';

import Post from './Post';

class AllPosts extends Component {

    render() {
      let posts= this.props.posts.map((post)=>{
          return(
            <Post post={post}/>
          );
        });
        return (
            <div>
                <h1>All Posts</h1>
                {posts}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(AllPosts);
