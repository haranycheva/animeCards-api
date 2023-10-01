import { createCard } from "./createCard.js";
import { fetchTheCards } from "./fetch.js";
import { refs } from "./refs.js";
import localStorage from "./localStorage.js";
import { keys } from "./refs.js";

const ERROR1 = `<p class="error-text">Opppps....  We have some problems :(</p>`;
const ERROR2 = `<p class="error-text">Opppps....  Something went wrong :(</p>`;

export async function addCards() {
  const page = localStorage.load(keys.KEY__PAGE)
    ? localStorage.load(keys.KEY__PAGE)
    : 0;
  const filters = localStorage.load(keys.KEY__FILTERS)
    ? localStorage.load(keys.KEY__FILTERS)
    : null;
  try {
    const saveData = await fetchTheCards(page, filters);
    if (!saveData.ok) {
      throw new Error(saveData.status);
    }
    loadCards(await saveData.json());
  } catch (err) {
    console.dir(err);
    switch (err.message) {
      case "500":
        refs.cardsList.innerHTML = ERROR1;
        break;
      default:
        refs.cardsList.innerHTML = ERROR2;
    }
  }
}

function loadCards(saveData) {
  const data = saveData.data;
  refs.cardsList.innerHTML = "";
  if (!data) {
    refs.cardsList.insertAdjacentHTML("beforeend", ERROR);
    return;
  }
  let cardsToAdd = "";
  for (const i of data) {
    cardsToAdd += createCard(i);
  }
  refs.cardsList.insertAdjacentHTML("beforeend", cardsToAdd);
  refs.btnList.classList.remove("none");
}
