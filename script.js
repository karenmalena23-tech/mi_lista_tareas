const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

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
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", function () {
        task.remove();
    });

    task.appendChild(taskTextElement);
    task.appendChild(deleteButton);

    taskList.appendChild(task);

    taskInput.value = "";
});
