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

export const setPage = (page) => {
  return (dispatch) => {
    dispatch({
      type: "setPage",
      payload: page,
    });
  };
};
