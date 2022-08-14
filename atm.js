// Crear un cajero automatico que devuelva la menor cantidad de billetes posible, complementar detalles (que se le reste el dinero al cajero, muestre cuanto dinero queda)
let imagenes = [];
imagenes[100] = "100.webp";
imagenes[50] = "50.webp";
imagenes[20] = "20.webp";

class Billete{
    constructor(v,c){
        this.imagen = new Image() ;
        this.valor = v;
        this.cantidad = c;

        this.imagen.src = imagenes[this.valor];
    }
}

function entregarDinero(){
    let t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (bi of caja){
        if (dinero > 0){
            div = Math.floor(dinero / bi.valor);
            if (div > bi.cantidad){
                papeles = bi.cantidad;
            } else {
                papeles = div;
            }
            en.push( new Billete(bi.valor, papeles) );
            dinero -= bi.valor * papeles;
        }
    } 
    if (dinero > 0){
        resultado.innerHTML = "soy un Cajer malo";
    }else{
        for (e of en){
            if (e.cantidad > 0){
                resultado.innerHTML += `${e.cantidad} Billetes de <img src= ${e.imagen.src} />`;
            }
            resultado.innerHTML += "<hr />";
        }
    }
}

let caja = [];
let en = [];
caja.push( new Billete(100, 3) );
caja.push( new Billete(50, 4) );
caja.push( new Billete(20, 5) );

let dinero;
let papeles = 0;
let div = 0;

let resultado = document.getElementById("res");
let b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);