const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/BookDb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connetion successful");
}).catch((e)=>{
    console.log("connetion failed");
});

module.exports=mongoose;