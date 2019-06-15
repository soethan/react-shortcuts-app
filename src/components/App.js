import React from "react";
import { Route, Switch } from "react-router-dom";
import TaskContainer from "./TaskContainer";

function App() {
  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/" component={TaskContainer} />
        <Route path="/tasks" component={TaskContainer} />
      </Switch>
    </div>
  );
}

export default App;
