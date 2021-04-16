import { asyncScheduler, range } from "rxjs";

const src$ = range(-5,5); //no es de 1 al 5, si no 1 y los 4 siguientes
//envia de forma sincrona un rango

const src2$ = range(1,5,asyncScheduler);

console.log("inicio")
src2$.subscribe(console.log)
console.log("fin")