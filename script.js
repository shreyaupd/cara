const accessKey = 'qeZXia_hV-e0jTVP6VosYPiKBTXZGk_PiMesFpFcRpA'; // Make sure to put your API key here
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
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}
// Preload your images
preloadImages(['fash.jpg', 'img.jpg', 'img3.jpg', 'img2.jpg']);
let tl=gsap.timeline()
tl.from("#header img",{
    y:-30,
    opacity:0,
    stagger:0.5
})
// GSAP Animation for Subheader
let tl2=gsap.timeline()
tl2.from("#subheader h1", {
    opacity: 0,
    y: -150, // Slightly move up
    duration: 1, // Duration of the animation
    delay: 1.5, // Delay before it starts
});
tl2.from("#subheader h2", {
    opacity: 0,
    y: -150,
});
tl2.from("#subheader h4", {
    opacity: 0,
    y: -150,
});
tl2.from("#subheader button", {
    opacity: 0,
    y: 40,
});
tl2.from("#subheader p", {
    opacity: 0,
    y: -150,
});