document.addEventListener('DOMContentLoaded', function () {
    var languageSelector = document.getElementById('languageSelector');
    
    languageSelector.addEventListener('change', function () {
        var selectedLanguage = this.value;
        updateContentForLanguage(selectedLanguage);
    });
});

function updateContentForLanguage(language) {
    // Define translations for each language
    var translations = {
        'en': {
            'aboutTitle': 'About Paul Guillemin',
            'navAbout': 'About',
            'navPortfolio': 'Portfolio',
            'navSkills': 'Skills',
            'navContact': 'Contact',
            'portfolioTitle': 'Portfolio',
            'skillsTitle': 'Skills',
            'contactTitle': 'Contact',
            'aboutContent': 'As a student at the École des Mines de Saint-Étienne, I am passionate about engineering in its broadest sense: ranging from mechanics to electronics, and including computer science. I aspire to transform my theoretical knowledge into practical solutions, striving to apply what I learn to solve real-world problems. My goal is to leverage my skills to innovate, address challenges, and create advanced technologies. I am ready to contribute to the evolution of these fields, as exciting as they are complex!',
        },
        'fr': {
            'aboutTitle': 'À propos de Paul Guillemin',
            'navAbout': 'À propos',
            'navPortfolio': 'Portfolio',
            'navSkills': 'Compétences',
            'navContact': 'Contact',
            'portfolioTitle': 'Portefeuille',
            'skillsTitle': 'Compétences',
            'contactTitle': 'Contact',
            'aboutContent': "Étudiant à l'École des Mines de Saint-Étienne, je suis passionné d'ingénierie au sens le plus large : allant de la mécanique à l'électronique, en passant par l'informatique. J'aspire à transformer mes connaissances théoriques en solutions pratiques en m'efforcant d'appliquer ce que j'apprends pour résoudre des problèmes concrets. Mon but est alors d'exploiter mes compétences pour innover, répondre à des problématiques et créer des technologies avancées. Je suis alors prêt à porter l'évolution de ces domaines aussi passionnants que complexes !",
        },
        'de': {
            'aboutTitle': 'Über Paul Guillemin',
            'navAbout': 'Über',
            'navPortfolio': 'Portfolio',
            'navSkills': 'Fähigkeiten',
            'navContact': 'Kontakt',
            'portfolioTitle': 'Portfolio',
            'skillsTitle': 'Fähigkeiten',
            'contactTitle': 'Kontakt',
            'aboutContent': "Als Student an der École des Mines de Saint-Étienne bin ich leidenschaftlich an Ingenieurwissenschaften im weitesten Sinne interessiert: von Mechanik über Elektronik bis hin zur Informatik. Ich strebe danach, mein theoretisches Wissen in praktische Lösungen umzusetzen und bemühe mich, das Gelernte zur Lösung konkreter Probleme anzuwenden. Mein Ziel ist es, meine Fähigkeiten zu nutzen, um zu innovieren, Herausforderungen zu begegnen und fortschrittliche Technologien zu entwickeln. Ich bin bereit, zur Entwicklung dieser ebenso spannenden wie komplexen Bereiche beizutragen!",
        }
        // Add other languages if needed
    };

    // Update webpage content based on selected language
    for (var key in translations[language]) {
        var element = document.getElementById(key);
        if (element) {
            element.textContent = translations[language][key];
        }
    }
}