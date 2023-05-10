import TaskStore from '../src/modules/TaskStore.js';
import addTask from '../src/modules/addTask.js';
import listOfTasks from '../src/modules/listOfTasks.js';

jest.mock('../src/modules/TaskStore');

describe('adding tasks', () => {
  test('add one task', () => {
    // Arrange
    document.body.innerHTML = `
    <ul></ul>
  `;
    const taskStore = new TaskStore();

    // Act
    addTask(taskStore, 'Task 3');

    // Assert
    expect(listOfTasks).toBeCalled();
  });
});
