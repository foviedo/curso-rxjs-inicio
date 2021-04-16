import { of, from, Observer } from "rxjs";

//of: toma arguemtnos y genera una secuencia 
//from: genera a partir de un from, una promersa, un iterable


const observer: Observer<any> = {
    next: value => console.log("next: ", value),
    error: error => console.warn("error: ", error),
    complete: () => console.log("completado")
};


const source$ = from( fetch('https://api.github.com/users/foviedo') );

/*source$.subscribe( async(resp) => { //lo hago async para poder usar await
    console.log(resp)
    const dataResp = await resp.json();
    console.log(dataResp);
})*/ //puedo usar fetch de esta forma como en js vanilla

const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3; 
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

from(miIterable).subscribe(observer);