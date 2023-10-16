let listaSpesa = [

]

let fermo = false;

while(stop === false){
    const prodotti = prompt ("cosa devi comprare?")
    if( prodotti === 'stop'){

    }else{
        listaSpesa.push(prodotti);
    }
}

console.log(listaSpesa)