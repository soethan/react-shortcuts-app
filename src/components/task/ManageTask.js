import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadTasks, saveTask } from "../../actions/taskActions";
import PropTypes from "prop-types";
import TaskForm from "./TaskForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import { withHotKeys } from '../HOC/withHotKeys';
import { keyMap, shortcutHandlers } from '../../shortcuts';

const newTask = {
  id: null,
  desc: ''
};

let task, setTask;

function ManageTask({
  tasks,
  loadTasks,
  saveTask,
  history,
  hotkeyHandlers,
  ...props
}) {
  [task, setTask] = useState({ ...props.task });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  function bindShortcutHandlers() {
    hotkeyHandlers.onSaveTask = handleSave;
  };
  hotkeyHandlers && bindShortcutHandlers();

  useEffect(() => {
    if (tasks.length === 0) {
      loadTasks().catch(error => {
        alert("Loading tasks failed" + error);
      });
    } else {
      setTask({ ...props.task });
    }
  }, [props.task]);

  function handleChange(event) {
    const { name, value } = event.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  }

  function formIsValid() {
    const { desc } = task;
    const errors = {};
    if (!desc) errors.desc = "Description is required.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event && event.preventDefault();
    if (!formIsValid()) return;

    setSaving(true);
    saveTask(task).then(() => {
      toast.success("Task saved.");
      history.push("/tasks");
    })
    .catch(error => {
      setSaving(false);
      setErrors({ onSave: error.message });
    });
  }

  return (
    tasks.length === 0 ? (
      <Spinner />
    ) : <TaskForm
      task={task}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

ManageTask.propTypes = {
  task: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  loadTasks: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getTaskBySlug(tasks, slug) {
  return tasks.find(task => task.slug === slug) || null;
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const task =
    slug && state.tasks.length > 0
      ? getTaskBySlug(state.tasks, slug)
      : newTask;
  return {
    task,
    tasks: state.tasks
  };
}

const mapDispatchToProps = {
  loadTasks,
  saveTask
};

export default withHotKeys(
  connect(mapStateToProps, mapDispatchToProps)(ManageTask),
  {
    keyMap: keyMap.manageTaskComponent,
    handlers: shortcutHandlers.manageTaskComponent
  }
);
