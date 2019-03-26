export default function addPost(post) {
  return{
    type: "ADD_POST",
    payload: {
      id : post.id,
      title: post.title,
      message: post.message
    }
  }
}
