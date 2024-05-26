document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const todoInput = document.getElementById('todo-input');
    const categorySelect = document.getElementById('category-select');
    const prioritySelect = document.getElementById('priority-select');
    const deadlineInput = document.getElementById('deadline-select');
    const notesInput = document.getElementById('notes-input');
    const todoList = document.getElementById('todo-list');

    const task = todoInput.value;
    const category = categorySelect.value;
    const priority = prioritySelect.value;
    const deadline = deadlineInput.value;
    const notes = notesInput.value;

    if (task.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <div class="task-details">
            <p>${task}</p>
            <p class="category">Category: ${category}</p>
            <p class="priority">Priority: ${priority}</p>
            <p class="deadline">Deadline: ${deadline}</p>
            <p class="notes">Notes: ${notes}</p>
        </div>
        <button class="delete-btn">X</button>
    `;

    todoList.appendChild(listItem);

    todoInput.value = '';
    categorySelect.value = 'general';
    prioritySelect.value = 'low';
    deadlineInput.value = '';
    notesInput.value = '';

    listItem.querySelector('.delete-btn').addEventListener('click', function() {
        listItem.remove();
    });
});
