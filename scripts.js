// Initialize AOS (Animate On Scroll Library)
AOS.init({
    duration: 1200, // Duration of animations
    once: true, // Animation occurs only once
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic header background on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-opacity-90', 'backdrop-blur');
    } else {
        header.classList.remove('bg-opacity-90', 'backdrop-blur');
    }
});
