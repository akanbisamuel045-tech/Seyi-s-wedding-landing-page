// Toggle Mobile Menu
// --- script.js change ---

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        menu.classList.add('hidden'); // <-- Ensure this class is added back when closing
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// Smooth Scroll Function
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Close menu if open on mobile
        const menu = document.getElementById('mobile-menu');
        if (!menu.classList.contains('hidden')) {
            toggleMenu();
        }
    }
}

// Handle Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.remove('nav-transparent');
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.add('nav-transparent');
        nav.classList.remove('nav-scrolled');
    }
});

// Handle RSVP Submission
function handleRsvp(event) {
    event.preventDefault(); // Stop page reload

    // Get values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const guests = document.getElementById('guests').value;
    const attending = document.querySelector('input[name="attending"]:checked').value;
    const messageText = document.getElementById('message').value;

    if (!name || !email) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create WhatsApp message string
    const attendingText = attending === 'yes' ? 'Joyfully Accepts ✅' : 'Regretfully Declines ❌';
    const message = `🎉 NEW RSVP SUBMISSION 🎉%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Number of Guests: ${guests}%0A` +
        `Attending: ${attendingText}%0A` +
        `Special Requests: ${messageText || 'None'}`;
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/2349081689385?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    alert(`Thank you ${name}! Your RSVP has been received.`);
    
    // Reset form
    event.target.reset();
}