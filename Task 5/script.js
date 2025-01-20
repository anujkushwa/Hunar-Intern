// // Smooth Scroll for navigation links
// document.querySelectorAll('.nav-links a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         const targetId = this.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetId);

//         window.scrollTo({
//             top: targetSection.offsetTop - 80, // Adjusted for navbar height
//             behavior: 'smooth'
//         });
//     });
// });





// Event listener for skill buttons
document.querySelectorAll('.skill-btn').forEach(button => {
    button.addEventListener('click', function() {
        const skill = this.getAttribute('data-skill');
        const description = document.getElementById('skill-description');

        // Update content dynamically based on the clicked skill
        switch(skill) {
            case 'Frontend Development':
                description.textContent = "Experience in HTML, CSS, JavaScript, and frontend frameworks like React.";
                break;
            case 'Backend Development':
                description.textContent = "Skilled in server-side technologies such as Node.js, Express, and databases.";
                break;
            case 'UI/UX Design':
                description.textContent = "Focused on user-centered design with tools like Figma and Adobe XD.";
                break;
            default:
                description.textContent = "Click a skill to learn more...";
                break;
        }
    });
});





// Scroll-to-top button functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'block'; // Show the button
    } else {
        scrollToTopBtn.style.display = 'none'; // Hide the button
    }
};

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});





// Example: Adding event listeners to each card for additional interactivity
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
  card.addEventListener('click', function() {
    alert(`You clicked on the ${this.querySelector('h3').textContent} card!`);
  });
});
