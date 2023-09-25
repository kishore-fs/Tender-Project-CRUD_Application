import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Login(){
    function triger(event){
        event.preventDefault(event)
        var Email=document.getElementById("email").value
        var Password=document.getElementById("password").value

        
        var key={
            Email:Email,
            Password:Password
        }
        if(Email==''){
            alert("enter the Email")
        }
        else if(Password==''){
            alert("enter the password")
        }
        else if(Email=='kishoreravichandran5@gmail.com'){
            axios.post("http://localhost:3010/login",key)
            .then((res)=>{
                if(res.data.status==="emptyset"){
                    alert("plz enter username or register a new one")
                }
                else if(res.data.status==="success"){
                    var id=res.data.id
                    alert("login success")
                    window.location.href=`/admin/${id}`
                }
                else if(res.data.status==="invalid_user"){
                    alert("plz check you password")
                }
                else{
                    alert("access not allow")
                }

             })
        }
        else{
             axios.post("http://localhost:3010/login",key)
            .then((res)=>{
                if(res.data.status==="emptyset"){
                    alert("plz enter username or register a new one")
                }
                else if(res.data.status==="success"){
                    var id=res.data.id
                    alert("login success")
                    window.location.href=`/home/${id}`
                }
                else if(res.data.status==="invalid_user"){
                    alert("plz check you password")
                }
                else if(res.data.status==="error"){
                    alert("all data are invaild")
                }
                else{
                    alert("plz register you detalis first")
                }

             })

        }
    }

    
    return(
        <>
        <div className="bgMain container-fluid vh-100 d-flex justify-content-center align-items-center">
        <form className="mainForm shadow rounded" onSubmit={triger}>
            <div className="text-center">
                <h1>TENDER🔪MEATS&FISHES</h1>
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" required/>
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password"  className="form-control" id="password" required/>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-danger my-2 shadow">Login</button>
            </div>
            <div className="text-center">
                <h5>Create a account?<Link to='/signup' className="text-danger">Signup</Link></h5>
            </div>
        </form>
        </div>
        </>
    );
}