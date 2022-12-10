# ProgettoSSW_teatro

Progetto di sviluppo di sistemi web (SSW - 721AA).

## Spiegazione del progetto

Il progetto consiste nello sviluppo di una pagina web che simuli la prenotazione di posti in un teatro.
Essa permette all'utente di prenotare posti per un determinato spettacolo, che è memorizzato in un database ed è accessibile attraverso un service con un codice associato.
Dopo aver inserito il codice dello spettacolo e il suo nome l'utente può prenotare un posto scegliendolo tra quelli disponibili. Se il posto selezionato è libero l'utente può confermare la sua prenotazione attraverso l'apposito bottone, in caso contrario esso non apparirà e verrà comunicato che il posto è occupato.

## Divisione in componenti

Il progetto oltre al componente app di base utilizza altri tre componenti:

- get-reservation-name -> rappresenta la scelta del nome, contiene l'inputbox di lettura del nome e la scelta di prenotazione rapida, questi dati vengono poi inviati al component padre app;
- open-reservation -> stampa a schermo le due griglie di posti del teatro e permette la scelta del posto, al suo interno viene anche controllato che esso sia libero;
- create-theater -> contiente la creazione di un nuovo spettacolo (che può essere anche in un teatro con numero di posti diverso da quello di default).

Inoltre è presente un servizio chiamato threater.service che attua le chiamate al KVaaS attraverso tre funzioni come indicato nella specifica.

## Principali scelte di programmazione

Nella schermata di avvio indicata dal componente base app inizialmente sono visibili solamente due bottoni che mostrano le due possibilità che un utente può scegliere di fare: creare un nuovo spettacolo o prenotarsi ad uno già esistente.

La scelta di creazione viene incapsulata interamente dal componente create-theater già presentato prima, in esso infatti vengono semplicemente presi i valori indicati nei campi e dopo aver richiesto una nuova chiave del db (utilizzando il servizio) ad essa viene associato una struttura a matrice (array di array) che rappresenta i posti prenotabili. Particolare attenzione viene posta ad aggiungere un primo valore all'array che indica il numero di righe della platea così da poter poi sapere nell'intera matrice quante righe sono della platea a quante del palco.

Per la prenotazione invece si utilizzano gli altri due componenti già presentati con una struttura procedurale.Il form per l'inserimento di un codice è seguito da un'array di stringhe contenenti tutti i codici degli spettacoli creati, di default al suo interno è prensente il codice '2293a957' che è quello di prova utilizzato per i test.
Dopo aver inserito la chiave corrispondente allo spettacolo appare il form per l'inserimento del nome e una checkbox con la possiblità di attivare la modalità prenotazione veloce. Questi due valori vengono poi passati al componente padre. A questo punto appaiono effettivamente i posti prenotabili che possono essere cliccati; in caso di prenotazione veloce e ovviamente posto libero esso sarà prenotato all'istante mentre in caso di prenotazione normale apparirà il tasto per confermare la prenotazione.
