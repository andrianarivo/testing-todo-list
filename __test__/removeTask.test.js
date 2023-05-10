import TaskStore from '../src/modules/TaskStore.js';

jest.mock('../src/modules/Storage');

describe('remove tasks', () => {
  test('remove one task', () => {
    // Arrange
    document.body.innerHTML = `
      <ul></ul>
    `;
    const taskStore = new TaskStore();
    const listContainer = document.querySelector('ul');

    // Act
    taskStore.removeTask(1);
    listContainer.innerHTML = taskStore.renderTasks();

    // Assert
    expect(listContainer.children.length).toBe(taskStore.length());
  });

  test('remove many tasks', () => {
    // Arrange
    document.body.innerHTML = `
      <ul></ul>
    `;
    const taskStore = new TaskStore();
    const listContainer = document.querySelector('ul');

    // Act
    taskStore.removeTask(1);
    taskStore.removeTask(2);
    listContainer.innerHTML = taskStore.renderTasks();

    // Assert
    expect(listContainer.children.length).toBe(taskStore.length());
  });
});
