const images = document.querySelectorAll(".img-click");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const close = document.querySelector(".modal-close");

images.forEach(img => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src.replace("600/400", "1200/800");
  }
});

close.onclick = () => modal.style.display = "none";
modal.onclick = () => modal.style.display = "none";