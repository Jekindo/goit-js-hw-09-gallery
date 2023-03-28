import galleryItems from "./data/gallery-items";
import refs from "./refs";
import updateCaptionTextContent from "./update-image-caption";
import { onEscapeKeypress } from "./close-modal";
import onLeftRightArrowKeypress from "./slider";

export default function onGalleryContainerClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const imgRef = evt.target;

  refs.lightboxImage.src = imgRef.dataset.source;
  refs.lightboxImage.alt = imgRef.alt;
  refs.lightboxImage.dataset.index = imgRef.dataset.index;
  refs.lightboxImage.addEventListener("load", () => {
    refs.lightboxCaption.classList.add("lightbox__caption--active");
  });

  updateCaptionTextContent(refs.lightboxImage.alt);
  onModalOpen();
}

function onModalOpen() {
  refs.lightbox.classList.add("is-open");
  window.addEventListener("keydown", onEscapeKeypress);
  window.addEventListener("keydown", onLeftRightArrowKeypress);
}
