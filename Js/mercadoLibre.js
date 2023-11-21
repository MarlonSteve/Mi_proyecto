class Automovil{
    constructor(marca, modelo, precio, anyo, kilometros, ciudad, imagen){
        
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.anyo = anyo;
        this.kilometros = kilometros; 
        this.ciudad = ciudad;
        this.imagen = imagen;
       
    }
}

let auto1 = new Automovil("Volkswagen", "Golf 1.8 Gti", "$42000000", "2020", "0", "Suba - Bogota D.C.","img/carro1.jpg");
let auto2 = new Automovil("Toyota", " Prado 2.7 Sumo Gx", "$79900000", "2021", "1000", "Pitalito - Huila","img/carro2.png");
let auto3 = new Automovil("Renault", " Kwid 1.0 Zen", "$40000000", "2021", "33.300 ", "Garzon - Huila","img/carro3.png");
let auto4 = new Automovil("BMW", "2.0 Xdrive30i", "$185000000", "2019", "30.445 ", "Bogota D.C.","img/carro4.png");

let boxProductos = document.getElementById("boxProductos");

cargarAutomovil(auto1);
cargarAutomovil(auto2);
cargarAutomovil(auto3);
cargarAutomovil(auto4);


window.addEventListener("keydown", (event) => {
    let inputBusqueda = document.getElementById("inputBusqueda").value;
    if(event.key == "Enter"){
        boxProductos.innerHTML = "";
        let inputBusquedaAux = inputBusqueda.toLowerCase();        
        if(inputBusquedaAux == "volkswagen"){
        cargarAutomovil(auto1);
    }
    else if(inputBusquedaAux == "toyota"){
        cargarAutomovil(auto2);
    }
    else if(inputBusquedaAux == "renault"){
        cargarAutomovil(auto3);
    }
    else if (inputBusquedaAux == "bmw"){
        cargarAutomovil(auto4);
    }
 }
});



function cargarAutomovil(auto){


    /* Contenedor para los productos individuales */
    let boxProducto = document.createElement("div");
    boxProductos.appendChild(boxProducto);
    boxProducto.setAttribute("class","box-producto");
    
    
    
    /* Contenedor para la imagen */
    let boxImagen = document.createElement("div");
    boxProducto.appendChild(boxImagen);
    boxImagen.setAttribute("class","box-imagen");
    let imagenProducto = document.createElement("img");
    boxImagen.appendChild(imagenProducto);
    imagenProducto.setAttribute("src",auto.imagen);
    imagenProducto.setAttribute("class","imagen-producto")
    
    
    
    /* Contenedor para la informacion */ 
    let infoProducto = document.createElement("div");
    boxProducto.appendChild(infoProducto);
    infoProducto.setAttribute("class","box-info-producto");
    
    
    let marcaProducto = document.createElement("label");
    infoProducto.appendChild(marcaProducto);
    let nodoMarcaProducto = document.createTextNode(auto.marca);
    marcaProducto.appendChild(nodoMarcaProducto);
    marcaProducto.setAttribute("class", "marca-producto");
    
    
    let marcaProducto4 = document.createElement("label");
    infoProducto.appendChild(marcaProducto4);
    let nodoMarcaProducto4 = document.createTextNode(auto.modelo);
    marcaProducto4.appendChild(nodoMarcaProducto4);
    marcaProducto4.setAttribute("class", "modelo-producto");
    
    
    let marcaProducto2 = document.createElement("div");
    infoProducto.appendChild(marcaProducto2);
    let nodoMarcaProducto2 = document.createTextNode(auto.precio);
    marcaProducto2.appendChild(nodoMarcaProducto2);
    marcaProducto2.setAttribute("class", "precio-producto");
    
    
    let marcaProducto3 = document.createElement("label");
    infoProducto.appendChild(marcaProducto3);
    let nodoMarcaProducto3 = document.createTextNode(auto.kilometros + "·");
    marcaProducto3.appendChild(nodoMarcaProducto3);
    marcaProducto3.setAttribute("class", "kilometraje");
    
    
    let marcaProducto5 = document.createElement("label");
    infoProducto.appendChild(marcaProducto5);
    let nodoMarcaProducto5 = document.createTextNode(auto.anyo + "·");
    marcaProducto5.appendChild(nodoMarcaProducto5);
    marcaProducto5.setAttribute("class", "anyo-producto");
    
    
    let marcaProducto6 = document.createElement("label");
    infoProducto.appendChild(marcaProducto6);
    let nodoMarcaProducto6 = document.createTextNode(auto.ciudad);
    marcaProducto6.appendChild(nodoMarcaProducto6);
    marcaProducto6.setAttribute("class", "ciudad");
    
}

