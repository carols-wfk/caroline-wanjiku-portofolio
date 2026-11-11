
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        const darkMode = document.body.classList.contains("dark-theme");

        themeToggle.textContent = darkMode
            ? "☀️ Light mode"
            : "🌙 Dark mode";

        themeToggle.setAttribute("aria-pressed", darkMode);

    });
}
