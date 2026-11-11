
document.addEventListener("DOMContentLoaded", function () {

    // 1. Mobile navigation menu
    const menuButton = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("show");
            menuButton.setAttribute(
                "aria-expanded",
                navMenu.classList.contains("show")
            );
        });

        navMenu.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("show");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    // 2. Dark and light theme toggle
    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {
        const savedTheme = localStorage.getItem("portfolio-theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-theme");
        }

        themeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-theme");

            const currentTheme =
                document.body.classList.contains("dark-theme")
                    ? "dark"
                    : "light";

            localStorage.setItem("portfolio-theme", currentTheme);
            themeButton.textContent =
                currentTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
        });
    }

    // 3. Typing animation
    const typingElement = document.getElementById("typing-text");

    if (typingElement) {
        const words = [
            "Web Developer",
            "Computer Science Student",
            "Creative Designer"
        ];

        let wordIndex = 0;
        let letterIndex = 0;
        let deleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];

            if (deleting) {
                letterIndex--;
            } else {
                letterIndex++;
            }

            typingElement.textContent =
                currentWord.substring(0, letterIndex);

            let speed = deleting ? 70 : 120;

            if (!deleting && letterIndex === currentWord.length) {
                deleting = true;
                speed = 1200;
            } else if (deleting && letterIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                speed = 400;
            }

            setTimeout(typeEffect, speed);
        }

        typeEffect();
    }

    // 4. Welcome message
    const welcomeButton = document.getElementById("welcome-btn");

    if (welcomeButton) {
        welcomeButton.addEventListener("click", function () {
            alert("Welcome to Caroline Wanjiku's Portfolio!");
        });
    }

    // 5. Interactive skill and project cards
    const interactiveCards = document.querySelectorAll(
        ".skill-card, .project-card"
    );

    interactiveCards.forEach(function (card) {
        card.setAttribute("tabindex", "0");

        function selectCard() {
            card.classList.toggle("selected");
        }

        card.addEventListener("click", selectCard);

        card.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                selectCard();
            }
        });
    });

    // 6. Contact form validation
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            const message = document.getElementById("message")?.value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all the fields.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            const subject = encodeURIComponent(
                "Portfolio message from " + name
            );

            const body = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message
            );

            alert("Your email application will open to send the message.");

            window.location.href =
                "mailto:carolinewanjiku68640@gmail.com" +
                "?subject=" + subject +
                "&body=" + body;

            contactForm.reset();
        });
    }

    // 7. Back-to-top button
    const topButton = document.getElementById("back-to-top");

    if (topButton) {
        window.addEventListener("scroll", function () {
            topButton.style.display =
                window.scrollY > 300 ? "block" : "none";
        });

        topButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 8. Highlight active navigation link
    const sections = document.querySelectorAll("section[id]");
    const navigationLinks = document.querySelectorAll("nav a[href^='#']");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    navigationLinks.forEach(function (link) {
                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + entry.target.id
                        ) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        }, {
            threshold: 0.4
        });

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }

    // 9. Automatically update copyright year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
