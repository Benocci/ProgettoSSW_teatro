# ProgettoSSW_teatro

Progetto di sviluppo di sistemi web (SSW - 721AA).

## Spiegazione del progetto

Il progetto consiste nello sviluppo di una pagina web che simuli la prenotazione di posti in un teatro.
Essa permette all'utente di prenotare posti per un determinato spettacolo, che è memorizzato in un database ed è accessibile attraverso un service con un codice associato.
Dopo aver inserito il codice dello spettacolo e il suo nome l'utente può prenotare un posto scegliendolo tra quelli disponibili. Se il posto selezionato è libero l'utente può confermare la sua prenotazione attraverso l'apposito bottone, in caso contrario esso non apparirà e verrà comunicato che il posto è occupato.

## Divisione in componenti

Il progetto oltre al componente app di base utilizza altri due componenti che rappresentano rispettivamente la scelta del nome e la scelta del posto:

- get-reservation-name -> rappresenta la scelta del nome, contiene l'inputbox di lettura del nome e la scelta di prenotazione rapida, questi dati vengono poi inviati al component padre app;
- open-reservation -> stampa a schermo le due griglie di posti del teatro e permette la scelta del posto, al suo interno viene anche controllato che esso sia libero;
- create-theater -> contiente la creazione di un nuovo spettacolo (che può essere anche in un teatro con numero di posti diverso da quello di default).

## Principali scelte di programmazione
