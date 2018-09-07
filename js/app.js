document.addEventListener('DOMContentLoaded', () => {
  // console.log('test javascript loaded');

  const form = selector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = selector('#deleteButton');
  deleteButton.addEventListener('click', handleDeleteButton);
})

const handleFormSubmit = function(e) {
  e.preventDefault();
  // console.log('test form submit');

  const addTextAndAppend = (element, input) => {
    element.textContent = this[input].value;
    newTask.appendChild(element);
  }

  const newTask = creator('li');
  newTask.classList.add('flex-item');

  const task = creator('h2');
  addTextAndAppend(task, 'task')

  const taskDueDate = creator('h4');
  addTextAndAppend(taskDueDate, 'dueDate')

  const taskCategory = creator('p');
  addTextAndAppend(taskCategory, 'category')

  const taskList = selector('#task-list');
  taskList.appendChild(newTask);

  const priority = this.priority.value
  newTask.classList.add(priority);

  this.reset();
};

const handleDeleteButton = function (){
  const taskList = selector('#task-list');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  };
};

const selector = element => document.querySelector(element);

const creator = element => document.createElement(element);
