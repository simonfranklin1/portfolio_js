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

window.show = ScrollReveal({reset: true});

/* Home */

show.reveal('#home', {
    duration: 1500
}) 

show.reveal('.title', {
    duration: 1500,
    distance: '50%'
})

/* About */

show.reveal('.about-image', {
    duration: 1500,
    origin: 'left',
    distance: '90px',
    delay: 500
})

show.reveal('.informations', {
    duration: 1500,
    origin: 'right',
    distance: '90px',
    delay: 800
})

show.reveal('.timeline', {
    duration: 1500,
    delay: 1000
})


/* Portfolio */

show.reveal('.projects_card', {
    duration: 1500,
    distance: '90px',
    delay: 500
})

/* Skills */

show.reveal('.box-1', {
    duration: 2000,
    distance: '50%',
    delay: 500
})

show.reveal('.box-2', {
    duration: 2000,
    distance: '50%',
    delay: 800
})

show.reveal('.box-3', {
    duration: 2000,
    distance: '50%',
    delay: 1100
})

show.reveal('.box-4', {
    duration: 2000,
    distance: '50%',
    delay: 1300
})

show.reveal('.box-5', {
    duration: 2000,
    distance: '50%',
    delay: 1500
})

show.reveal('.skills-description', {
    duration: 2000,
    delay: 500
})