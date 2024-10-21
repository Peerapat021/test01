import React from "react";
import Navber from "../components/Navbar";
import Liststudents from "../pages/Liststudents";

function HomePages() {
  return (
    <div>
      <Navber />
      <Liststudents/>
    </div>
  );
}

export default HomePages;
