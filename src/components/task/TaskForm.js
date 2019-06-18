import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";

const TaskForm = ({
  task,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{task.id ? "Edit" : "Add"} Task</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="desc"
        label="Description"
        value={task.desc}
        onChange={onChange}
        error={errors.desc}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

TaskForm.propTypes = {
  task: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default TaskForm;
