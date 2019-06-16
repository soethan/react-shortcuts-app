import React, { Component } from "react";
import { connect } from "react-redux";
import * as taskActions from "../../actions/taskActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import TaskList from "./TaskList";

class TaskListContainer extends Component {
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
        <h2>Tasks</h2>
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
