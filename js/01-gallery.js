import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

console.log(createGalleryMarkup(galleryItems));

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description }) => {
      return `<div class="gallery">
      <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="small-image.jpg"
            data-source="${preview}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}
