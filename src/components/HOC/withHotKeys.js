import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';

const withHotKeys = (WrappedComponent, { keyMap, handlers }) => {
  return class extends Component {
    render() {
      return (
        <HotKeys keyMap={keyMap} handlers={handlers} attach={window} focused>
          <WrappedComponent {...this.props} hotkeyHandlers={handlers} />
        </HotKeys>
      );
    }
  }
};

export { withHotKeys };
