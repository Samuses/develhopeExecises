// Seleziono l'elemento <ul>
const ul = document.querySelector('ul');

// 1. L'elemento padre di <ul>
console.log(ul.parentElement); // Stampa il nodo padre di <ul>

// 2. Il secondo elemento figlio di <ul>
const secondLi = ul.children[1]; // Indice 1 per il secondo figlio
console.log(secondLi.innerText); // Stampa il testo contenuto

// 3. L'elemento fratello successivo del secondo <li>
const nextSibling = secondLi.nextElementSibling; // Prossimo fratello
console.log(nextSibling.innerText); // Stampa il testo contenuto

// 4. L'elemento fratello precedente del secondo <li>
const previousSibling = secondLi.previousElementSibling; // Fratello precedente
console.log(previousSibling.innerText); // Stampa il testo contenuto
