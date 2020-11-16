import React from 'react'
import './Myprofile.css'

function MyProfile() {
    const Update = e =>{
        e.preventDefault()
    }
    return (
      <>
        <div className="mainContainer">
          <div className="subContainer">
            <div className="header">
              <div className="headerContent">
                <h5>My Profile</h5>
                <p>Change Password</p>
              </div>
            </div>
            <div className="maincontainer2">
              <div className="container-fluid ProfileData">
                <form>
                  <div className="form-group row">
                    <label for="inputPassword" className="col-sm-2 col-md-4  col-form-label">
                      Full Name 
                    </label>
                    <div className="col-sm-10 col-md-8">
                      <input
                        type="text"
                        className="form-control "
                        id="inputPassword"
                        placeholder="..."
                        value='Dennis Smith'
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputPassword" className="col-sm-2 col-md-4  col-form-label">
                      Email 
                    </label>
                    <div className="col-sm-10 col-md-8">
                      <input
                        type="text"
                        className="form-control "
                        id="inputPassword"
                        placeholder="..."
                        value='Dennis@gmail.com'
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputPassword" className="col-sm-2 col-md-4  col-form-label">
                      Number 
                    </label>
                    <div className="col-sm-10 col-md-8">
                      <input
                        type="text"
                        className="form-control "
                        id="inputPassword"
                        placeholder="..."
                        value='(569)570-6941'
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputPassword" className="col-sm-2 col-md-4  col-form-label">
                      Country 
                    </label>
                    <div className="col-sm-10 col-md-8">
                      <input
                        type="text"
                        className="form-control "
                        id="inputPassword"
                        placeholder="..."
                        value='Martinique'
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="inputPassword" className="col-sm-2 col-md-4  col-form-label">
                      City 
                    </label>
                    <div className="col-sm-10 col-md-8">
                      <input
                        type="text"
                        className="form-control "
                        id="inputPassword"
                        placeholder="..."
                        value='Montreal'
                      />
                    </div>
                  </div> 
                  <div className="btnUpdate mt-4">
                  <button type="submit" onClick={Update} class="btn w-50  ">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> <br/>
      </>
    );
}

export default MyProfile
