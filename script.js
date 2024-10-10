function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY>= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id'); 
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); 
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active'); 
        }
    });
});
