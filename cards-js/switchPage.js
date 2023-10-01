import { addCards } from "./addCards.js";
import { refs } from "./refs.js";
import localStorage from "./localStorage.js"
import { keys } from "./refs.js";

export function switchPage(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  let pageNumb = localStorage.load(keys.KEY__PAGE) ? localStorage.load(keys.KEY__PAGE) : 0;
  if(e.target.classList.contains("redo")){
    if(pageNumb === 0){
        refs.undoBtn.disabled = false;
        refs.undoBtn.classList.add("can-hover-btn")
    }
    pageNumb += 1;
  }
  if(e.target.classList.contains("undo")){
    pageNumb -= 1;
    if(pageNumb === 0){
        refs.undoBtn.disabled = "true";
        refs.undoBtn.classList.remove("can-hover-btn")
    }

  }
  localStorage.save(pageNumb, keys.KEY__PAGE)
  addCards(pageNumb)
}
