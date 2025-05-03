const express = require('express');
const mysql = require('mysql2/promise'); // Use promise version for async/await
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());

// Create MySQL connection
let connection;

(async () => {
  try {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'AbanI321@',
      database: 'student'
    });
    console.log('✅ Connected to MySQL database');
  } catch (err) {
    console.error('❌ MySQL connection error:', err);
  }
})();

// POST route to insert data into 'user' table
app.post("/register", async (req, res) => {
  const { email, password, username } = req.body;

  if (!email || !password || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const [result] = await connection.execute(
      "INSERT INTO user (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );

    console.log("✅ User inserted:", result);

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("❌ Error inserting user:", err);
    res.status(500).json({ message: "Database error", error: err.message });
  }
});
// POST route to handle login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const [rows] = await connection.execute(
      "SELECT * FROM user WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length > 0) {
      console.log("✅ Login successful for:", email);
      res.status(200).json({ message: "Login successful", user: rows[0] });
    } else {
      console.log("❌ Login failed for:", email);
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.error("❌ Error during login:", err);
    res.status(500).json({ message: "Database error", error: err.message });
  }
});


// Default route
app.get('/', (req, res) => {
  res.send('Business International is running');
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Business International is running on port ${port}`);
});


