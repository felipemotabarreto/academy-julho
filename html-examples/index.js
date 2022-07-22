const cardCount = 5;

const listContainer = document.querySelector(".lista-produtos");
const cardsPerRow = Math.floor(
  listContainer.getBoundingClientRect().width / 220
);
const cardsToAdd = cardsPerRow - cardCount + cardsPerRow;

console.log(cardsToAdd);

for (let i = 0; i < cardsToAdd; i++) {
  const cardToAdd = document.createElement("div");
  cardToAdd.classList.add("produto");
  cardToAdd.classList.add("hidden");
  listContainer.appendChild(cardToAdd);
}
