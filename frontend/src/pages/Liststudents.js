import React, { useState, useEffect } from "react";
import { getAllStudents } from "../services/studentService";

function Liststudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents().then(setStudents).catch(console.error);
  }, []); 

  return (
    <div>
      <h2>Student List</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Liststudents;
