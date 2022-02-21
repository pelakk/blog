const initialState = 1;

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setPage":
      return action.payload;
    default:
      return state;
  }
};

export default pageReducer;
