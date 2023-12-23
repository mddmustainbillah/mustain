document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const projects = document.querySelectorAll(".project");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            projects.forEach(project => {
                if (category === "all" || project.getAttribute("data-category") === category) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});
