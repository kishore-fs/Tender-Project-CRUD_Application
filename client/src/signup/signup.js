import React from "react";
import './signup.css';
import axios from "axios";
import { Link } from "react-router-dom";

export function Signup(){
    function triger(event){
        event.preventDefault(event)
            var Name=document.getElementById("name").value
            var Email=document.getElementById("email").value
            var Phone=document.getElementById("phone").value
            var Address=document.getElementById("address").value
            var City=document.getElementById("city").value
            var Password=document.getElementById("password").value

            var key={
                Name:Name,
                Email:Email,
                Phone:Phone,
                Address:Address,
                City:City,
                Password:Password
            }
            if(Name==''){
                alert("enter the Name")
            }
            else if(Email==''){
                alert("enter the Email")
            }
            else if(Phone==''){
                alert("enter the Phone")
            }
            else if(Address==''){
                alert("enter the Address")
            }
            else if(City==''){
                alert("enter the City")
            }
            else if(Password==''){
                alert("enter the Password")
            }
            
            else{
                axios.post("http://localhost:3010/newLogin",key)
                .then((res)=>{
                    if(res.data.status==="error"){
                        alert("Re-enter the values")
                        window.location.reload()
                    }
                    else if(res.data.status==="success"){
                        alert("Account created")
                        window.location.href='/login'
                    }
                }
                )
            }
        }
    return(
        <>
        <div className="bgMain container-fluid vh-100  d-flex justify-content-center align-items-center ">
        <form className="mainForm shadow rounded" onSubmit={triger}>
            <div className="text-center">
                <h1>TENDER🔪MEATS&FISHES</h1>
            </div>
            <div>
                <label for="name">Name</label>
                <input type="text" className="form-control" id="name" required/>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" required/>
            </div>
            <div>
                <label for="phone">Phone</label>
                <input type="tel" className="form-control" id="phone" required/>
            </div>
            <div>
                <label for="address">Address</label>
                <textarea  className="form-control" id="address" required></textarea>
            </div>
            <div>
                <label for="city">City</label>
                <input type="text"  className="form-control" id="city" required/>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password"  className="form-control" id="password" required/>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-danger my-2 shadow">Register</button>
            </div>
            <div className="text-center">
                <h5>Aleady have a account?<Link to='/login' className="text-danger">LOGIN</Link></h5>
            </div>
        </form>
        </div>
        </>
    );
}