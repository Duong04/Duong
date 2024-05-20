// ----------------- dark light ----------------
const darkLight = document.querySelector('.btn__dark-light');
const body = document.body;

const toggleDarkLightMode = () => {

    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        document.querySelector('.fa-sun').className = 'fa-regular fa-moon';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        document.querySelector('.fa-moon').className = 'fa-regular fa-sun';
    }

    localStorage.setItem('darkLight', !isDarkMode);
}

darkLight.addEventListener('click', toggleDarkLightMode);

document.addEventListener('DOMContentLoaded', () => {

    let status = localStorage.getItem('darkLight');

    if (status === "false") { 
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        document.querySelector('.fa-sun').className = 'fa-regular fa-moon';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        document.querySelector('.fa-moon').className = 'fa-regular fa-sun';
    }
});

// ---------------------------------------------------
new WOW().init();