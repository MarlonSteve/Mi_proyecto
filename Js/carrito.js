let boxPlus = document.getElementById("boxPlus");
let boxUnidades = document.getElementById("boxUnidades");
let boxMinus = document.getElementById("boxMinus");
let subTotal = document.getElementById("subTotal");
const valorUnidad = 120000;
const valorUnidadStr = Intl.NumberFormat("de-De").format(valorUnidad);

document.getElementById("precioUnidad").innerHTML = "$" + valorUnidad;


boxPlus.addEventListener("click", function(){
    let auxUnidades = parseInt(boxUnidades.innerHTML);
    if(auxUnidades < 10){
        boxUnidades.innerHTML =( auxUnidades + 1).toString();
        
        let valorSubtotal = parseInt(boxUnidades.innerHTML) * valorUnidad;
        subTotal.innerHTML = Intl.NumberFormat("de-De").format(valorSubtotal);

        if(boxUnidades.innerHTML == 1){
            document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + "  Producto";
        }
        else{
            document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + "  Productos";
        }
    };
});

boxMinus.addEventListener("click", function(){
    let auxUnidades = parseInt(boxUnidades.innerHTML);
    if(auxUnidades > 0){
        document.getElementById("boxUnidades").innerHTML =( auxUnidades - 1).toString();

        let valorSubtotal = parseInt(boxUnidades.innerHTML) * valorUnidad;
        subTotal.innerHTML = Intl.NumberFormat("de-De").format(valorSubtotal);

        if(boxUnidades.innerHTML == 1){
            document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + "  Producto";
        }
        else{
            document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + "  Productos";
        }
    };
});

