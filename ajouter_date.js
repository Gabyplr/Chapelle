const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./association.db');

// --- MODIFIE CES 4 LIGNES POUR AJOUTER TA NOUVELLE DATE ---
const nouveauJour = "15";
const nouveauMois = "Août";
const nouveauTitre = "Visite";
const nouvelleDescription = "Présentation au public";
// ----------------------------------------------------------

const insert = db.prepare("INSERT INTO agenda (jour, mois, titre, description) VALUES (?, ?, ?, ?)");
insert.run(nouveauJour, nouveauMois, nouveauTitre, nouvelleDescription, function(err) {
    if (err) {
        console.error("Erreur lors de l'ajout :", err.message);
    } else {
        console.log(`✅ Succès ! La date "${nouveauTitre}" a bien été ajoutée à la base de données !`);
    }
});
insert.finalize();
db.close();