var FirstUser = /** @class */ (function () {
    //costruttore classe
    function FirstUser(_credito, _numeroChimate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChimate;
    }
    //implementazione metodi
    FirstUser.prototype.ricarica = function (credito, creditoRicarica) {
        this.credito += creditoRicarica;
    };
    FirstUser.prototype.chiamata = function (credito, minutiDurata) {
        this.credito = this.credito - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    FirstUser.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    FirstUser.prototype.numero404 = function () {
        return this.credito;
    };
    return FirstUser;
}());
// implementazione della classe
var user2 = new FirstUser(10, 6);
//ricariche
user2.ricarica(user2.credito, 10);
user2.ricarica(user2.credito, 5);
//chiamate
user2.chiamata(user2.credito, 25);
user2.chiamata(user2.credito, 32);
//console.log():
console.log("Primo utente");
console.log("Valore carica disponibile: ".concat(user2.numero404(), "\u20AC \nnumero chiamate: ").concat(user2.getNumeroChiamata()));
user2.azzeraChiamate();
console.log("dopo azzeramento delle chiamate, numero chiamate: ".concat(user2.getNumeroChiamata(), " "));
//seconda classe e terza classe sono IDENTICHE alla prima
var SecondUser = /** @class */ (function () {
    //costruttore classe
    function SecondUser(_credito, _numeroChimate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChimate;
    }
    //implementazione metodi
    SecondUser.prototype.ricarica = function (credito, creditoRicarica) {
        this.credito += creditoRicarica;
    };
    SecondUser.prototype.chiamata = function (credito, minutiDurata) {
        this.credito = this.credito - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    SecondUser.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    SecondUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    SecondUser.prototype.numero404 = function () {
        return this.credito;
    };
    return SecondUser;
}());
// implementazione della classe
var user1 = new FirstUser(100, 53);
//ricariche
user1.ricarica(user1.credito, 20);
user1.ricarica(user1.credito, 30);
//chiamate
user1.chiamata(user1.credito, 104);
user1.chiamata(user1.credito, 69);
//console.log():
console.log("Secondo utente");
console.log("Valore carica disponibile: ".concat(user1.numero404(), "\u20AC \nnumero chiamate: ").concat(user1.getNumeroChiamata()));
user1.azzeraChiamate();
console.log("dopo azzeramento delle chiamate, numero chiamate: ".concat(user1.getNumeroChiamata(), " "));
var ThirdUser = /** @class */ (function () {
    //costruttore classe
    function ThirdUser(_credito, _numeroChimate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChimate;
    }
    //implementazione metodi
    ThirdUser.prototype.ricarica = function (credito, creditoRicarica) {
        this.credito += creditoRicarica;
    };
    ThirdUser.prototype.chiamata = function (credito, minutiDurata) {
        this.credito = this.credito - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    ThirdUser.prototype.getNumeroChiamata = function () {
        return this.numeroChiamate;
    };
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    ThirdUser.prototype.numero404 = function () {
        return this.credito;
    };
    return ThirdUser;
}());
// implementazione della classe
var user3 = new FirstUser(20, 3);
//ricariche
user3.ricarica(user3.credito, 15);
user3.ricarica(user3.credito, 20);
//chiamate
user3.chiamata(user3.credito, 100);
user3.chiamata(user3.credito, 23);
//console.log():
console.log("Terzo utente");
console.log("Valore carica disponibile: ".concat(user3.numero404(), "\u20AC \nnumero chiamate: ").concat(user3.getNumeroChiamata()));
user3.azzeraChiamate();
console.log("dopo azzeramento delle chiamate, numero chiamate: ".concat(user3.getNumeroChiamata(), " "));
//seconda classe e terza classe sono IDENTICHE alla prima
