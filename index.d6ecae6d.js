!function(){var t=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],e=refs={gallery:document.querySelector(".js-gallery"),closeLightboxBtn:document.querySelector('button[data-action="close-lightbox"]'),lightbox:document.querySelector(".js-lightbox"),lightboxImage:document.querySelector(".lightbox__image"),lightboxOverlay:document.querySelector(".lightbox__overlay"),lightboxCaption:document.querySelector(".lightbox__caption")};function o(t){e.lightboxCaption.textContent=t}var i=0;function a(a){"ArrowLeft"!==a.code&&"ArrowRight"!==a.code||(i=Number(e.lightboxImage.dataset.index),i="ArrowLeft"===a.code?0===i?t.length-1:i-1:i===t.length-1?0:i+1,e.lightboxImage.src=t[i].original,e.lightboxImage.alt=t[i].description,e.lightboxImage.dataset.index=i,o(e.lightboxImage.alt))}function n(){e.lightbox.classList.remove("is-open"),window.removeEventListener("keydown",c),window.removeEventListener("keydown",a),e.lightboxCaption.classList.remove("lightbox__caption--active"),e.lightboxImage.src="",e.lightboxImage.alt="",e.lightboxImage.dataset.index=""}function c(t){"Escape"===t.code&&n()}var p=t.map((function(t,e){var o=t.preview,i=t.original,a=t.description;return'\n\t\t  <li class="gallery__item">\n\t\t  <a\n\t\t\t  class="gallery__link"\n\t\t\t  href="'.concat(i,'">\n\t\t\t  <img\n\t\t\t\t  class="gallery__image"\n\t\t\t\t  src="').concat(o,'"\n\t\t\t\t  data-source="').concat(i,'"\n\t\t\t\t  data-index="').concat(e,'"\n\t\t\t\t  alt="').concat(a,'" />\n\t\t  </a>\n\t  </li>\n\t\t  ')})).join("");e.gallery.insertAdjacentHTML("afterbegin",p),e.gallery.addEventListener("click",(function(t){if(t.preventDefault(),"IMG"===t.target.nodeName){var i=t.target;e.lightboxImage.src=i.dataset.source,e.lightboxImage.alt=i.alt,e.lightboxImage.dataset.index=i.dataset.index,e.lightboxImage.addEventListener("load",(function(){e.lightboxCaption.classList.add("lightbox__caption--active")})),o(e.lightboxImage.alt),e.lightbox.classList.add("is-open"),window.addEventListener("keydown",c),window.addEventListener("keydown",a)}})),e.closeLightboxBtn.addEventListener("click",n),e.lightboxOverlay.addEventListener("click",(function(t){t.currentTarget===t.target&&n()}))}();
//# sourceMappingURL=index.d6ecae6d.js.map
