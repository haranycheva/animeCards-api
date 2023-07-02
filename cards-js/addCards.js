import { createCard } from "./createCard.js";
import { fetchTheCards } from "./fetch.js";
import { refs } from "./refs.js";
import localStorage from "./localStorage.js";
import { keys } from "./refs.js";

const ERROR = `<p class="error-text">Opppps.... Something went wrong... :(</p>`

export async function addCards(){
  const page = localStorage.load(keys.KEY__PAGE) ? localStorage.load(keys.KEY__PAGE) : 0;
  const filters = localStorage.load(keys.KEY__FILTERS) ? localStorage.load(keys.KEY__FILTERS) : null;
  const saveData =  await fetchTheCards(page, filters);
  refs.cardsList.innerHTML = "";
  if(!saveData){
    refs.cardsList.insertAdjacentHTML("beforeend", ERROR)
    return
  }
  let cardsToAdd = '';
  for(const i of saveData){
    cardsToAdd+= createCard(i);
  }
  refs.cardsList.insertAdjacentHTML("beforeend", cardsToAdd)
  refs.btnList.classList.remove("none")
}