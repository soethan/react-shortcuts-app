const keyMap = {
  appComponent: {
    onAddTask: 'alt+a',
    onTaskList: 'alt+t',
  },
  manageTaskComponent: {
    onSaveTask: 'alt+s'
  }
};

const handlers = {
  appComponent: {
    addTaskHandler: null,
    taskListHandler: null,
    setAddTaskHandler: fn => handlers.appComponent.addTaskHandler = fn,
    setTaskListHandler: fn => handlers.appComponent.taskListHandler = fn,
    onAddTask: () => handlers.appComponent.addTaskHandler(),
    onTaskList: () => handlers.appComponent.taskListHandler(),
  },
  manageTaskComponent: {
    saveTaskHandler: null,
    setSaveTaskHandler: fn => handlers.manageTaskComponent.saveTaskHandler = fn,
    onSaveTask: () => handlers.manageTaskComponent.saveTaskHandler(),
  },
};

export { keyMap, handlers };
