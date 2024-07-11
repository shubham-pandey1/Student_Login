import React,{useContext, useEffect,useRef, useState} from "react";
import stuContext from "../context/stuContext";
import { useNavigate } from "react-router-dom";


const Studentlist = () => {

  const ref = useRef(null);
  const refClose = useRef(null);
  const Navigate = useNavigate();
  const context = useContext(stuContext);
  const {details,getDetails,deleteStudent, editDetail,addDetail} = context;
  
  

  const [aDetail, setADetail] = useState({aName:"", aEmail:"", aPhone:"", aEnrollNo:"", aDOA:""});
  
  const addDet = (e)=>{
    addDetail(aDetail.aName, aDetail.aEmail, aDetail.aPhone, aDetail.aEnrollNo, aDetail.aDOA);
    setADetail({aName:"", aEmail:"", aPhone:"", aEnrollNo:"", aDOA:""});
    e.preventDefault();
    console.log("Detail added successfully");
  }
  useEffect(()=>{
  if(localStorage.getItem('token'))
      getDetails();
  else
      Navigate("/");
},[ Navigate]);

const scrollDown=()=>{
  window.scrollBy(0,500);
}

const scrollUp=()=>{
  window.scrollBy(0,-500);
}

const updateDetail = (currentDetail)=>{
  ref.current.click();
  setDetail({id:currentDetail._id, eName:currentDetail.Name, eEmail:currentDetail.Email, ePhone:currentDetail.Phone, eEnrollNo:currentDetail.EnrollNo, eDOA:currentDetail.DOA});
}

const[detail, setDetail] = useState({id:"", eName:"", eEmail:"", ePhone:"", eEnrollNo:"", eDOA:""})

  const handleClick=(e)=>{
    e.preventDefault();
    console.log("Updating Details.... " + detail);
    editDetail(detail.id, detail.eName, detail.eEmail, detail.ePhone, detail.eEnrollNo, detail.eDOA);
    refClose.current.click();
    console.log("Details updated successfully!");
  }
// this is for update detail
  const onChange=(e)=>{
    setDetail({...detail, [e.target.id]: e.target.value});
  }
// this one is for adding detail
const onChangea=(e)=>{
  setADetail({...aDetail, [e.target.id]:e.target.value});
}


  return (
    <div className="bg-body-tertiary">
      <div className="row px-0 mx-0 border-bottom">
        <div className="col-md-6 pb-3 ">
          <h3 className="top-2">Student List</h3>
        </div>
        <div className="col-md-6 position-relative ">

          <div className="position-absolute end-0">

            <table className="me-4 navtable">
              <tbody>
                <tr>
                  <td className="button-container">
                    <button type="button" className="btn border-0 text-warning p-0 togg"><i className="fa-2x fa-sharp fa-light fa-caret-up p-0" onClick={scrollUp}></i></button>
                    <button type="button" className="btn border-0 text-warning p-0 togg"><i className="fa-2x fa-sharp fa-light fa-caret-down p-0" onClick={scrollDown}></i></button>
                  </td>
                  <td>


                    <button type="button" className="btn btn-warning mt-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      ADD NEW STUDENT
                    </button>


                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-body-secondary">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel1">Add Student</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <form>
                          <div className="modal-body mx-5">
                              <div className="row mb-3 me-5">
                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Name</label>
                                <div className="col-sm-7">
                                  <input type="text" className="form-control" id="aName" name="aName" required onChange={onChangea} value={aDetail.aName} placeholder="Enter Name"/>
                                </div>
                              </div>
                              <div className="row mb-3 me-5">
                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-7">
                                  <input type="email" className="form-control" id="aEmail" name="aEmail" required onChange={onChangea} value={aDetail.aEmail} placeholder="Enter Email"/>
                                </div>
                              </div>
                              <div className="row mb-3 me-5">
                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Phone</label>
                                <div className="col-sm-7">
                                  <input type="number" className="form-control" id="aPhone" name="aPhone" required onChange={onChangea} value={aDetail.aPhone} placeholder="Enter Phone Number"/>
                                </div>
                              </div>
                              <div className="row mb-3 me-5">
                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Enroll Number</label>
                                <div className="col-sm-7">
                                  <input type="number" className="form-control" id="aEnrollNo" name="aEnrollNo" required onChange={onChangea} value={aDetail.aEnrollNo} placeholder="Enter Enrollment Number"/>
                                </div>
                              </div>
                              <div className="row mb-3 me-5">
                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Date of admission</label>
                                <div className="col-sm-7">
                                  <input type="date" className="form-control" id="aDOA" name="aDOA" required onChange={onChangea} value={aDetail.aDOA} placeholder="Enter Date of Admission"/>
                                </div>
                              </div>
                              <div className="row mb-4 me-5">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-5 d-grid">
                                  <button type="submit" className="btn btn-warning text-light" data-bs-dismiss="modal" onClick={addDet}> Submit</button>
                                </div>
                              </div>
                              
                              
                          </div>
                          
                          </form>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
      <div className="row px-0 mx-0 mt-3 ">
        <div className="container px-5">
        <table className="table stu">
  <thead>
    <tr>
      <th className="col-md-1">Name</th>
      <th className="col-md-2">Email</th>
      <th className="col-md-1">Phone</th>
      <th className="col-md-2">Enroll Number</th>
      <th className="col-md-2">Date of admission</th>
      <th className="col-md-2"></th>
    </tr>
  </thead>
  <tbody>
    {details.map((detail) => (
      <React.Fragment key={detail._id}>
        <tr className="bor px-0 mx-0 grid">
          <td>{detail.Name}</td>
          <td>{detail.Email}</td>
          <td>{detail.Phone}</td>
          <td>{detail.EnrollNo}</td>
          <td>{new Date(detail.DOA).toLocaleDateString()}</td>
          <td>
            <button
              type="button"
              className="btn border-0 text-warning"
              onClick={() => { updateDetail(detail); }}
            >
              <i className="fa-light fa-pen me-1"></i>
            </button>
            <button
              type="button"
              className="btn border-0 text-warning"
              onClick={() => { deleteStudent(detail._id); }}
            >
              <i className="fa-sharp fa-light fa-trash ms-1"></i>
            </button>
          </td>
        </tr>
        <tr key={`spacer-${detail._id}`}>
          <td colSpan="6" className="bg-body-tertiary"><br /></td>
        </tr>
      </React.Fragment>
    ))}
  </tbody>
</table>

        </div>
      </div>
      <button type="button" ref={ref} className="btn btn-warning mt-1 d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
                      Edit Detail
                    </button>


                    <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-body-secondary">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel1">Edit Student Details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <form>
                          <div className="modal-body mx-5">
                              <div className="row mb-3 me-5">
                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Name</label>
                                <div className="col-sm-7">
                                  <input type="text" className="form-control" id="eName" name="eName" value={detail.eName} onChange={onChange} placeholder="Enter Name"/>
                                </div>
                              </div>
                              <div className="row mb-3 me-5">
                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-7">
                                  <input type="email" className="form-control" name="eEmail" id="eEmail" value={detail.eEmail} placeholder="Enter email" onChange={onChange}/>
                                </div>
                              </div>
                              <div className="row mb-3 me-5">
                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Phone</label>
                                <div className="col-sm-7">
                                  <input type="number" className="form-control" name="ePhone" id="ePhone" value={detail.ePhone} onChange={onChange} placeholder="Enter phone number"/>
                                </div>
                              </div>
                              <div className="row mb-3 me-5">
                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Enroll Number</label>
                                <div className="col-sm-7">
                                  <input type="number" className="form-control" id="eEnrollNo" name="eEnrollNo" onChange={onChange} placeholder="Enter enrollment number" value={detail.eEnrollNo}/>
                                </div>
                              </div>
                              <div className="row mb-3 me-5">
                                <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">Date of admission</label>
                                <div className="col-sm-7">
                                  <input type="date" className="form-control" id="eDOA" name="eDOA" placeholder="Enter date of admission" value={((new Date(detail.eDOA)).getFullYear()+"-"+('0' + (new Date(detail.eDOA).getMonth() + 1)).slice(-2)+"-"+('0' + (new Date(detail.eDOA).getDate())).slice(-2))} onChange={onChange}/>
                                </div>
                              </div>
                              <div className="row mb-4 me-5">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-5 d-grid">
                                  <button type="submit" ref={refClose} className="btn btn-warning text-light" data-bs-dismiss="modal" onClick={handleClick}> Save Changes </button>
                                </div>
                              </div>
                              
                              
                          </div>
                          
                          </form>
                        </div>
                      </div>
                    </div>

    </div>
  )
}
export default Studentlist;