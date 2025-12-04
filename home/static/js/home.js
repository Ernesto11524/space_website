// Capabilities section functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all capability cards
    const capabilityCards = document.querySelectorAll('.capability-card');
    
    // Add click event listeners to each card
    capabilityCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the capability title
            const title = this.querySelector('.capability-title').textContent;
            
            // Show a message (you can replace this with actual navigation)
            console.log(`Clicked on: ${title}`);
            
            // Optional: Add a visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // In a real application, you would navigate to the respective page
            // window.location.href = `/service/${title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}/`;
        });
        
        // Add hover effect for touch devices
        card.addEventListener('touchstart', function() {
            this.classList.add('hover-effect');
        });
        
        card.addEventListener('touchend', function() {
            this.classList.remove('hover-effect');
        });
    });
    
    // Add CSS class for touch hover effect
    const style = document.createElement('style');
    style.textContent = `
        .capability-card.hover-effect {
            transform: translateY(-5px) !important;
            border-color: rgba(59, 130, 246, 0.5) !important;
        }
    `;
    document.head.appendChild(style);
});

// Featured Projects section functionality
document.addEventListener('DOMContentLoaded', function() {
    // View Project buttons functionality
    const viewProjectBtns = document.querySelectorAll('.view-project-btn');
    
    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click from firing
            
            // Get project name from the card
            const projectCard = this.closest('.project-card');
            const projectName = projectCard.querySelector('.project-name').textContent;
            
            // Show message (replace with actual navigation)
            console.log(`Viewing project: ${projectName}`);
            
            // In a real application, you would navigate to the project detail page
            // window.location.href = `/projects/${projectName.toLowerCase().replace(/ /g, '-')}/`;
            
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Whole project card click functionality
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking the view button
            if (!e.target.closest('.view-project-btn')) {
                const projectName = this.querySelector('.project-name').textContent;
                
                // Show message (replace with actual navigation)
                console.log(`Project card clicked: ${projectName}`);
                
                // In a real application, you would navigate to the project detail page
                // window.location.href = `/projects/${projectName.toLowerCase().replace(/ /g, '-')}/`;
            }
        });
    });
    
    // View All Projects link functionality
    const viewAllLink = document.querySelector('.view-all-link');
    if (viewAllLink) {
        viewAllLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Navigating to all projects page');
            
            // In a real application, you would navigate to the work/projects page
            // window.location.href = '/work/';
            
            // Visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    }
});

// Team section functionality
document.addEventListener('DOMContentLoaded', function() {
    // Team member hover functionality
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            // Add any additional hover effects here if needed
        });
        
        member.addEventListener('mouseleave', function() {
            // Remove any additional hover effects here if needed
        });
        
        // Click functionality for team members
        member.addEventListener('click', function() {
            const memberName = this.querySelector('.member-name').textContent;
            const memberTitle = this.querySelector('.member-title').textContent;
            
            console.log(`Team member clicked: ${memberName} - ${memberTitle}`);
            
            // In a real application, you would navigate to team member bio page
            // window.location.href = `/team/${memberName.toLowerCase().replace(/ /g, '-')}/`;
            
            // Visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Optional: Add social media icons on hover (enhancement)
    const teamPhotos = document.querySelectorAll('.member-photo');
    
    teamPhotos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            // Create social icons overlay on hover
            const socialOverlay = document.createElement('div');
            socialOverlay.className = 'social-overlay';
            socialOverlay.innerHTML = `
                <div class="social-icons">
                    <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                </div>
            `;
            
            // Add styles for social overlay
            const style = document.createElement('style');
            style.textContent = `
                .social-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8));
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 4;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .social-icons {
                    display: flex;
                    gap: 15px;
                }
                
                .social-overlay .social-icon {
                    color: white;
                    font-size: 18px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .social-overlay .social-icon:hover {
                    background: rgba(255, 255, 255, 0.3);
                    transform: translateY(-2px);
                }
            `;
            
            this.appendChild(socialOverlay);
            
            // Fade in the social overlay
            setTimeout(() => {
                socialOverlay.style.opacity = '1';
            }, 10);
        });
        
        photo.addEventListener('mouseleave', function() {
            const socialOverlay = this.querySelector('.social-overlay');
            if (socialOverlay) {
                socialOverlay.style.opacity = '0';
                setTimeout(() => {
                    socialOverlay.remove();
                }, 300);
            }
        });
    });
});

