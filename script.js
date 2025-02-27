// Get all images inside the container
const images = document.querySelectorAll('.container img');

// Get the overlay and the overlay image
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlay-img');

// Get the close button
const closeBtn = document.getElementById('close-btn');

// Add event listeners to each image to open overlay
images.forEach(image => {
    image.addEventListener('click', function() {
        overlay.style.display = 'flex'; // Show the overlay
        overlayImg.src = this.src; // Set the source of the overlay image to the clicked image
    });
});

// Close the overlay when clicking on the close button
closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none'; // Hide the overlay
});

// Close the overlay if clicking outside the image (on the overlay itself)
overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
        overlay.style.display = 'none'; // Hide the overlay if clicked outside the image
    }
});