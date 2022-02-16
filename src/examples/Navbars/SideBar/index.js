import React from "react";
import "./style.css";

function SideBar() {
  return (
    <div class="sidebar">
      <a href="/profile">Profile</a>
      <a href="#contact">Jobs</a>
      <a href="#about">Jobs Search</a>
      <a href="#about">Settings</a>
      <a href="#logout" className="logout">Logout</a>
    </div>
  );
}

export default SideBar;
