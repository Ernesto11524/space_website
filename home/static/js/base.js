// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
            
            // Update active class
            navItems.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Launch Project button functionality
    const launchBtn = document.querySelector('.launch-project-btn');
    if (launchBtn) {
        launchBtn.addEventListener('click', function() {
            alert('Launch Project button clicked! This would typically open a project modal or navigate to a project page.');
        });
    }
    
    // Social media icons hover effects (already handled by CSS)
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Home page button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Launch Project button in hero section
    const heroLaunchBtn = document.querySelector('.btn-primary');
    if (heroLaunchBtn) {
        heroLaunchBtn.addEventListener('click', function() {
            alert('Launch Project button clicked from hero section!');
            // You can redirect to project page or open a modal here
        });
    }
    
    // Explore Work button
    const exploreWorkBtn = document.querySelector('.btn-secondary');
    if (exploreWorkBtn) {
        exploreWorkBtn.addEventListener('click', function() {
            // Redirect to work page
            window.location.href = "{% url 'work' %}";
        });
    }
});