import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";


export function Chicken(){

  const[count1,setCount1]=useState(0)
  const[count2,setCount2]=useState(0)
  const[count3,setCount3]=useState(0)
  const[count4,setCount4]=useState(0)

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
  })

  var {id}=useParams()
  const[name,setFirstname]=useState('')
  const[idmain,setId]=useState('')
  useEffect(()=>{
      fetch("http://localhost:3010/userdata/"+id)
      .then(value=>value.json())
      .then((data)=>{
          setFirstname(data[0].Name)
          setId(data[0].id)
      })
  })
    function triger(event){
        event.preventDefault(event)
            var product_1=document.getElementById("chicken").value
            var product_2=document.getElementById("boneless").value
            var product_3=document.getElementById("eeral").value
            var product_4=document.getElementById("leg").value
            var kg_1=document.getElementById("kg_1").value
            var kg_2=document.getElementById("kg_2").value
            var kg_3=document.getElementById("kg_3").value
            var kg_4=document.getElementById("kg_4").value
            var id=document.getElementById("idbtn").value

            var key={
              product_1:product_1,
              product_2:product_2,
              product_3:product_3,
              product_4:product_4,
              kg_1:kg_1,
              kg_2:kg_2,
              kg_3:kg_3,
              kg_4:kg_4,
              id:id
            }
            if(kg_1=='0'&&kg_2=='0'&&kg_3=='0'&&kg_4=='0'){
                alert("enter value")
            }
            
            else{
                axios.post("http://localhost:3010/chicken",key)
                .then((res)=>{
                    if(res.data.status==="error"){
                        alert("Re-enter the values")
                        window.location.reload()
                    }
                    else if(res.data.status==="success"){
                        alert("ORDER CONFORM")
                    }
                }
                )
            }
        }
    return(
        <>
        <div className="container-fluid bg-light">
    <div className="container col-md-10">
        <h1 className="text-danger">CHICKEN</h1>
        <hr className="text-danger"></hr>
        <div className="d-flex align-items-center justify-content-center">
      <div className="row mt-5">
      {/* {Chickendetails.map((index,value)=>( */}
         <div className="container col-md-3 text-center">
         <div className="card my-3 text-dark shadow">
         <div className="row">
               <div className="p-3">
                 <img
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzs3rPKi4kvvapt44fW4UyayCt4CRkil50Xg&usqp=CAU"
                   className="img-fluid rounded "
                   alt="..."
                   style={{ width: '13rem',height:'8rem' }}
                 />
               </div>
           <div className="card-body text-center">
               <div className="">
                 <h5 className="card-title">
                   Chicken
                 </h5>
                 <p className="card-text">{chicken}</p>
                 <div className="container col-md-12">
                  <button className="btnProduct btn bg-danger me-1"  onClick={()=>{setCount1(count1+1)}}>+</button> 
                 <input type="text" id="kg_1" className="textSize" value={count1}></input>
                 <button className="btnProduct btn bg-danger ms-1" onClick={()=>{setCount1(count1-1)}}>-</button> 
                 </div>
                 <div className="container col-md-12 p-2">
                 <input type="text" className="btnConform" id="chicken" value="Chicken"></input>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
      {/* ))} */}
      <div className="container col-md-3 text-center">
         <div className="card my-3 text-dark shadow">
         <div className="row">
               <div className="p-3">
                 <img
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1UCXs4chMBE0XzxwdeBTgs1L2KV7TNXRR5gEbBENy_VvM0fmDq86-f62EZjgstFHLtEU&usqp=CAU"
                   className="img-fluid rounded "
                   alt="..."
                   style={{ width: '13rem',height:'8rem' }}
                 />
               </div>
           <div className="card-body text-center">
               <div className="">
                 <h5 className="card-title">
                   Boneless
                 </h5>
                 <p className="card-text">{boneless}</p>
                 <div className="container col-md-12">
                  <button className="btnProduct btn bg-danger me-1" onClick={()=>{setCount2(count2+1)}}>+</button> 
                 <input type="text" id="kg_2" className="textSize" value={count2}></input>
                 <button className="btnProduct btn bg-danger ms-1" onClick={()=>{setCount2(count2-1)}}>-</button> 
                 </div>
                 <div className="container col-md-12 p-2">
                 <input type="text" className="btnConform " id="boneless" value="boneless"></input>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="container col-md-3 text-center">
         <div className="card my-3 text-dark shadow">
         <div className="row">
               <div className="p-3">
                 <img
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzz9gSRbhOneJwRAMUrcPqz4BJMgHSYqR6w&usqp=CAU"
                   className="img-fluid rounded "
                   alt="..."
                   style={{ width: '13rem',height:'8rem' }}
                 />
               </div>
           <div className="card-body text-center">
               <div className="">
                 <h5 className="card-title">
                   Chicken liver
                 </h5>
                 <p className="card-text">{liver}</p>
                 <div className="container col-md-12">
                  <button className="btnProduct btn bg-danger me-1" onClick={()=>{setCount3(count3+1)}}>+</button> 
                 <input type="text" id="kg_3" className="textSize" value={count3}></input>
                 <button className="btnProduct btn bg-danger ms-1" onClick={()=>{setCount3(count3-1)}}>-</button> 
                 </div>
                 <div className="container col-md-12 p-2">
                 <input type="text" className="btnConform " id="eeral" value="eeral"></input>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="container col-md-3 text-center">
         <div className="card my-3 text-dark shadow">
         <div className="row">
               <div className="p-3">
                 <img
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2rzZy9hkQDFHlfb3d8ndX5jmiSockB75Mpb3KSxepfupuKfQhshLbC5QVPDjgK2LE1yk&usqp=CAU"
                   className="img-fluid rounded "
                   alt="..."
                   style={{ width: '13rem',height:'8rem' }}
                 />
               </div>
           <div className="card-body text-center">
               <div className="">
                 <h5 className="card-title">
                   Chicken leg
                 </h5>
                 <p className="card-text">{leg}</p>
                 <div className="container col-md-12">
                  <button className="btnProduct btn bg-danger me-1" onClick={()=>{setCount4(count4+1)}}>+</button> 
                 <input type="text" id="kg_4" className="textSize" value={count4}></input>
                 <button className="btnProduct btn bg-danger ms-1" onClick={()=>{setCount4(count4-1)}}>-</button> 
                 </div>
                 <div className="container col-md-12 p-2">
                 <input type="text" className="btnConform col-md-4" id="leg" value="Chicken leg"></input>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <button type="submit" onClick={triger} value={idmain} id="idbtn" className="btn bg-danger mt-2 mb-5 text-light" >ORDER</button>
       
</div>
</div>
</div>
</div>
        </>
    );
}