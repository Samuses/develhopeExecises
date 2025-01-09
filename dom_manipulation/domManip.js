// Funzione per aggiungere un task alla lista
const addProduct = () => {
    // Seleziona il valore dell'input
    const input = document.querySelector('input');
    const taskText = input.value.trim();

    // Verifica che l'input non sia vuoto
    if (taskText === '') {
        alert('Inserisci un task!');
        return;
    }

    // Crea un nuovo elemento <li>
    const li = document.createElement('li');

    // Crea un checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Aggiunge il testo del task
    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    // Aggiunge il checkbox e il testo al <li>
    li.appendChild(checkbox);
    li.appendChild(taskLabel);

    // Aggiunge il <li> alla lista
    const ul = document.querySelector('ul');
    ul.appendChild(li);

    // Svuota l'input
    input.value = '';
};

// Aggiunge l'evento click al bottone
const button = document.querySelector('button');
button.addEventListener('click', addProduct);
