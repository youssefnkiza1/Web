// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // ====================
    // MOBILE MENU FUNCTIONALITY
    // ====================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Close mobile menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // ====================
    // HEADER SCROLL EFFECT
    // ====================
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${sectionId}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    });
    
    // ====================
    // ANIMATED COUNTERS FOR STATS
    // ====================
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    };
    
    // Initialize counters when in viewport
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // Start counters when stats section is visible
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    
    // ====================
    // SKILLS CHART
    // ====================
    const skillsChartCanvas = document.getElementById('skillsChart');
    if (skillsChartCanvas) {
        const ctx = skillsChartCanvas.getContext('2d');
        const skillsChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Networking', 'Security', 'System Admin', 'Web Tech', 'Digital Marketing', 'Problem Solving'],
                datasets: [{
                    label: 'Expertise Level',
                    data: [95, 90, 92, 88, 85, 94],
                    backgroundColor: 'rgba(37, 99, 235, 0.2)',
                    borderColor: '#2563eb',
                    borderWidth: 2,
                    pointBackgroundColor: '#2563eb',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 4
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        suggestedMin: 0,
                        suggestedMax: 100,
                        ticks: {
                            stepSize: 20,
                            display: false
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        pointLabels: {
                            font: {
                                size: 12,
                                weight: '600'
                            },
                            color: '#64748b'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
    
    // ====================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ====================
    // ANIMATE ELEMENTS ON SCROLL
    // ====================
    // Animate badges on scroll
    const badges = document.querySelectorAll('.badge');
    const badgeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    badges.forEach(badge => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(20px)';
        badge.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        badgeObserver.observe(badge);
    });
    
    // Animate skill cards on scroll
    const skillCards = document.querySelectorAll('.skill-card');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    skillCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        cardObserver.observe(card);
    });
    
    // Animate timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        timelineObserver.observe(item);
    });
    
    // ====================
    // TECH ICONS ANIMATION
    // ====================
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
    });
    
    // ====================
    // NEWSLETTER FORM SUBMISSION
    // ====================
    const newsletterBtn = document.querySelector('.newsletter-btn');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function() {
            const emailInput = document.querySelector('.newsletter input');
            if (emailInput.value) {
                alert(`Thank you for subscribing with email: ${emailInput.value}`);
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address');
            }
        });
    }
    
    // ====================
    // SCROLL TO TOP BUTTON
    // ====================
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ====================
    // PROFILE PICTURE UPLOAD FUNCTIONALITY
    // ====================
    function changeProfilePicture(imageUrl) {
        const profileImg = document.querySelector('.profile-img');
        if (imageUrl && profileImg) {
            profileImg.innerHTML = `<img src="${imageUrl}" alt="Youssef Nkiza">`;
        }
    }
    
    // Example: To use this function, call changeProfilePicture('your-image-url.jpg')
    // You can also add an upload feature if needed
    
    // ====================
    // DOWNLOAD RESUME FUNCTIONALITY
    // ====================
    // Note: Replace "YOUR_RESUME_LINK_HERE" in the HTML with your actual resume URL
    const downloadResumeBtns = document.querySelectorAll('a[href="YOUR_RESUME_LINK_HERE"]');
    downloadResumeBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // You can add tracking or analytics here
            console.log('Resume download initiated');
        });
    });
    
    // ====================
    // PARALLAX EFFECT FOR HERO BACKGROUND
    // ====================
    window.addEventListener('scroll', () => {
        const heroBg = document.querySelector('.hero-bg');
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroBg) {
            heroBg.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // ====================
    // INITIALIZE ALL ANIMATIONS
    // ====================
    // Set initial states for animated elements
    const animatedElements = document.querySelectorAll('.badge, .skill-card, .timeline-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
    });
    
    console.log('Portfolio website initialized successfully!');
});

// ====================
// UTILITY FUNCTIONS
// ====================

// Function to update profile picture (call this from console or UI)
function updateProfilePicture(imageUrl) {
    const profileImg = document.querySelector('.profile-img');
    if (profileImg && imageUrl) {
        // If image URL is provided, use it
        if (imageUrl.startsWith('http') || imageUrl.startsWith('/')) {
            profileImg.innerHTML = `<img src="${imageUrl}" alt="Youssef Nkiza">`;
        } else {
            // If it's a file upload, you'd need to handle it differently
            console.log('Please provide a valid image URL');
        }
    }
}

// Function to update resume links dynamically
function updateResumeLink(newLink) {
    const resumeLinks = document.querySelectorAll('a[href="https://youssefnkiza1.github.io/Resume/CV_Youssef_Nkiza_Portfolio.pdf"]');
    resumeLinks.forEach(link => {
        link.setAttribute('href', newLink);
    });
    console.log('Resume links updated to:', newLink);
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateProfilePicture,
        updateResumeLink
    };
}