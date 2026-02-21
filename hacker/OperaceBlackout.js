const data = `
[FILE] evidence_01.dat | Size: 450 MB | Val: 2500 Credits
[FILE] photo_ceo_vacation.jpg | Size: 12 MB | Val: 10 Credits
[FILE] blueprint_omega.cad | Size: 1200 MB | Val: 8500 Credits
[FILE] email_backup.zip | Size: 300 MB | Val: 1200 Credits
[FILE] financial_report_2024.xls | Size: 40 MB | Val: 600 Credits
[FILE] security_logs.txt | Size: 150 MB | Val: 50 Credits
[FILE] project_x_source_code.tar | Size: 800 MB | Val: 5000 Credits
[FILE] meeting_minutes.doc | Size: 5 MB | Val: 20 Credits
[FILE] testing_purposes.doc | Size: 178 MB | Val: 4500 Credits 
[FILE] homework.zip | Size: 1000 MB | Val: 10000 Credits
[FILE] secretrecipe.txt | Size: 500 MB | Val: 7000 Credits
[FILE] secretrecipe2.txt | Size: 50 MB | Val: 100 Credits
[FILE] secretrecipe3.txt | Size: 100 MB | Val: 200 Credits
[FILE] secretrecipe4.txt | Size: 10 MB | Val: 300 Credits
`;


// Rozhodl jsem se pouzit takzvany greedy zpusob(asi?) a podle neho seradim ten co ma nejvetsi value a stahnu ho prvni 
// kdyz na ne misto nebudu mit tak je preskocim dokud neprojedu vsecky
// je mozny ze tu jsou chyby ale principem jsem to udelal doufam

// ZADANI
// Abych rekl pravdu nejvice mi delal problem delalo sparsovat ten soubor takze bych si to mel procvicit vice 
// samostatny algoritmus mi moc dlouho netrval ale pravdepodobne neni optimalni :(




function kalkulace(text){

    const rychlost = 20; // Rychlost stahovani v MB za s
    let caslimit = 300; // casovej limit v s
    let vydelek = 0; // pripravim si variable ktery bude mit vydelek 
    let casfinal = 0;  //variable ktery tu je pro pocitani jak dlouho to trvalo

    const dataArray = []; // pripravim si pole kam si ulozim proparsovany hodnoty
    const finalArray = [] // test
    const textdata = text.split("\n"); // rozdelim si textovej soubor na radky podle kterych budu dal "parsovat"


    for(x in textdata){ // pro kazdej radek textdata udelam 

        textdata[x] = textdata[x].trim(); // ukradnu mezery na zacatku a na konci (jestli tam jsou)
        if (textdata[x] === "") continue; // jestli mam radek kterej je prazdnej pokracuju
    
        const cast = textdata[x].split("|"); // rozdelim si kazdy radek textu na 3 casti podle | (nazev,velikost,hodnota)
    

        const nazev = cast[0].replace("[FILE]","").trim(); // upravim 1 cast (nazev) tak aby zustal jen nazev

        const velikost = cast[1].replace("Size:","").replace("MB","").trim(); // upravim 2 cast(velikost) tak aby zustal jen integer velikosti
        const cas = velikost / rychlost; // spocitam jak dlouho bych soubor stahoval v sekundach

        const hodnota = cast[2].replace("Val:","").replace("Credits","").trim(); // upravim 3 cast (hodnotu) tak aby zustal jen integer hodnoty

        const cenavelikost = hodnota / cas ; // udelim souboru cenu podle pomeru hodnoty za cas cim vetsi tim lepsi?

        dataArray.push({nazev,cas,hodnota,cenavelikost}); // dam do pole parsovany hodnoty

        

    };

    // Odtud uz mam zparsovany data takze uz jen kalkuluju 
    // console.log(dataArray);
    function porovnat(a,b){     // funkce ktera porovnava cenavelikost a ktera je vetsi bude prvni v listu
        if(a.cenavelikost > b.cenavelikost){
            return -1;
        }
        if(a.cenavelikost < b.cenavelikost){
            return 1;
        }
        return 0;
    }
    dataArray.sort(porovnat); // sort pomoci te funkce
    

    for(y in dataArray){
        if(dataArray[y].cas < caslimit){ // zkontrolujeme jestli mame cas stahnout dany soubor 
            caslimit = caslimit - dataArray[y].cas; // odecteme cas jak dlouho nam to trvalo od casu ktery mame nez nas chyti cerberus nebo kdo to byl
            casfinal = casfinal + dataArray[y].cas; // pricteme si jak dlouho nam to trvalo 
            vydelek = vydelek + Number(dataArray[y].hodnota); // pricteme kolik jsme si z toho vydelali
            finalArray.push(dataArray[y].nazev); // dame do finalArray nazev souboru ktery jsme stahnuli nebo kradli ja uz zapomnel
        }else{ //jestli ne skipnem 
            continue;
        }

        
    }

    console.log("Vybrane soubory:\n ",finalArray,"\n","Celkový výdělek:",vydelek,"kreditů","\n","trvalo:",casfinal+"s") // console log vysledku atd.
}




kalkulace(data); //zavolani funkce vstupem bude string souboru
