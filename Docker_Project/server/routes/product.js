const express=require('express');
const db= require("../db")
const utils=require("../utils")
const router=express.Router();
var connection=db.connect();

router.get("/",(request,response)=>{

    query=`select id ,title,description  from product`;
    connection.query(query,(error,data)=>{
        
        response.send(utils.createResult(error,data))
    })
})

router.post("/",(request,response)=>{
    const {description,title}=request.body;
    query=`insert into product(description,title) values('${description}','${title}')`;
    connection.query(query,(error,data)=>{
       
        response.send(utils.createResult(error,data))
    })
})

// router.put("/:id",(request,response)=>{

//     query=`update product set description='${description}',title='${title}' where id='${id}' `;
//     connection.query(query,(error,data)=>{
       
//         response.send(utils.createResult(error,data))
//     })
// })


// router.delete("/:id",(request,response)=>{

//     query=`delete from product where id='${id}'  `;
//     connection.query(query,(error,data)=>{
       
//         response.send(utils.createResult(error,data))
//     })
// })

module.exports=router