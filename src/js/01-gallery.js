// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryImg = document.querySelector('.gallery');

//Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const imgMarkup = galleryItems
  .map(({ preview, original, description }) =>
//     `<div class = "gallery__item">
// <a class = "gallery__link" href = "${original}">
// <img class = "gallery__image"
//   src = "${preview}"
//   data-source = "${original}"
//   alt = "${description}"/>
// </a></div>`
`<a class="gallery__item" href="${galleryImg.original}">
<img class="gallery__image"
src="${galleryImg.preview}" 
alt= "${galleryImg.description}"></a>`
)
.join("");
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

galleryImg.insertAdjacentHTML('afterbegin', imgMarkup);
// galleryImg.addEventListener('click', onImgClick);

// function onImgClick(e) {
//   e.preventDefault();

//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   //Реалізація делегування на div.gallery і отримання url великого зображення.
//   //Відкриття модального вікна по кліку на елементі галереї. 

//   const imgLink = e.target.dataset.source;
//   const modalImg = basicLightbox.create(
//     `
//       <img src="${imgLink}" width = "800" height = "600">`,
//     {
//     onShow: () => {
//         window.addEventListener('keydown', onEscKeyPress);
//     },
//     onClose: () => {
//         window.removeEventListener('keydown', onEscKeyPress);
//     }
//   });
// modalImg.show();

  
//   //Додай закриття модального вікна після натискання клавіші Escape
//   //window.addEventListener('keydown', onEscKeyPress);

//   function onEscKeyPress(e) {

//     const ESC_KEY_CODE = 'Escape';
//     if (e.code === ESC_KEY_CODE) {
//       modalImg.close();
//     };
//   }; 
// };
