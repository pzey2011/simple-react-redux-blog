export function addPost(post) {
  return{
    type: "ADD_POST",
    payload: {
      id : post.id,
      title: post.title,
      message: post.message,
      editing: false
    }
  }
}
export function editPost(id) {
  return{
    type: "EDIT_POST",
    payload: {
      id : id,
    }
  }
}
export function deletePost(id) {
  return{
    type: "DELETE_POST",
    payload: {
      id : id,
    }
  }
}
export function updatePost(post) {
  return{
    type: "UPDATE_POST",
    payload: {
      id : post.id,
      title: post.title,
      message: post.message
    }
  }
}
