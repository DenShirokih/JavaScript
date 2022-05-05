import galleryEl from "./gallery-items.js";

const refs = {
  galleryList: document.querySelector(".js-gallery"),
  modal: document.querySelector(".js-lightbox"),
  modalCloseBtn: document.querySelector('button[data-action="close-lightbox"]'),
  modalImage: document.querySelector(".lightbox__image"),
  modalOverlay: document.querySelector(".lightbox__overlay"),
};

const newLi = galleryEl.reduce((acc, { preview, original, description }) => {
  return (acc += `<li class="gallery__item">
  <a class="gallery__link" href="${original}" >
  <img class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  />
  </a>
  </li>`);
}, "");
refs.galleryList.innerHTML = newLi;

const openModal = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  event.preventDefault();
  refs.modal.classList.add("is-open");
  refs.modalImage.src = event.target.dataset.source;
  refs.modalImage.alt = event.target.alt;
};

refs.galleryList.addEventListener("click", openModal);
