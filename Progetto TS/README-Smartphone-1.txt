Le classi FirstUser-SecondUser-ThirdUser devono implementare l'interfaccia 
con i seguenti metodi: un
metodo definito come public void ricarica(double unaRicarica), che ricarica il
telefonino. Un metodo definito come cpubli void chiamata(double minutiDurata), che
effettua una chiamata di durata in minuti specificata dal parametro esplicito.
Tale metodo dovra' aggiornare la carica disponibile, ed incrementare la variabile
contenente il numero di chiamate effettuate dal telefonino (si assuma un costo
di 0.20 euro per ogni minuto di chiamata),un metodo public number numero404(),
che restituisce il valore della carica disponibile. Un metodo public number
getNumeroChiamate(), che restituisce il valore della variabile d'istanza
numeroChiamate. Infine, un metodo public void azzeraChiamate(), che azzera la
variabile contenente il numero di chiamate effettuate dal telefonino.
Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate.

METODI:
ricarica(number credito, double unaRicarica)
chiamata(number credito, double minutiDurata)
numero404()
getNumeroChiamate()
azzeraChiamate()

CONSOLE.LOG
--- PRIMO UTENTE ---
Valore della carica disponibile: 75
Numero chiamate: 2
dopo l'azzeramento delle chiamate:
Numero chiamate: 0
--- SECONDO UTENTE ---
Valore della carica disponibile: 67.2
Numero chiamate: 2
dopo l'azzeramento delle chiamate:
Numero chiamate: 0
--- TERZO UTENTE ---
Valore della carica disponibile: 69.2
Numero chiamate: 2
dopo l'azzeramento delle chiamate:
Numero chiamate: 0