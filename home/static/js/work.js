// Work page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Start Your Project button functionality
    const workStartBtn = document.querySelector('.work-start-btn');
    
    if (workStartBtn) {
        workStartBtn.addEventListener('click', function() {
            console.log('Start Your Project button clicked on work page');
            
            // In a real application, this would open a project form or navigate to contact
            alert('This would open a project inquiry form or navigate to the contact page.');
            
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
    }
    
    // Update active navigation link for work page
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.textContent.trim() === 'Work' || link.getAttribute('href') === 'work.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Work page projects functionality
document.addEventListener('DOMContentLoaded', function() {
    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.work-project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Show all projects if "all" is selected
            if (filterValue === 'all') {
                projectCards.forEach(card => {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                });
            } else {
                // Filter projects based on category
                projectCards.forEach(card => {
                    const categories = card.getAttribute('data-category');
                    
                    if (categories.includes(filterValue)) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            }
        });
    });
    
    // View Project button functionality
    const workViewProjectBtns = document.querySelectorAll('.work-view-project-btn');
    
    workViewProjectBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const projectCard = this.closest('.work-project-card');
            const projectName = projectCard.querySelector('.work-project-name').textContent;
            
            console.log(`Viewing project: ${projectName}`);
            
            // In a real application, navigate to project detail page
            // window.location.href = `/projects/${projectName.toLowerCase().replace(/ /g, '-')}/`;
            
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Whole project card click functionality
    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking the view button
            if (!e.target.closest('.work-view-project-btn')) {
                const projectName = this.querySelector('.work-project-name').textContent;
                
                console.log(`Project card clicked: ${projectName}`);
                
                // In a real application, navigate to project detail page
                // window.location.href = `/projects/${projectName.toLowerCase().replace(/ /g, '-')}/`;
            }
        });
    });
    
    // Pagination functionality
    const pageNumbers = document.querySelectorAll('.page-number');
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    let currentPage = 1;
    
    // Page number click functionality
    pageNumbers.forEach(number => {
        number.addEventListener('click', function() {
            if (this.classList.contains('active')) return;
            
            // Update active page
            pageNumbers.forEach(num => num.classList.remove('active'));
            this.classList.add('active');
            
            currentPage = parseInt(this.textContent);
            
            // Update button states
            updatePaginationButtons();
            
            console.log(`Navigated to page ${currentPage}`);
            
            // In a real application, this would load the appropriate page of projects
            // simulatePageLoad(currentPage);
        });
    });
    
    // Previous button functionality
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (this.disabled) return;
            
            currentPage--;
            updateActivePage();
            updatePaginationButtons();
            
            console.log(`Navigated to page ${currentPage}`);
        });
    }
    
    // Next button functionality
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (this.disabled) return;
            
            currentPage++;
            updateActivePage();
            updatePaginationButtons();
            
            console.log(`Navigated to page ${currentPage}`);
        });
    }
    
    // Helper function to update active page
    function updateActivePage() {
        pageNumbers.forEach(num => {
            num.classList.remove('active');
            if (parseInt(num.textContent) === currentPage) {
                num.classList.add('active');
            }
        });
    }
    
    // Helper function to update button states
    function updatePaginationButtons() {
        if (prevBtn) {
            prevBtn.disabled = currentPage === 1;
        }
        
        if (nextBtn) {
            // In a real app, this would check if there's a next page
            // For demo, disable on last page (8)
            nextBtn.disabled = currentPage === 8;
        }
    }
    
    // Simulate page loading (for demo purposes)
    function simulatePageLoad(page) {
        console.log(`Loading projects for page ${page}...`);
        
        // Show loading animation
        const grid = document.querySelector('.work-projects-grid');
        const originalContent = grid.innerHTML;
        
        grid.innerHTML = `
            <div class="loading-overlay" style="
                grid-column: 1 / -1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 60px 0;
            ">
                <div class="spinner" style="
                    width: 50px;
                    height: 50px;
                    border: 3px solid rgba(59, 130, 246, 0.2);
                    border-top-color: #3b82f6;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin-bottom: 20px;
                "></div>
                <p style="color: #9ca3af; font-size: 1rem;">Loading projects...</p>
            </div>
        `;
        
        // Add spin animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Simulate API delay
        setTimeout(() => {
            grid.innerHTML = originalContent;
            // Re-attach event listeners after content reload
            setTimeout(() => {
                // In a real application, you would reinitialize the event listeners
                // or use event delegation
                console.log('Projects loaded for page', page);
            }, 100);
        }, 800);
    }
});