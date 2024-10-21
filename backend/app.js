const express = require("express");
const db = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const cors = require("cors");

const app = express();

// Middleware สำหรับการแปลง JSON
app.use(express.json());
app.use(cors());
// ตั้งค่า routes ตัวอย่าง
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

// ตั้งค่า routes สำหรับ /api/students
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
