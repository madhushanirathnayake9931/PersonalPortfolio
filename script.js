document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Navbar Background Change on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Highlight Active Nav Link based on Scroll Section
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // 4. Contact Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple Success Message
            formStatus.innerHTML = `<p style="color: #10B981; font-weight: 600; margin-top: 10px;">Message sent successfully!</p>`;
            contactForm.reset();

            setTimeout(() => {
                formStatus.innerHTML = '';
            }, 4000);
        });
    }

    // 5. Download Resume Button Alert Example
    const downloadBtn = document.getElementById('download-cv');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Resume download started!');
        });
    }

});
// Video Modal Open කරන Function එක
function openVideoModal(modalId, videoId) {
    var modal = document.getElementById(modalId);
    var video = document.getElementById(videoId);

    if (modal) {
        modal.style.display = 'flex';
    }

    if (video) {
        video.currentTime = 0; // වීඩියෝ එක මුල සිට පටන් ගැනීම
        video.muted = true;    // Autoplay block නොවීමට Mute කරයි
        
        var playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(function(error) {
                console.log("Video Play Error: ", error);
            });
        }
    }
}

// Video Modal Close කරන Function එක
function closeVideoModal(modalId, videoId) {
    var modal = document.getElementById(modalId);
    var video = document.getElementById(videoId);

    if (modal) {
        modal.style.display = 'none';
    }

    if (video) {
        video.pause();
        video.currentTime = 0;
    }
}

// Modal එකෙන් පිටත Click කළ විට Close වීම
window.onclick = function(event) {
    if (event.target.classList.contains('video-modal')) {
        event.target.style.display = 'none';
        var video = event.target.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }
};