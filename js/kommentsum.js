function updateCommentCount() {
  const counter = document.getElementById("commentCount");
  const list = document.getElementById("ol-story-comment-list");

  if (!counter || !list) return;

  const count = list.querySelectorAll(".li-story-comment-item").length;
  counter.textContent = count;
}

// betöltéskor
document.addEventListener("DOMContentLoaded", updateCommentCount);

// 🔥 amikor új komment jön
document.addEventListener("commentAdded", updateCommentCount);