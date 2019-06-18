import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';

const withHotKeys = (WrappedComponent, { keyMap }) => {
  return class extends Component {
    handlers = {};
    render() {
      console.log(WrappedComponent);
      return (
        <HotKeys keyMap={keyMap} handlers={this.handlers} attach={window} focused>
          <WrappedComponent {...this.props} handlers={this.handlers} />
        </HotKeys>
      );
    }
  }
};

export { withHotKeys };
