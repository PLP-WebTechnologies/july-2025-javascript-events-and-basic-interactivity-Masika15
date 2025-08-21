// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') 
        ? 'Switch to Light Mode' 
        : 'Toggle Light/Dark Mode';
});

// Counter Game Functionality
let score = 0;
const scoreDisplay = document.getElementById('score');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

incrementBtn.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    // Add animation effect
    scoreDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        scoreDisplay.style.transform = 'scale(1)';
    }, 200);
});

resetBtn.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = score;
});

// Form Validation Functionality
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    formSuccess.textContent = '';

    // Name validation: must be at least 2 characters
    if (nameInput.value.trim().length < 2) {
        nameError.textContent = 'Name must be at least 2 characters long';
        isValid = false;
    }

    // Email validation: basic regex for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address';
        isValid = false;
    }

    // Password validation: at least 8 characters, one number, one special character
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 'Password must be at least 8 characters with a number and special character';
        isValid = false;
    }

    // Show success message if form is valid
    if (isValid) {
        formSuccess.textContent = 'Form submitted successfully!';
        form.reset();
    }
});

// Real-time validation on input
[nameInput, emailInput, passwordInput].forEach(input => {
    input.addEventListener('input', () => {
        // Clear error message when user starts typing
        const errorElement = document.getElementById(`${input.id}Error`);
        errorElement.textContent = '';
        formSuccess.textContent = '';
    });
});
