document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("commentCount_abony-vs-fuzesabony");
  if (!el) return;

  el.textContent = localStorage.getItem("commentCount_abony-vs-fuzesabony") ?? 4;
});