import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn("error: ", error),
    complete: () => console.log("completado")
}

const intervalo$ = new Observable<number>( subscriber => {
    var contador = 0;
    const intervalo = setInterval(() => {
        contador++;
        subscriber.next(contador);
    },1000);

    setTimeout(() => {
        subscriber.complete();
    },2500) //esto va a disparar el intervalo destruido, pues fuerza el retorno

    return() => {
        clearInterval(intervalo);
        console.log("Intervalo destruido")
    } // al desuscribirme, destruyo el intervalo para evitar memory leaks
});

const suscripcion1 = intervalo$.subscribe(observer)
const suscripcion2 = intervalo$.subscribe(observer)
const suscripcion3 = intervalo$.subscribe(observer)

suscripcion1.add(suscripcion2).add(suscripcion3) //esto hace que solo una vez haga el complete, pero el unsuscribe va a correrse 3 veces

setTimeout(() => {
    //suscripcion1.unsubscribe()
    //suscripcion2.unsubscribe()
    //suscripcion3.unsubscribe() 
    //esto no va a hacer nada pues ya fue completado
    console.log("suscripciones terminadas con unsuscribe")
},3000); //me desuscribo después de 3 segundos



