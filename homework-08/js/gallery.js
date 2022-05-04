import galleryEl from "./gallery-items.js";

const refs = {
  galleryList: document.querySelector(".js-gallery"), //ul c изображениями
  modal: document.querySelector(".js-lightbox"), //модальное окно
  modalCloseBtn: document.querySelector('button[data-action="close-lightbox"]'), //кнопка закрытия модального окна
  modalImage: document.querySelector(".lightbox__image"),
  modalOverlay: document.querySelector(".lightbox__overlay"), //серый фон в модалке
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
  refs.modal.classList.add("is-open"); // Открытие модального окна по клику на элементе галереи.
  refs.modalImage.src = event.target.dataset.source; // Подмена значения атрибута src элемента img.lightbox__image.
  refs.modalImage.alt = event.target.alt;
};

refs.galleryList.addEventListener("click", openModal);