// Testimonials section functionality
document.addEventListener('DOMContentLoaded', function() {
    // Read More functionality for testimonials
    const readMoreLinks = document.querySelectorAll('.read-more');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const testimonialText = this.parentElement;
            
            if (testimonialText.classList.contains('expanded')) {
                // Collapse the text
                testimonialText.classList.remove('expanded');
                this.textContent = '... Read More';
            } else {
                // Expand the text
                testimonialText.classList.add('expanded');
                this.textContent = ' Read Less';
            }
        });
    });
    
    // View More Testimonials button functionality
    const viewMoreBtn = document.querySelector('.view-more-btn');
    
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function() {
            console.log('View More Testimonials clicked');
            
            // In a real application, this would load more testimonials or navigate to a testimonials page
            // For now, we'll show an alert
            alert('This would typically load more testimonials or navigate to a dedicated testimonials page.');
            
            // Visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    }
    
    // Testimonial card hover effects
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add any additional hover effects if needed
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove any additional hover effects if needed
        });
        
        // Optional: Click to expand testimonial
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking the read more link
            if (!e.target.classList.contains('read-more')) {
                const testimonialText = this.querySelector('.testimonial-text');
                const readMoreLink = this.querySelector('.read-more');
                
                if (testimonialText && readMoreLink) {
                    if (testimonialText.classList.contains('expanded')) {
                        testimonialText.classList.remove('expanded');
                        readMoreLink.textContent = '... Read More';
                    } else {
                        testimonialText.classList.add('expanded');
                        readMoreLink.textContent = ' Read Less';
                    }
                }
            }
        });
    });
    
    // Optional: Create a more testimonials modal or expandable section
    const createMoreTestimonials = () => {
        const moreTestimonials = [
            {
                name: "David Kim",
                time: "3 months ago",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                text: "The branding work SPACE did for our company transformed our identity. They captured our vision perfectly and delivered a cohesive brand system that resonates with our audience."
            },
            {
                name: "Sophia Williams",
                time: "2 months ago",
                rating: 4,
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                text: "Their digital strategy expertise helped us optimize our online presence and achieve measurable results. The team was data-driven and innovative in their approach."
            }
        ];
        
        // This function would be called when "View More Testimonials" is clicked
        // to dynamically add more testimonial cards
    };
});

// Final CTA section functionality
document.addEventListener('DOMContentLoaded', function() {
    // Start a Project button functionality
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            console.log('Start a Project button clicked');
            
            // In a real application, this would open a contact form or navigate to contact page
            // For now, we'll show a message
            alert('This would typically open a project inquiry form or navigate to the contact page.');
            
            // Visual feedback with ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            // Remove ripple element after animation
            setTimeout(() => {
                ripple.remove();
            }, 600);
            
            // Button press effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Add CSS for ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Optional: Add some interactive background elements
    const ctaSection = document.querySelector('.cta-section');
    
    if (ctaSection) {
        // Create floating particles on mouse move
        ctaSection.addEventListener('mousemove', function(e) {
            const particles = this.querySelectorAll('.floating-particle');
            
            // Limit number of particles
            if (particles.length < 15) {
                const particle = document.createElement('div');
                particle.className = 'floating-particle';
                
                const size = Math.random() * 4 + 1;
                const x = e.clientX - this.getBoundingClientRect().left;
                const y = e.clientY - this.getBoundingClientRect().top;
                
                particle.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    background: rgba(59, 130, 246, 0.3);
                    border-radius: 50%;
                    top: ${y}px;
                    left: ${x}px;
                    pointer-events: none;
                    z-index: 1;
                    animation: floatAway 1.5s ease-out forwards;
                `;
                
                this.appendChild(particle);
                
                // Remove particle after animation
                setTimeout(() => {
                    particle.remove();
                }, 1500);
            }
        });
        
        // Add CSS for floating animation
        const floatStyle = document.createElement('style');
        floatStyle.textContent = `
            @keyframes floatAway {
                0% {
                    transform: translate(0, 0) scale(1);
                    opacity: 0.7;
                }
                100% {
                    transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * -100 - 50}px) scale(0);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(floatStyle);
    }
});