import React from "react";
import PropTypes from "prop-types";
import { withLocalize, Translate } from 'react-localize-redux';
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
      <h2>{task.id ? <Translate id="edit" /> : <Translate id="add" />} Task</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="desc"
        label={<Translate id="description" />}
        value={task.desc}
        onChange={onChange}
        error={errors.desc}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : <Translate id="save" />}
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

export default withLocalize(TaskForm);
