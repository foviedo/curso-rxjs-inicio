import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn("error: ", error),
    complete: () => console.log("completado")
}

const obs$ = new Observable( subscriber => {
    
    subscriber.next("bro");
    subscriber.next("momento");
    subscriber.complete();
   
    //fuerzo un error
   //const a = undefined;
   //a.nombre = "facu"

});

obs$.subscribe(observer)

/*obs$.subscribe( respuesta => {
    console.log("next: ", respuesta)
},
error => {
    console.warn("error: ", error)
},
() => console.log("completado") )
*/
