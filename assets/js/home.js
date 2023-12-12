document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById('playButton');
    const rulesButton = document.getElementById("rulesButton");
    const rulesContainer = document.getElementById("rulesContainer");

    playButton.addEventListener('click', function () {
        // Navigate to the quiz.html page
        window.location.href = 'quiz.html';
    });
    
    rulesButton.addEventListener("click", function () {
        // Toggle the display of rules
        if (rulesContainer.style.display === "none" || rulesContainer.style.display === "") {
            rulesContainer.style.display = "block";
        } else {
            rulesContainer.style.display = "none";
        }
    });
});

