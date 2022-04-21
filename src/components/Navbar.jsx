
import React from 'react'
import { NavLink } from 'react-router-dom';

 const Navbar=()=>{
  
    return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/">react router</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className={({isActive})=>isActive ? " nav-item active":"nav-item"}>
                    <NavLink className="nav-link" to="/home">Home <span className="visually-hidden">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About <span className="visually-hidden">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact <span className="visually-hidden">(current)</span></NavLink>
                </li>
              
            </ul>
           
        </div>
  </div>
</nav>
    )
  
}
export default Navbar;


