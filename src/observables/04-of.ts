import { of } from "rxjs";

//const obs$ = of(1,2,3,4,5,6); //emite de forma sincrona
const obs$ = of([1,2], {a:1,b:2}, function(){}, true, Promise.resolve(true));


console.log("inicio del obs$");
obs$.subscribe(next => console.log("next: ", next),
null,
 () => console.log("Secuencia terminada")); //esto es sincrono

console.log("Fin del obs")