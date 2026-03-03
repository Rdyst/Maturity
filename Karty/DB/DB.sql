CREATE TABLE KARTY (
    ID int PRIMARY KEY AUTO_INCREMENT,
    NAZEV VARCHAR(50) NOT NULL UNIQUE,
    Kategorie INT NOT NULL
);

CREATE TABLE Sbírka(
    FOREIGN KEY (id_karta)
        REFERENCES Karta(id_karta)
        ON DELETE RESTRICT,  < - TOHLE
);

CREATE TABLE Karta_Sbirka (
    id_karta INT,
    id_sbirka INT,
    PRIMARY KEY (id_karta, id_sbirka),

    FOREIGN KEY (id_sbirka)
        REFERENCES Sbirka(id_sbirka)
);


-- ZDE JE INSERT
INSERT INTO KARTY 
VALUES ("Hvezda","Level");


SELECT *
FROM Sbirka;

LAST_INSERT_ID()