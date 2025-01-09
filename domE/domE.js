// Recupera i valori dagli input e aggiunge l'attributo data-person al form
const createPersonData = () => {
    // Seleziona gli input del form
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const age = document.getElementById('age').value.trim();

    // Crea l'oggetto person
    const person = {
        firstName,
        lastName,
        age: Number(age),
    };

    // Seleziona il form
    const form = document.querySelector('form');

    // Aggiunge l'attributo data-person con l'oggetto person in formato JSON
    form.setAttribute('data-person', JSON.stringify(person));

    // Stampa l'oggetto person nella console per verifica
    console.log(person);
};

// Esegue la funzione per creare i dati della persona
createPersonData();
