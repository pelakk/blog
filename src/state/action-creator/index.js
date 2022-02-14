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
