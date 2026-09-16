document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.app-container');

    // Smooth scroll integration selector logic for explicit button loops
    const links = document.querySelectorAll('a[href^="#page-"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetPage = document.querySelector(targetId);
            
            if (container && targetPage) {
                container.scrollTo({
                    top: targetPage.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});