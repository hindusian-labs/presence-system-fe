import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import { IoHome, IoPerson, IoCalendar } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <aside className="menu pl-3 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list pb-6">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/users"}>
              <IoPerson /> Users
            </NavLink>
          </li>
          <li>
            <NavLink to={"/log"}>
              <IoCalendar /> Log Aktivitas
            </NavLink>
          </li>
        </ul>
        <ul className="menu-list">
          <li>
            <button className="button is-dark" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
