const page = document.querySelector('body');
const buttonChangeThemeElement = document.querySelector('[data-js-change-theme]');

let theme = localStorage.getItem('theme');
if (theme === null) {
    theme = 'white';
}

if (theme === 'dark') {
    page.style.setProperty('--bg-color', '#181818');
    page.style.setProperty('--text-color', '#fcfcfc');
}

if (theme === 'white') {
    page.style.setProperty('--bg-color', '#fcfcfc');
    page.style.setProperty('--text-color', '#181818');
}

buttonChangeThemeElement.addEventListener('click', (event) => {
    if (theme === 'white') {
        theme = 'dark';
        localStorage.setItem('theme', 'dark');
        page.style.setProperty('--bg-color', '#181818');
        page.style.setProperty('--text-color', '#fcfcfc');
    } else if (theme === 'dark') {
        theme = 'white';
        localStorage.setItem('theme', 'white');
        page.style.setProperty('--bg-color', '#fcfcfc');
        page.style.setProperty('--text-color', '#181818');
    }
})