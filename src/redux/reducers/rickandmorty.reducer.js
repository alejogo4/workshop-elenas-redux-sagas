const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'REDUCER_TYPE':
    return { ...state };

  default:
    return state
  }
};

