const express=require('express');
const app=express();
const router=require("./routes/product")
const bodyParser=require('body-parser')
app.get("/",(request,response)=>{
    response.send("welcome to backend");
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());

app.use("/product",router);
app.listen(9898,'0.0.0.0',()=>{
    console.log("Server started on port 9898")
})