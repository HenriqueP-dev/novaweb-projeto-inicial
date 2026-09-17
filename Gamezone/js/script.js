const menuButton = document.getElementById("menu-toggle");
const mainNavigation = document.getElementById("main-navigation");

if (menuButton && mainNavigation) {
    document.body.classList.add("menu-ready");

    const closeMenu = () => {
        mainNavigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
    };

    menuButton.addEventListener("click", () => {
        const menuIsOpen = mainNavigation.classList.toggle("is-open");
        menuButton.setAttribute("aria-expanded", String(menuIsOpen));
    });

    mainNavigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && mainNavigation.classList.contains("is-open")) {
            closeMenu();
            menuButton.focus();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 720) {
            closeMenu();
        }
    });
}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

const filterButtons = document.querySelectorAll(".filter-chip");
const postCards = document.querySelectorAll("#post-grid .post-card");

if (filterButtons.length && postCards.length) {
    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedCategory = button.dataset.filter;

            filterButtons.forEach((item) => {
                const isActive = item === button;
                item.classList.toggle("active", isActive);
                item.setAttribute("aria-pressed", String(isActive));
            });

            postCards.forEach((card) => {
                const shouldShow = selectedCategory === "todos"
                    || card.dataset.category === selectedCategory;

                card.classList.toggle("is-hidden", !shouldShow);
            });
        });
    });
}

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const nameField = document.getElementById("nome");
        const visitorName = nameField.value.trim();

        formStatus.textContent = `Obrigado, ${visitorName}! Sua mensagem foi validada nesta demonstração.`;
        contactForm.reset();
    });
}
