//เป็นคอมโพเนนต์ที่ใช้ในการแสดงหน้า Dashboard สำหรับผู้ใช้งานทั่วไป หรือใช้ร่วมกับคอมโพเนนต์อื่นๆ เพื่อแสดงผลในหน้า Dashboard หลัก
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard! Here you can see your stats and manage your account.</p>
      {/* แสดงข้อมูลสถิติ เช่น จำนวนผู้ใช้งาน, โพสต์ต่างๆ */}
    </div>
  );
}

export default Dashboard;
