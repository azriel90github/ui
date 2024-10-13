const likeButtons = document.querySelectorAll(".card__btn");

// biome-ignore lint/complexity/noForEach: <explanation>
likeButtons.forEach((likeButton) => {
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__btn--like");
  });
});
