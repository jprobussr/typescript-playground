type Theme = 'light' | 'dark';

const root = document.documentElement;
const btn = document.getElementById('theme-toggle') as HTMLButtonElement;

const setTheme = (next: Theme) => {
  root.setAttribute('data-theme', next);

  if (next === 'dark') {
    btn.textContent = 'Light Mode ☀️';
    btn.setAttribute('aria-pressed', 'true');
  } else {
    btn.textContent = 'Dark Mode 🌛';
    btn.setAttribute('aria-pressed', 'false');
  }
};

setTheme('dark');

btn.addEventListener('click', () => {
    const current = (root.getAttribute('data-theme') as Theme) || 'light';
    const next: Theme = current === 'light' ? 'dark' : 'light';
    setTheme(next)
})
