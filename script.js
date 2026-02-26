// Debugging statement to confirm script is loading
console.log("Script loaded - dental.js is working");

// Updated script.js for responsive navbar with overlay
const menuBtn = document.querySelector('.mobile-menu-btn');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
const closeBtn = document.querySelector('.close-btn');

// Debugging statement to check if elements are found
console.log("Menu button:", menuBtn);
console.log("Mobile nav overlay:", mobileNavOverlay);
console.log("Close button:", closeBtn);

menuBtn.addEventListener('click', () => {
    mobileNavOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    console.log("Mobile menu opened"); // Debugging
});

closeBtn.addEventListener('click', () => {
    mobileNavOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
    console.log("Mobile menu closed"); // Debugging
});

// Close menu when clicking on a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
        console.log("Mobile menu closed via link click"); // Debugging
    });
});

// Smooth scrolling for all links
/*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        console.log("Smooth scrolling to:", targetId);*/ // Debugging
        /*document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });*/
        /*document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offset = -5; // Adjust this value (in pixels)
    
        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

// Calculate and set proper top margin for main content
function adjustContentMargin() {
    const header = document.querySelector('.header');
    const main = document.querySelector('main');
    
    if (header && main) {
        const headerHeight = header.offsetHeight;
        main.style.marginTop = `${headerHeight}px`;
        console.log("Adjusted main content margin to header height:", headerHeight); // Debugging
    }else {
        console.warn("Header or main element not found!"); // Debugging
    }
}

// Run on load and resize
//window.addEventListener('load', adjustContentMargin);
window.addEventListener('load', () => {
    console.log("Window loaded - running initial adjustments"); // Debugging
    adjustContentMargin();
});
//window.addEventListener('resize', adjustContentMargin);
window.addEventListener('resize', () => {
    console.log("Window resized - adjusting layout"); // Debugging
    adjustContentMargin();
});

document.addEventListener('DOMContentLoaded', function() {
    const reviewImages = document.querySelectorAll('.review-photo');
    console.log('Found review images:', reviewImages.length);
    
    reviewImages.forEach((img, index) => {
        console.log(`Image ${index + 1}:`, img.src);
        img.onerror = function() {
            console.error(`Failed to load image: ${img.src}`);
        };
    });
});