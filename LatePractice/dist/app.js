"use strict";
const root = document.documentElement;
const btn = document.getElementById('theme-toggle');
const setTheme = (next) => {
    root.setAttribute('data-theme', next);
    if (next === 'dark') {
        btn.textContent = 'Light Mode ☀️';
        btn.setAttribute('aria-pressed', 'true');
    }
    else {
        btn.textContent = 'Dark Mode 🌛';
        btn.setAttribute('aria-pressed', 'false');
    }
};
setTheme('dark');
btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    setTheme(next);
});
