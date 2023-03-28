import refs from "./refs";
import onLeftRightArrowKeypress from "./slider";

export function onModalClose() {
  refs.lightbox.classList.remove("is-open");
  window.removeEventListener("keydown", onEscapeKeypress);
  window.removeEventListener("keydown", onLeftRightArrowKeypress);

  refs.lightboxCaption.classList.remove("lightbox__caption--active");
  refs.lightboxImage.src = "";
  refs.lightboxImage.alt = "";
  refs.lightboxImage.dataset.index = "";
}

export function onLightboxOverlayClick(evt) {
  if (evt.currentTarget === evt.target) {
    onModalClose();
  }
}

export function onEscapeKeypress(evt) {
  if (evt.code === "Escape") {
    onModalClose();
  }
}
