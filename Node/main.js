const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
//middlewares

app.use(cors());
app.use(bodyParser.json());

const {mongoose}=require("./db/conn");
 var bcontroller=require("./controllers/bookController");
 


app.listen(3000,()=>{
    console.log("server is started at:http://localhost:3000");
});

app.use("/book",bcontroller);

