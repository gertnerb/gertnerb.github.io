  const form = document.querySelector(".newsletter-form");
  const modal = document.getElementById("newsletterModal");
  const closeBtn = document.getElementById("newsletterModalClose");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // opcionális: form reset
    this.reset();

    // modal megnyitása
    modal.classList.add("active");
  });

  // bezárás X-re
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // bezárás háttérre kattintva
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });