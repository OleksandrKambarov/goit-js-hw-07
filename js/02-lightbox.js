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

  //     const instance = basicLightbox.create(`
  //     <img src= ${e.target.dataset.source} width="800" height="600">
  //   `);

  //     instance.show();
}
