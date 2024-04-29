// Разворачивание и сворачивание карточек недавно добавленных тасков
var last_tasks = document.querySelectorAll(".last_task");

last_tasks.forEach(function (last_task) {
    last_task.addEventListener("click", function() {
        var full_description = last_task.querySelector(".last_task_full_info");

        full_description.classList.toggle("hidden");
    });
});
