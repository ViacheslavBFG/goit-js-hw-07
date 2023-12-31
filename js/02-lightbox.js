import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  gallery: document.querySelector(".gallery"),
};

function makeGalleryListMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img
              class="gallery__image"
              src="${preview}"
              alt="${description}" />
          </a>
        </li>`
    )
    .join("");
}

refs.gallery.insertAdjacentHTML(
  "beforeend",
  makeGalleryListMarkup(galleryItems)
);

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionsDelay: 300,
  showCounter: false,
  animationSpeed: 300,
  download: "Download this image",
  fadeSpeed: 300,
  animationSlide: false,
});

