document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.images img');
    const main = document.querySelector('main');
    
    // Function to handle image click
    function handleImageClick(event) {
        const imageSrc = event.target.src;
        
        // Create a larger image container
        const enlargedImage = document.createElement('div');
        enlargedImage.className = 'enlarged-image';
        
        // Create the enlarged image element
        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        
        // Add the enlarged image to the container
        enlargedImage.appendChild(imgElement);
        
        // Add the container to the main content area
        main.appendChild(enlargedImage);
        
        // Close the enlarged image on click
        enlargedImage.addEventListener('click', function () {
            main.removeChild(enlargedImage);
        });
    }
    
    // Attach click event listener to each image
    images.forEach(function (image) {
        image.addEventListener('click', handleImageClick);
    });
});
