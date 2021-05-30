import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import property from "./property";

export default combineReducers({
  auth,
  message,
  property
});