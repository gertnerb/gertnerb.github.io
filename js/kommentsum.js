function updateCommentCount() {
  const counter = document.getElementById("commentCount");
  const list = document.getElementById("ol-story-comment-list");

  if (!counter || !list) return;

  const count = list.querySelectorAll(".li-story-comment-item").length;
  counter.textContent = count;
}

document.addEventListener("DOMContentLoaded", updateCommentCount);

document.addEventListener("commentAdded", updateCommentCount);