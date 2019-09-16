import { flatten, map, values } from 'lodash';

const keyMap = {
  appComponent: {
    onAddTask: 'shift+a',
    onTaskList: 'shift+l',
  },
  manageTaskComponent: {
    onSaveTask: 'shift+s'
  }
};

const keysList = flatten(map(values(keyMap), mapping => values(mapping)));
const lettersInKeysList = keysList.map(key => key.split('+')[1].toUpperCase());

const shortcutHandlers = {};
Object.keys(keyMap).forEach(key => {
  shortcutHandlers[key] = {};
});

bindWindowsKeyDown();

function bindWindowsKeyDown() {
  if (!window.onkeydown) {
    window.onkeydown = e => {
      let key;
      let isShift;
      if (window.event) {
        key = window.event.keyCode;
        isShift = !!window.event.shiftKey;
      } else {
        key = e.which;
        isShift = !!e.shiftKey;
      }
      if (isShift) {
        switch (key) {
          case 16: // ignore shift key
            break;
          default:
            if (lettersInKeysList.includes(String.fromCharCode(key))) {
              if (document.activeElement) {
                document.activeElement.blur();
              }
            }
            break;
        }
      }

    };
  }
}

export { keyMap, shortcutHandlers };
