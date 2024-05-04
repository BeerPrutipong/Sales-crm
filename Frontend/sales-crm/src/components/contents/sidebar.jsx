import React from "react";

function sidebar() {
  return (
    <div className="cont-Sidebar">
      <div className="d-flex justify-content-start align-items-center px-3">
        <i className=" fs-3 text-light fa-solid fa-bars"></i>
        <span className="text-light fs-3 d-flex justify-content-center py-4 px-3 ">
          DashBoard
        </span>
      </div>
      <ul className="nav flex-column">
        <li className="nav-item d-flex justify-content-start align-items-center ms-3">
          <i className="fa-solid fa-box fs-3 text-light"></i>
          <a to="/" href="" className="nav-link active fs-6 w-100 py-4 fs-5">
            Product
          </a>
        </li>
      </ul>
    </div>
  );
}

export default sidebar;
