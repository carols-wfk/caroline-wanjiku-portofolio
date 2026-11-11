
// 1. Welcome button
const welcomeBtn = document.getElementById("welcomeBtn");
const message = document.getElementById("message");

welcomeBtn.addEventListener("click", function() {
    message.textContent = "Thank you for visiting my portfolio!";
});

// 2. Dark mode
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});

// 3. Add skills dynamically
const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Web Design",
    "Database Management"
];

const skillsList = document.getElementById("skillsList");

skills.forEach(function(skill) {
    const li = document.createElement("li");

    li.textContent = skill;

    skillsList.appendChild(li);
});

// 4. Add projects dynamically
const projects = [
    {
        name: "Portfolio Website",
        description: "A personal portfolio website."
    },
    {
        name: "Calculator",
        description: "A simple JavaScript calculator."
    },
    {
        name: "Student System",
        description: "A student management project."
    }
];

const projectList = document.getElementById("projectList");

projects.forEach(function(project) {
    const card = document.createElement("div");

    card.classList.add("project");

    const title = document.createElement("h3");
    title.textContent = project.name;

    const description = document.createElement("p");
    description.textContent = project.description;

    card.appendChild(title);
    card.appendChild(description);

    projectList.appendChild(card);
});

// 5. Contact form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();
});

// 6. Back to top button
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
