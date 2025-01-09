document.addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.getElementById("add-task-button");
    const taskModal = document.getElementById("task-modal");
    const closeModal = document.getElementById("close-modal");
    const saveTaskButton = document.getElementById("save-task");

    const taskInput = document.getElementById("task-input");
    const startTimeInput = document.getElementById("start-time");
    const endTimeInput = document.getElementById("end-time");
    const taskBody = document.getElementById("task-body");

    let tasks = []; // Array to store tasks

    // Open Modal to Add Task
    addTaskButton.addEventListener("click", () => {
        taskModal.style.display = "block";
        clearInputs();
    });

    closeModal.addEventListener("click", () => {
        taskModal.style.display = "none";
    });

    saveTaskButton.addEventListener("click", () => {
        const task = taskInput.value.trim();
        const startTime = startTimeInput.value;
        const endTime = endTimeInput.value;

        if (task && startTime && endTime && startTime < endTime) {
            tasks.push({ task, startTime, endTime });
            tasks = mergeTasks(tasks); // Merge overlapping tasks
            renderTable();
            taskModal.style.display = "none";
        } else {
            alert("Please fill out all fields with valid times.");
        }
    });

    // Render Table
    function renderTable() {
        taskBody.innerHTML = ""; // Clear table rows

        tasks.forEach(({ task, startTime, endTime }) => {
            const row = document.createElement("tr");

            const timeCell = document.createElement("td");
            timeCell.textContent = `${formatTime(startTime)} - ${formatTime(endTime)}`;

            const taskCell = document.createElement("td");
            taskCell.textContent = task;

            row.appendChild(timeCell);
            row.appendChild(taskCell);

            taskBody.appendChild(row);
        });
    }

    // Merge Overlapping Tasks
    function mergeTasks(tasks) {
        tasks.sort((a, b) => a.startTime.localeCompare(b.startTime));
        const merged = [tasks[0]];

        for (let i = 1; i < tasks.length; i++) {
            const last = merged[merged.length - 1];
            const current = tasks[i];

            if (current.startTime <= last.endTime) {
                last.endTime = current.endTime > last.endTime ? current.endTime : last.endTime;
                last.task = `${last.task}, ${current.task}`;
            } else {
                merged.push(current);
            }
        }

        return merged;
    }

    // Format Time (HH:MM to 12-hour format)
    function formatTime(time) {
        const [hour, minute] = time.split(":").map(Number);
        const period = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        return `${formattedHour}:${minute.toString().padStart(2, "0")} ${period}`;
    }

    // Clear Input Fields
    function clearInputs() {
        taskInput.value = "";
        startTimeInput.value = "";
        endTimeInput.value = "";
    }
});
