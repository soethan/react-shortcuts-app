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
  }

  redirectToAddTask = () => this.props.history.push("/task");

  redirectToTaskList = () => this.props.history.push("/tasks");

  componentDidMount() {
    this.props.handlers.onAddTask = this.redirectToAddTask;
    this.props.handlers.onTaskList = this.redirectToTaskList;
  }

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
