import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function taskReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case types.CREATE_TASK:
      return [...state, { ...action.task }];
    case types.LOAD_TASKS_SUCCESS:
      return action.tasks;
    default:
      return state;
  }
}
