function initializeLanguageSwitcher() {
    const supportedLangs = ['en', 'fr', 'de', 'es'];
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    let baseSegments = segments;
    let currentLang = '';
    if (supportedLangs.includes(segments[0]) && segments[0] !== 'en') {
        currentLang = segments[0];
        baseSegments = segments.slice(1);
    }

    const slug = baseSegments.join('/');

    supportedLangs.forEach(lang => {
        const link = document.getElementById(`link-${lang}`);
        if (!link) return;
        const meta = document.querySelector(`meta[name="translation-${lang}"]`);
        let targetPath;
        if (meta) {
            targetPath = meta.getAttribute('content');
        } else {
            if (lang === 'en') {
                targetPath = '/' + slug;
            } else {
                targetPath = '/' + lang + '/' + slug;
            }
        }
        link.href = targetPath;
        link.addEventListener('click', function(e) {
            e.preventDefault();
            fetch(targetPath, { method: 'HEAD' })
                .then(resp => {
                    if (resp.ok) {
                        window.location.href = targetPath;
                    } else {
                        window.location.href = lang === 'en' ? '/index.html' : `/${lang}/index.html`;
                    }
                })
                .catch(() => {
                    window.location.href = lang === 'en' ? '/index.html' : `/${lang}/index.html`;
                });
        });
    });
}
window.initializeLanguageSwitcher = initializeLanguageSwitcher;
