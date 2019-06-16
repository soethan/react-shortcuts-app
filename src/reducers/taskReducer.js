import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function taskReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case types.CREATE_TASK_SUCCESS:
      return [...state, { ...action.task }];
    case types.UPDATE_TASK_SUCCESS:
      return state.map(task =>
        task.id === action.task.id ? action.task : task
      );
    case types.CREATE_TASK:
      return [...state, { ...action.task }];
    case types.LOAD_TASKS_SUCCESS:
      return action.tasks;
    default:
      return state;
  }
}
