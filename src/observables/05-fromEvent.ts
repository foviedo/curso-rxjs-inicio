import { fromEvent } from "rxjs";

/* 
* Eventos del dom
*/

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');


//src1$.subscribe(evento => {
//    console.log(evento.x,", ", evento.y)
//})
src1$.subscribe(({x,y}) => {
    console.log(x,", ", y)
})
src2$.subscribe(evento => {
    console.log(evento.key)
})