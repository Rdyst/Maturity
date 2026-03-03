let hadej = ["banan","test","hamburger"]
let hadanej = Math.floor(Math.random() * 3)

console.log(hadanej);

function hadam(x){
    let karta = document.getElementById("hadana");
    hadej[x].style= "background-color: yellow;";
    console.log("hadas:",x," A spravne je:", hadanej )
    if (x == hadanej){
        karta.innerHTML = "VYHRAL JSI!";
        karta.id = "vyhra";
    }
    else{
        karta.innerHTML = "PROHRAL JSI! Správně bylo: " + hadej[hadanej];
        karta.id = "prohra";
    }
};