const form = document.querySelector("#form-story-reply-form");
const nameInput = document.querySelector("#input-story-author-name");
const messageInput = document.querySelector("#textarea-story-comment-body");
const list = document.querySelector("#ol-story-comment-list");

if (form && nameInput && messageInput && list) {
  const storyId = form.dataset.storyId;
  const storageKey = `storyComments_${storyId}`;

  function getDate() {
    return new Date().toLocaleString("hu-HU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function getAvatar() {
    return `https://picsum.photos/seed/${Math.random()}/96/96`;
  }

  function createComment(data) {
    const li = document.createElement("li");
    li.className = "li-story-comment-item";

    li.innerHTML = `
      <div class="div-story-comment-card">
        <img class="img-story-comment-avatar" src="${data.avatar}" alt="Kommentelő">
        <div class="div-story-comment-head">
          <h5 class="h5-story-comment-name">${data.name}</h5>
          <span class="span-story-comment-date">${data.date}</span>
        </div>
        <div class="div-story-comment-text">${data.message}</div>
      </div>
    `;

    return li;
  }

  function getSaved() {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  }

  function save(data) {
    const comments = getSaved();
    comments.push(data);
    localStorage.setItem(storageKey, JSON.stringify(comments));
  }

  function saveCommentCount() {
    const count = list.querySelectorAll(".li-story-comment-item").length;
    localStorage.setItem(`commentCount_${storyId}`, String(count));
  }

  function renderSaved() {
    const comments = getSaved();

    comments.forEach(c => {
      list.appendChild(createComment(c));
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) return;

    const data = {
      name,
      message,
      date: getDate(),
      avatar: getAvatar()
    };

    save(data);
    list.appendChild(createComment(data));
    form.reset();

    saveCommentCount();

    document.dispatchEvent(new Event("commentAdded"));
  });

  renderSaved();
  saveCommentCount();
}