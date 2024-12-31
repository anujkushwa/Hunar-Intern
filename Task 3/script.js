// JavaScript to dynamically load movies (optional, for a dynamic experience)

document.addEventListener("DOMContentLoaded", () => {
    console.log("Netflix Clone Loaded!");
});


document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const toggle = question.querySelector('.toggle');

        // Toggle visibility
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            toggle.textContent = '+';
        } else {
            answer.style.display = 'block';
            toggle.textContent = '-';
        }
    });
});


document.querySelector('.language-btn').addEventListener('click', () => {
    alert('Language selection is not implemented yet.');
});


document.querySelector('.get-started-btn').addEventListener('click', () => {
    const email = document.querySelector('.email-input').value;
    if (email) {
        alert(`Welcome! Your email: ${email}`);
    } else {
        alert('Please enter your email address.');
    }
});

