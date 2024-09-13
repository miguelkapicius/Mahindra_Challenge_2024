const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const port = 3000;

// Add middleware to parse JSON request bodies
app.use(express.json());

const dbPath = path.join(__dirname, "database.sqlite");
const db = new sqlite3.Database(dbPath);

const createTables = () => {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS teams (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        country TEXT,
        wins INTEGER,
        podiums INTEGER,
        image TEXT,
        points INTEGER
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS drivers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        nationality TEXT,
        team_id INTEGER,
        points INTEGER,
        wins INTEGER,
        podiums INTEGER,
        image TEXT,
        FOREIGN KEY(team_id) REFERENCES teams(id)
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS user_drivers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        driver_id INTEGER,
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(driver_id) REFERENCES drivers(id)
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS races (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        date TEXT,
        location TEXT
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS race_results (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        race_id INTEGER,
        driver_id INTEGER,
        position INTEGER,
        FOREIGN KEY(race_id) REFERENCES races(id),
        FOREIGN KEY(driver_id) REFERENCES drivers(id)
      );
    `);
};

createTables();

app.get("/", (req, res) => {
    const selectSQL = `SELECT * FROM users`;

    db.all(selectSQL, [], (err, rows) => {
        if (err) {
            return res
                .status(500)
                .json({ message: "Erro ao buscar usuários." });
        }
        res.json({ users: rows });
    });
});

app.post("/users", (req, res) => {
    if (!req.body || !req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ message: "Dados incompletos. Por favor, forneça nome, email e senha." });
    }

    const { name, email, password } = req.body;
    const insertSQL = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    db.run(insertSQL, [name, email, password], function (err) {
        if (err) {
            return res.status(500).json({ message: "Erro ao criar usuário." });
        }
        res.json({ message: "Usuário criado com sucesso!", id: this.lastID });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
