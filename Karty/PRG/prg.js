class karty {
    constructor(){
        this.karty = [];
    }
    CallName(){
        for(let karta in this.karty){
            let card = this.karty[karta];
            console.log("Název:",card.name);
            console.log("Kategorie:",card.category);

        }


        console.log("Název:",this.name);
        console.log("Kategorie:",this.category);
    }
    LoadData(file){
        const fs = require('fs');
        const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
        this.karty = data.karty;
    }

}

const mykarty = new karty();
mykarty.LoadData("data.json")
mykarty.CallName();