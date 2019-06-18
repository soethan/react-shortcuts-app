import React, { Component } from 'react';
import { HotKeys } from 'react-hotkeys';
import keyMap from '../../shortcuts';

const withHotKeys = (WrappedComponent) => {
  return class extends Component {
    handlers = {};
    render() {
      return (
        <HotKeys keyMap={keyMap} handlers={this.handlers} attach={window} focused>
          <WrappedComponent {...this.props} handlers={this.handlers} />
        </HotKeys>
      );
    }
  }
};

export { withHotKeys };
