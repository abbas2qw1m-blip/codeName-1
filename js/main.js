     function toggleMenu() {
            const hamburger = document.querySelector('.hamburger');
            const nav = document.querySelector('nav');
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        }

        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                const hamburger = document.querySelector('.hamburger');
                const nav = document.querySelector('nav');
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });