const initialState = {
  posts:[]
};
const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_POST':
      state = {
        posts: [...state.posts ,action.payload]
      };
      return state;
    default:
      return state;
  }
};
export default postReducer;
