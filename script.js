document.addEventListener('DOMContentLoaded', () => {
    // Animasi fade-in saat scroll
    const fadeElems = document.querySelectorAll('.fade-in');
    
    const fadeIn = () => {
        fadeElems.forEach(elem => {
            const elemTop = elem.getBoundingClientRect().top;
            const elemBottom = elem.getBoundingClientRect().bottom;
            
            if (elemTop < window.innerHeight && elemBottom > 0) {
                elem.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', fadeIn);
    fadeIn(); // Panggil sekali untuk elemen yang sudah terlihat saat load

    // Animasi smooth scroll untuk navigasi
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    // Animasi teks berkedip pada judul
    const title = document.querySelector('h1');
    setInterval(() => {
        title.style.opacity = (title.style.opacity === '1' ? '0.7' : '1');
    }, 1000);

    // Animasi hover untuk gambar proyek
    const projectImages = document.querySelectorAll('.project-image');
    projectImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.boxShadow = '0 0 20px #0ff';
        });
        img.addEventListener('mouseout', () => {
            img.style.boxShadow = 'none';
        });
    });
});
