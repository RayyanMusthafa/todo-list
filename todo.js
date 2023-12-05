function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    var li = document.createElement('li');
    li.innerHTML = `   <div style="background-color: rgba(0, 0, 0, 0.5); color: white;">
        <span style="margin: 10px" > <strong>${taskInput.value}</strong> </span>
        <button onclick="editTask(this)"><i class="fa-regular fa-pen-to-square"></i></button>
        <button onclick="deleteTask(this)"><i class="fa-regular fa-square-minus"></i></button>
    </div>`;
    taskList.appendChild(li);

    taskInput.value = ''; // Clear the input field after adding the task
}

function editTask(button) {
    var newTask = prompt('Edit task:', button.parentNode.querySelector('span').innerText);
    if (newTask !== null) {
        button.parentNode.querySelector('span').innerText = newTask;
    }
}

function deleteTask(button) {
    var confirmDelete = confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
        var li = button.parentNode.parentNode; // Traverse up to the parent li
        li.parentNode.removeChild(li);
    }
}
