const express=require('express');
const db= require("../db")
const utils=require("../utils")
const router=express.Router();


router.get("/",(request,response)=>{
    const connection=db.connect();
    query=`select id ,title,description  from product`;
    connection.query(query,(error,data)=>{
        connection.end();
        response.send(utils.createResult(error,data))
    })
})

router.post("/",(request,response)=>{
    const {description,title}=request.body;
    const connection=db.connect();
    query=`insert into product(title, description) values('${title}','${description}')`;
    connection.query(query,(error,data)=>{
        connection.end();
        response.send(utils.createResult(error,data))
    })
})



module.exports=router