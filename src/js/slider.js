import galleryItems from "./data/gallery-items";
import refs from "./refs";
import updateCaptionTextContent from "./update-image-caption";

let currentImageIndex = 0;

export default function onLeftRightArrowKeypress(evt) {
  if (evt.code !== "ArrowLeft" && evt.code !== "ArrowRight") {
    return;
  }

  currentImageIndex = Number(refs.lightboxImage.dataset.index);

  if (evt.code === "ArrowLeft") {
    currentImageIndex =
      currentImageIndex === 0 ? galleryItems.length - 1 : currentImageIndex - 1;
  } else {
    currentImageIndex =
      currentImageIndex === galleryItems.length - 1 ? 0 : currentImageIndex + 1;
  }

  refs.lightboxImage.src = galleryItems[currentImageIndex].original;
  refs.lightboxImage.alt = galleryItems[currentImageIndex].description;
  refs.lightboxImage.dataset.index = currentImageIndex;

  updateCaptionTextContent(refs.lightboxImage.alt);
}

// export function onLeftArrowKeypress(evt) {
//   if (evt.code !== "ArrowLeft") {
//     return;
//   }
//
//   currentImageIndex = Number(refs.lightboxImage.dataset.index);
//   currentImageIndex =
//     currentImageIndex === 0 ? galleryItems.length - 1 : currentImageIndex - 1;
//
//   refs.lightboxImage.src = galleryItems[currentImageIndex].original;
//   refs.lightboxImage.alt = galleryItems[currentImageIndex].description;
//   refs.lightboxImage.dataset.index = currentImageIndex;
//
//   updateCaptionTextContent(refs.lightboxImage.alt);
// }
//
// export function onRightArrowKeypress(evt) {
//   if (evt.code !== "ArrowRight") {
//     return;
//   }
//
//   currentImageIndex = Number(refs.lightboxImage.dataset.index);
//
//   currentImageIndex =
//     currentImageIndex === galleryItems.length - 1 ? 0 : currentImageIndex + 1;
//
//   refs.lightboxImage.src = galleryItems[currentImageIndex].original;
//   refs.lightboxImage.alt = galleryItems[currentImageIndex].description;
//   refs.lightboxImage.dataset.index = currentImageIndex;
//
//   updateCaptionTextContent(refs.lightboxImage.alt);
// }
