document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                ${taskText}
                <button>Delete</button>
            `;

            taskList.appendChild(listItem);

            taskInput.value = ""; 
        }
    }
    function removeTask(e) {
        if (e.target.tagName === "BUTTON") {
            const listItem = e.target.parentElement;
            taskList.removeChild(listItem);
        }
    }

    addTaskButton.addEventListener("click", addTask);
    taskList.addEventListener("click", removeTask);
});
