import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const picturesContainer = document.querySelector(".js-gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

picturesContainer.insertAdjacentHTML("beforeend", galleryMarkup);

picturesContainer.addEventListener("click", onpicturesContainerCkick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function onpicturesContainerCkick(evt) {
  const isGalleryItem = evt.target.classlist.contians("gallery__item");
  if (!isGalleryItem) {
    return;
  }
  console.log(evt.target.dataset.original);
}
