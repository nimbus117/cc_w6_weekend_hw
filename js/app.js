// wait until all DOM content is loaded before form/button actions are available
document.addEventListener('DOMContentLoaded', () => {
  // add form submit event listener
  const form = selector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  // add delete button event listener
  const deleteButton = selector('#deleteButton');
  deleteButton.addEventListener('click', handleDeleteButton);
})

// function called by form submit event listener
const handleFormSubmit = function(e) {
  // prevent default form behaviour
  e.preventDefault();
  // helper function - set element text content and append to newTask
  const addTextAndAppend = (element, input) => {
    element.textContent = this[input].value;
    newTask.appendChild(element);
  }
  // create li element 'newTask'
  const newTask = creator('li');
  // add html classes to newTask
  newTask.classList.add('flex-item');
  newTask.classList.add(this.priority.value);
  // create category element, set text content and append to newTask
  const taskCategory = creator('h2');
  addTextAndAppend(taskCategory, 'category')
  // create dueDate element, set text content and append to newTask
  const taskDueDate = creator('h5');
  addTextAndAppend(taskDueDate, 'dueDate')
  // create task (details) element, set text content and append to newTask
  const task = creator('p');
  addTextAndAppend(task, 'task')
  // append the newTask to the task list ul element
  const taskList = selector('#task-list');
  taskList.insertBefore(newTask, taskList.firstChild);
  // reset form after submission
  this.reset();
};

// function called by deleteButton click event listener
const handleDeleteButton = function (){
  const taskList = selector('#task-list');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  };
};

// helper function to query for and select an element
const selector = element => document.querySelector(element);
// helper function to create a new element
const creator = element => document.createElement(element);
