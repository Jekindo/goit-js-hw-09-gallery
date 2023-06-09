export default function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }, index) => {
      return `
		  <li class="gallery__item">
		  <a
			  class="gallery__link"
			  href="${original}">
			  <img
				  class="gallery__image"
				  src="${preview}"
				  data-source="${original}"
				  data-index="${index}"
				  alt="${description}" />
		  </a>
	  </li>
		  `;
    })
    .join("");
}
