const formStoryReplyForm = document.querySelector("#form-story-reply-form");
const inputStoryAuthorName = document.querySelector("#input-story-author-name");
const textareaStoryCommentBody = document.querySelector("#textarea-story-comment-body");
const olStoryCommentList = document.querySelector("#ol-story-comment-list");

if (
  formStoryReplyForm &&
  inputStoryAuthorName &&
  textareaStoryCommentBody &&
  olStoryCommentList
) {
  const storyId = formStoryReplyForm.dataset.storyId;
  const storageKey = `storyComments_${storyId}`;

  function getCurrentCommentDate() {
    const nowDate = new Date();

    return nowDate.toLocaleString("hu-HU", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  function getRandomAvatarUrl() {
    const randomNumber = Math.floor(Math.random() * 100);
    return `https://picsum.photos/seed/story-comment-${randomNumber}/96/96`;
  }

  function createCommentListItem(commentData) {
    const liStoryCommentItem = document.createElement("li");
    liStoryCommentItem.className = "li-story-comment-item";

    const divStoryCommentCard = document.createElement("div");
    divStoryCommentCard.className = "div-story-comment-card";

    const imgStoryCommentAvatar = document.createElement("img");
    imgStoryCommentAvatar.className = "img-story-comment-avatar";
    imgStoryCommentAvatar.src = commentData.avatar;
    imgStoryCommentAvatar.alt = "Kommentelő";

    const divStoryCommentHead = document.createElement("div");
    divStoryCommentHead.className = "div-story-comment-head";

    const h5StoryCommentName = document.createElement("h5");
    h5StoryCommentName.className = "h5-story-comment-name";

    const aStoryCommentNameLink = document.createElement("a");
    aStoryCommentNameLink.href = "#";
    aStoryCommentNameLink.textContent = commentData.name;

    h5StoryCommentName.appendChild(aStoryCommentNameLink);

    const spanStoryCommentDate = document.createElement("span");
    spanStoryCommentDate.className = "span-story-comment-date";
    spanStoryCommentDate.textContent = commentData.date;

    const divStoryCommentText = document.createElement("div");
    divStoryCommentText.className = "div-story-comment-text";
    divStoryCommentText.textContent = commentData.message;

    divStoryCommentHead.appendChild(h5StoryCommentName);
    divStoryCommentHead.appendChild(spanStoryCommentDate);

    divStoryCommentCard.appendChild(imgStoryCommentAvatar);
    divStoryCommentCard.appendChild(divStoryCommentHead);
    divStoryCommentCard.appendChild(divStoryCommentText);

    liStoryCommentItem.appendChild(divStoryCommentCard);

    return liStoryCommentItem;
  }

  function getSavedComments() {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  }

  function saveComment(commentData) {
    const savedComments = getSavedComments();
    savedComments.push(commentData);
    localStorage.setItem(storageKey, JSON.stringify(savedComments));
  }

  function renderSavedComments() {
  const savedComments = getSavedComments();

  savedComments.forEach((commentData) => {
    const liStoryCommentItem = createCommentListItem(commentData);
    olStoryCommentList.appendChild(liStoryCommentItem);
  });
}

  formStoryReplyForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const authorNameValue = inputStoryAuthorName.value.trim();
    const commentBodyValue = textareaStoryCommentBody.value.trim();

    if (!authorNameValue || !commentBodyValue) {
      alert("A név és az üzenet kitöltése kötelező.");
      return;
    }

    const commentData = {
      name: authorNameValue,
      message: commentBodyValue,
      date: getCurrentCommentDate(),
      avatar: getRandomAvatarUrl()
    };

    saveComment(commentData);
    renderSavedComments();
    formStoryReplyForm.reset();
  });

  renderSavedComments();
}