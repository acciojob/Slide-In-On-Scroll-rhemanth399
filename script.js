// Your JS code here.
<script>
    function addActiveClass() {
        // Get all images
        const images = document.querySelectorAll('.image');

        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Loop through each image
        images.forEach(image => {
            // Get the position of the image
            const imagePosition = image.getBoundingClientRect().top;

            // Check if the image is in the viewport
            if (imagePosition <= scrollPosition + window.innerHeight) {
                // Add the 'active' class to the image
                image.classList.add('active');
            } else {
                // Remove the 'active' class from the image
                image.classList.remove('active');
            }
        });
    }

    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function() {
            let context = this, args = arguments;
            let later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Pass the addActiveClass function to the debounce function
    const debouncedAddActiveClass = debounce(addActiveClass);

    // Add the debounced function as an event listener for the scroll event
    window.addEventListener('scroll', debouncedAddActiveClass);

</script>
