let boxProductos = document.getElementById("boxProductos");

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
imagenProducto.setAttribute("src","img/carro1.jpg");
imagenProducto.setAttribute("class","imagen-producto");


/* Contenedor para la informacion */ 
let infoProducto = document.createElement("div");
boxProducto.appendChild(infoProducto);
infoProducto.setAttribute("class","box-info-producto");

let marcaProducto = document.createElement("label");
infoProducto.appendChild(marcaProducto);
let nodoMarcaProducto = document.createTextNode("Volkswagen");
marcaProducto.appendChild(nodoMarcaProducto);


let marcaProducto2 = document.createElement("div");
infoProducto.appendChild(marcaProducto2);
let nodoMarcaProducto2 = document.createTextNode("Golf 1.8 Gti");
marcaProducto2.appendChild(nodoMarcaProducto2);

let marcaProducto3 = document.createElement("div");
infoProducto.appendChild(marcaProducto3);
let nodoMarcaProducto3 = document.createTextNode("42.000.000 ");
marcaProducto3.appendChild(nodoMarcaProducto3);

let marcaProducto4 = document.createElement("div");
infoProducto.appendChild(marcaProducto4);
let nodoMarcaProducto4 = document.createTextNode("2020");
marcaProducto4.appendChild(nodoMarcaProducto4);

let marcaProducto5 = document.createElement("div");
infoProducto.appendChild(marcaProducto5);
let nodoMarcaProducto5 = document.createTextNode("0 km");
marcaProducto5.appendChild(nodoMarcaProducto5);

let marcaProducto6 = document.createElement("div");
infoProducto.appendChild(marcaProducto6);
let nodoMarcaProducto6 = document.createTextNode("Suba - Bogota DC");
marcaProducto6.appendChild(nodoMarcaProducto6);









