


let file = [

{"id": 1, "name": "Monitor", "state": "ok"},

{"id": 2, "name": "Klávesnice", "state": ""},

{"id": 3, "name": "Myš", "state": "ok"}

]; // file duh

// Pole do kterého budu davat upravené pole
let filedone = [];

function load_devices(filename){
    
    // projedu kazdej objekt v listu a zjistim jestli jeho stav je ok jestli jo tak ho dam do nového listu který vratim na konci
    for(x in filename){
        if(filename[x].state == ""){
            continue;
        }
        else{
            filedone.push(filename[x]);
        }
    }
    console.log(filedone);
    return(filedone);
    

}


load_devices(file);


function sort_devices(list){

    list.sort((a, b) => a.name.localeCompare(b.name));
    console.log(list)
}


sort_devices(file);



function add_device(){
    
    

    let name = document.forms["create"]["name"].value;
    let type = document.forms["create"]["typ"].value;
    let stav = document.forms["create"]["Stav"].value;

    div = document.createElement("div");
    div.classList.add('device');
    document.getElementById("devcon").appendChild(div);


    const devcondite = document.getElementById("devcon").lastChild;

    devcondite.innerHTML= "<p></p><p></p><p></p> <button>Detail</button>";

    devcondite.children[0].innerHTML = `Název: ${name}`;
    devcondite.children[1].innerHTML = `Typ: ${type}`;
    devcondite.children[2].innerHTML = `Stav: ${stav}`;


   
    
    // document.getElementById("jmeno").innerHTML = name;
    // document.getElementById("typos").innerHTML = type;
    
    console.log(name);
    console.log(type);
}