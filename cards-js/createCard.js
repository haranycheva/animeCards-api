export function createCard({ attributes } = {}) {
  return `<li class="anime__card">
  <a href="https://en.wikipedia.org/wiki/${(attributes.titles.en
    ? attributes.titles.en
    : attributes.titles.en_jp
    ? attributes.titles.en_jp
    : attributes.titles.en_us
    ? attributes.titles.en_us
    : attributes.titles.en_cn
    ? attributes.titles.en_cn
    : attributes.titles.ja_jp
    ? attributes.titles.ja_jp
    : ""
  ).replace(
    " ",
    "_"
  )}" class="anime-link" target="_blank" rel="nofollow noreferrer noopener">
    <div class="anime__pic">
    <img
      src="${
        attributes.posterImage ? attributes.posterImage.small : "./no-image.jpg"
      }"
      alt=""
      class="anime__img"
      width="284px"
      height="352px"
    />
    <p class="anime__card-desc">
      ${attributes.description ? attributes.description.slice(0, 500) : ""}
      </p>
      <ul class="rating-list">
        <div style="width:${
          attributes.averageRating
        }%" class="rating__active"></div>
        <li class="rating__item">★</li>
        <li class="rating__item">★</li>
        <li class="rating__item">★</li>
        <li class="rating__item">★</li>
        <li class="rating__item">★</li>
      </ul>
    </div>
    <div class="anime__desc">
      <h3 class="anime__name">${
        attributes.titles.en
          ? attributes.titles.en
          : attributes.titles.en_jp
          ? attributes.titles.en_jp
          : attributes.titles.en_us
          ? attributes.titles.en_us
          : attributes.titles.en_cn
          ? attributes.titles.en_cn
          : attributes.titles.ja_jp
          ? attributes.titles.ja_jp
          : "-"
      }</h3>
      
    </div>
    </a>
  </li>`;
}

