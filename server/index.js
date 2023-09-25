const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")

const connect=express()

connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({extended:true}))


let mysqlconnection=database.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"KISHORE77*",
    database:"tender_meats_fishs"
})

mysqlconnection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("database is connected")
    }
})
connect.post('/newLogin',(request,response)=>{
    let {Name,Email,Phone,Address,City,Password}=request.body
    let sql='insert into customer(Name,Email,Phone,Address,City,Password,username)values(?,?,?,?,?,?,?)'
    mysqlconnection.query(sql,[Name,Email,Phone,Address,City,Password,Email],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})
connect.post('/login',(request,response)=>{
    let {Email,Password}=request.body
    let sql='select * from customer where Email=?'
    mysqlconnection.query(sql,[Email],(error,result)=>{
        if(error){
            response.send({"status":"emptyset"})
        }
        else if(result.length>0){
            let dbusername=result[0].Email
            let dbpassword=result[0].Password
            let id=result[0].id

            if(dbusername===Email && dbpassword===Password){
                response.send({"status":"success","id":id})
            }
            else{
                response.send({"status":"invalid_user"})
            }
            }
        else{
            response.send({"status":"error"})   
        }
    })
})
connect.get('/userdata/:id',(request,response)=>{
    let {id}=request.params
    let sql='select * from customer where id=?'
    mysqlconnection.query(sql,[id],(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})
connect.post('/chicken',(request,response)=>{
    let {product_1,kg_1,product_2,kg_2,product_3,kg_3,product_4,kg_4,id}=request.body
    let sql='insert into product(id,product_1,kg_1,product_2,kg_2,product_3,kg_3,product_4,kg_4)values(?,?,?,?,?,?,?,?,?)'
    mysqlconnection.query(sql,[id,product_1,kg_1,product_2,kg_2,product_3,kg_3,product_4,kg_4],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})
connect.put('/update/:id',(request,response)=>{
    let {id}=request.params
    let {Name,Email,Phone,Address,City,Password}=request.body
    let sql='update customer set Name=?,Email=?,Phone=?,Address=?,City=?,Password=?,username=? where id=?'
    mysqlconnection.query(sql,[Name,Email,Phone,Address,City,Password,Email,id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })

})
connect.get('/customerdetails',(request,response)=>{
    let sql='select * from customer'
    mysqlconnection.query(sql,(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})
connect.post('/delete',(request,response)=>{
    let id=request.body.id
    let sql='delete from customer where id=?'
    mysqlconnection.query(sql,[id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })
})
connect.get('/orderdetails',(request,response)=>{
    let sql='select id,Name,Address,City,Phone,product_1,kg_1,product_2,kg_2,product_3,kg_3,product_4,kg_4 from customer natural join product;'
    mysqlconnection.query(sql,(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})
connect.get('/chickenprice',(request,response)=>{
    let sql='select * from chicken'
    mysqlconnection.query(sql,(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})
connect.put('/updatechicken',(request,response)=>{
    let {chicken,boneless,liver,leg}=request.body
    let sql='update chicken set chicken=?,boneless=?,liver=?,chickenleg=?'
    mysqlconnection.query(sql,[chicken,boneless,liver,leg],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })

})
connect.put('/updatemutton',(request,response)=>{
    let {chicken,boneless,liver,leg}=request.body
    let sql='update mutton set mutton=?,boneless=?,liver=?,mutton bone=?'
    mysqlconnection.query(sql,[chicken,boneless,liver,leg],(error,result)=>{
        if(error){
            response.send({"status":"error"})
        }
        else{
            response.send({"status":"success"})
        }
    })

})
connect.listen(3010,()=>{
    console.log("your server is running in the port 3010")
})