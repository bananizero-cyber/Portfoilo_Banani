// ============================================
// MOHAMED BANANI PORTFOLIO - JAVASCRIPT
// Interactive Features & Animations
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mobileMenu.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
    
    // ============================================
    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ============================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // LANGUAGE TOGGLE (ENGLISH / ARABIC)
    // ============================================
    const langToggle = document.getElementById('langToggle');
    const langToggleMobile = document.getElementById('langToggleMobile');
    let currentLang = 'en';
    
    function switchLanguage() {
        const html = document.querySelector('html');
        const body = document.body;
        
        if (currentLang === 'en') {
            currentLang = 'ar';
            html.setAttribute('lang', 'ar');
            html.setAttribute('dir', 'rtl');
            body.setAttribute('dir', 'rtl');
            langToggle.textContent = 'English';
            langToggleMobile.textContent = 'English';
        } else {
            currentLang = 'en';
            html.setAttribute('lang', 'en');
            html.setAttribute('dir', 'ltr');
            body.setAttribute('dir', 'ltr');
            langToggle.textContent = 'عربي';
            langToggleMobile.textContent = 'عربي';
        }
        
        // Update all translatable elements
        updateTranslations();
    }
    
    function updateTranslations() {
        const translatableElements = document.querySelectorAll('[data-en][data-ar]');
        
        console.log(`Updating ${translatableElements.length} translatable elements to ${currentLang}`);
        
        translatableElements.forEach(element => {
            const newText = currentLang === 'ar' ? element.getAttribute('data-ar') : element.getAttribute('data-en');
            
            // Special handling for list items with icons (principle-icon, achievement-icon, experience-icon)
            if (element.tagName === 'LI' && element.querySelector('.principle-icon, .achievement-icon, .experience-icon')) {
                const icon = element.querySelector('.principle-icon, .achievement-icon, .experience-icon');
                
                // Clear all text nodes but keep the icon
                Array.from(element.childNodes).forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        element.removeChild(node);
                    }
                });
                
                // Add space and new text after icon
                const textNode = document.createTextNode(' ' + newText);
                icon.parentNode.insertBefore(textNode, icon.nextSibling);
                console.log(`Updated LI with icon: ${newText}`);
                return;
            }
            
            // For elements without child HTML elements
            if (element.children.length === 0) {
                element.textContent = newText;
                console.log(`Updated simple element (${element.tagName}): ${newText.substring(0, 30)}...`);
                return;
            }
            
            // For buttons and links - simple replacement
            if (element.tagName === 'BUTTON' || element.tagName === 'A' || element.tagName === 'SPAN') {
                element.textContent = newText;
                console.log(`Updated ${element.tagName}: ${newText}`);
                return;
            }
            
            // For other elements with children - replace first text node
            for (let i = 0; i < element.childNodes.length; i++) {
                const node = element.childNodes[i];
                if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
                    node.textContent = newText;
                    console.log(`Updated text node in ${element.tagName}: ${newText.substring(0, 30)}...`);
                    return;
                }
            }
            
            console.warn(`Could not update element:`, element);
        });
        
        console.log('Translation update complete');
    }
    
    langToggle.addEventListener('click', switchLanguage);
    langToggleMobile.addEventListener('click', switchLanguage);
    
    // ============================================
    // INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe all sections and cards
    const elementsToAnimate = document.querySelectorAll(
        '.section, .skill-card, .project-card, .experience-card'
    );
    
    elementsToAnimate.forEach(element => {
        element.classList.add('scroll-reveal');
        observer.observe(element);
    });
    
    // ============================================
    // TYPING EFFECT FOR HERO TITLE (OPTIONAL)
    // ============================================
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Uncomment to enable typing effect
    // const heroTitle = document.querySelector('.hero-title');
    // if (heroTitle) {
    //     const titleText = heroTitle.textContent;
    //     typeWriter(heroTitle, titleText, 50);
    // }
    
    // ============================================
    // CURSOR GLOW EFFECT (OPTIONAL)
    // ============================================
    let cursorGlow = null;
    
    function createCursorGlow() {
        cursorGlow = document.createElement('div');
        cursorGlow.className = 'cursor-glow';
        cursorGlow.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(100, 255, 218, 0.3) 0%, transparent 70%);
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            display: none;
        `;
        document.body.appendChild(cursorGlow);
    }
    
    // Uncomment to enable cursor glow on desktop
    // if (window.innerWidth > 768) {
    //     createCursorGlow();
    //     
    //     document.addEventListener('mousemove', function(e) {
    //         if (cursorGlow) {
    //             cursorGlow.style.display = 'block';
    //             cursorGlow.style.left = e.clientX - 10 + 'px';
    //             cursorGlow.style.top = e.clientY - 10 + 'px';
    //         }
    //     });
    // }
    
    // ============================================
    // DYNAMIC YEAR IN FOOTER
    // ============================================
    const footerCopyright = document.querySelector('.footer-copyright');
    if (footerCopyright) {
        const currentYear = new Date().getFullYear();
        footerCopyright.textContent = `© ${currentYear} Mohamed Banani. All rights reserved.`;
    }
    
    // ============================================
    // BUTTON RIPPLE EFFECT
    // ============================================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation to CSS dynamically
    if (!document.querySelector('#ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'ripple-animation';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // SCROLL PROGRESS INDICATOR (OPTIONAL)
    // ============================================
    function createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: linear-gradient(90deg, #64FFDA 0%, #F4A460 100%);
            z-index: 10000;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    
    // Uncomment to enable scroll progress bar
    // createScrollProgress();
    
    // ============================================
    // PARALLAX EFFECT FOR HERO SECTION
    // ============================================
    const heroSection = document.querySelector('.hero');
    
    if (heroSection && window.innerWidth > 768) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const parallaxSpeed = 0.5;
            heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
    
    // ============================================
    // LAZY LOADING FOR IMAGES (IF ADDED LATER)
    // ============================================
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
    
    // ============================================
    // COPY EMAIL TO CLIPBOARD
    // ============================================
    const emailLink = document.querySelector('.email-link');
    
    if (emailLink) {
        emailLink.addEventListener('dblclick', function(e) {
            e.preventDefault();
            const email = this.textContent;
            
            navigator.clipboard.writeText(email).then(function() {
                // Create temporary notification
                const notification = document.createElement('div');
                notification.textContent = currentLang === 'ar' 
                    ? 'تم نسخ البريد الإلكتروني!' 
                    : 'Email copied to clipboard!';
                notification.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #64FFDA;
                    color: #0A192F;
                    padding: 1rem 2rem;
                    border-radius: 4px;
                    font-weight: 600;
                    z-index: 10000;
                    animation: slideIn 0.3s ease;
                `;
                
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }, 2000);
            });
        });
    }
    
    // Add slide animation for notification
    if (!document.querySelector('#notification-animation')) {
        const style = document.createElement('style');
        style.id = 'notification-animation';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ============================================
    function highlightActiveSection() {
        const sections = document.querySelectorAll('.section');
        const navLinksList = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinksList.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    
    // ============================================
    // FORM VALIDATION (IF CONTACT FORM ADDED)
    // ============================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('[name="name"]').value;
            const email = this.querySelector('[name="email"]').value;
            const message = this.querySelector('[name="message"]').value;
            
            if (name && email && message) {
                // Handle form submission
                console.log('Form submitted:', { name, email, message });
                
                // Show success message
                alert(currentLang === 'ar' 
                    ? 'شكرًا لتواصلك! سأرد عليك قريبًا.' 
                    : 'Thank you for your message! I\'ll get back to you soon.');
                
                this.reset();
            }
        });
    }
    
    // ============================================
    // PERFORMANCE OPTIMIZATION
    // ============================================
    
    // Debounce function for scroll events
    function debounce(func, wait = 10, immediate = true) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    window.addEventListener('scroll', debounce(highlightActiveSection, 50));
    
    // ============================================
    // ACCESSIBILITY ENHANCEMENTS
    // ============================================
    
    // Skip to main content
    const skipLink = document.createElement('a');
    skipLink.href = '#about';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: #64FFDA;
        color: #0A192F;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Keyboard navigation enhancement
    document.addEventListener('keydown', function(e) {
        // ESC to close mobile menu
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
    
    // ============================================
    // PRELOADER (OPTIONAL)
    // ============================================
    function createPreloader() {
        const preloader = document.createElement('div');
        preloader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0A192F;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10001;
            transition: opacity 0.5s ease;
        `;
        
        preloader.innerHTML = `
            <div style="
                width: 50px;
                height: 50px;
                border: 3px solid rgba(100, 255, 218, 0.3);
                border-top-color: #64FFDA;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></div>
        `;
        
        document.body.appendChild(preloader);
        
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.style.opacity = '0';
                setTimeout(() => preloader.remove(), 500);
            }, 500);
        });
    }
    
    // Uncomment to enable preloader
    // createPreloader();
    
    // Add spin animation
    if (!document.querySelector('#spin-animation')) {
        const style = document.createElement('style');
        style.id = 'spin-animation';
        style.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // ============================================
    // CONSOLE MESSAGE
    // ============================================
    console.log('%c👋 Hello! Thanks for checking out the code.', 'font-size: 16px; color: #64FFDA; font-weight: bold;');
    console.log('%cBuilt with ❤️ by Mohamed Banani', 'font-size: 12px; color: #8892B0;');
    console.log('%cInterested in working together? Email: bananizero@gmail.com', 'font-size: 12px; color: #64FFDA;');
    
}); // End of DOMContentLoaded
