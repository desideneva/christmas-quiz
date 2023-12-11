document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener for the EXIT button
    const exitButton = document.getElementById('exit-btn');
    exitButton.addEventListener('click', function () {
        // Navigate back to the front page
        window.location.href = 'index.html'; // Replace 'index.html' with the actual front page filename
    });
});

// Array of questions, each with a question and an array of answers
const questions = [
    {
        question: "Which one is NOT another name for Santa Claus?",
        answers: [
            { text: "Father Christmas", correct: false },
            { text: "Santa Kris", correct: true },
            { text: "Saint Nicholas", correct: false },
            { text: "Kris Kringle", correct: false },
        ],
        image: "assets/images/santa-claus.png",
    },
    {
        question: "Which of the following is one of Santa’s reindeer?",
        answers: [
            { text: "Jingle", correct: false },
            { text: "Buddy", correct: false },
            { text: "Rudolph", correct: true },
            { text: "Sven", correct: false },
        ],
        image: "assets/images/reindeer.png",

    },
    {
        question: "What country did Christmas Trees originate from?",
        answers: [
            { text: "England", correct: false },
            { text: "Denmark", correct: false },
            { text: "Norway", correct: false },
            { text: "Germany", correct: true },
        ],
        image: "assets/images/christmas-trees.png",
    },
    {
        question: "Who delivers Christmas presents to children in the United Kingdom?",
        answers: [
            { text: "Christmas Fairy", correct: false },
            { text: "Snow White", correct: false },
            { text: "Santa Claus", correct: true },
            { text: "Saint George", correct: false },
        ],
        image: "assets/images/xmas-gifts.png",
    },
    {
        question: "What are you supposed to do when you find yourself under the mistletoe?",
        answers: [
            { text: "Kiss", correct: true },
            { text: "Hug", correct: false },
            { text: "Dance", correct: false },
            { text: "Bow", correct: false },
        ],
        image: "assets/images/xmas-sparks.png",
    },
    {
        question: "In what town was Jesus born?",
        answers: [
            { text: "Jerusalem", correct: false },
            { text: "Tel Aviv", correct: false },
            { text: "Nazareth", correct: false },
            { text: "Bethlehem", correct: true },
        ],
        image: "assets/images/stars.png",
    },
    {
        question: "What was Frosty the Snowman's nose made out?",
        answers: [
            { text: "Carrot", correct: false },
            { text: "Button", correct: true },
            { text: "Sugar cane", correct: false },
            { text: "Coal", correct: false },
        ],
        image: "assets/images/snowman.png",
    },
    {
        question: "What Christmas treat became popular due to a Brothers Grimm Story?",
        answers: [
            { text: "Sticky Toffee Pudding", correct: false },
            { text: "Mince Pie", correct: false },
            { text: "Gingerbread House", correct: true },
            { text: "Christmas Pudding", correct: false },
        ],
        image: "assets/images/gingerbread-house.png",
    },
    {
        question: "What popular Christmas song was actually written for Thanksgiving?",
        answers: [
            { text: "It`s the most wonderful time of the year", correct: false },
            { text: "One more sleep", correct: false },
            { text: "Jingle Bells", correct: true },
            { text: "Underneath the tree", correct: false },
        ],
        image: "assets/images/bells.png",
    },
    {
        question: "How do you say Merry Christmas in Spanish?",
        answers: [
            { text: "Feliz Natal", correct: false },
            { text: "Feliz Navidad", correct: true },
            { text: "Feliz Ano Nuevo", correct: false },
            { text: "Feliz Compleanos", correct: false },
        ],
        image: "assets/images/merry-xmas-world.png",
    }

];

// DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const exitButton = document.getElementById("exit-btn");
const scoreDisplay = document.getElementById("score-display");

// Variables to track current question index and score
let currentQuestionIndex = 0;
let score = 0;

/** Function to update the score display */
function updateScoreDisplay() {
    scoreDisplay.textContent = `Correct ${score}/${questions.length}`;
}

/** Function to start the quiz */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next Question";
    resetState();
    showQuestion();
    updateScoreDisplay();
}

/** Function to handle the exit action */
function handleExit() {
    // Navigate back to the front page
    window.location.href = 'index.html'; // Replace 'index.html' with the actual front page filename
}

/** Function to display the current question */
function showQuestion() {

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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

/**
 * Resets the state of the quiz.
 * - Hides the next button.
 * - Removes all child elements from the answer buttons container.
 */
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
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
/** Function to handle the selection of an answer */
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

    // Update the score if the selected answer is correct
    if (isCorrect) {
        score++;
        updateScoreDisplay();
    }

    // Display the next button
    nextButton.style.display = "block";
}

/**
* Displays the final score of the quiz.
* - Resets the quiz state.
* Displays the final score of the quiz.
* - Resets the quiz state.
* - Updates the question element with the score.
* - Displays the "Play Again" button.
*/
function showScore() {
    resetState();

    // Set background image for the score screen
    document.body.style.backgroundImage = `url("assets/images/santa-christmas.png")`;

    // Update the question element with the score
    if (score === questions.length) {
        // Display a congratulatory message for a perfect score
        questionElement.innerHTML = "Wow... 10 out of 10! Congratulations! You made it!";
        // Display the "Exit" button
        exitButton.style.display = "block";
    } else {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
        exitButton.innerHTML = "EXIT";
        exitButton.style.display = "block";
    }
}

/**
* Handles the click event on the next button.
* - Increments the current question index.
* - Shows the next question or displays the final score.
*/
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listener for the next button click
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// Event listener for the EXIT button click
exitButton.addEventListener('click', handleExit);

startQuiz();             