document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("commentCount_nyiltan-dopping");
  if (!el) return;

  el.textContent = localStorage.getItem("commentCount_nyiltan-dopping") ?? 0;
});