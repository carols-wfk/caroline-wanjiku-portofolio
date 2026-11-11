
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    themeToggle.textContent =
        document.body.classList.contains("dark-theme")
        ? "☀️ Light mode"
        : "🌙 Dark mode";
});

