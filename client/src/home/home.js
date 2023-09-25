import React, { useEffect, useState } from "react";
import "./home.css";
import meat from "./meat.jpg"
import dryfood from "./dryfood.jpg"
import seafood from "./seafood.jpg"
import mutton from "./mutton.jpg"
import chicken from "./chichen.jpg"
import pickle from "./pickle.jpg"
import egg from "./egg.jpg"
import meats from "./meats1.jpg"
import { Link, useParams } from "react-router-dom";


export function Home(){
  var {id}=useParams()
  const[name,setFirstname]=useState('')
  useEffect(()=>{
      fetch("http://localhost:3010/userdata/"+id)
      .then(value=>value.json())
      .then((data)=>{
          setFirstname(data[0].Name)
      })
  })
    return(
        <>
        <h5 className="text-end me-3 "><Link to="/login" className="text-danger me-2">Logout</Link> <Link to={`/updatepage/${id}`} className="text-danger">Update</Link></h5>
        <div className="container-fluid">
        <div id="carouselExampleAutoplaying" class="carousel slide shadow " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={meat} class="carouselPic d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={meats} class="carouselPic d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
       <img src={meat} class="carouselPic d-block w-100" alt="..."/> vuhm
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
{/* END of carousel */}
<div className="container-fluid bg-light">
    <div className="container mt-3">
        <h1 className="text-danger">Shop by category</h1>
        <hr className="text-danger"></hr>
        <div className="d-flex align-items-center justify-content-center ">
      <div className="row mt-5">
      <div className="container col-md-6">
  <div className="card my-3 text-dark shadow">
    <div className="card-body text-center">
      <div className="row">
        <div className="col-md-4">
          <img
            src={chicken}
            className="img-fluid rounded"
            alt="..."
            style={{ width: '13rem',height:'8rem' }}
          />
        </div>
        <div className="col-md-6 ">
          <h5 className="card-title">
            CHICKEN
          </h5>
          <p className="card-text">High quality & fresh meat</p>
          <Link to={`/chicken/${id}`} className="btn bg-danger text-light">View product</Link>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container col-md-6">
  <div className="card my-3 text-dark shadow ">
    <div className="card-body text-center">
      <div className="row">
        <div className="col-md-4">
          <img
            src={seafood}
            className="img-fluid rounded"
            alt="..."
            style={{ width: '13rem',height:'8rem' }}
          />
        </div>
        <div className="col-md-6">
          <h5 className="card-title">
            SEA FOOD
          </h5>
          <p className="card-text">Ocean fish & high quality</p>
          <Link to={`/seafood/${id}`} className="btn bg-danger text-light">View product</Link>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container col-md-6">
  <div className="card my-3 text-dark shadow ">
    <div className="card-body text-center">
      <div className="row">
        <div className="col-md-4">
          <img
            src={mutton}
            className="img-fluid rounded"
            alt="..."
            style={{ width: '13rem',height:'8rem' }}
          />
        </div>
        <div className="col-md-6">
          <h5 className="card-title">
            MUTTON
          </h5>
          <p className="card-text">A rank mutton & freshmeat</p>
          <Link to={`/mutton/${id}`} className="btn bg-danger text-light">View product</Link>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container col-md-6">
  <div className="card my-3 text-dark shadow ">
    <div className="card-body text-center">
      <div className="row">
        <div className="col-md-4">
          <img
            src={dryfood}
            className="img-fluid rounded"
            alt="..."
            style={{ width: '13rem',height:'8rem'}}
          />
        </div>
        <div className="col-md-6">
          <h5 className="card-title">
          DRY FOOD
          </h5>
          <p className="card-text">Refrigerated food</p>
          <Link to={`/dryfood/${id}`} className="btn bg-danger text-light">View product</Link>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container col-md-6">
  <div className="card my-3 text-dark shadow ">
    <div className="card-body text-center">
      <div className="row">
        <div className="col-md-4">
          <img
            src={pickle}
            className="img-fluid rounded"
            alt="..."
            style={{ width: '13rem',height:'8rem'}}
          />
        </div>
        <div className="col-md-6">
          <h5 className="card-title">
          PICKLE
          </h5>
          <p className="card-text">Best taste and quality</p>
          <Link to={`/pickle/${id}`} className="btn bg-danger text-light">View product</Link>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container col-md-6">
  <div className="card my-3 text-dark shadow ">
    <div className="card-body text-center">
      <div className="row">
        <div className="col-md-4">
          <img
            src={egg}
            className="img-fluid rounded"
            alt="..."
            style={{ width: '13rem',height:'8rem'}}
          />
        </div>
        <div className="col-md-6">
          <h5 className="card-title">
          EGG
          </h5>
          <p className="card-text">Country egg</p>
          <Link to={`/egg/${id}`} className="btn bg-danger text-light">View product</Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div> 
</div>
</div>
{/* END OF PRODUCT */}
<div className="container-fluid bg-light">
    <hr></hr>
    <div className="container col-md-10">
        <div className="row">
            <div className="col-md-4"><h5>Company</h5>
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
            <li>Help & Support</li>
            </div>
            <div className="col-md-4"><h5>Address</h5>
            <li>389,venugopal layout,p.n.palayam,coimbatore</li>
            </div>
            <div className="col-md-4"><h5>Contact</h5>
            </div>
        </div>
    </div>
</div>
        </>
    );
}