import { openDb } from "../config/configDB.js";


// cria a tabela de usuários caso não exista
export async function createUserTable(req, res) {
    const db = await openDb();
    db.exec(
        "CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, username TEXT, password TEXT, image TEXT)"
    );
}

// cria um novo usuário
export async function createUser(req, res) {
    const db = await openDb();
    let user = req.body;
    db.run(
        "INSERT INTO users (name, email, username, password, image) VALUES (?, ?, ?, ?, ?)",
        [
            user.name,
            user.email,
            user.username,
            user.password,
            user.image || null,
        ]
    );
    res.json({
        statusCode: 201,
        message: "User created successfully",
    });
}

// lê todos os usuários
export async function readUsers(req, res) {
    const db = await openDb();
    const users = await db.all("SELECT * FROM users");
    res.json({
        statusCode: 200,
        users,
    });
}

// lê um usuário específico
export async function readUser(req, res) {
    const db = await openDb();
    const user = await db.get(
        "SELECT * FROM users WHERE id = ?",
        req.params.id
    );
    res.json({
        statusCode: 200,
        user,
    });
}

// atualiza um usuário específico
export async function updateUser(req, res) {
    const db = await openDb();
    const user = req.body;
    db.run(
        "UPDATE users SET name = ?, email = ?, username = ?, password = ?, image = ? WHERE id = ?",
        [
            user.name,
            user.email,
            user.username,
            user.password,
            user.image || null,
            req.params.id,
        ]
    );
    res.json({
        statusCode: 200,
        message: "User updated successfully",
    });
}

// deleta um usuário específico
export async function deleteUser(req, res) {
    const db = await openDb();
    db.get("DELETE FROM users WHERE id = ?", req.params.id);
    res.json({
        statusCode: 200,
        message: "User deleted successfully",
    });
}
