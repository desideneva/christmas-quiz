document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function() {
        // Navigate to the quiz.html page
        window.location.href = 'quiz.html';
    });
});

// Array of questions, each with a question and an array of answers
const questions = [
    {
        question: "Which one is NOT another name for Santa Claus?",
        answers: [
            { text: "Father Christmas", correct: false},
            { text: "Santa Kris", correct: true},
            { text: "Saint Nicholas", correct: false},
            { text: "Kris Kringle", correct: false},
        ],
        image: "assets/images/santa-claus.png",
    },
    {
        question: "Which of the following is one of Santa’s reindeer?",
        answers: [
            { text: "Jingle", correct: false},
            { text: "Buddy", correct: false},
            { text: "Rudolph", correct: true},
            { text: "Sven", correct: false},
        ],
        image: "assets/images/reindeer.png",

    },
    {
        question: "What country did Christmas Trees originate from?",
        answers: [
            { text: "England", correct: false},
            { text: "Denmark", correct: false},
            { text: "Norway", correct: false},
            { text: "Germany", correct: true},
        ],
        image: "assets/images/christmas-trees.png", 
    }
];

// DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Variables to track current question index and score
let currentQuestionIndex = 0;
let score = 0;

 // Function to start the quiz
function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML = "Next Question";
    resetState();
    showQuestion();
}

// Function to display the current question
function showQuestion(){
    
// Resets previous question and answers
    resetState();
 
// Get the current question object
    let currentQuestion = questions[currentQuestionIndex];

// Set background image for the question container
    document.body.style.backgroundImage = `url(${currentQuestion.image})`;

// Display the question number and text
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

// Create buttons for each answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}

/**
 * Resets the state of the quiz.
 * - Hides the next button.
 * - Removes all child elements from the answer buttons container.
 */
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * Handles the selection of an answer.
 * - Determines if the selected answer is correct.
 * - Updates the visual feedback on the selected button.
 * - Disables all buttons after an answer is selected.
 * - Displays the next button.
 * @param {Event} e - The click event object.
 */

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Highlight correct answer in light green if the wrong answer is selected
    if (!isCorrect) {
        const correctBtn = Array.from(answerButtons.children).find(button => button.dataset.correct === "true");
        if (correctBtn) {
            correctBtn.classList.add("correct");
        }
    }

    // Highlight selected answer (either correct or incorrect)
    selectedBtn.classList.add(isCorrect ? "correct" : "incorrect");

    // Disable all buttons after an answer is selected
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    // Display the next button
    nextButton.style.display = "block";
}

 /**
 * Displays the final score of the quiz.
 * - Resets the quiz state.
 * - Updates the question element with the score.
 * - Displays the "Play Again" button.
 */
 function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }

 /**
 * Handles the click event on the next button.
 * - Increments the current question index.
 * - Shows the next question or displays the final score.
 */
 function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
 }

 // Event listener for the next button click
 nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
 });

startQuiz();