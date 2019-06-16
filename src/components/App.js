import React from "react";
import { Route, Switch } from "react-router-dom";
import TaskListContainer from "./task/TaskListContainer";
import ManageTask from "./task/ManageTask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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

export default App;
