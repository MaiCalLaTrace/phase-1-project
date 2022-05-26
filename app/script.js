const likeBtn = document.getElementById("like-btn");

window.addEventListener("load", () => {
  initApp();
  renderNewQuote();
});

function initApp() {
  const nextBtn = document.getElementById("next-btn");

  likeBtn.addEventListener("click", () => {
    if (likeBtn.classList.contains("liked")) {
      removeLike();
    } else {
      addLike();
    }
  });

  nextBtn.addEventListener("click", renderNewQuote);
}

function removeLike() {
  likeBtn.classList.remove("liked");
}
function addLike() {
  likeBtn.classList.add("liked");
}

function renderNewQuote() {
  const quoteEl = document.getElementById("quote");
  const characterEl = document.getElementById("character");
  const animeEl = document.getElementById("anime");
  const loadingEl = document.getElementById("loading");

  loadingEl.style.display = "grid";
  fetch("https://animechan.vercel.app/api/random")
    .then((res) => res.json())
    .then(({ quote, character, anime }) => {
      removeLike();

      quoteEl.innerText = quote;
      characterEl.innerText = character;
      animeEl.innerText = anime;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loadingEl.style.display = "none";
    });
}
