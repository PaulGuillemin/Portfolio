function initializeHeaderScripts() {
    const languageButton = document.getElementById('languageButton');
    const languageMenu = document.getElementById('languageMenu');

    if (languageButton && languageMenu) {
        languageButton.addEventListener('click', function (event) {
            if (languageMenu.classList.contains('show')) {
                languageMenu.classList.add('hide');
                setTimeout(function () {
                    languageMenu.classList.remove('show', 'hide');
                }, 500);
            } else {
                languageMenu.classList.add('show');
            }
            event.stopPropagation();
        });

        document.addEventListener('click', function handleClickOutside(event) {
            if (!languageMenu.contains(event.target) && !languageButton.contains(event.target)) {
                languageMenu.classList.add('hide');
                setTimeout(function () {
                    languageMenu.classList.remove('show', 'hide');
                }, 500);
            }
        });
    }

    const toggle = document.getElementById('menuToggle');
    const burger = document.getElementById('burger');
    const navList = document.getElementById('navLinks') || document.querySelector('header nav ul');

    if (toggle && navList) {
        toggle.addEventListener('click', function () {
            navList.classList.toggle('show-menu');
        });
    } else if (burger && navList) {
        burger.addEventListener('click', () => {
            const isOpen = navList.classList.toggle('show');
            burger.setAttribute('aria-expanded', isOpen);
        });

        navList.addEventListener('click', e => {
            if (e.target.tagName === 'A' && navList.classList.contains('show')) {
                navList.classList.add('closing');
                navList.addEventListener('transitionend', () => {
                    navList.classList.remove('show', 'closing');
                    burger.setAttribute('aria-expanded', 'false');
                }, { once: true });
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 950) {
                navList.classList.remove('show', 'closing');
                burger.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

window.initializeHeaderScripts = initializeHeaderScripts;
