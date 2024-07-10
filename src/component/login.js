import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

import '../App.css';
const Login = () => {
    const [credentials,setCredentials] = useState({email:"", password:""});
    let Navigate = useNavigate();

    const handleSubmit= async(e)=>{
        e.preventDefault();
            const host = process.env.REACT_APP_HOST||"http://localhost:5000";
            
            const response = await fetch(`${host}/api/auth/login`, {
              method: "POST", // *GET, POST, PUT, DELETE, etc.
              
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({email:credentials.email, password:credentials.password})
              
            });
            const json = await response.json();
            
        
            if(json.success){
                //redirect
                localStorage.setItem("token", json.authtoken);
                console.log("Logged in Successfully","success");
                Navigate("/dashboard");
            }
            else{
                alert("Invalid id or password!")
            }
          }
          

          const onChange=(e)=>{
            setCredentials({...credentials, [e.target.name]: e.target.value})
          }
    return(
        <div className="background" >
            <div className="container pt-2">
                <div className='col-md-5 mt-5 mx-auto bg-light rounded-5'>

                    <form className='px-5 py-5' onSubmit={handleSubmit}>
                        <div className="text-center">
                            <h2 className='mb-4'> <b> <i className="fa-sharp fa-solid fa-pipe me-1 text-warning"></i></b>CRUD OPERATIONS</h2>
                            <h5>SIGN IN</h5>
                            <p>Enter your credentials to access your account</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={onChange} required aria-describedby="emailHelp" placeholder='Enter your email' />

                        </div>
                        <div className="mb-4">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={onChange} required name="password" placeholder='Enter your password' />
                        </div>
                        <div className="d-grid pb-5">
                            <button className="btn btn-warning"  type="submit" >SIGN IN</button>
                        </div>

                    </form>
                </div>
            </div>
    </div >
    )
}

export default Login;