const skillIcons = document.querySelectorAll(".skill-box");
const skillDescriptions = document.querySelectorAll(".description");

skillIcons.forEach((skill, index) => {
    skill.addEventListener("mouseenter", () => {
        skillDescriptions.forEach((description) => description.classList.add("hidden"));
        skillDescriptions[index + 1].classList.remove("hidden");
    });

    skill.addEventListener("mouseout", () => {
        skillDescriptions.forEach((description) => description.classList.add("hidden"));
        skillDescriptions[0].classList.remove("hidden");
    });
})