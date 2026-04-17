document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("commentCount_magyarorszag-johelyek");
  if (!el) return;

  el.textContent = localStorage.getItem("commentCount_magyarorszag-johelyek") ?? 1;
});