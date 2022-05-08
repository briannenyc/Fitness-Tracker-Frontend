import react from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
 
    
  return (
    <div className="navbar">
          <span className="logo-text"><i className="fa fa-book"
          sytle={{marginRight: "0.1em"}}></i> Fitness</span>
          <span style={{color: "#f095d1", fontSize: "1.1em"}}> Tracker </span>
       
      <div className="menubar">
        <ul className="list">
          <li className="list-items">
            <a href="#">HOME</a>
          </li>
          <li className="list-items">
            <a href="#">HOME2</a>
          </li>
          <li className="list-items">
            <a href="#">HOME3</a>
          </li>
          <li className="list-items">
            <a href="#">HOME4</a>
          </li>
          <li className="list-items">
            <a href="#">HOME5</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
