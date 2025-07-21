function initializeHeaderAnimation() {
    const header  = document.getElementById('header');
    const introBg = document.querySelector('.intro-background');

    if (!header || !introBg) {
        return;
    }

    const getLimit = () => introBg.offsetHeight; // ≈ 100 vh
    let scrollLimit = getLimit();

    window.addEventListener('resize', () => {
        scrollLimit = getLimit();
        onScroll();
    });

    function onScroll() {
        if (window.scrollY >= scrollLimit) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll);
}

window.initializeHeaderAnimation = initializeHeaderAnimation;

document.addEventListener('DOMContentLoaded', () => {
    if (!document.querySelector('[data-include-html]')) {
        initializeHeaderAnimation();
    }
});
