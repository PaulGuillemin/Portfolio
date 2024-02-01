document.getElementById('languageButton').addEventListener('click', function(event) {
    var languageMenu = document.getElementById('languageMenu');
    // Toggle la visibilité du menu
    if (languageMenu.classList.contains('show')) {
        languageMenu.classList.add('hide');
        setTimeout(function() {
            languageMenu.classList.remove('show', 'hide');
        }, 500); // Correspond à la durée de l'animation fadeOut
    } 
    else 
    {
        languageMenu.classList.add('show');
    }

    // Empêche le document de détecter ce clic comme un clic "extérieur"
    event.stopPropagation();
});

// Fonction pour fermer le menu si le clic est en dehors de celui-ci
function handleClickOutside(event) {
    var languageMenu = document.getElementById('languageMenu');
    var languageButton = document.getElementById('languageButton');

    // Vérifie si le clic est en dehors du menu et du bouton
    if (!languageMenu.contains(event.target) && !languageButton.contains(event.target)) {
        languageMenu.classList.add('hide');
        setTimeout(function() {
            languageMenu.classList.remove('show', 'hide');
        }, 500); // Correspond à la durée de l'animation fadeOut
    }
}

// Ajoute l'écouteur d'événements au document pour détecter les clics à l'extérieur
document.addEventListener('click', handleClickOutside);