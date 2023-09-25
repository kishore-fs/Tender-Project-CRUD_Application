import React, { useEffect, useState } from "react";

export function Orderdetails(){
    const[fetchinput,setfetchinput]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3010/orderdetails")
        .then(datavalue=>datavalue.json())
        .then(extractvalue=>setfetchinput(extractvalue))
    })
    return(
        <>
        <div className="container-fluid">
            <div className="container">
                <h1 className="text-danger">ORDER DETAILS</h1>
                <hr className="text-danger"></hr>
    { fetchinput.map((value,index)=>(
        <div className="container col-md-10">
            
            <div className="card shadow">
                <div className="card-body row">
                    <div className="container col-md-4">
                    <div className="card-title">
                        <h5>#{value.id}</h5>
                    </div>
                    <div>
                        <h5>{value.Name}</h5>
                    </div>
                    </div>
                    <div className="container col-md-4">
                        <h5>Order details</h5>
                        <p>{value.product_1}    :   {value.kg_1}Kg</p>
                        <p>{value.product_2}    :   {value.kg_2}kg</p>
                        <p>{value.product_3}    :   {value.kg_3}kg</p>
                        <p>{value.product_4}    :   {value.kg_4}kg</p>
                    </div>
                    <div className="container col-md-4">
                        <h5>Address</h5>
                        <p>{value.Address}</p>
                        <p>{value.Phone}</p>
                        <p>{value.City}</p>
                    </div>
                </div>
            </div>
        </div>
    ))}
    </div>
    </div>
        </>
    );
}