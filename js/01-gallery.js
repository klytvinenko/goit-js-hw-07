import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

let markup = galleryItems.map(({preview, original,description}) => 
`<li class='gallery__item'>
<a class='gallery__link' href='${original}'>
    <img
    class='gallery__image'
    src='${preview}'
    data-source='${original}'
    alt='${description}'/>
    </a>
</li>`).join(""); 

galleryList.insertAdjacentHTML("beforeend", markup);
let instance;

galleryList.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    if(evt.target.nodeName !== 'IMG')  return;

    const linkImg = evt.target.dataset.source;
    instance = basicLightbox.create(`<img src="${linkImg}" width="800" height="600">`);

    instance.show();
}

console.log(galleryItems);
