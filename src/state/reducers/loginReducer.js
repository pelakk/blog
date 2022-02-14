const initialState = false;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return true;
    case "logout":
      return false;
    default:
      return state;
  }
};

export default reducer;
