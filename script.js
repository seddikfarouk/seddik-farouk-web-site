// Change button color on hover
document.querySelectorAll('#contact-form button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#d4ac0d'; // Darker yellow
    });
    
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#f1c40f'; // Original yellow
    });
});

// Animate background color transition
document.body.style.transition = 'background-color 0.5s ease';

// Change background color every 10 seconds
let colors = ['#1c1c1c', '#2c3e50', '#34495e', '#1abc9c', '#16a085'];
let currentColorIndex = 0;

function changeBackgroundColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentColorIndex];
}

setInterval(changeBackgroundColor, 10000); // Change background color every 10 seconds

// 3D Animation for the logo
const logoS = document.querySelector('.logo-s');
const logoFarouk = document.querySelector('.logo-farouk');

function animateLogo() {
    logoS.style.transform = 'rotate(360deg)'; // Rotate 'S'
    logoS.style.transition = 'transform 2s ease-in-out'; // Smooth rotation

    logoFarouk.style.transform = 'scale(1.1)'; // Enlarge 'Farouk'
    logoFarouk.style.transition = 'transform 2s ease-in-out'; // Smooth scale
}

animateLogo(); // Start animation when the page loads

// Optional: Additional interactivity for logo
logoS.addEventListener('mouseover', () => {
    logoS.style.transform = 'rotate(360deg)'; // Rotate 'S'
});

logoS.addEventListener('mouseout', () => {
    logoS.style.transform = 'rotate(0deg)'; // Reset rotation
});

logoFarouk.addEventListener('mouseover', () => {
    logoFarouk.style.transform = 'scale(1.2)'; // Enlarge 'Farouk'
});

logoFarouk.addEventListener('mouseout', () => {
    logoFarouk.style.transform = 'scale(1)'; // Reset scale
});

  