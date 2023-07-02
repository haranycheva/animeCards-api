import { refs } from "./cards-js/refs.js";
import { switchPage } from "./cards-js/switchPage.js";
import { populateMurkup } from "./cards-js/populateMarkup.js";
import { onSubmitForm } from "./cards-js/onSubmitForm.js";
import { changeCheckboxValue } from "./cards-js/changeCheckboxValue.js";

refs.btnList.addEventListener("click", switchPage);
refs.filterForm.addEventListener("submit", onSubmitForm);
refs.filterForm.filterType.addEventListener('change', changeCheckboxValue)

populateMurkup();