import React from "react";
import PropTypes from "prop-types";

const TaskList = ({ tasks }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map(task => {
        return (
          <tr key={task.id}>
            <td>{task.desc}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default TaskList;
