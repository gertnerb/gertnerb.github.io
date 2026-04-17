document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("commentCount_vuken-off-grid");
  if (!el) return;

  el.textContent = localStorage.getItem("commentCount_vuken-off-grid") ?? 2;
});