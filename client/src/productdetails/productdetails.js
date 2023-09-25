import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Productdetails(){
  const[chicken,setchicken]=useState('')
  const[boneless,setboneless]=useState('')
  const[liver,setliver]=useState('')
  const[leg,setleg]=useState('')
    useEffect(()=>{
        fetch("http://localhost:3010/chickenprice")
        .then(datavalue=>datavalue.json())
        .then((data)=>{
          setchicken(data[0].chicken)
          setboneless(data[0].boneless)
          setliver(data[0].liver)
          setleg(data[0].chickenleg)
        })
    },[])
    function update(event){
        event.preventDefault(event)
            var chicken=document.getElementById("chicken").value
            var boneless=document.getElementById("boneless").value
            var liver=document.getElementById("liver").value
            var leg=document.getElementById("leg").value

            var key={
                chicken:chicken,
                boneless:boneless,
                liver:liver,
                leg:leg,
            }
            if(chicken==""||boneless==""||liver==""||leg==""){
                alert("enter the value")
            }
            else{
                axios.put("http://localhost:3010/updatechicken/",key)
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
         <div className="container">
         <h1 className="text-danger"> PRODUCT PRICE</h1>
                <hr className="text-danger"></hr>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
        <form className="mainForm shadow rounded col-md-5 m-1"  onSubmit={update}>
            <div className="text-center">
                <h1>CHICKEN</h1>
            </div>
            <div>
                <label for="name">Chicken</label>
                <input type="text" className="form-control" id="chicken" value={chicken} onChange={(update)=>setchicken(update.target.value)} required/>
            </div>
            <div>
                <label for="email">Boneless</label>
                <input type="text" className="form-control" id="boneless" value={boneless} onChange={(update)=>setboneless(update.target.value)} required/>
            </div>
            <div>
                <label for="phone">Liver</label>
                <input type="text" className="form-control" id="liver" value={liver} onChange={(update)=>setliver(update.target.value)} required/>
            </div>
            <div>
                <label for="address">Chickenleg</label>
                <input type="text" className="form-control" id="leg" value={leg} onChange={(update)=>setleg(update.target.value)} required/>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-danger my-2 shadow">Update</button>
            </div>
        </form>
        <form className="mainForm shadow rounded col-md-5 m-1" onSubmit={update}>
            <div className="text-center">
                <h1>SEAFOOD</h1>
            </div>
            <div>
                <label for="name">White Pomfret</label>
                <input type="text" className="form-control" id="chicken" value={chicken} onChange={(update)=>setchicken(update.target.value)} required/>
            </div>
            <div>
                <label for="email">Atlantic Salmon</label>
                <input type="text" className="form-control" id="boneless" value={boneless} onChange={(update)=>setboneless(update.target.value)} required/>
            </div>
            <div>
                <label for="phone">Prawns</label>
                <input type="text" className="form-control" id="liver" value={liver} onChange={(update)=>setliver(update.target.value)} required/>
            </div>
            <div>
                <label for="address">Squid</label>
                <input type="text" className="form-control" id="leg" value={leg} onChange={(update)=>setleg(update.target.value)} required/>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-danger my-2 shadow">Update</button>
            </div>
        </form>
        </div>
        
        </div>
        <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
        <form className="mainForm shadow rounded col-md-6 m-1"  onSubmit={update}>
            <div className="text-center">
                <h1>MUTTON</h1>
            </div>
            <div>
                <label for="name">Mutton</label>
                <input type="text" className="form-control" id="chicken" value={chicken} onChange={(update)=>setchicken(update.target.value)} required/>
            </div>
            <div>
                <label for="email">Mutton leg</label>
                <input type="text" className="form-control" id="boneless" value={boneless} onChange={(update)=>setboneless(update.target.value)} required/>
            </div>
            <div>
                <label for="phone">Mutton boneless</label>
                <input type="text" className="form-control" id="liver" value={liver} onChange={(update)=>setliver(update.target.value)} required/>
            </div>
            <div>
                <label for="address">Mutton bone</label>
                <input type="text" className="form-control" id="leg" value={leg} onChange={(update)=>setleg(update.target.value)} required/>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-danger my-2 shadow">Update</button>
            </div>
        </form>
        <form className="mainForm shadow rounded col-md-6 m-1" onSubmit={update}>
            <div className="text-center">
                <h1>DRY FISH</h1>
            </div>
            <div>
                <label for="name">Tuna fish
</label>
                <input type="text" className="form-control" id="chicken" value={chicken} onChange={(update)=>setchicken(update.target.value)} required/>
            </div>
            <div>
                <label for="email">Dry king fish</label>
                <input type="text" className="form-control" id="boneless" value={boneless} onChange={(update)=>setboneless(update.target.value)} required/>
            </div>
            <div>
                <label for="phone">Dry Small Shrimp</label>
                <input type="text" className="form-control" id="liver" value={liver} onChange={(update)=>setliver(update.target.value)} required/>
            </div>
            <div>
                <label for="address">Dry Prawns</label>
                <input type="text" className="form-control" id="leg" value={leg} onChange={(update)=>setleg(update.target.value)} required/>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-danger my-2 shadow">Update</button>
            </div>
        </form>
        </div>
        </div>
          <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
        <form className="mainForm shadow rounded col-md-6 m-1"  onSubmit={update}>
            <div className="text-center">
                <h1>PICKLE</h1>
            </div>
            <div>
                <label for="name">Chicken Pickle</label>
                <input type="text" className="form-control" id="chicken" value={chicken} onChange={(update)=>setchicken(update.target.value)} required/>
            </div>
            <div>
                <label for="email">Mutton Pickle</label>
                <input type="text" className="form-control" id="boneless" value={boneless} onChange={(update)=>setboneless(update.target.value)} required/>
            </div>
            <div>
                <label for="phone">Prawns Pickle</label>
                <input type="text" className="form-control" id="liver" value={liver} onChange={(update)=>setliver(update.target.value)} required/>
            </div>
            <div>
                <label for="address">Fish Pickle</label>
                <input type="text" className="form-control" id="leg" value={leg} onChange={(update)=>setleg(update.target.value)} required/>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-danger my-2 shadow">Update</button>
            </div>
        </form>
        <form className="mainForm shadow rounded col-md-6 m-1" onSubmit={update}>
            <div className="text-center">
                <h1>EGG</h1>
            </div>
            <div>
                <label for="name">White Egg</label>
                <input type="text" className="form-control" id="chicken" value={chicken} onChange={(update)=>setchicken(update.target.value)} required/>
            </div>
            <div>
                <label for="email">White Egg</label>
                <input type="text" className="form-control" id="boneless" value={boneless} onChange={(update)=>setboneless(update.target.value)} required/>
            </div>
            <div>
                <label for="phone">Quail Egg</label>
                <input type="text" className="form-control" id="liver" value={liver} onChange={(update)=>setliver(update.target.value)} required/>
            </div>
            <div>
                <label for="address">Mixed Egg</label>
                <input type="text" className="form-control" id="leg" value={leg} onChange={(update)=>setleg(update.target.value)} required/>
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-danger my-2 shadow">Update</button>
            </div>
        </form>
        </div>
        </div>
        
        </div>
        </>
    );
}