import axios from "axios";
import React, { useEffect, useState } from "react";

export function Persondetails(){
    const[fetchinput,setfetchinput]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3010/customerdetails")
        .then(datavalue=>datavalue.json())
        .then(extractvalue=>setfetchinput(extractvalue))
    })
    const delt=(id)=>{
        var key={id:id}
        axios.post("http://localhost:3010/delete",key)
        .then((res)=>{
            if(res.data.status==="error"){
                alert('Data are not deleted')
            }
            else if(res.data.status==="success"){
                alert('Data are deleted')
            }
        })
    }
    return(
        <>
<div className="container-fluid bg-light">
    <div className="container">
        <h1 className="text-danger">CUSTOMER DETAILS</h1>
        <hr className="text-danger"></hr>
    <div className="p-5">
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fetchinput.map((value,index)=>(
                            <tr className="table-active">
                                <td>{value.Name}</td>
                                <td>{value.Email}</td>
                                <td>{value.Phone}</td>
                                <td>{value.Address}</td>
                                <td>{value.City}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => { delt(value.id) }}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    </div>
</div>
        </>
    );
}