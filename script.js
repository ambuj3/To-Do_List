// Selectors
const form = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Event listeners
form.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask(taskInput.value);
    taskInput.value = '';
});

taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const action = event.target.className;
        const taskItem = event.target.parentElement;
        const taskText = taskItem.firstChild.textContent;

        if (action === 'delete') {
            deleteTask(taskItem);
        } else if (action === 'edit') {
            editTask(taskItem, taskText);
        } else if (action === 'complete') {
            completeTask(taskItem);
        }
    }
});

// Functions
function addTask(taskText) {
    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="edit">Edit</button>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        </div>
    `;
    taskList.appendChild(li);
}

function deleteTask(taskItem) {
    taskItem.remove();
}

function editTask(taskItem, taskText) {
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.firstChild.textContent = newTaskText;
    }
}

function completeTask(taskItem) {
    taskItem.classList.toggle('completed');
}
