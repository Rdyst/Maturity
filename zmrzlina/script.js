function vynulovat(){
    document.getElementById("obrat").innerHTML = "0";
}

function koupeno(x,y){
    obrat = document.getElementById("obrat");
    if(Number(y.innerHTML) <= 0){
        console.log("vyprodano");
    }
    else{
        y.innerHTML = Number(y.innerHTML) - 1;
        obratpocet = Number(obrat.innerHTML);
        obrat.innerHTML = obratpocet + Number(x.innerHTML);
    }
    
}
