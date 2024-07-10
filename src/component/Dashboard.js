import React, { useEffect,useContext } from "react";
import Navbar from "./Navbar";
import image from "../image/men.jpeg";
import './dashcss.css';
import Home from "./Home";

import Studentlist from "./Studentlist";

import {
    
    useNavigate,
    
    Route,
    Routes,
    NavLink
} from "react-router-dom";
import stuContext from "../context/stuContext";


const Dashboard= ()=>{
    const Navigate = useNavigate();
    const context = useContext(stuContext);

    const {user, getUser} = context;



    useEffect(()=>{
        if(localStorage.getItem('token')){
            getUser();
        }
        else
            Navigate("/");
    },[]);

    const handleLogout=()=>{
        localStorage.removeItem('token')
        Navigate("/");
    }
    

    return(
        <div>
            <div className="container-fluid mx-0">
                <div className="row">
                    <div className="col-md-2 bg-danger-subtle">
                        <h5 className="text-center px-0 pt-3"><b> <i className="fa-sharp fa-solid fa-pipe me-1 text-warning"></i>CRUD OPERATIONS</b></h5>
                        <div className="image pt-2">
                            <img className="men" src= {image} alt="Man" />
                        </div>
                        <div className="text-center">
                            <h6><b> {user.name}</b></h6>
                            <h6 className="text-warning">Admin</h6>
                        </div>
                        <div>
                        <ul className="list-group menu px-auto pt-4 mb-2 pb-1 ms-3 bg-transparent">
                                <NavLink to="/dashboard/home" className={({isActive})=>`mb-4 list-group-item  ${isActive?'bg-warning':'bg-transparent'}`}>
                                    <i className="fa-regular fa-house me-3"></i>Home</NavLink>
                            
                            
                               <NavLink to="/dashboard/course" className={({isActive})=>`mb-4 list-group-item  ${isActive?'bg-warning':'bg-transparent'}`}> <i className="fa-sharp fa-regular fa-bookmark me-3"></i>Course</NavLink>
                               
                            
                               <NavLink to="/dashboard/student" className={({isActive})=>`mb-4 list-group-item  ${isActive?'bg-warning':'bg-transparent'}`}> <i className="fa-regular fa-graduation-cap me-3"></i>Students</NavLink>
                               
                            
                            <NavLink to="/dashboard/payment" className={({isActive})=>`mb-4 list-group-item  ${isActive?'bg-warning':'bg-transparent'}`}> <i className="fa-light fa-square-dollar me-3"></i>Payment</NavLink>
                                
                            
                            <NavLink to="/dashboard/report" className={({isActive})=>`mb-4 list-group-item  ${isActive?'bg-warning':'bg-transparent'}`}><i className="fa-light fa-file-chart-column me-3"></i>Report</NavLink>
                            
                            <NavLink to="/dashboard/setting" className={({isActive})=>`mb-4 list-group-item  ${isActive?'bg-warning':'bg-transparent'}`}><i className="fa-regular fa-square-sliders-vertical me-3"></i>Setting</NavLink>
                            
                            <button className="btn border border-0 btn-body fw-medium mt-5 me-4" onClick={handleLogout}>Logout <i className="ms-3 fa-regular fa-right-from-bracket"></i></button>
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