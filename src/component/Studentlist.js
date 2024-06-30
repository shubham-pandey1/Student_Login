import React from "react";

const Studentlist = () => {
  return (
    <div className="bg-body-tertiary">
      <div className="row px-0 mx-0 border-bottom">
        <div className="col-md-6 pb-3">
          <h3 className="top-2">Student List</h3>
        </div>
        <div className="col-md-6 position-relative">

          <div className="position-absolute end-0">

            <table className="me-4">
              <tbody>
                <tr>
                  <td className="button-container">
                    <button type="button" className="btn border-0 text-warning p-0 togg"><i className="fa-2x fa-sharp fa-light fa-caret-up p-0"></i></button>
                    <button type="button" className="btn border-0 text-warning p-0 togg"><i className="fa-2x fa-sharp fa-light fa-caret-down p-0"></i></button>
                  </td>
                  <td>


                    <button type="button" className="btn btn-warning mt-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                      ADD NEW STUDENT
                    </button>


                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content bg-body-secondary">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Add / Edit Student</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <form>
                          <div className="modal-body mx-5">
                              <div className="row mb-3 me-5">
                                <label for="inputEmail3" className="col-sm-4 col-form-label">Name</label>
                                <div className="col-sm-7">
                                  <input type="text" className="form-control" id="inputEmail3"/>
                                </div>
                              </div>
                              <div className="row mb-3 me-5">
                                <label for="inputEmail3" className="col-sm-4 col-form-label">Email</label>
                                <div className="col-sm-7">
                                  <input type="email" className="form-control" id="inputEmail3"/>
                                </div>
                              </div>
                              <div className="row mb-3 me-5">
                                <label for="inputEmail3" className="col-sm-4 col-form-label">Phone</label>
                                <div className="col-sm-7">
                                  <input type="number" className="form-control" id="inputEmail3"/>
                                </div>
                              </div>
                              <div className="row mb-3 me-5">
                                <label for="inputEmail3" className="col-sm-4 col-form-label">Enroll Number</label>
                                <div className="col-sm-7">
                                  <input type="number" className="form-control" id="inputEmail3"/>
                                </div>
                              </div>
                              <div className="row mb-3 me-5">
                                <label for="inputEmail3" className="col-sm-4 col-form-label">Date of admission</label>
                                <div className="col-sm-7">
                                  <input type="date" className="form-control" id="inputEmail3"/>
                                </div>
                              </div>
                              <div className="row mb-4 me-5">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-5 d-grid">
                                  <button type="submit" className="btn btn-warning text-light"> Submit</button>
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
            <tr>
              <th className="col-md-1">Name</th>
              <th className="col-md-2">Email</th>
              <th className="col-md-1">Phone</th>
              <th className="col-md-2">Enroll Number</th>
              <th className="col-md-2">Date of admission</th>
              <th className="col-md-2"></th>
            </tr>
            <tbody>
              <tr className="bor px-0 mx-0 grid row-gap-3 gap-0">
                <td>Karthi</td>
                <td>karthi@gmail.com</td>
                <td>7305477760</td>
                <td>123456705477760</td>
                <td>08-Dec, 2021</td>
                <td>
                  <button type="button" className="btn border-0 text-warning"><i className="fa-light fa-pen me-1"></i></button>
                  <button type="button" className="btn border-0 text-warning"><i className="fa-sharp fa-light fa-trash ms-1"></i></button>
                </td>
              </tr>
              <br />
              <tr className="bor px-0 mx-0">
                <td>Karthi</td>
                <td>karthi@gmail.com</td>
                <td>7305477760</td>
                <td>123456705477760</td>
                <td>08-Dec, 2021</td>
                <td>
                  <button type="button" className="btn border-0 text-warning"><i className="fa-light fa-pen me-1"></i></button>
                  <button type="button" className="btn border-0 text-warning"><i className="fa-sharp fa-light fa-trash ms-1"></i></button>
                </td>
              </tr>
              <br />
              <tr className="bor px-0 mx-0">
                <td>Karthi</td>
                <td>karthi@gmail.com</td>
                <td>7305477760</td>
                <td>123456705477760</td>
                <td>08-Dec, 2021</td>
                <td>
                  <button type="button" className="btn border-0 text-warning"><i className="fa-light fa-pen me-1"></i></button>
                  <button type="button" className="btn border-0 text-warning"><i className="fa-sharp fa-light fa-trash ms-1"></i></button>
                </td>
              </tr>
              <br />
              <tr className="bor px-0 mx-0">
                <td>Karthi</td>
                <td>karthi@gmail.com</td>
                <td>7305477760</td>
                <td>123456705477760</td>
                <td>08-Dec, 2021</td>
                <td>
                  <button type="button" className="btn border-0 text-warning"><i className="fa-light fa-pen me-1"></i></button>
                  <button type="button" className="btn border-0 text-warning"><i className="fa-sharp fa-light fa-trash ms-1"></i></button>
                </td>
              </tr>
              <br />
              <tr className="bor px-0 mx-0">
                <td>Karthi</td>
                <td>karthi@gmail.com</td>
                <td>7305477760</td>
                <td>123456705477760</td>
                <td>08-Dec, 2021</td>
                <td>
                  <button type="button" className="btn border-0 text-warning"><i className="fa-light fa-pen me-1"></i></button>
                  <button type="button" className="btn border-0 text-warning"><i className="fa-sharp fa-light fa-trash ms-1"></i></button>
                </td>
              </tr>
              <br />
              <tr className="bor px-0 mx-0">
                <td>Karthi</td>
                <td>karthi@gmail.com</td>
                <td>7305477760</td>
                <td>123456705477760</td>
                <td>08-Dec, 2021</td>
                <td>
                  <button type="button" className="btn border-0 text-warning"><i className="fa-light fa-pen me-1"></i></button>
                  <button type="button" className="btn border-0 text-warning"><i className="fa-sharp fa-light fa-trash ms-1"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}
export default Studentlist;