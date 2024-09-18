import { openDb } from "../config/configDB.js";
import csv from "csv-parser";
import fs from "fs";

export async function createTeamTable(req, res) {
    const db = await openDb();
    db.exec(
        "CREATE TABLE IF NOT EXISTS Teams (id INTEGER PRIMARY KEY AUTOINCREMENT, teamRef TEXT, name TEXT, nationality TEXT, imageUrl TEXT, UNIQUE(name))"
    );
}

export async function insertTeamsData(teamRef, name, nationality, imageUrl) {
    const db = await openDb();

    try {
        db.run(
            "INSERT OR IGNORE INTO Teams (teamRef, name, nationality, imageUrl) VALUES (?, ?, ?, ?)",
            [teamRef, name, nationality, imageUrl]
        );
    } catch (error) {
        return console.log("🔴 Error on insert TEAM data!", error);
    }
}

export const importTeamsCSV = () => {
    const filePath = "./data/teams.csv";
    fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (row) => {
            const { teamRef, name, nationality, imageUrl } = row;
            insertTeamsData(teamRef, name, nationality, imageUrl);
        })
        .on("end", () => {
            console.log("👍 Teams CSV import completed");
        });
};
