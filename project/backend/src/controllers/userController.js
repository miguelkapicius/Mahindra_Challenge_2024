import { openDb } from "../config/configDB.js";
import bcrypt from "bcryptjs";

// cria a tabela de usuários caso não exista
export async function createUserTable(req, res) {
    const db = await openDb();
    db.exec(
        "CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, username TEXT, password TEXT, image TEXT)"
    );
}

// cria um novo usuário
export async function createUser(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    );
    const db = await openDb();
    let user = req.body;
    const hashedPassword = await bcrypt.hash(user.password, 10);
    db.run(
        "INSERT INTO users (name, email, username, password, image) VALUES (?, ?, ?, ?, ?)",
        [
            user.name,
            user.email,
            user.username,
            hashedPassword,
            user.image || null,
        ]
    );
    res.json({
        statusCode: 201,
        message: "User created successfully",
    });
}

export async function loginUser(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    );
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            statusCode: 400,
            message: "Email and password are required",
        });
    }

    const db = await openDb();
    const user = await db.get("SELECT * FROM users WHERE email = ?", email);

    if (!user) {
        return res.status(401).json({
            statusCode: 401,
            message: "Invalid email or password",
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({
            statusCode: 401,
            message: "Invalid email or password",
        });
    }

    res.json({
        statusCode: 200,
        message: "Login successful",
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            image: user.image,
        },
    });
}

// lê todos os usuários
export async function readUsers(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    );
    const db = await openDb();
    const users = await db.all("SELECT * FROM users");
    res.json({
        statusCode: 200,
        users,
    });
}

// lê um usuário específico
export async function readUser(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    );
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
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    );
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
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    );
    const db = await openDb();
    db.get("DELETE FROM users WHERE id = ?", req.params.id);
    res.json({
        statusCode: 200,
        message: "User deleted successfully",
    });
}
