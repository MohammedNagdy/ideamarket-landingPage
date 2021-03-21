import React from "react";
import "../style.css";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const handleClick = () => props.onClick(props.index)


  return (
      <>
          <li className={ props.isActive ? "active" : ""}
              className="nav-item"
              onClick={handleClick}
          >
          {props.name}
          </li>
      </>
  );
}
