// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente (occhio alle maiuscole, se volete potete convertire il nome prima inserirlo).
// Scrivi anche la posizione "umana" (quindi per come contiamo noi, non l'indice dell'array) della lista in cui il nuovo utente si trova

// faccio un array con alcuni cognomi già dentro
var cognomi = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];

// chiedo all'utente di inserire il suo cognome e lo aggiungo all'arrey
var cognomeUtente = prompt('Inserisci il tuo cognome');
// controllo che la lettera del cognome inserito sia maiuscola e il resto minuscolo
cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.substr(1).toLowerCase();

// aggiungo all'arrey il cognome
cognomi.push(cognomeUtente);



var pulsanteAggiungi = document.getElementById('aggiungi');
pulsanteAggiungi.addEventListener('click',
function() {

  var cognomeDue = prompt('Inserisci un altro cognome');
  cognomeDue = cognomeDue.charAt(0).toUpperCase() + cognomeDue.substr(1).toLowerCase();
  cognomi.push(cognomeDue);

  document.getElementById('lista-cognomi').innerHTML += ',' + cognomi[cognomi.length - 1];
  
});

// stampo i cognomi
document.getElementById('lista-cognomi').innerHTML += cognomi;

// aggiungo pulsante per metterli in ordine alfabetico
var pulsanteProva = document.getElementById('prova');
pulsanteProva.addEventListener('click',
function() {
  document.getElementById('lista-ordinata').innerHTML += cognomi.sort();

  // indico la posizione umana del cognome inserito dall'utente
for (var i = 0; i < cognomi.length; i++) {
  if (cognomeUtente == cognomi[i]) {
    document.getElementById('cognome-utente').innerHTML += ++i + ' di';
    document.getElementById('totalecognomi').innerHTML = cognomi.length + ' cognomi!';
  }
}

// bottone prova scompare
// document.getElementById('prova').className = 'hidden';

});
