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

show.reveal('.home-header', {
    duration: 2000
}) 

show.reveal('#home button', {
    duration: 2000,
    distance: '50%',
    delay: 500
})

show.reveal('.title', {
    duration: 2000,
    distance: '90px'
})

/* About */

show.reveal('.about-image', {
    duration: 2000,
    origin: 'left',
    distance: '90px',
    delay: 500
})

show.reveal('.informations', {
    duration: 2000,
    origin: 'right',
    distance: '90px',
    delay: 800
})

show.reveal('.timeline', {
    duration: 2000,
    delay: 1000
})


/* Portfolio */

show.reveal('.project-1', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

show.reveal('.project-2', {
    duration: 2000,
    distance: '90px',
    delay: 1000
})

show.reveal('.project-3', {
    duration: 2000,
    distance: '90px',
    delay: 1500
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

show.reveal('.skills-description', {
    duration: 2000,
    delay: 500
})