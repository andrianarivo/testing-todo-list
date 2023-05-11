import TaskStore from '../src/modules/TaskStore.js';

describe('adding tasks', () => {
  test('add one task', () => {
    // Arrange
    document.body.innerHTML = `
    <ul></ul>
  `;
    const taskStore = new TaskStore();
    const listContainer = document.querySelector('ul');

    // Act
    taskStore.addTask({ index: 3, description: 'Task 3', completion: false });
    listContainer.innerHTML = taskStore.renderTasks();

    // Assert
    expect(listContainer.children.length).toBe(taskStore.length());
  });

  test('add many tasks', () => {
    // Arrange
    document.body.innerHTML = `
    <ul></ul>
  `;
    const taskStore = new TaskStore();
    const listContainer = document.querySelector('ul');

    // Act
    taskStore.addTask({ index: 3, description: 'Task 3', completion: false });
    taskStore.addTask({ index: 4, description: 'Task 3', completion: false });
    taskStore.addTask({ index: 5, description: 'Task 3', completion: false });
    taskStore.addTask({ index: 6, description: 'Task 3', completion: false });
    listContainer.innerHTML = taskStore.renderTasks();

    // Assert
    expect(listContainer.children.length).toBe(taskStore.length());
  });
});
