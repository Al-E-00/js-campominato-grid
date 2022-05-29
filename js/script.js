/* 
Generare una griglia di gioco quadrata , in cui ogni cella 
contiene un numero incrementale tra quelli compresi tra 1 e 100
Quando l’utente clicca su ogni cella, 
la cella cliccata si colora di azzurro.
*/

const gridContainer = document.querySelector("grid-container");

function generateNumbers() {
    let numeriCrescenti = 0;

    for (let i = 1; i <= 100; i++){
        numeriCrescenti = numeriCrescenti + 1;
    }
    console.log (numeriCrescenti);
    
}