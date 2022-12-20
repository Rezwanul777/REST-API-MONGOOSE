const mongoose=require('mongoose');

const employeeSchema=mongoose.Schema({
   name:{type:String, required:true, unique:true,lowercase:true,trim:true},
   position:{type:String, required:true, lowercase:true,trim:true},
   profession:{type:String,required:true,lowercase:true,trim:true},
   remarks:{type:String,default:"No Remarks",lowercase:true,trim:true},
   date:{type:Date,default:Date.now()},
   employeeId:{type:Number},
   mobile:{
      type:String,
      validate:{
         validator:function(value){
            if(value.length!==11){
               return false
            }
            else{
               return true
            }
         },
         message:"11 digit number is required"
      },
      required: [true, 'User phone number required']
   }


},{versionKey:false})

const EmployModel=mongoose.model("Employees",employeeSchema)
module.exports=EmployModel;