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

function setShortcutHandler(componentName, handlerKey, handlerFn) {
  handlers[componentName][handlerKey] = handlerFn;
};

export { keyMap, handlers, setShortcutHandler };
