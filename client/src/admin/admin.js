import React from "react";
import { Link } from "react-router-dom";

export function Admin(){
    return(
    <>
    <div className="container-fluid ">
    <div className="container col-md-10">
        <h1 className="text-danger">DASHBOARD</h1>
        <hr className="text-danger"></hr>
        <div className="d-flex align-items-center justify-content-center ">
      <div className="row mt-5">
      <div className="container col-md-6">
  <div className="card my-3 text-dark shadow">
    <div className="card-body text-center">
      <div className="row">
        <div className="col-md-4">
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBK9dEjDT4tFYTpyEbf_hed7OcxjRDxfWk8g&usqp=CAU'
            className="img-fluid rounded"
            alt="..."
            style={{ width: '13rem',height:'8rem' }}
          />
        </div>
        <div className="col-md-8 ">
          <h5 className="card-title">
            Order detalis
          </h5>
          <p className="card-text">tender meats&fishes</p>
          <Link to="/orderdetails" className="btn bg-danger text-light">View</Link>
        </div>
      </div>
    </div>
  </div>
</div>
      <div className="container col-md-6">
  <div className="card my-3 text-dark shadow">
    <div className="card-body text-center">
      <div className="row">
        <div className="col-md-4">
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkh_xiCPmV24D8soH9udSDM1NYsKYskYUjLmOnEDPLD5Q-vcCfIY7oRHuDhpxmfN1VWzw&usqp=CAU'
            className="img-fluid rounded"
            alt="..."
            style={{ width: '13rem',height:'8rem' }}
          />
        </div>
        <div className="col-md-8 ">
          <h5 className="card-title">
            customer detalis
          </h5>
          <p className="card-text">tender meats&fishes</p>
          <Link to="/persondetails" className="btn bg-danger text-light">View</Link>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container col-md-6">
  <div className="card my-3 text-dark shadow">
    <div className="card-body text-center">
      <div className="row">
        <div className="col-md-4">
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRigYHoyab9IdEL96Rr-RoagMaSwDBq0S9iGQ&usqp=CAU'
            className="img-fluid rounded"
            alt="..."
            style={{ width: '13rem',height:'8rem' }}
          />
        </div>
        <div className="col-md-8 ">
          <h5 className="card-title">
            Product detalis
          </h5>
          <p className="card-text">tender meats&fishes</p>
          <Link to="/productdetails" className="btn bg-danger text-light">View</Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div> 
</div>
</div>
    </>
    );
}