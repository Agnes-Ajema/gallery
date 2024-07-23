function addImage() {
    const imageUrl = document.getElementById('imageUrl').value;
    if (imageUrl) {
        const gallery = document.getElementById('imageGallery');
        const imageDiv = document.createElement('div');
        imageDiv.className = 'image';
        const image = document.createElement('img');
        image.src = imageUrl;
        const closeBtn = document.createElement('span');
        closeBtn.className = 'close';
        closeBtn.innerHTML = '&times';
        closeBtn.addEventListener('click', function () {
            imageDiv.remove();
            localStorage.removeItem(imageUrl);
        });
        imageDiv.appendChild(image);
        imageDiv.appendChild(closeBtn);
        gallery.appendChild(imageDiv);
        localStorage.setItem(imageUrl, imageUrl);
    }
}

// Load images from local storage on page load
window.onload = function () {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('http')) {
            const imageUrl = localStorage.getItem(key);
            const gallery = document.getElementById('imageGallery');
            const imageDiv = document.createElement('div');
            imageDiv.className = 'image';
            const image = document.createElement('img');
            image.src = imageUrl;
            const closeBtn = document.createElement('span');
            closeBtn.className = 'close';
            closeBtn.innerHTML = '&times';
            closeBtn.addEventListener('click', function () {
                imageDiv.remove();
                localStorage.removeItem(imageUrl);
            });
            imageDiv.appendChild(image);
            imageDiv.appendChild(closeBtn);
            gallery.appendChild(imageDiv);
        }
    }
};

