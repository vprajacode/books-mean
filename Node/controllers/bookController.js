const express= require("express");
const router=express.Router();

var {Book}=require("../models/book");
var objId=require("mongoose").Types.ObjectId;


router.get('/',(req,res)=>{
    Book.find((err,docs)=>{
        if(!err)
        {
            res.send(docs);
        }
        else{
            console.log("somthing went wrong"+JSON.stringify(null,undefined,2));
        }
    });
});

router.post('/',(req,res)=>{
   var book=new Book({
       title:req.body.title,
       author:req.body.author,
       category:req.body.category,
       price:req.body.price,
       edition:req.body.edition
   });
   book.save((err,docs)=>{
    if(!err)
    {
        res.send(docs);
    }
    else{
        console.log("somthing went wrong"+JSON.stringify(null,undefined,2));
    }
   });
});

router.get('/:id',(req,res)=>{
    if(!objId.isValid(req.params.id))
    {
        return res.status(400).send('No matching id:${req.params.id}');
    }
    Book.findById(req.params.id,(err,docs)=>{
        if(!err)
        {
            res.send(docs);
        }
        else{
            console.log("somthing went wrong"+JSON.stringify(null,undefined,2));
        }
    });
});

router.put('/:id',(req,res)=>{
 var book={
    title:req.body.title,
    author:req.body.author,
    category:req.body.category,
    price:req.body.price,
    edition:req.body.edition
 }
 Book.findByIdAndUpdate(req.params.id,{$set:book},{new:true},(err,docs)=>{
    if(!err)
    {
        res.send(docs);
    }
    else{
        console.log("somthing went wrong"+JSON.stringify(null,undefined,2));
    }
});

});

router.delete('/:id',(req,res)=>{
    if(!objId.isValid(req.params.id))
    {
        return res.status(400).send('No matching id:${req.params.id}');
    }
    Book.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err)
        {
            res.send(docs);
        }
        else{
            console.log("somthing went wrong"+JSON.stringify(null,undefined,2));
        }
    });
});


module.exports=router;