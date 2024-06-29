window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollPosition = window.scrollY;
    var scrollLimit = 150;
    if(scrollPosition > scrollLimit){ // Change la couleur après 50px de défilement
        header.style.backgroundColor = "#173753"; // Nouvelle couleur
    } else {
        header.style.backgroundColor = "transparent"; // Couleur initiale
    }
});