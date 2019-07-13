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
  appComponent: {},
  manageTaskComponent: {
    saveTaskHandler: null,
    setSaveTaskHandler: fn => handlers.manageTaskComponent.saveTaskHandler = fn,
    onSaveTask: () => handlers.manageTaskComponent.saveTaskHandler(),
  }
};

export { keyMap, handlers };
