const accessKey = 'qeZXia_hV-e0jTVP6VosYPiKBTXZGk_PiMesFpFcRpA'; // Make sure to put your API key here
const jewelryGrid = document.getElementById('jewelry-grid');
const localStorageKey = 'jewelryImages'; // Key for localStorage

document.getElementById("menu-toggle").addEventListener("click", function() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active"); // Toggle the active class
});

// Get the current URL path
const currentPath = window.location.pathname;

// Get all the navbar links except the shopping bag icon
const navLinks = document.querySelectorAll('#navbar li a'); // Get all links

// Loop through the links and set the active class based on the current URL
navLinks.forEach(link => {
    if (link.href === window.location.href && !link.querySelector('.fa-bag-shopping')) {
        link.classList.add('active'); // Add active class if the link matches the current URL
    } else {
        link.classList.remove('active'); // Remove active class for non-matching links
    }
});


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

const sizeSelect=document.getElementById('size-select');
for(let i=1;i<=100;i++){
    const option=document.createElement('option');
    option.value=i;
    option.textContent=i;
    sizeSelect.appendChild(option);
}
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}
// Preload your images
preloadImages(['fash.jpg', 'img.jpg', 'img3.jpg', 'img2.jpg','jewl.jpg','jewll2.jpg','jewl3.jpeg','jewl4.jpg']);
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

