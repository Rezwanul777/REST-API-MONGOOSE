const EmployModel=require('../models/EmployeesModel')

// crud
// creat
exports.InsertEmployee=(req,res)=>{
   const reqBody=req.body;
   EmployModel.create(reqBody,(err,data)=>{
   if(err){
      res.status(400).json({status:'fail',data:err})
   }
   else{
      res.status(201).json({status:'Success',data:data})
   }
})

}

//Read
exports.ReadEmployee=(req,res)=>{
let query={}
let items="name profession  remarks"
EmployModel.find(query,items,(err,data)=>{
   if(err){
      res.status(400).json({status:'fail',data:err})
   }
   else{
      res.status(200).json({status:'Success',data:data})
   }
})
}

// update

exports.UpdateEmployee=(req,res)=>{
   let id=req.params.id
   let query={_id:id}
   let reqBody=req.body;

   EmployModel.updateOne(query,reqBody,(err,data)=>{
      if(err){
         res.status(400).json({status:'fail',data:err})
      }
      else{
         res.status(200).json({status:'Success',data:data})
      }
   })

}

// delete

exports.DeleteEmployee=(req,res)=>{
   let id=req.params.id
   let query={_id:id}

   EmployModel.deleteOne(query,(err,data)=>{
      if(err){
         res.status(400).json({status:'fail',data:err})
      }
      else{
         res.status(200).json({status:'Success',data:data})
      }
   })
}