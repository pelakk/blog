const initialState = "";

const emailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setEmail":
      return action.payload;
    default:
      return state;
  }
};

export default emailReducer;
