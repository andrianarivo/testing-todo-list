let globalTask = [
  { index: 1, description: 'Task 1', completion: false },
  { index: 2, description: 'Task 2', completion: true },
];

const getTasks = () => globalTask;

const saveTasks = (tasksArray) => {
  globalTask = tasksArray;
};

export { getTasks, saveTasks };
