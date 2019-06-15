import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(task) {
  return { type: types.CREATE_TASK, task };
}

export function loadTasksSuccess(tasks) {
  return { type: types.LOAD_TASKS_SUCCESS, tasks };
}

export function loadTasks() {
  return function(dispatch) {
    return courseApi
      .getCourses()
      .then(courses => {
        dispatch(loadTasksSuccess(courses));
      })
      .catch(error => {
        throw error;
      });
  };
}
