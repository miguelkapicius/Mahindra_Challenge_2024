import { openDb } from "../config/configDB.js";
import csv from "csv-parser";
import fs from "fs";

export async function createDriverTable(req, res) {
    const db = await openDb();
    db.exec(
        "CREATE TABLE IF NOT EXISTS Drivers (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT, nationality TEXT, team_id INTEGER, UNIQUE(firstname, lastname), FOREIGN KEY (team_id) REFERENCES Teams(id))"
    );
}

export async function insertDriversData(firstname, lastname, nationality) {
    const db = await openDb();

    try {
        db.run(
            "INSERT OR IGNORE INTO Drivers (firstname, lastname, nationality) VALUES (?, ?, ?)",
            [firstname, lastname, nationality]
        );
    } catch (error) {
        return console.log("🔴 Error on insert DRIVER data!", error);
    }
}

export const importDriversCSV = () => {
    const filePath = "./data/drivers.csv";
    fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (row) => {
            const { firstname, lastname, nationality } = row;
            insertDriversData(firstname, lastname, nationality);
        })
        .on("end", () => {
            console.log("👍 Drivers CSV import completed");
        });
};
