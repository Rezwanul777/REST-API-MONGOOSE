exports.HelloGet=(req,res)=>{
   res.status(200).json({status:"Sucess",data:"Hello Get Api Server"})
}
exports.HelloPost=(req,res)=>{
   res.status(201).json({status:"Sucess",data:"Hello Post Api Server"})
}