import React from 'react';

import Post from './Post';

const AllPosts = (props)=> {


      let posts= props.posts.map((post)=>{
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
export default AllPosts;
