
// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Add scroll animation to elements
function revealOnScroll() {
    const elements = document.querySelectorAll('.section h2, .project, #about ul li');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Add nav bar background on scroll
function handleNavBackground() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Initialize animations
function initAnimations() {
    // Add CSS classes for animations
    const style = document.createElement('style');
    style.innerHTML = `
        .project, .section h2, #about ul li {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .project.visible, .section h2.visible, #about ul li.visible {
            opacity: 1;
            transform: translateY(0);
        }
        nav.scrolled {
            background: rgba(255, 255, 255, 0.98);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        .project:nth-child(1) { transition-delay: 0.1s; }
        .project:nth-child(2) { transition-delay: 0.2s; }
        .project:nth-child(3) { transition-delay: 0.3s; }
        .project:nth-child(4) { transition-delay: 0.4s; }
        #about ul li:nth-child(1) { transition-delay: 0.1s; }
        #about ul li:nth-child(2) { transition-delay: 0.2s; }
        #about ul li:nth-child(3) { transition-delay: 0.3s; }
        #about ul li:nth-child(4) { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);
}

// Event listeners
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('scroll', handleNavBackground);
window.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    revealOnScroll();
    handleNavBackground();
});
