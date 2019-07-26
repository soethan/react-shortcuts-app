import { combineReducers } from "redux";
import tasks from "./taskReducer";
import { localizeReducer } from 'react-localize-redux';

const rootReducer = combineReducers({
  tasks,
  localize: localizeReducer
});

export default rootReducer;
