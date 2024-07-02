// Array of project objects
const projects = [
    {
        title: 'GreenRoute',
        description: 'A web application that optimizes travel routes based on carbon emissions.',
        caseStudyLink: '#',
        testimonials: ['Testimonial 1', 'Testimonial 2']
    },
    {
        title: 'EcoClicker',
        description: 'A browser extension that encourages users to reduce their digital carbon footprint.',
        caseStudyLink: '#',
        testimonials: ['Testimonial 1', 'Testimonial 2']
    }
];

// Function to generate project cards
function generateProjectCards(filteredProjects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // Clear previous projects
    
    filteredProjects.forEach(project => {
        // Create project card elements
        const projectCard = document.createElement('div');
        projectCard.classList.add('project');

        const projectTitle = document.createElement('h3');
        projectTitle.innerText = project.title;
        projectTitle.style.textDecoration = "underline";
        projectTitle.style.fontSize = "1.5em";

        const projectDescription = document.createElement('p');
        projectDescription.innerText = project.description;

        const projectLink = document.createElement('a');
        projectLink.classList.add('project-link');
        projectLink.href = project.caseStudyLink;
        projectLink.innerText = 'View Case Study';
        projectLink.style.position = "absolute";
        projectLink.style.bottom = "20px";
        projectLink.style.right = "20px";

        const testimonialsDiv = document.createElement('div');
        testimonialsDiv.classList.add('testimonials');

        project.testimonials.forEach(testimonial => {
            const testimonialP = document.createElement('p');
            testimonialP.innerText = testimonial;
            testimonialsDiv.appendChild(testimonialP);
        });

        // Append elements to project card
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(projectLink);
        projectCard.appendChild(testimonialsDiv);

        // Append project card to container
        container.appendChild(projectCard);
    });
}

// Function to filter projects based on search text
function filterProjects(searchText) {
    if (!searchText) {
        generateProjectCards(projects); // Show all projects if search text is empty
        return;
    }

    const filteredProjects = projects.filter(project => {
        // Match search text in title or description (case insensitive)
        const titleMatches = project.title.toLowerCase().includes(searchText.toLowerCase());
        const descriptionMatches = project.description.toLowerCase().includes(searchText.toLowerCase());
        return titleMatches || descriptionMatches;
    });

    generateProjectCards(filteredProjects);
}

// Initialize project cards on page load
document.addEventListener('DOMContentLoaded', () => {
    generateProjectCards(projects); // Show all projects initially

    // Search input and clear button functionality
    const searchInput = document.getElementById('search');
    const clearButton = document.getElementById('clear-search');

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.trim();
        filterProjects(searchText);
    });

    clearButton.addEventListener('click', () => {
        searchInput.value = ''; // Clear search input
        filterProjects(''); // Show all projects
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        // Validate form
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (validateForm(name, email, message)) {
            // If validation passes, you can submit the form data via AJAX or any other method here
            console.log('Form submitted');
            alert('Thank you for your message! I will get back to you soon.');
            form.reset(); // Clear the form
        }
    });
});

function validateForm(name, email, message) {
    let valid = true;
    
    // Simple validation checks
    if (name === '') {
        alert('Name is required');
        valid = false;
    }
    
    if (email === '') {
        alert('Email is required');
        valid = false;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        valid = false;
    }
    
    if (message === '') {
        alert('Message is required');
        valid = false;
    }
    
    return valid;
}

function validateEmail(email) {
    // Basic email pattern for validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}


