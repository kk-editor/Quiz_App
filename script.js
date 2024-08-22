// Home Page Navigation

const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const navHome = document.getElementById('nav-home');
const navLogin = document.getElementById('nav-login');
const navSignup = document.getElementById('nav-signup');

loginBtn.addEventListener('click', () => {
    document.getElementById('home-page').classList.add('hide');
    document.getElementById('login-page').classList.remove('hide');
});

signupBtn.addEventListener('click', () => {
    document.getElementById('home-page').classList.add('hide');
    document.getElementById('signup-page').classList.remove('hide');
});

navHome.addEventListener('click', () => {
    navigateToPage('home-page');
});

navLogin.addEventListener('click', () => {
    navigateToPage('login-page');
});

navSignup.addEventListener('click', () => {
    navigateToPage('signup-page');
});

function navigateToPage(pageId) {
    document.querySelectorAll('.home-container, .auth-container, .profile-container').forEach(page => {
        page.classList.add('hide');
    });
    document.getElementById(pageId).classList.remove('hide');
}

// Link Navigation within Auth Pages
document.getElementById('go-to-login').addEventListener('click', () => {
    navigateToPage('login-page');
});

document.getElementById('go-to-signup').addEventListener('click', () => {
    navigateToPage('signup-page');
});

// Authentication and Profile Page Logic

const loginPage = document.getElementById('login-page');
const signupPage = document.getElementById('signup-page');
const profilePage = document.getElementById('profile-page');
const usernameDisplay = document.getElementById('username-display');

const goToSignup = document.getElementById('go-to-signup');
const goToLogin = document.getElementById('go-to-login');

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Switch between Login and Signup pages
goToSignup.addEventListener('click', () => {
    loginPage.classList.add('hide');
    signupPage.classList.remove('hide');
});

goToLogin.addEventListener('click', () => {
    signupPage.classList.add('hide');
    loginPage.classList.remove('hide');
});

// Handle Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // For simplicity, we'll assume login is always successful
    login(username);
});

// Handle Signup
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // For simplicity, we'll assume signup is always successful
    login(username);
});

function login(username) {
    usernameDisplay.innerText = username;
    loginPage.classList.add('hide');
    signupPage.classList.add('hide');
    profilePage.classList.remove('hide');
}

// Quiz Selection Logic
const quizButtons = document.querySelectorAll('.quiz-btn');

quizButtons.forEach(button => {
    button.addEventListener('click', () => {
        const quizType = button.getAttribute('data-quiz-type');
        startQuiz(quizType);
    });
});

function startQuiz(quizType) {
    alert(`Starting ${quizType} quiz`);
    // Here you would switch to the quiz interface and load the corresponding questions
}
