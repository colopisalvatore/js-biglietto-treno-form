/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

let km = 0
let age = 0
const costPerKm = 0.21;
const discountUnder18 = 0.20;
const discountOver65 = 0.40;


// FUNZIONE
const getPrice = function () {
    let km = Number(document.getElementById("km").value);
    console.log('km', km);
    let age = Number(document.getElementById("age").value);
    console.log('age', age);

// Calcoliamo il prezzo del biglietto
    ticketPrice = km * costPerKm;
console.log('ticketPrice', ticketPrice);

// Il messaggio da far comparire con il totale.
    let message = `<i class="fa fa-ticket"></i>
                            <p>Il costo totale del biglieto è di:</p>
                            <p id="price" class="p-1 fw-bold"></p>`;
    let message20 = `<i class="fa fa-percentage"></i>
                            <p>&eacute; stato applicato uno sconto del:</p>
                            <p id="disc20" class="p-1"></p>`;
    let message40 = `<i class="fa fa-percentage"></i>
                            <p>&eacute; stato applicato uno sconto del:</p>
                            <p id="disc40" class="p-1"></p>`;


    // Applichiamo uno sconto del 20% se l'utente è minorenne
    if (age <= 17) {
        ticketPrice -= ticketPrice * discountUnder18;
        message20
        
    }
    // Applichiamo uno sconto del 40% se l'utente è over 65
    else if (age >= 65) {
        ticketPrice -= ticketPrice * discountOver65;
        message40
        
    }
    
    ticketPrice = ticketPrice.toFixed(2);
    // Stampiamo il costo del biglietto
    document.getElementById('total').innerHTML = message;
    document.getElementById('price').innerHTML = ticketPrice + ' &euro;';

    // Stampiamo il messaggio dello sconto applicato
    document.getElementById('discount').innerHTML = message20;
    document.getElementById('disc20').innerHTML = ' ' + '20' + '&percnt;';

    document.getElementById('discount').innerHTML = message40;
    document.getElementById('disc40').innerHTML = ' ' + '40' + '&percnt;';

    // Facciamo comparire il bottone acquista
    document.getElementById('buy').style.display = "block";
}

btn.addEventListener('click', getPrice);

