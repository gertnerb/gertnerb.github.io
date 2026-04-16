        const buttonMobileMenuToggle = document.getElementById("buttonMobileMenuToggle");
        const divMobileMenuPanel = document.getElementById("divMobileMenuPanel");

        buttonMobileMenuToggle.addEventListener("click", function () {
            buttonMobileMenuToggle.classList.toggle("button-mobile-menu-toggle-active");
            divMobileMenuPanel.classList.toggle("div-mobile-menu-panel-open");
        });