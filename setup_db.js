const sqlite3 = require('sqlite3').verbose();

// Cela va créer un fichier "association.db" directement dans ton dossier VS Code
const db = new sqlite3.Database('./association.db');

db.serialize(() => {
    // 1. Création de la table SQL
    db.run(`CREATE TABLE IF NOT EXISTS agenda (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        jour TEXT,
        mois TEXT,
        titre TEXT,
        description TEXT
    )`);

    // 2. Insertion d'une donnée de test
    const insert = db.prepare("INSERT INTO agenda (jour, mois, titre, description) VALUES (?, ?, ?, ?)");
    insert.run("15", "Juin", "Journée Citoyenne", "Défrichage et nettoyage autour de la chapelle.");
    insert.finalize();

    console.log("Base de données créée et données insérées !");
});

db.close();