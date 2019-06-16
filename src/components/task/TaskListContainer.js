import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as taskActions from "../../actions/taskActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import TaskList from "./TaskList";

class TaskListContainer extends Component {
  state = {
    redirectToAddTaskPage: false
  }

  componentDidMount() {
    const { tasks, actions } = this.props;

    if (tasks.length === 0) {
      actions.loadTasks().catch(error => {
        alert("Loading tasks failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddTaskPage && <Redirect to="/task" />}
        <h2>Tasks</h2>

        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary"
          onClick={() => this.setState({ redirectToAddTaskPage: true })}
        >
          Add Task
        </button>
        <TaskList tasks={this.props.tasks} />
      </>
    );
  }
}

TaskListContainer.propTypes = {
  tasks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadTasks: bindActionCreators(taskActions.loadTasks, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskListContainer);
