import localStorage from "./localStorage.js";
import { addCards } from "./addCards.js";
import { refs } from "./refs.js";
import { keys } from "./refs.js";

export function populateMurkup() {
  if (localStorage.load(keys.KEY__PAGE)) {
    refs.undoBtn.disabled = false;
  }
  const saveData = localStorage.load(keys.KEY__FILTERS);
  if (!saveData || !saveData.filterType) {
    refs.displayMetods.classList.add("none");
    refs.filterForm.classList.add("filter-type-none-gap");
    addCards();
    return;
  }
  const formElements = refs.filterForm.elements;
  formElements.filterType.value = saveData.filterType;
  if (saveData.displayMetod) {
    formElements.displayMetod[0].checked = true;
  } else {
    formElements.displayMetod[1].checked = true;
  }
  addCards();
}
