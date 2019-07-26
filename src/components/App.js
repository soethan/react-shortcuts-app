import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { withLocalize } from 'react-localize-redux';
import TaskListContainer from "./task/TaskListContainer";
import ManageTask from "./task/ManageTask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { withHotKeys } from './HOC/withHotKeys';
import { keyMap, handlers } from '../shortcuts';
import { renderToStaticMarkup } from 'react-dom/server';
import LanguageDropdown from "./LanguageDropdown";
import globalTranslations from './translations/global.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.initialize({
      languages: [
        { name: 'English', code: 'en' }, 
        { name: 'Spanish', code: 'es' }
      ],
      translation: globalTranslations,
      options: { renderToStaticMarkup }
    });
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
        <LanguageDropdown />
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

export default withLocalize(withHotKeys(
  withRouter(App),
  { keyMap: keyMap.appComponent, handlers: handlers.appComponent }
));
