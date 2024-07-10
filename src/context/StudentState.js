
import StuContext from "./stuContext";
import {useState} from 'react';
const host = process.env.REACT_APP_HOST||"http://localhost:5000";
const StudentState =(props)=>{
    
    const detInitial=[];
    
    const [user, setUser] = useState({_id:"", name:"", email:"",date:""});

    const [details, setDet] = useState(detInitial);

    ///Route:1 Getting details of all student
    const getDetails = async(_id, Name,Email, Phone, EnrollNo, DOA)=>{
    const response = await fetch(`${host}/api/student/fetchallstudent`,{
        method: "GET",

        headers:{
            "content-type": "application/json",
            "auth-token": localStorage.getItem('token')
        },
    });
    const json = await response.json();

    setDet(json);
} 

//Route:2  Add detail of student
const addDetail = async(Name, Email, Phone, EnrollNo, DOA)=>{
    // student api

    const response = await fetch(`${host}/api/student/addstudent`,{
        method: "POST", 

        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
        },

        body: JSON.stringify({Name, Email, Phone, EnrollNo, DOA}),
    });

    const detail = await response.json();
    setDet(details.concat(detail));
}

//Route:3 Delete a student
const deleteStudent = async(id)=>{
    // api call

    await fetch(`${host}/api/student/deletestudent/${id}`,{
        method: "DELETE",

        headers:{
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
        },
    });

    const newDetails = details.filter((detail)=>{
        return detail._id!==id
    });
    setDet(newDetails);
    
}
// Route 4: updating detail of student

const editDetail = async(id,Name, Email, Phone, EnrollNo, DOA)=>{
    // api call

    await fetch(`${host}/api/student/updatedetail/${id}`,{
        method: "PUT",

        headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({Name, Email, Phone, EnrollNo, DOA}),
    });

    // logic to edit in client

    let newDetails = JSON.parse(JSON.stringify(details));
    for(let index = 0; index< details.length; index++){
        const element = newDetails[index];
        if(element._id===id){
            newDetails[index].Name = Name;
            newDetails[index].Phone = Phone;
            newDetails[index].Email = Email;
            newDetails[index].EnrollNo = EnrollNo;
            newDetails[index].DOA = DOA;
            break;
        }
    }
    setDet(newDetails);
}

 ///Route:5 Getting details of user
 const getUser= async(e)=>{
    
        // const host = "http://localhost:5000";
        const response = await fetch(`${host}/api/auth/getuser`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token")
          },
          
          
        });
        const json = await response.json();
        
        setUser(json);
      }
 

return(
    <StuContext.Provider value = {{details, addDetail, deleteStudent, getDetails, editDetail, user,getUser}}>
        {props.children}
    </StuContext.Provider>
)
}

export default StudentState;