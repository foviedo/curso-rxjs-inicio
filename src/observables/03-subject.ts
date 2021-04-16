import { Observable, Observer, Subject, Subscriber } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn("error: ", error),
    complete: () => console.log("completado")
}

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => {
        subs.next(Math.random())
    },1000) //un numero random cada 1 seg

    return () => {
        clearInterval(intervalID);
        console.log("Intervalo destruido")
    }
});


//tipo especial de observable
//tiene casteo multiple, es para que todos los que se suscriban reciban lo mismo
//es un observer
//o sea que tiene next, error y suscribe
const subject$ = new Subject();
const intervalSuscriptoin = intervalo$.subscribe(subject$)
//const subs1 = intervalo$.subscribe(num => console.log('subs1: ',num))
//const subs2 = intervalo$.subscribe(num => console.log('subs2: ', num))
//en este caso, lña funcion random() se está tirando a cada vez

const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)

setTimeout( () => {
    subject$.next(10); //como el subject es un observable, puedo hacer esto tmb
    subject$.complete(); //acá completo el subject, pero no el intervalo$ en sí
    intervalSuscriptoin.unsubscribe();
},3500)
// el subject me permite convertir un cold observable en un hot observable