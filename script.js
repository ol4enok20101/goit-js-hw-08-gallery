import galleryImg from './gallery-items.js'

const gallery = document.querySelector('.js-gallery')

function createGalleryItem({ preview, original, description }) {

    const galleryListItem = document.createElement('li');
    galleryListItem.classList.add("gallery__item");

    const galleryLink = document.createElement('a');
    galleryLink.setAttribute('href', (original));
    galleryLink.classList.add('gallery__link');
    galleryListItem.appendChild(galleryLink);

    const galleryImage = document.createElement('img');
    galleryImage.classList.add("gallery__image");
    galleryImage.src = (preview);
    galleryImage.alt = (description);
    galleryImage.dataset.source = original;
    galleryLink.appendChild(galleryImage);

    return galleryListItem
}

const arr = galleryImg.map(createGalleryItem);
// console.log(arr)

gallery.append(...arr);

gallery.addEventListener('click', onClick);
const lightbox = document.querySelector('.js-lightbox')
function onClick(evt) {

    evt.preventDefault();
    console.log(evt.target.dataset.source)

    if (evt.target.nodeName !== 'IMG') {
        return
    } lightbox.classList.add('is-open');
    // lightboxImage.src = evt.target

}

const closeButton = document.querySelector('.lightbox__button');
closeButton.addEventListener('click', closeClick);

function closeClick(close) {
    lightbox.classList.remove('is-open')
}

const lightboxImage = document.querySelector('.lightbox__image');
