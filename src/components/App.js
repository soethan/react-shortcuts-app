import React from "react";
import { Route, Switch } from "react-router-dom";
import TaskListContainer from "./task/TaskListContainer";
import ManageTask from "./task/ManageTask";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={TaskListContainer} />
        <Route path="/tasks" component={TaskListContainer} />
        <Route path="/task/:slug" component={ManageTask} />
        <Route path="/task" component={ManageTask} />
      </Switch>
    </div>
  );
}

export default App;
