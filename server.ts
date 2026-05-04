import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import Database from "better-sqlite3";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("barbershop.db");

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    service TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
  
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/config", (req, res) => {
    res.json({
      businessName: "CJ's Barbershop & Beauty Salon",
      location: "Longview, TX",
      year: new Date().getFullYear()
    });
  });

  app.post("/api/book", (req, res) => {
    const { name, phone, service, date, time } = req.body;
    
    if (!name || !phone || !service || !date || !time) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const stmt = db.prepare("INSERT INTO bookings (name, phone, service, date, time) VALUES (?, ?, ?, ?, ?)");
      stmt.run(name, phone, service, date, time);
      res.json({ success: true, message: "Booking received! We'll see you soon." });
    } catch (error) {
      console.error("Booking error:", error);
      res.status(500).json({ error: "Failed to save booking" });
    }
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const stmt = db.prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
      stmt.run(name, email, message);
      res.json({ success: true, message: "Message sent! We'll get back to you shortly." });
    } catch (error) {
      console.error("Contact error:", error);
      res.status(500).json({ error: "Failed to save message" });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
