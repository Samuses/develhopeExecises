// Funzione per attivare/disattivare la modalità dark
const toggleDarkMode = () => {
    // Seleziona il body
    const body = document.body;

    // Aggiunge o rimuove la classe 'theme'
    body.classList.toggle('theme');
};

// Seleziona il bottone
const button = document.querySelector('.btn');

// Aggiunge l'evento click al bottone
button.addEventListener('click', toggleDarkMode);
