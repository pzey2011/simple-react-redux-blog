import React , {Fragment} from 'react';
import Post from './Post';
import EditForm from './EditForm';

const AllPosts = (props)=> {
      let posts= props.posts.map((post)=>{
          debugger;
          return(
            <Fragment>
              <Post post={post} editPost={props.editPost} deletePost={props.deletePost}/>
              <div style={{display :(post.editing ? 'block':'none')}}><EditForm post={post} editPost={props.editPost} updatePost={props.updatePost}/> </div>
            </Fragment>
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
