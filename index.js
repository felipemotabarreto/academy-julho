const listContainer = document.querySelector(".lista-produtos");
const cardCount = 5;
const productCardWidth = 220;

function addHiddenCards() {
  const cardsPerRow = Math.floor(
    listContainer.getBoundingClientRect().width / productCardWidth
  );
  const cardsToAdd = cardsPerRow - (cardCount % cardsPerRow);

  for (let i = 0; i < cardsToAdd; i++) {
    const cardToAdd = document.createElement("div");
    cardToAdd.classList.add("produto");
    cardToAdd.classList.add("hidden");
    listContainer.appendChild(cardToAdd);
  }
}

function removeHiddenCards() {
  const hiddenCards = document.querySelectorAll(".hidden");
  for (let i = 0; i < hiddenCards.length; i++) {
    const hiddenCard = hiddenCards[i];
    hiddenCard.remove();
  }
}

addHiddenCards();

let timer;

function resizeHandlerWithDebounce(debounceTime = 1000) {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => {
    console.log("trigger");
    removeHiddenCards();
    addHiddenCards();
    timer = null;
  }, debounceTime);
}

window.onresize = () => resizeHandlerWithDebounce(5000);
