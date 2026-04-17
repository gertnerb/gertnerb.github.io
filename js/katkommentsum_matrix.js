document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("commentCount_matrix-titkok");
  if (!el) return;

  el.textContent = localStorage.getItem("commentCount_matrix-titkok") ?? 2;
});