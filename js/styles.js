document.addEventListener('DOMContentLoaded', () => {
    // Set the logo image
    const logo = document.getElementById('logo');
    logo.src = 'assets/images/MoCrest-logo.jpeg';

    // Set background images for sections dynamically
    const sections = [
        { id: 'about', background: 'assets/images/Index-background.jpeg' },
        { id: 'subsidiaries', background: 'assets/images/Index-background.jpeg' },
        { id: 'corporate-responsibility', background: 'assets/images/Index-background.jpeg' },
        { id: 'contact-us', background: 'assets/images/Index-background.jpeg' },
    ];

    sections.forEach(section => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) {
            sectionElement.style.backgroundImage = `url('${section.background}')`;
        }
    });
});
