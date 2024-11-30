// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section based on the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Smooth scroll to the target section
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjusts for header height
                behavior: 'smooth'
            });

            // Update active class for the clicked link
            document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Function to highlight navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPosition = window.pageYOffset + 70; // Adjust for header height

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
            document.querySelector(`nav ul li a[href="#${sectionId}"]`).classList.add('active');
        }
    });
});

// Mobile menu toggle (if needed for mobile view)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        navToggle.classList.toggle('active');
    });
}
