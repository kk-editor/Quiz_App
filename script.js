// Quiz Data
const quizData = {
    gk: [
        { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correct: 0 },
        { question: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Dickens", "Hemingway", "Tolkien"], correct: 0 },
        // Add more questions as needed
    ],
    music: [
        { question: "Who is known as the King of Pop?", options: ["Michael Jackson", "Elvis Presley", "Prince", "Madonna"], correct: 0 },
        // Add more questions as needed
    ],
    sports: [
        { question: "Which sport is known as the 'king of sports'?", options: ["Soccer", "Basketball", "Baseball", "Tennis"], correct: 0 },
        // Add more questions as needed
    ],
    riddles: [
        { question: "I speak without a mouth and hear without ears. What am I?", options: ["An Echo", "A Book", "A Shadow", "A Ghost"], correct: 0 },
        // Add more questions as needed
    ]
};

let currentQuiz, currentQuestionIndex, score, timer, timerInterval, quizType;

// Function to start the quiz
function startQuiz(selectedQuizType) {
    quizType = selectedQuizType;
    currentQuiz = quizData[quizType];
    currentQuestionIndex = 0;
    score = 0;
    startQuestion(20); // Start with 20 seconds
    document.getElementById('profile-page').classList.add('hide');
    document.getElementById('quiz-page').classList.remove('hide');
}

// Function to start a question with a specified time
function startQuestion(time) {
    if (currentQuestionIndex >= currentQuiz.length) {
        endQuiz();
        return;
    }

    document.getElementById('quiz-question').textContent = currentQuiz[currentQuestionIndex].question;
    const optionsList = document.getElementById('quiz-options');
    optionsList.innerHTML = '';

    currentQuiz[currentQuestionIndex].options.forEach((option, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index, time));
        li.appendChild(button);
        optionsList.appendChild(li);
    });

    document.getElementById('quiz-timer').textContent = time;
    startTimer(time);
}

// Function to check the answer
function checkAnswer(selectedIndex, previousTime) {
    const correctIndex = currentQuiz[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        score++;
        previousTime = Math.max(15, previousTime - 5); // Reduce time if correct
    } else {
        previousTime = Math.min(20, previousTime + 5); // Increase time if wrong
    }
    currentQuestionIndex++;
    clearInterval(timerInterval); // Stop the current timer
    startQuestion(previousTime); // Start the next question with adjusted time
}

// Function to start the timer
function startTimer(time) {
    let timeLeft = time;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('quiz-timer').textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(-1, time); // Pass -1 to indicate time ran out
        }
    }, 1000);
}

// Function to end the quiz
function endQuiz() {
    alert(`Quiz Over! Your score: ${score}`);
    document.getElementById('quiz-page').classList.add('hide');
    document.getElementById('profile-page').classList.remove('hide');
}

// Quiz Selection Logic
const quizButtons = document.querySelectorAll('.quiz-btn');

quizButtons.forEach(button => {
    button.addEventListener('click', () => {
        const quizType = button.getAttribute('data-quiz-type');
        startQuiz(quizType);
    });
});

// Navigation and Authentication Logic

// Event Listeners for Navigation
document.getElementById('nav-home').addEventListener('click', showHomePage);
document.getElementById('nav-login').addEventListener('click', showLoginPage);
document.getElementById('nav-signup').addEventListener('click', showSignupPage);
document.getElementById('login-btn').addEventListener('click', showLoginPage);
document.getElementById('signup-btn').addEventListener('click', showSignupPage);
document.getElementById('go-to-login').addEventListener('click', showLoginPage);
document.getElementById('go-to-signup').addEventListener('click', showSignupPage);

// Functions to show different pages
function showHomePage() {
    hideAllPages();
    document.getElementById('home-page').classList.remove('hide');
}

function showLoginPage() {
    hideAllPages();
    document.getElementById('login-page').classList.remove('hide');
}

function showSignupPage() {
    hideAllPages();
    document.getElementById('signup-page').classList.remove('hide');
}

function hideAllPages() {
    document.getElementById('home-page').classList.add('hide');
    document.getElementById('login-page').classList.add('hide');
    document.getElementById('signup-page').classList.add('hide');
    document.getElementById('profile-page').classList.add('hide');
    document.getElementById('quiz-page').classList.add('hide');
}

// Event Listener for Login Form
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    if (username) {
        document.getElementById('username-display').textContent = username;
        hideAllPages();
        document.getElementById('profile-page').classList.remove('hide');
    }
});

// Event Listener for Signup Form
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    if (username) {
        document.getElementById('username-display').textContent = username;
        hideAllPages();
        document.getElementById('profile-page').classList.remove('hide');
    }
});

// Initialize Home Page on Load
showHomePage();
