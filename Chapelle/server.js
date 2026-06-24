const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors()); // Permet au HTML de lire les données

// Connexion à ta base de données SQLite
const db = new sqlite3.Database('./association.db');

// Création de "l'API" que ton site va interroger
app.get('/api/agenda', (req, res) => {
    // La fameuse requête SQL
    db.all("SELECT * FROM agenda ORDER BY id ASC", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows); // Renvoie les données au format JSON
    });
});

// Le serveur écoute sur le port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Le serveur Backend tourne sur http://localhost:${PORT}`);
});