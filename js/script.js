/* 
Generare una griglia di gioco quadrata , in cui ogni cella 
contiene un numero incrementale tra quelli compresi tra 1 e 100
Quando l’utente clicca su ogni cella, 
la cella cliccata si colora di azzurro.
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/


//dichiarare elementi prendendoli dall'html
const gridContainer = document.querySelector(".grid-container");
let levelGame = document.getElementById("difficulty-option");
let btnPlay = document.getElementById("play-button");

// funzione per reset griglia
// non funziona
function cleanGrid () {
    const cell = document.createElement("div");
    cell.classList.remove("cell");
}
//funzione per selezionare la difficoltà 
function difficulty () {
        return levelGame.value;
}

btnPlay.addEventListener("click", function() {
    cleanGrid()
    if (difficulty() === "easy") {
        gameGrid(7, 7);
    } else if (difficulty() === "medium") {
        gameGrid(9, 9);
    } else if (difficulty() === "hard") {
        gameGrid(10, 10);
    }    
});


//funzione per creare griglia normale

function gameGrid (xCells, yCells) {
    //numero totale di celle da inserire
    const totCells = xCells * yCells;
    console.log(totCells);

    gridContainer.style.width = `calc(var(--cell-size) * ${xCells})`;
    
    //creo le  celle

    for (let i = 1; i <= totCells; i++ ) {
        //creare un div per una sola cella
        const cell = document.createElement("div");
        //aggiungo la classe cell(stilizzata in CSS)
        cell.classList.add("cell");
        //inseristo il numero all'interno
        cell.innerHTML = `<span>${[i]}</span>`


        //aggiungo un event listener sulle celle

        cell.addEventListener("click", function() {
            cell.classList.add("bg-primary");
        })

        //aggiungo le varie caselle tante volte quante il ciclo si ripete
        gridContainer.append(cell);
    }

}
