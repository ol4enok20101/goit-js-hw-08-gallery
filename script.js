import galleryImg from "./gallery-items.js";

const gallery = document.querySelector(".js-gallery");

function createGalleryItem({ preview, original, description }) {
  const galleryListItem = document.createElement("li");
  galleryListItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.setAttribute("href", original);
  galleryLink.classList.add("gallery__link");
  galleryListItem.appendChild(galleryLink);

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = preview;
  galleryImage.alt = description;
  galleryImage.dataset.source = original;
  galleryLink.appendChild(galleryImage);

  return galleryListItem;
}

const arr = galleryImg.map(createGalleryItem);
gallery.append(...arr);

gallery.addEventListener("click", openModal);
const lightbox = document.querySelector(".js-lightbox");

function openModal(evt) {
  evt.preventDefault();
  modalImage.src = evt.target.dataset.source;
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  lightbox.classList.add("is-open");
}

const closeButton = document.querySelector(".lightbox__button");
closeButton.addEventListener("click", closeModal);

window.addEventListener("keydown", escapeClose);

function escapeClose(event) {
  if (event.code === "Escape") {
    closeModal();
  }
}

const closeOverlay = document.querySelector(".lightbox__overlay");
closeOverlay.addEventListener("click", closeModal);

function closeModal(close) {
  lightbox.classList.remove("is-open");
  modalImage.src = "";
}

const modalImage = document.querySelector(".lightbox__image");

if (lightbox.classList.contains("is-open")) {
  modalImage.src = arr.original;
}
