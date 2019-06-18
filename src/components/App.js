import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import TaskListContainer from "./task/TaskListContainer";
import ManageTask from "./task/ManageTask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withHotKeys } from './HOC/withHotKeys';
import { keyMap, handlers } from '../shortcuts';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('this.props.handlers=', this.props.handlers);
    const setAddTaskHandler = this.getHandler('setAddTaskHandler');
    const setTaskListHandler = this.getHandler('setTaskListHandler');
    setAddTaskHandler(() => this.props.history.push("/task"));
    setTaskListHandler(() => this.props.history.push("/tasks"));
  }

  getHandler = name => this.props.handlers[name];

  render() {
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={TaskListContainer} />
          <Route path="/tasks" component={TaskListContainer} />
          <Route path="/task/:slug" component={ManageTask} />
          <Route path="/task" component={ManageTask} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar />
      </div>
    );
  }
}

export default withHotKeys(
  withRouter(App),
  { keyMap: keyMap.appComponent, handlers: handlers.appComponent }
);
