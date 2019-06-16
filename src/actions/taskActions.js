import * as types from "./actionTypes";
import * as taskApi from "../api/taskApi";

function createTask(task) {
  return { type: types.CREATE_TASK, task };
}

function loadTasksSuccess(tasks) {
  return { type: types.LOAD_TASKS_SUCCESS, tasks };
}

function loadTasks() {
  return function(dispatch) {
    return taskApi
      .getTasks()
      .then(tasks => {
        dispatch(loadTasksSuccess(tasks));
      })
      .catch(error => {
        throw error;
      });
  };
}

function createTaskSuccess(task) {
  return { type: types.CREATE_TASK_SUCCESS, task };
}

function updateTaskSuccess(task) {
  return { type: types.UPDATE_TASK_SUCCESS, task };
}

function saveTask(task) {
  //eslint-disable-next-line no-unused-vars
  return function(dispatch, getState) {
    return taskApi
      .saveTask(task)
      .then(savedTask => {
        task.id
          ? dispatch(updateTaskSuccess(savedTask))
          : dispatch(createTaskSuccess(savedTask));
      })
      .catch(error => {
        throw error;
      });
  };
}

export {
  createTask,
  loadTasksSuccess,
  loadTasks,
  saveTask,
  updateTaskSuccess,
  createTaskSuccess
}
