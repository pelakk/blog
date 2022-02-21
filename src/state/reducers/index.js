import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import emailReducer from "./emailReducer";
import pageReducer from "./pageReducer";

const reducers = combineReducers({
  login: loginReducer,
  email: emailReducer,
  page: pageReducer,
});

export default reducers;
