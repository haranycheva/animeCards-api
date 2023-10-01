import { refs } from "./refs.js";
import { keys } from "./refs.js";
import localStorage from "./localStorage.js";
import { addCards } from "./addCards.js";

export function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(refs.filterForm);
  const saveData = {};
  formData.forEach((v, k) => (saveData[k] = v));
  localStorage.save(saveData, keys.KEY__FILTERS);
  localStorage.save(0, keys.KEY__PAGE);
  refs.undoBtn.disabled = "true";
  refs.undoBtn.classList.remove("can-hover-btn");
  addCards();
}
