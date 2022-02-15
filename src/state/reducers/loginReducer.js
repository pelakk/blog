const initialState = false;

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return true;
    case "logout":
      return false;
    default:
      return state;
  }
};

export default loginReducer;
