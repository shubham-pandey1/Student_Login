import React, { useContext, useEffect } from "react";
import stuContext from "../context/stuContext";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const context = useContext(stuContext);
    const Navigate = useNavigate();

    const {details, getDetails} = context;
    
    useEffect(()=>{
        if(localStorage.getItem('token'))
            getDetails();
        else
            Navigate("/");
      },[ Navigate]);

    return(
        <div className="row w-100">
                        <div className="card mb-3 ms-4 bg-info-subtle" >
                            <div className="card-body">
                                <h5 className="card-title"><i className="fa-2x fa-regular fa-graduation-cap"></i></h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Students</h6>
                                <div className="position-relative mt-5">
                                    <div className="position-absolute bottom-0 end-0"><h3><b>{details.length}</b></h3></div>
                                </div>
                            </div>
                           </div>
                        <div className="card mb-3 bg-warning-subtle" >
                            <div className="card-body">
                                <h5 className="card-title"><i className="fa-2x fa-sharp fa-regular fa-bookmark"></i></h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Course</h6>
                                <div className="position-relative mt-5">
                                    <div className="position-absolute bottom-0 end-0"><h3><b>13</b></h3></div>
                                </div>
                            </div>
                           </div>
                        <div className="card mb-3 bg-danger-subtle" >
                            <div className="card-body">
                                <h5 className="card-title"><i className="fa-2x fa-light fa-square-dollar me-3"></i></h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Payment</h6>
                                <div className="position-relative mt-5">
                                    <span className="position-absolute bottom-0 end-0"><b className="price"><h6>INR</h6><h3> 556,000</h3></b></span>
                                </div> 
                            </div>
                           </div>
                        <div className="card mb-3 user" >
                            <div className="card-body">
                                <h5 className="card-title"><i className="fa-2x fa-light fa-user"></i></h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Users</h6>
                                <div className="position-relative mt-5">
                                    <div className="position-absolute bottom-0 end-0"><b><h3>243</h3></b></div>
                                </div> 
                            </div>
                           </div>
                        </div>
    )
}

export default Home;