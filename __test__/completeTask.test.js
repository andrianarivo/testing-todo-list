import { saveTasks } from '../src/modules/Storage.js';
import TaskStore from '../src/modules/TaskStore.js';

beforeEach(() => {
  saveTasks([
    { index: 1, description: 'Task 1', completion: false },
    { index: 2, description: 'Task 2', completion: false },
  ]);
});

describe('completing tasks', () => {
  test('complete one task', () => {
    // Arrange
    document.body.innerHTML = `
    <ul></ul>
  `;
    const taskStore = new TaskStore();
    const listContainer = document.querySelector('ul');

    // Act
    taskStore.toggleTask(1);

    // Assert
    listContainer.innerHTML = taskStore.renderTasks();
    const taskOne = document.querySelector('ul li:nth-child(1) div input');
    expect(taskOne.checked).toBe(true);
  });

  test('complete many tasks', () => {
    // Arrange
    document.body.innerHTML = `
    <ul></ul>
  `;
    const taskStore = new TaskStore();
    const listContainer = document.querySelector('ul');

    // Act
    taskStore.toggleTask(1);
    taskStore.toggleTask(2);

    // Assert
    listContainer.innerHTML = taskStore.renderTasks();
    const taskOne = document.querySelector('ul li:nth-child(1) div input');
    const taskTwo = document.querySelector('ul li:nth-child(2) div input');
    expect(taskOne.checked).toBe(true);
    expect(taskTwo.checked).toBe(true);
  });
});
