document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById('playButton');
    const rulesButton = document.getElementById("rulesButton");
    playButton.addEventListener('click', function () {
        // Navigate to the quiz.html page
        window.location.href = 'quiz.html';
    });   
        popupButton.addEventListener("click", function () {
            // Show a popup message
            alert("This is a popup message!");
    });
});

 