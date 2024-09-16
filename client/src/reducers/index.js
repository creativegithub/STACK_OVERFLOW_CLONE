import { combineReducers } from "redux";
import authReducer from "./auth";
import currentuserReducer from "./currentuser";
import usersReducer from "./users";
import questionReducer from "./question";

export default combineReducers({
  authReducer,
  currentuserReducer,
  usersReducer,
  questionReducer,
});
