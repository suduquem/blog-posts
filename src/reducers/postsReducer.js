const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS': //action.type === 'FETCH_POSTS'
      return action.payload;
    default:
      return state; //To not return undefined
  }
};

export default postsReducer;
