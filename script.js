const accessKey = 'qeZXia_hV-e0jTVP6VosYPiKBTXZGk_PiMesFpFcRpA'; // Replace with your Unsplash access 
const jewelryGrid = document.getElementById('jewelry-grid');
const localStorageKey = 'jewelryImages'; // Key for localStorage

async function fetchRandomJewelryImages() {
    // Check if images are already in localStorage
    const cachedImages = localStorage.getItem(localStorageKey);
    if (cachedImages) {
        // If cached images exist, use them
        const data = JSON.parse(cachedImages);
        displayImages(data);
    } else {
        // If no cached images, fetch from API
        try {
            const response = await fetch(`https://api.unsplash.com/photos/random?query=jewelry&count=28&client_id=${accessKey}`);
            const data = await response.json();

            // Store fetched data in localStorage
            localStorage.setItem(localStorageKey, JSON.stringify(data));

            // Display images
            displayImages(data);
        } catch (error) {
            console.error('Error fetching jewelry images:', error);
        }
    }
}

function displayImages(data) {
    // Clear the grid before adding new items
    jewelryGrid.innerHTML = '';

    data.forEach(image => {
        const item = document.createElement('div');
        item.classList.add('jewelry-item');

        const img = document.createElement('img');
        img.src = image.urls.small; // Use small size for the grid
        img.alt = 'Jewelry';

        item.appendChild(img);
        jewelryGrid.appendChild(item);
    });
}

// Call the function to fetch and display images
fetchRandomJewelryImages();
