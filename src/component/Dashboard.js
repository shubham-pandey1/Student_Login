import React, { useEffect } from "react";
import Navbar from "./Navbar";
import image from "../image/men.jpeg";
import './dashcss.css';
import Home from "./Home";

import Studentlist from "./Studentlist";

import {
    useLocation,
    useNavigate,
    Link,
    Route,
    Routes
} from "react-router-dom";


const Dashboard= ()=>{
    const Navigate = useNavigate();
    var jump;

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            Navigate("/");
        }
    },[]);

    const handleLogout=()=>{
        localStorage.removeItem('token')
        Navigate("/");
    }
    const location = useLocation();
    jump = location.pathname;

    useEffect(()=>{
        const handleClick=(e)=>{
            e.preventDefault();

            if(jump==="/dashboard")
                Navigate("/dashboard");
        }
    })

    return(
        <div>
            <div className="container-fluid mx-0">
                <div className="row">
                    <div className="col-sm-2 bg-danger-subtle">
                        <h5 className="text-center px-0 pt-3"><b> <i className="fa-sharp fa-solid fa-pipe me-1 text-warning"></i>CRUD OPERATIONS</b></h5>
                        <div className="image pt-2">
                            <img className="men" src= {image} alt="Man" />
                        </div>
                        <div className="text-center">
                            <h6><b> Karthi Madesh</b></h6>
                            <h6 className="text-warning">Admin</h6>
                        </div>
                        <div>
                        <ul className="list-group menu px-auto pt-4 mb-2 pb-1 ms-3 bg-transparent">
                            <li className="mb-4 list-group-item bg-danger-subtle active">
                                <Link to="/dashboard/home" ><i className="fa-regular fa-house me-3"></i>Home</Link>
                            </li>
                            <li className="mb-4 list-group-item bg-danger-subtle"><i className="fa-sharp fa-regular fa-bookmark me-3"></i>Course</li>
                            <li className="mb-4 list-group-item  bg-transparent active" aria-current="true"><i className="fa-regular fa-graduation-cap me-3"></i>Students</li>
                            <li  className="mb-4 list-group-item"><i className="fa-light fa-square-dollar me-3"></i>Payment</li>
                            <li className="mb-4 list-group-item"><i className="fa-light fa-file-chart-column me-3"></i>Report</li>
                            <li className=" list-group-item"><i className="fa-regular fa-square-sliders-vertical me-3"></i>Setting</li>
                            <button className="btn border border-0 btn-body fw-medium mt-5" onClick={handleLogout}>Logout <i className="ms-3 fa-regular fa-right-from-bracket"></i></button>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-10 px-0 mx-0">
                        <Navbar/>
                    <Routes>
                            <Route exact path="/home" element={<Home /> }>
                            </Route>
                            <Route exact path="/student" element={<Studentlist/>}>
                            </Route>
                    </Routes>
                           
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard;