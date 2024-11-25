// Initialize AOS (Animate On Scroll Library)
AOS.init({
    duration: 1500, // Smooth and longer animations
    once: true,     // Trigger animations only once
});

// Dynamic header background on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('bg-opacity-90', 'backdrop-blur-md');
    } else {
        header.classList.remove('bg-opacity-90', 'backdrop-blur-md');
    }
});
