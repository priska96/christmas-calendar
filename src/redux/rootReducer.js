import { combineReducers } from "redux";

import counterReducer from "./Counter/counter.reducer";

const rootReducer = combineReducers({
  doors: counterReducer
});

export default rootReducer;
