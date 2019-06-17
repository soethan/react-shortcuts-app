import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { HotKeys } from 'react-hotkeys';
import TaskListContainer from "./task/TaskListContainer";
import ManageTask from "./task/ManageTask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import keyMap from '../shortcuts';

class App extends Component {
  handlers = {
    addTask: () => this.props.history.push("/task"),
    taskList: () => this.props.history.push("/tasks")
  };

  render() {
    console.log(this.handlers);
    return (
      <div className="container-fluid">
        <HotKeys keyMap={keyMap} handlers={this.handlers} attach={window} focused>
          <Switch>
            <Route exact path="/" component={TaskListContainer} />
            <Route path="/tasks" component={TaskListContainer} />
            <Route path="/task/:slug" component={ManageTask} />
            <Route path="/task" component={ManageTask} />
          </Switch>
        </HotKeys>
        <ToastContainer autoClose={3000} hideProgressBar />
      </div>
    );
  }
}

export default withRouter(App);
