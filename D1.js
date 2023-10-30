/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let spiegazione = "Javascript ha diversi datatype, ognuno dei quali definisce un contenuto. Il datatype chiamato Number definisce appunto un numero scritto in cifre sia intere che decimali. Il datatype String definisce invece un testo, come un nome oppure un'indicazione o altri tipi di intestazione. Il datatype Boolean invece è un interrogativo che poniamo al nostro codice chiendendo se quel contenuto sia vero o falso. Esistono anche dei datatypoe chiamati Null e Unassigned. Il primo serve a marcare una variabile a cui volontariamente non abbiamo dato un valore mentre il secondo invece serve a marcare le variabili di cui non abbiamo ancora risposta."
console.log(spiegazione)


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Matteo"
console.log(name)


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.30
*/

let numberOne = 12
let numberTwo = 20
console.log (12 + 20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x)


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
  
console.log ( /* let name = "Romano" 
*const name = Matteo*/ ) 


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numberThree = 4
let sottrazione = numberThree - x
console.log(numberThree - x)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "John"
let name2 = "john"
console.log(name1 == name2)
console.log(name1.toLowerCase==name2.toLowerCase)


/*extra*/

let celsius = prompt("Inserisci i gradi Celsius: ");
let fahrenheit = (celsius * 9/5) + 32;
alert(celsius + " gradi Celsius corrispondono a " + fahrenheit + " gradi Fahrenheit.");
