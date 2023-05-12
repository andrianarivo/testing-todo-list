import { saveTasks } from '../src/modules/Storage.js';
import TaskStore from '../src/modules/TaskStore.js';

beforeEach(() => {
  saveTasks([
    { index: 1, description: 'Task 1', completion: false },
    { index: 2, description: 'Task 2', completion: false },
  ]);
});

describe('removing completed tasks', () => {
  test('remove completed', () => {
    // Arrange
    document.body.innerHTML = `
    <ul></ul>
  `;
    const taskStore = new TaskStore();
    const listContainer = document.querySelector('ul');
    taskStore.toggleTask(1);
    taskStore.toggleTask(2);

    // Act
    taskStore.removeCompleted();

    // Assert
    listContainer.innerHTML = taskStore.renderTasks();
    expect(listContainer.children.length).toBe(0);
  });
});
