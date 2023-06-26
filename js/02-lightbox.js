import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer =
 document.querySelector(".gallery");

const createRenderGallery =
 renderGallery(galleryItems);

galleryContainer.insertAdjacentHTML(
 "beforeend",
 createRenderGallery
);

function renderGallery(galleryItems) {
 return galleryItems
  .map(({ preview, original, description }) => {
   return `<li class='gallery__item'>
      <a class='gallery__link' href='${original}'>
      <img
        class='gallery__image'
        src='${preview}'
        alt='${description}'/>
      </a>
      </li>`;
  })
  .join("");
}


const lightbox = new SimpleLightbox(
 ".gallery__link",
 {
  captionsData: "alt",
  caption: true,
  captionPosition: "bottom",
  captionDelay: 250,
  
 }
);

console.log(galleryItems);
