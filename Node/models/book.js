const mongoose=require('mongoose');

var Book=mongoose.model("Book",{
    title:{type:String},
    author:{type:String},
    category:{type:String},
    price:{type:String},
    edition:{type:String}
});

module.exports={Book};