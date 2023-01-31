// 1. Chiedere NOME e COGNOME a Utente
const nome = prompt("Inserisci il tuo nome");
document.getElementById("nome").innerHTML = nome;

const cognome = prompt("Inserisci il tuo cognome");
document.getElementById("cognome").innerHTML = cognome;

// 2. Chiedere KM a Utente
const km = parseFloat(prompt("Inserisci i kilometri che vuoi percorrere ;)"));
console.log("I km che vuoi percorrere sono: ",km);
document.getElementById("km").innerHTML = km;

// 3. Chiedere ETA' a Utente
const eta = parseInt(prompt("Inserisci la tua età ;)"));
console.log("La tua età è: ",eta);

// 4. Calcolare PREZZO BASE del Biglietto
let prezzoBase = km * 0.21;
console.log("Il prezzo base del tuo biglietto è: ",prezzoBase);
document.getElementById("prezzo-base").innerHTML = prezzoBase.toFixed(2);

// 5. Calcolare PREZZO SCONTATO in base a Età
// 6. Stampare PREZZO su File Html
let prezzoScontato;

if (eta < 18){

  prezzoScontato = prezzoBase * 0.8
  console.log("Il prezzo scontato per i minorenni è: ",prezzoScontato);
  document.getElementById("sconto").innerHTML = "20%";
  document.getElementById("prezzo-finale").innerHTML = prezzoScontato.toFixed(2);

} else if (eta > 65) {

    prezzoScontato = prezzoBase * 0.6;
    console.log("Il prezzo scontato per i senior è: ",prezzoScontato);
    document.getElementById("sconto").innerHTML = "40%";
    document.getElementById("prezzo-finale").innerHTML = prezzoScontato.toFixed(2);

} else {

    document.getElementById("sconto").innerHTML = "NO Sconto";
    document.getElementById("prezzo-finale").innerHTML = prezzoBase.toFixed(2);  

}
