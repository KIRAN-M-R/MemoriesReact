import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_POST, LIKE, FETCH_BY_SEARCH, START_LOADING, END_LOADING } from '../constants/actionTypes';

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      //console.log(action.payload.data)
      return {...state, posts: action.payload.data, currentPage: action.payload.currentPage, numberOfPages: action.payload.numberOfPages };
    case FETCH_BY_SEARCH:
        return { ...state, posts: action.payload.data };
    case FETCH_POST:
        //console.log(action.payload)
        return { ...state, post: action.payload.post };
    case LIKE:
        return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case CREATE:
        return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
        return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETE:
        return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
    default:
      return state;
  }
};
