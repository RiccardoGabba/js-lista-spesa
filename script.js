let listaSpesa = [

]

let fermo = false;

while(fermo === false){
    const prodotti = prompt ("cosa devi comprare?")
    
    if( prodotti === 'stop'){
        fermo = true;
    }else{
        listaSpesa.push(prodotti);
    }
}

for(let i=0; i < listaSpesa.length; i++){
    console.log(listaSpesa[i])
}
console.log(listaSpesa)