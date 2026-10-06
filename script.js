const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

function updateCounter() {
    const tasks = taskList.querySelectorAll("li");

    let pending = 0;
    let completed = 0;

    tasks.forEach(function (task) {
        const taskTextElement = task.querySelector("span");

        if (taskTextElement.classList.contains("completed")) {
            completed++;
        } else {
            pending++;
        }
    });

    pendingCount.textContent = pending;
    completedCount.textContent = completed;
}

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Escribe una tarea primero.");
        return;
    }

    const task = document.createElement("li");

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    taskTextElement.addEventListener("click", function () {
        taskTextElement.classList.toggle("completed");
        updateCounter();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", function () {
        task.remove();
        updateCounter();
    });

    task.appendChild(taskTextElement);
    task.appendChild(deleteButton);

    taskList.appendChild(task);

    taskInput.value = "";

    updateCounter();
});
