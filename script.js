// Add any necessary JavaScript functionality here

// Example: Implement search filtering logic
document.getElementById('search-input').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(function(item) {
        const src = item.querySelector('iframe').src.toLowerCase();
        if (src.includes(searchQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
