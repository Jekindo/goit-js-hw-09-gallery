import galleryItems from "./js/data/gallery-items";
import refs from "./js/refs";

/*
 * Create Gallery Markup
 */
import createGalleryItemsMarkup from "./js/create-gallery";

/*
 * Modal handler
 */
import onGalleryContainerClick  from "./js/open-modal";
import { onModalClose, onLightboxOverlayClick } from "./js/close-modal";

const galleryMarkup = createGalleryItemsMarkup(galleryItems);
refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

refs.gallery.addEventListener("click", onGalleryContainerClick);
refs.closeLightboxBtn.addEventListener("click", onModalClose);
refs.lightboxOverlay.addEventListener("click", onLightboxOverlayClick);
