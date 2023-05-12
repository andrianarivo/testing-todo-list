import { saveTasks } from '../src/modules/Storage.js';
import TaskStore from '../src/modules/TaskStore.js';

beforeEach(() => {
  saveTasks([
    { index: 1, description: 'Task 1', completion: false },
    { index: 2, description: 'Task 2', completion: false },
  ]);
});

describe('editing tasks', () => {
  test('edit one task', () => {
    // Arrange
    document.body.innerHTML = `
    <ul></ul>
  `;
    const taskStore = new TaskStore();
    const listContainer = document.querySelector('ul');

    // Act
    taskStore.editTask(1, 'Task 3');

    // Assert
    listContainer.innerHTML = taskStore.renderTasks();
    const taskOne = document.querySelector('ul li:nth-child(1) div p');
    expect(taskOne.innerHTML).toBe('Task 3');
  });

  test('edit many tasks', () => {
    // Arrange
    document.body.innerHTML = `
    <ul></ul>
  `;
    const taskStore = new TaskStore();
    const listContainer = document.querySelector('ul');

    // Act
    taskStore.editTask(1, 'Task 3');
    taskStore.editTask(2, 'Task 4');

    // Assert
    listContainer.innerHTML = taskStore.renderTasks();
    const taskOne = document.querySelector('ul li:nth-child(1) div p');
    const taskTwo = document.querySelector('ul li:nth-child(2) div p');
    expect(taskOne.innerHTML).toBe('Task 3');
    expect(taskTwo.innerHTML).toBe('Task 4');
  });
});
