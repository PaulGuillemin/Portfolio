function loadPartials() {
    const elements = document.querySelectorAll('[data-include-html]');
    const fetches = Array.from(elements).map(el => {
        const file = el.getAttribute('data-include-html');
        return fetch(file)
            .then(resp => {
                if (!resp.ok) throw new Error('Failed to load ' + file);
                return resp.text();
            })
            .then(html => {
                el.outerHTML = html;
            });
    });
    return Promise.all(fetches);
}

document.addEventListener('DOMContentLoaded', () => {
    loadPartials().then(() => {
        if (typeof window.initializeHeaderScripts === 'function') {
            window.initializeHeaderScripts();
        }
    });
});
