```javascript
// ============================================================
// WEBSITE SCRIPT
// Sound effects have been completely removed.
// This file handles theme switching, navigation, and carousel behavior.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    // ============================================================
    // THEME TOGGLE
    // Handles the Light/Dark mode button on every page.
    // ============================================================

    const themeToggle = document.getElementById("themeToggle");

    // Restore the user's previously selected theme.
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    // Update the button text to match the current theme.
    function updateThemeButton() {
        if (!themeToggle) return;

        if (document.body.classList.contains("light-theme")) {
            themeToggle.textContent = "☀ LIGHT";
            themeToggle.setAttribute("aria-label", "Switch to dark mode");
        } else {
            themeToggle.textContent = "◐ DARK";
            themeToggle.setAttribute("aria-label", "Switch to light mode");
        }
    }

    updateThemeButton();

    // Switch between Light and Dark themes.
    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("light-theme");

            const currentTheme =
                document.body.classList.contains("light-theme")
                    ? "light"
                    : "dark";

            // Remember the selected theme.
            localStorage.setItem("portfolio-theme", currentTheme);

            updateThemeButton();
        });
    }


    // ============================================================
    // ACTIVE PAGE NAVIGATION
    // Highlights the navigation item for the current page.
    // ============================================================

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-link").forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (
            linkPage &&
            (
                linkPage === currentPage ||
                (currentPage === "" && linkPage === "index.html")
            )
        ) {
            link.classList.add("active");
        }
    });


    // ============================================================
    // BOOTSTRAP CAROUSEL
    // Bootstrap controls the carousel.
    // No sound effects are attached to carousel movement.
    // ============================================================

    const carouselElement = document.querySelector(".carousel");

    if (carouselElement && typeof bootstrap !== "undefined") {

        const carousel = bootstrap.Carousel.getOrCreateInstance(
            carouselElement,
            {
                interval: false,
                ride: false,
                pause: true,
                wrap: true
            }
        );

        // Keep the Bootstrap carousel available for the existing
        // Previous and Next controls.
        window.portfolioCarousel = carousel;
    }


    // ============================================================
    // SMOOTH BUTTON BEHAVIOR
    // Adds a small visual press effect without producing sound.
    // ============================================================

    document.querySelectorAll("button, .btn").forEach(function (button) {

        button.addEventListener("mousedown", function () {
            button.classList.add("button-pressed");
        });

        button.addEventListener("mouseup", function () {
            button.classList.remove("button-pressed");
        });

        button.addEventListener("mouseleave", function () {
            button.classList.remove("button-pressed");
        });
    });


    // ============================================================
    // PAGE LOADED
    // Confirms that the portfolio JavaScript has initialized.
    // ============================================================

    document.body.classList.add("page-ready");

});
```
