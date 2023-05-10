import TaskStore from '../src/modules/TaskStore.js';

describe('list of tasks', () => {
  test('render tasks', () => {
    // Arrange
    document.body.innerHTML = `
      <ul></ul>
    `;
    const taskStore = new TaskStore();
    const listContainer = document.querySelector('ul');

    // Act
    listContainer.innerHTML = taskStore.renderTasks();

    // Assert
    expect(listContainer.children.length).toBe(taskStore.length());
  });
});
