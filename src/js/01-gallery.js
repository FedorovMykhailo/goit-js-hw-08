// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    gallery: document.querySelector(".gallery"),
}
const images = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
}).join("");

refs.gallery.insertAdjacentHTML("afterbegin", images);

const lightbox = new SimpleLightbox(".gallery li a", { captionsData: "alt", captionDelay : 250});


 lightbox.on("click",open());


 console.log(galleryItems);
