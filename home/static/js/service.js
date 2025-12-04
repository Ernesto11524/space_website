// Service page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Update active navigation link for service page
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.textContent.trim() === 'Service' || link.getAttribute('href') === 'service.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Service page interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Service card click functionality
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceName = this.querySelector('.service-name').textContent;
            
            console.log(`Service clicked: ${serviceName}`);
            
            // In a real application, this would navigate to service detail page
            // window.location.href = `/services/${serviceName.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/`;
            
            // Visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
        
        // Add keyboard navigation support
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Make cards focusable
        card.setAttribute('tabindex', '0');
    });
    
    // Service card hover effects enhancement
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Additional hover effects if needed
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset any additional hover effects
        });
    });
});