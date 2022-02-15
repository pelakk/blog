export const login = () => {
  return (dispatch) => {
    dispatch({
      type: "login",
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: "logout",
    });
  };
};

export const setEmail = (email) => {
  return (dispatch) => {
    dispatch({
      type: "setEmail",
      payload: email,
    });
  };
};
