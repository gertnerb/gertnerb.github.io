

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("commentCount_ai-zeneszerzo");
  if (!el) return;

  el.textContent = localStorage.getItem("commentCount_ai-zeneszerzo") ?? 3;
});