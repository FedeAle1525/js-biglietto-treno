// 1. Chiedere KM a Utente
const km = parseFloat(prompt("Inserisci i kilometri che vuoi percorrere ;)"));
console.log("I km che vuoi percorrere sono: ",km);

// 2. Chiedere ETA' a Utente
const eta = parseInt(prompt("Inserisci la tua età ;)"));
console.log("La tua età è: ",eta);

// 3. Calcolare PREZZO BASE del Biglietto
let prezzoBase = km * 0.21;
console.log("Il prezzo base del tuo biglietto è: ",prezzoBase);

// 4. Calcolare PREZZO SCONTATO in base a Età
let prezzoScontato;

if (eta < 18){

  prezzoScontato = prezzoBase * 0.8
  console.log("Il prezzo scontato per i minorenni è: ",prezzoScontato);

} else if (eta > 65) {

    prezzoScontato = prezzoBase * 0.6;
    console.log("Il prezzo scontato per i senior è: ",prezzoScontato);
}



// 5. Stampare PREZZO su File Html