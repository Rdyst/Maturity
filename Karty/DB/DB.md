
### Karta 
| Atribut     | význam        |  Typ        |  omezení    |
| ----------- | ------------- | ----------- | ----------- |
| ID          | identifikator | INT         | NOT NULL , AUTO INCREMENT , PRIMARY KEY      |
| název       | nazev         | VARCHAR(50) | NOT NULL , UNIQUE     |
| Level       | level karty   | INT         | NOT NULL |

vztah je 1 k N

### Sbírka
| Atribut     | význam        |  Typ        |  omezení    |
| ----------- | ------------- | ----------- | ----------- |
| ID          | identifikator | INT         | NOT NULL , AUTO INCREMENT , PRIMARY KEY      |
| Hodnota     | tržńi hodnota | INT | NOT NULL |
| Nazev kombinace | nazev | ----------- | ----------- |
| FK_Karta1   | cizí klíč     | INT | NOT NULL, FOREIGN KEY |
| FK_Karta2   | cizí klíč     | INT | NOT NULL, FOREIGN KEY |


