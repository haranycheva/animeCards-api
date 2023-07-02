import { addCards } from "./addCards.js";
import { refs } from "./refs.js";
import localStorage from "./localStorage.js"
import { keys } from "./refs.js";

export function switchPage(e) {
  let pageNumb = localStorage.load(keys.KEY__PAGE) ? localStorage.load(keys.KEY__PAGE) : 0;
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  if(e.target.classList.contains("redo")){
    if(pageNumb === 0){
        refs.undoBtn.disabled = false;
    }
    pageNumb += 1;
  }
  if(e.target.classList.contains("undo")){
    pageNumb -= 1;
    if(pageNumb === 0){
        refs.undoBtn.disabled = "true";
    }
  }
  localStorage.save(pageNumb, keys.KEY__PAGE)
  addCards(pageNumb)
}
