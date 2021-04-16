import { asyncScheduler } from "rxjs";

//un .suscribe genera una suscripcon, el asyncSchedular hace eso

const saludar = () => console.log("hello world");
const saludar2 = nombre => console.log(`hola ${nombre}`)

//asyncScheduler.schedule(saludar2,2000,'Facundo')

//el asyncScheduler no puede recibir lambda functions,. tiene que ser una funció normal

const subs = asyncScheduler.schedule( function(state){
    console.log("state: ", state);
    this.schedule(state+1,1000)
},3000, 0) //tercer argumento es el state   
//llamando this.schedule es hacer otro schedule con la mimsa funcion, pasandole otro state y otro tiempo

/*setTimeout(() => {
    subs.unsubscribe();
},6000)*/ //quiero hacer esto pero con un asyncScheduler

asyncScheduler.schedule(() => subs.unsubscribe(), 6000)

