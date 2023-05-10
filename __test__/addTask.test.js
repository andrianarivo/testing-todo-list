import TaskStore from '../src/modules/TaskStore.js';

jest.mock('../src/modules/Storage');

describe('adding tasks', () => {
  test('add one task', () => {
    // Arrange
    document.body.innerHTML = `
    <ul></ul>
  `;
    const taskStore = new TaskStore();
    const listContainer = document.querySelector('ul');

    // Act
    taskStore.addTask({ index: 3, description: 'Task 3', completed: false });
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
    taskStore.addTask({ index: 3, description: 'Task 3', completed: false });
    taskStore.addTask({ index: 4, description: 'Task 3', completed: false });
    taskStore.addTask({ index: 5, description: 'Task 3', completed: false });
    taskStore.addTask({ index: 6, description: 'Task 3', completed: false });
    listContainer.innerHTML = taskStore.renderTasks();

    // Assert
    expect(listContainer.children.length).toBe(taskStore.length());
  });
});
