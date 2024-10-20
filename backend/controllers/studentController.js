const db = require("../config/db");

class StudentController {
  // ฟังก์ชันดึงข้อมูลนักเรียนทั้งหมด
  getAllStudents(req, res) {
    const query = "SELECT * FROM students";
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  }

  // ฟังก์ชันเพิ่มนักเรียน
  addStudent(req, res) {
    const { name, age } = req.body;
    const query = "INSERT INTO students (name, age) VALUES (?, ?)";
    db.query(query, [name, age], (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(201).json({ message: "Student added", id: results.insertId });
    });
  }
}

module.exports = new StudentController();
