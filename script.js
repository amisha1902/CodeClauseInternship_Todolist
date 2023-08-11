const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = newTaskInput.value;
    if (taskText.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="completeBtn">Complete</button>
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(li);
        newTaskInput.value = "";

        const completeButton = li.querySelector(".completeBtn");
        const deleteButton = li.querySelector(".deleteBtn");

        completeButton.addEventListener("click", completeTask);
        deleteButton.addEventListener("click", deleteTask);
    }
}

function completeTask(event) {
    const task = event.target.parentNode;
    task.classList.toggle("completed");
}

function deleteTask(event) {
    const task = event.target.parentNode;
    taskList.removeChild(task);
}
