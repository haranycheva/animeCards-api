import { refs } from "./refs.js";

const BASE__URL = 'https://kitsu.io/api/edge/anime'
const ERROR = `<p class="error-text">Opppps.... Something went wrong... :(</p>`

export async function fetchTheCards(page, filters) {
  let url = `${BASE__URL}?page[limit]=9&page[offset]=${page*9}`;
  if(filters && filters.filterType){
    if(filters.displayMetod){
      url += `&sort=${filters.filterType}`
    }
    else{
      url += `&sort=-${filters.filterType}`
    }
  }
  refs.btnList.classList.add("none")
  refs.cardsList.innerHTML = `<span class="loader"></span>`
  return fetch(url)
    // .then((res) => res.json())
    // .then(({ data }) => {
    //   return data
    // }).catch(res =>  refs.cardsList.innerHTML = ERROR);
}



