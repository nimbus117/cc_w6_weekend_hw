// wait until all DOM content is loaded before form/button actions are available
document.addEventListener('DOMContentLoaded', () => {

  // add form submit event listener
  const form = selector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  // add delete button click event listener
  const deleteButton = selector('#deleteButton');
  deleteButton.addEventListener('click', handleDeleteButton);
})

// function called by form submit event listener
const handleFormSubmit = function (e) {

  // prevent default form behaviour
  e.preventDefault();

  // create li element 'newTask'
  const newTask = creator('li');

  // add html classes to newTask
  newTask.classList.add('flex-item', this.priority.value);

  // create category element, set text content and append to newTask
  createAndAppend('h2', 'category', newTask);
  // create dueDate element, set text content and append to newTask
  createAndAppend('h5', 'dueDate', newTask);
  // create task (details) element, set text content and append to newTask
  createAndAppend('p', 'task', newTask);

  // prepend newTask to the task list ul element
  const taskList = selector('#task-list');
  taskList.insertBefore(newTask, taskList.firstChild);

  // reset form after submission
  this.reset();
};

// function called by deleteButton click event listener
const handleDeleteButton = function () {
  const taskList = selector('#task-list');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  };
};

// helper functions
// select an existing element
const selector = element => document.querySelector(element);
// create a new element
const creator = element => document.createElement(element);
// create element, set text content and append to parent
// --------- Why does this work here? Does it not retain definition context?
const createAndAppend = (elementType, content, parent) => {
  const element = creator(elementType);
  element.textContent = this[content].value;
  parent.appendChild(element);
}
