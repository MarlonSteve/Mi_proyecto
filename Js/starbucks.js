let icegreen = document.getElementById("icegreen");
let icerose = document.getElementById("icerose");
let icepink = document.getElementById("icepink");
let maincircle = document.getElementById("maincircle");
let mainimg

icegreen.addEventListener("mouseover", function(){
    maincircle.classList.add("green");
    maincircle.classList.remove("rose");
    maincircle.classList.remove("pink");
})
icerose.addEventListener("mouseover", function(){
    maincircle.classList.remove("green");
    maincircle.classList.add("rose");
    maincircle.classList.remove("pink");
})
icepink.addEventListener("mouseover", function(){
    maincircle.classList.remove("green");
    maincircle.classList.remove("rose");
    maincircle.classList.add("pink");
})