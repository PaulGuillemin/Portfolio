document.addEventListener('DOMContentLoaded', () => {
    const header   = document.getElementById('header');
    const introBg  = document.querySelector('.intro-background');

    // Fonction qui retourne la hauteur de la section d’intro (peut changer au resize)
    const getLimit = () => introBg.offsetHeight;   // ≈ 100 vh

    let scrollLimit = getLimit();                  // seuil initial

    // Mettez à jour le seuil si la fenêtre est redimensionnée
    window.addEventListener('resize', () => {
        scrollLimit = getLimit();
        onScroll();                                // recalcul immédiat
    });

    function onScroll () {
        if (window.scrollY >= scrollLimit) {
            header.classList.add('scrolled');      // applique le flou
        } else {
            header.classList.remove('scrolled');   // en-dessous du seuil
        }
    }

    window.addEventListener('scroll', onScroll);
});