let boxPlus = document.getElementById("boxPlus");
let boxUnidades = document.getElementById("boxUnidades");
let boxMinus = document.getElementById("boxMinus");



boxPlus.addEventListener("click", function(){
    let auxUnidades = parseInt(boxUnidades.innerHTML);
    if(auxUnidades < 10){
        document.getElementById("boxUnidades").innerHTML =( auxUnidades + 1).toString();
    };
});

boxMinus.addEventListener("click", function(){
    let auxUnidades = parseInt(boxUnidades.innerHTML);
    if(auxUnidades > 0){
        document.getElementById("boxUnidades").innerHTML =( auxUnidades - 1).toString();
    };
});

