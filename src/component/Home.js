import React from "react";

const Home = ()=>{
    return(
        <div className="row w-100">
                        <div class="card ms-4 bg-info-subtle" >
                            <div class="card-body">
                                <h5 class="card-title"><i class="fa-2x fa-regular fa-graduation-cap"></i></h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Students</h6>
                                <div class="position-relative mt-5">
                                    <div class="position-absolute bottom-0 end-0"><h3><b>243</b></h3></div>
                                </div>
                            </div>
                           </div>
                        <div class="card bg-warning-subtle" >
                            <div class="card-body">
                                <h5 class="card-title"><i class="fa-2x fa-sharp fa-regular fa-bookmark"></i></h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Course</h6>
                                <div class="position-relative mt-5">
                                    <div class="position-absolute bottom-0 end-0"><h3><b>13</b></h3></div>
                                </div>
                            </div>
                           </div>
                        <div class="card bg-danger-subtle" >
                            <div class="card-body">
                                <h5 class="card-title"><i class="fa-2x fa-light fa-square-dollar me-3"></i></h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Payment</h6>
                                <div class="position-relative mt-5">
                                    <span class="position-absolute bottom-0 end-0"><b className="price"><h6>INR</h6><h3> 556,000</h3></b></span>
                                </div> 
                            </div>
                           </div>
                        <div class="card user" >
                            <div class="card-body">
                                <h5 class="card-title"><i class="fa-2x fa-light fa-user"></i></h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">Users</h6>
                                <div class="position-relative mt-5">
                                    <div class="position-absolute bottom-0 end-0"><b><h3>243</h3></b></div>
                                </div> 
                            </div>
                           </div>
                        </div>
    )
}

export default Home;