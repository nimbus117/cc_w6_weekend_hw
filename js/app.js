document.addEventListener('DOMContentLoaded', () => {
  // console.log('test javascript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#deleteButton');
  deleteButton.addEventListener('click', handleDeleteButton);
})

const handleFormSubmit = function(e) {
  e.preventDefault();
  // console.log('test form submit');

  const newTask = document.createElement('li');
  newTask.classList.add('flex-item');

  const task = document.createElement('h2');
  task.textContent = this.task.value;
  newTask.appendChild(task);

  const taskDueDate = document.createElement('h4');
  taskDueDate.textContent = this.dueDate.value;
  newTask.appendChild(taskDueDate);

  const taskCategory = document.createElement('p');
  taskCategory.textContent = this.category.value;
  newTask.appendChild(taskCategory);

  const taskList = document.querySelector('#task-list');
  taskList.appendChild(newTask);

  const priority = this.priority.value
  newTask.classList.add(priority);

  this.reset();
};

const handleDeleteButton = function (){
  const taskList = document.querySelector('#task-list');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  };
};
