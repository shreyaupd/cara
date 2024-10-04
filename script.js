const accessKey = ''; // Make sure to put your API key here
const jewelryGrid = document.getElementById('jewelry-grid');
const localStorageKey = 'jewelryImages'; // Key for localStorage
const ringDiv = document.getElementById('ring');
const earringDiv = document.getElementById('earring');
const braceletDiv = document.getElementById('bracelet');
const necklaceDiv = document.getElementById('necklace');
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
function categorizeAndDisplayImages(data) {
    // Clear the divs before adding new items
    ringDiv.innerHTML = '';
    earringDiv.innerHTML = '';
    braceletDiv.innerHTML = '';
    necklaceDiv.innerHTML = '';

    // Loop through each image and categorize them based on keywords
    data.forEach(image => {
        const item = document.createElement('div');
        item.classList.add('jewelry-item');
        
        const img = document.createElement('img');
        img.src = image.urls.small;
        img.alt = image.alt_description || 'Jewelry';
        
        item.appendChild(img);

        // Categorize based on keywords in the alt description or tags
        const description = (image.alt_description || '').toLowerCase();
        
        if (description.includes('ring')) {
            ringDiv.appendChild(item); // Add to ring section
        } else if (description.includes('earring')) {
            earringDiv.appendChild(item); // Add to earring section
        } else if (description.includes('bracelet')) {
            braceletDiv.appendChild(item); // Add to bracelet section
        } else if (description.includes('necklace')) {
            necklaceDiv.appendChild(item); // Add to necklace section
        }
    });
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
preloadImages(['fash.jpg', 'img.jpg', 'img3.jpg', 'img2.jpg','jewl.jpg','jewl2.jpg']);

let tl=gsap.timeline()
tl.from("#header img",{
    y:-30,
    opacity:0,
    duration:0.7,
    delay:1,
})
tl.from("#navbar li",{
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