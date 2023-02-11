import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const picturesContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

picturesContainer.insertAdjacentHTML("beforeend", galleryMarkup);

picturesContainer.addEventListener("click", onpicturesContainerCkick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a> 
      `;
    })
    .join("");
}

function onpicturesContainerCkick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

  console.log(e.target);

  let lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
  });
}
