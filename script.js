document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight - 10;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


function checkScroll() {
    const elements = document.querySelectorAll('.fade-in, .video-section, .letter-section, .contacts');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            el.classList.add('appear');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

