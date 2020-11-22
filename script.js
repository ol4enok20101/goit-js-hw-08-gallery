const gallery = document.querySelector('gallery js-gallery')

function createGalleryItem(obj) {
    const galleryListItem = document.createElement('li')
    galleryListItem.classList.add("gallery__item");
    galleryListItem.setAttribute('href', 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg');
    gallery.appendChild(galleryListItem);

    const galleryImage = document.createElement('img');
    galleryImage.classList.add("gallery__image");
    galleryImage.setAttribute('src', 'data-source', 'alt');
    gallery.appendChild(galleryImage);
}

createGalleryItem()
console.log(createGalleryItem)




