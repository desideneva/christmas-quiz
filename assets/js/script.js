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
        ]
    },
    {
        question: "Which of the following is one of Santa’s reindeer?",
        answers: [
            { text: "Jingle", correct: false},
            { text: "Buddy", correct: false},
            { text: "Rudolph", correct: true},
            { text: "Sven", correct: false},
        ]

    },
    {
        question: "What country did Christmas Trees originate from?",
        answers: [
            { text: "England", correct: false},
            { text: "Denmark", correct: false},
            { text: "Norway", correct: false},
            { text: "Germany", correct: true},
        ]  
    }
];

// DOM elements
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Variables to track current question index and score
let currentQuestionIndex = 0;
let score = 0;

 // Function to start the quiz
function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML = "Next Question";
    showQuestion();
}

// Function to display the current question
function showQuestion(){
    // Get the current question object
    let currentQuestion = questions[currentQuestionIndex];
    // Display the question number and text
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo = "." + currentQuestion.question;

// Create buttons for each answer
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();