import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log("next: ", val),
    complete: () => console.log("complete")
}

const hoyEn6 = new Date();
hoyEn6.setSeconds(hoyEn6.getSeconds() +6);
//const interval$ = interval(1000)
//const timer$ = timer(2000)
//const timer$ = timer(2000,1000)
const timer$ = timer(hoyEn6);

console.log("inicio");
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log("despues de suscribirme")