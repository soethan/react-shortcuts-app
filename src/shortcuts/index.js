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
  manageTaskComponent: {},
};

function setShortcutHandler(componentName, key, handlerFn) {
  handlers[componentName][key] = handlerFn;
};

export { keyMap, handlers, setShortcutHandler };
