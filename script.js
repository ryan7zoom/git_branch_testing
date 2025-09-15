console.log('Branch test working!');

const taskInput = document.querySelector('#taskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const todoList = document.querySelector('#todoList');

function createTask(userText){
    const li = document.createElement('li');
    li.textContent = userText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
}

addTaskBtn.addEventListener('click', () => {
    const userText = taskInput.value.trim();
    createTask(userText);
    taskInput.value = '';
})

todoList.addEventListener('click', (e) => {
    const clicked = e.target;
    if(clicked.tagName === 'LI'){
        clicked.classList.toggle('completed');
    }

    if(clicked.tagName === 'BUTTON'){
        clicked.parentElement.remove();
    }
})