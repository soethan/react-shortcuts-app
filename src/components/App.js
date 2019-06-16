import React from "react";
import { Route, Switch } from "react-router-dom";
import TaskListContainer from "./task/TaskListContainer";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={TaskListContainer} />
        <Route path="/tasks" component={TaskListContainer} />
      </Switch>
    </div>
  );
}

export default App;
