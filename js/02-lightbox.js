import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const picturesContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a> 
      `;
  })
  .join("");

picturesContainer.innerHTML = galleryMarkup;

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
