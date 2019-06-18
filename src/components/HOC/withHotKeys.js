import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';

const withHotKeys = (WrappedComponent, { keyMap, handlers }) => {
  return class extends Component {
    render() {
      console.log('keyMap=', keyMap);
      console.log('handlers=', handlers);
      return (
        <HotKeys keyMap={keyMap} handlers={handlers} attach={window} focused>
          <WrappedComponent {...this.props} handlers={handlers} />
        </HotKeys>
      );
    }
  }
};

export { withHotKeys };
