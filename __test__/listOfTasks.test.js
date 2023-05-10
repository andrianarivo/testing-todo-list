import TaskStore from '../src/modules/TaskStore.js';

describe('List of Tasks', () => {
  test('Render Tasks', () => {
    // Arrange
    document.body.innerHTML = `
      <ul></ul>
    `;
    const taskStore = new TaskStore();

    // Act
    const listContainer = document.querySelector('ul');
    listContainer.innerHTML = taskStore.renderTasks();

    // Assert
    expect(listContainer.children.length).toBe(taskStore.length());
  });
});
