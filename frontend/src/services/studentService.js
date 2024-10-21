import axios from "axios";

// ฟังก์ชันเรียก API ดึงข้อมูลนักเรียนทั้งหมด
export const getAllStudents = async () => {
  try {
    const response = await axios.get("/api/students");
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};

// ฟังก์ชันเรียก API เพิ่มนักเรียน
export const addStudent = async (studentData) => {
  try {
    const response = await axios.post("/api/students", studentData);
    return response.data;
  } catch (error) {
    console.error("Error adding student:", error);
    throw error;
  }
};
