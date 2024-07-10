import React from "react";
import './navcss.css';
import { Link } from "react-router-dom";

const Navbar=()=>{
    

    return(
  <div className="stick-top w-100">
  <nav className="navbar navbar-expand-lg bg-body-light">
  <div className="container-fluid">
    <Link className="navbar-brand text-secondary ms-3" to="#"><i className="fa-light fa-circle-caret-left" ></i></Link>
    <button className="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
      <form className="d-flex" role="search">
        <div className="input-box">
                    <input type="text" className="form-control"/>
                    <i className="fa fa-search"></i>                    
                  </div>
                  <i className="fa-regular fa-bell text-body-tertiary mt-2 px-4"></i>
      </form>
  </div>
</nav>
</div>
)
}
export default Navbar;