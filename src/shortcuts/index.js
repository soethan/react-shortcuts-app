const keyMap = {
  appComponent: {
    onAddTask: 'shift+a',
    onTaskList: 'shift+l',
  },
  manageTaskComponent: {
    onSaveTask: 'shift+s'
  }
};

const shortcutHandlers = {};
Object.keys(keyMap).forEach(key => {
  shortcutHandlers[key] = {};
});

export { keyMap, shortcutHandlers };
