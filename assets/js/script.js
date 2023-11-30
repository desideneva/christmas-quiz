document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function() {
        // Navigate to the quiz.html page
        window.location.href = 'quiz.html';
    });
});