$(document).ready(function () {
    $('.toggle-section').on('click', function () {
        const content = $(this).next('.content');
        
        // Toggle the content visibility
        content.slideToggle();

        // Update button text
        if ($(this).text() === 'Show Less') {
            $(this).text($(this).data('original-text')); // Reset to original text
        } else {
            $(this).data('original-text', $(this).text()); // Save original text
            $(this).text('Show Less'); // Change to "Show Less"
        }
    });
});
