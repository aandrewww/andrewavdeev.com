// Animation for role text changing
const roles = [
    'full-stack web developer',
    'engineering manager',
    'head of web dev',
];

let currentRoleIndex = 0;
const roleElement = document.getElementById('role');

function changeRole() {
    roleElement.style.opacity = '0';
    roleElement.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        roleElement.textContent = roles[currentRoleIndex];
        roleElement.style.opacity = '1';
        roleElement.style.transform = 'translateY(0)';
    }, 300);
}

// Change role every 3 seconds
setInterval(changeRole, 3000);

// Add typewriter effect to greeting
window.addEventListener('load', function() {
    const greeting = document.querySelector('.greeting');
    const text = greeting.textContent;
    greeting.textContent = '';
    greeting.classList.add('typewriter');
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            greeting.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            greeting.classList.remove('typewriter');
        }
    }
    
    setTimeout(typeWriter, 500);
});

// Add hover effect to animated text
roleElement.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
    this.style.color = '#ff4757';
});

roleElement.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.color = '#ff6b6b';
});

// Add click effect to links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect CSS
const rippleStyles = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;

// Add styles to head
const style = document.createElement('style');
style.textContent = rippleStyles;
document.head.appendChild(style);

// Add parallax effect to background
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
    
    document.body.style.backgroundPosition = `${mouseX * 20}px ${mouseY * 20}px`;
});

// Add loading animation
window.addEventListener('load', function() {
    const content = document.querySelector('.content');
    const footer = document.querySelector('.footer');
    
    content.style.opacity = '0';
    content.style.transform = 'translateY(50px)';
    footer.style.opacity = '0';
    footer.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
        content.style.transition = 'all 0.8s ease-out';
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
        
        setTimeout(() => {
            footer.style.transition = 'all 0.8s ease-out';
            footer.style.opacity = '1';
            footer.style.transform = 'translateY(0)';
        }, 300);
    }, 100);
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.tagName === 'A') {
            focusedElement.click();
        }
    }
});

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Console easter egg
console.log(`
    ╔══════════════════════════════════════╗
    ║           Hello, Developer!          ║
    ║                                      ║
    ║   Thanks for checking out my site!   ║
    ║   Want to collaborate? Let's talk!   ║
    ║                                      ║
    ║   📧 andrewww.avdeev@gmail.com      ║
    ║   🐙 github.com/aandrewww           ║
    ╚══════════════════════════════════════╝
`);

// Add performance monitoring
const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        console.log(`${entry.name}: ${entry.duration}ms`);
    }
});

observer.observe({ entryTypes: ['measure'] });

// Mark performance milestones
performance.mark('page-load-start');
window.addEventListener('load', () => {
    performance.mark('page-load-end');
    performance.measure('page-load-time', 'page-load-start', 'page-load-end');
}); 