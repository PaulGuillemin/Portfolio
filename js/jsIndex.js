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
    if (toggle) {
        toggle.addEventListener('click', function () {
            const navList = document.querySelector('header nav ul');
            if (navList) {
                navList.classList.toggle('show-menu');
            }
        });
    }
}

window.initializeHeaderScripts = initializeHeaderScripts;
