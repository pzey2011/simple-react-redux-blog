const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_POST':
      return [...state ,action.payload];
    case 'EDIT_POST':
      return state.map((post)=>post.id === action.payload.id ?
            {
              ...post,
              editing:!post.editing
            }:post);

    case 'UPDATE_POST':
      return state.map((post)=>{
        if(post.id === action.payload.id) {
          return {
             ...post,
             title:action.payload.title,
             message:action.payload.message,
             editing: !post.editing
          }
        }
        else {
          return post;
        }
      })
    case 'DELETE_POST':
      return state.filter((post)=>post.id !== action.payload.id);
    default:
      return state;
  }
};
export default postReducer;
