import { Observable, Observer, Subscriber } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn("error: ", error),
    complete: () => console.log("completado")
}

const obs$ = new Observable( subscriber => {
    
});
