import { refs } from "./refs.js";

export function changeCheckboxValue() {
  if (!refs.filterForm.elements.filterType.value) {
    refs.displayMetods.classList.add("none");
    refs.filterForm.classList.add("filter-type-none-gap");
    return;
  }
  refs.displayMetods.classList.remove("none");
  refs.filterForm.classList.remove("filter-type-none-gap");
}
