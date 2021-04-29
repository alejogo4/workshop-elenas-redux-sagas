import {
  FETCH_GET_CHARACTERS,
  RESPONSE_GET_CHARACTERS,
  ERROR,
  LOADING,
} from './../actions/rickandmorty.action';

const initialState = {
  loading: true,
  error: null,
  characters: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GET_CHARACTERS:
      return {...state, loading: true, characters:null};
    case RESPONSE_GET_CHARACTERS:
      return {...state, loading:false , characters:action.data};
    case ERROR:
      return {...state,loading: false, error: action.data};
    case LOADING:
      return {...state,loading: action.loading};
    default:
      return {...state};
  }
};
