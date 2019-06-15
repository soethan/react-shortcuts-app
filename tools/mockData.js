const tasks = [
  {
    id: 1,
    desc: "Task 1"
  },
  {
    id: 2,
    desc: "Task 2"
  },
  {
    id: 3,
    desc: "Task 3"
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  tasks
};
