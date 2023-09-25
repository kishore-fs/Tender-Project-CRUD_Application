import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export function Updatepage(){
    var {id}=useParams()
    const[Name,setName]=useState('')
    const[Email,setEmail]=useState('')
    const[Phone,setPhone]=useState('')
    const[Address,setAddress]=useState('')
    const[City,setCity]=useState('')
    const[Password,setPassword]=useState('')
    useEffect(()=>{
        fetch("http://localhost:3010/userdata/"+id)
        .then(value=>value.json())
        .then((data)=>{
            setName(data[0].Name)
            setEmail(data[0].Email)
            setPhone(data[0].Phone)
            setAddress(data[0].Address)
            setCity(data[0].city)
            setPassword(data[0].Password)
        })
    },[])
    function update(event){
        event.preventDefault(event)
            var Name=document.getElementById("Name").value
            var Email=document.getElementById("Email").value
            var Phone=document.getElementById("Phone").value
            var Address=document.getElementById("Address").value
            var City=document.getElementById("City").value
            var Password=document.getElementById("Password").value

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
                axios.put("http://localhost:3010/update/"+id,key)
                .then((res)=>{
                    if(res.data.status==="error"){
                        alert("data are not updated")
                        window.location.reload()
                    }
                    else if(res.data.status==="success"){
                        alert("data are updated")
                    }
                }
                )
            }
        }
    return(
        <>
        <div className="bgMain container-fluid vh-100 d-flex justify-content-center align-items-center ">
        <form className="mainForm shadow rounded" onSubmit={update}>
            <div className="text-center">
                <h1>TENDER🔪MEATS&FISHES</h1>
            </div>
            <div>
                <label for="name">Name</label>
                <input type="text" className="form-control" id="Name" value={Name} onChange={(update)=>setName(update.target.value)} required/>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" className="form-control" id="Email" value={Email} onChange={(update)=>setEmail(update.target.value)} required/>
            </div>
            <div>
                <label for="phone">Phone</label>
                <input type="tel" className="form-control" id="Phone" value={Phone} onChange={(update)=>setPhone(update.target.value)} required/>
            </div>
            <div>
                <label for="address">Address</label>
                <textarea  className="form-control" id="Address" value={Address} onChange={(update)=>setAddress(update.target.value)} required></textarea>
            </div>
            <div>
                <label for="city">City</label>
                <input type="text"  className="form-control" id="City" value={City} onChange={(update)=>setCity(update.target.value)} required/>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password"  className="form-control" id="Password" value={Password} onChange={(update)=>setPassword(update.target.value)} required/>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-danger my-2 shadow">Update</button>
            </div>
        </form>
        </div>
        </>
    );
}