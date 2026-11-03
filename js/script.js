
"use strict";

// Управление мобильным меню

const menuButton = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".main-menu");

if (menuButton && mainMenu) {

    menuButton.addEventListener("click", () => {

        const isOpen = mainMenu.classList.toggle("is-open");

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Закрыть меню" : "Открыть меню"
        );
    });

    mainMenu.querySelectorAll("a").forEach((link) => {

        link.addEventListener("click", () => {
            mainMenu.classList.remove("is-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Открыть меню"
            );
        });
    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            mainMenu.classList.remove("is-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
}
