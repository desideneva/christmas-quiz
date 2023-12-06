document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById('playButton');
    const rulesButton = document.getElementById("rulesButton");
    playButton.addEventListener('click', function () {
        // Navigate to the quiz.html page
        window.location.href = 'quiz.html';
    });   
        rulesButton.addEventListener("click", function () {
            // Display the rules as bullet points in an alert
        const rules = [
            "  - Click the 'PLAY' button to begin the quiz.",
            "  - Read each question carefully.",
            "  - Select an answer by clicking on one of the options.",
            "  - If the correct answer is chosen, it will be highlighted in green.",
            "  - If the wrong answer is chosen, it will be highlighted in red, and the correct answer will be highlighted in green.",
            "  - You have only one attempt to select an answer.",
            "  - Continue to the next question by clicking the 'Next Question' button.",
            "  - You cannot skip any quetsion.",
            "  - You cannot go back to past question.",
            "  - To exit the quiz, click the 'EXIT' button.",
            "  - Have fun! :)"
        ];
        // Combine the rules into a single string with line breaks
        const rulesMessage = rules.join('\n');

        // Show a popup message with the rules
        alert(rulesMessage);
    });
});

 