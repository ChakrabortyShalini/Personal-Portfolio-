
document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    alert('Form submitted successfully!');
    
    // Add form handling code here (e.g., send form data to your email or database)
});
