      const toggleButtons = document.querySelectorAll(
        ".button-post-toggle-more",
      );

      toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          const hiddenContent = button.nextElementSibling;

          hiddenContent.classList.toggle("is-open");

          if (hiddenContent.classList.contains("is-open")) {
            button.textContent = "Vissza...";
          } else {
            button.textContent = "Folytatom...";
          }
        });
      });